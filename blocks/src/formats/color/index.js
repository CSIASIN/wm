/**
 * WM Text Color & Background Color — Inline Formats
 *
 * Two toolbar buttons appear when text is selected:
 *   𝐀  → wmblocks/wm-text-color   → <span class="wm-tc" style="color:#hex">
 *   ▒  → wmblocks/wm-bg-color     → <span class="wm-bc" style="background-color:#hex">
 *
 * Using unique tagName classes (wm-tc / wm-bc) so they never conflict with:
 *   - WP core highlight       (mark element)
 *   - WP core text color      (has-*-color classes)
 *   - Bootstrap text-* classes (added via text-utils format)
 *
 * Features:
 *   - 28-colour preset swatch grid
 *   - Full custom ColorPicker
 *   - Remove button to strip format from selection
 *   - Colour bar under toolbar icon shows current active colour
 */
import {
	registerFormatType,
	applyFormat,
	removeFormat,
	getActiveFormats,
} from '@wordpress/rich-text';
import { RichTextToolbarButton } from '@wordpress/block-editor';
import { Modal, Button, ColorPicker, ColorIndicator, TabPanel } from '@wordpress/components';
import { useState, useCallback } from '@wordpress/element';
import { addFilter } from '@wordpress/hooks';
import { __ } from '@wordpress/i18n';

// ── Format identifiers ────────────────────────────────────────────────────────
const FMT_TEXT = 'wmblocks/wm-text-color';
const FMT_BG   = 'wmblocks/wm-bg-color';

// ── Preset palettes ───────────────────────────────────────────────────────────
const COLORS = [
	// Row 1 — Bootstrap theme
	{ label: 'Primary',       hex: '#0d6efd' },
	{ label: 'Secondary',     hex: '#6c757d' },
	{ label: 'Success',       hex: '#198754' },
	{ label: 'Danger',        hex: '#dc3545' },
	{ label: 'Warning',       hex: '#ffc107' },
	{ label: 'Info',          hex: '#0dcaf0' },
	{ label: 'Dark',          hex: '#212529' },
	{ label: 'Light',         hex: '#f8f9fa' },
	// Row 2 — Extended
	{ label: 'Black',         hex: '#000000' },
	{ label: 'White',         hex: '#ffffff' },
	{ label: 'Red',           hex: '#e63946' },
	{ label: 'Pink',          hex: '#e91e8c' },
	{ label: 'Purple',        hex: '#6f42c1' },
	{ label: 'Indigo',        hex: '#6610f2' },
	{ label: 'Cyan',          hex: '#0dcaf0' },
	{ label: 'Teal',          hex: '#20c997' },
	// Row 3 — Pastels / light
	{ label: 'Green',         hex: '#198754' },
	{ label: 'Lime',          hex: '#a3e635' },
	{ label: 'Yellow',        hex: '#ffc107' },
	{ label: 'Orange',        hex: '#fd7e14' },
	{ label: 'Peach',         hex: '#ffb3a7' },
	{ label: 'Lavender',      hex: '#d4b8e0' },
	{ label: 'Sky',           hex: '#bde0fe' },
	{ label: 'Mint',          hex: '#b7e4c7' },
	// Row 4 — Grays
	{ label: 'Gray 100',      hex: '#f8f9fa' },
	{ label: 'Gray 300',      hex: '#dee2e6' },
	{ label: 'Gray 500',      hex: '#adb5bd' },
	{ label: 'Gray 700',      hex: '#495057' },
];

// Luminance check — returns true if colour is light (needs dark tick)
function isLight( hex ) {
	const h = hex.replace( '#', '' );
	if ( h.length < 6 ) return true;
	const r = parseInt( h.slice(0,2), 16 );
	const g = parseInt( h.slice(2,4), 16 );
	const b = parseInt( h.slice(4,6), 16 );
	return ( r * 0.299 + g * 0.587 + b * 0.114 ) > 160;
}

