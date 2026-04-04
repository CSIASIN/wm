import { __ } from '@wordpress/i18n';
import { useBlockProps, InspectorControls, InnerBlocks, MediaUpload, MediaUploadCheck } from '@wordpress/block-editor';
import { PanelBody, SelectControl, TextControl, ToggleControl, Button, ButtonGroup } from '@wordpress/components';
import './editor.scss';

const IMAGE_CLASSES = [
	{ label: 'img-fluid',      value: 'img-fluid' },
	{ label: 'img-thumbnail',  value: 'img-thumbnail' },
	{ label: 'rounded',        value: 'rounded' },
	{ label: 'rounded-0',      value: 'rounded-0' },
	{ label: 'rounded-1',      value: 'rounded-1' },
	{ label: 'rounded-2',      value: 'rounded-2' },
	{ label: 'rounded-3',      value: 'rounded-3' },
	{ label: 'rounded-4',      value: 'rounded-4' },
	{ label: 'rounded-5',      value: 'rounded-5' },
	{ label: 'rounded-circle', value: 'rounded-circle' },
];

const ALIGN_OPTIONS = [
	{ label: 'Top',    value: 'align-self-start' },
	{ label: 'Middle', value: 'align-self-center' },
	{ label: 'Bottom', value: 'align-self-end' },
];

const GAP_OPTIONS = [
	{ label: 'me-1', value: 'me-1' },
	{ label: 'me-2', value: 'me-2' },
	{ label: 'me-3', value: 'me-3' },
	{ label: 'me-4', value: 'me-4' },
	{ label: 'me-5', value: 'me-5' },
];

const CONTENT_TEMPLATE = [
	[ 'core/heading',   { level: 5, placeholder: 'Media heading' } ],
	[ 'core/paragraph', { placeholder: 'Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis.' } ],
];

function ImageUploader( { imageUrl, imageId, imageAlt, imageClass, imageWidth, onSelect, onRemove, label } ) {
	return (
		<MediaUploadCheck>
			<MediaUpload
				onSelect={ ( media ) => onSelect( media.url, media.id, media.alt || '' ) }
				allowedTypes={ [ 'image' ] }
				value={ imageId }
				render={ ( { open } ) => (
					<div
						onClick={ open }
						style={ {
							width: imageWidth || '128px',
							minHeight: '80px',
							background: imageUrl ? `url(${ imageUrl }) center/cover no-repeat` : '#e9ecef',
							borderRadius: imageClass === 'rounded-circle' ? '50%' : '4px',
							border: '2px dashed #adb5bd',
							cursor: 'pointer',
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'center',
							flexShrink: 0,
							position: 'relative',
							overflow: 'hidden',
						} }
					>
						{ ! imageUrl && (
							<div style={ { textAlign: 'center', color: '#6c757d', padding: '8px' } }>
								<div style={ { fontSize: '24px' } }>🖼</div>
								<div style={ { fontSize: '11px' } }>{ label || __( 'Click to upload', 'wmblocks' ) }</div>
							</div>
						) }
						{ imageUrl && (
							<button
								onClick={ ( e ) => { e.stopPropagation(); onRemove(); } }
								style={ { position: 'absolute', top: '4px', right: '4px', background: 'rgba(0,0,0,0.6)', color: '#fff', border: 'none', borderRadius: '3px', fontSize: '10px', padding: '2px 5px', cursor: 'pointer' } }
							>✕</button>
						) }
					</div>
				) }
			/>
		</MediaUploadCheck>
	);
}

