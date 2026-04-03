import { registerBlockType } from '@wordpress/blocks';
import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';
import './style.scss';
import Edit from './edit';
import metadata from './block.json';

registerBlockType( metadata.name, {
	edit: Edit,

	/**
	 * save() persists InnerBlocks so the body content is stored in
	 * post_content and passed to render.php as $content.
	 */
	save: () => (
		<div { ...useBlockProps.save() }>
			<InnerBlocks.Content />
		</div>
	),
} );
