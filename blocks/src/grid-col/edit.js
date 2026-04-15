import { __ } from '@wordpress/i18n';
import { useBlockProps, InspectorControls, InnerBlocks, BlockControls } from '@wordpress/block-editor';
import { useSelect, useDispatch } from '@wordpress/data';
import { PanelBody, SelectControl, TextControl, ToolbarGroup, ToolbarButton } from '@wordpress/components';
import './editor.scss';

const none = { label: '— None —', value: '' };

const colOpts = ( prefix ) => [
	none,
	{ label: `col${prefix}`,        value: `col${prefix}` },
	{ label: `col${prefix}-auto`,   value: `col${prefix}-auto` },
	...[ 1,2,3,4,5,6,7,8,9,10,11,12 ].map( n => ( { label: `col${prefix}-${n}`, value: `col${prefix}-${n}` } ) ),
];

const offsetOpts = ( prefix ) => [
	none,
	...[ 0,1,2,3,4,5,6,7,8,9,10,11 ].map( n => ( { label: `offset${prefix}-${n}`, value: `offset${prefix}-${n}` } ) ),
];

const orderOpts = ( prefix ) => [
	none,
	{ label: `order${prefix}-first`, value: `order${prefix}-first` },
	{ label: `order${prefix}-last`,  value: `order${prefix}-last` },
	...[ 0,1,2,3,4,5 ].map( n => ( { label: `order${prefix}-${n}`, value: `order${prefix}-${n}` } ) ),
];

const ALIGN_SELF_OPTS = [
	none,
	...[ 'start','end','center','baseline','stretch' ].map( v => ( { label: `align-self-${v}`, value: `align-self-${v}` } ) ),
];

// Wide allowed blocks — col accepts everything so authors can nest rows inside
const ALLOWED = [
	'wmblocks/grid-row', 'wmblocks/grid-container',
	'wmblocks/container', 'wmblocks/flex-container',
	'wmblocks/vstack', 'wmblocks/hstack',
	'core/paragraph', 'core/heading', 'core/image', 'core/list',
	'core/group', 'core/columns', 'core/html',
	'wmblocks/bs-image', 'wmblocks/bs-figure', 'wmblocks/object-fit',
	'wmblocks/accordion', 'wmblocks/tabs', 'wmblocks/carousel',
	'wmblocks/collapse', 'wmblocks/modal', 'wmblocks/toast',
	'wmblocks/progress', 'wmblocks/list-group', 'wmblocks/bs-form',
	'wmblocks/icon-link', 'wmblocks/image-link', 'wmblocks/position-wrapper',
];

const CONTENT_TEMPLATE = [
	[ 'core/paragraph', { placeholder: 'Column content…' } ],
];

