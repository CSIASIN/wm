import { __ } from '@wordpress/i18n';
import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, TextControl, SelectControl } from '@wordpress/components';
import './editor.scss';

const BG_OPTS = [
	{ label: 'Dark (bg-dark)', value: 'bg-dark text-white' },
	{ label: 'Black', value: 'bg-black text-white' },
	{ label: 'Primary', value: 'bg-primary text-white' },
	{ label: 'Secondary', value: 'bg-secondary text-white' },
	{ label: 'Success', value: 'bg-success text-white' },
	{ label: 'Danger', value: 'bg-danger text-white' },
	{ label: 'Info', value: 'bg-info text-dark' },
	{ label: 'Warning', value: 'bg-warning text-dark' },
	{ label: 'Light', value: 'bg-light text-dark' },
];
const BTN_VARIANTS = [
	{ label: 'Outline Light', value: 'btn-outline-light' },
	{ label: 'Outline Secondary', value: 'btn-outline-secondary' },
	{ label: 'Light', value: 'btn-light' },
	{ label: 'Primary', value: 'btn-primary' },
	{ label: 'Secondary', value: 'btn-secondary' },
	{ label: 'White', value: 'btn-white' },
];
const E = ({ tag: Tag='span', value, onChange, style={}, placeholder='' }) => (
	<Tag contentEditable suppressContentEditableWarning
		onInput={e => onChange(e.currentTarget.textContent)}
		onKeyDown={e => Tag !== 'p' && e.key === 'Enter' && e.preventDefault()}
		style={{ outline:'none', cursor:'text', ...style }}
		data-placeholder={placeholder}
	>{value}</Tag>
);

export default function Edit({ attributes, setAttributes }) {
	const { heading, subtext, btn1Text, btn1Url, btn1Variant, btn2Text, btn2Url, btn2Variant, bgColor, customClass } = attributes;
	const wrapClass = ['px-4 py-5 text-center', bgColor, customClass].filter(Boolean).join(' ');
	const isDark = bgColor.includes('text-white');
	const blockProps = useBlockProps({ className: 'wmblocks-hero6' });

	return (
		<>
			<InspectorControls>
				<PanelBody title={__('Buttons','wmblocks')} initialOpen={true}>
					<TextControl label={__('Button 1 Text','wmblocks')} value={btn1Text} onChange={v=>setAttributes({btn1Text:v})} />
					<TextControl label={__('Button 1 URL','wmblocks')} value={btn1Url} onChange={v=>setAttributes({btn1Url:v})} />
					<SelectControl label={__('Button 1 Style','wmblocks')} value={btn1Variant} options={BTN_VARIANTS} onChange={v=>setAttributes({btn1Variant:v})} />
					<TextControl label={__('Button 2 Text','wmblocks')} value={btn2Text} onChange={v=>setAttributes({btn2Text:v})} />
					<TextControl label={__('Button 2 URL','wmblocks')} value={btn2Url} onChange={v=>setAttributes({btn2Url:v})} />
					<SelectControl label={__('Button 2 Style','wmblocks')} value={btn2Variant} options={BTN_VARIANTS} onChange={v=>setAttributes({btn2Variant:v})} />
				</PanelBody>
				<PanelBody title={__('Style','wmblocks')} initialOpen={false}>
					<SelectControl label={__('Background','wmblocks')} value={bgColor} options={BG_OPTS} onChange={v=>setAttributes({bgColor:v})} />
					<TextControl label={__('Extra Classes','wmblocks')} value={customClass} onChange={v=>setAttributes({customClass:v})} />
				</PanelBody>
			</InspectorControls>

			<div {...blockProps}>
				<div className={wrapClass}>
					<div className="container py-5">
						<E tag="h1" value={heading} onChange={v=>setAttributes({heading:v})}
							style={{ fontWeight:700, fontSize:'2.5rem', marginBottom:'1rem', color: isDark ? '#fff' : undefined }} placeholder={__('Heading…','wmblocks')} />
						<div className="col-lg-6 mx-auto">
							<E tag="p" value={subtext} onChange={v=>setAttributes({subtext:v})}
								style={{ display:'block', fontSize:'1.1rem', marginBottom:'1.5rem', color: isDark ? 'rgba(255,255,255,0.75)' : '#555' }} placeholder={__('Subtext…','wmblocks')} />
							<div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
								<a href="#" className={`btn ${btn1Variant} btn-lg px-4 gap-3`} onClick={e=>e.preventDefault()}><E value={btn1Text} onChange={v=>setAttributes({btn1Text:v})} /></a>
								<a href="#" className={`btn ${btn2Variant} btn-lg px-4`}       onClick={e=>e.preventDefault()}><E value={btn2Text} onChange={v=>setAttributes({btn2Text:v})} /></a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
