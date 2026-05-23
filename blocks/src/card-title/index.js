import { registerBlockType } from '@wordpress/blocks';
import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';
import './style.scss';
import Edit from './edit';
import metadata from './block.json';

// Custom SVG icon representing a column block
const headingIcon = (
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="2" y="2" width="20" height="20" rx="1" fill="white"/>
<path d="M6 3V12M6 21V12M6 12H18M18 12V21M18 12V3" stroke="#007CED" stroke-width="1.5" stroke-linecap="round"/>
</svg>
);


registerBlockType( metadata.name, {
	icon: headingIcon,
	edit: Edit,
	save: () => null,
} );
