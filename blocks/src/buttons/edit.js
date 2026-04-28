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
	ToolbarGroup,
	ToolbarButton,
	__experimentalToggleGroupControl as ToggleGroupControl,
	__experimentalToggleGroupControlOption as ToggleGroupControlOption,
} from '@wordpress/components';
import { useState } from '@wordpress/element';
import './editor.scss';

// ── Constants ──────────────────────────────────────────────────────────────
const VARIANTS_BASE = [
	{ label: 'Primary',   value: 'primary'   },
	{ label: 'Secondary', value: 'secondary' },
	{ label: 'Success',   value: 'success'   },
	{ label: 'Danger',    value: 'danger'    },
	{ label: 'Warning',   value: 'warning'   },
	{ label: 'Info',      value: 'info'      },
	{ label: 'Light',     value: 'light'     },
	{ label: 'Dark',      value: 'dark'      },
	{ label: 'Link',      value: 'link'      },
];

// Colour map for toolbar swatches
const VARIANT_COLOR = {
	primary:   { bg: '#0d6efd', text: '#fff'     },
	secondary: { bg: '#6c757d', text: '#fff'     },
	success:   { bg: '#198754', text: '#fff'     },
	danger:    { bg: '#dc3545', text: '#fff'     },
	warning:   { bg: '#ffc107', text: '#000'     },
	info:      { bg: '#0dcaf0', text: '#000'     },
	light:     { bg: '#f8f9fa', text: '#000'     },
	dark:      { bg: '#212529', text: '#fff'     },
	link:      { bg: 'transparent', text: '#0d6efd' },
};

const VARIANT_OPTIONS = VARIANTS_BASE.map( ( v ) => ( {
	label: v.label,
	value: 'btn-' + v.value,
} ) );

const OUTLINE_OPTIONS = VARIANTS_BASE.filter( ( v ) => v.value !== 'link' ).map( ( v ) => ( {
	label: 'Outline ' + v.label,
	value: 'btn-outline-' + v.value,
} ) );

const ALL_VARIANT_OPTIONS = [ ...VARIANT_OPTIONS, ...OUTLINE_OPTIONS ];

const SIZE_OPTIONS = [
	{ label: 'Default', value: ''       },
	{ label: 'Large',   value: 'btn-lg' },
	{ label: 'Small',   value: 'btn-sm' },
];

const GAP_OPTIONS = [
	{ label: 'None',   value: ''      },
	{ label: 'XS',     value: 'gap-1' },
	{ label: 'SM',     value: 'gap-2' },
	{ label: 'MD',     value: 'gap-3' },
	{ label: 'LG',     value: 'gap-4' },
];

const GROUP_SIZE_OPTIONS = [
	{ label: 'Default', value: ''        },
	{ label: 'Large',   value: 'btn-group-lg' },
	{ label: 'Small',   value: 'btn-group-sm' },
];

// Resolve the full btn class string for a button object
function btnClass( btn ) {
	const base = btn.outline
		? 'btn btn-outline-' + variantBase( btn.variant )
		: 'btn ' + btn.variant;
	return [ base, btn.size, btn.active ? 'active' : '', btn.disabled ? 'disabled' : '' ]
		.filter( Boolean ).join( ' ' );
}

// Strip 'btn-' prefix to get base colour name
function variantBase( variant ) {
	return variant.replace( /^btn-outline-|^btn-/, '' );
}

function makeId() {
	return 'b' + Math.random().toString( 36 ).slice( 2, 7 );
}

// Default new button
function newButton( variant = 'btn-primary' ) {
	return {
		id: makeId(), label: 'Button', href: '#', target: '_self',
		variant, size: '', outline: false,
		disabled: false, active: false,
		type: 'link', stretchedLink: false, noWrap: false,
	};
}