export default function Edit( { attributes, setAttributes, clientId } ) {
	const {
		col, colSm, colMd, colLg, colXl, colXxl,
		offset, offsetSm, offsetMd, offsetLg, offsetXl,
		order, orderSm, orderMd, orderLg,
		alignSelf, customClass,
	} = attributes;

	const { myIndex, siblings, parentClientId } = useSelect( s => {
		const store  = s( 'core/block-editor' );
		const pid    = store.getBlockRootClientId( clientId );
		const sibs   = store.getBlocks( pid );
		return { myIndex: sibs.findIndex( b => b.clientId === clientId ), siblings: sibs, parentClientId: pid };
	}, [ clientId ] );

	const { removeBlock, moveBlocksUp, moveBlocksDown } = useDispatch( 'core/block-editor' );

	const colClass = [
		col    || '',
		colSm  || '',
		colMd  || '',
		colLg  || '',
		colXl  || '',
		colXxl || '',
		offset  || '',
		offsetSm || '',
		offsetMd || '',
		offsetLg || '',
		offsetXl || '',
		order   || '',
		orderSm || '',
		orderMd || '',
		orderLg || '',
		alignSelf   || '',
		customClass || '',
	].filter( Boolean ).join( ' ' );

	const blockProps = useBlockProps( {
		className: [ 'wmblocks-grid-col', colClass ].filter( Boolean ).join( ' ' ),
	} );

	return (
		<>
			<BlockControls>
				<ToolbarGroup>
					<ToolbarButton icon="arrow-left-alt2"  label={ __( 'Move Left',  'wmblocks' ) } onClick={ () => moveBlocksUp(   [ clientId ], parentClientId ) } disabled={ myIndex === 0 } />
					<ToolbarButton icon="arrow-right-alt2" label={ __( 'Move Right', 'wmblocks' ) } onClick={ () => moveBlocksDown( [ clientId ], parentClientId ) } disabled={ myIndex === siblings.length - 1 } />
				</ToolbarGroup>
				<ToolbarGroup>
					<ToolbarButton icon="trash" label={ __( 'Remove Column', 'wmblocks' ) } onClick={ () => removeBlock( clientId ) } isDestructive />
				</ToolbarGroup>
			</BlockControls>

			<InspectorControls>
				{ /* Column width per breakpoint */ }
				<PanelBody title={ __( 'Column Width', 'wmblocks' ) } initialOpen={ true }>
					<p style={ { fontSize: 11, color: '#6c757d', margin: '0 0 8px' } }>{ __( 'Set responsive column widths. "col" = equal-width auto. "col-auto" = natural width.', 'wmblocks' ) }</p>
					<SelectControl label={ __( 'Base (all)',  'wmblocks' ) } value={ col }    options={ colOpts( '' )    } onChange={ v => setAttributes( { col: v } ) } />
					<SelectControl label={ __( 'SM+ (≥576px)',  'wmblocks' ) } value={ colSm }  options={ colOpts( '-sm' ) } onChange={ v => setAttributes( { colSm: v } ) } />
					<SelectControl label={ __( 'MD+ (≥768px)',  'wmblocks' ) } value={ colMd }  options={ colOpts( '-md' ) } onChange={ v => setAttributes( { colMd: v } ) } />
					<SelectControl label={ __( 'LG+ (≥992px)',  'wmblocks' ) } value={ colLg }  options={ colOpts( '-lg' ) } onChange={ v => setAttributes( { colLg: v } ) } />
					<SelectControl label={ __( 'XL+ (≥1200px)', 'wmblocks' ) } value={ colXl }  options={ colOpts( '-xl' ) } onChange={ v => setAttributes( { colXl: v } ) } />
					<SelectControl label={ __( 'XXL+ (≥1400px)','wmblocks' ) } value={ colXxl } options={ colOpts( '-xxl' ) } onChange={ v => setAttributes( { colXxl: v } ) } />
				</PanelBody>

				{ /* Offset */ }
				<PanelBody title={ __( 'Offset', 'wmblocks' ) } initialOpen={ false }>
					<p style={ { fontSize: 11, color: '#6c757d', margin: '0 0 8px' } }>{ __( 'Shift columns to the right using offset classes.', 'wmblocks' ) }</p>
					<SelectControl label={ __( 'Base',   'wmblocks' ) } value={ offset   } options={ offsetOpts( '' )    } onChange={ v => setAttributes( { offset: v } ) } />
					<SelectControl label={ __( 'SM+',    'wmblocks' ) } value={ offsetSm } options={ offsetOpts( '-sm' ) } onChange={ v => setAttributes( { offsetSm: v } ) } />
					<SelectControl label={ __( 'MD+',    'wmblocks' ) } value={ offsetMd } options={ offsetOpts( '-md' ) } onChange={ v => setAttributes( { offsetMd: v } ) } />
					<SelectControl label={ __( 'LG+',    'wmblocks' ) } value={ offsetLg } options={ offsetOpts( '-lg' ) } onChange={ v => setAttributes( { offsetLg: v } ) } />
					<SelectControl label={ __( 'XL+',    'wmblocks' ) } value={ offsetXl } options={ offsetOpts( '-xl' ) } onChange={ v => setAttributes( { offsetXl: v } ) } />
				</PanelBody>

				{ /* Order */ }
				<PanelBody title={ __( 'Order', 'wmblocks' ) } initialOpen={ false }>
					<SelectControl label={ __( 'Base', 'wmblocks' ) } value={ order   } options={ orderOpts( '' )    } onChange={ v => setAttributes( { order: v } ) } />
					<SelectControl label={ __( 'SM+',  'wmblocks' ) } value={ orderSm } options={ orderOpts( '-sm' ) } onChange={ v => setAttributes( { orderSm: v } ) } />
					<SelectControl label={ __( 'MD+',  'wmblocks' ) } value={ orderMd } options={ orderOpts( '-md' ) } onChange={ v => setAttributes( { orderMd: v } ) } />
					<SelectControl label={ __( 'LG+',  'wmblocks' ) } value={ orderLg } options={ orderOpts( '-lg' ) } onChange={ v => setAttributes( { orderLg: v } ) } />
				</PanelBody>

				{ /* Alignment */ }
				<PanelBody title={ __( 'Alignment & Extra', 'wmblocks' ) } initialOpen={ false }>
					<SelectControl label={ __( 'Align Self',    'wmblocks' ) } value={ alignSelf }   options={ ALIGN_SELF_OPTS } onChange={ v => setAttributes( { alignSelf: v } ) } help={ __( 'Overrides the row\'s align-items for this column only.', 'wmblocks' ) } />
					<TextControl   label={ __( 'Extra Classes', 'wmblocks' ) } value={ customClass } onChange={ v => setAttributes( { customClass: v } ) } />
				</PanelBody>
			</InspectorControls>

			<div { ...blockProps }>
				{ /* Compact col class badge */ }
				<div style={ { float:'right', marginTop:'-25px', fontSize: 10, fontFamily: 'monospace', color: '#6610f2', marginBottom: 4, background: '#f8f5ff', padding: '2px 6px', borderRadius: 3, display: 'inline-block' } }>
					{ colClass || 'col' }
				</div>
				<InnerBlocks
					allowedBlocks={ ALLOWED }
					template={ CONTENT_TEMPLATE }
					templateLock={ false }
				/>
			</div>
		</>
	);
}
