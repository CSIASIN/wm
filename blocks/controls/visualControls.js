import { __ } from '@wordpress/i18n';
import { PanelBody, SelectControl, RangeControl, Button, Flex, FlexItem, CheckboxControl, TextareaControl, ColorPicker, __experimentalNumberControl as NumberControl } from '@wordpress/components';

// ─── Background Color ────────────────────────────────────────────────────────

const BG_COLORS = [
	{ label: 'Primary',          value: 'bg-primary',          color: '#0d6efd' },
	{ label: 'Primary Subtle',   value: 'bg-primary-subtle',   color: '#cfe2ff' },
	{ label: 'Secondary',        value: 'bg-secondary',        color: '#6c757d' },
	{ label: 'Secondary Subtle', value: 'bg-secondary-subtle', color: '#e2e3e5' },
	{ label: 'Success',          value: 'bg-success',          color: '#198754' },
	{ label: 'Success Subtle',   value: 'bg-success-subtle',   color: '#d1e7dd' },
	{ label: 'Danger',           value: 'bg-danger',           color: '#dc3545' },
	{ label: 'Danger Subtle',    value: 'bg-danger-subtle',    color: '#f8d7da' },
	{ label: 'Warning',          value: 'bg-warning',          color: '#ffc107' },
	{ label: 'Warning Subtle',   value: 'bg-warning-subtle',   color: '#fff3cd' },
	{ label: 'Info',             value: 'bg-info',             color: '#0dcaf0' },
	{ label: 'Info Subtle',      value: 'bg-info-subtle',      color: '#cff4fc' },
	{ label: 'Light',            value: 'bg-light',            color: '#f8f9fa' },
	{ label: 'Light Subtle',     value: 'bg-light-subtle',     color: '#fcfcfd' },
	{ label: 'Dark',             value: 'bg-dark',             color: '#212529' },
	{ label: 'Dark Subtle',      value: 'bg-dark-subtle',      color: '#ced4da' },
	{ label: 'Body Secondary',   value: 'bg-body-secondary',   color: '#e9ecef' },
	{ label: 'Body Tertiary',    value: 'bg-body-tertiary',    color: '#f8f9fa' },
	{ label: 'Body',             value: 'bg-body',             color: '#ffffff' },
	{ label: 'Black',            value: 'bg-black',            color: '#000000' },
	{ label: 'White',            value: 'bg-white',            color: '#ffffff' },
	{ label: 'Transparent',      value: 'bg-transparent',      color: 'transparent' },
];

export function BackgroundColorControl( { value, onChange } ) {
	return (
		<PanelBody title={ __( 'Background Color', 'wm' ) } initialOpen={ false }>
			<div style={ { marginBottom: '8px', fontSize: '11px', color: '#757575', textTransform: 'uppercase', fontWeight: 600 } }>{ __( 'Select Background', 'wm' ) }</div>
			{ value && (
				<div style={ { marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '8px' } }>
					<span style={ { fontSize: '12px', color: '#555' } }>{ __( 'Selected:', 'wm' ) }</span>
					<code style={ { fontSize: '11px', background: '#f0f0f0', padding: '2px 6px', borderRadius: '3px' } }>{ value }</code>
					<button onClick={ () => onChange( '' ) } style={ { marginLeft: 'auto', fontSize: '11px', color: '#cc1818', background: 'none', border: 'none', cursor: 'pointer', padding: 0 } }>{ __( '✕ Clear', 'wm' ) }</button>
				</div>
			) }
			<div style={ { display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '6px' } }>
				{ BG_COLORS.map( ( { label, value: val, color } ) => (
					<button
						key={ val }
						title={ label + ' (' + val + ')' }
						onClick={ () => onChange( val === value ? '' : val ) }
						style={ {
							width: '100%', aspectRatio: '1',
							background: color === 'transparent' ? 'repeating-conic-gradient(#ccc 0% 25%, #fff 0% 50%) 0 0 / 10px 10px' : color,
							border: val === value ? '3px solid #007cba' : '2px solid #ddd',
							borderRadius: '4px', cursor: 'pointer', boxSizing: 'border-box',
							outline: val === value ? '2px solid #007cba' : 'none', outlineOffset: '1px',
						} }
					/>
				) ) }
			</div>
			<div style={ { marginTop: '8px', fontSize: '11px', color: '#757575' } }>{ __( 'Hover to see class name. Click to select, click again to deselect.', 'wm' ) }</div>
		</PanelBody>
	);
}

