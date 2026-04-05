import { __ } from '@wordpress/i18n';
import { useBlockProps, InspectorControls, MediaUpload, MediaUploadCheck } from '@wordpress/block-editor';
import { PanelBody, SelectControl, TextControl, ToggleControl, Button, ButtonGroup } from '@wordpress/components';
import './editor.scss';

const FIT_OPTIONS = [
	{ label: '— None —',              value: '' },
	{ label: 'object-fit-contain',    value: 'object-fit-contain' },
	{ label: 'object-fit-cover',      value: 'object-fit-cover' },
	{ label: 'object-fit-fill',       value: 'object-fit-fill' },
	{ label: 'object-fit-scale',      value: 'object-fit-scale' },
	{ label: 'object-fit-none',       value: 'object-fit-none' },
];

const FIT_RESPONSIVE = ( prefix ) => [
	{ label: '— None —',                        value: '' },
	{ label: `object-fit-${prefix}-contain`,    value: `object-fit-${prefix}-contain` },
	{ label: `object-fit-${prefix}-cover`,      value: `object-fit-${prefix}-cover` },
	{ label: `object-fit-${prefix}-fill`,       value: `object-fit-${prefix}-fill` },
	{ label: `object-fit-${prefix}-scale`,      value: `object-fit-${prefix}-scale` },
	{ label: `object-fit-${prefix}-none`,       value: `object-fit-${prefix}-none` },
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
];

// Visual preview of each fit mode
const FIT_PREVIEW_STYLES = {
	'object-fit-cover':   'cover',
	'object-fit-contain': 'contain',
	'object-fit-fill':    'fill',
	'object-fit-scale':   'scale-down',
	'object-fit-none':    'none',
	'':                   'cover',
};

