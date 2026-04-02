import { __ } from '@wordpress/i18n';
import { useBlockProps, InspectorControls, InnerBlocks, RichText, BlockControls } from '@wordpress/block-editor';
import { useSelect, useDispatch } from '@wordpress/data';
import { PanelBody, TextControl, ToggleControl, ToolbarGroup, ToolbarButton } from '@wordpress/components';
import './editor.scss';

const TAB_CONTENT_TEMPLATE = [
	[ 'core/paragraph', { content: 'Add your tab content here. You can insert any blocks inside this tab pane.' } ],
];

function labelToId( label ) {
	return ( label || '' )
		.replace( /<[^>]+>/g, '' )
		.toLowerCase()
		.trim()
		.replace( /\s+/g, '-' )
		.replace( /[^a-z0-9\-]/g, '' );
}

export default function Edit( { attributes, setAttributes, clientId, context } ) {
	const { tabLabel, tabId, isActive } = attributes;

	const activeTabIndex = context[ 'wmblocks/activeTabIndex' ] ?? 0;
	// #9 — read fade from parent context
	const fadeEffect = context[ 'wmblocks/fadeEffect' ] ?? true;

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

	const isEditorVisible = myIndex === activeTabIndex;

	const { updateBlockAttributes, removeBlock, moveBlocksUp, moveBlocksDown } = useDispatch( 'core/block-editor' );

	// #2 — enforce single active
	const handleActiveToggle = ( val ) => {
		if ( val ) {
			siblings.forEach( ( block ) => {
				updateBlockAttributes( block.clientId, {
					isActive: block.clientId === clientId,
				} );
			} );
		} else {
			setAttributes( { isActive: false } );
		}
	};

	// Remove this tab — also shift activeTabIndex in parent if needed
	const handleRemove = () => {
		const newIndex = myIndex > 0 ? myIndex - 1 : 0;
		updateBlockAttributes( parentClientId, { activeTabIndex: newIndex } );
		removeBlock( clientId );
	};

	// Move tab left
	const handleMoveLeft = () => {
		if ( myIndex === 0 ) return;
		moveBlocksUp( [ clientId ], parentClientId );
		updateBlockAttributes( parentClientId, { activeTabIndex: myIndex - 1 } );
	};

	// Move tab right
	const handleMoveRight = () => {
		if ( myIndex === siblings.length - 1 ) return;
		moveBlocksDown( [ clientId ], parentClientId );
		updateBlockAttributes( parentClientId, { activeTabIndex: myIndex + 1 } );
	};

	const blockProps = useBlockProps( {
		className: 'wmblocks-tab-item',
		style: { display: isEditorVisible ? 'block' : 'none' },
	} );

	return (
		<>
			{ /* Floating toolbar above tab-item */ }
			<BlockControls>
				<ToolbarGroup>
					<ToolbarButton
						icon="arrow-left-alt2"
						label={ __( 'Move Tab Left', 'wmblocks' ) }
						onClick={ handleMoveLeft }
						disabled={ myIndex === 0 }
					/>
					<ToolbarButton
						icon="arrow-right-alt2"
						label={ __( 'Move Tab Right', 'wmblocks' ) }
						onClick={ handleMoveRight }
						disabled={ myIndex === siblings.length - 1 }
					/>
				</ToolbarGroup>
				<ToolbarGroup>
					<ToolbarButton
						icon="trash"
						label={ __( 'Remove Tab', 'wmblocks' ) }
						onClick={ handleRemove }
						isDestructive
					/>
				</ToolbarGroup>
			</BlockControls>

			<InspectorControls>
				<PanelBody title={ __( 'Tab Item Settings', 'wmblocks' ) } initialOpen={ true }>
					<TextControl
						label={ __( 'Tab ID', 'wmblocks' ) }
						value={ tabId }
						onChange={ ( v ) => setAttributes( { tabId: v.replace( /\s+/g, '-' ).toLowerCase() } ) }
						help={ __( 'Auto-generated from label. Override if needed.', 'wmblocks' ) }
					/>
					<ToggleControl
						label={ __( 'Active by default', 'wmblocks' ) }
						checked={ !! isActive }
						onChange={ handleActiveToggle }
						help={ isActive
							? __( 'This tab loads active. Others are deactivated.', 'wmblocks' )
							: __( 'Toggle to make this the default active tab.', 'wmblocks' )
						}
					/>
				</PanelBody>
			</InspectorControls>

			<div { ...blockProps }>
				<div style={ { display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px', padding: '6px 10px', background: '#f0f6fc', borderRadius: '4px', border: '1px solid #c8e1ff' } }>
					<span style={ { fontSize: '10px', fontWeight: 600, color: '#0550ae', textTransform: 'uppercase', letterSpacing: '0.5px', flexShrink: 0 } }>
						{ __( 'Tab Label:', 'wmblocks' ) }
					</span>
					<RichText
						tagName="span"
						value={ tabLabel }
						onChange={ ( v ) => {
							const autoId    = labelToId( tabLabel );
							const isAutoId  = tabId === autoId || tabId === '';
							setAttributes( {
								tabLabel: v,
								...( isAutoId ? { tabId: labelToId( v ) } : {} ),
							} );
						} }
						placeholder={ __( 'Tab name…', 'wmblocks' ) }
						allowedFormats={ [] }
						style={ { fontWeight: 600, color: '#0550ae', fontSize: '13px', minWidth: '60px' } }
					/>
					{ isActive && (
						<span style={ { marginLeft: 'auto', background: '#007cba', color: '#fff', borderRadius: '3px', padding: '1px 6px', fontSize: '10px', flexShrink: 0 } }>
							{ __( 'Active', 'wmblocks' ) }
						</span>
					) }
				</div>

				<InnerBlocks
					template={ TAB_CONTENT_TEMPLATE }
					templateLock={ false }
				/>
			</div>
		</>
	);
}
