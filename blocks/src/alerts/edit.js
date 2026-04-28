import { __ } from '@wordpress/i18n';
import {
	useBlockProps,
	InspectorControls,
	InnerBlocks,
	RichText,
	BlockControls,
} from '@wordpress/block-editor';
import {
	PanelBody,
	SelectControl,
	ToggleControl,
	TextControl,
	ToolbarGroup,
	ToolbarButton,
} from '@wordpress/components';
import './editor.scss';

// ── Variant definitions ────────────────────────────────────────────────────
const VARIANTS = [
	{ label: 'Primary',   value: 'alert-primary',   color: '#084298', bg: '#cfe2ff', border: '#b6d4fe', icon: 'bi-info-circle-fill'       },
	{ label: 'Secondary', value: 'alert-secondary',  color: '#41464b', bg: '#e2e3e5', border: '#d3d6d8', icon: 'bi-info-circle-fill'       },
	{ label: 'Success',   value: 'alert-success',    color: '#0f5132', bg: '#d1e7dd', border: '#badbcc', icon: 'bi-check-circle-fill'      },
	{ label: 'Danger',    value: 'alert-danger',     color: '#842029', bg: '#f8d7da', border: '#f5c2c7', icon: 'bi-x-octagon-fill'         },
	{ label: 'Warning',   value: 'alert-warning',    color: '#664d03', bg: '#fff3cd', border: '#ffecb5', icon: 'bi-exclamation-triangle-fill' },
	{ label: 'Info',      value: 'alert-info',       color: '#055160', bg: '#cff4fc', border: '#b6effb', icon: 'bi-info-circle-fill'       },
	{ label: 'Light',     value: 'alert-light',      color: '#636464', bg: '#fefefe', border: '#fdfdfe', icon: 'bi-lightbulb-fill'         },
	{ label: 'Dark',      value: 'alert-dark',       color: '#141619', bg: '#d3d3d4', border: '#bcbebf', icon: 'bi-moon-fill'              },
];

// Bootstrap Icons available for the icon picker
const ICON_OPTIONS = [
	{ label: 'Info circle',          value: 'bi-info-circle-fill'          },
	{ label: 'Check circle',         value: 'bi-check-circle-fill'         },
	{ label: 'Exclamation triangle', value: 'bi-exclamation-triangle-fill' },
	{ label: 'X octagon',            value: 'bi-x-octagon-fill'            },
	{ label: 'Exclamation circle',   value: 'bi-exclamation-circle-fill'   },
	{ label: 'Bell',                 value: 'bi-bell-fill'                 },
	{ label: 'Shield',               value: 'bi-shield-fill-check'         },
	{ label: 'Lightbulb',            value: 'bi-lightbulb-fill'            },
	{ label: 'Star',                 value: 'bi-star-fill'                 },
	{ label: 'Heart',                value: 'bi-heart-fill'                },
	{ label: 'Lock',                 value: 'bi-lock-fill'                 },
	{ label: 'Moon',                 value: 'bi-moon-fill'                 },
];

// ── Default InnerBlocks template ───────────────────────────────────────────
const ALERT_BODY_TEMPLATE = [
	[ 'core/paragraph', { placeholder: __( 'Alert message — add your content here…', 'wmblocks' ) } ],
];

// ── Helper: get variant object by value ───────────────────────────────────
function getVariant( value ) {
	return VARIANTS.find( ( v ) => v.value === value ) || VARIANTS[ 0 ];
}

// ── Simple Unicode icon map for editor preview (no BS Icons CDN in editor) ─
const ICON_UNICODE = {
	'bi-info-circle-fill':           'ℹ',
	'bi-check-circle-fill':          '✔',
	'bi-exclamation-triangle-fill':  '⚠',
	'bi-x-octagon-fill':             '✖',
	'bi-exclamation-circle-fill':    '❕',
	'bi-bell-fill':                  '🔔',
	'bi-shield-fill-check':          '🛡',
	'bi-lightbulb-fill':             '💡',
	'bi-star-fill':                  '★',
	'bi-heart-fill':                 '♥',
	'bi-lock-fill':                  '🔒',
	'bi-moon-fill':                  '🌙',
};

