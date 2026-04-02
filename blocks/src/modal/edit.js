import { __ } from '@wordpress/i18n';
import { useBlockProps, InspectorControls, InnerBlocks, RichText } from '@wordpress/block-editor';
import { PanelBody, TextControl, SelectControl, ToggleControl } from '@wordpress/components';
import { useState } from '@wordpress/element';
import './editor.scss';

const MODAL_BODY_TEMPLATE = [
	[ 'core/paragraph', { content: 'Modal body content goes here. Add any blocks you need.' } ],
];

const BTN_VARIANTS = [
	{ label: 'Primary',   value: 'btn-primary' },
	{ label: 'Secondary', value: 'btn-secondary' },
	{ label: 'Success',   value: 'btn-success' },
	{ label: 'Danger',    value: 'btn-danger' },
	{ label: 'Warning',   value: 'btn-warning' },
	{ label: 'Info',      value: 'btn-info' },
	{ label: 'Light',     value: 'btn-light' },
	{ label: 'Dark',      value: 'btn-dark' },
	{ label: 'Link',      value: 'btn-link' },
	{ label: 'Outline Primary',   value: 'btn-outline-primary' },
	{ label: 'Outline Secondary', value: 'btn-outline-secondary' },
	{ label: 'Outline Success',   value: 'btn-outline-success' },
	{ label: 'Outline Danger',    value: 'btn-outline-danger' },
];

function labelToId( label ) {
	return ( label || '' )
		.toLowerCase()
		.trim()
		.replace( /\s+/g, '-' )
		.replace( /[^a-z0-9\-]/g, '' );
}

