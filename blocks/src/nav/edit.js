import { __ } from '@wordpress/i18n';
import {
	useBlockProps,
	InspectorControls,
	RichText,
	BlockControls,
} from '@wordpress/block-editor';
import {
	PanelBody,
	PanelRow,
	SelectControl,
	ToggleControl,
	TextControl,
	ToolbarGroup,
	ToolbarButton,
} from '@wordpress/components';
import { useState } from '@wordpress/element';
import './editor.scss';

// ── Constants ──────────────────────────────────────────────────────────────

// Nav style variants
const NAV_STYLES = [
	{ value: '',              label: 'Base',      icon: '—',  desc: 'Plain links, no decoration'          },
	{ value: 'nav-tabs',     label: 'Tabs',       icon: '⊓',  desc: 'Underlined tabs with border bottom'  },
	{ value: 'nav-pills',    label: 'Pills',      icon: '◉',  desc: 'Rounded pill-shaped active items'     },
	{ value: 'nav-underline',label: 'Underline',  icon: '▁',  desc: 'Minimal underline on active item'    },
];

// Alignment options (only for horizontal)
const ALIGNMENT_OPTIONS = [
	{ value: '',                      label: 'Left (default)'   },
	{ value: 'justify-content-center',label: 'Center'           },
	{ value: 'justify-content-end',   label: 'Right'            },
];

// Fill / Justify options
const FILL_OPTIONS = [
	{ value: '',             label: 'None (auto width)'           },
	{ value: 'nav-fill',     label: 'Fill (proportional widths)'  },
	{ value: 'nav-justified',label: 'Justified (equal widths)'    },
];

// Icon map for orientation toolbar
const ORIENT_ICONS = { horizontal: '↔', vertical: '↕' };

// ── ID generator ───────────────────────────────────────────────────────────
function uid( prefix = 'n' ) {
	return prefix + Math.random().toString( 36 ).slice( 2, 7 );
}

function newItem() {
	return { id: uid(), label: 'Link', href: '#', active: false, disabled: false, hasDropdown: false, dropdownItems: [] };
}

function newDropdownItem() {
	return { id: uid( 'd' ), label: 'Action', href: '#', divider: false };
}

