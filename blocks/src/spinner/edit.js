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
import './editor.scss';

// ── Colour variants ────────────────────────────────────────────────────────
const VARIANTS = [
	{ label: 'Primary',   value: 'text-primary',   hex: '#0d6efd' },
	{ label: 'Secondary', value: 'text-secondary',  hex: '#6c757d' },
	{ label: 'Success',   value: 'text-success',    hex: '#198754' },
	{ label: 'Danger',    value: 'text-danger',     hex: '#dc3545' },
	{ label: 'Warning',   value: 'text-warning',    hex: '#ffc107' },
	{ label: 'Info',      value: 'text-info',       hex: '#0dcaf0' },
	{ label: 'Light',     value: 'text-light',      hex: '#f8f9fa' },
	{ label: 'Dark',      value: 'text-dark',       hex: '#212529' },
];

const VARIANT_OPTIONS = VARIANTS.map( ( v ) => ( { label: v.label, value: v.value } ) );

const BTN_VARIANTS = [
	{ label: 'Primary',   value: 'btn-primary'   },
	{ label: 'Secondary', value: 'btn-secondary' },
	{ label: 'Success',   value: 'btn-success'   },
	{ label: 'Danger',    value: 'btn-danger'    },
	{ label: 'Warning',   value: 'btn-warning'   },
	{ label: 'Info',      value: 'btn-info'      },
	{ label: 'Light',     value: 'btn-light'     },
	{ label: 'Dark',      value: 'btn-dark'      },
	{ label: 'Outline Primary',   value: 'btn-outline-primary'   },
	{ label: 'Outline Secondary', value: 'btn-outline-secondary' },
];

const LABEL_POSITION_OPTIONS = [
	{ label: 'Right of spinner',  value: 'right'  },
	{ label: 'Left of spinner',   value: 'left'   },
	{ label: 'Below spinner',     value: 'below'  },
	{ label: 'Above spinner',     value: 'above'  },
];

const SIZE_OPTIONS = [
	{ label: 'Default', value: ''       },
	{ label: 'Small',   value: 'sm'     },
	{ label: 'Custom',  value: 'custom' },
];

const ALIGNMENT_OPTIONS = [
	{ label: 'Left',   value: 'left'   },
	{ label: 'Center', value: 'center' },
	{ label: 'Right',  value: 'right'  },
];

// Get hex colour for a variant value
function variantHex( value ) {
	return VARIANTS.find( ( v ) => v.value === value )?.hex || '#0d6efd';
}

// ── Live spinner CSS for editor preview ───────────────────────────────────
// We replicate Bootstrap's spinner purely in CSS so the editor shows a real
// animated spinner without loading Bootstrap's CSS in the admin.
const SPINNER_BORDER_KEYFRAMES = `
@keyframes wm-spinner-border {
	to { transform: rotate(360deg); }
}
@keyframes wm-spinner-grow {
	0%   { transform: scale(0); }
	50%  { opacity: 1; transform: none; }
}
`;

function spinnerStyle( spinnerType, variant, size, customSize ) {
	const color  = variantHex( variant );
	const dim    = size === 'sm' ? '1rem' : size === 'custom' && customSize ? customSize : '2rem';
	const border = size === 'sm' ? '0.2em' : '0.25em';

	if ( spinnerType === 'grow' ) {
		return {
			display:         'inline-block',
			width:           dim,
			height:          dim,
			backgroundColor: color,
			borderRadius:    '50%',
			opacity:         0,
			animation:       'wm-spinner-grow 0.75s linear infinite',
			flexShrink:      0,
		};
	}

	return {
		display:      'inline-block',
		width:        dim,
		height:       dim,
		border:       `${ border } solid ${ color }`,
		borderRightColor: 'transparent',
		borderRadius: '50%',
		animation:    'wm-spinner-border 0.75s linear infinite',
		flexShrink:   0,
	};
}

