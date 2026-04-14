import { __ } from "@wordpress/i18n";
import {
	useBlockProps,
	InspectorControls,
	BlockControls,
} from "@wordpress/block-editor";
import { useDispatch } from "@wordpress/data";
import {
	PanelBody,
	TextControl,
	SelectControl,
	ToggleControl,
	ToolbarGroup,
	ToolbarButton,
} from "@wordpress/components";
import "./editor.scss";

const FIELD_TYPES = [
	{ label: "Text", value: "text" },
	{ label: "Email", value: "email" },
	{ label: "Password", value: "password" },
	{ label: "Number", value: "number" },
	{ label: "URL", value: "url" },
	{ label: "Tel", value: "tel" },
	{ label: "Search", value: "search" },
];
const SIZE_OPTS = [
	{ label: "Default", value: "" },
	{ label: "Small", value: "input-group-sm" },
	{ label: "Large", value: "input-group-lg" },
];
const COL_OPTS = [
	{ label: "— Full —", value: "" },
	...[3, 4, 6, 8, 12].map((n) => ({ label: `col-${n}`, value: `col-${n}` })),
];

export default function Edit({ attributes, setAttributes, clientId }) {
	const {
		label,
		name,
		fieldType,
		placeholder,
		prepend,
		append,
		required,
		disabled,
		size,
		helpText,
		colClass,
		hideLabel,
	} = attributes;
	const { removeBlock } = useDispatch("core/block-editor");
	const blockProps = useBlockProps({
		className: ["wmblocks-form-input-group", colClass]
			.filter(Boolean)
			.join(" "),
	});
	return (
		<>
			<BlockControls>
				<ToolbarGroup>
					<ToolbarButton
						icon="trash"
						label={__("Remove", "wmblocks")}
						onClick={() => removeBlock(clientId)}
						isDestructive
					/>
				</ToolbarGroup>
			</BlockControls>
			<InspectorControls>
				<PanelBody title={__("Input Group", "wmblocks")} initialOpen={true}>
					<TextControl
						label={__("Label", "wmblocks")}
						value={label}
						onChange={(v) => setAttributes({ label: v })}
					/>
					<TextControl
						label={__("Name", "wmblocks")}
						value={name}
						onChange={(v) => setAttributes({ name: v })}
					/>
					<SelectControl
						label={__("Type", "wmblocks")}
						value={fieldType}
						options={FIELD_TYPES}
						onChange={(v) => setAttributes({ fieldType: v })}
					/>
					<TextControl
						label={__("Placeholder", "wmblocks")}
						value={placeholder}
						onChange={(v) => setAttributes({ placeholder: v })}
					/>
					<TextControl
						label={__("Prepend text", "wmblocks")}
						value={prepend}
						onChange={(v) => setAttributes({ prepend: v })}
						help={__("Text shown before the input.", "wmblocks")}
					/>
					<TextControl
						label={__("Append text", "wmblocks")}
						value={append}
						onChange={(v) => setAttributes({ append: v })}
						help={__("Text shown after the input.", "wmblocks")}
					/>
					<TextControl
						label={__("Help Text", "wmblocks")}
						value={helpText}
						onChange={(v) => setAttributes({ helpText: v })}
					/>
					<ToggleControl
						label={__("Required", "wmblocks")}
						checked={!!required}
						onChange={(v) => setAttributes({ required: v })}
					/>
					<ToggleControl
						label={__("Disabled", "wmblocks")}
						checked={!!disabled}
						onChange={(v) => setAttributes({ disabled: v })}
					/>
					<ToggleControl
						label={__("Hide Label", "wmblocks")}
						checked={!!hideLabel}
						onChange={(v) => setAttributes({ hideLabel: v })}
					/>
					<SelectControl
						label={__("Size", "wmblocks")}
						value={size}
						options={SIZE_OPTS}
						onChange={(v) => setAttributes({ size: v })}
					/>
					<SelectControl
						label={__("Grid Column", "wmblocks")}
						value={colClass}
						options={COL_OPTS}
						onChange={(v) => setAttributes({ colClass: v })}
					/>
				</PanelBody>
			</InspectorControls>
			<div {...blockProps}>
				<div className="mb-3">
					{!hideLabel && (
						<label className="form-label">
							{label}
							{required && (
								<span style={{ color: "#dc3545", marginLeft: 2 }}>*</span>
							)}
						</label>
					)}
					<div className={["input-group", size].filter(Boolean).join(" ")}>
						{prepend && <span className="input-group-text">{prepend}</span>}
						<input
							type={fieldType}
							className="form-control"
							placeholder={placeholder}
							disabled={disabled}
							style={{ pointerEvents: "none" }}
						/>
						{append && <span className="input-group-text">{append}</span>}
					</div>
					{helpText && <div className="form-text">{helpText}</div>}
				</div>
			</div>
		</>
	);
}
