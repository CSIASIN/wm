import { __ } from '@wordpress/i18n';
import { PanelBody, TabPanel, ToggleControl } from '@wordpress/components';

const DOT = {
	display: 'inline-block', width: '6px', height: '6px',
	borderRadius: '50%', background: '#007cba',
	marginLeft: '4px', verticalAlign: 'middle',
};

const label11 = { fontSize: '11px', color: '#757575', textTransform: 'uppercase', fontWeight: 600 };

export function VisibilityControl( { hideXs, hideSm, hideMd, hideLg, hideXl, hideXxl, setAttributes } ) {
	return (
		<PanelBody title={ __( 'Show / Hide', 'wm' ) } initialOpen={ false }>

			<div style={ { ...label11, marginBottom: '4px' } }>{ __( 'Mobile & Tablet', 'wm' ) }</div>
			<TabPanel tabs={ [
				{ name: 'xs', title: <span>XS{ !! hideXs && <span style={ DOT } /> }</span> },
				{ name: 'sm', title: <span>SM{ !! hideSm && <span style={ DOT } /> }</span> },
				{ name: 'md', title: <span>MD{ !! hideMd && <span style={ DOT } /> }</span> },
			] }>
				{ ( tab ) => (
					<div style={ { paddingTop: '12px' } }>
						{ tab.name === 'xs' && <ToggleControl label={ __( 'Hide on XS', 'wm' ) } checked={ !! hideXs } onChange={ ( val ) => setAttributes( { hideXs: val } ) } help={ hideXs ? __( 'Hidden on XS (< 576px). Adds: d-none d-sm-block', 'wm' ) : __( 'Hide on Extra Small (< 576px) devices.', 'wm' ) } /> }
						{ tab.name === 'sm' && <ToggleControl label={ __( 'Hide on SM', 'wm' ) } checked={ !! hideSm } onChange={ ( val ) => setAttributes( { hideSm: val } ) } help={ hideSm ? __( 'Hidden on SM (576px–767px). Adds: d-sm-none d-md-block', 'wm' ) : __( 'Hide on Small (576px–767px) devices.', 'wm' ) } /> }
						{ tab.name === 'md' && <ToggleControl label={ __( 'Hide on MD', 'wm' ) } checked={ !! hideMd } onChange={ ( val ) => setAttributes( { hideMd: val } ) } help={ hideMd ? __( 'Hidden on MD (768px–991px). Adds: d-md-none d-lg-block', 'wm' ) : __( 'Hide on Medium (768px–991px) devices.', 'wm' ) } /> }
					</div>
				) }
			</TabPanel>

			<div style={ { ...label11, margin: '12px 0 4px' } }>{ __( 'Desktop & Wide', 'wm' ) }</div>
			<TabPanel tabs={ [
				{ name: 'lg',  title: <span>LG{ !! hideLg && <span style={ DOT } /> }</span> },
				{ name: 'xl',  title: <span>XL{ !! hideXl && <span style={ DOT } /> }</span> },
				{ name: 'xxl', title: <span>XXL{ !! hideXxl && <span style={ DOT } /> }</span> },
			] }>
				{ ( tab ) => (
					<div style={ { paddingTop: '12px' } }>
						{ tab.name === 'lg'  && <ToggleControl label={ __( 'Hide on LG', 'wm' ) }  checked={ !! hideLg }  onChange={ ( val ) => setAttributes( { hideLg: val } ) }  help={ hideLg  ? __( 'Hidden on LG (992px–1199px). Adds: d-lg-none d-xl-block', 'wm' )   : __( 'Hide on Large (992px–1199px) devices.', 'wm' ) } /> }
						{ tab.name === 'xl'  && <ToggleControl label={ __( 'Hide on XL', 'wm' ) }  checked={ !! hideXl }  onChange={ ( val ) => setAttributes( { hideXl: val } ) }  help={ hideXl  ? __( 'Hidden on XL (1200px–1399px). Adds: d-xl-none d-xxl-block', 'wm' ) : __( 'Hide on Extra Large (1200px–1399px) devices.', 'wm' ) } /> }
						{ tab.name === 'xxl' && <ToggleControl label={ __( 'Hide on XXL', 'wm' ) } checked={ !! hideXxl } onChange={ ( val ) => setAttributes( { hideXxl: val } ) } help={ hideXxl ? __( 'Hidden on XXL (≥1400px). Adds: d-xxl-none', 'wm' )              : __( 'Hide on Extra Extra Large (≥1400px) devices.', 'wm' ) } /> }
					</div>
				) }
			</TabPanel>

		</PanelBody>
	);
}
