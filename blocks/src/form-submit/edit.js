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

const BTN_VARIANTS = [
	{ label: "Primary", value: "btn-primary" },
	{ label: "Secondary", value: "btn-secondary" },
	{ label: "Success", value: "btn-success" },
	{ label: "Danger", value: "btn-danger" },
	{ label: "Warning", value: "btn-warning" },
	{ label: "Info", value: "btn-info" },
	{ label: "Light", value: "btn-light" },
	{ label: "Dark", value: "btn-dark" },
	{ label: "Outline Primary", value: "btn-outline-primary" },
	{ label: "Outline Secondary", value: "btn-outline-secondary" },
];
const SIZE_OPTS = [
	{ label: "Default", value: "" },
	{ label: "Small", value: "btn-sm" },
	{ label: "Large", value: "btn-lg" },
];
const COL_OPTS = [
	{ label: "— Full —", value: "" },
	...[3, 4, 6, 8, 12].map((n) => ({ label: `col-${n}`, value: `col-${n}` })),
];

export default function Edit({ attributes, setAttributes, clientId }) {
	const { label, variant, size, fullWidth, disabled, colClass } = attributes;
	const { removeBlock } = useDispatch("core/block-editor");
	const blockProps = useBlockProps({
		className: ["wmblocks-form-submit", colClass].filter(Boolean).join(" "),
	});
	const btnClass = ["btn", variant, size, fullWidth ? "w-100" : ""]
		.filter(Boolean)
		.join(" ");
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
				<PanelBody title={__("Submit Button", "wmblocks")} initialOpen={true}>
					<TextControl
						label={__("Label", "wmblocks")}
						value={label}
						onChange={(v) => setAttributes({ label: v })}
					/>
					<SelectControl
						label={__("Style", "wmblocks")}
						value={variant}
						options={BTN_VARIANTS}
						onChange={(v) => setAttributes({ variant: v })}
					/>
					<SelectControl
						label={__("Size", "wmblocks")}
						value={size}
						options={SIZE_OPTS}
						onChange={(v) => setAttributes({ size: v })}
					/>
					<ToggleControl
						label={__("Full Width", "wmblocks")}
						checked={!!fullWidth}
						onChange={(v) => setAttributes({ fullWidth: v })}
					/>
					<ToggleControl
						label={__("Disabled", "wmblocks")}
						checked={!!disabled}
						onChange={(v) => setAttributes({ disabled: v })}
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
					<button
						type="submit"
						className={btnClass}
						disabled={disabled}
						style={{ pointerEvents: "none" }}
					>
						{label}
					</button>
				</div>
			</div>
		</>
	);
}
