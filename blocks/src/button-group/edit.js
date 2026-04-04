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
const VARIANTS = [
	{ label: 'Primary',           value: 'btn-primary',          bg: '#0d6efd', text: '#fff' },
	{ label: 'Secondary',         value: 'btn-secondary',         bg: '#6c757d', text: '#fff' },
	{ label: 'Success',           value: 'btn-success',           bg: '#198754', text: '#fff' },
	{ label: 'Danger',            value: 'btn-danger',            bg: '#dc3545', text: '#fff' },
	{ label: 'Warning',           value: 'btn-warning',           bg: '#ffc107', text: '#000' },
	{ label: 'Info',              value: 'btn-info',              bg: '#0dcaf0', text: '#000' },
	{ label: 'Light',             value: 'btn-light',             bg: '#f8f9fa', text: '#000' },
	{ label: 'Dark',              value: 'btn-dark',              bg: '#212529', text: '#fff' },
	{ label: 'Outline Primary',   value: 'btn-outline-primary',   bg: 'transparent', text: '#0d6efd' },
	{ label: 'Outline Secondary', value: 'btn-outline-secondary', bg: 'transparent', text: '#6c757d' },
	{ label: 'Outline Success',   value: 'btn-outline-success',   bg: 'transparent', text: '#198754' },
	{ label: 'Outline Danger',    value: 'btn-outline-danger',    bg: 'transparent', text: '#dc3545' },
	{ label: 'Outline Warning',   value: 'btn-outline-warning',   bg: 'transparent', text: '#ffc107' },
	{ label: 'Outline Info',      value: 'btn-outline-info',      bg: 'transparent', text: '#0dcaf0' },
	{ label: 'Outline Light',     value: 'btn-outline-light',     bg: 'transparent', text: '#f8f9fa' },
	{ label: 'Outline Dark',      value: 'btn-outline-dark',      bg: 'transparent', text: '#212529' },
];

const VARIANT_OPTIONS = VARIANTS.map( ( v ) => ( { label: v.label, value: v.value } ) );

const SIZE_OPTIONS = [
	{ label: 'Default', value: ''               },
	{ label: 'Large',   value: 'btn-group-lg'   },
	{ label: 'Small',   value: 'btn-group-sm'   },
];

const GROUP_MODE_OPTIONS = [
	{ label: 'Button Group',       value: 'group'    },
	{ label: 'Button Toolbar',     value: 'toolbar'  },
	{ label: 'Vertical Group',     value: 'vertical' },
];

const TOGGLE_MODE_OPTIONS = [
	{ label: 'None (standard buttons)', value: 'none'     },
	{ label: 'Radio (one active)',       value: 'radio'    },
	{ label: 'Checkbox (multi active)', value: 'checkbox' },
];

const ALIGNMENT_OPTIONS = [
	{ label: 'Left',   value: 'left'   },
	{ label: 'Center', value: 'center' },
	{ label: 'Right',  value: 'right'  },
];

// Mode → icon label map for toolbar
const MODE_ICONS = { group: '▐▌', toolbar: '▐▌▐▌', vertical: '☰' };

function makeId() {
	return 'g' + Math.random().toString( 36 ).slice( 2, 7 );
}

function newButton( variant = 'btn-primary' ) {
	return {
		id: makeId(), label: 'Button', href: '', type: 'button',
		variant, active: false, disabled: false,
		isDropdown: false,
		dropdownItems: [],
		inputName: '', inputValue: '',
	};
}

function makeDropdownItem() {
	return { id: makeId(), label: 'Item', href: '#', divider: false };
}

function variantStyle( variant ) {
	const v = VARIANTS.find( ( vv ) => vv.value === variant );
	return v ? { background: v.bg, color: v.text, border: v.bg === 'transparent' ? `1px solid ${v.text}` : 'none' } : {};
}

