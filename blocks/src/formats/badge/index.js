/**
 * Bootstrap Badge — Inline Format
 *
 * Wraps selected text in a Bootstrap badge:
 *   <span class="badge wm-badge bg-primary">text</span>
 *
 * Available in: all rich-text blocks — h1–h6, p, li, button, quote, etc.
 * Uses addFilter(blocks.registerBlockType) to inject into allowedFormats
 * on blocks that have an explicit whitelist.
 *
 * Toolbar button opens a WP Modal with:
 *   - Badge style picker (14 Bootstrap variants, pill toggle, size toggle)
 *   - Live preview of the badge
 *   - Remove button
 */
import {
	registerFormatType,
	applyFormat,
	removeFormat,
	getActiveFormats,
} from '@wordpress/rich-text';
import { RichTextToolbarButton } from '@wordpress/block-editor';
import { Modal, Button, TabPanel, ToggleControl } from '@wordpress/components';
import { useState, useCallback } from '@wordpress/element';
import { addFilter } from '@wordpress/hooks';
import { __ } from '@wordpress/i18n';

const FORMAT_NAME = 'wmblocks/wm-badge';

// ── Badge variants ────────────────────────────────────────────────────────────
const VARIANTS = [
	{ label: 'Primary',          bg: 'bg-primary',          text: 'text-white', preview: '#0d6efd' },
	{ label: 'Secondary',        bg: 'bg-secondary',        text: 'text-white', preview: '#6c757d' },
	{ label: 'Success',          bg: 'bg-success',          text: 'text-white', preview: '#198754' },
	{ label: 'Danger',           bg: 'bg-danger',           text: 'text-white', preview: '#dc3545' },
	{ label: 'Warning',          bg: 'bg-warning',          text: 'text-dark',  preview: '#ffc107' },
	{ label: 'Info',             bg: 'bg-info',             text: 'text-dark',  preview: '#0dcaf0' },
	{ label: 'Light',            bg: 'bg-light',            text: 'text-dark',  preview: '#f8f9fa' },
	{ label: 'Dark',             bg: 'bg-dark',             text: 'text-white', preview: '#212529' },
	{ label: 'White',            bg: 'bg-white',            text: 'text-dark',  preview: '#ffffff' },
	{ label: 'Primary Subtle',   bg: 'bg-primary-subtle',   text: 'text-primary-emphasis',   preview: '#cfe2ff' },
	{ label: 'Secondary Subtle', bg: 'bg-secondary-subtle', text: 'text-secondary-emphasis', preview: '#e2e3e5' },
	{ label: 'Success Subtle',   bg: 'bg-success-subtle',   text: 'text-success-emphasis',   preview: '#d1e7dd' },
	{ label: 'Danger Subtle',    bg: 'bg-danger-subtle',    text: 'text-danger-emphasis',     preview: '#f8d7da' },
	{ label: 'Warning Subtle',   bg: 'bg-warning-subtle',   text: 'text-warning-emphasis',   preview: '#fff3cd' },
	{ label: 'Info Subtle',      bg: 'bg-info-subtle',      text: 'text-info-emphasis',       preview: '#cff4fc' },
];

// ── Get active badge class from selection ─────────────────────────────────────
function getActiveBadgeClass( value ) {
	const active = ( getActiveFormats( value ) || [] ).find( f => f.type === FORMAT_NAME );
	if ( ! active ) return null;
	return active.attributes?.class || null;
}

// Build class string from options
function buildClass( bg, text, pill, sm ) {
	return [ 'badge wm-badge', bg, text, pill ? 'rounded-pill' : '', sm ? 'badge-sm' : '' ]
		.filter( Boolean ).join( ' ' );
}

// Parse options back from a class string
function parseClass( cls ) {
	if ( ! cls ) return { bg: 'bg-primary', text: 'text-white', pill: false, sm: false };
	const parts  = cls.split( ' ' );
	const bg     = parts.find( c => c.startsWith( 'bg-' ) ) || 'bg-primary';
	const text   = parts.find( c => c.startsWith( 'text-' ) ) || 'text-white';
	const pill   = parts.includes( 'rounded-pill' );
	const sm     = parts.includes( 'badge-sm' );
	return { bg, text, pill, sm };
}

