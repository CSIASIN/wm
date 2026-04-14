/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/position-element/edit.js"
/*!**************************************!*\
  !*** ./src/position-element/edit.js ***!
  \**************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Edit)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./editor.scss */ "./src/position-element/editor.scss");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);






const POSITION_TYPES = [{
  label: 'position-absolute',
  value: 'position-absolute'
}, {
  label: 'position-fixed',
  value: 'position-fixed'
}, {
  label: 'position-sticky',
  value: 'position-sticky'
}, {
  label: 'position-relative',
  value: 'position-relative'
}];
const EDGE_OPTS = prop => [{
  label: '— None —',
  value: ''
}, {
  label: `${prop}-0`,
  value: `${prop}-0`
}, {
  label: `${prop}-50`,
  value: `${prop}-50`
}, {
  label: `${prop}-100`,
  value: `${prop}-100`
}];
const TRANSLATE_OPTS = [{
  label: '— None —',
  value: ''
}, {
  label: 'translate-middle',
  value: 'translate-middle'
}, {
  label: 'translate-middle-x',
  value: 'translate-middle-x'
}, {
  label: 'translate-middle-y',
  value: 'translate-middle-y'
}];
const ZINDEX_OPTS = [{
  label: '— None —',
  value: ''
}, {
  label: 'z-0',
  value: 'z-0'
}, {
  label: 'z-1',
  value: 'z-1'
}, {
  label: 'z-2',
  value: 'z-2'
}, {
  label: 'z-3',
  value: 'z-3'
}, {
  label: 'z-n1',
  value: 'z-n1'
}];

// Preset positions — common Bootstrap patterns
const PRESETS = [{
  label: 'Top Start',
  top: 'top-0',
  start: 'start-0',
  end: '',
  bottom: '',
  translate: ''
}, {
  label: 'Top Center',
  top: 'top-0',
  start: 'start-50',
  end: '',
  bottom: '',
  translate: 'translate-middle-x'
}, {
  label: 'Top End',
  top: 'top-0',
  end: 'end-0',
  start: '',
  bottom: '',
  translate: ''
}, {
  label: 'Middle Start',
  top: 'top-50',
  start: 'start-0',
  end: '',
  bottom: '',
  translate: 'translate-middle-y'
}, {
  label: 'Center',
  top: 'top-50',
  start: 'start-50',
  end: '',
  bottom: '',
  translate: 'translate-middle'
}, {
  label: 'Middle End',
  top: 'top-50',
  end: 'end-0',
  start: '',
  bottom: '',
  translate: 'translate-middle-y'
}, {
  label: 'Bottom Start',
  bottom: 'bottom-0',
  start: 'start-0',
  top: '',
  end: '',
  translate: ''
}, {
  label: 'Bottom Center',
  bottom: 'bottom-0',
  start: 'start-50',
  top: '',
  end: '',
  translate: 'translate-middle-x'
}, {
  label: 'Bottom End',
  bottom: 'bottom-0',
  end: 'end-0',
  top: '',
  start: '',
  translate: ''
}];

