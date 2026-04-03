import { __ } from '@wordpress/i18n';
import { useBlockProps, InspectorControls, InnerBlocks, RichText, BlockControls } from '@wordpress/block-editor';
import { useSelect, useDispatch } from '@wordpress/data';
import { PanelBody, TextControl, ToggleControl, ToolbarGroup, ToolbarButton } from '@wordpress/components';
import { useState, useEffect } from '@wordpress/element';
import './editor.scss';

const ITEM_CONTENT_TEMPLATE = [
	[ 'core/paragraph', { content: 'This is the first item\'s accordion body. Add any content here.' } ],
];

function labelToId( label ) {
	return ( label || '' )
		.replace( /<[^>]+>/g, '' )
		.toLowerCase().trim()
		.replace( /\s+/g, '-' )
		.replace( /[^a-z0-9\-]/g, '' );
}

export default function Edit( { attributes, setAttributes, clientId, context } ) {
	const { itemId, heading, startOpen } = attributes;

	const accordionId = context[ 'wmblocks/accordionId' ] || '';
	const alwaysOpen  = context[ 'wmblocks/alwaysOpen' ]  || false;

	// Editor open/close state
	const [ editorOpen, setEditorOpen ] = useState( !! startOpen );

	// Auto-generate itemId from heading if empty
	useEffect( () => {
		if ( ! itemId ) {
			setAttributes( { itemId: labelToId( heading ) || ( 'item-' + clientId.slice( 0, 6 ) ) } );
		}
	}, [] );

	const { myIndex, siblings, parentClientId } = useSelect( ( select ) => {
		const store    = select( 'core/block-editor' );
		const parentId = store.getBlockRootClientId( clientId );
		const sibs     = store.getBlocks( parentId );
		return {
			myIndex:        sibs.findIndex( ( b ) => b.clientId === clientId ),
			siblings:       sibs,
			parentClientId: parentId,
		};
	}, [ clientId ] );

	const { removeBlock, moveBlocksUp, moveBlocksDown } = useDispatch( 'core/block-editor' );

	const handleRemove    = () => removeBlock( clientId );
	const handleMoveUp   = () => { if ( myIndex > 0 ) moveBlocksUp( [ clientId ], parentClientId ); };
	const handleMoveDown = () => { if ( myIndex < siblings.length - 1 ) moveBlocksDown( [ clientId ], parentClientId ); };

	const blockProps = useBlockProps( {
		className: 'accordion-item wmblocks-accordion-item',
	} );

	return (
		<>
			<BlockControls>
				<ToolbarGroup>
					<ToolbarButton icon="arrow-up-alt2"   label={ __( 'Move Item Up', 'wmblocks' ) }   onClick={ handleMoveUp }   disabled={ myIndex === 0 } />
					<ToolbarButton icon="arrow-down-alt2" label={ __( 'Move Item Down', 'wmblocks' ) } onClick={ handleMoveDown } disabled={ myIndex === siblings.length - 1 } />
				</ToolbarGroup>
				<ToolbarGroup>
					<ToolbarButton icon="trash" label={ __( 'Remove Item', 'wmblocks' ) } onClick={ handleRemove } isDestructive />
				</ToolbarGroup>
			</BlockControls>

			<InspectorControls>
				<PanelBody title={ __( 'Item Settings', 'wmblocks' ) } initialOpen={ true }>
					<TextControl
						label={ __( 'Item ID', 'wmblocks' ) }
						value={ itemId }
						onChange={ ( v ) => setAttributes( { itemId: v.replace( /\s+/g, '-' ).toLowerCase() } ) }
						help={ __( 'Auto-generated from heading. Override if needed.', 'wmblocks' ) }
					/>
					<ToggleControl
						label={ __( 'Start Open', 'wmblocks' ) }
						checked={ !! startOpen }
						onChange={ ( v ) => {
							setAttributes( { startOpen: v } );
							setEditorOpen( v );
						} }
						help={ __( 'Show this item expanded on page load.', 'wmblocks' ) }
					/>
				</PanelBody>
			</InspectorControls>

			<div { ...blockProps }>
				{ /* Accordion header */ }
				<h2 className="accordion-header">
					<div className={ 'accordion-button' + ( editorOpen ? '' : ' collapsed' ) } style={ { display: 'flex', alignItems: 'center', cursor: 'default', userSelect: 'none' } }>
						{ /* Small toggle arrow — only this toggles open/close */ }
						<button
							type="button"
							onMouseDown={ ( e ) => { e.preventDefault(); setEditorOpen( ! editorOpen ); } }
							style={ { background: 'none', border: 'none', padding: '0 10px 0 0', cursor: 'pointer', flexShrink: 0, fontSize: '11px', color: editorOpen ? '#6610f2' : '#666' } }
							title={ __( 'Toggle preview', 'wmblocks' ) }
						>
							{ editorOpen ? '▼' : '▶' }
						</button>
						{ /* RichText is fully clickable and editable */ }
						<RichText
							tagName="span"
							value={ heading }
							onChange={ ( v ) => {
								const autoId   = labelToId( heading );
								const isAutoId = itemId === autoId || itemId === '';
								setAttributes( {
									heading: v,
									...( isAutoId ? { itemId: labelToId( v ) } : {} ),
								} );
							} }
							placeholder={ __( 'Accordion heading…', 'wmblocks' ) }
							allowedFormats={ [] }
							style={ { flex: 1, cursor: 'text' } }
						/>
					</div>
				</h2>

				{ /* Accordion body — toggle visibility in editor */ }
				<div
					className={ 'accordion-collapse' + ( editorOpen ? ' show' : '' ) }
					style={ { display: editorOpen ? 'block' : 'none' } }
				>
					<div className="accordion-body">
						<InnerBlocks
							template={ ITEM_CONTENT_TEMPLATE }
							templateLock={ false }
						/>
					</div>
				</div>
			</div>
		</>
	);
}