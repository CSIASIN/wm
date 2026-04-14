/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/sticky-note/edit.js"
/*!*********************************!*\
  !*** ./src/sticky-note/edit.js ***!
  \*********************************/
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
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./editor.scss */ "./src/sticky-note/editor.scss");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);





// ── Position modes ─────────────────────────────────────────────────────────

const POSITION_MODES = [{
  value: 'sticky-top',
  label: 'Sticky Top',
  icon: '⬆',
  desc: 'Sticks to the top of the viewport after scrolling past it',
  cssClass: 'sticky-top',
  zone: 'top',
  type: 'sticky',
  colour: '#0d6efd'
}, {
  value: 'sticky-bottom',
  label: 'Sticky Bottom',
  icon: '⬇',
  desc: 'Sticks to the bottom of the viewport after scrolling past it',
  cssClass: 'sticky-bottom',
  zone: 'bottom',
  type: 'sticky',
  colour: '#6610f2'
}, {
  value: 'fixed-top',
  label: 'Fixed Top',
  icon: '📌',
  desc: 'Always fixed at the top of the viewport — floats above content',
  cssClass: 'fixed-top',
  zone: 'top',
  type: 'fixed',
  colour: '#dc3545'
}, {
  value: 'fixed-bottom',
  label: 'Fixed Bottom',
  icon: '📌',
  desc: 'Always fixed at the bottom of the viewport — floats above content',
  cssClass: 'fixed-bottom',
  zone: 'bottom',
  type: 'fixed',
  colour: '#fd7e14'
}];

// ── Breakpoints (for sticky-top / sticky-bottom only) ──────────────────────
const BREAKPOINTS = [{
  label: 'All viewports (no breakpoint)',
  value: ''
}, {
  label: 'SM (≥576px)',
  value: 'sm'
}, {
  label: 'MD (≥768px)',
  value: 'md'
}, {
  label: 'LG (≥992px)',
  value: 'lg'
}, {
  label: 'XL (≥1200px)',
  value: 'xl'
}, {
  label: 'XXL (≥1400px)',
  value: 'xxl'
}];

// ── Background colours ─────────────────────────────────────────────────────
const BG_COLOURS = [{
  label: 'White',
  value: 'bg-white'
}, {
  label: 'Light',
  value: 'bg-light'
}, {
  label: 'Dark',
  value: 'bg-dark'
}, {
  label: 'Primary',
  value: 'bg-primary'
}, {
  label: 'Secondary',
  value: 'bg-secondary'
}, {
  label: 'Success',
  value: 'bg-success'
}, {
  label: 'Danger',
  value: 'bg-danger'
}, {
  label: 'Warning',
  value: 'bg-warning'
}, {
  label: 'Info',
  value: 'bg-info'
}, {
  label: 'Transparent',
  value: ''
}];

// ── Shadow options ─────────────────────────────────────────────────────────
const SHADOW_OPTIONS = [{
  label: 'None',
  value: ''
}, {
  label: 'Small',
  value: 'shadow-sm'
}, {
  label: 'Default',
  value: 'shadow'
}, {
  label: 'Large',
  value: 'shadow-lg'
}];

// ── Padding options ────────────────────────────────────────────────────────
const PADDING_OPTIONS = [{
  label: 'None',
  value: ''
}, {
  label: 'XS',
  value: 'py-1'
}, {
  label: 'SM',
  value: 'py-2'
}, {
  label: 'MD',
  value: 'py-3'
}, {
  label: 'LG',
  value: 'py-4'
}, {
  label: 'XL',
  value: 'py-5'
}];

// ── Z-index presets ────────────────────────────────────────────────────────
const Z_INDEX_OPTIONS = [{
  label: 'Auto',
  value: 'auto'
}, {
  label: '100',
  value: '100'
}, {
  label: '200',
  value: '200'
}, {
  label: '500',
  value: '500'
}, {
  label: '1000',
  value: '1000'
}, {
  label: '1020 (Bootstrap default)',
  value: '1020'
}, {
  label: '1030',
  value: '1030'
}, {
  label: '1040',
  value: '1040'
}, {
  label: '1050',
  value: '1050'
}, {
  label: '9999',
  value: '9999'
}];

