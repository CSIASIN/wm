import { __ } from '@wordpress/i18n';
import { useBlockProps, InspectorControls, InnerBlocks, BlockControls } from '@wordpress/block-editor';
import { PanelBody, SelectControl, ToolbarGroup, ToolbarButton } from '@wordpress/components';
import './editor.scss';

// Only allow card blocks inside the group
const ALLOWED = [ 'wmblocks/card-image', 'wmblocks/card', 'wmblocks/card-header-footer' ];

const DEFAULT_TEMPLATE = [
	[ 'wmblocks/card-image', { title: 'Card title', bodyText: 'Some quick example text to build on the card title.', showLink: true } ],
	[ 'wmblocks/card-image', { title: 'Card title', bodyText: 'Some quick example text to build on the card title.', showLink: true } ],
	[ 'wmblocks/card-image', { title: 'Card title', bodyText: 'Some quick example text to build on the card title.', showLink: true } ],
];

const LAYOUT_OPTIONS = [
	{ label: 'CSS Grid (responsive)',        value: 'grid'       },
	{ label: 'Card Group (flush borders)',   value: 'card-group' },
	{ label: 'Card Deck (equal width)',      value: 'deck'       },
];

const COLS_OPTIONS = [
	{ label: '1', value: '1' }, { label: '2', value: '2' },
	{ label: '3', value: '3' }, { label: '4', value: '4' },
	{ label: '5', value: '5' }, { label: '6', value: '6' },
];

const GAP_OPTIONS = [
	{ label: 'None', value: '' },    { label: 'XS', value: 'gap-1' },
	{ label: 'SM',   value: 'gap-2'},{ label: 'MD', value: 'gap-3' },
	{ label: 'LG',   value: 'gap-4'},
];

export default function Edit( { attributes, setAttributes } ) {
	const { layout, cols, gap, colsSm, colsMd } = attributes;

	const blockProps = useBlockProps( { className: 'wmblocks-card-group-wrapper' } );

	// Build preview grid style
	const gridStyle = layout === 'grid'
		? { display: 'grid', gridTemplateColumns: `repeat(${ cols }, 1fr)`, gap: '16px' }
		: layout === 'card-group'
		? { display: 'flex', gap: 0 }
		: { display: 'flex', gap: '16px' };

	return (
		<>
			<BlockControls>
				<ToolbarGroup>
					{ LAYOUT_OPTIONS.map( ( l ) => (
						<ToolbarButton key={ l.value } label={ l.label }
							isPressed={ layout === l.value }
							onClick={ () => setAttributes( { layout: l.value } ) }
						>{ { grid: '⊞', 'card-group': '▐▌', deck: '▭▭' }[ l.value ] }</ToolbarButton>
					) ) }
				</ToolbarGroup>
				<ToolbarGroup>
					{ [ '2','3','4' ].map( ( c ) => (
						<ToolbarButton key={ c } label={ c + ' columns' }
							isPressed={ cols === c }
							onClick={ () => setAttributes( { cols: c } ) }
						>{ c }col</ToolbarButton>
					) ) }
				</ToolbarGroup>
			</BlockControls>

			<InspectorControls>
				<PanelBody title={ __( 'Layout', 'wmblocks' ) } initialOpen={ true }>
					<SelectControl label={ __( 'Layout Mode', 'wmblocks' ) } value={ layout }
						options={ LAYOUT_OPTIONS } onChange={ ( v ) => setAttributes( { layout: v } ) }
						help={ __( 'Grid = responsive columns. Card Group = flush borders, equal height. Deck = auto-width flex.', 'wmblocks' ) }
					/>
					{ layout !== 'card-group' && (
						<SelectControl label={ __( 'Gap', 'wmblocks' ) } value={ gap }
							options={ GAP_OPTIONS } onChange={ ( v ) => setAttributes( { gap: v } ) }
						/>
					) }
				</PanelBody>
				{ layout === 'grid' && (
					<PanelBody title={ __( 'Responsive Columns', 'wmblocks' ) } initialOpen={ true }>
						<SelectControl label={ __( 'Columns on Mobile (default)', 'wmblocks' ) } value={ colsSm }
							options={ COLS_OPTIONS } onChange={ ( v ) => setAttributes( { colsSm: v } ) }
						/>
						<SelectControl label={ __( 'Columns on Tablet (md)', 'wmblocks' ) } value={ colsMd }
							options={ COLS_OPTIONS } onChange={ ( v ) => setAttributes( { colsMd: v } ) }
						/>
						<SelectControl label={ __( 'Columns on Desktop (lg+)', 'wmblocks' ) } value={ cols }
							options={ COLS_OPTIONS } onChange={ ( v ) => setAttributes( { cols: v } ) }
						/>
					</PanelBody>
				) }
			</InspectorControls>

			<div { ...blockProps }>
				<div className="wmblocks-card-group-label">
					<span>Card Group</span>
					<span className="wmblocks-card-group-chip">{ layout }</span>
					<span className="wmblocks-card-group-chip">{ cols } cols</span>
					{ gap && layout !== 'card-group' && <span className="wmblocks-card-group-chip">{ gap }</span> }
				</div>

				{/* Editor preview uses CSS grid directly */}
				<div style={ gridStyle }>
					<InnerBlocks
						allowedBlocks={ ALLOWED }
						template={ DEFAULT_TEMPLATE }
						templateLock={ false }
					/>
				</div>
			</div>
		</>
	);
}
