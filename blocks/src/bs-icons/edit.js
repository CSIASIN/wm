import { __ } from '@wordpress/i18n';
import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, TextControl, SelectControl, ToggleControl, RangeControl, Spinner } from '@wordpress/components';
import { useState, useEffect, useCallback, useRef } from '@wordpress/element';
import './editor.scss';

const ICON_CDN  = 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.13.1/icons/';
// wmblocksIconData is localised by ajax-handler.php via wp_localize_script / wp_add_inline_script.
// If nonce is empty the AJAX calls will 403 — check ajax-handler.php is required in functions.php.
const AJAX_DATA = window.wmblocksIconData || { ajaxUrl: 'ajaxurl', nonce: ''};
if ( ! AJAX_DATA.nonce ) {
	console.warn( '[wmblocks/bs-icon] wmblocksIconData nonce is empty. Make sure ajax-handler.php is required in functions.php.' );
}
const PER_PAGE  = 48;

const COLOR_OPTS = [
	{ label: '— Inherit —',      value: '' },
	{ label: 'text-primary',     value: 'text-primary' },
	{ label: 'text-secondary',   value: 'text-secondary' },
	{ label: 'text-success',     value: 'text-success' },
	{ label: 'text-danger',      value: 'text-danger' },
	{ label: 'text-warning',     value: 'text-warning' },
	{ label: 'text-info',        value: 'text-info' },
	{ label: 'text-dark',        value: 'text-dark' },
	{ label: 'text-light',       value: 'text-light' },
	{ label: 'text-muted',       value: 'text-muted' },
	{ label: 'text-white',       value: 'text-white' },
	{ label: 'text-body',        value: 'text-body' },
	{ label: 'text-body-emphasis', value: 'text-body-emphasis' },
];
const ALIGN_OPTS = [
	{ label: '— None —',    value: '' },
	{ label: 'text-start',  value: 'text-start' },
	{ label: 'text-center', value: 'text-center' },
	{ label: 'text-end',    value: 'text-end' },
];

// Fetch SVG via AJAX (with transient cache on server side)
async function fetchSvg( name ) {
	const url = `${ AJAX_DATA.ajaxUrl }?action=wmblocks_icon_svg&nonce=${ AJAX_DATA.nonce }&name=${ encodeURIComponent( name ) }`;
	try {
		const res  = await fetch( url );
		const json = await res.json();
		return json.success ? json.data.svg : null;
	} catch { return null; }
}

// Fetch icon list page via AJAX
async function fetchIcons( { category = 'all', search = '', page = 1 } ) {
	const params = new URLSearchParams( {
		action:   'wmblocks_icon_list',
		nonce:    AJAX_DATA.nonce,
		category, search,
		page:     String( page ),
	} );
	try {
		const res  = await fetch( `${ AJAX_DATA.ajaxUrl }?${ params }` );
		const json = await res.json();
		return json.success ? json.data : null;
	} catch { return null; }
}

