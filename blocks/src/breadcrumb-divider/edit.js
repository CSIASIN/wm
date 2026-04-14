import { __ } from '@wordpress/i18n';
import { useBlockProps, InspectorControls, RichText } from '@wordpress/block-editor';
import { PanelBody, TextControl } from '@wordpress/components';
import './editor.scss';

const uid = () => 'b' + Math.random().toString( 36 ).slice( 2, 7 );

const PRESET_DIVIDERS = [
	{ label: '/',  value: '/'  },
	{ label: '>',  value: '>'  },
	{ label: '»',  value: '»' },
	{ label: '›',  value: '›' },
	{ label: '•',  value: '•'  },
	{ label: '|',  value: '|'  },
	{ label: '~',  value: '~'  },
	{ label: '-',  value: '-'  },
	{ label: '→',  value: '→' },
	{ label: '✦',  value: '✦' },
];

export default function Edit( { attributes, setAttributes } ) {
	const { items, divider, customDivider, ariaLabel } = attributes;
	const blockProps = useBlockProps( { className: 'wmblocks-bc-wrapper wmblocks-bc-divider' } );

	const activeDivider = customDivider || divider;

	function updateItem( id, patch ) {
		setAttributes( { items: items.map( it => it.id === id ? { ...it, ...patch } : it ) } );
	}
	function addItem() {
		const newItem = { id: uid(), label: 'New page', url: '#' };
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
				<PanelBody title={ __( 'Divider', 'wmblocks' ) } initialOpen={ true }>
					<p style={ { fontSize: '11px', color: '#555', marginTop: 0 } }>
						{ __( 'Divider is set via --bs-breadcrumb-divider CSS custom property on the <nav> element.', 'wmblocks' ) }
					</p>
					<TextControl
						label={ __( 'Custom divider character', 'wmblocks' ) }
						value={ customDivider }
						onChange={ v => setAttributes( { customDivider: v } ) }
						placeholder={ __( 'e.g. → or any character', 'wmblocks' ) }
						help={ __( 'Overrides preset. Leave empty to use the preset above.', 'wmblocks' ) }
					/>
				</PanelBody>
				<PanelBody title={ __( 'Accessibility', 'wmblocks' ) } initialOpen={ false }>
					<TextControl
						label={ __( 'aria-label', 'wmblocks' ) }
						value={ ariaLabel }
						onChange={ v => setAttributes( { ariaLabel: v } ) }
					/>
				</PanelBody>
			</InspectorControls>

			<div { ...blockProps }>
				<div className="wmblocks-bc-meta">
					<span className="wmblocks-bc-chip wmblocks-bc-chip--purple">Breadcrumb</span>
					<span className="wmblocks-bc-chip">Custom divider</span>
					<span className="wmblocks-bc-chip" style={ { fontFamily: 'monospace', fontSize: '13px', letterSpacing: 0 } }>
						"{ activeDivider }"
					</span>
					<span className="wmblocks-bc-chip">{ items.length } items</span>
				</div>

				{/* Divider quick-pick */}
				<div className="wmblocks-bc-divider-preview">
					<span className="label">{ __( 'Divider:', 'wmblocks' ) }</span>
					{ PRESET_DIVIDERS.map( p => (
						<button key={ p.value }
							className={ 'wmblocks-bc-div-btn' + ( divider === p.value && ! customDivider ? ' is-active' : '' ) }
							onClick={ () => setAttributes( { divider: p.value, customDivider: '' } ) }
						>{ p.label }</button>
					) ) }
					{ customDivider && (
						<span style={ { fontSize: '11px', color: '#7952b3', fontWeight: 700 } }>
							✓ Custom: "{ customDivider }"
						</span>
					) }
				</div>

				{/* Live breadcrumb preview with the selected divider shown inline */}
				<nav aria-label={ ariaLabel } className="wmblocks-bc-preview"
					style={ { '--bs-breadcrumb-divider': `'${ activeDivider }'` } }
				>
					<ol className="breadcrumb mb-0">
						{ items.map( ( item, idx ) => {
							const isLast = idx === lastIdx;
							return (
								<li key={ item.id } className={ 'breadcrumb-item' + ( isLast ? ' active' : '' ) }>
									<RichText
										tagName={ isLast ? 'span' : 'a' }
										href={ ! isLast ? ( item.url || '#' ) : undefined }
										value={ item.label }
										onChange={ v => updateItem( item.id, { label: v } ) }
										allowedFormats={ [] }
										placeholder={ __( 'Label…', 'wmblocks' ) }
										onClick={ e => e.preventDefault() }
									/>
									<span className="wmblocks-bc-item-controls">
										<button onClick={ () => moveItem( item.id, -1 ) } disabled={ idx === 0 }>←</button>
										<button onClick={ () => moveItem( item.id,  1 ) } disabled={ isLast }>→</button>
										{ ! isLast && (
											<span className="wmblocks-bc-url-wrap">
												<input type="url" className="wmblocks-bc-url-input"
													value={ item.url }
													onChange={ e => updateItem( item.id, { url: e.target.value } ) }
													placeholder="URL"
												/>
											</span>
										) }
										<button className="wmblocks-bc-remove"
											onClick={ () => removeItem( item.id ) }
											disabled={ items.length <= 1 }
										>✕</button>
									</span>
								</li>
							);
						} ) }
					</ol>
				</nav>

				<div className="wmblocks-bc-footer">
					<button className="wmblocks-bc-add-btn" onClick={ addItem }>
						+ { __( 'Add item', 'wmblocks' ) }
					</button>
					<span className="wmblocks-bc-hint">{ __( 'Last item = active page · click label to edit', 'wmblocks' ) }</span>
				</div>
			</div>
		</>
	);
}
