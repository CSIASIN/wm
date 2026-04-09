import { __ } from '@wordpress/i18n';
import { useBlockProps, InspectorControls, MediaUpload, MediaUploadCheck } from '@wordpress/block-editor';
import { PanelBody, TextControl, TextareaControl, ToggleControl, SelectControl, Button, ButtonGroup } from '@wordpress/components';
import './editor.scss';

const IMG_CLASSES = [
	{ label: 'img-fluid',      value: 'img-fluid' },
	{ label: 'img-thumbnail',  value: 'img-thumbnail' },
	{ label: 'rounded',        value: 'rounded' },
	{ label: 'rounded-circle', value: 'rounded-circle' },
	{ label: 'rounded-pill',   value: 'rounded-pill' },
	{ label: 'rounded-0',      value: 'rounded-0' },
	{ label: 'rounded-1',      value: 'rounded-1' },
	{ label: 'rounded-2',      value: 'rounded-2' },
	{ label: 'rounded-3',      value: 'rounded-3' },
	{ label: 'rounded-4',      value: 'rounded-4' },
	{ label: 'rounded-5',      value: 'rounded-5' },
];

const ALIGN_OPTS = [
	{ label: 'Top',    value: 'align-self-start' },
	{ label: 'Middle', value: 'align-self-center' },
	{ label: 'Bottom', value: 'align-self-end' },
];

const GAP_OPTS = [
	{ label: 'me-1', value: 'me-1' }, { label: 'me-2', value: 'me-2' },
	{ label: 'me-3', value: 'me-3' }, { label: 'me-4', value: 'me-4' },
	{ label: 'me-5', value: 'me-5' },
];

const BTN_VARIANTS = [
	{ label: 'Primary',          value: 'btn-primary' },
	{ label: 'Secondary',        value: 'btn-secondary' },
	{ label: 'Success',          value: 'btn-success' },
	{ label: 'Danger',           value: 'btn-danger' },
	{ label: 'Warning',          value: 'btn-warning' },
	{ label: 'Info',             value: 'btn-info' },
	{ label: 'Light',            value: 'btn-light' },
	{ label: 'Dark',             value: 'btn-dark' },
	{ label: 'Link',             value: 'btn-link' },
	{ label: 'Outline Primary',  value: 'btn-outline-primary' },
	{ label: 'Outline Secondary',value: 'btn-outline-secondary' },
];

const SHADOW_OPTS = [
	{ label: '— None —',  value: '' },
	{ label: 'shadow-sm', value: 'shadow-sm' },
	{ label: 'shadow',    value: 'shadow' },
	{ label: 'shadow-lg', value: 'shadow-lg' },
];

const FIT_OPTS = [
	{ label: '— None —',           value: '' },
	{ label: 'object-fit-cover',   value: 'object-fit-cover' },
	{ label: 'object-fit-contain', value: 'object-fit-contain' },
	{ label: 'object-fit-fill',    value: 'object-fit-fill' },
];

// ── Layout mode descriptions
const MODES = [
	{ value: 'media',    label: 'Media Object',    desc: 'Image beside text (flex row)' },
	{ value: 'card',     label: 'Stretched Card',  desc: 'Image top, whole box clickable' },
	{ value: 'image',    label: 'Plain Image Link', desc: 'Just a linked image' },
];

