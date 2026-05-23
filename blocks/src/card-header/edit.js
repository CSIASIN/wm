import { useBlockProps, InspectorControls, InnerBlocks } from '@wordpress/block-editor';
import { PaddingControl, MarginControl } from '../../controls/spacingControls';
import { BackgroundColorControl, TextColorControl, OpacityControl, ShadowControl, BorderControl, CustomCSSControl } from '../../controls/visualControls';
import { VisibilityControl } from '../../controls/visibilityControl';
import { BackgroundControl } from '../../controls/background';

export default function Edit( { attributes, setAttributes } ) {
    const {
        margin, padding, customCSS, backgroundColor, opacity, shadow,
        borderSides, borderRemove, borderColor, borderOpacityClass,
        borderOpacityCustom, borderSize, borderRadius, borderRadiusSize, textColor,
        hideXs, hideSm, hideMd, hideLg, hideXl, hideXxl,
        bgImageUrl, bgImageId, bgGradient, bgVideoUrl, bgVideoId
    } = attributes;

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

    const dynamicBgStyles = bgImageUrl ? { backgroundImage: `url(${ bgImageUrl })`, backgroundSize: 'cover', backgroundPosition: 'center' } : ( bgGradient ? { background: bgGradient } : {} );

    const blockProps = useBlockProps( {
        style: {
            ...dynamicBgStyles,
            opacity: opacity !== 100 ? opacity / 100 : undefined,
            color: textColor || undefined,
            ...( borderOpacityCustom ? { '--bs-border-opacity': borderOpacityCustom } : {} ),
            ...parseInlineCSS( customCSS ),
        },
    } );

    const borderClasses = [ ...( borderSides || [] ), ...( borderRemove || [] ), borderColor, borderOpacityClass, borderSize, borderRadius, borderRadiusSize ].filter( Boolean ).join( ' ' );
    const visibilityClasses = [ hideXs ? 'd-none d-sm-block' : '', hideSm ? 'd-sm-none d-md-block' : '', hideMd ? 'd-md-none d-lg-block' : '', hideLg ? 'd-lg-none d-xl-block' : '', hideXl ? 'd-xl-none d-xxl-block' : '', hideXxl ? 'd-xxl-none' : '' ].filter( Boolean ).join( ' ' );
    const combinedClassName = [ blockProps.className, 'card-header', 'position-relative', 'overflow-hidden', padding, margin, backgroundColor, shadow, borderClasses, visibilityClasses ].filter( Boolean ).map( c => c.trim() ).filter( Boolean ).join( ' ' );

    return (
        <>
            <InspectorControls>
                <PaddingControl value={ padding } onChange={ ( v ) => setAttributes( { padding: v } ) } />
                <MarginControl value={ margin } onChange={ ( v ) => setAttributes( { margin: v } ) } />
                <BackgroundColorControl value={ backgroundColor } onChange={ ( v ) => setAttributes( { backgroundColor: v } ) } />
                <BackgroundControl bgImageUrl={ bgImageUrl } bgImageId={ bgImageId } bgGradient={ bgGradient } bgVideoUrl={ bgVideoUrl } bgVideoId={ bgVideoId } setAttributes={ setAttributes } />
                <OpacityControl value={ opacity } onChange={ ( v ) => setAttributes( { opacity: v } ) } />
                <TextColorControl value={ textColor } onChange={ ( v ) => setAttributes( { textColor: v } ) } />
                <ShadowControl value={ shadow } onChange={ ( v ) => setAttributes( { shadow: v } ) } />
                <BorderControl borderSides={ borderSides } borderRemove={ borderRemove } borderColor={ borderColor } borderOpacityClass={ borderOpacityClass } borderOpacityCustom={ borderOpacityCustom } borderSize={ borderSize } borderRadius={ borderRadius } borderRadiusSize={ borderRadiusSize } setAttributes={ setAttributes } />
                <CustomCSSControl value={ customCSS } onChange={ ( v ) => setAttributes( { customCSS: v } ) } />
                <VisibilityControl hideXs={ hideXs } hideSm={ hideSm } hideMd={ hideMd } hideLg={ hideLg } hideXl={ hideXxl } hideXxl={ hideXxl } setAttributes={ setAttributes } />
            </InspectorControls>
            <div { ...blockProps } className={ combinedClassName }>
                { bgVideoUrl && (
                    <video src={ bgVideoUrl } autoPlay muted loop playsInline style={ { position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: 0, pointerEvents: 'none' } } />
                ) }
                <div style={ { position: 'relative', zIndex: 1, width: '100%' } }>
                    <InnerBlocks renderAppender={ InnerBlocks.ButtonBlockAppender } />
                </div>
            </div>
        </>
    );
}