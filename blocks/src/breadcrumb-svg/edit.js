import { __ } from '@wordpress/i18n';
import { useBlockProps, InspectorControls, RichText } from '@wordpress/block-editor';
import { PanelBody, TextControl } from '@wordpress/components';
import './editor.scss';

const uid = () => 'b' + Math.random().toString( 36 ).slice( 2, 7 );

// SVG divider shapes — rendered as preview SVGs in the picker
// and as data URIs in render.php
export const SVG_DIVIDERS = {
	arrow: {
		label: 'Arrow',
		preview: <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8"><path d="M2.5 0L1 1.5 3.5 4 1 6.5 2.5 8l4-4-4-4z" fill="currentColor"/></svg>,
		// URL-encoded path for CSS data URI (< > # must be encoded)
		path: 'M2.5 0L1 1.5 3.5 4 1 6.5 2.5 8l4-4-4-4z',
		w: 8, h: 8,
	},
	chevron: {
		label: 'Chevron',
		preview: <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10"><path d="M3 1l4 4-4 4" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg>,
		path: 'M3 1l4 4-4 4',
		w: 10, h: 10,
		useStroke: true,
	},
	double: {
		label: 'Double ›',
		preview: <svg xmlns="http://www.w3.org/2000/svg" width="12" height="8" viewBox="0 0 12 8"><path d="M1 0L4 4 1 8M6 0l3 4-3 4" stroke="currentColor" strokeWidth="1.3" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg>,
		path: 'M1 0L4 4 1 8M6 0l3 4-3 4',
		w: 12, h: 8,
		useStroke: true,
	},
	slash: {
		label: 'Slash',
		preview: <svg xmlns="http://www.w3.org/2000/svg" width="6" height="10" viewBox="0 0 6 10"><path d="M5 0L1 10" stroke="currentColor" strokeWidth="1.2" fill="none" strokeLinecap="round"/></svg>,
		path: 'M5 0L1 10',
		w: 6, h: 10,
		useStroke: true,
	},
	dot: {
		label: 'Dot',
		preview: <svg xmlns="http://www.w3.org/2000/svg" width="6" height="8" viewBox="0 0 6 8"><circle cx="3" cy="4" r="2" fill="currentColor"/></svg>,
		path: null,
		circle: { cx: 3, cy: 4, r: 2 },
		w: 6, h: 8,
		useFill: true,
	},
	dash: {
		label: 'Dash',
		preview: <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8"><path d="M0 4h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>,
		path: 'M0 4h8',
		w: 8, h: 8,
		useStroke: true,
	},
};

const COLOUR_PRESETS = [
	{ label: 'Grey (default)', value: '#6c757d' },
	{ label: 'Primary blue',   value: '#0d6efd' },
	{ label: 'Success green',  value: '#198754' },
	{ label: 'Danger red',     value: '#dc3545' },
	{ label: 'Warning amber',  value: '#ffc107' },
	{ label: 'Dark',           value: '#212529' },
	{ label: 'Light',          value: '#adb5bd' },
];

