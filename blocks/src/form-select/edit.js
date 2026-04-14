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
	ToggleControl,
	SelectControl,
	Button,
	ToolbarGroup,
	ToolbarButton,
} from "@wordpress/components";
import "./editor.scss";

const SIZE_OPTS = [
	{ label: "Default", value: "" },
	{ label: "Small", value: "form-select-sm" },
	{ label: "Large", value: "form-select-lg" },
];
const COL_OPTS = [
	{ label: "— Full —", value: "" },
	...[3, 4, 6, 8, 12].map((n) => ({ label: `col-${n}`, value: `col-${n}` })),
];

export default function Edit({ attributes, setAttributes, clientId }) {
	const {
		label,
		name,
		options,
		multiple,
		size,
		required,
		disabled,
		helpText,
		colClass,
		hideLabel,
	} = attributes;
	const { removeBlock } = useDispatch("core/block-editor");

	const updateOption = (i, key, val) =>
		setAttributes({
			options: options.map((o, idx) => (idx === i ? { ...o, [key]: val } : o)),
		});
	const addOption = () =>
		setAttributes({
			options: [
				...options,
				{ value: String(options.length), label: `Option ${options.length}` },
			],
		});
	const removeOption = (i) =>
		setAttributes({ options: options.filter((_, idx) => idx !== i) });

	const blockProps = useBlockProps({
		className: ["wmblocks-form-select", colClass].filter(Boolean).join(" "),
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
				<PanelBody title={__("Select", "wmblocks")} initialOpen={true}>
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
					<TextControl
						label={__("Help Text", "wmblocks")}
						value={helpText}
						onChange={(v) => setAttributes({ helpText: v })}
					/>
					<ToggleControl
						label={__("Multiple", "wmblocks")}
						checked={!!multiple}
						onChange={(v) => setAttributes({ multiple: v })}
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
				<PanelBody title={__("Options", "wmblocks")} initialOpen={true}>
					{options.map((opt, i) => (
						<div
							key={i}
							style={{
								display: "flex",
								gap: 4,
								marginBottom: 6,
								alignItems: "center",
							}}
						>
							<input
								type="text"
								value={opt.label}
								placeholder="Label"
								onChange={(e) => updateOption(i, "label", e.target.value)}
								style={{
									flex: 1,
									fontSize: 12,
									padding: "3px 6px",
									border: "1px solid #ccc",
									borderRadius: 3,
									outline: "none",
								}}
							/>
							<input
								type="text"
								value={opt.value}
								placeholder="Value"
								onChange={(e) => updateOption(i, "value", e.target.value)}
								style={{
									width: 60,
									fontSize: 12,
									padding: "3px 6px",
									border: "1px solid #ccc",
									borderRadius: 3,
									outline: "none",
								}}
							/>
							<button
								onMouseDown={(e) => {
									e.preventDefault();
									removeOption(i);
								}}
								style={{
									fontSize: 11,
									padding: "2px 5px",
									border: "1px solid #fcc",
									borderRadius: 3,
									background: "#fff5f5",
									color: "#c00",
									cursor: "pointer",
								}}
							>
								✕
							</button>
						</div>
					))}
					<Button variant="secondary" size="small" onClick={addOption}>
						{__("+ Add Option", "wmblocks")}
					</Button>
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
					<select
						className={["form-select", size].filter(Boolean).join(" ")}
						multiple={multiple}
						disabled={disabled}
						style={{ pointerEvents: "none" }}
					>
						{options.map((o, i) => (
							<option key={i} value={o.value}>
								{o.label}
							</option>
						))}
					</select>
					{helpText && <div className="form-text">{helpText}</div>}
				</div>
			</div>
		</>
	);
}
