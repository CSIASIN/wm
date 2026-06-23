import { __ } from '@wordpress/i18n';
import { useBlockProps, InnerBlocks, InspectorControls } from '@wordpress/block-editor';
import './editor.scss';

// Import Shared Controls
import { PaddingControl, MarginControl } from '../../controls/spacingControls';
import { BackgroundColorControl, TextColorControl, OpacityControl, ShadowControl, BorderControl, 
    CustomCSSControl, AdvancedFiltersControl } from '../../controls/visualControls';     
import { VisibilityControl } from '../../controls/visibilityControl';
import { BackgroundControl } from '../../controls/background';
import { TypographyControl, getTypographyStyles } from '../../controls/TypographyControl';


export default function Edit( { attributes, setAttributes } ) {
    const {
        padding, margin, backgroundColor, customBackgroundColor, backdropBlur, elementFilter, textColor, opacity, shadow, customCSS,
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

// Smart formatter: allows advanced CSS functions but safely catches legacy simple blur values (e.g., "10px")
    const formatFilter = ( val ) => {
        if ( ! val ) return undefined;
        return val.includes( '(' ) || val === 'none' ? val : `blur(${ val })`;
    };
    const blockProps = useBlockProps( {
        className: [
            'wmblocks-div', 
            'wmblocks-typography-target', // Make sure editor preview targets typography child cascades
            hasVideo ? 'position-relative' : '', 
            hasVideo ? 'overflow-hidden' : '', 
            padding, margin, backgroundColor, borderClasses, visibilityClasses, shadow
        ].filter( Boolean ).join( ' ' ),
        style: {
            ...dynamicBgStyles,
            backgroundColor: customBackgroundColor || undefined,
            backdropFilter: formatFilter( backdropBlur ),
            WebkitBackdropFilter: formatFilter( backdropBlur ),
            filter: formatFilter( elementFilter ),
            WebkitFilter: formatFilter( elementFilter ),
            opacity: opacity !== 100 ? opacity / 100 : undefined,
            color: textColor || undefined,
            ...( borderOpacityCustom ? { '--bs-border-opacity': borderOpacityCustom } : {} ),
            ...parseInlineCSS( customCSS ),
            
            // This safely injects ALL base styling + responsive variables (--wm-font-size-xs, etc.)
            // directly without requiring manual object drilling that causes runtime breaks.
            ...typography.styles,
        }
    } );

    const DIV_TEMPLATE = [
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
                <BackgroundControl 
                    bgImageUrl={bgImageUrl} bgImageId={bgImageId} 
                    bgGradient={bgGradient} 
                    bgVideoUrl={bgVideoUrl} bgVideoId={bgVideoId} 
                    setAttributes={setAttributes} 
                />
                <PaddingControl value={ padding } onChange={ ( v ) => setAttributes( { padding: v } ) } />
                <MarginControl value={ margin } onChange={ ( v ) => setAttributes( { margin: v } ) } />
              <BackgroundColorControl 
                    value={ backgroundColor } 
                    onChange={ ( v ) => setAttributes( { backgroundColor: v } ) } 
                    customValue={ customBackgroundColor }
                    onCustomChange={ ( v ) => setAttributes( { customBackgroundColor: v } ) }
                />
               <AdvancedFiltersControl 
                    backdropBlur={ backdropBlur } 
                    onBackdropChange={ ( v ) => setAttributes( { backdropBlur: v } ) }
                    elementFilter={ elementFilter } 
                    onFilterChange={ ( v ) => setAttributes( { elementFilter: v } ) } 
                />
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

            <div { ...blockProps }>
                { hasVideo ? (
                    <>
                        <video 
                            src={ bgVideoUrl } 
                            autoPlay muted loop playsinline
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
                    <InnerBlocks template={ DIV_TEMPLATE } renderAppender={ InnerBlocks.ButtonBlockAppender } />
                ) }
            </div>
        </>
    );
}