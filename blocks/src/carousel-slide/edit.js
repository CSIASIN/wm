import { __ } from '@wordpress/i18n';
import { useBlockProps, InspectorControls, MediaUpload, MediaUploadCheck, BlockControls } from '@wordpress/block-editor';
import { useSelect, useDispatch } from '@wordpress/data';
import { PanelBody, TextareaControl, ToggleControl, RangeControl, SelectControl, Button, ToolbarGroup, ToolbarButton } from '@wordpress/components';
import './editor.scss';

// #1 — Placeholder gradients per slide index
const PLACEHOLDER_GRADIENTS = [
	'linear-gradient(135deg, #0d6efd 0%, #0a58ca 100%)',
	'linear-gradient(135deg, #198754 0%, #146c43 100%)',
	'linear-gradient(135deg, #dc3545 0%, #b02a37 100%)',
	'linear-gradient(135deg, #6f42c1 0%, #59359a 100%)',
	'linear-gradient(135deg, #fd7e14 0%, #dc6a0e 100%)',
];

const PLACEHOLDER_TITLES   = [ 'First Slide', 'Second Slide', 'Third Slide', 'Fourth Slide', 'Fifth Slide' ];
const PLACEHOLDER_SUBTITLES = [
	'Some representative placeholder content for the first slide.',
	'Some representative placeholder content for the second slide.',
	'Some representative placeholder content for the third slide.',
	'Some representative placeholder content for the fourth slide.',
	'Some representative placeholder content for the fifth slide.',
];

