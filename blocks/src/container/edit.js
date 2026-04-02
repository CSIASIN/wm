/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps, InspectorControls } from '@wordpress/block-editor';

/**
 * WordPress components used for the sidebar panel and select control.
 */
import { PanelBody, TextareaControl } from '@wordpress/components';
//import { PanelBody, SelectControl } from '@wordpress/components';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
//const { InspectorControls } = wp.editor;
//const { PanelBody } = wp.components;

import blockPreview from './block-preview.png';

// Shared controls — copy the controls/ folder next to each block's src folder
import { PaddingControl, MarginControl } from '../../controls/spacingControls';
import { BackgroundColorControl, TextColorControl, OpacityControl, ShadowControl, BorderControl, CustomCSSControl } from '../../controls/visualControls';
import { VisibilityControl } from '../../controls/visibilityControl';
export default function Edit( { attributes, setAttributes } ) {
	const {
		margin, padding, customCSS, preview, backgroundColor, opacity,
		borderSides, borderRemove, borderColor, borderOpacityClass,
		borderOpacityCustom, borderSize, borderRadius, borderRadiusSize,
		textColor, hideXs, hideSm, hideMd, hideLg, hideXl, hideXxl, shadow,
	} = attributes;
 
	if ( preview ) {
		return (
			<div style={ { width: '100%' } }>
				<img src={ blockPreview } alt={ __( 'Container block preview', 'wm' ) } style={ { width: '100%', height: 'auto', display: 'block' } } />
			</div>
		);
	}
 
	const parseInlineCSS = ( cssString ) => {
		if ( ! cssString ) return {};
		return cssString.split( ';' ).reduce( ( styleObj, rule ) => {
			const [ property, value ] = rule.split( ':' );
			if ( property && value ) {
				const camelProp = property.trim().replace( /-([a-z])/g, ( _, l ) => l.toUpperCase() );
				styleObj[ camelProp ] = value.trim();
			}
			return styleObj;
		}, {} );
	};
 
	const borderClasses = [
		...( borderSides || [] ),
		...( borderRemove || [] ),
		borderColor, borderOpacityClass, borderSize, borderRadius, borderRadiusSize,
	].filter( Boolean ).join( ' ' );
 
	const visibilityClasses = [
		!! hideXs  ? 'd-none d-sm-block'   : '',
		!! hideSm  ? 'd-sm-none d-md-block' : '',
		!! hideMd  ? 'd-md-none d-lg-block' : '',
		!! hideLg  ? 'd-lg-none d-xl-block' : '',
		!! hideXl  ? 'd-xl-none d-xxl-block': '',
		!! hideXxl ? 'd-xxl-none'           : '',
	].filter( Boolean ).join( ' ' );
 
	const blockProps = useBlockProps( {
		style: {
			opacity: opacity !== 100 ? opacity / 100 : undefined,
			color: textColor || undefined,
			...( borderOpacityCustom ? { '--bs-border-opacity': borderOpacityCustom } : {} ),
			...parseInlineCSS( customCSS ),
		},
	} );
 
	const combinedClassName = [
		blockProps.className,
		'container',
		padding, margin, backgroundColor,
		borderClasses, visibilityClasses, shadow,
	].filter( Boolean ).map( ( c ) => c.trim() ).filter( Boolean ).join( ' ' );
 
	return (
		<>
			<InspectorControls>
				<PaddingControl        value={ padding }         onChange={ ( v ) => setAttributes( { padding: v } ) } />
				<MarginControl         value={ margin }          onChange={ ( v ) => setAttributes( { margin: v } ) } />
				<BackgroundColorControl value={ backgroundColor } onChange={ ( v ) => setAttributes( { backgroundColor: v } ) } />
				<OpacityControl        value={ opacity }         onChange={ ( v ) => setAttributes( { opacity: v } ) } />
				<TextColorControl      value={ textColor }       onChange={ ( v ) => setAttributes( { textColor: v } ) } />
				<ShadowControl         value={ shadow }          onChange={ ( v ) => setAttributes( { shadow: v } ) } />
				<BorderControl
					borderSides={ borderSides }
					borderRemove={ borderRemove }
					borderColor={ borderColor }
					borderOpacityClass={ borderOpacityClass }
					borderOpacityCustom={ borderOpacityCustom }
					borderSize={ borderSize }
					borderRadius={ borderRadius }
					borderRadiusSize={ borderRadiusSize }
					setAttributes={ setAttributes }
				/>
				<CustomCSSControl value={ customCSS } onChange={ ( v ) => setAttributes( { customCSS: v } ) } />
				<VisibilityControl
					hideXs={ hideXs } hideSm={ hideSm } hideMd={ hideMd }
					hideLg={ hideLg } hideXl={ hideXl } hideXxl={ hideXxl }
					setAttributes={ setAttributes }
				/>
			</InspectorControls>
			<div { ...blockProps } className={ combinedClassName }>
				{ __( 'Container – used for grid, row and columns', 'wm' ) }
			</div>
		</>
	);
}