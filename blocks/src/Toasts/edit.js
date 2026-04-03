import { __ } from '@wordpress/i18n';
import { useBlockProps, InspectorControls, RichText } from '@wordpress/block-editor';
import { PanelBody, TextControl, SelectControl, ToggleControl, RangeControl } from '@wordpress/components';
import { useEffect } from '@wordpress/element';
import './editor.scss';

const BTN_VARIANTS = [
	{ label: 'Primary',           value: 'btn-primary' },
	{ label: 'Secondary',         value: 'btn-secondary' },
	{ label: 'Success',           value: 'btn-success' },
	{ label: 'Danger',            value: 'btn-danger' },
	{ label: 'Warning',           value: 'btn-warning' },
	{ label: 'Info',              value: 'btn-info' },
	{ label: 'Light',             value: 'btn-light' },
	{ label: 'Dark',              value: 'btn-dark' },
	{ label: 'Outline Primary',   value: 'btn-outline-primary' },
	{ label: 'Outline Secondary', value: 'btn-outline-secondary' },
];

const COLOR_VARIANTS = [
	{ label: '— Default (white) —',  value: '' },
	{ label: 'Primary',              value: 'text-bg-primary' },
	{ label: 'Secondary',            value: 'text-bg-secondary' },
	{ label: 'Success',              value: 'text-bg-success' },
	{ label: 'Danger',               value: 'text-bg-danger' },
	{ label: 'Warning',              value: 'text-bg-warning' },
	{ label: 'Info',                 value: 'text-bg-info' },
	{ label: 'Light',                value: 'text-bg-light' },
	{ label: 'Dark',                 value: 'text-bg-dark' },
];

const POSITIONS = [
	{ label: 'Bottom Right',  value: 'bottom-0 end-0' },
	{ label: 'Bottom Left',   value: 'bottom-0 start-0' },
	{ label: 'Bottom Center', value: 'bottom-0 start-50 translate-middle-x' },
	{ label: 'Top Right',     value: 'top-0 end-0' },
	{ label: 'Top Left',      value: 'top-0 start-0' },
	{ label: 'Top Center',    value: 'top-0 start-50 translate-middle-x' },
	{ label: 'Middle Center', value: 'top-50 start-50 translate-middle' },
];

// Color map for editor preview swatch
const VARIANT_COLORS = {
	'text-bg-primary':   { bg: '#0d6efd', color: '#fff' },
	'text-bg-secondary': { bg: '#6c757d', color: '#fff' },
	'text-bg-success':   { bg: '#198754', color: '#fff' },
	'text-bg-danger':    { bg: '#dc3545', color: '#fff' },
	'text-bg-warning':   { bg: '#ffc107', color: '#000' },
	'text-bg-info':      { bg: '#0dcaf0', color: '#000' },
	'text-bg-light':     { bg: '#f8f9fa', color: '#000' },
	'text-bg-dark':      { bg: '#212529', color: '#fff' },
	'':                  { bg: '#fff',    color: '#000' },
};

