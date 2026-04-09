import { __ } from '@wordpress/i18n';
import { useBlockProps, InspectorControls, InnerBlocks, BlockControls } from '@wordpress/block-editor';
import { useSelect, useDispatch } from '@wordpress/data';
import { PanelBody, SelectControl, TextControl, ToolbarGroup, ToolbarButton } from '@wordpress/components';
import './editor.scss';

const POSITION_TYPES = [
	{ label: 'position-absolute', value: 'position-absolute' },
	{ label: 'position-fixed',    value: 'position-fixed' },
	{ label: 'position-sticky',   value: 'position-sticky' },
	{ label: 'position-relative', value: 'position-relative' },
];

const EDGE_OPTS = ( prop ) => [
	{ label: '— None —',     value: '' },
	{ label: `${prop}-0`,    value: `${prop}-0` },
	{ label: `${prop}-50`,   value: `${prop}-50` },
	{ label: `${prop}-100`,  value: `${prop}-100` },
];

const TRANSLATE_OPTS = [
	{ label: '— None —',              value: '' },
	{ label: 'translate-middle',      value: 'translate-middle' },
	{ label: 'translate-middle-x',    value: 'translate-middle-x' },
	{ label: 'translate-middle-y',    value: 'translate-middle-y' },
];

const ZINDEX_OPTS = [
	{ label: '— None —', value: '' },
	{ label: 'z-0',      value: 'z-0' },
	{ label: 'z-1',      value: 'z-1' },
	{ label: 'z-2',      value: 'z-2' },
	{ label: 'z-3',      value: 'z-3' },
	{ label: 'z-n1',     value: 'z-n1' },
];

// Preset positions — common Bootstrap patterns
const PRESETS = [
	{ label: 'Top Start',     top: 'top-0',   start: 'start-0', end: '', bottom: '', translate: '' },
	{ label: 'Top Center',    top: 'top-0',   start: 'start-50', end: '', bottom: '', translate: 'translate-middle-x' },
	{ label: 'Top End',       top: 'top-0',   end: 'end-0',   start: '', bottom: '', translate: '' },
	{ label: 'Middle Start',  top: 'top-50',  start: 'start-0', end: '', bottom: '', translate: 'translate-middle-y' },
	{ label: 'Center',        top: 'top-50',  start: 'start-50', end: '', bottom: '', translate: 'translate-middle' },
	{ label: 'Middle End',    top: 'top-50',  end: 'end-0',   start: '', bottom: '', translate: 'translate-middle-y' },
	{ label: 'Bottom Start',  bottom: 'bottom-0', start: 'start-0', top: '', end: '', translate: '' },
	{ label: 'Bottom Center', bottom: 'bottom-0', start: 'start-50', top: '', end: '', translate: 'translate-middle-x' },
	{ label: 'Bottom End',    bottom: 'bottom-0', end: 'end-0', top: '', start: '', translate: '' },
];

// Content templates for common use cases
const TEMPLATES = {
	badge:    [ [ 'core/html', { content: '<span class="badge text-bg-danger rounded-pill">99+</span>' } ] ],
	button:   [ [ 'core/html', { content: '<button type="button" class="btn btn-sm btn-primary">Click</button>' } ] ],
	progress: [ [ 'wmblocks/progress', {} ] ],
	text:     [ [ 'core/paragraph', { placeholder: 'Positioned content…' } ] ],
	image:    [ [ 'wmblocks/bs-image', {} ] ],
};

const ALLOWED = [
	'core/paragraph', 'core/heading', 'core/html', 'core/image', 'wmblocks/buttons', 'core/group',
	'wmblocks/bs-image', 'wmblocks/progress', 'wmblocks/flex-container',
	'wmblocks/vstack', 'wmblocks/hstack',
];

