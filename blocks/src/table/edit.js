import { __ } from '@wordpress/i18n';
import {
	useBlockProps,
	InspectorControls,
	BlockControls,
	RichText,
} from '@wordpress/block-editor';
import {
	PanelBody,
	PanelRow,
	SelectControl,
	ToggleControl,
	TextControl,
	ToolbarGroup,
	ToolbarButton,
	Button,
} from '@wordpress/components';
import { useState, useRef } from '@wordpress/element';
import './editor.scss';

// ── Constants ──────────────────────────────────────────────────────────────
const CELL_COLOURS = [
	{ label: 'None',      value: '',              hex: 'transparent', border: '#dee2e6' },
	{ label: 'Primary',   value: 'table-primary',  hex: '#cfe2ff',     border: '#9ec5fe' },
	{ label: 'Secondary', value: 'table-secondary',hex: '#e2e3e5',     border: '#c4c8cb' },
	{ label: 'Success',   value: 'table-success',  hex: '#d1e7dd',     border: '#a3cfbb' },
	{ label: 'Danger',    value: 'table-danger',   hex: '#f8d7da',     border: '#f1aeb5' },
	{ label: 'Warning',   value: 'table-warning',  hex: '#fff3cd',     border: '#ffe69c' },
	{ label: 'Info',      value: 'table-info',     hex: '#cff4fc',     border: '#9eeaf9' },
	{ label: 'Light',     value: 'table-light',    hex: '#f8f9fa',     border: '#dee2e6' },
	{ label: 'Dark',      value: 'table-dark',     hex: '#212529',     border: '#373b3e' },
	{ label: 'Active',    value: 'table-active',   hex: '#e9ecef',     border: '#dee2e6' },
];

const TABLE_VARIANTS = [
	{ label: 'Default',   value: '' },
	{ label: 'Primary',   value: 'table-primary'   },
	{ label: 'Secondary', value: 'table-secondary' },
	{ label: 'Success',   value: 'table-success'   },
	{ label: 'Danger',    value: 'table-danger'    },
	{ label: 'Warning',   value: 'table-warning'   },
	{ label: 'Info',      value: 'table-info'      },
	{ label: 'Light',     value: 'table-light'     },
	{ label: 'Dark',      value: 'table-dark'      },
];

const HEAD_VARIANTS = [
	{ label: 'Default',   value: '' },
	{ label: 'Dark',      value: 'table-dark'  },
	{ label: 'Light',     value: 'table-light' },
	{ label: 'Primary',   value: 'table-primary' },
	{ label: 'Secondary', value: 'table-secondary' },
	{ label: 'Success',   value: 'table-success' },
	{ label: 'Danger',    value: 'table-danger' },
	{ label: 'Warning',   value: 'table-warning' },
	{ label: 'Info',      value: 'table-info' },
];

const RESPONSIVE_OPTIONS = [
	{ label: 'None',                value: ''    },
	{ label: 'Always (xs+)',         value: 'responsive' },
	{ label: 'SM breakpoint',       value: 'responsive-sm' },
	{ label: 'MD breakpoint',       value: 'responsive-md' },
	{ label: 'LG breakpoint',       value: 'responsive-lg' },
	{ label: 'XL breakpoint',       value: 'responsive-xl' },
	{ label: 'XXL breakpoint',      value: 'responsive-xxl' },
];

const ALIGN_OPTIONS = [
	{ label: 'Default', value: '' },
	{ label: 'Left',    value: 'text-start' },
	{ label: 'Center',  value: 'text-center' },
	{ label: 'Right',   value: 'text-end' },
];

const BORDER_COLOURS = [
	{ label: 'Default',   value: '' },
	{ label: 'Primary',   value: 'border-primary'   },
	{ label: 'Secondary', value: 'border-secondary' },
	{ label: 'Success',   value: 'border-success'   },
	{ label: 'Danger',    value: 'border-danger'    },
	{ label: 'Warning',   value: 'border-warning'   },
	{ label: 'Info',      value: 'border-info'      },
	{ label: 'Dark',      value: 'border-dark'      },
	{ label: 'Light',     value: 'border-light'     },
];