// ── Container width ────────────────────────────────────────────────────────
const CONTAINER_OPTIONS = [{
  label: 'Full width (no container)',
  value: ''
}, {
  label: 'container',
  value: 'container'
}, {
  label: 'container-sm',
  value: 'container-sm'
}, {
  label: 'container-md',
  value: 'container-md'
}, {
  label: 'container-lg',
  value: 'container-lg'
}, {
  label: 'container-xl',
  value: 'container-xl'
}, {
  label: 'container-fluid',
  value: 'container-fluid'
}];

// ── Label positions ────────────────────────────────────────────────────────
const LABEL_POSITIONS = [{
  label: 'Top right',
  value: 'top-0 end-0'
}, {
  label: 'Top left',
  value: 'top-0 start-0'
}, {
  label: 'Top center',
  value: 'top-0 start-50 translate-middle-x'
}, {
  label: 'Bottom right',
  value: 'bottom-0 end-0'
}, {
  label: 'Bottom left',
  value: 'bottom-0 start-0'
}];

// ── Default InnerBlocks template ────────────────────────────────────────────
const INNER_TEMPLATE = [['core/paragraph', {
  placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Add content for your sticky/fixed element here…', 'wmblocks'),
  content: 'Your sticky content here'
}]];

// ── Build the final position CSS class string ──────────────────────────────
function buildPositionClass(mode, breakpoint) {
  const modeObj = POSITION_MODES.find(m => m.value === mode);
  if (!modeObj) return 'sticky-top';
  const isSticky = modeObj.type === 'sticky';
  const zone = modeObj.zone;
  if (isSticky && breakpoint) {
    return `sticky-${breakpoint}-${zone}`;
  }
  return modeObj.cssClass;
}

