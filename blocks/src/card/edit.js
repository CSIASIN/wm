import { __ } from '@wordpress/i18n';
import { useBlockProps, InspectorControls, InnerBlocks, BlockControls } from '@wordpress/block-editor';
import { PanelBody, SelectControl, ToggleControl, TextControl, ToolbarGroup, ToolbarButton } from '@wordpress/components';
import './editor.scss';

const BG_OPTIONS = [
	{ label: 'Default (white)',  value: ''              },
	{ label: 'Primary',         value: 'text-bg-primary'   },
	{ label: 'Secondary',       value: 'text-bg-secondary' },
	{ label: 'Success',         value: 'text-bg-success'   },
	{ label: 'Danger',          value: 'text-bg-danger'    },
	{ label: 'Warning',         value: 'text-bg-warning'   },
	{ label: 'Info',            value: 'text-bg-info'      },
	{ label: 'Light',           value: 'text-bg-light'     },
	{ label: 'Dark',            value: 'text-bg-dark'      },
];

const BORDER_OPTIONS = [
	{ label: 'Default',   value: ''                  },
	{ label: 'Primary',   value: 'border-primary'    },
	{ label: 'Secondary', value: 'border-secondary'  },
	{ label: 'Success',   value: 'border-success'    },
	{ label: 'Danger',    value: 'border-danger'      },
	{ label: 'Warning',   value: 'border-warning'    },
	{ label: 'Info',      value: 'border-info'        },
	{ label: 'Light',     value: 'border-light'       },
	{ label: 'Dark',      value: 'border-dark'        },
];

const SHADOW_OPTIONS = [
	{ label: 'None',    value: ''          },
	{ label: 'Small',   value: 'shadow-sm' },
	{ label: 'Default', value: 'shadow'    },
	{ label: 'Large',   value: 'shadow-lg' },
];

const RADIUS_OPTIONS = [
	{ label: 'Default', value: ''           },
	{ label: 'None',    value: 'rounded-0'  },
	{ label: 'Small',   value: 'rounded-1'  },
	{ label: 'Medium',  value: 'rounded-2'  },
	{ label: 'Large',   value: 'rounded-3'  },
	{ label: 'XL',      value: 'rounded-4'  },
	{ label: 'Pill',    value: 'rounded-5'  },
];

const ALIGN_OPTIONS = [
	{ label: 'Default', value: ''          },
	{ label: 'Left',    value: 'text-start'},
	{ label: 'Center',  value: 'text-center'},
	{ label: 'Right',   value: 'text-end'  },
];

const BODY_TEMPLATE = [
	[ 'core/heading',   { level: 5, placeholder: __( 'Card title…', 'wmblocks' ) } ],
	[ 'core/paragraph', { placeholder: __( 'Card body text…', 'wmblocks' )        } ],
];

export default function Edit( { attributes, setAttributes } ) {
	const { bgColor, borderColor, shadow, borderRadius, noBorder, textAlign, customWidth } = attributes;

	// Build preview card classes
	const cardClasses = [ 'card', bgColor, borderColor, shadow, borderRadius, noBorder ? 'border-0' : '', textAlign ]
		.filter( Boolean ).join( ' ' );

	const blockProps = useBlockProps( { className: 'wmblocks-card-wrapper' } );

	return (
		<>
			<BlockControls>
				<ToolbarGroup>
					{ [ 'text-start', 'text-center', 'text-end' ].map( ( a ) => (
						<ToolbarButton
							key={ a }
							icon={ { 'text-start': 'editor-alignleft', 'text-center': 'editor-aligncenter', 'text-end': 'editor-alignright' }[ a ] }
							label={ a }
							isPressed={ textAlign === a }
							onClick={ () => setAttributes( { textAlign: textAlign === a ? '' : a } ) }
						/>
					) ) }
				</ToolbarGroup>
				<ToolbarGroup>
					{ SHADOW_OPTIONS.filter( s => s.value ).map( ( s ) => (
						<ToolbarButton key={ s.value } label={ 'Shadow: ' + s.label } isPressed={ shadow === s.value }
							onClick={ () => setAttributes( { shadow: shadow === s.value ? '' : s.value } ) }
						>{ s.label.slice(0,2) }</ToolbarButton>
					) ) }
				</ToolbarGroup>
			</BlockControls>

			<InspectorControls>
				<PanelBody title={ __( 'Card Style', 'wmblocks' ) } initialOpen={ true }>
					<SelectControl label={ __( 'Background / Text Colour', 'wmblocks' ) } value={ bgColor }
						options={ BG_OPTIONS } onChange={ ( v ) => setAttributes( { bgColor: v } ) }
						help={ __( 'Bootstrap contextual colour — sets bg and text together.', 'wmblocks' ) }
					/>
					<SelectControl label={ __( 'Border Colour', 'wmblocks' ) } value={ borderColor }
						options={ BORDER_OPTIONS } onChange={ ( v ) => setAttributes( { borderColor: v } ) }
					/>
					<ToggleControl label={ __( 'No Border', 'wmblocks' ) } checked={ !! noBorder }
						onChange={ ( v ) => setAttributes( { noBorder: v } ) }
						help={ __( 'Removes the card border entirely.', 'wmblocks' ) }
					/>
					<SelectControl label={ __( 'Shadow', 'wmblocks' ) } value={ shadow }
						options={ SHADOW_OPTIONS } onChange={ ( v ) => setAttributes( { shadow: v } ) }
					/>
					<SelectControl label={ __( 'Border Radius', 'wmblocks' ) } value={ borderRadius }
						options={ RADIUS_OPTIONS } onChange={ ( v ) => setAttributes( { borderRadius: v } ) }
					/>
					<SelectControl label={ __( 'Text Align', 'wmblocks' ) } value={ textAlign }
						options={ ALIGN_OPTIONS } onChange={ ( v ) => setAttributes( { textAlign: v } ) }
					/>
				</PanelBody>
				<PanelBody title={ __( 'Card Width', 'wmblocks' ) } initialOpen={ false }>
					<TextControl label={ __( 'Custom Width', 'wmblocks' ) } value={ customWidth }
						onChange={ ( v ) => setAttributes( { customWidth: v } ) }
						placeholder="e.g. 18rem or 50%"
						help={ __( 'Leave empty for full width. Use Bootstrap w-* or a custom value.', 'wmblocks' ) }
					/>
				</PanelBody>
			</InspectorControls>

			<div { ...blockProps }>
				<div className="wmblocks-card-label">
					<span>Card</span>
					{ bgColor     && <span className="wmblocks-card-chip">{ bgColor }</span> }
					{ shadow      && <span className="wmblocks-card-chip">{ shadow }</span> }
					{ noBorder    && <span className="wmblocks-card-chip">no border</span> }
					{ customWidth && <span className="wmblocks-card-chip">{ customWidth }</span> }
				</div>

				<div className={ cardClasses } style={ customWidth ? { width: customWidth } : {} }>
					<div className="card-body">
						<InnerBlocks template={ BODY_TEMPLATE } templateLock={ false } />
					</div>
				</div>
			</div>
		</>
	);
}
