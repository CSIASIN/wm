import { __ } from '@wordpress/i18n';
import { useBlockProps, InspectorControls, BlockControls } from '@wordpress/block-editor';
import { useDispatch } from '@wordpress/data';
import { PanelBody, TextControl, SelectControl, ToggleControl, ToolbarGroup, ToolbarButton } from '@wordpress/components';
import './editor.scss';

const FIELD_TYPES = [
	{ label: 'Text',           value: 'text' },    { label: 'Email',    value: 'email' },
	{ label: 'Password',       value: 'password' }, { label: 'Number',   value: 'number' },
	{ label: 'Tel',            value: 'tel' },      { label: 'URL',      value: 'url' },
	{ label: 'Date',           value: 'date' },     { label: 'Datetime', value: 'datetime-local' },
	{ label: 'Time',           value: 'time' },     { label: 'Month',    value: 'month' },
	{ label: 'Week',           value: 'week' },     { label: 'Color',    value: 'color' },
	{ label: 'File',           value: 'file' },     { label: 'Hidden',   value: 'hidden' },
	{ label: 'Search',         value: 'search' },
];
const SIZE_OPTS = [ { label: 'Default', value: '' }, { label: 'Small (sm)', value: 'form-control-sm' }, { label: 'Large (lg)', value: 'form-control-lg' } ];
const COL_OPTS  = [ { label: '— Full width —', value: '' }, ...[ 1,2,3,4,5,6,7,8,9,10,11,12 ].map( n => ( { label: `col-${n}`, value: `col-${n}` } ) ), ...[ 'sm','md','lg','xl' ].flatMap( bp => [ 6,4,3 ].map( n => ( { label: `col-${bp}-${n}`, value: `col-${bp}-${n}` } ) ) ) ];

export default function Edit( { attributes, setAttributes, clientId } ) {
	const { fieldType, label, name, placeholder, helpText, required, disabled, readonly, size, colClass, hideLabel, validFeedback, invalidFeedback } = attributes;
	const { removeBlock } = useDispatch( 'core/block-editor' );
	const isHidden = fieldType === 'hidden';

	const blockProps = useBlockProps( { className: [ 'wmblocks-form-field', colClass ].filter( Boolean ).join( ' ' ) } );

	return (
		<>
			<BlockControls>
				<ToolbarGroup>
					<ToolbarButton icon="trash" label={ __( 'Remove field', 'wmblocks' ) } onClick={ () => removeBlock( clientId ) } isDestructive />
				</ToolbarGroup>
			</BlockControls>
			<InspectorControls>
				<PanelBody title={ __( 'Field', 'wmblocks' ) } initialOpen={ true }>
					<SelectControl label={ __( 'Type', 'wmblocks' ) }        value={ fieldType }   options={ FIELD_TYPES } onChange={ v => setAttributes( { fieldType: v } ) } />
					<TextControl   label={ __( 'Label', 'wmblocks' ) }       value={ label }       onChange={ v => setAttributes( { label: v } ) } />
					<TextControl   label={ __( 'Name', 'wmblocks' ) }        value={ name }        onChange={ v => setAttributes( { name: v } ) } placeholder="field-name" />
					<TextControl   label={ __( 'Placeholder', 'wmblocks' ) } value={ placeholder } onChange={ v => setAttributes( { placeholder: v } ) } />
					<TextControl   label={ __( 'Help Text', 'wmblocks' ) }   value={ helpText }    onChange={ v => setAttributes( { helpText: v } ) } />
					<ToggleControl label={ __( 'Required', 'wmblocks' ) }    checked={ !! required }  onChange={ v => setAttributes( { required: v } ) } />
					<ToggleControl label={ __( 'Disabled', 'wmblocks' ) }    checked={ !! disabled }  onChange={ v => setAttributes( { disabled: v } ) } />
					<ToggleControl label={ __( 'Readonly', 'wmblocks' ) }    checked={ !! readonly }  onChange={ v => setAttributes( { readonly: v } ) } />
					<ToggleControl label={ __( 'Hide Label', 'wmblocks' ) }  checked={ !! hideLabel } onChange={ v => setAttributes( { hideLabel: v } ) } />
					<SelectControl label={ __( 'Size', 'wmblocks' ) }        value={ size }     options={ SIZE_OPTS } onChange={ v => setAttributes( { size: v } ) } />
					<SelectControl label={ __( 'Grid Column', 'wmblocks' ) } value={ colClass } options={ COL_OPTS  } onChange={ v => setAttributes( { colClass: v } ) } />
				</PanelBody>
				<PanelBody title={ __( 'Validation', 'wmblocks' ) } initialOpen={ false }>
					<TextControl label={ __( 'Valid feedback',   'wmblocks' ) } value={ validFeedback }   onChange={ v => setAttributes( { validFeedback: v } ) }   placeholder="Looks good!" />
					<TextControl label={ __( 'Invalid feedback', 'wmblocks' ) } value={ invalidFeedback } onChange={ v => setAttributes( { invalidFeedback: v } ) } placeholder="Please enter a value." />
				</PanelBody>
			</InspectorControls>

			<div { ...blockProps }>
				{ isHidden ? (
					<div style={ { padding: '4px 8px', background: '#f8f9fa', border: '1px dashed #adb5bd', borderRadius: 4, fontSize: 11, color: '#6c757d' } }>
						🙈 { __( 'Hidden field', 'wmblocks' ) }: <code>{ name || 'unnamed' }</code>
					</div>
				) : (
					<div className="mb-3">
						{ ! hideLabel && <label className="form-label">{ label }{ required && <span style={ { color: '#dc3545', marginLeft: 2 } }>*</span> }</label> }
						<input
							type={ fieldType } className={ [ 'form-control', size ].filter( Boolean ).join( ' ' ) }
							placeholder={ placeholder } disabled={ disabled } readOnly={ readonly }
							style={ { pointerEvents: 'none' } }
						/>
						{ helpText && <div className="form-text">{ helpText }</div> }
						{ validFeedback   && <div className="valid-feedback">{ validFeedback }</div> }
						{ invalidFeedback && <div className="invalid-feedback">{ invalidFeedback }</div> }
					</div>
				) }
			</div>
		</>
	);
}
