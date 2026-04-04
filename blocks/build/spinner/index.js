/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/spinner/edit.js"
/*!*****************************!*\
  !*** ./src/spinner/edit.js ***!
  \*****************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Edit)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./editor.scss */ "./src/spinner/editor.scss");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);





// ── Colour variants ────────────────────────────────────────────────────────

const VARIANTS = [{
  label: 'Primary',
  value: 'text-primary',
  hex: '#0d6efd'
}, {
  label: 'Secondary',
  value: 'text-secondary',
  hex: '#6c757d'
}, {
  label: 'Success',
  value: 'text-success',
  hex: '#198754'
}, {
  label: 'Danger',
  value: 'text-danger',
  hex: '#dc3545'
}, {
  label: 'Warning',
  value: 'text-warning',
  hex: '#ffc107'
}, {
  label: 'Info',
  value: 'text-info',
  hex: '#0dcaf0'
}, {
  label: 'Light',
  value: 'text-light',
  hex: '#f8f9fa'
}, {
  label: 'Dark',
  value: 'text-dark',
  hex: '#212529'
}];
const VARIANT_OPTIONS = VARIANTS.map(v => ({
  label: v.label,
  value: v.value
}));
const BTN_VARIANTS = [{
  label: 'Primary',
  value: 'btn-primary'
}, {
  label: 'Secondary',
  value: 'btn-secondary'
}, {
  label: 'Success',
  value: 'btn-success'
}, {
  label: 'Danger',
  value: 'btn-danger'
}, {
  label: 'Warning',
  value: 'btn-warning'
}, {
  label: 'Info',
  value: 'btn-info'
}, {
  label: 'Light',
  value: 'btn-light'
}, {
  label: 'Dark',
  value: 'btn-dark'
}, {
  label: 'Outline Primary',
  value: 'btn-outline-primary'
}, {
  label: 'Outline Secondary',
  value: 'btn-outline-secondary'
}];
const LABEL_POSITION_OPTIONS = [{
  label: 'Right of spinner',
  value: 'right'
}, {
  label: 'Left of spinner',
  value: 'left'
}, {
  label: 'Below spinner',
  value: 'below'
}, {
  label: 'Above spinner',
  value: 'above'
}];
const SIZE_OPTIONS = [{
  label: 'Default',
  value: ''
}, {
  label: 'Small',
  value: 'sm'
}, {
  label: 'Custom',
  value: 'custom'
}];
const ALIGNMENT_OPTIONS = [{
  label: 'Left',
  value: 'left'
}, {
  label: 'Center',
  value: 'center'
}, {
  label: 'Right',
  value: 'right'
}];

// Get hex colour for a variant value
function variantHex(value) {
  return VARIANTS.find(v => v.value === value)?.hex || '#0d6efd';
}

// ── Live spinner CSS for editor preview ───────────────────────────────────
// We replicate Bootstrap's spinner purely in CSS so the editor shows a real
// animated spinner without loading Bootstrap's CSS in the admin.
const SPINNER_BORDER_KEYFRAMES = `
@keyframes wm-spinner-border {
	to { transform: rotate(360deg); }
}
@keyframes wm-spinner-grow {
	0%   { transform: scale(0); }
	50%  { opacity: 1; transform: none; }
}
`;
function spinnerStyle(spinnerType, variant, size, customSize) {
  const color = variantHex(variant);
  const dim = size === 'sm' ? '1rem' : size === 'custom' && customSize ? customSize : '2rem';
  const border = size === 'sm' ? '0.2em' : '0.25em';
  if (spinnerType === 'grow') {
    return {
      display: 'inline-block',
      width: dim,
      height: dim,
      backgroundColor: color,
      borderRadius: '50%',
      opacity: 0,
      animation: 'wm-spinner-grow 0.75s linear infinite',
      flexShrink: 0
    };
  }
  return {
    display: 'inline-block',
    width: dim,
    height: dim,
    border: `${border} solid ${color}`,
    borderRightColor: 'transparent',
    borderRadius: '50%',
    animation: 'wm-spinner-border 0.75s linear infinite',
    flexShrink: 0
  };
}

