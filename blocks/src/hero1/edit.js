import { __ } from "@wordpress/i18n";
import {
    useBlockProps,
    InspectorControls,
    InnerBlocks,
} from "@wordpress/block-editor";
import {
    PanelBody,
    SelectControl,
} from "@wordpress/components";
import "./editor.scss";

const BG_OPTS = [
    { label: "— Default —", value: "" },
    { label: "Light (bg-light)", value: "bg-light" },
    { label: "White (bg-white)", value: "bg-white" },
    { label: "Dark (bg-dark text-white)", value: "bg-dark text-white" },
    { label: "Body (bg-body)", value: "bg-body" },
    { label: "Primary (bg-primary text-white)", value: "bg-primary text-white" },
    { label: "Secondary (bg-secondary text-white)", value: "bg-secondary text-white" },
];

const HERO_TEMPLATE = [
    ['wmblocks/bs-image', { 
        width: 'auto', 
        height: '72px', 
        className: 'mb-4 d-block mx-auto' 
    }],
    ['wmblocks/bs-heading', { 
        content: 'Start Your Adventure', 
        level: 1, 
        className: 'display-1 fw-bold' 
    }],
    ['core/paragraph', { 
        content: 'At the heart of the debate lies a single question... What if everything we assumed about X is backward? A quiet revolution has been unfolding in... Every generation redraws the boundaries of... One statistic disrupts the comfortable narrative:', 
        className: 'lead mb-4' 
    }],
    ['wmblocks/buttons', {}],
];

export default function Edit({ attributes, setAttributes }) {
    const { bgColor, customClass } = attributes;

    const wrapClass = ["px-4 py-5 text-center", bgColor, customClass]
        .filter(Boolean)
        .join(" ");

    const blockProps = useBlockProps({ className: "wmblocks-hero1" });

    return (
        <>
            <InspectorControls>
                <PanelBody title={__("Hero Style", "wmblocks")} initialOpen={true}>
                    <SelectControl
                        label={__("Background Color", "wmblocks")}
                        value={bgColor}
                        options={BG_OPTS}
                        onChange={(v) => setAttributes({ bgColor: v })}
                    />
                </PanelBody>
            </InspectorControls>

            <div {...blockProps}>
                <div className={wrapClass}>
                    <div className="container py-5">
                        <div className="col-lg-7 mx-auto text-center">
                            <InnerBlocks 
                                template={HERO_TEMPLATE}
                                templateLock={false} 
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}