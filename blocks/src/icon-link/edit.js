import { __ } from '@wordpress/i18n';
import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, TextControl, ToggleControl, SelectControl, TextareaControl, ButtonGroup, Button } from '@wordpress/components';
import './editor.scss';

// Bootstrap built-in SVG icons — the most commonly used ones from Bootstrap Icons
// that work well as inline SVGs with currentColor
const PRESET_ICONS = [
	{
		label: 'Arrow Right',
		value: '<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/></svg>',
	},
	{
		label: 'Arrow Left',
		value: '<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/></svg>',
	},
	{
		label: 'Chevron Right',
		value: '<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/></svg>',
	},
	{
		label: 'External Link',
		value: '<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"/><path fill-rule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"/></svg>',
	},
	{
		label: 'Download',
		value: '<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16"><path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"/><path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"/></svg>',
	},
	{
		label: 'Star',
		value: '<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16"><path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/></svg>',
	},
	{
		label: 'Heart',
		value: '<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16"><path d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/></svg>',
	},
	{
		label: 'Info Circle',
		value: '<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16"><path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"/></svg>',
	},
	{
		label: 'Check Circle',
		value: '<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16"><path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/></svg>',
	},
	{
		label: 'Plus Circle',
		value: '<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16"><path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z"/></svg>',
	},
	{
		label: 'Github',
		value: '<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/></svg>',
	},
	{
		label: 'Twitter / X',
		value: '<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16"><path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"/></svg>',
	},
];

const LINK_COLORS = [
	{ label: '— Default —',        value: '' },
	{ label: 'link-primary',       value: 'link-primary' },
	{ label: 'link-secondary',     value: 'link-secondary' },
	{ label: 'link-success',       value: 'link-success' },
	{ label: 'link-danger',        value: 'link-danger' },
	{ label: 'link-warning',       value: 'link-warning' },
	{ label: 'link-info',          value: 'link-info' },
	{ label: 'link-light',         value: 'link-light' },
	{ label: 'link-dark',          value: 'link-dark' },
	{ label: 'link-body-emphasis', value: 'link-body-emphasis' },
];

const LINK_UNDERLINE = [
	{ label: '— Default —',            value: '' },
	{ label: 'link-underline-primary',   value: 'link-underline-primary' },
	{ label: 'link-underline-secondary', value: 'link-underline-secondary' },
	{ label: 'link-underline-success',   value: 'link-underline-success' },
	{ label: 'link-underline-danger',    value: 'link-underline-danger' },
	{ label: 'link-underline-warning',   value: 'link-underline-warning' },
	{ label: 'link-underline-info',      value: 'link-underline-info' },
	{ label: 'link-underline-opacity-0',  value: 'link-underline-opacity-0' },
	{ label: 'link-underline-opacity-10', value: 'link-underline-opacity-10' },
	{ label: 'link-underline-opacity-25', value: 'link-underline-opacity-25' },
	{ label: 'link-underline-opacity-75', value: 'link-underline-opacity-75' },
	{ label: 'link-underline-opacity-100','value': 'link-underline-opacity-100' },
];

const LINK_OPACITY = [
	{ label: '— Default —',      value: '' },
	{ label: 'link-opacity-10',   value: 'link-opacity-10' },
	{ label: 'link-opacity-25',   value: 'link-opacity-25' },
	{ label: 'link-opacity-50',   value: 'link-opacity-50' },
	{ label: 'link-opacity-75',   value: 'link-opacity-75' },
	{ label: 'link-opacity-100',  value: 'link-opacity-100' },
];

const FONT_SIZE_OPTS = [
	{ label: '— Inherit —', value: '' },
	{ label: 'fs-1 (2.5rem)', value: 'fs-1' },
	{ label: 'fs-2 (2rem)',   value: 'fs-2' },
	{ label: 'fs-3 (1.75rem)',value: 'fs-3' },
	{ label: 'fs-4 (1.5rem)', value: 'fs-4' },
	{ label: 'fs-5 (1.25rem)',value: 'fs-5' },
	{ label: 'fs-6 (1rem)',   value: 'fs-6' },
];