// ── Edit component ─────────────────────────────────────────────────────────
export default function Edit( { attributes, setAttributes } ) {
	const {
		spinnerType, variant, size, customSize,
		alignment, showLabel, labelText, labelPosition,
		showVisuallyHidden, visuallyHiddenText,
		buttonMode, buttonText, buttonVariant, buttonDisabled,
	} = attributes;

	const blockProps = useBlockProps( { className: 'wmblocks-spinner-wrapper' } );

	const alignStyle = { left: 'flex-start', center: 'center', right: 'flex-end' }[ alignment ] || 'flex-start';
	const spStyle    = spinnerStyle( spinnerType, variant, size, customSize );
	const hexColor   = variantHex( variant );

	const isHorizontal = labelPosition === 'right' || labelPosition === 'left';
	const isVertical   = labelPosition === 'above'  || labelPosition === 'below';

	return (
		<>
			{/* ── Toolbar ───────────────────────────────────────────── */}
			<BlockControls>
				{/* Type toggle */}
				<ToolbarGroup>
					<ToolbarButton
						label={ __( 'Border spinner', 'wmblocks' ) }
						isPressed={ spinnerType === 'border' }
						onClick={ () => setAttributes( { spinnerType: 'border' } ) }
					>{ __( '◌ Border', 'wmblocks' ) }</ToolbarButton>
					<ToolbarButton
						label={ __( 'Grow spinner', 'wmblocks' ) }
						isPressed={ spinnerType === 'grow' }
						onClick={ () => setAttributes( { spinnerType: 'grow' } ) }
					>{ __( '● Grow', 'wmblocks' ) }</ToolbarButton>
				</ToolbarGroup>

				{/* Size */}
				<ToolbarGroup>
					{ SIZE_OPTIONS.filter( ( s ) => s.value !== 'custom' ).map( ( s ) => (
						<ToolbarButton key={ s.value }
							label={ 'Size: ' + s.label }
							isPressed={ size === s.value }
							onClick={ () => setAttributes( { size: s.value } ) }
						>{ s.value === '' ? __( 'MD', 'wmblocks' ) : __( 'SM', 'wmblocks' ) }</ToolbarButton>
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

				{/* Quick colour chips */}
				<ToolbarGroup>
					{ VARIANTS.map( ( v ) => (
						<ToolbarButton key={ v.value }
							label={ v.label }
							isPressed={ variant === v.value }
							onClick={ () => setAttributes( { variant: v.value } ) }
							style={ {
								background:  variant === v.value ? v.hex : '',
								color:       variant === v.value ? ( [ 'text-warning', 'text-info', 'text-light' ].includes( v.value ) ? '#000' : '#fff' ) : '',
								fontWeight:  700,
								fontSize:    '10px',
								minWidth:    '40px',
								borderRadius: '3px',
							} }
						>{ v.label.slice( 0, 3 ) }</ToolbarButton>
					) ) }
				</ToolbarGroup>
			</BlockControls>

			{/* ── Inspector Controls ───────────────────────────────── */}
			<InspectorControls>

				{/* Spinner appearance */}
				<PanelBody title={ __( 'Spinner', 'wmblocks' ) } initialOpen={ true }>
					<SelectControl
						label={ __( 'Type', 'wmblocks' ) }
						value={ spinnerType }
						options={ [
							{ label: 'Border (spinning ring)', value: 'border' },
							{ label: 'Grow (pulsing dot)',     value: 'grow'   },
						] }
						onChange={ ( v ) => setAttributes( { spinnerType: v } ) }
						help={ __( 'Border spins continuously; grow pulses in and out.', 'wmblocks' ) }
					/>
					<SelectControl
						label={ __( 'Colour', 'wmblocks' ) }
						value={ variant }
						options={ VARIANT_OPTIONS }
						onChange={ ( v ) => setAttributes( { variant: v } ) }
					/>
					<SelectControl
						label={ __( 'Size', 'wmblocks' ) }
						value={ size }
						options={ SIZE_OPTIONS }
						onChange={ ( v ) => setAttributes( { size: v } ) }
						help={ __( 'Small = spinner-border-sm / spinner-grow-sm. Custom = set your own width/height.', 'wmblocks' ) }
					/>
					{ size === 'custom' && (
						<TextControl
							label={ __( 'Custom Size', 'wmblocks' ) }
							value={ customSize }
							onChange={ ( v ) => setAttributes( { customSize: v } ) }
							placeholder="e.g. 3rem or 48px"
							help={ __( 'Applied as width and height inline style.', 'wmblocks' ) }
						/>
					) }
					<SelectControl
						label={ __( 'Alignment', 'wmblocks' ) }
						value={ alignment }
						options={ ALIGNMENT_OPTIONS }
						onChange={ ( v ) => setAttributes( { alignment: v } ) }
					/>
				</PanelBody>

				{/* Accessibility */}
				<PanelBody title={ __( 'Accessibility', 'wmblocks' ) } initialOpen={ false }>
					<ToggleControl
						label={ __( 'Visually hidden text', 'wmblocks' ) }
						checked={ !! showVisuallyHidden }
						onChange={ ( v ) => setAttributes( { showVisuallyHidden: v } ) }
						help={ __( 'Adds a <span class="visually-hidden"> for screen readers. Highly recommended.', 'wmblocks' ) }
					/>
					{ showVisuallyHidden && (
						<TextControl
							label={ __( 'Hidden text', 'wmblocks' ) }
							value={ visuallyHiddenText }
							onChange={ ( v ) => setAttributes( { visuallyHiddenText: v } ) }
						/>
					) }
				</PanelBody>

				{/* Visible label */}
				<PanelBody title={ __( 'Visible Label', 'wmblocks' ) } initialOpen={ false }>
					<ToggleControl
						label={ __( 'Show label', 'wmblocks' ) }
						checked={ !! showLabel }
						onChange={ ( v ) => setAttributes( { showLabel: v } ) }
						help={ __( 'Displays a visible text label alongside the spinner. Edit it directly on the canvas.', 'wmblocks' ) }
					/>
					{ showLabel && (
						<SelectControl
							label={ __( 'Label position', 'wmblocks' ) }
							value={ labelPosition }
							options={ LABEL_POSITION_OPTIONS }
							onChange={ ( v ) => setAttributes( { labelPosition: v } ) }
						/>
					) }
				</PanelBody>

				{/* Button mode */}
				<PanelBody title={ __( 'Button Mode', 'wmblocks' ) } initialOpen={ false }>
					<ToggleControl
						label={ __( 'Spinner inside a button', 'wmblocks' ) }
						checked={ !! buttonMode }
						onChange={ ( v ) => setAttributes( { buttonMode: v } ) }
						help={ __( 'Wraps the spinner inside a <button> element — ideal for loading states. Edit button text on the canvas.', 'wmblocks' ) }
					/>
					{ buttonMode && (
						<>
							<SelectControl
								label={ __( 'Button Style', 'wmblocks' ) }
								value={ buttonVariant }
								options={ BTN_VARIANTS }
								onChange={ ( v ) => setAttributes( { buttonVariant: v } ) }
							/>
							<ToggleControl
								label={ __( 'Disabled', 'wmblocks' ) }
								checked={ !! buttonDisabled }
								onChange={ ( v ) => setAttributes( { buttonDisabled: v } ) }
								help={ __( 'Disabled buttons prevent clicks while loading.', 'wmblocks' ) }
							/>
						</>
					) }
				</PanelBody>

			</InspectorControls>

			{/* ══════════════════════════════════════════════════════════
			    EDITOR CANVAS
			══════════════════════════════════════════════════════════ */}
			<div { ...blockProps }>

				{/* Inject keyframe animation into the editor */}
				<style>{ SPINNER_BORDER_KEYFRAMES }</style>

				{/* ── Meta strip ─────────────────────────────────────── */}
				<div className="wmblocks-spinner-meta-strip">
					<span className="wmblocks-spinner-chip">Spinner</span>
					<span className="wmblocks-spinner-chip">{ spinnerType }</span>
					{ size && <span className="wmblocks-spinner-chip">{ size === 'custom' ? customSize || 'custom' : size }</span> }
					{ buttonMode && <span className="wmblocks-spinner-chip">button mode</span> }
					{ showLabel  && <span className="wmblocks-spinner-chip">label: { labelPosition }</span> }
				</div>

				{/* ── Live preview area ──────────────────────────────── */}
				<div className="wmblocks-spinner-preview-row" style={ { justifyContent: alignStyle } }>

					{ buttonMode ? (
						// ── Button mode ─────────────────────────────────
						<button
							className={ 'btn ' + buttonVariant + ( buttonDisabled ? ' disabled' : '' ) }
							type="button"
							disabled={ buttonDisabled }
							style={ { display: 'inline-flex', alignItems: 'center', gap: '8px', cursor: 'default' } }
						>
							<span style={ spStyle } aria-hidden="true" />
							{/*
							  * Button text editable inline via RichText
							  */}
							<RichText
								tagName="span"
								value={ buttonText }
								onChange={ ( v ) => setAttributes( { buttonText: v } ) }
								allowedFormats={ [] }
								placeholder={ __( 'Button text…', 'wmblocks' ) }
							/>
						</button>

					) : (
						// ── Standalone spinner ──────────────────────────
						<div
							className="wmblocks-spinner-standalone"
							style={ {
								display:        'inline-flex',
								flexDirection:  ( isVertical ) ? 'column' : 'row',
								alignItems:     'center',
								gap:            '8px',
							} }
						>
							{/* Above or Left label */}
							{ showLabel && ( labelPosition === 'above' || labelPosition === 'left' ) && (
								<RichText
									tagName="span"
									className="wmblocks-spinner-label"
									value={ labelText }
									onChange={ ( v ) => setAttributes( { labelText: v } ) }
									allowedFormats={ [] }
									placeholder={ __( 'Loading…', 'wmblocks' ) }
									style={ { color: hexColor, fontWeight: 500 } }
								/>
							) }

							{/* The spinner */}
							<span style={ spStyle } aria-hidden="true" />

							{/* Below or Right label */}
							{ showLabel && ( labelPosition === 'below' || labelPosition === 'right' ) && (
								<RichText
									tagName="span"
									className="wmblocks-spinner-label"
									value={ labelText }
									onChange={ ( v ) => setAttributes( { labelText: v } ) }
									allowedFormats={ [] }
									placeholder={ __( 'Loading…', 'wmblocks' ) }
									style={ { color: hexColor, fontWeight: 500 } }
								/>
							) }
						</div>
					) }

				</div>

				{/* ── Canvas controls row ────────────────────────────── */}
				<div className="wmblocks-spinner-controls-row">

					{/* Type pills */}
					<div className="wmblocks-spinner-control-group">
						<span className="wmblocks-spinner-control-label">{ __( 'Type', 'wmblocks' ) }</span>
						{ [ { v: 'border', icon: '◌', tip: 'Border' }, { v: 'grow', icon: '●', tip: 'Grow' } ].map( ( t ) => (
							<button key={ t.v }
								className={ 'wmblocks-spinner-pill' + ( spinnerType === t.v ? ' is-active' : '' ) }
								onClick={ () => setAttributes( { spinnerType: t.v } ) }
								title={ t.tip }
							>{ t.icon } { t.tip }</button>
						) ) }
					</div>

					{/* Size pills */}
					<div className="wmblocks-spinner-control-group">
						<span className="wmblocks-spinner-control-label">{ __( 'Size', 'wmblocks' ) }</span>
						{ [ { v: '', l: 'MD' }, { v: 'sm', l: 'SM' }, { v: 'custom', l: 'Custom' } ].map( ( s ) => (
							<button key={ s.v }
								className={ 'wmblocks-spinner-pill' + ( size === s.v ? ' is-active' : '' ) }
								onClick={ () => setAttributes( { size: s.v } ) }
							>{ s.l }</button>
						) ) }
						{ size === 'custom' && (
							<input
								type="text"
								className="wmblocks-spinner-custom-size-input"
								value={ customSize }
								onChange={ ( e ) => setAttributes( { customSize: e.target.value } ) }
								placeholder="3rem"
								title={ __( 'Custom size (width & height)', 'wmblocks' ) }
							/>
						) }
					</div>

					{/* Colour swatches */}
					<div className="wmblocks-spinner-control-group">
						<span className="wmblocks-spinner-control-label">{ __( 'Colour', 'wmblocks' ) }</span>
						<div className="wmblocks-spinner-swatches">
							{ VARIANTS.map( ( v ) => (
								<button key={ v.value }
									className={ 'wmblocks-spinner-swatch' + ( variant === v.value ? ' is-active' : '' ) }
									style={ {
										background:  v.hex,
										boxShadow:   variant === v.value ? `0 0 0 3px #fff, 0 0 0 5px ${ v.hex }` : 'none',
										outline:     v.hex === '#f8f9fa' ? '1px solid #dee2e6' : 'none',
									} }
									onClick={ () => setAttributes( { variant: v.value } ) }
									title={ v.label }
								/>
							) ) }
						</div>
					</div>

				</div>

				{/* ── Hint ────────────────────────────────────────────── */}
				<p className="wmblocks-spinner-footer-hint">
					{ buttonMode
						? __( 'Click button text to edit label · type, size & colour above · all options in sidebar →', 'wmblocks' )
						: __( 'Click label text to edit (if shown) · type, size & colour above · label & button mode in sidebar →', 'wmblocks' )
					}
				</p>

			</div>
		</>
	);
}
