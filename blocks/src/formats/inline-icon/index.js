/**
 * Bootstrap Icon — Inline Format
 *
 * Storage: <span class="wm-inline-icon" data-icon="NAME">&#xFEFF;</span>
 * Editor preview: editor.scss targets the span via data-icon attribute selector
 *                 and sets background-image to the CDN SVG URL at build time
 *                 for commonly used icons. Dynamic icons get a style injected
 *                 into BOTH the main document and the editor iframe document.
 * Frontend: inline-icon-render.php replaces span with real inline SVG.
 */
import { registerFormatType, applyFormat, getActiveFormats, insert, create } from '@wordpress/rich-text';
import { RichTextToolbarButton } from '@wordpress/block-editor';
import { Popover, SearchControl, Spinner, TabPanel } from '@wordpress/components';
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
async function fetchIcons( { category = 'all', search = '', page = 1 } ) {
	const params = new URLSearchParams( {
		action: 'wmblocks_icon_list', nonce: AJAX_DATA.nonce,
		category, search: search.trim().replace( /\s+/g, ' ' ), page: String( page ),
	} );
	try {
		const r = await fetch( `${ AJAX_DATA.ajaxUrl }?${ params }` );
		const j = await r.json();
		return j.success ? j.data : null;
	} catch { return null; }
}

// ── Editor preview: inject CSS into all documents ────────────────────────────
// Gutenberg renders the block editor in an <iframe> (the "canvas").
// Styles added to the main document head do NOT reach the iframe.
// We must inject into every document where icon spans may appear.

const injectedIcons = new Set();

function getEditorDocuments() {
	const docs = [ document ];
	// Find the Gutenberg editor canvas iframe
	document.querySelectorAll( 'iframe[name="editor-canvas"], iframe.editor-canvas__iframe, iframe[title]' )
		.forEach( iframe => {
			try {
				if ( iframe.contentDocument ) docs.push( iframe.contentDocument );
			} catch {}
		} );
	return docs;
}

function injectIconStyle( name ) {
	if ( injectedIcons.has( name ) ) return;
	injectedIcons.add( name );

	const svgUrl = `${ ICON_CDN }${ encodeURIComponent( name ) }.svg`;
	const css    = `
.wm-inline-icon[data-icon="${ name }"] {
	display: inline-block !important;
	width: 1em !important;
	height: 1em !important;
	min-width: 1em !important;
	background-image: url('${ svgUrl }') !important;
	background-repeat: no-repeat !important;
	background-size: contain !important;
	background-position: center !important;
	vertical-align: -0.125em !important;
	color: transparent !important;
	font-size: inherit !important;
	line-height: 1 !important;
}`;

	// Inject into ALL documents (main + any iframes)
	getEditorDocuments().forEach( doc => {
		let styleTag = doc.getElementById( 'wm-inline-icon-styles' );
		if ( ! styleTag ) {
			styleTag    = doc.createElement( 'style' );
			styleTag.id = 'wm-inline-icon-styles';
			doc.head?.appendChild( styleTag );
		}
		styleTag.textContent += css;
	} );
}

// Watch for new icon spans in ALL documents and inject their styles
function scanForNewIcons() {
	getEditorDocuments().forEach( doc => {
		doc.querySelectorAll( '.wm-inline-icon[data-icon]' ).forEach( span => {
			injectIconStyle( span.getAttribute( 'data-icon' ) );
		} );
	} );
}

// Observe main document — also re-check for new iframes being added
new MutationObserver( scanForNewIcons ).observe( document.body, { childList: true, subtree: true } );

// Re-scan periodically for iframe mount (iframe loads async after script runs)
const iframeCheckInterval = setInterval( () => {
	scanForNewIcons();
	// Stop polling once we find the editor iframe
	if ( document.querySelector( 'iframe[name="editor-canvas"], iframe.editor-canvas__iframe' ) ) {
		clearInterval( iframeCheckInterval );
		// Start observing the iframe's document too
		const iframe = document.querySelector( 'iframe[name="editor-canvas"], iframe.editor-canvas__iframe' );
		try {
			if ( iframe?.contentDocument?.body ) {
				new MutationObserver( scanForNewIcons ).observe(
					iframe.contentDocument.body,
					{ childList: true, subtree: true }
				);
			}
		} catch {}
	}
}, 500 );

