import { __ } from '@wordpress/i18n';
import { useBlockProps, InspectorControls, RichText, BlockControls, MediaUpload, MediaUploadCheck } from '@wordpress/block-editor';
import { PanelBody, SelectControl, ToggleControl, TextControl, Button, ToolbarGroup, ToolbarButton } from '@wordpress/components';
import './editor.scss';

const BG_OPTIONS = [
	{ label: 'Default',   value: '' }, { label: 'Primary', value: 'text-bg-primary' },
	{ label: 'Secondary', value: 'text-bg-secondary' }, { label: 'Success', value: 'text-bg-success' },
	{ label: 'Danger',    value: 'text-bg-danger' },    { label: 'Warning', value: 'text-bg-warning' },
	{ label: 'Info',      value: 'text-bg-info' },      { label: 'Light',   value: 'text-bg-light' },
	{ label: 'Dark',      value: 'text-bg-dark' },
];

const BTN_VARIANTS = [
	{ label: 'Primary', value: 'btn-primary' }, { label: 'Secondary', value: 'btn-secondary' },
	{ label: 'Success', value: 'btn-success' }, { label: 'Danger',    value: 'btn-danger' },
	{ label: 'Warning', value: 'btn-warning' }, { label: 'Info',      value: 'btn-info' },
	{ label: 'Dark',    value: 'btn-dark' },    { label: 'Light',     value: 'btn-light' },
	{ label: 'Outline Primary',   value: 'btn-outline-primary' },
	{ label: 'Outline Secondary', value: 'btn-outline-secondary' },
];

const BADGE_VARIANTS = [
	{ label: 'Primary', value: 'bg-primary text-white' }, { label: 'Secondary', value: 'bg-secondary text-white' },
	{ label: 'Success', value: 'bg-success text-white' },  { label: 'Danger', value: 'bg-danger text-white' },
	{ label: 'Warning', value: 'bg-warning text-dark' },   { label: 'Info', value: 'bg-info text-dark' },
	{ label: 'Dark',    value: 'bg-dark text-white' },     { label: 'Light', value: 'bg-light text-dark' },
];

const IMG_POSITION_OPTIONS = [
	{ label: 'Top',        value: 'top'     },
	{ label: 'Bottom',     value: 'bottom'  },
	{ label: 'Overlay',    value: 'overlay' },
	{ label: 'Left (horizontal)',  value: 'left'    },
	{ label: 'Right (horizontal)', value: 'right'   },
];

const SHADOW_OPTIONS = [
	{ label: 'None', value: '' }, { label: 'Small', value: 'shadow-sm' },
	{ label: 'Default', value: 'shadow' }, { label: 'Large', value: 'shadow-lg' },
];

const IMG_COL_OPTIONS = [
	{ label: '1/4 width', value: 'col-md-4' },
	{ label: '1/3 width', value: 'col-md-4 col-lg-4' },
	{ label: '1/2 width', value: 'col-md-6' },
	{ label: '2/5 width', value: 'col-md-5' },
];