// ── Edit component ─────────────────────────────────────────────────────────
function Edit({
  attributes,
  setAttributes
}) {
  const {
    spinnerType,
    variant,
    size,
    customSize,
    alignment,
    showLabel,
    labelText,
    labelPosition,
    showVisuallyHidden,
    visuallyHiddenText,
    buttonMode,
    buttonText,
    buttonVariant,
    buttonDisabled
  } = attributes;
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps)({
    className: 'wmblocks-spinner-wrapper'
  });
  const alignStyle = {
    left: 'flex-start',
    center: 'center',
    right: 'flex-end'
  }[alignment] || 'flex-start';
  const spStyle = spinnerStyle(spinnerType, variant, size, customSize);
  const hexColor = variantHex(variant);
  const isHorizontal = labelPosition === 'right' || labelPosition === 'left';
  const isVertical = labelPosition === 'above' || labelPosition === 'below';
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.BlockControls, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToolbarGroup, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToolbarButton, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Border spinner', 'wmblocks'),
          isPressed: spinnerType === 'border',
          onClick: () => setAttributes({
            spinnerType: 'border'
          }),
          children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('◌ Border', 'wmblocks')
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToolbarButton, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Grow spinner', 'wmblocks'),
          isPressed: spinnerType === 'grow',
          onClick: () => setAttributes({
            spinnerType: 'grow'
          }),
          children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('● Grow', 'wmblocks')
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToolbarGroup, {
        children: SIZE_OPTIONS.filter(s => s.value !== 'custom').map(s => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToolbarButton, {
          label: 'Size: ' + s.label,
          isPressed: size === s.value,
          onClick: () => setAttributes({
            size: s.value
          }),
          children: s.value === '' ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('MD', 'wmblocks') : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('SM', 'wmblocks')
        }, s.value))
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToolbarGroup, {
        children: ['left', 'center', 'right'].map(a => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToolbarButton, {
          icon: `editor-align${a}`,
          label: 'Align ' + a,
          isPressed: alignment === a,
          onClick: () => setAttributes({
            alignment: a
          })
        }, a))
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToolbarGroup, {
        children: VARIANTS.map(v => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToolbarButton, {
          label: v.label,
          isPressed: variant === v.value,
          onClick: () => setAttributes({
            variant: v.value
          }),
          style: {
            background: variant === v.value ? v.hex : '',
            color: variant === v.value ? ['text-warning', 'text-info', 'text-light'].includes(v.value) ? '#000' : '#fff' : '',
            fontWeight: 700,
            fontSize: '10px',
            minWidth: '40px',
            borderRadius: '3px'
          },
          children: v.label.slice(0, 3)
        }, v.value))
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InspectorControls, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Spinner', 'wmblocks'),
        initialOpen: true,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Type', 'wmblocks'),
          value: spinnerType,
          options: [{
            label: 'Border (spinning ring)',
            value: 'border'
          }, {
            label: 'Grow (pulsing dot)',
            value: 'grow'
          }],
          onChange: v => setAttributes({
            spinnerType: v
          }),
          help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Border spins continuously; grow pulses in and out.', 'wmblocks')
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Colour', 'wmblocks'),
          value: variant,
          options: VARIANT_OPTIONS,
          onChange: v => setAttributes({
            variant: v
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Size', 'wmblocks'),
          value: size,
          options: SIZE_OPTIONS,
          onChange: v => setAttributes({
            size: v
          }),
          help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Small = spinner-border-sm / spinner-grow-sm. Custom = set your own width/height.', 'wmblocks')
        }), size === 'custom' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Custom Size', 'wmblocks'),
          value: customSize,
          onChange: v => setAttributes({
            customSize: v
          }),
          placeholder: "e.g. 3rem or 48px",
          help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Applied as width and height inline style.', 'wmblocks')
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Alignment', 'wmblocks'),
          value: alignment,
          options: ALIGNMENT_OPTIONS,
          onChange: v => setAttributes({
            alignment: v
          })
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Accessibility', 'wmblocks'),
        initialOpen: false,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Visually hidden text', 'wmblocks'),
          checked: !!showVisuallyHidden,
          onChange: v => setAttributes({
            showVisuallyHidden: v
          }),
          help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Adds a <span class="visually-hidden"> for screen readers. Highly recommended.', 'wmblocks')
        }), showVisuallyHidden && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Hidden text', 'wmblocks'),
          value: visuallyHiddenText,
          onChange: v => setAttributes({
            visuallyHiddenText: v
          })
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Visible Label', 'wmblocks'),
        initialOpen: false,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Show label', 'wmblocks'),
          checked: !!showLabel,
          onChange: v => setAttributes({
            showLabel: v
          }),
          help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Displays a visible text label alongside the spinner. Edit it directly on the canvas.', 'wmblocks')
        }), showLabel && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Label position', 'wmblocks'),
          value: labelPosition,
          options: LABEL_POSITION_OPTIONS,
          onChange: v => setAttributes({
            labelPosition: v
          })
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Button Mode', 'wmblocks'),
        initialOpen: false,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Spinner inside a button', 'wmblocks'),
          checked: !!buttonMode,
          onChange: v => setAttributes({
            buttonMode: v
          }),
          help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Wraps the spinner inside a <button> element — ideal for loading states. Edit button text on the canvas.', 'wmblocks')
        }), buttonMode && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Button Style', 'wmblocks'),
            value: buttonVariant,
            options: BTN_VARIANTS,
            onChange: v => setAttributes({
              buttonVariant: v
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Disabled', 'wmblocks'),
            checked: !!buttonDisabled,
            onChange: v => setAttributes({
              buttonDisabled: v
            }),
            help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Disabled buttons prevent clicks while loading.', 'wmblocks')
          })]
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
      ...blockProps,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("style", {
        children: SPINNER_BORDER_KEYFRAMES
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
        className: "wmblocks-spinner-meta-strip",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
          className: "wmblocks-spinner-chip",
          children: "Spinner"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
          className: "wmblocks-spinner-chip",
          children: spinnerType
        }), size && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
          className: "wmblocks-spinner-chip",
          children: size === 'custom' ? customSize || 'custom' : size
        }), buttonMode && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
          className: "wmblocks-spinner-chip",
          children: "button mode"
        }), showLabel && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("span", {
          className: "wmblocks-spinner-chip",
          children: ["label: ", labelPosition]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
        className: "wmblocks-spinner-preview-row",
        style: {
          justifyContent: alignStyle
        },
        children: buttonMode ?
        /*#__PURE__*/
        // ── Button mode ─────────────────────────────────
        (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("button", {
          className: 'btn ' + buttonVariant + (buttonDisabled ? ' disabled' : ''),
          type: "button",
          disabled: buttonDisabled,
          style: {
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            cursor: 'default'
          },
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
            style: spStyle,
            "aria-hidden": "true"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
            tagName: "span",
            value: buttonText,
            onChange: v => setAttributes({
              buttonText: v
            }),
            allowedFormats: [],
            placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Button text…', 'wmblocks')
          })]
        }) :
        /*#__PURE__*/
        // ── Standalone spinner ──────────────────────────
        (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
          className: "wmblocks-spinner-standalone",
          style: {
            display: 'inline-flex',
            flexDirection: isVertical ? 'column' : 'row',
            alignItems: 'center',
            gap: '8px'
          },
          children: [showLabel && (labelPosition === 'above' || labelPosition === 'left') && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
            tagName: "span",
            className: "wmblocks-spinner-label",
            value: labelText,
            onChange: v => setAttributes({
              labelText: v
            }),
            allowedFormats: [],
            placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Loading…', 'wmblocks'),
            style: {
              color: hexColor,
              fontWeight: 500
            }
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
            style: spStyle,
            "aria-hidden": "true"
          }), showLabel && (labelPosition === 'below' || labelPosition === 'right') && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
            tagName: "span",
            className: "wmblocks-spinner-label",
            value: labelText,
            onChange: v => setAttributes({
              labelText: v
            }),
            allowedFormats: [],
            placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Loading…', 'wmblocks'),
            style: {
              color: hexColor,
              fontWeight: 500
            }
          })]
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
        className: "wmblocks-spinner-controls-row",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
          className: "wmblocks-spinner-control-group",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
            className: "wmblocks-spinner-control-label",
            children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Type', 'wmblocks')
          }), [{
            v: 'border',
            icon: '◌',
            tip: 'Border'
          }, {
            v: 'grow',
            icon: '●',
            tip: 'Grow'
          }].map(t => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("button", {
            className: 'wmblocks-spinner-pill' + (spinnerType === t.v ? ' is-active' : ''),
            onClick: () => setAttributes({
              spinnerType: t.v
            }),
            title: t.tip,
            children: [t.icon, " ", t.tip]
          }, t.v))]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
          className: "wmblocks-spinner-control-group",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
            className: "wmblocks-spinner-control-label",
            children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Size', 'wmblocks')
          }), [{
            v: '',
            l: 'MD'
          }, {
            v: 'sm',
            l: 'SM'
          }, {
            v: 'custom',
            l: 'Custom'
          }].map(s => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("button", {
            className: 'wmblocks-spinner-pill' + (size === s.v ? ' is-active' : ''),
            onClick: () => setAttributes({
              size: s.v
            }),
            children: s.l
          }, s.v)), size === 'custom' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("input", {
            type: "text",
            className: "wmblocks-spinner-custom-size-input",
            value: customSize,
            onChange: e => setAttributes({
              customSize: e.target.value
            }),
            placeholder: "3rem",
            title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Custom size (width & height)', 'wmblocks')
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
          className: "wmblocks-spinner-control-group",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
            className: "wmblocks-spinner-control-label",
            children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Colour', 'wmblocks')
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
            className: "wmblocks-spinner-swatches",
            children: VARIANTS.map(v => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("button", {
              className: 'wmblocks-spinner-swatch' + (variant === v.value ? ' is-active' : ''),
              style: {
                background: v.hex,
                boxShadow: variant === v.value ? `0 0 0 3px #fff, 0 0 0 5px ${v.hex}` : 'none',
                outline: v.hex === '#f8f9fa' ? '1px solid #dee2e6' : 'none'
              },
              onClick: () => setAttributes({
                variant: v.value
              }),
              title: v.label
            }, v.value))
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p", {
        className: "wmblocks-spinner-footer-hint",
        children: buttonMode ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Click button text to edit label · type, size & colour above · all options in sidebar →', 'wmblocks') : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Click label text to edit (if shown) · type, size & colour above · label & button mode in sidebar →', 'wmblocks')
      })]
    })]
  });
}

