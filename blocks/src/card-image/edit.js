import { __ } from '@wordpress/i18n';
import { useBlockProps, InspectorControls, RichText, BlockControls, MediaUpload, MediaUploadCheck, InnerBlocks } from '@wordpress/block-editor';
import { PanelBody, SelectControl, ToggleControl, TextControl, ToolbarGroup, ToolbarButton } from '@wordpress/components';
import './editor.scss';

// Import Shared Controls
import { PaddingControl, MarginControl } from '../../controls/spacingControls';
import { BackgroundColorControl, TextColorControl, OpacityControl, ShadowControl, BorderControl, CustomCSSControl } from '../../controls/visualControls';
import { VisibilityControl } from '../../controls/visibilityControl';

const IMG_POSITION_OPTIONS = [
    { label: 'Top',                value: 'top'     },
    { label: 'Bottom',             value: 'bottom'  },
    { label: 'Overlay',            value: 'overlay' },
    { label: 'Left (horizontal)',  value: 'left'    },
    { label: 'Right (horizontal)', value: 'right'   },
];

const IMG_COL_OPTIONS = [
    { label: '1/4 width', value: 'col-md-3' },
    { label: '1/3 width', value: 'col-md-4' },
    { label: '1/2 width', value: 'col-md-6' },
    { label: '2/5 width', value: 'col-md-5' },
];

const OBJECT_FIT_OPTIONS = [
    { label: 'Cover (Fill & Crop)', value: 'cover' },
    { label: 'Contain (Fit Inside)', value: 'contain' },
    { label: 'Fill (Stretch)', value: 'fill' },
];

const BADGE_VARIANTS = [
    { label: 'Primary', value: 'bg-primary text-white' }, { label: 'Secondary', value: 'bg-secondary text-white' },
    { label: 'Success', value: 'bg-success text-white' },  { label: 'Danger', value: 'bg-danger text-white' },
    { label: 'Warning', value: 'bg-warning text-dark' },   { label: 'Info', value: 'bg-info text-dark' },
    { label: 'Dark',    value: 'bg-dark text-white' },     { label: 'Light', value: 'bg-light text-dark' },
];

