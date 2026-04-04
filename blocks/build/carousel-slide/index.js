/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/carousel-slide/edit.js"
/*!************************************!*\
  !*** ./src/carousel-slide/edit.js ***!
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
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./editor.scss */ "./src/carousel-slide/editor.scss");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);






// #1 — Placeholder gradients per slide index

const PLACEHOLDER_GRADIENTS = ['linear-gradient(135deg, #0d6efd 0%, #0a58ca 100%)', 'linear-gradient(135deg, #198754 0%, #146c43 100%)', 'linear-gradient(135deg, #dc3545 0%, #b02a37 100%)', 'linear-gradient(135deg, #6f42c1 0%, #59359a 100%)', 'linear-gradient(135deg, #fd7e14 0%, #dc6a0e 100%)'];
const PLACEHOLDER_TITLES = ['First Slide', 'Second Slide', 'Third Slide', 'Fourth Slide', 'Fifth Slide'];
const PLACEHOLDER_SUBTITLES = ['Some representative placeholder content for the first slide.', 'Some representative placeholder content for the second slide.', 'Some representative placeholder content for the third slide.', 'Some representative placeholder content for the fourth slide.', 'Some representative placeholder content for the fifth slide.'];
function Edit({
  attributes,
  setAttributes,
  clientId,
  context
}) {
  const {
    imageUrl,
    imageId,
    imageAlt,
    caption,
    captionText,
    showCaption,
    captionPosition,
    captionBgColor,
    captionBgOpacity,
    interval
  } = attributes;
  const activeSlideIndex = context['wmblocks/activeSlideIndex'] ?? 0;
  const {
    myIndex,
    siblings,
    parentClientId
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.useSelect)(select => {
    const store = select('core/block-editor');
    const parentId = store.getBlockRootClientId(clientId);
    const sibs = store.getBlocks(parentId);
    return {
      myIndex: sibs.findIndex(b => b.clientId === clientId),
      siblings: sibs,
      parentClientId: parentId
    };
  }, [clientId]);
  const isVisible = myIndex === activeSlideIndex;
  const {
    updateBlockAttributes,
    removeBlock,
    moveBlocksUp,
    moveBlocksDown
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.useDispatch)('core/block-editor');
  const handleRemove = () => {
    const newIndex = myIndex > 0 ? myIndex - 1 : 0;
    updateBlockAttributes(parentClientId, {
      activeSlideIndex: newIndex
    });
    removeBlock(clientId);
  };
  const handleMoveLeft = () => {
    if (myIndex === 0) return;
    moveBlocksUp([clientId], parentClientId);
    updateBlockAttributes(parentClientId, {
      activeSlideIndex: myIndex - 1
    });
  };
  const handleMoveRight = () => {
    if (myIndex === siblings.length - 1) return;
    moveBlocksDown([clientId], parentClientId);
    updateBlockAttributes(parentClientId, {
      activeSlideIndex: myIndex + 1
    });
  };

  // #1 — placeholder gradient based on slide index
  const placeholderGradient = PLACEHOLDER_GRADIENTS[myIndex % PLACEHOLDER_GRADIENTS.length];
  const placeholderTitle = PLACEHOLDER_TITLES[myIndex % PLACEHOLDER_TITLES.length];
  const placeholderSubtitle = PLACEHOLDER_SUBTITLES[myIndex % PLACEHOLDER_SUBTITLES.length];

  // #3 — build caption overlay rgba from color + opacity
  const hexToRgb = hex => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `${r}, ${g}, ${b}`;
  };
  const captionBg = `rgba(${hexToRgb(captionBgColor || '#000000')}, ${(captionBgOpacity || 50) / 100})`;

  // #2 — caption position classes
  const captionPositionStyle = {
    bottom: {
      bottom: 0,
      top: 'auto',
      transform: 'none'
    },
    middle: {
      top: '50%',
      bottom: 'auto',
      transform: 'translateY(-50%)'
    },
    top: {
      top: 0,
      bottom: 'auto',
      transform: 'none'
    }
  }[captionPosition || 'bottom'];
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps)({
    className: 'wmblocks-carousel-slide',
    style: {
      display: isVisible ? 'block' : 'none'
    }
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.BlockControls, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToolbarGroup, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToolbarButton, {
          icon: "arrow-left-alt2",
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Move Slide Left', 'wmblocks'),
          onClick: handleMoveLeft,
          disabled: myIndex === 0
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToolbarButton, {
          icon: "arrow-right-alt2",
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Move Slide Right', 'wmblocks'),
          onClick: handleMoveRight,
          disabled: myIndex === siblings.length - 1
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToolbarGroup, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToolbarButton, {
          icon: "trash",
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Remove Slide', 'wmblocks'),
          onClick: handleRemove,
          isDestructive: true
        })
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InspectorControls, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Slide Settings', 'wmblocks'),
        initialOpen: true,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Show Caption', 'wmblocks'),
          checked: !!showCaption,
          onChange: v => setAttributes({
            showCaption: v
          })
        }), showCaption && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextareaControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Caption Heading', 'wmblocks'),
            value: caption,
            onChange: v => setAttributes({
              caption: v
            }),
            rows: 2
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextareaControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Caption Text', 'wmblocks'),
            value: captionText,
            onChange: v => setAttributes({
              captionText: v
            }),
            rows: 3
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Caption Position', 'wmblocks'),
            value: captionPosition,
            options: [{
              label: 'Bottom',
              value: 'bottom'
            }, {
              label: 'Middle',
              value: 'middle'
            }, {
              label: 'Top',
              value: 'top'
            }],
            onChange: v => setAttributes({
              captionPosition: v
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
            style: {
              marginTop: '8px'
            },
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
              style: {
                fontSize: '11px',
                fontWeight: 600,
                color: '#1e1e1e',
                marginBottom: '6px'
              },
              children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Caption Background', 'wmblocks')
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
              style: {
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                marginBottom: '8px'
              },
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("input", {
                type: "color",
                value: captionBgColor || '#000000',
                onChange: e => setAttributes({
                  captionBgColor: e.target.value
                }),
                style: {
                  width: '36px',
                  height: '36px',
                  border: '1px solid #ddd',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  padding: '2px'
                }
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
                style: {
                  fontSize: '12px',
                  color: '#555'
                },
                children: captionBgColor || '#000000'
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.RangeControl, {
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Background Opacity (%)', 'wmblocks'),
              value: captionBgOpacity ?? 50,
              onChange: v => setAttributes({
                captionBgOpacity: v
              }),
              min: 0,
              max: 100,
              step: 5,
              renderTooltipContent: v => v + '%'
            })]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.RangeControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Custom Interval (ms)', 'wmblocks'),
          value: interval,
          onChange: v => setAttributes({
            interval: v
          }),
          min: 0,
          max: 10000,
          step: 500,
          help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('0 = use carousel default.', 'wmblocks')
        })]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
      ...blockProps,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
        style: {
          display: 'flex',
          alignItems: 'center',
          marginBottom: '8px'
        },
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("span", {
          style: {
            fontSize: '11px',
            fontWeight: 600,
            color: '#fff',
            background: 'rgba(255,255,255,0.2)',
            borderRadius: '4px',
            padding: '2px 8px'
          },
          children: [(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Slide', 'wmblocks'), " ", myIndex + 1]
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.MediaUploadCheck, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.MediaUpload, {
          onSelect: media => setAttributes({
            imageUrl: media.url,
            imageId: media.id,
            imageAlt: media.alt || ''
          }),
          allowedTypes: ['image'],
          value: imageId,
          render: ({
            open
          }) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
            className: "wmblocks-slide-image-area",
            style: {
              background: imageUrl ? `url(${imageUrl}) center/cover no-repeat` : placeholderGradient,
              minHeight: '220px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              borderRadius: '4px',
              position: 'relative',
              overflow: 'hidden'
            },
            children: [!imageUrl && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
              onClick: open,
              style: {
                textAlign: 'center',
                color: 'rgba(255,255,255,0.9)',
                padding: '20px',
                width: '100%'
              },
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
                style: {
                  fontSize: '13px',
                  fontWeight: 600,
                  marginBottom: '6px',
                  opacity: 0.6
                },
                children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Click to upload image', 'wmblocks')
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                style: {
                  marginTop: '16px',
                  background: 'rgba(0,0,0,0.4)',
                  borderRadius: '4px',
                  padding: '12px'
                },
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("h5", {
                  style: {
                    margin: '0 0 4px',
                    fontSize: '18px',
                    fontWeight: 700
                  },
                  children: placeholderTitle
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
                  style: {
                    margin: 0,
                    fontSize: '13px',
                    opacity: 0.85
                  },
                  children: placeholderSubtitle
                })]
              })]
            }), imageUrl && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
              style: {
                position: 'absolute',
                bottom: '8px',
                right: '8px',
                display: 'flex',
                gap: '4px'
              },
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
                variant: "secondary",
                size: "small",
                onClick: e => {
                  e.stopPropagation();
                  open();
                },
                children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Change', 'wmblocks')
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
                variant: "secondary",
                size: "small",
                isDestructive: true,
                onClick: e => {
                  e.stopPropagation();
                  setAttributes({
                    imageUrl: '',
                    imageId: 0,
                    imageAlt: ''
                  });
                },
                children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Remove', 'wmblocks')
              })]
            }), showCaption && (caption || captionText) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
              style: {
                position: 'absolute',
                left: 0,
                right: 0,
                padding: '12px 20px',
                background: captionBg,
                color: '#fff',
                ...captionPositionStyle
              },
              children: [caption && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("h5", {
                style: {
                  margin: '0 0 4px',
                  fontSize: '16px',
                  fontWeight: 700
                },
                children: caption
              }), captionText && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
                style: {
                  margin: 0,
                  fontSize: '13px',
                  opacity: 0.9
                },
                children: captionText
              })]
            })]
          })
        })
      })]
    })]
  });
}

