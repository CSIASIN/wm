/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/breadcrumb-styled/edit.js"
/*!***************************************!*\
  !*** ./src/breadcrumb-styled/edit.js ***!
  \***************************************/
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
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./editor.scss */ "./src/breadcrumb-styled/editor.scss");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);





const uid = () => 'b' + Math.random().toString(36).slice(2, 7);
const BG_OPTIONS = [{
  label: 'Light',
  value: 'bg-light',
  hex: '#f8f9fa'
}, {
  label: 'White',
  value: 'bg-white',
  hex: '#ffffff'
}, {
  label: 'Dark',
  value: 'bg-dark',
  hex: '#212529'
}, {
  label: 'Primary',
  value: 'bg-primary',
  hex: '#0d6efd'
}, {
  label: 'Secondary',
  value: 'bg-secondary',
  hex: '#6c757d'
}, {
  label: 'Success',
  value: 'bg-success',
  hex: '#198754'
}, {
  label: 'Danger',
  value: 'bg-danger',
  hex: '#dc3545'
}, {
  label: 'Warning',
  value: 'bg-warning',
  hex: '#ffc107'
}, {
  label: 'Info',
  value: 'bg-info',
  hex: '#0dcaf0'
}, {
  label: 'Transparent',
  value: '',
  hex: 'transparent'
}];
const BG_HEX = Object.fromEntries(BG_OPTIONS.map(b => [b.value, b.hex]));
const PADDING_OPTIONS = [{
  label: 'None',
  value: ''
}, {
  label: 'XS',
  value: 'p-1'
}, {
  label: 'SM',
  value: 'p-2'
}, {
  label: 'MD',
  value: 'p-3'
}, {
  label: 'LG',
  value: 'p-4'
}, {
  label: 'XL',
  value: 'p-5'
}, {
  label: 'Y only SM',
  value: 'py-2 px-3'
}, {
  label: 'Y only MD',
  value: 'py-3 px-4'
}];
const ROUNDED_OPTIONS = [{
  label: 'None',
  value: ''
}, {
  label: 'Rounded',
  value: 'rounded'
}, {
  label: 'Rounded-2',
  value: 'rounded-2'
}, {
  label: 'Rounded-3',
  value: 'rounded-3'
}, {
  label: 'Rounded-4',
  value: 'rounded-4'
}, {
  label: 'Pill',
  value: 'rounded-pill'
}];
const FONT_SIZE_OPTIONS = [{
  label: 'Default',
  value: ''
}, {
  label: 'Small',
  value: 'small'
}, {
  label: 'fs-6',
  value: 'fs-6'
}, {
  label: 'fs-5',
  value: 'fs-5'
}, {
  label: 'fs-4',
  value: 'fs-4'
}];
const LINK_COLOUR_OPTIONS = [{
  label: 'Default',
  value: ''
}, {
  label: 'Primary',
  value: 'link-primary'
}, {
  label: 'Secondary',
  value: 'link-secondary'
}, {
  label: 'Success',
  value: 'link-success'
}, {
  label: 'Danger',
  value: 'link-danger'
}, {
  label: 'Warning',
  value: 'link-warning'
}, {
  label: 'Info',
  value: 'link-info'
}, {
  label: 'Light',
  value: 'link-light'
}, {
  label: 'Dark',
  value: 'link-dark'
}];
const BORDER_COLOUR_OPTIONS = [{
  label: 'Default',
  value: ''
}, {
  label: 'Primary',
  value: 'border-primary'
}, {
  label: 'Secondary',
  value: 'border-secondary'
}, {
  label: 'Success',
  value: 'border-success'
}, {
  label: 'Danger',
  value: 'border-danger'
}, {
  label: 'Warning',
  value: 'border-warning'
}, {
  label: 'Dark',
  value: 'border-dark'
}, {
  label: 'Light',
  value: 'border-light'
}];
const PRESET_DIVIDERS = [{
  label: '/',
  value: '/'
}, {
  label: '>',
  value: '>'
}, {
  label: '»',
  value: '»'
}, {
  label: '›',
  value: '›'
}, {
  label: '•',
  value: '•'
}, {
  label: '|',
  value: '|'
}, {
  label: '→',
  value: '→'
}];
function Edit({
  attributes,
  setAttributes
}) {
  const {
    items,
    divider,
    bgColor,
    padding,
    rounded,
    border,
    borderColor,
    fontSize,
    linkColor,
    ariaLabel
  } = attributes;
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps)({
    className: 'wmblocks-bc-wrapper wmblocks-bc-styled'
  });
  const lastIdx = items.length - 1;

  // Build wrapper classes for live preview
  const wrapClasses = [bgColor, padding, rounded, border ? 'border' : '', border && borderColor ? borderColor : '', fontSize].filter(Boolean).join(' ');
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
  const currentBgHex = BG_HEX[bgColor] || 'transparent';
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InspectorControls, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Appearance', 'wmblocks'),
        initialOpen: true,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Background', 'wmblocks'),
          value: bgColor,
          options: BG_OPTIONS.map(b => ({
            label: b.label,
            value: b.value
          })),
          onChange: v => setAttributes({
            bgColor: v
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Padding', 'wmblocks'),
          value: padding,
          options: PADDING_OPTIONS,
          onChange: v => setAttributes({
            padding: v
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Border radius', 'wmblocks'),
          value: rounded,
          options: ROUNDED_OPTIONS,
          onChange: v => setAttributes({
            rounded: v
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Show border', 'wmblocks'),
            checked: !!border,
            onChange: v => setAttributes({
              border: v
            })
          })
        }), border && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Border colour', 'wmblocks'),
          value: borderColor,
          options: BORDER_COLOUR_OPTIONS,
          onChange: v => setAttributes({
            borderColor: v
          })
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Typography', 'wmblocks'),
        initialOpen: false,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Font size', 'wmblocks'),
          value: fontSize,
          options: FONT_SIZE_OPTIONS,
          onChange: v => setAttributes({
            fontSize: v
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Link colour', 'wmblocks'),
          value: linkColor,
          options: LINK_COLOUR_OPTIONS,
          onChange: v => setAttributes({
            linkColor: v
          })
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Divider', 'wmblocks'),
        initialOpen: false,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p", {
          style: {
            fontSize: '11px',
            color: '#555',
            marginTop: 0
          },
          children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Character divider via --bs-breadcrumb-divider.', 'wmblocks')
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
          style: {
            display: 'flex',
            gap: '4px',
            flexWrap: 'wrap',
            marginBottom: '8px'
          },
          children: PRESET_DIVIDERS.map(p => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("button", {
            style: {
              padding: '2px 8px',
              border: divider === p.value ? '2px solid #fd7e14' : '1px solid #dee2e6',
              borderRadius: '4px',
              background: divider === p.value ? '#fff3e0' : '#fff',
              cursor: 'pointer',
              fontFamily: 'monospace',
              fontWeight: 700,
              fontSize: '14px'
            },
            onClick: () => setAttributes({
              divider: p.value
            }),
            children: p.label
          }, p.value))
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
          className: "wmblocks-bc-chip wmblocks-bc-chip--orange",
          children: "Breadcrumb"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
          className: "wmblocks-bc-chip",
          children: "Styled"
        }), bgColor && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
          className: "wmblocks-bc-chip",
          children: bgColor
        }), padding && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
          className: "wmblocks-bc-chip",
          children: padding
        }), rounded && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
          className: "wmblocks-bc-chip",
          children: rounded
        }), border && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
          className: "wmblocks-bc-chip",
          children: "border"
        }), fontSize && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
          className: "wmblocks-bc-chip",
          children: fontSize
        }), linkColor && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
          className: "wmblocks-bc-chip",
          children: linkColor
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
        className: "wmblocks-bc-style-row",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
          className: "label",
          children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Background:', 'wmblocks')
        }), BG_OPTIONS.map(b => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("button", {
          className: 'wmblocks-bc-swatch' + (bgColor === b.value ? ' is-active' : ''),
          style: {
            background: b.hex === 'transparent' ? 'repeating-linear-gradient(45deg,#dee2e6,#dee2e6 3px,#fff 3px,#fff 8px)' : b.hex,
            border: bgColor === b.value ? '3px solid #fd7e14' : '2px solid #dee2e6',
            width: '22px',
            height: '22px'
          },
          onClick: () => setAttributes({
            bgColor: b.value
          }),
          title: b.label
        }, b.value))]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
        className: "wmblocks-bc-style-row",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
          className: "label",
          children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Divider:', 'wmblocks')
        }), PRESET_DIVIDERS.map(p => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("button", {
          className: 'wmblocks-bc-style-btn' + (divider === p.value ? ' is-active' : ''),
          onClick: () => setAttributes({
            divider: p.value
          }),
          children: p.label
        }, p.value)), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("span", {
          style: {
            marginLeft: '6px',
            borderLeft: '1px solid #ffd580',
            paddingLeft: '8px'
          },
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
            className: "label",
            children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Border:', 'wmblocks')
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("button", {
            className: 'wmblocks-bc-style-btn' + (border ? ' is-active' : ''),
            onClick: () => setAttributes({
              border: !border
            }),
            children: border ? 'ON' : 'off'
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("nav", {
        "aria-label": ariaLabel,
        className: "wmblocks-bc-preview",
        style: {
          '--bs-breadcrumb-divider': `'${divider}'`
        },
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
          className: wrapClasses,
          style: {
            background: currentBgHex !== '#f8f9fa' ? currentBgHex : undefined
          },
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("ol", {
            className: "breadcrumb mb-0",
            children: items.map((item, idx) => {
              const isLast = idx === lastIdx;
              return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("li", {
                className: 'breadcrumb-item' + (isLast ? ' active' : ''),
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
                  tagName: isLast ? 'span' : 'a',
                  className: !isLast && linkColor ? linkColor : undefined,
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
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
        className: "wmblocks-bc-footer",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("button", {
          className: "wmblocks-bc-add-btn wmblocks-bc-add-btn--orange",
          onClick: addItem,
          children: ["+ ", (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Add item', 'wmblocks')]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
          className: "wmblocks-bc-hint",
          children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Last item = active · click label to edit · bg swatches above', 'wmblocks')
        })]
      })]
    })]
  });
}

/***/ },

/***/ "./src/breadcrumb-styled/index.js"
/*!****************************************!*\
  !*** ./src/breadcrumb-styled/index.js ***!
  \****************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ "./src/breadcrumb-styled/style.scss");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./src/breadcrumb-styled/edit.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./block.json */ "./src/breadcrumb-styled/block.json");




(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_3__.name, {
  edit: _edit__WEBPACK_IMPORTED_MODULE_2__["default"],
  save: () => null
});

/***/ },

/***/ "./src/breadcrumb-styled/editor.scss"
/*!*******************************************!*\
  !*** ./src/breadcrumb-styled/editor.scss ***!
  \*******************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ },

/***/ "./src/breadcrumb-styled/style.scss"
/*!******************************************!*\
  !*** ./src/breadcrumb-styled/style.scss ***!
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

/***/ "@wordpress/i18n"
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
(module) {

module.exports = window["wp"]["i18n"];

/***/ },

/***/ "./src/breadcrumb-styled/block.json"
/*!******************************************!*\
  !*** ./src/breadcrumb-styled/block.json ***!
  \******************************************/
(module) {

module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"wmblocks/breadcrumb-styled","version":"0.1.0","title":"Breadcrumb — Styled","category":"watermelon-blocks","icon":"menu-alt3","description":"Bootstrap breadcrumb with full visual styling — background colour, padding, border, border-radius, and font size. Makes the breadcrumb visually prominent as a hero sub-bar or page header element.","example":{},"supports":{"html":false,"anchor":true},"attributes":{"items":{"type":"array","default":[{"id":"b1","label":"Home","url":"/"},{"id":"b2","label":"Library","url":"/library"},{"id":"b3","label":"Data","url":""}]},"divider":{"type":"string","default":"/"},"bgColor":{"type":"string","default":"bg-light"},"padding":{"type":"string","default":"p-3"},"rounded":{"type":"string","default":"rounded-3"},"border":{"type":"boolean","default":false},"borderColor":{"type":"string","default":""},"fontSize":{"type":"string","default":""},"linkColor":{"type":"string","default":""},"ariaLabel":{"type":"string","default":"breadcrumb"}},"textdomain":"wm","editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./style-index.css","render":"file:./render.php","viewScript":"file:./view.js"}');

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
/******/ 			"breadcrumb-styled/index": 0,
/******/ 			"breadcrumb-styled/style-index": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["breadcrumb-styled/style-index"], () => (__webpack_require__("./src/breadcrumb-styled/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map