// ── Icon picker ───────────────────────────────────────────────────────────────
function InlineIconPicker( { onPick } ) {
	const [ search,      setSearch      ] = useState( '' );
	const [ page,        setPage        ] = useState( 1 );
	const [ icons,       setIcons       ] = useState( [] );
	const [ totalPages,  setTotalPages  ] = useState( 1 );
	const [ total,       setTotal       ] = useState( 0 );
	const [ loading,     setLoading     ] = useState( false );
	const [ activeGroup, setActiveGroup ] = useState( 'interface' );
	const [ activeCat,   setActiveCat   ] = useState( 'all' );
	const timer = useRef( null );

	const resolvedCat = ( g, c ) => c === 'all' ? GROUP_ALL_KEY[ g ] : c;
	const load = useCallback( async ( cat, srch, pg ) => {
		setLoading( true );
		const data = await fetchIcons( { category: cat, search: srch, page: pg } );
		if ( data ) { setIcons( data.icons ); setTotalPages( data.pages ); setTotal( data.total ); }
		setLoading( false );
	}, [] );

	useEffect( () => { load( GROUP_ALL_KEY.interface, '', 1 ); }, [] );

	const handleSearch = v => { setSearch( v ); setPage( 1 ); clearTimeout( timer.current ); timer.current = setTimeout( () => load( 'all', v, 1 ), 350 ); };
	const handleGroup  = g => { setActiveGroup( g ); setActiveCat( 'all' ); setPage( 1 ); setSearch( '' ); load( GROUP_ALL_KEY[ g ], '', 1 ); };
	const handleCat    = c => { setActiveCat( c ); setPage( 1 ); load( resolvedCat( activeGroup, c ), '', 1 ); };
	const handlePage   = d => { const p = page + d; setPage( p ); load( search ? 'all' : resolvedCat( activeGroup, activeCat ), search, p ); };

	const currentGroup = TAB_GROUPS.find( g => g.name === activeGroup );
	const parentTabs   = TAB_GROUPS.map( g => ( { name: g.name, title: g.title } ) );

	return (
		<div className="wm-inline-icon-picker">
			<div className="wm-inline-icon-picker__search">
				<SearchControl value={ search } onChange={ handleSearch }
					placeholder={ __( 'Search icons…', 'wmblocks' ) } hideLabelFromVision />
				<span className="wm-inline-icon-picker__count">{ loading ? '…' : `${ total } icons` }</span>
			</div>
			{ ! search && (
				<>
					<TabPanel className="wm-inline-icon-picker__tabs" activeClass="is-active"
						tabs={ parentTabs } onSelect={ handleGroup } initialTabName={ activeGroup }
					>{ () => null }</TabPanel>
					<div className="wm-inline-icon-picker__subcats">
						{ currentGroup?.cats.map( cat => (
							<button key={ cat }
								className={ `wm-inline-icon-picker__pill${ activeCat === cat ? ' is-active' : '' }` }
								onMouseDown={ e => { e.preventDefault(); handleCat( cat ); } }
							>{ cat === 'all' ? 'All' : cat }</button>
						) ) }
					</div>
				</>
			) }
			<div className="wm-inline-icon-picker__grid-wrap">
				{ loading && <div className="wm-inline-icon-picker__spinner"><Spinner /></div> }
				<div className="wm-inline-icon-picker__grid">
					{ icons.map( name => (
						<button key={ name } title={ name } className="wm-inline-icon-picker__btn"
							onMouseDown={ e => { e.preventDefault(); onPick( name ); } }
						>
							<img src={ `${ ICON_CDN }${ name }.svg` } alt={ name } width="16" height="16" loading="lazy" />
						</button>
					) ) }
				</div>
				{ ! loading && icons.length === 0 && <p className="wm-inline-icon-picker__empty">{ __( 'No icons found.', 'wmblocks' ) }</p> }
			</div>
			{ totalPages > 1 && (
				<div className="wm-inline-icon-picker__pager">
					<button disabled={ page === 1 }         onMouseDown={ e => { e.preventDefault(); if ( page > 1 )           handlePage( -1 ); } }>‹</button>
					<span>{ page } / { totalPages }</span>
					<button disabled={ page === totalPages } onMouseDown={ e => { e.preventDefault(); if ( page < totalPages ) handlePage(  1 ); } }>›</button>
				</div>
			) }
		</div>
	);
}

// ── Toolbar button ────────────────────────────────────────────────────────────
function InlineIconButton( { value, onChange, isActive } ) {
	const [ open, setOpen ] = useState( false );

	const activeIconName = ( getActiveFormats( value ) || [] )
		.find( f => f.type === FORMAT_NAME )
		?.attributes?.[ 'data-icon' ] || '';

	const handlePick = ( name ) => {
		setOpen( false );
		injectIconStyle( name ); // inject CSS immediately on insert
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
					<span style={ { fontWeight:700, fontSize:13, padding:'0 3px',
						color: isActive ? '#3858e9' : 'currentColor',
						border: `1px solid ${ isActive ? '#3858e9' : 'transparent' }`,
						borderRadius: 3 } }>⬡</span>
				) }
				title={ __( 'Insert Bootstrap Icon', 'wmblocks' ) }
				onClick={ () => setOpen( v => ! v ) }
				isActive={ isActive }
			/>
			{ open && (
				<Popover placement="bottom-start" onClose={ () => setOpen( false ) }
					focusOnMount={ false } noArrow style={ { zIndex: 999999 } }
				>
					<div className="wm-inline-icon-popover">
						<div className="wm-inline-icon-popover__header">
							<span>{ __( 'Insert Icon', 'wmblocks' ) }</span>
							{ activeIconName && (
								<span style={ { display:'flex', alignItems:'center', gap:4 } }>
									<img src={ `${ ICON_CDN }${ activeIconName }.svg` } width="14" height="14" alt="" />
									<code style={ { fontSize:10, color:'#aaa' } }>{ activeIconName }</code>
								</span>
							) }
						</div>
						<InlineIconPicker onPick={ handlePick } />
					</div>
				</Popover>
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