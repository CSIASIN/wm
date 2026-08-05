import { registerBlockType } from '@wordpress/blocks';
import './style.scss';
import Edit from './edit';
import metadata from './block.json';
import '../../controls/controlanimate.js'; 

registerBlockType( metadata.name, {
	edit: Edit,
	save: () => null, // fully server-side rendered
} );