// ── Edit component ─────────────────────────────────────────────────────────
export default function Edit( { attributes, setAttributes } ) {
	const { items, navStyle, orientation, alignment, fill, useNavElement, ariaLabel } = attributes;

	// Which item's expand panel is open
	const [ expandedId, setExpandedId ] = useState( null );

	const blockProps = useBlockProps( { className: 'wmblocks-nav-wrapper' } );

	const isVertical = orientation === 'vertical';

	// ── Item CRUD ─────────────────────────────────────────────────────
	function updateItem( id, patch ) {
		setAttributes( { items: items.map( ( it ) => it.id === id ? { ...it, ...patch } : it ) } );
	}

	function removeItem( id ) {
		if ( items.length <= 1 ) return;
		setAttributes( { items: items.filter( ( it ) => it.id !== id ) } );
		if ( expandedId === id ) setExpandedId( null );
	}

	function moveItem( id, dir ) {
		const idx  = items.findIndex( ( it ) => it.id === id );
		const next = [ ...items ];
		const swap = idx + dir;
		if ( swap < 0 || swap >= next.length ) return;
		[ next[ idx ], next[ swap ] ] = [ next[ swap ], next[ idx ] ];
		setAttributes( { items: next } );
	}

	function duplicateItem( id ) {
		const src  = items.find( ( it ) => it.id === id );
		if ( ! src ) return;
		const clone = { ...src, id: uid(), label: src.label + ' (copy)', active: false };
		const idx   = items.findIndex( ( it ) => it.id === id );
		const next  = [ ...items ];
		next.splice( idx + 1, 0, clone );
		setAttributes( { items: next } );
		setExpandedId( clone.id );
	}

	function addItem() {
		const item = newItem();
		setAttributes( { items: [ ...items, item ] } );
		setExpandedId( item.id );
	}

	// Enforce only one active item at a time when toggling
	function setActive( id, val ) {
		setAttributes( {
			items: items.map( ( it ) => ( {
				...it,
				active: it.id === id ? val : ( val ? false : it.active ),
			} ) ),
		} );
	}

	// ── Dropdown item CRUD ────────────────────────────────────────────
	function addDropdownItem( itemId ) {
		const item = items.find( ( it ) => it.id === itemId );
		if ( ! item ) return;
		updateItem( itemId, { dropdownItems: [ ...( item.dropdownItems || [] ), newDropdownItem() ] } );
	}

	function updateDropdownItem( itemId, diId, patch ) {
		const item = items.find( ( it ) => it.id === itemId );
		if ( ! item ) return;
		updateItem( itemId, {
			dropdownItems: item.dropdownItems.map( ( di ) => di.id === diId ? { ...di, ...patch } : di ),
		} );
	}

	function removeDropdownItem( itemId, diId ) {
		const item = items.find( ( it ) => it.id === itemId );
		if ( ! item ) return;
		updateItem( itemId, { dropdownItems: item.dropdownItems.filter( ( di ) => di.id !== diId ) } );
	}

	// ── Build nav class for live preview ──────────────────────────────
	const navClass = [
		'nav',
		navStyle,
		isVertical ? 'flex-column' : '',
		! isVertical ? alignment : '',
		fill,
	].filter( Boolean ).join( ' ' );

	// ── Render ────────────────────────────────────────────────────────
	return (
		<>
			{/* ── Toolbar ───────────────────────────────────────────── */}
			<BlockControls>
				{/* Nav style */}
				<ToolbarGroup>
					{ NAV_STYLES.map( ( s ) => (
						<ToolbarButton key={ s.value }
							label={ s.label + ' nav' }
							isPressed={ navStyle === s.value }
							onClick={ () => setAttributes( { navStyle: s.value } ) }
						>{ s.icon } { s.label }</ToolbarButton>
					) ) }
				</ToolbarGroup>

				{/* Orientation */}
				<ToolbarGroup>
					{ [ 'horizontal', 'vertical' ].map( ( o ) => (
						<ToolbarButton key={ o }
							label={ o.charAt( 0 ).toUpperCase() + o.slice( 1 ) }
							isPressed={ orientation === o }
							onClick={ () => setAttributes( { orientation: o } ) }
						>{ ORIENT_ICONS[ o ] } { o.charAt( 0 ).toUpperCase() + o.slice( 1 ) }</ToolbarButton>
					) ) }
				</ToolbarGroup>

				{/* Alignment (horizontal only) */}
				{ ! isVertical && (
					<ToolbarGroup>
						{ [ '', 'justify-content-center', 'justify-content-end' ].map( ( a ) => (
							<ToolbarButton key={ a }
								icon={ a === '' ? 'editor-alignleft' : a.includes( 'center' ) ? 'editor-aligncenter' : 'editor-alignright' }
								label={ ALIGNMENT_OPTIONS.find( ( o ) => o.value === a )?.label }
								isPressed={ alignment === a }
								onClick={ () => setAttributes( { alignment: a } ) }
							/>
						) ) }
					</ToolbarGroup>
				) }

				{/* Fill / Justify */}
				{ ! isVertical && (
					<ToolbarGroup>
						<ToolbarButton
							label={ __( 'Fill (nav-fill)', 'wmblocks' ) }
							isPressed={ fill === 'nav-fill' }
							onClick={ () => setAttributes( { fill: fill === 'nav-fill' ? '' : 'nav-fill' } ) }
						>⇔ Fill</ToolbarButton>
						<ToolbarButton
							label={ __( 'Justified (nav-justified)', 'wmblocks' ) }
							isPressed={ fill === 'nav-justified' }
							onClick={ () => setAttributes( { fill: fill === 'nav-justified' ? '' : 'nav-justified' } ) }
						>⇔ Equal</ToolbarButton>
					</ToolbarGroup>
				) }
			</BlockControls>

			{/* ── Inspector Controls ───────────────────────────────── */}
			<InspectorControls>

				{/* Nav style */}
				<PanelBody title={ __( 'Nav Style', 'wmblocks' ) } initialOpen={ true }>
					<div style={ { display: 'flex', flexDirection: 'column', gap: '6px', marginBottom: '12px' } }>
						{ NAV_STYLES.map( ( s ) => (
							<button key={ s.value }
								onClick={ () => setAttributes( { navStyle: s.value } ) }
								style={ {
									display: 'flex', alignItems: 'center', gap: '10px',
									padding: '8px 12px', border: navStyle === s.value ? '2px solid #198754' : '1px solid #dee2e6',
									borderRadius: '5px', background: navStyle === s.value ? '#d1e7dd' : '#fff',
									color: navStyle === s.value ? '#0f5132' : '#333',
									fontWeight: navStyle === s.value ? 700 : 400,
									cursor: 'pointer', fontSize: '13px', transition: 'all .12s', textAlign: 'left',
								} }
							>
								<span style={ { fontSize: '18px', width: '24px', textAlign: 'center' } }>{ s.icon }</span>
								<div>
									<div style={ { fontWeight: 700 } }>{ s.label }</div>
									<div style={ { fontSize: '11px', color: '#888', marginTop: '1px' } }>{ s.desc }</div>
								</div>
								{ navStyle === s.value && <span style={ { marginLeft: 'auto' } }>✓</span> }
							</button>
						) ) }
					</div>
				</PanelBody>

				{/* Layout */}
				<PanelBody title={ __( 'Layout', 'wmblocks' ) } initialOpen={ true }>
					<SelectControl
						label={ __( 'Orientation', 'wmblocks' ) }
						value={ orientation }
						options={ [
							{ label: '↔ Horizontal (default)', value: 'horizontal' },
							{ label: '↕ Vertical (flex-column)', value: 'vertical'  },
						] }
						onChange={ ( v ) => setAttributes( { orientation: v } ) }
						help={ __( 'Vertical stacks items in a column using flex-column.', 'wmblocks' ) }
					/>
					{ ! isVertical && (
						<>
							<SelectControl
								label={ __( 'Alignment', 'wmblocks' ) }
								value={ alignment }
								options={ ALIGNMENT_OPTIONS }
								onChange={ ( v ) => setAttributes( { alignment: v } ) }
								help={ __( 'Aligns nav items along the horizontal axis.', 'wmblocks' ) }
							/>
							<SelectControl
								label={ __( 'Fill / Justify', 'wmblocks' ) }
								value={ fill }
								options={ FILL_OPTIONS }
								onChange={ ( v ) => setAttributes( { fill: v } ) }
								help={ __( 'Fill: proportional widths. Justified: all items equal width.', 'wmblocks' ) }
							/>
						</>
					) }
				</PanelBody>

				{/* Markup */}
				<PanelBody title={ __( 'Markup & Accessibility', 'wmblocks' ) } initialOpen={ false }>
					<PanelRow>
						<ToggleControl
							label={ __( 'Use <nav> element', 'wmblocks' ) }
							checked={ !! useNavElement }
							onChange={ ( v ) => setAttributes( { useNavElement: v } ) }
							help={ __( 'ON: renders <nav class="nav"> with direct <a> children. OFF: renders <ul class="nav"><li class="nav-item"> structure (recommended for most cases).', 'wmblocks' ) }
						/>
					</PanelRow>
					<TextControl
						label={ __( 'ARIA label', 'wmblocks' ) }
						value={ ariaLabel }
						onChange={ ( v ) => setAttributes( { ariaLabel: v } ) }
						help={ __( 'Describes the nav to screen readers. Required when using <nav> element.', 'wmblocks' ) }
					/>
				</PanelBody>

			</InspectorControls>

			{/* ══════════════════════════════════════════════════════════
			    EDITOR CANVAS
			══════════════════════════════════════════════════════════ */}
			<div { ...blockProps }>

				{/* ── Meta strip ─────────────────────────────────────── */}
				<div className="wmblocks-nav-meta-strip">
					<span className="wmblocks-nav-chip">Nav</span>
					<span className="wmblocks-nav-chip wmblocks-nav-chip--style">
						{ NAV_STYLES.find( ( s ) => s.value === navStyle )?.icon }{ ' ' }
						{ NAV_STYLES.find( ( s ) => s.value === navStyle )?.label || 'Base' }
					</span>
					<span className="wmblocks-nav-chip">{ orientation }</span>
					{ alignment && <span className="wmblocks-nav-chip">{ alignment.replace( 'justify-content-', '' ) }</span> }
					{ fill      && <span className="wmblocks-nav-chip">{ fill }</span> }
					{ useNavElement && <span className="wmblocks-nav-chip">&lt;nav&gt;</span> }
					<span className="wmblocks-nav-chip">{ items.length } items</span>
				</div>

				{/* ── Style quick-pick ───────────────────────────────── */}
				<div className="wmblocks-nav-style-bar">
					<span className="wmblocks-nav-style-bar__label">{ __( 'Style:', 'wmblocks' ) }</span>
					{ NAV_STYLES.map( ( s ) => (
						<button key={ s.value }
							className={ 'wmblocks-nav-style-pill' + ( navStyle === s.value ? ' is-active' : '' ) }
							onClick={ () => setAttributes( { navStyle: s.value } ) }
							title={ s.desc }
						>{ s.icon } { s.label }</button>
					) ) }
					<span className="wmblocks-nav-style-bar__sep" />
					<button
						className={ 'wmblocks-nav-style-pill' + ( orientation === 'vertical' ? ' is-active' : '' ) }
						onClick={ () => setAttributes( { orientation: orientation === 'vertical' ? 'horizontal' : 'vertical' } ) }
						title={ __( 'Toggle vertical/horizontal', 'wmblocks' ) }
					>↕ Vertical</button>
					{ ! isVertical && (
						<>
							<button
								className={ 'wmblocks-nav-style-pill' + ( fill === 'nav-fill' ? ' is-active' : '' ) }
								onClick={ () => setAttributes( { fill: fill === 'nav-fill' ? '' : 'nav-fill' } ) }
							>⇔ Fill</button>
							<button
								className={ 'wmblocks-nav-style-pill' + ( fill === 'nav-justified' ? ' is-active' : '' ) }
								onClick={ () => setAttributes( { fill: fill === 'nav-justified' ? '' : 'nav-justified' } ) }
							>⇔ Equal</button>
						</>
					) }
				</div>

				{/* ── Live nav preview ───────────────────────────────── */}
				<div className={ 'wmblocks-nav-preview' + ( isVertical ? ' wmblocks-nav-preview--vertical' : '' ) }>
					<div className="wmblocks-nav-preview__label">{ __( 'Preview & Edit', 'wmblocks' ) }</div>

					{/* The actual nav rendered with Bootstrap classes */}
					<ul className={ navClass } style={ { marginBottom: 0, flexWrap: isVertical ? 'nowrap' : 'wrap' } }>
						{ items.map( ( item, index ) => {
							const isExpanded = expandedId === item.id;

							return (
								<li key={ item.id } className={ 'nav-item' + ( item.hasDropdown ? ' dropdown' : '' ) }>

									{/* ── Nav link — label editable inline ── */}
									<div className="wmblocks-nav-link-wrap">
										<RichText
											tagName="a"
											className={ [
												'nav-link',
												item.active   ? 'active'   : '',
												item.disabled ? 'disabled' : '',
												item.hasDropdown ? 'dropdown-toggle' : '',
											].filter( Boolean ).join( ' ' ) }
											value={ item.label }
											onChange={ ( v ) => updateItem( item.id, { label: v } ) }
											allowedFormats={ [] }
											placeholder={ __( 'Nav link…', 'wmblocks' ) }
											aria-current={ item.active ? 'page' : undefined }
										/>

										{/* State badges */}
										{ item.active    && <span className="wmblocks-nav-badge wmblocks-nav-badge--active">active</span>   }
										{ item.disabled  && <span className="wmblocks-nav-badge wmblocks-nav-badge--disabled">disabled</span> }
										{ item.hasDropdown && <span className="wmblocks-nav-badge wmblocks-nav-badge--dd">▾ dropdown</span> }
									</div>

									{/* ── Item action strip ───────────────────── */}
									<div className="wmblocks-nav-item-actions">
										<button className="wmblocks-nav-action"
											onClick={ () => moveItem( item.id, -1 ) }
											disabled={ index === 0 }
											title={ __( 'Move left / up', 'wmblocks' ) }
										>{ isVertical ? '↑' : '←' }</button>
										<button className="wmblocks-nav-action"
											onClick={ () => moveItem( item.id, 1 ) }
											disabled={ index === items.length - 1 }
											title={ __( 'Move right / down', 'wmblocks' ) }
										>{ isVertical ? '↓' : '→' }</button>
										<button
											className={ 'wmblocks-nav-action wmblocks-nav-action--expand' + ( isExpanded ? ' is-active' : '' ) }
											onClick={ () => setExpandedId( isExpanded ? null : item.id ) }
											title={ isExpanded ? __( 'Close options', 'wmblocks' ) : __( 'Options', 'wmblocks' ) }
										>{ isExpanded ? '▲' : '▼' }</button>
										<button className="wmblocks-nav-action"
											onClick={ () => duplicateItem( item.id ) }
											title={ __( 'Duplicate', 'wmblocks' ) }
										>⎘</button>
										<button className="wmblocks-nav-action wmblocks-nav-action--remove"
											onClick={ () => removeItem( item.id ) }
											disabled={ items.length <= 1 }
											title={ __( 'Remove', 'wmblocks' ) }
										>✕</button>
									</div>

									{/* ── Expand panel ────────────────────────── */}
									{ isExpanded && (
										<div className="wmblocks-nav-item-detail">

											{/* URL */}
											<div className="wmblocks-nav-detail-row">
												<span className="wmblocks-nav-detail-label">{ __( 'URL', 'wmblocks' ) }</span>
												<input
													type="url"
													className="wmblocks-nav-url-input"
													value={ item.href || '' }
													onChange={ ( e ) => updateItem( item.id, { href: e.target.value } ) }
													placeholder="https://"
												/>
											</div>

											{/* State flags */}
											<div className="wmblocks-nav-detail-row">
												<span className="wmblocks-nav-detail-label">{ __( 'State', 'wmblocks' ) }</span>
												<div className="wmblocks-nav-flag-row">
													<button
														className={ 'wmblocks-nav-flag-btn' + ( item.active ? ' is-on' : '' ) }
														onClick={ () => setActive( item.id, ! item.active ) }
													>
														<span className="wmblocks-nav-flag-dot wmblocks-nav-flag-dot--active" />
														{ __( 'Active', 'wmblocks' ) }
														<span className="wmblocks-nav-flag-state">{ item.active ? 'ON' : 'off' }</span>
													</button>
													<button
														className={ 'wmblocks-nav-flag-btn' + ( item.disabled ? ' is-on' : '' ) }
														onClick={ () => updateItem( item.id, { disabled: ! item.disabled } ) }
													>
														<span className="wmblocks-nav-flag-dot wmblocks-nav-flag-dot--disabled" />
														{ __( 'Disabled', 'wmblocks' ) }
														<span className="wmblocks-nav-flag-state">{ item.disabled ? 'ON' : 'off' }</span>
													</button>
													<button
														className={ 'wmblocks-nav-flag-btn' + ( item.hasDropdown ? ' is-on' : '' ) }
														onClick={ () => updateItem( item.id, { hasDropdown: ! item.hasDropdown } ) }
													>
														▾ { __( 'Dropdown', 'wmblocks' ) }
														<span className="wmblocks-nav-flag-state">{ item.hasDropdown ? 'ON' : 'off' }</span>
													</button>
												</div>
											</div>

											{/* Dropdown items manager */}
											{ item.hasDropdown && (
												<div className="wmblocks-nav-dropdown-manager">
													<div className="wmblocks-nav-dropdown-manager__header">
														<span>{ __( 'Dropdown Items', 'wmblocks' ) }</span>
														<button
															className="wmblocks-nav-dd-add-btn"
															onClick={ () => addDropdownItem( item.id ) }
														>+ { __( 'Add item', 'wmblocks' ) }</button>
													</div>

													{ ( item.dropdownItems || [] ).length === 0 && (
														<p className="wmblocks-nav-dd-empty">{ __( 'No dropdown items yet — click Add item', 'wmblocks' ) }</p>
													) }

													{ ( item.dropdownItems || [] ).map( ( di, di_idx ) => (
														<div key={ di.id } className="wmblocks-nav-dd-row">
															{/* Divider checkbox */}
															<input type="checkbox"
																checked={ !! di.divider }
																onChange={ ( e ) => updateDropdownItem( item.id, di.id, { divider: e.target.checked } ) }
																title={ __( 'Make divider', 'wmblocks' ) }
																style={ { flexShrink: 0 } }
															/>
															{ di.divider ? (
																<span className="wmblocks-nav-dd-divider-label">{ __( '— divider', 'wmblocks' ) }</span>
															) : (
																<>
																	<input
																		type="text"
																		className="wmblocks-nav-dd-input"
																		value={ di.label }
																		onChange={ ( e ) => updateDropdownItem( item.id, di.id, { label: e.target.value } ) }
																		placeholder={ __( 'Label', 'wmblocks' ) }
																	/>
																	<input
																		type="url"
																		className="wmblocks-nav-dd-input wmblocks-nav-dd-input--url"
																		value={ di.href }
																		onChange={ ( e ) => updateDropdownItem( item.id, di.id, { href: e.target.value } ) }
																		placeholder="href"
																	/>
																</>
															) }
															<button
																className="wmblocks-nav-dd-remove"
																onClick={ () => removeDropdownItem( item.id, di.id ) }
																title={ __( 'Remove', 'wmblocks' ) }
															>✕</button>
														</div>
													) ) }
												</div>
											) }

										</div>
									) }

								</li>
							);
						} ) }
					</ul>
				</div>

				{/* ── Add item button ─────────────────────────────────── */}
				<div className="wmblocks-nav-add-bar">
					<button className="wmblocks-nav-add-btn" onClick={ addItem }>
						+ { __( 'Add nav item', 'wmblocks' ) }
					</button>
				</div>

				{/* ── Footer hint ──────────────────────────────────────── */}
				<p className="wmblocks-nav-footer-hint">
					{ __( 'Click any label to edit inline · ▼ for URL, active/disabled & dropdown · style controls above & in sidebar →', 'wmblocks' ) }
				</p>

			</div>
		</>
	);
}
