import { __ } from '@wordpress/i18n';
import { useBlockProps, InspectorControls, InnerBlocks, BlockControls } from '@wordpress/block-editor';
import { useSelect, useDispatch } from '@wordpress/data';
import { PanelBody, ToggleControl, RangeControl, ToolbarGroup, ToolbarButton } from '@wordpress/components';
import './editor.scss';

const SLIDES_TEMPLATE = [
	[ 'wmblocks/carousel-slide', { showCaption: true, caption: 'First Slide',  captionText: 'Some representative placeholder content for the first slide.',  captionPosition: 'bottom', captionBgColor: '#000000', captionBgOpacity: 50 } ],
	[ 'wmblocks/carousel-slide', { showCaption: true, caption: 'Second Slide', captionText: 'Some representative placeholder content for the second slide.', captionPosition: 'bottom', captionBgColor: '#000000', captionBgOpacity: 50 } ],
	[ 'wmblocks/carousel-slide', { showCaption: true, caption: 'Third Slide',  captionText: 'Some representative placeholder content for the third slide.',  captionPosition: 'bottom', captionBgColor: '#000000', captionBgOpacity: 50 } ],
];

export default function Edit( { attributes, setAttributes, clientId } ) {
	const {
		showIndicators, showControls, crossfade,
		autoplay, interval, pauseOnHover, touch, activeSlideIndex,
	} = attributes;

	const innerBlocks = useSelect( ( select ) =>
		select( 'core/block-editor' ).getBlocks( clientId )
	, [ clientId ] );

	const { updateBlockAttributes } = useDispatch( 'core/block-editor' );

	const slideCount = innerBlocks.length;

	const goTo = ( index ) => {
		const i = Math.max( 0, Math.min( index, slideCount - 1 ) );
		setAttributes( { activeSlideIndex: i } );
	};

	const blockProps = useBlockProps( {
		className: 'wmblocks-carousel-wrapper',
	} );

	return (
		<>
			<BlockControls>
				<ToolbarGroup>
					<ToolbarButton
						icon="arrow-left-alt2"
						label={ __( 'Previous Slide', 'wmblocks' ) }
						onClick={ () => goTo( activeSlideIndex - 1 ) }
						disabled={ activeSlideIndex === 0 }
					/>
					<div style={ { display: 'flex', alignItems: 'center', padding: '0 8px', fontSize: '12px', fontWeight: 500, color: '#1e1e1e' } }>
						{ activeSlideIndex + 1 } / { slideCount }
					</div>
					<ToolbarButton
						icon="arrow-right-alt2"
						label={ __( 'Next Slide', 'wmblocks' ) }
						onClick={ () => goTo( activeSlideIndex + 1 ) }
						disabled={ activeSlideIndex === slideCount - 1 }
					/>
				</ToolbarGroup>
			</BlockControls>

			<InspectorControls>
				<PanelBody title={ __( 'Carousel Settings', 'wmblocks' ) } initialOpen={ true }>
					<ToggleControl
						label={ __( 'Show Indicators', 'wmblocks' ) }
						checked={ !! showIndicators }
						onChange={ ( v ) => setAttributes( { showIndicators: v } ) }
						help={ __( 'Show dot indicators at the bottom.', 'wmblocks' ) }
					/>
					<ToggleControl
						label={ __( 'Show Controls', 'wmblocks' ) }
						checked={ !! showControls }
						onChange={ ( v ) => setAttributes( { showControls: v } ) }
						help={ __( 'Show prev/next arrow buttons.', 'wmblocks' ) }
					/>
					<ToggleControl
						label={ __( 'Crossfade', 'wmblocks' ) }
						checked={ !! crossfade }
						onChange={ ( v ) => setAttributes( { crossfade: v } ) }
						help={ __( 'Fade between slides instead of sliding.', 'wmblocks' ) }
					/>
				</PanelBody>

				<PanelBody title={ __( 'Autoplay', 'wmblocks' ) } initialOpen={ false }>
					<ToggleControl
						label={ __( 'Autoplay', 'wmblocks' ) }
						checked={ !! autoplay }
						onChange={ ( v ) => setAttributes( { autoplay: v } ) }
					/>
					{ autoplay && (
						<RangeControl
							label={ __( 'Interval (ms)', 'wmblocks' ) }
							value={ interval }
							onChange={ ( v ) => setAttributes( { interval: v } ) }
							min={ 1000 }
							max={ 10000 }
							step={ 500 }
							help={ __( 'Time between slides in milliseconds.', 'wmblocks' ) }
						/>
					) }
					<ToggleControl
						label={ __( 'Pause on Hover', 'wmblocks' ) }
						checked={ !! pauseOnHover }
						onChange={ ( v ) => setAttributes( { pauseOnHover: v } ) }
					/>
					<ToggleControl
						label={ __( 'Touch Support', 'wmblocks' ) }
						checked={ !! touch }
						onChange={ ( v ) => setAttributes( { touch: v } ) }
						help={ __( 'Enable swipe gestures on touch devices.', 'wmblocks' ) }
					/>
				</PanelBody>
			</InspectorControls>

			<div { ...blockProps }>
				{ /* Editor slide indicator dots */ }
				<div className="wmblocks-carousel-nav">
					{ innerBlocks.map( ( block, i ) => (
						<button
							key={ block.clientId }
							className={ 'wmblocks-carousel-dot' + ( activeSlideIndex === i ? ' active' : '' ) }
							onMouseDown={ ( e ) => { e.preventDefault(); goTo( i ); } }
							title={ __( 'Slide', 'wmblocks' ) + ' ' + ( i + 1 ) }
						/>
					) ) }
				</div>

				{ /* Slides */ }
				<div className="wmblocks-carousel-slides">
					<InnerBlocks
						allowedBlocks={ [ 'wmblocks/carousel-slide' ] }
						template={ SLIDES_TEMPLATE }
						templateLock={ false }
					/>
				</div>
			</div>
		</>
	);
}
