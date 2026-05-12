/**
 * Bootstrap Badge — Inline Format
 *
 * Wraps selected text in a Bootstrap badge with optional link.
 * Also supports a position-absolute indicator dot attached to selected text.
 *
 * Format 1: wmblocks/wm-badge
 *   <a href="..." class="badge wm-badge bg-primary text-white">text</a>   (with link)
 *   <span class="badge wm-badge bg-primary text-white">text</span>        (no link)
 *
 * Format 2: wmblocks/wm-badge-indicator
 *   <span class="position-relative wm-badge-host">text<span class="position-absolute top-0 start-100 translate-middle p-2 bg-danger border border-light rounded-circle wm-badge-indicator"></span></span>
 */
import {
	registerFormatType,
	applyFormat,
	removeFormat,
	getActiveFormats,
} from '@wordpress/rich-text';
import { RichTextToolbarButton } from '@wordpress/block-editor';
import { Modal, Button, TabPanel, ToggleControl, TextControl, SelectControl } from '@wordpress/components';
import { useState, useCallback } from '@wordpress/element';
import { addFilter } from '@wordpress/hooks';
import { __ } from '@wordpress/i18n';

const FORMAT_BADGE     = 'wmblocks/wm-badge';
const FORMAT_INDICATOR = 'wmblocks/wm-badge-indicator';

// ── Badge variants ────────────────────────────────────────────────────────────
const VARIANTS = [
	{ label: 'Primary',          bg: 'bg-primary',          text: 'text-white' },
	{ label: 'Secondary',        bg: 'bg-secondary',        text: 'text-white' },
	{ label: 'Success',          bg: 'bg-success',          text: 'text-white' },
	{ label: 'Danger',           bg: 'bg-danger',           text: 'text-white' },
	{ label: 'Warning',          bg: 'bg-warning',          text: 'text-dark'  },
	{ label: 'Info',             bg: 'bg-info',             text: 'text-dark'  },
	{ label: 'Light',            bg: 'bg-light',            text: 'text-dark'  },
	{ label: 'Dark',             bg: 'bg-dark',             text: 'text-white' },
	{ label: 'White',            bg: 'bg-white',            text: 'text-dark'  },
	{ label: 'Primary Subtle',   bg: 'bg-primary-subtle',   text: 'text-primary-emphasis'   },
	{ label: 'Secondary Subtle', bg: 'bg-secondary-subtle', text: 'text-secondary-emphasis' },
	{ label: 'Success Subtle',   bg: 'bg-success-subtle',   text: 'text-success-emphasis'   },
	{ label: 'Danger Subtle',    bg: 'bg-danger-subtle',    text: 'text-danger-emphasis'     },
	{ label: 'Warning Subtle',   bg: 'bg-warning-subtle',   text: 'text-warning-emphasis'   },
	{ label: 'Info Subtle',      bg: 'bg-info-subtle',      text: 'text-info-emphasis'       },
];

// Indicator colour options
const INDICATOR_COLORS = [
	{ label: 'Danger (red)',    value: 'bg-danger'    },
	{ label: 'Success (green)', value: 'bg-success'   },
	{ label: 'Warning',         value: 'bg-warning'   },
	{ label: 'Primary',         value: 'bg-primary'   },
	{ label: 'Secondary',       value: 'bg-secondary' },
	{ label: 'Info',            value: 'bg-info'      },
	{ label: 'Dark',            value: 'bg-dark'      },
	{ label: 'Light',           value: 'bg-light'     },
];

// Indicator position options
const INDICATOR_POSITIONS = [
	{ label: 'Top right (default)', value: 'top-0 start-100 translate-middle' },
	{ label: 'Top left',            value: 'top-0 start-0 translate-middle'   },
	{ label: 'Bottom right',        value: 'bottom-0 start-100 translate-middle' },
	{ label: 'Bottom left',         value: 'bottom-0 start-0 translate-middle'   },
	{ label: 'Top center',          value: 'top-0 start-50 translate-middle'  },
	{ label: 'Bottom center',       value: 'bottom-0 start-50 translate-middle' },
];

// ── Helpers ───────────────────────────────────────────────────────────────────
function getTextForBg( bgVal ) {
	return VARIANTS.find( x => x.bg === bgVal )?.text || 'text-white';
}

