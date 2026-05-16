import { registerBlockType } from '@wordpress/blocks';
import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';
import Edit from './edit';
import metadata from './block.json';

// Custom SVG icon representing a Grid container/layout block
const gridContainerIcon = (
	<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<mask id="path-2-inside-1_1343_3133" fill="white">
<path d="M2 3C2 2.44772 2.44772 2 3 2H21C21.5523 2 22 2.44772 22 3V8H2V3Z"/>
</mask>
<path d="M2 3C2 2.44772 2.44772 2 3 2H21C21.5523 2 22 2.44772 22 3V8H2V3Z" fill="white" stroke="#007CED" stroke-width="3" mask="url(#path-2-inside-1_1343_3133)"/>
<mask id="path-3-inside-2_1343_3133" fill="white">
<path d="M2 6.5H22V21C22 21.5523 21.5523 22 21 22H3C2.44772 22 2 21.5523 2 21V6.5Z"/>
</mask>
<path d="M2 6.5H22V21C22 21.5523 21.5523 22 21 22H3C2.44772 22 2 21.5523 2 21V6.5Z" fill="white" stroke="#007CED" stroke-width="3" mask="url(#path-3-inside-2_1343_3133)"/>
<circle cx="5.25" cy="5" r="0.75" fill="#007CED"/>
<circle cx="7.75" cy="5" r="0.75" fill="#007CED"/>
<circle cx="10.25" cy="5" r="0.75" fill="#007CED"/>
<path d="M6 9H18C18.2761 9 18.5 9.22386 18.5 9.5V13H5.5V9.5C5.5 9.22386 5.72386 9 6 9Z" fill="white" stroke="#007CED"/>
<path d="M6 19.5H18C18.2761 19.5 18.5 19.2761 18.5 19V13H5.5V19C5.5 19.2761 5.72386 19.5 6 19.5Z" fill="white" stroke="#007CED"/>
<rect x="7.5" y="10" width="2" height="2" rx="0.5" fill="#007CED"/>
<rect x="11" y="10" width="2" height="2" rx="0.5" fill="#007CED"/>
<rect x="14.5" y="10" width="2" height="2" rx="0.5" fill="#007CED"/>
<rect x="7.5" y="14" width="2" height="2" rx="0.5" fill="#007CED"/>
<rect x="11" y="14" width="2" height="2" rx="0.5" fill="#007CED"/>
<rect x="14.5" y="14" width="2" height="2" rx="0.5" fill="#007CED"/>
<rect x="7.5" y="16.5" width="2" height="2" rx="0.5" fill="#007CED"/>
<rect x="11" y="16.5" width="2" height="2" rx="0.5" fill="#007CED"/>
<rect x="14.5" y="16.5" width="2" height="2" rx="0.5" fill="#007CED"/>
</svg>


);

registerBlockType( metadata.name, {
		icon: gridContainerIcon,
	edit: Edit,
	save: () => <InnerBlocks.Content />,
} );
 
