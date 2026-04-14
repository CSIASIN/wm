import { __ } from "@wordpress/i18n";
import {
	useBlockProps,
	InspectorControls,
	MediaUpload,
	MediaUploadCheck,
} from "@wordpress/block-editor";
import {
	PanelBody,
	TextControl,
	SelectControl,
	Button,
} from "@wordpress/components";
import "./editor.scss";

const BG_OPTS = [
	{ label: "— Default —", value: "" },
	{ label: "Light (bg-light)", value: "bg-light" },
	{ label: "White (bg-white)", value: "bg-white" },
	{ label: "Dark (bg-dark text-white)", value: "bg-dark text-white" },
	{ label: "Body (bg-body)", value: "bg-body" },
	{ label: "Primary (bg-primary text-white)", value: "bg-primary text-white" },
	{
		label: "Secondary (bg-secondary text-white)",
		value: "bg-secondary text-white",
	},
];
const BTN_VARIANTS = [
	{ label: "Primary", value: "btn-primary" },
	{ label: "Secondary", value: "btn-secondary" },
	{ label: "Outline Primary", value: "btn-outline-primary" },
	{ label: "Outline Secondary", value: "btn-outline-secondary" },
	{ label: "Outline Light", value: "btn-outline-light" },
	{ label: "Outline Dark", value: "btn-outline-dark" },
	{ label: "Success", value: "btn-success" },
	{ label: "Danger", value: "btn-danger" },
	{ label: "Warning", value: "btn-warning" },
	{ label: "Link", value: "btn-link" },
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
		logoUrl,
		logoId,
		logoHeight,
		heading,
		subtext,
		btn1Text,
		btn1Url,
		btn1Variant,
		btn2Text,
		btn2Url,
		btn2Variant,
		bgColor,
		customClass,
	} = attributes;
	const wrapClass = ["px-4 py-5 text-center", bgColor, customClass]
		.filter(Boolean)
		.join(" ");
	const blockProps = useBlockProps({ className: "wmblocks-hero1" });

	return (
		<>
			<InspectorControls>
				<PanelBody title={__("Logo", "wmblocks")} initialOpen={true}>
					<MediaUploadCheck>
						<MediaUpload
							onSelect={(m) => setAttributes({ logoUrl: m.url, logoId: m.id })}
							allowedTypes={["image"]}
							value={logoId}
							render={({ open }) => (
								<div>
									{logoUrl && (
										<img
											src={logoUrl}
											style={{
												height: logoHeight,
												marginBottom: 8,
												display: "block",
											}}
											alt=""
										/>
									)}
									<Button variant="secondary" size="small" onClick={open}>
										{logoUrl
											? __("Change Logo", "wmblocks")
											: __("Upload Logo", "wmblocks")}
									</Button>
									{logoUrl && (
										<Button
											variant="secondary"
											size="small"
											isDestructive
											onClick={() => setAttributes({ logoUrl: "", logoId: 0 })}
											style={{ marginLeft: 6 }}
										>
											{__("Remove", "wmblocks")}
										</Button>
									)}
								</div>
							)}
						/>
					</MediaUploadCheck>
					<TextControl
						label={__("Logo Height", "wmblocks")}
						value={logoHeight}
						onChange={(v) => setAttributes({ logoHeight: v })}
						placeholder="72px"
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
					<TextControl
						label={__("Extra Classes", "wmblocks")}
						value={customClass}
						onChange={(v) => setAttributes({ customClass: v })}
					/>
				</PanelBody>
			</InspectorControls>

			<div {...blockProps}>
				<div className={wrapClass}>
					<div className="container py-5">
						{logoUrl && (
							<img
								src={logoUrl}
								style={{ height: logoHeight, marginBottom: "1rem" }}
								alt=""
								className="d-block mx-auto"
							/>
						)}
						<E
							tag="h1"
							value={heading}
							onChange={(v) => setAttributes({ heading: v })}
							style={{
								fontWeight: 700,
								marginBottom: "1rem",
								fontSize: "2.5rem",
							}}
							placeholder={__("Hero heading…", "wmblocks")}
						/>
						<div className="col-lg-6 mx-auto">
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
								placeholder={__("Subtext…", "wmblocks")}
							/>
							<div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
								<a
									href="#"
									className={`btn ${btn1Variant} btn-lg px-4 gap-3`}
									onClick={(e) => e.preventDefault()}
								>
									<E
										value={btn1Text}
										onChange={(v) => setAttributes({ btn1Text: v })}
									/>
								</a>
								<a
									href="#"
									className={`btn ${btn2Variant} btn-lg px-4`}
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
			</div>
		</>
	);
}
