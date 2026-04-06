import { __ } from '@wordpress/i18n';
import { useBlockProps, InspectorControls, InnerBlocks, BlockControls } from '@wordpress/block-editor';
import { useSelect, useDispatch } from '@wordpress/data';
import { PanelBody, SelectControl, TextControl, ToolbarGroup, ToolbarButton } from '@wordpress/components';
import './editor.scss';

const GAP_OPTS = [
	{ label: '— None —', value: '' },
	{ label: 'gap-0', value: 'gap-0' }, { label: 'gap-1', value: 'gap-1' },
	{ label: 'gap-2', value: 'gap-2' }, { label: 'gap-3', value: 'gap-3' },
	{ label: 'gap-4', value: 'gap-4' }, { label: 'gap-5', value: 'gap-5' },
];

const TEMPLATE = [
	[ 'wmblocks/stack-item', {} ],
	[ 'wmblocks/stack-item', {} ],
	[ 'wmblocks/stack-item', {} ],
];

const ALLOWED = [ 'wmblocks/stack-item', 'wmblocks/flex-container', 'wmblocks/flex-item', 'core/paragraph', 'core/heading', 'core/image', 'core/group' ];

export default function Edit( { attributes, setAttributes, clientId } ) {
	const { gap, customClass } = attributes;

	const innerBlocks = useSelect( ( select ) =>
		select( 'core/block-editor' ).getBlocks( clientId )
	, [ clientId ] );

	const { insertBlock } = useDispatch( 'core/block-editor' );
	const { createBlock } = wp.blocks;

	const addItem = () => insertBlock( createBlock( 'wmblocks/stack-item', {} ), undefined, clientId );

	const stackClass = [ 'vstack', gap, customClass ].filter( Boolean ).join( ' ' );

	const blockProps = useBlockProps( { className: 'wmblocks-vstack-wrapper' } );

	return (
		<>
			<BlockControls>
				<ToolbarGroup>
					<ToolbarButton icon="plus" label={ __( 'Add Stack Item', 'wmblocks' ) } onClick={ addItem } />
					<div style={ { display: 'flex', alignItems: 'center', padding: '0 8px', fontSize: '12px', fontWeight: 500, color: '#1e1e1e', gap: '6px' } }>
						<span style={ { background: '#198754', color: '#fff', borderRadius: '10px', padding: '1px 7px', fontSize: '11px' } }>vstack</span>
						<span style={ { background: '#6c757d', color: '#fff', borderRadius: '10px', padding: '1px 7px', fontSize: '11px' } }>{ innerBlocks.length }</span>
					</div>
				</ToolbarGroup>
			</BlockControls>

			<InspectorControls>
				<PanelBody title={ __( 'Vertical Stack', 'wmblocks' ) } initialOpen={ true }>
					<SelectControl label={ __( 'Gap', 'wmblocks' ) } value={ gap } options={ GAP_OPTS } onChange={ ( v ) => setAttributes( { gap: v } ) } help={ __( 'Space between stacked items.', 'wmblocks' ) } />
					<TextControl label={ __( 'Extra Classes', 'wmblocks' ) } value={ customClass } onChange={ ( v ) => setAttributes( { customClass: v } ) } />
				</PanelBody>
			</InspectorControls>

			<div { ...blockProps }>
				<div style={ { fontSize: '10px', fontFamily: 'monospace', color: '#198754', marginBottom: '6px', background: '#f0fdf4', padding: '3px 8px', borderRadius: '4px', display: 'inline-block' } }>
					{ stackClass }
				</div>
				<div className={ stackClass }>
					<InnerBlocks
						allowedBlocks={ ALLOWED }
						template={ TEMPLATE }
						templateLock={ false }
						renderAppender={ false }
					/>
				</div>
				<button
					onMouseDown={ ( e ) => { e.preventDefault(); addItem(); } }
					style={ { marginTop: '8px', width: '100%', padding: '6px', border: '1px dashed #198754', borderRadius: '4px', background: 'transparent', color: '#198754', fontSize: '12px', cursor: 'pointer' } }
				>
					+ { __( 'Add Stack Item', 'wmblocks' ) }
				</button>
			</div>
		</>
	);
}
