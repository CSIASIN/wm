import { __ } from '@wordpress/i18n';
import { useBlockProps, InspectorControls, InnerBlocks, BlockControls } from '@wordpress/block-editor';
import { useSelect, useDispatch } from '@wordpress/data';
import { PanelBody, TextControl, SelectControl, ToggleControl, ToolbarGroup, ToolbarButton } from '@wordpress/components';
import './editor.scss';

const FIELD_BLOCKS = [
	'wmblocks/form-field', 'wmblocks/form-select', 'wmblocks/form-textarea',
	'wmblocks/form-check', 'wmblocks/form-range',  'wmblocks/form-input-group',
	'wmblocks/form-floating', 'wmblocks/form-submit',
];

const TEMPLATE = [
	[ 'wmblocks/form-field',    { fieldType: 'text',  label: 'Full Name',     name: 'name',    required: true,  placeholder: 'John Doe' } ],
	[ 'wmblocks/form-field',    { fieldType: 'email', label: 'Email address', name: 'email',   required: true,  placeholder: 'name@example.com' } ],
	[ 'wmblocks/form-textarea', { label: 'Message',   name: 'message',        required: false, placeholder: 'Your message…' } ],
	[ 'wmblocks/form-check',    { checkType: 'checkbox', label: 'I agree to the terms and conditions', name: 'agree' } ],
	[ 'wmblocks/form-submit',   { label: 'Send Message', variant: 'btn-primary' } ],
];

const LAYOUT_OPTS = [
	{ label: 'Stacked (vertical)', value: 'stacked' },
	{ label: 'Inline',             value: 'inline' },
	{ label: 'Grid (row/col)',      value: 'grid' },
];

