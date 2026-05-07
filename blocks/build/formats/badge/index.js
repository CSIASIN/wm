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
  !*** ./src/formats/badge/index.js ***!
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
 * Bootstrap Badge — Inline Format
 *
 * Wraps selected text in a Bootstrap badge:
 *   <span class="badge wm-badge bg-primary">text</span>
 *
 * Available in: all rich-text blocks — h1–h6, p, li, button, quote, etc.
 * Uses addFilter(blocks.registerBlockType) to inject into allowedFormats
 * on blocks that have an explicit whitelist.
 *
 * Toolbar button opens a WP Modal with:
 *   - Badge style picker (14 Bootstrap variants, pill toggle, size toggle)
 *   - Live preview of the badge
 *   - Remove button
 */







const FORMAT_NAME = 'wmblocks/wm-badge';

// ── Badge variants ────────────────────────────────────────────────────────────
const VARIANTS = [{
  label: 'Primary',
  bg: 'bg-primary',
  text: 'text-white',
  preview: '#0d6efd'
}, {
  label: 'Secondary',
  bg: 'bg-secondary',
  text: 'text-white',
  preview: '#6c757d'
}, {
  label: 'Success',
  bg: 'bg-success',
  text: 'text-white',
  preview: '#198754'
}, {
  label: 'Danger',
  bg: 'bg-danger',
  text: 'text-white',
  preview: '#dc3545'
}, {
  label: 'Warning',
  bg: 'bg-warning',
  text: 'text-dark',
  preview: '#ffc107'
}, {
  label: 'Info',
  bg: 'bg-info',
  text: 'text-dark',
  preview: '#0dcaf0'
}, {
  label: 'Light',
  bg: 'bg-light',
  text: 'text-dark',
  preview: '#f8f9fa'
}, {
  label: 'Dark',
  bg: 'bg-dark',
  text: 'text-white',
  preview: '#212529'
}, {
  label: 'White',
  bg: 'bg-white',
  text: 'text-dark',
  preview: '#ffffff'
}, {
  label: 'Primary Subtle',
  bg: 'bg-primary-subtle',
  text: 'text-primary-emphasis',
  preview: '#cfe2ff'
}, {
  label: 'Secondary Subtle',
  bg: 'bg-secondary-subtle',
  text: 'text-secondary-emphasis',
  preview: '#e2e3e5'
}, {
  label: 'Success Subtle',
  bg: 'bg-success-subtle',
  text: 'text-success-emphasis',
  preview: '#d1e7dd'
}, {
  label: 'Danger Subtle',
  bg: 'bg-danger-subtle',
  text: 'text-danger-emphasis',
  preview: '#f8d7da'
}, {
  label: 'Warning Subtle',
  bg: 'bg-warning-subtle',
  text: 'text-warning-emphasis',
  preview: '#fff3cd'
}, {
  label: 'Info Subtle',
  bg: 'bg-info-subtle',
  text: 'text-info-emphasis',
  preview: '#cff4fc'
}];

// ── Get active badge class from selection ─────────────────────────────────────
function getActiveBadgeClass(value) {
  const active = ((0,_wordpress_rich_text__WEBPACK_IMPORTED_MODULE_0__.getActiveFormats)(value) || []).find(f => f.type === FORMAT_NAME);
  if (!active) return null;
  return active.attributes?.class || null;
}

// Build class string from options
function buildClass(bg, text, pill, sm) {
  return ['badge wm-badge', bg, text, pill ? 'rounded-pill' : '', sm ? 'badge-sm' : ''].filter(Boolean).join(' ');
}

// Parse options back from a class string
function parseClass(cls) {
  if (!cls) return {
    bg: 'bg-primary',
    text: 'text-white',
    pill: false,
    sm: false
  };
  const parts = cls.split(' ');
  const bg = parts.find(c => c.startsWith('bg-')) || 'bg-primary';
  const text = parts.find(c => c.startsWith('text-')) || 'text-white';
  const pill = parts.includes('rounded-pill');
  const sm = parts.includes('badge-sm');
  return {
    bg,
    text,
    pill,
    sm
  };
}

