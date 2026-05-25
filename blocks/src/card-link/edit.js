import { __ } from '@wordpress/i18n';
import { useBlockProps, InspectorControls, RichText } from '@wordpress/block-editor';
import { PanelBody, SelectControl, TextControl } from '@wordpress/components';

// Import Shared Container Controls
import { PaddingControl, MarginControl } from '../../controls/spacingControls';
import { BackgroundColorControl, OpacityControl, ShadowControl, BorderControl, CustomCSSControl } from '../../controls/visualControls';
import { VisibilityControl } from '../../controls/visibilityControl';
import { BackgroundControl } from '../../controls/background';

const LINK_COLOR_OPTS = [
    { label: '— Default —',          value: '' },
    { label: 'Primary Link',         value: 'link-primary' },
    { label: 'Secondary Link',       value: 'link-secondary' },
    { label: 'Success Link',         value: 'link-success' },
    { label: 'Danger Link',          value: 'link-danger' },
    { label: 'Warning Link',         value: 'link-warning' },
    { label: 'Info Link',            value: 'link-info' },
    { label: 'Light Link',           value: 'link-light' },
    { label: 'Dark Link',            value: 'link-dark' },
    { label: 'Body Emphasis Link',   value: 'link-body-emphasis' },
];

export default function Edit( { attributes, setAttributes } ) {
    const { 
        content, url, linkColor,
        padding, margin, backgroundColor, opacity, shadow, customCSS,
        borderSides, borderRemove, borderColor, borderOpacityClass, borderOpacityCustom, borderSize, borderRadius, borderRadiusSize,
        hideXs, hideSm, hideMd, hideLg, hideXl, hideXxl, bgImageUrl, bgImageId, bgGradient, bgVideoUrl, bgVideoId
    } = attributes;

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
        !! hideXs  ? 'd-none d-sm-block'   : '',
        !! hideSm  ? 'd-sm-none d-md-block' : '',
        !! hideMd  ? 'd-md-none d-lg-block' : '',
        !! hideLg  ? 'd-lg-none d-xl-block' : '',
        !! hideXl  ? 'd-xl-none d-xxl-block': '',
        !! hideXxl ? 'd-xxl-none'           : '',
    ].filter( Boolean ).join( ' ' );

    const hasVideo = !! bgVideoUrl;
    const coreLinkClasses = [ 'card-link', linkColor ].filter( Boolean ).join( ' ' );

    const blockClasses = [
        hasVideo ? 'position-relative overflow-hidden d-inline-block' : '',
        coreLinkClasses, padding, margin, backgroundColor, borderClasses, visibilityClasses, shadow
    ].filter( Boolean ).join( ' ' );

    const blockProps = useBlockProps( { 
        className: blockClasses,
        style: {
            ...dynamicBgStyles,
            opacity: opacity !== 100 ? opacity / 100 : undefined,
            ...( borderOpacityCustom ? { '--bs-border-opacity': borderOpacityCustom } : {} ),
            ...parseInlineCSS( customCSS ),
        },
        onClick: ( e ) => e.preventDefault()
    } );

    return (
        <>
            <InspectorControls>
                <PanelBody title={ __( 'Link Configuration', 'wm' ) } initialOpen={ true }>
                    <TextControl
                        label={ __( 'Destination URL', 'wm' ) }
                        value={ url }
                        onChange={ ( v ) => setAttributes( { url: v } ) }
                        placeholder="https://..."
                    />
                    <SelectControl 
                        label={ __( 'Link Text Color', 'wm' ) } 
                        value={ linkColor } 
                        options={ LINK_COLOR_OPTS } 
                        onChange={ ( v ) => setAttributes( { linkColor: v } ) } 
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
                    hideLg={ hideLg } hideXl={ hideXl } hideXxl={ hideXxl }
                    setAttributes={ setAttributes }
                />
            </InspectorControls>

            <a href="#" { ...blockProps }>
                { hasVideo && (
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

                <RichText
                    tagName="span"
                    value={ content }
                    onChange={ ( val ) => setAttributes( { content: val } ) }
                    placeholder={ __( 'Enter link text...', 'wm' ) }
                    style={ { position: 'relative', zIndex: 1, display: 'inline-block' } }
                    allowedFormats={ [ 'core/bold', 'core/italic' ] }
                />
            </a>
        </>
    );
}