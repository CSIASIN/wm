/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
import { registerBlockType } from '@wordpress/blocks';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * All files containing `style` keyword are bundled together. The code used
 * gets applied both to the front of your site and to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './style.scss';

/**
 * Internal dependencies
 */
import Edit from './edit';
import metadata from './block.json';
import blockPreview from './block-preview.png';

/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */

// Custom SVG icon representing a container/layout block
const containerIcon = (
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
		<rect
			x="2"
			y="4"
			width="20"
			height="16"
			rx="2"
			ry="2"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
		/>
		<line
			x1="2"
			y1="9"
			x2="22"
			y2="9"
			stroke="currentColor"
			strokeWidth="1.5"
		/>
		<line
			x1="6"
			y1="13"
			x2="18"
			y2="13"
			stroke="currentColor"
			strokeWidth="1.5"
			strokeDasharray="2 1"
		/>
		<line
			x1="6"
			y1="16"
			x2="14"
			y2="16"
			stroke="currentColor"
			strokeWidth="1.5"
			strokeDasharray="2 1"
		/>
	</svg>
);

registerBlockType( metadata.name, {
	icon: containerIcon,
	example: {
		attributes: { preview: true },
	},
	edit: Edit,
	save: () => null,
} );
