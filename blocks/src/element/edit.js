import { __ } from '@wordpress/i18n';
import { useBlockProps, InnerBlocks, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, SelectControl } from '@wordpress/components';
import './editor.scss';

// Import Shared Controls
import { PaddingControl, MarginControl } from '../../controls/spacingControls';
import { BackgroundColorControl, TextColorControl, OpacityControl, ShadowControl, BorderControl, CustomCSSControl } from '../../controls/visualControls';
import { VisibilityControl } from '../../controls/visibilityControl';
import { BackgroundControl } from '../../controls/background';
import { TypographyControl, getTypographyStyles } from '../../controls/TypographyControl';

export default function Edit( { attributes, setAttributes } ) {
    const {
        tagName, // Extracted new attribute
        padding, margin, backgroundColor, textColor, opacity, shadow, customCSS,
        borderSides, borderRemove, borderColor, borderOpacityClass, borderOpacityCustom, borderSize, borderRadius, borderRadiusSize,
        hideXs, hideSm, hideMd, hideLg, hideXl, hideXxl, bgImageUrl, bgImageId, bgGradient, bgVideoUrl, bgVideoId
    } = attributes;
    
    // Process typography and inline custom CSS variables safely
    const typography = getTypographyStyles( attributes );

    // Calculate Background Inline Styles safely
    const dynamicBgStyles = {};
    if ( bgImageUrl ) {
        dynamicBgStyles.backgroundImage = `url(${ bgImageUrl })`;
        dynamicBgStyles.backgroundSize = 'cover';
        dynamicBgStyles.backgroundPosition = 'center';
    } else if ( bgGradient ) {
        dynamicBgStyles.background = bgGradient; 
    }

    const parseInlineCSS = ( cssString ) => {
        if ( ! cssString ) return {};
        return cssString.split( ';' ).reduce( ( styleObj, rule ) => {
            const [ property, value ] = rule.split( ':' );
            if ( property && value ) {
                const camelProp = property.trim().replace( /-([a-z])/g, ( _, l ) => l.toUpperCase() );
                styleObj[ camelProp ] = value.trim();
            }
            return styleObj;
        }, {} );
    };

    const borderClasses = [
        ...( borderSides || [] ), ...( borderRemove || [] ),
        borderColor, borderOpacityClass, borderSize, borderRadius, borderRadiusSize,
    ].filter( Boolean ).join( ' ' );

    const visibilityClasses = [
        !! hideXs   ? 'd-none d-sm-block'   : '',
        !! hideSm   ? 'd-sm-none d-md-block' : '',
        !! hideMd   ? 'd-md-none d-lg-block' : '',
        !! hideLg   ? 'd-lg-none d-xl-block' : '',
        !! hideXl   ? 'd-xl-none d-xxl-block': '',
        !! hideXxl  ? 'd-xxl-none'           : '',
    ].filter( Boolean ).join( ' ' );

    const hasVideo = !! bgVideoUrl;
    
    // React allows dynamic tag names by assigning a lowercase string to a capitalized variable
    const WrapperTag = tagName;

    const blockProps = useBlockProps( {
        className: [
            'wmblocks-element', 
            'wmblocks-typography-target', // Make sure editor preview targets typography child cascades
            hasVideo ? 'position-relative' : '', 
            hasVideo ? 'overflow-hidden' : '', 
            padding, margin, backgroundColor, borderClasses, visibilityClasses, shadow
        ].filter( Boolean ).join( ' ' ),
        style: {
            ...dynamicBgStyles,
            opacity: opacity !== 100 ? opacity / 100 : undefined,
            color: textColor || undefined,
            ...( borderOpacityCustom ? { '--bs-border-opacity': borderOpacityCustom } : {} ),
            ...parseInlineCSS( customCSS ),
            
            // This safely injects ALL base styling + responsive variables (--wm-font-size-xs, etc.)
            // directly without requiring manual object drilling that causes runtime breaks.
            ...typography.styles,
        },
        'data-element-tag': tagName.toUpperCase(), // Used to label the block dynamically in SCSS
    } );

    const ELEMENT_TEMPLATE = [
        [ 
            'core/paragraph', 
            { 
                placeholder: __( "Add your container content here...", 'wm' ),
            } 
        ]
    ];

    return (
        <>
            <InspectorControls>
                <PanelBody title={ __( 'HTML Element', 'wm' ) } initialOpen={ true }>
                    <SelectControl
                        label={ __( 'Wrapper Tag', 'wm' ) }
                        value={ tagName }
                        options={ [
                            { label: '<div> (Default Block)', value: 'div' },
                            { label: '<header> (Site/Section Header)', value: 'header' },
                            { label: '<section> (Thematic Grouping)', value: 'section' },
                            { label: '<main> (Primary Content)', value: 'main' },
                            { label: '<p> (Paragraph)', value: 'p' },
                            { label: '<span> (Inline Element)', value: 'span' },
                        ] }
                        onChange={ ( v ) => setAttributes( { tagName: v } ) }
                        help={ __( 'Select the semantic HTML tag that will wrap this content.', 'wm' ) }
                    />
                </PanelBody>

                <BackgroundControl 
                    bgImageUrl={bgImageUrl} bgImageId={bgImageId} 
                    bgGradient={bgGradient} 
                    bgVideoUrl={bgVideoUrl} bgVideoId={bgVideoId} 
                    setAttributes={setAttributes} 
                />
                <PaddingControl value={ padding } onChange={ ( v ) => setAttributes( { padding: v } ) } />
                <MarginControl value={ margin } onChange={ ( v ) => setAttributes( { margin: v } ) } />
                <BackgroundColorControl value={ backgroundColor } onChange={ ( v ) => setAttributes( { backgroundColor: v } ) } />
                <TextColorControl value={ textColor } onChange={ ( v ) => setAttributes( { textColor: v } ) } />
                <OpacityControl value={ opacity } onChange={ ( v ) => setAttributes( { opacity: v } ) } />
                <ShadowControl value={ shadow } onChange={ ( v ) => setAttributes( { shadow: v } ) } />
                <BorderControl
                    borderSides={ borderSides } borderRemove={ borderRemove } borderColor={ borderColor }
                    borderOpacityClass={ borderOpacityClass } borderOpacityCustom={ borderOpacityCustom }
                    borderSize={ borderSize } borderRadius={ borderRadius } borderRadiusSize={ borderRadiusSize }
                    setAttributes={ setAttributes }
                />
                <CustomCSSControl value={ customCSS } onChange={ ( v ) => setAttributes( { customCSS: v } ) } />
                <VisibilityControl
                    hideXs={ hideXs } hideSm={ hideSm } hideMd={ hideMd }
                    hideLg={ hideLg } hideXl={ hideXxl } hideXxl={ hideXxl }
                    setAttributes={ setAttributes }
                />
                <TypographyControl attributes={attributes} setAttributes={setAttributes} />
            </InspectorControls>

            <WrapperTag { ...blockProps }>
                { hasVideo ? (
                    <>
                        <video 
                            src={ bgVideoUrl } 
                            autoPlay muted loop playsInline
                            style={ {
                                position: 'absolute',
                                top: 0, left: 0, width: '100%', height: '100%',
                                objectFit: 'cover',
                                zIndex: 0, 
                                pointerEvents: 'none'
                            } }
                        />
                        <div style={ { position: 'relative', zIndex: 1 } }>
                            <InnerBlocks renderAppender={ InnerBlocks.ButtonBlockAppender } />
                        </div>
                    </>
                ) : (
                    <InnerBlocks template={ ELEMENT_TEMPLATE } renderAppender={ InnerBlocks.ButtonBlockAppender } />
                ) }
            </WrapperTag>
        </>
    );
}