function buildBadgeClass( bg, pill, sm ) {
	return [ 'badge wm-badge', bg, getTextForBg( bg ), pill ? 'rounded-pill' : '', sm ? 'badge-sm' : '' ]
		.filter( Boolean ).join( ' ' );
}

function parseBadgeAttrs( attrs ) {
	const cls   = attrs?.class || '';
	const parts = cls.split( ' ' );
	return {
		bg:   parts.find( c => c.startsWith( 'bg-' ) ) || 'bg-primary',
		pill: parts.includes( 'rounded-pill' ),
		sm:   parts.includes( 'badge-sm' ),
		href: attrs?.href || '',
		target: attrs?.target || '',
	};
}

function getActiveFormat( value, fmtName ) {
	return ( getActiveFormats( value ) || [] ).find( f => f.type === fmtName ) || null;
}

// Build indicator host class string
function buildIndicatorHostClass( color, position, size ) {
	const sizeClass = size === 'lg' ? 'p-3' : size === 'sm' ? 'p-1' : 'p-2';
	return `position-relative wm-badge-host|${ color }|${ position }|${ sizeClass }`;
}

function parseIndicatorClass( cls ) {
	if ( ! cls ) return { color: 'bg-danger', position: 'top-0 start-100 translate-middle', size: 'p-2' };
	const parts = cls.split( '|' );
	return {
		color:    parts[1] || 'bg-danger',
		position: parts[2] || 'top-0 start-100 translate-middle',
		size:     parts[3] || 'p-2',
	};
}