export default function Edit( { attributes, setAttributes, clientId } ) {
	const { positionType, top, bottom, start, end, translate, zIndex, customClass } = attributes;

	const { parentClientId } = useSelect( ( select ) => {
		const store = select( 'core/block-editor' );
		return { parentClientId: store.getBlockRootClientId( clientId ) };
	}, [ clientId ] );

	const { removeBlock } = useDispatch( 'core/block-editor' );

	const elementClass = [
		positionType, top, bottom, start, end, translate, zIndex, customClass,
	].filter( Boolean ).join( ' ' );

	const blockProps = useBlockProps( {
		className: 'wmblocks-position-element',
	} );

	return (
		<>
			<BlockControls>
				<ToolbarGroup>
					<ToolbarButton icon="trash" label={ __( 'Remove Element', 'wmblocks' ) } onClick={ () => removeBlock( clientId ) } isDestructive />
				</ToolbarGroup>
			</BlockControls>

			<InspectorControls>

				{ /* Quick presets */ }
				<PanelBody title={ __( 'Quick Presets', 'wmblocks' ) } initialOpen={ true }>
					<div style={ { marginBottom: '8px', fontSize: '11px', color: '#555' } }>{ __( 'Click a position on the grid to apply:', 'wmblocks' ) }</div>
					<div style={ { display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '4px', marginBottom: '12px' } }>
						{ PRESETS.map( ( preset ) => {
							const isActive = top === preset.top && bottom === ( preset.bottom || '' ) && start === ( preset.start || '' ) && end === ( preset.end || '' ) && translate === preset.translate;
							return (
								<button
									key={ preset.label }
									onClick={ () => setAttributes( { top: preset.top || '', bottom: preset.bottom || '', start: preset.start || '', end: preset.end || '', translate: preset.translate || '' } ) }
									style={ {
										padding: '6px 4px', fontSize: '10px', cursor: 'pointer',
										border: isActive ? '2px solid #6f42c1' : '1px solid #ddd',
										borderRadius: '4px', background: isActive ? '#f8f5ff' : '#f8f9fa',
										color: isActive ? '#6f42c1' : '#555', fontWeight: isActive ? 600 : 400,
									} }
								>
									{ preset.label }
								</button>
							);
						} ) }
					</div>

					{ /* Content type shortcuts */ }
					<div style={ { fontSize: '11px', color: '#555', marginBottom: '6px' } }>{ __( 'Quick content:', 'wmblocks' ) }</div>
					<div style={ { display: 'flex', gap: '4px', flexWrap: 'wrap' } }>
						{ Object.entries( TEMPLATES ).map( ( [ key, tpl ] ) => (
							<button key={ key }
								onMouseDown={ ( e ) => {
									// Can't set template after mount — use HTML block as workaround
									e.preventDefault();
								} }
								style={ { fontSize: '11px', padding: '3px 8px', border: '1px solid #ddd', borderRadius: '3px', background: '#f8f9fa', cursor: 'default', color: '#888' } }
								title={ __( 'Add content via the block inserter inside this element', 'wmblocks' ) }
							>
								{ key }
							</button>
						) ) }
					</div>
					<div style={ { fontSize: '10px', color: '#aaa', marginTop: '4px' } }>{ __( 'Use the block inserter inside this element to add buttons, badges, progress etc.', 'wmblocks' ) }</div>
				</PanelBody>

				{ /* Position controls */ }
				<PanelBody title={ __( 'Position', 'wmblocks' ) } initialOpen={ true }>
					<SelectControl label={ __( 'Type',      'wmblocks' ) } value={ positionType } options={ POSITION_TYPES }    onChange={ ( v ) => setAttributes( { positionType: v } ) } />
					<SelectControl label={ __( 'Top',       'wmblocks' ) } value={ top }          options={ EDGE_OPTS( 'top' ) }    onChange={ ( v ) => setAttributes( { top: v } ) } />
					<SelectControl label={ __( 'Bottom',    'wmblocks' ) } value={ bottom }       options={ EDGE_OPTS( 'bottom' ) } onChange={ ( v ) => setAttributes( { bottom: v } ) } />
					<SelectControl label={ __( 'Start',     'wmblocks' ) } value={ start }        options={ EDGE_OPTS( 'start' ) }  onChange={ ( v ) => setAttributes( { start: v } ) } />
					<SelectControl label={ __( 'End',       'wmblocks' ) } value={ end }          options={ EDGE_OPTS( 'end' ) }    onChange={ ( v ) => setAttributes( { end: v } ) } />
					<SelectControl label={ __( 'Translate', 'wmblocks' ) } value={ translate }    options={ TRANSLATE_OPTS }        onChange={ ( v ) => setAttributes( { translate: v } ) } help={ __( 'translate-middle centers the element on its anchor point.', 'wmblocks' ) } />
					<SelectControl label={ __( 'Z-Index',   'wmblocks' ) } value={ zIndex }       options={ ZINDEX_OPTS }           onChange={ ( v ) => setAttributes( { zIndex: v } ) } />
					<TextControl   label={ __( 'Extra Classes', 'wmblocks' ) } value={ customClass } onChange={ ( v ) => setAttributes( { customClass: v } ) } />
				</PanelBody>

			</InspectorControls>

			<div { ...blockProps }>
				{ /* Position class badge */ }
				<div style={ { fontSize: '9px', fontFamily: 'monospace', color: '#6f42c1', marginBottom: '4px', background: '#f8f5ff', padding: '2px 5px', borderRadius: '3px', display: 'inline-block', maxWidth: '100%', wordBreak: 'break-all' } }>
					{ elementClass || 'position-absolute' }
				</div>
				<InnerBlocks
					allowedBlocks={ ALLOWED }
					template={ [ [ 'core/html', { content: '<span class="badge text-bg-danger rounded-pill">99+</span>' } ] ] }
					templateLock={ false }
				/>
			</div>
		</>
	);
}
