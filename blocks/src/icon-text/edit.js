import { __ } from '@wordpress/i18n';
import { useBlockProps, InspectorControls, RichText } from '@wordpress/block-editor';
import { PanelBody, TextControl, ToggleControl, SelectControl, TextareaControl, ButtonGroup, Button } from '@wordpress/components';
import './editor.scss';

const CONTENT_TYPES = [
    { label: 'Text Processing Element', value: 'text' },
    { label: 'Media Image Element', value: 'image' },
];

const PRESET_ICONS = [
    {
        label: 'Arrow Right',
        value: '<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/></svg>',
    },
    {
        label: 'Arrow Left',
        value: '<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/></svg>',
    },
    {
        label: 'Chevron Right',
        value: '<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/></svg>',
    },
    {
        label: 'External Link',
        value: '<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"/><path fill-rule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"/></svg>',
    },
    {
        label: 'Download',
        value: '<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16"><path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"/><path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"/></svg>',
    },
    {
        label: 'Star',
        value: '<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16"><path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/></svg>',
    },
    {
        label: 'Heart',
        value: '<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16"><path d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/></svg>',
    },
    {
        label: 'Info Circle',
        value: '<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16"><path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"/></svg>',
    },
];

const WRAPPER_TAGS = [
    { label: 'Paragraph (<p>)', value: 'p' },
    { label: 'Span (<span>)', value: 'span' },
    { label: 'Heading 1 (<h1>)', value: 'h1' },
    { label: 'Heading 2 (<h2>)', value: 'h2' },
    { label: 'Heading 3 (<h3>)', value: 'h3' },
    { label: 'Heading 4 (<h4>)', value: 'h4' },
    { label: 'Heading 5 (<h5>)', value: 'h5' },
    { label: 'Heading 6 (<h6>)', value: 'h6' },
];

const TEXT_COLORS = [
    { label: '— Default —',        value: '' },
    { label: 'text-primary',       value: 'text-primary' },
    { label: 'text-secondary',     value: 'text-secondary' },
    { label: 'text-success',       value: 'text-success' },
    { label: 'text-danger',        value: 'text-danger' },
    { label: 'text-warning',       value: 'text-warning' },
    { label: 'text-info',          value: 'text-info' },
    { label: 'text-light',         value: 'text-light' },
    { label: 'text-dark',          value: 'text-dark' },
];
// Restored Option Arrays
const LINK_UNDERLINE = [
    { label: '— Default —',              value: '' },
    { label: 'link-underline-primary',   value: 'link-underline-primary' },
    { label: 'link-underline-secondary', value: 'link-underline-secondary' },
    { label: 'link-underline-success',   value: 'link-underline-success' },
    { label: 'link-underline-danger',    value: 'link-underline-danger' },
    { label: 'link-underline-opacity-0',  value: 'link-underline-opacity-0' },
    { label: 'link-underline-opacity-100', value: 'link-underline-opacity-100' },
];

const LINK_OPACITY = [
    { label: '— Default —',      value: '' },
    { label: 'link-opacity-10',   value: 'link-opacity-10' },
    { label: 'link-opacity-25',   value: 'link-opacity-25' },
    { label: 'link-opacity-50',   value: 'link-opacity-50' },
    { label: 'link-opacity-75',   value: 'link-opacity-75' },
    { label: 'link-opacity-100',  value: 'link-opacity-100' },
];

const FONT_SIZE_OPTS = [
    { label: '— Inherit —', value: '' },
    { label: 'fs-1 (2.5rem)', value: 'fs-1' },
    { label: 'fs-2 (2rem)',   value: 'fs-2' },
    { label: 'fs-3 (1.75rem)',value: 'fs-3' },
    { label: 'fs-4 (1.5rem)', value: 'fs-4' },
    { label: 'fs-5 (1.25rem)',value: 'fs-5' },
    { label: 'fs-6 (1rem)',   value: 'fs-6' },
];

const GAP_OPTS = [
    { label: '— Default —', value: '' },
    { label: 'gap-1', value: 'gap-1' },
    { label: 'gap-2', value: 'gap-2' },
    { label: 'gap-3', value: 'gap-3' },
];

