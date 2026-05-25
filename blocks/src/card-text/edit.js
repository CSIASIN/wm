import { __ } from '@wordpress/i18n';
import { 
    useBlockProps, 
    InspectorControls, 
    BlockControls, 
    RichText 
} from '@wordpress/block-editor';
import { 
    PanelBody, 
    SelectControl, 
    TextControl, 
    ToolbarGroup 
} from '@wordpress/components';

// Import Shared Container Controls
import { PaddingControl, MarginControl } from '../../controls/spacingControls';
import { BackgroundColorControl, OpacityControl, ShadowControl, BorderControl, CustomCSSControl } from '../../controls/visualControls';
import { VisibilityControl } from '../../controls/visibilityControl';
import { BackgroundControl } from '../../controls/background';

const TEXT_ALIGN_OPTS = [
    { label: '— Default —',  value: '' },
    { label: 'text-start',   value: 'text-start' },
    { label: 'text-center',  value: 'text-center' },
    { label: 'text-end',     value: 'text-end' },
];

const TEXT_COLOR_OPTS = [
    { label: '— Default —',      value: '' },
    { label: 'text-primary',     value: 'text-primary' },
    { label: 'text-secondary',   value: 'text-secondary' },
    { label: 'text-success',     value: 'text-success' },
    { label: 'text-danger',      value: 'text-danger' },
    { label: 'text-warning',     value: 'text-warning' },
    { label: 'text-info',        value: 'text-info' },
    { label: 'text-light',       value: 'text-light' },
    { label: 'text-dark',        value: 'text-dark' },
    { label: 'text-muted',       value: 'text-muted' },
    { label: 'text-body',        value: 'text-body' },
    { label: 'text-white',       value: 'text-white' },
    { label: 'text-body-emphasis', value: 'text-body-emphasis' },
];

const FONT_WEIGHT_OPTS = [
    { label: '— Default —',  value: '' },
    { label: 'fw-bold',      value: 'fw-bold' },
    { label: 'fw-bolder',    value: 'fw-bolder' },
    { label: 'fw-semibold',  value: 'fw-semibold' },
    { label: 'fw-medium',    value: 'fw-medium' },
    { label: 'fw-normal',    value: 'fw-normal' },
    { label: 'fw-light',     value: 'fw-light' },
    { label: 'fw-lighter',   value: 'fw-lighter' },
    { label: 'fst-italic',   value: 'fst-italic' },
];

export default function Edit( { attributes, setAttributes } ) {
    const { 
        content, textAlign, textColor, fontWeight, customClass,
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
    const textModifiers = [ textAlign, textColor, fontWeight, customClass ].filter( Boolean ).join( ' ' );

    const blockClasses = [
        'wmblocks-bs-card-text',
        hasVideo ? 'position-relative overflow-hidden' : '',
        textModifiers, padding, margin, backgroundColor, borderClasses, visibilityClasses, shadow
    ].filter( Boolean ).join( ' ' );

    const blockProps = useBlockProps( { 
        className: blockClasses,
        style: {
            ...dynamicBgStyles,
            opacity: opacity !== 100 ? opacity / 100 : undefined,
            ...( borderOpacityCustom ? { '--bs-border-opacity': borderOpacityCustom } : {} ),
            ...parseInlineCSS( customCSS ),
        }
    } );

    return (
        <>
            <BlockControls>
                <ToolbarGroup>
                    { [
                        [ 'editor-alignleft',   'text-start',   __( 'Align left', 'wmblocks' ) ],
                        [ 'editor-aligncenter', 'text-center', __( 'Align center', 'wmblocks' ) ],
                        [ 'editor-alignright',  'text-end',    __( 'Align right', 'wmblocks' ) ],
                    ].map( ( [ icon, cls, label ] ) => (
                        <button
                            key={ cls }
                            title={ label }
                            onMouseDown={ e => { e.preventDefault(); setAttributes( { textAlign: textAlign === cls ? '' : cls } ); } }
                            style={ {
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                width: 36, height: 36, border: 'none', cursor: 'pointer',
                                background: textAlign === cls ? '#e8f4fd' : 'transparent',
                                color: textAlign === cls ? '#007cba' : 'currentColor',
                                borderRadius: 2,
                            } }
                        >
                            <span className={ `dashicons dashicons-${ icon }` } style={ { fontSize: 18 } } />
                        </button>
                    ) ) }
                </ToolbarGroup>
            </BlockControls>

            <InspectorControls>
                <PanelBody title={ __( 'Text Settings', 'wmblocks' ) } initialOpen={ true }>
                    <SelectControl label={ __( 'Text Align', 'wmblocks' ) } value={ textAlign } options={ TEXT_ALIGN_OPTS } onChange={ v => setAttributes( { textAlign: v } ) } />
                    <SelectControl label={ __( 'Text Color', 'wmblocks' ) } value={ textColor } options={ TEXT_COLOR_OPTS } onChange={ v => setAttributes( { textColor: v } ) } />
                    <SelectControl label={ __( 'Font Weight', 'wmblocks' ) } value={ fontWeight } options={ FONT_WEIGHT_OPTS } onChange={ v => setAttributes( { fontWeight: v } ) } />
                    <TextControl label={ __( 'Extra Classes', 'wmblocks' ) } value={ customClass } onChange={ v => setAttributes( { customClass: v } ) } />
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

            <p { ...blockProps }>
                { /* Editor Status Label Badge */ }
                <span contentEditable={false} suppressContentEditableWarning style={ { display: 'flex', alignItems: 'center', gap: 6, marginBottom: 8, position: 'relative', zIndex: 2, userSelect: 'none' } }>
                    <span style={ { background: '#6c757d', color: '#fff', fontSize: 10, fontWeight: 700, padding: '1px 7px', borderRadius: 10 } }>
                        CARD TEXT
                    </span>
                    { textModifiers && (
                        <code style={ { fontSize: 10, color: '#6c757d', background: '#f8f9fa', padding: '2px 6px' } }>
                            .{ textModifiers.split( ' ' ).join( ' .' ) }
                        </code>
                    ) }
                </span>

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
                    placeholder={ __( 'Enter card text content...', 'wmblocks' ) }
                    style={ { position: 'relative', zIndex: 1, display: 'block', width: '100%' } }
                />
            </p>
        </>
    );
}