export default function Edit( { attributes, setAttributes } ) {
    const {
        imageUrl, imageAlt, imageId, imagePosition, imageCol, imageHeight, imageWidth, imageObjectFit,
        title, subtitle, bodyText, showBadge, badgeText, badgeVariant, showLink, textAlign,
        margin, padding, backgroundColor, textColor, opacity, shadow, customCSS,
        borderSides, borderRemove, borderColor, borderOpacityClass, borderOpacityCustom, borderSize, borderRadius, borderRadiusSize,
        hideXs, hideSm, hideMd, hideLg, hideXl, hideXxl
    } = attributes;

    const isHorizontal = imagePosition === 'left' || imagePosition === 'right';
    const isOverlay    = imagePosition === 'overlay';

    // Parse utility custom inline rules
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

    const blockProps = useBlockProps( { 
        className: [
            'card', padding, margin, backgroundColor, borderClasses, visibilityClasses, shadow, textAlign
        ].filter( Boolean ).join( ' ' ),
        style: {
            opacity: opacity !== 100 ? opacity / 100 : undefined,
            color: textColor || undefined,
            ...( borderOpacityCustom ? { '--bs-border-opacity': borderOpacityCustom } : {} ),
            ...parseInlineCSS( customCSS ),
        }
    });

    return (
        <>
            <BlockControls>
                <ToolbarGroup>
                    { IMG_POSITION_OPTIONS.map( ( p ) => (
                        <ToolbarButton key={ p.value } label={ p.label } isPressed={ imagePosition === p.value }
                            onClick={ () => setAttributes( { imagePosition: p.value } ) }
                        >{ { top:'↑', bottom:'↓', overlay:'⊞', left:'←', right:'→' }[ p.value ] }</ToolbarButton>
                    ) ) }
                </ToolbarGroup>
                <ToolbarGroup>
                    { [ 'text-start', 'text-center', 'text-end' ].map( ( a ) => (
                        <ToolbarButton key={ a }
                            icon={ { 'text-start': 'editor-alignleft', 'text-center': 'editor-aligncenter', 'text-end': 'editor-alignright' }[ a ] }
                            isPressed={ textAlign === a }
                            onClick={ () => setAttributes( { textAlign: textAlign === a ? '' : a } ) }
                        />
                    ) ) }
                </ToolbarGroup>
            </BlockControls>

            <InspectorControls>
                <PanelBody title={ __( 'Image Setup', 'wmblocks' ) } initialOpen={ true }>
                    <SelectControl label={ __( 'Image Position', 'wmblocks' ) } value={ imagePosition } options={ IMG_POSITION_OPTIONS } onChange={ ( v ) => setAttributes( { imagePosition: v } ) } />
                    { isHorizontal && (
                        <SelectControl label={ __( 'Column Width', 'wmblocks' ) } value={ imageCol } options={ IMG_COL_OPTIONS } onChange={ ( v ) => setAttributes( { imageCol: v } ) } />
                    ) }
                    <TextControl label={ __( 'Image Alt Text', 'wmblocks' ) } value={ imageAlt } onChange={ ( v ) => setAttributes( { imageAlt: v } ) } />
                    
                    { imageUrl && (
                        <>
                            <hr />
                            <TextControl label={ __( 'Image Height (e.g. 250px, 100%, auto)', 'wmblocks' ) } value={ imageHeight } placeholder="e.g. 240px" onChange={ ( v ) => setAttributes( { imageHeight: v } ) } />
                            <TextControl label={ __( 'Image Width (e.g. 100%, 50vw)', 'wmblocks' ) } value={ imageWidth } placeholder="100%" onChange={ ( v ) => setAttributes( { imageWidth: v } ) } />
                            <SelectControl label={ __( 'Image Crop Rule (Object Fit)', 'wmblocks' ) } value={ imageObjectFit } options={ OBJECT_FIT_OPTIONS } onChange={ ( v ) => setAttributes( { imageObjectFit: v } ) } />
                        </>
                    ) }
                </PanelBody>

                <PanelBody title={ __( 'Badge', 'wmblocks' ) } initialOpen={ false }>
                    <ToggleControl label={ __( 'Show Badge', 'wmblocks' ) } checked={ !! showBadge } onChange={ ( v ) => setAttributes( { showBadge: v } ) } />
                    { showBadge && <>
                        <TextControl label={ __( 'Badge Text', 'wmblocks' ) } value={ badgeText } onChange={ ( v ) => setAttributes( { badgeText: v } ) } />
                        <SelectControl label={ __( 'Badge Colour', 'wmblocks' ) } value={ badgeVariant } options={ BADGE_VARIANTS } onChange={ ( v ) => setAttributes( { badgeVariant: v } ) } />
                    </> }
                </PanelBody>

                <PanelBody title={ __( 'Link Button', 'wmblocks' ) } initialOpen={ false }>
                    <ToggleControl label={ __( 'Show Button', 'wmblocks' ) } checked={ !! showLink } onChange={ ( v ) => setAttributes( { showLink: v } ) } />
                </PanelBody>

                {/* Shared Theme Controls integrated below */}
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
                    hideLg={ hideLg } hideXl={ hideXl } hideXxl={ hideXxl }
                    setAttributes={ setAttributes }
                />
            </InspectorControls>

            <div { ...blockProps }>
                <div style={ { overflow: 'hidden', position: 'relative', width: '100%' } }>
                    { isHorizontal ? (
                        <div class="row g-0">
                            { imagePosition === 'left' && (
                                <div class={ imageCol }>{ renderImageArea( imageUrl, imageId, imageAlt, setAttributes, true, '', imageHeight, imageWidth, imageObjectFit ) }</div>
                            ) }
                            <div class="col">
                                <CardBody title={title} subtitle={subtitle} bodyText={bodyText} showBadge={showBadge} badgeText={badgeText} badgeVariant={badgeVariant} showLink={showLink} setAttributes={setAttributes} />
                            </div>
                            { imagePosition === 'right' && (
                                <div class={ imageCol }>{ renderImageArea( imageUrl, imageId, imageAlt, setAttributes, true, '', imageHeight, imageWidth, imageObjectFit ) }</div>
                            ) }
                        </div>
                    ) : isOverlay ? (
                        <>
                            { renderImageArea( imageUrl, imageId, imageAlt, setAttributes, false, '', imageHeight, imageWidth, imageObjectFit ) }
                            <div class="card-img-overlay">
                                <CardBody title={title} subtitle={subtitle} bodyText={bodyText} showBadge={showBadge} badgeText={badgeText} badgeVariant={badgeVariant} showLink={showLink} setAttributes={setAttributes} />
                            </div>
                        </>
                    ) : (
                        <>
                            { imagePosition === 'top' && renderImageArea( imageUrl, imageId, imageAlt, setAttributes, false, 'top', imageHeight, imageWidth, imageObjectFit ) }
                            <CardBody title={title} subtitle={subtitle} bodyText={bodyText} showBadge={showBadge} badgeText={badgeText} badgeVariant={badgeVariant} showLink={showLink} setAttributes={setAttributes} />
                            { imagePosition === 'bottom' && renderImageArea( imageUrl, imageId, imageAlt, setAttributes, false, 'bottom', imageHeight, imageWidth, imageObjectFit ) }
                        </>
                    ) }
                </div>
            </div>
        </>
    );
}