// ── Badge Modal ───────────────────────────────────────────────────────────────
function BadgeModal( { activeAttrs, indicatorAttrs, onApplyBadge, onClearBadge, onApplyIndicator, onClearIndicator, onClose } ) {
	const parsed = parseBadgeAttrs( activeAttrs );
	const indParsed = parseIndicatorClass( indicatorAttrs?.class );

	const [ bg,       setBg       ] = useState( parsed.bg );
	const [ pill,     setPill     ] = useState( parsed.pill );
	const [ sm,       setSm       ] = useState( parsed.sm );
	const [ href,     setHref     ] = useState( parsed.href );
	const [ newTab,   setNewTab   ] = useState( parsed.target === '_blank' );
	const [ indColor, setIndColor ] = useState( indParsed.color );
	const [ indPos,   setIndPos   ] = useState( indParsed.position );
	const [ indSize,  setIndSize  ] = useState( indParsed.size );

	const badgeClass   = buildBadgeClass( bg, pill, sm );
	const hasBadge     = !! activeAttrs;
	const hasIndicator = !! indicatorAttrs;

	const handleApplyBadge = () => {
		const attrs = { class: badgeClass };
		if ( href ) {
			attrs.href = href;
			if ( newTab ) { attrs.target = '_blank'; attrs.rel = 'noopener noreferrer'; }
		}
		onApplyBadge( attrs, !! href );
	};

	const handleApplyIndicator = () => {
		onApplyIndicator( { color: indColor, position: indPos, size: indSize } );
	};

	return (
		<Modal
			title={ __( 'Badge & Indicator', 'wmblocks' ) }
			onRequestClose={ onClose }
			className="wm-badge-modal"
			size="medium"
		>
			<div className="wm-badge-modal__body">

				{ /* Live badge preview */ }
				<div className="wm-badge-modal__preview">
					{ href
						? <a href="#" className={ badgeClass } onClick={ e => e.preventDefault() } style={ { fontSize: 13 } }>{ __( 'Preview', 'wmblocks' ) }</a>
						: <span className={ badgeClass } style={ { fontSize: 13 } }>{ __( 'Preview', 'wmblocks' ) }</span>
					}
					<code className="wm-badge-modal__preview-code">{ badgeClass }{ href ? ` → ${ href }` : '' }</code>
				</div>

				{ /* Active badge indicator */ }
				{ hasBadge && (
					<div className="wm-badge-modal__current">
						<span>{ __( 'Badge active', 'wmblocks' ) }</span>
						<code>{ activeAttrs?.class }</code>
						<Button variant="tertiary" isDestructive size="compact" onClick={ onClearBadge }>
							{ __( '✕ Remove badge', 'wmblocks' ) }
						</Button>
					</div>
				) }

				{ /* Indicator active indicator */ }
				{ hasIndicator && (
					<div className="wm-badge-modal__current wm-badge-modal__current--indicator">
						<span>{ __( 'Indicator active', 'wmblocks' ) }</span>
						<Button variant="tertiary" isDestructive size="compact" onClick={ onClearIndicator }>
							{ __( '✕ Remove indicator', 'wmblocks' ) }
						</Button>
					</div>
				) }

				{ /* TabPanel */ }
				<TabPanel
					className="wm-badge-modal__tabpanel"
					activeClass="is-active"
					tabs={ [
						{ name: 'style',     title: __( 'Style',     'wmblocks' ) },
						{ name: 'options',   title: __( 'Options',   'wmblocks' ) },
						{ name: 'link',      title: __( 'Link',      'wmblocks' ) },
						{ name: 'indicator', title: __( 'Indicator', 'wmblocks' ) },
					] }
				>
					{ ( tab ) => (
						<div className="wm-badge-modal__tab-content">

							{ /* ── Style tab ── */ }
							{ tab.name === 'style' && (
								<>
									<div className="wm-badge-modal__variants">
										{ VARIANTS.map( ( { label, bg: vBg } ) => (
											<button key={ vBg }
												title={ label }
												className={ `wm-badge-variant${ bg === vBg ? ' is-selected' : '' }` }
												onClick={ () => setBg( vBg ) }
											>
												<span className={ `badge wm-badge ${ vBg } ${ getTextForBg( vBg ) }${ pill ? ' rounded-pill' : '' }` }
													style={ { fontSize: 11, letterSpacing: 0 } }
												>{ label }</span>
											</button>
										) ) }
									</div>
									<div className="wm-badge-modal__footer">
										<Button variant="primary" onClick={ handleApplyBadge }>
											{ hasBadge ? __( 'Update badge', 'wmblocks' ) : __( 'Apply badge', 'wmblocks' ) }
										</Button>
										<Button variant="secondary" onClick={ onClose }>{ __( 'Cancel', 'wmblocks' ) }</Button>
									</div>
								</>
							) }

							{ /* ── Options tab ── */ }
							{ tab.name === 'options' && (
								<>
									<div className="wm-badge-modal__options">
										<ToggleControl
											label={ __( 'Pill badge (rounded-pill)', 'wmblocks' ) }
											checked={ pill }
											onChange={ setPill }
											help={ __( 'Fully rounded corners.', 'wmblocks' ) }
										/>
										<ToggleControl
											label={ __( 'Small badge (badge-sm)', 'wmblocks' ) }
											checked={ sm }
											onChange={ setSm }
											help={ __( 'Compact size — smaller font and padding.', 'wmblocks' ) }
										/>
										<div className="wm-badge-modal__option-preview">
											<span className={ badgeClass }>{ __( 'Preview', 'wmblocks' ) }</span>
											<code>{ badgeClass }</code>
										</div>
									</div>
									<div className="wm-badge-modal__footer">
										<Button variant="primary" onClick={ handleApplyBadge }>
											{ hasBadge ? __( 'Update badge', 'wmblocks' ) : __( 'Apply badge', 'wmblocks' ) }
										</Button>
										<Button variant="secondary" onClick={ onClose }>{ __( 'Cancel', 'wmblocks' ) }</Button>
									</div>
								</>
							) }

							{ /* ── Link tab ── */ }
							{ tab.name === 'link' && (
								<>
									<div className="wm-badge-modal__options">
										<TextControl
											label={ __( 'URL', 'wmblocks' ) }
											value={ href }
											onChange={ setHref }
											type="url"
											placeholder="https://"
											help={ __( 'Wraps the badge in an <a> tag. Leave empty for a plain <span>.', 'wmblocks' ) }
										/>
										<ToggleControl
											label={ __( 'Open in new tab', 'wmblocks' ) }
											checked={ newTab }
											onChange={ setNewTab }
											disabled={ ! href }
										/>
										{ href && (
											<div className="wm-badge-modal__option-preview">
												<a href="#" className={ badgeClass } onClick={ e => e.preventDefault() }>{ __( 'Preview link', 'wmblocks' ) }</a>
												<code>{ `<a href="${ href }" class="${ badgeClass }">` }</code>
											</div>
										) }
									</div>
									<div className="wm-badge-modal__footer">
										<Button variant="primary" onClick={ handleApplyBadge }>
											{ hasBadge ? __( 'Update badge', 'wmblocks' ) : __( 'Apply badge', 'wmblocks' ) }
										</Button>
										<Button variant="secondary" onClick={ onClose }>{ __( 'Cancel', 'wmblocks' ) }</Button>
									</div>
								</>
							) }

							{ /* ── Indicator tab ── */ }
							{ tab.name === 'indicator' && (
								<>
									<p className="wm-badge-modal__indicator-desc">
										{ __( 'Wraps the selected text in a position-relative container and adds an absolute-positioned dot indicator.', 'wmblocks' ) }
									</p>
									<div className="wm-badge-modal__indicator-preview">
										<span className="position-relative d-inline-block" style={ { padding: '2px 4px' } }>
											{ __( 'Text', 'wmblocks' ) }
											<span
												className={ `position-absolute ${ indPos } ${ indSize } ${ indColor } border border-2 border-light rounded-circle wm-badge-indicator` }
											></span>
										</span>
										<code className="wm-badge-modal__preview-code">
											{ `position-relative → ${ indColor } dot at ${ INDICATOR_POSITIONS.find( p => p.value === indPos )?.label }` }
										</code>
									</div>

									{ /* Colour swatches for indicator */ }
									<div className="wm-badge-modal__section-label">{ __( 'Indicator colour', 'wmblocks' ) }</div>
									<div className="wm-badge-modal__indicator-colors">
										{ INDICATOR_COLORS.map( ( { label, value } ) => (
											<button key={ value }
												title={ label }
												className={ `wm-badge-ind-color${ indColor === value ? ' is-selected' : '' }` }
												onClick={ () => setIndColor( value ) }
											>
												<span className={ `badge wm-badge ${ value } rounded-circle p-2` }>&nbsp;</span>
												<span className="wm-badge-ind-color__label">{ label }</span>
											</button>
										) ) }
									</div>

									{ /* Position selector */ }
									<div className="wm-badge-modal__section-label">{ __( 'Position', 'wmblocks' ) }</div>
									<div className="wm-badge-modal__indicator-positions">
										{ INDICATOR_POSITIONS.map( ( { label, value } ) => (
											<button key={ value }
												className={ `wm-badge-ind-pos${ indPos === value ? ' is-selected' : '' }` }
												onClick={ () => setIndPos( value ) }
											>{ label }</button>
										) ) }
									</div>

									{ /* Size selector */ }
									<div className="wm-badge-modal__section-label">{ __( 'Dot size', 'wmblocks' ) }</div>
									<div className="wm-badge-modal__indicator-sizes">
										{ [
											{ label: __( 'Small',  'wmblocks' ), value: 'p-1' },
											{ label: __( 'Medium', 'wmblocks' ), value: 'p-2' },
											{ label: __( 'Large',  'wmblocks' ), value: 'p-3' },
										].map( ( { label, value } ) => (
											<button key={ value }
												className={ `wm-badge-ind-size${ indSize === value ? ' is-selected' : '' }` }
												onClick={ () => setIndSize( value ) }
											>{ label }</button>
										) ) }
									</div>

									<div className="wm-badge-modal__footer">
										<Button variant="primary" onClick={ handleApplyIndicator }>
											{ hasIndicator ? __( 'Update indicator', 'wmblocks' ) : __( 'Apply indicator', 'wmblocks' ) }
										</Button>
										{ hasIndicator && (
											<Button variant="secondary" isDestructive onClick={ onClearIndicator }>
												{ __( 'Remove indicator', 'wmblocks' ) }
											</Button>
										) }
										<Button variant="secondary" onClick={ onClose }>{ __( 'Cancel', 'wmblocks' ) }</Button>
									</div>
								</>
							) }

						</div>
					) }
				</TabPanel>

			</div>
		</Modal>
	);
}

