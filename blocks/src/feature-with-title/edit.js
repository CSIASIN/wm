import { __ } from '@wordpress/i18n';
import { useBlockProps, InspectorControls, RichText, BlockControls } from '@wordpress/block-editor';
import { PanelBody, SelectControl, ToolbarGroup, ToolbarButton } from '@wordpress/components';
import { useState } from '@wordpress/element';
import { ICONS, ICON_BG_HEX, IconSVG } from './icons';
import './editor.scss';

const uid = () => 'f' + Math.random().toString(36).slice(2,7);

const BTN_VARIANTS = [
	{ label: 'Primary',           value: 'btn-primary'           },
	{ label: 'Secondary',         value: 'btn-secondary'         },
	{ label: 'Success',           value: 'btn-success'           },
	{ label: 'Danger',            value: 'btn-danger'            },
	{ label: 'Outline Primary',   value: 'btn-outline-primary'   },
	{ label: 'Outline Secondary', value: 'btn-outline-secondary' },
];

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
const COLOUR_HEX = Object.fromEntries( ICON_COLOURS.map( c => [ c.value, c.hex ] ) );

const SPLIT_OPTIONS = [
	{ label: '1/3 title + 2/3 features', titleCols: 'col-lg-4', featureCols: 'col-lg-8' },
	{ label: '1/2 + 1/2',                titleCols: 'col-lg-6', featureCols: 'col-lg-6' },
	{ label: '2/5 title + 3/5 features', titleCols: 'col-lg-5', featureCols: 'col-lg-7' },
];

