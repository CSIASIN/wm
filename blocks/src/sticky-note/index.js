import { registerBlockType } from '@wordpress/blocks';
import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';
import './style.scss';
import Edit from './edit';
import metadata from './block.json';

registerBlockType( metadata.name, {
	edit: Edit,
	/**
	 * save() persists InnerBlocks content which is passed to
	 * render.php as $content, then wrapped in the position element.
	 */
	save: () => (
		<div { ...useBlockProps.save() }>
			<InnerBlocks.Content />
		</div>
	),
} );
