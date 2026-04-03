import { __ } from '@wordpress/i18n';
import {
	useBlockProps,
	InspectorControls,
	RichText,
	BlockControls,
} from '@wordpress/block-editor';
import {
	PanelBody,
	SelectControl,
	ToggleControl,
	ToolbarGroup,
	ToolbarButton,
} from '@wordpress/components';
import { useState } from '@wordpress/element';
import './editor.scss';

// ── Constants ──────────────────────────────────────────────────────────────
const BTN_VARIANTS = [
	{ label: 'Primary',           value: 'btn-primary'          },
	{ label: 'Secondary',         value: 'btn-secondary'        },
	{ label: 'Success',           value: 'btn-success'          },
	{ label: 'Danger',            value: 'btn-danger'           },
	{ label: 'Warning',           value: 'btn-warning'          },
	{ label: 'Info',              value: 'btn-info'             },
	{ label: 'Light',             value: 'btn-light'            },
	{ label: 'Dark',              value: 'btn-dark'             },
	{ label: 'Outline Primary',   value: 'btn-outline-primary'  },
	{ label: 'Outline Secondary', value: 'btn-outline-secondary'},
	{ label: 'Outline Success',   value: 'btn-outline-success'  },
	{ label: 'Outline Danger',    value: 'btn-outline-danger'   },
	{ label: 'Outline Warning',   value: 'btn-outline-warning'  },
	{ label: 'Outline Info',      value: 'btn-outline-info'     },
];

const DIRECTION_OPTIONS = [
	{ label: 'Down (default)',  value: 'dropdown'                              },
	{ label: 'Down centered',   value: 'dropdown dropup-center dropdown-center'},
	{ label: 'Up',              value: 'dropup'                                },
	{ label: 'Up centered',     value: 'dropup dropup-center'                  },
	{ label: 'End (right)',     value: 'dropend'                               },
	{ label: 'Start (left)',    value: 'dropstart'                             },
];

const ALIGN_OPTIONS = [
	{ label: 'Default (left)',  value: ''                      },
	{ label: 'End (right)',     value: 'dropdown-menu-end'     },
	{ label: 'SM end',          value: 'dropdown-menu-sm-end'  },
	{ label: 'MD end',          value: 'dropdown-menu-md-end'  },
	{ label: 'LG end',          value: 'dropdown-menu-lg-end'  },
];

const AUTO_CLOSE_OPTIONS = [
	{ label: 'Any click (default)', value: 'true'    },
	{ label: 'Inside only',         value: 'inside'  },
	{ label: 'Outside only',        value: 'outside' },
	{ label: 'Manual',              value: 'false'   },
];

// Item type icons shown on canvas
const TYPE_ICON = {
	link:    '🔗',
	button:  '🖱',
	header:  '📌',
	divider: '─',
	text:    '📝',
};

function makeId() {
	return 'i' + Math.random().toString( 36 ).slice( 2, 7 );
}