// ── Icon Grid ────────────────────────────────────────────────────────────────
function IconGrid( { onSelect, selectedName } ) {
	const [ category,   setCategory   ] = useState( 'all' );
	const [ search,     setSearch     ] = useState( '' );
	const [ page,       setPage       ] = useState( 1 );
	const [ icons,      setIcons      ] = useState( [] );
	const [ totalPages, setTotalPages ] = useState( 1 );
	const [ total,      setTotal      ] = useState( 0 );
	const [ loading,    setLoading    ] = useState( false );
	const [ categories, setCategories ] = useState( [ 'all' ] );
	const searchTimer = useRef( null );

	const load = useCallback( async ( cat, srch, pg ) => {
		setLoading( true );
		const data = await fetchIcons( { category: cat, search: srch, page: pg } );
		if ( data ) {
			setIcons( data.icons );
			setTotalPages( data.pages );
			setTotal( data.total );
			if ( data.categories ) setCategories( data.categories );
		}
		setLoading( false );
	}, [] );

	useEffect( () => { load( category, search, page ); }, [] );

	const handleSearch = ( val ) => {
		setSearch( val );
		setPage( 1 );
		clearTimeout( searchTimer.current );
		searchTimer.current = setTimeout( () => load( category, val, 1 ), 400 );
	};

	const handleCategory = ( cat ) => {
		setCategory( cat );
		setPage( 1 );
		setSearch( '' );
		load( cat, '', 1 );
	};

	const handlePage = ( pg ) => {
		setPage( pg );
		load( category, search, pg );
	};

	return (
		<div className="wmblocks-icon-picker">

			{ /* Search */ }
			<div style={ { padding: '8px', borderBottom: '1px solid #e9ecef' } }>
				<input
					type="search"
					value={ search }
					onChange={ e => handleSearch( e.target.value ) }
					placeholder={ __( 'Search icons…', 'wmblocks' ) }
					style={ { width: '100%', padding: '6px 10px', border: '1px solid #ddd', borderRadius: '4px', fontSize: '13px', outline: 'none', boxSizing: 'border-box' } }
				/>
				{ total > 0 && (
					<div style={ { fontSize: '10px', color: '#adb5bd', marginTop: '4px' } }>
						{ total } { __( 'icons', 'wmblocks' ) }
						{ search && ` ${ __( 'matching', 'wmblocks' ) } "${ search }"` }
					</div>
				) }
			</div>

			{ /* Category tabs */ }
			<div style={ { display: 'flex', overflowX: 'auto', borderBottom: '1px solid #333', background: '#f8f9fa' } }>
				{ categories.map( cat => (
					<button key={ cat }
						onMouseDown={ e => { e.preventDefault(); handleCategory( cat ); } }
						style={ {
							padding: '6px 10px', border: 'none', cursor: 'pointer', whiteSpace: 'nowrap',
							background: category === cat ? '#fff' : 'transparent',
							borderBottom: category === cat ? '2px solid #0d6efd' : '2px solid transparent',
							fontSize: '11px', color: category === cat ? '#0d6efd' : '#555',
							fontWeight: category === cat ? 600 : 400, flexShrink: 0,
						} }
					>
						{ cat }
					</button>
				) ) }
			</div>

			{ /* Icon grid */ }
			<div style={ { padding: '8px', minHeight: '160px', position: 'relative' } }>
				{ loading && (
					<div style={ { position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(255,255,255,0.8)', zIndex: 2 } }>
						<Spinner />
					</div>
				) }
				<div style={ { display: 'grid', gridTemplateColumns: 'repeat(8, 1fr)', gap: '4px' } }>
					{ icons.map( name => (
						<button key={ name }
							title={ name }
							onMouseDown={ e => { e.preventDefault(); onSelect( name ); } }
							style={ {
								width: '100%', aspectRatio: '1', border: '1px solid',
								borderColor: selectedName === name ? '#0d6efd' : '#e9ecef',
								borderRadius: '4px', background: selectedName === name ? '#e8f4fd' : '#fff',
								cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
								padding: '4px',
							} }
						>
							<img
								src={ `${ ICON_CDN }${ name }.svg` }
								alt={ name }
								width="18" height="18"
								style={ { display: 'block', pointerEvents: 'none' } }
								loading="lazy"
							/>
						</button>
					) ) }
				</div>

				{ ! loading && icons.length === 0 && (
					<div style={ { textAlign: 'center', color: '#adb5bd', padding: '20px', fontSize: '12px' } }>
						{ __( 'No icons found', 'wmblocks' ) }
					</div>
				) }
			</div>

			{ /* Pagination */ }
			{ totalPages > 1 && (
				<div style={ { display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '4px', padding: '8px', borderTop: '1px solid #e9ecef' } }>
					<button onMouseDown={ e => { e.preventDefault(); if ( page > 1 ) handlePage( page - 1 ); } }
						disabled={ page === 1 }
						style={ { padding: '3px 8px', border: '1px solid #ddd', borderRadius: '3px', background: '#f8f9fa', cursor: page === 1 ? 'not-allowed' : 'pointer', opacity: page === 1 ? 0.4 : 1, fontSize: '12px' } }
					>←</button>
					<span style={ { fontSize: '11px', color: '#555' } }>{ page } / { totalPages }</span>
					<button onMouseDown={ e => { e.preventDefault(); if ( page < totalPages ) handlePage( page + 1 ); } }
						disabled={ page === totalPages }
						style={ { padding: '3px 8px', border: '1px solid #ddd', borderRadius: '3px', background: '#f8f9fa', cursor: page === totalPages ? 'not-allowed' : 'pointer', opacity: page === totalPages ? 0.4 : 1, fontSize: '12px' } }
					>→</button>
				</div>
			) }
		</div>
	);
}

// ── Main Block ───────────────────────────────────────────────────────────────
export default function Edit( { attributes, setAttributes } ) {
	const { iconName, iconSvg, size, textColor, align, linkUrl, linkTarget, ariaLabel, customClass } = attributes;
	const [ loadingSvg, setLoadingSvg ] = useState( false );

	// Load SVG when icon name changes
	useEffect( () => {
		if ( ! iconName ) return;
		if ( iconSvg && iconSvg.includes( `<!-- ${ iconName } -->` ) ) return; // already loaded
		setLoadingSvg( true );
		fetchSvg( iconName ).then( svg => {
			if ( svg ) {
				// Tag with comment so we know which icon this SVG belongs to
				setAttributes( { iconSvg: `<!-- ${ iconName } -->${ svg }` } );
			}
			setLoadingSvg( false );
		} );
	}, [ iconName ] );

	const handleSelect = ( name ) => {
		setAttributes( { iconName: name, iconSvg: '' } );
	};

	// Build display SVG — strip the comment tag, set size
	const displaySvg = iconSvg
		? iconSvg.replace( /^<!--[^>]+-->/, '' )
			.replace( /width="[^"]*"/, `width="${ size }"` )
			.replace( /height="[^"]*"/, `height="${ size }"` )
		: null;

	const wrapClass = [ textColor, align, customClass ].filter( Boolean ).join( ' ' );
	const blockProps = useBlockProps( { className: [ 'wmblocks-bs-icon-wrapper', wrapClass ].filter( Boolean ).join( ' ' ) } );

	return (
		<>
			<InspectorControls>
				{ /* Icon Picker */ }
				<PanelBody title={ __( 'Choose Icon', 'wmblocks' ) } initialOpen={ true }>
					{ iconName && (
						<div style={ { display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px', padding: '8px', background: '#f0f6ff', borderRadius: '4px', border: '1px solid #cfe2ff' } }>
							<img src={ `${ ICON_CDN }${ iconName }.svg` } width="24" height="24" alt="" />
							<code style={ { fontSize: '12px', color: '#0d6efd' } }>bi-{ iconName }</code>
						</div>
					) }
					<IconGrid onSelect={ handleSelect } selectedName={ iconName } />
				</PanelBody>

				{ /* Appearance */ }
				<PanelBody title={ __( 'Appearance', 'wmblocks' ) } initialOpen={ true }>
					<TextControl
						label={ __( 'Size', 'wmblocks' ) }
						value={ size }
						onChange={ v => setAttributes( { size: v } ) }
						placeholder="2rem"
						help={ __( 'e.g. 1rem, 2rem, 48px, 3em', 'wmblocks' ) }
					/>
					<SelectControl label={ __( 'Color', 'wmblocks' ) }     value={ textColor } options={ COLOR_OPTS }  onChange={ v => setAttributes( { textColor: v } ) } />
					<SelectControl label={ __( 'Alignment', 'wmblocks' ) } value={ align }     options={ ALIGN_OPTS } onChange={ v => setAttributes( { align: v } ) } />
				</PanelBody>

				{ /* Link */ }
				<PanelBody title={ __( 'Link', 'wmblocks' ) } initialOpen={ false }>
					<TextControl label={ __( 'URL', 'wmblocks' ) }   value={ linkUrl }   onChange={ v => setAttributes( { linkUrl: v } ) }   type="url" placeholder="https://" />
					<ToggleControl label={ __( 'Open in new tab', 'wmblocks' ) } checked={ !! linkTarget } onChange={ v => setAttributes( { linkTarget: v } ) } />
					<TextControl label={ __( 'Aria Label', 'wmblocks' ) } value={ ariaLabel } onChange={ v => setAttributes( { ariaLabel: v } ) }
						help={ __( 'Required for accessibility when using a linked icon without visible text.', 'wmblocks' ) } />
				</PanelBody>

				{ /* Advanced */ }
				<PanelBody title={ __( 'Advanced', 'wmblocks' ) } initialOpen={ false }>
					<TextControl label={ __( 'Extra Classes', 'wmblocks' ) } value={ customClass } onChange={ v => setAttributes( { customClass: v } ) } />
				</PanelBody>

			</InspectorControls>

			{ /* Canvas preview */ }
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
					<div style={ { display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '8px 12px', border: '2px dashed #dee2e6', borderRadius: '4px', color: '#adb5bd', fontSize: '12px' } }>
						<span>🔵</span>{ __( 'Select an icon in the sidebar →', 'wmblocks' ) }
					</div>
				) }
			</div>
		</>
	);
}