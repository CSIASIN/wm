import { registerBlockType } from '@wordpress/blocks';
import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';
import './style.scss';
import Edit from './edit';
import metadata from './block.json';
const cardHeaderFooterIcon = ({ size = 24, color = "currentColor", className = "" }) => (
<svg  width={size} 
    height={size}     
	viewBox="0 0 24 24" 
    fill="none"     
	className={className}
    xmlns="http://www.w3.org/2000/svg">

<mask id="path-2-inside-1_1623_2735" fill="white">
<rect y="4" width="24" height="16" rx="1"/>
</mask>
<rect y="4" width="24" height="16" rx="1" fill="white" stroke="#007CED" stroke-width="3" mask="url(#path-2-inside-1_1623_2735)"/>
<rect y="7" width="24" height="1.5" fill="#007CED"/>
<rect y="16" width="24" height="1.5" fill="#007CED"/>
<rect x="4" y="9.75" width="8" height="1" fill="#007CED"/>
<rect x="4" y="11.75" width="12" height="1" fill="#007CED"/>
<rect x="4" y="13.75" width="16" height="1" fill="#007CED"/>
</svg>
);
registerBlockType( metadata.name, {
	icon: cardHeaderFooterIcon,
	edit: Edit,
save: () => <InnerBlocks.Content />,
} );
