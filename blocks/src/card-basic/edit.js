import { __ } from '@wordpress/i18n';
import { useBlockProps, InspectorControls, InnerBlocks } from '@wordpress/block-editor';
import { PaddingControl, MarginControl } from '../../controls/spacingControls';
import { BackgroundColorControl, TextColorControl, OpacityControl, ShadowControl, BorderControl, CustomCSSControl } from '../../controls/visualControls';
import { VisibilityControl } from '../../controls/visibilityControl';
import './editor.scss';
export default function Edit( { attributes, setAttributes } ) {
    const {
        padding, margin, backgroundColor, textColor, opacity, shadow, customCSS,
        borderSides, borderRemove, borderColor, borderOpacityClass,
        borderOpacityCustom, borderSize, borderRadius, borderRadiusSize,
        hideXs, hideSm, hideMd, hideLg, hideXl, hideXxl
    } = attributes;

    const blockProps = useBlockProps({
        className: [
            'card',
            padding, margin, backgroundColor, shadow,
            ...(borderSides || []), ...(borderRemove || []),
            borderColor, borderOpacityClass, borderSize, borderRadius, borderRadiusSize,
        ].filter(Boolean).join(' ')
    });

    // Wide allowed blocks — col accepts everything so authors can nest rows inside
const ALLOWED = [
	'wmblocks/bs-heading','wmblocks/grid-row', 'wmblocks/grid-container', 'wmblocks/card-basic',
	'wmblocks/container', 'wmblocks/flex-container',
	'wmblocks/vstack', 'wmblocks/hstack',
	'core/paragraph', 'core/heading', 'core/image', 'core/list',
	'core/group', 'core/columns', 'core/html',
	'wmblocks/bs-image', 'wmblocks/bs-figure', 'wmblocks/object-fit',
	'wmblocks/accordion', 'wmblocks/tabs', 'wmblocks/carousel',
	'wmblocks/collapse', 'wmblocks/modal', 'wmblocks/toast',
	'wmblocks/progress', 'wmblocks/list-group', 'wmblocks/bs-form',
	'wmblocks/icon-link', 'wmblocks/buttons','wmblocks/button-group','wmblocks/image-link', 'wmblocks/position-wrapper','wmblocks/card','wmblocks/card-image','wmblocks/card-header-footer',
];
    return (
        <>
            <InspectorControls>
                <PaddingControl value={padding} onChange={(v) => setAttributes({ padding: v })} />
                <MarginControl value={margin} onChange={(v) => setAttributes({ margin: v })} />
                <BackgroundColorControl value={backgroundColor} onChange={(v) => setAttributes({ backgroundColor: v })} />
                <TextColorControl value={textColor} onChange={(v) => setAttributes({ textColor: v })} />
                <OpacityControl value={opacity} onChange={(v) => setAttributes({ opacity: v })} />
                <ShadowControl value={shadow} onChange={(v) => setAttributes({ shadow: v })} />
                <BorderControl {...attributes} setAttributes={setAttributes} />
                <CustomCSSControl value={customCSS} onChange={(v) => setAttributes({ customCSS: v })} />
                <VisibilityControl 
                    hideXs={hideXs} hideSm={hideSm} hideMd={hideMd} 
                    hideLg={hideLg} hideXl={hideXl} hideXxl={hideXxl} 
                    setAttributes={setAttributes} 
                />
            </InspectorControls>
            
            <div {...blockProps}>
                <div className="card-body">
                    <InnerBlocks 
                    allowedBlocks={ ALLOWED }
                    template={ [ [ 'core/paragraph', { placeholder: 'Enter card content...' } ] ] }
                    renderAppender={ InnerBlocks.ButtonBlockAppender }
                    />
                </div>
            </div>
        </>
    );
}