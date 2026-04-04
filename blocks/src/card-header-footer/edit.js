import { __ } from '@wordpress/i18n';
import { useBlockProps, InspectorControls, InnerBlocks, RichText, BlockControls } from '@wordpress/block-editor';
import { PanelBody, SelectControl, ToggleControl, TextControl, ToolbarGroup, ToolbarButton } from '@wordpress/components';
import './editor.scss';

const BG_OPTIONS = [
	{ label: 'Default', value: '' },
	{ label: 'Primary',   value: 'text-bg-primary'   }, { label: 'Secondary', value: 'text-bg-secondary' },
	{ label: 'Success',   value: 'text-bg-success'   }, { label: 'Danger',    value: 'text-bg-danger'    },
	{ label: 'Warning',   value: 'text-bg-warning'   }, { label: 'Info',      value: 'text-bg-info'      },
	{ label: 'Light',     value: 'text-bg-light'     }, { label: 'Dark',      value: 'text-bg-dark'      },
];

const ZONE_BG_OPTIONS = [
	{ label: 'Default',   value: '' },
	{ label: 'Primary',   value: 'bg-primary text-white'   }, { label: 'Secondary', value: 'bg-secondary text-white' },
	{ label: 'Success',   value: 'bg-success text-white'   }, { label: 'Danger',    value: 'bg-danger text-white'    },
	{ label: 'Warning',   value: 'bg-warning text-dark'    }, { label: 'Info',      value: 'bg-info text-dark'       },
	{ label: 'Light',     value: 'bg-light text-dark'      }, { label: 'Dark',      value: 'bg-dark text-white'      },
];

const SHADOW_OPTIONS = [
	{ label: 'None', value: '' }, { label: 'Small', value: 'shadow-sm' },
	{ label: 'Default', value: 'shadow' }, { label: 'Large', value: 'shadow-lg' },
];

const BORDER_OPTIONS = [
	{ label: 'Default', value: '' },
	{ label: 'Primary', value: 'border-primary' }, { label: 'Secondary', value: 'border-secondary' },
	{ label: 'Success', value: 'border-success' }, { label: 'Danger',    value: 'border-danger'    },
	{ label: 'Warning', value: 'border-warning' }, { label: 'Info',      value: 'border-info'      },
	{ label: 'Dark',    value: 'border-dark'    }, { label: 'Light',     value: 'border-light'     },
];

const BODY_TEMPLATE = [
	[ 'core/heading',   { level: 2, placeholder: __( 'Card title…', 'wmblocks' )      } ],
	[ 'core/paragraph', { placeholder: __( 'Card body content…', 'wmblocks' )         } ],
	[ 'wmblocks/buttons', {} ],
];

