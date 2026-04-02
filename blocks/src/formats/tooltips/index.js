import { __ } from '@wordpress/i18n';
import { registerFormatType, applyFormat, removeFormat, getActiveFormat } from '@wordpress/rich-text';
import { RichTextToolbarButton } from '@wordpress/block-editor';
import { Popover, TextControl, SelectControl, Button, Flex, FlexItem } from '@wordpress/components';
import { useState } from '@wordpress/element';

const FORMAT_NAME = 'wmblocks/tooltip';
const FORMAT_TAG  = 'span';

// Editor highlight style
const style = document.createElement( 'style' );
style.textContent = '.wm-tooltip { border-bottom: 2px dotted #0d6efd; cursor: help; }';
document.head.appendChild( style );

registerFormatType( FORMAT_NAME, {
	title:     __( 'Tooltip', 'wmblocks' ),
	tagName:   FORMAT_TAG,
	className: 'wm-tooltip',

	attributes: {
		'data-bs-toggle':    'data-bs-toggle',
		'data-bs-title':     'data-bs-title',
		'data-bs-placement': 'data-bs-placement',
		title:               'title',
	},

	edit( { isActive, value, onChange, contentRef } ) {
		const [ isPopoverVisible, setPopoverVisible ] = useState( false );
		const [ tooltipText, setTooltipText ]         = useState( '' );
		const [ placement, setPlacement ]             = useState( 'top' );

		const activeFormat       = getActiveFormat( value, FORMAT_NAME );
		const existingText       = activeFormat?.attributes?.[ 'data-bs-title' ]     || '';
		const existingPlacement  = activeFormat?.attributes?.[ 'data-bs-placement' ] || 'top';

		const handleButtonClick = () => {
			if ( isActive ) {
				setTooltipText( existingText );
				setPlacement( existingPlacement );
			} else {
				setTooltipText( '' );
				setPlacement( 'top' );
			}
			setPopoverVisible( ! isPopoverVisible );
		};

		const handleApply = () => {
			if ( ! tooltipText.trim() ) return;
			onChange(
				applyFormat( value, {
					type: FORMAT_NAME,
					attributes: {
						'data-bs-toggle':    'tooltip',
						'data-bs-title':     tooltipText.trim(),
						'data-bs-placement': placement,
						title:               tooltipText.trim(),
					},
				} )
			);
			setPopoverVisible( false );
		};

		const handleRemove = () => {
			onChange( removeFormat( value, FORMAT_NAME ) );
			setPopoverVisible( false );
		};

		const TooltipIcon = (
			<svg viewBox="0 0 24 24" width="20" height="20" xmlns="http://www.w3.org/2000/svg">
				<circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="2"/>
				<text x="12" y="17" textAnchor="middle" fontSize="13" fontWeight="bold" fill="currentColor">?</text>
			</svg>
		);

		return (
			<>
				<RichTextToolbarButton
					icon={ TooltipIcon }
					title={ __( 'Tooltip', 'wmblocks' ) }
					onClick={ handleButtonClick }
					isActive={ isActive }
				/>

				{ isPopoverVisible && (
					<Popover
						placement="bottom-start"
						onClose={ () => setPopoverVisible( false ) }
						anchor={ contentRef?.current }
						focusOnMount="firstElement"
					>
						<div style={ { padding: '16px', minWidth: '280px' } }>
							<div style={ { fontSize: '12px', fontWeight: 600, color: '#1e1e1e', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '6px' } }>
								{ TooltipIcon }
								{ isActive ? __( 'Edit Tooltip', 'wmblocks' ) : __( 'Add Tooltip', 'wmblocks' ) }
							</div>
							<TextControl
								label={ __( 'Tooltip Text', 'wmblocks' ) }
								value={ tooltipText }
								onChange={ setTooltipText }
								placeholder={ __( 'Enter tooltip content…', 'wmblocks' ) }
								help={ __( 'Text shown when hovering over the selection.', 'wmblocks' ) }
								onKeyDown={ ( e ) => {
									if ( e.key === 'Enter' ) handleApply();
									if ( e.key === 'Escape' ) setPopoverVisible( false );
								} }
							/>
							<SelectControl
								label={ __( 'Placement', 'wmblocks' ) }
								value={ placement }
								options={ [
									{ label: 'Top',    value: 'top' },
									{ label: 'Bottom', value: 'bottom' },
									{ label: 'Left',   value: 'left' },
									{ label: 'Right',  value: 'right' },
								] }
								onChange={ setPlacement }
							/>
							<Flex gap={ 2 } style={ { marginTop: '8px' } }>
								<FlexItem isBlock>
									<Button variant="primary" onClick={ handleApply } disabled={ ! tooltipText.trim() } style={ { width: '100%', justifyContent: 'center' } }>
										{ isActive ? __( 'Update', 'wmblocks' ) : __( 'Apply', 'wmblocks' ) }
									</Button>
								</FlexItem>
								{ isActive && (
									<FlexItem>
										<Button variant="tertiary" isDestructive onClick={ handleRemove }>
											{ __( 'Remove', 'wmblocks' ) }
										</Button>
									</FlexItem>
								) }
								<FlexItem>
									<Button variant="tertiary" onClick={ () => setPopoverVisible( false ) }>
										{ __( 'Cancel', 'wmblocks' ) }
									</Button>
								</FlexItem>
							</Flex>
						</div>
					</Popover>
				) }
			</>
		);
	},
} );