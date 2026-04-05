import { __ } from '@wordpress/i18n';
import { useBlockProps, InspectorControls, InnerBlocks, BlockControls } from '@wordpress/block-editor';
import { useSelect, useDispatch } from '@wordpress/data';
import { PanelBody, SelectControl, TextControl, ToggleControl, ToolbarGroup, ToolbarButton } from '@wordpress/components';
import './editor.scss';

const ITEM_CONTENT_TEMPLATE = [
	[ 'core/paragraph', { placeholder: 'Flex item content…' } ],
];

const mkOpts = ( prefix, values ) =>
	[ { label: '— None —', value: '' }, ...values.map( v => ( { label: prefix + v, value: prefix + v } ) ) ];

const GROW_OPTS = [
	{ label: '— None —',      value: '' },
	{ label: 'flex-grow-0',   value: 'flex-grow-0' },
	{ label: 'flex-grow-1',   value: 'flex-grow-1' },
	{ label: 'flex-sm-grow-0', value: 'flex-sm-grow-0' },
	{ label: 'flex-sm-grow-1', value: 'flex-sm-grow-1' },
	{ label: 'flex-md-grow-0', value: 'flex-md-grow-0' },
	{ label: 'flex-md-grow-1', value: 'flex-md-grow-1' },
	{ label: 'flex-lg-grow-0', value: 'flex-lg-grow-0' },
	{ label: 'flex-lg-grow-1', value: 'flex-lg-grow-1' },
];

const SHRINK_OPTS = [
	{ label: '— None —',        value: '' },
	{ label: 'flex-shrink-0',   value: 'flex-shrink-0' },
	{ label: 'flex-shrink-1',   value: 'flex-shrink-1' },
	{ label: 'flex-sm-shrink-0', value: 'flex-sm-shrink-0' },
	{ label: 'flex-sm-shrink-1', value: 'flex-sm-shrink-1' },
	{ label: 'flex-md-shrink-0', value: 'flex-md-shrink-0' },
	{ label: 'flex-md-shrink-1', value: 'flex-md-shrink-1' },
];

const ALIGN_SELF_OPTS = mkOpts( 'align-self-', [
	'start', 'end', 'center', 'baseline', 'stretch', 'auto',
	'sm-start', 'sm-end', 'sm-center',
	'md-start', 'md-end', 'md-center',
	'lg-start', 'lg-end', 'lg-center',
] );

const ORDER_OPTS = [
	{ label: '— None —',    value: '' },
	{ label: 'order-first', value: 'order-first' },
	{ label: 'order-0',     value: 'order-0' },
	{ label: 'order-1',     value: 'order-1' },
	{ label: 'order-2',     value: 'order-2' },
	{ label: 'order-3',     value: 'order-3' },
	{ label: 'order-4',     value: 'order-4' },
	{ label: 'order-5',     value: 'order-5' },
	{ label: 'order-last',  value: 'order-last' },
	{ label: 'order-sm-0',  value: 'order-sm-0' },
	{ label: 'order-sm-1',  value: 'order-sm-1' },
	{ label: 'order-md-0',  value: 'order-md-0' },
	{ label: 'order-md-1',  value: 'order-md-1' },
	{ label: 'order-lg-0',  value: 'order-lg-0' },
	{ label: 'order-lg-1',  value: 'order-lg-1' },
];

const MARGIN_OPTS = [
	{ label: '— None —',   value: '' },
	{ label: 'me-auto',    value: 'me-auto' },
	{ label: 'ms-auto',    value: 'ms-auto' },
	{ label: 'mt-auto',    value: 'mt-auto' },
	{ label: 'mb-auto',    value: 'mb-auto' },
	{ label: 'mx-auto',    value: 'mx-auto' },
	{ label: 'my-auto',    value: 'my-auto' },
	{ label: 'm-auto',     value: 'm-auto' },
];