export default function Edit( { attributes, setAttributes } ) {
	const { items, svgDivider, dividerColor, ariaLabel } = attributes;
	const blockProps = useBlockProps( { className: 'wmblocks-bc-wrapper wmblocks-bc-svg' } );

	const lastIdx = items.length - 1;
	const currentSvg = SVG_DIVIDERS[ svgDivider ] || SVG_DIVIDERS.arrow;

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

	// Build the data URI for editor preview — same as render.php will generate
	function buildDataUri( key, color ) {
		const shape = SVG_DIVIDERS[ key ] || SVG_DIVIDERS.arrow;
		const fill  = encodeURIComponent( color );
		let pathEl;
		if ( shape.circle ) {
			pathEl = `%3Ccircle cx='${ shape.circle.cx }' cy='${ shape.circle.cy }' r='${ shape.circle.r }' fill='${ fill }'/%3E`;
		} else if ( shape.useStroke ) {
			pathEl = `%3Cpath d='${ encodeURIComponent( shape.path ) }' stroke='${ fill }' stroke-width='${ key === 'chevron' ? '1.5' : key === 'slash' ? '1.2' : '1.3' }' fill='none' stroke-linecap='round' stroke-linejoin='round'/%3E`;
		} else {
			pathEl = `%3Cpath d='${ encodeURIComponent( shape.path ) }' fill='${ fill }'/%3E`;
		}
		return `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='${ shape.w }' height='${ shape.h }' viewBox='0 0 ${ shape.w } ${ shape.h }'%3E${ pathEl }%3C/svg%3E")`;
	}

	const dividerCss = buildDataUri( svgDivider, dividerColor );

	return (
		<>
			<InspectorControls>
				<PanelBody title={ __( 'SVG Divider', 'wmblocks' ) } initialOpen={ true }>
					<p style={ { fontSize: '11px', color: '#555', marginTop: 0 } }>
						{ __( 'SVG is embedded as a data URI in --bs-breadcrumb-divider. The fill/stroke colour is applied directly in the SVG markup.', 'wmblocks' ) }
					</p>
					<TextControl
						label={ __( 'Divider colour (hex)', 'wmblocks' ) }
						value={ dividerColor }
						onChange={ v => setAttributes( { dividerColor: v } ) }
						placeholder="#6c757d"
					/>
				</PanelBody>
				<PanelBody title={ __( 'Accessibility', 'wmblocks' ) } initialOpen={ false }>
					<TextControl label={ __( 'aria-label', 'wmblocks' ) }
						value={ ariaLabel } onChange={ v => setAttributes( { ariaLabel: v } ) }
					/>
				</PanelBody>
			</InspectorControls>

			<div { ...blockProps }>
				<div className="wmblocks-bc-meta">
					<span className="wmblocks-bc-chip wmblocks-bc-chip--teal">Breadcrumb</span>
					<span className="wmblocks-bc-chip">SVG divider</span>
					<span className="wmblocks-bc-chip">{ currentSvg.label }</span>
					<span className="wmblocks-bc-chip">{ items.length } items</span>
				</div>

				{/* SVG shape picker */}
				<div className="wmblocks-bc-svg-picker">
					<span className="wmblocks-bc-svg-picker__label">{ __( 'Shape:', 'wmblocks' ) }</span>
					{ Object.entries( SVG_DIVIDERS ).map( ( [ key, shape ] ) => (
						<button key={ key }
							className={ 'wmblocks-bc-svg-btn' + ( svgDivider === key ? ' is-active' : '' ) }
							onClick={ () => setAttributes( { svgDivider: key } ) }
							title={ shape.label }
						>
							<span style={ { color: svgDivider === key ? '#fff' : dividerColor } }>
								{ shape.preview }
							</span>
							<span className="wmblocks-bc-svg-btn__label">{ shape.label }</span>
						</button>
					) ) }
				</div>

				{/* Colour picker */}
				<div className="wmblocks-bc-svg-colour-row">
					<span className="wmblocks-bc-svg-picker__label">{ __( 'Colour:', 'wmblocks' ) }</span>
					{ COLOUR_PRESETS.map( c => (
						<button key={ c.value }
							className={ 'wmblocks-bc-swatch' + ( dividerColor === c.value ? ' is-active' : '' ) }
							style={ { background: c.value, border: '2px solid ' + ( dividerColor === c.value ? '#000' : 'transparent' ) } }
							onClick={ () => setAttributes( { dividerColor: c.value } ) }
							title={ c.label }
						/>
					) ) }
					<input
						type="color"
						value={ dividerColor }
						onChange={ e => setAttributes( { dividerColor: e.target.value } ) }
						title={ __( 'Custom colour', 'wmblocks' ) }
						style={ { width: '22px', height: '22px', padding: 0, border: 'none', cursor: 'pointer', borderRadius: '50%' } }
					/>
				</div>

				{/* Live breadcrumb preview */}
				<nav aria-label={ ariaLabel } className="wmblocks-bc-preview"
					style={ { '--bs-breadcrumb-divider': dividerCss } }
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
					<button className="wmblocks-bc-add-btn wmblocks-bc-add-btn--teal" onClick={ addItem }>
						+ { __( 'Add item', 'wmblocks' ) }
					</button>
					<span className="wmblocks-bc-hint">{ __( 'Last item = active page · click label to edit', 'wmblocks' ) }</span>
				</div>
			</div>
		</>
	);
}
