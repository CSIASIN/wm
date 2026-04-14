import { __ } from '@wordpress/i18n';
import { useBlockProps, InspectorControls, InnerBlocks, BlockControls } from '@wordpress/block-editor';
import { useSelect, useDispatch } from '@wordpress/data';
import { PanelBody, SelectControl, TextControl, ToggleControl, ToolbarGroup, ToolbarButton } from '@wordpress/components';
import './editor.scss';

// ── Option generators ────────────────────────────────────────────────────
const none = { label: '— None —', value: '' };

const gOpts = ( prefix ) => [
	none,
	...[ 0,1,2,3,4,5 ].map( n => ( { label: `g${prefix}-${n}`,  value: `g${prefix}-${n}` } ) ),
];
const gxOpts = ( prefix ) => [
	none,
	...[ 0,1,2,3,4,5 ].map( n => ( { label: `gx${prefix}-${n}`, value: `gx${prefix}-${n}` } ) ),
];
const gyOpts = ( prefix ) => [
	none,
	...[ 0,1,2,3,4,5 ].map( n => ( { label: `gy${prefix}-${n}`, value: `gy${prefix}-${n}` } ) ),
];

const rcOpts = ( prefix ) => [
	none,
	...[ 1,2,3,4,5,6,'auto' ].map( n => ( { label: `row-cols${prefix}-${n}`, value: `row-cols${prefix}-${n}` } ) ),
];

const JUSTIFY_OPTS = [
	none,
	...[ 'start','end','center','between','around','evenly' ].map( v => ( { label: `justify-content-${v}`, value: `justify-content-${v}` } ) ),
];
const ALIGN_OPTS = [
	none,
	...[ 'start','end','center','baseline','stretch' ].map( v => ( { label: `align-items-${v}`, value: `align-items-${v}` } ) ),
];

const BREAKPOINTS = [
	{ key: '',    label: 'Base',        hint: 'All sizes'  },
	{ key: 'Sm',  label: 'SM (≥576px)', hint: 'sm+'        },
	{ key: 'Md',  label: 'MD (≥768px)', hint: 'md+'        },
	{ key: 'Lg',  label: 'LG (≥992px)', hint: 'lg+'        },
	{ key: 'Xl',  label: 'XL (≥1200px)',hint: 'xl+'        },
	{ key: 'Xxl', label: 'XXL (≥1400px)',hint: 'xxl+'      },
];

const ALLOWED = [ 'wmblocks/grid-col' ];

// Gutter value → approximate px for visual bar width
const GUTTER_PX = { '0':'0px','1':'4px','2':'8px','3':'16px','4':'24px','5':'48px' };

