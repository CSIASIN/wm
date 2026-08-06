/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./controls/controlanimate.js"
/*!************************************!*\
  !*** ./controls/controlanimate.js ***!
  \************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/hooks */ "@wordpress/hooks");
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);






// 🛑 THE FIX: Check if we have already registered these filters!

if (!window.wmAnimationFiltersAdded) {
  /**
   * 1. Globally Register Attributes in JavaScript
   * This ensures the Editor knows these attributes exist for ALL wmblocks.
   */
  function addAnimationAttributes(settings, name) {
    // Only apply to wmblocks
    if (!name.startsWith('wmblocks/')) {
      return settings;
    }
    return {
      ...settings,
      attributes: {
        ...settings.attributes,
        wmAnim: {
          type: 'string',
          default: 'none'
        },
        wmDelay: {
          type: 'string',
          default: '0'
        },
        wmDuration: {
          type: 'string',
          default: '400'
        },
        wmEasing: {
          type: 'string',
          default: 'ease'
        },
        wmMirror: {
          type: 'boolean',
          default: false
        },
        wmOnce: {
          type: 'boolean',
          default: true
        }
      }
    };
  }
  (0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__.addFilter)('blocks.registerBlockType', 'wmblocks/add-animation-attributes', addAnimationAttributes);

  /**
   * 2. Globally inject the InspectorControls (Sidebar UI)
   */
  const withGlobalControls = (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_3__.createHigherOrderComponent)(BlockEdit => {
    return props => {
      // Only target your specific namespace
      if (!props.name || !props.name.startsWith('wmblocks/')) {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(BlockEdit, {
          ...props
        });
      }
      const {
        attributes,
        setAttributes
      } = props;
      const {
        wmAnim,
        wmDelay,
        wmDuration,
        wmEasing,
        wmMirror,
        wmOnce,
        // Scroll
        wmHoverAnim,
        wmHoverDuration,
        wmHoverEasing,
        wmHoverTrigger,
        wmIsHoverParent // Hover } = attributes;
      } = attributes;
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(BlockEdit, {
          ...props
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InspectorControls, {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
            title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Animations', 'wmblocks'),
            initialOpen: false,
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("h4", {
              style: {
                margin: '16px 0 8px',
                textTransform: 'uppercase',
                fontSize: '11px',
                color: '#757575'
              },
              children: "On Scroll"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Animation Type', 'wmblocks'),
              value: wmAnim || 'none',
              options: [{
                label: 'None',
                value: 'none'
              }, {
                label: '-- FADE --',
                value: 'none',
                disabled: true
              }, {
                label: 'Fade',
                value: 'fade'
              }, {
                label: 'Fade Up',
                value: 'fade-up'
              }, {
                label: 'Fade Down',
                value: 'fade-down'
              }, {
                label: 'Fade Left',
                value: 'fade-left'
              }, {
                label: 'Fade Right',
                value: 'fade-right'
              }, {
                label: '-- ZOOM --',
                value: 'none',
                disabled: true
              }, {
                label: 'Zoom In',
                value: 'zoom-in'
              }, {
                label: 'Zoom In Up',
                value: 'zoom-in-up'
              }, {
                label: 'Zoom In Down',
                value: 'zoom-in-down'
              }],
              onChange: val => setAttributes({
                wmAnim: val
              })
            }), wmAnim && wmAnim !== 'none' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
              className: "wmblocks-animation-advanced",
              style: {
                marginBottom: '16px',
                paddingLeft: '12px',
                borderLeft: '2px solid #ddd'
              },
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Easing', 'wmblocks'),
                value: wmEasing || 'ease',
                options: [{
                  label: 'Ease',
                  value: 'ease'
                }, {
                  label: 'Linear',
                  value: 'linear'
                }, {
                  label: 'Ease-in-out',
                  value: 'ease-in-out'
                }, {
                  label: 'Ease-out-back',
                  value: 'ease-out-back'
                }],
                onChange: val => setAttributes({
                  wmEasing: val
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Duration (ms)', 'wmblocks'),
                value: wmDuration || '400',
                onChange: val => setAttributes({
                  wmDuration: val
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Delay (ms)', 'wmblocks'),
                value: wmDelay || '0',
                onChange: val => setAttributes({
                  wmDelay: val
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
                  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Animate Once', 'wmblocks'),
                  checked: wmOnce !== false,
                  onChange: val => setAttributes({
                    wmOnce: val
                  })
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
                  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Mirror (Animate Out)', 'wmblocks'),
                  checked: !!wmMirror,
                  onChange: val => setAttributes({
                    wmMirror: val
                  })
                })
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("h4", {
              style: {
                margin: '24px 0 8px',
                borderTop: '1px solid #eee',
                paddingTop: '16px',
                textTransform: 'uppercase',
                fontSize: '11px',
                color: '#757575'
              },
              children: "On Hover"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Trigger child animations on hover', 'wmblocks'),
              help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Any inner blocks set to trigger on "Parent" will animate when this block is hovered.', 'wmblocks'),
              checked: !!wmIsHoverParent,
              onChange: val => setAttributes({
                wmIsHoverParent: val
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Hover Effect', 'wmblocks'),
              value: wmHoverAnim || 'none',
              options: [{
                label: 'None',
                value: 'none'
              }, {
                label: 'Zoom In (Scale)',
                value: 'scale-up'
              }, {
                label: 'Zoom Out (Scale)',
                value: 'scale-down'
              }, {
                label: 'Lift Up',
                value: 'lift'
              }, {
                label: 'Fade Opacity',
                value: 'fade'
              }],
              onChange: val => setAttributes({
                wmHoverAnim: val
              })
            }), wmHoverAnim && wmHoverAnim !== 'none' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
              style: {
                marginBottom: '16px',
                paddingLeft: '12px',
                borderLeft: '2px solid #ddd'
              },
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Trigger On', 'wmblocks'),
                value: wmHoverTrigger || 'self',
                options: [{
                  label: 'Hovering this block',
                  value: 'self'
                }, {
                  label: 'Hovering parent block',
                  value: 'parent'
                }],
                onChange: val => setAttributes({
                  wmHoverTrigger: val
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Duration (ms)', 'wmblocks'),
                value: wmHoverDuration || '300',
                onChange: val => setAttributes({
                  wmHoverDuration: val
                })
              })]
            })]
          })
        })]
      });
    };
  }, 'withGlobalControls');
  (0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__.addFilter)('editor.BlockEdit', 'wmblocks/add-global-controls', withGlobalControls, 100);

  // 🛑 Lock it down so it never registers again
  window.wmAnimationFiltersAdded = true;
}

