/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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

/***/ "@wordpress/components"
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
(module) {

module.exports = window["wp"]["components"];

/***/ },

/***/ "@wordpress/element"
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
(module) {

module.exports = window["wp"]["element"];

/***/ },

/***/ "@wordpress/hooks"
/*!*******************************!*\
  !*** external ["wp","hooks"] ***!
  \*******************************/
(module) {

module.exports = window["wp"]["hooks"];

/***/ },

/***/ "@wordpress/i18n"
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
(module) {

module.exports = window["wp"]["i18n"];

/***/ },

/***/ "@wordpress/rich-text"
/*!**********************************!*\
  !*** external ["wp","richText"] ***!
  \**********************************/
(module) {

module.exports = window["wp"]["richText"];

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
/************************************************************************/
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!************************************!*\
  !*** ./src/formats/color/index.js ***!
  \************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_rich_text__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/rich-text */ "@wordpress/rich-text");
/* harmony import */ var _wordpress_rich_text__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_rich_text__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/hooks */ "@wordpress/hooks");
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);
/**
 * WM Text Color, Background Color & Text Gradient — Inline Formats
 */


// Import potential houses for the GradientPicker component






// Extract components we know are safe

const {
  RichTextToolbarButton
} = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__;
const {
  Modal,
  Button,
  ColorIndicator,
  TabPanel,
  ColorPicker
} = _wordpress_components__WEBPACK_IMPORTED_MODULE_2__;

// ── FIX: Bulletproof Dynamic GradientPicker Fallback ──────────────────────────
// Resolves the "type is invalid -- expected a string... but got: undefined" crash.
const GradientPicker = _wordpress_components__WEBPACK_IMPORTED_MODULE_2__.GradientPicker || _wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalGradientPicker || _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.GradientPicker || _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.__experimentalGradientPicker;

// ── Format identifiers ────────────────────────────────────────────────────────
const FMT_TEXT = 'wmblocks/wm-text-color';
const FMT_BG = 'wmblocks/wm-bg-color';
const FMT_GRADIENT = 'wmblocks/wm-text-gradient';

// ── Preset palettes ───────────────────────────────────────────────────────────
const COLORS = [
// Row 1 — Bootstrap theme
{
  label: 'Primary',
  hex: '#0d6efd'
}, {
  label: 'Secondary',
  hex: '#6c757d'
}, {
  label: 'Success',
  hex: '#198754'
}, {
  label: 'Danger',
  hex: '#dc3545'
}, {
  label: 'Warning',
  hex: '#ffc107'
}, {
  label: 'Info',
  hex: '#0dcaf0'
}, {
  label: 'Dark',
  hex: '#212529'
}, {
  label: 'Light',
  hex: '#f8f9fa'
},
// Row 2 — Extended
{
  label: 'Black',
  hex: '#000000'
}, {
  label: 'White',
  hex: '#ffffff'
}, {
  label: 'Red',
  hex: '#e63946'
}, {
  label: 'Pink',
  hex: '#e91e8c'
}, {
  label: 'Purple',
  hex: '#6f42c1'
}, {
  label: 'Indigo',
  hex: '#6610f2'
}, {
  label: 'Cyan',
  hex: '#0dcaf0'
}, {
  label: 'Teal',
  hex: '#20c997'
},
// Row 3 — Pastels / light
{
  label: 'Green',
  hex: '#198754'
}, {
  label: 'Lime',
  hex: '#a3e635'
}, {
  label: 'Yellow',
  hex: '#ffc107'
}, {
  label: 'Orange',
  hex: '#fd7e14'
}, {
  label: 'Peach',
  hex: '#ffb3a7'
}, {
  label: 'Lavender',
  hex: '#d4b8e0'
}, {
  label: 'Sky',
  hex: '#bde0fe'
}, {
  label: 'Mint',
  hex: '#b7e4c7'
},
// Row 4 — Grays
{
  label: 'Gray 100',
  hex: '#f8f9fa'
}, {
  label: 'Gray 300',
  hex: '#dee2e6'
}, {
  label: 'Gray 500',
  hex: '#adb5bd'
}, {
  label: 'Gray 700',
  hex: '#495057'
}];
const GRADIENT_PRESETS = [{
  name: 'Strucial',
  gradient: 'linear-gradient(90deg,lab(67.7847% -25.7828 -44.2698) 0%,lab(55.1847% -8.24726 -58.1227) 45%,lab(65.237% -56.3259 48.5355) 100%)',
  slug: 'strucial'
}, {
  name: 'Vivid cyan blue to vivid purple',
  gradient: 'linear-gradient(135deg,rgba(6,147,227,1) 0%,rgb(155,81,224) 100%)',
  slug: 'vivid-cyan-blue-to-vivid-purple'
}, {
  name: 'Light green cyan to vivid green cyan',
  gradient: 'linear-gradient(135deg,rgb(122,220,180) 0%,rgb(0,208,130) 100%)',
  slug: 'light-green-cyan-to-vivid-green-cyan'
}, {
  name: 'Luminous vivid amber to luminous vivid orange',
  gradient: 'linear-gradient(135deg,rgba(252,185,0,1) 0%,rgba(255,105,0,1) 100%)',
  slug: 'luminous-vivid-amber-to-luminous-vivid-orange'
}, {
  name: 'Luminous vivid orange to vivid red',
  gradient: 'linear-gradient(135deg,rgba(255,105,0,1) 0%,rgb(207,46,46) 100%)',
  slug: 'luminous-vivid-orange-to-vivid-red'
}];
// Luminance check — returns true if colour is light (needs dark tick)
function isLight(hex) {
  const h = hex.replace('#', '');
  if (h.length < 6) return true;
  const r = parseInt(h.slice(0, 2), 16);
  const g = parseInt(h.slice(2, 4), 16);
  const b = parseInt(h.slice(4, 6), 16);
  return r * 0.299 + g * 0.587 + b * 0.114 > 160;
}