// ── Edit component ─────────────────────────────────────────────────────────
export default function Edit( { attributes, setAttributes } ) {
	const { buttons, layout, groupMode, groupSize, groupVertical, alignment, gap } = attributes;

	// Which button's detail panel is open
	const [ expandedId, setExpandedId ] = useState( null );
	// Which button is selected for sidebar style controls
	const [ selectedId, setSelectedId ] = useState( buttons[ 0 ]?.id ?? null );

	const selectedBtn = buttons.find( ( b ) => b.id === selectedId ) || buttons[ 0 ];

	const blockProps = useBlockProps( { className: 'wmblocks-buttons-wrapper' } );

	// ── Button CRUD ───────────────────────────────────────────────────
	function updateBtn( id, patch ) {
		setAttributes( { buttons: buttons.map( ( b ) => b.id === id ? { ...b, ...patch } : b ) } );
	}

	function removeBtn( id ) {
		if ( buttons.length <= 1 ) return; // keep at least one
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
		const src = buttons.find( ( b ) => b.id === id );
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
		const variant = selectedBtn?.variant || 'btn-primary';
		const size    = selectedBtn?.size    || '';
		const btn     = { ...newButton( variant ), size };
		setAttributes( { buttons: [ ...buttons, btn ] } );
		setSelectedId( btn.id );
		setExpandedId( btn.id );
	}

	// ── Alignment wrapper style ───────────────────────────────────────
	const alignStyle = {
		left:   'flex-start',
		center: 'center',
		right:  'flex-end',
	}[ alignment ] || 'flex-start';

	// ── Render ────────────────────────────────────────────────────────
	return (
		<>
			{/* ── Toolbar ───────────────────────────────────────────── */}
			<BlockControls>
				{/* Alignment */}
				<ToolbarGroup>
					{ [ 'left', 'center', 'right' ].map( ( a ) => (
						<ToolbarButton
							key={ a }
							icon={ 'editor-align' + a }
							label={ __( 'Align ' + a, 'wmblocks' ) }
							isPressed={ alignment === a }
							onClick={ () => setAttributes( { alignment: a } ) }
						/>
					) ) }
				</ToolbarGroup>
				{/* Layout */}
				<ToolbarGroup>
					<ToolbarButton
						label={ __( 'Inline layout', 'wmblocks' ) }
						isPressed={ layout === 'inline' && ! groupMode }
						onClick={ () => setAttributes( { layout: 'inline', groupMode: false } ) }
					>{ __( 'Inline', 'wmblocks' ) }</ToolbarButton>
					<ToolbarButton
						label={ __( 'Stack layout', 'wmblocks' ) }
						isPressed={ layout === 'stack' }
						onClick={ () => setAttributes( { layout: 'stack', groupMode: false } ) }
					>{ __( 'Stack', 'wmblocks' ) }</ToolbarButton>
					<ToolbarButton
						label={ __( 'Button Group', 'wmblocks' ) }
						isPressed={ groupMode }
						onClick={ () => setAttributes( { groupMode: ! groupMode } ) }
					>{ __( 'Group', 'wmblocks' ) }</ToolbarButton>
				</ToolbarGroup>
				{/* Quick variant for selected button */}
				<ToolbarGroup>
					{ VARIANTS_BASE.map( ( v ) => {
						const col = VARIANT_COLOR[ v.value ];
						const isActive = selectedBtn && variantBase( selectedBtn.variant ) === v.value;
						return (
							<ToolbarButton
								key={ v.value }
								label={ v.label }
								isPressed={ isActive }
								onClick={ () => selectedBtn && updateBtn( selectedBtn.id, { variant: 'btn-' + v.value, outline: false } ) }
								style={ {
									background:  isActive ? col.bg   : '',
									color:       isActive ? col.text : '',
									fontWeight:  600,
									fontSize:    '10px',
									minWidth:    '42px',
									borderRadius: '3px',
								} }
							>
								{ v.label.slice( 0, 3 ) }
							</ToolbarButton>
						);
					} ) }
				</ToolbarGroup>
			</BlockControls>

			{/* ── Inspector Controls ───────────────────────────────── */}
			<InspectorControls>

				{/* Selected button style */}
				<PanelBody
					title={ selectedBtn
						? __( 'Button Style', 'wmblocks' ) + ' — ' + ( selectedBtn.label || 'Button' )
						: __( 'Button Style', 'wmblocks' )
					}
					initialOpen={ true }
				>
					{ ! selectedBtn && (
						<p style={ { fontSize: '12px', color: '#aaa', fontStyle: 'italic' } }>
							{ __( 'Click a button on the canvas to select it.', 'wmblocks' ) }
						</p>
					) }

					{ selectedBtn && (
						<>
							<SelectControl
								label={ __( 'Variant', 'wmblocks' ) }
								value={ selectedBtn.variant }
								options={ ALL_VARIANT_OPTIONS }
								onChange={ ( v ) => {
									const isOutline = v.startsWith( 'btn-outline-' );
									updateBtn( selectedBtn.id, { variant: v, outline: isOutline } );
								} }
							/>
							<SelectControl
								label={ __( 'Size', 'wmblocks' ) }
								value={ selectedBtn.size }
								options={ SIZE_OPTIONS }
								onChange={ ( v ) => updateBtn( selectedBtn.id, { size: v } ) }
							/>
							<SelectControl
								label={ __( 'Element Type', 'wmblocks' ) }
								value={ selectedBtn.type }
								options={ [
									{ label: 'Link <a>',      value: 'link'   },
									{ label: 'Button <button>',value: 'button' },
									{ label: 'Input submit',  value: 'submit' },
									{ label: 'Input reset',   value: 'reset'  },
								] }
								onChange={ ( v ) => updateBtn( selectedBtn.id, { type: v } ) }
								help={ __( 'Use <a> for navigation, <button> for JS actions.', 'wmblocks' ) }
							/>

							<PanelRow>
								<ToggleControl
									label={ __( 'Active state', 'wmblocks' ) }
									checked={ !! selectedBtn.active }
									onChange={ ( v ) => updateBtn( selectedBtn.id, { active: v } ) }
									help={ __( 'Adds .active class — appears pressed.', 'wmblocks' ) }
								/>
							</PanelRow>
							<PanelRow>
								<ToggleControl
									label={ __( 'Disabled', 'wmblocks' ) }
									checked={ !! selectedBtn.disabled }
									onChange={ ( v ) => updateBtn( selectedBtn.id, { disabled: v } ) }
									help={ __( 'Adds disabled attribute / .disabled class.', 'wmblocks' ) }
								/>
							</PanelRow>
							<PanelRow>
								<ToggleControl
									label={ __( 'No text wrap', 'wmblocks' ) }
									checked={ !! selectedBtn.noWrap }
									onChange={ ( v ) => updateBtn( selectedBtn.id, { noWrap: v } ) }
									help={ __( 'Adds text-nowrap — button stays on one line.', 'wmblocks' ) }
								/>
							</PanelRow>
							<PanelRow>
								<ToggleControl
									label={ __( 'Stretched link', 'wmblocks' ) }
									checked={ !! selectedBtn.stretchedLink }
									onChange={ ( v ) => updateBtn( selectedBtn.id, { stretchedLink: v } ) }
									help={ __( 'Stretches the click area to fill the nearest positioned parent.', 'wmblocks' ) }
								/>
							</PanelRow>
						</>
					) }
				</PanelBody>

				{/* Layout & group settings */}
				<PanelBody title={ __( 'Layout & Spacing', 'wmblocks' ) } initialOpen={ true }>
					<SelectControl
						label={ __( 'Alignment', 'wmblocks' ) }
						value={ alignment }
						options={ [
							{ label: 'Left',   value: 'left'   },
							{ label: 'Center', value: 'center' },
							{ label: 'Right',  value: 'right'  },
						] }
						onChange={ ( v ) => setAttributes( { alignment: v } ) }
					/>
					<SelectControl
						label={ __( 'Layout', 'wmblocks' ) }
						value={ groupMode ? 'group' : layout }
						options={ [
							{ label: 'Inline (flex row)',  value: 'inline' },
							{ label: 'Stack (full width)', value: 'stack'  },
							{ label: 'Button Group',       value: 'group'  },
						] }
						onChange={ ( v ) => {
							if ( v === 'group' ) {
								setAttributes( { groupMode: true, layout: 'inline' } );
							} else {
								setAttributes( { groupMode: false, layout: v } );
							}
						} }
						help={ __( 'Button Group removes gaps and merges borders.', 'wmblocks' ) }
					/>
					{ ! groupMode && (
						<SelectControl
							label={ __( 'Gap between buttons', 'wmblocks' ) }
							value={ gap }
							options={ GAP_OPTIONS }
							onChange={ ( v ) => setAttributes( { gap: v } ) }
						/>
					) }
					{ groupMode && (
						<>
							<SelectControl
								label={ __( 'Group Size', 'wmblocks' ) }
								value={ groupSize }
								options={ GROUP_SIZE_OPTIONS }
								onChange={ ( v ) => setAttributes( { groupSize: v } ) }
							/>
							<ToggleControl
								label={ __( 'Vertical Group', 'wmblocks' ) }
								checked={ !! groupVertical }
								onChange={ ( v ) => setAttributes( { groupVertical: v } ) }
								help={ __( 'Stack buttons vertically (btn-group-vertical).', 'wmblocks' ) }
							/>
						</>
					) }
				</PanelBody>

			</InspectorControls>

			{/* ══════════════════════════════════════════════════════════
			    EDITOR CANVAS
			══════════════════════════════════════════════════════════ */}
			<div { ...blockProps }>

				{/* ── Meta strip ─────────────────────────────────────── */}
				<div className="wmblocks-btn-meta-strip">
					<span className="wmblocks-btn-meta-chip">Buttons</span>
					<span className="wmblocks-btn-meta-chip">
						{ groupMode ? ( groupVertical ? 'vertical group' : 'group' ) : layout }
					</span>
					{ groupMode && groupSize && <span className="wmblocks-btn-meta-chip">{ groupSize }</span> }
					<span className="wmblocks-btn-meta-chip">align: { alignment }</span>
					{ ! groupMode && gap && <span className="wmblocks-btn-meta-chip">{ gap }</span> }
				</div>

				{/* ── Buttons canvas area ────────────────────────────── */}
				<div
					className={
						'wmblocks-btn-canvas' +
						( layout === 'stack' && ! groupMode ? ' wmblocks-btn-canvas--stack' : '' ) +
						( groupMode ? ' wmblocks-btn-canvas--group' : '' )
					}
					style={ { justifyContent: alignStyle } }
				>
					{ buttons.map( ( btn, index ) => {
						const isExpanded = expandedId === btn.id;
						const isSelected = selectedId === btn.id;
						const isLink     = btn.type === 'link';

						return (
							<div
								key={ btn.id }
								className={
									'wmblocks-btn-item' +
									( isSelected ? ' wmblocks-btn-item--selected' : '' ) +
									( isExpanded ? ' wmblocks-btn-item--expanded' : '' ) +
									( layout === 'stack' && ! groupMode ? ' wmblocks-btn-item--stack' : '' )
								}
								onClick={ () => setSelectedId( btn.id ) }
							>
								{/* ── The actual button — label editable inline ─ */}
								<div className="wmblocks-btn-item__btn-wrap">
									<RichText
										tagName={ btn.type === 'button' ? 'button' : 'a' }
										className={
											btnClass( btn ) +
											( btn.noWrap       ? ' text-nowrap'     : '' ) +
											( btn.stretchedLink ? ' stretched-link'  : '' )
										}
										value={ btn.label }
										onChange={ ( v ) => updateBtn( btn.id, { label: v } ) }
										allowedFormats={ [] }
										placeholder={ __( 'Button label…', 'wmblocks' ) }
										onClick={ ( e ) => e.preventDefault() }
									/>
								</div>

								{/* ── Per-button action bar (shown on hover/select) ── */}
								<div className="wmblocks-btn-item__actions">
									<button
										className="wmblocks-btn-action"
										onClick={ ( e ) => { e.stopPropagation(); moveBtn( btn.id, -1 ); } }
										disabled={ index === 0 }
										title={ __( 'Move left / up', 'wmblocks' ) }
									>←</button>
									<button
										className="wmblocks-btn-action"
										onClick={ ( e ) => { e.stopPropagation(); moveBtn( btn.id, 1 ); } }
										disabled={ index === buttons.length - 1 }
										title={ __( 'Move right / down', 'wmblocks' ) }
									>→</button>
									<button
										className={ 'wmblocks-btn-action wmblocks-btn-action--expand' + ( isExpanded ? ' is-active' : '' ) }
										onClick={ ( e ) => {
											e.stopPropagation();
											setSelectedId( btn.id );
											setExpandedId( isExpanded ? null : btn.id );
										} }
										title={ isExpanded ? __( 'Close options', 'wmblocks' ) : __( 'Open options', 'wmblocks' ) }
									>{ isExpanded ? '▲ Close' : '▼ Edit' }</button>
									<button
										className="wmblocks-btn-action"
										onClick={ ( e ) => { e.stopPropagation(); duplicateBtn( btn.id ); } }
										title={ __( 'Duplicate', 'wmblocks' ) }
									>⎘</button>
									<button
										className="wmblocks-btn-action wmblocks-btn-action--remove"
										onClick={ ( e ) => { e.stopPropagation(); removeBtn( btn.id ); } }
										disabled={ buttons.length <= 1 }
										title={ __( 'Remove', 'wmblocks' ) }
									>✕</button>
								</div>

								{/* ── Expanded options panel ─────────────────────── */}
								{ isExpanded && (
									<div className="wmblocks-btn-item__detail" onClick={ ( e ) => e.stopPropagation() }>

										{/* ── Panel header with close button ── */}
										<div className="wmblocks-btn-detail-header">
											<span className="wmblocks-btn-detail-header__title">
												{ __( 'Button', 'wmblocks' ) } { index + 1 }
												{ btn.label ? ` — "${ btn.label.replace( /<[^>]*>/g, '' ) }"` : '' }
											</span>
											<button
												className="wmblocks-btn-detail-close"
												onClick={ ( e ) => { e.stopPropagation(); setExpandedId( null ); } }
												title={ __( 'Close panel', 'wmblocks' ) }
											>✕ { __( 'Close', 'wmblocks' ) }</button>
										</div>

										{/* Variant quick-pick swatches */}
										<div className="wmblocks-btn-detail-row">
											<span className="wmblocks-btn-detail-label">{ __( 'Style', 'wmblocks' ) }</span>
											<div className="wmblocks-btn-variant-swatches">
												{ VARIANTS_BASE.map( ( v ) => {
													const col     = VARIANT_COLOR[ v.value ];
													const solid   = 'btn-' + v.value;
													const outline = 'btn-outline-' + v.value;
													const isSolid = btn.variant === solid && ! btn.outline;
													const isOut   = btn.variant === outline || ( btn.variant === solid && btn.outline );
													return (
														<div key={ v.value } className="wmblocks-btn-swatch-group">
															{/* Solid swatch */}
															<button
																className={ 'wmblocks-btn-swatch' + ( isSolid ? ' is-active' : '' ) }
																style={ { background: col.bg, color: col.text, borderColor: col.bg === 'transparent' ? '#0d6efd' : col.bg } }
																onClick={ () => updateBtn( btn.id, { variant: solid, outline: false } ) }
																title={ v.label }
															>{ v.label.slice( 0, 3 ) }</button>
															{/* Outline swatch */}
															{ v.value !== 'link' && (
																<button
																	className={ 'wmblocks-btn-swatch wmblocks-btn-swatch--outline' + ( isOut ? ' is-active' : '' ) }
																	style={ { borderColor: col.bg, color: col.bg === 'transparent' ? '#0d6efd' : col.bg } }
																	onClick={ () => updateBtn( btn.id, { variant: outline, outline: true } ) }
																	title={ 'Outline ' + v.label }
																>{ v.label.slice( 0, 3 ) }</button>
															) }
														</div>
													);
												} ) }
											</div>
										</div>

										{/* Size pills */}
										<div className="wmblocks-btn-detail-row">
											<span className="wmblocks-btn-detail-label">{ __( 'Size', 'wmblocks' ) }</span>
											<div className="wmblocks-btn-size-pills">
												{ [ { label: 'SM', value: 'btn-sm' }, { label: 'MD', value: '' }, { label: 'LG', value: 'btn-lg' } ].map( ( s ) => (
													<button
														key={ s.value }
														className={ 'wmblocks-btn-size-pill' + ( btn.size === s.value ? ' is-active' : '' ) }
														onClick={ () => updateBtn( btn.id, { size: s.value } ) }
													>{ s.label }</button>
												) ) }
											</div>
										</div>

										{/* URL field — for link type */}
										{ isLink && (
											<div className="wmblocks-btn-detail-row">
												<span className="wmblocks-btn-detail-label">{ __( 'URL', 'wmblocks' ) }</span>
												<input
													type="url"
													className="wmblocks-btn-url-input"
													value={ btn.href || '' }
													onChange={ ( e ) => updateBtn( btn.id, { href: e.target.value } ) }
													placeholder="https://"
													onClick={ ( e ) => e.stopPropagation() }
												/>
												<select
													className="wmblocks-btn-target-select"
													value={ btn.target || '_self' }
													onChange={ ( e ) => updateBtn( btn.id, { target: e.target.value } ) }
													title={ __( 'Link target', 'wmblocks' ) }
												>
													<option value="_self">_self</option>
													<option value="_blank">_blank</option>
												</select>
											</div>
										) }

										{/* Element type pills */}
										<div className="wmblocks-btn-detail-row">
											<span className="wmblocks-btn-detail-label">{ __( 'Type', 'wmblocks' ) }</span>
											<div className="wmblocks-btn-size-pills">
												{ [ 'link', 'button', 'submit', 'reset' ].map( ( t ) => (
													<button
														key={ t }
														className={ 'wmblocks-btn-size-pill' + ( btn.type === t ? ' is-active' : '' ) }
														onClick={ () => updateBtn( btn.id, { type: t } ) }
													>{ t }</button>
												) ) }
											</div>
										</div>

										{/* State flags */}
										<div className="wmblocks-btn-detail-row wmblocks-btn-detail-row--flags">
											<span className="wmblocks-btn-detail-label">{ __( 'State', 'wmblocks' ) }</span>
											<div className="wmblocks-btn-flag-pills">
												<button
													className={ 'wmblocks-btn-flag-pill' + ( btn.active ? ' is-active' : '' ) }
													onClick={ () => updateBtn( btn.id, { active: ! btn.active } ) }
												>
													<span className="wmblocks-btn-flag-dot" style={ { background: '#0d6efd' } } />
													{ __( 'Active', 'wmblocks' ) }
												</button>
												<button
													className={ 'wmblocks-btn-flag-pill' + ( btn.disabled ? ' is-on' : '' ) }
													onClick={ () => updateBtn( btn.id, { disabled: ! btn.disabled } ) }
												>
													<span className="wmblocks-btn-flag-dot" style={ { background: '#adb5bd' } } />
													{ __( 'Disabled', 'wmblocks' ) }
												</button>
												<button
													className={ 'wmblocks-btn-flag-pill' + ( btn.noWrap ? ' is-on' : '' ) }
													onClick={ () => updateBtn( btn.id, { noWrap: ! btn.noWrap } ) }
												>
													{ __( 'No wrap', 'wmblocks' ) }
												</button>
											</div>
										</div>

									</div>
								) }

							</div>
						);
					} ) }

					{/* ── Add button ──────────────────────────────────── */}
					<button
						className="wmblocks-btn-add"
						onClick={ ( e ) => { e.stopPropagation(); addButton(); } }
						title={ __( 'Add button', 'wmblocks' ) }
					>
						<span>+</span>
						<span>{ __( 'Add Button', 'wmblocks' ) }</span>
					</button>

				</div>

				{/* ── Footer hint ─────────────────────────────────────── */}
				<p className="wmblocks-btn-footer-hint">
					{ __( 'Click label to edit inline · ▼ Edit opens options · ✕ Close returns to buttons · style & layout in sidebar →', 'wmblocks' ) }
				</p>

			</div>
		</>
	);
}