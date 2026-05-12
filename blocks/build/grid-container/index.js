/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/grid-container/edit.js"
/*!************************************!*\
  !*** ./src/grid-container/edit.js ***!
  \************************************/
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
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./editor.scss */ "./src/grid-container/editor.scss");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);






const CONTAINER_TYPES = [{
  label: 'container',
  value: 'container'
}, {
  label: 'container-sm',
  value: 'container-sm'
}, {
  label: 'container-md',
  value: 'container-md'
}, {
  label: 'container-lg',
  value: 'container-lg'
}, {
  label: 'container-xl',
  value: 'container-xl'
}, {
  label: 'container-xxl',
  value: 'container-xxl'
}, {
  label: 'container-fluid',
  value: 'container-fluid'
}];
const TEXT_ALIGN_OPTS = [{
  label: '— None —',
  value: ''
}, {
  label: 'text-start',
  value: 'text-start'
}, {
  label: 'text-center',
  value: 'text-center'
}, {
  label: 'text-end',
  value: 'text-end'
}];
const BG_SIZE_OPTS = [{
  label: 'Cover — fills the area, may crop',
  value: 'cover'
}, {
  label: 'Contain — fits entirely, may letterbox',
  value: 'contain'
}, {
  label: 'Auto — natural image size',
  value: 'auto'
}, {
  label: '100% — stretch to full width',
  value: '100%'
}, {
  label: '100% 100% — stretch to fill exactly',
  value: '100% 100%'
}];
const BG_POSITION_OPTS = [{
  label: 'Center Center',
  value: 'center center'
}, {
  label: 'Top Left',
  value: 'top left'
}, {
  label: 'Top Center',
  value: 'top center'
}, {
  label: 'Top Right',
  value: 'top right'
}, {
  label: 'Center Left',
  value: 'center left'
}, {
  label: 'Center Right',
  value: 'center right'
}, {
  label: 'Bottom Left',
  value: 'bottom left'
}, {
  label: 'Bottom Center',
  value: 'bottom center'
}, {
  label: 'Bottom Right',
  value: 'bottom right'
}];
const BG_REPEAT_OPTS = [{
  label: 'No Repeat',
  value: 'no-repeat'
}, {
  label: 'Repeat',
  value: 'repeat'
}, {
  label: 'Repeat X',
  value: 'repeat-x'
}, {
  label: 'Repeat Y',
  value: 'repeat-y'
}, {
  label: 'Space',
  value: 'space'
}, {
  label: 'Round',
  value: 'round'
}];
const BG_ATTACHMENT_OPTS = [{
  label: 'Scroll (default)',
  value: 'scroll'
}, {
  label: 'Fixed (parallax)',
  value: 'fixed'
}, {
  label: 'Local',
  value: 'local'
}];
const MIN_HEIGHT_OPTS = [{
  label: '— None —',
  value: ''
}, {
  label: '25vh',
  value: '25vh'
}, {
  label: '33vh',
  value: '33vh'
}, {
  label: '50vh',
  value: '50vh'
}, {
  label: '66vh',
  value: '66vh'
}, {
  label: '75vh',
  value: '75vh'
}, {
  label: '100vh',
  value: '100vh'
}, {
  label: '200px',
  value: '200px'
}, {
  label: '300px',
  value: '300px'
}, {
  label: '400px',
  value: '400px'
}, {
  label: '500px',
  value: '500px'
}, {
  label: '600px',
  value: '600px'
}];
const TEMPLATE = [['wmblocks/grid-row', {}, [['wmblocks/grid-col', {
  col: 'col'
}, [['core/paragraph', {
  placeholder: 'Column 1 content…'
}]]], ['wmblocks/grid-col', {
  col: 'col'
}, [['core/paragraph', {
  placeholder: 'Column 2 content…'
}]]], ['wmblocks/grid-col', {
  col: 'col'
}, [['core/paragraph', {
  placeholder: 'Column 3 content…'
}]]]]]];
const ALLOWED = ['wmblocks/grid-row'];
function Edit({
  attributes,
  setAttributes,
  clientId
}) {
  const {
    containerType,
    textAlign,
    overflow,
    padding,
    customClass,
    bgImageId,
    bgImageUrl,
    bgImageAlt,
    bgSize,
    bgPosition,
    bgRepeat,
    bgAttachment,
    bgOverlayColor,
    bgOverlayOpacity,
    minHeight
  } = attributes;
  const innerBlocks = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.useSelect)(s => s('core/block-editor').getBlocks(clientId), [clientId]);
  const {
    insertBlock
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.useDispatch)('core/block-editor');
  const {
    createBlock
  } = wp.blocks;
  const addRow = () => insertBlock(createBlock('wmblocks/grid-row', {}, [createBlock('wmblocks/grid-col', {
    col: 'col'
  }), createBlock('wmblocks/grid-col', {
    col: 'col'
  })]), undefined, clientId);
  const containerClass = [containerType, textAlign, overflow, padding, customClass].filter(Boolean).join(' ');

  // Inline styles for editor preview of background
  const bgStyle = {};
  if (bgImageUrl) {
    bgStyle.backgroundImage = `url(${bgImageUrl})`;
    bgStyle.backgroundSize = bgSize;
    bgStyle.backgroundPosition = bgPosition;
    bgStyle.backgroundRepeat = bgRepeat;
    // Note: fixed attachment doesn't work well in the editor iframe, show scroll instead
    bgStyle.backgroundAttachment = bgAttachment === 'fixed' ? 'scroll' : bgAttachment;
  }
  if (minHeight) {
    bgStyle.minHeight = minHeight;
  }
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps)({
    className: ['wmblocks-grid-container', containerClass].filter(Boolean).join(' '),
    style: bgStyle
  });

  // Hex → rgba helper for overlay preview
  const hexToRgba = (hex, alpha) => {
    if (!hex) return `rgba(0,0,0,${alpha})`;
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `rgba(${r},${g},${b},${alpha})`;
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.BlockControls, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToolbarGroup, {})
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InspectorControls, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Container', 'wmblocks'),
        initialOpen: true,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Container Type', 'wmblocks'),
          value: containerType,
          options: CONTAINER_TYPES,
          onChange: v => setAttributes({
            containerType: v
          }),
          help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('container = responsive max-width. container-fluid = full width always.', 'wmblocks')
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Text Align', 'wmblocks'),
          value: textAlign,
          options: TEXT_ALIGN_OPTS,
          onChange: v => setAttributes({
            textAlign: v
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Overflow', 'wmblocks'),
          value: overflow,
          options: [{
            label: '— None —',
            value: ''
          }, {
            label: 'overflow-hidden',
            value: 'overflow-hidden'
          }, {
            label: 'overflow-auto',
            value: 'overflow-auto'
          }, {
            label: 'overflow-scroll',
            value: 'overflow-scroll'
          }],
          onChange: v => setAttributes({
            overflow: v
          }),
          help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Use overflow-hidden when using large gx-* to prevent horizontal scroll.', 'wmblocks')
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Padding X', 'wmblocks'),
          value: padding,
          options: [{
            label: '— None —',
            value: ''
          }, ...[1, 2, 3, 4, 5].map(n => ({
            label: `px-${n}`,
            value: `px-${n}`
          }))],
          onChange: v => setAttributes({
            padding: v
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Extra Classes', 'wmblocks'),
          value: customClass,
          onChange: v => setAttributes({
            customClass: v
          })
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Background Image', 'wmblocks'),
        initialOpen: false,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.MediaUploadCheck, {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.MediaUpload, {
            onSelect: media => setAttributes({
              bgImageId: media.id,
              bgImageUrl: media.url,
              bgImageAlt: media.alt || ''
            }),
            allowedTypes: ['image'],
            value: bgImageId,
            render: ({
              open
            }) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
              style: {
                marginBottom: 12
              },
              children: bgImageUrl ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                  style: {
                    position: 'relative',
                    marginBottom: 8
                  },
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("img", {
                    src: bgImageUrl,
                    alt: bgImageAlt,
                    style: {
                      width: '100%',
                      height: 120,
                      objectFit: 'cover',
                      borderRadius: 4,
                      border: '1px solid #e0e0e0',
                      display: 'block'
                    }
                  }), bgOverlayColor && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
                    style: {
                      position: 'absolute',
                      inset: 0,
                      borderRadius: 4,
                      background: hexToRgba(bgOverlayColor, bgOverlayOpacity)
                    }
                  })]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                  style: {
                    display: 'flex',
                    gap: 6
                  },
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
                    variant: "secondary",
                    onClick: open,
                    style: {
                      flex: 1
                    },
                    children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Replace Image', 'wmblocks')
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
                    variant: "tertiary",
                    isDestructive: true,
                    onClick: () => setAttributes({
                      bgImageId: 0,
                      bgImageUrl: '',
                      bgImageAlt: ''
                    }),
                    children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Remove', 'wmblocks')
                  })]
                })]
              }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
                variant: "secondary",
                onClick: open,
                style: {
                  width: '100%'
                },
                children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('＋ Set Background Image', 'wmblocks')
              })
            })
          })
        }), bgImageUrl && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Size', 'wmblocks'),
            value: bgSize,
            options: BG_SIZE_OPTS,
            onChange: v => setAttributes({
              bgSize: v
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Position', 'wmblocks'),
            value: bgPosition,
            options: BG_POSITION_OPTS,
            onChange: v => setAttributes({
              bgPosition: v
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Repeat', 'wmblocks'),
            value: bgRepeat,
            options: BG_REPEAT_OPTS,
            onChange: v => setAttributes({
              bgRepeat: v
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Attachment', 'wmblocks'),
            value: bgAttachment,
            options: BG_ATTACHMENT_OPTS,
            onChange: v => setAttributes({
              bgAttachment: v
            }),
            help: bgAttachment === 'fixed' ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Fixed (parallax) effect — previewed as scroll in editor.', 'wmblocks') : ''
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Min Height', 'wmblocks'),
            value: minHeight,
            options: MIN_HEIGHT_OPTS,
            onChange: v => setAttributes({
              minHeight: v
            }),
            help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Useful when the container has little content.', 'wmblocks')
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
            style: {
              marginTop: 12,
              padding: '10px',
              background: '#f8f9fa',
              borderRadius: 4,
              border: '1px solid #e9ecef'
            },
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
              style: {
                fontSize: 11,
                fontWeight: 600,
                color: '#333',
                margin: '0 0 8px',
                textTransform: 'uppercase',
                letterSpacing: '0.5px'
              },
              children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Color Overlay', 'wmblocks')
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
              style: {
                fontSize: 11,
                color: '#6c757d',
                margin: '0 0 10px'
              },
              children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Tints the background image. Leave blank for none.', 'wmblocks')
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ColorPicker, {
              color: bgOverlayColor || '#000000',
              onChange: v => setAttributes({
                bgOverlayColor: v
              }),
              enableAlpha: false
            }), bgOverlayColor && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.RangeControl, {
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Overlay Opacity', 'wmblocks'),
                value: bgOverlayOpacity,
                onChange: v => setAttributes({
                  bgOverlayOpacity: v
                }),
                min: 0,
                max: 1,
                step: 0.05
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
                variant: "tertiary",
                isDestructive: true,
                onClick: () => setAttributes({
                  bgOverlayColor: '',
                  bgOverlayOpacity: 0.4
                }),
                style: {
                  fontSize: 11
                },
                children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Remove Overlay', 'wmblocks')
              })]
            })]
          })]
        }), !bgImageUrl && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Min Height', 'wmblocks'),
          value: minHeight,
          options: MIN_HEIGHT_OPTS,
          onChange: v => setAttributes({
            minHeight: v
          }),
          help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Can be set independently of a background image.', 'wmblocks')
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
      ...blockProps,
      style: {
        ...blockProps.style,
        ...bgStyle,
        position: bgImageUrl ? 'relative' : undefined
      },
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
        style: {
          fontSize: 10,
          fontFamily: 'monospace',
          color: '#0d6efd',
          marginBottom: 6,
          background: 'rgba(240,246,255,0.9)',
          padding: '3px 6px',
          borderRadius: 4,
          display: 'inline-block',
          border: '1px solid #cfe2ff',
          position: 'relative',
          zIndex: 2
        },
        children: [containerClass, bgImageUrl && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
          style: {
            marginLeft: 6,
            color: '#6f42c1'
          },
          children: "\uD83D\uDDBC bg"
        }), bgAttachment === 'fixed' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
          style: {
            marginLeft: 4,
            color: '#fd7e14'
          },
          children: "\u2693 fixed"
        })]
      }), bgImageUrl && bgOverlayColor && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
        style: {
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          zIndex: 1,
          background: hexToRgba(bgOverlayColor, bgOverlayOpacity)
        }
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
        style: {
          position: 'relative',
          zIndex: 2
        },
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InnerBlocks, {
          allowedBlocks: ALLOWED,
          template: TEMPLATE,
          templateLock: false,
          renderAppender: false
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("button", {
          onMouseDown: e => {
            e.preventDefault();
            addRow();
          },
          style: {
            marginTop: 8,
            width: '100%',
            padding: '6px',
            border: '1px dashed #0d6efd',
            borderRadius: 4,
            background: 'rgba(255,255,255,0.8)',
            color: '#0d6efd',
            fontSize: 12,
            cursor: 'pointer'
          },
          children: ["+ ", (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Add Row', 'wmblocks')]
        })]
      })]
    })]
  });
}