export default function Edit( { attributes, setAttributes } ) {
    const {
        wrapperTag, contentType, text, imageUrl, iconSvg, iconPosition,
        hoverAnim, isInlineFlex, isAlignedCenter, textColor, underlineClass, textOpacity, fontSize, gap, customClass,
    } = attributes;

    const Tag = wrapperTag || 'p';

    const structuralClass = [
        isInlineFlex ? 'd-inline-flex' : '',
        isAlignedCenter ? 'align-items-center' : '',
        hoverAnim ? 'icon-link-hover' : '',
        textColor      || '',
        underlineClass || '',
        textOpacity    || '',
        fontSize       || '',
        gap            || '',
        customClass    || '',
    ].filter( Boolean ).join( ' ' );

    const blockProps = useBlockProps( { className: 'wmblocks-icon-text-wrapper' } );

    return (
        <>
            <InspectorControls>
                <PanelBody title={ __( 'Structure & Layout', 'wmblocks' ) } initialOpen={ true }>
                    <SelectControl
                        label={ __( 'HTML Element Wrapper', 'wmblocks' ) }
                        value={ wrapperTag }
                        options={ WRAPPER_TAGS }
                        onChange={ ( v ) => setAttributes( { wrapperTag: v } ) }
                    />
                    <SelectControl
                        label={ __( 'Content Source Type', 'wmblocks' ) }
                        value={ contentType }
                        options={ CONTENT_TYPES }
                        onChange={ ( v ) => setAttributes( { contentType: v } ) }
                    />
                    <ToggleControl
                        label={ __( 'Enable Inline-Flex Display (d-inline-flex)', 'wmblocks' ) }
                        checked={ !! isInlineFlex }
                        onChange={ ( v ) => setAttributes( { isInlineFlex: v } ) }
                    />
                    <ToggleControl
                        label={ __( 'Enable Vertical Alignment (align-items-center)', 'wmblocks' ) }
                        checked={ !! isAlignedCenter }
                        onChange={ ( v ) => setAttributes( { isAlignedCenter: v } ) }
                    />
                    <ToggleControl
                        label={ __( 'Hover Animation Nudge', 'wmblocks' ) }
                        checked={ !! hoverAnim }
                        onChange={ ( v ) => setAttributes( { hoverAnim: v } ) }
                    />
                </PanelBody>

                <PanelBody title={ __( 'Icon Configuration', 'wmblocks' ) } initialOpen={ true }>
                    <div style={ { marginBottom: '10px' } }>
                        <div style={ { fontSize: '11px', fontWeight: 600, color: '#1e1e1e', marginBottom: '6px' } }>{ __( 'Icon Position', 'wmblocks' ) }</div>
                        <ButtonGroup>
                            <Button variant={ iconPosition === 'start' ? 'primary' : 'secondary' } onClick={ () => setAttributes( { iconPosition: 'start' } ) }>
                                { __( '← Before Content', 'wmblocks' ) }
                            </Button>
                            <Button variant={ iconPosition === 'end' ? 'primary' : 'secondary' } onClick={ () => setAttributes( { iconPosition: 'end' } ) }>
                                { __( 'After Content →', 'wmblocks' ) }
                            </Button>
                        </ButtonGroup>
                    </div>

                    <div style={ { marginBottom: '10px' } }>
                        <div style={ { fontSize: '11px', fontWeight: 600, color: '#1e1e1e', marginBottom: '6px' } }>{ __( 'Preset Icons', 'wmblocks' ) }</div>
                        <div style={ { display: 'flex', flexWrap: 'wrap', gap: '4px' } }>
                            { PRESET_ICONS.map( ( icon ) => (
                                <button
                                    key={ icon.label }
                                    title={ icon.label }
                                    onMouseDown={ ( e ) => { e.preventDefault(); setAttributes( { iconSvg: icon.value } ); } }
                                    style={ {
                                        width: '36px', height: '36px', border: iconSvg === icon.value ? '2px solid #007cba' : '1px solid #ddd',
                                        borderRadius: '4px', background: iconSvg === icon.value ? '#e8f4fd' : '#f8f9fa',
                                        cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    } }
                                    dangerouslySetInnerHTML={ { __html: icon.value } }
                                />
                            ) ) }
                            <button
                                title={ __( 'No icon', 'wmblocks' ) }
                                onMouseDown={ ( e ) => { e.preventDefault(); setAttributes( { iconSvg: '' } ); } }
                                style={ { width: '36px', height: '36px', border: ! iconSvg ? '2px solid #007cba' : '1px solid #ddd', borderRadius: '4px', cursor: 'pointer' } }
                            >✕</button>
                        </div>
                    </div>

                    <TextareaControl
                        label={ __( 'Custom SVG', 'wmblocks' ) }
                        value={ iconSvg }
                        onChange={ ( v ) => setAttributes( { iconSvg: v } ) }
                        rows={ 3 }
                    />
                </PanelBody>

                <PanelBody title={ __( 'Styles & Classes', 'wmblocks' ) } initialOpen={ false }>
                    <SelectControl label={ __( 'Color Styling', 'wmblocks' ) } value={ textColor } options={ TEXT_COLORS } onChange={ ( v ) => setAttributes( { textColor: v } ) } />
                    <SelectControl label={ __( 'Underline Style', 'wmblocks' ) } value={ underlineClass } options={ LINK_UNDERLINE } onChange={ ( v ) => setAttributes( { underlineClass: v } ) } />
                    <SelectControl label={ __( 'Opacity Layer', 'wmblocks' ) } value={ textOpacity } options={ LINK_OPACITY } onChange={ ( v ) => setAttributes( { textOpacity: v } ) } />
                    <SelectControl label={ __( 'Font Scale', 'wmblocks' ) } value={ fontSize } options={ FONT_SIZE_OPTS } onChange={ ( v ) => setAttributes( { fontSize: v } ) } />
                    <SelectControl label={ __( 'Icon Gap Spacing', 'wmblocks' ) } value={ gap } options={ GAP_OPTS } onChange={ ( v ) => setAttributes( { gap: v } ) } />
                    <TextControl   label={ __( 'Extra Classes', 'wmblocks' ) } value={ customClass } onChange={ ( v ) => setAttributes( { customClass: v } ) } />
                </PanelBody>
            </InspectorControls>

            <div { ...blockProps }>
                { /* Enforcing stable rendering wrapper nodes prevents custom props from leaking down to raw elements */ }
                <Tag className={ structuralClass } style={ { display: (isInlineFlex ? 'inline-flex' : 'block'), alignItems: (isAlignedCenter ? 'center' : 'stretch') } }>
                    { iconPosition === 'start' && iconSvg && (
                        <span style={ { display: 'inline-flex', alignItems: 'center', marginRight: '6px' } } dangerouslySetInnerHTML={ { __html: iconSvg } } />
                    ) }

                    { contentType === 'text' ? (
                        <RichText
                            tagName="span"
                            value={ text }
                            onChange={ ( newText ) => setAttributes( { text: newText } ) }
                            placeholder={ __( 'Enter text...', 'wmblocks' ) }
                            __unstableFormatControls={ [ 'wmblocks/wm-text-gradient' ] }
                        />
                    ) : (
                        <span style={ { display: 'inline-flex', alignItems: 'center' } }>
                            <MediaUpload
                                onSelect={ ( media ) => setAttributes( { imageUrl: media.url } ) }
                                allowedTypes={ [ 'image' ] }
                                value={ imageUrl }
                                render={ ( { open } ) => (
                                    imageUrl ? (
                                        <span style={ { position: 'relative', display: 'inline-block' } }>
                                            <img src={ imageUrl } alt={ __( 'Preview', 'wmblocks' ) } style={ { maxHeight: '2.5em', width: 'auto', borderRadius: '4px' } } />
                                            <Button 
                                                variant="secondary" 
                                                size="small" 
                                                onClick={ () => setAttributes( { imageUrl: '' } ) }
                                                style={ { position: 'absolute', top: '-10px', right: '-10px', background: '#fff', borderRadius: '50%', minWidth: '20px', padding: '0' } }
                                            >✕</Button>
                                        </span>
                                    ) : (
                                        <Button variant="secondary" icon="upload" onClick={ open }>{ __( 'Select Image', 'wmblocks' ) }</Button>
                                    )
                                ) }
                            />
                        </span>
                    ) }

                    { iconPosition === 'end' && iconSvg && (
                        <span style={ { display: 'inline-flex', alignItems: 'center', marginLeft: '6px' } } dangerouslySetInnerHTML={ { __html: iconSvg } } />
                    ) }
                </Tag>
            </div>
        </>
    );
}