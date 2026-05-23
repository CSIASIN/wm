import { __ } from '@wordpress/i18n';
import { PanelBody, CheckboxControl, Button, TextControl } from '@wordpress/components';
import { useState } from '@wordpress/element';

const PADDING_OPTIONS = [
    { label: 'p-0 (No Padding)',       value: 'p-0' },
    { label: 'p-1 (0.25rem)',          value: 'p-1' },
    { label: 'p-2 (0.5rem)',           value: 'p-2' },
    { label: 'p-3 (1rem)',             value: 'p-3' },
    { label: 'p-4 (1.5rem)',           value: 'p-4' },
    { label: 'p-5 (3rem)',             value: 'p-5' },
    { label: 'pt-0 (Top 0)',           value: 'pt-0' },
    { label: 'pt-1 (0.25rem)',         value: 'pt-1' },
    { label: 'pt-2 (0.5rem)',          value: 'pt-2' },
    { label: 'pt-3 (1rem)',            value: 'pt-3' },
    { label: 'pt-4 (1.5rem)',          value: 'pt-4' },
    { label: 'pt-5 (3rem)',            value: 'pt-5' },
    { label: 'pb-0 (Bottom 0)',        value: 'pb-0' },
    { label: 'pb-1 (0.25rem)',         value: 'pb-1' },
    { label: 'pb-2 (0.5rem)',          value: 'pb-2' },
    { label: 'pb-3 (1rem)',            value: 'pb-3' },
    { label: 'pb-4 (1.5rem)',          value: 'pb-4' },
    { label: 'pb-5 (3rem)',            value: 'pb-5' },
    { label: 'ps-0 (Start/Left 0)',    value: 'ps-0' },
    { label: 'ps-1 (0.25rem)',         value: 'ps-1' },
    { label: 'ps-2 (0.5rem)',          value: 'ps-2' },
    { label: 'ps-3 (1rem)',            value: 'ps-3' },
    { label: 'ps-4 (1.5rem)',          value: 'ps-4' },
    { label: 'ps-5 (3rem)',            value: 'ps-5' },
    { label: 'pe-0 (End/Right 0)',     value: 'pe-0' },
    { label: 'pe-1 (0.25rem)',         value: 'pe-1' },
    { label: 'pe-2 (0.5rem)',          value: 'pe-2' },
    { label: 'pe-3 (1rem)',            value: 'pe-3' },
    { label: 'pe-4 (1.5rem)',          value: 'pe-4' },
    { label: 'pe-5 (3rem)',            value: 'pe-5' },
    { label: 'px-0 (Left & Right 0)', value: 'px-0' },
    { label: 'px-1 (0.25rem)',         value: 'px-1' },
    { label: 'px-2 (0.5rem)',          value: 'px-2' },
    { label: 'px-3 (1rem)',            value: 'px-3' },
    { label: 'px-4 (1.5rem)',          value: 'px-4' },
    { label: 'px-5 (3rem)',            value: 'px-5' },
    { label: 'py-0 (Top & Bottom 0)', value: 'py-0' },
    { label: 'py-1 (0.25rem)',         value: 'py-1' },
    { label: 'py-2 (0.5rem)',          value: 'py-2' },
    { label: 'py-3 (1rem)',            value: 'py-3' },
    { label: 'py-4 (1.5rem)',          value: 'py-4' },
    { label: 'py-5 (3rem)',            value: 'py-5' },
];

const MARGIN_OPTIONS = [
    { label: 'm-0 (No Margin)',       value: 'm-0' },
    { label: 'm-1 (0.25rem)',         value: 'm-1' },
    { label: 'm-2 (0.5rem)',          value: 'm-2' },
    { label: 'm-3 (1rem)',            value: 'm-3' },
    { label: 'm-4 (1.5rem)',          value: 'm-4' },
    { label: 'm-5 (3rem)',            value: 'm-5' },
    { label: 'm-auto',                value: 'm-auto' },
    { label: 'mt-0 (Top 0)',          value: 'mt-0' },
    { label: 'mt-1 (0.25rem)',        value: 'mt-1' },
    { label: 'mt-2 (0.5rem)',         value: 'mt-2' },
    { label: 'mt-3 (1rem)',           value: 'mt-3' },
    { label: 'mt-4 (1.5rem)',         value: 'mt-4' },
    { label: 'mt-5 (3rem)',           value: 'mt-5' },
    { label: 'mt-auto',               value: 'mt-auto' },
    { label: 'mb-0 (Bottom 0)',       value: 'mb-0' },
    { label: 'mb-1 (0.25rem)',        value: 'mb-1' },
    { label: 'mb-2 (0.5rem)',         value: 'mb-2' },
    { label: 'mb-3 (1rem)',           value: 'mb-3' },
    { label: 'mb-4 (1.5rem)',         value: 'mb-4' },
    { label: 'mb-5 (3rem)',           value: 'mb-5' },
    { label: 'mb-auto',               value: 'mb-auto' },
    { label: 'ms-0 (Start/Left 0)',   value: 'ms-0' },
    { label: 'ms-1 (0.25rem)',        value: 'ms-1' },
    { label: 'ms-2 (0.5rem)',         value: 'ms-2' },
    { label: 'ms-3 (1rem)',           value: 'ms-3' },
    { label: 'ms-4 (1.5rem)',         value: 'ms-4' },
    { label: 'ms-5 (3rem)',           value: 'ms-5' },
    { label: 'ms-auto',               value: 'ms-auto' },
    { label: 'me-0 (End/Right 0)',    value: 'me-0' },
    { label: 'me-1 (0.25rem)',        value: 'me-1' },
    { label: 'me-2 (0.5rem)',         value: 'me-2' },
    { label: 'me-3 (1rem)',           value: 'me-3' },
    { label: 'me-4 (1.5rem)',         value: 'me-4' },
    { label: 'me-5 (3rem)',           value: 'me-5' },
    { label: 'me-auto',               value: 'me-auto' },
    { label: 'mx-0 (Left & Right 0)', value: 'mx-0' },
    { label: 'mx-1 (0.25rem)',        value: 'mx-1' },
    { label: 'mx-2 (0.5rem)',         value: 'mx-2' },
    { label: 'mx-3 (1rem)',           value: 'mx-3' },
    { label: 'mx-4 (1.5rem)',         value: 'mx-4' },
    { label: 'mx-5 (3rem)',           value: 'mx-5' },
    { label: 'mx-auto',               value: 'mx-auto' },
    { label: 'my-0 (Top & Bottom 0)', value: 'my-0' },
    { label: 'my-1 (0.25rem)',        value: 'my-1' },
    { label: 'my-2 (0.5rem)',         value: 'my-2' },
    { label: 'my-3 (1rem)',           value: 'my-3' },
    { label: 'my-4 (1.5rem)',         value: 'my-4' },
    { label: 'my-5 (3rem)',           value: 'my-5' },
    { label: 'my-auto',               value: 'my-auto' },
];

