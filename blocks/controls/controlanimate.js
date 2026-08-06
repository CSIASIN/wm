import { addFilter } from '@wordpress/hooks';
import { InspectorControls } from '@wordpress/block-editor';
import { PanelBody, SelectControl, ToggleControl, TextControl, PanelRow } from '@wordpress/components';
import { createHigherOrderComponent } from '@wordpress/compose';
import { __ } from '@wordpress/i18n';

// 🛑 THE FIX: Check if we have already registered these filters!
if ( ! window.wmAnimationFiltersAdded ) {
	
/**
 * 1. Globally Register Attributes in JavaScript
 * This ensures the Editor knows these attributes exist for ALL wmblocks.
 */
function addAnimationAttributes( settings, name ) {
    // Only apply to wmblocks
    if ( ! name.startsWith( 'wmblocks/' ) ) {
        return settings;
    }

    return {
        ...settings,
        attributes: {
            ...settings.attributes,
            wmAnim: { type: 'string', default: 'none' },
            wmDelay: { type: 'string', default: '0' },
            wmDuration: { type: 'string', default: '400' },
            wmEasing: { type: 'string', default: 'ease' },
            wmMirror: { type: 'boolean', default: false },
            wmOnce: { type: 'boolean', default: true },
        }
    };
}
addFilter( 'blocks.registerBlockType', 'wmblocks/add-animation-attributes', addAnimationAttributes );

/**
 * 2. Globally inject the InspectorControls (Sidebar UI)
 */
const withGlobalControls = createHigherOrderComponent((BlockEdit) => {
    return (props) => {
        // Only target your specific namespace
        if (!props.name || !props.name.startsWith('wmblocks/')) {
            return <BlockEdit {...props} />;
        }

        const { attributes, setAttributes } = props;
        const { wmAnim, wmDelay, wmDuration, wmEasing, wmMirror, wmOnce,// Scroll
		wmHoverAnim, wmHoverDuration, wmHoverEasing, wmHoverTrigger, wmIsHoverParent // Hover } = attributes;
} = attributes;
       return (
                <>
                    <BlockEdit {...props} />
                    <InspectorControls>
                        <PanelBody title={ __( 'Animations', 'wmblocks' ) } initialOpen={ false }>
                            
                            {/* --- ON SCROLL --- */}
                            <h4 style={{ margin: '16px 0 8px', textTransform: 'uppercase', fontSize: '11px', color: '#757575' }}>On Scroll</h4>
                            <SelectControl
                                label={ __( 'Animation Type', 'wmblocks' ) }
                                value={wmAnim || 'none'}
                                options={[
                                         { label: 'None', value: 'none' },
                                { label: '-- FADE --', value: 'none', disabled: true },
                                { label: 'Fade', value: 'fade' },
                                { label: 'Fade Up', value: 'fade-up' },
                                { label: 'Fade Down', value: 'fade-down' },
                                { label: 'Fade Left', value: 'fade-left' },
                                { label: 'Fade Right', value: 'fade-right' },
                                { label: '-- ZOOM --', value: 'none', disabled: true },
                                { label: 'Zoom In', value: 'zoom-in' },
                                { label: 'Zoom In Up', value: 'zoom-in-up' },
                                { label: 'Zoom In Down', value: 'zoom-in-down' },
                                ]}
                                onChange={(val) => setAttributes({ wmAnim: val })}
                            />
                            {wmAnim && wmAnim !== 'none' && (
                                <div className="wmblocks-animation-advanced" style={{ marginBottom: '16px', paddingLeft: '12px', borderLeft: '2px solid #ddd' }}>
								                    <SelectControl
                                    label={ __( 'Easing', 'wmblocks' ) }
                                    value={wmEasing || 'ease'}
                                    options={[
                                        { label: 'Ease', value: 'ease' },
                                        { label: 'Linear', value: 'linear' },
                                        { label: 'Ease-in-out', value: 'ease-in-out' },
                                        { label: 'Ease-out-back', value: 'ease-out-back' }
                                    ]}
                                    onChange={(val) => setAttributes({ wmEasing: val })}
                                />
                                    <TextControl label={ __( 'Duration (ms)', 'wmblocks' ) } value={wmDuration || '400'} onChange={(val) => setAttributes({ wmDuration: val })} />
                                    <TextControl label={ __( 'Delay (ms)', 'wmblocks' ) } value={wmDelay || '0'} onChange={(val) => setAttributes({ wmDelay: val })} />
                                    <PanelRow><ToggleControl label={ __( 'Animate Once', 'wmblocks' ) } checked={wmOnce !== false} onChange={(val) => setAttributes({ wmOnce: val })} /></PanelRow>
									<PanelRow><ToggleControl label={ __( 'Mirror (Animate Out)', 'wmblocks' ) } checked={!!wmMirror} onChange={(val) => setAttributes({ wmMirror: val })} /></PanelRow>
  
                                </div>
                            )}

                            {/* --- ON HOVER --- */}
                            <h4 style={{ margin: '24px 0 8px', borderTop: '1px solid #eee', paddingTop: '16px', textTransform: 'uppercase', fontSize: '11px', color: '#757575' }}>On Hover</h4>
                            
                            <ToggleControl 
                                label={ __( 'Trigger child animations on hover', 'wmblocks' ) } 
                                help={ __( 'Any inner blocks set to trigger on "Parent" will animate when this block is hovered.', 'wmblocks' )}
                                checked={!!wmIsHoverParent} 
                                onChange={(val) => setAttributes({ wmIsHoverParent: val })} 
                            />

                            <SelectControl
                                label={ __( 'Hover Effect', 'wmblocks' ) }
                                value={wmHoverAnim || 'none'}
                                options={[
                                    { label: 'None', value: 'none' },
                                    { label: 'Zoom In (Scale)', value: 'scale-up' },
                                    { label: 'Zoom Out (Scale)', value: 'scale-down' },
                                    { label: 'Lift Up', value: 'lift' },
                                    { label: 'Fade Opacity', value: 'fade' }
                                ]}
                                onChange={(val) => setAttributes({ wmHoverAnim: val })}
                            />
                            
                            {wmHoverAnim && wmHoverAnim !== 'none' && (
                                <div style={{ marginBottom: '16px', paddingLeft: '12px', borderLeft: '2px solid #ddd' }}>
                                    <SelectControl
                                        label={ __( 'Trigger On', 'wmblocks' ) }
                                        value={wmHoverTrigger || 'self'}
                                        options={[
                                            { label: 'Hovering this block', value: 'self' },
                                            { label: 'Hovering parent block', value: 'parent' }
                                        ]}
                                        onChange={(val) => setAttributes({ wmHoverTrigger: val })}
                                    />
                                    <TextControl label={ __( 'Duration (ms)', 'wmblocks' ) } value={wmHoverDuration || '300'} onChange={(val) => setAttributes({ wmHoverDuration: val })} />
                                </div>
                            )}

                        </PanelBody>
                    </InspectorControls>
                </>
            );
        };
    }, 'withGlobalControls');

addFilter('editor.BlockEdit', 'wmblocks/add-global-controls', withGlobalControls, 100);

// 🛑 Lock it down so it never registers again
    window.wmAnimationFiltersAdded = true;
}