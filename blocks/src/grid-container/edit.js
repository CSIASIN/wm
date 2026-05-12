import { __ } from '@wordpress/i18n';
import {
	useBlockProps,
	InspectorControls,
	InnerBlocks,
	BlockControls,
	MediaUpload,
	MediaUploadCheck,
} from '@wordpress/block-editor';
import { useSelect, useDispatch } from '@wordpress/data';
import {
	PanelBody,
	SelectControl,
	TextControl,
	ToolbarGroup,
	RangeControl,
	Button,
	ColorPicker,
	ToggleControl,
	__experimentalDivider as Divider,
} from '@wordpress/components';
import './editor.scss';

const CONTAINER_TYPES = [
	{ label: 'container',       value: 'container' },
	{ label: 'container-sm',    value: 'container-sm' },
	{ label: 'container-md',    value: 'container-md' },
	{ label: 'container-lg',    value: 'container-lg' },
	{ label: 'container-xl',    value: 'container-xl' },
	{ label: 'container-xxl',   value: 'container-xxl' },
	{ label: 'container-fluid', value: 'container-fluid' },
];

const TEXT_ALIGN_OPTS = [
	{ label: '— None —',    value: '' },
	{ label: 'text-start',  value: 'text-start' },
	{ label: 'text-center', value: 'text-center' },
	{ label: 'text-end',    value: 'text-end' },
];

const BG_SIZE_OPTS = [
	{ label: 'Cover — fills the area, may crop',    value: 'cover' },
	{ label: 'Contain — fits entirely, may letterbox', value: 'contain' },
	{ label: 'Auto — natural image size',           value: 'auto' },
	{ label: '100% — stretch to full width',        value: '100%' },
	{ label: '100% 100% — stretch to fill exactly', value: '100% 100%' },
];

const BG_POSITION_OPTS = [
	{ label: 'Center Center', value: 'center center' },
	{ label: 'Top Left',      value: 'top left' },
	{ label: 'Top Center',    value: 'top center' },
	{ label: 'Top Right',     value: 'top right' },
	{ label: 'Center Left',   value: 'center left' },
	{ label: 'Center Right',  value: 'center right' },
	{ label: 'Bottom Left',   value: 'bottom left' },
	{ label: 'Bottom Center', value: 'bottom center' },
	{ label: 'Bottom Right',  value: 'bottom right' },
];

const BG_REPEAT_OPTS = [
	{ label: 'No Repeat',   value: 'no-repeat' },
	{ label: 'Repeat',      value: 'repeat' },
	{ label: 'Repeat X',    value: 'repeat-x' },
	{ label: 'Repeat Y',    value: 'repeat-y' },
	{ label: 'Space',       value: 'space' },
	{ label: 'Round',       value: 'round' },
];

const BG_ATTACHMENT_OPTS = [
	{ label: 'Scroll (default)',  value: 'scroll' },
	{ label: 'Fixed (parallax)', value: 'fixed' },
	{ label: 'Local',            value: 'local' },
];

const MIN_HEIGHT_OPTS = [
	{ label: '— None —',  value: '' },
	{ label: '25vh',      value: '25vh' },
	{ label: '33vh',      value: '33vh' },
	{ label: '50vh',      value: '50vh' },
	{ label: '66vh',      value: '66vh' },
	{ label: '75vh',      value: '75vh' },
	{ label: '100vh',     value: '100vh' },
	{ label: '200px',     value: '200px' },
	{ label: '300px',     value: '300px' },
	{ label: '400px',     value: '400px' },
	{ label: '500px',     value: '500px' },
	{ label: '600px',     value: '600px' },
];

const TEMPLATE = [
	[ 'wmblocks/grid-row', {}, [
		[ 'wmblocks/grid-col', { col: 'col' }, [ [ 'core/paragraph', { placeholder: 'Column 1 content…' } ] ] ],
		[ 'wmblocks/grid-col', { col: 'col' }, [ [ 'core/paragraph', { placeholder: 'Column 2 content…' } ] ] ],
		[ 'wmblocks/grid-col', { col: 'col' }, [ [ 'core/paragraph', { placeholder: 'Column 3 content…' } ] ] ],
	] ],
];

