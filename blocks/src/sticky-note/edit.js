import { __ } from '@wordpress/i18n';
import {
	useBlockProps,
	InspectorControls,
	InnerBlocks,
	BlockControls,
	RichText,
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
import './editor.scss';

// ── Position modes ─────────────────────────────────────────────────────────
const POSITION_MODES = [
	{
		value: 'sticky-top',
		label: 'Sticky Top',
		icon: '⬆',
		desc: 'Sticks to the top of the viewport after scrolling past it',
		cssClass: 'sticky-top',
		zone: 'top',
		type: 'sticky',
		colour: '#0d6efd',
	},
	{
		value: 'sticky-bottom',
		label: 'Sticky Bottom',
		icon: '⬇',
		desc: 'Sticks to the bottom of the viewport after scrolling past it',
		cssClass: 'sticky-bottom',
		zone: 'bottom',
		type: 'sticky',
		colour: '#6610f2',
	},
	{
		value: 'fixed-top',
		label: 'Fixed Top',
		icon: '📌',
		desc: 'Always fixed at the top of the viewport — floats above content',
		cssClass: 'fixed-top',
		zone: 'top',
		type: 'fixed',
		colour: '#dc3545',
	},
	{
		value: 'fixed-bottom',
		label: 'Fixed Bottom',
		icon: '📌',
		desc: 'Always fixed at the bottom of the viewport — floats above content',
		cssClass: 'fixed-bottom',
		zone: 'bottom',
		type: 'fixed',
		colour: '#fd7e14',
	},
];

// ── Breakpoints (for sticky-top / sticky-bottom only) ──────────────────────
const BREAKPOINTS = [
	{ label: 'All viewports (no breakpoint)', value: ''    },
	{ label: 'SM (≥576px)',                   value: 'sm'  },
	{ label: 'MD (≥768px)',                   value: 'md'  },
	{ label: 'LG (≥992px)',                   value: 'lg'  },
	{ label: 'XL (≥1200px)',                  value: 'xl'  },
	{ label: 'XXL (≥1400px)',                 value: 'xxl' },
];

// ── Background colours ─────────────────────────────────────────────────────
const BG_COLOURS = [
	{ label: 'White',       value: 'bg-white'     },
	{ label: 'Light',       value: 'bg-light'     },
	{ label: 'Dark',        value: 'bg-dark'      },
	{ label: 'Primary',     value: 'bg-primary'   },
	{ label: 'Secondary',   value: 'bg-secondary' },
	{ label: 'Success',     value: 'bg-success'   },
	{ label: 'Danger',      value: 'bg-danger'    },
	{ label: 'Warning',     value: 'bg-warning'   },
	{ label: 'Info',        value: 'bg-info'      },
	{ label: 'Transparent', value: ''             },
];

// ── Shadow options ─────────────────────────────────────────────────────────
const SHADOW_OPTIONS = [
	{ label: 'None',    value: ''          },
	{ label: 'Small',   value: 'shadow-sm' },
	{ label: 'Default', value: 'shadow'    },
	{ label: 'Large',   value: 'shadow-lg' },
];

// ── Padding options ────────────────────────────────────────────────────────
const PADDING_OPTIONS = [
	{ label: 'None',   value: ''     },
	{ label: 'XS',     value: 'py-1' },
	{ label: 'SM',     value: 'py-2' },
	{ label: 'MD',     value: 'py-3' },
	{ label: 'LG',     value: 'py-4' },
	{ label: 'XL',     value: 'py-5' },
];

// ── Z-index presets ────────────────────────────────────────────────────────
const Z_INDEX_OPTIONS = [
	{ label: 'Auto',  value: 'auto' },
	{ label: '100',   value: '100'  },
	{ label: '200',   value: '200'  },
	{ label: '500',   value: '500'  },
	{ label: '1000',  value: '1000' },
	{ label: '1020 (Bootstrap default)',  value: '1020' },
	{ label: '1030',  value: '1030' },
	{ label: '1040',  value: '1040' },
	{ label: '1050',  value: '1050' },
	{ label: '9999',  value: '9999' },
];

// ── Container width ────────────────────────────────────────────────────────
const CONTAINER_OPTIONS = [
	{ label: 'Full width (no container)',  value: ''                  },
	{ label: 'container',                  value: 'container'         },
	{ label: 'container-sm',               value: 'container-sm'      },
	{ label: 'container-md',               value: 'container-md'      },
	{ label: 'container-lg',               value: 'container-lg'      },
	{ label: 'container-xl',               value: 'container-xl'      },
	{ label: 'container-fluid',            value: 'container-fluid'   },
];

// ── Label positions ────────────────────────────────────────────────────────
const LABEL_POSITIONS = [
	{ label: 'Top right',    value: 'top-0 end-0'       },
	{ label: 'Top left',     value: 'top-0 start-0'     },
	{ label: 'Top center',   value: 'top-0 start-50 translate-middle-x' },
	{ label: 'Bottom right', value: 'bottom-0 end-0'    },
	{ label: 'Bottom left',  value: 'bottom-0 start-0'  },
];

// ── Default InnerBlocks template ────────────────────────────────────────────
const INNER_TEMPLATE = [
	[ 'core/paragraph', { placeholder: __( 'Add content for your sticky/fixed element here…', 'wmblocks' ), content: 'Your sticky content here' } ],
];

// ── Build the final position CSS class string ──────────────────────────────
function buildPositionClass( mode, breakpoint ) {
	const modeObj = POSITION_MODES.find( m => m.value === mode );
	if ( ! modeObj ) return 'sticky-top';

	const isSticky = modeObj.type === 'sticky';
	const zone     = modeObj.zone;

	if ( isSticky && breakpoint ) {
		return `sticky-${ breakpoint }-${ zone }`;
	}
	return modeObj.cssClass;
}

// ── Edit component ─────────────────────────────────────────────────────────
export default function Edit( { attributes, setAttributes } ) {
	const {
		positionMode, breakpoint, zIndex,
		bgColor, shadow, padding,
		showLabel, labelText, labelPosition,
		containerWidth, editorPreviewMode,
	} = attributes;

	const blockProps = useBlockProps( { className: 'wmblocks-sticky-outer' } );

	const modeObj     = POSITION_MODES.find( m => m.value === positionMode ) || POSITION_MODES[0];
	const isSticky    = modeObj.type === 'sticky';
	const isFixed     = modeObj.type === 'fixed';
	const isTop       = modeObj.zone === 'top';
	const posClass    = buildPositionClass( positionMode, breakpoint );
	const accentColor = modeObj.colour;

	// ── Build wrapper classes for the live preview ─────────────────────
	const wrapperClasses = [
		bgColor, shadow, padding, 'w-100',
	].filter( Boolean ).join( ' ' );

	return (
		<>
			{/* ── Toolbar ───────────────────────────────────────────── */}
			<BlockControls>
				<ToolbarGroup>
					{ POSITION_MODES.map( ( m ) => (
						<ToolbarButton key={ m.value }
							label={ m.label }
							isPressed={ positionMode === m.value }
							onClick={ () => setAttributes( { positionMode: m.value } ) }
						>{ m.icon } { m.label }</ToolbarButton>
					) ) }
				</ToolbarGroup>
				<ToolbarGroup>
					<ToolbarButton
						label={ __( 'Inline preview', 'wmblocks' ) }
						isPressed={ editorPreviewMode === 'inline' }
						onClick={ () => setAttributes( { editorPreviewMode: 'inline' } ) }
					>{ __( 'Inline', 'wmblocks' ) }</ToolbarButton>
					<ToolbarButton
						label={ __( 'Float preview (simulates position)', 'wmblocks' ) }
						isPressed={ editorPreviewMode === 'float' }
						onClick={ () => setAttributes( { editorPreviewMode: 'float' } ) }
					>{ __( 'Float', 'wmblocks' ) }</ToolbarButton>
				</ToolbarGroup>
			</BlockControls>

			{/* ── Inspector Controls ───────────────────────────────── */}
			<InspectorControls>

				{/* Position Mode */}
				<PanelBody title={ __( 'Position Mode', 'wmblocks' ) } initialOpen={ true }>
					<div style={ { display: 'flex', flexDirection: 'column', gap: '6px', marginBottom: '12px' } }>
						{ POSITION_MODES.map( ( m ) => (
							<button key={ m.value }
								onClick={ () => setAttributes( { positionMode: m.value, breakpoint: '' } ) }
								style={ {
									display: 'flex', alignItems: 'flex-start', gap: '10px',
									padding: '9px 12px',
									border: positionMode === m.value ? `2px solid ${ m.colour }` : '1px solid #dee2e6',
									borderRadius: '6px',
									background: positionMode === m.value ? m.colour + '14' : '#fff',
									color: positionMode === m.value ? m.colour : '#333',
									cursor: 'pointer', fontSize: '13px', transition: 'all .12s', textAlign: 'left',
								} }
							>
								<span style={ { fontSize: '18px', marginTop: '1px' } }>{ m.icon }</span>
								<div>
									<div style={ { fontWeight: 700 } }>{ m.label }</div>
									<div style={ { fontSize: '11px', color: '#888', marginTop: '2px', lineHeight: 1.4 } }>{ m.desc }</div>
								</div>
								{ positionMode === m.value && <span style={ { marginLeft: 'auto', fontWeight: 700, fontSize: '14px' } }>✓</span> }
							</button>
						) ) }
					</div>

					{ isSticky && (
						<SelectControl
							label={ __( 'Responsive breakpoint', 'wmblocks' ) }
							value={ breakpoint }
							options={ BREAKPOINTS }
							onChange={ ( v ) => setAttributes( { breakpoint: v } ) }
							help={ breakpoint
								? `Outputs: sticky-${ breakpoint }-${ modeObj.zone } — only sticky on viewports ${ breakpoint }+`
								: `Outputs: ${ posClass } — sticky on all viewports` }
						/>
					) }

					{ isFixed && (
						<p style={ { fontSize: '11px', color: '#888', lineHeight: 1.5, margin: '4px 0 0' } }>
							{ __( 'Fixed elements do not support responsive breakpoints. They float above page content on all screen sizes and may require body padding in your theme.', 'wmblocks' ) }
						</p>
					) }
				</PanelBody>

				{/* Appearance */}
				<PanelBody title={ __( 'Appearance', 'wmblocks' ) } initialOpen={ true }>
					<SelectControl
						label={ __( 'Background colour', 'wmblocks' ) }
						value={ bgColor }
						options={ BG_COLOURS }
						onChange={ ( v ) => setAttributes( { bgColor: v } ) }
					/>
					<SelectControl
						label={ __( 'Shadow', 'wmblocks' ) }
						value={ shadow }
						options={ SHADOW_OPTIONS }
						onChange={ ( v ) => setAttributes( { shadow: v } ) }
					/>
					<SelectControl
						label={ __( 'Vertical padding', 'wmblocks' ) }
						value={ padding }
						options={ PADDING_OPTIONS }
						onChange={ ( v ) => setAttributes( { padding: v } ) }
					/>
					<SelectControl
						label={ __( 'Inner container width', 'wmblocks' ) }
						value={ containerWidth }
						options={ CONTAINER_OPTIONS }
						onChange={ ( v ) => setAttributes( { containerWidth: v } ) }
						help={ __( 'Wrap inner content in a Bootstrap container class.', 'wmblocks' ) }
					/>
				</PanelBody>

				{/* Label badge */}
				<PanelBody title={ __( 'Indicator Label', 'wmblocks' ) } initialOpen={ false }>
					<PanelRow>
						<ToggleControl
							label={ __( 'Show indicator label', 'wmblocks' ) }
							checked={ !! showLabel }
							onChange={ ( v ) => setAttributes( { showLabel: v } ) }
							help={ __( 'Adds a small visible badge on the frontend to indicate this is a sticky/fixed element. Useful for development; remove for production.', 'wmblocks' ) }
						/>
					</PanelRow>
					{ showLabel && (
						<>
							<TextControl
								label={ __( 'Label text (leave empty for auto)', 'wmblocks' ) }
								value={ labelText }
								onChange={ ( v ) => setAttributes( { labelText: v } ) }
								placeholder={ __( 'e.g. "Sticky Header"', 'wmblocks' ) }
							/>
							<SelectControl
								label={ __( 'Label position', 'wmblocks' ) }
								value={ labelPosition }
								options={ LABEL_POSITIONS }
								onChange={ ( v ) => setAttributes( { labelPosition: v } ) }
							/>
						</>
					) }
				</PanelBody>

				{/* Advanced */}
				<PanelBody title={ __( 'Advanced', 'wmblocks' ) } initialOpen={ false }>
					<SelectControl
						label={ __( 'z-index', 'wmblocks' ) }
						value={ zIndex }
						options={ Z_INDEX_OPTIONS }
						onChange={ ( v ) => setAttributes( { zIndex: v } ) }
						help={ __( 'Bootstrap uses 1020 for fixed/sticky elements by default. Raise this to layer above other elements.', 'wmblocks' ) }
					/>
					<p style={ { fontSize: '11px', color: '#888', marginTop: '4px', lineHeight: 1.5 } }>
						{ __( 'Generated class: ', 'wmblocks' ) }
						<code style={ { background: '#f1f1f1', padding: '1px 5px', borderRadius: '3px', fontFamily: 'monospace', fontSize: '11px' } }>
							.{ posClass }
						</code>
					</p>
				</PanelBody>

			</InspectorControls>

			{/* ══════════════════════════════════════════════════════════
			    EDITOR CANVAS
			══════════════════════════════════════════════════════════ */}
			<div { ...blockProps }>

				{/* ── Viewport diagram ───────────────────────────────── */}
				<div className="wmblocks-sticky-viewport-diagram">
					<div className="wmblocks-sticky-vp-browser">
						{/* Browser chrome */}
						<div className="wmblocks-sticky-vp-chrome">
							<span /><span /><span />
						</div>

						{/* Viewport body */}
						<div className="wmblocks-sticky-vp-body">
							{/* Top indicator strip */}
							{ isTop && (
								<div
									className="wmblocks-sticky-vp-indicator wmblocks-sticky-vp-indicator--top"
									style={ { background: accentColor } }
								>
									<span>{ modeObj.icon } { modeObj.label }{ breakpoint ? ` (${ breakpoint }+)` : '' }</span>
								</div>
							) }

							{/* Page content lines */}
							<div className="wmblocks-sticky-vp-page-lines">
								{ [ 80, 60, 90, 50, 70, 40, 85 ].map( ( w, i ) => (
									<div key={ i } className="wmblocks-sticky-vp-line" style={ { width: `${ w }%` } } />
								) ) }
							</div>

							{/* Bottom indicator strip */}
							{ ! isTop && (
								<div
									className="wmblocks-sticky-vp-indicator wmblocks-sticky-vp-indicator--bottom"
									style={ { background: accentColor } }
								>
									<span>{ modeObj.icon } { modeObj.label }{ breakpoint ? ` (${ breakpoint }+)` : '' }</span>
								</div>
							) }
						</div>
					</div>

					{/* Diagram caption */}
					<div className="wmblocks-sticky-vp-caption">
						<span className="wmblocks-sticky-vp-badge" style={ { background: accentColor } }>
							.{ posClass }
						</span>
						{ isFixed ? (
							<span className="wmblocks-sticky-vp-note">
								{ __( 'Always visible — floats above all page content', 'wmblocks' ) }
							</span>
						) : (
							<span className="wmblocks-sticky-vp-note">
								{ __( 'Normal in flow until scrolled past, then sticks', 'wmblocks' ) }
							</span>
						) }
					</div>
				</div>

				{/* ── Mode quick-pick ────────────────────────────────── */}
				<div className="wmblocks-sticky-mode-bar">
					{ POSITION_MODES.map( ( m ) => (
						<button key={ m.value }
							className={ 'wmblocks-sticky-mode-btn' + ( positionMode === m.value ? ' is-active' : '' ) }
							style={ positionMode === m.value ? { background: m.colour, borderColor: m.colour, color: '#fff' } : {} }
							onClick={ () => setAttributes( { positionMode: m.value, breakpoint: '' } ) }
							title={ m.desc }
						>
							{ m.icon } { m.label }
						</button>
					) ) }
				</div>

				{/* ── Breakpoint quick-pick (sticky only) ────────────── */}
				{ isSticky && (
					<div className="wmblocks-sticky-bp-bar">
						<span className="wmblocks-sticky-bp-label">{ __( 'Breakpoint:', 'wmblocks' ) }</span>
						{ BREAKPOINTS.map( ( bp ) => (
							<button key={ bp.value }
								className={ 'wmblocks-sticky-bp-btn' + ( breakpoint === bp.value ? ' is-active' : '' ) }
								onClick={ () => setAttributes( { breakpoint: bp.value } ) }
								title={ bp.label }
								style={ breakpoint === bp.value ? { background: accentColor, borderColor: accentColor, color: '#fff' } : {} }
							>
								{ bp.value || 'All' }
							</button>
						) ) }
					</div>
				) }

				{/* ── Content preview (inline or float simulation) ──── */}
				<div className={
					'wmblocks-sticky-content-area' +
					( editorPreviewMode === 'float' ? ' wmblocks-sticky-content-area--float' : '' )
				}>
					{ editorPreviewMode === 'float' && (
						<div className="wmblocks-sticky-float-label" style={ { borderColor: accentColor, color: accentColor } }>
							<span>{ modeObj.icon }</span>
							<span>{ modeObj.label } preview</span>
						</div>
					) }

					{/* The actual sticky element preview */}
					<div
						className={ 'wmblocks-sticky-element-preview ' + wrapperClasses }
						style={ {
							borderLeft: `4px solid ${ accentColor }`,
							zIndex: zIndex !== 'auto' ? parseInt( zIndex ) : 'auto',
						} }
					>
						{ containerWidth ? (
							<div className={ containerWidth }>
								<InnerBlocks template={ INNER_TEMPLATE } templateLock={ false } />
							</div>
						) : (
							<InnerBlocks template={ INNER_TEMPLATE } templateLock={ false } />
						) }
					</div>
				</div>

				{/* ── Config summary row ─────────────────────────────── */}
				<div className="wmblocks-sticky-summary-row">
					<div className="wmblocks-sticky-summary-chips">
						<span className="wmblocks-sticky-chip" style={ { background: accentColor + '22', color: accentColor } }>
							.{ posClass }
						</span>
						{ bgColor   && <span className="wmblocks-sticky-chip">{ bgColor }</span> }
						{ shadow    && <span className="wmblocks-sticky-chip">{ shadow }</span> }
						{ padding   && <span className="wmblocks-sticky-chip">{ padding }</span> }
						{ containerWidth && <span className="wmblocks-sticky-chip">{ containerWidth }</span> }
						{ zIndex    && <span className="wmblocks-sticky-chip">z: { zIndex }</span> }
					</div>
					<div className="wmblocks-sticky-warning" style={ { borderColor: accentColor + '44' } }>
						{ isFixed
							? __( '⚠ Fixed elements float above all content and may overlap your page. Add body padding-top or padding-bottom in your theme CSS to compensate.', 'wmblocks' )
							: __( 'ℹ Sticky elements stay in normal flow until scrolled past, then attach to the viewport edge. No body padding needed.', 'wmblocks' )
						}
					</div>
				</div>

				{/* ── Footer hint ──────────────────────────────────────── */}
				<p className="wmblocks-sticky-footer-hint">
					{ __( 'Drop any content inside · switch modes in toolbar or above · all options in sidebar →', 'wmblocks' ) }
				</p>

			</div>
		</>
	);
}