/***/ },

/***/ "./src/carousel-slide/index.js"
/*!*************************************!*\
  !*** ./src/carousel-slide/index.js ***!
  \*************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.scss */ "./src/carousel-slide/style.scss");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit */ "./src/carousel-slide/edit.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./block.json */ "./src/carousel-slide/block.json");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);






(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_4__.name, {
  edit: _edit__WEBPACK_IMPORTED_MODULE_3__["default"],
  save: () => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
    ..._wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps.save(),
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InnerBlocks.Content, {})
  })
});

/***/ },

/***/ "./src/carousel-slide/editor.scss"
/*!****************************************!*\
  !*** ./src/carousel-slide/editor.scss ***!
  \****************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ },

/***/ "./src/carousel-slide/style.scss"
/*!***************************************!*\
  !*** ./src/carousel-slide/style.scss ***!
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

/***/ "./src/carousel-slide/block.json"
/*!***************************************!*\
  !*** ./src/carousel-slide/block.json ***!
  \***************************************/
(module) {

module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"wmblocks/carousel-slide","version":"0.1.0","title":"Carousel Slide","category":"watermelon-blocks","icon":"format-image","description":"A single slide inside the Carousel block.","example":{},"parent":["wmblocks/carousel"],"supports":{"html":false,"reusable":false},"attributes":{"imageUrl":{"type":"string","default":""},"imageId":{"type":"number","default":0},"imageAlt":{"type":"string","default":""},"caption":{"type":"string","default":""},"captionText":{"type":"string","default":""},"showCaption":{"type":"boolean","default":false},"interval":{"type":"number","default":0},"captionPosition":{"type":"string","default":"bottom"},"captionBgColor":{"type":"string","default":"#000000"},"captionBgOpacity":{"type":"number","default":50}},"usesContext":["wmblocks/activeSlideIndex","wmblocks/slideIndex"],"textdomain":"wmblocks","editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./style-index.css","render":"file:./render.php"}');

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
/******/ 			"carousel-slide/index": 0,
/******/ 			"carousel-slide/style-index": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["carousel-slide/style-index"], () => (__webpack_require__("./src/carousel-slide/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map