export default function Edit( { attributes, setAttributes, clientId } ) {
	const { flexFill, flexGrow, flexShrink, alignSelf, order, autoMargin, customClass, minWidth } = attributes;

	const { myIndex, siblings, parentClientId } = useSelect( ( select ) => {
		const store    = select( 'core/block-editor' );
		const parentId = store.getBlockRootClientId( clientId );
		const sibs     = store.getBlocks( parentId );
		return {
			myIndex:        sibs.findIndex( b => b.clientId === clientId ),
			siblings:       sibs,
			parentClientId: parentId,
		};
	}, [ clientId ] );

	const { removeBlock, moveBlocksUp, moveBlocksDown } = useDispatch( 'core/block-editor' );

	// Build item class
	const itemClass = [
		flexFill   ? 'flex-fill'  : '',
		flexGrow   || '',
		flexShrink || '',
		alignSelf  || '',
		order      || '',
		autoMargin || '',
		customClass || '',
	].filter( Boolean ).join( ' ' );

	const blockProps = useBlockProps( {
		className: [ 'wmblocks-flex-item', itemClass ].filter( Boolean ).join( ' ' ),
		style: minWidth ? { minWidth } : {},
	} );

	return (
		<>
			<BlockControls>
				<ToolbarGroup>
					<ToolbarButton icon="arrow-left-alt2"  label={ __( 'Move Item Left',   'wmblocks' ) } onClick={ () => moveBlocksUp(   [ clientId ], parentClientId ) } disabled={ myIndex === 0 } />
					<ToolbarButton icon="arrow-right-alt2" label={ __( 'Move Item Right',  'wmblocks' ) } onClick={ () => moveBlocksDown( [ clientId ], parentClientId ) } disabled={ myIndex === siblings.length - 1 } />
				</ToolbarGroup>
				<ToolbarGroup>
					<ToolbarButton icon="trash" label={ __( 'Remove Item', 'wmblocks' ) } onClick={ () => removeBlock( clientId ) } isDestructive />
				</ToolbarGroup>
			</BlockControls>

			<InspectorControls>
				<PanelBody title={ __( 'Flex Item', 'wmblocks' ) } initialOpen={ true }>
					<ToggleControl
						label={ __( 'flex-fill', 'wmblocks' ) }
						checked={ !! flexFill }
						onChange={ ( v ) => setAttributes( { flexFill: v } ) }
						help={ __( 'Force equal width by filling available space.', 'wmblocks' ) }
					/>
					<SelectControl label={ __( 'Flex Grow',   'wmblocks' ) } value={ flexGrow }   options={ GROW_OPTS }       onChange={ ( v ) => setAttributes( { flexGrow: v } ) } />
					<SelectControl label={ __( 'Flex Shrink', 'wmblocks' ) } value={ flexShrink } options={ SHRINK_OPTS }     onChange={ ( v ) => setAttributes( { flexShrink: v } ) } />
					<SelectControl label={ __( 'Align Self',  'wmblocks' ) } value={ alignSelf }  options={ ALIGN_SELF_OPTS } onChange={ ( v ) => setAttributes( { alignSelf: v } ) } />
					<SelectControl label={ __( 'Order',       'wmblocks' ) } value={ order }      options={ ORDER_OPTS }      onChange={ ( v ) => setAttributes( { order: v } ) } />
					<SelectControl label={ __( 'Auto Margin', 'wmblocks' ) } value={ autoMargin } options={ MARGIN_OPTS }     onChange={ ( v ) => setAttributes( { autoMargin: v } ) } help={ __( 'Push siblings away with auto margins.', 'wmblocks' ) } />
					<TextControl   label={ __( 'Min Width',   'wmblocks' ) } value={ minWidth }                               onChange={ ( v ) => setAttributes( { minWidth: v } ) } help={ __( 'e.g. 200px — useful for flex-wrap layouts.', 'wmblocks' ) } />
					<TextControl   label={ __( 'Extra Classes', 'wmblocks' ) } value={ customClass }                          onChange={ ( v ) => setAttributes( { customClass: v } ) } />
				</PanelBody>
			</InspectorControls>

			<div { ...blockProps }>
				{ /* Item class badge */ }
				{ itemClass && (
					<div style={ { fontSize: '10px', fontFamily: 'monospace', color: '#6f42c1', marginBottom: '4px', background: '#f8f5ff', padding: '2px 6px', borderRadius: '3px', display: 'inline-block' } }>
						{ itemClass }
					</div>
				) }
				<InnerBlocks
					template={ ITEM_CONTENT_TEMPLATE }
					templateLock={ false }
				/>
			</div>
		</>
	);
}
