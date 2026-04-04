import { __ } from '@wordpress/i18n';
import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, TextControl } from '@wordpress/components';
import { useState, useRef } from '@wordpress/element';
import './editor.scss';

const VARIANTS = [
	{ label: 'Primary',   value: 'bg-primary',   color: '#0d6efd' },
	{ label: 'Secondary', value: 'bg-secondary',  color: '#6c757d' },
	{ label: 'Success',   value: 'bg-success',    color: '#198754' },
	{ label: 'Danger',    value: 'bg-danger',     color: '#dc3545' },
	{ label: 'Warning',   value: 'bg-warning',    color: '#ffc107' },
	{ label: 'Info',      value: 'bg-info',       color: '#0dcaf0' },
	{ label: 'Light',     value: 'bg-light',      color: '#f8f9fa' },
	{ label: 'Dark',      value: 'bg-dark',       color: '#212529' },
];

// Single bar editor row — inline drag + all options
function BarRow( { bar, index, total, onUpdate, onRemove, onMove, onAdd } ) {
	const trackRef  = useRef( null );
	const isDragging = useRef( false );

	const variant = VARIANTS.find( v => v.value === bar.variant ) || VARIANTS[ 0 ];
	const textColor = ( bar.variant === 'bg-warning' || bar.variant === 'bg-light' ) ? '#000' : '#fff';

	// Drag to set value
	const calcValue = ( e ) => {
		if ( ! trackRef.current ) return;
		const rect = trackRef.current.getBoundingClientRect();
		const pct  = Math.round( Math.min( 100, Math.max( 0, ( ( e.clientX - rect.left ) / rect.width ) * 100 ) ) );
		onUpdate( 'value', pct );
	};

	const onMouseDown = ( e ) => {
		// Only trigger on left mouse button
		if ( e.button !== undefined && e.button !== 0 ) return;
		e.preventDefault();
		isDragging.current = true;
		calcValue( e );

		const onMove = ( ev ) => {
			if ( isDragging.current ) calcValue( ev );
		};

		const stopDrag = () => {
			isDragging.current = false;
			trackRef.current?.removeEventListener( 'pointermove', onMove );
			trackRef.current?.releasePointerCapture( e.pointerId );
		};

		// Use pointer capture — keeps events flowing to this element even when
		// mouse leaves it, and auto-releases on pointerup anywhere
		trackRef.current?.setPointerCapture( e.pointerId );
		trackRef.current?.addEventListener( 'pointermove',    onMove );
		trackRef.current?.addEventListener( 'pointerup',      stopDrag, { once: true } );
		trackRef.current?.addEventListener( 'pointercancel',  stopDrag, { once: true } );
	};

	return (
		<div style={ { marginBottom: '12px', border: '1px solid #e2e8f0', borderRadius: '6px', overflow: 'hidden' } }>

			{ /* ── Progress bar — drag handle ── */ }
			<div
				ref={ trackRef }
				onPointerDown={ onMouseDown }
				style={ { position: 'relative', height: '28px', background: '#e9ecef', cursor: 'ew-resize', userSelect: 'none' } }
				title={ __( 'Drag to set value', 'wmblocks' ) }
			>
				{ /* Filled bar */ }
				<div style={ {
					position: 'absolute', left: 0, top: 0, bottom: 0,
					width: bar.value + '%',
					background: bar.striped
						? `repeating-linear-gradient(45deg, rgba(255,255,255,0.15) 0px, rgba(255,255,255,0.15) 10px, transparent 10px, transparent 20px), ${ variant.color }`
						: variant.color,
					transition: isDragging.current ? 'none' : 'width 0.2s',
					display: 'flex', alignItems: 'center', justifyContent: 'center',
					overflow: 'hidden',
				} }>
					{ bar.showLabel && (
						<span
							contentEditable suppressContentEditableWarning
							onMouseDown={ ( e ) => e.stopPropagation() }
							onInput={ ( e ) => onUpdate( 'label', e.currentTarget.textContent ) }
							onKeyDown={ ( e ) => e.key === 'Enter' && ( e.preventDefault(), e.currentTarget.blur() ) }
							style={ { fontSize: '12px', fontWeight: 600, color: textColor, outline: 'none', cursor: 'text', minWidth: '20px', textAlign: 'center', padding: '0 4px' } }
						>
							{ bar.label || ( bar.value + '%' ) }
						</span>
					) }
				</div>

				{ /* Value badge */ }
				<div style={ {
					position: 'absolute', right: '6px', top: '50%', transform: 'translateY(-50%)',
					fontSize: '11px', fontWeight: 700, color: '#444', background: 'rgba(255,255,255,0.85)',
					borderRadius: '3px', padding: '1px 5px', pointerEvents: 'none',
				} }>
					{ bar.value }%
				</div>
			</div>

			{ /* ── Controls row ── */ }
			<div style={ { display: 'flex', alignItems: 'center', gap: '8px', padding: '8px 10px', background: '#fafafa', flexWrap: 'wrap' } }>

				{ /* Value input */ }
				<div style={ { display: 'flex', alignItems: 'center', gap: '4px' } }>
					<span style={ { fontSize: '11px', color: '#666' } }>{ __( 'Value', 'wmblocks' ) }</span>
					<input
						type="number" min="0" max="100"
						value={ bar.value }
						onChange={ ( e ) => onUpdate( 'value', Math.min( 100, Math.max( 0, parseInt( e.target.value ) || 0 ) ) ) }
						style={ { width: '52px', fontSize: '12px', padding: '3px 5px', border: '1px solid #ccc', borderRadius: '4px', outline: 'none' } }
					/>
					<span style={ { fontSize: '11px', color: '#666' } }>%</span>
				</div>

				{ /* Color swatches */ }
				<div style={ { display: 'flex', gap: '4px', alignItems: 'center' } }>
					{ VARIANTS.map( v => (
						<button
							key={ v.value }
							title={ v.label }
							onMouseDown={ ( e ) => { e.preventDefault(); onUpdate( 'variant', v.value ); } }
							style={ {
								width: '18px', height: '18px', borderRadius: '50%',
								background: v.color,
								border: bar.variant === v.value ? '3px solid #007cba' : '2px solid rgba(0,0,0,0.15)',
								cursor: 'pointer', padding: 0, outline: 'none',
								boxSizing: 'border-box',
							} }
						/>
					) ) }
				</div>

				{ /* Toggles */ }
				<div style={ { display: 'flex', gap: '8px', fontSize: '11px', color: '#555', marginLeft: 'auto' } }>
					{ [
						[ 'Striped',   'striped',   bar.striped   ],
						[ 'Animated',  'animated',  bar.animated  ],
						[ 'Label',     'showLabel', bar.showLabel ],
					].map( ( [ label, key, checked ] ) => (
						<label key={ key } style={ { display: 'flex', alignItems: 'center', gap: '3px', cursor: 'pointer', userSelect: 'none' } }
							onMouseDown={ ( e ) => { e.preventDefault(); e.stopPropagation(); onUpdate( key, ! checked ); } }
						>
							<span style={ {
								display: 'inline-block', width: '13px', height: '13px',
								border: '1px solid #999', borderRadius: '2px',
								background: checked ? '#007cba' : '#fff',
								flexShrink: 0,
							} }>
								{ checked && <span style={ { display: 'block', textAlign: 'center', lineHeight: '12px', fontSize: '10px', color: '#fff' } }>✓</span> }
							</span>
							{ __( label, 'wmblocks' ) }
						</label>
					) ) }
				</div>

				{ /* Actions */ }
				<div style={ { display: 'flex', gap: '4px' } }>
					<button onMouseDown={ ( e ) => { e.preventDefault(); onMove( -1 ); } } disabled={ index === 0 }          title={ __( 'Move Up', 'wmblocks' ) }   style={ btnStyle( index === 0 ) }>↑</button>
					<button onMouseDown={ ( e ) => { e.preventDefault(); onMove(  1 ); } } disabled={ index === total - 1 }  title={ __( 'Move Down', 'wmblocks' ) } style={ btnStyle( index === total - 1 ) }>↓</button>
					<button onMouseDown={ ( e ) => { e.preventDefault(); onRemove(); } } title={ __( 'Remove bar', 'wmblocks' ) } style={ { ...btnStyle( false ), borderColor: '#fcc', background: '#fff5f5', color: '#c00' } }>✕</button>
				</div>
			</div>
		</div>
	);
}