// ── Edit component ─────────────────────────────────────────────────────────
function Edit({
  attributes,
  setAttributes
}) {
  const {
    positionMode,
    breakpoint,
    zIndex,
    bgColor,
    shadow,
    padding,
    showLabel,
    labelText,
    labelPosition,
    containerWidth,
    editorPreviewMode
  } = attributes;
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps)({
    className: 'wmblocks-sticky-outer'
  });
  const modeObj = POSITION_MODES.find(m => m.value === positionMode) || POSITION_MODES[0];
  const isSticky = modeObj.type === 'sticky';
  const isFixed = modeObj.type === 'fixed';
  const isTop = modeObj.zone === 'top';
  const posClass = buildPositionClass(positionMode, breakpoint);
  const accentColor = modeObj.colour;

  // ── Build wrapper classes for the live preview ─────────────────────
  const wrapperClasses = [bgColor, shadow, padding, 'w-100'].filter(Boolean).join(' ');
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.BlockControls, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToolbarGroup, {
        children: POSITION_MODES.map(m => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToolbarButton, {
          label: m.label,
          isPressed: positionMode === m.value,
          onClick: () => setAttributes({
            positionMode: m.value
          }),
          children: [m.icon, " ", m.label]
        }, m.value))
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToolbarGroup, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToolbarButton, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Inline preview', 'wmblocks'),
          isPressed: editorPreviewMode === 'inline',
          onClick: () => setAttributes({
            editorPreviewMode: 'inline'
          }),
          children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Inline', 'wmblocks')
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToolbarButton, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Float preview (simulates position)', 'wmblocks'),
          isPressed: editorPreviewMode === 'float',
          onClick: () => setAttributes({
            editorPreviewMode: 'float'
          }),
          children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Float', 'wmblocks')
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InspectorControls, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Position Mode', 'wmblocks'),
        initialOpen: true,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
          style: {
            display: 'flex',
            flexDirection: 'column',
            gap: '6px',
            marginBottom: '12px'
          },
          children: POSITION_MODES.map(m => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("button", {
            onClick: () => setAttributes({
              positionMode: m.value,
              breakpoint: ''
            }),
            style: {
              display: 'flex',
              alignItems: 'flex-start',
              gap: '10px',
              padding: '9px 12px',
              border: positionMode === m.value ? `2px solid ${m.colour}` : '1px solid #dee2e6',
              borderRadius: '6px',
              background: positionMode === m.value ? m.colour + '14' : '#fff',
              color: positionMode === m.value ? m.colour : '#333',
              cursor: 'pointer',
              fontSize: '13px',
              transition: 'all .12s',
              textAlign: 'left'
            },
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
              style: {
                fontSize: '18px',
                marginTop: '1px'
              },
              children: m.icon
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
                style: {
                  fontWeight: 700
                },
                children: m.label
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
                style: {
                  fontSize: '11px',
                  color: '#888',
                  marginTop: '2px',
                  lineHeight: 1.4
                },
                children: m.desc
              })]
            }), positionMode === m.value && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
              style: {
                marginLeft: 'auto',
                fontWeight: 700,
                fontSize: '14px'
              },
              children: "\u2713"
            })]
          }, m.value))
        }), isSticky && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Responsive breakpoint', 'wmblocks'),
          value: breakpoint,
          options: BREAKPOINTS,
          onChange: v => setAttributes({
            breakpoint: v
          }),
          help: breakpoint ? `Outputs: sticky-${breakpoint}-${modeObj.zone} — only sticky on viewports ${breakpoint}+` : `Outputs: ${posClass} — sticky on all viewports`
        }), isFixed && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p", {
          style: {
            fontSize: '11px',
            color: '#888',
            lineHeight: 1.5,
            margin: '4px 0 0'
          },
          children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Fixed elements do not support responsive breakpoints. They float above page content on all screen sizes and may require body padding in your theme.', 'wmblocks')
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Appearance', 'wmblocks'),
        initialOpen: true,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Background colour', 'wmblocks'),
          value: bgColor,
          options: BG_COLOURS,
          onChange: v => setAttributes({
            bgColor: v
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Shadow', 'wmblocks'),
          value: shadow,
          options: SHADOW_OPTIONS,
          onChange: v => setAttributes({
            shadow: v
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Vertical padding', 'wmblocks'),
          value: padding,
          options: PADDING_OPTIONS,
          onChange: v => setAttributes({
            padding: v
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Inner container width', 'wmblocks'),
          value: containerWidth,
          options: CONTAINER_OPTIONS,
          onChange: v => setAttributes({
            containerWidth: v
          }),
          help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Wrap inner content in a Bootstrap container class.', 'wmblocks')
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Indicator Label', 'wmblocks'),
        initialOpen: false,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Show indicator label', 'wmblocks'),
            checked: !!showLabel,
            onChange: v => setAttributes({
              showLabel: v
            }),
            help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Adds a small visible badge on the frontend to indicate this is a sticky/fixed element. Useful for development; remove for production.', 'wmblocks')
          })
        }), showLabel && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Label text (leave empty for auto)', 'wmblocks'),
            value: labelText,
            onChange: v => setAttributes({
              labelText: v
            }),
            placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('e.g. "Sticky Header"', 'wmblocks')
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Label position', 'wmblocks'),
            value: labelPosition,
            options: LABEL_POSITIONS,
            onChange: v => setAttributes({
              labelPosition: v
            })
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Advanced', 'wmblocks'),
        initialOpen: false,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('z-index', 'wmblocks'),
          value: zIndex,
          options: Z_INDEX_OPTIONS,
          onChange: v => setAttributes({
            zIndex: v
          }),
          help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Bootstrap uses 1020 for fixed/sticky elements by default. Raise this to layer above other elements.', 'wmblocks')
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("p", {
          style: {
            fontSize: '11px',
            color: '#888',
            marginTop: '4px',
            lineHeight: 1.5
          },
          children: [(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Generated class: ', 'wmblocks'), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("code", {
            style: {
              background: '#f1f1f1',
              padding: '1px 5px',
              borderRadius: '3px',
              fontFamily: 'monospace',
              fontSize: '11px'
            },
            children: [".", posClass]
          })]
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
      ...blockProps,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
        className: "wmblocks-sticky-viewport-diagram",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
          className: "wmblocks-sticky-vp-browser",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
            className: "wmblocks-sticky-vp-chrome",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {})]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
            className: "wmblocks-sticky-vp-body",
            children: [isTop && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
              className: "wmblocks-sticky-vp-indicator wmblocks-sticky-vp-indicator--top",
              style: {
                background: accentColor
              },
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("span", {
                children: [modeObj.icon, " ", modeObj.label, breakpoint ? ` (${breakpoint}+)` : '']
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
              className: "wmblocks-sticky-vp-page-lines",
              children: [80, 60, 90, 50, 70, 40, 85].map((w, i) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
                className: "wmblocks-sticky-vp-line",
                style: {
                  width: `${w}%`
                }
              }, i))
            }), !isTop && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
              className: "wmblocks-sticky-vp-indicator wmblocks-sticky-vp-indicator--bottom",
              style: {
                background: accentColor
              },
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("span", {
                children: [modeObj.icon, " ", modeObj.label, breakpoint ? ` (${breakpoint}+)` : '']
              })
            })]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
          className: "wmblocks-sticky-vp-caption",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("span", {
            className: "wmblocks-sticky-vp-badge",
            style: {
              background: accentColor
            },
            children: [".", posClass]
          }), isFixed ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
            className: "wmblocks-sticky-vp-note",
            children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Always visible — floats above all page content', 'wmblocks')
          }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
            className: "wmblocks-sticky-vp-note",
            children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Normal in flow until scrolled past, then sticks', 'wmblocks')
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
        className: "wmblocks-sticky-mode-bar",
        children: POSITION_MODES.map(m => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("button", {
          className: 'wmblocks-sticky-mode-btn' + (positionMode === m.value ? ' is-active' : ''),
          style: positionMode === m.value ? {
            background: m.colour,
            borderColor: m.colour,
            color: '#fff'
          } : {},
          onClick: () => setAttributes({
            positionMode: m.value,
            breakpoint: ''
          }),
          title: m.desc,
          children: [m.icon, " ", m.label]
        }, m.value))
      }), isSticky && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
        className: "wmblocks-sticky-bp-bar",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
          className: "wmblocks-sticky-bp-label",
          children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Breakpoint:', 'wmblocks')
        }), BREAKPOINTS.map(bp => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("button", {
          className: 'wmblocks-sticky-bp-btn' + (breakpoint === bp.value ? ' is-active' : ''),
          onClick: () => setAttributes({
            breakpoint: bp.value
          }),
          title: bp.label,
          style: breakpoint === bp.value ? {
            background: accentColor,
            borderColor: accentColor,
            color: '#fff'
          } : {},
          children: bp.value || 'All'
        }, bp.value))]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
        className: 'wmblocks-sticky-content-area' + (editorPreviewMode === 'float' ? ' wmblocks-sticky-content-area--float' : ''),
        children: [editorPreviewMode === 'float' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
          className: "wmblocks-sticky-float-label",
          style: {
            borderColor: accentColor,
            color: accentColor
          },
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
            children: modeObj.icon
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("span", {
            children: [modeObj.label, " preview"]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
          className: 'wmblocks-sticky-element-preview ' + wrapperClasses,
          style: {
            borderLeft: `4px solid ${accentColor}`,
            zIndex: zIndex !== 'auto' ? parseInt(zIndex) : 'auto'
          },
          children: containerWidth ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
            className: containerWidth,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InnerBlocks, {
              template: INNER_TEMPLATE,
              templateLock: false
            })
          }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InnerBlocks, {
            template: INNER_TEMPLATE,
            templateLock: false
          })
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
        className: "wmblocks-sticky-summary-row",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
          className: "wmblocks-sticky-summary-chips",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("span", {
            className: "wmblocks-sticky-chip",
            style: {
              background: accentColor + '22',
              color: accentColor
            },
            children: [".", posClass]
          }), bgColor && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
            className: "wmblocks-sticky-chip",
            children: bgColor
          }), shadow && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
            className: "wmblocks-sticky-chip",
            children: shadow
          }), padding && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
            className: "wmblocks-sticky-chip",
            children: padding
          }), containerWidth && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
            className: "wmblocks-sticky-chip",
            children: containerWidth
          }), zIndex && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("span", {
            className: "wmblocks-sticky-chip",
            children: ["z: ", zIndex]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
          className: "wmblocks-sticky-warning",
          style: {
            borderColor: accentColor + '44'
          },
          children: isFixed ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('⚠ Fixed elements float above all content and may overlap your page. Add body padding-top or padding-bottom in your theme CSS to compensate.', 'wmblocks') : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('ℹ Sticky elements stay in normal flow until scrolled past, then attach to the viewport edge. No body padding needed.', 'wmblocks')
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p", {
        className: "wmblocks-sticky-footer-hint",
        children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Drop any content inside · switch modes in toolbar or above · all options in sidebar →', 'wmblocks')
      })]
    })]
  });
}

