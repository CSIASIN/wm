import { __ } from '@wordpress/i18n';
import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import {
	PanelBody, TextControl, SelectControl, ToggleControl,
	Spinner, TabPanel, SearchControl,
} from '@wordpress/components';
import { useState, useEffect, useCallback, useRef } from '@wordpress/element';
import './editor.scss';

const ICON_CDN  = 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.13.1/icons/';
const AJAX_DATA = window.wmblocksIconData || { ajaxUrl: 'ajaxurl', nonce: '' };
if ( ! AJAX_DATA.nonce ) {
	console.warn( '[wmblocks/bs-icon] wmblocksIconData nonce is empty. Ensure ajax-handler.php is required in functions.php.' );
}

// ── Tab groups — 3 parent tabs, each with sub-categories ─────────────────────
// "all" is always the first sub-category in every group so users can browse
// everything within that group without picking a specific sub-category.
const TAB_GROUPS = [
	{
		name:  'interface',
		title: '🖥 Interface',
		cats:  [ 'all', 'arrows', 'ui', 'media', 'files', 'devices' ],
	},
	{
		name:  'objects',
		title: '🏠 Objects',
		cats:  [ 'all', 'buildings', 'nature', 'commerce', 'people', 'misc', 'shapes' ],
	},
	{
		name:  'connect',
		title: '💬 Connect',
		cats:  [ 'all', 'communication', 'social' ],
	},
];

// When "all" sub-cat is chosen inside a group, pass this special key to PHP
// which scans only the categories belonging to that group.
// e.g. group=interface → category=arrows|ui|media|files|devices
const GROUP_ALL_KEY = {
	interface:  'arrows|ui|media|files|devices',
	objects:    'buildings|nature|commerce|people|misc|shapes',
	connect:    'communication|social',
};

// ─────────────────────────────────────────────────────────────────────────────

const COLOR_OPTS = [
	{ label: '— Inherit —',        value: '' },
	{ label: 'text-primary',       value: 'text-primary' },
	{ label: 'text-secondary',     value: 'text-secondary' },
	{ label: 'text-success',       value: 'text-success' },
	{ label: 'text-danger',        value: 'text-danger' },
	{ label: 'text-warning',       value: 'text-warning' },
	{ label: 'text-info',          value: 'text-info' },
	{ label: 'text-dark',          value: 'text-dark' },
	{ label: 'text-light',         value: 'text-light' },
	{ label: 'text-muted',         value: 'text-muted' },
	{ label: 'text-white',         value: 'text-white' },
	{ label: 'text-body',          value: 'text-body' },
	{ label: 'text-body-emphasis', value: 'text-body-emphasis' },
];

const ALIGN_OPTS = [
	{ label: '— None —',    value: '' },
	{ label: 'text-start',  value: 'text-start' },
	{ label: 'text-center', value: 'text-center' },
	{ label: 'text-end',    value: 'text-end' },
];

// ── AJAX helpers ──────────────────────────────────────────────────────────────

async function fetchSvg( name ) {
	const url = `${ AJAX_DATA.ajaxUrl }?action=wmblocks_icon_svg&nonce=${ AJAX_DATA.nonce }&name=${ encodeURIComponent( name ) }`;
	try {
		const res  = await fetch( url );
		const json = await res.json();
		return json.success ? json.data.svg : null;
	} catch { return null; }
}

async function fetchIcons( { category = 'all', search = '', page = 1 } ) {
	const normSearch = search.trim().replace( /\s+/g, ' ' );
	const params = new URLSearchParams( {
		action:   'wmblocks_icon_list',
		nonce:    AJAX_DATA.nonce,
		category,
		search:   normSearch,
		page:     String( page ),
	} );
	try {
		const res  = await fetch( `${ AJAX_DATA.ajaxUrl }?${ params }` );
		const json = await res.json();
		return json.success ? json.data : null;
	} catch { return null; }
}

// ── Icon Grid ─────────────────────────────────────────────────────────────────

