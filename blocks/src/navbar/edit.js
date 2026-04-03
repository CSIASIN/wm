import { __ } from '@wordpress/i18n';
import { useBlockProps, InspectorControls, MediaUpload, MediaUploadCheck } from '@wordpress/block-editor';
import { PanelBody, TextControl, SelectControl, ToggleControl, Button, Flex, FlexItem } from '@wordpress/components';
import { useEffect, useState, useRef } from '@wordpress/element';
import './editor.scss';

const COLOR_SCHEMES = [
	{ label: 'Dark (bg-dark)',        value: 'navbar-dark bg-dark' },
	{ label: 'Dark (bg-black)',       value: 'navbar-dark bg-black' },
	{ label: 'Light (bg-light)',      value: 'navbar-light bg-light' },
	{ label: 'Light (bg-white)',      value: 'navbar-light bg-white' },
	{ label: 'Primary',               value: 'navbar-dark bg-primary' },
	{ label: 'Secondary',             value: 'navbar-dark bg-secondary' },
	{ label: 'Success',               value: 'navbar-dark bg-success' },
	{ label: 'Danger',                value: 'navbar-dark bg-danger' },
	{ label: 'Warning',               value: 'navbar-dark bg-warning' },
	{ label: 'Info',                  value: 'navbar-dark bg-info' },
	{ label: 'Body (bg-body)',        value: 'navbar-light bg-body' },
	{ label: 'Transparent',          value: 'navbar-light bg-transparent' },
];

const BREAKPOINTS = [
	{ label: 'Always expanded',  value: 'navbar-expand' },
	{ label: 'Expand on SM+',    value: 'navbar-expand-sm' },
	{ label: 'Expand on MD+',    value: 'navbar-expand-md' },
	{ label: 'Expand on LG+',    value: 'navbar-expand-lg' },
	{ label: 'Expand on XL+',    value: 'navbar-expand-xl' },
	{ label: 'Expand on XXL+',   value: 'navbar-expand-xxl' },
	{ label: 'Never expanded',   value: '' },
];

const PLACEMENTS = [
	{ label: '— None (static) —', value: '' },
	{ label: 'Fixed Top',          value: 'fixed-top' },
	{ label: 'Fixed Bottom',       value: 'fixed-bottom' },
	{ label: 'Sticky Top',         value: 'sticky-top' },
	{ label: 'Sticky Bottom',      value: 'sticky-bottom' },
];

const CONTAINERS = [
	{ label: 'container',       value: 'container' },
	{ label: 'container-fluid', value: 'container-fluid' },
	{ label: 'container-sm',    value: 'container-sm' },
	{ label: 'container-md',    value: 'container-md' },
	{ label: 'container-lg',    value: 'container-lg' },
	{ label: 'container-xl',    value: 'container-xl' },
];

const NAV_ALIGNMENTS = [
	{ label: '— None —',         value: '' },
	{ label: 'ms-auto (Right)',  value: 'ms-auto' },
	{ label: 'me-auto (Left)',   value: 'me-auto' },
	{ label: 'mx-auto (Center)', value: 'mx-auto' },
];

function getNavColors( scheme ) {
	if ( scheme.includes( 'navbar-dark' ) ) return { color: '#fff', mutedColor: 'rgba(255,255,255,0.55)' };
	return { color: 'rgba(0,0,0,0.85)', mutedColor: 'rgba(0,0,0,0.55)' };
}

function getSchemeBg( scheme ) {
	const map = {
		'bg-dark': '#212529', 'bg-black': '#000', 'bg-light': '#f8f9fa',
		'bg-white': '#fff', 'bg-primary': '#0d6efd', 'bg-secondary': '#6c757d',
		'bg-success': '#198754', 'bg-danger': '#dc3545', 'bg-warning': '#ffc107',
		'bg-info': '#0dcaf0', 'bg-body': '#fff', 'bg-transparent': 'transparent',
	};
	for ( const [ cls, color ] of Object.entries( map ) ) {
		if ( scheme.includes( cls ) ) return color;
	}
	return '#212529';
}

