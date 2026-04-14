import { __ } from '@wordpress/i18n';
import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, TextControl, SelectControl } from '@wordpress/components';
import './editor.scss';

const BG_OPTS = [
	{ label: '— Default —', value: '' }, { label: 'Light', value: 'bg-light' },
	{ label: 'White', value: 'bg-white' }, { label: 'Dark', value: 'bg-dark text-white' },
];
const BTN_VARIANTS = [
	{ label: 'Primary', value: 'btn-primary' }, { label: 'Secondary', value: 'btn-secondary' },
	{ label: 'Success', value: 'btn-success' }, { label: 'Dark', value: 'btn-dark' },
	{ label: 'Outline Light', value: 'btn-outline-light' },
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
	const { heading, subtext, emailLabel, passwordLabel, rememberLabel, submitText, submitVariant, legalText, bgColor, customClass } = attributes;
	const wrapClass = ['py-5', bgColor, customClass].filter(Boolean).join(' ');
	const blockProps = useBlockProps({ className: 'wmblocks-hero4' });

	return (
		<>
			<InspectorControls>
				<PanelBody title={__('Form Labels','wmblocks')} initialOpen={true}>
					<TextControl label={__('Email Label','wmblocks')}    value={emailLabel}    onChange={v=>setAttributes({emailLabel:v})} />
					<TextControl label={__('Password Label','wmblocks')} value={passwordLabel} onChange={v=>setAttributes({passwordLabel:v})} />
					<TextControl label={__('Remember Label','wmblocks')} value={rememberLabel} onChange={v=>setAttributes({rememberLabel:v})} />
					<TextControl label={__('Submit Text','wmblocks')}    value={submitText}    onChange={v=>setAttributes({submitText:v})} />
					<SelectControl label={__('Submit Style','wmblocks')} value={submitVariant} options={BTN_VARIANTS} onChange={v=>setAttributes({submitVariant:v})} />
					<TextControl label={__('Legal Text','wmblocks')}     value={legalText}     onChange={v=>setAttributes({legalText:v})} />
				</PanelBody>
				<PanelBody title={__('Style','wmblocks')} initialOpen={false}>
					<SelectControl label={__('Background','wmblocks')} value={bgColor} options={BG_OPTS} onChange={v=>setAttributes({bgColor:v})} />
					<TextControl label={__('Extra Classes','wmblocks')} value={customClass} onChange={v=>setAttributes({customClass:v})} />
				</PanelBody>
			</InspectorControls>

			<div {...blockProps}>
				<div className={wrapClass}>
					<div className="container">
						<div className="row align-items-center g-5 py-5">
							{ /* Left: heading + subtext */ }
							<div className="col-lg-7">
								<E tag="h1" value={heading} onChange={v=>setAttributes({heading:v})}
									style={{ fontWeight:700, fontSize:'2.2rem', marginBottom:'1rem', lineHeight:1.2 }} placeholder={__('Heading…','wmblocks')} />
								<E tag="p" value={subtext} onChange={v=>setAttributes({subtext:v})}
									style={{ display:'block', fontSize:'1rem', color:'#555' }} placeholder={__('Subtext…','wmblocks')} />
							</div>
							{ /* Right: sign-up form */ }
							<div className="col-lg-5">
								<div className="p-4 p-md-5 border rounded-3 bg-body-tertiary">
									<div className="form-floating mb-3">
										<input type="email" className="form-control" id="heroEmail" placeholder="name@example.com" readOnly style={{ pointerEvents:'none' }} />
										<label htmlFor="heroEmail">{emailLabel}</label>
									</div>
									<div className="form-floating mb-3">
										<input type="password" className="form-control" id="heroPassword" placeholder="Password" readOnly style={{ pointerEvents:'none' }} />
										<label htmlFor="heroPassword">{passwordLabel}</label>
									</div>
									<div className="checkbox mb-3">
										<label className="d-flex align-items-center gap-2">
											<input type="checkbox" style={{ pointerEvents:'none' }} />
											<span>{rememberLabel}</span>
										</label>
									</div>
									<button className={`btn ${submitVariant} w-100 btn-lg`} type="button" style={{ pointerEvents:'none' }}>{submitText}</button>
									<hr />
									<small className="text-body-secondary">{legalText}</small>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