export default function Edit( { attributes, setAttributes, clientId } ) {
	const {
		gutter,   gutterX,   gutterY,
		gutterSm, gutterXSm, gutterYSm,
		gutterMd, gutterXMd, gutterYMd,
		gutterLg, gutterXLg, gutterYLg,
		gutterXl, gutterXXl, gutterYXl,
		gutterXxl,gutterXXxl,gutterYXxl,
		rowCols, rowColsSm, rowColsMd, rowColsLg, rowColsXl, rowColsXxl,
		justifyContent, alignItems, noGutters, customClass,
	} = attributes;

	// Helper to get/set gutter attribute by breakpoint key + axis
	const getG  = ( bp, axis ) => attributes[ `gutter${ axis }${ bp }` ] || '';
	const setG  = ( bp, axis, v ) => setAttributes( { [ `gutter${ axis }${ bp }` ]: v } );

	const innerBlocks = useSelect( s => s( 'core/block-editor' ).getBlocks( clientId ), [ clientId ] );
	const { insertBlock } = useDispatch( 'core/block-editor' );
	const { createBlock } = wp.blocks;
	const addCol = () => insertBlock( createBlock( 'wmblocks/grid-col', { col: 'col' } ), undefined, clientId );

	// Build row class from all attributes
	const rowClass = [
		'row',
		noGutters ? 'g-0' : '',
		// Base gutters
		attributes.gutter  || '', attributes.gutterX  || '', attributes.gutterY  || '',
		// Responsive gutters
		...[ 'Sm','Md','Lg','Xl','Xxl' ].flatMap( bp => [
			attributes[ `gutter${bp}` ]   || '',
			attributes[ `gutterX${bp}` ]  || '',
			attributes[ `gutterY${bp}` ]  || '',
		] ),
		// Row cols
		rowCols || '', rowColsSm || '', rowColsMd || '', rowColsLg || '', rowColsXl || '', rowColsXxl || '',
		// Alignment
		justifyContent || '', alignItems || '',
		customClass || '',
	].filter( Boolean ).join( ' ' );

	// Determine active base gutter for preview
	const activeGutter = noGutters ? '0'
		: ( attributes.gutter  || '' ).replace( /^g-/, '' )
		|| ( attributes.gutterX || '' ).replace( /^gx-/, '' )
		|| '3';
	const previewGap = GUTTER_PX[ activeGutter ] || '16px';

	const blockProps = useBlockProps( { className: [ 'wmblocks-grid-row', rowClass ].filter(Boolean).join(' ') } );

	return (
		<>
			<BlockControls>
				<ToolbarGroup>
					<ToolbarButton icon="plus" label={ __( 'Add Column', 'wmblocks' ) } onClick={ addCol } />
					<div style={ { display:'flex', alignItems:'center', padding:'0 8px', gap:6, fontSize:12 } }>
						<span style={ { background:'#198754', color:'#fff', borderRadius:10, padding:'1px 7px', fontSize:11, fontWeight:600 } }>row</span>
						<span style={ { background:'#6c757d', color:'#fff', borderRadius:10, padding:'1px 7px', fontSize:11 } }>{ innerBlocks.length } cols</span>
						{ ! noGutters && ( attributes.gutter || attributes.gutterX ) && (
							<span style={ { background:'#fd7e14', color:'#fff', borderRadius:10, padding:'1px 7px', fontSize:11 } }>
								{ attributes.gutter || attributes.gutterX }
							</span>
						) }
					</div>
				</ToolbarGroup>
			</BlockControls>

			<InspectorControls>

				{ /* ── Gutters ──────────────────────────────────────────────── */ }
				<PanelBody title={ __( 'Gutters', 'wmblocks' ) } initialOpen={ true }>

					<ToggleControl
						label={ __( 'No Gutters (g-0)', 'wmblocks' ) }
						checked={ !! noGutters }
						onChange={ v => setAttributes( { noGutters: v } ) }
						help={ __( 'Removes all horizontal and vertical gutters.', 'wmblocks' ) }
					/>

					{ ! noGutters && (
						<>
							{ /* Visual gutter preview */ }
							<div style={ { margin:'10px 0 12px', padding:'10px', background:'#f8f9fa', borderRadius:4, border:'1px solid #e9ecef' } }>
								<div style={ { fontSize:10, color:'#6c757d', marginBottom:6, textTransform:'uppercase', letterSpacing:'0.5px', fontWeight:600 } }>{ __( 'Gutter Preview', 'wmblocks' ) }</div>
								<div style={ { display:'flex', gap:previewGap, background:'#dee2e6', padding:4, borderRadius:3 } }>
									{ [ 1,2,3 ].map( i => (
										<div key={i} style={ { flex:1, background:'#0d6efd', height:20, borderRadius:2, opacity:0.7 } } />
									) ) }
								</div>
								<div style={ { fontSize:10, color:'#6c757d', marginTop:4, textAlign:'center' } }>
									{ __( 'Column gap', 'wmblocks' ) }: { previewGap }
								</div>
							</div>

							{ /* Per-breakpoint gutter controls */ }
							{ BREAKPOINTS.map( ( { key, label, hint } ) => {
								const bpSuffix = key ? `-${ key.toLowerCase() }` : '';
								const gVal  = attributes[ `gutter${ key }` ]   || '';
								const gxVal = attributes[ `gutterX${ key }` ]  || '';
								const gyVal = attributes[ `gutterY${ key }` ]  || '';
								const hasAny = gVal || gxVal || gyVal;
								return (
									<div key={ key } style={ { marginBottom:12, padding:'8px 10px', border:'1px solid', borderColor: hasAny ? '#0d6efd' : '#e9ecef', borderRadius:4, background: hasAny ? '#f0f6ff' : '#fff' } }>
										<div style={ { display:'flex', alignItems:'center', justifyContent:'space-between', marginBottom:6 } }>
											<span style={ { fontSize:11, fontWeight:600, color: hasAny ? '#0d6efd' : '#555' } }>{ label }</span>
											<span style={ { fontSize:10, color:'#adb5bd', fontFamily:'monospace' } }>{ hint }</span>
											{ hasAny && (
												<button onMouseDown={ e => { e.preventDefault(); setAttributes( { [ `gutter${ key }` ]: '', [ `gutterX${ key }` ]: '', [ `gutterY${ key }` ]: '' } ); } }
													style={ { fontSize:10, padding:'1px 5px', border:'1px solid #fcc', borderRadius:3, background:'#fff5f5', color:'#c00', cursor:'pointer' } }
												>{ __( 'Clear', 'wmblocks' ) }</button>
											) }
										</div>
										{ /* Three selects in a row: g, gx, gy */ }
										<div style={ { display:'grid', gridTemplateColumns:'1fr 1fr 1fr', gap:4 } }>
											<div>
												<div style={ { fontSize:10, color:'#6c757d', marginBottom:2 } }>g{ bpSuffix }-*</div>
												<select value={ gVal } onChange={ e => setAttributes( { [ `gutter${ key }` ]: e.target.value } ) }
													style={ { width:'100%', fontSize:11, padding:'3px 4px', border:'1px solid #ccc', borderRadius:3 } }>
													{ gOpts( bpSuffix ).map( o => <option key={o.value} value={o.value}>{ o.label || '—' }</option> ) }
												</select>
											</div>
											<div>
												<div style={ { fontSize:10, color:'#6c757d', marginBottom:2 } }>gx{ bpSuffix }-*</div>
												<select value={ gxVal } onChange={ e => setAttributes( { [ `gutterX${ key }` ]: e.target.value } ) }
													style={ { width:'100%', fontSize:11, padding:'3px 4px', border:'1px solid #ccc', borderRadius:3 } }>
													{ gxOpts( bpSuffix ).map( o => <option key={o.value} value={o.value}>{ o.label || '—' }</option> ) }
												</select>
											</div>
											<div>
												<div style={ { fontSize:10, color:'#6c757d', marginBottom:2 } }>gy{ bpSuffix }-*</div>
												<select value={ gyVal } onChange={ e => setAttributes( { [ `gutterY${ key }` ]: e.target.value } ) }
													style={ { width:'100%', fontSize:11, padding:'3px 4px', border:'1px solid #ccc', borderRadius:3 } }>
													{ gyOpts( bpSuffix ).map( o => <option key={o.value} value={o.value}>{ o.label || '—' }</option> ) }
												</select>
											</div>
										</div>
									</div>
								);
							} ) }
						</>
					) }
				</PanelBody>

				{ /* ── Row Columns ──────────────────────────────────────────── */ }
				<PanelBody title={ __( 'Row Columns (row-cols-*)', 'wmblocks' ) } initialOpen={ false }>
					<p style={ { fontSize:11, color:'#6c757d', margin:'0 0 8px' } }>
						{ __( 'Set how many columns appear per row at each breakpoint. Overrides individual col-* widths.', 'wmblocks' ) }
					</p>
					{ [ ['',    'Base'],  ['-sm','SM+'], ['-md','MD+'], ['-lg','LG+'], ['-xl','XL+'], ['-xxl','XXL+'] ].map( ( [ sfx, lbl ] ) => {
						const key = sfx ? sfx.slice(1).charAt(0).toUpperCase() + sfx.slice(2) : '';
						const attrKey = `rowCols${ key }`;
						return (
							<SelectControl key={ sfx }
								label={ lbl }
								value={ attributes[ attrKey ] || '' }
								options={ rcOpts( sfx ) }
								onChange={ v => setAttributes( { [ attrKey ]: v } ) }
							/>
						);
					} ) }
				</PanelBody>

				{ /* ── Alignment ──────────────────────────────────────────────── */ }
				<PanelBody title={ __( 'Alignment', 'wmblocks' ) } initialOpen={ false }>
					<SelectControl label={ __( 'Justify Content', 'wmblocks' ) } value={ justifyContent } options={ JUSTIFY_OPTS } onChange={ v => setAttributes( { justifyContent: v } ) } />
					<SelectControl label={ __( 'Align Items',     'wmblocks' ) } value={ alignItems }     options={ ALIGN_OPTS }   onChange={ v => setAttributes( { alignItems: v } ) } />
					<TextControl   label={ __( 'Extra Classes',   'wmblocks' ) } value={ customClass }                             onChange={ v => setAttributes( { customClass: v } ) } />
				</PanelBody>

			</InspectorControls>

			<div { ...blockProps }>
				{ /* Class badge */ }
				<div style={ { fontSize:10, fontFamily:'monospace', color:'#198754', marginBottom:4, background:'#f0fdf4', padding:'2px 2px', borderRadius:4, display:'inline-block', border:'1px solid #c3e6cb', wordBreak:'break-all' } }>
					{ rowClass }
				</div>

				<InnerBlocks
					allowedBlocks={ ALLOWED }
					template={ [ [ 'wmblocks/grid-col', { col: 'col' } ], [ 'wmblocks/grid-col', { col: 'col' } ] ] }
					templateLock={ false }
					renderAppender={ false }
				/>

				<button onMouseDown={ e => { e.preventDefault(); addCol(); } }
					style={ { marginTop:6, padding:'4px 12px', border:'1px dashed #198754', borderRadius:4, background:'transparent', color:'#198754', fontSize:12, cursor:'pointer' } }>
					+ { __( 'Add Column', 'wmblocks' ) }
				</button>
			</div>
		</>
	);
}
