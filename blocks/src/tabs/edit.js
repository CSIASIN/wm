import { __ } from '@wordpress/i18n';
import { useBlockProps, InspectorControls, InnerBlocks, BlockControls } from '@wordpress/block-editor';
import { useSelect, useDispatch } from '@wordpress/data';
import { PanelBody, SelectControl, ToggleControl, ToolbarGroup, ToolbarButton, Badge } from '@wordpress/components';
import './editor.scss';

const TABS_TEMPLATE = [
	[ 'wmblocks/tab-item', { tabLabel: 'Alpha', tabId: 'alpha', isActive: true  } ],
	[ 'wmblocks/tab-item', { tabLabel: 'Beta',  tabId: 'beta',  isActive: false } ],
	[ 'wmblocks/tab-item', { tabLabel: 'Gamma', tabId: 'gamma', isActive: false } ],
	[ 'wmblocks/tab-item', { tabLabel: 'Delta', tabId: 'delta', isActive: false } ],
	[ 'wmblocks/tab-item', { tabLabel: 'Theta', tabId: 'theta', isActive: false } ],
];

export default function Edit( { attributes, setAttributes, clientId } ) {
	const { tabStyle, tabFill, activeTabIndex, vertical, fadeEffect } = attributes;

	const innerBlocks = useSelect( ( select ) =>
		select( 'core/block-editor' ).getBlocks( clientId )
	, [ clientId ] );

	const { updateBlockAttributes } = useDispatch( 'core/block-editor' );

	const tabCount = innerBlocks.length;

	const handleTabClick = ( index ) => {
		setAttributes( { activeTabIndex: index } );
	};

	// #8 — vertical layout classes
	const wrapperClass = [
		'wmblocks-tabs-wrapper',
		vertical ? 'wmblocks-tabs-vertical' : '',
	].filter( Boolean ).join( ' ' );

	const navClass = [
		'nav',
		tabStyle,
		tabFill,
		vertical ? 'flex-column' : '',
	].filter( Boolean ).join( ' ' );

	const blockProps = useBlockProps( { className: wrapperClass } );

	return (
		<>
			{ /* #7 — Tab count badge in block toolbar */ }
			<BlockControls>
				<ToolbarGroup>
					<div style={ { display: 'flex', alignItems: 'center', padding: '0 8px', fontSize: '12px', color: '#1e1e1e', fontWeight: 500, gap: '6px' } }>
						<span>{ __( 'Tabs', 'wmblocks' ) }</span>
						<span style={ { background: '#007cba', color: '#fff', borderRadius: '10px', padding: '1px 7px', fontSize: '11px', fontWeight: 600 } }>
							{ tabCount }
						</span>
					</div>
				</ToolbarGroup>
			</BlockControls>

			<InspectorControls>
				<PanelBody title={ __( 'Tabs Settings', 'wmblocks' ) } initialOpen={ true }>
					<SelectControl
						label={ __( 'Tab Style', 'wmblocks' ) }
						value={ tabStyle }
						options={ [
							{ label: 'Tabs',      value: 'nav-tabs' },
							{ label: 'Pills',     value: 'nav-pills' },
							{ label: 'Underline', value: 'nav-underline' },
						] }
						onChange={ ( v ) => setAttributes( { tabStyle: v } ) }
					/>
					<SelectControl
						label={ __( 'Fill', 'wmblocks' ) }
						value={ tabFill }
						options={ [
							{ label: '— None —',      value: '' },
							{ label: 'nav-fill',      value: 'nav-fill' },
							{ label: 'nav-justified', value: 'nav-justified' },
						] }
						onChange={ ( v ) => setAttributes( { tabFill: v } ) }
					/>
					{ /* #8 — Vertical toggle */ }
					<ToggleControl
						label={ __( 'Vertical Tabs', 'wmblocks' ) }
						checked={ !! vertical }
						onChange={ ( v ) => setAttributes( { vertical: v } ) }
						help={ vertical
							? __( 'Tabs are stacked vertically. Adds: flex-column', 'wmblocks' )
							: __( 'Toggle to stack tabs vertically.', 'wmblocks' )
						}
					/>
					{ /* #9 — Fade toggle */ }
					<ToggleControl
						label={ __( 'Fade Animation', 'wmblocks' ) }
						checked={ !! fadeEffect }
						onChange={ ( v ) => setAttributes( { fadeEffect: v } ) }
						help={ fadeEffect
							? __( 'Tab panes fade in when switching.', 'wmblocks' )
							: __( 'Tab panes switch instantly with no animation.', 'wmblocks' )
						}
					/>
				</PanelBody>
			</InspectorControls>

			<div { ...blockProps }>
				<ul className={ navClass } role="tablist">
					{ innerBlocks.map( ( block, i ) => {
						const { tabLabel, tabId } = block.attributes;
						return (
							<li key={ tabId || i } className="nav-item" role="presentation">
								<button
									className={ [ 'nav-link', activeTabIndex === i ? 'active' : '' ].filter( Boolean ).join( ' ' ) }
									type="button"
									onMouseDown={ ( e ) => {
										e.preventDefault();
										handleTabClick( i );
									} }
								>
									{ tabLabel || __( 'Tab', 'wmblocks' ) }
								</button>
							</li>
						);
					} ) }
				</ul>

				<div className="tab-content">
					<InnerBlocks
						allowedBlocks={ [ 'wmblocks/tab-item' ] }
						template={ TABS_TEMPLATE }
						templateLock={ false }
					/>
				</div>
			</div>
		</>
	);
}
