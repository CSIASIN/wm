import { __ } from '@wordpress/i18n';
import { useBlockProps, InspectorControls, MediaUpload, MediaUploadCheck } from '@wordpress/block-editor';
import { PanelBody, ToggleControl, SelectControl, TextControl, Button } from '@wordpress/components';
//import './editor.scss';

const ROUNDED_OPTS = [
	{ label: '— None —', value: '' }, { label: 'rounded', value: 'rounded' },
	{ label: 'rounded-circle', value: 'rounded-circle' }, { label: 'rounded-pill', value: 'rounded-pill' },
	{ label: 'rounded-1', value: 'rounded-1' }, { label: 'rounded-2', value: 'rounded-2' },
	{ label: 'rounded-3', value: 'rounded-3' }, { label: 'rounded-4', value: 'rounded-4' },
	{ label: 'rounded-5', value: 'rounded-5' },
];

const DEFAULT_BREAKPOINTS = [ '(min-width: 1200px)', '(min-width: 992px)', '(min-width: 768px)', '(min-width: 576px)', '(max-width: 575.98px)' ];

export default function Edit( { attributes, setAttributes } ) {
	const { sources, defaultImageUrl, defaultImageId, defaultImageAlt, imgFluid, imgThumbnail, rounded, customClass } = attributes;

	const imgClass = [
		imgFluid     ? 'img-fluid'     : '',
		imgThumbnail ? 'img-thumbnail' : '',
		rounded      || '',
		customClass  || '',
	].filter( Boolean ).join( ' ' );

	const updateSource = ( i, key, val ) =>
		setAttributes( { sources: sources.map( ( s, idx ) => idx === i ? { ...s, [ key ]: val } : s ) } );

	const addSource = () =>
		setAttributes( { sources: [ ...sources, { imageUrl: '', imageId: 0, media: DEFAULT_BREAKPOINTS[ sources.length ] || '(min-width: 576px)' } ] } );

	const removeSource = ( i ) =>
		setAttributes( { sources: sources.filter( ( _, idx ) => idx !== i ) } );

	const blockProps = useBlockProps( { className: 'wmblocks-bs-picture-wrapper' } );

	return (
		<>
			<InspectorControls>
				<PanelBody title={ __( 'Image Style', 'wmblocks' ) } initialOpen={ true }>
					<ToggleControl label={ __( 'img-fluid',     'wmblocks' ) } checked={ !! imgFluid }     onChange={ ( v ) => setAttributes( { imgFluid: v } ) } />
					<ToggleControl label={ __( 'img-thumbnail', 'wmblocks' ) } checked={ !! imgThumbnail } onChange={ ( v ) => setAttributes( { imgThumbnail: v } ) } />
					<SelectControl label={ __( 'Rounded', 'wmblocks' ) } value={ rounded } options={ ROUNDED_OPTS } onChange={ ( v ) => setAttributes( { rounded: v } ) } />
					<TextControl label={ __( 'Extra Classes', 'wmblocks' ) } value={ customClass } onChange={ ( v ) => setAttributes( { customClass: v } ) } />
				</PanelBody>
			</InspectorControls>

			<div { ...blockProps }>
				<div style={ { fontSize: '11px', color: '#007cba', fontWeight: 600, marginBottom: '10px' } }>
					{ __( '📐 Picture Element — sources load at different breakpoints', 'wmblocks' ) }
				</div>

				{ /* Sources */ }
				{ sources.map( ( source, i ) => (
					<div key={ i } style={ { border: '1px solid #e2e8f0', borderRadius: '6px', padding: '10px', marginBottom: '8px', background: '#fafafa' } }>
						<div style={ { display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' } }>
							<span style={ { fontSize: '11px', fontWeight: 600, color: '#555' } }>
								{ __( 'Source', 'wmblocks' ) } { i + 1 }
							</span>
							<button onMouseDown={ ( e ) => { e.preventDefault(); removeSource( i ); } }
								style={ { fontSize: '11px', padding: '2px 6px', border: '1px solid #fcc', borderRadius: '3px', background: '#fff5f5', color: '#c00', cursor: 'pointer' } }
							>✕</button>
						</div>

						{ /* Media query input */ }
						<div style={ { marginBottom: '8px' } }>
							<div style={ { fontSize: '11px', color: '#555', marginBottom: '4px' } }>{ __( 'media=""', 'wmblocks' ) }</div>
							<input
								type="text"
								value={ source.media }
								onChange={ ( e ) => updateSource( i, 'media', e.target.value ) }
								placeholder="(min-width: 768px)"
								style={ { width: '100%', fontSize: '12px', padding: '4px 6px', border: '1px solid #ccc', borderRadius: '4px', outline: 'none', boxSizing: 'border-box' } }
							/>
						</div>

						{ /* Source image upload */ }
						<MediaUploadCheck>
							<MediaUpload
								onSelect={ ( media ) => updateSource( i, 'imageUrl', media.url ) && updateSource( i, 'imageId', media.id ) }
								allowedTypes={ [ 'image' ] }
								value={ source.imageId }
								render={ ( { open } ) => (
									source.imageUrl ? (
										<div style={ { display: 'flex', alignItems: 'center', gap: '8px' } }>
											<img src={ source.imageUrl } style={ { width: '60px', height: '40px', objectFit: 'cover', borderRadius: '3px' } } alt="" />
											<Button variant="secondary" size="small" onClick={ open }>{ __( 'Change', 'wmblocks' ) }</Button>
											<Button variant="secondary" size="small" isDestructive onClick={ () => updateSource( i, 'imageUrl', '' ) }>{ __( 'Remove', 'wmblocks' ) }</Button>
										</div>
									) : (
										<Button variant="secondary" size="small" onClick={ open }>{ __( 'Upload Source Image', 'wmblocks' ) }</Button>
									)
								) }
							/>
						</MediaUploadCheck>
					</div>
				) ) }

				{ /* Add source */ }
				<button onMouseDown={ ( e ) => { e.preventDefault(); addSource(); } }
					style={ { width: '100%', padding: '6px', border: '1px dashed #007cba', borderRadius: '4px', background: 'transparent', color: '#007cba', fontSize: '12px', cursor: 'pointer', marginBottom: '12px' } }
				>
					+ { __( 'Add Source', 'wmblocks' ) }
				</button>

				{ /* Default image */ }
				<div style={ { border: '2px solid #007cba', borderRadius: '6px', padding: '10px' } }>
					<div style={ { fontSize: '11px', fontWeight: 600, color: '#007cba', marginBottom: '8px' } }>
						{ __( 'Default <img> (fallback)', 'wmblocks' ) }
					</div>
					<MediaUploadCheck>
						<MediaUpload
							onSelect={ ( media ) => setAttributes( { defaultImageUrl: media.url, defaultImageId: media.id, defaultImageAlt: media.alt || '' } ) }
							allowedTypes={ [ 'image' ] }
							value={ defaultImageId }
							render={ ( { open } ) => (
								defaultImageUrl ? (
									<div>
										<img src={ defaultImageUrl } alt={ defaultImageAlt } className={ imgClass } style={ { maxWidth: '100%', marginBottom: '6px' } } />
										<div style={ { display: 'flex', gap: '6px' } }>
											<Button variant="secondary" size="small" onClick={ open }>{ __( 'Change', 'wmblocks' ) }</Button>
											<Button variant="secondary" size="small" isDestructive onClick={ () => setAttributes( { defaultImageUrl: '', defaultImageId: 0 } ) }>{ __( 'Remove', 'wmblocks' ) }</Button>
										</div>
									</div>
								) : (
									<div onClick={ open } style={ { border: '2px dashed #adb5bd', borderRadius: '4px', padding: '30px 20px', textAlign: 'center', cursor: 'pointer', color: '#6c757d', background: '#f8f9fa' } }>
										<div style={ { fontSize: '24px' } }>🖼</div>
										<div style={ { fontSize: '12px', marginTop: '6px' } }>{ __( 'Upload fallback image', 'wmblocks' ) }</div>
									</div>
								)
							) }
						/>
					</MediaUploadCheck>
				</div>

				{ /* Class preview */ }
				{ imgClass && (
					<div style={ { fontSize: '10px', fontFamily: 'monospace', color: '#6c757d', marginTop: '8px', background: '#f8f9fa', padding: '3px 6px', borderRadius: '3px' } }>
						img class: { imgClass }
					</div>
				) }
			</div>
		</>
	);
}