// ── Get active colour value from current selection ────────────────────────────
function getActiveHex( value, fmtName, cssProp ) {
	const active = ( getActiveFormats( value ) || [] ).find( f => f.type === fmtName );
	if ( ! active ) return null;
	const style = active.attributes?.style || '';
	const m     = style.match( new RegExp( cssProp + '\\s*:\\s*([^;]+)', 'i' ) );
	return m ? m[1].trim() : null;
}

// ── Color modal — uses WP Modal + TabPanel components ─────────────────────────
function WmColorModal( { title, cssProp, activeHex, onApply, onClear, onClose } ) {
	const [ custom, setCustom ] = useState( activeHex || '#0d6efd' );

	const tabs = [
		{ name: 'presets', title: __( 'Presets', 'wmblocks' ) },
		{ name: 'picker',  title: __( 'Custom',  'wmblocks' ) },
	];

	return (
		<Modal
			title={ title }
			onRequestClose={ onClose }
			className="wm-color-modal"
			size="medium"
		>
			<div className="wm-color-modal__body">

				{ /* Active colour indicator + remove button */ }
				{ activeHex && (
					<div className="wm-color-modal__current">
						<ColorIndicator colorValue={ activeHex } />
						<code className="wm-color-modal__current-code">{ activeHex }</code>
						<Button
							variant="tertiary"
							isDestructive
							size="compact"
							onClick={ onClear }
						>{ __( '✕ Remove', 'wmblocks' ) }</Button>
					</div>
				) }

				{ /* WP TabPanel — Presets / Custom */ }
				<TabPanel
					className="wm-color-modal__tabpanel"
					activeClass="is-active"
					tabs={ tabs }
				>
					{ ( tab ) => (
						<div className="wm-color-modal__tab-content">

							{ /* ── Presets tab ── */ }
							{ tab.name === 'presets' && (
								<div className="wm-color-modal__swatches">
									{ COLORS.map( ( { label, hex } ) => (
										<button
											key={ hex + label }
											title={ `${ label } (${ hex })` }
											className={ `wm-color-swatch${ activeHex === hex ? ' is-selected' : '' }` }
											style={ {
                                                       width:'50px',
                                    height:'25px',
                                    margin:'5px 2px',
                                    boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px',
												background:  hex,
												borderColor: activeHex === hex
													? '#3858e9'
													: ( isLight( hex ) ? '#dee2e6' : 'transparent' ),
											} }
											onClick={ () => onApply( hex ) }
										>
											{ activeHex === hex && (
												<span style={ { color: isLight( hex ) ? '#000' : '#fff', fontSize: 12, lineHeight: 1 } }>✓</span>
											) }
										</button>
									) ) }
								</div>
							) }

							{ /* ── Custom picker tab ── */ }
							{ tab.name === 'picker' && (
								<div className="wm-color-modal__picker">
									<ColorPicker
										color={ custom }
										onChange={ setCustom }
										enableAlpha={ false }
									/>
									<Button
										variant="primary"
										style={ { width: '100%', marginTop: 12, justifyContent: 'center' } }
										onClick={ () => onApply( custom ) }
									>
										{ __( 'Apply', 'wmblocks' ) }
									</Button>
								</div>
							) }

						</div>
					) }
				</TabPanel>

			</div>
		</Modal>
	);
}

