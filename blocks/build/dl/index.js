/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/dl/edit.js"
/*!************************!*\
  !*** ./src/dl/edit.js ***!
  \************************/
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
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./editor.scss */ "./src/dl/editor.scss");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);





const DT_COL_OPTS = [{
  label: 'col-sm-2',
  value: 'col-sm-2'
}, {
  label: 'col-sm-3',
  value: 'col-sm-3'
}, {
  label: 'col-sm-4',
  value: 'col-sm-4'
}, {
  label: 'col-sm-5',
  value: 'col-sm-5'
}, {
  label: 'col-md-2',
  value: 'col-md-2'
}, {
  label: 'col-md-3',
  value: 'col-md-3'
}, {
  label: 'col-md-4',
  value: 'col-md-4'
}];
const DD_COL_OPTS = [{
  label: 'col-sm-10',
  value: 'col-sm-10'
}, {
  label: 'col-sm-9',
  value: 'col-sm-9'
}, {
  label: 'col-sm-8',
  value: 'col-sm-8'
}, {
  label: 'col-sm-7',
  value: 'col-sm-7'
}, {
  label: 'col-md-10',
  value: 'col-md-10'
}, {
  label: 'col-md-9',
  value: 'col-md-9'
}, {
  label: 'col-md-8',
  value: 'col-md-8'
}];
function Edit({
  attributes,
  setAttributes
}) {
  const {
    aligned,
    dtCol,
    ddCol,
    items,
    customClass
  } = attributes;
  const updateItem = (i, key, val) => setAttributes({
    items: items.map((item, idx) => idx === i ? {
      ...item,
      [key]: val
    } : item)
  });
  const addItem = () => setAttributes({
    items: [...items, {
      term: 'New term',
      desc: 'New description'
    }]
  });
  const removeItem = i => setAttributes({
    items: items.filter((_, idx) => idx !== i)
  });
  const moveItem = (i, dir) => {
    const arr = [...items];
    const t = i + dir;
    if (t < 0 || t >= arr.length) return;
    [arr[i], arr[t]] = [arr[t], arr[i]];
    setAttributes({
      items: arr
    });
  };
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps)({
    className: 'wmblocks-bs-dl-wrapper'
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InspectorControls, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Description List', 'wmblocks'),
        initialOpen: true,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Horizontal / Aligned', 'wmblocks'),
          checked: !!aligned,
          onChange: v => setAttributes({
            aligned: v
          }),
          help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Uses Bootstrap row layout to align dt and dd side by side.', 'wmblocks')
        }), aligned && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Term column (dt)', 'wmblocks'),
            value: dtCol,
            options: DT_COL_OPTS,
            onChange: v => setAttributes({
              dtCol: v
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Description column (dd)', 'wmblocks'),
            value: ddCol,
            options: DD_COL_OPTS,
            onChange: v => setAttributes({
              ddCol: v
            })
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Extra Classes', 'wmblocks'),
          value: customClass,
          onChange: v => setAttributes({
            customClass: v
          })
        })]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
      ...blockProps,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
        style: {
          display: 'flex',
          alignItems: 'center',
          gap: 8,
          marginBottom: 10
        },
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("code", {
          style: {
            fontSize: 10,
            background: '#f8f9fa',
            border: '1px solid #dee2e6',
            padding: '2px 7px',
            borderRadius: 3,
            color: '#6c757d'
          },
          children: aligned ? `row > dt.${dtCol} + dd.${ddCol}` : 'dl (stacked)'
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("button", {
          onMouseDown: e => {
            e.preventDefault();
            setAttributes({
              aligned: !aligned
            });
          },
          style: {
            fontSize: 11,
            padding: '2px 8px',
            border: '1px solid #007cba',
            borderRadius: 3,
            background: aligned ? '#007cba' : '#fff',
            color: aligned ? '#fff' : '#007cba',
            cursor: 'pointer'
          },
          children: aligned ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('⇔ Horizontal', 'wmblocks') : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('↕ Stacked', 'wmblocks')
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("dl", {
        className: customClass || undefined,
        children: items.map((item, i) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
          className: aligned ? 'row' : undefined,
          style: {
            marginBottom: aligned ? 4 : 8,
            position: 'relative'
          },
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("dt", {
            className: aligned ? dtCol : undefined,
            contentEditable: true,
            suppressContentEditableWarning: true,
            onInput: e => updateItem(i, 'term', e.currentTarget.textContent),
            onKeyDown: e => e.key === 'Enter' && e.preventDefault(),
            style: {
              outline: 'none',
              cursor: 'text',
              fontWeight: 600
            },
            children: item.term
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("dd", {
            className: aligned ? ddCol : undefined,
            contentEditable: true,
            suppressContentEditableWarning: true,
            onInput: e => updateItem(i, 'desc', e.currentTarget.textContent),
            onKeyDown: e => e.key === 'Enter' && e.preventDefault(),
            style: {
              outline: 'none',
              cursor: 'text',
              marginBottom: 0,
              color: '#555'
            },
            children: item.desc
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
            className: "wmblocks-dl-row-actions",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("button", {
              onMouseDown: e => {
                e.preventDefault();
                moveItem(i, -1);
              },
              disabled: i === 0,
              style: {
                fontSize: 10,
                padding: '1px 4px',
                border: '1px solid #ddd',
                borderRadius: 2,
                background: '#f8f9fa',
                cursor: i === 0 ? 'not-allowed' : 'pointer',
                opacity: i === 0 ? 0.3 : 1
              },
              children: "\u2191"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("button", {
              onMouseDown: e => {
                e.preventDefault();
                moveItem(i, 1);
              },
              disabled: i === items.length - 1,
              style: {
                fontSize: 10,
                padding: '1px 4px',
                border: '1px solid #ddd',
                borderRadius: 2,
                background: '#f8f9fa',
                cursor: i === items.length - 1 ? 'not-allowed' : 'pointer',
                opacity: i === items.length - 1 ? 0.3 : 1
              },
              children: "\u2193"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("button", {
              onMouseDown: e => {
                e.preventDefault();
                removeItem(i);
              },
              style: {
                fontSize: 10,
                padding: '1px 4px',
                border: '1px solid #fcc',
                borderRadius: 2,
                background: '#fff5f5',
                color: '#c00',
                cursor: 'pointer'
              },
              children: "\u2715"
            })]
          })]
        }, i))
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("button", {
        onMouseDown: e => {
          e.preventDefault();
          addItem();
        },
        style: {
          marginTop: 6,
          fontSize: 12,
          padding: '4px 12px',
          border: '1px dashed #007cba',
          borderRadius: 4,
          background: 'transparent',
          color: '#007cba',
          cursor: 'pointer'
        },
        children: ["+ ", (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Add term / description pair', 'wmblocks')]
      })]
    })]
  });
}

/***/ },

/***/ "./src/dl/editor.scss"
/*!****************************!*\
  !*** ./src/dl/editor.scss ***!
  \****************************/
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

/***/ "./src/dl/block.json"
/*!***************************!*\
  !*** ./src/dl/block.json ***!
  \***************************/
(module) {

module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"wmblocks/dl","version":"0.1.0","title":"Description List","category":"watermelon-blocks","icon":"editor-ul","description":"Bootstrap description list — aligned dt/dd pairs with optional column grid layout.","example":{},"supports":{"html":false,"anchor":true},"attributes":{"aligned":{"type":"boolean","default":true},"dtCol":{"type":"string","default":"col-sm-3"},"ddCol":{"type":"string","default":"col-sm-9"},"items":{"type":"array","default":[{"term":"Full Name","desc":"John Doe"},{"term":"Job Title","desc":"Lead Developer"},{"term":"Location","desc":"New York, USA"}],"items":{"type":"object"}},"customClass":{"type":"string","default":""}},"textdomain":"wm","editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./style-index.css","render":"file:./render.php"}');

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
/*!*************************!*\
  !*** ./src/dl/index.js ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./src/dl/edit.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./block.json */ "./src/dl/block.json");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);


//import './style.scss';



(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_3__.name, {
  edit: _edit__WEBPACK_IMPORTED_MODULE_2__["default"],
  save: () => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
    ..._wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps.save()
  })
});
})();

/******/ })()
;
//# sourceMappingURL=index.js.map