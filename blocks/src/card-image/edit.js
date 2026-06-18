import { __ } from "@wordpress/i18n";
import {
    useBlockProps,
    InspectorControls,
    RichText,
    BlockControls,
    MediaUpload,
    MediaUploadCheck,
    InnerBlocks,
} from "@wordpress/block-editor";
import {
    PanelBody,
    SelectControl,
    ToggleControl,
    TextControl,
    TextareaControl,
    ToolbarGroup,
    ToolbarButton,
    ButtonGroup,
    Button,
} from "@wordpress/components";
import "./editor.scss";

// Import Shared Controls
import { PaddingControl, MarginControl } from "../../controls/spacingControls";
import {
    BackgroundColorControl,
    TextColorControl,
    OpacityControl,
    ShadowControl,
    BorderControl,
    CustomCSSControl,
} from "../../controls/visualControls";
import { VisibilityControl } from "../../controls/visibilityControl";

const IMG_POSITION_OPTIONS = [
    { label: "Top", value: "top" },
    { label: "Bottom", value: "bottom" },
    { label: "Overlay", value: "overlay" },
    { label: "Left (horizontal)", value: "left" },
    { label: "Right (horizontal)", value: "right" },
];

const IMG_COL_OPTIONS = [
    { label: "1/4 width", value: "col-md-3" },
    { label: "1/3 width", value: "col-md-4" },
    { label: "1/2 width", value: "col-md-6" },
    { label: "2/5 width", value: "col-md-5" },
];

const OBJECT_FIT_OPTIONS = [
    { label: "Cover (Fill & Crop)", value: "cover" },
    { label: "Contain (Fit Inside)", value: "contain" },
    { label: "Fill (Stretch)", value: "fill" },
];

const IMG_DISPLAY_OPTIONS = [
    { label: "Standard Fluid (img-fluid)", value: "img-fluid" },
    { label: "Thumbnail Box (img-thumbnail)", value: "img-thumbnail" },
    { label: "Unstyled Raw", value: "" },
];

const IMG_ALIGN_OPTIONS = [
    { label: "None (Stretch / Inherit)", value: "" },
    { label: "Float Left (float-start)", value: "float-start" },
    { label: "Float Right (float-end)", value: "float-end" },
    { label: "Center Block (mx-auto d-block)", value: "mx-auto d-block" },
];

const SHADOW_OPTIONS = [
    { label: "None", value: "" },
    { label: "No Shadow (shadow-none)", value: "shadow-none" },
    { label: "Small Shadow (shadow-sm)", value: "shadow-sm" },
    { label: "Regular Shadow (shadow)", value: "shadow" },
    { label: "Large Shadow (shadow-lg)", value: "shadow-lg" },
];

const BADGE_VARIANTS = [
    { label: "Primary", value: "bg-primary text-white" },
    { label: "Secondary", value: "bg-secondary text-white" },
    { label: "Success", value: "bg-success text-white" },
    { label: "Danger", value: "bg-danger text-white" },
    { label: "Warning", value: "bg-warning text-dark" },
    { label: "Info", value: "bg-info text-dark" },
    { label: "Dark", value: "bg-dark text-white" },
    { label: "Light", value: "bg-light text-dark" },
];

