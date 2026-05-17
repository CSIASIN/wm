import { registerBlockType } from '@wordpress/blocks';
import { InnerBlocks } from '@wordpress/block-editor';
import './style.scss';
import Edit from './edit';
import metadata from './block.json';

registerBlockType( metadata.name, {
    edit: Edit,
    // MUST return InnerBlocks.Content so nested blocks are saved to the database
    save: () => <InnerBlocks.Content />,
} );