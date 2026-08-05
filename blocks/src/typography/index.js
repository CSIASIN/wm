import { registerBlockType } from '@wordpress/blocks';
import './style.scss';
import Edit from './edit';
import metadata from './block.json';
import '../../controls/controlanimate.js'; 

registerBlockType( metadata.name, {
	edit: Edit,
	// Fully server-side rendered
	save: () => null,
} );
