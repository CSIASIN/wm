import { __ } from '@wordpress/i18n';
import { useBlockProps, InspectorControls, InnerBlocks, RichText } from '@wordpress/block-editor';
import { PanelBody, TextControl, SelectControl, ToggleControl } from '@wordpress/components';
import { useState } from '@wordpress/element';
import { useSelect } from '@wordpress/data';
import './editor.scss';

const COLLAPSE_CONTENT_TEMPLATE = [
	[ 'core/paragraph', { content: 'This is the collapsible content. Add any blocks you need inside here.' } ],
];

const BTN_VARIANTS = [
	{ label: 'Primary',          value: 'btn-primary' },
	{ label: 'Secondary',        value: 'btn-secondary' },
	{ label: 'Success',          value: 'btn-success' },
	{ label: 'Danger',           value: 'btn-danger' },
	{ label: 'Warning',          value: 'btn-warning' },
	{ label: 'Info',             value: 'btn-info' },
	{ label: 'Light',            value: 'btn-light' },
	{ label: 'Dark',             value: 'btn-dark' },
	{ label: 'Link',             value: 'btn-link' },
	{ label: 'Outline Primary',  value: 'btn-outline-primary' },
	{ label: 'Outline Secondary',value: 'btn-outline-secondary' },
	{ label: 'Outline Success',  value: 'btn-outline-success' },
	{ label: 'Outline Danger',   value: 'btn-outline-danger' },
];

function labelToId( label ) {
	return ( label || '' )
		.toLowerCase().trim()
		.replace( /\s+/g, '-' )
		.replace( /[^a-z0-9\-]/g, '' );
}

export default function Edit( { attributes, setAttributes, clientId } ) {
	const {
		collapseId, triggerText, triggerVariant, triggerType,
		startOpen, horizontal, contentWidth,
	} = attributes;

	// Editor preview — toggle content visibility
	const [ editorOpen, setEditorOpen ] = useState( true );

	const resolvedId = collapseId || labelToId( triggerText ) || ( 'collapse-' + clientId.slice( 0, 6 ) );

	const blockProps = useBlockProps( {
		className: 'wmblocks-collapse-wrapper',
	} );

	// Content area style — horizontal uses width, vertical uses height auto
	const contentStyle = horizontal
		? { display: editorOpen ? 'flex' : 'none', width: contentWidth, overflow: 'hidden' }
		: { display: editorOpen ? 'block' : 'none' };

	return (
		<>
			<InspectorControls>
				<PanelBody title={ __( 'Trigger Settings', 'wmblocks' ) } initialOpen={ true }>
					<SelectControl
						label={ __( 'Trigger Type', 'wmblocks' ) }
						value={ triggerType }
						options={ [
							{ label: 'Button', value: 'button' },
							{ label: 'Link (anchor tag)', value: 'link' },
						] }
						onChange={ ( v ) => setAttributes( { triggerType: v } ) }
						help={ __( 'Button is recommended for accessibility.', 'wmblocks' ) }
					/>
					<SelectControl
						label={ __( 'Button Style', 'wmblocks' ) }
						value={ triggerVariant }
						options={ BTN_VARIANTS }
						onChange={ ( v ) => setAttributes( { triggerVariant: v } ) }
					/>
				</PanelBody>

				<PanelBody title={ __( 'Collapse Settings', 'wmblocks' ) } initialOpen={ true }>
					<TextControl
						label={ __( 'Collapse ID', 'wmblocks' ) }
						value={ collapseId }
						onChange={ ( v ) => setAttributes( { collapseId: v.replace( /\s+/g, '-' ).toLowerCase() } ) }
						help={ __( 'Auto-generated from button text. Override if needed.', 'wmblocks' ) }
						placeholder={ resolvedId }
					/>
					<ToggleControl
						label={ __( 'Start Open', 'wmblocks' ) }
						checked={ !! startOpen }
						onChange={ ( v ) => setAttributes( { startOpen: v } ) }
						help={ __( 'Show content expanded on page load.', 'wmblocks' ) }
					/>
					<ToggleControl
						label={ __( 'Horizontal Collapse', 'wmblocks' ) }
						checked={ !! horizontal }
						onChange={ ( v ) => setAttributes( { horizontal: v } ) }
						help={ __( 'Collapse horizontally (width) instead of vertically (height).', 'wmblocks' ) }
					/>
					{ horizontal && (
						<TextControl
							label={ __( 'Content Width', 'wmblocks' ) }
							value={ contentWidth }
							onChange={ ( v ) => setAttributes( { contentWidth: v } ) }
							help={ __( 'e.g. 300px — width when expanded horizontally.', 'wmblocks' ) }
						/>
					) }
				</PanelBody>
			</InspectorControls>

			<div { ...blockProps }>

				{ /* Trigger button preview — click to toggle editor preview */ }
				<div style={ { marginBottom: '12px' } }>
					<RichText
						tagName={ triggerType === 'link' ? 'a' : 'button' }
						className={ 'btn ' + triggerVariant }
						value={ triggerText }
						onChange={ ( v ) => {
							const autoId  = labelToId( triggerText );
							const isAuto  = collapseId === autoId || collapseId === '';
							setAttributes( {
								triggerText: v,
								...( isAuto ? { collapseId: labelToId( v ) } : {} ),
							} );
						} }
						allowedFormats={ [] }
						onClick={ () => setEditorOpen( ! editorOpen ) }
						style={ { cursor: 'pointer' } }
					/>
					<span style={ { marginLeft: '10px', fontSize: '11px', color: '#757575' } }>
						{ editorOpen
							? __( '↑ click button to collapse preview', 'wmblocks' )
							: __( '↓ click button to expand preview', 'wmblocks' )
						}
					</span>
				</div>

				{ /* Collapsible content area */ }
				<div
					className="wmblocks-collapse-content"
					style={ {
						...contentStyle,
						border: '1px dashed #007cba',
						borderRadius: '4px',
						padding: editorOpen ? '12px' : 0,
						transition: 'all 0.2s',
						overflow: 'hidden',
					} }
				>
					<InnerBlocks
						template={ COLLAPSE_CONTENT_TEMPLATE }
						templateLock={ false }
					/>
				</div>

				{ /* Collapsed indicator */ }
				{ ! editorOpen && (
					<div style={ { fontSize: '11px', color: '#007cba', fontStyle: 'italic', marginTop: '4px' } }>
						{ __( '[ Content hidden — click button to preview ]', 'wmblocks' ) }
					</div>
				) }

			</div>
		</>
	);
}
