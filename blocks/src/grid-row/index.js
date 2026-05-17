import { registerBlockType } from '@wordpress/blocks';
import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';
import Edit from './edit';
import metadata from './block.json';


// Custom SVG icon representing a row block
const rowIcon = (
	<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<mask id="path-2-inside-1_1647_3556" fill="white">
<rect x="2" y="2" width="20" height="6" rx="1"/>
</mask>
<rect x="2" y="2" width="20" height="6" rx="1" fill="white" stroke="#007CED" stroke-width="3" mask="url(#path-2-inside-1_1647_3556)"/>
<mask id="path-3-inside-2_1647_3556" fill="white">
<rect x="2" y="9" width="20" height="6" rx="1"/>
</mask>
<rect x="2" y="9" width="20" height="6" rx="1" fill="white" stroke="#007CED" stroke-width="3" mask="url(#path-3-inside-2_1647_3556)"/>
<mask id="path-4-inside-3_1647_3556" fill="white">
<rect x="2" y="16" width="20" height="6" rx="1"/>
</mask>
<rect x="2" y="16" width="20" height="6" rx="1" fill="white" stroke="#007CED" stroke-width="3" mask="url(#path-4-inside-3_1647_3556)"/>
</svg>
);

	



registerBlockType( metadata.name, {
	icon: rowIcon,
	edit: Edit,
	save: () => <InnerBlocks.Content />,
} );
 