// ── Toolbar button ────────────────────────────────────────────────────────────
function BadgeButton( { value, onChange, isActive } ) {
	const [ open, setOpen ] = useState( false );

	const activeBadgeFmt     = getActiveFormat( value, FORMAT_BADGE );
	const activeIndicatorFmt = getActiveFormat( value, FORMAT_INDICATOR );
	const isAnyActive        = !! activeBadgeFmt || !! activeIndicatorFmt;

	const handleApplyBadge = useCallback( ( attrs, isLink ) => {
		setOpen( false );
		// Remove existing badge/indicator first, then re-apply
		let v = removeFormat( value, FORMAT_BADGE );
		onChange( applyFormat( v, {
			type:       FORMAT_BADGE,
			attributes: attrs,
		} ) );
	}, [ value, onChange ] );

	const handleClearBadge = useCallback( () => {
		setOpen( false );
		onChange( removeFormat( value, FORMAT_BADGE ) );
	}, [ value, onChange ] );

	const handleApplyIndicator = useCallback( ( { color, position, size } ) => {
		setOpen( false );
		let v = removeFormat( value, FORMAT_INDICATOR );
		onChange( applyFormat( v, {
			type:       FORMAT_INDICATOR,
			attributes: {
				'data-ind-color': color,
				'data-ind-pos':   position,
				'data-ind-size':  size,
				'class':          'position-relative wm-badge-host',
			},
		} ) );
	}, [ value, onChange ] );

	const handleClearIndicator = useCallback( () => {
		setOpen( false );
		onChange( removeFormat( value, FORMAT_INDICATOR ) );
	}, [ value, onChange ] );

	return (
		<>
			<RichTextToolbarButton
				icon={ () => (
					<span className="wm-badge-tool-icon">
						<span className="badge wm-badge bg-primary text-white wm-badge-tool-icon__badge">
							{ __( 'Badge', 'wmblocks' ) }
						</span>
					</span>
				) }
				title={ __( 'Badge / Indicator', 'wmblocks' ) }
				onClick={ () => setOpen( v => ! v ) }
				isActive={ isAnyActive }
			/>

			{ open && (
				<BadgeModal
					activeAttrs={ activeBadgeFmt?.attributes || null }
					indicatorAttrs={ activeIndicatorFmt?.attributes || null }
					onApplyBadge={ handleApplyBadge }
					onClearBadge={ handleClearBadge }
					onApplyIndicator={ handleApplyIndicator }
					onClearIndicator={ handleClearIndicator }
					onClose={ () => setOpen( false ) }
				/>
			) }
		</>
	);
}