function renderImageArea( imageUrl, imageId, imageAlt, setAttributes, isHorizontal, position = '', height, width, objectFit ) {
    const imgClass = isHorizontal ? 'img-fluid rounded-start' : position === 'bottom' ? 'card-img-bottom' : 'card-img-top';
    
    // Fallbacks if customized sizing fields are left empty
    const customStyles = {
        display: 'block',
        width: width || '100%',
        height: height || ( isHorizontal ? '100%' : '200px' ),
        objectFit: objectFit || 'cover'
    };

    return (
        <MediaUploadCheck>
            <MediaUpload
                onSelect={ ( media ) => setAttributes( { imageUrl: media.url, imageId: media.id, imageAlt: media.alt || '' } ) }
                allowedTypes={ [ 'image' ] } value={ imageId }
                render={ ( { open } ) => (
                    <div className="wmblocks-card-img-area" onClick={ open } style={ { cursor: 'pointer', height: '100%' } }>
                        { imageUrl ? (
                            <img src={ imageUrl } alt={ imageAlt } className={ imgClass } style={ customStyles } />
                        ) : (
                            <div className="wmblocks-card-img-placeholder" style={ { background: '#f0f0f0', padding: '40px 10px', textAlign: 'center', border: '1px dashed #ccc' } }>
                                <span>🖼 Click to set card image</span>
                            </div>
                        ) }
                    </div>
                ) }
            />
        </MediaUploadCheck>
    );
}

function CardBody( { title, subtitle, bodyText, showBadge, badgeText, badgeVariant, showLink, setAttributes } ) {
    return (
        <div className="card-body">
            { showBadge && (
                <RichText tagName="span" className={ 'badge mb-2 ' + badgeVariant } value={ badgeText } onChange={ ( v ) => setAttributes( { badgeText: v } ) } allowedFormats={ [] } placeholder={ __( 'Badge…', 'wmblocks' ) } />
            ) }
            <RichText tagName="h5" className="card-title" value={ title } onChange={ ( v ) => setAttributes( { title: v } ) } allowedFormats={ [ 'core/bold', 'core/italic' ] } placeholder={ __( 'Card title…', 'wmblocks' ) } />
            { subtitle && (
                <RichText tagName="h6" className="card-subtitle mb-2 text-muted" value={ subtitle } onChange={ ( v ) => setAttributes( { subtitle: v } ) } allowedFormats={ [ 'core/bold', 'core/italic' ] } placeholder={ __( 'Subtitle…', 'wmblocks' ) } />
            ) }
            <RichText tagName="p" className="card-text" value={ bodyText } onChange={ ( v ) => setAttributes( { bodyText: v } ) } allowedFormats={ [ 'core/bold', 'core/italic', 'core/link' ] } placeholder={ __( 'Card body text…', 'wmblocks' ) } />
            { showLink && (
                <div className="wmblocks-button-wrapper mt-3">
                    <InnerBlocks allowedBlocks={ [ 'wmblocks/buttons' ] } template={ [ [ 'wmblocks/buttons' ] ] } templateLock="all" />
                </div>
            ) }
        </div>
    );
}