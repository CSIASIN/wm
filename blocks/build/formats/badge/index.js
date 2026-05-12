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
 * Wraps selected text in a Bootstrap badge with optional link.
 * Also supports a position-absolute indicator dot attached to selected text.
 *
 * Format 1: wmblocks/wm-badge
 *   <a href="..." class="badge wm-badge bg-primary text-white">text</a>   (with link)
 *   <span class="badge wm-badge bg-primary text-white">text</span>        (no link)
 *
 * Format 2: wmblocks/wm-badge-indicator
 *   <span class="position-relative wm-badge-host">text<span class="position-absolute top-0 start-100 translate-middle p-2 bg-danger border border-light rounded-circle wm-badge-indicator"></span></span>
 */







const FORMAT_BADGE = 'wmblocks/wm-badge';
const FORMAT_INDICATOR = 'wmblocks/wm-badge-indicator';

// ── Badge variants ────────────────────────────────────────────────────────────
const VARIANTS = [{
  label: 'Primary',
  bg: 'bg-primary',
  text: 'text-white'
}, {
  label: 'Secondary',
  bg: 'bg-secondary',
  text: 'text-white'
}, {
  label: 'Success',
  bg: 'bg-success',
  text: 'text-white'
}, {
  label: 'Danger',
  bg: 'bg-danger',
  text: 'text-white'
}, {
  label: 'Warning',
  bg: 'bg-warning',
  text: 'text-dark'
}, {
  label: 'Info',
  bg: 'bg-info',
  text: 'text-dark'
}, {
  label: 'Light',
  bg: 'bg-light',
  text: 'text-dark'
}, {
  label: 'Dark',
  bg: 'bg-dark',
  text: 'text-white'
}, {
  label: 'White',
  bg: 'bg-white',
  text: 'text-dark'
}, {
  label: 'Primary Subtle',
  bg: 'bg-primary-subtle',
  text: 'text-primary-emphasis'
}, {
  label: 'Secondary Subtle',
  bg: 'bg-secondary-subtle',
  text: 'text-secondary-emphasis'
}, {
  label: 'Success Subtle',
  bg: 'bg-success-subtle',
  text: 'text-success-emphasis'
}, {
  label: 'Danger Subtle',
  bg: 'bg-danger-subtle',
  text: 'text-danger-emphasis'
}, {
  label: 'Warning Subtle',
  bg: 'bg-warning-subtle',
  text: 'text-warning-emphasis'
}, {
  label: 'Info Subtle',
  bg: 'bg-info-subtle',
  text: 'text-info-emphasis'
}];

// Indicator colour options
const INDICATOR_COLORS = [{
  label: 'Danger (red)',
  value: 'bg-danger'
}, {
  label: 'Success (green)',
  value: 'bg-success'
}, {
  label: 'Warning',
  value: 'bg-warning'
}, {
  label: 'Primary',
  value: 'bg-primary'
}, {
  label: 'Secondary',
  value: 'bg-secondary'
}, {
  label: 'Info',
  value: 'bg-info'
}, {
  label: 'Dark',
  value: 'bg-dark'
}, {
  label: 'Light',
  value: 'bg-light'
}];

// Indicator position options
const INDICATOR_POSITIONS = [{
  label: 'Top right (default)',
  value: 'top-0 start-100 translate-middle'
}, {
  label: 'Top left',
  value: 'top-0 start-0 translate-middle'
}, {
  label: 'Bottom right',
  value: 'bottom-0 start-100 translate-middle'
}, {
  label: 'Bottom left',
  value: 'bottom-0 start-0 translate-middle'
}, {
  label: 'Top center',
  value: 'top-0 start-50 translate-middle'
}, {
  label: 'Bottom center',
  value: 'bottom-0 start-50 translate-middle'
}];

// ── Helpers ───────────────────────────────────────────────────────────────────
function getTextForBg(bgVal) {
  return VARIANTS.find(x => x.bg === bgVal)?.text || 'text-white';
}
function buildBadgeClass(bg, pill, sm) {
  return ['badge wm-badge', bg, getTextForBg(bg), pill ? 'rounded-pill' : '', sm ? 'badge-sm' : ''].filter(Boolean).join(' ');
}
function parseBadgeAttrs(attrs) {
  const cls = attrs?.class || '';
  const parts = cls.split(' ');
  return {
    bg: parts.find(c => c.startsWith('bg-')) || 'bg-primary',
    pill: parts.includes('rounded-pill'),
    sm: parts.includes('badge-sm'),
    href: attrs?.href || '',
    target: attrs?.target || ''
  };
}
function getActiveFormat(value, fmtName) {
  return ((0,_wordpress_rich_text__WEBPACK_IMPORTED_MODULE_0__.getActiveFormats)(value) || []).find(f => f.type === fmtName) || null;
}

