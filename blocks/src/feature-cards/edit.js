import { __ } from '@wordpress/i18n';
import { useBlockProps, InspectorControls, RichText, MediaUpload, MediaUploadCheck, BlockControls } from '@wordpress/block-editor';
import { PanelBody, SelectControl, Button, ToolbarGroup, ToolbarButton } from '@wordpress/components';
import { useState } from '@wordpress/element';
import './editor.scss';

const uid = () => 'k' + Math.random().toString(36).slice(2,7);

const TAG_COLOURS = [
	{ label: 'Primary',   value: 'text-bg-primary'   },
	{ label: 'Secondary', value: 'text-bg-secondary'  },
	{ label: 'Success',   value: 'text-bg-success'    },
	{ label: 'Danger',    value: 'text-bg-danger'     },
	{ label: 'Warning',   value: 'text-bg-warning'    },
	{ label: 'Info',      value: 'text-bg-info'       },
	{ label: 'Dark',      value: 'text-bg-dark'       },
	{ label: 'Light',     value: 'text-bg-light'      },
];

const TAG_HEX = {
	'text-bg-primary':'#0d6efd','text-bg-secondary':'#6c757d','text-bg-success':'#198754',
	'text-bg-danger':'#dc3545','text-bg-warning':'#ffc107','text-bg-info':'#0dcaf0',
	'text-bg-dark':'#212529','text-bg-light':'#f8f9fa',
};

