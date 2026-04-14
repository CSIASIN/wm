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
		min,
		max,
		step,
		value,
		disabled,
		helpText,
		colClass,
		hideLabel,
	} = attributes;
	const { removeBlock } = useDispatch("core/block-editor");
	const blockProps = useBlockProps({
		className: ["wmblocks-form-range", colClass].filter(Boolean).join(" "),
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
				<PanelBody title={__("Range", "wmblocks")} initialOpen={true}>
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
					<RangeControl
						label={__("Default Value", "wmblocks")}
						value={value}
						onChange={(v) => setAttributes({ value: v })}
						min={min}
						max={max}
						step={step}
					/>
					<RangeControl
						label={__("Min", "wmblocks")}
						value={min}
						onChange={(v) => setAttributes({ min: v })}
						min={0}
						max={100}
					/>
					<RangeControl
						label={__("Max", "wmblocks")}
						value={max}
						onChange={(v) => setAttributes({ max: v })}
						min={1}
						max={1000}
					/>
					<RangeControl
						label={__("Step", "wmblocks")}
						value={step}
						onChange={(v) => setAttributes({ step: v })}
						min={1}
						max={100}
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
							{label} <small style={{ color: "#6c757d" }}>({value})</small>
						</label>
					)}
					<input
						type="range"
						className="form-range"
						min={min}
						max={max}
						step={step}
						defaultValue={value}
						disabled={disabled}
						style={{ pointerEvents: "none" }}
					/>
					{helpText && <div className="form-text">{helpText}</div>}
				</div>
			</div>
		</>
	);
}