/***/ },

/***/ "./src/vstack/edit.js"
/*!****************************!*\
  !*** ./src/vstack/edit.js ***!
  \****************************/
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
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./editor.scss */ "./src/vstack/editor.scss");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);






const GAP_OPTS = [{
  label: '— None —',
  value: ''
}, {
  label: 'gap-0',
  value: 'gap-0'
}, {
  label: 'gap-1',
  value: 'gap-1'
}, {
  label: 'gap-2',
  value: 'gap-2'
}, {
  label: 'gap-3',
  value: 'gap-3'
}, {
  label: 'gap-4',
  value: 'gap-4'
}, {
  label: 'gap-5',
  value: 'gap-5'
}];
const TEMPLATE = [['wmblocks/stack-item', {}], ['wmblocks/stack-item', {}], ['wmblocks/stack-item', {}]];
const ALLOWED = ['wmblocks/stack-item', 'wmblocks/flex-container', 'wmblocks/flex-item', 'core/paragraph', 'core/heading', 'core/image', 'core/group'];
function Edit({
  attributes,
  setAttributes,
  clientId
}) {
  const {
    gap,
    customClass
  } = attributes;
  const innerBlocks = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.useSelect)(select => select('core/block-editor').getBlocks(clientId), [clientId]);
  const {
    insertBlock
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.useDispatch)('core/block-editor');
  const {
    createBlock
  } = wp.blocks;
  const addItem = () => insertBlock(createBlock('wmblocks/stack-item', {}), undefined, clientId);
  const stackClass = ['vstack', gap, customClass].filter(Boolean).join(' ');
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps)({
    className: 'wmblocks-vstack-wrapper'
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.BlockControls, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToolbarGroup, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToolbarButton, {
          icon: "plus",
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Add Stack Item', 'wmblocks'),
          onClick: addItem
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
          style: {
            display: 'flex',
            alignItems: 'center',
            padding: '0 8px',
            fontSize: '12px',
            fontWeight: 500,
            color: '#1e1e1e',
            gap: '6px'
          },
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
            style: {
              background: '#198754',
              color: '#fff',
              borderRadius: '10px',
              padding: '1px 7px',
              fontSize: '11px'
            },
            children: "vstack"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
            style: {
              background: '#6c757d',
              color: '#fff',
              borderRadius: '10px',
              padding: '1px 7px',
              fontSize: '11px'
            },
            children: innerBlocks.length
          })]
        })]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InspectorControls, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Vertical Stack', 'wmblocks'),
        initialOpen: true,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Gap', 'wmblocks'),
          value: gap,
          options: GAP_OPTS,
          onChange: v => setAttributes({
            gap: v
          }),
          help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Space between stacked items.', 'wmblocks')
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Extra Classes', 'wmblocks'),
          value: customClass,
          onChange: v => setAttributes({
            customClass: v
          })
        })]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
      ...blockProps,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
        style: {
          fontSize: '10px',
          fontFamily: 'monospace',
          color: '#198754',
          marginBottom: '6px',
          background: '#f0fdf4',
          padding: '3px 8px',
          borderRadius: '4px',
          display: 'inline-block'
        },
        children: stackClass
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
        className: stackClass,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InnerBlocks, {
          allowedBlocks: ALLOWED,
          template: TEMPLATE,
          templateLock: false,
          renderAppender: false
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("button", {
        onMouseDown: e => {
          e.preventDefault();
          addItem();
        },
        style: {
          marginTop: '8px',
          width: '100%',
          padding: '6px',
          border: '1px dashed #198754',
          borderRadius: '4px',
          background: 'transparent',
          color: '#198754',
          fontSize: '12px',
          cursor: 'pointer'
        },
        children: ["+ ", (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Add Stack Item', 'wmblocks')]
      })]
    })]
  });
}

