import { __ } from '@wordpress/i18n';
import { useBlockProps, InspectorControls, RichText } from '@wordpress/block-editor';
import { PanelBody, SelectControl, ToggleControl, TextControl, PanelRow } from '@wordpress/components';
import './editor.scss';

const uid = () => 'b' + Math.random().toString( 36 ).slice( 2, 7 );

const BG_OPTIONS = [
	{ label: 'Light',         value: 'bg-light',     hex: '#f8f9fa' },
	{ label: 'White',         value: 'bg-white',     hex: '#ffffff' },
	{ label: 'Dark',          value: 'bg-dark',      hex: '#212529' },
	{ label: 'Primary',       value: 'bg-primary',   hex: '#0d6efd' },
	{ label: 'Secondary',     value: 'bg-secondary',  hex: '#6c757d' },
	{ label: 'Success',       value: 'bg-success',   hex: '#198754' },
	{ label: 'Danger',        value: 'bg-danger',    hex: '#dc3545' },
	{ label: 'Warning',       value: 'bg-warning',   hex: '#ffc107' },
	{ label: 'Info',          value: 'bg-info',      hex: '#0dcaf0' },
	{ label: 'Transparent',   value: '',             hex: 'transparent' },
];
const BG_HEX = Object.fromEntries( BG_OPTIONS.map( b => [ b.value, b.hex ] ) );

const PADDING_OPTIONS = [
	{ label: 'None',   value: '' },
	{ label: 'XS',     value: 'p-1' },
	{ label: 'SM',     value: 'p-2' },
	{ label: 'MD',     value: 'p-3' },
	{ label: 'LG',     value: 'p-4' },
	{ label: 'XL',     value: 'p-5' },
	{ label: 'Y only SM', value: 'py-2 px-3' },
	{ label: 'Y only MD', value: 'py-3 px-4' },
];

const ROUNDED_OPTIONS = [
	{ label: 'None',      value: '' },
	{ label: 'Rounded',   value: 'rounded' },
	{ label: 'Rounded-2', value: 'rounded-2' },
	{ label: 'Rounded-3', value: 'rounded-3' },
	{ label: 'Rounded-4', value: 'rounded-4' },
	{ label: 'Pill',      value: 'rounded-pill' },
];

const FONT_SIZE_OPTIONS = [
	{ label: 'Default',   value: '' },
	{ label: 'Small',     value: 'small' },
	{ label: 'fs-6',      value: 'fs-6' },
	{ label: 'fs-5',      value: 'fs-5' },
	{ label: 'fs-4',      value: 'fs-4' },
];

const LINK_COLOUR_OPTIONS = [
	{ label: 'Default',   value: '' },
	{ label: 'Primary',   value: 'link-primary'   },
	{ label: 'Secondary', value: 'link-secondary' },
	{ label: 'Success',   value: 'link-success'   },
	{ label: 'Danger',    value: 'link-danger'    },
	{ label: 'Warning',   value: 'link-warning'   },
	{ label: 'Info',      value: 'link-info'      },
	{ label: 'Light',     value: 'link-light'     },
	{ label: 'Dark',      value: 'link-dark'      },
];

const BORDER_COLOUR_OPTIONS = [
	{ label: 'Default',   value: '' },
	{ label: 'Primary',   value: 'border-primary'   },
	{ label: 'Secondary', value: 'border-secondary' },
	{ label: 'Success',   value: 'border-success'   },
	{ label: 'Danger',    value: 'border-danger'    },
	{ label: 'Warning',   value: 'border-warning'   },
	{ label: 'Dark',      value: 'border-dark'      },
	{ label: 'Light',     value: 'border-light'     },
];

const PRESET_DIVIDERS = [
	{ label: '/',  value: '/'  },
	{ label: '>',  value: '>'  },
	{ label: '»',  value: '»' },
	{ label: '›',  value: '›' },
	{ label: '•',  value: '•'  },
	{ label: '|',  value: '|'  },
	{ label: '→',  value: '→' },
];

