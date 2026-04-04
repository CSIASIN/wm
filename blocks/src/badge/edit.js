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

// ── Colour definitions ─────────────────────────────────────────────────────
const VARIANTS = [
	{ label: 'Primary',   value: 'bg-primary',   bg: '#0d6efd', text: '#fff'  },
	{ label: 'Secondary', value: 'bg-secondary',  bg: '#6c757d', text: '#fff'  },
	{ label: 'Success',   value: 'bg-success',    bg: '#198754', text: '#fff'  },
	{ label: 'Danger',    value: 'bg-danger',     bg: '#dc3545', text: '#fff'  },
	{ label: 'Warning',   value: 'bg-warning',    bg: '#ffc107', text: '#000'  },
	{ label: 'Info',      value: 'bg-info',       bg: '#0dcaf0', text: '#000'  },
	{ label: 'Light',     value: 'bg-light',      bg: '#f8f9fa', text: '#000'  },
	{ label: 'Dark',      value: 'bg-dark',       bg: '#212529', text: '#fff'  },
];

// text-bg-* classes (better contrast handling — BS 5.2+)
const TEXT_BG_VARIANTS = [
	{ label: 'Primary (text-bg)',   value: 'text-bg-primary'   },
	{ label: 'Secondary (text-bg)', value: 'text-bg-secondary' },
	{ label: 'Success (text-bg)',   value: 'text-bg-success'   },
	{ label: 'Danger (text-bg)',    value: 'text-bg-danger'     },
	{ label: 'Warning (text-bg)',   value: 'text-bg-warning'   },
	{ label: 'Info (text-bg)',      value: 'text-bg-info'      },
	{ label: 'Light (text-bg)',     value: 'text-bg-light'     },
	{ label: 'Dark (text-bg)',      value: 'text-bg-dark'      },
];

const ALL_VARIANT_OPTIONS = [
	{ label: '── bg-* (classic) ──', value: '', disabled: true },
	...VARIANTS.map( ( v ) => ( { label: v.label, value: v.value } ) ),
	{ label: '── text-bg-* (auto contrast) ──', value: '', disabled: true },
	...TEXT_BG_VARIANTS,
];

const GAP_OPTIONS = [
	{ label: 'None', value: ''      },
	{ label: 'XS',   value: 'gap-1' },
	{ label: 'SM',   value: 'gap-2' },
	{ label: 'MD',   value: 'gap-3' },
	{ label: 'LG',   value: 'gap-4' },
];

function makeId() {
	return 'bd' + Math.random().toString( 36 ).slice( 2, 7 );
}

// Get preview bg/text colours for editor swatches
function variantColors( value ) {
	const v = VARIANTS.find( ( vv ) => vv.value === value );
	if ( v ) return { bg: v.bg, text: v.text };
	// text-bg-* — derive from base name
	const base = value.replace( 'text-bg-', '' );
	const match = VARIANTS.find( ( vv ) => vv.value === 'bg-' + base );
	return match ? { bg: match.bg, text: match.text } : { bg: '#0d6efd', text: '#fff' };
}