export default function Edit( { attributes, setAttributes } ) {
	const {
		sectionTitle, sectionBody, btnLabel, btnUrl, btnVariant,
		titleCols, featureCols, features,
	} = attributes;

	const [ expandedId, setExpandedId ] = useState( null );
	const blockProps = useBlockProps( { className: 'wmblocks-feat-title-wrapper' } );

	function updateFeature( id, patch ) {
		setAttributes( { features: features.map( f => f.id === id ? { ...f, ...patch } : f ) } );
	}
	function addFeature() {
		const item = { id: uid(), icon: 'star-fill', iconColour: 'text-primary', title: 'Featured title', body: 'Paragraph of text beneath the heading.' };
		setAttributes( { features: [ ...features, item ] } );
		setExpandedId( item.id );
	}
	function removeFeature( id ) {
		if ( features.length <= 1 ) return;
		setAttributes( { features: features.filter( f => f.id !== id ) } );
		if ( expandedId === id ) setExpandedId( null );
	}

	return (
		<>
			<BlockControls>
				<ToolbarGroup>
					{ SPLIT_OPTIONS.map( ( s, i ) => (
						<ToolbarButton key={ i }
							isPressed={ titleCols === s.titleCols }
							onClick={ () => setAttributes({ titleCols: s.titleCols, featureCols: s.featureCols }) }
						>{ s.label }</ToolbarButton>
					) ) }
				</ToolbarGroup>
			</BlockControls>

			<InspectorControls>
				<PanelBody title={ __( 'Layout', 'wmblocks' ) } initialOpen={ true }>
					<SelectControl
						label={ __( 'Column split', 'wmblocks' ) }
						value={ titleCols }
						options={ SPLIT_OPTIONS.map( s => ({ label: s.label, value: s.titleCols }) ) }
						onChange={ v => {
							const s = SPLIT_OPTIONS.find( o => o.titleCols === v ) || SPLIT_OPTIONS[0];
							setAttributes({ titleCols: s.titleCols, featureCols: s.featureCols });
						} }
						help={ __( 'Controls the width split between the title panel and the feature grid.', 'wmblocks' ) }
					/>
				</PanelBody>
				<PanelBody title={ __( 'Button', 'wmblocks' ) } initialOpen={ false }>
					<SelectControl
						label={ __( 'Button variant', 'wmblocks' ) }
						value={ btnVariant }
						options={ BTN_VARIANTS }
						onChange={ v => setAttributes({ btnVariant: v }) }
					/>
				</PanelBody>
			</InspectorControls>

			<div { ...blockProps }>
				{/* Meta strip */}
				<div className="wmblocks-feat-meta-strip">
					<span className="wmblocks-feat-chip wmblocks-feat-chip--pink">Features with Title</span>
					<span className="wmblocks-feat-chip">{ titleCols } / { featureCols }</span>
					<span className="wmblocks-feat-chip">{ features.length } features</span>
				</div>

				<div className="row g-4 g-lg-5 py-2">

					{/* ── LEFT: Section title + CTA ── */}
					<div className={ `${ titleCols } col-12` }>
						<div className="wmblocks-feat-title-panel">
							<div className="wmblocks-feat-title-panel__label">Section title</div>

							<RichText
								tagName="h2"
								className="display-6 fw-bold lh-1 mb-3"
								value={ sectionTitle }
								onChange={ v => setAttributes({ sectionTitle: v }) }
								allowedFormats={['core/bold','core/italic']}
								placeholder={ __( 'Section title…', 'wmblocks' ) }
							/>

							<RichText
								tagName="p"
								className="text-body-secondary"
								value={ sectionBody }
								onChange={ v => setAttributes({ sectionBody: v }) }
								allowedFormats={['core/bold','core/italic','core/link']}
								placeholder={ __( 'Supporting paragraph…', 'wmblocks' ) }
							/>

							{/* CTA button */}
							<div className="mt-4 d-flex gap-2 flex-column align-items-start">
								<span className={ `btn ${ btnVariant }` } style={{ cursor: 'default', pointerEvents: 'none' }}>
									<RichText
										tagName="span"
										value={ btnLabel }
										onChange={ v => setAttributes({ btnLabel: v }) }
										allowedFormats={[]}
										placeholder={ __( 'Button label…', 'wmblocks' ) }
									/>
								</span>
								<input
									type="url"
									className="wmblocks-feat-url-input"
									value={ btnUrl }
									onChange={ e => setAttributes({ btnUrl: e.target.value }) }
									placeholder="https://"
									style={{ maxWidth: '240px' }}
								/>
							</div>
						</div>
					</div>

					{/* ── RIGHT: 2×2 feature grid ── */}
					<div className={ `${ featureCols } col-12` }>
						<div className="row row-cols-1 row-cols-sm-2 g-4">
							{ features.map( ( feat ) => {
								const isOpen = expandedId === feat.id;
								return (
									<div key={ feat.id } className="col d-flex flex-column gap-2">
										{/* Icon */}
										<div className={ `fs-2 ${ feat.iconColour }` } style={{ lineHeight: 1 }}>
											<IconSVG name={ feat.icon } width="1.2em" height="1.2em" />
										</div>

										{/* Title */}
										<RichText
											tagName="h4"
											className="fw-semibold mb-0 fs-5"
											value={ feat.title }
											onChange={ v => updateFeature( feat.id, { title: v }) }
											allowedFormats={[]}
											placeholder={ __( 'Feature title…', 'wmblocks' ) }
										/>

										{/* Body */}
										<RichText
											tagName="p"
											className="text-body-secondary small mb-0"
											value={ feat.body }
											onChange={ v => updateFeature( feat.id, { body: v }) }
											allowedFormats={['core/bold','core/italic']}
											placeholder={ __( 'Description…', 'wmblocks' ) }
										/>

										{/* Actions */}
										<div className="wmblocks-feat-item-actions">
											<button
												className={ 'wmblocks-feat-action wmblocks-feat-action--expand' + ( isOpen ? ' is-active' : '' ) }
												onClick={ () => setExpandedId( isOpen ? null : feat.id ) }
											>{ isOpen ? '▲' : '▼' }</button>
											<button
												className="wmblocks-feat-action wmblocks-feat-action--remove"
												onClick={ () => removeFeature( feat.id ) }
												disabled={ features.length <= 1 }
											>✕</button>
										</div>

										{/* Expand panel */}
										{ isOpen && (
											<div className="wmblocks-feat-expand-panel">
												<div className="wmblocks-feat-panel-row">
													<span className="wmblocks-feat-panel-label">{ __( 'Icon', 'wmblocks' ) }</span>
													<div className="wmblocks-feat-icon-grid-picker">
														{ Object.entries( ICONS ).map( ([ key, ic ]) => (
															<button key={ key }
																className={ 'wmblocks-feat-icon-cell' + ( feat.icon === key ? ' is-selected' : '' ) }
																onClick={ () => updateFeature( feat.id, { icon: key }) }
																title={ ic.label }
															><IconSVG name={ key } width={16} height={16} /></button>
														) ) }
													</div>
												</div>
												<div className="wmblocks-feat-panel-row">
													<span className="wmblocks-feat-panel-label">{ __( 'Icon colour', 'wmblocks' ) }</span>
													<div className="wmblocks-feat-swatch-row">
														{ ICON_COLOURS.map( c => (
															<button key={ c.value }
																className={ 'wmblocks-feat-swatch' + ( feat.iconColour === c.value ? ' is-active' : '' ) }
																style={{ background: c.hex }}
																onClick={ () => updateFeature( feat.id, { iconColour: c.value }) }
																title={ c.label }
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

						<div className="wmblocks-feat-add-row mt-2">
							<button className="wmblocks-feat-add-btn" onClick={ addFeature }>
								+ { __( 'Add feature', 'wmblocks' ) }
							</button>
						</div>
					</div>

				</div>
			</div>
		</>
	);
}