// Build indicator host class string
function buildIndicatorHostClass(color, position, size) {
  const sizeClass = size === 'lg' ? 'p-3' : size === 'sm' ? 'p-1' : 'p-2';
  return `position-relative wm-badge-host|${color}|${position}|${sizeClass}`;
}
function parseIndicatorClass(cls) {
  if (!cls) return {
    color: 'bg-danger',
    position: 'top-0 start-100 translate-middle',
    size: 'p-2'
  };
  const parts = cls.split('|');
  return {
    color: parts[1] || 'bg-danger',
    position: parts[2] || 'top-0 start-100 translate-middle',
    size: parts[3] || 'p-2'
  };
}

// ── Badge Modal ───────────────────────────────────────────────────────────────
function BadgeModal({
  activeAttrs,
  indicatorAttrs,
  onApplyBadge,
  onClearBadge,
  onApplyIndicator,
  onClearIndicator,
  onClose
}) {
  const parsed = parseBadgeAttrs(activeAttrs);
  const indParsed = parseIndicatorClass(indicatorAttrs?.class);
  const [bg, setBg] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useState)(parsed.bg);
  const [pill, setPill] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useState)(parsed.pill);
  const [sm, setSm] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useState)(parsed.sm);
  const [href, setHref] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useState)(parsed.href);
  const [newTab, setNewTab] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useState)(parsed.target === '_blank');
  const [indColor, setIndColor] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useState)(indParsed.color);
  const [indPos, setIndPos] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useState)(indParsed.position);
  const [indSize, setIndSize] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useState)(indParsed.size);
  const badgeClass = buildBadgeClass(bg, pill, sm);
  const hasBadge = !!activeAttrs;
  const hasIndicator = !!indicatorAttrs;
  const handleApplyBadge = () => {
    const attrs = {
      class: badgeClass
    };
    if (href) {
      attrs.href = href;
      if (newTab) {
        attrs.target = '_blank';
        attrs.rel = 'noopener noreferrer';
      }
    }
    onApplyBadge(attrs, !!href);
  };
  const handleApplyIndicator = () => {
    onApplyIndicator({
      color: indColor,
      position: indPos,
      size: indSize
    });
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Modal, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Badge & Indicator', 'wmblocks'),
    onRequestClose: onClose,
    className: "wm-badge-modal",
    size: "medium",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
      className: "wm-badge-modal__body",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
        className: "wm-badge-modal__preview",
        children: [href ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("a", {
          href: "#",
          className: badgeClass,
          onClick: e => e.preventDefault(),
          style: {
            fontSize: 13
          },
          children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Preview', 'wmblocks')
        }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {
          className: badgeClass,
          style: {
            fontSize: 13
          },
          children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Preview', 'wmblocks')
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("code", {
          className: "wm-badge-modal__preview-code",
          children: [badgeClass, href ? ` → ${href}` : '']
        })]
      }), hasBadge && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
        className: "wm-badge-modal__current",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {
          children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Badge active', 'wmblocks')
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("code", {
          children: activeAttrs?.class
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
          variant: "tertiary",
          isDestructive: true,
          size: "compact",
          onClick: onClearBadge,
          children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('✕ Remove badge', 'wmblocks')
        })]
      }), hasIndicator && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
        className: "wm-badge-modal__current wm-badge-modal__current--indicator",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {
          children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Indicator active', 'wmblocks')
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
          variant: "tertiary",
          isDestructive: true,
          size: "compact",
          onClick: onClearIndicator,
          children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('✕ Remove indicator', 'wmblocks')
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
        }, {
          name: 'link',
          title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Link', 'wmblocks')
        }, {
          name: 'indicator',
          title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Indicator', 'wmblocks')
        }],
        children: tab => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
          className: "wm-badge-modal__tab-content",
          children: [tab.name === 'style' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
              className: "wm-badge-modal__variants",
              children: VARIANTS.map(({
                label,
                bg: vBg
              }) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("button", {
                title: label,
                className: `wm-badge-variant${bg === vBg ? ' is-selected' : ''}`,
                onClick: () => setBg(vBg),
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {
                  className: `badge wm-badge ${vBg} ${getTextForBg(vBg)}${pill ? ' rounded-pill' : ''}`,
                  style: {
                    fontSize: 11,
                    letterSpacing: 0
                  },
                  children: label
                })
              }, vBg))
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
              className: "wm-badge-modal__footer",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
                variant: "primary",
                onClick: handleApplyBadge,
                children: hasBadge ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Update badge', 'wmblocks') : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Apply badge', 'wmblocks')
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
                variant: "secondary",
                onClick: onClose,
                children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Cancel', 'wmblocks')
              })]
            })]
          }), tab.name === 'options' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
              className: "wm-badge-modal__options",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Pill badge (rounded-pill)', 'wmblocks'),
                checked: pill,
                onChange: setPill,
                help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Fully rounded corners.', 'wmblocks')
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Small badge (badge-sm)', 'wmblocks'),
                checked: sm,
                onChange: setSm,
                help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Compact size — smaller font and padding.', 'wmblocks')
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
                className: "wm-badge-modal__option-preview",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {
                  className: badgeClass,
                  children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Preview', 'wmblocks')
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("code", {
                  children: badgeClass
                })]
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
              className: "wm-badge-modal__footer",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
                variant: "primary",
                onClick: handleApplyBadge,
                children: hasBadge ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Update badge', 'wmblocks') : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Apply badge', 'wmblocks')
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
                variant: "secondary",
                onClick: onClose,
                children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Cancel', 'wmblocks')
              })]
            })]
          }), tab.name === 'link' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
              className: "wm-badge-modal__options",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('URL', 'wmblocks'),
                value: href,
                onChange: setHref,
                type: "url",
                placeholder: "https://",
                help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Wraps the badge in an <a> tag. Leave empty for a plain <span>.', 'wmblocks')
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Open in new tab', 'wmblocks'),
                checked: newTab,
                onChange: setNewTab,
                disabled: !href
              }), href && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
                className: "wm-badge-modal__option-preview",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("a", {
                  href: "#",
                  className: badgeClass,
                  onClick: e => e.preventDefault(),
                  children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Preview link', 'wmblocks')
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("code", {
                  children: `<a href="${href}" class="${badgeClass}">`
                })]
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
              className: "wm-badge-modal__footer",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
                variant: "primary",
                onClick: handleApplyBadge,
                children: hasBadge ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Update badge', 'wmblocks') : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Apply badge', 'wmblocks')
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
                variant: "secondary",
                onClick: onClose,
                children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Cancel', 'wmblocks')
              })]
            })]
          }), tab.name === 'indicator' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("p", {
              className: "wm-badge-modal__indicator-desc",
              children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Wraps the selected text in a position-relative container and adds an absolute-positioned dot indicator.', 'wmblocks')
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
              className: "wm-badge-modal__indicator-preview",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("span", {
                className: "position-relative d-inline-block",
                style: {
                  padding: '2px 4px'
                },
                children: [(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Text', 'wmblocks'), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {
                  className: `position-absolute ${indPos} ${indSize} ${indColor} border border-2 border-light rounded-circle wm-badge-indicator`
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("code", {
                className: "wm-badge-modal__preview-code",
                children: `position-relative → ${indColor} dot at ${INDICATOR_POSITIONS.find(p => p.value === indPos)?.label}`
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
              className: "wm-badge-modal__section-label",
              children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Indicator colour', 'wmblocks')
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
              className: "wm-badge-modal__indicator-colors",
              children: INDICATOR_COLORS.map(({
                label,
                value
              }) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("button", {
                title: label,
                className: `wm-badge-ind-color${indColor === value ? ' is-selected' : ''}`,
                onClick: () => setIndColor(value),
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {
                  className: `badge wm-badge ${value} rounded-circle p-2`,
                  children: "\xA0"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {
                  className: "wm-badge-ind-color__label",
                  children: label
                })]
              }, value))
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
              className: "wm-badge-modal__section-label",
              children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Position', 'wmblocks')
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
              className: "wm-badge-modal__indicator-positions",
              children: INDICATOR_POSITIONS.map(({
                label,
                value
              }) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("button", {
                className: `wm-badge-ind-pos${indPos === value ? ' is-selected' : ''}`,
                onClick: () => setIndPos(value),
                children: label
              }, value))
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
              className: "wm-badge-modal__section-label",
              children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Dot size', 'wmblocks')
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
              className: "wm-badge-modal__indicator-sizes",
              children: [{
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Small', 'wmblocks'),
                value: 'p-1'
              }, {
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Medium', 'wmblocks'),
                value: 'p-2'
              }, {
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Large', 'wmblocks'),
                value: 'p-3'
              }].map(({
                label,
                value
              }) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("button", {
                className: `wm-badge-ind-size${indSize === value ? ' is-selected' : ''}`,
                onClick: () => setIndSize(value),
                children: label
              }, value))
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
              className: "wm-badge-modal__footer",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
                variant: "primary",
                onClick: handleApplyIndicator,
                children: hasIndicator ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Update indicator', 'wmblocks') : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Apply indicator', 'wmblocks')
              }), hasIndicator && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
                variant: "secondary",
                isDestructive: true,
                onClick: onClearIndicator,
                children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Remove indicator', 'wmblocks')
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
                variant: "secondary",
                onClick: onClose,
                children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Cancel', 'wmblocks')
              })]
            })]
          })]
        })
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
  const activeBadgeFmt = getActiveFormat(value, FORMAT_BADGE);
  const activeIndicatorFmt = getActiveFormat(value, FORMAT_INDICATOR);
  const isAnyActive = !!activeBadgeFmt || !!activeIndicatorFmt;
  const handleApplyBadge = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useCallback)((attrs, isLink) => {
    setOpen(false);
    // Remove existing badge/indicator first, then re-apply
    let v = (0,_wordpress_rich_text__WEBPACK_IMPORTED_MODULE_0__.removeFormat)(value, FORMAT_BADGE);
    onChange((0,_wordpress_rich_text__WEBPACK_IMPORTED_MODULE_0__.applyFormat)(v, {
      type: FORMAT_BADGE,
      attributes: attrs
    }));
  }, [value, onChange]);
  const handleClearBadge = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useCallback)(() => {
    setOpen(false);
    onChange((0,_wordpress_rich_text__WEBPACK_IMPORTED_MODULE_0__.removeFormat)(value, FORMAT_BADGE));
  }, [value, onChange]);
  const handleApplyIndicator = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useCallback)(({
    color,
    position,
    size
  }) => {
    setOpen(false);
    let v = (0,_wordpress_rich_text__WEBPACK_IMPORTED_MODULE_0__.removeFormat)(value, FORMAT_INDICATOR);
    onChange((0,_wordpress_rich_text__WEBPACK_IMPORTED_MODULE_0__.applyFormat)(v, {
      type: FORMAT_INDICATOR,
      attributes: {
        'data-ind-color': color,
        'data-ind-pos': position,
        'data-ind-size': size,
        'class': 'position-relative wm-badge-host'
      }
    }));
  }, [value, onChange]);
  const handleClearIndicator = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useCallback)(() => {
    setOpen(false);
    onChange((0,_wordpress_rich_text__WEBPACK_IMPORTED_MODULE_0__.removeFormat)(value, FORMAT_INDICATOR));
  }, [value, onChange]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichTextToolbarButton, {
      icon: () => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {
        className: "wm-badge-tool-icon",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {
          className: "badge wm-badge bg-primary text-white wm-badge-tool-icon__badge",
          children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Badge', 'wmblocks')
        })
      }),
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Badge / Indicator', 'wmblocks'),
      onClick: () => setOpen(v => !v),
      isActive: isAnyActive
    }), open && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(BadgeModal, {
      activeAttrs: activeBadgeFmt?.attributes || null,
      indicatorAttrs: activeIndicatorFmt?.attributes || null,
      onApplyBadge: handleApplyBadge,
      onClearBadge: handleClearBadge,
      onApplyIndicator: handleApplyIndicator,
      onClearIndicator: handleClearIndicator,
      onClose: () => setOpen(false)
    })]
  });
}

