import { __ } from '@wordpress/i18n';
import { useBlockProps, InspectorControls, RichText, BlockControls } from '@wordpress/block-editor';
import { PanelBody, SelectControl, ToolbarGroup, ToolbarButton } from '@wordpress/components';
import { useState } from '@wordpress/element';
import { ICONS, ICON_BG_OPTIONS, ICON_BG_HEX, IconSVG } from './icons';
import './editor.scss';

const uid = () => 'h' + Math.random().toString(36).slice(2,7);

const BTN_VARIANTS = [
	{ label: 'Primary',   value: 'btn-primary'   },
	{ label: 'Secondary', value: 'btn-secondary' },
	{ label: 'Success',   value: 'btn-success'   },
	{ label: 'Danger',    value: 'btn-danger'    },
	{ label: 'Warning',   value: 'btn-warning'   },
	{ label: 'Info',      value: 'btn-info'      },
	{ label: 'Dark',      value: 'btn-dark'      },
	{ label: 'Outline Primary',   value: 'btn-outline-primary'   },
	{ label: 'Outline Secondary', value: 'btn-outline-secondary' },
];

export default function Edit( { attributes, setAttributes } ) {
	const { items, cols } = attributes;
	const [ expandedId, setExpandedId ] = useState( null );
	const blockProps = useBlockProps( { className: 'wmblocks-feat-hanging-wrapper' } );

	function update( id, patch ) {
		setAttributes( { items: items.map( it => it.id === id ? { ...it, ...patch } : it ) } );
	}
	function addItem() {
		const item = { id: uid(), icon: 'star-fill', iconBg: 'text-bg-primary', title: 'Featured title', body: 'Paragraph text.', btnLabel: 'Primary button', btnUrl: '#', btnVariant: 'btn-primary' };
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
					<SelectControl label={ __('Columns', 'wmblocks') } value={ cols }
						options={[ {label:'2',value:'2'},{label:'3',value:'3'},{label:'4',value:'4'} ]}
						onChange={ v => setAttributes({ cols: v }) }
					/>
				</PanelBody>
			</InspectorControls>

			<div { ...blockProps }>
				<div className="wmblocks-feat-meta-strip">
					<span className="wmblocks-feat-chip wmblocks-feat-chip--teal">Feature Hanging Icons</span>
					<span className="wmblocks-feat-chip">{ cols } cols · { items.length } items</span>
				</div>

				<div className={ `row row-cols-1 row-cols-md-${ cols } g-4 py-2` }>
					{ items.map( ( item ) => {
						const isOpen = expandedId === item.id;
						const bgHex  = ICON_BG_HEX[ item.iconBg ] || '#0d6efd';
						return (
							<div key={ item.id } className="col d-flex align-items-start">
								{/* Hanging icon — large rounded pill */}
								<div className={ `wmblocks-feat-hang-icon icon-square d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3 rounded-3 ${ item.iconBg }` }
									style={{ width: '3rem', height: '3rem' }}
								>
									<IconSVG name={ item.icon } width={24} height={24} />
								</div>

								<div style={{ flex: 1 }}>
									<RichText tagName="h3" className="fw-bold mb-0 fs-4" value={ item.title }
										onChange={ v => update( item.id, { title: v } ) }
										allowedFormats={[]} placeholder={ __('Title…', 'wmblocks') }
									/>
									<RichText tagName="p" value={ item.body }
										onChange={ v => update( item.id, { body: v } ) }
										allowedFormats={['core/bold','core/italic']}
										placeholder={ __('Description…', 'wmblocks') }
									/>

									{/* Button */}
									<div>
										<span className={ `btn ${ item.btnVariant } btn-sm` } style={{ cursor: 'default', pointerEvents: 'none' }}>
											<RichText tagName="span" value={ item.btnLabel }
												onChange={ v => update( item.id, { btnLabel: v } ) }
												allowedFormats={[]} placeholder={ __('Button label…', 'wmblocks') }
											/>
										</span>
									</div>

									<div className="wmblocks-feat-item-actions">
										<button className={ 'wmblocks-feat-action wmblocks-feat-action--expand' + (isOpen ? ' is-active' : '') }
											onClick={ () => setExpandedId( isOpen ? null : item.id ) }
										>{ isOpen ? '▲' : '▼' } Options</button>
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
														<button key={key} className={ 'wmblocks-feat-icon-cell' + (item.icon === key ? ' is-selected' : '') }
															onClick={ () => update( item.id, { icon: key }) } title={ic.label}
														><IconSVG name={key} width={16} height={16} /></button>
													) ) }
												</div>
											</div>
											<div className="wmblocks-feat-panel-row">
												<span className="wmblocks-feat-panel-label">{ __('Icon colour', 'wmblocks') }</span>
												<div className="wmblocks-feat-swatch-row">
													{ ICON_BG_OPTIONS.map( opt => (
														<button key={opt.value}
															className={ 'wmblocks-feat-swatch' + (item.iconBg === opt.value ? ' is-active' : '') }
															style={{ background: ICON_BG_HEX[opt.value] }}
															onClick={ () => update( item.id, { iconBg: opt.value }) } title={opt.label}
														/>
													) ) }
												</div>
											</div>
											<div className="wmblocks-feat-panel-row">
												<span className="wmblocks-feat-panel-label">{ __('Button URL', 'wmblocks') }</span>
												<input type="url" className="wmblocks-feat-url-input"
													value={ item.btnUrl } placeholder="https://"
													onChange={ e => update( item.id, { btnUrl: e.target.value }) }
												/>
											</div>
											<div className="wmblocks-feat-panel-row">
												<span className="wmblocks-feat-panel-label">{ __('Button style', 'wmblocks') }</span>
												<div className="wmblocks-feat-pill-row">
													{ BTN_VARIANTS.map( v => (
														<button key={v.value}
															className={ 'wmblocks-feat-pill' + (item.btnVariant === v.value ? ' is-active' : '') }
															onClick={ () => update( item.id, { btnVariant: v.value }) }
														>{ v.label }</button>
													) ) }
												</div>
											</div>
										</div>
									) }
								</div>
							</div>
						);
					} ) }
				</div>

				<div className="wmblocks-feat-add-row">
					<button className="wmblocks-feat-add-btn" onClick={ addItem }>+ { __('Add item', 'wmblocks') }</button>
				</div>
			</div>
		</>
	);
}