// Reusable Advanced Multiselect Engine Component
function SpacingMultiSelect( { title, value, options, onChange } ) {
    const [ searchTerm, setSearchTerm ] = useState( '' );

    // Parse the saved space-separated string back to an active elements array
    const activeClasses = value && typeof value === 'string' ? value.split( ' ' ).filter( Boolean ) : [];

    // Filter list entries based on live typing criteria matches
    const filteredOptions = options.filter( ( opt ) =>
        opt.label.toLowerCase().includes( searchTerm.toLowerCase() ) ||
        opt.value.toLowerCase().includes( searchTerm.toLowerCase() )
    );

    const handleToggle = ( optValue, isChecked ) => {
        let updatedList;
        if ( isChecked ) {
            updatedList = [ ...activeClasses, optValue ];
        } else {
            updatedList = activeClasses.filter( ( v ) => v !== optValue );
        }
        onChange( updatedList.join( ' ' ) );
    };

    return (
        <PanelBody title={ title } initialOpen={ false }>
            { /* Action Row: Display active selections status and the clear button trigger */ }
            <div style={ { display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' } }>
                <span style={ { fontSize: '11px', color: '#666', fontWeight: '500' } }>
                    { activeClasses.length } { __( 'Selected', 'wm' ) }
                </span>
                { activeClasses.length > 0 && (
                    <Button 
                        isDestructive 
                        isLink 
                        onClick={ () => onChange( '' ) } 
                        style={ { padding: 0, height: 'auto', fontSize: '12px', textDecoration: 'none' } }
                    >
                        { __( 'Clear All', 'wm' ) }
                    </Button>
                ) }
            </div>

            { /* Active Tags/Badges View Panel Layer */ }
            { activeClasses.length > 0 && (
                <div style={ { display: 'flex', flexWrap: 'wrap', gap: '4px', marginBottom: '10px', background: '#f0f0f0', padding: '6px', borderRadius: '4px' } }>
                    { activeClasses.map( ( val ) => (
                        <span 
                            key={ val } 
                            style={ { 
                                background: '#fff', 
                                border: '1px solid #ccc',
                                padding: '2px 6px', 
                                borderRadius: '4px', 
                                fontSize: '11px', 
                                display: 'inline-flex', 
                                alignItems: 'center',
                                gap: '6px',
                                fontWeight: '500'
                            } }
                        >
                            { val }
                            <span 
                                onClick={ () => handleToggle( val, false ) }
                                style={ { cursor: 'pointer', color: '#cc0000', fontWeight: 'bold', fontSize: '12px' } }
                                role="button"
                                tabIndex={0}
                            >
                                &times;
                            </span>
                        </span>
                    ) ) }
                </div>
            ) }

            { /* Live Filter / Search input utility component element */}
            <TextControl
                placeholder={ __( 'Search utility classes (e.g., top, 3)...', 'wm' ) }
                value={ searchTerm }
                onChange={ setSearchTerm }
                style={ { marginBottom: '8px' } }
            />

            { /* Main Options Select Checklist Box Wrapper Container */}
            <div style={ { 
                maxHeight: '160px', 
                overflowY: 'auto', 
                border: '1px solid #ddd', 
                padding: '8px 10px', 
                borderRadius: '4px',
                background: '#fff'
            } }>
                { filteredOptions.length === 0 ? (
                    <div style={ { color: '#888', fontStyle: 'italic', fontSize: '12px', textAlign: 'center', padding: '10px 0' } }>
                        { __( 'No matching classes found', 'wm' ) }
                    </div>
                ) : (
                    filteredOptions.map( ( opt ) => (
                        <CheckboxControl
                            key={ opt.value }
                            label={ opt.label }
                            checked={ activeClasses.includes( opt.value ) }
                            onChange={ ( checked ) => handleToggle( opt.value, checked ) }
                            style={ { marginBottom: '6px' } }
                        />
                    ) )
                ) }
            </div>
        </PanelBody>
    );
}

export function PaddingControl( { value, onChange } ) {
    return (
        <SpacingMultiSelect
            title={ __( 'Padding', 'wm' ) }
            value={ value }
            options={ PADDING_OPTIONS }
            onChange={ onChange }
        />
    );
}

export function MarginControl( { value, onChange } ) {
    return (
        <SpacingMultiSelect
            title={ __( 'Margin', 'wm' ) }
            value={ value }
            options={ MARGIN_OPTIONS }
            onChange={ onChange }
        />
    );
}