// ── Edit component ─────────────────────────────────────────────────────────
export default function Edit( { attributes, setAttributes } ) {
	const {
		variant, heading, showHeading,
		dismissible, showIcon, icon,
		showLink, linkText, linkUrl,
	} = attributes;

	const variantObj = getVariant( variant );

	const blockProps = useBlockProps( {
		className: 'wmblocks-alert-wrapper',
	} );

	// Auto-suggest default icon when variant changes
	function handleVariantChange( v ) {
		const obj = getVariant( v );
		setAttributes( {
			variant: v,
			// Only auto-update icon if user hasn't already customised it
			// (we check if current icon matches any old variant's default)
			icon: VARIANTS.some( ( vv ) => vv.icon === icon ) ? obj.icon : icon,
		} );
	}

	return (
		<>
			{/* ── Toolbar — variant quick-switcher ──────────────────── */}
			<BlockControls>
				<ToolbarGroup>
					{ VARIANTS.slice( 0, 4 ).map( ( v ) => (
						<ToolbarButton
							key={ v.value }
							label={ v.label }
							isPressed={ variant === v.value }
							onClick={ () => handleVariantChange( v.value ) }
							style={ {
								background: variant === v.value ? v.bg : '',
								color:      variant === v.value ? v.color : '',
								fontWeight: 600,
								fontSize:   '11px',
								minWidth:   '52px',
							} }
						>
							{ v.label.slice( 0, 4 ) }
						</ToolbarButton>
					) ) }
				</ToolbarGroup>
				<ToolbarGroup>
					{ VARIANTS.slice( 4 ).map( ( v ) => (
						<ToolbarButton
							key={ v.value }
							label={ v.label }
							isPressed={ variant === v.value }
							onClick={ () => handleVariantChange( v.value ) }
							style={ {
								background: variant === v.value ? v.bg : '',
								color:      variant === v.value ? v.color : '',
								fontWeight: 600,
								fontSize:   '11px',
								minWidth:   '52px',
							} }
						>
							{ v.label.slice( 0, 4 ) }
						</ToolbarButton>
					) ) }
				</ToolbarGroup>
				<ToolbarGroup>
					<ToolbarButton
						icon="dismiss"
						label={ dismissible
							? __( 'Remove dismiss button', 'wmblocks' )
							: __( 'Add dismiss button', 'wmblocks' )
						}
						isPressed={ dismissible }
						onClick={ () => setAttributes( { dismissible: ! dismissible } ) }
					>
						{ dismissible ? '✕ on' : '✕ off' }
					</ToolbarButton>
				</ToolbarGroup>
			</BlockControls>

			{/* ── Inspector Controls ───────────────────────────────── */}
			<InspectorControls>

				{/* Alert type */}
				<PanelBody title={ __( 'Alert Type', 'wmblocks' ) } initialOpen={ true }>
					<SelectControl
						label={ __( 'Variant', 'wmblocks' ) }
						value={ variant }
						options={ VARIANTS.map( ( v ) => ( { label: v.label, value: v.value } ) ) }
						onChange={ handleVariantChange }
						help={ __( 'Sets the colour and meaning of the alert.', 'wmblocks' ) }
					/>
					<ToggleControl
						label={ __( 'Dismissible', 'wmblocks' ) }
						checked={ !! dismissible }
						onChange={ ( v ) => setAttributes( { dismissible: v } ) }
						help={ __( 'Add a × close button so users can hide the alert.', 'wmblocks' ) }
					/>
				</PanelBody>

				{/* Heading */}
				<PanelBody title={ __( 'Alert Heading', 'wmblocks' ) } initialOpen={ true }>
					<ToggleControl
						label={ __( 'Show Heading', 'wmblocks' ) }
						checked={ !! showHeading }
						onChange={ ( v ) => setAttributes( { showHeading: v } ) }
						help={ __( 'Display a bold heading above the alert body. Edit it directly on the canvas.', 'wmblocks' ) }
					/>
				</PanelBody>

				{/* Icon */}
				<PanelBody title={ __( 'Icon', 'wmblocks' ) } initialOpen={ false }>
					<ToggleControl
						label={ __( 'Show Icon', 'wmblocks' ) }
						checked={ !! showIcon }
						onChange={ ( v ) => setAttributes( { showIcon: v } ) }
						help={ __( 'Prepend a Bootstrap Icon to the alert. Requires Bootstrap Icons to be loaded by the theme.', 'wmblocks' ) }
					/>
					{ showIcon && (
						<SelectControl
							label={ __( 'Icon', 'wmblocks' ) }
							value={ icon }
							options={ ICON_OPTIONS }
							onChange={ ( v ) => setAttributes( { icon: v } ) }
						/>
					) }
				</PanelBody>

				{/* Optional link */}
				<PanelBody title={ __( 'Alert Link', 'wmblocks' ) } initialOpen={ false }>
					<ToggleControl
						label={ __( 'Show Link', 'wmblocks' ) }
						checked={ !! showLink }
						onChange={ ( v ) => setAttributes( { showLink: v } ) }
						help={ __( 'Append a styled alert-link below the content.', 'wmblocks' ) }
					/>
					{ showLink && (
						<>
							<TextControl
								label={ __( 'Link Text', 'wmblocks' ) }
								value={ linkText }
								onChange={ ( v ) => setAttributes( { linkText: v } ) }
							/>
							<TextControl
								label={ __( 'Link URL', 'wmblocks' ) }
								value={ linkUrl }
								onChange={ ( v ) => setAttributes( { linkUrl: v } ) }
								placeholder="https://"
							/>
						</>
					) }
				</PanelBody>

			</InspectorControls>

			{/* ── Editor Canvas ────────────────────────────────────── */}
			<div { ...blockProps }>

				{/* Live alert preview — styled to match the chosen variant */}
				<div
					className="wmblocks-alert-preview"
					style={ {
						background:   variantObj.bg,
						borderColor:  variantObj.border,
						color:        variantObj.color,
					} }
					role="alert"
				>
					{/* Dismiss button — decorative in editor */}
					{ dismissible && (
						<span
							className="wmblocks-alert-close-preview"
							title={ __( '(dismiss button — decorative in editor)', 'wmblocks' ) }
							aria-hidden="true"
						>
							&times;
						</span>
					) }

					{/* ── Heading row ─────────────────────────────────── */}
					{ showHeading && (
						<div className="wmblocks-alert-heading-row">
							{ showIcon && (
								<span
									className="wmblocks-alert-icon"
									aria-hidden="true"
								>
									{ ICON_UNICODE[ icon ] || 'ℹ' }
								</span>
							) }
							{/*
							  * RichText heading — click to type directly on the canvas.
							  * Renders as <h4 class="alert-heading"> in render.php.
							  */}
							<RichText
								tagName="h4"
								className="wmblocks-alert-heading"
								value={ heading }
								onChange={ ( v ) => setAttributes( { heading: v } ) }
								allowedFormats={ [] }
								placeholder={ __( 'Alert heading…', 'wmblocks' ) }
								style={ { color: variantObj.color } }
							/>
						</div>
					) }

					{/* Icon-only row when no heading */}
					{ showIcon && ! showHeading && (
						<div className="wmblocks-alert-icon-row">
							<span className="wmblocks-alert-icon" aria-hidden="true">
								{ ICON_UNICODE[ icon ] || 'ℹ' }
							</span>
						</div>
					) }

					{/*
					  * ── InnerBlocks body ─────────────────────────────
					  * Users can drop in paragraphs, lists, buttons, images —
					  * anything — directly inside the alert.
					  */}
					
						<InnerBlocks
							template={ ALERT_BODY_TEMPLATE }
							templateLock={ false }
						/>
				

					{/* Optional alert-link row */}
					{ showLink && (
						<div className="wmblocks-alert-link-row">
							<span className="wmblocks-alert-link-preview" style={ { color: variantObj.color } }>
								{ linkText || __( 'Learn more', 'wmblocks' ) }
								{ linkUrl && linkUrl !== '#' && (
									<span className="wmblocks-alert-link-url"> ({ linkUrl })</span>
								) }
							</span>
							<span className="wmblocks-alert-link-hint">
								{ __( '← edit in sidebar', 'wmblocks' ) }
							</span>
						</div>
					) }
				</div>

				{/* Variant badge strip */}
				<div className="wmblocks-alert-footer">
					<span
						className="wmblocks-alert-variant-pill"
						style={ { background: variantObj.bg, color: variantObj.color, borderColor: variantObj.border } }
					>
						{ variantObj.label }
					</span>
					{ dismissible && <span className="wmblocks-alert-meta">dismissible</span> }
					{ showIcon    && <span className="wmblocks-alert-meta">icon: { icon.replace( 'bi-', '' ).replace( '-fill', '' ) }</span> }
					{ showHeading && <span className="wmblocks-alert-meta">with heading</span> }
					{ showLink    && <span className="wmblocks-alert-meta">with link</span> }
					<span className="wmblocks-alert-hint">
						{ __( 'Click heading or body to edit · variant & options in sidebar →', 'wmblocks' ) }
					</span>
				</div>

			</div>
		</>
	);
}