/***/ },

/***/ "./src/spinner/index.js"
/*!******************************!*\
  !*** ./src/spinner/index.js ***!
  \******************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ "./src/spinner/style.scss");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./src/spinner/edit.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./block.json */ "./src/spinner/block.json");




(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_3__.name, {
  edit: _edit__WEBPACK_IMPORTED_MODULE_2__["default"],
  // Fully server-side rendered — no InnerBlocks needed
  save: () => null
});

/***/ },

/***/ "./src/spinner/editor.scss"
/*!*********************************!*\
  !*** ./src/spinner/editor.scss ***!
  \*********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ },

/***/ "./src/spinner/style.scss"
/*!********************************!*\
  !*** ./src/spinner/style.scss ***!
  \********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ },

/***/ "react/jsx-runtime"
/*!**********************************!*\
  !*** external "ReactJSXRuntime" ***!
  \**********************************/
(module) {

module.exports = window["ReactJSXRuntime"];

/***/ },

/***/ "@wordpress/block-editor"
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
(module) {

module.exports = window["wp"]["blockEditor"];

/***/ },

/***/ "@wordpress/blocks"
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
(module) {

module.exports = window["wp"]["blocks"];

/***/ },

/***/ "@wordpress/components"
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
(module) {

module.exports = window["wp"]["components"];

/***/ },