// ── Get active colour value from current selection ────────────────────────────
function getActiveHex(value, fmtName, cssProp) {
  const active = ((0,_wordpress_rich_text__WEBPACK_IMPORTED_MODULE_0__.getActiveFormats)(value) || []).find(f => f.type === fmtName);
  if (!active) return null;
  const style = active.attributes?.style || '';
  const m = style.match(new RegExp(cssProp + '\\s*:\\s*([^;]+)', 'i'));
  return m ? m[1].trim() : null;
}

// Specialized parser for extracting the linear/radial background gradient string
function getActiveGradient(value) {
  const active = ((0,_wordpress_rich_text__WEBPACK_IMPORTED_MODULE_0__.getActiveFormats)(value) || []).find(f => f.type === FMT_GRADIENT);
  if (!active) return null;
  const style = active.attributes?.style || '';
  const m = style.match(/background\s*:\s*([^;]+)/i);
  return m ? m[1].trim() : null;
}

// ── Gradient Modal (Fixed Popover Z-Index Layering) ───────────────────────────
function WmGradientModal({
  title,
  activeGradient,
  onApply,
  onClear,
  onClose
}) {
  const [gradient, setGradient] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useState)(activeGradient || GRADIENT_PRESETS[0].gradient);
  if (!GradientPicker) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(Modal, {
      title: title,
      onRequestClose: onClose,
      size: "medium",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("p", {
        style: {
          padding: '20px',
          color: '#dc3545'
        },
        children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Error: Native WordPress GradientPicker component could not be resolved.', 'wmblocks')
      })
    });
  }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(Modal, {
    title: title,
    onRequestClose: onClose,
    className: "wm-color-modal",
    size: "medium",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
      className: "wm-color-modal__body",
      children: [activeGradient && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
        className: "wm-color-modal__current",
        style: {
          marginBottom: '15px',
          display: 'flex',
          alignItems: 'center',
          gap: '10px'
        },
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(ColorIndicator, {
          colorValue: activeGradient
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("code", {
          className: "wm-color-modal__current-code",
          style: {
            fontSize: '11px',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
            flex: 1
          },
          children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Gradient Active', 'wmblocks')
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(Button, {
          variant: "tertiary",
          isDestructive: true,
          size: "compact",
          onClick: onClear,
          children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('✕ Remove', 'wmblocks')
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(GradientPicker, {
        value: gradient,
        onChange: setGradient,
        gradients: GRADIENT_PRESETS,
        popoverProps: {
          inline: true,
          placement: 'bottom-start'
        }
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(Button, {
        variant: "primary",
        style: {
          width: '100%',
          marginTop: 20,
          justifyContent: 'center'
        },
        onClick: () => onApply(gradient),
        children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Apply Gradient', 'wmblocks')
      })]
    })
  });
}

// ── Color modal — uses WP Modal + TabPanel components ─────────────────────────
function WmColorModal({
  title,
  cssProp,
  activeHex,
  onApply,
  onClear,
  onClose
}) {
  const [custom, setCustom] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useState)(activeHex || '#0d6efd');
  const tabs = [{
    name: 'presets',
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Presets', 'wmblocks')
  }, {
    name: 'picker',
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Custom', 'wmblocks')
  }];
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(Modal, {
    title: title,
    onRequestClose: onClose,
    className: "wm-color-modal",
    size: "medium",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
      className: "wm-color-modal__body",
      children: [activeHex && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
        className: "wm-color-modal__current",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(ColorIndicator, {
          colorValue: activeHex
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("code", {
          className: "wm-color-modal__current-code",
          children: activeHex
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(Button, {
          variant: "tertiary",
          isDestructive: true,
          size: "compact",
          onClick: onClear,
          children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('✕ Remove', 'wmblocks')
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(TabPanel, {
        className: "wm-color-modal__tabpanel",
        activeClass: "is-active",
        tabs: tabs,
        children: tab => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
          className: "wm-color-modal__tab-content",
          children: [tab.name === 'presets' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
            className: "wm-color-modal__swatches",
            children: COLORS.map(({
              label,
              hex
            }) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("button", {
              title: `${label} (${hex})`,
              className: `wm-color-swatch${activeHex === hex ? ' is-selected' : ''}`,
              style: {
                width: '50px',
                height: '25px',
                margin: '5px 2px',
                boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px',
                background: hex,
                borderColor: activeHex === hex ? '#3858e9' : isLight(hex) ? '#dee2e6' : 'transparent'
              },
              onClick: () => onApply(hex),
              children: activeHex === hex && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {
                style: {
                  color: isLight(hex) ? '#000' : '#fff',
                  fontSize: 12,
                  lineHeight: 1
                },
                children: "\u2713"
              })
            }, hex + label))
          }), tab.name === 'picker' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
            className: "wm-color-modal__picker",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(ColorPicker, {
              color: custom,
              onChange: setCustom,
              enableAlpha: false
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(Button, {
              variant: "primary",
              style: {
                width: '100%',
                marginTop: 12,
                justifyContent: 'center'
              },
              onClick: () => onApply(custom),
              children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Apply', 'wmblocks')
            })]
          })]
        })
      })]
    })
  });
}
// ── Generic toolbar button factory ────────────────────────────────────────────
function makeButton(fmtName, cssProp, iconLabel, toolbarLabel, modalTitle) {
  return function WmColorButton({
    value,
    onChange
  }) {
    const [open, setOpen] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
    const activeHex = getActiveHex(value, fmtName, cssProp);
    const handleApply = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useCallback)(hex => {
      setOpen(false);
      const extraStyle = cssProp === 'background-color' ? `;padding:0.1em 0.25em;border-radius:0.2em;-webkit-box-decoration-break:clone;box-decoration-break:clone` : '';
      onChange((0,_wordpress_rich_text__WEBPACK_IMPORTED_MODULE_0__.applyFormat)(value, {
        type: fmtName,
        attributes: {
          style: `${cssProp}:${hex}${extraStyle}`
        }
      }));
    }, [value, onChange]);
    const handleClear = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useCallback)(() => {
      setOpen(false);
      onChange((0,_wordpress_rich_text__WEBPACK_IMPORTED_MODULE_0__.removeFormat)(value, fmtName));
    }, [value, onChange]);
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(RichTextToolbarButton, {
        icon: () => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("span", {
          className: "wm-color-tool-icon",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {
            className: "wm-color-tool-icon__label",
            children: iconLabel
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {
            className: "wm-color-tool-icon__bar",
            style: {
              background: activeHex || 'linear-gradient(90deg,#e63946,#ffc107,#198754,#0d6efd)',
              opacity: activeHex ? 1 : 0.5
            }
          })]
        }),
        title: toolbarLabel,
        onClick: () => setOpen(v => !v),
        isActive: !!activeHex
      }), open && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(WmColorModal, {
        title: modalTitle,
        cssProp: cssProp,
        activeHex: activeHex,
        onApply: handleApply,
        onClear: handleClear
        // FIX 2: Fixed typo "falseexport"
        ,
        onClose: () => setOpen(false)
      })]
    });
  };
}