/***/ },

/***/ "./src/grid-container/editor.scss"
/*!****************************************!*\
  !*** ./src/grid-container/editor.scss ***!
  \****************************************/
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

/***/ "./src/grid-container/block.json"
/*!***************************************!*\
  !*** ./src/grid-container/block.json ***!
  \***************************************/
(module) {

module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"wmblocks/grid-container","version":"0.1.0","title":"Grid Container","category":"watermelon-blocks","icon":"layout","description":"Bootstrap container — the root wrapper for grid rows and columns.","example":{},"supports":{"html":false,"anchor":true},"attributes":{"containerType":{"type":"string","default":"container"},"anchor":{"type":"string","default":""},"textAlign":{"type":"string","default":""},"customClass":{"type":"string","default":""},"overflow":{"type":"string","default":""},"padding":{"type":"string","default":""},"bgImageId":{"type":"integer","default":0},"bgImageUrl":{"type":"string","default":""},"bgImageAlt":{"type":"string","default":""},"bgSize":{"type":"string","default":"cover"},"bgPosition":{"type":"string","default":"center center"},"bgRepeat":{"type":"string","default":"no-repeat"},"bgAttachment":{"type":"string","default":"scroll"},"bgOverlayColor":{"type":"string","default":""},"bgOverlayOpacity":{"type":"number","default":0.4},"minHeight":{"type":"string","default":""}},"providesContext":{"wmblocks/inGrid":"containerType"},"textdomain":"wm","editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./style-index.css","render":"file:./render.php"}');

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
/*!*************************************!*\
  !*** ./src/grid-container/index.js ***!
  \*************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./src/grid-container/edit.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./block.json */ "./src/grid-container/block.json");
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