/***/ "@wordpress/i18n"
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
(module) {

module.exports = window["wp"]["i18n"];

/***/ },

/***/ "./src/spinner/block.json"
/*!********************************!*\
  !*** ./src/spinner/block.json ***!
  \********************************/
(module) {

module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"wmblocks/spinner","version":"0.1.0","title":"Spinner","category":"watermelon-blocks","icon":"update","description":"Bootstrap spinner — animated loading indicator in border or grow style. Supports all colour variants, sizing, optional label, button mode, and alignment.","example":{},"supports":{"html":false,"anchor":true},"attributes":{"spinnerType":{"type":"string","default":"border"},"variant":{"type":"string","default":"text-primary"},"size":{"type":"string","default":""},"customSize":{"type":"string","default":""},"alignment":{"type":"string","default":"left"},"showLabel":{"type":"boolean","default":false},"labelText":{"type":"string","default":"Loading..."},"labelPosition":{"type":"string","default":"right"},"showVisuallyHidden":{"type":"boolean","default":true},"visuallyHiddenText":{"type":"string","default":"Loading..."},"buttonMode":{"type":"boolean","default":false},"buttonText":{"type":"string","default":"Loading..."},"buttonVariant":{"type":"string","default":"btn-primary"},"buttonDisabled":{"type":"boolean","default":true}},"textdomain":"wm","editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./style-index.css","render":"file:./render.php","viewScript":"file:./view.js"}');

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			var e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"spinner/index": 0,
/******/ 			"spinner/style-index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = globalThis["webpackChunkdiv"] = globalThis["webpackChunkdiv"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["spinner/style-index"], () => (__webpack_require__("./src/spinner/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map