// ─── Text Color ───────────────────────────────────────────────────────────────

export function TextColorControl( { value, onChange } ) {
	return (
		<PanelBody title={ __( 'Text Color', 'wm' ) } initialOpen={ false }>
			{ value && (
				<div style={ { marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '8px' } }>
					<div style={ { width: '24px', height: '24px', borderRadius: '4px', background: value, border: '1px solid #ddd', flexShrink: 0 } } />
					<code style={ { fontSize: '11px', background: '#f0f0f0', padding: '2px 6px', borderRadius: '3px', flex: 1 } }>{ value }</code>
					<button onClick={ () => onChange( '' ) } style={ { fontSize: '11px', color: '#cc1818', background: 'none', border: 'none', cursor: 'pointer', padding: 0 } }>{ __( '✕ Clear', 'wm' ) }</button>
				</div>
			) }
			<ColorPicker color={ value || '#000000' } onChange={ onChange } enableAlpha defaultValue="#000000" />
		</PanelBody>
	);
}

// ─── Opacity ──────────────────────────────────────────────────────────────────

export function OpacityControl( { value, onChange } ) {
	return (
		<PanelBody title={ __( 'Opacity', 'wm' ) } initialOpen={ false }>
			<div style={ { marginBottom: '12px' } }>
				<div style={ { fontSize: '11px', color: '#757575', textTransform: 'uppercase', fontWeight: 600, marginBottom: '8px' } }>{ __( 'Presets', 'wm' ) }</div>
				<Flex gap={ 1 } wrap>
					{ [ 10, 25, 50, 75, 100 ].map( ( preset ) => (
						<FlexItem key={ preset }>
							<Button variant={ value === preset ? 'primary' : 'secondary' } size="small" onClick={ () => onChange( preset ) } style={ { minWidth: '48px' } }>
								{ preset }%
							</Button>
						</FlexItem>
					) ) }
				</Flex>
			</div>
			<RangeControl label={ __( 'Custom Opacity', 'wm' ) } value={ value } onChange={ onChange } min={ 0 } max={ 100 } step={ 1 } renderTooltipContent={ ( v ) => v + '%' } />
			<Flex align="center" gap={ 2 } style={ { marginTop: '8px' } }>
				<FlexItem isBlock>
					<NumberControl
						label={ __( 'Opacity Value (%)', 'wm' ) }
						value={ value } min={ 0 } max={ 100 } step={ 1 }
						onChange={ ( v ) => onChange( Math.min( 100, Math.max( 0, parseInt( v, 10 ) || 0 ) ) ) }
						suffix={ <span style={ { padding: '0 8px', color: '#757575' } }>%</span> }
					/>
				</FlexItem>
			</Flex>
			{ value !== 100 && (
				<Button variant="tertiary" size="small" onClick={ () => onChange( 100 ) } style={ { marginTop: '8px', color: '#cc1818' } }>
					{ __( '✕ Reset to 100%', 'wm' ) }
				</Button>
			) }
		</PanelBody>
	);
}

// ─── Shadow ───────────────────────────────────────────────────────────────────

export function ShadowControl( { value, onChange } ) {
	return (
		<PanelBody title={ __( 'Shadow', 'wm' ) } initialOpen={ false }>
			<SelectControl
				label={ __( 'Box Shadow', 'wm' ) }
				value={ value }
				options={ [
					{ label: '— None —',    value: '' },
					{ label: 'shadow-none', value: 'shadow-none' },
					{ label: 'shadow-sm',   value: 'shadow-sm' },
					{ label: 'shadow',      value: 'shadow' },
					{ label: 'shadow-lg',   value: 'shadow-lg' },
				] }
				onChange={ onChange }
				help={ __( 'Apply a Bootstrap box shadow utility class.', 'wm' ) }
			/>
		</PanelBody>
	);
}

// ─── Border ───────────────────────────────────────────────────────────────────

