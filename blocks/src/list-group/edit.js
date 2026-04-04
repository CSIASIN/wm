import { __ } from '@wordpress/i18n';
import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, ToggleControl, SelectControl } from '@wordpress/components';
import { useState, useRef, useEffect } from '@wordpress/element';
import './editor.scss';

const VARIANTS = [
	{ label: '— Default —',  value: '' },
	{ label: 'Primary',      value: 'list-group-item-primary' },
	{ label: 'Secondary',    value: 'list-group-item-secondary' },
	{ label: 'Success',      value: 'list-group-item-success' },
	{ label: 'Danger',       value: 'list-group-item-danger' },
	{ label: 'Warning',      value: 'list-group-item-warning' },
	{ label: 'Info',         value: 'list-group-item-info' },
	{ label: 'Light',        value: 'list-group-item-light' },
	{ label: 'Dark',         value: 'list-group-item-dark' },
];

const BADGE_VARIANTS = [
	{ label: 'Primary',   value: 'text-bg-primary' },
	{ label: 'Secondary', value: 'text-bg-secondary' },
	{ label: 'Success',   value: 'text-bg-success' },
	{ label: 'Danger',    value: 'text-bg-danger' },
	{ label: 'Warning',   value: 'text-bg-warning' },
	{ label: 'Info',      value: 'text-bg-info' },
	{ label: 'Light',     value: 'text-bg-light' },
	{ label: 'Dark',      value: 'text-bg-dark' },
];

const HORIZONTAL_OPTIONS = [
	{ label: '— Off —',  value: '' },
	{ label: 'Always',   value: 'list-group-horizontal' },
	{ label: 'From SM',  value: 'list-group-horizontal-sm' },
	{ label: 'From MD',  value: 'list-group-horizontal-md' },
	{ label: 'From LG',  value: 'list-group-horizontal-lg' },
	{ label: 'From XL',  value: 'list-group-horizontal-xl' },
	{ label: 'From XXL', value: 'list-group-horizontal-xxl' },
];

