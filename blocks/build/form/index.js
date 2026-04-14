/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/form/edit.js"
/*!**************************!*\
  !*** ./src/form/edit.js ***!
  \**************************/
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
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./editor.scss */ "./src/form/editor.scss");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);






const FIELD_BLOCKS = ['wmblocks/form-field', 'wmblocks/form-select', 'wmblocks/form-textarea', 'wmblocks/form-check', 'wmblocks/form-range', 'wmblocks/form-input-group', 'wmblocks/form-floating', 'wmblocks/form-submit'];
const TEMPLATE = [['wmblocks/form-field', {
  fieldType: 'text',
  label: 'Full Name',
  name: 'name',
  required: true,
  placeholder: 'John Doe'
}], ['wmblocks/form-field', {
  fieldType: 'email',
  label: 'Email address',
  name: 'email',
  required: true,
  placeholder: 'name@example.com'
}], ['wmblocks/form-textarea', {
  label: 'Message',
  name: 'message',
  required: false,
  placeholder: 'Your message…'
}], ['wmblocks/form-check', {
  checkType: 'checkbox',
  label: 'I agree to the terms and conditions',
  name: 'agree'
}], ['wmblocks/form-submit', {
  label: 'Send Message',
  variant: 'btn-primary'
}]];
const LAYOUT_OPTS = [{
  label: 'Stacked (vertical)',
  value: 'stacked'
}, {
  label: 'Inline',
  value: 'inline'
}, {
  label: 'Grid (row/col)',
  value: 'grid'
}];
function Edit({
  attributes,
  setAttributes,
  clientId
}) {
  const {
    formAction,
    formMethod,
    formLayout,
    validated,
    novalidate,
    autocomplete,
    successMessage,
    customClass
  } = attributes;
  const innerBlocks = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.useSelect)(s => s('core/block-editor').getBlocks(clientId), [clientId]);
  const {
    insertBlock
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.useDispatch)('core/block-editor');
  const {
    createBlock
  } = wp.blocks;
  const addField = name => insertBlock(createBlock(name, {}), undefined, clientId);
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps)({
    className: 'wmblocks-bs-form-wrapper'
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.BlockControls, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToolbarGroup, {
        children: [[(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('+ Text', 'wmblocks'), 'wmblocks/form-field', {
          fieldType: 'text'
        }], [(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('+ Email', 'wmblocks'), 'wmblocks/form-field', {
          fieldType: 'email'
        }], [(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('+ Select', 'wmblocks'), 'wmblocks/form-select', {}], [(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('+ Textarea', 'wmblocks'), 'wmblocks/form-textarea', {}], [(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('+ Check', 'wmblocks'), 'wmblocks/form-check', {}], [(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('+ Range', 'wmblocks'), 'wmblocks/form-range', {}], [(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('+ Group', 'wmblocks'), 'wmblocks/form-input-group', {}], [(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('+ Float', 'wmblocks'), 'wmblocks/form-floating', {}]].map(([label, blockName, attrs]) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToolbarButton, {
          label: label,
          text: label,
          onClick: () => insertBlock(createBlock(blockName, attrs), undefined, clientId)
        }, label))
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InspectorControls, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Form Settings', 'wmblocks'),
        initialOpen: true,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Action URL', 'wmblocks'),
          value: formAction,
          onChange: v => setAttributes({
            formAction: v
          }),
          placeholder: "https://\u2026",
          help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Leave empty to handle with JS/plugin.', 'wmblocks')
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Method', 'wmblocks'),
          value: formMethod,
          options: [{
            label: 'POST',
            value: 'post'
          }, {
            label: 'GET',
            value: 'get'
          }],
          onChange: v => setAttributes({
            formMethod: v
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Layout', 'wmblocks'),
          value: formLayout,
          options: LAYOUT_OPTS,
          onChange: v => setAttributes({
            formLayout: v
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Autocomplete', 'wmblocks'),
          value: autocomplete,
          options: [{
            label: 'On',
            value: 'on'
          }, {
            label: 'Off',
            value: 'off'
          }],
          onChange: v => setAttributes({
            autocomplete: v
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('HTML5 Validation', 'wmblocks'),
          checked: !novalidate,
          onChange: v => setAttributes({
            novalidate: !v
          }),
          help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Enable browser native validation UI.', 'wmblocks')
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Bootstrap Validation Styles', 'wmblocks'),
          checked: !!validated,
          onChange: v => setAttributes({
            validated: v
          }),
          help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Adds .was-validated class for Bootstrap valid/invalid feedback.', 'wmblocks')
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Extra Classes', 'wmblocks'),
          value: customClass,
          onChange: v => setAttributes({
            customClass: v
          })
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Success Message', 'wmblocks'),
        initialOpen: false,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Message text', 'wmblocks'),
          value: successMessage,
          onChange: v => setAttributes({
            successMessage: v
          }),
          help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Shown via JS after successful AJAX submit.', 'wmblocks')
        })
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
      ...blockProps,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
        style: {
          display: 'flex',
          alignItems: 'center',
          gap: 8,
          marginBottom: 10,
          padding: '6px 10px',
          background: '#f0f6fc',
          borderRadius: 4,
          fontSize: 11,
          color: '#007cba',
          fontWeight: 600
        },
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("span", {
          children: ["\uD83D\uDCCB ", (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Bootstrap Form', 'wmblocks')]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("span", {
          style: {
            fontWeight: 400,
            color: '#555'
          },
          children: [formMethod.toUpperCase(), formAction ? ' → ' + formAction : ' (no action)']
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("span", {
          style: {
            marginLeft: 'auto',
            background: '#007cba',
            color: '#fff',
            borderRadius: 10,
            padding: '1px 7px',
            fontSize: 10
          },
          children: [innerBlocks.length, " ", (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('fields', 'wmblocks')]
        })]
      }), formLayout !== 'stacked' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
        style: {
          fontSize: 10,
          color: '#6c757d',
          marginBottom: 6,
          fontStyle: 'italic'
        },
        children: formLayout === 'inline' ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Inline layout — fields flow horizontally on larger screens', 'wmblocks') : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Grid layout — use col classes on each field', 'wmblocks')
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("form", {
        className: [formLayout === 'inline' ? 'row row-cols-lg-auto g-3 align-items-center' : formLayout === 'grid' ? 'row g-3' : '', validated ? 'was-validated' : '', customClass].filter(Boolean).join(' '),
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InnerBlocks, {
          allowedBlocks: FIELD_BLOCKS,
          template: TEMPLATE,
          templateLock: false,
          renderAppender: false
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
        style: {
          display: 'flex',
          gap: 4,
          marginTop: 8,
          flexWrap: 'wrap'
        },
        children: [[(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('+ Text field', 'wmblocks'), 'wmblocks/form-field', {
          fieldType: 'text'
        }], [(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('+ Email', 'wmblocks'), 'wmblocks/form-field', {
          fieldType: 'email'
        }], [(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('+ Password', 'wmblocks'), 'wmblocks/form-field', {
          fieldType: 'password'
        }], [(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('+ Select', 'wmblocks'), 'wmblocks/form-select', {}], [(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('+ Textarea', 'wmblocks'), 'wmblocks/form-textarea', {}], [(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('+ Checkbox', 'wmblocks'), 'wmblocks/form-check', {
          checkType: 'checkbox'
        }], [(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('+ Radio', 'wmblocks'), 'wmblocks/form-check', {
          checkType: 'radio'
        }], [(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('+ Switch', 'wmblocks'), 'wmblocks/form-check', {
          checkType: 'switch'
        }], [(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('+ Range', 'wmblocks'), 'wmblocks/form-range', {}], [(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('+ Input Group', 'wmblocks'), 'wmblocks/form-input-group', {}], [(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('+ Floating', 'wmblocks'), 'wmblocks/form-floating', {}], [(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('+ Submit', 'wmblocks'), 'wmblocks/form-submit', {}]].map(([label, bName, attrs]) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("button", {
          onMouseDown: e => {
            e.preventDefault();
            insertBlock(createBlock(bName, attrs), undefined, clientId);
          },
          style: {
            fontSize: 11,
            padding: '3px 8px',
            border: '1px dashed #007cba',
            borderRadius: 3,
            background: 'transparent',
            color: '#007cba',
            cursor: 'pointer'
          },
          children: label
        }, label))
      })]
    })]
  });
}

/***/ },

/***/ "./src/form/editor.scss"
/*!******************************!*\
  !*** ./src/form/editor.scss ***!
  \******************************/
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

/***/ "./src/form/block.json"
/*!*****************************!*\
  !*** ./src/form/block.json ***!
  \*****************************/
(module) {

module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"wmblocks/form","version":"0.1.0","title":"Bootstrap Form","category":"watermelon-blocks","icon":"feedback","description":"Bootstrap form container with configurable action, method, layout and validation.","supports":{"html":false,"anchor":true},"attributes":{"formAction":{"type":"string","default":""},"formMethod":{"type":"string","default":"post"},"formLayout":{"type":"string","default":"stacked"},"validated":{"type":"boolean","default":false},"novalidate":{"type":"boolean","default":true},"autocomplete":{"type":"string","default":"on"},"successMessage":{"type":"string","default":"Thank you! Your message has been sent."},"customClass":{"type":"string","default":""}},"providesContext":{"wmblocks/formLayout":"formLayout"},"textdomain":"wm","editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./style-index.css","render":"file:./render.php"}');

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
/*!***************************!*\
  !*** ./src/form/index.js ***!
  \***************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./src/form/edit.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./block.json */ "./src/form/block.json");
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