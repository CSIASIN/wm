import { __ } from '@wordpress/i18n';
import { PanelBody, SelectControl } from '@wordpress/components';

const PADDING_OPTIONS = [
	{ label: '— None —',              value: '' },
	{ label: 'p-0 (No Padding)',       value: 'p-0' },
	{ label: 'p-1 (0.25rem)',          value: 'p-1' },
	{ label: 'p-2 (0.5rem)',           value: 'p-2' },
	{ label: 'p-3 (1rem)',             value: 'p-3' },
	{ label: 'p-4 (1.5rem)',           value: 'p-4' },
	{ label: 'p-5 (3rem)',             value: 'p-5' },
	{ label: 'pt-0 (Top 0)',           value: 'pt-0' },
	{ label: 'pt-1 (0.25rem)',         value: 'pt-1' },
	{ label: 'pt-2 (0.5rem)',          value: 'pt-2' },
	{ label: 'pt-3 (1rem)',            value: 'pt-3' },
	{ label: 'pt-4 (1.5rem)',          value: 'pt-4' },
	{ label: 'pt-5 (3rem)',            value: 'pt-5' },
	{ label: 'pb-0 (Bottom 0)',        value: 'pb-0' },
	{ label: 'pb-1 (0.25rem)',         value: 'pb-1' },
	{ label: 'pb-2 (0.5rem)',          value: 'pb-2' },
	{ label: 'pb-3 (1rem)',            value: 'pb-3' },
	{ label: 'pb-4 (1.5rem)',          value: 'pb-4' },
	{ label: 'pb-5 (3rem)',            value: 'pb-5' },
	{ label: 'ps-0 (Start/Left 0)',    value: 'ps-0' },
	{ label: 'ps-1 (0.25rem)',         value: 'ps-1' },
	{ label: 'ps-2 (0.5rem)',          value: 'ps-2' },
	{ label: 'ps-3 (1rem)',            value: 'ps-3' },
	{ label: 'ps-4 (1.5rem)',          value: 'ps-4' },
	{ label: 'ps-5 (3rem)',            value: 'ps-5' },
	{ label: 'pe-0 (End/Right 0)',     value: 'pe-0' },
	{ label: 'pe-1 (0.25rem)',         value: 'pe-1' },
	{ label: 'pe-2 (0.5rem)',          value: 'pe-2' },
	{ label: 'pe-3 (1rem)',            value: 'pe-3' },
	{ label: 'pe-4 (1.5rem)',          value: 'pe-4' },
	{ label: 'pe-5 (3rem)',            value: 'pe-5' },
	{ label: 'px-0 (Left & Right 0)', value: 'px-0' },
	{ label: 'px-1 (0.25rem)',         value: 'px-1' },
	{ label: 'px-2 (0.5rem)',          value: 'px-2' },
	{ label: 'px-3 (1rem)',            value: 'px-3' },
	{ label: 'px-4 (1.5rem)',          value: 'px-4' },
	{ label: 'px-5 (3rem)',            value: 'px-5' },
	{ label: 'py-0 (Top & Bottom 0)', value: 'py-0' },
	{ label: 'py-1 (0.25rem)',         value: 'py-1' },
	{ label: 'py-2 (0.5rem)',          value: 'py-2' },
	{ label: 'py-3 (1rem)',            value: 'py-3' },
	{ label: 'py-4 (1.5rem)',          value: 'py-4' },
	{ label: 'py-5 (3rem)',            value: 'py-5' },
];