// ── Edit component ─────────────────────────────────────────────────────────
export default function Edit( { attributes, setAttributes } ) {
	const {
		groupMode, size, alignment, ariaLabel,
		buttons, toggleMode, inputGroupName,
	} = attributes;

	// Which button's detail panel is open
	const [ expandedId, setExpandedId ] = useState( null );
	// Which button is "selected" — drives sidebar variant panel
	const [ selectedId, setSelectedId ] = useState( buttons[ 0 ]?.id ?? null );

	const selectedBtn = buttons.find( ( b ) => b.id === selectedId ) ?? buttons[ 0 ];

	const blockProps = useBlockProps( { className: 'wmblocks-btngroup-wrapper' } );

	const isToggle    = toggleMode !== 'none';
	const isVertical  = groupMode === 'vertical';
	const isToolbar   = groupMode === 'toolbar';

	// ── Button CRUD ───────────────────────────────────────────────────
	function updateBtn( id, patch ) {
		setAttributes( { buttons: buttons.map( ( b ) => b.id === id ? { ...b, ...patch } : b ) } );
	}

	function removeBtn( id ) {
		if ( buttons.length <= 1 ) return;
		setAttributes( { buttons: buttons.filter( ( b ) => b.id !== id ) } );
		if ( expandedId === id ) setExpandedId( null );
		if ( selectedId === id ) setSelectedId( buttons.find( ( b ) => b.id !== id )?.id );
	}

	function moveBtn( id, dir ) {
		const idx  = buttons.findIndex( ( b ) => b.id === id );
		const next = [ ...buttons ];
		const swap = idx + dir;
		if ( swap < 0 || swap >= next.length ) return;
		[ next[ idx ], next[ swap ] ] = [ next[ swap ], next[ idx ] ];
		setAttributes( { buttons: next } );
	}

	function duplicateBtn( id ) {
		const src  = buttons.find( ( b ) => b.id === id );
		if ( ! src ) return;
		const clone = { ...src, id: makeId(), label: src.label + ' (copy)' };
		const idx   = buttons.findIndex( ( b ) => b.id === id );
		const next  = [ ...buttons ];
		next.splice( idx + 1, 0, clone );
		setAttributes( { buttons: next } );
		setSelectedId( clone.id );
		setExpandedId( clone.id );
	}

	function addButton() {
		const variant = selectedBtn?.variant ?? 'btn-primary';
		const btn     = newButton( variant );
		setAttributes( { buttons: [ ...buttons, btn ] } );
		setSelectedId( btn.id );
		setExpandedId( btn.id );
	}

	// Dropdown item helpers
	function addDropdownItem( btnId ) {
		const btn  = buttons.find( ( b ) => b.id === btnId );
		if ( ! btn ) return;
		updateBtn( btnId, { dropdownItems: [ ...( btn.dropdownItems || [] ), makeDropdownItem() ] } );
	}

	function updateDropdownItem( btnId, itemId, patch ) {
		const btn  = buttons.find( ( b ) => b.id === btnId );
		if ( ! btn ) return;
		updateBtn( btnId, {
			dropdownItems: btn.dropdownItems.map( ( di ) => di.id === itemId ? { ...di, ...patch } : di ),
		} );
	}

	function removeDropdownItem( btnId, itemId ) {
		const btn = buttons.find( ( b ) => b.id === btnId );
		if ( ! btn ) return;
		updateBtn( btnId, { dropdownItems: btn.dropdownItems.filter( ( di ) => di.id !== itemId ) } );
	}

	// Apply variant to all buttons at once
	function applyVariantToAll( variant ) {
		setAttributes( { buttons: buttons.map( ( b ) => ( { ...b, variant } ) ) } );
	}

	// ── Alignment style for wrapper ────────────────────────────────────
	const alignStyle = { left: 'flex-start', center: 'center', right: 'flex-end' }[ alignment ] || 'flex-start';

	// ── Build group class for live preview ─────────────────────────────
	const groupClass = isVertical
		? [ 'btn-group-vertical', size ].filter( Boolean ).join( ' ' )
		: [ 'btn-group', size ].filter( Boolean ).join( ' ' );

	// ── Render ────────────────────────────────────────────────────────
	return (
		<>
			{/* ── Toolbar ───────────────────────────────────────────── */}
			<BlockControls>
				{/* Group mode */}
				<ToolbarGroup>
					{ [ 'group', 'toolbar', 'vertical' ].map( ( m ) => (
						<ToolbarButton key={ m }
							label={ GROUP_MODE_OPTIONS.find( ( o ) => o.value === m )?.label }
							isPressed={ groupMode === m }
							onClick={ () => setAttributes( { groupMode: m } ) }
						>{ MODE_ICONS[ m ] }</ToolbarButton>
					) ) }
				</ToolbarGroup>
				{/* Size */}
				<ToolbarGroup>
					{ SIZE_OPTIONS.map( ( s ) => (
						<ToolbarButton key={ s.value }
							label={ 'Size: ' + s.label }
							isPressed={ size === s.value }
							onClick={ () => setAttributes( { size: s.value } ) }
						>{ s.label.slice( 0, 2 ) }</ToolbarButton>
					) ) }
				</ToolbarGroup>
				{/* Alignment */}
				<ToolbarGroup>
					{ [ 'left', 'center', 'right' ].map( ( a ) => (
						<ToolbarButton key={ a }
							icon={ `editor-align${ a }` }
							label={ 'Align ' + a }
							isPressed={ alignment === a }
							onClick={ () => setAttributes( { alignment: a } ) }
						/>
					) ) }
				</ToolbarGroup>
				{/* Quick variant for selected button */}
				<ToolbarGroup>
					{ VARIANTS.slice( 0, 8 ).map( ( v ) => (
						<ToolbarButton key={ v.value }
							label={ v.label }
							onClick={ () => selectedBtn && updateBtn( selectedBtn.id, { variant: v.value } ) }
							isPressed={ selectedBtn?.variant === v.value }
							style={ {
								background: selectedBtn?.variant === v.value ? v.bg : '',
								color:      selectedBtn?.variant === v.value ? v.text : '',
								fontWeight: 700, fontSize: '10px', minWidth: '40px',
							} }
						>{ v.label.slice( 0, 3 ) }</ToolbarButton>
					) ) }
				</ToolbarGroup>
			</BlockControls>

			{/* ── Inspector Controls ───────────────────────────────── */}
			<InspectorControls>

				{/* Group settings */}
				<PanelBody title={ __( 'Group Settings', 'wmblocks' ) } initialOpen={ true }>
					<SelectControl
						label={ __( 'Group Mode', 'wmblocks' ) }
						value={ groupMode }
						options={ GROUP_MODE_OPTIONS }
						onChange={ ( v ) => setAttributes( { groupMode: v } ) }
						help={ __( 'Group = merged flush buttons. Toolbar = multiple groups side by side. Vertical = stacked column.', 'wmblocks' ) }
					/>
					<SelectControl
						label={ __( 'Size', 'wmblocks' ) }
						value={ size }
						options={ SIZE_OPTIONS }
						onChange={ ( v ) => setAttributes( { size: v } ) }
					/>
					<SelectControl
						label={ __( 'Alignment', 'wmblocks' ) }
						value={ alignment }
						options={ ALIGNMENT_OPTIONS }
						onChange={ ( v ) => setAttributes( { alignment: v } ) }
					/>
					<TextControl
						label={ __( 'ARIA Label', 'wmblocks' ) }
						value={ ariaLabel }
						onChange={ ( v ) => setAttributes( { ariaLabel: v } ) }
						help={ __( 'Accessible label for the group element (aria-label).', 'wmblocks' ) }
					/>
				</PanelBody>

				{/* Toggle mode */}
				<PanelBody title={ __( 'Toggle Buttons', 'wmblocks' ) } initialOpen={ false }>
					<SelectControl
						label={ __( 'Toggle Mode', 'wmblocks' ) }
						value={ toggleMode }
						options={ TOGGLE_MODE_OPTIONS }
						onChange={ ( v ) => setAttributes( { toggleMode: v } ) }
						help={ __( 'Radio = only one can be active. Checkbox = any can be active. Uses <input> elements under the hood.', 'wmblocks' ) }
					/>
					{ isToggle && (
						<TextControl
							label={ __( 'Input Group Name', 'wmblocks' ) }
							value={ inputGroupName }
							onChange={ ( v ) => setAttributes( { inputGroupName: v.replace( /\s+/g, '-' ).toLowerCase() } ) }
							help={ __( 'Shared name attribute for the radio/checkbox inputs (must be unique per page).', 'wmblocks' ) }
						/>
					) }
				</PanelBody>

				{/* Selected button style */}
				<PanelBody
					title={ selectedBtn
						? __( 'Button Style', 'wmblocks' ) + ' — ' + ( selectedBtn.label || 'Button' )
						: __( 'Button Style', 'wmblocks' ) }
					initialOpen={ true }
				>
					{ ! selectedBtn ? (
						<p style={ { fontSize: '12px', color: '#aaa', fontStyle: 'italic' } }>
							{ __( 'Click a button on the canvas to select it.', 'wmblocks' ) }
						</p>
					) : (
						<>
							<SelectControl
								label={ __( 'Variant', 'wmblocks' ) }
								value={ selectedBtn.variant }
								options={ VARIANT_OPTIONS }
								onChange={ ( v ) => updateBtn( selectedBtn.id, { variant: v } ) }
							/>
							<PanelRow>
								<ToggleControl
									label={ __( 'Active', 'wmblocks' ) }
									checked={ !! selectedBtn.active }
									onChange={ ( v ) => updateBtn( selectedBtn.id, { active: v } ) }
								/>
							</PanelRow>
							<PanelRow>
								<ToggleControl
									label={ __( 'Disabled', 'wmblocks' ) }
									checked={ !! selectedBtn.disabled }
									onChange={ ( v ) => updateBtn( selectedBtn.id, { disabled: v } ) }
								/>
							</PanelRow>
							<PanelRow>
								<ToggleControl
									label={ __( 'Nested Dropdown', 'wmblocks' ) }
									checked={ !! selectedBtn.isDropdown }
									onChange={ ( v ) => updateBtn( selectedBtn.id, { isDropdown: v } ) }
									help={ __( 'Turns this button into a dropdown trigger with its own menu.', 'wmblocks' ) }
								/>
							</PanelRow>
							{ selectedBtn.isDropdown && (
								<>
									<p style={ { fontSize: '11px', color: '#888', marginTop: 0 } }>
										{ __( 'Manage dropdown items in the canvas expand panel (▼).', 'wmblocks' ) }
									</p>
								</>
							) }
							<hr />
							<p style={ { fontSize: '11px', color: '#888', margin: '4px 0 8px' } }>
								{ __( 'Apply variant to all buttons:', 'wmblocks' ) }
							</p>
							<div style={ { display: 'flex', flexWrap: 'wrap', gap: '4px' } }>
								{ VARIANTS.slice( 0, 8 ).map( ( v ) => (
									<button key={ v.value }
										style={ { background: v.bg, color: v.text, border: 'none', borderRadius: '4px', padding: '3px 8px', fontSize: '10px', fontWeight: 700, cursor: 'pointer' } }
										onClick={ () => applyVariantToAll( v.value ) }
										title={ 'Apply ' + v.label + ' to all' }
									>{ v.label.slice( 0, 3 ) }</button>
								) ) }
							</div>
						</>
					) }
				</PanelBody>

			</InspectorControls>

			{/* ══════════════════════════════════════════════════════════
			    EDITOR CANVAS
			══════════════════════════════════════════════════════════ */}
			<div { ...blockProps }>

				{/* ── Meta strip ─────────────────────────────────────── */}
				<div className="wmblocks-btngroup-meta-strip">
					<span className="wmblocks-btngroup-chip">Button Group</span>
					<span className="wmblocks-btngroup-chip">{ groupMode }</span>
					{ size    && <span className="wmblocks-btngroup-chip">{ size }</span> }
					{ isToggle && <span className="wmblocks-btngroup-chip">{ toggleMode }</span> }
					<span className="wmblocks-btngroup-chip">align: { alignment }</span>
				</div>

				{/* ── Group canvas ────────────────────────────────────── */}
				<div className="wmblocks-btngroup-canvas-outer" style={ { display: 'flex', justifyContent: alignStyle } }>
					<div
						className={ 'wmblocks-btngroup-preview ' + groupClass }
						style={ isVertical ? { display: 'inline-flex', flexDirection: 'column' } : {} }
					>
						{ buttons.map( ( btn, index ) => {
							const isExpanded = expandedId === btn.id;
							const isSelected = selectedId === btn.id;
							const vStyle     = variantStyle( btn.variant );

							// Button classes
							const btnClass = [
								'btn',
								btn.variant,
								btn.active   ? 'active'   : '',
								btn.disabled ? 'disabled' : '',
							].filter( Boolean ).join( ' ' );

							return (
								<div
									key={ btn.id }
									className={
										'wmblocks-btngroup-item' +
										( isSelected ? ' is-selected' : '' ) +
										( isExpanded ? ' is-expanded' : '' ) +
										( btn.isDropdown ? ' is-dropdown' : '' )
									}
									onClick={ () => setSelectedId( btn.id ) }
								>
									{/* ── Button label — RichText ─────────── */}
									<div className="wmblocks-btngroup-item__btn-row">
										<RichText
											tagName="button"
											className={ btnClass + ( btn.isDropdown ? ' dropdown-toggle' : '' ) }
											value={ btn.label }
											onChange={ ( v ) => updateBtn( btn.id, { label: v } ) }
											allowedFormats={ [] }
											placeholder={ __( 'Label…', 'wmblocks' ) }
											onClick={ ( e ) => e.preventDefault() }
											style={ isSelected ? { outline: '2px solid #0ea5e9', outlineOffset: '2px' } : {} }
										/>
										{ btn.isDropdown && (
											<span className="wmblocks-btngroup-item__dropdown-badge" title={ __( 'Nested dropdown', 'wmblocks' ) }>▾ dropdown</span>
										) }
									</div>

									{/* ── Action strip (visible on hover/select) ── */}
									<div className="wmblocks-btngroup-item__actions">
										<button className="wmblocks-btngroup-action"
											onClick={ ( e ) => { e.stopPropagation(); moveBtn( btn.id, -1 ); } }
											disabled={ index === 0 }
											title={ __( 'Move left', 'wmblocks' ) }
										>←</button>
										<button className="wmblocks-btngroup-action"
											onClick={ ( e ) => { e.stopPropagation(); moveBtn( btn.id, 1 ); } }
											disabled={ index === buttons.length - 1 }
											title={ __( 'Move right', 'wmblocks' ) }
										>→</button>
										<button
											className={ 'wmblocks-btngroup-action wmblocks-btngroup-action--expand' + ( isExpanded ? ' is-active' : '' ) }
											onClick={ ( e ) => { e.stopPropagation(); setSelectedId( btn.id ); setExpandedId( isExpanded ? null : btn.id ); } }
											title={ isExpanded ? __( 'Close options', 'wmblocks' ) : __( 'Options', 'wmblocks' ) }
										>{ isExpanded ? '▲' : '▼' }</button>
										<button className="wmblocks-btngroup-action"
											onClick={ ( e ) => { e.stopPropagation(); duplicateBtn( btn.id ); } }
											title={ __( 'Duplicate', 'wmblocks' ) }
										>⎘</button>
										<button className="wmblocks-btngroup-action wmblocks-btngroup-action--remove"
											onClick={ ( e ) => { e.stopPropagation(); removeBtn( btn.id ); } }
											disabled={ buttons.length <= 1 }
											title={ __( 'Remove', 'wmblocks' ) }
										>✕</button>
									</div>

									{/* ── Expanded detail panel ───────────────── */}
									{ isExpanded && (
										<div className="wmblocks-btngroup-item__detail" onClick={ ( e ) => e.stopPropagation() }>

											{/* Variant swatches — solid */}
											<div className="wmblocks-btngroup-detail-row">
												<span className="wmblocks-btngroup-detail-label">{ __( 'Style', 'wmblocks' ) }</span>
												<div className="wmblocks-btngroup-swatches">
													{ VARIANTS.slice( 0, 8 ).map( ( v ) => (
														<button key={ v.value }
															className={ 'wmblocks-btngroup-swatch' + ( btn.variant === v.value ? ' is-active' : '' ) }
															style={ { background: v.bg, color: v.text } }
															onClick={ () => updateBtn( btn.id, { variant: v.value } ) }
															title={ v.label }
														>{ v.label.slice( 0, 3 ) }</button>
													) ) }
												</div>
											</div>

											{/* Outline variants */}
											<div className="wmblocks-btngroup-detail-row">
												<span className="wmblocks-btngroup-detail-label">{ __( 'Outline', 'wmblocks' ) }</span>
												<div className="wmblocks-btngroup-swatches">
													{ VARIANTS.slice( 8 ).map( ( v ) => (
														<button key={ v.value }
															className={ 'wmblocks-btngroup-swatch wmblocks-btngroup-swatch--outline' + ( btn.variant === v.value ? ' is-active' : '' ) }
															style={ { borderColor: v.text, color: v.text } }
															onClick={ () => updateBtn( btn.id, { variant: v.value } ) }
															title={ v.label }
														>{ v.label.replace( 'Outline ', '' ).slice( 0, 3 ) }</button>
													) ) }
												</div>
											</div>

											{/* URL — shown for link type */}
											<div className="wmblocks-btngroup-detail-row">
												<span className="wmblocks-btngroup-detail-label">{ __( 'URL', 'wmblocks' ) }</span>
												<input
													type="url"
													className="wmblocks-btngroup-url-input"
													value={ btn.href || '' }
													onChange={ ( e ) => updateBtn( btn.id, { href: e.target.value } ) }
													placeholder={ __( 'https:// (leave empty for <button>)', 'wmblocks' ) }
												/>
											</div>

											{/* State flags */}
											<div className="wmblocks-btngroup-detail-row">
												<span className="wmblocks-btngroup-detail-label">{ __( 'State', 'wmblocks' ) }</span>
												<div className="wmblocks-btngroup-flag-row">
													<button
														className={ 'wmblocks-btngroup-flag-btn' + ( btn.active ? ' is-on' : '' ) }
														onClick={ () => updateBtn( btn.id, { active: ! btn.active } ) }
													>
														<span className="wmblocks-btngroup-flag-dot wmblocks-btngroup-flag-dot--active" />
														{ __( 'Active', 'wmblocks' ) }
													</button>
													<button
														className={ 'wmblocks-btngroup-flag-btn' + ( btn.disabled ? ' is-on' : '' ) }
														onClick={ () => updateBtn( btn.id, { disabled: ! btn.disabled } ) }
													>
														<span className="wmblocks-btngroup-flag-dot wmblocks-btngroup-flag-dot--disabled" />
														{ __( 'Disabled', 'wmblocks' ) }
													</button>
													<button
														className={ 'wmblocks-btngroup-flag-btn' + ( btn.isDropdown ? ' is-on' : '' ) }
														onClick={ () => updateBtn( btn.id, { isDropdown: ! btn.isDropdown } ) }
													>
														▾ { __( 'Dropdown', 'wmblocks' ) }
													</button>
												</div>
											</div>

											{/* Toggle inputs (radio/checkbox) */}
											{ isToggle && (
												<div className="wmblocks-btngroup-detail-row">
													<span className="wmblocks-btngroup-detail-label">{ __( 'Input', 'wmblocks' ) }</span>
													<div className="wmblocks-btngroup-input-row">
														<input
															type="text"
															className="wmblocks-btngroup-url-input"
															value={ btn.inputValue || '' }
															onChange={ ( e ) => updateBtn( btn.id, { inputValue: e.target.value } ) }
															placeholder={ __( 'Input value attribute', 'wmblocks' ) }
															style={ { flex: 1 } }
														/>
													</div>
												</div>
											) }

											{/* Dropdown items manager */}
											{ btn.isDropdown && (
												<div className="wmblocks-btngroup-dropdown-items">
													<div className="wmblocks-btngroup-dropdown-items__header">
														<span>{ __( 'Dropdown Items', 'wmblocks' ) }</span>
														<button className="wmblocks-btngroup-dropdown-add-btn"
															onClick={ () => addDropdownItem( btn.id ) }
														>+ { __( 'Add', 'wmblocks' ) }</button>
													</div>
													{ ( btn.dropdownItems || [] ).length === 0 && (
														<p className="wmblocks-btngroup-dropdown-empty">
															{ __( 'No items yet — click Add', 'wmblocks' ) }
														</p>
													) }
													{ ( btn.dropdownItems || [] ).map( ( di ) => (
														<div key={ di.id } className="wmblocks-btngroup-dropdown-item">
															<input
																type="checkbox"
																checked={ !! di.divider }
																onChange={ ( e ) => updateDropdownItem( btn.id, di.id, { divider: e.target.checked } ) }
																title={ __( 'Divider', 'wmblocks' ) }
																style={ { flexShrink: 0, marginTop: '2px' } }
															/>
															{ di.divider ? (
																<span className="wmblocks-btngroup-dropdown-divider-label">{ __( '— divider', 'wmblocks' ) }</span>
															) : (
																<>
																	<input
																		type="text"
																		className="wmblocks-btngroup-dropdown-input"
																		value={ di.label }
																		onChange={ ( e ) => updateDropdownItem( btn.id, di.id, { label: e.target.value } ) }
																		placeholder={ __( 'Item label', 'wmblocks' ) }
																	/>
																	<input
																		type="url"
																		className="wmblocks-btngroup-dropdown-input"
																		value={ di.href }
																		onChange={ ( e ) => updateDropdownItem( btn.id, di.id, { href: e.target.value } ) }
																		placeholder="href"
																	/>
																</>
															) }
															<button className="wmblocks-btngroup-dropdown-remove"
																onClick={ () => removeDropdownItem( btn.id, di.id ) }
																title={ __( 'Remove', 'wmblocks' ) }
															>✕</button>
														</div>
													) ) }
												</div>
											) }

										</div>
									) }

								</div>
							);
						} ) }

						{/* ── Add button ──────────────────────────────── */}
						<button
							className="wmblocks-btngroup-add-btn"
							onClick={ ( e ) => { e.stopPropagation(); addButton(); } }
							title={ __( 'Add button to group', 'wmblocks' ) }
						>+ { __( 'Add', 'wmblocks' ) }</button>

					</div>
				</div>

				{/* ── Hint ────────────────────────────────────────────── */}
				<p className="wmblocks-btngroup-footer-hint">
					{ __( 'Click label to edit inline · ▼ for style, URL & options · group settings in sidebar →', 'wmblocks' ) }
				</p>

			</div>
		</>
	);
}
