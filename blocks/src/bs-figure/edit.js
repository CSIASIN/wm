import { __ } from '@wordpress/i18n';
import { useBlockProps, InspectorControls, MediaUpload, MediaUploadCheck, RichText } from '@wordpress/block-editor';
import { PanelBody, ToggleControl, SelectControl, TextControl, CheckboxControl, Button } from '@wordpress/components';
//import './editor.scss';

const BORDER_COLORS = [
	{ label: '— None —', value: '' }, { label: 'Primary', value: 'border-primary' },
	{ label: 'Secondary', value: 'border-secondary' }, { label: 'Success', value: 'border-success' },
	{ label: 'Danger', value: 'border-danger' }, { label: 'Warning', value: 'border-warning' },
	{ label: 'Info', value: 'border-info' }, { label: 'Dark', value: 'border-dark' },
	{ label: 'Light', value: 'border-light' }, { label: 'Black', value: 'border-black' },
];

const ROUNDED_OPTS = [
	{ label: '— None —', value: '' }, { label: 'rounded', value: 'rounded' },
	{ label: 'rounded-0', value: 'rounded-0' }, { label: 'rounded-1', value: 'rounded-1' },
	{ label: 'rounded-2', value: 'rounded-2' }, { label: 'rounded-3', value: 'rounded-3' },
	{ label: 'rounded-4', value: 'rounded-4' }, { label: 'rounded-5', value: 'rounded-5' },
	{ label: 'rounded-circle', value: 'rounded-circle' }, { label: 'rounded-pill', value: 'rounded-pill' },
];

const FLOAT_OPTS = [
	{ label: '— None —', value: '' }, { label: 'float-start', value: 'float-start' },
	{ label: 'float-end', value: 'float-end' }, { label: 'mx-auto d-block', value: 'mx-auto d-block' },
];

const BORDER_WIDTHS = [
	{ label: '— Default —', value: '' }, { label: '1', value: 'border-1' },
	{ label: '2', value: 'border-2' }, { label: '3', value: 'border-3' },
	{ label: '4', value: 'border-4' }, { label: '5', value: 'border-5' },
];

const CAPTION_ALIGN = [
	{ label: '— Default —',  value: '' },
	{ label: 'text-start',   value: 'text-start' },
	{ label: 'text-center',  value: 'text-center' },
	{ label: 'text-end',     value: 'text-end' },
];

const BORDER_SIDES = [ 'border', 'border-top', 'border-end', 'border-bottom', 'border-start' ];

