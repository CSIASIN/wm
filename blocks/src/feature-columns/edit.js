import { __ } from '@wordpress/i18n';
import { useBlockProps, InspectorControls, RichText, BlockControls } from '@wordpress/block-editor';
import { PanelBody, SelectControl, ToolbarGroup, ToolbarButton } from '@wordpress/components';
import { useState } from '@wordpress/element';
import { ICONS, ICON_BG_OPTIONS, ICON_BG_HEX, IconSVG } from './icons';
import './editor.scss';

const uid = () => 'c' + Math.random().toString(36).slice(2,7);

const CTA_VARIANTS = [
	{ label: 'Link Primary',   value: 'link-primary'   },
	{ label: 'Link Secondary', value: 'link-secondary' },
	{ label: 'Link Success',   value: 'link-success'   },
	{ label: 'Link Danger',    value: 'link-danger'    },
	{ label: 'Link Dark',      value: 'link-dark'      },
];

export default function Edit( { attributes, setAttributes } ) {
	const { columns, cols, iconSize } = attributes;
	const [ expandedId, setExpandedId ] = useState( null );
	const blockProps = useBlockProps( { className: 'wmblocks-feat-cols-wrapper' } );

	function updateCol( id, patch ) {
		setAttributes( { columns: columns.map( c => c.id === id ? { ...c, ...patch } : c ) } );
	}
	function addCol() {
		const item = { id: uid(), icon: 'lightning-charge-fill', iconBg: 'text-bg-primary', title: 'Featured title', body: 'Paragraph text.', ctaLabel: 'Call to action', ctaUrl: '#', ctaVariant: 'link-primary' };
		setAttributes( { columns: [ ...columns, item ] } );
		setExpandedId( item.id );
	}
	function removeCol( id ) {
		if ( columns.length <= 1 ) return;
		setAttributes( { columns: columns.filter( c => c.id !== id ) } );
		if ( expandedId === id ) setExpandedId( null );
	}

	return (
		<>
			<BlockControls>
				<ToolbarGroup>
					{ [ '2','3','4' ].map( n => (
						<ToolbarButton key={ n } isPressed={ cols === n } onClick={ () => setAttributes({ cols: n }) }>{ n } cols</ToolbarButton>
					) ) }
				</ToolbarGroup>
			</BlockControls>

			<InspectorControls>
				<PanelBody title={ __('Layout', 'wmblocks') } initialOpen={true}>
					<SelectControl label={ __('Columns', 'wmblocks') } value={ cols }
						options={ [ {label:'2',value:'2'},{label:'3',value:'3'},{label:'4',value:'4'} ] }
						onChange={ v => setAttributes({ cols: v }) }
					/>
					<SelectControl label={ __('Icon size', 'wmblocks') } value={ iconSize }
						options={ [ {label:'Small (fs-3)',value:'fs-3'},{label:'Medium (fs-2)',value:'fs-2'},{label:'Large (fs-1)',value:'fs-1'} ] }
						onChange={ v => setAttributes({ iconSize: v }) }
					/>
				</PanelBody>
			</InspectorControls>

			<div { ...blockProps }>
				<div className="wmblocks-feat-meta-strip">
					<span className="wmblocks-feat-chip wmblocks-feat-chip--main">Feature Columns</span>
					<span className="wmblocks-feat-chip">{ cols } cols · { columns.length } items</span>
				</div>

				<div className={ `row row-cols-1 row-cols-md-${ cols } g-4` }>
					{ columns.map( ( col, idx ) => {
						const isOpen = expandedId === col.id;
						const bgHex  = ICON_BG_HEX[ col.iconBg ] || '#0d6efd';
						return (
							<div key={ col.id } className="col">
								<div className="wmblocks-feat-col-card">
									{/* ── Icon square ── */}
									<div className={ `wmblocks-feat-icon-wrap d-inline-flex align-items-center justify-content-center fs-2 mb-3 p-2 rounded-3 ${ col.iconBg }` }>
										<IconSVG name={ col.icon } width={32} height={32} />
									</div>

									{/* ── Title ── */}
									<RichText tagName="h3" className="fs-2" value={ col.title }
										onChange={ v => updateCol( col.id, { title: v } ) }
										allowedFormats={[]} placeholder={ __('Title…', 'wmblocks') }
									/>

									{/* ── Body ── */}
									<RichText tagName="p" value={ col.body }
										onChange={ v => updateCol( col.id, { body: v } ) }
										allowedFormats={['core/bold','core/italic']}
										placeholder={ __('Description…', 'wmblocks') }
									/>

									{/* ── CTA ── */}
									<RichText tagName="a" className={ `icon-link ${ col.ctaVariant }` }
										value={ col.ctaLabel }
										onChange={ v => updateCol( col.id, { ctaLabel: v } ) }
										allowedFormats={[]} placeholder={ __('CTA label…', 'wmblocks') }
									/>

									{/* ── Item actions ── */}
									<div className="wmblocks-feat-item-actions">
										<button className={ 'wmblocks-feat-action wmblocks-feat-action--expand' + (isOpen ? ' is-active' : '') }
											onClick={ () => setExpandedId( isOpen ? null : col.id ) }
										>{ isOpen ? '▲' : '▼' } Options</button>
										<button className="wmblocks-feat-action wmblocks-feat-action--remove"
											onClick={ () => removeCol( col.id ) } disabled={ columns.length <= 1 }
										>✕</button>
									</div>

									{/* ── Expand panel ── */}
									{ isOpen && (
										<div className="wmblocks-feat-expand-panel">
											<div className="wmblocks-feat-panel-row">
												<span className="wmblocks-feat-panel-label">{ __('Icon', 'wmblocks') }</span>
												<div className="wmblocks-feat-icon-grid-picker">
													{ Object.entries( ICONS ).map( ([ key, ic ]) => (
														<button key={ key }
															className={ 'wmblocks-feat-icon-cell' + (col.icon === key ? ' is-selected' : '') }
															onClick={ () => updateCol( col.id, { icon: key } ) }
															title={ ic.label }
														>
															<IconSVG name={ key } width={16} height={16} />
														</button>
													) ) }
												</div>
											</div>
											<div className="wmblocks-feat-panel-row">
												<span className="wmblocks-feat-panel-label">{ __('Icon colour', 'wmblocks') }</span>
												<div className="wmblocks-feat-swatch-row">
													{ ICON_BG_OPTIONS.map( opt => (
														<button key={ opt.value }
															className={ 'wmblocks-feat-swatch' + (col.iconBg === opt.value ? ' is-active' : '') }
															style={{ background: ICON_BG_HEX[opt.value] }}
															onClick={ () => updateCol( col.id, { iconBg: opt.value } ) }
															title={ opt.label }
														/>
													) ) }
												</div>
											</div>
											<div className="wmblocks-feat-panel-row">
												<span className="wmblocks-feat-panel-label">{ __('CTA URL', 'wmblocks') }</span>
												<input type="url" className="wmblocks-feat-url-input"
													value={ col.ctaUrl } placeholder="https://"
													onChange={ e => updateCol( col.id, { ctaUrl: e.target.value } ) }
												/>
											</div>
											<div className="wmblocks-feat-panel-row">
												<span className="wmblocks-feat-panel-label">{ __('CTA style', 'wmblocks') }</span>
												<div className="wmblocks-feat-pill-row">
													{ CTA_VARIANTS.map( v => (
														<button key={ v.value }
															className={ 'wmblocks-feat-pill' + (col.ctaVariant === v.value ? ' is-active' : '') }
															onClick={ () => updateCol( col.id, { ctaVariant: v.value } ) }
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
					<button className="wmblocks-feat-add-btn" onClick={ addCol }>+ { __('Add column', 'wmblocks') }</button>
				</div>
			</div>
		</>
	);
}
