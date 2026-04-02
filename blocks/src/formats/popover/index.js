import { __ } from '@wordpress/i18n';
import { registerFormatType, applyFormat, removeFormat, getActiveFormat } from '@wordpress/rich-text';
import { RichTextToolbarButton } from '@wordpress/block-editor';
import { Popover, TextControl, TextareaControl, SelectControl, Button, Flex, FlexItem } from '@wordpress/components';
import { useState } from '@wordpress/element';

const FORMAT_NAME = 'wmblocks/popover';
const FORMAT_TAG  = 'span';

// Editor highlight style
const style = document.createElement( 'style' );
style.textContent = '.wm-popover { border-bottom: 2px dashed #6f42c1; cursor: pointer; }';
document.head.appendChild( style );

registerFormatType( FORMAT_NAME, {
	title:     __( 'Popover', 'wmblocks' ),
	tagName:   FORMAT_TAG,
	className: 'wm-popover',

	attributes: {
		'data-bs-toggle':    'data-bs-toggle',
		'data-bs-title':     'data-bs-title',
		'data-bs-content':   'data-bs-content',
		'data-bs-placement': 'data-bs-placement',
		'data-bs-trigger':   'data-bs-trigger',
		tabindex:            'tabindex',
	},

	edit( { isActive, value, onChange, contentRef } ) {
		const [ isPopoverVisible, setPopoverVisible ] = useState( false );
		const [ title, setTitle ]                     = useState( '' );
		const [ content, setContent ]                 = useState( '' );
		const [ placement, setPlacement ]             = useState( 'top' );
		const [ trigger, setTrigger ]                 = useState( 'click' );

		const activeFormat    = getActiveFormat( value, FORMAT_NAME );
		const existingTitle   = activeFormat?.attributes?.[ 'data-bs-title' ]     || '';
		const existingContent = activeFormat?.attributes?.[ 'data-bs-content' ]   || '';
		const existingPlace   = activeFormat?.attributes?.[ 'data-bs-placement' ] || 'top';
		const existingTrigger = activeFormat?.attributes?.[ 'data-bs-trigger' ]   || 'click';

		const handleButtonClick = () => {
			if ( isActive ) {
				setTitle( existingTitle );
				setContent( existingContent );
				setPlacement( existingPlace );
				setTrigger( existingTrigger );
			} else {
				setTitle( '' );
				setContent( '' );
				setPlacement( 'top' );
				setTrigger( 'click' );
			}
			setPopoverVisible( ! isPopoverVisible );
		};

		const handleApply = () => {
			if ( ! content.trim() ) return;
			onChange(
				applyFormat( value, {
					type: FORMAT_NAME,
					attributes: {
						'data-bs-toggle':    'popover',
						'data-bs-title':     title.trim(),
						'data-bs-content':   content.trim(),
						'data-bs-placement': placement,
						'data-bs-trigger':   trigger,
						tabindex:            '0',
					},
				} )
			);
			setPopoverVisible( false );
		};

		const handleRemove = () => {
			onChange( removeFormat( value, FORMAT_NAME ) );
			setPopoverVisible( false );
		};

		const PopoverIcon = (
			<svg viewBox="0 0 24 24" width="20" height="20" xmlns="http://www.w3.org/2000/svg">
				<path fill="none" stroke="currentColor" strokeWidth="2" d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
			</svg>
		);

		return (
			<>
				<RichTextToolbarButton
					icon={ PopoverIcon }
					title={ __( 'Popover', 'wmblocks' ) }
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
						<div style={ { padding: '16px', minWidth: '300px' } }>
							<div style={ { fontSize: '12px', fontWeight: 600, color: '#1e1e1e', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '6px' } }>
								{ PopoverIcon }
								{ isActive ? __( 'Edit Popover', 'wmblocks' ) : __( 'Add Popover', 'wmblocks' ) }
							</div>
							<TextControl
								label={ __( 'Popover Title', 'wmblocks' ) }
								value={ title }
								onChange={ setTitle }
								placeholder={ __( 'Optional title…', 'wmblocks' ) }
								help={ __( 'Shown as the popover heading. Optional.', 'wmblocks' ) }
							/>
							<TextareaControl
								label={ __( 'Popover Content', 'wmblocks' ) }
								value={ content }
								onChange={ setContent }
								placeholder={ __( 'Popover body text…', 'wmblocks' ) }
								help={ __( 'Required. Text shown in the popover body.', 'wmblocks' ) }
								rows={ 3 }
							/>
							<SelectControl
								label={ __( 'Placement', 'wmblocks' ) }
								value={ placement }
								options={ [
									{ label: 'Top',         value: 'top' },
									{ label: 'Bottom',      value: 'bottom' },
									{ label: 'Left',        value: 'left' },
									{ label: 'Right',       value: 'right' },
								] }
								onChange={ setPlacement }
							/>
							<SelectControl
								label={ __( 'Trigger', 'wmblocks' ) }
								value={ trigger }
								options={ [
									{ label: 'Click',         value: 'click' },
									{ label: 'Hover',         value: 'hover' },
									{ label: 'Focus',         value: 'focus' },
									{ label: 'Hover + Focus', value: 'hover focus' },
								] }
								onChange={ setTrigger }
								help={ __( 'How the popover is triggered.', 'wmblocks' ) }
							/>
							<Flex gap={ 2 } style={ { marginTop: '8px' } }>
								<FlexItem isBlock>
									<Button variant="primary" onClick={ handleApply } disabled={ ! content.trim() } style={ { width: '100%', justifyContent: 'center' } }>
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