// Content templates for common use cases
const TEMPLATES = {
  badge: [['core/html', {
    content: '<span class="badge text-bg-danger rounded-pill">99+</span>'
  }]],
  button: [['core/html', {
    content: '<button type="button" class="btn btn-sm btn-primary">Click</button>'
  }]],
  progress: [['wmblocks/progress', {}]],
  text: [['core/paragraph', {
    placeholder: 'Positioned content…'
  }]],
  image: [['wmblocks/bs-image', {}]]
};
const ALLOWED = ['core/paragraph', 'core/heading', 'core/html', 'core/image', 'wmblocks/buttons', 'core/group', 'wmblocks/bs-image', 'wmblocks/progress', 'wmblocks/flex-container', 'wmblocks/vstack', 'wmblocks/hstack'];
function Edit({
  attributes,
  setAttributes,
  clientId
}) {
  const {
    positionType,
    top,
    bottom,
    start,
    end,
    translate,
    zIndex,
    customClass
  } = attributes;
  const {
    parentClientId
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.useSelect)(select => {
    const store = select('core/block-editor');
    return {
      parentClientId: store.getBlockRootClientId(clientId)
    };
  }, [clientId]);
  const {
    removeBlock
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.useDispatch)('core/block-editor');
  const elementClass = [positionType, top, bottom, start, end, translate, zIndex, customClass].filter(Boolean).join(' ');
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps)({
    className: 'wmblocks-position-element'
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.BlockControls, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToolbarGroup, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToolbarButton, {
          icon: "trash",
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Remove Element', 'wmblocks'),
          onClick: () => removeBlock(clientId),
          isDestructive: true
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InspectorControls, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Quick Presets', 'wmblocks'),
        initialOpen: true,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
          style: {
            marginBottom: '8px',
            fontSize: '11px',
            color: '#555'
          },
          children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Click a position on the grid to apply:', 'wmblocks')
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
          style: {
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '4px',
            marginBottom: '12px'
          },
          children: PRESETS.map(preset => {
            const isActive = top === preset.top && bottom === (preset.bottom || '') && start === (preset.start || '') && end === (preset.end || '') && translate === preset.translate;
            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("button", {
              onClick: () => setAttributes({
                top: preset.top || '',
                bottom: preset.bottom || '',
                start: preset.start || '',
                end: preset.end || '',
                translate: preset.translate || ''
              }),
              style: {
                padding: '6px 4px',
                fontSize: '10px',
                cursor: 'pointer',
                border: isActive ? '2px solid #6f42c1' : '1px solid #ddd',
                borderRadius: '4px',
                background: isActive ? '#f8f5ff' : '#f8f9fa',
                color: isActive ? '#6f42c1' : '#555',
                fontWeight: isActive ? 600 : 400
              },
              children: preset.label
            }, preset.label);
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
          style: {
            fontSize: '11px',
            color: '#555',
            marginBottom: '6px'
          },
          children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Quick content:', 'wmblocks')
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
          style: {
            display: 'flex',
            gap: '4px',
            flexWrap: 'wrap'
          },
          children: Object.entries(TEMPLATES).map(([key, tpl]) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("button", {
            onMouseDown: e => {
              // Can't set template after mount — use HTML block as workaround
              e.preventDefault();
            },
            style: {
              fontSize: '11px',
              padding: '3px 8px',
              border: '1px solid #ddd',
              borderRadius: '3px',
              background: '#f8f9fa',
              cursor: 'default',
              color: '#888'
            },
            title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Add content via the block inserter inside this element', 'wmblocks'),
            children: key
          }, key))
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
          style: {
            fontSize: '10px',
            color: '#aaa',
            marginTop: '4px'
          },
          children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Use the block inserter inside this element to add buttons, badges, progress etc.', 'wmblocks')
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Position', 'wmblocks'),
        initialOpen: true,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Type', 'wmblocks'),
          value: positionType,
          options: POSITION_TYPES,
          onChange: v => setAttributes({
            positionType: v
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Top', 'wmblocks'),
          value: top,
          options: EDGE_OPTS('top'),
          onChange: v => setAttributes({
            top: v
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Bottom', 'wmblocks'),
          value: bottom,
          options: EDGE_OPTS('bottom'),
          onChange: v => setAttributes({
            bottom: v
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Start', 'wmblocks'),
          value: start,
          options: EDGE_OPTS('start'),
          onChange: v => setAttributes({
            start: v
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('End', 'wmblocks'),
          value: end,
          options: EDGE_OPTS('end'),
          onChange: v => setAttributes({
            end: v
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Translate', 'wmblocks'),
          value: translate,
          options: TRANSLATE_OPTS,
          onChange: v => setAttributes({
            translate: v
          }),
          help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('translate-middle centers the element on its anchor point.', 'wmblocks')
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Z-Index', 'wmblocks'),
          value: zIndex,
          options: ZINDEX_OPTS,
          onChange: v => setAttributes({
            zIndex: v
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Extra Classes', 'wmblocks'),
          value: customClass,
          onChange: v => setAttributes({
            customClass: v
          })
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
      ...blockProps,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
        style: {
          fontSize: '9px',
          fontFamily: 'monospace',
          color: '#6f42c1',
          marginBottom: '4px',
          background: '#f8f5ff',
          padding: '2px 5px',
          borderRadius: '3px',
          display: 'inline-block',
          maxWidth: '100%',
          wordBreak: 'break-all'
        },
        children: elementClass || 'position-absolute'
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InnerBlocks, {
        allowedBlocks: ALLOWED,
        template: [['core/html', {
          content: '<span class="badge text-bg-danger rounded-pill">99+</span>'
        }]],
        templateLock: false
      })]
    })]
  });
}

/***/ },

/***/ "./src/position-element/editor.scss"
/*!******************************************!*\
  !*** ./src/position-element/editor.scss ***!
  \******************************************/
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

/***/ "@wordpress/data"
/*!******************************!*\
  !*** external ["wp","data"] ***!
  \******************************/
(module) {

module.exports = window["wp"]["data"];

/***/ },

/***/ "@wordpress/i18n"
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
(module) {

module.exports = window["wp"]["i18n"];

/***/ },

/***/ "./src/position-element/block.json"
/*!*****************************************!*\
  !*** ./src/position-element/block.json ***!
  \*****************************************/
(module) {

module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"wmblocks/position-element","version":"0.1.0","title":"Position Element","category":"watermelon-blocks","icon":"location","description":"A positioned element inside a Position Container — place it at top/bottom/start/end with translate helpers.","example":{},"parent":["wmblocks/position-wrapper"],"supports":{"html":false,"reusable":false},"attributes":{"positionType":{"type":"string","default":"position-absolute"},"top":{"type":"string","default":""},"bottom":{"type":"string","default":""},"start":{"type":"string","default":""},"end":{"type":"string","default":""},"translate":{"type":"string","default":""},"zIndex":{"type":"string","default":""},"customClass":{"type":"string","default":""}},"textdomain":"wm","editorScript":"file:./index.js","editorStyle":"file:./editor.scss","style":"file:./style.scss","render":"file:./render.php"}');

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
  !*** ./src/position-element/index.js ***!
  \***************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./src/position-element/edit.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./block.json */ "./src/position-element/block.json");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);


//import './style.scss';



(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_3__.name, {
  edit: _edit__WEBPACK_IMPORTED_MODULE_2__["default"],
  save: () => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
    ..._wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps.save(),
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InnerBlocks.Content, {})
  })
});
})();

/******/ })()
;
//# sourceMappingURL=index.js.map