export default function Edit( { attributes, setAttributes, clientId } ) {
	const {
		navbarId, brandText, brandUrl, brandImageUrl, brandImageId, brandImageHeight,
		colorScheme, expandBreakpoint, placement, containerType,
		navItems, showSearch, searchPlaceholder, navAlignment,
	} = attributes;

	// Track which nav item is selected in editor
	const [ selectedItem, setSelectedItem ] = useState( null );
	const urlInputRef = useRef( null );

	useEffect( () => {
		if ( ! navbarId ) {
			setAttributes( { navbarId: 'navbar-' + clientId.slice( 0, 8 ) } );
		}
	}, [] );

	// Focus URL input when item selected
	useEffect( () => {
		if ( selectedItem !== null && urlInputRef.current ) {
			urlInputRef.current.focus();
		}
	}, [ selectedItem ] );

	const colors = getNavColors( colorScheme );
	const bgColor = getSchemeBg( colorScheme );

	const updateNavItem = ( index, key, value ) => {
		const updated = navItems.map( ( item, i ) =>
			i === index ? { ...item, [ key ]: value } : item
		);
		setAttributes( { navItems: updated } );
	};

	const addNavItem = () => {
		const newIndex = navItems.length;
		setAttributes( { navItems: [ ...navItems, { label: 'New Link', url: '#', active: false, disabled: false } ] } );
		setSelectedItem( newIndex );
	};

	const removeNavItem = ( index ) => {
		setAttributes( { navItems: navItems.filter( ( _, i ) => i !== index ) } );
		setSelectedItem( null );
	};

	const moveNavItem = ( index, direction ) => {
		const items = [ ...navItems ];
		const target = index + direction;
		if ( target < 0 || target >= items.length ) return;
		[ items[ index ], items[ target ] ] = [ items[ target ], items[ index ] ];
		setAttributes( { navItems: items } );
		setSelectedItem( target );
	};

	const blockProps = useBlockProps( { className: 'wmblocks-navbar-wrapper' } );

	return (
		<>
			<InspectorControls>

				{ /* Brand */ }
				<PanelBody title={ __( 'Brand', 'wmblocks' ) } initialOpen={ true }>
					<TextControl
						label={ __( 'Brand Text', 'wmblocks' ) }
						value={ brandText }
						onChange={ ( v ) => setAttributes( { brandText: v } ) }
						help={ __( 'Leave empty to use only the logo image.', 'wmblocks' ) }
					/>
					<TextControl
						label={ __( 'Brand URL', 'wmblocks' ) }
						value={ brandUrl }
						onChange={ ( v ) => setAttributes( { brandUrl: v } ) }
					/>
					<MediaUploadCheck>
						<MediaUpload
							onSelect={ ( media ) => setAttributes( { brandImageUrl: media.url, brandImageId: media.id } ) }
							allowedTypes={ [ 'image' ] }
							value={ brandImageId }
							render={ ( { open } ) => (
								<div style={ { marginBottom: '8px' } }>
									{ brandImageUrl && (
										<div style={ { marginBottom: '6px', display: 'flex', alignItems: 'center', gap: '8px' } }>
											<img src={ brandImageUrl } style={ { height: '30px', objectFit: 'contain' } } alt="" />
											<Button variant="tertiary" isDestructive size="small" onClick={ () => setAttributes( { brandImageUrl: '', brandImageId: 0 } ) }>
												{ __( 'Remove', 'wmblocks' ) }
											</Button>
										</div>
									) }
									<Button variant="secondary" size="small" onClick={ open }>
										{ brandImageUrl ? __( 'Change Logo', 'wmblocks' ) : __( 'Upload Logo', 'wmblocks' ) }
									</Button>
								</div>
							) }
						/>
					</MediaUploadCheck>
					{ brandImageUrl && (
						<TextControl
							label={ __( 'Logo Height', 'wmblocks' ) }
							value={ brandImageHeight }
							onChange={ ( v ) => setAttributes( { brandImageHeight: v } ) }
							help={ __( 'e.g. 30px', 'wmblocks' ) }
						/>
					) }
				</PanelBody>

				{ /* Appearance */ }
				<PanelBody title={ __( 'Appearance', 'wmblocks' ) } initialOpen={ true }>
					<SelectControl label={ __( 'Color Scheme', 'wmblocks' ) }     value={ colorScheme }      options={ COLOR_SCHEMES }  onChange={ ( v ) => setAttributes( { colorScheme: v } ) } />
					<SelectControl label={ __( 'Expand Breakpoint', 'wmblocks' ) } value={ expandBreakpoint } options={ BREAKPOINTS }    onChange={ ( v ) => setAttributes( { expandBreakpoint: v } ) } help={ __( 'Collapse to hamburger below this breakpoint.', 'wmblocks' ) } />
					<SelectControl label={ __( 'Placement', 'wmblocks' ) }         value={ placement }        options={ PLACEMENTS }     onChange={ ( v ) => setAttributes( { placement: v } ) } />
					<SelectControl label={ __( 'Container', 'wmblocks' ) }         value={ containerType }    options={ CONTAINERS }     onChange={ ( v ) => setAttributes( { containerType: v } ) } />
					<SelectControl label={ __( 'Nav Alignment', 'wmblocks' ) }     value={ navAlignment }     options={ NAV_ALIGNMENTS } onChange={ ( v ) => setAttributes( { navAlignment: v } ) } />
				</PanelBody>

				{ /* Search */ }
				<PanelBody title={ __( 'Search', 'wmblocks' ) } initialOpen={ false }>
					<ToggleControl label={ __( 'Show Search Form', 'wmblocks' ) } checked={ !! showSearch } onChange={ ( v ) => setAttributes( { showSearch: v } ) } />
					{ showSearch && (
						<TextControl label={ __( 'Placeholder', 'wmblocks' ) } value={ searchPlaceholder } onChange={ ( v ) => setAttributes( { searchPlaceholder: v } ) } />
					) }
				</PanelBody>

				<PanelBody title={ __( 'Advanced', 'wmblocks' ) } initialOpen={ false }>
					<TextControl label={ __( 'Navbar ID', 'wmblocks' ) } value={ navbarId } onChange={ ( v ) => setAttributes( { navbarId: v.replace( /\s+/g, '-' ).toLowerCase() } ) } help={ __( 'Used for the mobile toggler collapse target.', 'wmblocks' ) } />
				</PanelBody>

			</InspectorControls>

			<div { ...blockProps }>

				{ /* ── Navbar preview ── */ }
				<nav
					style={ { background: bgColor, padding: '8px 16px', display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '8px', borderRadius: '4px', minHeight: '56px' } }
					aria-label={ __( 'Navbar preview', 'wmblocks' ) }
				>
					{ /* Brand */ }
					<span style={ { color: colors.color, fontWeight: 700, fontSize: '18px', display: 'flex', alignItems: 'center', gap: '8px', marginRight: '16px' } }>
						{ brandImageUrl && <img src={ brandImageUrl } style={ { height: brandImageHeight, objectFit: 'contain' } } alt="" /> }
						{ brandText && <span>{ brandText }</span> }
					</span>

					{ /* Nav items — inline editable */ }
					<div style={ { display: 'flex', alignItems: 'center', gap: '2px', flex: 1, flexWrap: 'wrap', justifyContent: navAlignment === 'ms-auto' ? 'flex-end' : navAlignment === 'mx-auto' ? 'center' : 'flex-start' } }>
						{ navItems.map( ( item, i ) => (
							<div
								key={ i }
								style={ { position: 'relative' } }
								onBlur={ ( e ) => {
									// Deselect only if focus leaves this item entirely
									if ( ! e.currentTarget.contains( e.relatedTarget ) ) {
										setSelectedItem( null );
									}
								} }
							>
								{ /* Editable label */ }
								<span
									contentEditable
									suppressContentEditableWarning
									onFocus={ () => setSelectedItem( i ) }
									onInput={ ( e ) => updateNavItem( i, 'label', e.currentTarget.textContent ) }
									onKeyDown={ ( e ) => {
										if ( e.key === 'Enter' ) { e.preventDefault(); e.currentTarget.blur(); }
										if ( e.key === 'Tab'   ) { e.preventDefault(); setSelectedItem( i + 1 < navItems.length ? i + 1 : null ); }
										if ( e.key === 'Escape') { e.preventDefault(); e.currentTarget.blur(); }
									} }
									style={ {
										display: 'inline-block',
										padding: '6px 10px',
										borderRadius: selectedItem === i ? '4px 4px 0 0' : '4px',
										fontSize: '14px',
										fontWeight: item.active ? 600 : 400,
										color: item.disabled ? colors.mutedColor : item.active ? colors.color : colors.mutedColor,
										background: selectedItem === i ? 'rgba(255,255,255,0.2)' : item.active ? 'rgba(255,255,255,0.1)' : 'transparent',
										opacity: item.disabled ? 0.5 : 1,
										cursor: 'text',
										outline: selectedItem === i ? '2px solid rgba(255,255,255,0.5)' : 'none',
										minWidth: '40px',
										whiteSpace: 'nowrap',
									} }
								>
									{ item.label }
								</span>

								{ /* URL + actions popover — shows when item is selected */ }
								{ selectedItem === i && (
									<div
										style={ {
											position: 'absolute',
											top: '100%',
											left: 0,
											zIndex: 999,
											background: '#fff',
											border: '1px solid #ddd',
											borderRadius: '0 4px 4px 4px',
											padding: '8px',
											minWidth: '240px',
											boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
										} }
									>
										{ /* URL input */ }
										<div style={ { display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '6px' } }>
											<span style={ { fontSize: '11px', color: '#555', flexShrink: 0 } }>🔗</span>
											<input
												ref={ urlInputRef }
												type="url"
												value={ item.url }
												onChange={ ( e ) => updateNavItem( i, 'url', e.target.value ) }
												onKeyDown={ ( e ) => { if ( e.key === 'Escape' || e.key === 'Enter' ) setSelectedItem( null ); } }
												placeholder="https://"
												style={ { flex: 1, fontSize: '12px', padding: '4px 6px', border: '1px solid #ccc', borderRadius: '4px', outline: 'none' } }
											/>
										</div>

										{ /* Toggles row */ }
										<div style={ { display: 'flex', alignItems: 'center', gap: '8px', fontSize: '11px', color: '#555', marginBottom: '6px' } }>
											<label style={ { display: 'flex', alignItems: 'center', gap: '4px', cursor: 'pointer' } }>
												<input type="checkbox" checked={ !! item.active } onChange={ ( e ) => updateNavItem( i, 'active', e.target.checked ) } />
												{ __( 'Active', 'wmblocks' ) }
											</label>
											<label style={ { display: 'flex', alignItems: 'center', gap: '4px', cursor: 'pointer' } }>
												<input type="checkbox" checked={ !! item.disabled } onChange={ ( e ) => updateNavItem( i, 'disabled', e.target.checked ) } />
												{ __( 'Disabled', 'wmblocks' ) }
											</label>
										</div>

										{ /* Action buttons */ }
										<div style={ { display: 'flex', gap: '4px' } }>
											<button onClick={ () => moveNavItem( i, -1 ) } disabled={ i === 0 }                        style={ { fontSize: '11px', padding: '2px 6px', border: '1px solid #ccc', borderRadius: '3px', background: '#f8f9fa', cursor: i === 0 ? 'not-allowed' : 'pointer', opacity: i === 0 ? 0.4 : 1 } }>←</button>
											<button onClick={ () => moveNavItem( i, 1 ) }  disabled={ i === navItems.length - 1 }      style={ { fontSize: '11px', padding: '2px 6px', border: '1px solid #ccc', borderRadius: '3px', background: '#f8f9fa', cursor: i === navItems.length - 1 ? 'not-allowed' : 'pointer', opacity: i === navItems.length - 1 ? 0.4 : 1 } }>→</button>
											<button onClick={ () => removeNavItem( i ) }                                               style={ { fontSize: '11px', padding: '2px 6px', border: '1px solid #fcc', borderRadius: '3px', background: '#fff5f5', color: '#c00', cursor: 'pointer', marginLeft: 'auto' } }>{ __( '✕ Remove', 'wmblocks' ) }</button>
										</div>
									</div>
								) }
							</div>
						) ) }

						{ /* Add item button */ }
						<button
							onClick={ addNavItem }
							style={ { fontSize: '12px', padding: '5px 10px', background: 'rgba(255,255,255,0.15)', border: '1px dashed rgba(255,255,255,0.4)', borderRadius: '4px', color: colors.color, cursor: 'pointer', marginLeft: '4px' } }
						>
							+ { __( 'Add item', 'wmblocks' ) }
						</button>

						{ /* Search preview */ }
						{ showSearch && (
							<div style={ { display: 'flex', gap: '4px', marginLeft: '8px' } }>
								<input type="search" placeholder={ searchPlaceholder } readOnly style={ { padding: '4px 8px', borderRadius: '4px', border: '1px solid rgba(255,255,255,0.3)', background: 'rgba(255,255,255,0.1)', color: colors.color, fontSize: '13px', outline: 'none' } } />
								<button style={ { padding: '4px 10px', borderRadius: '4px', background: 'rgba(255,255,255,0.2)', border: 'none', color: colors.color, fontSize: '13px', cursor: 'default' } }>{ __( 'Search', 'wmblocks' ) }</button>
							</div>
						) }
					</div>

					{ /* Hamburger indicator */ }
					<div style={ { marginLeft: 'auto', display: 'flex', flexDirection: 'column', gap: '4px', opacity: 0.5 } } title={ __( 'Mobile toggler', 'wmblocks' ) }>
						{ [ 0, 1, 2 ].map( i => <div key={ i } style={ { width: '22px', height: '2px', background: colors.color, borderRadius: '2px' } } /> ) }
					</div>
				</nav>

				<div style={ { fontSize: '11px', color: '#757575', marginTop: '6px', fontStyle: 'italic' } }>
					{ __( 'Click any nav item to edit its label and URL. Use Brand panel on the right for logo settings.', 'wmblocks' ) }
				</div>
			</div>
		</>
	);
}