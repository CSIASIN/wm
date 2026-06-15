import { registerBlockType } from '@wordpress/blocks';
import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';
import './style.scss';
import Edit from './edit';
import metadata from './block.json';

// Custom SVG icon representing a container/layout block
const cardWrapperIcon = (
<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<mask id="path-1-inside-1_1530_6956" fill="white">
<rect y="3" width="24" height="18" rx="1"/>
</mask>
<rect y="3" width="24" height="18" rx="1" fill="white" stroke="#007CED" stroke-width="3" mask="url(#path-1-inside-1_1530_6956)"/>
</svg>


);

registerBlockType( metadata.name, {
	icon: cardWrapperIcon,
	edit: Edit,
save: () => <InnerBlocks.Content />,
} );