export default function Edit({ attributes, setAttributes }) {
    const {
        imageUrl,
        imageAlt,
        imageId,
        imagePosition,
        imageCol,
        imageHeight,
        imageWidth,
        imageObjectFit,
        imageDisplayClass,
        imageAlignClass,
        imageShadow,
        imageBorderSides,
        imageBorderRemove,
        imageBorderColor,
        imageBorderSize,
        imageBorderRadius,
        imageBorderRadiusSize,
        imageBorderOpacityClass,
        imageBorderOpacityCustom,
        title,
        subtitle,
        bodyText,
        showBadge,
        badgeText,
        badgeVariant,
        showLink,
        textAlign,
        margin,
        padding,
        backgroundColor,
        textColor,
        opacity,
        shadow,
        customCSS,
        borderSides,
        borderRemove,
        borderColor,
        borderOpacityClass,
        borderOpacityCustom,
        borderSize,
        borderRadius,
        borderRadiusSize,
        hideXs,
        hideSm,
        hideMd,
        hideLg,
        hideXl,
        hideXxl,
        mediaType,
        iconSvg,
        iconColor,
        iconBgColor,
        iconMargin,
    } = attributes;

    const isHorizontal = imagePosition === "left" || imagePosition === "right";
    const isOverlay = imagePosition === "overlay";

    const parseInlineCSS = (cssString) => {
        if (!cssString) return {};
        return cssString.split(";").reduce((styleObj, rule) => {
            const [property, value] = rule.split(":");
            if (property && value) {
                const camelProp = property
                    .trim()
                    .replace(/-([a-z])/g, (_, l) => l.toUpperCase());
                styleObj[camelProp] = value.trim();
            }
            return styleObj;
        }, {});
    };

    const borderClasses = [
        ...(borderSides || []),
        ...(borderRemove || []),
        borderColor,
        borderOpacityClass,
        borderSize,
        borderRadius,
        borderRadiusSize,
    ]
        .filter(Boolean)
        .join(" ");

    const visibilityClasses = [
        !!hideXs ? "d-none d-sm-block" : "",
        !!hideSm ? "d-sm-none d-md-block" : "",
        !!hideMd ? "d-md-none d-lg-block" : "",
        !!hideLg ? "d-lg-none d-xl-block" : "",
        !!hideXl ? "d-xl-none d-xxl-block" : "",
        !!hideXxl ? "d-xxl-none" : "",
    ]
        .filter(Boolean)
        .join(" ");

    const blockProps = useBlockProps({
        className: [
            "card",
            padding,
            margin,
            backgroundColor,
            borderClasses,
            visibilityClasses,
            shadow,
            textAlign,
        ]
            .filter(Boolean)
            .join(" "),
        style: {
            opacity: opacity !== 100 ? opacity / 100 : undefined,
            color: textColor || undefined,
            ...(borderOpacityCustom
                ? { "--bs-border-opacity": borderOpacityCustom }
                : {}),
            ...parseInlineCSS(customCSS),
        },
    });

    return (
        <>
            <BlockControls>
                <ToolbarGroup>
                    {IMG_POSITION_OPTIONS.map((p) => (
                        <ToolbarButton
                            key={p.value}
                            label={p.label}
                            isPressed={imagePosition === p.value}
                            onClick={() => setAttributes({ imagePosition: p.value })}
                        >
                            {
                                { top: "↑", bottom: "↓", overlay: "⊞", left: "←", right: "→" }[
                                    p.value
                                ]
                            }
                        </ToolbarButton>
                    ))}
                </ToolbarGroup>
                <ToolbarGroup>
                    {["text-start", "text-center", "text-end"].map((a) => (
                        <ToolbarButton
                            key={a}
                            icon={
                                {
                                    "text-start": "editor-alignleft",
                                    "text-center": "editor-aligncenter",
                                    "text-end": "editor-alignright",
                                }[a]
                            }
                            isPressed={textAlign === a}
                            onClick={() =>
                                setAttributes({ textAlign: textAlign === a ? "" : a })
                            }
                        />
                    ))}
                </ToolbarGroup>
            </BlockControls>

            <InspectorControls>
                <PanelBody
                    title={__("Card Asset Configuration", "wmblocks")}
                    initialOpen={true}
                >
                    <div style={{ marginBottom: "15px" }}>
                        <label style={{ display: "block", fontSize: "11px", fontWeight: "600", marginBottom: "5px" }}>
                            {__("Display Asset Selection", "wmblocks")}
                        </label>
                        <ButtonGroup style={{ width: "100%" }}>
                            <Button
                                variant={mediaType !== "icon" ? "primary" : "secondary"}
                                onClick={() => setAttributes({ mediaType: "image" })}
                                style={{ flexGrow: 1, justifyContent: "center" }}
                            >
                                {__("Image Upload", "wmblocks")}
                            </Button>
                            <Button
                                variant={mediaType === "icon" ? "primary" : "secondary"}
                                onClick={() => setAttributes({ mediaType: "icon" })}
                                style={{ flexGrow: 1, justifyContent: "center" }}
                            >
                                {__("SVG Icon Box", "wmblocks")}
                            </Button>
                        </ButtonGroup>
                    </div>

                    <SelectControl
                        label={__("Asset Position", "wmblocks")}
                        value={imagePosition}
                        options={IMG_POSITION_OPTIONS}
                        onChange={(v) => setAttributes({ imagePosition: v })}
                    />
                    {isHorizontal && (
                        <SelectControl
                            label={__("Column Width", "wmblocks")}
                            value={imageCol}
                            options={IMG_COL_OPTIONS}
                            onChange={(v) => setAttributes({ imageCol: v })}
                        />
                    )}

                    {mediaType === "icon" ? (
                        <>
                            <TextareaControl
                                label={__("Inline Custom SVG Markup", "wmblocks")}
                                value={iconSvg}
                                onChange={(v) => setAttributes({ iconSvg: v })}
                                help={__("Paste inline code starting with <svg>. Existing path settings like stroke, width, and height are completely preserved.", "wmblocks")}
                                rows={5}
                            />
                            <TextControl
                                label={__("Icon Color (SVG Text/Fill)", "wmblocks")}
                                value={iconColor}
                                placeholder="e.g. #ff4000 or var(--bs-warning)"
                                onChange={(v) => setAttributes({ iconColor: v })}
                            />
                            <TextControl
                                label={__("Icon Box Background", "wmblocks")}
                                value={iconBgColor}
                                placeholder="e.g. yellow or #000"
                                onChange={(v) => setAttributes({ iconBgColor: v })}
                            />
                            <TextControl
                                label={__("Icon Box Margin", "wmblocks")}
                                value={iconMargin}
                                placeholder="e.g. 20px"
                                onChange={(v) => setAttributes({ iconMargin: v })}
                            />
                        </>
                    ) : (
                        <TextControl
                            label={__("Image Alt Text", "wmblocks")}
                            value={imageAlt}
                            onChange={(v) => setAttributes({ imageAlt: v })}
                        />
                    )}
                </PanelBody>

                <PanelBody
                    title={__("Asset Presentation & Borders", "wmblocks")}
                    initialOpen={true}
                >
                    {mediaType !== "icon" && (
                        <>
                            <SelectControl
                                label={__("Image Class Type", "wmblocks")}
                                value={imageDisplayClass}
                                options={IMG_DISPLAY_OPTIONS}
                                onChange={(v) => setAttributes({ imageDisplayClass: v })}
                            />
                            <SelectControl
                                label={__("Image Crop Rule (Object Fit)", "wmblocks")}
                                value={imageObjectFit}
                                options={OBJECT_FIT_OPTIONS}
                                onChange={(v) => setAttributes({ imageObjectFit: v })}
                            />
                        </>
                    )}

                    <SelectControl
                        label={__("Alignment / Float Controls", "wmblocks")}
                        value={imageAlignClass}
                        options={IMG_ALIGN_OPTIONS}
                        onChange={(v) => setAttributes({ imageAlignClass: v })}
                    />
                    
                    <SelectControl
                        label={__("Asset Shadow", "wmblocks")}
                        value={imageShadow}
                        options={SHADOW_OPTIONS}
                        onChange={(v) => setAttributes({ imageShadow: v })}
                    />

                    <div
                        style={{
                            display: "grid",
                            gridTemplateColumns: "1fr 1fr",
                            gap: "10px",
                        }}
                    >
                        <TextControl
                            label={__("Height Limits", "wmblocks")}
                            value={imageHeight}
                            placeholder={mediaType === "icon" ? "70px" : isHorizontal ? "100%" : "200px"}
                            onChange={(v) => setAttributes({ imageHeight: v })}
                        />
                        <TextControl
                            label={__("Width Limits", "wmblocks")}
                            value={imageWidth}
                            placeholder={mediaType === "icon" ? "70px" : "100%"}
                            onChange={(v) => setAttributes({ imageWidth: v })}
                        />
                    </div>

                    <hr />
                    <BorderControl
                        borderSides={imageBorderSides || []}
                        borderRemove={imageBorderRemove || []}
                        borderColor={imageBorderColor}
                        borderSize={imageBorderSize}
                        borderRadius={imageBorderRadius}
                        borderRadiusSize={imageBorderRadiusSize}
                        borderOpacityClass={imageBorderOpacityClass}
                        borderOpacityCustom={imageBorderOpacityCustom}
                        setAttributes={(updated) => {
                            const transformed = {};
                            if ("borderSides" in updated) transformed.imageBorderSides = updated.borderSides;
                            if ("borderRemove" in updated) transformed.imageBorderRemove = updated.borderRemove;
                            if ("borderColor" in updated) transformed.imageBorderColor = updated.borderColor;
                            if ("borderSize" in updated) transformed.imageBorderSize = updated.borderSize;
                            if ("borderRadius" in updated) transformed.imageBorderRadius = updated.borderRadius;
                            if ("borderRadiusSize" in updated) transformed.imageBorderRadiusSize = updated.borderRadiusSize;
                            if ("borderOpacityClass" in updated) transformed.imageBorderOpacityClass = updated.borderOpacityClass;
                            if ("borderOpacityCustom" in updated) transformed.imageBorderOpacityCustom = updated.borderOpacityCustom;
                            setAttributes(transformed);
                        }}
                    />
                </PanelBody>

                <PanelBody title={__("Badge", "wmblocks")} initialOpen={false}>
                    <ToggleControl
                        label={__("Show Badge", "wmblocks")}
                        checked={!!showBadge}
                        onChange={(v) => setAttributes({ showBadge: v })}
                    />
                    {showBadge && (
                        <>
                            <TextControl
                                label={__("Badge Text", "wmblocks")}
                                value={badgeText}
                                onChange={(v) => setAttributes({ badgeText: v })}
                            />
                            <SelectControl
                                label={__("Badge Colour", "wmblocks")}
                                value={badgeVariant}
                                options={BADGE_VARIANTS}
                                onChange={(v) => setAttributes({ badgeVariant: v })}
                            />
                        </>
                    )}
                </PanelBody>

                <PanelBody title={__("Link Button", "wmblocks")} initialOpen={false}>
                    <ToggleControl
                        label={__("Show Button", "wmblocks")}
                        checked={!!showLink}
                        onChange={(v) => setAttributes({ showLink: v })}
                    />
                </PanelBody>

                <PaddingControl value={padding} onChange={(v) => setAttributes({ padding: v })} />
                <MarginControl value={margin} onChange={(v) => setAttributes({ margin: v })} />
                <BackgroundColorControl value={backgroundColor} onChange={(v) => setAttributes({ backgroundColor: v })} />
                <TextColorControl value={textColor} onChange={(v) => setAttributes({ textColor: v })} />
                <OpacityControl value={opacity} onChange={(v) => setAttributes({ opacity: v })} />
                <ShadowControl value={shadow} onChange={(v) => setAttributes({ shadow: v })} />
                <BorderControl
                    borderSides={borderSides}
                    borderRemove={borderRemove}
                    borderColor={borderColor}
                    borderOpacityClass={borderOpacityClass}
                    borderOpacityCustom={borderOpacityCustom}
                    borderSize={borderSize}
                    borderRadius={borderRadius}
                    borderRadiusSize={borderRadiusSize}
                    setAttributes={setAttributes}
                />
                <CustomCSSControl value={customCSS} onChange={(v) => setAttributes({ customCSS: v })} />
                <VisibilityControl hideXs={hideXs} hideSm={hideSm} hideMd={hideMd} hideLg={hideLg} hideXl={hideXl} hideXxl={hideXxl} setAttributes={setAttributes} />
            </InspectorControls>

            <div {...blockProps}>
                <div style={{ overflow: "hidden", position: "relative", width: "100%" }}>
                    {isHorizontal ? (
                        <div className="row g-0">
                            {imagePosition === "left" && (
                                <div className={imageCol}>
                                    {renderCardAsset(attributes, setAttributes, true, "")}
                                </div>
                            )}
                            <div className="col">
                                <CardBody title={title} subtitle={subtitle} bodyText={bodyText} showBadge={showBadge} badgeText={badgeText} badgeVariant={badgeVariant} showLink={showLink} setAttributes={setAttributes} />
                            </div>
                            {imagePosition === "right" && (
                                <div className={imageCol}>
                                    {renderCardAsset(attributes, setAttributes, true, "")}
                                </div>
                            )}
                        </div>
                    ) : isOverlay ? (
                        <>
                            {renderCardAsset(attributes, setAttributes, false, "")}
                            <div className="card-img-overlay">
                                <CardBody title={title} subtitle={subtitle} bodyText={bodyText} showBadge={showBadge} badgeText={badgeText} badgeVariant={badgeVariant} showLink={showLink} setAttributes={setAttributes} />
                            </div>
                        </>
                    ) : (
                        <>
                            {imagePosition === "top" && renderCardAsset(attributes, setAttributes, false, "top")}
                            <CardBody title={title} subtitle={subtitle} bodyText={bodyText} showBadge={showBadge} badgeText={badgeText} badgeVariant={badgeVariant} showLink={showLink} setAttributes={setAttributes} />
                            {imagePosition === "bottom" && renderCardAsset(attributes, setAttributes, false, "bottom")}
                        </>
                    )}
                </div>
            </div>
        </>
    );
}

