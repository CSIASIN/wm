import { __ } from '@wordpress/i18n';
import {
	useBlockProps,
	InspectorControls,
	RichText,
	BlockControls,
} from '@wordpress/block-editor';
import {
	PanelBody,
	PanelRow,
	ToggleControl,
	SelectControl,
	ToolbarGroup,
	ToolbarButton,
} from '@wordpress/components';
import './editor.scss';

// ── Presentation styles ────────────────────────────────────────────────────
const STYLES = [
	{ value: 'plain',   label: 'Plain',         desc: 'Bare <address> element, Bootstrap reboot styles only'   },
	{ value: 'card',    label: 'Card',           desc: 'Wrapped in a Bootstrap card with padding'               },
	{ value: 'border',  label: 'Border accent',  desc: 'Left border accent strip in the chosen colour'          },
	{ value: 'pill',    label: 'Pill / Badge',   desc: 'Light coloured background pill, rounded corners'        },
];

// ── Accent colour options ──────────────────────────────────────────────────
const ACCENT_COLOURS = [
	{ label: 'Primary',   value: 'primary',   hex: '#0d6efd' },
	{ label: 'Secondary', value: 'secondary',  hex: '#6c757d' },
	{ label: 'Success',   value: 'success',   hex: '#198754' },
	{ label: 'Danger',    value: 'danger',    hex: '#dc3545' },
	{ label: 'Warning',   value: 'warning',   hex: '#ffc107' },
	{ label: 'Info',      value: 'info',      hex: '#0dcaf0' },
	{ label: 'Dark',      value: 'dark',      hex: '#212529' },
];
const ACCENT_HEX = Object.fromEntries( ACCENT_COLOURS.map( c => [ c.value, c.hex ] ) );

// ── Text colours ───────────────────────────────────────────────────────────
const TEXT_COLOURS = [
	{ label: 'Default (inherit)', value: '' },
	{ label: 'Body secondary',    value: 'text-body-secondary' },
	{ label: 'Primary',           value: 'text-primary' },
	{ label: 'Secondary',         value: 'text-secondary' },
	{ label: 'Dark',              value: 'text-dark' },
	{ label: 'Light',             value: 'text-light' },
];

// ── Font sizes ─────────────────────────────────────────────────────────────
const FONT_SIZES = [
	{ label: 'Default',    value: '' },
	{ label: 'Small',      value: 'small' },
	{ label: 'Normal',     value: 'fs-6' },
	{ label: 'Large (5)',  value: 'fs-5' },
	{ label: 'Large (4)',  value: 'fs-4' },
];

// ── Inline SVG icons ───────────────────────────────────────────────────────
const ICON = {
	building: <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true"><path d="M14.763.075A.5.5 0 0 1 15 .5v15a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5V14h-1v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V10a.5.5 0 0 1 .342-.474L6 7.64V4.5a.5.5 0 0 1 .276-.447l8-4a.5.5 0 0 1 .487.022zM6 8.694 1 10.36V15h5V8.694zM7 15h2v-1.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5V15h2V1.309l-7 3.5V15z"/><path d="M2 11h1v1H2v-1zm2 0h1v1H4v-1zm-2 2h1v1H2v-1zm2 0h1v1H4v-1zm4-4h1v1H8V9zm2 0h1v1h-1V9zm-2 2h1v1H8v-1zm2 0h1v1h-1v-1zm2-2h1v1h-1V9zm0 2h1v1h-1v-1zM8 7h1v1H8V7zm2 0h1v1h-1V7zm2 0h1v1h-1V7zM8 5h1v1H8V5zm2 0h1v1h-1V5zm2 0h1v1h-1V5zm0-2h1v1h-1V3z"/></svg>,
	pin:      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true"><path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z"/><path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/></svg>,
	phone:    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true"><path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/></svg>,
	email:    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true"><path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"/></svg>,
	globe:    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true"><path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.5-6.923c-.67.204-1.335.82-1.887 1.855A7.97 7.97 0 0 0 5.145 4H7.5V1.077zM4.09 4a9.267 9.267 0 0 1 .64-1.539 6.7 6.7 0 0 1 .597-.933A7.025 7.025 0 0 0 2.255 4H4.09zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a6.958 6.958 0 0 0-.656 2.5h2.49zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5H4.847zM8.5 5v2.5h2.99a12.495 12.495 0 0 0-.337-2.5H8.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5H4.51zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5H8.5zM5.145 12c.138.386.295.744.468 1.068.552 1.035 1.218 1.65 1.887 1.855V12H5.145zm.182 2.472a6.696 6.696 0 0 1-.597-.933A9.268 9.268 0 0 1 4.09 12H2.255a7.024 7.024 0 0 0 3.072 2.472zM3.82 11a13.652 13.652 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5H3.82zm6.853 3.472A7.024 7.024 0 0 0 13.745 12H11.91a9.27 9.27 0 0 1-.64 1.539 6.688 6.688 0 0 1-.597.933zM8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855.173-.324.33-.682.468-1.068H8.5zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.65 13.65 0 0 1-.312 2.5zm2.802-3.5a6.959 6.959 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5h2.49zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7.024 7.024 0 0 0-3.072-2.472c.218.284.418.598.597.933zM10.855 4a7.966 7.966 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4h2.355z"/></svg>,
};

