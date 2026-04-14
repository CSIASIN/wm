import { __ } from '@wordpress/i18n';
import { useBlockProps, InspectorControls, RichText } from '@wordpress/block-editor';
import { PanelBody, TextControl } from '@wordpress/components';
import './editor.scss';

const uid = () => 'b' + Math.random().toString( 36 ).slice( 2, 7 );

export default function Edit( { attributes, setAttributes } ) {
	const { items, ariaLabel } = attributes;
	const blockProps = useBlockProps( { className: 'wmblocks-bc-wrapper wmblocks-bc-default' } );

	function updateItem( id, patch ) {
		setAttributes( { items: items.map( it => it.id === id ? { ...it, ...patch } : it ) } );
	}
	function addItem() {
		const newItem = { id: uid(), label: 'New page', url: '#' };
		// Insert before last item, then swap last to become active
		const next = [ ...items.slice( 0, -1 ), newItem, items[ items.length - 1 ] ];
		setAttributes( { items: next } );
	}
	function removeItem( id ) {
		if ( items.length <= 1 ) return;
		setAttributes( { items: items.filter( it => it.id !== id ) } );
	}
	function moveItem( id, dir ) {
		const idx = items.findIndex( it => it.id === id );
		const arr = [ ...items ];
		const swap = idx + dir;
		if ( swap < 0 || swap >= arr.length ) return;
		[ arr[ idx ], arr[ swap ] ] = [ arr[ swap ], arr[ idx ] ];
		setAttributes( { items: arr } );
	}

	const lastIdx = items.length - 1;

	return (
		<>
			<InspectorControls>
				<PanelBody title={ __( 'Accessibility', 'wmblocks' ) } initialOpen={ true }>
					<TextControl
						label={ __( 'aria-label for <nav>', 'wmblocks' ) }
						value={ ariaLabel }
						onChange={ v => setAttributes( { ariaLabel: v } ) }
						help={ __( 'Describes the breadcrumb navigation to screen readers.', 'wmblocks' ) }
					/>
				</PanelBody>
				<PanelBody title={ __( 'Items', 'wmblocks' ) } initialOpen={ true }>
					{ items.map( ( item, idx ) => (
						<div key={ item.id } style={ { marginBottom: '10px', padding: '8px', background: '#f8f9fa', borderRadius: '4px', border: idx === lastIdx ? '1px solid #0d6efd' : '1px solid #dee2e6' } }>
							<div style={ { fontSize: '10px', fontWeight: 700, color: idx === lastIdx ? '#0d6efd' : '#888', marginBottom: '4px', textTransform: 'uppercase' } }>
								{ idx === lastIdx ? __( '★ Active (current page)', 'wmblocks' ) : `Item ${ idx + 1 }` }
							</div>
							<TextControl
								label={ __( 'Label', 'wmblocks' ) }
								value={ item.label }
								onChange={ v => updateItem( item.id, { label: v } ) }
								hideLabelFromVision
								placeholder={ __( 'Label', 'wmblocks' ) }
							/>
							{ idx !== lastIdx && (
								<TextControl
									label={ __( 'URL', 'wmblocks' ) }
									value={ item.url }
									onChange={ v => updateItem( item.id, { url: v } ) }
									hideLabelFromVision
									placeholder="https://"
								/>
							) }
						</div>
					) ) }
				</PanelBody>
			</InspectorControls>

			<div { ...blockProps }>
				{/* Meta strip */}
				<div className="wmblocks-bc-meta">
					<span className="wmblocks-bc-chip wmblocks-bc-chip--blue">Breadcrumb</span>
					<span className="wmblocks-bc-chip">Default  /  divider</span>
					<span className="wmblocks-bc-chip">{ items.length } items</span>
				</div>

				{/* Live breadcrumb preview */}
				<nav aria-label={ ariaLabel } className="wmblocks-bc-preview">
					<ol className="breadcrumb mb-0">
						{ items.map( ( item, idx ) => {
							const isLast = idx === lastIdx;
							return (
								<li key={ item.id } className={ 'breadcrumb-item' + ( isLast ? ' active' : '' ) }>
									{ /* Inline editable label */ }
									<RichText
										tagName={ isLast ? 'span' : 'a' }
										href={ ! isLast ? ( item.url || '#' ) : undefined }
										value={ item.label }
										onChange={ v => updateItem( item.id, { label: v } ) }
										allowedFormats={ [] }
										placeholder={ __( 'Label…', 'wmblocks' ) }
										onClick={ e => e.preventDefault() }
									/>

									{ /* Per-item controls */ }
									<span className="wmblocks-bc-item-controls">
										<button onClick={ () => moveItem( item.id, -1 ) } disabled={ idx === 0 } title="←">←</button>
										<button onClick={ () => moveItem( item.id, 1  ) } disabled={ isLast }  title="→">→</button>
										{ ! isLast && (
											<span className="wmblocks-bc-url-wrap">
												<input
													type="url"
													className="wmblocks-bc-url-input"
													value={ item.url }
													onChange={ e => updateItem( item.id, { url: e.target.value } ) }
													placeholder="URL"
												/>
											</span>
										) }
										<button
											className="wmblocks-bc-remove"
											onClick={ () => removeItem( item.id ) }
											disabled={ items.length <= 1 }
											title="Remove"
										>✕</button>
									</span>
								</li>
							);
						} ) }
					</ol>
				</nav>

				{/* Add item + hint */}
				<div className="wmblocks-bc-footer">
					<button className="wmblocks-bc-add-btn" onClick={ addItem }>
						+ { __( 'Add item before active', 'wmblocks' ) }
					</button>
					<span className="wmblocks-bc-hint">{ __( 'Last item = active page · click label to edit · ← → to reorder', 'wmblocks' ) }</span>
				</div>
			</div>
		</>
	);
}