const BORDER_COLORS = [
	{ label: 'Primary',          value: 'border-primary',          color: '#0d6efd' },
	{ label: 'Primary Subtle',   value: 'border-primary-subtle',   color: '#cfe2ff' },
	{ label: 'Secondary',        value: 'border-secondary',        color: '#6c757d' },
	{ label: 'Secondary Subtle', value: 'border-secondary-subtle', color: '#e2e3e5' },
	{ label: 'Success',          value: 'border-success',          color: '#198754' },
	{ label: 'Success Subtle',   value: 'border-success-subtle',   color: '#d1e7dd' },
	{ label: 'Danger',           value: 'border-danger',           color: '#dc3545' },
	{ label: 'Danger Subtle',    value: 'border-danger-subtle',    color: '#f8d7da' },
	{ label: 'Warning',          value: 'border-warning',          color: '#ffc107' },
	{ label: 'Warning Subtle',   value: 'border-warning-subtle',   color: '#fff3cd' },
	{ label: 'Info',             value: 'border-info',             color: '#0dcaf0' },
	{ label: 'Info Subtle',      value: 'border-info-subtle',      color: '#cff4fc' },
	{ label: 'Light',            value: 'border-light',            color: '#f8f9fa' },
	{ label: 'Light Subtle',     value: 'border-light-subtle',     color: '#e9ecef' },
	{ label: 'Dark',             value: 'border-dark',             color: '#212529' },
	{ label: 'Dark Subtle',      value: 'border-dark-subtle',      color: '#ced4da' },
	{ label: 'Black',            value: 'border-black',            color: '#000000' },
	{ label: 'White',            value: 'border-white',            color: '#ffffff' },
];

const label11 = { margin: '10px 0 4px', fontSize: '11px', color: '#757575', textTransform: 'uppercase', fontWeight: 600 };

