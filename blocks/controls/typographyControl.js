import { __ } from '@wordpress/i18n';
import { 
    PanelBody, 
    TabPanel, 
    SelectControl, 
    TextControl, 
    ColorPalette,
    __experimentalToggleGroupControl as ToggleGroupControl,
    __experimentalToggleGroupControlOption as ToggleGroupControlOption 
} from '@wordpress/components';

// Styling utilities for crisp UI grouping
const labelHeading = { fontSize: '11px', color: '#757575', textTransform: 'uppercase', fontWeight: 600, marginBottom: '8px', letterSpacing: '0.5px' };
const subLabel = { fontSize: '12px', display: 'block', marginBottom: '4px', color: '#1e1e1e' };
const gridHalf = { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '12px' };

const FONT_WEIGHTS = [
    { label: __('Default', 'wm'), value: '' },
    { label: __('100 - Thin', 'wm'), value: '100' },
    { label: __('300 - Light', 'wm'), value: '300' },
    { label: __('400 - Regular', 'wm'), value: '400' },
    { label: __('600 - Semi Bold', 'wm'), value: '600' },
    { label: __('700 - Bold', 'wm'), value: '700' },
    { label: __('900 - Ultra Black', 'wm'), value: '900' }
];

export function TypographyControl({ attributes = {}, setAttributes }) {
    // 1. Destructure with default values to block uninitialized reference crashes
    const {
        fontFamily = '',
        fontWeight = '',
        textDecoration = '',
        textTransform = '',
        textFillColor = '',
        textStrokeWidth = '',
        textStrokeColor = '',
        textShadowType = 'none',
        textShadowColor = '#000000',
        textShadowWidth = '',
        textShadowX = '',
        textShadowY = '',
        textShadowBlur = ''
    } = attributes;

    // 2. Define standard screen breakpoint array for the responsive Matrix tab engine
    const tabs = [
        { name: 'xs', title: 'XS', className: 'tab-xs' },
        { name: 'sm', title: 'SM', className: 'tab-sm' },
        { name: 'md', title: 'MD', className: 'tab-md' },
        { name: 'lg', title: 'LG', className: 'tab-lg' },
        { name: 'xl', title: 'XL', className: 'tab-xl' },
        { name: 'xxl', title: 'XXL', className: 'tab-xxl' }
    ];

    return (
        <PanelBody title={__('Typography Settings', 'wm')} initialOpen={false}>
            {/* Core Controls */}
            <SelectControl 
                label={__('Font Family', 'wm')} 
                value={fontFamily} 
                options={[{label: 'Default Theme Font', value: ''}, {label: 'Merriweather', value: 'Merriweather'}]} 
                onChange={(val) => setAttributes({ fontFamily: val })} 
            />
            
            <SelectControl 
                label={__('Weight', 'wm')} 
                value={fontWeight} 
                options={FONT_WEIGHTS} 
                onChange={(val) => setAttributes({ fontWeight: val })} 
            />

            <div style={gridHalf}>
                <div>
                    <label style={subLabel}>{__('Decoration', 'wm')}</label>
                    <ToggleGroupControl value={textDecoration || 'none'} isBlock onChange={(val) => setAttributes({ textDecoration: val === 'none' ? '' : val })}>
                        <ToggleGroupControlOption value="none" label="None" />
                        <ToggleGroupControlOption value="underline" label="U" />
                        <ToggleGroupControlOption value="line-through" label="S" />
                    </ToggleGroupControl>
                </div>
                <div>
                    <label style={subLabel}>{__('Case', 'wm')}</label>
                    <ToggleGroupControl value={textTransform || 'none'} isBlock onChange={(val) => setAttributes({ textTransform: val === 'none' ? '' : val })}>
                        <ToggleGroupControlOption value="none" label="None" />
                        <ToggleGroupControlOption value="uppercase" label="AB" />
                        <ToggleGroupControlOption value="lowercase" label="ab" />
                    </ToggleGroupControl>
                </div>
            </div>

            <hr style={{ margin: '16px 0', border: 'none', borderTop: '1px solid #e0e0e0' }} />

            {/* Text Flare: Fill & Outline */}
            <div style={{ marginBottom: '16px' }}>
                <div style={labelHeading}>{__('Text Fill & Outline (Stroke)', 'wm')}</div>
                <div>
                    <div>
                        <label style={subLabel}>{__('Fill Color', 'wm')}</label>
                        <ColorPalette value={textFillColor} onChange={(val) => setAttributes({ textFillColor: val })} clearable />
                    </div>
                    <div>
                        <label style={subLabel}>{__('Stroke Color', 'wm')}</label>
                        <ColorPalette value={textStrokeColor} onChange={(val) => setAttributes({ textStrokeColor: val })} clearable />
                    </div>
                </div>
                { textStrokeColor && (
                    <TextControl label={__('Stroke Width', 'wm')} value={textStrokeWidth || '1.5px'} onChange={(val) => setAttributes({ textStrokeWidth: val })} placeholder="1.5px" />
                )}
            </div>

            <hr style={{ margin: '16px 0', border: 'none', borderTop: '1px solid #e0e0e0' }} />

            {/* Text Shadow Engine */}
            <div style={{ marginBottom: '16px' }}>
                <div style={labelHeading}>{__('Text Shadow Effects', 'wm')}</div>
                <SelectControl 
                    label={__('Shadow Mode', 'wm')} 
                    value={textShadowType} 
                    options={[
                        { label: __('None', 'wm'), value: 'none' },
                        { label: __('Smooth Outline (8-Axis Shadow)', 'wm'), value: 'outline' },
                        { label: __('Standard Drop Shadow', 'wm'), value: 'drop' }
                    ]} 
                    onChange={(val) => setAttributes({ textShadowType: val })} 
                />

                { textShadowType && textShadowType !== 'none' && (
                    <div style={{ marginTop: '12px' }}>
                        <div style={{ marginBottom: '8px' }}>
                            <label style={subLabel}>{__('Effect Color', 'wm')}</label>
                            <ColorPalette value={textShadowColor} onChange={(val) => setAttributes({ textShadowColor: val || '#000000' })} disableCustomColors={false} clearable={false} />
                        </div>

                        { textShadowType === 'outline' && (
                            <TextControl label={__('Outline Thickness', 'wm')} value={textShadowWidth || '1px'} onChange={(val) => setAttributes({ textShadowWidth: val })} placeholder="1px" />
                        )}

                        { textShadowType === 'drop' && (
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '8px' }}>
                                <TextControl label="Offset X" value={textShadowX || '2px'} onChange={(val) => setAttributes({ textShadowX: val })} />
                                <TextControl label="Offset Y" value={textShadowY || '2px'} onChange={(val) => setAttributes({ textShadowY: val })} />
                                <TextControl label="Blur" value={textShadowBlur || '4px'} onChange={(val) => setAttributes({ textShadowBlur: val })} />
                            </div>
                        )}
                    </div>
                )}
            </div>

            <hr style={{ margin: '16px 0', border: 'none', borderTop: '1px solid #e0e0e0' }} />

            {/* CRASH PROOF RESPONSIVE MATRIX ENGINE */}
            <div style={{ marginBottom: '8px' }}>
                <div style={labelHeading}>{__('Responsive Scaling', 'wm')}</div>
                <TabPanel 
                    className="wm-responsive-typography-tabs"
                    activeClass="is-active"
                    tabs={tabs}
                >
                    {(activeTab) => {
                        // Dynamically format key to camelCase matching block.json entries (e.g. fontSizeXs)
                        const bp = activeTab.name.charAt(0).toUpperCase() + activeTab.name.slice(1);
                        
                        return (
                            <div style={{ paddingTop: '12px' }} className={`responsive-panel-${activeTab.name}`}>
                                <div style={gridHalf}>
                                    <TextControl 
                                        label={__('Font Size', 'wm')} 
                                        value={attributes[`fontSize${bp}`] || ''} 
                                        onChange={(val) => setAttributes({ [`fontSize${bp}`]: val })}
                                        placeholder="e.g. 24px or 2rem"
                                    />
                                    <TextControl 
                                        label={__('Line Height', 'wm')} 
                                        value={attributes[`lineHeight${bp}`] || ''} 
                                        onChange={(val) => setAttributes({ [`lineHeight${bp}`]: val })}
                                        placeholder="e.g. 1.4"
                                    />
                                </div>
                                <div style={gridHalf}>
                                    <TextControl 
                                        label={__('Letter Spacing', 'wm')} 
                                        value={attributes[`letterSpacing${bp}`] || ''} 
                                        onChange={(val) => setAttributes({ [`letterSpacing${bp}`]: val })}
                                        placeholder="e.g. 0.05em"
                                    />
                                    <TextControl 
                                        label={__('Text Indent', 'wm')} 
                                        value={attributes[`textIndent${bp}`] || ''} 
                                        onChange={(val) => setAttributes({ [`textIndent${bp}`]: val })}
                                        placeholder="e.g. 20px"
                                    />
                                </div>
                            </div>
                        );
                    }}
                </TabPanel>
            </div>
        </PanelBody>
    );
}