export default function Edit( { attributes, setAttributes, clientId } ) {
	const {
		toastId, triggerText, triggerVariant, showTrigger,
		toastTitle, toastSubtitle, toastBody,
		showHeader, showClose, autohide, delay,
		position, colorVariant,
	} = attributes;

	// Auto-generate toastId on mount
	useEffect( () => {
		if ( ! toastId ) {
			setAttributes( { toastId: 'toast-' + clientId.slice( 0, 8 ) } );
		}
	}, [] );

	const colors = VARIANT_COLORS[ colorVariant ] || VARIANT_COLORS[ '' ];

	const blockProps = useBlockProps( {
		className: 'wmblocks-toast-wrapper',
	} );

	return (
		<>
			<InspectorControls>

				{ /* Trigger */ }
				<PanelBody title={ __( 'Trigger Button', 'wmblocks' ) } initialOpen={ true }>
					<ToggleControl
						label={ __( 'Show Trigger Button', 'wmblocks' ) }
						checked={ !! showTrigger }
						onChange={ ( v ) => setAttributes( { showTrigger: v } ) }
						help={ __( 'Uncheck if triggering the toast from custom JS.', 'wmblocks' ) }
					/>
					{ showTrigger && (
						<>
							<TextControl
								label={ __( 'Button Text', 'wmblocks' ) }
								value={ triggerText }
								onChange={ ( v ) => setAttributes( { triggerText: v } ) }
							/>
							<SelectControl
								label={ __( 'Button Style', 'wmblocks' ) }
								value={ triggerVariant }
								options={ BTN_VARIANTS }
								onChange={ ( v ) => setAttributes( { triggerVariant: v } ) }
							/>
						</>
					) }
				</PanelBody>

				{ /* Toast appearance */ }
				<PanelBody title={ __( 'Toast Settings', 'wmblocks' ) } initialOpen={ true }>
					<TextControl
						label={ __( 'Toast ID', 'wmblocks' ) }
						value={ toastId }
						onChange={ ( v ) => setAttributes( { toastId: v.replace( /\s+/g, '-' ).toLowerCase() } ) }
						help={ __( 'Used to target this toast from JS. Auto-generated.', 'wmblocks' ) }
					/>
					<SelectControl
						label={ __( 'Color Variant', 'wmblocks' ) }
						value={ colorVariant }
						options={ COLOR_VARIANTS }
						onChange={ ( v ) => setAttributes( { colorVariant: v } ) }
					/>
					<SelectControl
						label={ __( 'Position', 'wmblocks' ) }
						value={ position }
						options={ POSITIONS }
						onChange={ ( v ) => setAttributes( { position: v } ) }
					/>
					<ToggleControl
						label={ __( 'Show Header', 'wmblocks' ) }
						checked={ !! showHeader }
						onChange={ ( v ) => setAttributes( { showHeader: v } ) }
					/>
					<ToggleControl
						label={ __( 'Show Close Button', 'wmblocks' ) }
						checked={ !! showClose }
						onChange={ ( v ) => setAttributes( { showClose: v } ) }
					/>
				</PanelBody>

				{ /* Behaviour */ }
				<PanelBody title={ __( 'Behaviour', 'wmblocks' ) } initialOpen={ false }>
					<ToggleControl
						label={ __( 'Auto Hide', 'wmblocks' ) }
						checked={ !! autohide }
						onChange={ ( v ) => setAttributes( { autohide: v } ) }
						help={ __( 'Automatically dismiss the toast after a delay.', 'wmblocks' ) }
					/>
					{ autohide && (
						<RangeControl
							label={ __( 'Delay (ms)', 'wmblocks' ) }
							value={ delay }
							onChange={ ( v ) => setAttributes( { delay: v } ) }
							min={ 500 }
							max={ 15000 }
							step={ 500 }
							help={ __( 'Time before toast auto-dismisses.', 'wmblocks' ) }
						/>
					) }
				</PanelBody>

			</InspectorControls>

			<div { ...blockProps }>

				{ /* Trigger button preview */ }
				{ showTrigger && (
					<div style={ { marginBottom: '16px' } }>
						<button className={ 'btn ' + triggerVariant } style={ { cursor: 'default' } }>
							{ triggerText }
						</button>
						<span style={ { marginLeft: '8px', fontSize: '11px', color: '#757575' } }>
							{ __( '← triggers the toast on frontend', 'wmblocks' ) }
						</span>
					</div>
				) }

				{ /* Toast preview */ }
				<div style={ { fontSize: '11px', color: '#757575', textTransform: 'uppercase', fontWeight: 600, marginBottom: '8px', letterSpacing: '0.5px' } }>
					{ __( 'Toast Preview', 'wmblocks' ) }
					<span style={ { marginLeft: '8px', fontWeight: 400, textTransform: 'none', color: '#aaa' } }>
						({ POSITIONS.find( p => p.value === position )?.label || position })
					</span>
				</div>

				<div
					className={ [ 'toast show', colorVariant ].filter( Boolean ).join( ' ' ) }
					style={ {
						background: colors.bg,
						color: colors.color,
						minWidth: '300px',
						maxWidth: '400px',
						border: '1px solid rgba(0,0,0,0.175)',
						borderRadius: '6px',
						boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
						overflow: 'hidden',
					} }
					role="alert"
				>
					{ /* Toast header */ }
					{ showHeader && (
						<div
							className="toast-header"
							style={ {
								background: colorVariant ? 'rgba(255,255,255,0.15)' : 'rgba(255,255,255,0.85)',
								borderBottom: '1px solid rgba(0,0,0,0.1)',
								padding: '8px 12px',
								display: 'flex',
								alignItems: 'center',
								gap: '8px',
							} }
						>
							{ /* Color dot */ }
							<div style={ { width: '16px', height: '16px', borderRadius: '50%', background: colorVariant ? colors.color : '#0d6efd', flexShrink: 0 } } />
							<RichText
								tagName="strong"
								value={ toastTitle }
								onChange={ ( v ) => setAttributes( { toastTitle: v } ) }
								placeholder={ __( 'Toast title…', 'wmblocks' ) }
								allowedFormats={ [] }
								style={ { flex: 1, color: colorVariant ? colors.color : '#000' } }
							/>
							<RichText
								tagName="small"
								value={ toastSubtitle }
								onChange={ ( v ) => setAttributes( { toastSubtitle: v } ) }
								placeholder={ __( '11 mins ago…', 'wmblocks' ) }
								allowedFormats={ [] }
								style={ { color: colorVariant ? 'rgba(255,255,255,0.75)' : '#6c757d', whiteSpace: 'nowrap' } }
							/>
							{ showClose && (
								<button
									type="button"
									className="btn-close"
									style={ { cursor: 'default', filter: colorVariant ? 'invert(1)' : 'none', flexShrink: 0 } }
									aria-label={ __( 'Close', 'wmblocks' ) }
								/>
							) }
						</div>
					) }

					{ /* Toast body */ }
					<div className="toast-body" style={ { padding: '12px', color: colors.color } }>
						<RichText
							tagName="span"
							value={ toastBody }
							onChange={ ( v ) => setAttributes( { toastBody: v } ) }
							placeholder={ __( 'Toast body message…', 'wmblocks' ) }
							allowedFormats={ [ 'core/bold', 'core/italic', 'core/link' ] }
						/>
						{ ! showHeader && showClose && (
							<div style={ { marginTop: '8px', display: 'flex', justifyContent: 'flex-end' } }>
								<button
									type="button"
									className="btn-close"
									style={ { cursor: 'default', filter: colorVariant ? 'invert(1)' : 'none' } }
									aria-label={ __( 'Close', 'wmblocks' ) }
								/>
							</div>
						) }
					</div>
				</div>

			</div>
		</>
	);
}
