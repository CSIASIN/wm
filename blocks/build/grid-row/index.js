/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/grid-row/edit.js"
/*!******************************!*\
  !*** ./src/grid-row/edit.js ***!
  \******************************/
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
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./editor.scss */ "./src/grid-row/editor.scss");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);






// ── Option generators ────────────────────────────────────────────────────

const none = {
  label: '— None —',
  value: ''
};
const gOpts = prefix => [none, ...[0, 1, 2, 3, 4, 5].map(n => ({
  label: `g${prefix}-${n}`,
  value: `g${prefix}-${n}`
}))];
const gxOpts = prefix => [none, ...[0, 1, 2, 3, 4, 5].map(n => ({
  label: `gx${prefix}-${n}`,
  value: `gx${prefix}-${n}`
}))];
const gyOpts = prefix => [none, ...[0, 1, 2, 3, 4, 5].map(n => ({
  label: `gy${prefix}-${n}`,
  value: `gy${prefix}-${n}`
}))];
const rcOpts = prefix => [none, ...[1, 2, 3, 4, 5, 6, 'auto'].map(n => ({
  label: `row-cols${prefix}-${n}`,
  value: `row-cols${prefix}-${n}`
}))];
const JUSTIFY_OPTS = [none, ...['start', 'end', 'center', 'between', 'around', 'evenly'].map(v => ({
  label: `justify-content-${v}`,
  value: `justify-content-${v}`
}))];
const ALIGN_OPTS = [none, ...['start', 'end', 'center', 'baseline', 'stretch'].map(v => ({
  label: `align-items-${v}`,
  value: `align-items-${v}`
}))];
const BREAKPOINTS = [{
  key: '',
  label: 'Base',
  hint: 'All sizes'
}, {
  key: 'Sm',
  label: 'SM (≥576px)',
  hint: 'sm+'
}, {
  key: 'Md',
  label: 'MD (≥768px)',
  hint: 'md+'
}, {
  key: 'Lg',
  label: 'LG (≥992px)',
  hint: 'lg+'
}, {
  key: 'Xl',
  label: 'XL (≥1200px)',
  hint: 'xl+'
}, {
  key: 'Xxl',
  label: 'XXL (≥1400px)',
  hint: 'xxl+'
}];
const ALLOWED = ['wmblocks/grid-col'];