// ── Inject into ALL rich-text blocks ──────────────────────────────────────────
function injectBadgeFormats(settings) {
  if (!settings || typeof settings !== 'object') return settings;
  if (Array.isArray(settings.allowedFormats)) {
    const existing = settings.allowedFormats;
    const toAdd = [FORMAT_BADGE, FORMAT_INDICATOR].filter(f => !existing.includes(f));
    if (!toAdd.length) return settings;
    return {
      ...settings,
      allowedFormats: [...existing, ...toAdd]
    };
  }
  return settings;
}
(0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_4__.addFilter)('blocks.registerBlockType', 'wmblocks/inject-badge-formats', injectBadgeFormats);

// ── Register BADGE format ─────────────────────────────────────────────────────
// tagName is 'a' when a link is set, 'span' otherwise.
// We register as 'span' and rely on the editor saving the correct tag.
// On the frontend the PHP render filter (or theme) can upgrade span→a if needed.
// The cleaner approach: register with className only and let PHP handle the tag.
(0,_wordpress_rich_text__WEBPACK_IMPORTED_MODULE_0__.registerFormatType)(FORMAT_BADGE, {
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Badge', 'wmblocks'),
  tagName: 'span',
  className: 'wm-badge',
  attributes: {
    class: 'class',
    href: 'href',
    target: 'target',
    rel: 'rel'
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

// ── Register INDICATOR format ─────────────────────────────────────────────────
(0,_wordpress_rich_text__WEBPACK_IMPORTED_MODULE_0__.registerFormatType)(FORMAT_INDICATOR, {
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Badge Indicator', 'wmblocks'),
  tagName: 'span',
  className: 'wm-badge-host',
  attributes: {
    class: 'class',
    'data-ind-color': 'data-ind-color',
    'data-ind-pos': 'data-ind-pos',
    'data-ind-size': 'data-ind-size'
  },
  edit({
    value,
    onChange,
    isActive
  }) {
    // BadgeButton handles both formats — no separate edit needed for indicator
    return null;
  }
});
})();

/******/ })()
;
//# sourceMappingURL=index.js.map