// ── Badge Modal ───────────────────────────────────────────────────────────────
function BadgeModal({
  activeClass,
  onApply,
  onClear,
  onClose
}) {
  const parsed = parseClass(activeClass);
  const [bg, setBg] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useState)(parsed.bg);
  const [pill, setPill] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useState)(parsed.pill);
  const [sm, setSm] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useState)(parsed.sm);

  // Derive text colour automatically from chosen bg variant
  const getTextForBg = bgVal => {
    const v = VARIANTS.find(x => x.bg === bgVal);
    return v ? v.text : 'text-white';
  };
  const previewClass = buildClass(bg, getTextForBg(bg), pill, sm);
  const previewColor = VARIANTS.find(v => v.bg === bg)?.preview || '#0d6efd';
  const handleApply = () => {
    onApply(buildClass(bg, getTextForBg(bg), pill, sm));
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Modal, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Insert Badge', 'wmblocks'),
    onRequestClose: onClose,
    className: "wm-badge-modal",
    size: "medium",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
      className: "wm-badge-modal__body",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
        className: "wm-badge-modal__preview",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {
          className: `${previewClass} wm-badge-modal__preview-badge`,
          children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Preview', 'wmblocks')
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("code", {
          className: "wm-badge-modal__preview-code",
          children: previewClass
        })]
      }), activeClass && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
        className: "wm-badge-modal__current",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {
          children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Active:', 'wmblocks')
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("code", {
          children: activeClass
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
          variant: "tertiary",
          isDestructive: true,
          size: "compact",
          onClick: onClear,
          children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('✕ Remove badge', 'wmblocks')
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TabPanel, {
        className: "wm-badge-modal__tabpanel",
        activeClass: "is-active",
        tabs: [{
          name: 'style',
          title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Style', 'wmblocks')
        }, {
          name: 'options',
          title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Options', 'wmblocks')
        }],
        children: tab => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
          className: "wm-badge-modal__tab-content",
          children: [tab.name === 'style' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
            className: "wm-badge-modal__variants",
            children: VARIANTS.map(({
              label,
              bg: vBg,
              text: vText,
              preview
            }) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("button", {
              title: label,
              className: `wm-badge-variant${bg === vBg ? ' is-selected' : ''}`,
              onClick: () => setBg(vBg),
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {
                className: `badge wm-badge ${vBg} ${vText}${pill ? ' rounded-pill' : ''}`,
                style: {
                  fontSize: 11,
                  letterSpacing: 0
                },
                children: label
              })
            }, vBg))
          }), tab.name === 'options' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
            className: "wm-badge-modal__options",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Pill badge (rounded-pill)', 'wmblocks'),
              checked: pill,
              onChange: setPill,
              help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Adds fully rounded corners — Bootstrap .rounded-pill class.', 'wmblocks')
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Small badge (badge-sm)', 'wmblocks'),
              checked: sm,
              onChange: setSm,
              help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Reduces font size and padding for a compact badge.', 'wmblocks')
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
              className: "wm-badge-modal__option-preview",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {
                className: previewClass,
                children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Preview', 'wmblocks')
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("code", {
                children: previewClass
              })]
            })]
          })]
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
        className: "wm-badge-modal__footer",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
          variant: "primary",
          onClick: handleApply,
          children: activeClass ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Update badge', 'wmblocks') : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Apply badge', 'wmblocks')
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
          variant: "secondary",
          onClick: onClose,
          children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Cancel', 'wmblocks')
        })]
      })]
    })
  });
}

// ── Toolbar button ────────────────────────────────────────────────────────────
function BadgeButton({
  value,
  onChange,
  isActive
}) {
  const [open, setOpen] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
  const activeClass = getActiveBadgeClass(value);
  const handleApply = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useCallback)(cls => {
    setOpen(false);
    onChange((0,_wordpress_rich_text__WEBPACK_IMPORTED_MODULE_0__.applyFormat)(value, {
      type: FORMAT_NAME,
      attributes: {
        class: cls
      }
    }));
  }, [value, onChange]);
  const handleClear = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useCallback)(() => {
    setOpen(false);
    onChange((0,_wordpress_rich_text__WEBPACK_IMPORTED_MODULE_0__.removeFormat)(value, FORMAT_NAME));
  }, [value, onChange]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichTextToolbarButton, {
      icon: () => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {
        className: "wm-badge-tool-icon",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {
          className: `badge wm-badge bg-primary text-white wm-badge-tool-icon__badge`,
          children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Badge', 'wmblocks')
        })
      }),
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Badge', 'wmblocks'),
      onClick: () => setOpen(v => !v),
      isActive: !!activeClass
    }), open && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(BadgeModal, {
      activeClass: activeClass,
      onApply: handleApply,
      onClear: handleClear,
      onClose: () => setOpen(false)
    })]
  });
}

// ── Inject into ALL rich-text blocks ──────────────────────────────────────────
function injectBadgeFormat(settings) {
  if (!settings || typeof settings !== 'object') return settings;
  if (Array.isArray(settings.allowedFormats)) {
    if (settings.allowedFormats.includes(FORMAT_NAME)) return settings;
    return {
      ...settings,
      allowedFormats: [...settings.allowedFormats, FORMAT_NAME]
    };
  }
  return settings;
}
(0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_4__.addFilter)('blocks.registerBlockType', 'wmblocks/inject-badge-format', injectBadgeFormat);

// ── Register format ───────────────────────────────────────────────────────────
(0,_wordpress_rich_text__WEBPACK_IMPORTED_MODULE_0__.registerFormatType)(FORMAT_NAME, {
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Badge', 'wmblocks'),
  tagName: 'span',
  className: 'wm-badge',
  attributes: {
    class: 'class'
  },
  edit({
    value,
    onChange,
    isActive
  }) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(BadgeButton, {
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