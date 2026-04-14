import { __ } from '@wordpress/i18n';
import { useBlockProps, InspectorControls, BlockControls } from '@wordpress/block-editor';
import { PanelBody, SelectControl, TextControl, ToolbarGroup, ToolbarDropdownMenu } from '@wordpress/components';
import './editor.scss';

const DISPLAY_OPTS = [
	{ label: '— None —',          value: '' },
	{ label: 'display-1',         value: 'display-1' },
	{ label: 'display-2',         value: 'display-2' },
	{ label: 'display-3',         value: 'display-3' },
	{ label: 'display-4',         value: 'display-4' },
	{ label: 'display-5',         value: 'display-5' },
	{ label: 'display-6',         value: 'display-6' },
];

const TEXT_ALIGN_OPTS = [
	{ label: '— Default —',  value: '' },
	{ label: 'text-start',   value: 'text-start' },
	{ label: 'text-center',  value: 'text-center' },
	{ label: 'text-end',     value: 'text-end' },
];

const TEXT_COLOR_OPTS = [
	{ label: '— Default —',      value: '' },
	{ label: 'text-primary',     value: 'text-primary' },
	{ label: 'text-secondary',   value: 'text-secondary' },
	{ label: 'text-success',     value: 'text-success' },
	{ label: 'text-danger',      value: 'text-danger' },
	{ label: 'text-warning',     value: 'text-warning' },
	{ label: 'text-info',        value: 'text-info' },
	{ label: 'text-light',       value: 'text-light' },
	{ label: 'text-dark',        value: 'text-dark' },
	{ label: 'text-muted',       value: 'text-muted' },
	{ label: 'text-body',        value: 'text-body' },
	{ label: 'text-white',       value: 'text-white' },
	{ label: 'text-body-emphasis', value: 'text-body-emphasis' },
];

const FONT_WEIGHT_OPTS = [
	{ label: '— Default —',  value: '' },
	{ label: 'fw-bold',      value: 'fw-bold' },
	{ label: 'fw-bolder',    value: 'fw-bolder' },
	{ label: 'fw-semibold',  value: 'fw-semibold' },
	{ label: 'fw-medium',    value: 'fw-medium' },
	{ label: 'fw-normal',    value: 'fw-normal' },
	{ label: 'fw-light',     value: 'fw-light' },
	{ label: 'fw-lighter',   value: 'fw-lighter' },
	{ label: 'fst-italic',   value: 'fst-italic' },
];

// Level → default sizes for editor preview
const LEVEL_SIZES = { 1: '2em', 2: '1.65em', 3: '1.4em', 4: '1.2em', 5: '1.05em', 6: '0.95em' };
// Display class → approximate font sizes for preview
const DISPLAY_SIZES = { 'display-1': '4.5rem', 'display-2': '4rem', 'display-3': '3.5rem', 'display-4': '3rem', 'display-5': '2.5rem', 'display-6': '2rem' };