export default function Edit( { attributes, setAttributes, clientId, context } ) {
	const {
		imageUrl, imageId, imageAlt,
		caption, captionText, showCaption,
		captionPosition, captionBgColor, captionBgOpacity,
		interval,
	} = attributes;

	const activeSlideIndex = context[ 'wmblocks/activeSlideIndex' ] ?? 0;

	const { myIndex, siblings, parentClientId } = useSelect( ( select ) => {
		const store    = select( 'core/block-editor' );
		const parentId = store.getBlockRootClientId( clientId );
		const sibs     = store.getBlocks( parentId );
		return {
			myIndex:        sibs.findIndex( ( b ) => b.clientId === clientId ),
			siblings:       sibs,
			parentClientId: parentId,
		};
	}, [ clientId ] );

	const isVisible = myIndex === activeSlideIndex;

	const { updateBlockAttributes, removeBlock, moveBlocksUp, moveBlocksDown } = useDispatch( 'core/block-editor' );

	const handleRemove = () => {
		const newIndex = myIndex > 0 ? myIndex - 1 : 0;
		updateBlockAttributes( parentClientId, { activeSlideIndex: newIndex } );
		removeBlock( clientId );
	};

	const handleMoveLeft = () => {
		if ( myIndex === 0 ) return;
		moveBlocksUp( [ clientId ], parentClientId );
		updateBlockAttributes( parentClientId, { activeSlideIndex: myIndex - 1 } );
	};

	const handleMoveRight = () => {
		if ( myIndex === siblings.length - 1 ) return;
		moveBlocksDown( [ clientId ], parentClientId );
		updateBlockAttributes( parentClientId, { activeSlideIndex: myIndex + 1 } );
	};

	// #1 — placeholder gradient based on slide index
	const placeholderGradient = PLACEHOLDER_GRADIENTS[ myIndex % PLACEHOLDER_GRADIENTS.length ];
	const placeholderTitle    = PLACEHOLDER_TITLES[ myIndex % PLACEHOLDER_TITLES.length ];
	const placeholderSubtitle = PLACEHOLDER_SUBTITLES[ myIndex % PLACEHOLDER_SUBTITLES.length ];

	// #3 — build caption overlay rgba from color + opacity
	const hexToRgb = ( hex ) => {
		const r = parseInt( hex.slice( 1, 3 ), 16 );
		const g = parseInt( hex.slice( 3, 5 ), 16 );
		const b = parseInt( hex.slice( 5, 7 ), 16 );
		return `${ r }, ${ g }, ${ b }`;
	};
	const captionBg = `rgba(${ hexToRgb( captionBgColor || '#000000' ) }, ${ ( captionBgOpacity || 50 ) / 100 })`;

	// #2 — caption position classes
	const captionPositionStyle = {
		bottom: { bottom: 0,   top: 'auto',  transform: 'none' },
		middle: { top: '50%',  bottom: 'auto', transform: 'translateY(-50%)' },
		top:    { top: 0,      bottom: 'auto', transform: 'none' },
	}[ captionPosition || 'bottom' ];

	const blockProps = useBlockProps( {
		className: 'wmblocks-carousel-slide',
		style: { display: isVisible ? 'block' : 'none' },
	} );

	return (
		<>
			<BlockControls>
				<ToolbarGroup>
					<ToolbarButton icon="arrow-left-alt2"  label={ __( 'Move Slide Left', 'wmblocks' ) }  onClick={ handleMoveLeft }  disabled={ myIndex === 0 } />
					<ToolbarButton icon="arrow-right-alt2" label={ __( 'Move Slide Right', 'wmblocks' ) } onClick={ handleMoveRight } disabled={ myIndex === siblings.length - 1 } />
				</ToolbarGroup>
				<ToolbarGroup>
					<ToolbarButton icon="trash" label={ __( 'Remove Slide', 'wmblocks' ) } onClick={ handleRemove } isDestructive />
				</ToolbarGroup>
			</BlockControls>

			<InspectorControls>
				<PanelBody title={ __( 'Slide Settings', 'wmblocks' ) } initialOpen={ true }>
					<ToggleControl
						label={ __( 'Show Caption', 'wmblocks' ) }
						checked={ !! showCaption }
						onChange={ ( v ) => setAttributes( { showCaption: v } ) }
					/>
					{ showCaption && (
						<>
							<TextareaControl
								label={ __( 'Caption Heading', 'wmblocks' ) }
								value={ caption }
								onChange={ ( v ) => setAttributes( { caption: v } ) }
								rows={ 2 }
							/>
							<TextareaControl
								label={ __( 'Caption Text', 'wmblocks' ) }
								value={ captionText }
								onChange={ ( v ) => setAttributes( { captionText: v } ) }
								rows={ 3 }
							/>
							{ /* #2 — Caption position */ }
							<SelectControl
								label={ __( 'Caption Position', 'wmblocks' ) }
								value={ captionPosition }
								options={ [
									{ label: 'Bottom', value: 'bottom' },
									{ label: 'Middle', value: 'middle' },
									{ label: 'Top',    value: 'top' },
								] }
								onChange={ ( v ) => setAttributes( { captionPosition: v } ) }
							/>
							{ /* #3 — Caption overlay */ }
							<div style={ { marginTop: '8px' } }>
								<div style={ { fontSize: '11px', fontWeight: 600, color: '#1e1e1e', marginBottom: '6px' } }>
									{ __( 'Caption Background', 'wmblocks' ) }
								</div>
								<div style={ { display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' } }>
									<input
										type="color"
										value={ captionBgColor || '#000000' }
										onChange={ ( e ) => setAttributes( { captionBgColor: e.target.value } ) }
										style={ { width: '36px', height: '36px', border: '1px solid #ddd', borderRadius: '4px', cursor: 'pointer', padding: '2px' } }
									/>
									<span style={ { fontSize: '12px', color: '#555' } }>{ captionBgColor || '#000000' }</span>
								</div>
								<RangeControl
									label={ __( 'Background Opacity (%)', 'wmblocks' ) }
									value={ captionBgOpacity ?? 50 }
									onChange={ ( v ) => setAttributes( { captionBgOpacity: v } ) }
									min={ 0 }
									max={ 100 }
									step={ 5 }
									renderTooltipContent={ ( v ) => v + '%' }
								/>
							</div>
						</>
					) }
					<RangeControl
						label={ __( 'Custom Interval (ms)', 'wmblocks' ) }
						value={ interval }
						onChange={ ( v ) => setAttributes( { interval: v } ) }
						min={ 0 }
						max={ 10000 }
						step={ 500 }
						help={ __( '0 = use carousel default.', 'wmblocks' ) }
					/>
				</PanelBody>
			</InspectorControls>

			<div { ...blockProps }>
				{ /* Slide number badge */ }
				<div style={ { display: 'flex', alignItems: 'center', marginBottom: '8px' } }>
					<span style={ { fontSize: '11px', fontWeight: 600, color: '#fff', background: 'rgba(255,255,255,0.2)', borderRadius: '4px', padding: '2px 8px' } }>
						{ __( 'Slide', 'wmblocks' ) } { myIndex + 1 }
					</span>
				</div>

				{ /* #1 — Image upload with gradient placeholder */ }
				<MediaUploadCheck>
					<MediaUpload
						onSelect={ ( media ) => setAttributes( {
							imageUrl: media.url,
							imageId:  media.id,
							imageAlt: media.alt || '',
						} ) }
						allowedTypes={ [ 'image' ] }
						value={ imageId }
						render={ ( { open } ) => (
							<div
								className="wmblocks-slide-image-area"
								style={ {
									background: imageUrl
										? `url(${ imageUrl }) center/cover no-repeat`
										: placeholderGradient,
									minHeight: '220px',
									display: 'flex',
									alignItems: 'center',
									justifyContent: 'center',
									cursor: 'pointer',
									borderRadius: '4px',
									position: 'relative',
									overflow: 'hidden',
								} }
							>
								{ /* #1 — Placeholder content when no image */ }
								{ ! imageUrl && (
									<div
										onClick={ open }
										style={ { textAlign: 'center', color: 'rgba(255,255,255,0.9)', padding: '20px', width: '100%' } }
									>
										<div style={ { fontSize: '13px', fontWeight: 600, marginBottom: '6px', opacity: 0.6 } }>
											{ __( 'Click to upload image', 'wmblocks' ) }
										</div>
										{ /* Preview of placeholder caption */ }
										<div style={ { marginTop: '16px', background: 'rgba(0,0,0,0.4)', borderRadius: '4px', padding: '12px' } }>
											<h5 style={ { margin: '0 0 4px', fontSize: '18px', fontWeight: 700 } }>{ placeholderTitle }</h5>
											<p style={ { margin: 0, fontSize: '13px', opacity: 0.85 } }>{ placeholderSubtitle }</p>
										</div>
									</div>
								) }

								{ /* Controls when image is set */ }
								{ imageUrl && (
									<div style={ { position: 'absolute', bottom: '8px', right: '8px', display: 'flex', gap: '4px' } }>
										<Button variant="secondary" size="small" onClick={ ( e ) => { e.stopPropagation(); open(); } }>
											{ __( 'Change', 'wmblocks' ) }
										</Button>
										<Button variant="secondary" size="small" isDestructive
											onClick={ ( e ) => {
												e.stopPropagation();
												setAttributes( { imageUrl: '', imageId: 0, imageAlt: '' } );
											} }
										>
											{ __( 'Remove', 'wmblocks' ) }
										</Button>
									</div>
								) }

								{ /* #2 + #3 — Caption preview overlay */ }
								{ showCaption && ( caption || captionText ) && (
									<div style={ {
										position: 'absolute',
										left: 0, right: 0,
										padding: '12px 20px',
										background: captionBg,
										color: '#fff',
										...captionPositionStyle,
									} }>
										{ caption && <h5 style={ { margin: '0 0 4px', fontSize: '16px', fontWeight: 700 } }>{ caption }</h5> }
										{ captionText && <p style={ { margin: 0, fontSize: '13px', opacity: 0.9 } }>{ captionText }</p> }
									</div>
								) }
							</div>
						) }
					/>
				</MediaUploadCheck>
			</div>
		</>
	);
}