// ── Popover rendered as a sibling to the list, not inside the item ──────────
function ItemPopover( { item, index, itemType, onUpdate, onMove, onRemove, onClose, totalItems } ) {
	const ref = useRef( null );

	// Close on outside click
	useEffect( () => {
		const handler = ( e ) => {
			if ( ref.current && ! ref.current.contains( e.target ) ) onClose();
		};
		// Delay so the same click that opens doesn't immediately close
		const timer = setTimeout( () => document.addEventListener( 'mousedown', handler ), 100 );
		return () => { clearTimeout( timer ); document.removeEventListener( 'mousedown', handler ); };
	}, [] );

	const field = ( label, value, onChange, placeholder = '', type = 'text', width = '100%' ) => (
		<div style={ { display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' } }>
			<span style={ { fontSize: '11px', color: '#555', width: '64px', flexShrink: 0 } }>{ label }</span>
			<input
				type={ type }
				value={ value }
				onChange={ ( e ) => onChange( e.target.value ) }
				placeholder={ placeholder }
				style={ { width, fontSize: '12px', padding: '4px 6px', border: '1px solid #ccc', borderRadius: '4px', outline: 'none', flex: 1 } }
			/>
		</div>
	);

	return (
		<div
			ref={ ref }
			onMouseDown={ ( e ) => e.stopPropagation() }
			style={ {
				background: '#fff', border: '1px solid #ddd',
				borderRadius: '4px', padding: '12px',
				minWidth: '300px', boxShadow: '0 4px 16px rgba(0,0,0,0.15)',
				marginTop: '2px',
			} }
		>
			{ /* URL — links only */ }
			{ itemType === 'a' && field( '🔗 URL', item.url, ( v ) => onUpdate( 'url', v ), 'https://', 'url' ) }

			{ /* Subtext */ }
			{ field( __( 'Subtext', 'wmblocks' ), item.subtext, ( v ) => onUpdate( 'subtext', v ), __( 'Optional subtitle…', 'wmblocks' ) ) }

			{ /* Badge */ }
			<div style={ { display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' } }>
				<span style={ { fontSize: '11px', color: '#555', width: '64px', flexShrink: 0 } }>{ __( 'Badge', 'wmblocks' ) }</span>
				<input
					type="text"
					value={ item.badge }
					onChange={ ( e ) => onUpdate( 'badge', e.target.value ) }
					placeholder={ __( 'e.g. 14', 'wmblocks' ) }
					style={ { width: '64px', fontSize: '12px', padding: '4px 6px', border: '1px solid #ccc', borderRadius: '4px', outline: 'none' } }
				/>
				{ item.badge && (
					<select
						value={ item.badgeVariant }
						onChange={ ( e ) => onUpdate( 'badgeVariant', e.target.value ) }
						style={ { flex: 1, fontSize: '12px', padding: '4px 6px', border: '1px solid #ccc', borderRadius: '4px' } }
					>
						{ BADGE_VARIANTS.map( opt => <option key={ opt.value } value={ opt.value }>{ opt.label }</option> ) }
					</select>
				) }
			</div>

			{ /* Color variant */ }
			<div style={ { display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' } }>
				<span style={ { fontSize: '11px', color: '#555', width: '64px', flexShrink: 0 } }>{ __( 'Color', 'wmblocks' ) }</span>
				<select
					value={ item.variant }
					onChange={ ( e ) => onUpdate( 'variant', e.target.value ) }
					style={ { flex: 1, fontSize: '12px', padding: '4px 6px', border: '1px solid #ccc', borderRadius: '4px' } }
				>
					{ VARIANTS.map( opt => <option key={ opt.value } value={ opt.value }>{ opt.label }</option> ) }
				</select>
			</div>

			{ /* Active / Disabled */ }
			<div style={ { display: 'flex', gap: '16px', marginBottom: '10px', fontSize: '12px' } }>
				<label style={ { display: 'flex', alignItems: 'center', gap: '4px', cursor: 'pointer' } }>
					<input type="checkbox" checked={ !! item.active }   onChange={ ( e ) => onUpdate( 'active',   e.target.checked ) } />
					{ __( 'Active', 'wmblocks' ) }
				</label>
				<label style={ { display: 'flex', alignItems: 'center', gap: '4px', cursor: 'pointer' } }>
					<input type="checkbox" checked={ !! item.disabled } onChange={ ( e ) => onUpdate( 'disabled', e.target.checked ) } />
					{ __( 'Disabled', 'wmblocks' ) }
				</label>
			</div>

			{ /* Actions */ }
			<div style={ { display: 'flex', gap: '6px', borderTop: '1px solid #eee', paddingTop: '8px' } }>
				{ [ [ '↑ Up', () => onMove( -1 ), index === 0 ], [ '↓ Down', () => onMove( 1 ), index === totalItems - 1 ] ].map( ( [ label, fn, dis ] ) => (
					<button key={ label } onMouseDown={ ( e ) => { e.preventDefault(); fn(); } } disabled={ dis }
						style={ { fontSize: '11px', padding: '3px 8px', border: '1px solid #ddd', borderRadius: '3px', background: '#f8f9fa', cursor: dis ? 'not-allowed' : 'pointer', opacity: dis ? 0.4 : 1 } }
					>{ label }</button>
				) ) }
				<button onMouseDown={ ( e ) => { e.preventDefault(); onRemove(); } }
					style={ { fontSize: '11px', padding: '3px 8px', border: '1px solid #fcc', borderRadius: '3px', background: '#fff5f5', color: '#c00', cursor: 'pointer', marginLeft: 'auto' } }
				>✕ { __( 'Remove', 'wmblocks' ) }</button>
			</div>
		</div>
	);
}

// ── Main block ────────────────────────────────────────────────────────────────
export default function Edit( { attributes, setAttributes } ) {
	const { itemType, flush, numbered, horizontal, items } = attributes;
	const [ selectedItem, setSelectedItem ] = useState( null );

	const Tag = numbered ? 'ol' : ( itemType === 'li' ? 'ul' : 'div' );

	const listClass = [ 'list-group', flush ? 'list-group-flush' : '', numbered ? 'list-group-numbered' : '', horizontal || '' ].filter( Boolean ).join( ' ' );

	const itemClass = ( item ) => [
		'list-group-item',
		itemType !== 'li' ? 'list-group-item-action' : '',
		item.variant || '',
		item.active   ? 'active'   : '',
		item.disabled ? 'disabled' : '',
	].filter( Boolean ).join( ' ' );

	const updateItem = ( i, key, val ) =>
		setAttributes( { items: items.map( ( item, idx ) => idx === i ? { ...item, [ key ]: val } : item ) } );

	const addItem = () => {
		const idx = items.length;
		setAttributes( { items: [ ...items, { text: 'New item', subtext: '', badge: '', badgeVariant: 'text-bg-primary', url: '', variant: '', active: false, disabled: false } ] } );
		setSelectedItem( idx );
	};

	const removeItem = ( i ) => { setAttributes( { items: items.filter( ( _, idx ) => idx !== i ) } ); setSelectedItem( null ); };

	const moveItem = ( i, dir ) => {
		const arr = [ ...items ], t = i + dir;
		if ( t < 0 || t >= arr.length ) return;
		[ arr[ i ], arr[ t ] ] = [ arr[ t ], arr[ i ] ];
		setAttributes( { items: arr } );
		setSelectedItem( t );
	};

	const blockProps = useBlockProps( { className: 'wmblocks-list-group-wrapper' } );

	return (
		<>
			<InspectorControls>
				<PanelBody title={ __( 'List Group Settings', 'wmblocks' ) } initialOpen={ true }>
					<SelectControl label={ __( 'Item Type', 'wmblocks' ) } value={ itemType }
						options={ [ { label: 'Plain list (li)', value: 'li' }, { label: 'Links (a)', value: 'a' }, { label: 'Buttons (button)', value: 'button' } ] }
						onChange={ ( v ) => setAttributes( { itemType: v } ) }
						help={ __( 'Links and buttons add list-group-item-action.', 'wmblocks' ) }
					/>
					<ToggleControl label={ __( 'Flush',      'wmblocks' ) } checked={ !! flush }    onChange={ ( v ) => setAttributes( { flush: v } ) }    help={ __( 'Remove borders and rounded corners.', 'wmblocks' ) } />
					<ToggleControl label={ __( 'Numbered',   'wmblocks' ) } checked={ !! numbered } onChange={ ( v ) => setAttributes( { numbered: v } ) } help={ __( 'Auto-numbered items via CSS counter.', 'wmblocks' ) } />
					<SelectControl label={ __( 'Horizontal', 'wmblocks' ) } value={ horizontal }    options={ HORIZONTAL_OPTIONS } onChange={ ( v ) => setAttributes( { horizontal: v } ) } />
				</PanelBody>
			</InspectorControls>

			<div { ...blockProps }>
				<Tag className={ listClass }>
					{ items.map( ( item, i ) => {
						const ItemTag  = itemType === 'li' ? 'li' : itemType === 'a' ? 'a' : 'button';
						const hasBadge = !! item.badge;
						const hasSub   = !! item.subtext;

						return (
							<ItemTag
								key={ i }
								className={ itemClass( item ) }
								{ ...( itemType === 'a'      ? { href: item.url || '#' }  : {} ) }
								{ ...( itemType === 'button' ? { type: 'button' }          : {} ) }
								{ ...( item.active           ? { 'aria-current': 'true' }  : {} ) }
								{ ...( item.disabled && itemType === 'a'      ? { 'aria-disabled': 'true' } : {} ) }
								{ ...( item.disabled && itemType === 'button' ? { disabled: true }          : {} ) }
								style={ { cursor: 'default', outline: selectedItem === i ? '2px solid #007cba' : 'none', outlineOffset: '-2px' } }
								onMouseDown={ ( e ) => {
									// Only toggle selection if clicking the item itself, not a contentEditable child
									if ( e.target.contentEditable === 'true' ) return;
									e.preventDefault();
									setSelectedItem( selectedItem === i ? null : i );
								} }
							>
								{ hasSub || hasBadge ? (
									<div className="d-flex justify-content-between align-items-start">
										<div className="ms-2 me-auto">
											<div
												className="fw-bold"
												contentEditable suppressContentEditableWarning
												onMouseDown={ ( e ) => e.stopPropagation() }
												onInput={ ( e ) => updateItem( i, 'text', e.currentTarget.textContent ) }
												onKeyDown={ ( e ) => e.key === 'Enter' && ( e.preventDefault(), e.currentTarget.blur() ) }
												style={ { outline: 'none', cursor: 'text', minWidth: '40px' } }
											>{ item.text }</div>
											{ hasSub && (
												<span contentEditable suppressContentEditableWarning
													onMouseDown={ ( e ) => e.stopPropagation() }
													onInput={ ( e ) => updateItem( i, 'subtext', e.currentTarget.textContent ) }
													style={ { outline: 'none', cursor: 'text', fontSize: '13px', display: 'block' } }
												>{ item.subtext }</span>
											) }
										</div>
										{ hasBadge && <span className={ 'badge rounded-pill ' + item.badgeVariant }>{ item.badge }</span> }
									</div>
								) : (
									<div className="d-flex justify-content-between align-items-center">
										<span contentEditable suppressContentEditableWarning
											onMouseDown={ ( e ) => e.stopPropagation() }
											onInput={ ( e ) => updateItem( i, 'text', e.currentTarget.textContent ) }
											onKeyDown={ ( e ) => e.key === 'Enter' && ( e.preventDefault(), e.currentTarget.blur() ) }
											style={ { outline: 'none', cursor: 'text', flex: 1, minWidth: '40px' } }
										>{ item.text }</span>
										{ hasBadge && <span className={ 'badge rounded-pill ' + item.badgeVariant }>{ item.badge }</span> }
									</div>
								) }
							</ItemTag>
						);
					} ) }

					{ /* Add item */ }
					<li className="list-group-item"
						style={ { background: 'transparent', border: '1px dashed #ccc', cursor: 'pointer', color: '#007cba', fontSize: '13px', textAlign: 'center' } }
						onMouseDown={ ( e ) => { e.preventDefault(); addItem(); } }
					>
						+ { __( 'Add item', 'wmblocks' ) }
					</li>
				</Tag>

				{ /* Popover rendered OUTSIDE the list so it's not inside a clickable ItemTag */ }
				{ selectedItem !== null && items[ selectedItem ] && (
					<ItemPopover
						item={ items[ selectedItem ] }
						index={ selectedItem }
						itemType={ itemType }
						totalItems={ items.length }
						onUpdate={ ( key, val ) => updateItem( selectedItem, key, val ) }
						onMove={ ( dir ) => moveItem( selectedItem, dir ) }
						onRemove={ () => removeItem( selectedItem ) }
						onClose={ () => setSelectedItem( null ) }
					/>
				) }
			</div>
		</>
	);
}