function renderCardAsset(attributes, setAttributes, isHorizontal, position = "") {
    const {
        imageUrl,
        imageId,
        imageAlt,
        imageHeight,
        imageWidth,
        imageObjectFit,
        imageDisplayClass,
        imageAlignClass,
        imageShadow,
        imageBorderSize,
        imageBorderColor,
        imageBorderRadius,
        imageBorderRadiusSize,
        imageBorderOpacityClass,
        imageBorderOpacityCustom,
        imageBorderSides,
        imageBorderRemove,
        mediaType,
        iconSvg,
        iconColor,
        iconBgColor,
        iconMargin,
    } = attributes;

    const baseClass = isHorizontal
        ? "rounded-start"
        : position === "bottom"
        ? "card-img-bottom"
        : "card-img-top";

    if (mediaType === "icon") {
        // SVG Icon Layout - Completely isolated from image properties
        const iconClasses = [
            baseClass,
            imageAlignClass,
            imageShadow,
            ...(imageBorderSides || []),
            ...(imageBorderRemove || []),
            imageBorderColor,
            imageBorderOpacityClass,
            imageBorderSize,
            imageBorderRadius,
            imageBorderRadiusSize,
        ].filter(Boolean).join(" ");

        const iconStyles = {
            display: "flex", 
            alignItems: "center",
            justifyContent: "center",
            width: imageWidth || undefined,
            height: imageHeight || undefined,
            color: iconColor || undefined,
            background: iconBgColor || undefined,
            margin: iconMargin || undefined,
            ...(imageBorderOpacityCustom ? { "--bs-border-opacity": imageBorderOpacityCustom } : {}),
        };

        return (
            <div 
                className={`wmblocks-div-container wmblocks-card-icon-box ${iconClasses}`} 
                style={iconStyles}
            >
                {iconSvg ? (
                    <div 
                        className="wmblocks-svg-render-view" 
                        style={{ display: "contents" }}
                        dangerouslySetInnerHTML={{ __html: iconSvg }} 
                    />
                ) : (
                    <div style={{ padding: "20px", textAlign: "center", border: "1px dashed #ccc", fontSize: "12px", color: "#888", width: "100%" }}>
                        <span>✕ Click to configure Custom SVG code</span>
                    </div>
                )}
            </div>
        );
    }

    // Standard Image Layout - Maintains object-fit, img-fluid, etc.
    const imgClasses = [
        baseClass,
        imageDisplayClass,
        imageAlignClass,
        imageShadow,
        ...(imageBorderSides || []),
        ...(imageBorderRemove || []),
        imageBorderColor,
        imageBorderOpacityClass,
        imageBorderSize,
        imageBorderRadius,
        imageBorderRadiusSize,
    ].filter(Boolean).join(" ");

    const imgStyles = {
        display: imageAlignClass.includes("d-block") ? "block" : "inline-block",
        width: imageWidth || undefined,
        height: imageHeight || (isHorizontal ? "100%" : "200px"),
        objectFit: imageObjectFit || "cover",
        ...(imageBorderOpacityCustom ? { "--bs-border-opacity": imageBorderOpacityCustom } : {}),
    };

    return (
        <MediaUploadCheck>
            <MediaUpload
                onSelect={(media) =>
                    setAttributes({
                        imageUrl: media.url,
                        imageId: media.id,
                        imageAlt: media.alt || "",
                    })
                }
                allowedTypes={["image"]}
                value={imageId}
                render={({ open }) => (
                    <div
                        className="wmblocks-card-img-area"
                        onClick={open}
                        style={{ cursor: "pointer", minHeight: "100px", width: "100%" }}
                    >
                        {imageUrl ? (
                            <img
                                src={imageUrl}
                                alt={imageAlt}
                                className={imgClasses}
                                style={imgStyles}
                            />
                        ) : (
                            <div
                                className="wmblocks-card-img-placeholder"
                                style={{
                                    background: "#f0f0f0",
                                    padding: "40px 10px",
                                    textAlign: "center",
                                    border: "1px dashed #ccc",
                                }}
                            >
                                <span>🖼 Click to set card image</span>
                            </div>
                        )}
                    </div>
                )}
            />
        </MediaUploadCheck>
    );
}

