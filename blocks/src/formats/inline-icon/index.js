/**
 * Bootstrap Icon — Inline Format
 *
 * Storage: <span class="wm-inline-icon" data-icon="NAME">&#xFEFF;</span>
 * Editor preview: CSS background-image injected into both main doc + iframe
 * Frontend: inline-icon-render.php replaces span with real inline SVG
 */
import { registerFormatType, applyFormat, getActiveFormats, insert, create } from '@wordpress/rich-text';
import { RichTextToolbarButton } from '@wordpress/block-editor';
import { Modal, SearchControl, Spinner, TabPanel, Button } from '@wordpress/components';
import { useState, useEffect, useCallback, useRef } from '@wordpress/element';
import { __ } from '@wordpress/i18n';

const FORMAT_NAME = 'wmblocks/bs-inline-icon';
const ICON_CDN    = 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.13.1/icons/';
const AJAX_DATA   = window.wmblocksIconData || { ajaxUrl: '/wp-admin/admin-ajax.php', nonce: '' };
const ZWNBSP      = '\uFEFF';

// ── Tab groups ────────────────────────────────────────────────────────────────
const TAB_GROUPS = [
	{ name: 'interface', title: '🖥 Interface', cats: [ 'all', 'arrows', 'ui', 'media', 'files', 'devices' ] },
	{ name: 'objects',   title: '🏠 Objects',   cats: [ 'all', 'buildings', 'nature', 'commerce', 'people', 'misc', 'shapes' ] },
	{ name: 'connect',   title: '💬 Connect',   cats: [ 'all', 'communication', 'social' ] },
];
const GROUP_ALL_KEY = {
	interface: 'arrows|ui|media|files|devices',
	objects:   'buildings|nature|commerce|people|misc|shapes',
	connect:   'communication|social',
};

// ── AJAX helpers ──────────────────────────────────────────────────────────────
async function fetchIcons( { category = 'all', search = '', page = 1, perPage = 80 } ) {
	const params = new URLSearchParams( {
		action:   'wmblocks_icon_list',
		nonce:    AJAX_DATA.nonce,
		category,
		search:   search.trim().replace( /\s+/g, ' ' ),
		page:     String( page ),
		per_page: String( perPage ),
	} );
	try {
		const r = await fetch( `${ AJAX_DATA.ajaxUrl }?${ params }` );
		const j = await r.json();
		return j.success ? j.data : null;
	} catch { return null; }
}

// ── Editor SVG preview — CSS only, never touch contentEditable DOM ────────────
//
// CRITICAL: We must NEVER inject anything into the contentEditable span.
// Gutenberg serialises the contentEditable DOM to produce post_content.
// If we inject an SVG into the span, Gutenberg saves the SVG (broken by
// its HTML serialiser) into post_content — which is exactly the bug.
//
// Solution: inject a <style> tag with background-image rules into every
// document (main + iframe). The span shows the icon via CSS background-image
// without touching the DOM content Gutenberg reads for serialisation.

const injectedIcons = new Set();

function getEditorDocs() {
	const docs = [ document ];
	document.querySelectorAll( 'iframe' ).forEach( f => {
		try {
			if ( f.contentDocument && f.contentDocument !== document ) {
				docs.push( f.contentDocument );
			}
		} catch {}
	} );
	return docs;
}

function injectIconStyle( name ) {
	if ( ! name ) return;

	// Always re-inject into all docs — new iframes may have appeared
	const css = [
		`.wm-inline-icon[data-icon="${ name }"] {`,
		`  background-image: url('${ ICON_CDN }${ encodeURIComponent( name ) }.svg');`,
		`  background-repeat: no-repeat;`,
		`  background-size: contain;`,
		`  background-position: center;`,
		`  display: inline-block;`,
		`  width: 1em;`,
		`  height: 1em;`,
		`  min-width: 1em;`,
		`  color: transparent;`,
		`  vertical-align: -0.125em;`,
		`  font-size: inherit;`,
		`  line-height: 1;`,
		`}`,
	].join( '\n' );

	if ( ! injectedIcons.has( name ) ) {
		injectedIcons.add( name );
	}

	getEditorDocs().forEach( doc => {
		try {
			let styleEl = doc.getElementById( 'wm-inline-icon-styles' );
			if ( ! styleEl ) {
				styleEl    = doc.createElement( 'style' );
				styleEl.id = 'wm-inline-icon-styles';
				( doc.head || doc.documentElement ).appendChild( styleEl );
			}
			// Only add if not already present for this icon
			if ( ! styleEl.textContent.includes( `data-icon="${ name }"` ) ) {
				styleEl.textContent += css;
			}
		} catch {}
	} );
}

function scanAndInjectStyles() {
	getEditorDocs().forEach( doc => {
		try {
			doc.querySelectorAll( '.wm-inline-icon[data-icon]' ).forEach( span => {
				injectIconStyle( span.getAttribute( 'data-icon' ) );
			} );
		} catch {}
	} );
}

