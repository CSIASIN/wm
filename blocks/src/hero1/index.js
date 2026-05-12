import { registerBlockType } from '@wordpress/blocks';
import { useBlockProps, InnerBlocks } from '@wordpress/block-editor'; // Don't forget to import InnerBlocks
import './style.scss';
import Edit from './edit';
import metadata from './block.json';

registerBlockType( metadata.name, {
    edit: Edit,
    /**
     * The save function must return InnerBlocks.Content 
     * so that the child blocks are actually saved to the database.
     */
    save: () => {
        const blockProps = useBlockProps.save();
        return (
            <div { ...blockProps }>
                <InnerBlocks.Content />
            </div>
        );
    },
} );