import { __ } from '@wordpress/i18n';
import { useBlockProps, InspectorControls, InnerBlocks, BlockControls } from '@wordpress/block-editor';
import { useSelect, useDispatch } from '@wordpress/data';
import { PanelBody, SelectControl, TextControl, ToolbarGroup, ToolbarButton } from '@wordpress/components';
import './editor.scss';

const CONTAINER_TYPES = [
	{ label: 'container',       value: 'container' },
	{ label: 'container-sm',    value: 'container-sm' },
	{ label: 'container-md',    value: 'container-md' },
	{ label: 'container-lg',    value: 'container-lg' },
	{ label: 'container-xl',    value: 'container-xl' },
	{ label: 'container-xxl',   value: 'container-xxl' },
	{ label: 'container-fluid', value: 'container-fluid' },
];

const TEXT_ALIGN_OPTS = [
	{ label: '— None —',    value: '' },
	{ label: 'text-start',  value: 'text-start' },
	{ label: 'text-center', value: 'text-center' },
	{ label: 'text-end',    value: 'text-end' },
];

const TEMPLATE = [
	[ 'wmblocks/grid-row', {}, [
		[ 'wmblocks/grid-col', { col: 'col' }, [ [ 'core/paragraph', { placeholder: 'Column 1 content…' } ] ] ],
		[ 'wmblocks/grid-col', { col: 'col' }, [ [ 'core/paragraph', { placeholder: 'Column 2 content…' } ] ] ],
		[ 'wmblocks/grid-col', { col: 'col' }, [ [ 'core/paragraph', { placeholder: 'Column 3 content…' } ] ] ],
	] ],
];

const ALLOWED = [ 'wmblocks/grid-row' ];

export default function Edit( { attributes, setAttributes, clientId } ) {
	const { containerType, textAlign, overflow, padding, customClass } = attributes;

	const innerBlocks = useSelect( s => s( 'core/block-editor' ).getBlocks( clientId ), [ clientId ] );
	const { insertBlock } = useDispatch( 'core/block-editor' );
	const { createBlock } = wp.blocks;

	const addRow = () => insertBlock(
		createBlock( 'wmblocks/grid-row', {}, [
			createBlock( 'wmblocks/grid-col', { col: 'col' } ),
			createBlock( 'wmblocks/grid-col', { col: 'col' } ),
		] ),
		undefined, clientId
	);

	const containerClass = [ containerType, textAlign, overflow, padding, customClass ].filter( Boolean ).join( ' ' );
	const blockProps = useBlockProps( { className: [ 'wmblocks-grid-container', containerClass ].filter(Boolean).join(' ') } );

	return (
		<>
			<BlockControls>
				<ToolbarGroup>
					<ToolbarButton icon="plus" label={ __( 'Add Row', 'wmblocks' ) } onClick={ addRow } />
					<div style={ { display: 'flex', alignItems: 'center', padding: '0 8px', gap: 6, fontSize: 12, fontWeight: 500 } }>
						<span style={ { background: '#0d6efd', color: '#fff', borderRadius: 10, padding: '1px 7px', fontSize: 11 } }>{ containerType }</span>
						<span style={ { background: '#6c757d', color: '#fff', borderRadius: 10, padding: '1px 7px', fontSize: 11 } }>{ innerBlocks.length } { __( 'rows', 'wmblocks' ) }</span>
					</div>
				</ToolbarGroup>
			</BlockControls>

			<InspectorControls>
				<PanelBody title={ __( 'Container', 'wmblocks' ) } initialOpen={ true }>
					<SelectControl label={ __( 'Container Type', 'wmblocks' ) } value={ containerType } options={ CONTAINER_TYPES } onChange={ v => setAttributes( { containerType: v } ) }
						help={ __( 'container = responsive max-width. container-fluid = full width always.', 'wmblocks' ) } />
					<SelectControl label={ __( 'Text Align', 'wmblocks' ) } value={ textAlign } options={ TEXT_ALIGN_OPTS } onChange={ v => setAttributes( { textAlign: v } ) } />
					<SelectControl
						label={ __( 'Overflow', 'wmblocks' ) }
						value={ overflow }
						options={ [
							{ label: '— None —',        value: '' },
							{ label: 'overflow-hidden', value: 'overflow-hidden' },
							{ label: 'overflow-auto',   value: 'overflow-auto' },
							{ label: 'overflow-scroll', value: 'overflow-scroll' },
						] }
						onChange={ v => setAttributes( { overflow: v } ) }
						help={ __( 'Use overflow-hidden when using large gx-* to prevent horizontal scroll.', 'wmblocks' ) }
					/>
					<SelectControl
						label={ __( 'Padding X', 'wmblocks' ) }
						value={ padding }
						options={ [
							{ label: '— None —', value: '' },
							...[ 1,2,3,4,5 ].map( n => ( { label: `px-${ n }`, value: `px-${ n }` } ) ),
						] }
						onChange={ v => setAttributes( { padding: v } ) }
						help={ __( 'Add px-* to container when using large gx-* gutters to prevent overflow.', 'wmblocks' ) }
					/>
					<TextControl   label={ __( 'Extra Classes', 'wmblocks' ) } value={ customClass } onChange={ v => setAttributes( { customClass: v } ) } />
				</PanelBody>
			</InspectorControls>

			<div { ...blockProps }>
				{ /* Class badge */ }
				<div style={ { fontSize: 10, fontFamily: 'monospace', color: '#0d6efd', marginBottom: 6, background: '#f0f6ff', padding: '3px 2px', borderRadius: 4, display: 'inline-block', border: '1px solid #cfe2ff' } }>
					{ containerClass }
				</div>
				<InnerBlocks
					allowedBlocks={ ALLOWED }
					template={ TEMPLATE }
					templateLock={ false }
					renderAppender={ false }
				/>
				<button onMouseDown={ e => { e.preventDefault(); addRow(); } }
					style={ { marginTop: 8, width: '100%', padding: '6px', border: '1px dashed #0d6efd', borderRadius: 4, background: 'transparent', color: '#0d6efd', fontSize: 12, cursor: 'pointer' } }>
					+ { __( 'Add Row', 'wmblocks' ) }
				</button>
			</div>
		</>
	);
}