// ── Edit component ─────────────────────────────────────────────────────────
export default function Edit( { attributes, setAttributes } ) {
	const {
		name, showName,
		street, showStreet,
		cityStateZip, showCityStateZip,
		country, showCountry,
		phone, showPhone, phoneLabel,
		email, showEmail,
		website, showWebsite,
		style, showIcons, accentColor, textColor, fontSize,
	} = attributes;

	const blockProps = useBlockProps( { className: 'wmblocks-addr-wrapper' } );
	const accentHex  = ACCENT_HEX[ accentColor ] || '#0d6efd';

	// ── Build wrapper style for the preview ───────────────────────────
	function previewStyle() {
		switch ( style ) {
			case 'card':
				return {
					border: '1px solid #dee2e6',
					borderRadius: '8px',
					padding: '16px 20px',
					background: '#fff',
				};
			case 'border':
				return {
					borderLeft: `4px solid ${ accentHex }`,
					paddingLeft: '16px',
					background: '#fff',
				};
			case 'pill':
				return {
					background: accentHex + '14',
					borderRadius: '12px',
					padding: '14px 20px',
					border: `1px solid ${ accentHex }33`,
				};
			default:
				return {};
		}
	}

	return (
		<>
			{/* ── Toolbar ─────────────────────────────────────────── */}
			<BlockControls>
				<ToolbarGroup>
					{ STYLES.map( s => (
						<ToolbarButton key={ s.value }
							label={ s.label }
							isPressed={ style === s.value }
							onClick={ () => setAttributes( { style: s.value } ) }
						>{ s.label }</ToolbarButton>
					) ) }
				</ToolbarGroup>
				<ToolbarGroup>
					<ToolbarButton
						label={ showIcons ? __( 'Hide icons', 'wmblocks' ) : __( 'Show icons', 'wmblocks' ) }
						isPressed={ showIcons }
						onClick={ () => setAttributes( { showIcons: ! showIcons } ) }
					>{ showIcons ? '🔵 Icons ON' : '⚪ Icons OFF' }</ToolbarButton>
				</ToolbarGroup>
			</BlockControls>

			{/* ── Inspector Controls ──────────────────────────────── */}
			<InspectorControls>

				{/* Fields */}
				<PanelBody title={ __( 'Fields', 'wmblocks' ) } initialOpen={ true }>
					<p style={ { fontSize: '11px', color: '#888', marginTop: 0 } }>
						{ __( 'Toggle which fields appear. Edit content inline on the canvas.', 'wmblocks' ) }
					</p>
					<PanelRow><ToggleControl label={ __( 'Name / Organisation', 'wmblocks' ) } checked={ showName        } onChange={ v => setAttributes( { showName:        v } ) } /></PanelRow>
					<PanelRow><ToggleControl label={ __( 'Street',              'wmblocks' ) } checked={ showStreet      } onChange={ v => setAttributes( { showStreet:      v } ) } /></PanelRow>
					<PanelRow><ToggleControl label={ __( 'City, State, Zip',    'wmblocks' ) } checked={ showCityStateZip} onChange={ v => setAttributes( { showCityStateZip: v } ) } /></PanelRow>
					<PanelRow><ToggleControl label={ __( 'Country',             'wmblocks' ) } checked={ showCountry     } onChange={ v => setAttributes( { showCountry:     v } ) } /></PanelRow>
					<PanelRow><ToggleControl label={ __( 'Phone',               'wmblocks' ) } checked={ showPhone       } onChange={ v => setAttributes( { showPhone:       v } ) } /></PanelRow>
					<PanelRow><ToggleControl label={ __( 'Email',               'wmblocks' ) } checked={ showEmail       } onChange={ v => setAttributes( { showEmail:       v } ) } /></PanelRow>
					<PanelRow><ToggleControl label={ __( 'Website',             'wmblocks' ) } checked={ showWebsite     } onChange={ v => setAttributes( { showWebsite:     v } ) } /></PanelRow>
				</PanelBody>

				{/* Presentation */}
				<PanelBody title={ __( 'Presentation', 'wmblocks' ) } initialOpen={ true }>
					<div style={ { display: 'flex', flexDirection: 'column', gap: '6px', marginBottom: '12px' } }>
						{ STYLES.map( s => (
							<button key={ s.value }
								onClick={ () => setAttributes( { style: s.value } ) }
								style={ {
									display: 'flex', alignItems: 'flex-start', gap: '10px',
									padding: '8px 12px',
									border: style === s.value ? `2px solid ${ accentHex }` : '1px solid #dee2e6',
									borderRadius: '5px',
									background: style === s.value ? accentHex + '12' : '#fff',
									cursor: 'pointer', fontSize: '12px', transition: 'all .12s', textAlign: 'left',
								} }
							>
								<div>
									<div style={ { fontWeight: style === s.value ? 700 : 400, color: style === s.value ? accentHex : '#333' } }>{ s.label }</div>
									<div style={ { fontSize: '10px', color: '#888', marginTop: '1px' } }>{ s.desc }</div>
								</div>
								{ style === s.value && <span style={ { marginLeft: 'auto', fontWeight: 700, color: accentHex } }>✓</span> }
							</button>
						) ) }
					</div>
					<PanelRow>
						<ToggleControl
							label={ __( 'Show icons', 'wmblocks' ) }
							checked={ showIcons }
							onChange={ v => setAttributes( { showIcons: v } ) }
							help={ __( 'Adds a small Bootstrap Icon before address lines and contact details.', 'wmblocks' ) }
						/>
					</PanelRow>
				</PanelBody>

				{/* Colour & size */}
				<PanelBody title={ __( 'Colour & Size', 'wmblocks' ) } initialOpen={ false }>
					<p style={ { fontSize: '11px', color: '#888', marginTop: 0 } }>{ __( 'Accent colour', 'wmblocks' ) }</p>
					<div style={ { display: 'flex', gap: '5px', flexWrap: 'wrap', marginBottom: '12px' } }>
						{ ACCENT_COLOURS.map( c => (
							<button key={ c.value }
								title={ c.label }
								style={ {
									width: '24px', height: '24px', borderRadius: '50%',
									background: c.hex, padding: 0,
									border: accentColor === c.value ? '3px solid rgba(0,0,0,.3)' : '2px solid transparent',
									cursor: 'pointer',
									outline: accentColor === c.value ? `2px solid ${ c.hex }` : 'none',
									outlineOffset: '2px',
								} }
								onClick={ () => setAttributes( { accentColor: c.value } ) }
							/>
						) ) }
					</div>
					<SelectControl
						label={ __( 'Text colour', 'wmblocks' ) }
						value={ textColor }
						options={ TEXT_COLOURS }
						onChange={ v => setAttributes( { textColor: v } ) }
					/>
					<SelectControl
						label={ __( 'Font size', 'wmblocks' ) }
						value={ fontSize }
						options={ FONT_SIZES }
						onChange={ v => setAttributes( { fontSize: v } ) }
					/>
				</PanelBody>

			</InspectorControls>

			{/* ══════════════════════════════════════════════════════
			    EDITOR CANVAS
			══════════════════════════════════════════════════════ */}
			<div { ...blockProps }>

				{/* ── Meta strip ──────────────────────────────────── */}
				<div className="wmblocks-addr-meta">
					<span className="wmblocks-addr-chip wmblocks-addr-chip--main" style={ { background: accentHex } }>Address</span>
					<span className="wmblocks-addr-chip">{ STYLES.find( s => s.value === style )?.label || 'Plain' }</span>
					{ showIcons && <span className="wmblocks-addr-chip">icons</span> }
					{ textColor && <span className="wmblocks-addr-chip">{ textColor }</span> }
					{ fontSize  && <span className="wmblocks-addr-chip">{ fontSize }</span> }
				</div>

				{/* ── Style quick-pick bar ─────────────────────────── */}
				<div className="wmblocks-addr-style-bar">
					<span className="wmblocks-addr-bar-label">{ __( 'Style:', 'wmblocks' ) }</span>
					{ STYLES.map( s => (
						<button key={ s.value }
							className={ 'wmblocks-addr-style-btn' + ( style === s.value ? ' is-active' : '' ) }
							style={ style === s.value ? { background: accentHex, borderColor: accentHex, color: '#fff' } : {} }
							onClick={ () => setAttributes( { style: s.value } ) }
							title={ s.desc }
						>{ s.label }</button>
					) ) }

					<span className="wmblocks-addr-bar-sep" />

					{/* Accent colour swatches */}
					{ ACCENT_COLOURS.map( c => (
						<button key={ c.value }
							className={ 'wmblocks-addr-swatch' + ( accentColor === c.value ? ' is-active' : '' ) }
							style={ { background: c.hex } }
							onClick={ () => setAttributes( { accentColor: c.value } ) }
							title={ c.label }
						/>
					) ) }

					<span className="wmblocks-addr-bar-sep" />

					<button
						className={ 'wmblocks-addr-style-btn' + ( showIcons ? ' is-active' : '' ) }
						style={ showIcons ? { background: accentHex, borderColor: accentHex, color: '#fff' } : {} }
						onClick={ () => setAttributes( { showIcons: ! showIcons } ) }
					>{ showIcons ? '🔵 Icons' : '⚪ Icons' }</button>
				</div>

				{/* ── Live address preview ─────────────────────────── */}
				<div className="wmblocks-addr-preview-area" style={ previewStyle() }>
					<address className={ [ textColor, fontSize ].filter( Boolean ).join( ' ' ) || undefined }
						style={ { fontStyle: 'normal', marginBottom: 0 } }
					>

						{/* Name / Organisation */}
						{ showName && (
							<div className="wmblocks-addr-line wmblocks-addr-line--name">
								{ showIcons && <span className="wmblocks-addr-icon" style={ { color: accentHex } }>{ ICON.building }</span> }
								<RichText
									tagName="strong"
									value={ name }
									onChange={ v => setAttributes( { name: v } ) }
									allowedFormats={ [] }
									placeholder={ __( 'Organisation name…', 'wmblocks' ) }
								/>
							</div>
						) }

						{/* Street */}
						{ showStreet && (
							<div className="wmblocks-addr-line">
								{ showIcons && <span className="wmblocks-addr-icon wmblocks-addr-icon--gap" style={ { color: accentHex } }>{ ICON.pin }</span> }
								<RichText
									tagName="span"
									value={ street }
									onChange={ v => setAttributes( { street: v } ) }
									allowedFormats={ [] }
									placeholder={ __( 'Street address…', 'wmblocks' ) }
								/>
							</div>
						) }

						{/* City, State, Zip */}
						{ showCityStateZip && (
							<div className="wmblocks-addr-line">
								{ showIcons && <span className="wmblocks-addr-icon wmblocks-addr-icon--gap" style={ { color: 'transparent' } }>{ ICON.pin }</span> }
								<RichText
									tagName="span"
									value={ cityStateZip }
									onChange={ v => setAttributes( { cityStateZip: v } ) }
									allowedFormats={ [] }
									placeholder={ __( 'City, State ZIP…', 'wmblocks' ) }
								/>
							</div>
						) }

						{/* Country */}
						{ showCountry && (
							<div className="wmblocks-addr-line">
								{ showIcons && <span className="wmblocks-addr-icon wmblocks-addr-icon--gap" style={ { color: 'transparent' } }>{ ICON.pin }</span> }
								<RichText
									tagName="span"
									value={ country }
									onChange={ v => setAttributes( { country: v } ) }
									allowedFormats={ [] }
									placeholder={ __( 'Country…', 'wmblocks' ) }
								/>
							</div>
						) }

						{/* Spacer between address block and contact block */}
						{ ( showPhone || showEmail || showWebsite ) && ( showName || showStreet || showCityStateZip || showCountry ) && (
							<div style={ { height: '6px' } } />
						) }

						{/* Phone */}
						{ showPhone && (
							<div className="wmblocks-addr-line wmblocks-addr-line--contact">
								{ showIcons && <span className="wmblocks-addr-icon" style={ { color: accentHex } }>{ ICON.phone }</span> }
								<abbr title="Phone" style={ { cursor: 'help', textDecoration: 'underline dotted' } }>
									<RichText
										tagName="span"
										value={ phoneLabel }
										onChange={ v => setAttributes( { phoneLabel: v } ) }
										allowedFormats={ [] }
										placeholder="P"
									/>
								</abbr>
								<span style={ { margin: '0 4px' } }>:</span>
								<RichText
									tagName="span"
									value={ phone }
									onChange={ v => setAttributes( { phone: v } ) }
									allowedFormats={ [] }
									placeholder={ __( 'Phone number…', 'wmblocks' ) }
								/>
							</div>
						) }

						{/* Email */}
						{ showEmail && (
							<div className="wmblocks-addr-line wmblocks-addr-line--contact">
								{ showIcons && <span className="wmblocks-addr-icon" style={ { color: accentHex } }>{ ICON.email }</span> }
								<abbr title="Email" style={ { cursor: 'help', textDecoration: 'underline dotted' } }>E</abbr>
								<span style={ { margin: '0 4px' } }>:</span>
								<RichText
									tagName="span"
									value={ email }
									onChange={ v => setAttributes( { email: v } ) }
									allowedFormats={ [] }
									placeholder={ __( 'email@example.com', 'wmblocks' ) }
								/>
							</div>
						) }

						{/* Website */}
						{ showWebsite && (
							<div className="wmblocks-addr-line wmblocks-addr-line--contact">
								{ showIcons && <span className="wmblocks-addr-icon" style={ { color: accentHex } }>{ ICON.globe }</span> }
								<abbr title="Website" style={ { cursor: 'help', textDecoration: 'underline dotted' } }>W</abbr>
								<span style={ { margin: '0 4px' } }>:</span>
								<RichText
									tagName="span"
									value={ website }
									onChange={ v => setAttributes( { website: v } ) }
									allowedFormats={ [] }
									placeholder={ __( 'https://example.com', 'wmblocks' ) }
								/>
							</div>
						) }

					</address>
				</div>

				{/* ── Field toggles on canvas ──────────────────────── */}
				<div className="wmblocks-addr-field-toggles">
					{ [
						{ key: 'showName',        label: '🏢 Name'    },
						{ key: 'showStreet',       label: '📍 Street'  },
						{ key: 'showCityStateZip', label: '🗺 City/Zip' },
						{ key: 'showCountry',      label: '🌍 Country' },
						{ key: 'showPhone',        label: '📞 Phone'   },
						{ key: 'showEmail',        label: '✉ Email'   },
						{ key: 'showWebsite',      label: '🌐 Website' },
					].map( f => {
						const isOn = attributes[ f.key ];
						return (
							<button key={ f.key }
								className={ 'wmblocks-addr-toggle-btn' + ( isOn ? ' is-on' : '' ) }
								style={ isOn ? { borderColor: accentHex, color: accentHex, background: accentHex + '12' } : {} }
								onClick={ () => setAttributes( { [ f.key ]: ! isOn } ) }
							>{ f.label } { isOn ? '✓' : '+' }</button>
						);
					} ) }
				</div>

				{/* ── Footer hint ──────────────────────────────────── */}
				<p className="wmblocks-addr-hint">
					{ __( 'Click any field to edit inline · toggle fields above · style & colour options in sidebar →', 'wmblocks' ) }
				</p>

			</div>
		</>
	);
}