export default function Edit( { attributes, setAttributes } ) {
	const { level, content, displayClass, textAlign, textColor, fontWeight, customClass } = attributes;

	const Tag = `h${ level }`;

	// Build the full class string
	const headingClass = [
		displayClass || '',
		textAlign    || '',
		textColor    || '',
		fontWeight   || '',
		customClass  || '',
	].filter( Boolean ).join( ' ' );

	// Preview font-size — display class overrides heading level size
	const previewFontSize = displayClass
		? DISPLAY_SIZES[ displayClass ]
		: LEVEL_SIZES[ level ];

	const blockProps = useBlockProps( { className: 'wmblocks-bs-heading-wrapper' } );

	return (
		<>
			{ /* Toolbar — heading level switcher */ }
			<BlockControls>
				<ToolbarGroup>
					<ToolbarDropdownMenu
						icon={ () => (
							<span style={ { fontWeight: 700, fontSize: 13, padding: '0 4px' } }>
								H{ level }
							</span>
						) }
						label={ __( 'Change heading level', 'wmblocks' ) }
						controls={ [ 1, 2, 3, 4, 5, 6 ].map( n => ( {
							title: `H${ n }`,
							isActive: level === n,
							onClick: () => setAttributes( { level: n } ),
							extraProps: {
								style: { fontWeight: level === n ? 700 : 400 }
							},
						} ) ) }
					/>
				</ToolbarGroup>

				{ /* Text align toolbar */ }
				<ToolbarGroup>
					{ [
						[ 'editor-alignleft',   'text-start',  __( 'Align left', 'wmblocks' ) ],
						[ 'editor-aligncenter', 'text-center', __( 'Align center', 'wmblocks' ) ],
						[ 'editor-alignright',  'text-end',    __( 'Align right', 'wmblocks' ) ],
					].map( ( [ icon, cls, label ] ) => (
						<button
							key={ cls }
							title={ label }
							onMouseDown={ e => { e.preventDefault(); setAttributes( { textAlign: textAlign === cls ? '' : cls } ); } }
							style={ {
								display: 'flex', alignItems: 'center', justifyContent: 'center',
								width: 36, height: 36, border: 'none', cursor: 'pointer',
								background: textAlign === cls ? '#e8f4fd' : 'transparent',
								color: textAlign === cls ? '#007cba' : 'currentColor',
								borderRadius: 2,
							} }
						>
							<span className={ `dashicons dashicons-${ icon }` } style={ { fontSize: 18, lineHeight: '36px' } } />
						</button>
					) ) }
				</ToolbarGroup>
			</BlockControls>

			<InspectorControls>
				<PanelBody title={ __( 'Heading', 'wmblocks' ) } initialOpen={ true }>

					{ /* Level buttons */ }
					<div style={ { marginBottom: 12 } }>
						<div style={ { fontSize: 11, fontWeight: 600, color: '#1e1e1e', marginBottom: 6 } }>
							{ __( 'Level', 'wmblocks' ) }
						</div>
						<div style={ { display: 'flex', gap: 4 } }>
							{ [ 1, 2, 3, 4, 5, 6 ].map( n => (
								<button
									key={ n }
									onMouseDown={ e => { e.preventDefault(); setAttributes( { level: n } ); } }
									style={ {
										width: 36, height: 32, border: '1px solid',
										borderColor: level === n ? '#007cba' : '#ddd',
										borderRadius: 4, cursor: 'pointer',
										background: level === n ? '#007cba' : '#f8f9fa',
										color: level === n ? '#fff' : '#333',
										fontWeight: level === n ? 700 : 400,
										fontSize: 13,
									} }
								>
									H{ n }
								</button>
							) ) }
						</div>
					</div>

					<SelectControl
						label={ __( 'Display Class', 'wmblocks' ) }
						value={ displayClass }
						options={ DISPLAY_OPTS }
						onChange={ v => setAttributes( { displayClass: v } ) }
						help={ __( 'display-1 to display-6 — larger, thinner headings for hero sections.', 'wmblocks' ) }
					/>
					<SelectControl
						label={ __( 'Text Align', 'wmblocks' ) }
						value={ textAlign }
						options={ TEXT_ALIGN_OPTS }
						onChange={ v => setAttributes( { textAlign: v } ) }
					/>
					<SelectControl
						label={ __( 'Text Color', 'wmblocks' ) }
						value={ textColor }
						options={ TEXT_COLOR_OPTS }
						onChange={ v => setAttributes( { textColor: v } ) }
					/>
					<SelectControl
						label={ __( 'Font Weight', 'wmblocks' ) }
						value={ fontWeight }
						options={ FONT_WEIGHT_OPTS }
						onChange={ v => setAttributes( { fontWeight: v } ) }
					/>
					<TextControl
						label={ __( 'Extra Classes', 'wmblocks' ) }
						value={ customClass }
						onChange={ v => setAttributes( { customClass: v } ) }
					/>
				</PanelBody>
			</InspectorControls>

			<div { ...blockProps }>
				{ /* Level + class badge row */ }
				<div style={ { display: 'flex', alignItems: 'center', gap: 6, marginBottom: 6, flexWrap: 'wrap' } }>
					<span style={ { background: '#007cba', color: '#fff', fontSize: 10, fontWeight: 700, padding: '1px 7px', borderRadius: 10 } }>
						{ Tag }
					</span>
					{ headingClass && (
						<code style={ { fontSize: 10, color: '#6c757d', background: '#f8f9fa', padding: '2px 6px', borderRadius: 3 } }>
							.{ headingClass.split( ' ' ).join( ' .' ) }
						</code>
					) }
				</div>

				{ /* Editable heading */ }
				<Tag
					className={ headingClass || undefined }
					contentEditable
					suppressContentEditableWarning
					onInput={ e => setAttributes( { content: e.currentTarget.textContent } ) }
					onKeyDown={ e => e.key === 'Enter' && e.preventDefault() }
					style={ {
						outline: 'none',
						cursor: 'text',
						fontSize: previewFontSize,
						fontWeight: displayClass ? 300 : undefined,
						lineHeight: 1.2,
						textAlign: textAlign ? textAlign.replace( 'text-', '' ) : undefined,
					} }
				>
					{ content }
				</Tag>
			</div>
		</>
	);
}