function IconGrid( { onSelect, selectedName } ) {
	const [ search,      setSearch      ] = useState( '' );
	const [ page,        setPage        ] = useState( 1 );
	const [ icons,       setIcons       ] = useState( [] );
	const [ totalPages,  setTotalPages  ] = useState( 1 );
	const [ total,       setTotal       ] = useState( 0 );
	const [ loading,     setLoading     ] = useState( false );
	// activeGroup = one of TAB_GROUPS[].name
	const [ activeGroup, setActiveGroup ] = useState( 'interface' );
	// activeCat = sub-category slug within the active group, or 'all'
	const [ activeCat,   setActiveCat   ] = useState( 'all' );
	const searchTimer = useRef( null );

	const load = useCallback( async ( cat, srch, pg ) => {
		setLoading( true );
		const data = await fetchIcons( { category: cat, search: srch, page: pg } );
		if ( data ) {
			setIcons( data.icons );
			setTotalPages( data.pages );
			setTotal( data.total );
		}
		setLoading( false );
	}, [] );

	// Derive the real PHP category key from the current group + sub-cat
	const resolvedCat = ( group, cat ) =>
		cat === 'all' ? GROUP_ALL_KEY[ group ] : cat;

	// Initial load
	useEffect( () => {
		load( GROUP_ALL_KEY.interface, '', 1 );
	}, [] );

	const handleSearch = ( val ) => {
		setSearch( val );
		setPage( 1 );
		clearTimeout( searchTimer.current );
		// Search always spans ALL icons
		searchTimer.current = setTimeout( () => load( 'all', val, 1 ), 400 );
	};

	const handleGroupChange = ( groupName ) => {
		setActiveGroup( groupName );
		setActiveCat( 'all' );
		setPage( 1 );
		setSearch( '' );
		load( GROUP_ALL_KEY[ groupName ], '', 1 );
	};

	const handleCatChange = ( cat ) => {
		setActiveCat( cat );
		setPage( 1 );
		load( resolvedCat( activeGroup, cat ), search, 1 );
	};

	const handlePage = ( pg ) => {
		setPage( pg );
		load( search ? 'all' : resolvedCat( activeGroup, activeCat ), search, pg );
	};

	const currentGroup = TAB_GROUPS.find( g => g.name === activeGroup );

	// The 3 parent tabs for TabPanel
	const parentTabs = TAB_GROUPS.map( g => ( { name: g.name, title: g.title } ) );

	return (
		<div className="wmblocks-icon-picker">

			{ /* Search */ }
			<div className="wmblocks-icon-picker__search">
				<SearchControl
					value={ search }
					onChange={ handleSearch }
					placeholder={ __( 'Search all icons… (e.g. house heart)', 'wmblocks' ) }
					hideLabelFromVision
				/>
				<div className="wmblocks-icon-picker__count">
					{ loading
						? __( 'Loading…', 'wmblocks' )
						: `${ total } ${ __( 'icons', 'wmblocks' ) }${ search ? ` ${ __( 'matching', 'wmblocks' ) } "${search}"` : '' }`
					}
				</div>
			</div>

			{ /* Only show group tabs + sub-cat pills when not searching */ }
			{ ! search && (
				<>
					{ /* Parent TabPanel — 3 groups */ }
					<TabPanel
						className="wmblocks-icon-picker__tabs"
						activeClass="is-active"
						tabs={ parentTabs }
						onSelect={ handleGroupChange }
						initialTabName={ activeGroup }
					>
						{ () => null }
					</TabPanel>

					{ /* Sub-category pills — scrollable single row */ }
					{ currentGroup && (
						<div className="wmblocks-icon-picker__subcats">
							{ currentGroup.cats.map( cat => (
								<button
									key={ cat }
									className={ `wmblocks-icon-picker__subcat-pill${ activeCat === cat ? ' is-active' : '' }` }
									onMouseDown={ e => { e.preventDefault(); handleCatChange( cat ); } }
								>
									{ cat === 'all' ? __( 'All', 'wmblocks' ) : cat }
								</button>
							) ) }
						</div>
					) }
				</>
			) }

			{ /* Icon grid */ }
			<div className="wmblocks-icon-picker__grid-wrap">
				{ loading && (
					<div className="wmblocks-icon-picker__loading">
						<Spinner />
					</div>
				) }
				<div className="wmblocks-icon-picker__grid">
					{ icons.map( name => (
						<button
							key={ name }
							title={ name }
							className={ `wmblocks-icon-btn${ selectedName === name ? ' is-selected' : '' }` }
							onMouseDown={ e => { e.preventDefault(); onSelect( name ); } }
						>
							<img
								src={ `${ ICON_CDN }${ name }.svg` }
								alt={ name }
								width="20" height="20"
								loading="lazy"
							/>
						</button>
					) ) }
				</div>
				{ ! loading && icons.length === 0 && (
					<div className="wmblocks-icon-picker__empty">
						{ __( 'No icons found.', 'wmblocks' ) }
					</div>
				) }
			</div>

			{ /* Pagination */ }
			{ totalPages > 1 && (
				<div className="wmblocks-icon-picker__pagination">
					<button
						className="wmblocks-icon-picker__page-btn"
						disabled={ page === 1 }
						onMouseDown={ e => { e.preventDefault(); if ( page > 1 ) handlePage( page - 1 ); } }
					>‹</button>
					<span className="wmblocks-icon-picker__page-info">
						{ page } / { totalPages }
					</span>
					<button
						className="wmblocks-icon-picker__page-btn"
						disabled={ page === totalPages }
						onMouseDown={ e => { e.preventDefault(); if ( page < totalPages ) handlePage( page + 1 ); } }
					>›</button>
				</div>
			) }
		</div>
	);
}

