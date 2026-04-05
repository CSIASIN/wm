import { __ } from '@wordpress/i18n';
import { useBlockProps, InspectorControls, MediaUpload, MediaUploadCheck } from '@wordpress/block-editor';
import { PanelBody, ToggleControl, SelectControl, TextControl, CheckboxControl, Button } from '@wordpress/components';
import './editor.scss';

const BORDER_COLORS = [
	{ label: '— None —',  value: '' },
	{ label: 'Primary',   value: 'border-primary' },
	{ label: 'Secondary', value: 'border-secondary' },
	{ label: 'Success',   value: 'border-success' },
	{ label: 'Danger',    value: 'border-danger' },
	{ label: 'Warning',   value: 'border-warning' },
	{ label: 'Info',      value: 'border-info' },
	{ label: 'Light',     value: 'border-light' },
	{ label: 'Dark',      value: 'border-dark' },
	{ label: 'Black',     value: 'border-black' },
	{ label: 'White',     value: 'border-white' },
];

const BORDER_WIDTHS = [
	{ label: '— Default —', value: '' },
	{ label: '1', value: 'border-1' },
	{ label: '2', value: 'border-2' },
	{ label: '3', value: 'border-3' },
	{ label: '4', value: 'border-4' },
	{ label: '5', value: 'border-5' },
];

const BORDER_OPACITY = [
	{ label: '— Default —', value: '' },
	{ label: '75%', value: 'border-opacity-75' },
	{ label: '50%', value: 'border-opacity-50' },
	{ label: '25%', value: 'border-opacity-25' },
	{ label: '10%', value: 'border-opacity-10' },
];

const ROUNDED_OPTS = [
	{ label: '— None —',       value: '' },
	{ label: 'rounded',        value: 'rounded' },
	{ label: 'rounded-0',      value: 'rounded-0' },
	{ label: 'rounded-1',      value: 'rounded-1' },
	{ label: 'rounded-2',      value: 'rounded-2' },
	{ label: 'rounded-3',      value: 'rounded-3' },
	{ label: 'rounded-4',      value: 'rounded-4' },
	{ label: 'rounded-5',      value: 'rounded-5' },
	{ label: 'rounded-circle', value: 'rounded-circle' },
	{ label: 'rounded-pill',   value: 'rounded-pill' },
	{ label: 'rounded-top',    value: 'rounded-top' },
	{ label: 'rounded-end',    value: 'rounded-end' },
	{ label: 'rounded-bottom', value: 'rounded-bottom' },
	{ label: 'rounded-start',  value: 'rounded-start' },
];

const FLOAT_OPTS = [
	{ label: '— None —',    value: '' },
	{ label: 'float-start', value: 'float-start' },
	{ label: 'float-end',   value: 'float-end' },
	{ label: 'float-none',  value: 'float-none' },
	{ label: 'mx-auto d-block', value: 'mx-auto d-block' },
];

const DISPLAY_OPTS = [
	{ label: '— None —',      value: '' },
	{ label: 'd-block',       value: 'd-block' },
	{ label: 'd-inline',      value: 'd-inline' },
	{ label: 'd-inline-block', value: 'd-inline-block' },
];

const SHADOW_OPTS = [
	{ label: '— None —',   value: '' },
	{ label: 'shadow-sm',  value: 'shadow-sm' },
	{ label: 'shadow',     value: 'shadow' },
	{ label: 'shadow-lg',  value: 'shadow-lg' },
];

const BORDER_SIDES = [ 'border', 'border-top', 'border-end', 'border-bottom', 'border-start' ];