/**
 * Sync JavaScript Live Preview Engine with PHP Render Output
 */
export function getTypographyStyles(attributes = {}) {
    const { 
        fontFamily = '', fontWeight = '', textDecoration = '', textTransform = '',
        textFillColor = '', textStrokeWidth = '', textStrokeColor = '',
        textShadowType = 'none', textShadowColor = '#000000', textShadowWidth = '', 
        textShadowX = '', textShadowY = '', textShadowBlur = ''
    } = attributes;
    
    const styles = {};

    if (fontFamily) styles['font-family'] = `"${fontFamily}", sans-serif`;
    if (fontWeight) styles['font-weight'] = fontWeight;
    if (textDecoration) styles['text-decoration'] = textDecoration;
    if (textTransform) styles['text-transform'] = textTransform;
    
    // Inject literal CSS keys to make sure core blocks cascade the style variables safely
    if (textFillColor) styles['-webkit-text-fill-color'] = textFillColor;
    if (textStrokeColor) {
        styles['-webkit-text-stroke-width'] = textStrokeWidth || '1.5px';
        styles['-webkit-text-stroke-color'] = textStrokeColor;
    }

    // Shadow Calculations
    if (textShadowType === 'outline' && textShadowColor) {
        const w = textShadowWidth || '1px';
        const c = textShadowColor;
        styles['text-shadow'] = `-${w} -${w} 0 ${c}, 0 -${w} 0 ${c}, ${w} -${w} 0 ${c}, ${w} 0 0 ${c}, ${w} ${w} 0 ${c}, 0 ${w} 0 ${c}, -${w} ${w} 0 ${c}, -${w} 0 0 ${c}`;
    } else if (textShadowType === 'drop' && textShadowColor) {
        styles['text-shadow'] = `${textShadowX || '2px'} ${textShadowY || '2px'} ${textShadowBlur || '4px'} ${textShadowColor}`;
    }

    // Map dynamic breakpoint parameters
    const breakpoints = ['Xs', 'Sm', 'Md', 'Lg', 'Xl', 'Xxl'];
    breakpoints.forEach((bp) => {
        const lowerBp = bp.toLowerCase();
        if (attributes[`fontSize${bp}`]) styles[`--wm-font-size-${lowerBp}`] = attributes[`fontSize${bp}`];
        if (attributes[`lineHeight${bp}`]) styles[`--wm-line-height-${lowerBp}`] = attributes[`lineHeight${bp}`];
        if (attributes[`letterSpacing${bp}`]) styles[`--wm-letter-spacing-${lowerBp}`] = attributes[`letterSpacing${bp}`];
        if (attributes[`textIndent${bp}`]) styles[`--wm-text-indent-${lowerBp}`] = attributes[`textIndent${bp}`];
    });

    return { styles }; 
}