export default function Edit( { attributes, setAttributes } ) {
	const {
		items, divider, bgColor, padding, rounded,
		border, borderColor, fontSize, linkColor, ariaLabel,
	} = attributes;

	const blockProps = useBlockProps( { className: 'wmblocks-bc-wrapper wmblocks-bc-styled' } );
	const lastIdx = items.length - 1;

	// Build wrapper classes for live preview
	const wrapClasses = [
		bgColor, padding, rounded,
		border ? 'border' : '',
		border && borderColor ? borderColor : '',
		fontSize,
	].filter( Boolean ).join( ' ' );

	function updateItem( id, patch ) {
		setAttributes( { items: items.map( it => it.id === id ? { ...it, ...patch } : it ) } );
	}
	function addItem() {
		const newItem = { id: uid(), label: 'New page', url: '#' };
		const next = [ ...items.slice( 0, -1 ), newItem, items[ items.length - 1 ] ];
		setAttributes( { items: next } );
	}
	function removeItem( id ) {
		if ( items.length <= 1 ) return;
		setAttributes( { items: items.filter( it => it.id !== id ) } );
	}
	function moveItem( id, dir ) {
		const idx = items.findIndex( it => it.id === id );
		const arr = [ ...items ];
		const swap = idx + dir;
		if ( swap < 0 || swap >= arr.length ) return;
		[ arr[ idx ], arr[ swap ] ] = [ arr[ swap ], arr[ idx ] ];
		setAttributes( { items: arr } );
	}

	const currentBgHex = BG_HEX[ bgColor ] || 'transparent';

	return (
		<>
			<InspectorControls>
				<PanelBody title={ __( 'Appearance', 'wmblocks' ) } initialOpen={ true }>
					<SelectControl label={ __( 'Background', 'wmblocks' ) }
						value={ bgColor } options={ BG_OPTIONS.map( b => ({ label: b.label, value: b.value }) ) }
						onChange={ v => setAttributes({ bgColor: v }) }
					/>
					<SelectControl label={ __( 'Padding', 'wmblocks' ) }
						value={ padding } options={ PADDING_OPTIONS }
						onChange={ v => setAttributes({ padding: v }) }
					/>
					<SelectControl label={ __( 'Border radius', 'wmblocks' ) }
						value={ rounded } options={ ROUNDED_OPTIONS }
						onChange={ v => setAttributes({ rounded: v }) }
					/>
					<PanelRow>
						<ToggleControl label={ __( 'Show border', 'wmblocks' ) }
							checked={ !! border } onChange={ v => setAttributes({ border: v }) }
						/>
					</PanelRow>
					{ border && (
						<SelectControl label={ __( 'Border colour', 'wmblocks' ) }
							value={ borderColor } options={ BORDER_COLOUR_OPTIONS }
							onChange={ v => setAttributes({ borderColor: v }) }
						/>
					) }
				</PanelBody>
				<PanelBody title={ __( 'Typography', 'wmblocks' ) } initialOpen={ false }>
					<SelectControl label={ __( 'Font size', 'wmblocks' ) }
						value={ fontSize } options={ FONT_SIZE_OPTIONS }
						onChange={ v => setAttributes({ fontSize: v }) }
					/>
					<SelectControl label={ __( 'Link colour', 'wmblocks' ) }
						value={ linkColor } options={ LINK_COLOUR_OPTIONS }
						onChange={ v => setAttributes({ linkColor: v }) }
					/>
				</PanelBody>
				<PanelBody title={ __( 'Divider', 'wmblocks' ) } initialOpen={ false }>
					<p style={{ fontSize: '11px', color: '#555', marginTop: 0 }}>
						{ __( 'Character divider via --bs-breadcrumb-divider.', 'wmblocks' ) }
					</p>
					<div style={{ display: 'flex', gap: '4px', flexWrap: 'wrap', marginBottom: '8px' }}>
						{ PRESET_DIVIDERS.map( p => (
							<button key={ p.value }
								style={{
									padding: '2px 8px', border: divider === p.value ? '2px solid #fd7e14' : '1px solid #dee2e6',
									borderRadius: '4px', background: divider === p.value ? '#fff3e0' : '#fff',
									cursor: 'pointer', fontFamily: 'monospace', fontWeight: 700, fontSize: '14px',
								}}
								onClick={ () => setAttributes({ divider: p.value }) }
							>{ p.label }</button>
						) ) }
					</div>
				</PanelBody>
				<PanelBody title={ __( 'Accessibility', 'wmblocks' ) } initialOpen={ false }>
					<TextControl label={ __( 'aria-label', 'wmblocks' ) }
						value={ ariaLabel } onChange={ v => setAttributes({ ariaLabel: v }) }
					/>
				</PanelBody>
			</InspectorControls>

			<div { ...blockProps }>
				{/* Meta strip */}
				<div className="wmblocks-bc-meta">
					<span className="wmblocks-bc-chip wmblocks-bc-chip--orange">Breadcrumb</span>
					<span className="wmblocks-bc-chip">Styled</span>
					{ bgColor    && <span className="wmblocks-bc-chip">{ bgColor }</span> }
					{ padding    && <span className="wmblocks-bc-chip">{ padding }</span> }
					{ rounded    && <span className="wmblocks-bc-chip">{ rounded }</span> }
					{ border     && <span className="wmblocks-bc-chip">border</span> }
					{ fontSize   && <span className="wmblocks-bc-chip">{ fontSize }</span> }
					{ linkColor  && <span className="wmblocks-bc-chip">{ linkColor }</span> }
				</div>

				{/* Background colour quick-pick */}
				<div className="wmblocks-bc-style-row">
					<span className="label">{ __( 'Background:', 'wmblocks' ) }</span>
					{ BG_OPTIONS.map( b => (
						<button key={ b.value }
							className={ 'wmblocks-bc-swatch' + ( bgColor === b.value ? ' is-active' : '' ) }
							style={{
								background: b.hex === 'transparent' ? 'repeating-linear-gradient(45deg,#dee2e6,#dee2e6 3px,#fff 3px,#fff 8px)' : b.hex,
								border: bgColor === b.value ? '3px solid #fd7e14' : '2px solid #dee2e6',
								width: '22px', height: '22px',
							}}
							onClick={ () => setAttributes({ bgColor: b.value }) }
							title={ b.label }
						/>
					) ) }
				</div>

				{/* Style quick-controls row */}
				<div className="wmblocks-bc-style-row">
					<span className="label">{ __( 'Divider:', 'wmblocks' ) }</span>
					{ PRESET_DIVIDERS.map( p => (
						<button key={ p.value }
							className={ 'wmblocks-bc-style-btn' + ( divider === p.value ? ' is-active' : '' ) }
							onClick={ () => setAttributes({ divider: p.value }) }
						>{ p.label }</button>
					) ) }
					<span style={{ marginLeft: '6px', borderLeft: '1px solid #ffd580', paddingLeft: '8px' }}>
						<span className="label">{ __( 'Border:', 'wmblocks' ) }</span>
						<button
							className={ 'wmblocks-bc-style-btn' + ( border ? ' is-active' : '' ) }
							onClick={ () => setAttributes({ border: !border }) }
						>{ border ? 'ON' : 'off' }</button>
					</span>
				</div>

				{/* Live styled breadcrumb preview */}
				<nav aria-label={ ariaLabel } className="wmblocks-bc-preview"
					style={ { '--bs-breadcrumb-divider': `'${ divider }'` } }
				>
					<div className={ wrapClasses } style={{ background: currentBgHex !== '#f8f9fa' ? currentBgHex : undefined }}>
						<ol className="breadcrumb mb-0">
							{ items.map( ( item, idx ) => {
								const isLast = idx === lastIdx;
								return (
									<li key={ item.id } className={ 'breadcrumb-item' + ( isLast ? ' active' : '' ) }>
										<RichText
											tagName={ isLast ? 'span' : 'a' }
											className={ ! isLast && linkColor ? linkColor : undefined }
											href={ ! isLast ? ( item.url || '#' ) : undefined }
											value={ item.label }
											onChange={ v => updateItem( item.id, { label: v }) }
											allowedFormats={ [] }
											placeholder={ __( 'Label…', 'wmblocks' ) }
											onClick={ e => e.preventDefault() }
										/>
										<span className="wmblocks-bc-item-controls">
											<button onClick={ () => moveItem( item.id, -1 ) } disabled={ idx === 0 }>←</button>
											<button onClick={ () => moveItem( item.id,  1 ) } disabled={ isLast }>→</button>
											{ ! isLast && (
												<span className="wmblocks-bc-url-wrap">
													<input type="url" className="wmblocks-bc-url-input"
														value={ item.url }
														onChange={ e => updateItem( item.id, { url: e.target.value }) }
														placeholder="URL"
													/>
												</span>
											) }
											<button className="wmblocks-bc-remove"
												onClick={ () => removeItem( item.id ) }
												disabled={ items.length <= 1 }
											>✕</button>
										</span>
									</li>
								);
							} ) }
						</ol>
					</div>
				</nav>

				<div className="wmblocks-bc-footer">
					<button className="wmblocks-bc-add-btn wmblocks-bc-add-btn--orange" onClick={ addItem }>
						+ { __( 'Add item', 'wmblocks' ) }
					</button>
					<span className="wmblocks-bc-hint">{ __( 'Last item = active · click label to edit · bg swatches above', 'wmblocks' ) }</span>
				</div>
			</div>
		</>
	);
}
