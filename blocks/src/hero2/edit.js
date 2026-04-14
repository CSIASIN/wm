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
	{ label: "Light", value: "bg-light" },
	{ label: "White", value: "bg-white" },
	{ label: "Dark", value: "bg-dark text-white" },
	{ label: "Body", value: "bg-body" },
];
const BTN_VARIANTS = [
	{ label: "Primary", value: "btn-primary" },
	{ label: "Secondary", value: "btn-secondary" },
	{ label: "Outline Primary", value: "btn-outline-primary" },
	{ label: "Outline Secondary", value: "btn-outline-secondary" },
	{ label: "Outline Light", value: "btn-outline-light" },
	{ label: "Success", value: "btn-success" },
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
		heading,
		subtext,
		btn1Text,
		btn1Url,
		btn1Variant,
		btn2Text,
		btn2Url,
		btn2Variant,
		imageUrl,
		imageId,
		imageAlt,
		bgColor,
		customClass,
	} = attributes;
	const wrapClass = ["px-4 py-5 text-center", bgColor, customClass]
		.filter(Boolean)
		.join(" ");
	const blockProps = useBlockProps({ className: "wmblocks-hero2" });

	return (
		<>
			<InspectorControls>
				<PanelBody
					title={__("Screenshot Image", "wmblocks")}
					initialOpen={true}
				>
					<MediaUploadCheck>
						<MediaUpload
							onSelect={(m) =>
								setAttributes({
									imageUrl: m.url,
									imageId: m.id,
									imageAlt: m.alt || "",
								})
							}
							allowedTypes={["image"]}
							value={imageId}
							render={({ open }) => (
								<div>
									{imageUrl && (
										<img
											src={imageUrl}
											style={{
												width: "100%",
												height: 80,
												objectFit: "cover",
												marginBottom: 8,
												borderRadius: 4,
											}}
											alt=""
										/>
									)}
									<Button variant="secondary" size="small" onClick={open}>
										{imageUrl
											? __("Change Image", "wmblocks")
											: __("Upload Screenshot", "wmblocks")}
									</Button>
									{imageUrl && (
										<Button
											variant="secondary"
											size="small"
											isDestructive
											onClick={() =>
												setAttributes({ imageUrl: "", imageId: 0 })
											}
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
						label={__("Alt Text", "wmblocks")}
						value={imageAlt}
						onChange={(v) => setAttributes({ imageAlt: v })}
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
						<E
							tag="h1"
							value={heading}
							onChange={(v) => setAttributes({ heading: v })}
							style={{
								fontWeight: 700,
								marginBottom: "1rem",
								fontSize: "2.5rem",
							}}
							placeholder={__("Heading…", "wmblocks")}
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
							<div className="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
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
						{imageUrl ? (
							<div
								className="overflow-hidden"
								style={{
									maxHeight: 400,
									borderRadius: "0.5rem",
									boxShadow: "0 0 40px rgba(0,0,0,.15)",
								}}
							>
								<img
									src={imageUrl}
									alt={imageAlt}
									className="img-fluid"
									style={{ objectFit: "cover", width: "100%" }}
								/>
							</div>
						) : (
							<MediaUploadCheck>
								<MediaUpload
									onSelect={(m) =>
										setAttributes({
											imageUrl: m.url,
											imageId: m.id,
											imageAlt: m.alt || "",
										})
									}
									allowedTypes={["image"]}
									value={imageId}
									render={({ open }) => (
										<div
											onClick={open}
											style={{
												height: 200,
												border: "2px dashed #adb5bd",
												borderRadius: 8,
												display: "flex",
												alignItems: "center",
												justifyContent: "center",
												cursor: "pointer",
												color: "#6c757d",
												flexDirection: "column",
												gap: 8,
											}}
										>
											<span style={{ fontSize: 32 }}>📸</span>
											<span style={{ fontSize: 13 }}>
												{__("Click to upload screenshot", "wmblocks")}
											</span>
										</div>
									)}
								/>
							</MediaUploadCheck>
						)}
					</div>
				</div>
			</div>
		</>
	);
}
