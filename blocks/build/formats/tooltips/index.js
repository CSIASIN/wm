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
/*!***************************************!*\
  !*** ./src/formats/tooltips/index.js ***!
  \***************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_rich_text__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/rich-text */ "@wordpress/rich-text");
/* harmony import */ var _wordpress_rich_text__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_rich_text__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);






const FORMAT_NAME = 'wmblocks/tooltip';
const FORMAT_TAG = 'span';

// Editor highlight style
const style = document.createElement('style');
style.textContent = '.wm-tooltip { border-bottom: 2px dotted #0d6efd; cursor: help; }';
document.head.appendChild(style);
(0,_wordpress_rich_text__WEBPACK_IMPORTED_MODULE_1__.registerFormatType)(FORMAT_NAME, {
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Tooltip', 'wmblocks'),
  tagName: FORMAT_TAG,
  className: 'wm-tooltip',
  attributes: {
    'data-bs-toggle': 'data-bs-toggle',
    'data-bs-title': 'data-bs-title',
    'data-bs-placement': 'data-bs-placement',
    title: 'title'
  },
  edit({
    isActive,
    value,
    onChange,
    contentRef
  }) {
    const [isPopoverVisible, setPopoverVisible] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useState)(false);
    const [tooltipText, setTooltipText] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useState)('');
    const [placement, setPlacement] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useState)('top');
    const activeFormat = (0,_wordpress_rich_text__WEBPACK_IMPORTED_MODULE_1__.getActiveFormat)(value, FORMAT_NAME);
    const existingText = activeFormat?.attributes?.['data-bs-title'] || '';
    const existingPlacement = activeFormat?.attributes?.['data-bs-placement'] || 'top';
    const handleButtonClick = () => {
      if (isActive) {
        setTooltipText(existingText);
        setPlacement(existingPlacement);
      } else {
        setTooltipText('');
        setPlacement('top');
      }
      setPopoverVisible(!isPopoverVisible);
    };
    const handleApply = () => {
      if (!tooltipText.trim()) return;
      onChange((0,_wordpress_rich_text__WEBPACK_IMPORTED_MODULE_1__.applyFormat)(value, {
        type: FORMAT_NAME,
        attributes: {
          'data-bs-toggle': 'tooltip',
          'data-bs-title': tooltipText.trim(),
          'data-bs-placement': placement,
          title: tooltipText.trim()
        }
      }));
      setPopoverVisible(false);
    };
    const handleRemove = () => {
      onChange((0,_wordpress_rich_text__WEBPACK_IMPORTED_MODULE_1__.removeFormat)(value, FORMAT_NAME));
      setPopoverVisible(false);
    };
    const TooltipIcon = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("svg", {
      viewBox: "0 0 24 24",
      width: "20",
      height: "20",
      xmlns: "http://www.w3.org/2000/svg",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("circle", {
        cx: "12",
        cy: "12",
        r: "10",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("text", {
        x: "12",
        y: "17",
        textAnchor: "middle",
        fontSize: "13",
        fontWeight: "bold",
        fill: "currentColor",
        children: "?"
      })]
    });
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichTextToolbarButton, {
        icon: TooltipIcon,
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Tooltip', 'wmblocks'),
        onClick: handleButtonClick,
        isActive: isActive
      }), isPopoverVisible && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Popover, {
        placement: "bottom-start",
        onClose: () => setPopoverVisible(false),
        anchor: contentRef?.current,
        focusOnMount: "firstElement",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
          style: {
            padding: '16px',
            minWidth: '280px'
          },
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
            style: {
              fontSize: '12px',
              fontWeight: 600,
              color: '#1e1e1e',
              marginBottom: '12px',
              display: 'flex',
              alignItems: 'center',
              gap: '6px'
            },
            children: [TooltipIcon, isActive ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Edit Tooltip', 'wmblocks') : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Add Tooltip', 'wmblocks')]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Tooltip Text', 'wmblocks'),
            value: tooltipText,
            onChange: setTooltipText,
            placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Enter tooltip content…', 'wmblocks'),
            help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Text shown when hovering over the selection.', 'wmblocks'),
            onKeyDown: e => {
              if (e.key === 'Enter') handleApply();
              if (e.key === 'Escape') setPopoverVisible(false);
            }
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Placement', 'wmblocks'),
            value: placement,
            options: [{
              label: 'Top',
              value: 'top'
            }, {
              label: 'Bottom',
              value: 'bottom'
            }, {
              label: 'Left',
              value: 'left'
            }, {
              label: 'Right',
              value: 'right'
            }],
            onChange: setPlacement
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Flex, {
            gap: 2,
            style: {
              marginTop: '8px'
            },
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.FlexItem, {
              isBlock: true,
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
                variant: "primary",
                onClick: handleApply,
                disabled: !tooltipText.trim(),
                style: {
                  width: '100%',
                  justifyContent: 'center'
                },
                children: isActive ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Update', 'wmblocks') : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Apply', 'wmblocks')
              })
            }), isActive && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.FlexItem, {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
                variant: "tertiary",
                isDestructive: true,
                onClick: handleRemove,
                children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Remove', 'wmblocks')
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.FlexItem, {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
                variant: "tertiary",
                onClick: () => setPopoverVisible(false),
                children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Cancel', 'wmblocks')
              })
            })]
          })]
        })
      })]
    });
  }
});
})();

/******/ })()
;
//# sourceMappingURL=index.js.map