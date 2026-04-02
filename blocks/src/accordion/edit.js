import { __ } from '@wordpress/i18n';
import { useBlockProps, InspectorControls, InnerBlocks, BlockControls } from '@wordpress/block-editor';
import { useSelect } from '@wordpress/data';
import { PanelBody, ToggleControl, TextControl, ToolbarGroup, ToolbarButton } from '@wordpress/components';
import { useEffect } from '@wordpress/element';
import './editor.scss';

const ACCORDION_TEMPLATE = [
	[ 'wmblocks/accordion-item', { heading: 'Accordion Item #1', itemId: 'item-1', startOpen: true  } ],
	[ 'wmblocks/accordion-item', { heading: 'Accordion Item #2', itemId: 'item-2', startOpen: false } ],
	[ 'wmblocks/accordion-item', { heading: 'Accordion Item #3', itemId: 'item-3', startOpen: false } ],
];

export default function Edit( { attributes, setAttributes, clientId } ) {
	const { alwaysOpen, flush, accordionId } = attributes;

	// Auto-generate accordionId once on mount
	useEffect( () => {
		if ( ! accordionId ) {
			setAttributes( { accordionId: 'accordion-' + clientId.slice( 0, 8 ) } );
		}
	}, [] );

	const innerBlocks = useSelect( ( select ) =>
		select( 'core/block-editor' ).getBlocks( clientId )
	, [ clientId ] );

	const itemCount = innerBlocks.length;

	const blockProps = useBlockProps( {
		className: 'wmblocks-accordion-wrapper',
	} );

	return (
		<>
			<BlockControls>
				<ToolbarGroup>
					<div style={ { display: 'flex', alignItems: 'center', padding: '0 8px', fontSize: '12px', fontWeight: 500, color: '#1e1e1e', gap: '6px' } }>
						{ __( 'Items', 'wmblocks' ) }
						<span style={ { background: '#007cba', color: '#fff', borderRadius: '10px', padding: '1px 7px', fontSize: '11px', fontWeight: 600 } }>
							{ itemCount }
						</span>
					</div>
				</ToolbarGroup>
			</BlockControls>

			<InspectorControls>
				<PanelBody title={ __( 'Accordion Settings', 'wmblocks' ) } initialOpen={ true }>
					<TextControl
						label={ __( 'Accordion ID', 'wmblocks' ) }
						value={ accordionId }
						onChange={ ( v ) => setAttributes( { accordionId: v.replace( /\s+/g, '-' ).toLowerCase() } ) }
						help={ __( 'Unique ID used for parent control. Auto-generated.', 'wmblocks' ) }
					/>
					<ToggleControl
						label={ __( 'Always Open', 'wmblocks' ) }
						checked={ !! alwaysOpen }
						onChange={ ( v ) => setAttributes( { alwaysOpen: v } ) }
						help={ __( 'Allow multiple items to be open at the same time.', 'wmblocks' ) }
					/>
					<ToggleControl
						label={ __( 'Flush Style', 'wmblocks' ) }
						checked={ !! flush }
						onChange={ ( v ) => setAttributes( { flush: v } ) }
						help={ __( 'Remove borders and rounded corners for edge-to-edge styling.', 'wmblocks' ) }
					/>
				</PanelBody>
			</InspectorControls>

			<div { ...blockProps }>
				<div className={ 'accordion' + ( flush ? ' accordion-flush' : '' ) }>
					<InnerBlocks
						allowedBlocks={ [ 'wmblocks/accordion-item' ] }
						template={ ACCORDION_TEMPLATE }
						templateLock={ false }
					/>
				</div>
			</div>
		</>
	);
}