// Gutter value → approximate px for visual bar width
const GUTTER_PX = {
  '0': '0px',
  '1': '4px',
  '2': '8px',
  '3': '16px',
  '4': '24px',
  '5': '48px'
};
function Edit({
  attributes,
  setAttributes,
  clientId
}) {
  const {
    gutter,
    gutterX,
    gutterY,
    gutterSm,
    gutterXSm,
    gutterYSm,
    gutterMd,
    gutterXMd,
    gutterYMd,
    gutterLg,
    gutterXLg,
    gutterYLg,
    gutterXl,
    gutterXXl,
    gutterYXl,
    gutterXxl,
    gutterXXxl,
    gutterYXxl,
    rowCols,
    rowColsSm,
    rowColsMd,
    rowColsLg,
    rowColsXl,
    rowColsXxl,
    justifyContent,
    alignItems,
    noGutters,
    customClass
  } = attributes;

  // Helper to get/set gutter attribute by breakpoint key + axis
  const getG = (bp, axis) => attributes[`gutter${axis}${bp}`] || '';
  const setG = (bp, axis, v) => setAttributes({
    [`gutter${axis}${bp}`]: v
  });
  const innerBlocks = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.useSelect)(s => s('core/block-editor').getBlocks(clientId), [clientId]);
  const {
    insertBlock
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.useDispatch)('core/block-editor');
  const {
    createBlock
  } = wp.blocks;
  const addCol = () => insertBlock(createBlock('wmblocks/grid-col', {
    col: 'col'
  }), undefined, clientId);

  // Build row class from all attributes
  const rowClass = ['row', noGutters ? 'g-0' : '',
  // Base gutters
  attributes.gutter || '', attributes.gutterX || '', attributes.gutterY || '',
  // Responsive gutters
  ...['Sm', 'Md', 'Lg', 'Xl', 'Xxl'].flatMap(bp => [attributes[`gutter${bp}`] || '', attributes[`gutterX${bp}`] || '', attributes[`gutterY${bp}`] || '']),
  // Row cols
  rowCols || '', rowColsSm || '', rowColsMd || '', rowColsLg || '', rowColsXl || '', rowColsXxl || '',
  // Alignment
  justifyContent || '', alignItems || '', customClass || ''].filter(Boolean).join(' ');

  // Determine active base gutter for preview
  const activeGutter = noGutters ? '0' : (attributes.gutter || '').replace(/^g-/, '') || (attributes.gutterX || '').replace(/^gx-/, '') || '3';
  const previewGap = GUTTER_PX[activeGutter] || '16px';
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps)({
    className: ['wmblocks-grid-row', rowClass].filter(Boolean).join(' ')
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.BlockControls, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToolbarGroup, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToolbarButton, {
          icon: "plus",
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Add Column', 'wmblocks'),
          onClick: addCol
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
          style: {
            display: 'flex',
            alignItems: 'center',
            padding: '0 8px',
            gap: 6,
            fontSize: 12
          },
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
            style: {
              background: '#198754',
              color: '#fff',
              borderRadius: 10,
              padding: '1px 7px',
              fontSize: 11,
              fontWeight: 600
            },
            children: "row"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("span", {
            style: {
              background: '#6c757d',
              color: '#fff',
              borderRadius: 10,
              padding: '1px 7px',
              fontSize: 11
            },
            children: [innerBlocks.length, " cols"]
          }), !noGutters && (attributes.gutter || attributes.gutterX) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
            style: {
              background: '#fd7e14',
              color: '#fff',
              borderRadius: 10,
              padding: '1px 7px',
              fontSize: 11
            },
            children: attributes.gutter || attributes.gutterX
          })]
        })]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InspectorControls, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Gutters', 'wmblocks'),
        initialOpen: true,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('No Gutters (g-0)', 'wmblocks'),
          checked: !!noGutters,
          onChange: v => setAttributes({
            noGutters: v
          }),
          help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Removes all horizontal and vertical gutters.', 'wmblocks')
        }), !noGutters && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
            style: {
              margin: '10px 0 12px',
              padding: '10px',
              background: '#f8f9fa',
              borderRadius: 4,
              border: '1px solid #e9ecef'
            },
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
              style: {
                fontSize: 10,
                color: '#6c757d',
                marginBottom: 6,
                textTransform: 'uppercase',
                letterSpacing: '0.5px',
                fontWeight: 600
              },
              children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Gutter Preview', 'wmblocks')
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
              style: {
                display: 'flex',
                gap: previewGap,
                background: '#dee2e6',
                padding: 4,
                borderRadius: 3
              },
              children: [1, 2, 3].map(i => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
                style: {
                  flex: 1,
                  background: '#0d6efd',
                  height: 20,
                  borderRadius: 2,
                  opacity: 0.7
                }
              }, i))
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
              style: {
                fontSize: 10,
                color: '#6c757d',
                marginTop: 4,
                textAlign: 'center'
              },
              children: [(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Column gap', 'wmblocks'), ": ", previewGap]
            })]
          }), BREAKPOINTS.map(({
            key,
            label,
            hint
          }) => {
            const bpSuffix = key ? `-${key.toLowerCase()}` : '';
            const gVal = attributes[`gutter${key}`] || '';
            const gxVal = attributes[`gutterX${key}`] || '';
            const gyVal = attributes[`gutterY${key}`] || '';
            const hasAny = gVal || gxVal || gyVal;
            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
              style: {
                marginBottom: 12,
                padding: '8px 10px',
                border: '1px solid',
                borderColor: hasAny ? '#0d6efd' : '#e9ecef',
                borderRadius: 4,
                background: hasAny ? '#f0f6ff' : '#fff'
              },
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                style: {
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: 6
                },
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
                  style: {
                    fontSize: 11,
                    fontWeight: 600,
                    color: hasAny ? '#0d6efd' : '#555'
                  },
                  children: label
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
                  style: {
                    fontSize: 10,
                    color: '#adb5bd',
                    fontFamily: 'monospace'
                  },
                  children: hint
                }), hasAny && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("button", {
                  onMouseDown: e => {
                    e.preventDefault();
                    setAttributes({
                      [`gutter${key}`]: '',
                      [`gutterX${key}`]: '',
                      [`gutterY${key}`]: ''
                    });
                  },
                  style: {
                    fontSize: 10,
                    padding: '1px 5px',
                    border: '1px solid #fcc',
                    borderRadius: 3,
                    background: '#fff5f5',
                    color: '#c00',
                    cursor: 'pointer'
                  },
                  children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Clear', 'wmblocks')
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                style: {
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr 1fr',
                  gap: 4
                },
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                    style: {
                      fontSize: 10,
                      color: '#6c757d',
                      marginBottom: 2
                    },
                    children: ["g", bpSuffix, "-*"]
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("select", {
                    value: gVal,
                    onChange: e => setAttributes({
                      [`gutter${key}`]: e.target.value
                    }),
                    style: {
                      width: '100%',
                      fontSize: 11,
                      padding: '3px 4px',
                      border: '1px solid #ccc',
                      borderRadius: 3
                    },
                    children: gOpts(bpSuffix).map(o => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("option", {
                      value: o.value,
                      children: o.label || '—'
                    }, o.value))
                  })]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                    style: {
                      fontSize: 10,
                      color: '#6c757d',
                      marginBottom: 2
                    },
                    children: ["gx", bpSuffix, "-*"]
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("select", {
                    value: gxVal,
                    onChange: e => setAttributes({
                      [`gutterX${key}`]: e.target.value
                    }),
                    style: {
                      width: '100%',
                      fontSize: 11,
                      padding: '3px 4px',
                      border: '1px solid #ccc',
                      borderRadius: 3
                    },
                    children: gxOpts(bpSuffix).map(o => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("option", {
                      value: o.value,
                      children: o.label || '—'
                    }, o.value))
                  })]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                    style: {
                      fontSize: 10,
                      color: '#6c757d',
                      marginBottom: 2
                    },
                    children: ["gy", bpSuffix, "-*"]
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("select", {
                    value: gyVal,
                    onChange: e => setAttributes({
                      [`gutterY${key}`]: e.target.value
                    }),
                    style: {
                      width: '100%',
                      fontSize: 11,
                      padding: '3px 4px',
                      border: '1px solid #ccc',
                      borderRadius: 3
                    },
                    children: gyOpts(bpSuffix).map(o => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("option", {
                      value: o.value,
                      children: o.label || '—'
                    }, o.value))
                  })]
                })]
              })]
            }, key);
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Row Columns (row-cols-*)', 'wmblocks'),
        initialOpen: false,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
          style: {
            fontSize: 11,
            color: '#6c757d',
            margin: '0 0 8px'
          },
          children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Set how many columns appear per row at each breakpoint. Overrides individual col-* widths.', 'wmblocks')
        }), [['', 'Base'], ['-sm', 'SM+'], ['-md', 'MD+'], ['-lg', 'LG+'], ['-xl', 'XL+'], ['-xxl', 'XXL+']].map(([sfx, lbl]) => {
          const key = sfx ? sfx.slice(1).charAt(0).toUpperCase() + sfx.slice(2) : '';
          const attrKey = `rowCols${key}`;
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
            label: lbl,
            value: attributes[attrKey] || '',
            options: rcOpts(sfx),
            onChange: v => setAttributes({
              [attrKey]: v
            })
          }, sfx);
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Alignment', 'wmblocks'),
        initialOpen: false,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Justify Content', 'wmblocks'),
          value: justifyContent,
          options: JUSTIFY_OPTS,
          onChange: v => setAttributes({
            justifyContent: v
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Align Items', 'wmblocks'),
          value: alignItems,
          options: ALIGN_OPTS,
          onChange: v => setAttributes({
            alignItems: v
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
          fontSize: 10,
          fontFamily: 'monospace',
          color: '#198754',
          marginBottom: 4,
          background: '#f0fdf4',
          padding: '2px 2px',
          borderRadius: 4,
          display: 'inline-block',
          border: '1px solid #c3e6cb',
          wordBreak: 'break-all'
        },
        children: rowClass
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InnerBlocks, {
        allowedBlocks: ALLOWED,
        template: [['wmblocks/grid-col', {
          col: 'col'
        }], ['wmblocks/grid-col', {
          col: 'col'
        }]],
        templateLock: false,
        renderAppender: false
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("button", {
        onMouseDown: e => {
          e.preventDefault();
          addCol();
        },
        style: {
          marginTop: 6,
          padding: '4px 12px',
          border: '1px dashed #198754',
          borderRadius: 4,
          background: 'transparent',
          color: '#198754',
          fontSize: 12,
          cursor: 'pointer'
        },
        children: ["+ ", (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Add Column', 'wmblocks')]
      })]
    })]
  });
}