// ── Specialized Text Gradient Toolbar Button Component ────────────────────────
function WmGradientButton({
  value,
  onChange
}) {
  const [open, setOpen] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
  const activeGradient = getActiveGradient(value);
  const handleApply = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useCallback)(grad => {
    setOpen(false);
    const inlineStyle = `background:${grad};-webkit-background-clip:text;-webkit-text-fill-color:transparent;display:inline-block;`;
    onChange((0,_wordpress_rich_text__WEBPACK_IMPORTED_MODULE_0__.applyFormat)(value, {
      type: FMT_GRADIENT,
      attributes: {
        style: inlineStyle
      }
    }));
  }, [value, onChange]);
  const handleClear = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useCallback)(() => {
    setOpen(false);
    onChange((0,_wordpress_rich_text__WEBPACK_IMPORTED_MODULE_0__.removeFormat)(value, FMT_GRADIENT));
  }, [value, onChange]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(RichTextToolbarButton, {
      icon: () => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("span", {
        className: "wm-color-tool-icon",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {
          className: "wm-color-tool-icon__label",
          style: {
            fontWeight: 900,
            fontFamily: 'sans-serif',
            fontSize: 13,
            background: activeGradient || 'linear-gradient(90deg,#e63946,#0d6efd)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          },
          children: "GR"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {
          className: "wm-color-tool-icon__bar",
          style: {
            background: activeGradient || 'linear-gradient(90deg,#e63946,#ffc107,#198754,#0d6efd)',
            opacity: activeGradient ? 1 : 0.5
          }
        })]
      }),
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Text Gradient', 'wmblocks'),
      onClick: () => setOpen(v => !v),
      isActive: !!activeGradient
    }), open && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(WmGradientModal, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Text Gradient', 'wmblocks'),
      activeGradient: activeGradient,
      onApply: handleApply,
      onClear: handleClear
      // FIX 3: Fixed typo "falseexport"
      ,
      onClose: () => setOpen(false)
    })]
  });
}