const btnStyle = ( disabled ) => ( {
	fontSize: '12px', padding: '3px 7px',
	border: '1px solid #ddd', borderRadius: '3px',
	background: '#f8f9fa', cursor: disabled ? 'not-allowed' : 'pointer',
	opacity: disabled ? 0.4 : 1, color: '#333',
} );

// ── Main block ────────────────────────────────────────────────────────────────
export default function Edit( { attributes, setAttributes } ) {
	const { bars, height } = attributes;

	const updateBar = ( i, key, val ) =>
		setAttributes( { bars: bars.map( ( b, idx ) => idx === i ? { ...b, [ key ]: val } : b ) } );

	const addBar = () =>
		setAttributes( { bars: [ ...bars, { value: 50, label: '', showLabel: false, variant: 'bg-primary', striped: false, animated: false } ] } );

	const removeBar = ( i ) =>
		setAttributes( { bars: bars.filter( ( _, idx ) => idx !== i ) } );

	const moveBar = ( i, dir ) => {
		const arr = [ ...bars ], t = i + dir;
		if ( t < 0 || t >= arr.length ) return;
		[ arr[ i ], arr[ t ] ] = [ arr[ t ], arr[ i ] ];
		setAttributes( { bars: arr } );
	};

	const blockProps = useBlockProps( { className: 'wmblocks-progress-wrapper' } );

	return (
		<>
			<InspectorControls>
				<PanelBody title={ __( 'Progress Settings', 'wmblocks' ) } initialOpen={ true }>
					<TextControl
						label={ __( 'Height', 'wmblocks' ) }
						value={ height }
						onChange={ ( v ) => setAttributes( { height: v } ) }
						placeholder="e.g. 20px"
						help={ __( 'Leave empty for Bootstrap default (~1rem). Applies to all bars.', 'wmblocks' ) }
					/>
				</PanelBody>
			</InspectorControls>

			<div { ...blockProps }>
				{ /* Stacked label */ }
				{ bars.length > 1 && (
					<div style={ { fontSize: '11px', color: '#757575', marginBottom: '6px', fontStyle: 'italic' } }>
						{ __( 'Stacked progress — bars share one track on frontend', 'wmblocks' ) }
					</div>
				) }

				{ /* Bar editors */ }
				{ bars.map( ( bar, i ) => (
					<BarRow
						key={ i }
						bar={ bar }
						index={ i }
						total={ bars.length }
						onUpdate={ ( key, val ) => updateBar( i, key, val ) }
						onRemove={ () => removeBar( i ) }
						onMove={   ( dir ) => moveBar( i, dir ) }
					/>
				) ) }

				{ /* Add bar */ }
				<button
					onMouseDown={ ( e ) => { e.preventDefault(); addBar(); } }
					style={ { width: '100%', padding: '8px', border: '1px dashed #ccc', borderRadius: '6px', background: 'transparent', color: '#007cba', fontSize: '13px', cursor: 'pointer', marginTop: '4px' } }
				>
					+ { __( 'Add bar', 'wmblocks' ) }
				</button>
			</div>
		</>
	);
}