// Watch main document for new icon spans
new MutationObserver( scanAndInjectStyles ).observe( document.body, {
	childList: true,
	subtree:   true,
} );

// Poll for editor iframes and observe them too
const iframeTimer = setInterval( () => {
	const iframes = Array.from( document.querySelectorAll( 'iframe' ) );
	iframes.forEach( f => {
		try {
			if ( f.contentDocument?.body && ! f._wmStyleObserving ) {
				f._wmStyleObserving = true;
				// Inject all already-known icons into the new iframe doc
				injectedIcons.forEach( name => injectIconStyle( name ) );
				// Watch for new icons inside this iframe
				new MutationObserver( scanAndInjectStyles ).observe(
					f.contentDocument.body,
					{ childList: true, subtree: true }
				);
				scanAndInjectStyles();
			}
		} catch {}
	} );
	if ( iframes.length ) clearInterval( iframeTimer );
}, 300 );

// wp.data subscriber to catch editor state changes
if ( window.wp?.data ) {
	let scanDebounce;
	wp.data.subscribe( () => {
		clearTimeout( scanDebounce );
		scanDebounce = setTimeout( scanAndInjectStyles, 150 );
	} );
}



// ── Icon Modal ────────────────────────────────────────────────────────────────
function IconModal( { onPick, onClose } ) {
	const [ search,      setSearch      ] = useState( '' );
	const [ page,        setPage        ] = useState( 1 );
	const [ icons,       setIcons       ] = useState( [] );
	const [ totalPages,  setTotalPages  ] = useState( 1 );
	const [ total,       setTotal       ] = useState( 0 );
	const [ loading,     setLoading     ] = useState( false );
	const [ activeGroup, setActiveGroup ] = useState( 'interface' );
	const [ activeCat,   setActiveCat   ] = useState( 'all' );
	const [ hovered,     setHovered     ] = useState( '' );
	const timer = useRef( null );

	const resolvedCat = ( g, c ) => c === 'all' ? GROUP_ALL_KEY[ g ] : c;

	const load = useCallback( async ( cat, srch, pg ) => {
		setLoading( true );
		const data = await fetchIcons( { category: cat, search: srch, page: pg, perPage: 80 } );
		if ( data ) { setIcons( data.icons ); setTotalPages( data.pages ); setTotal( data.total ); }
		setLoading( false );
	}, [] );

	useEffect( () => { load( GROUP_ALL_KEY.interface, '', 1 ); }, [] );

	const handleSearch = v => {
		setSearch( v );
		setPage( 1 );
		clearTimeout( timer.current );
		timer.current = setTimeout( () => load( 'all', v, 1 ), 350 );
	};
	const handleGroup = g => {
		setActiveGroup( g ); setActiveCat( 'all' ); setPage( 1 ); setSearch( '' );
		load( GROUP_ALL_KEY[ g ], '', 1 );
	};
	const handleCat = c => {
		setActiveCat( c ); setPage( 1 );
		load( resolvedCat( activeGroup, c ), search, 1 );
	};
	const handlePage = d => {
		const p = page + d; setPage( p );
		load( search ? 'all' : resolvedCat( activeGroup, activeCat ), search, p );
	};

	const currentGroup = TAB_GROUPS.find( g => g.name === activeGroup );
	const parentTabs   = TAB_GROUPS.map( g => ( { name: g.name, title: g.title } ) );

	return (
		<Modal
			title={ __( 'Insert Bootstrap Icon', 'wmblocks' ) }
			onRequestClose={ onClose }
			className="wm-icon-modal"
			size="large"
			isFullScreen={ false }
		>
			<div className="wm-icon-modal__body">

				{ /* Search + count row */ }
				<div className="wm-icon-modal__search-row">
					<div className="wm-icon-modal__search-wrap">
						<SearchControl
							value={ search }
							onChange={ handleSearch }
							placeholder={ __( 'Search all 1500+ icons… e.g. house fill, arrow up', 'wmblocks' ) }
							hideLabelFromVision
						/>
					</div>
					<span className="wm-icon-modal__count">
						{ loading ? <Spinner /> : `${ total } ${ __( 'icons', 'wmblocks' ) }${ search ? ` ${ __( 'found', 'wmblocks' ) }` : '' }` }
					</span>
				</div>

				{ /* Hovered icon name hint */ }
				<div className="wm-icon-modal__hint">
					{ hovered
						? <><img src={ `${ ICON_CDN }${ hovered }.svg` } width="16" height="16" alt="" /> <code>{ hovered }</code></>
						: <span style={ { color: '#aaa' } }>{ __( 'Hover an icon to see its name, click to insert', 'wmblocks' ) }</span>
					}
				</div>

				{ /* Group tabs — only when not searching */ }
				{ ! search && (
					<>
						<TabPanel
							className="wm-icon-modal__tabs"
							activeClass="is-active"
							tabs={ parentTabs }
							onSelect={ handleGroup }
							initialTabName={ activeGroup }
						>{ () => null }</TabPanel>

						{ /* Sub-category pills */ }
						<div className="wm-icon-modal__subcats">
							{ currentGroup?.cats.map( cat => (
								<button key={ cat }
									className={ `wm-icon-modal__pill${ activeCat === cat ? ' is-active' : '' }` }
									onMouseDown={ e => { e.preventDefault(); handleCat( cat ); } }
								>{ cat === 'all' ? __( 'All', 'wmblocks' ) : cat }</button>
							) ) }
						</div>
					</>
				) }

				{ /* Icon grid */ }
				<div className="wm-icon-modal__grid-wrap">
					{ loading && (
						<div className="wm-icon-modal__loading"><Spinner /></div>
					) }

					{ ! loading && icons.length === 0 && (
						<div className="wm-icon-modal__empty">
							<span style={ { fontSize: 48 } }>🔍</span>
							<p>{ __( 'No icons found for', 'wmblocks' ) } <strong>"{ search }"</strong></p>
							<p style={ { color: '#aaa', fontSize: 12 } }>{ __( 'Try a different keyword, e.g. "arrow" or "house"', 'wmblocks' ) }</p>
						</div>
					) }

					<div className="wm-icon-modal__grid">
						{ icons.map( name => (
							<button
								key={ name }
								title={ name }
								className="wm-icon-modal__icon-btn"
								onClick={ () => onPick( name ) }
								onMouseEnter={ () => setHovered( name ) }
								onMouseLeave={ () => setHovered( '' ) }
							>
								<img
									src={ `${ ICON_CDN }${ name }.svg` }
									alt={ name }
									width="24"
									height="24"
									loading="lazy"
								/>
							</button>
						) ) }
					</div>
				</div>

				{ /* Pagination */ }
				{ totalPages > 1 && (
					<div className="wm-icon-modal__pagination">
						<Button
							variant="secondary"
							disabled={ page === 1 }
							onClick={ () => { if ( page > 1 ) handlePage( -1 ); } }
						>← { __( 'Prev', 'wmblocks' ) }</Button>
						<span className="wm-icon-modal__page-info">
							{ __( 'Page', 'wmblocks' ) } { page } / { totalPages }
						</span>
						<Button
							variant="secondary"
							disabled={ page === totalPages }
							onClick={ () => { if ( page < totalPages ) handlePage( 1 ); } }
						>{ __( 'Next', 'wmblocks' ) } →</Button>
					</div>
				) }

			</div>
		</Modal>
	);
}