// ── Make formats available in ALL rich-text blocks ───────────────────────────
// registerFormatType alone is enough for blocks where allowedFormats is
// undefined (= allow everything). But some blocks — core/heading, core/button,
// core/list, core/quote, etc. — ship with an explicit allowedFormats whitelist.
// We hook into:
//   1. blocks.registerBlockType  — patches the static block settings
//   2. blocks.getSaveContent     — no-op, just for completeness
//
// The RichText __unstableAllowedFormats prop is the runtime equivalent but it
// requires patching each block's edit component. The simplest reliable approach
// is to filter the block settings so every block's allowedFormats includes ours.

function injectColorFormats(settings) {
  // Skip non-object settings (safety)
  if (!settings || typeof settings !== 'object') return settings;

  // If the block has an explicit allowedFormats whitelist, append our formats.
  // If allowedFormats is absent/undefined all formats are allowed already.
  if (Array.isArray(settings.allowedFormats)) {
    const already = settings.allowedFormats;
    return {
      ...settings,
      allowedFormats: [...already, ...(already.includes(FMT_TEXT) ? [] : [FMT_TEXT]), ...(already.includes(FMT_BG) ? [] : [FMT_BG]), ...(already.includes(FMT_GRADIENT) ? [] : [FMT_GRADIENT])]
    };
  }
  return settings;
}
(0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_4__.addFilter)('blocks.registerBlockType', 'wmblocks/inject-color-formats', injectColorFormats);

// ── Register TEXT COLOUR ──────────────────────────────────────────────────────
const TextColorBtn = makeButton(FMT_TEXT, 'color', /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {
    style: {
      fontWeight: 700,
      fontFamily: 'serif',
      fontSize: 15
    },
    children: "A"
  })
}), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Text Color', 'wmblocks'), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Text Color', 'wmblocks'));
(0,_wordpress_rich_text__WEBPACK_IMPORTED_MODULE_0__.registerFormatType)(FMT_TEXT, {
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Text Color', 'wmblocks'),
  tagName: 'span',
  className: 'wm-tc',
  // unique class — never conflicts with WP core
  attributes: {
    style: 'style'
  },
  edit({
    value,
    onChange,
    isActive
  }) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(TextColorBtn, {
      value: value,
      onChange: onChange,
      isActive: isActive
    });
  }
});

// ── Register BACKGROUND COLOUR ────────────────────────────────────────────────
const BgColorBtn = makeButton(FMT_BG, 'background-color', /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {
    style: {
      fontWeight: 700,
      fontFamily: 'sans-serif',
      fontSize: 11,
      letterSpacing: '-0.5px'
    },
    children: "BG"
  })
}), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Background Color', 'wmblocks'), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Background Color', 'wmblocks'));
(0,_wordpress_rich_text__WEBPACK_IMPORTED_MODULE_0__.registerFormatType)(FMT_BG, {
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Background Color', 'wmblocks'),
  tagName: 'span',
  className: 'wm-bc',
  // unique class — never conflicts with WP core
  attributes: {
    style: 'style'
  },
  edit({
    value,
    onChange,
    isActive
  }) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(BgColorBtn, {
      value: value,
      onChange: onChange,
      isActive: isActive
    });
  }
});

// 3. Text Gradient
(0,_wordpress_rich_text__WEBPACK_IMPORTED_MODULE_0__.registerFormatType)(FMT_GRADIENT, {
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Text Gradient', 'wmblocks'),
  tagName: 'span',
  className: 'wm-tg',
  // Unique class wrapper for gradient text
  attributes: {
    style: 'style'
  },
  edit({
    value,
    onChange,
    isActive
  }) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(WmGradientButton, {
      value: value,
      onChange: onChange,
      isActive: isActive
    });
  }
});
})();

/******/ })()
;
//# sourceMappingURL=index.js.map