export default function Edit( { attributes, setAttributes, clientId } ) {
	const { formAction, formMethod, formLayout, validated, novalidate, autocomplete, successMessage, customClass } = attributes;

	const innerBlocks = useSelect( s => s( 'core/block-editor' ).getBlocks( clientId ), [ clientId ] );
	const { insertBlock } = useDispatch( 'core/block-editor' );
	const { createBlock } = wp.blocks;

	const addField = ( name ) => insertBlock( createBlock( name, {} ), undefined, clientId );

	const blockProps = useBlockProps( { className: 'wmblocks-bs-form-wrapper' } );

	return (
		<>
			<BlockControls>
				<ToolbarGroup>
					{ [
						[ __( '+ Text', 'wmblocks' ),      'wmblocks/form-field',       { fieldType: 'text' } ],
						[ __( '+ Email', 'wmblocks' ),     'wmblocks/form-field',       { fieldType: 'email' } ],
						[ __( '+ Select', 'wmblocks' ),    'wmblocks/form-select',      {} ],
						[ __( '+ Textarea', 'wmblocks' ),  'wmblocks/form-textarea',    {} ],
						[ __( '+ Check', 'wmblocks' ),     'wmblocks/form-check',       {} ],
						[ __( '+ Range', 'wmblocks' ),     'wmblocks/form-range',       {} ],
						[ __( '+ Group', 'wmblocks' ),     'wmblocks/form-input-group', {} ],
						[ __( '+ Float', 'wmblocks' ),     'wmblocks/form-floating',    {} ],
					].map( ( [ label, blockName, attrs ] ) => (
						<ToolbarButton key={ label } label={ label } text={ label }
							onClick={ () => insertBlock( createBlock( blockName, attrs ), undefined, clientId ) }
						/>
					) ) }
				</ToolbarGroup>
			</BlockControls>

			<InspectorControls>
				<PanelBody title={ __( 'Form Settings', 'wmblocks' ) } initialOpen={ true }>
					<TextControl   label={ __( 'Action URL', 'wmblocks' ) }   value={ formAction } onChange={ v => setAttributes( { formAction: v } ) } placeholder="https://…" help={ __( 'Leave empty to handle with JS/plugin.', 'wmblocks' ) } />
					<SelectControl label={ __( 'Method', 'wmblocks' ) }       value={ formMethod } options={ [ { label: 'POST', value: 'post' }, { label: 'GET', value: 'get' } ] } onChange={ v => setAttributes( { formMethod: v } ) } />
					<SelectControl label={ __( 'Layout', 'wmblocks' ) }       value={ formLayout } options={ LAYOUT_OPTS } onChange={ v => setAttributes( { formLayout: v } ) } />
					<SelectControl label={ __( 'Autocomplete', 'wmblocks' ) } value={ autocomplete } options={ [ { label: 'On', value: 'on' }, { label: 'Off', value: 'off' } ] } onChange={ v => setAttributes( { autocomplete: v } ) } />
					<ToggleControl label={ __( 'HTML5 Validation', 'wmblocks' ) }   checked={ ! novalidate } onChange={ v => setAttributes( { novalidate: ! v } ) } help={ __( 'Enable browser native validation UI.', 'wmblocks' ) } />
					<ToggleControl label={ __( 'Bootstrap Validation Styles', 'wmblocks' ) } checked={ !! validated } onChange={ v => setAttributes( { validated: v } ) } help={ __( 'Adds .was-validated class for Bootstrap valid/invalid feedback.', 'wmblocks' ) } />
					<TextControl   label={ __( 'Extra Classes', 'wmblocks' ) } value={ customClass } onChange={ v => setAttributes( { customClass: v } ) } />
				</PanelBody>
				<PanelBody title={ __( 'Success Message', 'wmblocks' ) } initialOpen={ false }>
					<TextControl label={ __( 'Message text', 'wmblocks' ) } value={ successMessage } onChange={ v => setAttributes( { successMessage: v } ) } help={ __( 'Shown via JS after successful AJAX submit.', 'wmblocks' ) } />
				</PanelBody>
			</InspectorControls>

			<div { ...blockProps }>
				{ /* Form header bar */ }
				<div style={ { display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10, padding: '6px 10px', background: '#f0f6fc', borderRadius: 4, fontSize: 11, color: '#007cba', fontWeight: 600 } }>
					<span>📋 { __( 'Bootstrap Form', 'wmblocks' ) }</span>
					<span style={ { fontWeight: 400, color: '#555' } }>{ formMethod.toUpperCase() }{ formAction ? ' → ' + formAction : ' (no action)' }</span>
					<span style={ { marginLeft: 'auto', background: '#007cba', color: '#fff', borderRadius: 10, padding: '1px 7px', fontSize: 10 } }>{ innerBlocks.length } { __( 'fields', 'wmblocks' ) }</span>
				</div>

				{ /* Layout indicator */ }
				{ formLayout !== 'stacked' && (
					<div style={ { fontSize: 10, color: '#6c757d', marginBottom: 6, fontStyle: 'italic' } }>
						{ formLayout === 'inline' ? __( 'Inline layout — fields flow horizontally on larger screens', 'wmblocks' ) : __( 'Grid layout — use col classes on each field', 'wmblocks' ) }
					</div>
				) }

				<form className={ [ formLayout === 'inline' ? 'row row-cols-lg-auto g-3 align-items-center' : formLayout === 'grid' ? 'row g-3' : '', validated ? 'was-validated' : '', customClass ].filter( Boolean ).join( ' ' ) }>
					<InnerBlocks
						allowedBlocks={ FIELD_BLOCKS }
						template={ TEMPLATE }
						templateLock={ false }
						renderAppender={ false }
					/>
				</form>

				{ /* Quick add strip */ }
				<div style={ { display: 'flex', gap: 4, marginTop: 8, flexWrap: 'wrap' } }>
					{ [
						[ __( '+ Text field', 'wmblocks' ),  'wmblocks/form-field',       { fieldType: 'text'  } ],
						[ __( '+ Email',      'wmblocks' ),  'wmblocks/form-field',       { fieldType: 'email' } ],
						[ __( '+ Password',   'wmblocks' ),  'wmblocks/form-field',       { fieldType: 'password' } ],
						[ __( '+ Select',     'wmblocks' ),  'wmblocks/form-select',      {} ],
						[ __( '+ Textarea',   'wmblocks' ),  'wmblocks/form-textarea',    {} ],
						[ __( '+ Checkbox',   'wmblocks' ),  'wmblocks/form-check',       { checkType: 'checkbox' } ],
						[ __( '+ Radio',      'wmblocks' ),  'wmblocks/form-check',       { checkType: 'radio' } ],
						[ __( '+ Switch',     'wmblocks' ),  'wmblocks/form-check',       { checkType: 'switch' } ],
						[ __( '+ Range',      'wmblocks' ),  'wmblocks/form-range',       {} ],
						[ __( '+ Input Group','wmblocks' ),  'wmblocks/form-input-group', {} ],
						[ __( '+ Floating',   'wmblocks' ),  'wmblocks/form-floating',    {} ],
						[ __( '+ Submit',     'wmblocks' ),  'wmblocks/form-submit',      {} ],
					].map( ( [ label, bName, attrs ] ) => (
						<button key={ label }
							onMouseDown={ e => { e.preventDefault(); insertBlock( createBlock( bName, attrs ), undefined, clientId ); } }
							style={ { fontSize: 11, padding: '3px 8px', border: '1px dashed #007cba', borderRadius: 3, background: 'transparent', color: '#007cba', cursor: 'pointer' } }
						>{ label }</button>
					) ) }
				</div>
			</div>
		</>
	);
}
