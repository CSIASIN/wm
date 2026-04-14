/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/breadcrumb-svg/edit.js"
/*!************************************!*\
  !*** ./src/breadcrumb-svg/edit.js ***!
  \************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SVG_DIVIDERS: () => (/* binding */ SVG_DIVIDERS),
/* harmony export */   "default": () => (/* binding */ Edit)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./editor.scss */ "./src/breadcrumb-svg/editor.scss");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);





const uid = () => 'b' + Math.random().toString(36).slice(2, 7);

// SVG divider shapes — rendered as preview SVGs in the picker
// and as data URIs in render.php
const SVG_DIVIDERS = {
  arrow: {
    label: 'Arrow',
    preview: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "8",
      height: "8",
      viewBox: "0 0 8 8",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("path", {
        d: "M2.5 0L1 1.5 3.5 4 1 6.5 2.5 8l4-4-4-4z",
        fill: "currentColor"
      })
    }),
    // URL-encoded path for CSS data URI (< > # must be encoded)
    path: 'M2.5 0L1 1.5 3.5 4 1 6.5 2.5 8l4-4-4-4z',
    w: 8,
    h: 8
  },
  chevron: {
    label: 'Chevron',
    preview: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "10",
      height: "10",
      viewBox: "0 0 10 10",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("path", {
        d: "M3 1l4 4-4 4",
        stroke: "currentColor",
        strokeWidth: "1.5",
        fill: "none",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      })
    }),
    path: 'M3 1l4 4-4 4',
    w: 10,
    h: 10,
    useStroke: true
  },
  double: {
    label: 'Double ›',
    preview: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "12",
      height: "8",
      viewBox: "0 0 12 8",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("path", {
        d: "M1 0L4 4 1 8M6 0l3 4-3 4",
        stroke: "currentColor",
        strokeWidth: "1.3",
        fill: "none",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      })
    }),
    path: 'M1 0L4 4 1 8M6 0l3 4-3 4',
    w: 12,
    h: 8,
    useStroke: true
  },
  slash: {
    label: 'Slash',
    preview: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "6",
      height: "10",
      viewBox: "0 0 6 10",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("path", {
        d: "M5 0L1 10",
        stroke: "currentColor",
        strokeWidth: "1.2",
        fill: "none",
        strokeLinecap: "round"
      })
    }),
    path: 'M5 0L1 10',
    w: 6,
    h: 10,
    useStroke: true
  },
  dot: {
    label: 'Dot',
    preview: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "6",
      height: "8",
      viewBox: "0 0 6 8",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("circle", {
        cx: "3",
        cy: "4",
        r: "2",
        fill: "currentColor"
      })
    }),
    path: null,
    circle: {
      cx: 3,
      cy: 4,
      r: 2
    },
    w: 6,
    h: 8,
    useFill: true
  },
  dash: {
    label: 'Dash',
    preview: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "8",
      height: "8",
      viewBox: "0 0 8 8",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("path", {
        d: "M0 4h8",
        stroke: "currentColor",
        strokeWidth: "1.5",
        strokeLinecap: "round"
      })
    }),
    path: 'M0 4h8',
    w: 8,
    h: 8,
    useStroke: true
  }
};
const COLOUR_PRESETS = [{
  label: 'Grey (default)',
  value: '#6c757d'
}, {
  label: 'Primary blue',
  value: '#0d6efd'
}, {
  label: 'Success green',
  value: '#198754'
}, {
  label: 'Danger red',
  value: '#dc3545'
}, {
  label: 'Warning amber',
  value: '#ffc107'
}, {
  label: 'Dark',
  value: '#212529'
}, {
  label: 'Light',
  value: '#adb5bd'
}];
function Edit({
  attributes,
  setAttributes
}) {
  const {
    items,
    svgDivider,
    dividerColor,
    ariaLabel
  } = attributes;
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps)({
    className: 'wmblocks-bc-wrapper wmblocks-bc-svg'
  });
  const lastIdx = items.length - 1;
  const currentSvg = SVG_DIVIDERS[svgDivider] || SVG_DIVIDERS.arrow;
  function updateItem(id, patch) {
    setAttributes({
      items: items.map(it => it.id === id ? {
        ...it,
        ...patch
      } : it)
    });
  }
  function addItem() {
    const newItem = {
      id: uid(),
      label: 'New page',
      url: '#'
    };
    const next = [...items.slice(0, -1), newItem, items[items.length - 1]];
    setAttributes({
      items: next
    });
  }
  function removeItem(id) {
    if (items.length <= 1) return;
    setAttributes({
      items: items.filter(it => it.id !== id)
    });
  }
  function moveItem(id, dir) {
    const idx = items.findIndex(it => it.id === id);
    const arr = [...items];
    const swap = idx + dir;
    if (swap < 0 || swap >= arr.length) return;
    [arr[idx], arr[swap]] = [arr[swap], arr[idx]];
    setAttributes({
      items: arr
    });
  }

  // Build the data URI for editor preview — same as render.php will generate
  function buildDataUri(key, color) {
    const shape = SVG_DIVIDERS[key] || SVG_DIVIDERS.arrow;
    const fill = encodeURIComponent(color);
    let pathEl;
    if (shape.circle) {
      pathEl = `%3Ccircle cx='${shape.circle.cx}' cy='${shape.circle.cy}' r='${shape.circle.r}' fill='${fill}'/%3E`;
    } else if (shape.useStroke) {
      pathEl = `%3Cpath d='${encodeURIComponent(shape.path)}' stroke='${fill}' stroke-width='${key === 'chevron' ? '1.5' : key === 'slash' ? '1.2' : '1.3'}' fill='none' stroke-linecap='round' stroke-linejoin='round'/%3E`;
    } else {
      pathEl = `%3Cpath d='${encodeURIComponent(shape.path)}' fill='${fill}'/%3E`;
    }
    return `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='${shape.w}' height='${shape.h}' viewBox='0 0 ${shape.w} ${shape.h}'%3E${pathEl}%3C/svg%3E")`;
  }
  const dividerCss = buildDataUri(svgDivider, dividerColor);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InspectorControls, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('SVG Divider', 'wmblocks'),
        initialOpen: true,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p", {
          style: {
            fontSize: '11px',
            color: '#555',
            marginTop: 0
          },
          children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('SVG is embedded as a data URI in --bs-breadcrumb-divider. The fill/stroke colour is applied directly in the SVG markup.', 'wmblocks')
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Divider colour (hex)', 'wmblocks'),
          value: dividerColor,
          onChange: v => setAttributes({
            dividerColor: v
          }),
          placeholder: "#6c757d"
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Accessibility', 'wmblocks'),
        initialOpen: false,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('aria-label', 'wmblocks'),
          value: ariaLabel,
          onChange: v => setAttributes({
            ariaLabel: v
          })
        })
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
      ...blockProps,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
        className: "wmblocks-bc-meta",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
          className: "wmblocks-bc-chip wmblocks-bc-chip--teal",
          children: "Breadcrumb"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
          className: "wmblocks-bc-chip",
          children: "SVG divider"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
          className: "wmblocks-bc-chip",
          children: currentSvg.label
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("span", {
          className: "wmblocks-bc-chip",
          children: [items.length, " items"]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
        className: "wmblocks-bc-svg-picker",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
          className: "wmblocks-bc-svg-picker__label",
          children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Shape:', 'wmblocks')
        }), Object.entries(SVG_DIVIDERS).map(([key, shape]) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("button", {
          className: 'wmblocks-bc-svg-btn' + (svgDivider === key ? ' is-active' : ''),
          onClick: () => setAttributes({
            svgDivider: key
          }),
          title: shape.label,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
            style: {
              color: svgDivider === key ? '#fff' : dividerColor
            },
            children: shape.preview
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
            className: "wmblocks-bc-svg-btn__label",
            children: shape.label
          })]
        }, key))]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
        className: "wmblocks-bc-svg-colour-row",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
          className: "wmblocks-bc-svg-picker__label",
          children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Colour:', 'wmblocks')
        }), COLOUR_PRESETS.map(c => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("button", {
          className: 'wmblocks-bc-swatch' + (dividerColor === c.value ? ' is-active' : ''),
          style: {
            background: c.value,
            border: '2px solid ' + (dividerColor === c.value ? '#000' : 'transparent')
          },
          onClick: () => setAttributes({
            dividerColor: c.value
          }),
          title: c.label
        }, c.value)), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("input", {
          type: "color",
          value: dividerColor,
          onChange: e => setAttributes({
            dividerColor: e.target.value
          }),
          title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Custom colour', 'wmblocks'),
          style: {
            width: '22px',
            height: '22px',
            padding: 0,
            border: 'none',
            cursor: 'pointer',
            borderRadius: '50%'
          }
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("nav", {
        "aria-label": ariaLabel,
        className: "wmblocks-bc-preview",
        style: {
          '--bs-breadcrumb-divider': dividerCss
        },
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("ol", {
          className: "breadcrumb mb-0",
          children: items.map((item, idx) => {
            const isLast = idx === lastIdx;
            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("li", {
              className: 'breadcrumb-item' + (isLast ? ' active' : ''),
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
                tagName: isLast ? 'span' : 'a',
                href: !isLast ? item.url || '#' : undefined,
                value: item.label,
                onChange: v => updateItem(item.id, {
                  label: v
                }),
                allowedFormats: [],
                placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Label…', 'wmblocks'),
                onClick: e => e.preventDefault()
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("span", {
                className: "wmblocks-bc-item-controls",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("button", {
                  onClick: () => moveItem(item.id, -1),
                  disabled: idx === 0,
                  children: "\u2190"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("button", {
                  onClick: () => moveItem(item.id, 1),
                  disabled: isLast,
                  children: "\u2192"
                }), !isLast && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
                  className: "wmblocks-bc-url-wrap",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("input", {
                    type: "url",
                    className: "wmblocks-bc-url-input",
                    value: item.url,
                    onChange: e => updateItem(item.id, {
                      url: e.target.value
                    }),
                    placeholder: "URL"
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("button", {
                  className: "wmblocks-bc-remove",
                  onClick: () => removeItem(item.id),
                  disabled: items.length <= 1,
                  children: "\u2715"
                })]
              })]
            }, item.id);
          })
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
        className: "wmblocks-bc-footer",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("button", {
          className: "wmblocks-bc-add-btn wmblocks-bc-add-btn--teal",
          onClick: addItem,
          children: ["+ ", (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Add item', 'wmblocks')]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
          className: "wmblocks-bc-hint",
          children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Last item = active page · click label to edit', 'wmblocks')
        })]
      })]
    })]
  });
}

