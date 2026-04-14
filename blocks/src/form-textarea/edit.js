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
	RangeControl,
	ToggleControl,
	SelectControl,
	ToolbarGroup,
	ToolbarButton,
} from "@wordpress/components";
import "./editor.scss";

const COL_OPTS = [
	{ label: "— Full —", value: "" },
	...[3, 4, 6, 8, 12].map((n) => ({ label: `col-${n}`, value: `col-${n}` })),
];

export default function Edit({ attributes, setAttributes, clientId }) {
	const {
		label,
		name,
		placeholder,
		rows,
		required,
		disabled,
		readonly,
		helpText,
		colClass,
		hideLabel,
	} = attributes;
	const { removeBlock } = useDispatch("core/block-editor");
	const blockProps = useBlockProps({
		className: ["wmblocks-form-textarea", colClass].filter(Boolean).join(" "),
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
				<PanelBody title={__("Textarea", "wmblocks")} initialOpen={true}>
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
						label={__("Placeholder", "wmblocks")}
						value={placeholder}
						onChange={(v) => setAttributes({ placeholder: v })}
					/>
					<TextControl
						label={__("Help Text", "wmblocks")}
						value={helpText}
						onChange={(v) => setAttributes({ helpText: v })}
					/>
					<RangeControl
						label={__("Rows", "wmblocks")}
						value={rows}
						onChange={(v) => setAttributes({ rows: v })}
						min={2}
						max={20}
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
						label={__("Readonly", "wmblocks")}
						checked={!!readonly}
						onChange={(v) => setAttributes({ readonly: v })}
					/>
					<ToggleControl
						label={__("Hide Label", "wmblocks")}
						checked={!!hideLabel}
						onChange={(v) => setAttributes({ hideLabel: v })}
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
					<textarea
						className="form-control"
						rows={rows}
						placeholder={placeholder}
						disabled={disabled}
						readOnly={readonly}
						style={{ pointerEvents: "none", resize: "none" }}
					/>
					{helpText && <div className="form-text">{helpText}</div>}
				</div>
			</div>
		</>
	);
}
