import { registerBlockType } from '@wordpress/blocks';
import Edit from './edit';
import metadata from './block.json';

// Custom SVG icon representing a container/layout block
const cardFooterIcon = (
<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<mask id="path-2-inside-1_1737_2532" fill="white">
<rect y="4" width="24" height="16" rx="1"/>
</mask>
<rect y="4" width="24" height="16" rx="1" fill="white" stroke="#007CED" stroke-width="3" mask="url(#path-2-inside-1_1737_2532)"/>
<rect x="3" y="16.6602" width="8" height="1" rx="0.1" fill="#007CED"/>
<rect x="1" y="15" width="22" height="1" fill="#007CED"/>
</svg>
);


registerBlockType( metadata.name, {
    icon: cardFooterIcon,
    edit: Edit,
    save: () => null, // Dynamic Block configuration
} );