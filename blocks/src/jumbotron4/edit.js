import { __ } from '@wordpress/i18n';
import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, TextControl, SelectControl } from '@wordpress/components';
import './editor.scss';

const BG_OPTS = [
	{ label: 'bg-body-tertiary', value: 'bg-body-tertiary' },
	{ label: 'bg-body-secondary', value: 'bg-body-secondary' },
	{ label: 'bg-light', value: 'bg-light' },
	{ label: 'bg-white', value: 'bg-white' },
	{ label: 'bg-dark text-white', value: 'bg-dark text-white' },
	{ label: 'bg-primary text-white', value: 'bg-primary text-white' },
	{ label: 'bg-secondary text-white', value: 'bg-secondary text-white' },
];
const BTN_VARIANTS = [
	{ label: 'Primary', value: 'btn-primary' }, { label: 'Secondary', value: 'btn-secondary' },
	{ label: 'Outline Primary', value: 'btn-outline-primary' }, { label: 'Outline Secondary', value: 'btn-outline-secondary' },
	{ label: 'Outline Dark', value: 'btn-outline-dark' }, { label: 'Dark', value: 'btn-dark' }, { label: 'Light', value: 'btn-light' },
];
const ROUNDED_OPTS = [
	{ label: 'rounded-3', value: 'rounded-3' },
	{ label: 'rounded',   value: 'rounded' },
	{ label: 'rounded-4', value: 'rounded-4' },
	{ label: 'rounded-5', value: 'rounded-5' },
	{ label: 'rounded-0', value: 'rounded-0' },
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
	const { heading, subtext, btn1Text, btn1Url, btn1Variant, btn2Text, btn2Url, btn2Variant, bgColor, rounded, customClass } = attributes;
	const wrapClass = [ 'p-5 mb-4', bgColor, rounded, customClass ].filter( Boolean ).join( ' ' );
	const blockProps = useBlockProps( { className: 'wmblocks-jumbotron4' } );

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
					<SelectControl label={ __( 'Background', 'wmblocks' ) }  value={ bgColor }    options={ BG_OPTS }     onChange={ v => setAttributes( { bgColor: v } ) } />
					<SelectControl label={ __( 'Rounded',    'wmblocks' ) }  value={ rounded }    options={ ROUNDED_OPTS } onChange={ v => setAttributes( { rounded: v } ) } />
					<TextControl label={ __( 'Extra Classes', 'wmblocks' ) } value={ customClass } onChange={ v => setAttributes( { customClass: v } ) } />
				</PanelBody>
			</InspectorControls>

			<div { ...blockProps }>
				<div className={ wrapClass }>
					<E tag="h1" value={ heading } onChange={ v => setAttributes( { heading: v } ) }
						style={ { display: 'block', fontWeight: 700, fontSize: '2.5rem', marginBottom: '1rem' } }
						placeholder={ __( 'Heading…', 'wmblocks' ) }
					/>
					<E tag="p" value={ subtext } onChange={ v => setAttributes( { subtext: v } ) }
						style={ { display: 'block', fontSize: '1.1rem', marginBottom: '1.5rem', color: '#555' } }
						placeholder={ __( 'Description…', 'wmblocks' ) }
					/>
					<hr className="my-4" />
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
		</>
	);
}