const GAP_OPTS = [
	{ label: '— Default —', value: '' },
	{ label: 'gap-1', value: 'gap-1' },
	{ label: 'gap-2', value: 'gap-2' },
	{ label: 'gap-3', value: 'gap-3' },
];

export default function Edit( { attributes, setAttributes } ) {
	const {
		url, newTab, linkText, iconSvg, iconPosition,
		hoverAnim, linkColor, linkUnderline, linkOpacity,
		fontSize, gap, customClass,
	} = attributes;

	// Build link class
	const linkClass = [
		'icon-link',
		hoverAnim ? 'icon-link-hover' : '',
		linkColor      || '',
		linkUnderline  || '',
		linkOpacity    || '',
		fontSize       || '',
		gap            || '',
		customClass    || '',
	].filter( Boolean ).join( ' ' );

	const blockProps = useBlockProps( { className: 'wmblocks-icon-link-wrapper' } );

	// Render icon safely
	const IconPreview = ( { svg, size = '1em' } ) => {
		if ( ! svg ) return null;
		// Clone SVG and set width/height for preview
		const sized = svg.replace( /width="[^"]*"/, `width="${ size }"` ).replace( /height="[^"]*"/, `height="${ size }"` );
		return <span dangerouslySetInnerHTML={ { __html: sized } } style={ { display: 'inline-flex', alignItems: 'center' } } />;
	};

	return (
		<>
			<InspectorControls>

				{ /* Link settings */ }
				<PanelBody title={ __( 'Link', 'wmblocks' ) } initialOpen={ true }>
					<TextControl
						label={ __( 'URL', 'wmblocks' ) }
						value={ url }
						onChange={ ( v ) => setAttributes( { url: v } ) }
						type="url"
						placeholder="https://"
					/>
					<ToggleControl
						label={ __( 'Open in new tab', 'wmblocks' ) }
						checked={ !! newTab }
						onChange={ ( v ) => setAttributes( { newTab: v } ) }
					/>
					<ToggleControl
						label={ __( 'Hover animation (icon-link-hover)', 'wmblocks' ) }
						checked={ !! hoverAnim }
						onChange={ ( v ) => setAttributes( { hoverAnim: v } ) }
						help={ __( 'Nudges the icon on hover.', 'wmblocks' ) }
					/>
				</PanelBody>

				{ /* Icon */ }
				<PanelBody title={ __( 'Icon', 'wmblocks' ) } initialOpen={ true }>
					<div style={ { marginBottom: '10px' } }>
						<div style={ { fontSize: '11px', fontWeight: 600, color: '#1e1e1e', marginBottom: '6px' } }>{ __( 'Icon Position', 'wmblocks' ) }</div>
						<ButtonGroup>
							<Button variant={ iconPosition === 'start' ? 'primary' : 'secondary' } onClick={ () => setAttributes( { iconPosition: 'start' } ) }>
								{ __( '← Before text', 'wmblocks' ) }
							</Button>
							<Button variant={ iconPosition === 'end' ? 'primary' : 'secondary' } onClick={ () => setAttributes( { iconPosition: 'end' } ) }>
								{ __( 'After text →', 'wmblocks' ) }
							</Button>
						</ButtonGroup>
					</div>

					{ /* Preset icons grid */ }
					<div style={ { marginBottom: '10px' } }>
						<div style={ { fontSize: '11px', fontWeight: 600, color: '#1e1e1e', marginBottom: '6px' } }>{ __( 'Preset Icons', 'wmblocks' ) }</div>
						<div style={ { display: 'flex', flexWrap: 'wrap', gap: '4px' } }>
							{ PRESET_ICONS.map( ( icon ) => (
								<button
									key={ icon.label }
									title={ icon.label }
									onMouseDown={ ( e ) => { e.preventDefault(); setAttributes( { iconSvg: icon.value } ); } }
									style={ {
										width: '36px', height: '36px', border: iconSvg === icon.value ? '2px solid #007cba' : '1px solid #ddd',
										borderRadius: '4px', background: iconSvg === icon.value ? '#e8f4fd' : '#f8f9fa',
										cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
										color: '#333',
									} }
									dangerouslySetInnerHTML={ { __html: icon.value } }
								/>
							) ) }
							{ /* Clear icon button */ }
							<button
								title={ __( 'No icon', 'wmblocks' ) }
								onMouseDown={ ( e ) => { e.preventDefault(); setAttributes( { iconSvg: '' } ); } }
								style={ {
									width: '36px', height: '36px', border: ! iconSvg ? '2px solid #007cba' : '1px solid #ddd',
									borderRadius: '4px', background: ! iconSvg ? '#e8f4fd' : '#f8f9fa',
									cursor: 'pointer', fontSize: '10px', color: '#777',
								} }
							>✕</button>
						</div>
					</div>

					{ /* Custom SVG */ }
					<TextareaControl
						label={ __( 'Custom SVG', 'wmblocks' ) }
						value={ iconSvg }
						onChange={ ( v ) => setAttributes( { iconSvg: v } ) }
						rows={ 3 }
						help={ __( 'Paste any <svg> markup. Use fill="currentColor" to inherit link color.', 'wmblocks' ) }
					/>
				</PanelBody>

				{ /* Style */ }
				<PanelBody title={ __( 'Style', 'wmblocks' ) } initialOpen={ false }>
					<SelectControl label={ __( 'Link Color',      'wmblocks' ) } value={ linkColor }     options={ LINK_COLORS }    onChange={ ( v ) => setAttributes( { linkColor: v } ) } />
					<SelectControl label={ __( 'Underline',       'wmblocks' ) } value={ linkUnderline } options={ LINK_UNDERLINE } onChange={ ( v ) => setAttributes( { linkUnderline: v } ) } />
					<SelectControl label={ __( 'Link Opacity',    'wmblocks' ) } value={ linkOpacity }   options={ LINK_OPACITY }   onChange={ ( v ) => setAttributes( { linkOpacity: v } ) } />
					<SelectControl label={ __( 'Font Size',       'wmblocks' ) } value={ fontSize }      options={ FONT_SIZE_OPTS } onChange={ ( v ) => setAttributes( { fontSize: v } ) } />
					<SelectControl label={ __( 'Icon Gap',        'wmblocks' ) } value={ gap }           options={ GAP_OPTS }       onChange={ ( v ) => setAttributes( { gap: v } ) } />
					<TextControl   label={ __( 'Extra Classes',   'wmblocks' ) } value={ customClass }                              onChange={ ( v ) => setAttributes( { customClass: v } ) } />
				</PanelBody>

			</InspectorControls>

			<div { ...blockProps }>

				{ /* Live preview */ }
				<a
					href="#"
					className={ linkClass }
					onClick={ ( e ) => e.preventDefault() }
					style={ { display: 'inline-flex', alignItems: 'center', textDecoration: 'none' } }
				>
					{ iconPosition === 'start' && iconSvg && (
						<span
							style={ { display: 'inline-flex', alignItems: 'center', marginRight: '4px' } }
							dangerouslySetInnerHTML={ { __html: iconSvg } }
						/>
					) }

					<span
						contentEditable
						suppressContentEditableWarning
						onInput={ ( e ) => setAttributes( { linkText: e.currentTarget.textContent } ) }
						onKeyDown={ ( e ) => e.key === 'Enter' && ( e.preventDefault(), e.currentTarget.blur() ) }
						style={ { outline: 'none', cursor: 'text', minWidth: '40px' } }
					>
						{ linkText }
					</span>

					{ iconPosition === 'end' && iconSvg && (
						<span
							style={ { display: 'inline-flex', alignItems: 'center', marginLeft: '4px' } }
							dangerouslySetInnerHTML={ { __html: iconSvg } }
						/>
					) }
				</a>

				{ /* Hints */ }
				<div style={ { display: 'flex', gap: '8px', marginTop: '6px', flexWrap: 'wrap' } }>
					<span style={ { fontSize: '10px', fontFamily: 'monospace', color: '#007cba', background: '#f0f6fc', padding: '2px 6px', borderRadius: '3px' } }>
						{ linkClass }
					</span>
					{ url && url !== '#' && (
						<span style={ { fontSize: '10px', color: '#6c757d' } }>→ { url }</span>
					) }
				</div>
			</div>
		</>
	);
}
