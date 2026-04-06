import { __ } from '@wordpress/i18n';
import {
	useBlockProps,
	InspectorControls,
	InnerBlocks,
	BlockControls,
} from '@wordpress/block-editor';
import {
	PanelBody,
	TextControl,
	ToolbarGroup,
	ToolbarButton,
} from '@wordpress/components';
import './editor.scss';

// ── Preset ratios ──────────────────────────────────────────────────────────
const RATIOS = [
	{ label: '1×1  (Square)',      value: 'ratio-1x1',  w: 1,  h: 1  },
	{ label: '4×3  (Classic TV)',  value: 'ratio-4x3',  w: 4,  h: 3  },
	{ label: '16×9 (Widescreen)', value: 'ratio-16x9', w: 16, h: 9  },
	{ label: '21×9 (Ultrawide)',  value: 'ratio-21x9', w: 21, h: 9  },
];

// Default InnerBlocks template: a placeholder iframe
const RATIO_TEMPLATE = [
	[ 'core/html', { content: '<iframe src="https://www.youtube.com/embed/vlDzYIIOYmM" title="Video" allowfullscreen></iframe>' } ],
];

// ── Compute padding-top % for a ratio string ───────────────────────────────
function ratioPaddingTop( ratioClass, customRatio ) {
	if ( ratioClass === 'custom' && customRatio ) {
		// customRatio is like "9/16" or "3/4"
		const parts = customRatio.split( '/' ).map( Number );
		if ( parts.length === 2 && parts[ 0 ] && parts[ 1 ] ) {
			return ( ( parts[ 1 ] / parts[ 0 ] ) * 100 ).toFixed( 4 ) + '%';
		}
		return '56.25%';
	}
	const found = RATIOS.find( ( r ) => r.value === ratioClass );
	if ( found ) return ( ( found.h / found.w ) * 100 ).toFixed( 4 ) + '%';
	return '56.25%';
}

