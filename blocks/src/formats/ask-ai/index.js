import { __ } from '@wordpress/i18n';
import { registerFormatType, toggleFormat, applyFormat } from '@wordpress/rich-text';
import { RichTextToolbarButton } from '@wordpress/block-editor';
import { 
    Popover, 
    DropdownMenu, 
    MenuGroup, 
    MenuItem, 
    Modal, 
    TextControl, 
    Button,
    Spinner,
    Notice
} from '@wordpress/components';
import { useState } from '@wordpress/element';
// Correct
import { list, symbol, pencil, section, shortcode } from '@wordpress/icons';
const aiIcon = (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2L14.85 8.15L21 11L14.85 13.85L12 20L9.15 13.85L3 11L9.15 8.15L12 2Z" fill="currentColor"/>
    </svg>
);
const FORMAT_NAME = 'wmblocks/ask-ai';

registerFormatType( FORMAT_NAME, {
    title: __( 'Ask AI', 'wmblocks' ),
    tagName: 'span',
    className: 'wm-ai-temp', // Temporary class during processing
    edit( { value, onChange, isActive } ) {
        const [ isModalOpen, setModalOpen ] = useState( false );
        const [ isLoading, setIsLoading ] = useState( false );
        const [ error, setError ] = useState( null );

        const selectedText = value.text.slice( value.start, value.end );

        const callNvidiaAI = async ( promptType ) => {
            if ( ! selectedText ) return;
            
            setIsLoading( true );
            setError( null );

            // These would ideally be fetched from your WordPress options/settings
            // via wp.apiFetch or window.wmAiSettings
            const apiUrl = "https://integrate.api.nvidia.com/v1";
            const apiKey = "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"; // Placeholder

            const prompts = {
                grammer: `Fix the grammar and spelling of the following text while keeping the meaning exactly the same: "${selectedText}"`,
                rephrase: `Rephrase the following text to be more engaging: "${selectedText}"`,
                shorter: `Make the following text significantly shorter: "${selectedText}"`,
                longer: `Elaborate on the following text and make it longer: "${selectedText}"`,
                professional: `Make this text sound more professional: "${selectedText}"`,
            };

            try {
                const response = await fetch( apiUrl, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${ apiKey }`
                    },
                    body: JSON.stringify( {
                        model: "meta/llama-3.1-405b-instruct", // Or your preferred Nvidia model
                        messages: [ { role: "user", content: prompts[ promptType ] || promptType } ],
                        temperature: 0.2,
                        top_p: 0.7,
                        max_tokens: 1024,
                    } )
                } );

                const data = await response.json();
                const newText = data.choices[0].message.content.trim().replace(/^"|"$/g, '');

                // Replace the selected text with AI output
                onChange( applyFormat( value, { type: FORMAT_NAME }, value.start, value.end ) );
                
                // Construct the new value object
                const newValue = {
                    ...value,
                    text: value.text.slice( 0, value.start ) + newText + value.text.slice( value.end ),
                    end: value.start + newText.length,
                };
                
                onChange( newValue );
                setModalOpen( false );
            } catch ( err ) {
                setError( __( 'AI Error: Could not connect to Nvidia API.', 'wmblocks' ) );
            } finally {
                setIsLoading( false );
            }
        };

        const menuItems = [
      { 
        title: __( 'Fix Grammar', 'wmblocks' ), 
        icon: pencil, 
        onClick: () => callNvidiaAI( 'grammer' ) 
    },
    { 
        title: __( 'Rephrase', 'wmblocks' ), 
        icon: symbol, // 'symbol' is in your list
        onClick: () => callNvidiaAI( 'rephrase' ) 
    },
    { 
        title: __( 'Make Shorter', 'wmblocks' ), 
        icon: list, 
        onClick: () => callNvidiaAI( 'shorter' ) 
    },
    { 
        title: __( 'Make Longer', 'wmblocks' ), 
        icon: list, 
        onClick: () => callNvidiaAI( 'longer' ) 
    },
        ];

        return (
            <>
                <DropdownMenu
                    icon={ aiIcon }
                    label={ __( 'Ask AI', 'wmblocks' ) }
                    toggleProps={ { 
                        disabled: ! selectedText,
                        tooltip: selectedText ? __( 'Ask AI', 'wmblocks' ) : __( 'Select text first', 'wmblocks' )
                    } }
                >
                    { ( { onClose } ) => (
                        <>
                            <MenuGroup>
                                { menuItems.map( ( item ) => (
                                    <MenuItem 
                                        key={ item.title } 
                                        icon={ item.icon } 
                                        onClick={ () => { item.onClick(); onClose(); } }
                                    >
                                        { item.title }
                                    </MenuItem>
                                ) ) }
                            </MenuGroup>
                            <MenuGroup borderless>
                                <MenuItem icon={ shortcode } onClick={ () => setModalOpen( true ) }>
                                    { __( 'More Options...', 'wmblocks' ) }
                                </MenuItem>
                            </MenuGroup>
                        </>
                    ) }
                </DropdownMenu>

                { isModalOpen && (
                    <Modal
                        title={ __( 'Advanced AI Tools', 'wmblocks' ) }
                        onRequestClose={ () => setModalOpen( false ) }
                    >
                        { isLoading ? (
                            <div style={{ padding: '20px', textAlign: 'center' }}><Spinner /></div>
                        ) : (
                            <div style={{ padding: '10px' }}>
                                { error && <Notice status="error" onRemove={() => setError(null)}>{error}</Notice> }
                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                                    <Button variant="secondary" onClick={() => callNvidiaAI('professional')}>👔 Professional Tone</Button>
                                    <Button variant="secondary" onClick={() => callNvidiaAI('funny')}>😂 Make it Funny</Button>
                                    <Button variant="secondary" onClick={() => callNvidiaAI('bullet')}>list List-ify</Button>
                                    <Button variant="secondary" onClick={() => callNvidiaAI('translate')}>🌐 Translate to Spanish</Button>
                                </div>
                            </div>
                        ) }
                    </Modal>
                ) }
            </>
        );
    },
} );