const VALIGN_OPTIONS = [
	{ label: 'Default', value: ''       },
	{ label: 'Top',     value: 'align-top'    },
	{ label: 'Middle',  value: 'align-middle' },
	{ label: 'Bottom',  value: 'align-bottom' },
];

// ── ID helpers ─────────────────────────────────────────────────────────────
function uid( prefix = 'c' ) {
	return prefix + Math.random().toString( 36 ).slice( 2, 7 );
}

function newCell( tag = 'td', content = '' ) {
	return { id: uid(), content, tag, colour: '', align: '' };
}

function newRow( colCount = 4, isHead = false ) {
	return {
		id: uid( 'r' ),
		colour: '',
		cells: Array.from( { length: colCount }, () =>
			newCell( isHead ? 'th' : 'td', '' )
		),
	};
}

// ── Colour hex lookup ──────────────────────────────────────────────────────
function cellColourHex( value ) {
	return CELL_COLOURS.find( ( c ) => c.value === value )?.hex || 'transparent';
}

// ── Edit component ─────────────────────────────────────────────────────────
export default function Edit( { attributes, setAttributes } ) {
	const {
		head, body, foot, caption, captionSide, showHead, showFoot,
		tableVariant, headVariant, striped, stripedColumns, hover,
		bordered, borderColour, borderless, small, responsive, verticalAlign, divider,
	} = attributes;

	// Selected cell — { section: 'head'|'body'|'foot', rowIdx, cellIdx }
	const [ selected, setSelected ] = useState( null );
	// Whether the cell options popover is visible
	const [ showCellOpts, setShowCellOpts ] = useState( false );

	const blockProps = useBlockProps( { className: 'wmblocks-table-wrapper' } );

	const colCount = ( head[ 0 ]?.cells?.length ) || ( body[ 0 ]?.cells?.length ) || 4;

	// ── Section helpers ──────────────────────────────────────────────
	function getSection( section ) {
		return section === 'head' ? head : section === 'foot' ? foot : body;
	}

	function setSection( section, newData ) {
		if ( section === 'head' ) setAttributes( { head: newData } );
		else if ( section === 'foot' ) setAttributes( { foot: newData } );
		else setAttributes( { body: newData } );
	}

	// ── Cell content update ───────────────────────────────────────────
	function updateCell( section, rowIdx, cellIdx, patch ) {
		const rows = getSection( section ).map( ( row, ri ) =>
			ri !== rowIdx ? row : {
				...row,
				cells: row.cells.map( ( cell, ci ) =>
					ci !== cellIdx ? cell : { ...cell, ...patch }
				),
			}
		);
		setSection( section, rows );
	}

	// ── Row colour update ─────────────────────────────────────────────
	function updateRowColour( section, rowIdx, colour ) {
		const rows = getSection( section ).map( ( row, ri ) =>
			ri !== rowIdx ? row : { ...row, colour }
		);
		setSection( section, rows );
	}

	// ── Add / Remove row ──────────────────────────────────────────────
	function addRow( section, after = null ) {
		const rows    = getSection( section );
		const isHead  = section === 'head';
		const newR    = newRow( colCount, isHead );
		let   updated;
		if ( after === null ) {
			updated = [ ...rows, newR ];
		} else {
			updated = [ ...rows ];
			updated.splice( after + 1, 0, newR );
		}
		setSection( section, updated );
	}

	function removeRow( section, rowIdx ) {
		const rows = getSection( section );
		if ( rows.length <= 1 && section === 'body' ) return; // keep at least 1 body row
		setSection( section, rows.filter( ( _, i ) => i !== rowIdx ) );
		setSelected( null );
	}

	function moveRow( section, rowIdx, dir ) {
		const rows = [ ...getSection( section ) ];
		const swap = rowIdx + dir;
		if ( swap < 0 || swap >= rows.length ) return;
		[ rows[ rowIdx ], rows[ swap ] ] = [ rows[ swap ], rows[ rowIdx ] ];
		setSection( section, rows );
	}

	// ── Add / Remove column ───────────────────────────────────────────
	function addColumn( after = null ) {
		const insertCell = ( cells, isHead ) => {
			const tag  = isHead ? 'th' : 'td';
			const cell = newCell( tag, '' );
			if ( after === null ) return [ ...cells, cell ];
			const next = [ ...cells ];
			next.splice( after + 1, 0, cell );
			return next;
		};
		setAttributes( {
			head: head.map( ( r ) => ( { ...r, cells: insertCell( r.cells, true  ) } ) ),
			body: body.map( ( r ) => ( { ...r, cells: insertCell( r.cells, false ) } ) ),
			foot: foot.map( ( r ) => ( { ...r, cells: insertCell( r.cells, false ) } ) ),
		} );
	}

	function removeColumn( cellIdx ) {
		if ( colCount <= 1 ) return;
		const rm = ( rows ) => rows.map( ( r ) => ( {
			...r,
			cells: r.cells.filter( ( _, ci ) => ci !== cellIdx ),
		} ) );
		setAttributes( { head: rm( head ), body: rm( body ), foot: rm( foot ) } );
		setSelected( null );
	}

	// ── Toggle th/td ──────────────────────────────────────────────────
	function toggleCellTag( section, rowIdx, cellIdx ) {
		const cell = getSection( section )[ rowIdx ]?.cells[ cellIdx ];
		if ( ! cell ) return;
		updateCell( section, rowIdx, cellIdx, { tag: cell.tag === 'th' ? 'td' : 'th' } );
	}

	// ── Selected cell accessors ────────────────────────────────────────
	const selCell = selected
		? getSection( selected.section )?.[ selected.rowIdx ]?.cells?.[ selected.cellIdx ]
		: null;

	const selRow = selected
		? getSection( selected.section )?.[ selected.rowIdx ]
		: null;

	// ── Build table class string for preview ──────────────────────────
	const tableClass = [
		'table',
		tableVariant,
		striped        ? 'table-striped'         : '',
		stripedColumns ? 'table-striped-columns'  : '',
		hover          ? 'table-hover'            : '',
		bordered       ? 'table-bordered'         : '',
		borderColour   && bordered ? borderColour : '',
		borderless     ? 'table-borderless'       : '',
		small          ? 'table-sm'               : '',
		verticalAlign  || '',
	].filter( Boolean ).join( ' ' );

	// ── Render a section (head / body / foot) ─────────────────────────
	const renderSection = ( section, rows, isHead = false, isFoot = false ) => {
		if ( ! rows || rows.length === 0 ) return null;

		return rows.map( ( row, rowIdx ) => {
			const rowColour = row.colour ? cellColourHex( row.colour ) : '';
			const isLastRow = rowIdx === rows.length - 1;

			return (
				<tr key={ row.id } style={ rowColour ? { background: rowColour } : {} }>
					{ row.cells.map( ( cell, cellIdx ) => {
						const isSel  = selected?.section === section && selected.rowIdx === rowIdx && selected.cellIdx === cellIdx;
						const Tag    = cell.tag || ( isHead ? 'th' : 'td' );
						const bgHex  = cellColourHex( cell.colour );

						return (
							<Tag
								key={ cell.id }
								scope={ Tag === 'th' ? ( isHead ? 'col' : 'row' ) : undefined }
								className={ [ cell.colour, cell.align ].filter( Boolean ).join( ' ' ) }
								style={ {
									background:   bgHex !== 'transparent' ? bgHex : undefined,
									outline:      isSel ? '2px solid #0d6efd' : undefined,
									outlineOffset: isSel ? '-2px' : undefined,
									position:     'relative',
									cursor:       'text',
									minWidth:     '60px',
									padding:      '6px 8px',
								} }
								onClick={ () => {
									setSelected( { section, rowIdx, cellIdx } );
									setShowCellOpts( false );
								} }
							>
								{/* Editable cell content — native contenteditable via RichText */}
								<RichText
									tagName="span"
									value={ cell.content }
									onChange={ ( v ) => updateCell( section, rowIdx, cellIdx, { content: v } ) }
									allowedFormats={ [ 'core/bold', 'core/italic', 'core/link', 'core/code' ] }
									placeholder={ isHead ? __( 'Header', 'wmblocks' ) : '—' }
									style={ { display: 'block', minWidth: '40px', outline: 'none' } }
								/>
							</Tag>
						);
					} ) }

					{/* Row action column */}
					<td className="wmblocks-table-row-actions" style={ { padding: '0 4px', border: 'none', verticalAlign: 'middle', whiteSpace: 'nowrap' } }>
						<div className="wmblocks-table-row-action-group">
							<button className="wmblocks-table-action" onClick={ () => moveRow( section, rowIdx, -1 ) } disabled={ rowIdx === 0 } title="Move up">↑</button>
							<button className="wmblocks-table-action" onClick={ () => moveRow( section, rowIdx, 1 ) } disabled={ isLastRow } title="Move down">↓</button>
							<button className="wmblocks-table-action" onClick={ () => addRow( section, rowIdx ) } title="Insert row below">+</button>
							<button className="wmblocks-table-action wmblocks-table-action--danger" onClick={ () => removeRow( section, rowIdx ) }
								disabled={ rows.length <= 1 && section === 'body' } title="Remove row">✕</button>
						</div>
					</td>
				</tr>
			);
		} );
	};

	return (
		<>
			{/* ── Toolbar ───────────────────────────────────────────── */}
			<BlockControls>
				<ToolbarGroup>
					<ToolbarButton icon="table-row-before" label={ __( 'Add row above', 'wmblocks' ) }
						onClick={ () => {
							const rowIdx = selected?.section === 'body' ? selected.rowIdx : null;
							if ( rowIdx !== null && rowIdx > 0 ) addRow( 'body', rowIdx - 1 );
							else addRow( 'body', null );
						} }
					/>
					<ToolbarButton icon="table-row-after" label={ __( 'Add row below', 'wmblocks' ) }
						onClick={ () => {
							const rowIdx = selected?.section === 'body' ? selected.rowIdx : body.length - 1;
							addRow( 'body', rowIdx );
						} }
					/>
					<ToolbarButton icon="table-row-delete" label={ __( 'Remove row', 'wmblocks' ) }
						onClick={ () => {
							if ( selected?.section === 'body' ) removeRow( 'body', selected.rowIdx );
						} }
						disabled={ ! selected || selected.section !== 'body' }
					/>
				</ToolbarGroup>
				<ToolbarGroup>
					<ToolbarButton icon="table-col-before" label={ __( 'Add column before', 'wmblocks' ) }
						onClick={ () => {
							const ci = selected?.cellIdx ?? null;
							if ( ci !== null && ci > 0 ) addColumn( ci - 1 );
							else addColumn( 0 );
						} }
					/>
					<ToolbarButton icon="table-col-after" label={ __( 'Add column after', 'wmblocks' ) }
						onClick={ () => addColumn( selected?.cellIdx ?? colCount - 1 ) }
					/>
					<ToolbarButton icon="table-col-delete" label={ __( 'Remove column', 'wmblocks' ) }
						onClick={ () => { if ( selected ) removeColumn( selected.cellIdx ); } }
						disabled={ ! selected }
					/>
				</ToolbarGroup>
				<ToolbarGroup>
					<ToolbarButton
						label={ __( 'Toggle cell header (th/td)', 'wmblocks' ) }
						isPressed={ selCell?.tag === 'th' }
						onClick={ () => { if ( selected ) toggleCellTag( selected.section, selected.rowIdx, selected.cellIdx ); } }
						disabled={ ! selected }
					>TH</ToolbarButton>
				</ToolbarGroup>
				<ToolbarGroup>
					{ [ 'text-start', 'text-center', 'text-end' ].map( ( a ) => (
						<ToolbarButton key={ a }
							icon={ { 'text-start': 'editor-alignleft', 'text-center': 'editor-aligncenter', 'text-end': 'editor-alignright' }[ a ] }
							label={ a }
							isPressed={ selCell?.align === a }
							onClick={ () => {
								if ( selected ) updateCell( selected.section, selected.rowIdx, selected.cellIdx, { align: selCell?.align === a ? '' : a } );
							} }
							disabled={ ! selected }
						/>
					) ) }
				</ToolbarGroup>
				<ToolbarGroup>
					<ToolbarButton
						label={ __( 'Striped rows', 'wmblocks' ) }
						isPressed={ striped }
						onClick={ () => setAttributes( { striped: ! striped } ) }
					>≡ Stripe</ToolbarButton>
					<ToolbarButton
						label={ __( 'Hover rows', 'wmblocks' ) }
						isPressed={ hover }
						onClick={ () => setAttributes( { hover: ! hover } ) }
					>≈ Hover</ToolbarButton>
					<ToolbarButton
						label={ __( 'Bordered', 'wmblocks' ) }
						isPressed={ bordered }
						onClick={ () => setAttributes( { bordered: ! bordered } ) }
					>⊞ Border</ToolbarButton>
					<ToolbarButton
						label={ __( 'Small / compact', 'wmblocks' ) }
						isPressed={ small }
						onClick={ () => setAttributes( { small: ! small } ) }
					>SM</ToolbarButton>
				</ToolbarGroup>
			</BlockControls>

			{/* ── Inspector Controls ───────────────────────────────── */}
			<InspectorControls>

				{/* Table style */}
				<PanelBody title={ __( 'Table Style', 'wmblocks' ) } initialOpen={ true }>
					<SelectControl label={ __( 'Table Variant (colour)', 'wmblocks' ) }
						value={ tableVariant } options={ TABLE_VARIANTS }
						onChange={ ( v ) => setAttributes( { tableVariant: v } ) }
						help={ __( 'Applies a contextual colour to the entire table.', 'wmblocks' ) }
					/>
					<SelectControl label={ __( 'Head Variant', 'wmblocks' ) }
						value={ headVariant } options={ HEAD_VARIANTS }
						onChange={ ( v ) => setAttributes( { headVariant: v } ) }
						help={ __( 'Dark, light, or colour for the <thead> row.', 'wmblocks' ) }
					/>
					<PanelRow>
						<ToggleControl label={ __( 'Striped rows', 'wmblocks' ) } checked={ !! striped }
							onChange={ ( v ) => setAttributes( { striped: v } ) }
							help={ __( 'Adds zebra-striping to every other <tbody> row.', 'wmblocks' ) }
						/>
					</PanelRow>
					<PanelRow>
						<ToggleControl label={ __( 'Striped columns', 'wmblocks' ) } checked={ !! stripedColumns }
							onChange={ ( v ) => setAttributes( { stripedColumns: v } ) }
							help={ __( 'Adds zebra-striping to every other column.', 'wmblocks' ) }
						/>
					</PanelRow>
					<PanelRow>
						<ToggleControl label={ __( 'Hoverable rows', 'wmblocks' ) } checked={ !! hover }
							onChange={ ( v ) => setAttributes( { hover: v } ) }
							help={ __( 'Highlights rows on mouse-over.', 'wmblocks' ) }
						/>
					</PanelRow>
					<PanelRow>
						<ToggleControl label={ __( 'Small / compact', 'wmblocks' ) } checked={ !! small }
							onChange={ ( v ) => setAttributes( { small: v } ) }
							help={ __( 'Halves the cell padding.', 'wmblocks' ) }
						/>
					</PanelRow>
				</PanelBody>

				{/* Borders */}
				<PanelBody title={ __( 'Borders', 'wmblocks' ) } initialOpen={ false }>
					<PanelRow>
						<ToggleControl label={ __( 'Bordered', 'wmblocks' ) } checked={ !! bordered }
							onChange={ ( v ) => setAttributes( { bordered: v } ) }
							help={ __( 'Adds borders on all sides of the table and cells.', 'wmblocks' ) }
						/>
					</PanelRow>
					{ bordered && (
						<SelectControl label={ __( 'Border Colour', 'wmblocks' ) }
							value={ borderColour } options={ BORDER_COLOURS }
							onChange={ ( v ) => setAttributes( { borderColour: v } ) }
						/>
					) }
					<PanelRow>
						<ToggleControl label={ __( 'Borderless', 'wmblocks' ) } checked={ !! borderless }
							onChange={ ( v ) => setAttributes( { borderless: v } ) }
							help={ __( 'Removes all borders from the table and cells.', 'wmblocks' ) }
						/>
					</PanelRow>
				</PanelBody>

				{/* Caption & structure */}
				<PanelBody title={ __( 'Caption & Structure', 'wmblocks' ) } initialOpen={ false }>
					<TextControl label={ __( 'Caption', 'wmblocks' ) }
						value={ caption }
						onChange={ ( v ) => setAttributes( { caption: v } ) }
						placeholder={ __( 'Optional table caption…', 'wmblocks' ) }
					/>
					{ caption && (
						<SelectControl label={ __( 'Caption Position', 'wmblocks' ) }
							value={ captionSide }
							options={ [
								{ label: 'Bottom (default)', value: 'bottom' },
								{ label: 'Top',             value: 'top'    },
							] }
							onChange={ ( v ) => setAttributes( { captionSide: v } ) }
						/>
					) }
					<PanelRow>
						<ToggleControl label={ __( 'Show Header (<thead>)', 'wmblocks' ) } checked={ !! showHead }
							onChange={ ( v ) => setAttributes( { showHead: v } ) }
						/>
					</PanelRow>
					<PanelRow>
						<ToggleControl label={ __( 'Show Footer (<tfoot>)', 'wmblocks' ) } checked={ !! showFoot }
							onChange={ ( v ) => {
								setAttributes( { showFoot: v } );
								if ( v && foot.length === 0 ) {
									// Initialise foot with empty row matching column count
									setAttributes( { foot: [ newRow( colCount, false ) ] } );
								}
							} }
						/>
					</PanelRow>
					<PanelRow>
						<ToggleControl label={ __( 'Table group divider', 'wmblocks' ) } checked={ !! divider }
							onChange={ ( v ) => setAttributes( { divider: v } ) }
							help={ __( 'Adds a thick border above <tbody> (table-group-divider).', 'wmblocks' ) }
						/>
					</PanelRow>
				</PanelBody>

				{/* Responsive */}
				<PanelBody title={ __( 'Responsive', 'wmblocks' ) } initialOpen={ false }>
					<SelectControl label={ __( 'Responsive Wrapper', 'wmblocks' ) }
						value={ responsive } options={ RESPONSIVE_OPTIONS }
						onChange={ ( v ) => setAttributes( { responsive: v } ) }
						help={ __( 'Wraps the table in a scrollable container at the chosen breakpoint.', 'wmblocks' ) }
					/>
					<SelectControl label={ __( 'Vertical Alignment', 'wmblocks' ) }
						value={ verticalAlign } options={ VALIGN_OPTIONS }
						onChange={ ( v ) => setAttributes( { verticalAlign: v } ) }
						help={ __( 'Aligns cell content vertically across the whole table.', 'wmblocks' ) }
					/>
				</PanelBody>

				{/* Selected cell options */}
				<PanelBody title={
					selected
						? __( 'Selected Cell', 'wmblocks' ) + ' — ' + `[${ selected.section.toUpperCase() } R${ selected.rowIdx + 1 } C${ selected.cellIdx + 1 }]`
						: __( 'Selected Cell', 'wmblocks' )
				} initialOpen={ true }>
					{ ! selected ? (
						<p style={ { fontSize: '12px', color: '#aaa', fontStyle: 'italic', margin: 0 } }>
							{ __( 'Click any cell to select it.', 'wmblocks' ) }
						</p>
					) : (
						<>
							{/* Cell colour */}
							<p style={ { fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.05em', color: '#555', margin: '0 0 6px' } }>
								{ __( 'Cell colour', 'wmblocks' ) }
							</p>
							<div style={ { display: 'flex', flexWrap: 'wrap', gap: '5px', marginBottom: '12px' } }>
								{ CELL_COLOURS.map( ( c ) => (
									<button key={ c.value }
										title={ c.label }
										style={ {
											width: '24px', height: '24px', borderRadius: '50%', cursor: 'pointer', padding: 0,
											background:  c.hex === 'transparent' ? '#fff' : c.hex,
											border:      selCell?.colour === c.value ? '3px solid #0d6efd' : `1px solid ${ c.border }`,
											transform:   selCell?.colour === c.value ? 'scale(1.2)' : 'scale(1)',
											transition:  'all .12s',
										} }
										onClick={ () => updateCell( selected.section, selected.rowIdx, selected.cellIdx, { colour: c.value } ) }
									/>
								) ) }
							</div>

							{/* Row colour */}
							<p style={ { fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.05em', color: '#555', margin: '0 0 6px' } }>
								{ __( 'Row colour', 'wmblocks' ) }
							</p>
							<div style={ { display: 'flex', flexWrap: 'wrap', gap: '5px', marginBottom: '12px' } }>
								{ CELL_COLOURS.map( ( c ) => (
									<button key={ c.value }
										title={ c.label }
										style={ {
											width: '24px', height: '24px', borderRadius: '4px', cursor: 'pointer', padding: 0,
											background:  c.hex === 'transparent' ? '#fff' : c.hex,
											border:      selRow?.colour === c.value ? '3px solid #0d6efd' : `1px solid ${ c.border }`,
											transform:   selRow?.colour === c.value ? 'scale(1.2)' : 'scale(1)',
											transition:  'all .12s',
										} }
										onClick={ () => updateRowColour( selected.section, selected.rowIdx, c.value ) }
									/>
								) ) }
							</div>

							{/* Cell tag */}
							<p style={ { fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.05em', color: '#555', margin: '0 0 6px' } }>
								{ __( 'Cell tag', 'wmblocks' ) }
							</p>
							<div style={ { display: 'flex', gap: '6px', marginBottom: '12px' } }>
								{ [ 'td', 'th' ].map( ( tag ) => (
									<button key={ tag }
										style={ {
											padding: '3px 12px', border: '1px solid #dee2e6', borderRadius: '4px',
											background: selCell?.tag === tag ? '#0d6efd' : '#fff',
											color:      selCell?.tag === tag ? '#fff' : '#333',
											fontWeight: 700, fontSize: '12px', cursor: 'pointer',
											fontFamily: 'monospace',
										} }
										onClick={ () => toggleCellTag( selected.section, selected.rowIdx, selected.cellIdx ) }
									>{ `<${ tag }>` }</button>
								) ) }
							</div>

							{/* Cell alignment */}
							<SelectControl label={ __( 'Cell text align', 'wmblocks' ) }
								value={ selCell?.align || '' }
								options={ ALIGN_OPTIONS }
								onChange={ ( v ) => updateCell( selected.section, selected.rowIdx, selected.cellIdx, { align: v } ) }
							/>
						</>
					) }
				</PanelBody>

			</InspectorControls>

			{/* ══════════════════════════════════════════════════════════
			    EDITOR CANVAS
			══════════════════════════════════════════════════════════ */}
			<div { ...blockProps }>

				{/* ── Meta strip ─────────────────────────────────────── */}
				<div className="wmblocks-table-meta-strip">
					<span className="wmblocks-table-chip">Table</span>
					<span className="wmblocks-table-chip">{ colCount } cols</span>
					<span className="wmblocks-table-chip">{ body.length } rows</span>
					{ striped        && <span className="wmblocks-table-chip">striped</span> }
					{ stripedColumns && <span className="wmblocks-table-chip">striped cols</span> }
					{ hover          && <span className="wmblocks-table-chip">hover</span> }
					{ bordered       && <span className="wmblocks-table-chip">bordered</span> }
					{ borderless     && <span className="wmblocks-table-chip">borderless</span> }
					{ small          && <span className="wmblocks-table-chip">SM</span> }
					{ tableVariant   && <span className="wmblocks-table-chip">{ tableVariant }</span> }
					{ responsive     && <span className="wmblocks-table-chip">{ responsive }</span> }
					{ selected && (
						<span className="wmblocks-table-chip wmblocks-table-chip--selected">
							Selected: { selected.section.toUpperCase() } R{ selected.rowIdx + 1 } C{ selected.cellIdx + 1 }
						</span>
					) }
				</div>

				{/* ── Hint bar ─────────────────────────────────────────── */}
				<div className="wmblocks-table-hint-bar">
					<span>{ __( 'Click any cell to select · Type to edit · Row/column controls appear on hover · Cell options in sidebar →', 'wmblocks' ) }</span>
				</div>

				{/* ── Table ─────────────────────────────────────────────── */}
				<div className="wmblocks-table-scroll-wrap">
					<table className={ tableClass } style={ { marginBottom: 0 } }>

						{ caption && captionSide === 'top' && (
							<caption style={ { captionSide: 'top', padding: '8px 0 4px', fontStyle: 'italic', color: '#6c757d' } }>
								{ caption }
							</caption>
						) }

						{ showHead && head.length > 0 && (
							<thead className={ headVariant }>
								{ renderSection( 'head', head, true, false ) }
								<tr className="wmblocks-table-col-actions-row">
									{ head[ 0 ].cells.map( ( _, ci ) => (
										<th key={ ci } style={ { padding: '2px 4px', border: 'none', background: 'transparent' } }>
											<div className="wmblocks-table-col-action-group">
												<button className="wmblocks-table-action" onClick={ () => addColumn( ci - 1 ) } title="Add column before">←+</button>
												<button className="wmblocks-table-action" onClick={ () => addColumn( ci ) } title="Add column after">+→</button>
												<button className="wmblocks-table-action wmblocks-table-action--danger" onClick={ () => removeColumn( ci ) } title="Remove column" disabled={ colCount <= 1 }>✕</button>
											</div>
										</th>
									) ) }
									<th style={ { border: 'none' } } />
								</tr>
							</thead>
						) }

						<tbody className={ divider ? 'table-group-divider' : '' }>
							{ renderSection( 'body', body, false, false ) }
						</tbody>

						{ showFoot && foot.length > 0 && (
							<tfoot>
								{ renderSection( 'foot', foot, false, true ) }
							</tfoot>
						) }

						{ caption && captionSide !== 'top' && (
							<caption style={ { padding: '4px 0 8px', fontStyle: 'italic', color: '#6c757d' } }>
								{ caption }
							</caption>
						) }

					</table>
				</div>

				{/* ── Add row / column buttons ─────────────────────────── */}
				<div className="wmblocks-table-add-bar">
					<button className="wmblocks-table-add-btn" onClick={ () => addRow( 'body' ) }>
						+ { __( 'Add row', 'wmblocks' ) }
					</button>
					<button className="wmblocks-table-add-btn" onClick={ () => addColumn() }>
						+ { __( 'Add column', 'wmblocks' ) }
					</button>
					{ showFoot && (
						<button className="wmblocks-table-add-btn" onClick={ () => addRow( 'foot' ) }>
							+ { __( 'Add footer row', 'wmblocks' ) }
						</button>
					) }
				</div>

			</div>
		</>
	);
}