export default function Edit( { attributes, setAttributes } ) {
	const {
		imageUrl, imageId, imageAlt,
		imageWidth, imagePosition, imageAlign, imageClass, imageGap,
		imageUrl2, imageId2, imageAlt2, showSecondImage,
	} = attributes;

	// Flex direction based on image position
	const flexDirection = imagePosition === 'end' ? 'row-reverse' : 'row';
	// Gap class — if image is on end, use ms-* instead of me-*
	const gapClass = imagePosition === 'end'
		? imageGap.replace( 'me-', 'ms-' )
		: imageGap;

	const blockProps = useBlockProps( { className: 'wmblocks-media-object-wrapper' } );

	return (
		<>
			<InspectorControls>

				{ /* Image settings */ }
				<PanelBody title={ __( 'Image Settings', 'wmblocks' ) } initialOpen={ true }>
					<TextControl
						label={ __( 'Image Width', 'wmblocks' ) }
						value={ imageWidth }
						onChange={ ( v ) => setAttributes( { imageWidth: v } ) }
						help={ __( 'e.g. 64px, 128px, 20%', 'wmblocks' ) }
					/>
					<SelectControl
						label={ __( 'Image Style', 'wmblocks' ) }
						value={ imageClass }
						options={ IMAGE_CLASSES }
						onChange={ ( v ) => setAttributes( { imageClass: v } ) }
					/>
					<SelectControl
						label={ __( 'Vertical Alignment', 'wmblocks' ) }
						value={ imageAlign }
						options={ ALIGN_OPTIONS }
						onChange={ ( v ) => setAttributes( { imageAlign: v } ) }
						help={ __( 'Align image relative to content height.', 'wmblocks' ) }
					/>
					<SelectControl
						label={ __( 'Gap', 'wmblocks' ) }
						value={ imageGap }
						options={ GAP_OPTIONS }
						onChange={ ( v ) => setAttributes( { imageGap: v } ) }
					/>
				</PanelBody>

				{ /* Layout */ }
				<PanelBody title={ __( 'Layout', 'wmblocks' ) } initialOpen={ true }>
					<div style={ { marginBottom: '12px' } }>
						<div style={ { fontSize: '11px', fontWeight: 600, color: '#1e1e1e', marginBottom: '8px' } }>{ __( 'Image Position', 'wmblocks' ) }</div>
						<ButtonGroup>
							<Button
								variant={ imagePosition === 'start' ? 'primary' : 'secondary' }
								onClick={ () => setAttributes( { imagePosition: 'start' } ) }
							>
								{ __( '← Left', 'wmblocks' ) }
							</Button>
							<Button
								variant={ imagePosition === 'end' ? 'primary' : 'secondary' }
								onClick={ () => setAttributes( { imagePosition: 'end' } ) }
							>
								{ __( 'Right →', 'wmblocks' ) }
							</Button>
						</ButtonGroup>
					</div>
					<ToggleControl
						label={ __( 'Show Second Image (right side)', 'wmblocks' ) }
						checked={ !! showSecondImage }
						onChange={ ( v ) => setAttributes( { showSecondImage: v } ) }
						help={ __( 'Add a second image on the opposite side.', 'wmblocks' ) }
					/>
				</PanelBody>

			</InspectorControls>

			<div { ...blockProps }>
				<div
					className="d-flex"
					style={ {
						flexDirection,
						alignItems: imageAlign === 'align-self-center' ? 'center' : imageAlign === 'align-self-end' ? 'flex-end' : 'flex-start',
						gap: '0',
					} }
				>
					{ /* Left / Start image */ }
					{ imagePosition === 'start' && (
						<div className={ imageAlign + ' ' + gapClass } style={ { flexShrink: 0 } }>
							<ImageUploader
								imageUrl={ imageUrl } imageId={ imageId } imageAlt={ imageAlt }
								imageClass={ imageClass } imageWidth={ imageWidth }
								onSelect={ ( url, id, alt ) => setAttributes( { imageUrl: url, imageId: id, imageAlt: alt } ) }
								onRemove={ () => setAttributes( { imageUrl: '', imageId: 0, imageAlt: '' } ) }
							/>
						</div>
					) }

					{ /* Content */ }
					<div className="flex-grow-1">
						<InnerBlocks
							template={ CONTENT_TEMPLATE }
							templateLock={ false }
						/>
					</div>

					{ /* Right / End image */ }
					{ ( imagePosition === 'end' || showSecondImage ) && (
						<div className={ imageAlign + ' ' + ( imagePosition === 'end' ? gapClass : 'ms-3' ) } style={ { flexShrink: 0 } }>
							<ImageUploader
								imageUrl={ imagePosition === 'end' ? imageUrl : imageUrl2 }
								imageId={ imagePosition === 'end' ? imageId : imageId2 }
								imageAlt={ imagePosition === 'end' ? imageAlt : imageAlt2 }
								imageClass={ imageClass } imageWidth={ imageWidth }
								label={ imagePosition === 'end' ? __( 'Click to upload', 'wmblocks' ) : __( 'Second image', 'wmblocks' ) }
								onSelect={ ( url, id, alt ) => imagePosition === 'end'
									? setAttributes( { imageUrl: url, imageId: id, imageAlt: alt } )
									: setAttributes( { imageUrl2: url, imageId2: id, imageAlt2: alt } )
								}
								onRemove={ () => imagePosition === 'end'
									? setAttributes( { imageUrl: '', imageId: 0, imageAlt: '' } )
									: setAttributes( { imageUrl2: '', imageId2: 0, imageAlt2: '' } )
								}
							/>
						</div>
					) }
				</div>
			</div>
		</>
	);
}
