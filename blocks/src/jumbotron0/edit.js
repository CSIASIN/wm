import { __ } from "@wordpress/i18n";
import { useBlockProps, InspectorControls } from "@wordpress/block-editor";
import {
	PanelBody,
	TextControl,
	SelectControl,
	TextareaControl,
} from "@wordpress/components";
import "./editor.scss";

const BG_OPTS = [
	{ label: "— Default (white) —", value: "" },
	{ label: "bg-body-tertiary", value: "bg-body-tertiary" },
	{ label: "bg-body-secondary", value: "bg-body-secondary" },
	{ label: "bg-light", value: "bg-light" },
	{ label: "bg-dark text-white", value: "bg-dark text-white" },
	{ label: "bg-primary text-white", value: "bg-primary text-white" },
	{ label: "bg-secondary text-white", value: "bg-secondary text-white" },
];
const BTN_VARIANTS = [
	{ label: "Primary", value: "btn-primary" },
	{ label: "Secondary", value: "btn-secondary" },
	{ label: "Outline Primary", value: "btn-outline-primary" },
	{ label: "Outline Secondary", value: "btn-outline-secondary" },
	{ label: "Outline Dark", value: "btn-outline-dark" },
	{ label: "Light", value: "btn-light" },
	{ label: "Dark", value: "btn-dark" },
	{ label: "Link", value: "btn-link" },
];
const COL_OPTS = [
	{ label: "col-md-4", value: "col-md-4" },
	{ label: "col-md-6", value: "col-md-6" },
	{ label: "col-md-8", value: "col-md-8" },
	{ label: "col-md-10", value: "col-md-10" },
	{ label: "col-lg-4", value: "col-lg-4" },
	{ label: "col-lg-6", value: "col-lg-6" },
	{ label: "col-lg-8", value: "col-lg-8" },
	{ label: "col-xl-6", value: "col-xl-6" },
];
const ICON_COLOR_OPTS = [
	{ label: "text-body-secondary", value: "text-body-secondary" },
	{ label: "text-primary", value: "text-primary" },
	{ label: "text-secondary", value: "text-secondary" },
	{ label: "text-success", value: "text-success" },
	{ label: "text-danger", value: "text-danger" },
	{ label: "text-warning", value: "text-warning" },
	{ label: "text-info", value: "text-info" },
	{ label: "text-dark", value: "text-dark" },
	{ label: "text-light", value: "text-light" },
];

const E = ({
	tag: Tag = "span",
	value,
	onChange,
	style = {},
	placeholder = "",
}) => (
	<Tag
		contentEditable
		suppressContentEditableWarning
		onInput={(e) => onChange(e.currentTarget.textContent)}
		onKeyDown={(e) => Tag !== "p" && e.key === "Enter" && e.preventDefault()}
		style={{ outline: "none", cursor: "text", ...style }}
		data-placeholder={placeholder}
	>
		{value}
	</Tag>
);

