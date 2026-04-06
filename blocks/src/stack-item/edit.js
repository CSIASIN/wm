import { __ } from '@wordpress/i18n';
import { useBlockProps, InspectorControls, InnerBlocks, BlockControls } from '@wordpress/block-editor';
import { useSelect, useDispatch } from '@wordpress/data';
import { PanelBody, SelectControl, TextControl, ToggleControl, ToolbarGroup, ToolbarButton } from '@wordpress/components';
import './editor.scss';

const PADDING_OPTS = [
	{ label: '— None —', value: '' },
	{ label: 'p-1', value: 'p-1' }, { label: 'p-2', value: 'p-2' },
	{ label: 'p-3', value: 'p-3' }, { label: 'p-4', value: 'p-4' },
	{ label: 'p-5', value: 'p-5' },
];

const MARGIN_OPTS = [
	{ label: '— None —',    value: '' },
	{ label: 'ms-auto',     value: 'ms-auto' },
	{ label: 'me-auto',     value: 'me-auto' },
	{ label: 'mt-auto',     value: 'mt-auto' },
	{ label: 'mb-auto',     value: 'mb-auto' },
	{ label: 'mx-auto',     value: 'mx-auto' },
	{ label: 'my-auto',     value: 'my-auto' },
	{ label: 'm-auto',      value: 'm-auto' },
];

const ALIGN_SELF_OPTS = [
	{ label: '— None —',          value: '' },
	{ label: 'align-self-start',  value: 'align-self-start' },
	{ label: 'align-self-center', value: 'align-self-center' },
	{ label: 'align-self-end',    value: 'align-self-end' },
	{ label: 'align-self-stretch',value: 'align-self-stretch' },
];

const ITEM_TEMPLATE = [
	[ 'core/paragraph', { placeholder: 'Stack item content…' } ],
];

const ALLOWED = [
	'core/paragraph', 'core/heading', 'core/image', 'core/list',
	'core/buttons', 'core/group', 'core/html',
	'wmblocks/flex-container', 'wmblocks/vstack', 'wmblocks/hstack',
	'wmblocks/bs-image', 'wmblocks/container',
];

export default function Edit( { attributes, setAttributes, clientId } ) {
	const { autoMargin, padding, flexFill, alignSelf, showDivider, customClass } = attributes;

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

	const itemClass = [
		flexFill   ? 'flex-fill'  : '',
		padding    || '',
		autoMargin || '',
		alignSelf  || '',
		customClass || '',
	].filter( Boolean ).join( ' ' );

	const blockProps = useBlockProps( {
		className: [ 'wmblocks-stack-item', itemClass ].filter( Boolean ).join( ' ' ),
	} );

	return (
		<>
			<BlockControls>
				<ToolbarGroup>
					<ToolbarButton icon="arrow-up-alt2"   label={ __( 'Move Up',   'wmblocks' ) } onClick={ () => moveBlocksUp(   [ clientId ], parentClientId ) } disabled={ myIndex === 0 } />
					<ToolbarButton icon="arrow-down-alt2" label={ __( 'Move Down', 'wmblocks' ) } onClick={ () => moveBlocksDown( [ clientId ], parentClientId ) } disabled={ myIndex === siblings.length - 1 } />
				</ToolbarGroup>
				<ToolbarGroup>
					<ToolbarButton icon="trash" label={ __( 'Remove Item', 'wmblocks' ) } onClick={ () => removeBlock( clientId ) } isDestructive />
				</ToolbarGroup>
			</BlockControls>

			<InspectorControls>
				<PanelBody title={ __( 'Stack Item', 'wmblocks' ) } initialOpen={ true }>
					<ToggleControl
						label={ __( 'flex-fill', 'wmblocks' ) }
						checked={ !! flexFill }
						onChange={ ( v ) => setAttributes( { flexFill: v } ) }
						help={ __( 'Force item to fill available space equally.', 'wmblocks' ) }
					/>
					<SelectControl label={ __( 'Padding',     'wmblocks' ) } value={ padding }    options={ PADDING_OPTS }    onChange={ ( v ) => setAttributes( { padding: v } ) } />
					<SelectControl label={ __( 'Auto Margin', 'wmblocks' ) } value={ autoMargin } options={ MARGIN_OPTS }     onChange={ ( v ) => setAttributes( { autoMargin: v } ) } help={ __( 'ms-auto pushes this item to the right in hstack.', 'wmblocks' ) } />
					<SelectControl label={ __( 'Align Self',  'wmblocks' ) } value={ alignSelf }  options={ ALIGN_SELF_OPTS } onChange={ ( v ) => setAttributes( { alignSelf: v } ) } />
					<ToggleControl
						label={ __( 'Vertical Rule Before', 'wmblocks' ) }
						checked={ !! showDivider }
						onChange={ ( v ) => setAttributes( { showDivider: v } ) }
						help={ __( 'Adds .vr divider before this item (hstack only).', 'wmblocks' ) }
					/>
					<TextControl label={ __( 'Extra Classes', 'wmblocks' ) } value={ customClass } onChange={ ( v ) => setAttributes( { customClass: v } ) } />
				</PanelBody>
			</InspectorControls>

			<div { ...blockProps }>
				{ itemClass && (
					<div style={ { fontSize: '10px', fontFamily: 'monospace', color: '#6c757d', marginBottom: '4px', background: '#f8f9fa', padding: '2px 5px', borderRadius: '3px', display: 'inline-block' } }>
						{ itemClass }
					</div>
				) }
				<InnerBlocks
					allowedBlocks={ ALLOWED }
					template={ ITEM_TEMPLATE }
					templateLock={ false }
				/>
			</div>
		</>
	);
}
