import { addFilter } from '@wordpress/hooks';
import { InspectorControls } from '@wordpress/block-editor';
import { PanelBody, SelectControl, ToggleControl, TextControl, PanelRow } from '@wordpress/components';
import { createHigherOrderComponent } from '@wordpress/compose';
import { __ } from '@wordpress/i18n';

const withGlobalControls = createHigherOrderComponent((BlockEdit) => {
    return (props) => {
        // Only target your specific namespace
        if (!props.name || !props.name.startsWith('wmblocks/')) {
            return <BlockEdit {...props} />;
        }

        const { attributes, setAttributes } = props;
        const { wmAnim, wmDelay, wmDuration, wmEasing, wmMirror, wmOnce } = attributes;

        return (
            <>
                <BlockEdit {...props} />
                <InspectorControls>
                    <PanelBody title={ __( 'Animations', 'wmblocks' ) } initialOpen={ false }>
                        <SelectControl
                            label={ __( 'On Scroll Animation', 'wmblocks' ) }
                            value={wmAnim || 'none'}
                            options={[
                                { label: 'None', value: 'none' },
                                { label: '-- FADE --', value: 'none', disabled: true },
                                { label: 'Fade', value: 'fade' },
                                { label: 'Fade Up', value: 'fade-up' },
                                { label: 'Fade Down', value: 'fade-down' },
                                { label: 'Fade Left', value: 'fade-left' },
                                { label: 'Fade Right', value: 'fade-right' },
                                { label: '-- FLIP --', value: 'none', disabled: true },
                                { label: 'Flip Up', value: 'flip-up' },
                                { label: 'Flip Down', value: 'flip-down' },
                                { label: '-- SLIDE --', value: 'none', disabled: true },
                                { label: 'Slide Up', value: 'slide-up' },
                                { label: 'Slide Down', value: 'slide-down' },
                                { label: '-- ZOOM --', value: 'none', disabled: true },
                                { label: 'Zoom In', value: 'zoom-in' },
                                { label: 'Zoom Out', value: 'zoom-out' }
                            ]}
                            onChange={(val) => setAttributes({ wmAnim: val })}
                        />
                        
                        {wmAnim && wmAnim !== 'none' && (
                            <div style={{ marginBottom: '24px', paddingLeft: '12px', borderLeft: '2px solid #ccc' }}>
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
                    </PanelBody>
                </InspectorControls>
            </>
        );
    };
}, 'withGlobalControls');

// Add the filter to the editor UI
addFilter('editor.BlockEdit', 'wmblocks/add-global-controls', withGlobalControls, 100);