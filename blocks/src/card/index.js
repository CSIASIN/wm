import { registerBlockType } from '@wordpress/blocks';
import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';
import './style.scss';
import Edit from './edit';
import metadata from './block.json';

// Custom SVG icon representing a container/layout block
const cardIcon = (
	<svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">

<path d="M2 10H22V17C22 17.5523 21.5523 18 21 18H3C2.44772 18 2 17.5523 2 17V10Z" fill="#007FFF"/>
<path d="M22 10L2 10L2 7C2 6.44772 2.44772 6 3 6L21 6C21.5523 6 22 6.44771 22 7L22 10Z" fill="#007FFF"/>
</svg>
);

registerBlockType( metadata.name, {
	icon: cardIcon,
	edit: Edit,
save: () => <InnerBlocks.Content />,
} );