export default function Edit({ attributes, setAttributes }) {
	const {
		iconSvg,
		iconColor,
		heading,
		subtext,
		btn1Text,
		btn1Url,
		btn1Variant,
		btn2Text,
		btn2Url,
		btn2Variant,
		bgColor,
		colWidth,
		customClass,
	} = attributes;
	const wrapClass = ["p-5 mb-4 rounded-3", bgColor, customClass]
		.filter(Boolean)
		.join(" ");
	const blockProps = useBlockProps({ className: "wmblocks-jumbotron1" });

	return (
		<>
			<InspectorControls>
				<PanelBody title={__("Icon", "wmblocks")} initialOpen={true}>
					<SelectControl
						label={__("Icon Color", "wmblocks")}
						value={iconColor}
						options={ICON_COLOR_OPTS}
						onChange={(v) => setAttributes({ iconColor: v })}
					/>
					<TextareaControl
						label={__("Custom SVG", "wmblocks")}
						value={iconSvg}
						onChange={(v) => setAttributes({ iconSvg: v })}
						rows={4}
						help={__(
							"Paste any <svg> markup. The default is a question-mark circle icon.",
							"wmblocks",
						)}
					/>
				</PanelBody>
				<PanelBody title={__("Buttons", "wmblocks")} initialOpen={false}>
					<TextControl
						label={__("Button 1 Text", "wmblocks")}
						value={btn1Text}
						onChange={(v) => setAttributes({ btn1Text: v })}
					/>
					<TextControl
						label={__("Button 1 URL", "wmblocks")}
						value={btn1Url}
						onChange={(v) => setAttributes({ btn1Url: v })}
					/>
					<SelectControl
						label={__("Button 1 Style", "wmblocks")}
						value={btn1Variant}
						options={BTN_VARIANTS}
						onChange={(v) => setAttributes({ btn1Variant: v })}
					/>
					<TextControl
						label={__("Button 2 Text", "wmblocks")}
						value={btn2Text}
						onChange={(v) => setAttributes({ btn2Text: v })}
					/>
					<TextControl
						label={__("Button 2 URL", "wmblocks")}
						value={btn2Url}
						onChange={(v) => setAttributes({ btn2Url: v })}
					/>
					<SelectControl
						label={__("Button 2 Style", "wmblocks")}
						value={btn2Variant}
						options={BTN_VARIANTS}
						onChange={(v) => setAttributes({ btn2Variant: v })}
					/>
				</PanelBody>
				<PanelBody title={__("Style", "wmblocks")} initialOpen={false}>
					<SelectControl
						label={__("Background", "wmblocks")}
						value={bgColor}
						options={BG_OPTS}
						onChange={(v) => setAttributes({ bgColor: v })}
					/>
					<SelectControl
						label={__("Text Column Width", "wmblocks")}
						value={colWidth}
						options={COL_OPTS}
						onChange={(v) => setAttributes({ colWidth: v })}
						help={__(
							"Controls the responsive width of heading and text to control line length.",
							"wmblocks",
						)}
					/>
					<TextControl
						label={__("Extra Classes", "wmblocks")}
						value={customClass}
						onChange={(v) => setAttributes({ customClass: v })}
					/>
				</PanelBody>
			</InspectorControls>

			<div {...blockProps}>
				<div className={wrapClass}>
					<div className="container-fluid py-5">
						{/* Icon */}
						<div
							className={`mb-4 ${iconColor}`}
							dangerouslySetInnerHTML={{ __html: iconSvg }}
						/>
						{/* Heading */}
						<E
							tag="h1"
							value={heading}
							onChange={(v) => setAttributes({ heading: v })}
							style={{
								display: "block",
								fontWeight: 700,
								fontSize: "2.5rem",
								marginBottom: "1rem",
							}}
							placeholder={__("Jumbotron heading…", "wmblocks")}
						/>
						{/* Subtext in a col */}
						<div className={colWidth}>
							<E
								tag="p"
								value={subtext}
								onChange={(v) => setAttributes({ subtext: v })}
								style={{
									display: "block",
									fontSize: "1.1rem",
									marginBottom: "1.5rem",
									color: "#555",
								}}
								placeholder={__("Description text…", "wmblocks")}
							/>
						</div>
						{/* Buttons */}
						<div className="d-flex gap-2 flex-wrap">
							<a
								href="#"
								className={`btn ${btn1Variant} btn-lg`}
								onClick={(e) => e.preventDefault()}
							>
								<E
									value={btn1Text}
									onChange={(v) => setAttributes({ btn1Text: v })}
								/>
							</a>
							<a
								href="#"
								className={`btn ${btn2Variant} btn-lg`}
								onClick={(e) => e.preventDefault()}
							>
								<E
									value={btn2Text}
									onChange={(v) => setAttributes({ btn2Text: v })}
								/>
							</a>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