const ALLOWED = [ 'wmblocks/grid-row' ];

export default function Edit( { attributes, setAttributes, clientId } ) {
	const {
		containerType, textAlign, overflow, padding, customClass,
		bgImageId, bgImageUrl, bgImageAlt,
		bgSize, bgPosition, bgRepeat, bgAttachment,
		bgOverlayColor, bgOverlayOpacity,
		minHeight,
	} = attributes;

	const innerBlocks = useSelect( s => s( 'core/block-editor' ).getBlocks( clientId ), [ clientId ] );
	const { insertBlock } = useDispatch( 'core/block-editor' );
	const { createBlock } = wp.blocks;

	const addRow = () => insertBlock(
		createBlock( 'wmblocks/grid-row', {}, [
			createBlock( 'wmblocks/grid-col', { col: 'col' } ),
			createBlock( 'wmblocks/grid-col', { col: 'col' } ),
		] ),
		undefined, clientId
	);

	const containerClass = [ containerType, textAlign, overflow, padding, customClass ].filter( Boolean ).join( ' ' );

	// Inline styles for editor preview of background
	const bgStyle = {};
	if ( bgImageUrl ) {
		bgStyle.backgroundImage    = `url(${ bgImageUrl })`;
		bgStyle.backgroundSize     = bgSize;
		bgStyle.backgroundPosition = bgPosition;
		bgStyle.backgroundRepeat   = bgRepeat;
		// Note: fixed attachment doesn't work well in the editor iframe, show scroll instead
		bgStyle.backgroundAttachment = bgAttachment === 'fixed' ? 'scroll' : bgAttachment;
	}
	if ( minHeight ) {
		bgStyle.minHeight = minHeight;
	}

	const blockProps = useBlockProps( {
		className: [ 'wmblocks-grid-container', containerClass ].filter( Boolean ).join( ' ' ),
		style: bgStyle,
	} );

	// Hex → rgba helper for overlay preview
	const hexToRgba = ( hex, alpha ) => {
		if ( ! hex ) return `rgba(0,0,0,${ alpha })`;
		const r = parseInt( hex.slice( 1, 3 ), 16 );
		const g = parseInt( hex.slice( 3, 5 ), 16 );
		const b = parseInt( hex.slice( 5, 7 ), 16 );
		return `rgba(${ r },${ g },${ b },${ alpha })`;
	};

	return (
		<>
			<BlockControls>
				<ToolbarGroup>
					{ /* inline import of ToolbarGroup since it's already in scope via block-editor */ }
				</ToolbarGroup>
			</BlockControls>

			<InspectorControls>

				{ /* ── Container ── */ }
				<PanelBody title={ __( 'Container', 'wmblocks' ) } initialOpen={ true }>
					<SelectControl
						label={ __( 'Container Type', 'wmblocks' ) }
						value={ containerType }
						options={ CONTAINER_TYPES }
						onChange={ v => setAttributes( { containerType: v } ) }
						help={ __( 'container = responsive max-width. container-fluid = full width always.', 'wmblocks' ) }
					/>
					<SelectControl label={ __( 'Text Align', 'wmblocks' ) } value={ textAlign } options={ TEXT_ALIGN_OPTS } onChange={ v => setAttributes( { textAlign: v } ) } />
					<SelectControl
						label={ __( 'Overflow', 'wmblocks' ) }
						value={ overflow }
						options={ [
							{ label: '— None —',        value: '' },
							{ label: 'overflow-hidden', value: 'overflow-hidden' },
							{ label: 'overflow-auto',   value: 'overflow-auto' },
							{ label: 'overflow-scroll', value: 'overflow-scroll' },
						] }
						onChange={ v => setAttributes( { overflow: v } ) }
						help={ __( 'Use overflow-hidden when using large gx-* to prevent horizontal scroll.', 'wmblocks' ) }
					/>
					<SelectControl
						label={ __( 'Padding X', 'wmblocks' ) }
						value={ padding }
						options={ [
							{ label: '— None —', value: '' },
							...[ 1,2,3,4,5 ].map( n => ( { label: `px-${ n }`, value: `px-${ n }` } ) ),
						] }
						onChange={ v => setAttributes( { padding: v } ) }
					/>
					<TextControl label={ __( 'Extra Classes', 'wmblocks' ) } value={ customClass } onChange={ v => setAttributes( { customClass: v } ) } />
				</PanelBody>

				{ /* ── Background Image ── */ }
				<PanelBody title={ __( 'Background Image', 'wmblocks' ) } initialOpen={ false }>

					{ /* Image picker */ }
					<MediaUploadCheck>
						<MediaUpload
							onSelect={ media => setAttributes( {
								bgImageId:  media.id,
								bgImageUrl: media.url,
								bgImageAlt: media.alt || '',
							} ) }
							allowedTypes={ [ 'image' ] }
							value={ bgImageId }
							render={ ( { open } ) => (
								<div style={ { marginBottom: 12 } }>
									{ bgImageUrl ? (
										<>
											{ /* Thumbnail preview */ }
											<div style={ { position: 'relative', marginBottom: 8 } }>
												<img
													src={ bgImageUrl }
													alt={ bgImageAlt }
													style={ { width: '100%', height: 120, objectFit: 'cover', borderRadius: 4, border: '1px solid #e0e0e0', display: 'block' } }
												/>
												{ bgOverlayColor && (
													<div style={ {
														position: 'absolute', inset: 0, borderRadius: 4,
														background: hexToRgba( bgOverlayColor, bgOverlayOpacity ),
													} } />
												) }
											</div>
											<div style={ { display: 'flex', gap: 6 } }>
												<Button variant="secondary" onClick={ open } style={ { flex: 1 } }>
													{ __( 'Replace Image', 'wmblocks' ) }
												</Button>
												<Button
													variant="tertiary"
													isDestructive
													onClick={ () => setAttributes( { bgImageId: 0, bgImageUrl: '', bgImageAlt: '' } ) }
												>
													{ __( 'Remove', 'wmblocks' ) }
												</Button>
											</div>
										</>
									) : (
										<Button variant="secondary" onClick={ open } style={ { width: '100%' } }>
											{ __( '＋ Set Background Image', 'wmblocks' ) }
										</Button>
									) }
								</div>
							) }
						/>
					</MediaUploadCheck>

					{ bgImageUrl && (
						<>
							<SelectControl
								label={ __( 'Size', 'wmblocks' ) }
								value={ bgSize }
								options={ BG_SIZE_OPTS }
								onChange={ v => setAttributes( { bgSize: v } ) }
							/>
							<SelectControl
								label={ __( 'Position', 'wmblocks' ) }
								value={ bgPosition }
								options={ BG_POSITION_OPTS }
								onChange={ v => setAttributes( { bgPosition: v } ) }
							/>
							<SelectControl
								label={ __( 'Repeat', 'wmblocks' ) }
								value={ bgRepeat }
								options={ BG_REPEAT_OPTS }
								onChange={ v => setAttributes( { bgRepeat: v } ) }
							/>
							<SelectControl
								label={ __( 'Attachment', 'wmblocks' ) }
								value={ bgAttachment }
								options={ BG_ATTACHMENT_OPTS }
								onChange={ v => setAttributes( { bgAttachment: v } ) }
								help={ bgAttachment === 'fixed'
									? __( 'Fixed (parallax) effect — previewed as scroll in editor.', 'wmblocks' )
									: '' }
							/>
							<SelectControl
								label={ __( 'Min Height', 'wmblocks' ) }
								value={ minHeight }
								options={ MIN_HEIGHT_OPTS }
								onChange={ v => setAttributes( { minHeight: v } ) }
								help={ __( 'Useful when the container has little content.', 'wmblocks' ) }
							/>

							{ /* Overlay */ }
							<div style={ { marginTop: 12, padding: '10px', background: '#f8f9fa', borderRadius: 4, border: '1px solid #e9ecef' } }>
								<p style={ { fontSize: 11, fontWeight: 600, color: '#333', margin: '0 0 8px', textTransform: 'uppercase', letterSpacing: '0.5px' } }>
									{ __( 'Color Overlay', 'wmblocks' ) }
								</p>
								<p style={ { fontSize: 11, color: '#6c757d', margin: '0 0 10px' } }>
									{ __( 'Tints the background image. Leave blank for none.', 'wmblocks' ) }
								</p>
								<ColorPicker
									color={ bgOverlayColor || '#000000' }
									onChange={ v => setAttributes( { bgOverlayColor: v } ) }
									enableAlpha={ false }
								/>
								{ bgOverlayColor && (
									<>
										<RangeControl
											label={ __( 'Overlay Opacity', 'wmblocks' ) }
											value={ bgOverlayOpacity }
											onChange={ v => setAttributes( { bgOverlayOpacity: v } ) }
											min={ 0 }
											max={ 1 }
											step={ 0.05 }
										/>
										<Button
											variant="tertiary"
											isDestructive
											onClick={ () => setAttributes( { bgOverlayColor: '', bgOverlayOpacity: 0.4 } ) }
											style={ { fontSize: 11 } }
										>
											{ __( 'Remove Overlay', 'wmblocks' ) }
										</Button>
									</>
								) }
							</div>
						</>
					) }

					{ ! bgImageUrl && (
						<SelectControl
							label={ __( 'Min Height', 'wmblocks' ) }
							value={ minHeight }
							options={ MIN_HEIGHT_OPTS }
							onChange={ v => setAttributes( { minHeight: v } ) }
							help={ __( 'Can be set independently of a background image.', 'wmblocks' ) }
						/>
					) }

				</PanelBody>

			</InspectorControls>

			<div { ...blockProps } style={ { ...blockProps.style, ...bgStyle, position: bgImageUrl ? 'relative' : undefined } }>

				{ /* Editor: class badge */ }
				<div style={ { fontSize: 10, fontFamily: 'monospace', color: '#0d6efd', marginBottom: 6, background: 'rgba(240,246,255,0.9)', padding: '3px 6px', borderRadius: 4, display: 'inline-block', border: '1px solid #cfe2ff', position: 'relative', zIndex: 2 } }>
					{ containerClass }
					{ bgImageUrl && <span style={ { marginLeft: 6, color: '#6f42c1' } }>🖼 bg</span> }
					{ bgAttachment === 'fixed' && <span style={ { marginLeft: 4, color: '#fd7e14' } }>⚓ fixed</span> }
				</div>

				{ /* Overlay div — editor preview */ }
				{ bgImageUrl && bgOverlayColor && (
					<div style={ {
						position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 1,
						background: hexToRgba( bgOverlayColor, bgOverlayOpacity ),
					} } />
				) }

				<div style={ { position: 'relative', zIndex: 2 } }>
					<InnerBlocks
						allowedBlocks={ ALLOWED }
						template={ TEMPLATE }
						templateLock={ false }
						renderAppender={ false }
					/>
					<button
						onMouseDown={ e => { e.preventDefault(); addRow(); } }
						style={ { marginTop: 8, width: '100%', padding: '6px', border: '1px dashed #0d6efd', borderRadius: 4, background: 'rgba(255,255,255,0.8)', color: '#0d6efd', fontSize: 12, cursor: 'pointer' } }
					>
						+ { __( 'Add Row', 'wmblocks' ) }
					</button>
				</div>

			</div>
		</>
	);
}