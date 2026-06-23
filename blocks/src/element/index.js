import { registerBlockType } from '@wordpress/blocks';
import { InnerBlocks } from '@wordpress/block-editor';
import './style.scss';
import Edit from './edit';
import metadata from './block.json';


// Custom SVG icon representing a container/layout block
const elementIcon = (
<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<rect x="2" y="2" width="20" height="20" rx="1" fill="white"/>
<path d="M16 8L19.9293 11.9293C19.9683 11.9683 19.9683 12.0317 19.9293 12.0707L16 16" stroke="#007CED" stroke-width="1.5" stroke-linecap="round"/>
<path d="M8 8L4.07071 11.9293C4.03166 11.9683 4.03166 12.0317 4.07071 12.0707L8 16" stroke="#007CED" stroke-width="1.5" stroke-linecap="round"/>
<path d="M9.53516 17.2842L14.4637 6.71491" stroke="#007CED" stroke-width="1.5" stroke-linecap="round"/>
</svg>

);
registerBlockType( metadata.name, {
    	icon: elementIcon,
    edit: Edit,
    // MUST return InnerBlocks.Content so nested blocks are saved to the database
    save: () => <InnerBlocks.Content />,
} );