export default function Edit( { attributes, setAttributes } ) {
	const {
		headerText, footerText, showHeader, showFooter,
		headerBgVariant, footerBgVariant,
		bgColor, borderColor, shadow, textAlign, noBorder, customWidth,
	} = attributes;

	const cardClasses = [ 'card', bgColor, borderColor, shadow, noBorder ? 'border-0' : '', textAlign ]
		.filter( Boolean ).join( ' ' );

	const blockProps = useBlockProps( { className: 'wmblocks-card-hf-wrapper' } );

	return (
		<>
			<BlockControls>
				<ToolbarGroup>
					<ToolbarButton label={ __( 'Toggle Header', 'wmblocks' ) } isPressed={ showHeader }
						onClick={ () => setAttributes( { showHeader: ! showHeader } ) }
					>{ __( 'Header', 'wmblocks' ) }</ToolbarButton>
					<ToolbarButton label={ __( 'Toggle Footer', 'wmblocks' ) } isPressed={ showFooter }
						onClick={ () => setAttributes( { showFooter: ! showFooter } ) }
					>{ __( 'Footer', 'wmblocks' ) }</ToolbarButton>
				</ToolbarGroup>
				<ToolbarGroup>
					{ SHADOW_OPTIONS.filter( s => s.value ).map( ( s ) => (
						<ToolbarButton key={ s.value } label={ 'Shadow: ' + s.label }
							isPressed={ shadow === s.value }
							onClick={ () => setAttributes( { shadow: shadow === s.value ? '' : s.value } ) }
						>{ s.label.slice( 0, 2 ) }</ToolbarButton>
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
				<PanelBody title={ __( 'Header', 'wmblocks' ) } initialOpen={ true }>
					<ToggleControl label={ __( 'Show Header', 'wmblocks' ) } checked={ !! showHeader }
						onChange={ ( v ) => setAttributes( { showHeader: v } ) }
						help={ __( 'Edit header text directly on the canvas.', 'wmblocks' ) }
					/>
					{ showHeader && (
						<SelectControl label={ __( 'Header Background', 'wmblocks' ) } value={ headerBgVariant }
							options={ ZONE_BG_OPTIONS } onChange={ ( v ) => setAttributes( { headerBgVariant: v } ) }
						/>
					) }
				</PanelBody>
				<PanelBody title={ __( 'Footer', 'wmblocks' ) } initialOpen={ true }>
					<ToggleControl label={ __( 'Show Footer', 'wmblocks' ) } checked={ !! showFooter }
						onChange={ ( v ) => setAttributes( { showFooter: v } ) }
						help={ __( 'Edit footer text directly on the canvas.', 'wmblocks' ) }
					/>
					{ showFooter && (
						<SelectControl label={ __( 'Footer Background', 'wmblocks' ) } value={ footerBgVariant }
							options={ ZONE_BG_OPTIONS } onChange={ ( v ) => setAttributes( { footerBgVariant: v } ) }
						/>
					) }
				</PanelBody>
				<PanelBody title={ __( 'Card Style', 'wmblocks' ) } initialOpen={ false }>
					<SelectControl label={ __( 'Background / Text Colour', 'wmblocks' ) } value={ bgColor }
						options={ BG_OPTIONS } onChange={ ( v ) => setAttributes( { bgColor: v } ) }
					/>
					<SelectControl label={ __( 'Border Colour', 'wmblocks' ) } value={ borderColor }
						options={ BORDER_OPTIONS } onChange={ ( v ) => setAttributes( { borderColor: v } ) }
					/>
					<ToggleControl label={ __( 'No Border', 'wmblocks' ) } checked={ !! noBorder }
						onChange={ ( v ) => setAttributes( { noBorder: v } ) }
					/>
					<SelectControl label={ __( 'Shadow', 'wmblocks' ) } value={ shadow }
						options={ SHADOW_OPTIONS } onChange={ ( v ) => setAttributes( { shadow: v } ) }
					/>
				</PanelBody>
				<PanelBody title={ __( 'Card Width', 'wmblocks' ) } initialOpen={ false }>
					<TextControl label={ __( 'Custom Width', 'wmblocks' ) } value={ customWidth }
						onChange={ ( v ) => setAttributes( { customWidth: v } ) }
						placeholder="e.g. 20rem or 50%"
					/>
				</PanelBody>
			</InspectorControls>

			<div { ...blockProps }>

				{/* Label strip */}
				<div className="wmblocks-card-hf-label">
					<span>Card + Header/Footer</span>
					{ showHeader && <span className="wmblocks-card-hf-chip">header</span> }
					{ showFooter && <span className="wmblocks-card-hf-chip">footer</span> }
					{ shadow && <span className="wmblocks-card-hf-chip">{ shadow }</span> }
				</div>

				<div className={ cardClasses } style={ customWidth ? { width: customWidth } : {} }>

					{/* ── Header — RichText inline ──────────────────── */}
					{ showHeader && (
						<div className={ 'card-header ' + headerBgVariant }>
							<RichText
								tagName="span"
								value={ headerText }
								onChange={ ( v ) => setAttributes( { headerText: v } ) }
								allowedFormats={ [ 'core/bold', 'core/italic' ] }
								placeholder={ __( 'Header text…', 'wmblocks' ) }
							/>
						</div>
					) }

					{/* ── Body — InnerBlocks ────────────────────────── */}
					<div className="card-body">
						<InnerBlocks
							template={ BODY_TEMPLATE }
							templateLock={ false }
						/>
					</div>

					{/* ── Footer — RichText inline ──────────────────── */}
					{ showFooter && (
						<div className={ 'card-footer text-muted ' + footerBgVariant }>
							<RichText
								tagName="span"
								value={ footerText }
								onChange={ ( v ) => setAttributes( { footerText: v } ) }
								allowedFormats={ [ 'core/bold', 'core/italic' ] }
								placeholder={ __( 'Footer text…', 'wmblocks' ) }
							/>
						</div>
					) }

				</div>
			</div>
		</>
	);
}
