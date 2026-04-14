import { __ } from '@wordpress/i18n';
import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, TextControl, ButtonGroup, Button } from '@wordpress/components';
import { useRef, useEffect } from '@wordpress/element';
import './editor.scss';

export default function Edit( { attributes, setAttributes } ) {
	const { listStyle, items, customClass } = attributes;
	const newItemRef = useRef( null );

	const updateItem = ( i, text ) =>
		setAttributes( { items: items.map( ( item, idx ) => idx === i ? { ...item, text } : item ) } );

	const addItem = () => {
		setAttributes( { items: [ ...items, { text: '' } ] } );
		// Focus new item after render
		setTimeout( () => newItemRef.current?.focus(), 50 );
	};

	const removeItem = ( i ) =>
		setAttributes( { items: items.filter( ( _, idx ) => idx !== i ) } );

	const moveItem = ( i, dir ) => {
		const arr = [ ...items ];
		const t = i + dir;
		if ( t < 0 || t >= arr.length ) return;
		[ arr[ i ], arr[ t ] ] = [ arr[ t ], arr[ i ] ];
		setAttributes( { items: arr } );
	};

	const listClass = [ 'list-unstyled', listStyle === 'list-inline' ? 'list-inline' : '' ]
		.filter( ( c, i, a ) => {
			// list-inline replaces list-unstyled, list-unstyled is standalone
			if ( listStyle === 'list-inline' ) return c === 'list-inline';
			return c === 'list-unstyled';
		} )
		.filter( Boolean )
		.concat( customClass ? [ customClass ] : [] )
		.join( ' ' );

	const isInline = listStyle === 'list-inline';

	const blockProps = useBlockProps( { className: 'wmblocks-bs-list-wrapper' } );

	return (
		<>
			<InspectorControls>
				<PanelBody title={ __( 'List Style', 'wmblocks' ) } initialOpen={ true }>
					<TextControl
						label={ __( 'Extra Classes', 'wmblocks' ) }
						value={ customClass }
						onChange={ v => setAttributes( { customClass: v } ) }
					/>
				</PanelBody>
			</InspectorControls>

			<div { ...blockProps }>

				{ /* Style toggle — on canvas */ }
				<div style={ { display: 'flex', gap: 6, marginBottom: 10 } }>
					<ButtonGroup>
						<Button
							variant={ listStyle === 'list-unstyled' ? 'primary' : 'secondary' }
							size="small"
							onClick={ () => setAttributes( { listStyle: 'list-unstyled' } ) }
						>
							{ __( 'Unstyled', 'wmblocks' ) }
						</Button>
						<Button
							variant={ listStyle === 'list-inline' ? 'primary' : 'secondary' }
							size="small"
							onClick={ () => setAttributes( { listStyle: 'list-inline' } ) }
						>
							{ __( 'Inline', 'wmblocks' ) }
						</Button>
					</ButtonGroup>
					<code style={ { fontSize: 10, color: '#6c757d', alignSelf: 'center', background: '#f8f9fa', padding: '2px 6px', borderRadius: 3 } }>
						.{ listStyle }{ isInline ? ' > .list-inline-item' : '' }
					</code>
				</div>

				{ /* List preview */ }
				<ul className={ listClass } style={ { marginBottom: 0 } }>
					{ items.map( ( item, i ) => (
						<li
							key={ i }
							className={ isInline ? 'list-inline-item' : '' }
							style={ { position: 'relative', display: isInline ? 'inline-block' : 'flex', alignItems: 'center', gap: 4, marginBottom: isInline ? 0 : 2 } }
						>
							{ /* Editable text */ }
							<span
								contentEditable
								suppressContentEditableWarning
								ref={ i === items.length - 1 ? newItemRef : null }
								onInput={ e => updateItem( i, e.currentTarget.textContent ) }
								onKeyDown={ e => {
									if ( e.key === 'Enter' ) { e.preventDefault(); addItem(); }
									if ( e.key === 'Backspace' && e.currentTarget.textContent === '' ) {
										e.preventDefault();
										removeItem( i );
									}
								} }
								style={ { outline: 'none', cursor: 'text', minWidth: 40, flex: isInline ? undefined : 1 } }
							>
								{ item.text }
							</span>

							{ /* Item actions — shown on hover via CSS */ }
							{ ! isInline && (
								<span className="wmblocks-list-item-actions">
									<button onMouseDown={ e => { e.preventDefault(); moveItem( i, -1 ); } } disabled={ i === 0 }
										style={ { fontSize: 10, padding: '1px 4px', border: '1px solid #ddd', borderRadius: 2, background: '#f8f9fa', cursor: i === 0 ? 'not-allowed' : 'pointer', opacity: i === 0 ? 0.3 : 1 } }>↑</button>
									<button onMouseDown={ e => { e.preventDefault(); moveItem( i, 1 ); } } disabled={ i === items.length - 1 }
										style={ { fontSize: 10, padding: '1px 4px', border: '1px solid #ddd', borderRadius: 2, background: '#f8f9fa', cursor: i === items.length - 1 ? 'not-allowed' : 'pointer', opacity: i === items.length - 1 ? 0.3 : 1 } }>↓</button>
									<button onMouseDown={ e => { e.preventDefault(); removeItem( i ); } }
										style={ { fontSize: 10, padding: '1px 4px', border: '1px solid #fcc', borderRadius: 2, background: '#fff5f5', color: '#c00', cursor: 'pointer' } }>✕</button>
								</span>
							) }
						</li>
					) ) }

					{ /* Add item button as last li */ }
					<li className={ isInline ? 'list-inline-item' : '' }
						style={ { display: isInline ? 'inline-block' : 'block', marginTop: isInline ? 0 : 4 } }>
						<button
							onMouseDown={ e => { e.preventDefault(); addItem(); } }
							style={ { fontSize: 12, padding: '2px 8px', border: '1px dashed #007cba', borderRadius: 3, background: 'transparent', color: '#007cba', cursor: 'pointer' } }
						>
							+ { __( 'Add item', 'wmblocks' ) }
						</button>
					</li>
				</ul>

				<div style={ { fontSize: 10, color: '#adb5bd', marginTop: 6, fontStyle: 'italic' } }>
					{ __( 'Click any item to edit. Press Enter to add, Backspace on empty to remove.', 'wmblocks' ) }
				</div>
			</div>
		</>
	);
}