// ── Main Edit component ────────────────────────────────────────────────────
export default function Edit( { attributes, setAttributes } ) {
	const {
		triggerText, triggerVariant, triggerSize,
		splitButton, direction, menuAlign,
		darkMenu, autoClose, items,
	} = attributes;

	// Which item row is expanded (showing URL field + toggles)
	const [ expandedId, setExpandedId ] = useState( null );

	const blockProps = useBlockProps( { className: 'wmblocks-dropdown-wrapper' } );

	const btnBase = [ 'btn', triggerVariant, triggerSize ].filter( Boolean ).join( ' ' );

	// ── Item helpers ──────────────────────────────────────────────────
	function updateItem( id, patch ) {
		setAttributes( {
			items: items.map( ( it ) => it.id === id ? { ...it, ...patch } : it ),
		} );
	}

	function removeItem( id ) {
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

	function addItem( type ) {
		const defaults = {
			link:    { id: makeId(), type: 'link',    label: 'New link',   href: '#', disabled: false, active: false },
			button:  { id: makeId(), type: 'button',  label: 'New button', href: '',  disabled: false, active: false },
			header:  { id: makeId(), type: 'header',  label: 'Header',     href: '',  disabled: false, active: false },
			divider: { id: makeId(), type: 'divider', label: '',           href: '',  disabled: false, active: false },
			text:    { id: makeId(), type: 'text',    label: 'Some text',  href: '',  disabled: false, active: false },
		};
		const newItem = defaults[ type ];
		setAttributes( { items: [ ...items, newItem ] } );
		if ( type !== 'divider' ) setExpandedId( newItem.id );
	}

	// ── Render ────────────────────────────────────────────────────────
	return (
		<>
			{/* ── Toolbar ───────────────────────────────────────────── */}
			<BlockControls>
				<ToolbarGroup>
					{ [ 'dropdown', 'dropup', 'dropend', 'dropstart' ].map( ( d ) => (
						<ToolbarButton
							key={ d }
							label={ __( 'Direction: ' + d, 'wmblocks' ) }
							isPressed={ direction === d || direction.startsWith( d ) }
							onClick={ () => setAttributes( { direction: d } ) }
						>
							{ { dropdown: '↓', dropup: '↑', dropend: '→', dropstart: '←' }[ d ] }
						</ToolbarButton>
					) ) }
				</ToolbarGroup>
				<ToolbarGroup>
					<ToolbarButton
						label={ splitButton ? __( 'Single button', 'wmblocks' ) : __( 'Split button', 'wmblocks' ) }
						isPressed={ splitButton }
						onClick={ () => setAttributes( { splitButton: ! splitButton } ) }
					>
						{ splitButton ? __( 'Split ✓', 'wmblocks' ) : __( 'Split', 'wmblocks' ) }
					</ToolbarButton>
					<ToolbarButton
						label={ darkMenu ? __( 'Light menu', 'wmblocks' ) : __( 'Dark menu', 'wmblocks' ) }
						isPressed={ darkMenu }
						onClick={ () => setAttributes( { darkMenu: ! darkMenu } ) }
					>
						{ darkMenu ? '☀' : '🌙' }
					</ToolbarButton>
				</ToolbarGroup>
			</BlockControls>

			{/* ── Inspector Controls — structural settings only ──────── */}
			<InspectorControls>
				<PanelBody title={ __( 'Trigger Button', 'wmblocks' ) } initialOpen={ true }>
					<SelectControl
						label={ __( 'Button Style', 'wmblocks' ) }
						value={ triggerVariant }
						options={ BTN_VARIANTS }
						onChange={ ( v ) => setAttributes( { triggerVariant: v } ) }
					/>
					<SelectControl
						label={ __( 'Button Size', 'wmblocks' ) }
						value={ triggerSize }
						options={ [
							{ label: 'Default', value: ''       },
							{ label: 'Large',   value: 'btn-lg' },
							{ label: 'Small',   value: 'btn-sm' },
						] }
						onChange={ ( v ) => setAttributes( { triggerSize: v } ) }
					/>
					<ToggleControl
						label={ __( 'Split Button', 'wmblocks' ) }
						checked={ !! splitButton }
						onChange={ ( v ) => setAttributes( { splitButton: v } ) }
						help={ __( 'Separate the action button from the dropdown caret.', 'wmblocks' ) }
					/>
				</PanelBody>

				<PanelBody title={ __( 'Menu Settings', 'wmblocks' ) } initialOpen={ true }>
					<SelectControl
						label={ __( 'Direction', 'wmblocks' ) }
						value={ direction }
						options={ DIRECTION_OPTIONS }
						onChange={ ( v ) => setAttributes( { direction: v } ) }
					/>
					<SelectControl
						label={ __( 'Alignment', 'wmblocks' ) }
						value={ menuAlign }
						options={ ALIGN_OPTIONS }
						onChange={ ( v ) => setAttributes( { menuAlign: v } ) }
					/>
					<ToggleControl
						label={ __( 'Dark Menu', 'wmblocks' ) }
						checked={ !! darkMenu }
						onChange={ ( v ) => setAttributes( { darkMenu: v } ) }
					/>
					<SelectControl
						label={ __( 'Auto-close', 'wmblocks' ) }
						value={ autoClose }
						options={ AUTO_CLOSE_OPTIONS }
						onChange={ ( v ) => setAttributes( { autoClose: v } ) }
					/>
				</PanelBody>
			</InspectorControls>

			{/* ══════════════════════════════════════════════════════════
			    EDITOR CANVAS
			══════════════════════════════════════════════════════════ */}
			<div { ...blockProps }>

				{/* ── Top meta strip ─────────────────────────────────── */}
				<div className="wmblocks-dd-meta-strip">
					<span className="wmblocks-dd-meta-chip">Dropdown</span>
					{ splitButton && <span className="wmblocks-dd-meta-chip">split</span> }
					{ darkMenu    && <span className="wmblocks-dd-meta-chip">dark</span> }
					{ triggerSize && <span className="wmblocks-dd-meta-chip">{ triggerSize }</span> }
					{ direction !== 'dropdown' && (
						<span className="wmblocks-dd-meta-chip">
							{ { dropup: '↑ up', dropend: '→ end', dropstart: '← start' }[ direction.split( ' ' )[ 0 ] ] || direction }
						</span>
					) }
				</div>

				{/* ── Section: Trigger ───────────────────────────────── */}
				<div className="wmblocks-dd-section-label">
					{ __( 'Trigger', 'wmblocks' ) }
					<span className="wmblocks-dd-section-hint">{ __( 'click label to edit', 'wmblocks' ) }</span>
				</div>

				<div className="wmblocks-dd-trigger-row">
					{ splitButton ? (
						<div className="btn-group">
							<RichText
								tagName="button"
								className={ btnBase }
								value={ triggerText }
								onChange={ ( v ) => setAttributes( { triggerText: v } ) }
								allowedFormats={ [] }
								placeholder={ __( 'Action…', 'wmblocks' ) }
							/>
							<button
								type="button"
								className={ btnBase + ' dropdown-toggle dropdown-toggle-split wmblocks-dd-caret-preview' }
								tabIndex={ -1 }
								aria-hidden="true"
							>
								<span className="visually-hidden">Toggle</span>
							</button>
						</div>
					) : (
						<RichText
							tagName="button"
							className={ btnBase + ' dropdown-toggle wmblocks-dd-caret-preview' }
							value={ triggerText }
							onChange={ ( v ) => setAttributes( { triggerText: v } ) }
							allowedFormats={ [] }
							placeholder={ __( 'Dropdown label…', 'wmblocks' ) }
						/>
					) }
				</div>

				{/* ── Divider ─────────────────────────────────────────── */}
				<div className="wmblocks-dd-canvas-divider" />

				{/* ── Section: Menu Items ────────────────────────────── */}
				<div className="wmblocks-dd-section-label">
					{ __( 'Menu Items', 'wmblocks' ) }
					<span className="wmblocks-dd-section-hint">
						{ __( 'edit labels inline · click row for URL & options', 'wmblocks' ) }
					</span>
				</div>

				{/* ── Menu card ──────────────────────────────────────── */}
				<div className={ 'wmblocks-dd-menu-card' + ( darkMenu ? ' wmblocks-dd-menu-card--dark' : '' ) }>

					{ items.length === 0 && (
						<div className="wmblocks-dd-empty">
							{ __( 'No items — use the add buttons below', 'wmblocks' ) }
						</div>
					) }

					{ items.map( ( item, index ) => {
						const isExpanded = expandedId === item.id;
						const isDivider  = item.type === 'divider';
						const isHeader   = item.type === 'header';
						const isText     = item.type === 'text';
						const isLink     = item.type === 'link';
						const isButton   = item.type === 'button';
						const canExpand  = ! isDivider;
						const hasUrl     = isLink;
						const hasFlags   = isLink || isButton;

						return (
							<div
								key={ item.id }
								className={
									'wmblocks-dd-item' +
									( isDivider  ? ' wmblocks-dd-item--divider'  : '' ) +
									( isHeader   ? ' wmblocks-dd-item--header'   : '' ) +
									( isText     ? ' wmblocks-dd-item--text'     : '' ) +
									( item.active   ? ' wmblocks-dd-item--active'   : '' ) +
									( item.disabled ? ' wmblocks-dd-item--disabled' : '' ) +
									( isExpanded    ? ' wmblocks-dd-item--expanded'  : '' )
								}
							>
								{/* ── Main row ──────────────────────── */}
								<div className="wmblocks-dd-item__row">

									{/* Type icon */}
									<span className="wmblocks-dd-item__type-icon" title={ item.type }>
										{ TYPE_ICON[ item.type ] }
									</span>

									{ isDivider ? (
										// Divider — just a visual line, no editable label
										<div className="wmblocks-dd-item__divider-line" />
									) : (
										// Editable label directly on canvas
										<RichText
											tagName="span"
											className="wmblocks-dd-item__label"
											value={ item.label }
											onChange={ ( v ) => updateItem( item.id, { label: v } ) }
											allowedFormats={ [] }
											placeholder={
												isHeader ? __( 'Header text…', 'wmblocks' ) :
												isText   ? __( 'Plain text…', 'wmblocks' )  :
												isButton ? __( 'Button label…', 'wmblocks' ) :
												__( 'Link label…', 'wmblocks' )
											}
										/>
									) }

									{/* Active / Disabled badges */}
									{ item.active   && <span className="wmblocks-dd-item__flag wmblocks-dd-item__flag--active">active</span>   }
									{ item.disabled && <span className="wmblocks-dd-item__flag wmblocks-dd-item__flag--disabled">disabled</span> }

									{/* Row action buttons */}
									<div className="wmblocks-dd-item__actions">
										<button
											className="wmblocks-dd-action-btn"
											onClick={ () => moveItem( item.id, -1 ) }
											disabled={ index === 0 }
											title={ __( 'Move up', 'wmblocks' ) }
										>↑</button>
										<button
											className="wmblocks-dd-action-btn"
											onClick={ () => moveItem( item.id, 1 ) }
											disabled={ index === items.length - 1 }
											title={ __( 'Move down', 'wmblocks' ) }
										>↓</button>
										{ canExpand && (
											<button
												className={ 'wmblocks-dd-action-btn wmblocks-dd-action-btn--expand' + ( isExpanded ? ' is-active' : '' ) }
												onClick={ () => setExpandedId( isExpanded ? null : item.id ) }
												title={ isExpanded ? __( 'Collapse options', 'wmblocks' ) : __( 'Expand options', 'wmblocks' ) }
											>
												{ isExpanded ? '▲' : '▼' }
											</button>
										) }
										<button
											className="wmblocks-dd-action-btn wmblocks-dd-action-btn--remove"
											onClick={ () => removeItem( item.id ) }
											title={ __( 'Remove item', 'wmblocks' ) }
										>✕</button>
									</div>
								</div>

								{/* ── Expanded detail row (URL + toggles) ── */}
								{ isExpanded && (
									<div className="wmblocks-dd-item__detail">

										{ /* Item type selector */ }
										<div className="wmblocks-dd-detail-row">
											<span className="wmblocks-dd-detail-label">{ __( 'Type', 'wmblocks' ) }</span>
											<div className="wmblocks-dd-type-pills">
												{ [ 'link', 'button', 'header', 'text' ].map( ( t ) => (
													<button
														key={ t }
														className={ 'wmblocks-dd-type-pill' + ( item.type === t ? ' is-active' : '' ) }
														onClick={ () => updateItem( item.id, { type: t } ) }
													>
														{ TYPE_ICON[ t ] } { t }
													</button>
												) ) }
											</div>
										</div>

										{ /* URL field — only for links */ }
										{ hasUrl && (
											<div className="wmblocks-dd-detail-row">
												<span className="wmblocks-dd-detail-label">{ __( 'URL', 'wmblocks' ) }</span>
												<input
													type="url"
													className="wmblocks-dd-url-input"
													value={ item.href || '' }
													onChange={ ( e ) => updateItem( item.id, { href: e.target.value } ) }
													placeholder="https://"
												/>
											</div>
										) }

										{ /* Active / Disabled toggles — only for link & button */ }
										{ hasFlags && (
											<div className="wmblocks-dd-detail-row wmblocks-dd-detail-row--flags">
												<button
													className={ 'wmblocks-dd-flag-btn' + ( item.active ? ' is-on' : '' ) }
													onClick={ () => updateItem( item.id, { active: ! item.active, disabled: item.disabled && item.active ? false : item.disabled } ) }
												>
													<span className="wmblocks-dd-flag-dot wmblocks-dd-flag-dot--active" />
													{ __( 'Active', 'wmblocks' ) }
													<span className="wmblocks-dd-flag-state">{ item.active ? __( 'ON', 'wmblocks' ) : __( 'off', 'wmblocks' ) }</span>
												</button>
												<button
													className={ 'wmblocks-dd-flag-btn' + ( item.disabled ? ' is-on' : '' ) }
													onClick={ () => updateItem( item.id, { disabled: ! item.disabled, active: item.active && item.disabled ? false : item.active } ) }
												>
													<span className="wmblocks-dd-flag-dot wmblocks-dd-flag-dot--disabled" />
													{ __( 'Disabled', 'wmblocks' ) }
													<span className="wmblocks-dd-flag-state">{ item.disabled ? __( 'ON', 'wmblocks' ) : __( 'off', 'wmblocks' ) }</span>
												</button>
											</div>
										) }

									</div>
								) }
							</div>
						);
					} ) }
				</div>

				{/* ── Add item toolbar ──────────────────────────────── */}
				<div className="wmblocks-dd-add-bar">
					<span className="wmblocks-dd-add-label">{ __( '+ Add', 'wmblocks' ) }</span>
					{ [ 'link', 'button', 'header', 'divider', 'text' ].map( ( type ) => (
						<button
							key={ type }
							className="wmblocks-dd-add-btn"
							onClick={ () => addItem( type ) }
							title={ __( 'Add ' + type, 'wmblocks' ) }
						>
							{ TYPE_ICON[ type ] } { type }
						</button>
					) ) }
				</div>

			</div>
		</>
	);
}
