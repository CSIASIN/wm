import { __ } from '@wordpress/i18n';
import { useBlockProps, InspectorControls, InnerBlocks } from '@wordpress/block-editor';
import { PanelBody, SelectControl  } from '@wordpress/components';
import './editor.scss';

import blockPreview from './block-preview.png';

// Shared controls
import { PaddingControl, MarginControl } from '../../controls/spacingControls';
import { BackgroundColorControl, TextColorControl, OpacityControl, ShadowControl, BorderControl, CustomCSSControl } from '../../controls/visualControls';
import { VisibilityControl } from '../../controls/visibilityControl';
import { BackgroundControl } from '../../controls/background'; // <-- Import custom control file

export default function Edit( { attributes, setAttributes } ) {
    const {
        margin, padding, customCSS, preview, backgroundColor, opacity,
        borderSides, borderRemove, borderColor, borderOpacityClass,
        borderOpacityCustom, borderSize, borderRadius, borderRadiusSize,
        textColor, hideXs, hideSm, hideMd, hideLg, hideXl, hideXxl, shadow,
        bgImageUrl, bgImageId, bgGradient, bgVideoUrl, bgVideoId, containerType // <-- Destructure new attributes
    } = attributes;

    if ( preview ) {
        return (
            <div style={ { width: '100%' } }>
                <img src={ blockPreview } alt={ __( 'Container block preview', 'wm' ) } style={ { width: '100%', height: 'auto', display: 'block' } } />
            </div>
        );
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
        ...( borderSides || [] ),
        ...( borderRemove || [] ),
        borderColor, borderOpacityClass, borderSize, borderRadius, borderRadiusSize,
    ].filter( Boolean ).join( ' ' );

    const visibilityClasses = [
        !! hideXs  ? 'd-none d-sm-block'   : '',
        !! hideSm  ? 'd-sm-none d-md-block' : '',
        !! hideMd  ? 'd-md-none d-lg-block' : '',
        !! hideLg  ? 'd-lg-none d-xl-block' : '',
        !! hideXl  ? 'd-xl-none d-xxl-block': '',
        !! hideXxl ? 'd-xxl-none'           : '',
    ].filter( Boolean ).join( ' ' );

    // 1. Process dynamic image or gradient background layers
    const dynamicBgStyles = {};
    if ( bgImageUrl ) {
        dynamicBgStyles.backgroundImage = `url(${ bgImageUrl })`;
        dynamicBgStyles.backgroundSize = 'cover';
        dynamicBgStyles.backgroundPosition = 'center';
    } else if ( bgGradient ) {
        dynamicBgStyles.background = bgGradient;
    }

    // 2. Build out unified block props styling arrays
    const blockProps = useBlockProps( {
        style: {
            ...dynamicBgStyles, // Injects image or gradient values cleanly
            opacity: opacity !== 100 ? opacity / 100 : undefined,
            color: textColor || undefined,
            ...( borderOpacityCustom ? { '--bs-border-opacity': borderOpacityCustom } : {} ),
            ...parseInlineCSS( customCSS ),
        },
    } );

    const combinedClassName = [
        blockProps.className,
        containerType,
        'position-relative', // Mandatory for positioning back-end video element
        'overflow-hidden',   // Prevents video leaking out container bounds
        padding, margin, backgroundColor,
        borderClasses, visibilityClasses, shadow,
    ].filter( Boolean ).map( ( c ) => c.trim() ).filter( Boolean ).join( ' ' );

    return (
        <>
            <InspectorControls>
				{/* New Layout/Width Control Panel */}
            <PanelBody title={ __( 'Container Layout', 'wm' ) } initialOpen={ true }>
                <SelectControl
                    label={ __( 'Container Width Class', 'wm' ) }
                    value={ containerType }
                    options={ [
                        { label: '— None —', value: '' },
                        { label: 'Fixed Width (container)', value: 'container' },
                        { label: 'Full Width (container-fluid)', value: 'container-fluid' },
                        { label: 'Mobile-Fluid up to SM (container-sm)', value: 'container-sm' },
                        { label: 'Mobile-Fluid up to MD (container-md)', value: 'container-md' },
                        { label: 'Tablet-Fluid up to LG (container-lg)', value: 'container-lg' },
                        { label: 'Desktop-Fluid up to XL (container-xl)', value: 'container-xl' },
                        { label: 'Wide-Fluid up to XXL (container-xxl)', value: 'container-xxl' },
                    ] }
                    onChange={ ( v ) => setAttributes( { containerType: v } ) }
                    help={ __( 'Controls the max-width properties across viewport sizes based on Bootstrap breakpoints.', 'wm' ) }
                />
            </PanelBody>
                <PaddingControl         value={ padding }         onChange={ ( v ) => setAttributes( { padding: v } ) } />
                <MarginControl          value={ margin }          onChange={ ( v ) => setAttributes( { margin: v } ) } />
                <BackgroundColorControl value={ backgroundColor } onChange={ ( v ) => setAttributes( { backgroundColor: v } ) } />
                
                {/* Advanced Background Control Panel Panel Integration */}
                <BackgroundControl 
                    bgImageUrl={ bgImageUrl } bgImageId={ bgImageId }
                    bgGradient={ bgGradient }
                    bgVideoUrl={ bgVideoUrl } bgVideoId={ bgVideoId }
                    setAttributes={ setAttributes }
                />

                <OpacityControl         value={ opacity }         onChange={ ( v ) => setAttributes( { opacity: v } ) } />
                <TextColorControl       value={ textColor }       onChange={ ( v ) => setAttributes( { textColor: v } ) } />
                <ShadowControl          value={ shadow }          onChange={ ( v ) => setAttributes( { shadow: v } ) } />
                <BorderControl
                    borderSides={ borderSides }
                    borderRemove={ borderRemove }
                    borderColor={ borderColor }
                    borderOpacityClass={ borderOpacityClass }
                    borderOpacityCustom={ borderOpacityCustom }
                    borderSize={ borderSize }
                    borderRadius={ borderRadius }
                    borderRadiusSize={ borderRadiusSize }
                    setAttributes={ setAttributes }
                />
                <CustomCSSControl value={ customCSS } onChange={ ( v ) => setAttributes( { customCSS: v } ) } />
                <VisibilityControl
                    hideXs={ hideXs } hideSm={ hideSm } hideMd={ hideMd }
                    hideLg={ hideLg } hideXl={ hideXl } hideXxl={ hideXxl }
                    setAttributes={ setAttributes }
                />
            </InspectorControls>
            
            <div { ...blockProps } className={ combinedClassName }>
                {/* Visual rendering logic of the background video inside Gutenberg */}
                { bgVideoUrl && (
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
                ) }

                {/* Main Content Bucket Layer stacked safely above background media components */}
                <div style={ { position: 'relative', zIndex: 1, width: '100%' } }>
                    <InnerBlocks renderAppender={ InnerBlocks.ButtonBlockAppender } />
                </div>
            </div>
        </>
    );
}