/***/ },

/***/ "./src/breadcrumb-svg/index.js"
/*!*************************************!*\
  !*** ./src/breadcrumb-svg/index.js ***!
  \*************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ "./src/breadcrumb-svg/style.scss");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./src/breadcrumb-svg/edit.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./block.json */ "./src/breadcrumb-svg/block.json");




(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_3__.name, {
  edit: _edit__WEBPACK_IMPORTED_MODULE_2__["default"],
  save: () => null
});

/***/ },

/***/ "./src/breadcrumb-svg/editor.scss"
/*!****************************************!*\
  !*** ./src/breadcrumb-svg/editor.scss ***!
  \****************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ },

/***/ "./src/breadcrumb-svg/style.scss"
/*!***************************************!*\
  !*** ./src/breadcrumb-svg/style.scss ***!
  \***************************************/
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

/***/ "./src/breadcrumb-svg/block.json"
/*!***************************************!*\
  !*** ./src/breadcrumb-svg/block.json ***!
  \***************************************/
(module) {

module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"wmblocks/breadcrumb-svg","version":"0.1.0","title":"Breadcrumb — SVG Divider","category":"watermelon-blocks","icon":"menu-alt3","description":"Bootstrap breadcrumb with an SVG icon as the divider, set via the --bs-breadcrumb-divider CSS custom property as a data URI. Choose from arrow, chevron, dot, dash, or pipe SVG shapes. Colour-aware.","example":{},"supports":{"html":false,"anchor":true},"attributes":{"items":{"type":"array","default":[{"id":"b1","label":"Home","url":"/"},{"id":"b2","label":"Library","url":"/library"},{"id":"b3","label":"Data","url":""}]},"svgDivider":{"type":"string","default":"arrow"},"dividerColor":{"type":"string","default":"#6c757d"},"ariaLabel":{"type":"string","default":"breadcrumb"}},"textdomain":"wm","editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./style-index.css","render":"file:./render.php","viewScript":"file:./view.js"}');

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
/******/ 			"breadcrumb-svg/index": 0,
/******/ 			"breadcrumb-svg/style-index": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["breadcrumb-svg/style-index"], () => (__webpack_require__("./src/breadcrumb-svg/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map