export default function Edit( { attributes, setAttributes } ) {
	const { cards, cols, rounded, shadow } = attributes;
	const [ expandedId, setExpandedId ] = useState( null );
	const blockProps = useBlockProps( { className: 'wmblocks-feat-cards-wrapper' } );

	function update( id, patch ) {
		setAttributes( { cards: cards.map( c => c.id === id ? { ...c, ...patch } : c ) } );
	}
	function addCard() {
		const item = { id: uid(), title: 'Card title', imageUrl: '', imageAlt: 'Card image', tag1: 'Tag', tag2: 'Now', tagColour: 'text-bg-primary' };
		setAttributes( { cards: [ ...cards, item ] } );
		setExpandedId( item.id );
	}
	function removeCard( id ) {
		if ( cards.length <= 1 ) return;
		setAttributes( { cards: cards.filter( c => c.id !== id ) } );
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
					<SelectControl label={ __('Columns', 'wmblocks') } value={cols}
						options={[ {label:'2',value:'2'},{label:'3',value:'3'},{label:'4',value:'4'} ]}
						onChange={ v => setAttributes({ cols: v }) }
					/>
					<SelectControl label={ __('Border radius', 'wmblocks') } value={rounded}
						options={[ {label:'None',value:''},{label:'Rounded',value:'rounded'},{label:'Rounded-3',value:'rounded-3'},{label:'Rounded-4',value:'rounded-4'} ]}
						onChange={ v => setAttributes({ rounded: v }) }
					/>
					<SelectControl label={ __('Shadow', 'wmblocks') } value={shadow}
						options={[ {label:'None',value:''},{label:'Shadow-sm',value:'shadow-sm'},{label:'Shadow',value:'shadow'},{label:'Shadow-lg',value:'shadow-lg'} ]}
						onChange={ v => setAttributes({ shadow: v }) }
					/>
				</PanelBody>
			</InspectorControls>

			<div { ...blockProps }>
				<div className="wmblocks-feat-meta-strip">
					<span className="wmblocks-feat-chip wmblocks-feat-chip--orange">Feature Cards</span>
					<span className="wmblocks-feat-chip">{ cols } cols · { cards.length } cards</span>
				</div>

				<div className={ `row row-cols-1 row-cols-md-${ cols } align-items-stretch g-4` }>
					{ cards.map( ( card ) => {
						const isOpen = expandedId === card.id;
						return (
							<div key={ card.id } className="col">
								<div className={ `card ${ rounded } ${ shadow } overflow-hidden h-100` }>
									{/* Image area */}
									<div className="wmblocks-feat-card-img-wrap">
										{ card.imageUrl ? (
											<img src={ card.imageUrl } alt={ card.imageAlt } className="wmblocks-feat-card-img" />
										) : (
											<div className="wmblocks-feat-card-img-placeholder">
												<MediaUploadCheck>
													<MediaUpload
														onSelect={ media => update( card.id, { imageUrl: media.url, imageAlt: media.alt || '' }) }
														allowedTypes={['image']}
														render={ ({ open }) => (
															<button className="wmblocks-feat-upload-btn" onClick={ open }>
																📷 { __('Upload image', 'wmblocks') }
															</button>
														) }
													/>
												</MediaUploadCheck>
											</div>
										) }
									</div>

									<div className="card-body">
										{/* Meta tags row */}
										<div className="d-flex gap-2 mb-2 flex-wrap">
											<span className={ `badge ${ card.tagColour }` }>
												<RichText tagName="span" value={ card.tag1 }
													onChange={ v => update( card.id, { tag1: v }) }
													allowedFormats={[]} placeholder="Tag 1"
												/>
											</span>
											<span className={ `badge ${ card.tagColour }` } style={{ opacity: .7 }}>
												<RichText tagName="span" value={ card.tag2 }
													onChange={ v => update( card.id, { tag2: v }) }
													allowedFormats={[]} placeholder="Tag 2"
												/>
											</span>
										</div>

										{/* Title */}
										<RichText tagName="h3" className="card-title h5 mb-0" value={ card.title }
											onChange={ v => update( card.id, { title: v }) }
											allowedFormats={['core/bold','core/italic']}
											placeholder={ __('Card title…', 'wmblocks') }
										/>
									</div>

									{/* Actions */}
									<div className="wmblocks-feat-item-actions px-3 pb-2">
										<button className={ 'wmblocks-feat-action wmblocks-feat-action--expand' + (isOpen ? ' is-active' : '') }
											onClick={ () => setExpandedId( isOpen ? null : card.id ) }
										>{ isOpen ? '▲' : '▼' } Options</button>
										{ card.imageUrl && (
											<button className="wmblocks-feat-action"
												onClick={ () => update( card.id, { imageUrl: '', imageAlt: '' }) }
											>✕ Image</button>
										) }
										<button className="wmblocks-feat-action wmblocks-feat-action--remove"
											onClick={ () => removeCard( card.id ) } disabled={ cards.length <= 1 }
										>✕</button>
									</div>

									{ isOpen && (
										<div className="wmblocks-feat-expand-panel mx-3 mb-3">
											<div className="wmblocks-feat-panel-row">
												<span className="wmblocks-feat-panel-label">{ __('Tag colour', 'wmblocks') }</span>
												<div className="wmblocks-feat-swatch-row">
													{ TAG_COLOURS.map( opt => (
														<button key={opt.value}
															className={ 'wmblocks-feat-swatch' + (card.tagColour === opt.value ? ' is-active' : '') }
															style={{ background: TAG_HEX[opt.value] }}
															onClick={ () => update( card.id, { tagColour: opt.value }) }
															title={opt.label}
														/>
													) ) }
												</div>
											</div>
											<div className="wmblocks-feat-panel-row">
												<span className="wmblocks-feat-panel-label">{ __('Image alt text', 'wmblocks') }</span>
												<input type="text" className="wmblocks-feat-url-input"
													value={ card.imageAlt }
													onChange={ e => update( card.id, { imageAlt: e.target.value }) }
													placeholder={ __('Alt text for accessibility', 'wmblocks') }
												/>
											</div>
										</div>
									) }
								</div>
							</div>
						);
					} ) }
				</div>

				<div className="wmblocks-feat-add-row">
					<button className="wmblocks-feat-add-btn" onClick={ addCard }>+ { __('Add card', 'wmblocks') }</button>
				</div>
			</div>
		</>
	);
}
