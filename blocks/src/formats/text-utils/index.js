/**
 * Bootstrap Text Utility Formats
 * Registers inline <span class="bs-*"> formats for the WP rich text toolbar.
 * Each format wraps selected text in a span with the Bootstrap class applied.
 */
import { registerFormatType, toggleFormat, getActiveFormats } from '@wordpress/rich-text';
import { RichTextToolbarButton } from '@wordpress/block-editor';
import { Popover, Button } from '@wordpress/components';
import { useState, useRef, useEffect } from '@wordpress/element';
import { __ } from '@wordpress/i18n';

// ─── Format definitions ────────────────────────────────────────────────────
const FORMAT_GROUPS = [
	{
		group: __( 'Text Color', 'wmblocks' ),
		icon: '🎨',
		formats: [
			{ name: 'text-primary',           label: 'Primary',           preview: '#0d6efd' },
			{ name: 'text-secondary',         label: 'Secondary',         preview: '#6c757d' },
			{ name: 'text-success',           label: 'Success',           preview: '#198754' },
			{ name: 'text-danger',            label: 'Danger',            preview: '#dc3545' },
			{ name: 'text-warning',           label: 'Warning',           preview: '#ffc107' },
			{ name: 'text-info',              label: 'Info',              preview: '#0dcaf0' },
			{ name: 'text-light',             label: 'Light',             preview: '#f8f9fa', bg: '#6c757d' },
			{ name: 'text-dark',              label: 'Dark',              preview: '#212529' },
			{ name: 'text-body',              label: 'Body',              preview: '#212529' },
			{ name: 'text-muted',             label: 'Muted',             preview: '#6c757d' },
			{ name: 'text-white',             label: 'White',             preview: '#ffffff', bg: '#6c757d' },
			{ name: 'text-body-emphasis',     label: 'Body Emphasis',     preview: '#000000' },
			{ name: 'text-body-secondary',    label: 'Body Secondary',    preview: '#6c757d' },
			{ name: 'text-body-tertiary',     label: 'Body Tertiary',     preview: '#adb5bd' },
		],
	},
	{
		group: __( 'Font Size', 'wmblocks' ),
		icon: '🔤',
		formats: [
			{ name: 'fs-1', label: 'fs-1 (2.5rem)',  previewStyle: { fontSize: '20px', fontWeight: 700 } },
			{ name: 'fs-2', label: 'fs-2 (2rem)',    previewStyle: { fontSize: '17px', fontWeight: 700 } },
			{ name: 'fs-3', label: 'fs-3 (1.75rem)', previewStyle: { fontSize: '15px', fontWeight: 600 } },
			{ name: 'fs-4', label: 'fs-4 (1.5rem)',  previewStyle: { fontSize: '14px' } },
			{ name: 'fs-5', label: 'fs-5 (1.25rem)', previewStyle: { fontSize: '13px' } },
			{ name: 'fs-6', label: 'fs-6 (1rem)',    previewStyle: { fontSize: '12px' } },
		],
	},
	{
		group: __( 'Font Weight', 'wmblocks' ),
		icon: 'B',
		formats: [
			{ name: 'fw-bold',     label: 'Bold (700)',       previewStyle: { fontWeight: 700 } },
			{ name: 'fw-bolder',   label: 'Bolder',           previewStyle: { fontWeight: 900 } },
			{ name: 'fw-semibold', label: 'Semibold (600)',   previewStyle: { fontWeight: 600 } },
			{ name: 'fw-medium',   label: 'Medium (500)',     previewStyle: { fontWeight: 500 } },
			{ name: 'fw-normal',   label: 'Normal (400)',     previewStyle: { fontWeight: 400 } },
			{ name: 'fw-light',    label: 'Light (300)',      previewStyle: { fontWeight: 300 } },
			{ name: 'fw-lighter',  label: 'Lighter',          previewStyle: { fontWeight: 200 } },
			{ name: 'fst-italic',  label: 'Italic',           previewStyle: { fontStyle: 'italic' } },
			{ name: 'fst-normal',  label: 'Normal style',     previewStyle: { fontStyle: 'normal' } },
		],
	},
	{
		group: __( 'Text Transform', 'wmblocks' ),
		icon: 'Aa',
		formats: [
			{ name: 'text-uppercase',   label: 'UPPERCASE',  previewStyle: { textTransform: 'uppercase', letterSpacing: '1px', fontSize: '11px' } },
			{ name: 'text-lowercase',   label: 'lowercase',  previewStyle: { textTransform: 'lowercase' } },
			{ name: 'text-capitalize',  label: 'Capitalize', previewStyle: { textTransform: 'capitalize' } },
		],
	},
	{
		group: __( 'Text Decoration', 'wmblocks' ),
		icon: 'U̲',
		formats: [
			{ name: 'text-decoration-underline',    label: 'Underline',     previewStyle: { textDecoration: 'underline' } },
			{ name: 'text-decoration-line-through', label: 'Strikethrough', previewStyle: { textDecoration: 'line-through' } },
			{ name: 'text-decoration-none',         label: 'No decoration', previewStyle: { textDecoration: 'none', opacity: 0.7 } },
		],
	},
	{
		group: __( 'Line Height', 'wmblocks' ),
		icon: '↕',
		formats: [
			{ name: 'lh-1',    label: 'lh-1 (1)',    previewStyle: { lineHeight: 1 } },
			{ name: 'lh-sm',   label: 'lh-sm (1.25)',previewStyle: { lineHeight: 1.25 } },
			{ name: 'lh-base', label: 'lh-base (1.5)',previewStyle: { lineHeight: 1.5 } },
			{ name: 'lh-lg',   label: 'lh-lg (2)',   previewStyle: { lineHeight: 2 } },
		],
	},
	{
		group: __( 'Misc', 'wmblocks' ),
		icon: '⚙',
		formats: [
			{ name: 'font-monospace', label: 'Monospace',   previewStyle: { fontFamily: 'monospace', fontSize: '12px' } },
			{ name: 'text-wrap',      label: 'text-wrap',   previewStyle: { fontSize: '11px' } },
			{ name: 'text-nowrap',    label: 'text-nowrap', previewStyle: { whiteSpace: 'nowrap', fontSize: '11px' } },
			{ name: 'text-break',     label: 'text-break',  previewStyle: { wordBreak: 'break-all', fontSize: '11px' } },
			{ name: 'text-truncate',  label: 'text-truncate', previewStyle: { overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', maxWidth: '80px', display: 'inline-block', fontSize: '11px' } },
			{ name: 'text-reset',     label: 'text-reset',  previewStyle: { color: 'inherit', fontSize: '11px' } },
		],
	},
];

// ─── Register every format as wmblocks/bs-{name} ──────────────────────────
FORMAT_GROUPS.forEach( ( { formats } ) => {
	formats.forEach( ( { name } ) => {
		const formatName = `wmblocks/bs-${ name }`;
		registerFormatType( formatName, {
			title:       name,
			tagName:     'span',
			className:   name,
			edit() { return null; }, // All editing via the combined toolbar button
		} );
	} );
} );

// ─── Combined toolbar dropdown ────────────────────────────────────────────
function BSTextUtilsButton( { value, onChange, isActive } ) {
	const [ open, setOpen ] = useState( false );
	const [ activeGroup, setActiveGroup ] = useState( 0 );
	const btnRef = useRef( null );

	// Detect which formats are currently active on selection
	const activeFormats = getActiveFormats( value ) || [];
	const activeClassNames = activeFormats.map( f => f.type.replace( 'wmblocks/bs-', '' ) );

	const hasActive = FORMAT_GROUPS.some( g =>
		g.formats.some( f => activeClassNames.includes( f.name ) )
	);

	const applyFormat = ( name ) => {
		const formatType = `wmblocks/bs-${ name }`;
		onChange( toggleFormat( value, { type: formatType } ) );
	};

	return (
		<>
			<RichTextToolbarButton
				icon={ () => (
					<span style={ {
						fontWeight: 700, fontSize: '11px', padding: '0 4px',
						color: hasActive ? '#007cba' : 'currentColor',
						border: hasActive ? '1px solid #007cba' : 'none',
						borderRadius: 2,
					} }>
						BS<span style={ { fontSize: '9px' } }>T</span>
					</span>
				) }
				title={ __( 'BS Text Utilities', 'wmblocks' ) }
				onClick={ () => setOpen( ! open ) }
				isActive={ hasActive }
				ref={ btnRef }
			/>

			{ open && (
				<Popover
					placement="bottom-start"
					onClose={ () => setOpen( false ) }
					noArrow={ false }
					focusOnMount={ false }
					style={ { zIndex: 99999 } }
				>
					<div style={ { width: 320, background: '#fff', boxShadow: '0 4px 20px rgba(0,0,0,0.15)', borderRadius: 6, overflow: 'hidden' } }>

						{ /* Group tabs */ }
						<div style={ { display: 'flex', borderBottom: '1px solid #e2e8f0', overflowX: 'auto', background: '#f8f9fa' } }>
							{ FORMAT_GROUPS.map( ( g, i ) => (
								<button key={ i }
									onMouseDown={ ( e ) => { e.preventDefault(); setActiveGroup( i ); } }
									style={ {
										padding: '6px 10px', border: 'none', cursor: 'pointer', whiteSpace: 'nowrap',
										background: activeGroup === i ? '#fff' : 'transparent',
										borderBottom: activeGroup === i ? '2px solid #007cba' : '2px solid transparent',
										fontSize: 13, color: activeGroup === i ? '#007cba' : '#555',
										fontWeight: activeGroup === i ? 600 : 400,
									} }
									title={ g.group }
								>
									{ g.icon }
								</button>
							) ) }
						</div>

						{ /* Group label */ }
						<div style={ { padding: '8px 12px 4px', fontSize: 11, fontWeight: 600, color: '#555', textTransform: 'uppercase', letterSpacing: '0.5px' } }>
							{ FORMAT_GROUPS[ activeGroup ].group }
						</div>

						{ /* Format buttons */ }
						<div style={ { padding: '4px 8px 10px', display: 'flex', flexDirection: 'column', gap: 2, maxHeight: 260, overflowY: 'auto' } }>
							{ FORMAT_GROUPS[ activeGroup ].formats.map( ( fmt ) => {
								const isOn = activeClassNames.includes( fmt.name );
								return (
									<button key={ fmt.name }
										onMouseDown={ ( e ) => { e.preventDefault(); applyFormat( fmt.name ); } }
										style={ {
											display: 'flex', alignItems: 'center', gap: 10,
											padding: '6px 8px', border: '1px solid',
											borderColor: isOn ? '#007cba' : '#e9ecef',
											borderRadius: 4, background: isOn ? '#e8f4fd' : '#fff',
											cursor: 'pointer', textAlign: 'left',
										} }
									>
										{ /* Color swatch */ }
										{ fmt.preview !== undefined && (
											<span style={ {
												display: 'inline-block', width: 16, height: 16,
												borderRadius: '50%', background: fmt.preview,
												border: '1px solid rgba(0,0,0,0.1)', flexShrink: 0,
												...(fmt.bg ? { boxShadow: `0 0 0 2px ${ fmt.bg }` } : {}),
											} } />
										) }
										{ /* Text preview */ }
										<span style={ { flex: 1, fontSize: 12, ...( fmt.previewStyle || {} ) } }>
											{ fmt.label }
										</span>
										{ /* Class badge */ }
										<code style={ { fontSize: 10, color: '#6c757d', background: '#f8f9fa', padding: '1px 5px', borderRadius: 3, fontFamily: 'monospace' } }>
											.{ fmt.name }
										</code>
										{ /* Active indicator */ }
										{ isOn && <span style={ { color: '#007cba', fontSize: 14 } }>✓</span> }
									</button>
								);
							} ) }
						</div>

						{ /* Active classes summary */ }
						{ activeClassNames.length > 0 && (
							<div style={ { padding: '6px 12px', borderTop: '1px solid #e9ecef', background: '#f8f9fa', display: 'flex', alignItems: 'center', gap: 6, flexWrap: 'wrap' } }>
								<span style={ { fontSize: 10, color: '#555', flexShrink: 0 } }>{ __( 'Active:', 'wmblocks' ) }</span>
								{ activeClassNames.map( cls => (
									<code key={ cls } style={ { fontSize: 10, background: '#007cba', color: '#fff', padding: '1px 5px', borderRadius: 3 } }>{ cls }</code>
								) ) }
								<button
									onMouseDown={ ( e ) => {
										e.preventDefault();
										// Clear all active BS text formats
										let newValue = value;
										activeClassNames.forEach( cls => {
											newValue = toggleFormat( newValue, { type: `wmblocks/bs-${ cls }` } );
										} );
										onChange( newValue );
									} }
									style={ { marginLeft: 'auto', fontSize: 10, padding: '1px 6px', border: '1px solid #fcc', borderRadius: 3, background: '#fff5f5', color: '#c00', cursor: 'pointer' } }
								>
									{ __( '✕ Clear all', 'wmblocks' ) }
								</button>
							</div>
						) }
					</div>
				</Popover>
			) }
		</>
	);
}

// ─── Register the combined toolbar button using the first format slot ─────
// We piggyback on the first format's edit() to inject the toolbar button once
const TOOLBAR_FORMAT = 'wmblocks/bs-text-utils-toolbar';
registerFormatType( TOOLBAR_FORMAT, {
	title:   __( 'BS Text Utilities', 'wmblocks' ),
	tagName: 'span',
	className: null, // not a real format, just hosts the toolbar button
	edit( { value, onChange, isActive } ) {
		return (
			<BSTextUtilsButton
				value={ value }
				onChange={ onChange }
				isActive={ isActive }
			/>
		);
	},
} );
