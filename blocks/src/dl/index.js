import { registerBlockType } from '@wordpress/blocks';
import { useBlockProps } from '@wordpress/block-editor';
//import './style.scss';
import Edit from './edit';
import metadata from './block.json';
import '../../controls/controlanimate.js'; 
registerBlockType( metadata.name, {
	edit: Edit,
	save: () => <div { ...useBlockProps.save() }></div>,
} );
