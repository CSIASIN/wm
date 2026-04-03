import { __ } from '@wordpress/i18n';
import {
	useBlockProps,
	InspectorControls,
	InnerBlocks,
	RichText,
	BlockControls,
} from '@wordpress/block-editor';
import {
	PanelBody,
	SelectControl,
	ToggleControl,
	TextControl,
	ToolbarGroup,
	ToolbarButton,
} from '@wordpress/components';
import './editor.scss';

// ── Constants ──────────────────────────────────────────────────────────────
const BTN_VARIANTS = [
	{ label: 'Primary',           value: 'btn-primary' },
	{ label: 'Secondary',         value: 'btn-secondary' },
	{ label: 'Success',           value: 'btn-success' },
	{ label: 'Danger',            value: 'btn-danger' },
	{ label: 'Warning',           value: 'btn-warning' },
	{ label: 'Info',              value: 'btn-info' },
	{ label: 'Light',             value: 'btn-light' },
	{ label: 'Dark',              value: 'btn-dark' },
	{ label: 'Outline Primary',   value: 'btn-outline-primary' },
	{ label: 'Outline Secondary', value: 'btn-outline-secondary' },
	{ label: 'Outline Success',   value: 'btn-outline-success' },
	{ label: 'Outline Danger',    value: 'btn-outline-danger' },
	{ label: 'Outline Warning',   value: 'btn-outline-warning' },
	{ label: 'Outline Info',      value: 'btn-outline-info' },
	{ label: 'Link',              value: 'btn-link' },
];

const PLACEMENT_OPTIONS = [
	{ label: 'Start (Left)',  value: 'start'  },
	{ label: 'End (Right)',   value: 'end'    },
	{ label: 'Top',           value: 'top'    },
	{ label: 'Bottom',        value: 'bottom' },
];

const PLACEMENT_LABEL = {
	start:  '← Left',
	end:    'Right →',
	top:    '↑ Top',
	bottom: '↓ Bottom',
};

// Default blocks pre-loaded inside the offcanvas body
const OFFCANVAS_BODY_TEMPLATE = [
	[ 'core/paragraph', { placeholder: __( 'Add offcanvas body content here…', 'wmblocks' ) } ],
];

