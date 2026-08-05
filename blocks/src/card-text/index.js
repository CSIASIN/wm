import { registerBlockType } from '@wordpress/blocks';
import Edit from './edit';
import metadata from './block.json';
import '../../controls/controlanimate.js'; 
registerBlockType( metadata.name, {
    icon: 'editor-paragraph',
    edit: Edit,
    save: () => null, // Dynamic Block
} );