function CardBody({
    title,
    subtitle,
    bodyText,
    showBadge,
    badgeText,
    badgeVariant,
    showLink,
    setAttributes,
}) {
    return (
        <div className="card-body">
            {showBadge && (
                <RichText tagName="span" className={"badge mb-2 " + badgeVariant} value={badgeText} onChange={(v) => setAttributes({ badgeText: v })} allowedFormats={[]} placeholder={__("Badge…", "wmblocks")} />
            )}
            <RichText tagName="h5" className="card-title" value={title} onChange={(v) => setAttributes({ title: v })} allowedFormats={["core/bold", "core/italic"]} placeholder={__("Card title…", "wmblocks")} />
            {subtitle && (
                <RichText tagName="h6" className="card-subtitle mb-2 text-muted" value={subtitle} onChange={(v) => setAttributes({ subtitle: v })} allowedFormats={["core/bold", "core/italic"]} placeholder={__("Subtitle…", "wmblocks")} />
            )}
            <RichText tagName="p" className="card-text" value={bodyText} onChange={(v) => setAttributes({ bodyText: v })} allowedFormats={["core/bold", "core/italic", "core/link"]} placeholder={__("Card body text…", "wmblocks")} />
            {showLink && (
                <div className="wmblocks-button-wrapper mt-3">
                    <InnerBlocks allowedBlocks={["wmblocks/buttons"]} template={[["wmblocks/buttons"]]} templateLock={false} renderAppender={InnerBlocks.ButtonBlockAppender} />
                </div>
            )}
        </div>
    );
}