// ── Editor component ───────────────────────────────────────────────────────
export default function Edit( { attributes, setAttributes, clientId } ) {
	const {
		offcanvasId,
		placement,
		offcanvasTitle,
		showBackdrop,
		closeOnBackdrop,
		scrollBody,
		showHeader,
		triggerText,
		triggerVariant,
		triggerType,
	} = attributes;

	const resolvedId = offcanvasId || ( 'offcanvas-' + clientId.slice( 0, 6 ) );

	const blockProps = useBlockProps( {
		className: 'wmblocks-offcanvas-wrapper',
	} );

	return (
		<>
			{/* ── Toolbar — placement quick-switcher ────────────────── */}
			<BlockControls>
				<ToolbarGroup>
					{ [ 'start', 'end', 'top', 'bottom' ].map( ( p ) => (
						<ToolbarButton
							key={ p }
							label={ __( 'Placement: ', 'wmblocks' ) + p }
							isPressed={ placement === p }
							onClick={ () => setAttributes( { placement: p } ) }
						>
							{ { start: '←', end: '→', top: '↑', bottom: '↓' }[ p ] }
						</ToolbarButton>
					) ) }
				</ToolbarGroup>
			</BlockControls>

			{/* ── Inspector Controls ───────────────────────────────── */}
			<InspectorControls>

				{/* Trigger button settings */}
				<PanelBody title={ __( 'Trigger Button', 'wmblocks' ) } initialOpen={ true }>
					<SelectControl
						label={ __( 'Trigger Type', 'wmblocks' ) }
						value={ triggerType }
						options={ [
							{ label: 'Button', value: 'button' },
							{ label: 'Link (anchor tag)', value: 'link' },
						] }
						onChange={ ( v ) => setAttributes( { triggerType: v } ) }
						help={ __( 'Button is recommended for accessibility.', 'wmblocks' ) }
					/>
					<SelectControl
						label={ __( 'Button Style', 'wmblocks' ) }
						value={ triggerVariant }
						options={ BTN_VARIANTS }
						onChange={ ( v ) => setAttributes( { triggerVariant: v } ) }
					/>
				</PanelBody>

				{/* Panel structure settings */}
				<PanelBody title={ __( 'Panel Settings', 'wmblocks' ) } initialOpen={ true }>
					<TextControl
						label={ __( 'Panel ID', 'wmblocks' ) }
						value={ offcanvasId }
						onChange={ ( v ) =>
							setAttributes( { offcanvasId: v.replace( /\s+/g, '-' ).toLowerCase() } )
						}
						help={ __( 'Auto-generated. Override only if needed (must be unique on page).', 'wmblocks' ) }
						placeholder={ resolvedId }
					/>
					<SelectControl
						label={ __( 'Placement', 'wmblocks' ) }
						value={ placement }
						options={ PLACEMENT_OPTIONS }
						onChange={ ( v ) => setAttributes( { placement: v } ) }
						help={ __( 'Which edge the panel slides in from.', 'wmblocks' ) }
					/>
					<ToggleControl
						label={ __( 'Show Header', 'wmblocks' ) }
						checked={ !! showHeader }
						onChange={ ( v ) => setAttributes( { showHeader: v } ) }
						help={ __( 'Display the title bar with close button.', 'wmblocks' ) }
					/>
				</PanelBody>

				{/* Behaviour */}
				<PanelBody title={ __( 'Behaviour', 'wmblocks' ) } initialOpen={ false }>
					<ToggleControl
						label={ __( 'Show Backdrop', 'wmblocks' ) }
						checked={ !! showBackdrop }
						onChange={ ( v ) => setAttributes( { showBackdrop: v } ) }
						help={ __( 'Darken the page behind the open panel.', 'wmblocks' ) }
					/>
					{ showBackdrop && (
						<ToggleControl
							label={ __( 'Close on Backdrop Click', 'wmblocks' ) }
							checked={ !! closeOnBackdrop }
							onChange={ ( v ) => setAttributes( { closeOnBackdrop: v } ) }
							help={ __( "Disable for a 'static' backdrop that won't close on click.", 'wmblocks' ) }
						/>
					) }
					<ToggleControl
						label={ __( 'Allow Body Scroll', 'wmblocks' ) }
						checked={ !! scrollBody }
						onChange={ ( v ) => setAttributes( { scrollBody: v } ) }
						help={ __( 'Let the page scroll while the panel is open.', 'wmblocks' ) }
					/>
				</PanelBody>

			</InspectorControls>

			{/* ── Editor Canvas ────────────────────────────────────── */}
			<div { ...blockProps }>

				{/* ── Section 1: Trigger ─────────────────────────────── */}
				<div className="wmblocks-offcanvas-section-label">
					{ __( 'Trigger', 'wmblocks' ) }
				</div>

				<div className="wmblocks-offcanvas-trigger-row">
					{/*
					  * RichText renders the actual button/link.
					  * User clicks it to type the label directly.
					  */}
					<RichText
						tagName={ triggerType === 'link' ? 'a' : 'button' }
						className={ 'btn ' + triggerVariant }
						value={ triggerText }
						onChange={ ( v ) => setAttributes( { triggerText: v } ) }
						allowedFormats={ [] }
						placeholder={ __( 'Button label…', 'wmblocks' ) }
					/>
					<span className="wmblocks-offcanvas-trigger-hint">
						{ __( '← click to edit label · style in sidebar', 'wmblocks' ) }
					</span>
				</div>

				{/* ── Divider ─────────────────────────────────────────── */}
				<div className="wmblocks-offcanvas-divider" />

				{/* ── Section 2: Offcanvas panel (always fully visible) ─ */}
				<div className="wmblocks-offcanvas-section-label">
					{ __( 'Offcanvas Panel', 'wmblocks' ) }
					<span className="wmblocks-offcanvas-badge">{ PLACEMENT_LABEL[ placement ] }</span>
					{ ! showBackdrop && (
						<span className="wmblocks-offcanvas-badge">{ __( 'no backdrop', 'wmblocks' ) }</span>
					) }
					{ scrollBody && (
						<span className="wmblocks-offcanvas-badge">{ __( 'body scroll', 'wmblocks' ) }</span>
					) }
				</div>

				{/*
				  * The panel card sits directly on canvas — always open in the editor.
				  * No preview toggle: users can click into header / body freely.
				  */}
				<div className="wmblocks-offcanvas-panel">

					{ showHeader && (
						<div className="wmblocks-offcanvas-panel__header">
							{/*
							  * RichText title — click directly to edit, just like a heading block.
							  */}
							<RichText
								tagName="h5"
								className="wmblocks-offcanvas-panel__title"
								value={ offcanvasTitle }
								onChange={ ( v ) => setAttributes( { offcanvasTitle: v } ) }
								allowedFormats={ [] }
								placeholder={ __( 'Panel title…', 'wmblocks' ) }
							/>
							{/* Close ×  is decorative / non-interactive in the editor */}
							<span
								className="wmblocks-offcanvas-panel__close"
								title={ __( '(close button — non-functional in editor)', 'wmblocks' ) }
								aria-hidden="true"
							>
								&times;
							</span>
						</div>
					) }

					{/*
					  * InnerBlocks — users can insert paragraphs, images, buttons,
					  * navigation menus, lists… any block — right inside the panel.
					  */}
					<div className="wmblocks-offcanvas-panel__body">
						<InnerBlocks
							template={ OFFCANVAS_BODY_TEMPLATE }
							templateLock={ false }
						/>
					</div>

				</div>

			</div>
		</>
	);
}