export function BorderControl( { borderSides, borderRemove, borderColor, borderOpacityClass, borderOpacityCustom, borderSize, borderRadius, borderRadiusSize, setAttributes } ) {
	return (
		<PanelBody title={ __( 'Border', 'wm' ) } initialOpen={ false }>

			<div style={ { ...label11, marginTop: 0 } }>{ __( 'Border Sides', 'wm' ) }</div>
			{ [ 'border', 'border-top', 'border-end', 'border-bottom', 'border-start' ].map( ( cls ) => (
				<CheckboxControl key={ cls } label={ cls } checked={ ( borderSides || [] ).includes( cls ) }
					onChange={ ( checked ) => setAttributes( { borderSides: checked ? [ ...( borderSides || [] ), cls ] : ( borderSides || [] ).filter( ( c ) => c !== cls ) } ) }
				/>
			) ) }

			<div style={ label11 }>{ __( 'Remove Border Sides', 'wm' ) }</div>
			{ [ 'border-0', 'border-top-0', 'border-end-0', 'border-bottom-0', 'border-start-0' ].map( ( cls ) => (
				<CheckboxControl key={ cls } label={ cls } checked={ ( borderRemove || [] ).includes( cls ) }
					onChange={ ( checked ) => setAttributes( { borderRemove: checked ? [ ...( borderRemove || [] ), cls ] : ( borderRemove || [] ).filter( ( c ) => c !== cls ) } ) }
				/>
			) ) }

			<div style={ { ...label11, marginTop: '10px', marginBottom: '8px' } }>{ __( 'Border Color', 'wm' ) }</div>
			{ borderColor && (
				<div style={ { marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '8px' } }>
					<code style={ { fontSize: '11px', background: '#f0f0f0', padding: '2px 6px', borderRadius: '3px' } }>{ borderColor }</code>
					<button onClick={ () => setAttributes( { borderColor: '' } ) } style={ { fontSize: '11px', color: '#cc1818', background: 'none', border: 'none', cursor: 'pointer' } }>{ __( '✕ Clear', 'wm' ) }</button>
				</div>
			) }
			<div style={ { display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '6px', marginBottom: '8px' } }>
				{ BORDER_COLORS.map( ( { label, value, color } ) => (
					<button key={ value } title={ label + '\n' + value }
						onClick={ () => setAttributes( { borderColor: value === borderColor ? '' : value } ) }
						style={ { width: '100%', aspectRatio: '1', background: color, border: value === borderColor ? '3px solid #007cba' : '2px solid #ddd', borderRadius: '4px', cursor: 'pointer', boxSizing: 'border-box', outline: value === borderColor ? '2px solid #007cba' : 'none', outlineOffset: '1px' } }
					/>
				) ) }
			</div>

			<div style={ label11 }>{ __( 'Border Opacity', 'wm' ) }</div>
			<Flex gap={ 1 } wrap style={ { marginBottom: '8px' } }>
				{ [ { label: '75%', value: 'border-opacity-75' }, { label: '50%', value: 'border-opacity-50' }, { label: '25%', value: 'border-opacity-25' }, { label: '10%', value: 'border-opacity-10' } ].map( ( { label, value } ) => (
					<FlexItem key={ value }>
						<Button variant={ borderOpacityClass === value ? 'primary' : 'secondary' } size="small" onClick={ () => setAttributes( { borderOpacityClass: borderOpacityClass === value ? '' : value } ) }>{ label }</Button>
					</FlexItem>
				) ) }
			</Flex>
			<TextareaControl label={ __( 'Custom Border Opacity (CSS var)', 'wm' ) } help={ __( 'e.g. .5 → sets --bs-border-opacity: .5', 'wm' ) } value={ borderOpacityCustom } onChange={ ( value ) => setAttributes( { borderOpacityCustom: value } ) } rows={ 1 } />

			<div style={ label11 }>{ __( 'Border Width', 'wm' ) }</div>
			<Flex gap={ 1 } wrap style={ { marginBottom: '8px' } }>
				{ [ '1', '2', '3', '4', '5' ].map( ( size ) => (
					<FlexItem key={ size }>
						<Button variant={ borderSize === 'border-' + size ? 'primary' : 'secondary' } size="small" onClick={ () => setAttributes( { borderSize: borderSize === 'border-' + size ? '' : 'border-' + size } ) } style={ { minWidth: '36px' } }>{ size }</Button>
					</FlexItem>
				) ) }
			</Flex>

			<div style={ label11 }>{ __( 'Border Radius Side', 'wm' ) }</div>
			<Flex gap={ 1 } wrap style={ { marginBottom: '8px' } }>
				{ [ 'rounded', 'rounded-top', 'rounded-end', 'rounded-bottom', 'rounded-start' ].map( ( cls ) => (
					<FlexItem key={ cls }>
						<Button variant={ borderRadius === cls ? 'primary' : 'secondary' } size="small" onClick={ () => setAttributes( { borderRadius: borderRadius === cls ? '' : cls } ) }>{ cls.replace( 'rounded-', '' ) || 'all' }</Button>
					</FlexItem>
				) ) }
			</Flex>

			<div style={ label11 }>{ __( 'Border Radius Size', 'wm' ) }</div>
			<Flex gap={ 1 } wrap style={ { marginBottom: '4px' } }>
				{ [ 'rounded-0', 'rounded-1', 'rounded-2', 'rounded-3', 'rounded-4', 'rounded-5', 'rounded-circle', 'rounded-pill', 'rounded-top-1', 'rounded-top-2', 'rounded-top-3', 'rounded-top-4', 'rounded-top-5' ].map( ( cls ) => (
					<FlexItem key={ cls }>
						<Button variant={ borderRadiusSize === cls ? 'primary' : 'secondary' } size="small" onClick={ () => setAttributes( { borderRadiusSize: borderRadiusSize === cls ? '' : cls } ) }>{ cls.replace( 'rounded-', '' ) }</Button>
					</FlexItem>
				) ) }
			</Flex>

		</PanelBody>
	);
}

// ─── Custom CSS ───────────────────────────────────────────────────────────────

export function CustomCSSControl( { value, onChange } ) {
	return (
		<PanelBody title={ __( 'Custom CSS', 'wm' ) } initialOpen={ false }>
			<TextareaControl label={ __( 'Inline CSS', 'wm' ) } help={ __( 'e.g. height:300px; width:300px', 'wm' ) } value={ value } onChange={ onChange } rows={ 3 } />
		</PanelBody>
	);
}
