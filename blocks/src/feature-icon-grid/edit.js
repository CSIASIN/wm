import { __ } from '@wordpress/i18n';
import { useBlockProps, InspectorControls, RichText, BlockControls } from '@wordpress/block-editor';
import { PanelBody, SelectControl, ToolbarGroup, ToolbarButton } from '@wordpress/components';
import { useState } from '@wordpress/element';
import { ICONS, ICON_BG_HEX, IconSVG } from './icons';
import './editor.scss';

const uid = () => 'g' + Math.random().toString(36).slice(2,7);

const ICON_COLOURS = [
	{ label: 'Primary',   value: 'text-primary',   hex: '#0d6efd' },
	{ label: 'Secondary', value: 'text-secondary',  hex: '#6c757d' },
	{ label: 'Success',   value: 'text-success',   hex: '#198754' },
	{ label: 'Danger',    value: 'text-danger',    hex: '#dc3545' },
	{ label: 'Warning',   value: 'text-warning',   hex: '#ffc107' },
	{ label: 'Info',      value: 'text-info',      hex: '#0dcaf0' },
	{ label: 'Dark',      value: 'text-dark',      hex: '#212529' },
	{ label: 'Body',      value: 'text-body',      hex: '#212529' },
];
const COLOUR_HEX = Object.fromEntries( ICON_COLOURS.map( c => [c.value, c.hex] ) );

export default function Edit( { attributes, setAttributes } ) {
	const { items, cols, iconSize } = attributes;
	const [ expandedId, setExpandedId ] = useState( null );
	const blockProps = useBlockProps( { className: 'wmblocks-feat-igrid-wrapper' } );

	function update( id, patch ) {
		setAttributes( { items: items.map( it => it.id === id ? { ...it, ...patch } : it ) } );
	}
	function addItem() {
		const item = { id: uid(), icon: 'star-fill', iconColour: 'text-primary', title: 'Featured title', body: 'Paragraph text beneath the heading.' };
		setAttributes( { items: [ ...items, item ] } );
		setExpandedId( item.id );
	}
	function removeItem( id ) {
		if ( items.length <= 1 ) return;
		setAttributes( { items: items.filter( it => it.id !== id ) } );
		if ( expandedId === id ) setExpandedId( null );
	}

	return (
		<>
			<BlockControls>
				<ToolbarGroup>
					{ [ '2','3','4' ].map( n => (
						<ToolbarButton key={n} isPressed={ cols === n } onClick={ () => setAttributes({ cols: n }) }>{ n } cols</ToolbarButton>
					) ) }
				</ToolbarGroup>
			</BlockControls>
			<InspectorControls>
				<PanelBody title={ __('Layout', 'wmblocks') } initialOpen={true}>
					<SelectControl label={ __('Columns per row', 'wmblocks') } value={cols}
						options={[ {label:'2',value:'2'},{label:'3',value:'3'},{label:'4',value:'4'} ]}
						onChange={ v => setAttributes({ cols: v }) }
					/>
					<SelectControl label={ __('Icon size', 'wmblocks') } value={iconSize}
						options={[ {label:'Small (fs-3)',value:'fs-3'},{label:'Medium (fs-2)',value:'fs-2'},{label:'Large (fs-1)',value:'fs-1'} ]}
						onChange={ v => setAttributes({ iconSize: v }) }
					/>
				</PanelBody>
			</InspectorControls>

			<div { ...blockProps }>
				<div className="wmblocks-feat-meta-strip">
					<span className="wmblocks-feat-chip wmblocks-feat-chip--indigo">Feature Icon Grid</span>
					<span className="wmblocks-feat-chip">{ cols } cols · { items.length } items</span>
				</div>

				<div className={ `row row-cols-1 row-cols-md-${ cols } g-4` }>
					{ items.map( ( item ) => {
						const isOpen = expandedId === item.id;
						const iconHex = COLOUR_HEX[ item.iconColour ] || '#0d6efd';
						return (
							<div key={ item.id } className="col d-flex flex-column gap-2">
								{/* Icon */}
								<div className={ `${ iconSize } ${ item.iconColour }` } style={{ lineHeight: 1 }}>
									<IconSVG name={ item.icon } width="1.2em" height="1.2em" />
								</div>

								{/* Title */}
								<RichText tagName="h4" className="fw-semibold mb-0 fs-5" value={ item.title }
									onChange={ v => update( item.id, { title: v }) }
									allowedFormats={[]} placeholder={ __('Title…', 'wmblocks') }
								/>

								{/* Body */}
								<RichText tagName="p" className="text-body-secondary small mb-0" value={ item.body }
									onChange={ v => update( item.id, { body: v }) }
									allowedFormats={['core/bold','core/italic']}
									placeholder={ __('Description…', 'wmblocks') }
								/>

								{/* Actions */}
								<div className="wmblocks-feat-item-actions">
									<button className={ 'wmblocks-feat-action wmblocks-feat-action--expand' + (isOpen ? ' is-active' : '') }
										onClick={ () => setExpandedId( isOpen ? null : item.id ) }
									>{ isOpen ? '▲' : '▼' }</button>
									<button className="wmblocks-feat-action wmblocks-feat-action--remove"
										onClick={ () => removeItem( item.id ) } disabled={ items.length <= 1 }
									>✕</button>
								</div>

								{ isOpen && (
									<div className="wmblocks-feat-expand-panel">
										<div className="wmblocks-feat-panel-row">
											<span className="wmblocks-feat-panel-label">{ __('Icon', 'wmblocks') }</span>
											<div className="wmblocks-feat-icon-grid-picker">
												{ Object.entries( ICONS ).map( ([key, ic]) => (
													<button key={key}
														className={ 'wmblocks-feat-icon-cell' + (item.icon === key ? ' is-selected' : '') }
														onClick={ () => update( item.id, { icon: key }) } title={ic.label}
													><IconSVG name={key} width={16} height={16} /></button>
												) ) }
											</div>
										</div>
										<div className="wmblocks-feat-panel-row">
											<span className="wmblocks-feat-panel-label">{ __('Icon colour', 'wmblocks') }</span>
											<div className="wmblocks-feat-swatch-row">
												{ ICON_COLOURS.map( c => (
													<button key={c.value}
														className={ 'wmblocks-feat-swatch' + (item.iconColour === c.value ? ' is-active' : '') }
														style={{ background: c.hex }}
														onClick={ () => update( item.id, { iconColour: c.value }) } title={c.label}
													/>
												) ) }
											</div>
										</div>
									</div>
								) }
							</div>
						);
					} ) }
				</div>

				<div className="wmblocks-feat-add-row">
					<button className="wmblocks-feat-add-btn wmblocks-feat-add-btn--indigo" onClick={ addItem }>
						+ { __('Add feature', 'wmblocks') }
					</button>
				</div>
			</div>
		</>
	);
}
