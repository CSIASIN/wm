import { registerBlockType } from '@wordpress/blocks';
import Edit from './edit';
import metadata from './block.json';

registerBlockType( metadata.name, {
    icon: 'admin-links',
    edit: Edit,
    save: () => null, // Managed dynamically via render.php
} );