import { __ } from '@wordpress/i18n';
import { useBlockProps, InspectorControls, InnerBlocks, BlockControls } from '@wordpress/block-editor';
import { useSelect, useDispatch } from '@wordpress/data';
import { PanelBody, SelectControl, TextControl, ToolbarGroup, ToolbarButton } from '@wordpress/components';
import './editor.scss';

const POSITION_OPTS = [
	{ label: 'position-relative', value: 'position-relative' },
	{ label: 'position-absolute', value: 'position-absolute' },
	{ label: 'position-fixed',    value: 'position-fixed' },
	{ label: 'position-sticky',   value: 'position-sticky' },
	{ label: 'position-static',   value: 'position-static' },
];

const DISPLAY_OPTS = [
	{ label: '— None —',         value: '' },
	{ label: 'd-inline-flex',    value: 'd-inline-flex' },
	{ label: 'd-inline-block',   value: 'd-inline-block' },
	{ label: 'd-inline',         value: 'd-inline' },
	{ label: 'd-block',          value: 'd-block' },
	{ label: 'd-flex',           value: 'd-flex' },
];

// Suggested templates for common patterns
const TEMPLATES = {
	badge: [
		[ 'core/buttons',          { } ],
		[ 'wmblocks/position-element', { positionType: 'position-absolute', top: 'top-0', start: 'start-100', translate: 'translate-middle', customClass: 'badge rounded-pill bg-danger' } ],
	],
	image: [
		[ 'wmblocks/bs-image',     { imgFluid: true } ],
		[ 'wmblocks/position-element', { positionType: 'position-absolute', top: 'top-0', end: 'end-0', customClass: 'badge text-bg-primary m-2' } ],
	],
	progress: [
		[ 'wmblocks/progress',     { } ],
		[ 'wmblocks/position-element', { positionType: 'position-absolute', top: 'top-50', start: 'start-50', translate: 'translate-middle', customClass: 'badge text-bg-dark' } ],
	],
	custom: [
		[ 'core/paragraph',        { placeholder: 'Base content goes here…' } ],
		[ 'wmblocks/position-element', { positionType: 'position-absolute', top: 'top-0', start: 'start-0' } ],
	],
};

const ALLOWED = [
	'wmblocks/position-element',
	'core/buttons', 'core/button', 'core/paragraph', 'core/heading',
	'core/image', 'core/group', 'core/html',
	'wmblocks/bs-image', 'wmblocks/progress', 'wmblocks/bs-figure',
	'wmblocks/object-fit', 'wmblocks/container', 'wmblocks/flex-container',
];

export default function Edit( { attributes, setAttributes, clientId } ) {
	const { positionClass, display, customClass } = attributes;

	const innerBlocks = useSelect( ( select ) =>
		select( 'core/block-editor' ).getBlocks( clientId )
	, [ clientId ] );

	const { insertBlock } = useDispatch( 'core/block-editor' );
	const { createBlock } = wp.blocks;

	const addElement = () => {
		insertBlock( createBlock( 'wmblocks/position-element', {} ), undefined, clientId );
	};

	const wrapperClass = [ positionClass, display, customClass ].filter( Boolean ).join( ' ' );

	const positionCount = innerBlocks.filter( b => b.name === 'wmblocks/position-element' ).length;

	const blockProps = useBlockProps( { className: 'wmblocks-position-wrapper' } );

	return (
		<>
			<BlockControls>
				<ToolbarGroup>
					<ToolbarButton
						icon="location"
						label={ __( 'Add Position Element', 'wmblocks' ) }
						onClick={ addElement }
					/>
					<div style={ { display: 'flex', alignItems: 'center', padding: '0 8px', fontSize: '12px', gap: '4px' } }>
						<span style={ { background: '#dc3545', color: '#fff', borderRadius: '10px', padding: '1px 7px', fontSize: '11px', fontWeight: 600 } }>
							{ positionCount } { __( 'positioned', 'wmblocks' ) }
						</span>
					</div>
				</ToolbarGroup>
			</BlockControls>

			<InspectorControls>
				<PanelBody title={ __( 'Position Wrapper', 'wmblocks' ) } initialOpen={ true }>
					<SelectControl
						label={ __( 'Position Class', 'wmblocks' ) }
						value={ positionClass }
						options={ POSITION_OPTS }
						onChange={ ( v ) => setAttributes( { positionClass: v } ) }
						help={ __( 'Usually position-relative. Children use position-absolute.', 'wmblocks' ) }
					/>
					<SelectControl
						label={ __( 'Display', 'wmblocks' ) }
						value={ display }
						options={ DISPLAY_OPTS }
						onChange={ ( v ) => setAttributes( { display: v } ) }
						help={ __( 'Use d-inline-flex or d-inline-block to shrink-wrap the content.', 'wmblocks' ) }
					/>
					<TextControl
						label={ __( 'Extra Classes', 'wmblocks' ) }
						value={ customClass }
						onChange={ ( v ) => setAttributes( { customClass: v } ) }
					/>
				</PanelBody>

				{ /* Quick start templates */ }
				<PanelBody title={ __( 'Quick Templates', 'wmblocks' ) } initialOpen={ false }>
					<div style={ { fontSize: '11px', color: '#757575', marginBottom: '10px' } }>
						{ __( 'Insert a preset layout replacing current content.', 'wmblocks' ) }
					</div>
					{ [
						[ __( '🔴 Badge on Button',    'wmblocks' ), 'badge' ],
						[ __( '🏷 Label on Image',     'wmblocks' ), 'image' ],
						[ __( '📊 Label on Progress',  'wmblocks' ), 'progress' ],
						[ __( '✨ Custom',             'wmblocks' ), 'custom' ],
					].map( ( [ label, key ] ) => (
						<button
							key={ key }
							onMouseDown={ ( e ) => {
								e.preventDefault();
								// Replace inner blocks with template
								const { replaceInnerBlocks } = wp.data.dispatch( 'core/block-editor' );
								const newBlocks = TEMPLATES[ key ].map( ( [ name, attrs ] ) => createBlock( name, attrs ) );
								replaceInnerBlocks( clientId, newBlocks, false );
							} }
							style={ { display: 'block', width: '100%', textAlign: 'left', padding: '6px 10px', marginBottom: '4px', border: '1px solid #ddd', borderRadius: '4px', background: '#f8f9fa', cursor: 'pointer', fontSize: '12px' } }
						>
							{ label }
						</button>
					) ) }
				</PanelBody>
			</InspectorControls>

			<div { ...blockProps }>
				{ /* Class badge */ }
				<div style={ { fontSize: '10px', fontFamily: 'monospace', color: '#dc3545', marginBottom: '6px', background: '#fff5f5', padding: '3px 8px', borderRadius: '4px', display: 'inline-block', border: '1px solid #fdd' } }>
					{ wrapperClass }
				</div>

				{ /* The wrapper div — position-relative */ }
				<div
					className={ wrapperClass }
					style={ { border: '1px dashed #dc3545', minHeight: '60px', padding: '8px' } }
				>
					<InnerBlocks
						allowedBlocks={ ALLOWED }
						template={ TEMPLATES.badge }
						templateLock={ false }
						renderAppender={ false }
					/>
				</div>

				<button
					onMouseDown={ ( e ) => { e.preventDefault(); addElement(); } }
					style={ { marginTop: '6px', padding: '4px 12px', border: '1px dashed #dc3545', borderRadius: '4px', background: 'transparent', color: '#dc3545', fontSize: '12px', cursor: 'pointer' } }
				>
					+ { __( 'Add Position Element', 'wmblocks' ) }
				</button>
			</div>
		</>
	);
}
