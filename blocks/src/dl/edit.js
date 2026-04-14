import { __ } from '@wordpress/i18n';
import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, TextControl, ToggleControl, SelectControl } from '@wordpress/components';
import './editor.scss';

const DT_COL_OPTS = [
	{ label: 'col-sm-2',  value: 'col-sm-2' },
	{ label: 'col-sm-3',  value: 'col-sm-3' },
	{ label: 'col-sm-4',  value: 'col-sm-4' },
	{ label: 'col-sm-5',  value: 'col-sm-5' },
	{ label: 'col-md-2',  value: 'col-md-2' },
	{ label: 'col-md-3',  value: 'col-md-3' },
	{ label: 'col-md-4',  value: 'col-md-4' },
];

const DD_COL_OPTS = [
	{ label: 'col-sm-10', value: 'col-sm-10' },
	{ label: 'col-sm-9',  value: 'col-sm-9' },
	{ label: 'col-sm-8',  value: 'col-sm-8' },
	{ label: 'col-sm-7',  value: 'col-sm-7' },
	{ label: 'col-md-10', value: 'col-md-10' },
	{ label: 'col-md-9',  value: 'col-md-9' },
	{ label: 'col-md-8',  value: 'col-md-8' },
];

export default function Edit( { attributes, setAttributes } ) {
	const { aligned, dtCol, ddCol, items, customClass } = attributes;

	const updateItem = ( i, key, val ) =>
		setAttributes( { items: items.map( ( item, idx ) => idx === i ? { ...item, [ key ]: val } : item ) } );

	const addItem = () =>
		setAttributes( { items: [ ...items, { term: 'New term', desc: 'New description' } ] } );

	const removeItem = ( i ) =>
		setAttributes( { items: items.filter( ( _, idx ) => idx !== i ) } );

	const moveItem = ( i, dir ) => {
		const arr = [ ...items ];
		const t = i + dir;
		if ( t < 0 || t >= arr.length ) return;
		[ arr[ i ], arr[ t ] ] = [ arr[ t ], arr[ i ] ];
		setAttributes( { items: arr } );
	};

	const blockProps = useBlockProps( { className: 'wmblocks-bs-dl-wrapper' } );

	return (
		<>
			<InspectorControls>
				<PanelBody title={ __( 'Description List', 'wmblocks' ) } initialOpen={ true }>
					<ToggleControl
						label={ __( 'Horizontal / Aligned', 'wmblocks' ) }
						checked={ !! aligned }
						onChange={ v => setAttributes( { aligned: v } ) }
						help={ __( 'Uses Bootstrap row layout to align dt and dd side by side.', 'wmblocks' ) }
					/>
					{ aligned && (
						<>
							<SelectControl
								label={ __( 'Term column (dt)', 'wmblocks' ) }
								value={ dtCol }
								options={ DT_COL_OPTS }
								onChange={ v => setAttributes( { dtCol: v } ) }
							/>
							<SelectControl
								label={ __( 'Description column (dd)', 'wmblocks' ) }
								value={ ddCol }
								options={ DD_COL_OPTS }
								onChange={ v => setAttributes( { ddCol: v } ) }
							/>
						</>
					) }
					<TextControl
						label={ __( 'Extra Classes', 'wmblocks' ) }
						value={ customClass }
						onChange={ v => setAttributes( { customClass: v } ) }
					/>
				</PanelBody>
			</InspectorControls>

			<div { ...blockProps }>

				{ /* Mode badge */ }
				<div style={ { display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 } }>
					<code style={ { fontSize: 10, background: '#f8f9fa', border: '1px solid #dee2e6', padding: '2px 7px', borderRadius: 3, color: '#6c757d' } }>
						{ aligned ? `row > dt.${ dtCol } + dd.${ ddCol }` : 'dl (stacked)' }
					</code>
					{ /* Quick toggle on canvas */ }
					<button
						onMouseDown={ e => { e.preventDefault(); setAttributes( { aligned: ! aligned } ); } }
						style={ { fontSize: 11, padding: '2px 8px', border: '1px solid #007cba', borderRadius: 3, background: aligned ? '#007cba' : '#fff', color: aligned ? '#fff' : '#007cba', cursor: 'pointer' } }
					>
						{ aligned ? __( '⇔ Horizontal', 'wmblocks' ) : __( '↕ Stacked', 'wmblocks' ) }
					</button>
				</div>

				{ /* DL preview */ }
				<dl className={ customClass || undefined }>
					{ items.map( ( item, i ) => (
						<div
							key={ i }
							className={ aligned ? 'row' : undefined }
							style={ { marginBottom: aligned ? 4 : 8, position: 'relative' } }
						>
							{ /* Term */ }
							<dt
								className={ aligned ? dtCol : undefined }
								contentEditable
								suppressContentEditableWarning
								onInput={ e => updateItem( i, 'term', e.currentTarget.textContent ) }
								onKeyDown={ e => e.key === 'Enter' && e.preventDefault() }
								style={ { outline: 'none', cursor: 'text', fontWeight: 600 } }
							>
								{ item.term }
							</dt>

							{ /* Description */ }
							<dd
								className={ aligned ? ddCol : undefined }
								contentEditable
								suppressContentEditableWarning
								onInput={ e => updateItem( i, 'desc', e.currentTarget.textContent ) }
								onKeyDown={ e => e.key === 'Enter' && e.preventDefault() }
								style={ { outline: 'none', cursor: 'text', marginBottom: 0, color: '#555' } }
							>
								{ item.desc }
							</dd>

							{ /* Row actions */ }
							<div className="wmblocks-dl-row-actions">
								<button onMouseDown={ e => { e.preventDefault(); moveItem( i, -1 ); } } disabled={ i === 0 }
									style={ { fontSize: 10, padding: '1px 4px', border: '1px solid #ddd', borderRadius: 2, background: '#f8f9fa', cursor: i === 0 ? 'not-allowed' : 'pointer', opacity: i === 0 ? 0.3 : 1 } }>↑</button>
								<button onMouseDown={ e => { e.preventDefault(); moveItem( i, 1 ); } } disabled={ i === items.length - 1 }
									style={ { fontSize: 10, padding: '1px 4px', border: '1px solid #ddd', borderRadius: 2, background: '#f8f9fa', cursor: i === items.length - 1 ? 'not-allowed' : 'pointer', opacity: i === items.length - 1 ? 0.3 : 1 } }>↓</button>
								<button onMouseDown={ e => { e.preventDefault(); removeItem( i ); } }
									style={ { fontSize: 10, padding: '1px 4px', border: '1px solid #fcc', borderRadius: 2, background: '#fff5f5', color: '#c00', cursor: 'pointer' } }>✕</button>
							</div>
						</div>
					) ) }
				</dl>

				{ /* Add pair */ }
				<button
					onMouseDown={ e => { e.preventDefault(); addItem(); } }
					style={ { marginTop: 6, fontSize: 12, padding: '4px 12px', border: '1px dashed #007cba', borderRadius: 4, background: 'transparent', color: '#007cba', cursor: 'pointer' } }
				>
					+ { __( 'Add term / description pair', 'wmblocks' ) }
				</button>
			</div>
		</>
	);
}