/***/ },

/***/ "./src/grid-row/editor.scss"
/*!**********************************!*\
  !*** ./src/grid-row/editor.scss ***!
  \**********************************/
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

/***/ "./src/grid-row/block.json"
/*!*********************************!*\
  !*** ./src/grid-row/block.json ***!
  \*********************************/
(module) {

module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"wmblocks/grid-row","version":"0.1.0","title":"Grid Row","category":"watermelon-blocks","icon":"minus","description":"Bootstrap row — horizontal group of columns inside a container.","example":{},"supports":{"html":false,"anchor":true},"attributes":{"gutterX":{"type":"string","default":""},"gutterY":{"type":"string","default":""},"gutter":{"type":"string","default":""},"rowCols":{"type":"string","default":""},"rowColsSm":{"type":"string","default":""},"rowColsMd":{"type":"string","default":""},"rowColsLg":{"type":"string","default":""},"rowColsXl":{"type":"string","default":""},"rowColsXxl":{"type":"string","default":""},"justifyContent":{"type":"string","default":""},"alignItems":{"type":"string","default":""},"noGutters":{"type":"boolean","default":false},"customClass":{"type":"string","default":""},"gutterSm":{"type":"string","default":""},"gutterXSm":{"type":"string","default":""},"gutterYSm":{"type":"string","default":""},"gutterMd":{"type":"string","default":""},"gutterXMd":{"type":"string","default":""},"gutterYMd":{"type":"string","default":""},"gutterLg":{"type":"string","default":""},"gutterXLg":{"type":"string","default":""},"gutterYLg":{"type":"string","default":""},"gutterXl":{"type":"string","default":""},"gutterXXl":{"type":"string","default":""},"gutterYXl":{"type":"string","default":""},"gutterXxl":{"type":"string","default":""},"gutterXXxl":{"type":"string","default":""},"gutterYXxl":{"type":"string","default":""}},"providesContext":{"wmblocks/inRow":"rowCols"},"textdomain":"wm","editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./style-index.css","render":"file:./render.php"}');

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
/*!*******************************!*\
  !*** ./src/grid-row/index.js ***!
  \*******************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./src/grid-row/edit.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./block.json */ "./src/grid-row/block.json");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);





(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_3__.name, {
  edit: _edit__WEBPACK_IMPORTED_MODULE_2__["default"],
  save: () => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InnerBlocks.Content, {})
});
})();

/******/ })()
;
//# sourceMappingURL=index.js.map