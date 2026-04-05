import { __ } from '@wordpress/i18n';
import { useBlockProps, InspectorControls, InnerBlocks, BlockControls } from '@wordpress/block-editor';
import { useSelect, useDispatch } from '@wordpress/data';
import { PanelBody, SelectControl, TextControl, ToolbarGroup, ToolbarButton } from '@wordpress/components';
import './editor.scss';

const ITEM_TEMPLATE = [
	[ 'wmblocks/flex-item', {} ],
	[ 'wmblocks/flex-item', {} ],
	[ 'wmblocks/flex-item', {} ],
];

const mkOpts = ( prefix, values, labels ) =>
	[ { label: '— None —', value: '' }, ...values.map( ( v, i ) => ( { label: labels ? labels[ i ] : v, value: prefix + v } ) ) ];

const DISPLAY_OPTS = [
	{ label: 'd-flex',        value: 'd-flex' },
	{ label: 'd-inline-flex', value: 'd-inline-flex' },
	{ label: 'd-sm-flex',     value: 'd-sm-flex' },
	{ label: 'd-md-flex',     value: 'd-md-flex' },
	{ label: 'd-lg-flex',     value: 'd-lg-flex' },
	{ label: 'd-xl-flex',     value: 'd-xl-flex' },
];

const DIR_OPTS = mkOpts( 'flex-', [
	'row', 'row-reverse', 'column', 'column-reverse',
	'sm-row', 'sm-column', 'md-row', 'md-column',
	'lg-row', 'lg-column', 'xl-row', 'xl-column',
] );

const JUSTIFY_OPTS = mkOpts( 'justify-content-', [
	'start', 'end', 'center', 'between', 'around', 'evenly',
	'sm-start', 'sm-end', 'sm-center', 'sm-between',
	'md-start', 'md-end', 'md-center', 'md-between',
	'lg-start', 'lg-end', 'lg-center', 'lg-between',
] );

const ALIGN_ITEMS_OPTS = mkOpts( 'align-items-', [
	'start', 'end', 'center', 'baseline', 'stretch',
	'sm-start', 'sm-end', 'sm-center',
	'md-start', 'md-end', 'md-center',
	'lg-start', 'lg-end', 'lg-center',
] );

const ALIGN_CONTENT_OPTS = mkOpts( 'align-content-', [
	'start', 'end', 'center', 'between', 'around', 'stretch',
] );

const WRAP_OPTS = mkOpts( 'flex-', [
	'wrap', 'nowrap', 'wrap-reverse',
	'sm-wrap', 'sm-nowrap',
	'md-wrap', 'md-nowrap',
	'lg-wrap', 'lg-nowrap',
] );

const GAP_OPTS = mkOpts( 'gap-', [ '0', '1', '2', '3', '4', '5' ] );

export default function Edit( { attributes, setAttributes, clientId } ) {
	const { display, direction, justifyContent, alignItems, alignContent, flexWrap, gap, customClass } = attributes;

	const innerBlocks = useSelect( ( select ) =>
		select( 'core/block-editor' ).getBlocks( clientId )
	, [ clientId ] );

	const { insertBlock } = useDispatch( 'core/block-editor' );
	const { createBlock } = wp.blocks;

	const addItem = () => {
		insertBlock( createBlock( 'wmblocks/flex-item', {} ), undefined, clientId );
	};

	const containerClass = [
		display, direction, justifyContent, alignItems,
		alignContent, flexWrap, gap, customClass,
	].filter( Boolean ).join( ' ' );

	const blockProps = useBlockProps( {
		className: 'wmblocks-flex-container-wrapper',
	} );

	return (
		<>
			<BlockControls>
				<ToolbarGroup>
					<ToolbarButton
						icon="plus"
						label={ __( 'Add Flex Item', 'wmblocks' ) }
						onClick={ addItem }
					/>
					<div style={ { display: 'flex', alignItems: 'center', padding: '0 8px', fontSize: '12px', fontWeight: 500, color: '#1e1e1e', gap: '6px' } }>
						{ __( 'Items', 'wmblocks' ) }
						<span style={ { background: '#007cba', color: '#fff', borderRadius: '10px', padding: '1px 7px', fontSize: '11px', fontWeight: 600 } }>
							{ innerBlocks.length }
						</span>
					</div>
				</ToolbarGroup>
			</BlockControls>

			<InspectorControls>
				<PanelBody title={ __( 'Flex Container', 'wmblocks' ) } initialOpen={ true }>
					<SelectControl label={ __( 'Display',          'wmblocks' ) } value={ display }        options={ DISPLAY_OPTS }       onChange={ ( v ) => setAttributes( { display: v } ) } />
					<SelectControl label={ __( 'Direction',        'wmblocks' ) } value={ direction }      options={ DIR_OPTS }            onChange={ ( v ) => setAttributes( { direction: v } ) } />
					<SelectControl label={ __( 'Justify Content',  'wmblocks' ) } value={ justifyContent } options={ JUSTIFY_OPTS }       onChange={ ( v ) => setAttributes( { justifyContent: v } ) } />
					<SelectControl label={ __( 'Align Items',      'wmblocks' ) } value={ alignItems }     options={ ALIGN_ITEMS_OPTS }   onChange={ ( v ) => setAttributes( { alignItems: v } ) } />
					<SelectControl label={ __( 'Align Content',    'wmblocks' ) } value={ alignContent }   options={ ALIGN_CONTENT_OPTS } onChange={ ( v ) => setAttributes( { alignContent: v } ) } />
					<SelectControl label={ __( 'Flex Wrap',        'wmblocks' ) } value={ flexWrap }       options={ WRAP_OPTS }          onChange={ ( v ) => setAttributes( { flexWrap: v } ) } />
					<SelectControl label={ __( 'Gap',              'wmblocks' ) } value={ gap }            options={ GAP_OPTS }           onChange={ ( v ) => setAttributes( { gap: v } ) } />
					<TextControl   label={ __( 'Extra Classes',    'wmblocks' ) } value={ customClass }                                   onChange={ ( v ) => setAttributes( { customClass: v } ) } help={ __( 'Add extra Bootstrap or custom classes.', 'wmblocks' ) } />
				</PanelBody>
			</InspectorControls>

			<div { ...blockProps }>
				{ /* Class preview badge */ }
				<div style={ { fontSize: '10px', fontFamily: 'monospace', color: '#007cba', marginBottom: '6px', background: '#f0f6fc', padding: '4px 8px', borderRadius: '4px', display: 'inline-block' } }>
					{ containerClass || 'd-flex' }
				</div>

				<div className={ containerClass || 'd-flex' }>
					<InnerBlocks
						allowedBlocks={ [ 'wmblocks/flex-item' ] }
						template={ ITEM_TEMPLATE }
						templateLock={ false }
						renderAppender={ false }
					/>
				</div>

				{ /* Add item button at bottom */ }
				<button
					onMouseDown={ ( e ) => { e.preventDefault(); addItem(); } }
					style={ { marginTop: '8px', width: '100%', padding: '6px', border: '1px dashed #007cba', borderRadius: '4px', background: 'transparent', color: '#007cba', fontSize: '12px', cursor: 'pointer' } }
				>
					+ { __( 'Add Flex Item', 'wmblocks' ) }
				</button>
			</div>
		</>
	);
}