// ── Badge Modal ───────────────────────────────────────────────────────────────
function BadgeModal( { activeClass, onApply, onClear, onClose } ) {
	const parsed  = parseClass( activeClass );
	const [ bg,   setBg   ] = useState( parsed.bg );
	const [ pill, setPill ] = useState( parsed.pill );
	const [ sm,   setSm   ] = useState( parsed.sm );

	// Derive text colour automatically from chosen bg variant
	const getTextForBg = ( bgVal ) => {
		const v = VARIANTS.find( x => x.bg === bgVal );
		return v ? v.text : 'text-white';
	};

	const previewClass = buildClass( bg, getTextForBg( bg ), pill, sm );
	const previewColor = VARIANTS.find( v => v.bg === bg )?.preview || '#0d6efd';

	const handleApply = () => {
		onApply( buildClass( bg, getTextForBg( bg ), pill, sm ) );
	};

	return (
		<Modal
			title={ __( 'Insert Badge', 'wmblocks' ) }
			onRequestClose={ onClose }
			className="wm-badge-modal"
			size="medium"
		>
			<div className="wm-badge-modal__body">

				{ /* Live preview */ }
				<div className="wm-badge-modal__preview">
					<span className={ `${ previewClass } wm-badge-modal__preview-badge` }>
						{ __( 'Preview', 'wmblocks' ) }
					</span>
					<code className="wm-badge-modal__preview-code">{ previewClass }</code>
				</div>

				{ /* Active badge + remove */ }
				{ activeClass && (
					<div className="wm-badge-modal__current">
						<span>{ __( 'Active:', 'wmblocks' ) }</span>
						<code>{ activeClass }</code>
						<Button variant="tertiary" isDestructive size="compact" onClick={ onClear }>
							{ __( '✕ Remove badge', 'wmblocks' ) }
						</Button>
					</div>
				) }

				{ /* WP TabPanel — Style / Options */ }
				<TabPanel
					className="wm-badge-modal__tabpanel"
					activeClass="is-active"
					tabs={ [
						{ name: 'style',   title: __( 'Style',   'wmblocks' ) },
						{ name: 'options', title: __( 'Options', 'wmblocks' ) },
					] }
				>
					{ ( tab ) => (
						<div className="wm-badge-modal__tab-content">

							{ /* ── Style tab: variant grid ── */ }
							{ tab.name === 'style' && (
								<div className="wm-badge-modal__variants">
									{ VARIANTS.map( ( { label, bg: vBg, text: vText, preview } ) => (
										<button
											key={ vBg }
											title={ label }
											className={ `wm-badge-variant${ bg === vBg ? ' is-selected' : '' }` }
											onClick={ () => setBg( vBg ) }
										>
											<span
												className={ `badge wm-badge ${ vBg } ${ vText }${ pill ? ' rounded-pill' : '' }` }
												style={ { fontSize: 11, letterSpacing: 0 } }
											>
												{ label }
											</span>
										</button>
									) ) }
								</div>
							) }

							{ /* ── Options tab: pill + size ── */ }
							{ tab.name === 'options' && (
								<div className="wm-badge-modal__options">
									<ToggleControl
										label={ __( 'Pill badge (rounded-pill)', 'wmblocks' ) }
										checked={ pill }
										onChange={ setPill }
										help={ __( 'Adds fully rounded corners — Bootstrap .rounded-pill class.', 'wmblocks' ) }
									/>
									<ToggleControl
										label={ __( 'Small badge (badge-sm)', 'wmblocks' ) }
										checked={ sm }
										onChange={ setSm }
										help={ __( 'Reduces font size and padding for a compact badge.', 'wmblocks' ) }
									/>
									<div className="wm-badge-modal__option-preview">
										<span className={ previewClass }>{ __( 'Preview', 'wmblocks' ) }</span>
										<code>{ previewClass }</code>
									</div>
								</div>
							) }

						</div>
					) }
				</TabPanel>

				{ /* Apply button */ }
				<div className="wm-badge-modal__footer">
					<Button variant="primary" onClick={ handleApply }>
						{ activeClass
							? __( 'Update badge', 'wmblocks' )
							: __( 'Apply badge', 'wmblocks' )
						}
					</Button>
					<Button variant="secondary" onClick={ onClose }>
						{ __( 'Cancel', 'wmblocks' ) }
					</Button>
				</div>

			</div>
		</Modal>
	);
}

// ── Toolbar button ────────────────────────────────────────────────────────────
function BadgeButton( { value, onChange, isActive } ) {
	const [ open, setOpen ] = useState( false );
	const activeClass = getActiveBadgeClass( value );

	const handleApply = useCallback( cls => {
		setOpen( false );
		onChange( applyFormat( value, {
			type:       FORMAT_NAME,
			attributes: { class: cls },
		} ) );
	}, [ value, onChange ] );

	const handleClear = useCallback( () => {
		setOpen( false );
		onChange( removeFormat( value, FORMAT_NAME ) );
	}, [ value, onChange ] );

	return (
		<>
			<RichTextToolbarButton
				icon={ () => (
					<span className="wm-badge-tool-icon">
						<span className={ `badge wm-badge bg-primary text-white wm-badge-tool-icon__badge` }>
							{ __( 'Badge', 'wmblocks' ) }
						</span>
					</span>
				) }
				title={ __( 'Badge', 'wmblocks' ) }
				onClick={ () => setOpen( v => ! v ) }
				isActive={ !! activeClass }
			/>

			{ open && (
				<BadgeModal
					activeClass={ activeClass }
					onApply={ handleApply }
					onClear={ handleClear }
					onClose={ () => setOpen( false ) }
				/>
			) }
		</>
	);
}

// ── Inject into ALL rich-text blocks ──────────────────────────────────────────
function injectBadgeFormat( settings ) {
	if ( ! settings || typeof settings !== 'object' ) return settings;
	if ( Array.isArray( settings.allowedFormats ) ) {
		if ( settings.allowedFormats.includes( FORMAT_NAME ) ) return settings;
		return {
			...settings,
			allowedFormats: [ ...settings.allowedFormats, FORMAT_NAME ],
		};
	}
	return settings;
}

addFilter(
	'blocks.registerBlockType',
	'wmblocks/inject-badge-format',
	injectBadgeFormat
);

// ── Register format ───────────────────────────────────────────────────────────
registerFormatType( FORMAT_NAME, {
	title:      __( 'Badge', 'wmblocks' ),
	tagName:    'span',
	className:  'wm-badge',
	attributes: { class: 'class' },
	edit( { value, onChange, isActive } ) {
		return <BadgeButton value={ value } onChange={ onChange } isActive={ isActive } />;
	},
} );