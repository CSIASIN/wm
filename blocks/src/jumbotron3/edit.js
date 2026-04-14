import { __ } from '@wordpress/i18n';
import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, TextControl, SelectControl } from '@wordpress/components';
import './editor.scss';

const BG_OPTS = [
	{ label: 'bg-body-tertiary', value: 'bg-body-tertiary' },
	{ label: 'bg-body-secondary', value: 'bg-body-secondary' },
	{ label: 'bg-light', value: 'bg-light' },
	{ label: 'bg-dark text-white', value: 'bg-dark text-white' },
	{ label: 'bg-primary text-white', value: 'bg-primary text-white' },
];
const BTN_VARIANTS = [
	{ label: 'Primary', value: 'btn-primary' }, { label: 'Secondary', value: 'btn-secondary' },
	{ label: 'Outline Primary', value: 'btn-outline-primary' }, { label: 'Outline Secondary', value: 'btn-outline-secondary' },
	{ label: 'Outline Dark', value: 'btn-outline-dark' }, { label: 'Light', value: 'btn-light' },
];
const CONTAINER_OPTS = [
	{ label: 'container',       value: 'container' },
	{ label: 'container-fluid', value: 'container-fluid' },
	{ label: 'container-lg',    value: 'container-lg' },
	{ label: 'container-xl',    value: 'container-xl' },
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
	const { heading, subtext, btn1Text, btn1Url, btn1Variant, btn2Text, btn2Url, btn2Variant, bgColor, containerType, customClass } = attributes;
	// Full-width: bg is on outer div, container is inner
	const outerClass = [ 'py-5', bgColor, customClass ].filter( Boolean ).join( ' ' );
	const blockProps = useBlockProps( { className: 'wmblocks-jumbotron3' } );

	return (
		<>
			<InspectorControls>
				<PanelBody title={ __( 'Buttons', 'wmblocks' ) } initialOpen={ true }>
					<TextControl label={ __( 'Button 1 Text', 'wmblocks' ) }    value={ btn1Text }    onChange={ v => setAttributes( { btn1Text: v } ) } />
					<TextControl label={ __( 'Button 1 URL', 'wmblocks' ) }     value={ btn1Url }     onChange={ v => setAttributes( { btn1Url: v } ) } />
					<SelectControl label={ __( 'Button 1 Style', 'wmblocks' ) } value={ btn1Variant } options={ BTN_VARIANTS } onChange={ v => setAttributes( { btn1Variant: v } ) } />
					<TextControl label={ __( 'Button 2 Text', 'wmblocks' ) }    value={ btn2Text }    onChange={ v => setAttributes( { btn2Text: v } ) } />
					<TextControl label={ __( 'Button 2 URL', 'wmblocks' ) }     value={ btn2Url }     onChange={ v => setAttributes( { btn2Url: v } ) } />
					<SelectControl label={ __( 'Button 2 Style', 'wmblocks' ) } value={ btn2Variant } options={ BTN_VARIANTS } onChange={ v => setAttributes( { btn2Variant: v } ) } />
				</PanelBody>
				<PanelBody title={ __( 'Style', 'wmblocks' ) } initialOpen={ false }>
					<SelectControl label={ __( 'Background', 'wmblocks' ) }  value={ bgColor }       options={ BG_OPTS }        onChange={ v => setAttributes( { bgColor: v } ) } />
					<SelectControl label={ __( 'Container', 'wmblocks' ) }   value={ containerType } options={ CONTAINER_OPTS } onChange={ v => setAttributes( { containerType: v } ) }
						help={ __( 'The inner container controls content alignment. The background spans full width.', 'wmblocks' ) } />
					<TextControl label={ __( 'Extra Classes', 'wmblocks' ) } value={ customClass }   onChange={ v => setAttributes( { customClass: v } ) } />
				</PanelBody>
			</InspectorControls>

			<div { ...blockProps }>
				{ /* Full-width bg wrapper */ }
				<div className={ outerClass }>
					{ /* Contained inner */ }
					<div className={ containerType }>
						<E tag="h1" value={ heading } onChange={ v => setAttributes( { heading: v } ) }
							style={ { display: 'block', fontWeight: 700, fontSize: '2.5rem', marginBottom: '1rem' } }
							placeholder={ __( 'Heading…', 'wmblocks' ) }
						/>
						<E tag="p" value={ subtext } onChange={ v => setAttributes( { subtext: v } ) }
							style={ { display: 'block', fontSize: '1.1rem', marginBottom: '1.5rem', color: '#555' } }
							placeholder={ __( 'Description…', 'wmblocks' ) }
						/>
						<div className="d-flex gap-2 flex-wrap">
							<a href="#" className={ `btn ${ btn1Variant } btn-lg` } onClick={ e => e.preventDefault() }>
								<E value={ btn1Text } onChange={ v => setAttributes( { btn1Text: v } ) } />
							</a>
							<a href="#" className={ `btn ${ btn2Variant } btn-lg` } onClick={ e => e.preventDefault() }>
								<E value={ btn2Text } onChange={ v => setAttributes( { btn2Text: v } ) } />
							</a>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
