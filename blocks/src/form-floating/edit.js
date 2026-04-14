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
	{ label: "Tel", value: "tel" },
];
const COL_OPTS = [
	{ label: "— Full —", value: "" },
	...[3, 4, 6, 8, 12].map((n) => ({ label: `col-${n}`, value: `col-${n}` })),
];

export default function Edit({ attributes, setAttributes, clientId }) {
	const { fieldType, label, name, placeholder, required, disabled, colClass } =
		attributes;
	const { removeBlock } = useDispatch("core/block-editor");
	const uid = `floating-${clientId.slice(0, 6)}`;
	const blockProps = useBlockProps({
		className: ["wmblocks-form-floating", colClass].filter(Boolean).join(" "),
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
				<PanelBody title={__("Floating Label", "wmblocks")} initialOpen={true}>
					<SelectControl
						label={__("Type", "wmblocks")}
						value={fieldType}
						options={FIELD_TYPES}
						onChange={(v) => setAttributes({ fieldType: v })}
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
						label={__("Placeholder", "wmblocks")}
						value={placeholder}
						onChange={(v) => setAttributes({ placeholder: v })}
						help={__(
							"Floating labels need a non-empty placeholder.",
							"wmblocks",
						)}
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
					<SelectControl
						label={__("Grid Column", "wmblocks")}
						value={colClass}
						options={COL_OPTS}
						onChange={(v) => setAttributes({ colClass: v })}
					/>
				</PanelBody>
			</InspectorControls>
			<div {...blockProps}>
				<div className="form-floating mb-3">
					<input
						type={fieldType}
						className="form-control"
						id={uid}
						placeholder={placeholder || " "}
						disabled={disabled}
						style={{ pointerEvents: "none" }}
					/>
					<label htmlFor={uid}>
						{label}
						{required && (
							<span style={{ color: "#dc3545", marginLeft: 2 }}>*</span>
						)}
					</label>
				</div>
			</div>
		</>
	);
}