export default function Edit( { attributes, setAttributes } ) {
	const {
		imageUrl, imageAlt, imageId,
		imagePosition, imageCol,
		title, subtitle, bodyText,
		showBadge, badgeText, badgeVariant,
		showLink, linkText, linkUrl, linkVariant,
		bgColor, borderColor, shadow, textAlign, noBorder,
	} = attributes;

	const blockProps = useBlockProps( { className: 'wmblocks-card-image-wrapper' } );

	const cardClasses = [ 'card', bgColor, borderColor, shadow, noBorder ? 'border-0' : '', textAlign ]
		.filter( Boolean ).join( ' ' );
	const isHorizontal = imagePosition === 'left' || imagePosition === 'right';
	const isOverlay    = imagePosition === 'overlay';

	return (
		<>
			<BlockControls>
				<ToolbarGroup>
					{ IMG_POSITION_OPTIONS.map( ( p ) => (
						<ToolbarButton key={ p.value } label={ p.label } isPressed={ imagePosition === p.value }
							onClick={ () => setAttributes( { imagePosition: p.value } ) }
						>{ { top:'↑', bottom:'↓', overlay:'⊞', left:'←', right:'→' }[ p.value ] }</ToolbarButton>
					) ) }
				</ToolbarGroup>
				<ToolbarGroup>
					{ [ 'text-start', 'text-center', 'text-end' ].map( ( a ) => (
						<ToolbarButton key={ a }
							icon={ { 'text-start': 'editor-alignleft', 'text-center': 'editor-aligncenter', 'text-end': 'editor-alignright' }[ a ] }
							isPressed={ textAlign === a }
							onClick={ () => setAttributes( { textAlign: textAlign === a ? '' : a } ) }
						/>
					) ) }
				</ToolbarGroup>
			</BlockControls>

			<InspectorControls>
				<PanelBody title={ __( 'Image', 'wmblocks' ) } initialOpen={ true }>
					<SelectControl label={ __( 'Image Position', 'wmblocks' ) } value={ imagePosition }
						options={ IMG_POSITION_OPTIONS } onChange={ ( v ) => setAttributes( { imagePosition: v } ) }
					/>
					{ isHorizontal && (
						<SelectControl label={ __( 'Image Column Width', 'wmblocks' ) } value={ imageCol }
							options={ IMG_COL_OPTIONS } onChange={ ( v ) => setAttributes( { imageCol: v } ) }
						/>
					) }
					<TextControl label={ __( 'Image Alt Text', 'wmblocks' ) } value={ imageAlt }
						onChange={ ( v ) => setAttributes( { imageAlt: v } ) }
					/>
				</PanelBody>
				<PanelBody title={ __( 'Badge', 'wmblocks' ) } initialOpen={ false }>
					<ToggleControl label={ __( 'Show Badge', 'wmblocks' ) } checked={ !! showBadge }
						onChange={ ( v ) => setAttributes( { showBadge: v } ) }
					/>
					{ showBadge && <>
						<TextControl label={ __( 'Badge Text', 'wmblocks' ) } value={ badgeText }
							onChange={ ( v ) => setAttributes( { badgeText: v } ) }
						/>
						<SelectControl label={ __( 'Badge Colour', 'wmblocks' ) } value={ badgeVariant }
							options={ BADGE_VARIANTS } onChange={ ( v ) => setAttributes( { badgeVariant: v } ) }
						/>
					</> }
				</PanelBody>
				<PanelBody title={ __( 'Link Button', 'wmblocks' ) } initialOpen={ false }>
					<ToggleControl label={ __( 'Show Button', 'wmblocks' ) } checked={ !! showLink }
						onChange={ ( v ) => setAttributes( { showLink: v } ) }
					/>
					{ showLink && <>
						<TextControl label={ __( 'Button Text', 'wmblocks' ) } value={ linkText }
							onChange={ ( v ) => setAttributes( { linkText: v } ) }
						/>
						<TextControl label={ __( 'Button URL', 'wmblocks' ) } value={ linkUrl }
							onChange={ ( v ) => setAttributes( { linkUrl: v } ) } placeholder="https://"
						/>
						<SelectControl label={ __( 'Button Style', 'wmblocks' ) } value={ linkVariant }
							options={ BTN_VARIANTS } onChange={ ( v ) => setAttributes( { linkVariant: v } ) }
						/>
					</> }
				</PanelBody>
				<PanelBody title={ __( 'Card Style', 'wmblocks' ) } initialOpen={ false }>
					<SelectControl label={ __( 'Background', 'wmblocks' ) } value={ bgColor }
						options={ BG_OPTIONS } onChange={ ( v ) => setAttributes( { bgColor: v } ) }
					/>
					<SelectControl label={ __( 'Shadow', 'wmblocks' ) } value={ shadow }
						options={ SHADOW_OPTIONS } onChange={ ( v ) => setAttributes( { shadow: v } ) }
					/>
					<ToggleControl label={ __( 'No Border', 'wmblocks' ) } checked={ !! noBorder }
						onChange={ ( v ) => setAttributes( { noBorder: v } ) }
					/>
				</PanelBody>
			</InspectorControls>

			<div { ...blockProps }>
				<div className="wmblocks-card-image-label">
					<span>Card + Image</span>
					<span className="wmblocks-card-image-chip">{ imagePosition }</span>
					{ bgColor && <span className="wmblocks-card-image-chip">{ bgColor }</span> }
					{ shadow  && <span className="wmblocks-card-image-chip">{ shadow }</span> }
				</div>

				<div className={ cardClasses } style={ { overflow: 'hidden' } }>

					{ /* Horizontal card — row layout */ }
					{ isHorizontal ? (
						<div className="row g-0">
							{ imagePosition === 'left' && (
								<div className={ imageCol }>
									{ renderImageArea( imageUrl, imageId, imageAlt, setAttributes, true ) }
								</div>
							) }
							<div className={ 'col' }>
								{ renderCardBody( { title, subtitle, bodyText, showBadge, badgeText, badgeVariant, showLink, linkText, linkUrl, linkVariant, isOverlay: false, setAttributes } ) }
							</div>
							{ imagePosition === 'right' && (
								<div className={ imageCol }>
									{ renderImageArea( imageUrl, imageId, imageAlt, setAttributes, true ) }
								</div>
							) }
						</div>
					) : isOverlay ? (
						// Overlay card
						<>
							{ renderImageArea( imageUrl, imageId, imageAlt, setAttributes, false ) }
							<div className="card-img-overlay">
								{ renderCardBody( { title, subtitle, bodyText, showBadge, badgeText, badgeVariant, showLink, linkText, linkUrl, linkVariant, isOverlay: true, setAttributes } ) }
							</div>
						</>
					) : (
						// Top / Bottom card
						<>
							{ imagePosition === 'top'    && renderImageArea( imageUrl, imageId, imageAlt, setAttributes, false, 'top' ) }
							{ renderCardBody( { title, subtitle, bodyText, showBadge, badgeText, badgeVariant, showLink, linkText, linkUrl, linkVariant, isOverlay: false, setAttributes } ) }
							{ imagePosition === 'bottom' && renderImageArea( imageUrl, imageId, imageAlt, setAttributes, false, 'bottom' ) }
						</>
					) }

				</div>
			</div>
		</>
	);
}

