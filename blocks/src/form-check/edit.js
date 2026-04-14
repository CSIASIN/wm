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
		checkType,
		label,
		name,
		value,
		checked,
		disabled,
		inline,
		reverse,
		colClass,
	} = attributes;
	const { removeBlock } = useDispatch("core/block-editor");

	const isSwitch = checkType === "switch";
	const divClass = [
		"form-check",
		isSwitch ? "form-switch" : "",
		inline ? "form-check-inline" : "",
		reverse ? "form-check-reverse" : "",
	]
		.filter(Boolean)
		.join(" ");

	const blockProps = useBlockProps({
		className: ["wmblocks-form-check", colClass].filter(Boolean).join(" "),
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
				<PanelBody
					title={__("Check / Radio / Switch", "wmblocks")}
					initialOpen={true}
				>
					<SelectControl
						label={__("Type", "wmblocks")}
						value={checkType}
						options={[
							{ label: "Checkbox", value: "checkbox" },
							{ label: "Radio", value: "radio" },
							{ label: "Switch", value: "switch" },
						]}
						onChange={(v) => setAttributes({ checkType: v })}
					/>
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
						label={__("Value", "wmblocks")}
						value={value}
						onChange={(v) => setAttributes({ value: v })}
					/>
					<ToggleControl
						label={__("Checked by default", "wmblocks")}
						checked={!!checked}
						onChange={(v) => setAttributes({ checked: v })}
					/>
					<ToggleControl
						label={__("Disabled", "wmblocks")}
						checked={!!disabled}
						onChange={(v) => setAttributes({ disabled: v })}
					/>
					<ToggleControl
						label={__("Inline", "wmblocks")}
						checked={!!inline}
						onChange={(v) => setAttributes({ inline: v })}
						help={__("Display inline with other checks.", "wmblocks")}
					/>
					<ToggleControl
						label={__("Reverse", "wmblocks")}
						checked={!!reverse}
						onChange={(v) => setAttributes({ reverse: v })}
						help={__("Put label before the input.", "wmblocks")}
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
				<div className={divClass} style={{ marginBottom: 8 }}>
					<input
						className="form-check-input"
						type={checkType === "switch" ? "checkbox" : checkType}
						defaultChecked={checked}
						disabled={disabled}
						role={isSwitch ? "switch" : undefined}
						style={{ pointerEvents: "none" }}
					/>
					<label className="form-check-label">{label}</label>
				</div>
			</div>
		</>
	);
}