const MARGIN_OPTIONS = [
	{ label: '— None —',             value: '' },
	{ label: 'm-0 (No Margin)',       value: 'm-0' },
	{ label: 'm-1 (0.25rem)',         value: 'm-1' },
	{ label: 'm-2 (0.5rem)',          value: 'm-2' },
	{ label: 'm-3 (1rem)',            value: 'm-3' },
	{ label: 'm-4 (1.5rem)',          value: 'm-4' },
	{ label: 'm-5 (3rem)',            value: 'm-5' },
	{ label: 'm-auto',                value: 'm-auto' },
	{ label: 'mt-0 (Top 0)',          value: 'mt-0' },
	{ label: 'mt-1 (0.25rem)',        value: 'mt-1' },
	{ label: 'mt-2 (0.5rem)',         value: 'mt-2' },
	{ label: 'mt-3 (1rem)',           value: 'mt-3' },
	{ label: 'mt-4 (1.5rem)',         value: 'mt-4' },
	{ label: 'mt-5 (3rem)',           value: 'mt-5' },
	{ label: 'mt-auto',               value: 'mt-auto' },
	{ label: 'mb-0 (Bottom 0)',       value: 'mb-0' },
	{ label: 'mb-1 (0.25rem)',        value: 'mb-1' },
	{ label: 'mb-2 (0.5rem)',         value: 'mb-2' },
	{ label: 'mb-3 (1rem)',           value: 'mb-3' },
	{ label: 'mb-4 (1.5rem)',         value: 'mb-4' },
	{ label: 'mb-5 (3rem)',           value: 'mb-5' },
	{ label: 'mb-auto',               value: 'mb-auto' },
	{ label: 'ms-0 (Start/Left 0)',   value: 'ms-0' },
	{ label: 'ms-1 (0.25rem)',        value: 'ms-1' },
	{ label: 'ms-2 (0.5rem)',         value: 'ms-2' },
	{ label: 'ms-3 (1rem)',           value: 'ms-3' },
	{ label: 'ms-4 (1.5rem)',         value: 'ms-4' },
	{ label: 'ms-5 (3rem)',           value: 'ms-5' },
	{ label: 'ms-auto',               value: 'ms-auto' },
	{ label: 'me-0 (End/Right 0)',    value: 'me-0' },
	{ label: 'me-1 (0.25rem)',        value: 'me-1' },
	{ label: 'me-2 (0.5rem)',         value: 'me-2' },
	{ label: 'me-3 (1rem)',           value: 'me-3' },
	{ label: 'me-4 (1.5rem)',         value: 'me-4' },
	{ label: 'me-5 (3rem)',           value: 'me-5' },
	{ label: 'me-auto',               value: 'me-auto' },
	{ label: 'mx-0 (Left & Right 0)', value: 'mx-0' },
	{ label: 'mx-1 (0.25rem)',        value: 'mx-1' },
	{ label: 'mx-2 (0.5rem)',         value: 'mx-2' },
	{ label: 'mx-3 (1rem)',           value: 'mx-3' },
	{ label: 'mx-4 (1.5rem)',         value: 'mx-4' },
	{ label: 'mx-5 (3rem)',           value: 'mx-5' },
	{ label: 'mx-auto',               value: 'mx-auto' },
	{ label: 'my-0 (Top & Bottom 0)', value: 'my-0' },
	{ label: 'my-1 (0.25rem)',        value: 'my-1' },
	{ label: 'my-2 (0.5rem)',         value: 'my-2' },
	{ label: 'my-3 (1rem)',           value: 'my-3' },
	{ label: 'my-4 (1.5rem)',         value: 'my-4' },
	{ label: 'my-5 (3rem)',           value: 'my-5' },
	{ label: 'my-auto',               value: 'my-auto' },
];

export function PaddingControl( { value, onChange } ) {
	return (
		<PanelBody title={ __( 'Padding', 'wm' ) } initialOpen={ false }>
			<SelectControl
				label={ __( 'Padding', 'wm' ) }
				help={ __( 'e.g. p-1 all sides, pt-1 top, pb-1 bottom, ps-1 start, pe-1 end, px left & right, py top & bottom', 'wm' ) }
				value={ value }
				options={ PADDING_OPTIONS }
				onChange={ onChange }
			/>
		</PanelBody>
	);
}

export function MarginControl( { value, onChange } ) {
	return (
		<PanelBody title={ __( 'Margin', 'wm' ) } initialOpen={ false }>
			<SelectControl
				label={ __( 'Margin', 'wm' ) }
				help={ __( 'e.g. m-1 all sides, mt-1 top, mb-1 bottom, ms-1 start, me-1 end, mx left & right, my top & bottom', 'wm' ) }
				value={ value }
				options={ MARGIN_OPTIONS }
				onChange={ onChange }
			/>
		</PanelBody>
	);
}