/***/ },

/***/ "./src/sticky-note/index.js"
/*!**********************************!*\
  !*** ./src/sticky-note/index.js ***!
  \**********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.scss */ "./src/sticky-note/style.scss");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit */ "./src/sticky-note/edit.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./block.json */ "./src/sticky-note/block.json");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);






(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_4__.name, {
  edit: _edit__WEBPACK_IMPORTED_MODULE_3__["default"],
  /**
   * save() persists InnerBlocks content which is passed to
   * render.php as $content, then wrapped in the position element.
   */
  save: () => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
    ..._wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps.save(),
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InnerBlocks.Content, {})
  })
});

/***/ },

/***/ "./src/sticky-note/editor.scss"
/*!*************************************!*\
  !*** ./src/sticky-note/editor.scss ***!
  \*************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ },

/***/ "./src/sticky-note/style.scss"
/*!************************************!*\
  !*** ./src/sticky-note/style.scss ***!
  \************************************/
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

/***/ "./src/sticky-note/block.json"
/*!************************************!*\
  !*** ./src/sticky-note/block.json ***!
  \************************************/
(module) {

module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"wmblocks/sticky-note","version":"0.1.0","title":"Sticky / Fixed Element","category":"watermelon-blocks","icon":"sticky","description":"Bootstrap position helper block — makes any content sticky or fixed to the viewport. Supports fixed-top, fixed-bottom, sticky-top, sticky-bottom, and all responsive breakpoint variants. Drop any blocks inside. Perfect for sticky headers, floating CTAs, fixed banners, and pinned sidebars.","example":{},"supports":{"html":false,"anchor":true},"attributes":{"positionMode":{"type":"string","default":"sticky-top"},"breakpoint":{"type":"string","default":""},"zIndex":{"type":"string","default":"1020"},"bgColor":{"type":"string","default":"bg-white"},"shadow":{"type":"string","default":"shadow-sm"},"padding":{"type":"string","default":"py-2"},"showLabel":{"type":"boolean","default":true},"labelText":{"type":"string","default":""},"labelPosition":{"type":"string","default":"top-0 end-0"},"containerWidth":{"type":"string","default":""},"editorPreviewMode":{"type":"string","default":"inline"}},"textdomain":"wm","editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./style-index.css","render":"file:./render.php","viewScript":"file:./view.js"}');

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
/******/ 			"sticky-note/index": 0,
/******/ 			"sticky-note/style-index": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["sticky-note/style-index"], () => (__webpack_require__("./src/sticky-note/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map