// ── Toolbar button ────────────────────────────────────────────────────────────
function InlineIconButton( { value, onChange, isActive } ) {
	const [ modalOpen, setModalOpen ] = useState( false );

	const activeIconName = ( getActiveFormats( value ) || [] )
		.find( f => f.type === FORMAT_NAME )
		?.attributes?.[ 'data-icon' ] || '';

	const handlePick = ( name ) => {
		setModalOpen( false );
		injectIconStyle( name );
		const charValue = create( { text: ZWNBSP } );
		const formatted = applyFormat(
			{ ...charValue, start: 0, end: 1 },
			{ type: FORMAT_NAME, attributes: { 'data-icon': name } }
		);
		onChange( insert( value, formatted ) );
	};

	return (
		<>
			<RichTextToolbarButton
				icon={ () => (
					<span style={ {
						fontWeight: 700, fontSize: 13, padding: '0 4px',
						color:        isActive ? '#3858e9' : 'currentColor',
						border:       `1px solid ${ isActive ? '#3858e9' : 'transparent' }`,
						borderRadius: 3,
					} }>
						{ activeIconName
							? <img src={ `${ ICON_CDN }${ activeIconName }.svg` } width="16" height="16" alt={ activeIconName } style={ { verticalAlign: 'middle' } } />
							: '⬡'
						}
					</span>
				) }
				title={ __( 'Insert Bootstrap Icon', 'wmblocks' ) }
				onClick={ () => setModalOpen( true ) }
				isActive={ isActive }
			/>

			{ modalOpen && (
				<IconModal
					onPick={ handlePick }
					onClose={ () => setModalOpen( false ) }
				/>
			) }
		</>
	);
}

// ── Register format ───────────────────────────────────────────────────────────
registerFormatType( FORMAT_NAME, {
	title:      __( 'Bootstrap Icon', 'wmblocks' ),
	tagName:    'span',
	className:  'wm-inline-icon',
	attributes: { 'data-icon': 'data-icon' },
	edit( { value, onChange, isActive } ) {
		return <InlineIconButton value={ value } onChange={ onChange } isActive={ isActive } />;
	},
} );