// ── Inject into ALL rich-text blocks ──────────────────────────────────────────
function injectBadgeFormats( settings ) {
	if ( ! settings || typeof settings !== 'object' ) return settings;
	if ( Array.isArray( settings.allowedFormats ) ) {
		const existing = settings.allowedFormats;
		const toAdd    = [ FORMAT_BADGE, FORMAT_INDICATOR ].filter( f => ! existing.includes( f ) );
		if ( ! toAdd.length ) return settings;
		return { ...settings, allowedFormats: [ ...existing, ...toAdd ] };
	}
	return settings;
}

addFilter( 'blocks.registerBlockType', 'wmblocks/inject-badge-formats', injectBadgeFormats );

// ── Register BADGE format ─────────────────────────────────────────────────────
// tagName is 'a' when a link is set, 'span' otherwise.
// We register as 'span' and rely on the editor saving the correct tag.
// On the frontend the PHP render filter (or theme) can upgrade span→a if needed.
// The cleaner approach: register with className only and let PHP handle the tag.
registerFormatType( FORMAT_BADGE, {
	title:      __( 'Badge', 'wmblocks' ),
	tagName:    'span',
	className:  'wm-badge',
	attributes: { class: 'class', href: 'href', target: 'target', rel: 'rel' },
	edit( { value, onChange, isActive } ) {
		return <BadgeButton value={ value } onChange={ onChange } isActive={ isActive } />;
	},
} );

// ── Register INDICATOR format ─────────────────────────────────────────────────
registerFormatType( FORMAT_INDICATOR, {
	title:      __( 'Badge Indicator', 'wmblocks' ),
	tagName:    'span',
	className:  'wm-badge-host',
	attributes: {
		class:           'class',
		'data-ind-color': 'data-ind-color',
		'data-ind-pos':   'data-ind-pos',
		'data-ind-size':  'data-ind-size',
	},
	edit( { value, onChange, isActive } ) {
		// BadgeButton handles both formats — no separate edit needed for indicator
		return null;
	},
} );