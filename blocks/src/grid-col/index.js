import { registerBlockType } from '@wordpress/blocks';
import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';
import Edit from './edit';
import metadata from './block.json';

// Custom SVG icon representing a column block
const columnIcon = (
<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<mask id="path-2-inside-1_1379_3010" fill="white">
<rect x="2" y="2" width="20" height="20" rx="1"/>
</mask>
<rect x="2" y="2" width="20" height="20" rx="1" fill="white" stroke="#007CED" stroke-width="3" mask="url(#path-2-inside-1_1379_3010)"/>
<rect x="11.5742" y="3.375" width="0.75" height="17.25" fill="white" stroke="#007CED" stroke-width="0.75"/>
<rect x="0.375" y="0.375" width="0.75" height="8.25" transform="matrix(0 1 1 0 3 7.75)" fill="white" stroke="#007CED" stroke-width="0.75"/>
<rect x="20.625" y="15.125" width="0.75" height="8.25" transform="rotate(90 20.625 15.125)" fill="white" stroke="#007CED" stroke-width="0.75"/>
</svg>

);


registerBlockType( metadata.name, {
	icon: columnIcon,
	edit: Edit,
	save: () => <InnerBlocks.Content />,
} );
 
