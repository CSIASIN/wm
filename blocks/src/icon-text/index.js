import { registerBlockType } from '@wordpress/blocks';
import { useBlockProps } from '@wordpress/block-editor';
//import './style.scss';
import Edit from './edit';
import metadata from './block.json';

registerBlockType( metadata.name, {
    edit: Edit,
    // Keep standard dynamic PHP processing setup active
    save: () => <div { ...useBlockProps.save() }></div>,
} );