// ── Edit component ─────────────────────────────────────────────────────────
export default function Edit( { attributes, setAttributes } ) {
	const { ratio, customRatio } = attributes;

	const isCustom   = ratio === 'custom';
	const paddingTop = ratioPaddingTop( ratio, customRatio );

	// Label for meta strip
	const ratioLabel = isCustom
		? ( customRatio || 'custom' )
		: RATIOS.find( ( r ) => r.value === ratio )?.label || ratio;

	const blockProps = useBlockProps( { className: 'wmblocks-ratio-wrapper' } );

	return (
		<>
			{/* ── Toolbar — ratio quick-pick ────────────────────────── */}
			<BlockControls>
				<ToolbarGroup>
					{ RATIOS.map( ( r ) => (
						<ToolbarButton
							key={ r.value }
							label={ r.label }
							isPressed={ ratio === r.value }
							onClick={ () => setAttributes( { ratio: r.value } ) }
						>
							{ `${ r.w }:${ r.h }` }
						</ToolbarButton>
					) ) }
					<ToolbarButton
						label={ __( 'Custom ratio', 'wmblocks' ) }
						isPressed={ ratio === 'custom' }
						onClick={ () => setAttributes( { ratio: 'custom' } ) }
					>
						{ __( 'Custom', 'wmblocks' ) }
					</ToolbarButton>
				</ToolbarGroup>
			</BlockControls>

			{/* ── Inspector Controls ───────────────────────────────── */}
			<InspectorControls>
				<PanelBody title={ __( 'Aspect Ratio', 'wmblocks' ) } initialOpen={ true }>

					{/* Preset ratio pills */}
					<p style={ { fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.05em', color: '#555', margin: '0 0 8px' } }>
						{ __( 'Preset Ratio', 'wmblocks' ) }
					</p>
					<div style={ { display: 'flex', flexDirection: 'column', gap: '5px', marginBottom: '14px' } }>
						{ RATIOS.map( ( r ) => (
							<button
								key={ r.value }
								onClick={ () => setAttributes( { ratio: r.value } ) }
								style={ {
									display:      'flex',
									alignItems:   'center',
									gap:          '10px',
									padding:      '8px 12px',
									border:       ratio === r.value ? '2px solid #0d6efd' : '1px solid #dee2e6',
									borderRadius: '5px',
									background:   ratio === r.value ? '#e8f0fe' : '#fff',
									color:        ratio === r.value ? '#084298' : '#333',
									fontWeight:   ratio === r.value ? 700 : 400,
									cursor:       'pointer',
									fontSize:     '13px',
									transition:   'all .12s',
								} }
							>
								{/* Visual ratio preview rectangle */}
								<div style={ {
									flexShrink: 0,
									width:  `${ Math.round( ( r.w / Math.max( r.w, 21 ) ) * 48 ) }px`,
									height: `${ Math.round( ( r.h / Math.max( r.w, 21 ) ) * 48 ) }px`,
									background: ratio === r.value ? '#0d6efd' : '#dee2e6',
									borderRadius: '2px',
									transition: 'all .12s',
								} } />
								<div>
									<div style={ { fontFamily: 'monospace', fontWeight: 700 } }>{ r.w }:{ r.h }</div>
									<div style={ { fontSize: '11px', color: '#888', marginTop: '1px' } }>{ r.label.split( '(' )[ 1 ]?.replace( ')', '' ) }</div>
								</div>
								{ ratio === r.value && <span style={ { marginLeft: 'auto', fontSize: '12px' } }>✓</span> }
							</button>
						) ) }
					</div>

					{/* Custom ratio */}
					<button
						onClick={ () => setAttributes( { ratio: 'custom' } ) }
						style={ {
							display:      'flex',
							alignItems:   'center',
							gap:          '10px',
							padding:      '8px 12px',
							border:       ratio === 'custom' ? '2px solid #0d6efd' : '1px solid #dee2e6',
							borderRadius: '5px',
							background:   ratio === 'custom' ? '#e8f0fe' : '#fff',
							color:        ratio === 'custom' ? '#084298' : '#333',
							fontWeight:   ratio === 'custom' ? 700 : 400,
							cursor:       'pointer',
							fontSize:     '13px',
							width:        '100%',
							marginBottom: '10px',
							transition:   'all .12s',
						} }
					>
						<div style={ { width: '32px', height: '20px', background: ratio === 'custom' ? '#0d6efd' : '#dee2e6', borderRadius: '2px', transition: 'all .12s' } } />
						<span>{ __( 'Custom ratio', 'wmblocks' ) }</span>
						{ ratio === 'custom' && <span style={ { marginLeft: 'auto', fontSize: '12px' } }>✓</span> }
					</button>

					{ isCustom && (
						<TextControl
							label={ __( 'Custom Ratio (width/height)', 'wmblocks' ) }
							value={ customRatio }
							onChange={ ( v ) => setAttributes( { customRatio: v } ) }
							placeholder="e.g. 16/9 or 4/3 or 2/1"
							help={ __( 'Enter as width/height. Bootstrap uses this as --bs-aspect-ratio CSS variable.', 'wmblocks' ) }
						/>
					) }

					<p style={ { fontSize: '11px', color: '#888', marginTop: '8px', lineHeight: '1.5' } }>
						{ __( 'The ratio wrapper makes any iframe or video fill its container responsively. Drop your content inside the block below.', 'wmblocks' ) }
					</p>
				</PanelBody>
			</InspectorControls>

			{/* ══════════════════════════════════════════════════════════
			    EDITOR CANVAS
			══════════════════════════════════════════════════════════ */}
			<div { ...blockProps }>

				{/* ── Meta strip ─────────────────────────────────────── */}
				<div className="wmblocks-ratio-meta-strip">
					<span className="wmblocks-ratio-chip">Aspect Ratio</span>
					<span className="wmblocks-ratio-chip wmblocks-ratio-chip--ratio">{ ratioLabel.split( '(' )[ 0 ].trim() }</span>
					<span className="wmblocks-ratio-hint">{ __( 'Select a ratio in toolbar or sidebar · Drop content inside', 'wmblocks' ) }</span>
				</div>

				{/* ── Ratio quick-pick on canvas ─────────────────────── */}
				<div className="wmblocks-ratio-quick-pick">
					{ RATIOS.map( ( r ) => (
						<button
							key={ r.value }
							className={ 'wmblocks-ratio-pick-btn' + ( ratio === r.value ? ' is-active' : '' ) }
							onClick={ () => setAttributes( { ratio: r.value } ) }
							title={ r.label }
						>
							<span className="wmblocks-ratio-pick-rect" style={ {
								width:  `${ Math.round( ( r.w / 21 ) * 36 ) }px`,
								height: `${ Math.round( ( r.h / 21 ) * 36 ) }px`,
							} } />
							{ r.w }:{ r.h }
						</button>
					) ) }
					<button
						className={ 'wmblocks-ratio-pick-btn' + ( ratio === 'custom' ? ' is-active' : '' ) }
						onClick={ () => setAttributes( { ratio: 'custom' } ) }
					>⚙ Custom</button>
				</div>

				{/* ── Ratio preview box containing InnerBlocks ──────── */}
				<div
					className="wmblocks-ratio-preview-box"
					style={ { paddingTop } }
				>
					<div className="wmblocks-ratio-preview-inner">
						<InnerBlocks
							template={ RATIO_TEMPLATE }
							templateLock={ false }
						/>
					</div>
				</div>

				{/* ── Footer hint ──────────────────────────────────────── */}
				<p className="wmblocks-ratio-footer-hint">
					{ __( 'Any content inside will fill the ratio box — iframe, video, image, or any block', 'wmblocks' ) }
				</p>

			</div>
		</>
	);
}
