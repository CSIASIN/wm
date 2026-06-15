import { registerBlockType } from '@wordpress/blocks';
import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';
import './style.scss';
import Edit from './edit';
import metadata from './block.json';
const cardHeaderFooterIcon = (
<svg  viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg">
<mask id="path-2-inside-1_1623_2735" fill="white">
<rect y="4" width="24" height="16" rx="1"/>
</mask>
<rect y="4" width="24" height="16" rx="1" fill="white" stroke="#007CED" stroke-width="3" mask="url(#path-2-inside-1_1623_2735)"/>
<rect x="3" y="6.33008" width="8" height="1" rx="0.1" fill="#007CED"/>
<rect x="3" y="16.6602" width="8" height="1" rx="0.1" fill="#007CED"/>
<rect x="1" y="8" width="22" height="1" fill="#007CED"/>
<rect x="1" y="15" width="22" height="1" fill="#007CED"/>
<rect x="3" y="10.5" width="8" height="1" rx="0.1" fill="#007CED"/>
<rect x="3" y="12.5" width="11" height="1" rx="0.1" fill="#007CED"/>
</svg>

);
registerBlockType( metadata.name, {
	icon: cardHeaderFooterIcon,
	edit: Edit,
save: () => <InnerBlocks.Content />,
} );