/***/ },

/***/ "./src/vstack/editor.scss"
/*!********************************!*\
  !*** ./src/vstack/editor.scss ***!
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

/***/ "@wordpress/compose"
/*!*********************************!*\
  !*** external ["wp","compose"] ***!
  \*********************************/
(module) {

module.exports = window["wp"]["compose"];

/***/ },

/***/ "@wordpress/data"
/*!******************************!*\
  !*** external ["wp","data"] ***!
  \******************************/
(module) {

module.exports = window["wp"]["data"];

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

/***/ "./src/vstack/block.json"
/*!*******************************!*\
  !*** ./src/vstack/block.json ***!
  \*******************************/
(module) {

module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"wmblocks/vstack","version":"0.1.0","title":"Vertical Stack","category":"watermelon-blocks","icon":"move","description":"Bootstrap vstack — vertical flex column layout. Items are full-width by default.","example":{},"supports":{"html":false,"anchor":true},"attributes":{"gap":{"type":"string","default":"gap-3"},"customClass":{"type":"string","default":""}},"providesContext":{"wmblocks/stackType":"gap"},"textdomain":"wmblocks","editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./style-index.css","render":"file:./render.php"}');

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
/*!*****************************!*\
  !*** ./src/vstack/index.js ***!
  \*****************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./src/vstack/edit.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./block.json */ "./src/vstack/block.json");
/* harmony import */ var _controls_controlanimate_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../controls/controlanimate.js */ "./controls/controlanimate.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);


//import './style.scss';




(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_3__.name, {
  edit: _edit__WEBPACK_IMPORTED_MODULE_2__["default"],
  save: () => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
    ..._wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps.save(),
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InnerBlocks.Content, {})
  })
});
})();

/******/ })()
;
//# sourceMappingURL=index.js.map