export default function Edit( { attributes, setAttributes } ) {
	const {
		mediaType, imageUrl, imageId, imageAlt,
		videoUrl, videoId, iframeSrc, iframeTitle,
		objectFit, objectFitSm, objectFitMd, objectFitLg, objectFitXl,
		width, height, rounded,
		autoplay, muted, loop, controls, allowFullscreen,
		customClass,
	} = attributes;

	// Build full media class
	const mediaClass = [
		objectFit    || '',
		objectFitSm  || '',
		objectFitMd  || '',
		objectFitLg  || '',
		objectFitXl  || '',
		rounded      || '',
		customClass  || '',
	].filter( Boolean ).join( ' ' );

	const containerStyle = {
		width:    width  || '100%',
		height:   height || '300px',
		background: '#1a1a1a',
		borderRadius: rounded ? '4px' : '0',
		overflow: 'hidden',
		position: 'relative',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	};

	const mediaStyle = {
		width: '100%',
		height: '100%',
		objectFit: FIT_PREVIEW_STYLES[ objectFit ] || 'cover',
	};

	const blockProps = useBlockProps( { className: 'wmblocks-object-fit-wrapper' } );

	return (
		<>
			<InspectorControls>

				{ /* Media Type */ }
				<PanelBody title={ __( 'Media Type', 'wmblocks' ) } initialOpen={ true }>
					<div style={ { marginBottom: '12px' } }>
						<div style={ { fontSize: '11px', fontWeight: 600, color: '#1e1e1e', marginBottom: '8px' } }>{ __( 'Type', 'wmblocks' ) }</div>
						<ButtonGroup>
							{ [ [ 'Image', 'image' ], [ 'Video', 'video' ], [ 'iFrame', 'iframe' ] ].map( ( [ label, val ] ) => (
								<Button key={ val } variant={ mediaType === val ? 'primary' : 'secondary' } onClick={ () => setAttributes( { mediaType: val } ) }>
									{ label }
								</Button>
							) ) }
						</ButtonGroup>
					</div>

					{ /* Image upload */ }
					{ mediaType === 'image' && (
						<MediaUploadCheck>
							<MediaUpload
								onSelect={ ( media ) => setAttributes( { imageUrl: media.url, imageId: media.id, imageAlt: media.alt || '' } ) }
								allowedTypes={ [ 'image' ] }
								value={ imageId }
								render={ ( { open } ) => (
									<div>
										{ imageUrl
											? <div style={ { display: 'flex', gap: '6px', marginBottom: '4px' } }>
												<img src={ imageUrl } style={ { width: '60px', height: '40px', objectFit: 'cover', borderRadius: '3px' } } alt="" />
												<div>
													<Button variant="secondary" size="small" onClick={ open }>{ __( 'Change', 'wmblocks' ) }</Button>
												</div>
												<Button variant="secondary" size="small" isDestructive onClick={ () => setAttributes( { imageUrl: '', imageId: 0 } ) }>{ __( 'Remove', 'wmblocks' ) }</Button>
											</div>
											: <Button variant="secondary" onClick={ open }>{ __( 'Upload Image', 'wmblocks' ) }</Button>
										}
										<TextControl label={ __( 'Alt Text', 'wmblocks' ) } value={ imageAlt } onChange={ ( v ) => setAttributes( { imageAlt: v } ) } />
									</div>
								) }
							/>
						</MediaUploadCheck>
					) }

					{ /* Video upload */ }
					{ mediaType === 'video' && (
						<MediaUploadCheck>
							<MediaUpload
								onSelect={ ( media ) => setAttributes( { videoUrl: media.url, videoId: media.id } ) }
								allowedTypes={ [ 'video' ] }
								value={ videoId }
								render={ ( { open } ) => (
									<div>
										{ videoUrl
											? <div style={ { display: 'flex', gap: '6px', marginBottom: '8px' } }>
												<span style={ { fontSize: '12px', color: '#555' } }>🎬 { videoUrl.split( '/' ).pop() }</span>
												<Button variant="secondary" size="small" onClick={ open }>{ __( 'Change', 'wmblocks' ) }</Button>
												<Button variant="secondary" size="small" isDestructive onClick={ () => setAttributes( { videoUrl: '', videoId: 0 } ) }>{ __( 'Remove', 'wmblocks' ) }</Button>
											</div>
											: <Button variant="secondary" onClick={ open }>{ __( 'Upload Video', 'wmblocks' ) }</Button>
										}
									</div>
								) }
							/>
						</MediaUploadCheck>
					) }

					{ /* iFrame */ }
					{ mediaType === 'iframe' && (
						<>
							<TextControl label={ __( 'iFrame URL', 'wmblocks' ) }   value={ iframeSrc }   onChange={ ( v ) => setAttributes( { iframeSrc: v } ) }   placeholder="https://www.youtube.com/embed/..." />
							<TextControl label={ __( 'iFrame Title', 'wmblocks' ) } value={ iframeTitle } onChange={ ( v ) => setAttributes( { iframeTitle: v } ) } placeholder="Video title for accessibility" />
						</>
					) }
				</PanelBody>

				{ /* Object Fit */ }
				<PanelBody title={ __( 'Object Fit', 'wmblocks' ) } initialOpen={ true }>
					<SelectControl label={ __( 'Base',  'wmblocks' ) } value={ objectFit }   options={ FIT_OPTIONS }           onChange={ ( v ) => setAttributes( { objectFit: v } ) }   help={ __( 'Applied at all sizes.', 'wmblocks' ) } />
					<SelectControl label={ __( 'SM+',   'wmblocks' ) } value={ objectFitSm } options={ FIT_RESPONSIVE( 'sm' ) } onChange={ ( v ) => setAttributes( { objectFitSm: v } ) } />
					<SelectControl label={ __( 'MD+',   'wmblocks' ) } value={ objectFitMd } options={ FIT_RESPONSIVE( 'md' ) } onChange={ ( v ) => setAttributes( { objectFitMd: v } ) } />
					<SelectControl label={ __( 'LG+',   'wmblocks' ) } value={ objectFitLg } options={ FIT_RESPONSIVE( 'lg' ) } onChange={ ( v ) => setAttributes( { objectFitLg: v } ) } />
					<SelectControl label={ __( 'XL+',   'wmblocks' ) } value={ objectFitXl } options={ FIT_RESPONSIVE( 'xl' ) } onChange={ ( v ) => setAttributes( { objectFitXl: v } ) } />
				</PanelBody>

				{ /* Size & Style */ }
				<PanelBody title={ __( 'Size & Style', 'wmblocks' ) } initialOpen={ false }>
					<TextControl label={ __( 'Width',  'wmblocks' ) } value={ width }  onChange={ ( v ) => setAttributes( { width: v } ) }  placeholder="100%" />
					<TextControl label={ __( 'Height', 'wmblocks' ) } value={ height } onChange={ ( v ) => setAttributes( { height: v } ) } placeholder="300px" />
					<SelectControl label={ __( 'Rounded', 'wmblocks' ) } value={ rounded } options={ ROUNDED_OPTS } onChange={ ( v ) => setAttributes( { rounded: v } ) } />
					<TextControl label={ __( 'Extra Classes', 'wmblocks' ) } value={ customClass } onChange={ ( v ) => setAttributes( { customClass: v } ) } />
				</PanelBody>

				{ /* Video options */ }
				{ mediaType === 'video' && (
					<PanelBody title={ __( 'Video Options', 'wmblocks' ) } initialOpen={ false }>
						<ToggleControl label={ __( 'Autoplay',  'wmblocks' ) } checked={ !! autoplay }  onChange={ ( v ) => setAttributes( { autoplay: v } ) } />
						<ToggleControl label={ __( 'Muted',     'wmblocks' ) } checked={ !! muted }     onChange={ ( v ) => setAttributes( { muted: v } ) } />
						<ToggleControl label={ __( 'Loop',      'wmblocks' ) } checked={ !! loop }      onChange={ ( v ) => setAttributes( { loop: v } ) } />
						<ToggleControl label={ __( 'Controls',  'wmblocks' ) } checked={ !! controls }  onChange={ ( v ) => setAttributes( { controls: v } ) } />
					</PanelBody>
				) }

				{ /* iFrame options */ }
				{ mediaType === 'iframe' && (
					<PanelBody title={ __( 'iFrame Options', 'wmblocks' ) } initialOpen={ false }>
						<ToggleControl label={ __( 'Allow Fullscreen', 'wmblocks' ) } checked={ !! allowFullscreen } onChange={ ( v ) => setAttributes( { allowFullscreen: v } ) } />
					</PanelBody>
				) }

			</InspectorControls>

			<div { ...blockProps }>

				{ /* Object fit visual selector */ }
				<div style={ { marginBottom: '10px' } }>
					<div style={ { fontSize: '11px', fontWeight: 600, color: '#1e1e1e', marginBottom: '6px' } }>{ __( 'Object Fit', 'wmblocks' ) }</div>
					<div style={ { display: 'flex', gap: '6px', flexWrap: 'wrap' } }>
						{ [ 'object-fit-cover', 'object-fit-contain', 'object-fit-fill', 'object-fit-scale', 'object-fit-none', '' ].map( ( val ) => (
							<button
								key={ val || 'none' }
								onMouseDown={ ( e ) => { e.preventDefault(); setAttributes( { objectFit: val } ); } }
								style={ {
									padding: '4px 8px', fontSize: '11px', cursor: 'pointer',
									border: objectFit === val ? '2px solid #007cba' : '1px solid #ddd',
									borderRadius: '4px',
									background: objectFit === val ? '#e8f4fd' : '#f8f9fa',
									color: objectFit === val ? '#007cba' : '#555',
									fontWeight: objectFit === val ? 600 : 400,
								} }
							>
								{ val ? val.replace( 'object-fit-', '' ) : 'none' }
							</button>
						) ) }
					</div>
				</div>

				{ /* Media preview container */ }
				<div style={ containerStyle }>
					{ mediaType === 'image' && imageUrl && (
						<img src={ imageUrl } alt={ imageAlt } className={ mediaClass } style={ mediaStyle } />
					) }
					{ mediaType === 'image' && ! imageUrl && (
						<MediaUploadCheck>
							<MediaUpload
								onSelect={ ( media ) => setAttributes( { imageUrl: media.url, imageId: media.id, imageAlt: media.alt || '' } ) }
								allowedTypes={ [ 'image' ] }
								value={ imageId }
								render={ ( { open } ) => (
									<div onClick={ open } style={ { textAlign: 'center', color: '#aaa', cursor: 'pointer', padding: '20px' } }>
										<div style={ { fontSize: '40px' } }>🖼</div>
										<div style={ { fontSize: '13px', marginTop: '8px' } }>{ __( 'Click to upload image', 'wmblocks' ) }</div>
									</div>
								) }
							/>
						</MediaUploadCheck>
					) }
					{ mediaType === 'video' && videoUrl && (
						<video
							className={ mediaClass }
							style={ mediaStyle }
							{ ...( autoplay ? { autoPlay: true } : {} ) }
							{ ...( muted    ? { muted: true }     : {} ) }
							{ ...( loop     ? { loop: true }      : {} ) }
							{ ...( controls ? { controls: true }  : {} ) }
						>
							<source src={ videoUrl } />
						</video>
					) }
					{ mediaType === 'video' && ! videoUrl && (
						<div style={ { textAlign: 'center', color: '#aaa', padding: '20px' } }>
							<div style={ { fontSize: '40px' } }>🎬</div>
							<div style={ { fontSize: '13px', marginTop: '8px' } }>{ __( 'Upload a video in the sidebar', 'wmblocks' ) }</div>
						</div>
					) }
					{ mediaType === 'iframe' && iframeSrc && (
						<iframe
							src={ iframeSrc }
							title={ iframeTitle || 'Embedded content' }
							className={ mediaClass }
							style={ mediaStyle }
							{ ...( allowFullscreen ? { allowFullScreen: true } : {} ) }
						/>
					) }
					{ mediaType === 'iframe' && ! iframeSrc && (
						<div style={ { textAlign: 'center', color: '#aaa', padding: '20px' } }>
							<div style={ { fontSize: '40px' } }>📺</div>
							<div style={ { fontSize: '13px', marginTop: '8px' } }>{ __( 'Enter an iFrame URL in the sidebar', 'wmblocks' ) }</div>
						</div>
					) }
				</div>

				{ /* Dimensions display */ }
				<div style={ { display: 'flex', gap: '12px', marginTop: '6px', fontSize: '11px', color: '#757575' } }>
					<span>{ __( 'W:', 'wmblocks' ) } { width || '100%' }</span>
					<span>{ __( 'H:', 'wmblocks' ) } { height || '300px' }</span>
					{ mediaClass && <span style={ { fontFamily: 'monospace', color: '#007cba' } }>{ mediaClass }</span> }
				</div>
			</div>
		</>
	);
}