// ── Generic toolbar button factory ────────────────────────────────────────────
function makeButton( fmtName, cssProp, iconLabel, toolbarLabel, modalTitle ) {
	return function WmColorButton( { value, onChange, isActive } ) {
		const [ open, setOpen ] = useState( false );
		const activeHex = getActiveHex( value, fmtName, cssProp );

		const handleApply = useCallback( hex => {
			setOpen( false );
			// For background colour we add padding + border-radius inline so
			// no frontend stylesheet is needed — the style attribute carries
			// everything the span needs to render correctly.
			const extraStyle = cssProp === 'background-color'
				? `;padding:0.1em 0.25em;border-radius:0.2em;-webkit-box-decoration-break:clone;box-decoration-break:clone`
				: '';
			onChange( applyFormat( value, {
				type:       fmtName,
				attributes: { style: `${ cssProp }:${ hex }${ extraStyle }` },
			} ) );
		}, [ value, onChange ] );

		const handleClear = useCallback( () => {
			setOpen( false );
			onChange( removeFormat( value, fmtName ) );
		}, [ value, onChange ] );

		return (
			<>
				<RichTextToolbarButton
					icon={ () => (
						<span className="wm-color-tool-icon">
							<span className="wm-color-tool-icon__label">{ iconLabel }</span>
							<span
								className="wm-color-tool-icon__bar"
								style={ {
									background:  activeHex || 'linear-gradient(90deg,#e63946,#ffc107,#198754,#0d6efd)',
									opacity:     activeHex ? 1 : 0.5,
								} }
							/>
						</span>
					) }
					title={ toolbarLabel }
					onClick={ () => setOpen( v => ! v ) }
					isActive={ !! activeHex }
				/>

				{ open && (
					<WmColorModal
						title={ modalTitle }
						cssProp={ cssProp }
						activeHex={ activeHex }
						onApply={ handleApply }
						onClear={ handleClear }
						onClose={ () => setOpen( false ) }
					/>
				) }
			</>
		);
	};
}

// ── Make formats available in ALL rich-text blocks ───────────────────────────
// registerFormatType alone is enough for blocks where allowedFormats is
// undefined (= allow everything). But some blocks — core/heading, core/button,
// core/list, core/quote, etc. — ship with an explicit allowedFormats whitelist.
// We hook into:
//   1. blocks.registerBlockType  — patches the static block settings
//   2. blocks.getSaveContent     — no-op, just for completeness
//
// The RichText __unstableAllowedFormats prop is the runtime equivalent but it
// requires patching each block's edit component. The simplest reliable approach
// is to filter the block settings so every block's allowedFormats includes ours.

function injectColorFormats( settings ) {
	// Skip non-object settings (safety)
	if ( ! settings || typeof settings !== 'object' ) return settings;

	// If the block has an explicit allowedFormats whitelist, append our formats.
	// If allowedFormats is absent/undefined all formats are allowed already.
	if ( Array.isArray( settings.allowedFormats ) ) {
		const already = settings.allowedFormats;
		return {
			...settings,
			allowedFormats: [
				...already,
				...( already.includes( FMT_TEXT ) ? [] : [ FMT_TEXT ] ),
				...( already.includes( FMT_BG )   ? [] : [ FMT_BG   ] ),
			],
		};
	}

	return settings;
}

addFilter(
	'blocks.registerBlockType',
	'wmblocks/inject-color-formats',
	injectColorFormats
);

// ── Register TEXT COLOUR ──────────────────────────────────────────────────────
const TextColorBtn = makeButton(
	FMT_TEXT,
	'color',
	<>
		<span style={ { fontWeight:700, fontFamily:'serif', fontSize:15 } }>A</span>
	</>,
	__( 'Text Color', 'wmblocks' ),
	__( 'Text Color', 'wmblocks' )
);

registerFormatType( FMT_TEXT, {
	title:      __( 'Text Color', 'wmblocks' ),
	tagName:    'span',
	className:  'wm-tc',   // unique class — never conflicts with WP core
	attributes: { style: 'style' },
	edit( { value, onChange, isActive } ) {
		return <TextColorBtn value={ value } onChange={ onChange } isActive={ isActive } />;
	},
} );

// ── Register BACKGROUND COLOUR ────────────────────────────────────────────────
const BgColorBtn = makeButton(
	FMT_BG,
	'background-color',
	<>
		<span style={ { fontWeight:700, fontFamily:'sans-serif', fontSize:11, letterSpacing:'-0.5px' } }>BG</span>
	</>,
	__( 'Background Color', 'wmblocks' ),
	__( 'Background Color', 'wmblocks' )
);

registerFormatType( FMT_BG, {
	title:      __( 'Background Color', 'wmblocks' ),
	tagName:    'span',
	className:  'wm-bc',   // unique class — never conflicts with WP core
	attributes: { style: 'style' },
	edit( { value, onChange, isActive } ) {
		return <BgColorBtn value={ value } onChange={ onChange } isActive={ isActive } />;
	},
} );