export default function Edit( { attributes, setAttributes, clientId } ) {
	const {
		modalId, triggerText, triggerVariant, modalTitle,
		modalSize, centered, scrollable, staticBackdrop,
		showFooter, closeButtonText, saveButtonText, saveButtonVariant,
	} = attributes;

	// Preview toggle — show modal body in editor
	const [ previewOpen, setPreviewOpen ] = useState( true );

	// Auto generate modalId from title if not set
	const resolvedId = modalId || labelToId( modalTitle ) || ( 'modal-' + clientId.slice( 0, 6 ) );

	const blockProps = useBlockProps( {
		className: 'wmblocks-modal-wrapper',
	} );

	return (
		<>
			<InspectorControls>

				{ /* ── Trigger Button ── */ }
				<PanelBody title={ __( 'Trigger Button', 'wmblocks' ) } initialOpen={ true }>
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
				</PanelBody>

				{ /* ── Modal Settings ── */ }
				<PanelBody title={ __( 'Modal Settings', 'wmblocks' ) } initialOpen={ true }>
					<TextControl
						label={ __( 'Modal ID', 'wmblocks' ) }
						value={ modalId }
						onChange={ ( v ) => setAttributes( { modalId: v.replace( /\s+/g, '-' ).toLowerCase() } ) }
						help={ __( 'Auto-generated from title. Override if needed.', 'wmblocks' ) }
						placeholder={ resolvedId }
					/>
					<SelectControl
						label={ __( 'Modal Size', 'wmblocks' ) }
						value={ modalSize }
						options={ [
							{ label: 'Default',      value: '' },
							{ label: 'Small',        value: 'modal-sm' },
							{ label: 'Large',        value: 'modal-lg' },
							{ label: 'Extra Large',  value: 'modal-xl' },
							{ label: 'Fullscreen',   value: 'modal-fullscreen' },
							{ label: 'Fullscreen SM', value: 'modal-fullscreen-sm-down' },
							{ label: 'Fullscreen MD', value: 'modal-fullscreen-md-down' },
							{ label: 'Fullscreen LG', value: 'modal-fullscreen-lg-down' },
						] }
						onChange={ ( v ) => setAttributes( { modalSize: v } ) }
					/>
					<ToggleControl
						label={ __( 'Vertically Centered', 'wmblocks' ) }
						checked={ !! centered }
						onChange={ ( v ) => setAttributes( { centered: v } ) }
					/>
					<ToggleControl
						label={ __( 'Scrollable Body', 'wmblocks' ) }
						checked={ !! scrollable }
						onChange={ ( v ) => setAttributes( { scrollable: v } ) }
						help={ __( 'Allows the modal body to scroll independently.', 'wmblocks' ) }
					/>
					<ToggleControl
						label={ __( 'Static Backdrop', 'wmblocks' ) }
						checked={ !! staticBackdrop }
						onChange={ ( v ) => setAttributes( { staticBackdrop: v } ) }
						help={ __( 'Clicking outside the modal will not close it.', 'wmblocks' ) }
					/>
				</PanelBody>

				{ /* ── Footer ── */ }
				<PanelBody title={ __( 'Footer', 'wmblocks' ) } initialOpen={ false }>
					<ToggleControl
						label={ __( 'Show Footer', 'wmblocks' ) }
						checked={ !! showFooter }
						onChange={ ( v ) => setAttributes( { showFooter: v } ) }
					/>
					{ showFooter && (
						<>
							<TextControl
								label={ __( 'Close Button Text', 'wmblocks' ) }
								value={ closeButtonText }
								onChange={ ( v ) => setAttributes( { closeButtonText: v } ) }
							/>
							<TextControl
								label={ __( 'Save Button Text', 'wmblocks' ) }
								value={ saveButtonText }
								onChange={ ( v ) => setAttributes( { saveButtonText: v } ) }
							/>
							<SelectControl
								label={ __( 'Save Button Style', 'wmblocks' ) }
								value={ saveButtonVariant }
								options={ BTN_VARIANTS }
								onChange={ ( v ) => setAttributes( { saveButtonVariant: v } ) }
							/>
						</>
					) }
				</PanelBody>

			</InspectorControls>

			<div { ...blockProps }>

				{ /* ── Trigger button preview ── */ }
				<div style={ { marginBottom: '12px' } }>
					<div style={ { fontSize: '11px', color: '#757575', textTransform: 'uppercase', fontWeight: 600, marginBottom: '6px' } }>
						{ __( 'Trigger Button', 'wmblocks' ) }
					</div>
					<button
						className={ 'btn ' + triggerVariant }
						onClick={ () => setPreviewOpen( ! previewOpen ) }
						style={ { cursor: 'pointer' } }
					>
						{ triggerText }
					</button>
					<span style={ { marginLeft: '8px', fontSize: '11px', color: '#757575' } }>
						{ previewOpen ? __( '(click to collapse modal preview)', 'wmblocks' ) : __( '(click to expand modal preview)', 'wmblocks' ) }
					</span>
				</div>

				{ /* ── Modal preview ── */ }
				{ previewOpen && (
					<div className="wmblocks-modal-preview">

						{ /* Modal header */ }
						<div className="modal-header">
							<RichText
								tagName="h5"
								className="modal-title"
								value={ modalTitle }
								onChange={ ( v ) => {
									const autoId = labelToId( modalTitle );
									const isAutoId = modalId === autoId || modalId === '';
									setAttributes( {
										modalTitle: v,
										...( isAutoId ? { modalId: labelToId( v ) } : {} ),
									} );
								} }
								placeholder={ __( 'Modal Title', 'wmblocks' ) }
								allowedFormats={ [] }
							/>
							<button
								type="button"
								className="btn-close"
								style={ { cursor: 'default' } }
								aria-label={ __( 'Close', 'wmblocks' ) }
							/>
						</div>

						{ /* Modal body — InnerBlocks */ }
						<div className="modal-body">
							<InnerBlocks
								template={ MODAL_BODY_TEMPLATE }
								templateLock={ false }
							/>
						</div>

						{ /* Modal footer */ }
						{ showFooter && (
							<div className="modal-footer">
								<RichText
									tagName="span"
									className="btn btn-secondary"
									value={ closeButtonText }
									onChange={ ( v ) => setAttributes( { closeButtonText: v } ) }
									allowedFormats={ [] }
									style={ { cursor: 'default' } }
								/>
								<RichText
									tagName="span"
									className={ 'btn ' + saveButtonVariant }
									value={ saveButtonText }
									onChange={ ( v ) => setAttributes( { saveButtonText: v } ) }
									allowedFormats={ [] }
									style={ { cursor: 'default', marginLeft: '8px' } }
								/>
							</div>
						) }

					</div>
				) }

			</div>
		</>
	);
}