export default function Edit( { attributes, setAttributes } ) {
	const {
		imageUrl, imageId, imageAlt,
		imageWidth, imageHeight,
		imgFluid, imgThumbnail, floatClass, displayClass,
		rounded, borderSides, borderColor, borderWidth, borderOpacity,
		shadow, customClass,
	} = attributes;

	// Build full image class
	const imgClass = [
		imgFluid     ? 'img-fluid'     : '',
		imgThumbnail ? 'img-thumbnail' : '',
		rounded      || '',
		...( borderSides || [] ),
		borderColor  || '',
		borderWidth  || '',
		borderOpacity || '',
		floatClass   || '',
		displayClass || '',
		shadow       || '',
		customClass  || '',
	].filter( Boolean ).join( ' ' );

	const blockProps = useBlockProps( { className: 'wmblocks-bs-image-wrapper' } );

	return (
		<>
			<InspectorControls>

				{ /* Image Style */ }
				<PanelBody title={ __( 'Image Style', 'wmblocks' ) } initialOpen={ true }>
					<ToggleControl label={ __( 'img-fluid',     'wmblocks' ) } checked={ !! imgFluid }     onChange={ ( v ) => setAttributes( { imgFluid: v } ) }     help={ __( 'Makes image responsive (max-width: 100%).', 'wmblocks' ) } />
					<ToggleControl label={ __( 'img-thumbnail', 'wmblocks' ) } checked={ !! imgThumbnail } onChange={ ( v ) => setAttributes( { imgThumbnail: v } ) } help={ __( 'Adds a 1px border and padding.', 'wmblocks' ) } />
					<SelectControl label={ __( 'Rounded',    'wmblocks' ) } value={ rounded }      options={ ROUNDED_OPTS } onChange={ ( v ) => setAttributes( { rounded: v } ) } />
					<SelectControl label={ __( 'Shadow',     'wmblocks' ) } value={ shadow }       options={ SHADOW_OPTS }  onChange={ ( v ) => setAttributes( { shadow: v } ) } />
					<SelectControl label={ __( 'Float',      'wmblocks' ) } value={ floatClass }   options={ FLOAT_OPTS }   onChange={ ( v ) => setAttributes( { floatClass: v } ) } />
					<SelectControl label={ __( 'Display',    'wmblocks' ) } value={ displayClass } options={ DISPLAY_OPTS } onChange={ ( v ) => setAttributes( { displayClass: v } ) } />
				</PanelBody>

				{ /* Border */ }
				<PanelBody title={ __( 'Border', 'wmblocks' ) } initialOpen={ false }>
					<div style={ { marginBottom: '8px' } }>
						<div style={ { fontSize: '11px', fontWeight: 600, color: '#1e1e1e', marginBottom: '6px' } }>{ __( 'Border Sides', 'wmblocks' ) }</div>
						{ BORDER_SIDES.map( cls => (
							<CheckboxControl
								key={ cls }
								label={ cls }
								checked={ ( borderSides || [] ).includes( cls ) }
								onChange={ ( checked ) => setAttributes( { borderSides: checked ? [ ...( borderSides || [] ), cls ] : ( borderSides || [] ).filter( c => c !== cls ) } ) }
							/>
						) ) }
					</div>
					<SelectControl label={ __( 'Border Color',   'wmblocks' ) } value={ borderColor }   options={ BORDER_COLORS }  onChange={ ( v ) => setAttributes( { borderColor: v } ) } />
					<SelectControl label={ __( 'Border Width',   'wmblocks' ) } value={ borderWidth }   options={ BORDER_WIDTHS }  onChange={ ( v ) => setAttributes( { borderWidth: v } ) } />
					<SelectControl label={ __( 'Border Opacity', 'wmblocks' ) } value={ borderOpacity } options={ BORDER_OPACITY } onChange={ ( v ) => setAttributes( { borderOpacity: v } ) } />
				</PanelBody>

				{ /* Size & Advanced */ }
				<PanelBody title={ __( 'Size & Advanced', 'wmblocks' ) } initialOpen={ false }>
					<TextControl label={ __( 'Width',         'wmblocks' ) } value={ imageWidth }  onChange={ ( v ) => setAttributes( { imageWidth: v } ) }  placeholder="e.g. 200px or 50%" />
					<TextControl label={ __( 'Height',        'wmblocks' ) } value={ imageHeight } onChange={ ( v ) => setAttributes( { imageHeight: v } ) } placeholder="e.g. auto" />
					<TextControl label={ __( 'Extra Classes', 'wmblocks' ) } value={ customClass } onChange={ ( v ) => setAttributes( { customClass: v } ) } />
				</PanelBody>

			</InspectorControls>

			<div { ...blockProps }>
				<MediaUploadCheck>
					<MediaUpload
						onSelect={ ( media ) => setAttributes( { imageUrl: media.url, imageId: media.id, imageAlt: media.alt || '' } ) }
						allowedTypes={ [ 'image' ] }
						value={ imageId }
						render={ ( { open } ) => (
							<div>
								{ imageUrl ? (
									<div style={ { position: 'relative', display: 'inline-block' } }>
										<img
											src={ imageUrl }
											alt={ imageAlt }
											className={ imgClass }
											style={ {
												...(imageWidth  ? { width:  imageWidth  } : {}),
												...(imageHeight ? { height: imageHeight } : {}),
												maxWidth: '100%',
											} }
										/>
										<div style={ { marginTop: '6px', display: 'flex', gap: '6px' } }>
											<Button variant="secondary" size="small" onClick={ open }>{ __( 'Change', 'wmblocks' ) }</Button>
											<Button variant="secondary" size="small" isDestructive onClick={ () => setAttributes( { imageUrl: '', imageId: 0, imageAlt: '' } ) }>{ __( 'Remove', 'wmblocks' ) }</Button>
										</div>
									</div>
								) : (
									<div onClick={ open } style={ { border: '2px dashed #adb5bd', borderRadius: '4px', padding: '40px 20px', textAlign: 'center', cursor: 'pointer', color: '#6c757d', background: '#f8f9fa' } }>
										<div style={ { fontSize: '32px', marginBottom: '8px' } }>🖼</div>
										<div style={ { fontSize: '13px' } }>{ __( 'Click to upload image', 'wmblocks' ) }</div>
									</div>
								) }
							</div>
						) }
					/>
				</MediaUploadCheck>

				{ /* Class preview */ }
				{ imgClass && (
					<div style={ { fontSize: '10px', fontFamily: 'monospace', color: '#6c757d', marginTop: '6px', background: '#f8f9fa', padding: '3px 6px', borderRadius: '3px' } }>
						{ imgClass }
					</div>
				) }
			</div>
		</>
	);
}
