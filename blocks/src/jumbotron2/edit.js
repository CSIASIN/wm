import { __ } from '@wordpress/i18n';
import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, TextControl, SelectControl } from '@wordpress/components';
import './editor.scss';

const BG_OPTS = [
	{ label: 'bg-body-tertiary (faded)',  value: 'bg-body-tertiary' },
	{ label: 'bg-body-secondary',         value: 'bg-body-secondary' },
	{ label: 'bg-light',                  value: 'bg-light' },
	{ label: 'bg-white',                  value: 'bg-white' },
	{ label: 'bg-dark text-white',        value: 'bg-dark text-white' },
	{ label: 'bg-primary text-white',     value: 'bg-primary text-white' },
];
const BTN_VARIANTS = [
	{ label: 'Primary',           value: 'btn-primary' },
	{ label: 'Secondary',         value: 'btn-secondary' },
	{ label: 'Outline Primary',   value: 'btn-outline-primary' },
	{ label: 'Outline Secondary', value: 'btn-outline-secondary' },
	{ label: 'Dark',              value: 'btn-dark' },
	{ label: 'Light',             value: 'btn-light' },
	{ label: 'Link',              value: 'btn-link' },
];

const E = ( { tag: Tag = 'span', value, onChange, style = {}, placeholder = '' } ) => (
	<Tag contentEditable suppressContentEditableWarning
		onInput={ e => onChange( e.currentTarget.textContent ) }
		onKeyDown={ e => Tag !== 'p' && e.key === 'Enter' && e.preventDefault() }
		style={ { outline: 'none', cursor: 'text', ...style } }
		data-placeholder={ placeholder }
	>{ value }</Tag>
);

export default function Edit( { attributes, setAttributes } ) {
	const { heading, subtext, btn1Text, btn1Url, btn1Variant, bgColor, customClass } = attributes;
	const wrapClass = [ 'p-5 mb-4 rounded-3', bgColor, customClass ].filter( Boolean ).join( ' ' );
	const blockProps = useBlockProps( { className: 'wmblocks-jumbotron2' } );

	return (
		<>
			<InspectorControls>
				<PanelBody title={ __( 'Button', 'wmblocks' ) } initialOpen={ true }>
					<TextControl label={ __( 'Button Text', 'wmblocks' ) }    value={ btn1Text }    onChange={ v => setAttributes( { btn1Text: v } ) } />
					<TextControl label={ __( 'Button URL', 'wmblocks' ) }     value={ btn1Url }     onChange={ v => setAttributes( { btn1Url: v } ) } />
					<SelectControl label={ __( 'Button Style', 'wmblocks' ) } value={ btn1Variant } options={ BTN_VARIANTS } onChange={ v => setAttributes( { btn1Variant: v } ) } />
				</PanelBody>
				<PanelBody title={ __( 'Style', 'wmblocks' ) } initialOpen={ false }>
					<SelectControl label={ __( 'Background', 'wmblocks' ) }  value={ bgColor }    options={ BG_OPTS } onChange={ v => setAttributes( { bgColor: v } ) } />
					<TextControl label={ __( 'Extra Classes', 'wmblocks' ) } value={ customClass } onChange={ v => setAttributes( { customClass: v } ) } />
				</PanelBody>
			</InspectorControls>

			<div { ...blockProps }>
				<div className={ wrapClass }>
					<div className="container-fluid py-5">
						<E tag="h1" value={ heading } onChange={ v => setAttributes( { heading: v } ) }
							style={ { display: 'block', fontWeight: 700, fontSize: '2.5rem', marginBottom: '1rem' } }
							placeholder={ __( 'Heading…', 'wmblocks' ) }
						/>
						<E tag="p" value={ subtext } onChange={ v => setAttributes( { subtext: v } ) }
							style={ { display: 'block', fontSize: '1.1rem', marginBottom: '1.5rem', color: '#555', maxWidth: '600px' } }
							placeholder={ __( 'Description…', 'wmblocks' ) }
						/>
						<a href="#" className={ `btn ${ btn1Variant } btn-lg` } onClick={ e => e.preventDefault() }>
							<E value={ btn1Text } onChange={ v => setAttributes( { btn1Text: v } ) } />
						</a>
					</div>
				</div>
			</div>
		</>
	);
}