export default function Edit( { attributes, setAttributes } ) {
	const {
		layoutMode, url, newTab, stretchedLink,
		imageUrl, imageId, imageAlt, imageWidth,
		imagePosition, imgClass, imageGap, imageAlign,
		title, body, linkText, linkVariant, showLinkBtn,
		wrapperClass, rounded, shadow, objectFit, objectHeight,
	} = attributes;

	const blockProps = useBlockProps( { className: 'wmblocks-image-link-wrapper' } );

	// Gap class flips when image is on the end
	const gapClass = imagePosition === 'end' ? imageGap.replace( 'me-', 'ms-' ) : imageGap;

	const imgStyles = {
		width:      imageWidth  || 'auto',
		objectFit:  objectFit ? objectFit.replace( 'object-fit-', '' ) : undefined,
		height:     objectHeight || undefined,
		flexShrink: 0,
		maxWidth:   '100%',
	};

	// Image uploader shared component
	const ImageArea = () => (
		<MediaUploadCheck>
			<MediaUpload
				onSelect={ ( m ) => setAttributes( { imageUrl: m.url, imageId: m.id, imageAlt: m.alt || '' } ) }
				allowedTypes={ [ 'image' ] }
				value={ imageId }
				render={ ( { open } ) => (
					imageUrl ? (
						<div style={ { position: 'relative', display: 'inline-block' } }>
							<img
								src={ imageUrl } alt={ imageAlt }
								className={ [ imgClass, rounded, objectFit ].filter( Boolean ).join( ' ' ) }
								style={ imgStyles }
								onClick={ open }
							/>
							<button
								onClick={ ( e ) => { e.stopPropagation(); setAttributes( { imageUrl: '', imageId: 0 } ); } }
								style={ { position: 'absolute', top: 4, right: 4, background: 'rgba(0,0,0,.6)', color: '#fff', border: 'none', borderRadius: 3, fontSize: 10, padding: '2px 5px', cursor: 'pointer' } }
							>✕</button>
						</div>
					) : (
						<div onClick={ open } style={ { width: imageWidth || '120px', minHeight: '80px', border: '2px dashed #adb5bd', borderRadius: 4, display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', cursor: 'pointer', color: '#6c757d', background: '#f8f9fa', gap: 4 } }>
							<span style={ { fontSize: 28 } }>🖼</span>
							<span style={ { fontSize: 11 } }>{ __( 'Upload image', 'wmblocks' ) }</span>
						</div>
					)
				) }
			/>
		</MediaUploadCheck>
	);

	// Inline editable text helper
	const Editable = ( { value, onChange, tag: Tag = 'span', style = {}, placeholder } ) => (
		<Tag
			contentEditable suppressContentEditableWarning
			onInput={ ( e ) => onChange( e.currentTarget.textContent ) }
			onKeyDown={ ( e ) => e.key === 'Enter' && ( e.preventDefault(), e.currentTarget.blur() ) }
			style={ { outline: 'none', cursor: 'text', ...style } }
			data-placeholder={ placeholder }
		>{ value }</Tag>
	);

	return (
		<>
			<InspectorControls>

				{ /* Layout mode */ }
				<PanelBody title={ __( 'Layout Mode', 'wmblocks' ) } initialOpen={ true }>
					<div style={ { display: 'flex', flexDirection: 'column', gap: 4 } }>
						{ MODES.map( m => (
							<button key={ m.value }
								onMouseDown={ ( e ) => { e.preventDefault(); setAttributes( { layoutMode: m.value } ); } }
								style={ {
									padding: '8px 10px', textAlign: 'left', border: '1px solid',
									borderColor: layoutMode === m.value ? '#007cba' : '#ddd',
									borderRadius: 4, background: layoutMode === m.value ? '#e8f4fd' : '#f8f9fa',
									cursor: 'pointer',
								} }
							>
								<div style={ { fontSize: 12, fontWeight: 600, color: layoutMode === m.value ? '#007cba' : '#333' } }>{ m.label }</div>
								<div style={ { fontSize: 11, color: '#777', marginTop: 2 } }>{ m.desc }</div>
							</button>
						) ) }
					</div>
				</PanelBody>

				{ /* Link */ }
				<PanelBody title={ __( 'Link', 'wmblocks' ) } initialOpen={ true }>
					<TextControl label={ __( 'URL', 'wmblocks' ) } value={ url } onChange={ ( v ) => setAttributes( { url: v } ) } type="url" placeholder="https://" />
					<ToggleControl label={ __( 'Open in new tab', 'wmblocks' ) } checked={ !! newTab } onChange={ ( v ) => setAttributes( { newTab: v } ) } />
					{ layoutMode !== 'image' && (
						<ToggleControl
							label={ __( 'Stretched Link', 'wmblocks' ) }
							checked={ !! stretchedLink }
							onChange={ ( v ) => setAttributes( { stretchedLink: v } ) }
							help={ __( 'Makes the entire block clickable via ::after pseudo-element.', 'wmblocks' ) }
						/>
					) }
				</PanelBody>

				{ /* Image */ }
				<PanelBody title={ __( 'Image', 'wmblocks' ) } initialOpen={ true }>
					<SelectControl label={ __( 'Image Style', 'wmblocks' ) }  value={ imgClass }  options={ IMG_CLASSES } onChange={ ( v ) => setAttributes( { imgClass: v } ) } />
					{ layoutMode === 'media' && (
						<>
							<div style={ { marginBottom: 8 } }>
								<div style={ { fontSize: 11, fontWeight: 600, color: '#1e1e1e', marginBottom: 6 } }>{ __( 'Image Position', 'wmblocks' ) }</div>
								<ButtonGroup>
									<Button variant={ imagePosition === 'start' ? 'primary' : 'secondary' } onClick={ () => setAttributes( { imagePosition: 'start' } ) }>← { __( 'Left', 'wmblocks' ) }</Button>
									<Button variant={ imagePosition === 'end'   ? 'primary' : 'secondary' } onClick={ () => setAttributes( { imagePosition: 'end' } ) }>{ __( 'Right', 'wmblocks' ) } →</Button>
								</ButtonGroup>
							</div>
							<SelectControl label={ __( 'Vertical Align', 'wmblocks' ) } value={ imageAlign } options={ ALIGN_OPTS } onChange={ ( v ) => setAttributes( { imageAlign: v } ) } />
							<SelectControl label={ __( 'Gap', 'wmblocks' ) }            value={ imageGap }   options={ GAP_OPTS }   onChange={ ( v ) => setAttributes( { imageGap: v } ) } />
						</>
					) }
					<TextControl label={ __( 'Image Width', 'wmblocks' ) }  value={ imageWidth }   onChange={ ( v ) => setAttributes( { imageWidth: v } ) }   placeholder="120px" />
					<SelectControl label={ __( 'Object Fit', 'wmblocks' ) } value={ objectFit }    options={ FIT_OPTS }    onChange={ ( v ) => setAttributes( { objectFit: v } ) } />
					{ objectFit && <TextControl label={ __( 'Object Height', 'wmblocks' ) } value={ objectHeight } onChange={ ( v ) => setAttributes( { objectHeight: v } ) } placeholder="200px" /> }
					<TextControl label={ __( 'Alt Text', 'wmblocks' ) } value={ imageAlt } onChange={ ( v ) => setAttributes( { imageAlt: v } ) } />
				</PanelBody>

				{ layoutMode !== 'image' && (
					<PanelBody title={ __( 'Content', 'wmblocks' ) } initialOpen={ false }>
						{ showLinkBtn && (
							<>
								<TextControl label={ __( 'Button Text', 'wmblocks' ) } value={ linkText } onChange={ ( v ) => setAttributes( { linkText: v } ) } />
								<SelectControl label={ __( 'Button Style', 'wmblocks' ) } value={ linkVariant } options={ BTN_VARIANTS } onChange={ ( v ) => setAttributes( { linkVariant: v } ) } />
							</>
						) }
						<ToggleControl label={ __( 'Show Button', 'wmblocks' ) } checked={ !! showLinkBtn } onChange={ ( v ) => setAttributes( { showLinkBtn: v } ) } />
					</PanelBody>
				) }

				<PanelBody title={ __( 'Style', 'wmblocks' ) } initialOpen={ false }>
					<SelectControl label={ __( 'Shadow', 'wmblocks' ) } value={ shadow } options={ SHADOW_OPTS } onChange={ ( v ) => setAttributes( { shadow: v } ) } />
					<TextControl label={ __( 'Extra Classes', 'wmblocks' ) } value={ wrapperClass } onChange={ ( v ) => setAttributes( { wrapperClass: v } ) } />
				</PanelBody>

			</InspectorControls>

			<div { ...blockProps }>

				{ /* ── Mode: Plain Image Link ── */ }
				{ layoutMode === 'image' && (
					<div>
						<div style={ { marginBottom: 6 } }><ImageArea /></div>
						<div style={ { display: 'flex', gap: 8, alignItems: 'center', flexWrap: 'wrap' } }>
							<input
								type="url" value={ url }
								onChange={ ( e ) => setAttributes( { url: e.target.value } ) }
								placeholder="https://"
								style={ { flex: 1, fontSize: 12, padding: '4px 8px', border: '1px solid #ccc', borderRadius: 4, outline: 'none', minWidth: 120 } }
							/>
							<label style={ { fontSize: 11, display: 'flex', alignItems: 'center', gap: 4, cursor: 'pointer' } }>
								<input type="checkbox" checked={ !! newTab } onChange={ ( e ) => setAttributes( { newTab: e.target.checked } ) } />
								{ __( 'New tab', 'wmblocks' ) }
							</label>
						</div>
						<div style={ { fontSize: 10, color: '#6c757d', marginTop: 4, fontStyle: 'italic' } }>
							{ __( 'Plain linked image — no stretched-link, just an anchor wrapping the img tag.', 'wmblocks' ) }
						</div>
					</div>
				) }

				{ /* ── Mode: Stretched Card ── */ }
				{ layoutMode === 'card' && (
					<div className={ [ 'card position-relative', shadow, wrapperClass ].filter( Boolean ).join( ' ' ) } style={ { overflow: 'hidden' } }>
						{ imageUrl ? (
							<MediaUploadCheck>
								<MediaUpload
									onSelect={ ( m ) => setAttributes( { imageUrl: m.url, imageId: m.id, imageAlt: m.alt || '' } ) }
									allowedTypes={ [ 'image' ] } value={ imageId }
									render={ ( { open } ) => (
										<div style={ { position: 'relative' } }>
											<img src={ imageUrl } alt={ imageAlt }
												className={ [ 'card-img-top', imgClass, objectFit ].filter( Boolean ).join( ' ' ) }
												style={ { width: '100%', height: objectHeight || '200px', objectFit: objectFit ? objectFit.replace( 'object-fit-', '' ) : 'cover', cursor: 'pointer' } }
												onClick={ open }
											/>
											<button onClick={ ( e ) => { e.stopPropagation(); setAttributes( { imageUrl: '', imageId: 0 } ); } }
												style={ { position: 'absolute', top: 6, right: 6, background: 'rgba(0,0,0,.6)', color: '#fff', border: 'none', borderRadius: 3, fontSize: 10, padding: '2px 5px', cursor: 'pointer' } }
											>✕</button>
										</div>
									) }
								/>
							</MediaUploadCheck>
						) : (
							<MediaUploadCheck>
								<MediaUpload onSelect={ ( m ) => setAttributes( { imageUrl: m.url, imageId: m.id, imageAlt: m.alt || '' } ) } allowedTypes={ [ 'image' ] } value={ imageId }
									render={ ( { open } ) => (
										<div onClick={ open } style={ { height: objectHeight || '160px', background: '#e9ecef', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', flexDirection: 'column', gap: 4, color: '#6c757d' } }>
											<span style={ { fontSize: 32 } }>🖼</span>
											<span style={ { fontSize: 12 } }>{ __( 'Click to upload', 'wmblocks' ) }</span>
										</div>
									) }
								/>
							</MediaUploadCheck>
						) }
						<div className="card-body">
							<Editable tag="h5" value={ title } onChange={ ( v ) => setAttributes( { title: v } ) } style={ { display: 'block', fontWeight: 700, marginBottom: 8, fontSize: 18 } } placeholder={ __( 'Card title…', 'wmblocks' ) } />
							<Editable tag="p" value={ body } onChange={ ( v ) => setAttributes( { body: v } ) } style={ { display: 'block', color: '#555', fontSize: 14, marginBottom: 12 } } placeholder={ __( 'Card text…', 'wmblocks' ) } />
							{ showLinkBtn && (
								<div style={ { display: 'flex', alignItems: 'center', gap: 8 } }>
									<a href="#" className={ [ 'btn', linkVariant, stretchedLink ? 'stretched-link' : '' ].filter( Boolean ).join( ' ' ) } onClick={ ( e ) => e.preventDefault() }>
										<Editable value={ linkText } onChange={ ( v ) => setAttributes( { linkText: v } ) } />
									</a>
									{ stretchedLink && <span style={ { fontSize: 10, color: '#6c757d', fontStyle: 'italic' } }>{ __( '↑ stretched — entire card is clickable', 'wmblocks' ) }</span> }
								</div>
							) }
						</div>
					</div>
				) }

				{ /* ── Mode: Media Object ── */ }
				{ layoutMode === 'media' && (
					<div className={ [ 'd-flex position-relative', imagePosition === 'end' ? 'flex-row-reverse' : '', shadow, wrapperClass ].filter( Boolean ).join( ' ' ) }>
						<div className={ [ imageAlign, gapClass ].filter( Boolean ).join( ' ' ) } style={ { flexShrink: 0 } }>
							<ImageArea />
						</div>
						<div style={ { flex: 1 } }>
							<Editable tag="h5" value={ title } onChange={ ( v ) => setAttributes( { title: v } ) } style={ { display: 'block', fontWeight: 700, marginBottom: 6, fontSize: 18 } } placeholder={ __( 'Heading…', 'wmblocks' ) } />
							<Editable tag="p" value={ body } onChange={ ( v ) => setAttributes( { body: v } ) } style={ { display: 'block', color: '#555', fontSize: 14, marginBottom: 10 } } placeholder={ __( 'Body text…', 'wmblocks' ) } />
							{ showLinkBtn && (
								<div style={ { display: 'flex', alignItems: 'center', gap: 8 } }>
									<a href="#" className={ [ 'btn', linkVariant, stretchedLink ? 'stretched-link' : '' ].filter( Boolean ).join( ' ' ) } onClick={ ( e ) => e.preventDefault() }>
										<Editable value={ linkText } onChange={ ( v ) => setAttributes( { linkText: v } ) } />
									</a>
									{ stretchedLink && <span style={ { fontSize: 10, color: '#6c757d', fontStyle: 'italic' } }>{ __( '↑ stretched', 'wmblocks' ) }</span> }
								</div>
							) }
						</div>
					</div>
				) }

				{ /* URL hint */ }
				{ url && url !== '#' && (
					<div style={ { fontSize: 10, color: '#6c757d', marginTop: 6 } }>→ { url }{ newTab ? __( ' (new tab)', 'wmblocks' ) : '' }</div>
				) }
			</div>
		</>
	);
}