// ── Main edit ─────────────────────────────────────────────────────────────────

export default function Edit( { attributes, setAttributes } ) {
	const { iconName, iconSvg, size, textColor, align, linkUrl, linkTarget, ariaLabel, customClass } = attributes;
	const [ loadingSvg, setLoadingSvg ] = useState( false );

	useEffect( () => {
		if ( ! iconName ) return;
		if ( iconSvg && iconSvg.includes( `<!-- ${ iconName } -->` ) ) return;
		setLoadingSvg( true );
		fetchSvg( iconName ).then( svg => {
			if ( svg ) setAttributes( { iconSvg: `<!-- ${ iconName } -->${ svg }` } );
			setLoadingSvg( false );
		} );
	}, [ iconName ] );

	const displaySvg = iconSvg
		? iconSvg.replace( /^<!--[^>]+-->/, '' )
			.replace( /width="[^"]*"/, `width="${ size }"` )
			.replace( /height="[^"]*"/, `height="${ size }"` )
		: null;

	const wrapClass = [ textColor, align, customClass ].filter( Boolean ).join( ' ' );
	const blockProps = useBlockProps( {
		className: [ 'wmblocks-bs-icon-wrapper', wrapClass ].filter( Boolean ).join( ' ' ),
	} );

	return (
		<>
			<InspectorControls>

				<PanelBody title={ __( 'Choose Icon', 'wmblocks' ) } initialOpen={ true }>
					{ iconName && (
						<div className="wmblocks-icon-picker__selected-badge">
							<img src={ `${ ICON_CDN }${ iconName }.svg` } width="24" height="24" alt="" />
							<code>bi-{ iconName }</code>
						</div>
					) }
					<IconGrid
						onSelect={ name => setAttributes( { iconName: name, iconSvg: '' } ) }
						selectedName={ iconName }
					/>
				</PanelBody>

				<PanelBody title={ __( 'Appearance', 'wmblocks' ) } initialOpen={ true }>
					<TextControl
						label={ __( 'Size', 'wmblocks' ) }
						value={ size }
						onChange={ v => setAttributes( { size: v } ) }
						placeholder="2rem"
						help={ __( 'Any CSS unit: 2rem, 48px, 3em', 'wmblocks' ) }
					/>
					<SelectControl
						label={ __( 'Color', 'wmblocks' ) }
						value={ textColor }
						options={ COLOR_OPTS }
						onChange={ v => setAttributes( { textColor: v } ) }
					/>
					<SelectControl
						label={ __( 'Alignment', 'wmblocks' ) }
						value={ align }
						options={ ALIGN_OPTS }
						onChange={ v => setAttributes( { align: v } ) }
					/>
				</PanelBody>

				<PanelBody title={ __( 'Link', 'wmblocks' ) } initialOpen={ false }>
					<TextControl label={ __( 'URL', 'wmblocks' ) } value={ linkUrl } onChange={ v => setAttributes( { linkUrl: v } ) } type="url" placeholder="https://" />
					<ToggleControl label={ __( 'Open in new tab', 'wmblocks' ) } checked={ !! linkTarget } onChange={ v => setAttributes( { linkTarget: v } ) } />
					<TextControl label={ __( 'Aria Label', 'wmblocks' ) } value={ ariaLabel } onChange={ v => setAttributes( { ariaLabel: v } ) }
						help={ __( 'Required for accessibility on linked icons.', 'wmblocks' ) } />
				</PanelBody>

				<PanelBody title={ __( 'Advanced', 'wmblocks' ) } initialOpen={ false }>
					<TextControl label={ __( 'Extra Classes', 'wmblocks' ) } value={ customClass } onChange={ v => setAttributes( { customClass: v } ) } />
				</PanelBody>

			</InspectorControls>

			<div { ...blockProps }>
				{ loadingSvg && <Spinner /> }
				{ ! loadingSvg && displaySvg && (
					<span
						className={ textColor || undefined }
						dangerouslySetInnerHTML={ { __html: displaySvg } }
						title={ iconName }
					/>
				) }
				{ ! loadingSvg && ! displaySvg && (
					<div className="wmblocks-bs-icon-placeholder">
						<span>⬡</span>{ __( 'Select an icon →', 'wmblocks' ) }
					</div>
				) }
			</div>
		</>
	);
}