// ── Edit component ─────────────────────────────────────────────────────────
export default function Edit( { attributes, setAttributes } ) {
	const { badges, alignment, gap, wrapInline } = attributes;

	// Which badge's expand panel is open
	const [ expandedId, setExpandedId ] = useState( null );

	const blockProps = useBlockProps( { className: 'wmblocks-badge-wrapper' } );

	// ── Badge CRUD ────────────────────────────────────────────────────
	function updateBadge( id, patch ) {
		setAttributes( {
			badges: badges.map( ( b ) => b.id === id ? { ...b, ...patch } : b ),
		} );
	}

	function removeBadge( id ) {
		if ( badges.length <= 1 ) return;
		setAttributes( { badges: badges.filter( ( b ) => b.id !== id ) } );
		if ( expandedId === id ) setExpandedId( null );
	}

	function moveBadge( id, dir ) {
		const idx  = badges.findIndex( ( b ) => b.id === id );
		const next = [ ...badges ];
		const swap = idx + dir;
		if ( swap < 0 || swap >= next.length ) return;
		[ next[ idx ], next[ swap ] ] = [ next[ swap ], next[ idx ] ];
		setAttributes( { badges: next } );
	}

	function addBadge() {
		// Inherit the last badge's variant so they feel consistent
		const last    = badges[ badges.length - 1 ];
		const variant = last?.variant || 'bg-primary';
		const pill    = last?.pill    || false;
		const nb      = { id: makeId(), text: 'New', variant, pill, href: '', positionedTop: false, positionedStart: false };
		setAttributes( { badges: [ ...badges, nb ] } );
		setExpandedId( nb.id );
	}

	// ── Alignment flex style ──────────────────────────────────────────
	const justifyMap = { left: 'flex-start', center: 'center', right: 'flex-end' };

	return (
		<>
			{/* ── Toolbar ───────────────────────────────────────────── */}
			<BlockControls>
				{/* Alignment */}
				<ToolbarGroup>
					{ [ 'left', 'center', 'right' ].map( ( a ) => (
						<ToolbarButton
							key={ a }
							icon={ `editor-align${ a }` }
							label={ __( 'Align ' + a, 'wmblocks' ) }
							isPressed={ alignment === a }
							onClick={ () => setAttributes( { alignment: a } ) }
						/>
					) ) }
				</ToolbarGroup>
				{/* Quick colour for all badges */}
				<ToolbarGroup>
					{ VARIANTS.map( ( v ) => (
						<ToolbarButton
							key={ v.value }
							label={ v.label }
							onClick={ () => setAttributes( {
								badges: badges.map( ( b ) => ( { ...b, variant: v.value } ) ),
							} ) }
							style={ {
								background:   v.bg,
								color:        v.text,
								fontWeight:   700,
								fontSize:     '10px',
								minWidth:     '42px',
								borderRadius: '3px',
								margin:       '0 1px',
							} }
						>
							{ v.label.slice( 0, 3 ) }
						</ToolbarButton>
					) ) }
				</ToolbarGroup>
				{/* Pill toggle for all */}
				<ToolbarGroup>
					<ToolbarButton
						label={ __( 'Toggle pill shape for all badges', 'wmblocks' ) }
						isPressed={ badges.every( ( b ) => b.pill ) }
						onClick={ () => {
							const allPill = badges.every( ( b ) => b.pill );
							setAttributes( { badges: badges.map( ( b ) => ( { ...b, pill: ! allPill } ) ) } );
						} }
					>
						{ __( '💊 Pill', 'wmblocks' ) }
					</ToolbarButton>
				</ToolbarGroup>
			</BlockControls>

			{/* ── Inspector Controls ───────────────────────────────── */}
			<InspectorControls>
				<PanelBody title={ __( 'Layout', 'wmblocks' ) } initialOpen={ true }>
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
						label={ __( 'Gap between badges', 'wmblocks' ) }
						value={ gap }
						options={ GAP_OPTIONS }
						onChange={ ( v ) => setAttributes( { gap: v } ) }
					/>
					<ToggleControl
						label={ __( 'Wrap inline (no flex row)', 'wmblocks' ) }
						checked={ !! wrapInline }
						onChange={ ( v ) => setAttributes( { wrapInline: v } ) }
						help={ __( 'When on, badges flow as inline elements inside text rather than a flex row.', 'wmblocks' ) }
					/>
				</PanelBody>
			</InspectorControls>

			{/* ══════════════════════════════════════════════════════════
			    EDITOR CANVAS
			══════════════════════════════════════════════════════════ */}
			<div { ...blockProps }>

				{/* ── Meta strip ─────────────────────────────────────── */}
				<div className="wmblocks-badge-meta-strip">
					<span className="wmblocks-badge-meta-chip">Badges</span>
					<span className="wmblocks-badge-meta-chip">{ badges.length } badge{ badges.length !== 1 ? 's' : '' }</span>
					{ wrapInline && <span className="wmblocks-badge-meta-chip">inline</span> }
					{ gap        && <span className="wmblocks-badge-meta-chip">{ gap }</span> }
				</div>

				{/* ── Badge row ──────────────────────────────────────── */}
				<div
					className="wmblocks-badge-canvas-row"
					style={ {
						display:        wrapInline ? 'block'       : 'flex',
						flexWrap:       'wrap',
						justifyContent: justifyMap[ alignment ]    || 'flex-start',
						gap:            gap ? '8px'                : '0',
					} }
				>
					{ badges.map( ( badge, index ) => {
						const isExpanded = expandedId === badge.id;
						const colors     = variantColors( badge.variant );

						// Build the badge class string for live preview
						const badgeClass = [
							'badge',
							badge.variant,
							badge.pill ? 'rounded-pill' : '',
							badge.href ? 'wmblocks-badge-linked' : '',
						].filter( Boolean ).join( ' ' );

						return (
							<div
								key={ badge.id }
								className={
									'wmblocks-badge-item' +
									( isExpanded ? ' wmblocks-badge-item--expanded' : '' )
								}
							>
								{/* ── The badge itself — label editable inline ── */}
								<div className="wmblocks-badge-item__badge-row">
									<RichText
										tagName={ badge.href ? 'a' : 'span' }
										className={ badgeClass }
										value={ badge.text }
										onChange={ ( v ) => updateBadge( badge.id, { text: v } ) }
										allowedFormats={ [] }
										placeholder={ __( 'Badge…', 'wmblocks' ) }
										style={ {
											background: colors.bg,
											color:      colors.text,
											cursor:     'text',
										} }
									/>

									{/* ── Action buttons ──────────────────────── */}
									<div className="wmblocks-badge-item__actions">
										<button
											className="wmblocks-badge-action"
											onClick={ () => moveBadge( badge.id, -1 ) }
											disabled={ index === 0 }
											title={ __( 'Move left', 'wmblocks' ) }
										>←</button>
										<button
											className="wmblocks-badge-action"
											onClick={ () => moveBadge( badge.id, 1 ) }
											disabled={ index === badges.length - 1 }
											title={ __( 'Move right', 'wmblocks' ) }
										>→</button>
										<button
											className={ 'wmblocks-badge-action wmblocks-badge-action--expand' + ( isExpanded ? ' is-active' : '' ) }
											onClick={ () => setExpandedId( isExpanded ? null : badge.id ) }
											title={ isExpanded ? __( 'Close options', 'wmblocks' ) : __( 'Open options', 'wmblocks' ) }
										>{ isExpanded ? '▲' : '▼' }</button>
										<button
											className="wmblocks-badge-action wmblocks-badge-action--remove"
											onClick={ () => removeBadge( badge.id ) }
											disabled={ badges.length <= 1 }
											title={ __( 'Remove badge', 'wmblocks' ) }
										>✕</button>
									</div>
								</div>

								{/* ── Expanded options panel ──────────────────── */}
								{ isExpanded && (
									<div className="wmblocks-badge-item__detail">

										{/* Colour swatches */}
										<div className="wmblocks-badge-detail-row">
											<span className="wmblocks-badge-detail-label">{ __( 'Colour', 'wmblocks' ) }</span>
											<div className="wmblocks-badge-swatches">
												{ VARIANTS.map( ( v ) => (
													<button
														key={ v.value }
														className={ 'wmblocks-badge-swatch' + ( badge.variant === v.value ? ' is-active' : '' ) }
														style={ { background: v.bg, color: v.text } }
														onClick={ () => updateBadge( badge.id, { variant: v.value } ) }
														title={ v.label }
													>
														{ v.label.slice( 0, 3 ) }
													</button>
												) ) }
											</div>
										</div>

										{/* text-bg-* swatches (auto contrast) */}
										<div className="wmblocks-badge-detail-row">
											<span className="wmblocks-badge-detail-label">{ __( 'Auto', 'wmblocks' ) }</span>
											<div className="wmblocks-badge-swatches">
												{ TEXT_BG_VARIANTS.map( ( v ) => {
													const col = variantColors( v.value );
													return (
														<button
															key={ v.value }
															className={ 'wmblocks-badge-swatch wmblocks-badge-swatch--textbg' + ( badge.variant === v.value ? ' is-active' : '' ) }
															style={ { background: col.bg, color: col.text } }
															onClick={ () => updateBadge( badge.id, { variant: v.value } ) }
															title={ v.label }
														>
															{ v.label.replace( ' (text-bg)', '' ).slice( 0, 3 ) }
														</button>
													);
												} ) }
											</div>
										</div>

										{/* Pill toggle */}
										<div className="wmblocks-badge-detail-row">
											<span className="wmblocks-badge-detail-label">{ __( 'Shape', 'wmblocks' ) }</span>
											<div className="wmblocks-badge-pill-pills">
												<button
													className={ 'wmblocks-badge-shape-btn' + ( ! badge.pill ? ' is-active' : '' ) }
													onClick={ () => updateBadge( badge.id, { pill: false } ) }
												>
													<span style={ { display: 'inline-block', width: 32, height: 14, background: 'currentColor', borderRadius: 3, opacity: .7 } } />
													{ __( 'Square', 'wmblocks' ) }
												</button>
												<button
													className={ 'wmblocks-badge-shape-btn' + ( badge.pill ? ' is-active' : '' ) }
													onClick={ () => updateBadge( badge.id, { pill: true } ) }
												>
													<span style={ { display: 'inline-block', width: 32, height: 14, background: 'currentColor', borderRadius: 20, opacity: .7 } } />
													{ __( 'Pill', 'wmblocks' ) }
												</button>
											</div>
										</div>

										{/* Link URL */}
										<div className="wmblocks-badge-detail-row">
											<span className="wmblocks-badge-detail-label">{ __( 'Link', 'wmblocks' ) }</span>
											<input
												type="url"
												className="wmblocks-badge-url-input"
												value={ badge.href || '' }
												onChange={ ( e ) => updateBadge( badge.id, { href: e.target.value } ) }
												placeholder={ __( 'https:// (optional)', 'wmblocks' ) }
											/>
										</div>

										{/* Positioned badge toggles */}
										<div className="wmblocks-badge-detail-row wmblocks-badge-detail-row--flags">
											<span className="wmblocks-badge-detail-label">{ __( 'Position', 'wmblocks' ) }</span>
											<div className="wmblocks-badge-flag-row">
												<button
													className={ 'wmblocks-badge-flag-btn' + ( badge.positionedTop ? ' is-on' : '' ) }
													onClick={ () => updateBadge( badge.id, { positionedTop: ! badge.positionedTop } ) }
												>
													<span className="wmblocks-badge-flag-dot" />
													{ __( 'Top', 'wmblocks' ) }
													<span className="wmblocks-badge-flag-state">{ badge.positionedTop ? 'ON' : 'off' }</span>
												</button>
												<button
													className={ 'wmblocks-badge-flag-btn' + ( badge.positionedStart ? ' is-on' : '' ) }
													onClick={ () => updateBadge( badge.id, { positionedStart: ! badge.positionedStart } ) }
												>
													<span className="wmblocks-badge-flag-dot" />
													{ __( 'Start', 'wmblocks' ) }
													<span className="wmblocks-badge-flag-state">{ badge.positionedStart ? 'ON' : 'off' }</span>
												</button>
											</div>
											{ ( badge.positionedTop || badge.positionedStart ) && (
												<p className="wmblocks-badge-position-note">
													{ __( 'Positioned badges use translate-middle and are placed relative to a parent element with position:relative. Wrap your button/element manually.', 'wmblocks' ) }
												</p>
											) }
										</div>

									</div>
								) }

							</div>
						);
					} ) }

					{/* ── Add badge button ────────────────────────────── */}
					<button
						className="wmblocks-badge-add"
						onClick={ addBadge }
						title={ __( 'Add badge', 'wmblocks' ) }
					>
						<span>+</span> { __( 'Add Badge', 'wmblocks' ) }
					</button>

				</div>

				{/* ── Footer hint ──────────────────────────────────────── */}
				<p className="wmblocks-badge-footer-hint">
					{ __( 'Click label to edit · ▼ for colour, shape & link · colours in toolbar', 'wmblocks' ) }
				</p>

			</div>
		</>
	);
}