// ── Canvas sub-renderers ───────────────────────────────────────────────────
function renderImageArea( imageUrl, imageId, imageAlt, setAttributes, isHorizontal, position = '' ) {
	const imgClass = isHorizontal
		? 'img-fluid rounded-start h-100 w-100'
		: position === 'bottom' ? 'card-img-bottom' : 'card-img-top';

	return (
		<MediaUploadCheck>
			<MediaUpload
				onSelect={ ( media ) => setAttributes( { imageUrl: media.url, imageId: media.id, imageAlt: media.alt || '' } ) }
				allowedTypes={ [ 'image' ] }
				value={ imageId }
				render={ ( { open } ) => (
					<div className="wmblocks-card-img-area" onClick={ open }>
						{ imageUrl ? (
							<img src={ imageUrl } alt={ imageAlt } className={ imgClass } style={ { display: 'block', width: '100%', objectFit: 'cover', minHeight: isHorizontal ? '100%' : '180px', maxHeight: isHorizontal ? 'none' : '240px' } } />
						) : (
							<div className="wmblocks-card-img-placeholder">
								<span>🖼</span>
								<span>{ isHorizontal ? __( 'Click to set image', 'wmblocks' ) : __( 'Click to set card image', 'wmblocks' ) }</span>
							</div>
						) }
						<div className="wmblocks-card-img-overlay-btn">{ imageUrl ? __( 'Change image', 'wmblocks' ) : __( 'Upload image', 'wmblocks' ) }</div>
					</div>
				) }
			/>
		</MediaUploadCheck>
	);
}

function renderCardBody( { title, subtitle, bodyText, showBadge, badgeText, badgeVariant, showLink, linkText, linkUrl, linkVariant, isOverlay, setAttributes } ) {
	return (
		<div className="card-body">
			{ showBadge && (
				<RichText tagName="span" className={ 'badge mb-2 ' + badgeVariant }
					value={ badgeText } onChange={ ( v ) => setAttributes( { badgeText: v } ) }
					allowedFormats={ [] } placeholder={ __( 'Badge…', 'wmblocks' ) }
				/>
			) }
			<RichText tagName="h5" className="card-title"
				value={ title } onChange={ ( v ) => setAttributes( { title: v } ) }
				allowedFormats={ [ 'core/bold', 'core/italic' ] }
				placeholder={ __( 'Card title…', 'wmblocks' ) }
			/>
			{ subtitle && (
				<RichText tagName="h6" className="card-subtitle mb-2 text-muted"
					value={ subtitle } onChange={ ( v ) => setAttributes( { subtitle: v } ) }
					allowedFormats={ [ 'core/bold', 'core/italic' ] }
					placeholder={ __( 'Subtitle…', 'wmblocks' ) }
				/>
			) }
			<RichText tagName="p" className="card-text"
				value={ bodyText } onChange={ ( v ) => setAttributes( { bodyText: v } ) }
				allowedFormats={ [ 'core/bold', 'core/italic', 'core/link' ] }
				placeholder={ __( 'Card body text…', 'wmblocks' ) }
			/>
			{ showLink && (
				<RichText tagName="a" className={ 'btn ' + linkVariant }
					value={ linkText } onChange={ ( v ) => setAttributes( { linkText: v } ) }
					allowedFormats={ [] } placeholder={ __( 'Button text…', 'wmblocks' ) }
				/>
			) }
		</div>
	);
}