export default function Edit( { attributes, setAttributes } ) {
	const {
		imageUrl, imageId, imageAlt, caption,
		imgFluid, imgThumbnail, rounded, floatClass,
		borderSides, borderColor, borderWidth,
		captionAlign, customClass,
	} = attributes;

	const imgClass = [
		'figure-img',
		imgFluid     ? 'img-fluid'     : '',
		imgThumbnail ? 'img-thumbnail' : '',
		rounded      || '',
		...( borderSides || [] ),
		borderColor  || '',
		borderWidth  || '',
		customClass  || '',
	].filter( Boolean ).join( ' ' );

	const figureClass = [ 'figure', floatClass || '' ].filter( Boolean ).join( ' ' );

	const blockProps = useBlockProps( { className: 'wmblocks-bs-figure-wrapper' } );

	return (
		<>
			<InspectorControls>
				<PanelBody title={ __( 'Image Style', 'wmblocks' ) } initialOpen={ true }>
					<ToggleControl label={ __( 'img-fluid',     'wmblocks' ) } checked={ !! imgFluid }     onChange={ ( v ) => setAttributes( { imgFluid: v } ) } />
					<ToggleControl label={ __( 'img-thumbnail', 'wmblocks' ) } checked={ !! imgThumbnail } onChange={ ( v ) => setAttributes( { imgThumbnail: v } ) } />
					<SelectControl label={ __( 'Rounded',  'wmblocks' ) } value={ rounded }    options={ ROUNDED_OPTS } onChange={ ( v ) => setAttributes( { rounded: v } ) } />
					<SelectControl label={ __( 'Float',    'wmblocks' ) } value={ floatClass } options={ FLOAT_OPTS }   onChange={ ( v ) => setAttributes( { floatClass: v } ) } />
				</PanelBody>
				<PanelBody title={ __( 'Border', 'wmblocks' ) } initialOpen={ false }>
					{ BORDER_SIDES.map( cls => (
						<CheckboxControl key={ cls } label={ cls }
							checked={ ( borderSides || [] ).includes( cls ) }
							onChange={ ( checked ) => setAttributes( { borderSides: checked ? [ ...( borderSides || [] ), cls ] : ( borderSides || [] ).filter( c => c !== cls ) } ) }
						/>
					) ) }
					<SelectControl label={ __( 'Border Color', 'wmblocks' ) } value={ borderColor } options={ BORDER_COLORS } onChange={ ( v ) => setAttributes( { borderColor: v } ) } />
					<SelectControl label={ __( 'Border Width', 'wmblocks' ) } value={ borderWidth } options={ BORDER_WIDTHS } onChange={ ( v ) => setAttributes( { borderWidth: v } ) } />
				</PanelBody>
				<PanelBody title={ __( 'Caption', 'wmblocks' ) } initialOpen={ false }>
					<SelectControl label={ __( 'Caption Alignment', 'wmblocks' ) } value={ captionAlign } options={ CAPTION_ALIGN } onChange={ ( v ) => setAttributes( { captionAlign: v } ) } />
				</PanelBody>
				<PanelBody title={ __( 'Advanced', 'wmblocks' ) } initialOpen={ false }>
					<TextControl label={ __( 'Extra Classes', 'wmblocks' ) } value={ customClass } onChange={ ( v ) => setAttributes( { customClass: v } ) } />
				</PanelBody>
			</InspectorControls>

			<div { ...blockProps }>
				<figure className={ figureClass }>
					<MediaUploadCheck>
						<MediaUpload
							onSelect={ ( media ) => setAttributes( { imageUrl: media.url, imageId: media.id, imageAlt: media.alt || '' } ) }
							allowedTypes={ [ 'image' ] }
							value={ imageId }
							render={ ( { open } ) => (
								imageUrl ? (
									<div style={ { position: 'relative' } }>
										<img src={ imageUrl } alt={ imageAlt } className={ imgClass } style={ { maxWidth: '100%' } } />
										<div style={ { display: 'flex', gap: '6px', marginTop: '4px' } }>
											<Button variant="secondary" size="small" onClick={ open }>{ __( 'Change', 'wmblocks' ) }</Button>
											<Button variant="secondary" size="small" isDestructive onClick={ () => setAttributes( { imageUrl: '', imageId: 0 } ) }>{ __( 'Remove', 'wmblocks' ) }</Button>
										</div>
									</div>
								) : (
									<div onClick={ open } style={ { border: '2px dashed #adb5bd', borderRadius: '4px', padding: '40px 20px', textAlign: 'center', cursor: 'pointer', color: '#6c757d', background: '#f8f9fa' } }>
										<div style={ { fontSize: '32px' } }>🖼</div>
										<div style={ { fontSize: '13px', marginTop: '8px' } }>{ __( 'Click to upload image', 'wmblocks' ) }</div>
									</div>
								)
							) }
						/>
					</MediaUploadCheck>

					<figcaption className={ [ 'figure-caption', captionAlign ].filter( Boolean ).join( ' ' ) }>
						<RichText
							tagName="span"
							value={ caption }
							onChange={ ( v ) => setAttributes( { caption: v } ) }
							placeholder={ __( 'Add a caption…', 'wmblocks' ) }
							allowedFormats={ [ 'core/bold', 'core/italic', 'core/link' ] }
						/>
					</figcaption>
				</figure>
			</div>
		</>
	);
}
