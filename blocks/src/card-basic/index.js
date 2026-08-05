import { registerBlockType } from '@wordpress/blocks';
import { InnerBlocks } from '@wordpress/block-editor';
import metadata from './block.json';
import Edit from './edit';
import '../../controls/controlanimate.js'; 
registerBlockType( metadata.name, {
    edit: Edit,
    save: () => <InnerBlocks.Content />,
} );