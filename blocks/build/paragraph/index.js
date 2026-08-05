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
      wmOnce
    } = attributes;
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(BlockEdit, {
        ...props
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InspectorControls, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
          title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Animations', 'wmblocks'),
          initialOpen: false,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('On Scroll Animation', 'wmblocks'),
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
          }), wmAnim !== 'none' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
            className: "wmblocks-animation-advanced",
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
          })]
        })
      })]
    });
  };
}, 'withGlobalControls');
(0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__.addFilter)('editor.BlockEdit', 'wmblocks/add-global-controls', withGlobalControls, 100);

/***/ },

/***/ "./src/paragraph/edit.js"
/*!*******************************!*\
  !*** ./src/paragraph/edit.js ***!
  \*******************************/
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
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./editor.scss */ "./src/paragraph/editor.scss");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);





function Edit({
  attributes,
  setAttributes
}) {
  const {
    content,
    dropCap,
    dropCapColor,
    dropCapSize,
    dropCapWeight,
    backgroundColorClass,
    bgGradient,
    linkColor,
    linkHoverColor,
    margin,
    padding,
    textStyle,
    textDecoration,
    textWrap,
    textTransform,
    fontSize,
    fontWeight,
    fontStyle,
    lineHeight,
    fontMonospace,
    textReset,
    wrapStrong,
    wrapEm,
    wrapDel,
    wrapIns
  } = attributes;
  const backgroundColors = [
  // Blue
  {
    name: "Base Blue",
    color: "#0d6efd",
    slug: "base-blue"
  }, {
    name: "Blue 100",
    color: "#cfe2ff",
    slug: "blue-100"
  }, {
    name: "Blue 200",
    color: "#9ec5fe",
    slug: "blue-200"
  }, {
    name: "Blue 300",
    color: "#6ea8fe",
    slug: "blue-300"
  }, {
    name: "Blue 400",
    color: "#3d8bfd",
    slug: "blue-400"
  }, {
    name: "Blue 500",
    color: "#0d6efd",
    slug: "blue-500"
  }, {
    name: "Blue 600",
    color: "#0a58ca",
    slug: "blue-600"
  }, {
    name: "Blue 700",
    color: "#084298",
    slug: "blue-700"
  }, {
    name: "Blue 800",
    color: "#052c65",
    slug: "blue-800"
  }, {
    name: "Blue 900",
    color: "#031633",
    slug: "blue-900"
  },
  // Indigo
  {
    name: "Base Indigo",
    color: "#6610f2",
    slug: "base-indigo"
  }, {
    name: "Indigo 100",
    color: "#e0cffc",
    slug: "indigo-100"
  }, {
    name: "Indigo 200",
    color: "#c29ffa",
    slug: "indigo-200"
  }, {
    name: "Indigo 300",
    color: "#a370f7",
    slug: "indigo-300"
  }, {
    name: "Indigo 400",
    color: "#8540f5",
    slug: "indigo-400"
  }, {
    name: "Indigo 500",
    color: "#6610f2",
    slug: "indigo-500"
  }, {
    name: "Indigo 600",
    color: "#520dc2",
    slug: "indigo-600"
  }, {
    name: "Indigo 700",
    color: "#3d0a91",
    slug: "indigo-700"
  }, {
    name: "Indigo 800",
    color: "#290661",
    slug: "indigo-800"
  }, {
    name: "Indigo 900",
    color: "#140330",
    slug: "indigo-900"
  },
  // Purple
  {
    name: "Base Purple",
    color: "#6f42c1",
    slug: "base-purple"
  }, {
    name: "Purple 100",
    color: "#e2d9f3",
    slug: "purple-100"
  }, {
    name: "Purple 200",
    color: "#c5b3e6",
    slug: "purple-200"
  }, {
    name: "Purple 300",
    color: "#a98eda",
    slug: "purple-300"
  }, {
    name: "Purple 400",
    color: "#8c68cd",
    slug: "purple-400"
  }, {
    name: "Purple 500",
    color: "#6f42c1",
    slug: "purple-500"
  }, {
    name: "Purple 600",
    color: "#59359a",
    slug: "purple-600"
  }, {
    name: "Purple 700",
    color: "#432874",
    slug: "purple-700"
  }, {
    name: "Purple 800",
    color: "#2c1a4d",
    slug: "purple-800"
  }, {
    name: "Purple 900",
    color: "#160d27",
    slug: "purple-900"
  },
  // Pink
  {
    name: "Base Pink",
    color: "#d63384",
    slug: "base-pink"
  }, {
    name: "Pink 100",
    color: "#f7d6e6",
    slug: "pink-100"
  }, {
    name: "Pink 200",
    color: "#efadce",
    slug: "pink-200"
  }, {
    name: "Pink 300",
    color: "#e685b5",
    slug: "pink-300"
  }, {
    name: "Pink 400",
    color: "#de5c9d",
    slug: "pink-400"
  }, {
    name: "Pink 500",
    color: "#d63384",
    slug: "pink-500"
  }, {
    name: "Pink 600",
    color: "#ab296a",
    slug: "pink-600"
  }, {
    name: "Pink 700",
    color: "#801f4f",
    slug: "pink-700"
  }, {
    name: "Pink 800",
    color: "#561435",
    slug: "pink-800"
  }, {
    name: "Pink 900",
    color: "#2b0a1a",
    slug: "pink-900"
  },
  // Red
  {
    name: "Base Red",
    color: "#dc3545",
    slug: "base-red"
  }, {
    name: "Red 100",
    color: "#f8d7da",
    slug: "red-100"
  }, {
    name: "Red 200",
    color: "#f1aeb5",
    slug: "red-200"
  }, {
    name: "Red 300",
    color: "#ea868f",
    slug: "red-300"
  }, {
    name: "Red 400",
    color: "#e35d6a",
    slug: "red-400"
  }, {
    name: "Red 500",
    color: "#dc3545",
    slug: "red-500"
  }, {
    name: "Red 600",
    color: "#b02a37",
    slug: "red-600"
  }, {
    name: "Red 700",
    color: "#842029",
    slug: "red-700"
  }, {
    name: "Red 800",
    color: "#58151c",
    slug: "red-800"
  }, {
    name: "Red 900",
    color: "#2c0b0e",
    slug: "red-900"
  },
  // Orange
  {
    name: "Base Orange",
    color: "#fd7e14",
    slug: "base-orange"
  }, {
    name: "Orange 100",
    color: "#ffe5d0",
    slug: "orange-100"
  }, {
    name: "Orange 200",
    color: "#fecba1",
    slug: "orange-200"
  }, {
    name: "Orange 300",
    color: "#feb272",
    slug: "orange-300"
  }, {
    name: "Orange 400",
    color: "#fd9843",
    slug: "orange-400"
  }, {
    name: "Orange 500",
    color: "#fd7e14",
    slug: "orange-500"
  }, {
    name: "Orange 600",
    color: "#ca6510",
    slug: "orange-600"
  }, {
    name: "Orange 700",
    color: "#984c0c",
    slug: "orange-700"
  }, {
    name: "Orange 800",
    color: "#653208",
    slug: "orange-800"
  }, {
    name: "Orange 900",
    color: "#331904",
    slug: "orange-900"
  },
  // Yellow
  {
    name: "Base Yellow",
    color: "#ffc107",
    slug: "base-yellow"
  }, {
    name: "Yellow 100",
    color: "#fff3cd",
    slug: "yellow-100"
  }, {
    name: "Yellow 200",
    color: "#ffe69c",
    slug: "yellow-200"
  }, {
    name: "Yellow 300",
    color: "#ffda6a",
    slug: "yellow-300"
  }, {
    name: "Yellow 400",
    color: "#ffcd39",
    slug: "yellow-400"
  }, {
    name: "Yellow 500",
    color: "#ffc107",
    slug: "yellow-500"
  }, {
    name: "Yellow 600",
    color: "#cc9a06",
    slug: "yellow-600"
  }, {
    name: "Yellow 700",
    color: "#997404",
    slug: "yellow-700"
  }, {
    name: "Yellow 800",
    color: "#664d03",
    slug: "yellow-800"
  }, {
    name: "Yellow 900",
    color: "#332701",
    slug: "yellow-900"
  },
  // Green
  {
    name: "Base Green",
    color: "#198754",
    slug: "base-green"
  }, {
    name: "Green 100",
    color: "#d1e7dd",
    slug: "green-100"
  }, {
    name: "Green 200",
    color: "#a3cfbb",
    slug: "green-200"
  }, {
    name: "Green 300",
    color: "#75b798",
    slug: "green-300"
  }, {
    name: "Green 400",
    color: "#479f76",
    slug: "green-400"
  }, {
    name: "Green 500",
    color: "#198754",
    slug: "green-500"
  }, {
    name: "Green 600",
    color: "#146c43",
    slug: "green-600"
  }, {
    name: "Green 700",
    color: "#0f5132",
    slug: "green-700"
  }, {
    name: "Green 800",
    color: "#0a3622",
    slug: "green-800"
  }, {
    name: "Green 900",
    color: "#051b11",
    slug: "green-900"
  },
  // Teal
  {
    name: "Base Teal",
    color: "#20c997",
    slug: "base-teal"
  }, {
    name: "Teal 100",
    color: "#d2f4ea",
    slug: "teal-100"
  }, {
    name: "Teal 200",
    color: "#a6e9d5",
    slug: "teal-200"
  }, {
    name: "Teal 300",
    color: "#79dfc1",
    slug: "teal-300"
  }, {
    name: "Teal 400",
    color: "#4dd4ac",
    slug: "teal-400"
  }, {
    name: "Teal 500",
    color: "#20c997",
    slug: "teal-500"
  }, {
    name: "Teal 600",
    color: "#1aa179",
    slug: "teal-600"
  }, {
    name: "Teal 700",
    color: "#13795b",
    slug: "teal-700"
  }, {
    name: "Teal 800",
    color: "#0d503c",
    slug: "teal-800"
  }, {
    name: "Teal 900",
    color: "#06281e",
    slug: "teal-900"
  },
  // Cyan
  {
    name: "Base Cyan",
    color: "#0dcaf0",
    slug: "base-cyan"
  }, {
    name: "Cyan 100",
    color: "#cff4fc",
    slug: "cyan-100"
  }, {
    name: "Cyan 200",
    color: "#9eeaf9",
    slug: "cyan-200"
  }, {
    name: "Cyan 300",
    color: "#6edff6",
    slug: "cyan-300"
  }, {
    name: "Cyan 400",
    color: "#3dd5f3",
    slug: "cyan-400"
  }, {
    name: "Cyan 500",
    color: "#0dcaf0",
    slug: "cyan-500"
  }, {
    name: "Cyan 600",
    color: "#0aa2c0",
    slug: "cyan-600"
  }, {
    name: "Cyan 700",
    color: "#087990",
    slug: "cyan-700"
  }, {
    name: "Cyan 800",
    color: "#055160",
    slug: "cyan-800"
  }, {
    name: "Cyan 900",
    color: "#032830",
    slug: "cyan-900"
  },
  // Gray
  {
    name: "Base Gray",
    color: "#6c757d",
    slug: "base-gray"
  }, {
    name: "Gray 100",
    color: "#f8f9fa",
    slug: "gray-100"
  }, {
    name: "Gray 200",
    color: "#e9ecef",
    slug: "gray-200"
  }, {
    name: "Gray 300",
    color: "#dee2e6",
    slug: "gray-300"
  }, {
    name: "Gray 400",
    color: "#ced4da",
    slug: "gray-400"
  }, {
    name: "Gray 500",
    color: "#adb5bd",
    slug: "gray-500"
  }, {
    name: "Gray 600",
    color: "#6c757d",
    slug: "gray-600"
  }, {
    name: "Gray 700",
    color: "#495057",
    slug: "gray-700"
  }, {
    name: "Gray 800",
    color: "#343a40",
    slug: "gray-800"
  }, {
    name: "Gray 900",
    color: "#212529",
    slug: "gray-900"
  },
  // Black & White
  {
    name: "Base Black",
    color: "#000000",
    slug: "base-black"
  }, {
    name: "Base White",
    color: "#ffffff",
    slug: "base-white"
  }];

  // Add this array to your component
  const gradientPresets = [{
    name: "Blue",
    class: "bg-gradient-blue",
    style: "linear-gradient(45deg, #0d6efd, #0dcaf0)"
  }, {
    name: "Purple",
    class: "bg-gradient-purple",
    style: "linear-gradient(45deg, #6f42c1, #d63384)"
  }, {
    name: "Ocean",
    class: "bg-gradient-ocean",
    style: "linear-gradient(to right, #20c997, #0dcaf0)"
  }, {
    name: "Warm",
    class: "bg-gradient-warm",
    style: "linear-gradient(to right, #fd7e14, #ffc107)"
  }, {
    name: "Visual Blue",
    class: "bg-visual-blue",
    style: "linear-gradient(to right, rgb(0, 61, 77), rgb(0, 201, 150))"
  }, {
    name: "Dusty Grass",
    class: "bg-dusty-grass",
    style: "linear-gradient(to right, rgb(212, 252, 121), rgb(150, 230, 161))"
  }, {
    name: "Neon Green",
    class: "bg-neon-green",
    style: "linear-gradient(to right, rgb(129, 255, 138), rgb(100, 150, 94))"
  }, {
    name: "After the Rain",
    class: "bg-after-the-rain",
    style: "linear-gradient(to right, rgb(255, 117, 195), rgb(255, 166, 71), rgb(255, 232, 63), rgb(159, 255, 91), rgb(112, 226, 255), rgb(205, 147, 255))"
  }, {
    name: "Racker",
    class: "bg-racker",
    style: "linear-gradient(to right, rgb(235, 0, 0), rgb(149, 0, 138), rgb(51, 0, 252))"
  }, {
    name: "Hyper Blue",
    class: "bg-hyper-blue",
    style: "linear-gradient(to right, rgb(89, 205, 233), rgb(10, 42, 136))"
  }, {
    name: "Whinehouse",
    class: "bg-whinehouse",
    style: "linear-gradient(to right, rgb(247, 247, 247), rgb(185, 160, 160), rgb(121, 71, 71), rgb(78, 32, 32), rgb(17, 17, 17))"
  }, {
    name: "Moonwalker",
    class: "bg-moonwalker",
    style: "linear-gradient(to right, rgb(21, 35, 49), rgb(0, 0, 0))"
  }, {
    name: "Andreuzza",
    class: "bg-andreuzza",
    style: "linear-gradient(to right, rgb(215, 6, 82), rgb(255, 2, 94))"
  }, {
    name: "Compass",
    class: "bg-compass",
    style: "linear-gradient(to right, rgb(81, 107, 139), rgb(5, 107, 59))"
  }, {
    name: "Coffee Gold",
    class: "bg-coffee-gold",
    style: "linear-gradient(to right, rgb(85, 64, 35), rgb(201, 152, 70))"
  }, {
    name: "Bleem",
    class: "bg-bleem",
    style: "linear-gradient(to right, rgb(66, 132, 219), rgb(41, 234, 196))"
  }, {
    name: "Emerald Sea",
    class: "bg-emerald-sea",
    style: "linear-gradient(to right, rgb(5, 56, 107), rgb(92, 219, 149))"
  }, {
    name: "Ameena",
    class: "bg-ameena",
    style: "linear-gradient(to right, rgb(12, 12, 109), rgb(222, 81, 43), rgb(152, 208, 193), rgb(91, 178, 38), rgb(2, 60, 13))"
  }, {
    name: "Winter Woods",
    class: "bg-winter-woods",
    style: "linear-gradient(to right, rgb(51, 51, 51), rgb(162, 171, 88), rgb(164, 57, 49))"
  }, {
    name: "Abbas",
    class: "bg-abbas",
    style: "linear-gradient(to right, rgb(0, 255, 240), rgb(0, 131, 254))"
  }, {
    name: "Peach Sea",
    class: "bg-peach-sea",
    style: "linear-gradient(to right, rgb(230, 174, 140), rgb(168, 206, 207))"
  }, {
    name: "Elate The Euge",
    class: "bg-elate-the-euge",
    style: "linear-gradient(to right, rgb(139, 222, 218), rgb(67, 173, 208), rgb(153, 142, 224), rgb(225, 125, 194), rgb(239, 147, 147))"
  }, {
    name: "Flower",
    class: "bg-flower",
    style: "linear-gradient(to right, rgb(220, 255, 189), rgb(204, 134, 209))"
  }, {
    name: "Space Light Green",
    class: "bg-space-light-green",
    style: "linear-gradient(to right, rgb(159, 160, 168), rgb(92, 120, 82))"
  }, {
    name: "Blue Slate",
    class: "bg-blue-slate",
    style: "linear-gradient(to right, rgb(181, 185, 255), rgb(43, 44, 73))"
  }, {
    name: "Blooze",
    class: "bg-blooze",
    style: "linear-gradient(to right, rgb(109, 166, 190), rgb(75, 133, 158), rgb(109, 166, 190))"
  }, {
    name: "Twitter",
    class: "bg-twitter",
    style: "linear-gradient(to right, rgb(29, 161, 242), rgb(0, 159, 252))"
  }, {
    name: "Blue Red",
    class: "bg-blue-red",
    style: "linear-gradient(to right, rgb(54, 177, 199), rgb(150, 11, 51))"
  }, {
    name: "Flame",
    class: "bg-flame",
    style: "linear-gradient(to right, rgb(255, 0, 0), rgb(253, 207, 88))"
  }, {
    name: "Unicorn Rainbow",
    class: "bg-unicorn-rainbow",
    style: "linear-gradient(to right, rgb(247, 240, 172), rgb(172, 247, 240), rgb(240, 172, 247))"
  }, {
    name: "Mango Papaya",
    class: "bg-mango-papaya",
    style: "linear-gradient(to right, rgb(222, 138, 65), rgb(42, 218, 83))"
  }, {
    name: "Beleko",
    class: "bg-beleko",
    style: "linear-gradient(to right, rgb(255, 30, 86), rgb(249, 201, 66), rgb(30, 144, 255))"
  }, {
    name: "Lemon Lime",
    class: "bg-lemon-lime",
    style: "linear-gradient(to right, rgb(126, 198, 188), rgb(235, 231, 23))"
  }, {
    name: "Dark Blu Two",
    class: "bg-dark-blu-two",
    style: "linear-gradient(to right, rgb(0, 70, 128), rgb(68, 132, 186))"
  }, {
    name: "Dark Blue Gradient",
    class: "bg-dark-blue-gradient",
    style: "linear-gradient(to right, rgb(39, 116, 174), rgb(0, 46, 93), rgb(0, 46, 93))"
  }, {
    name: "Newspaper",
    class: "bg-newspaper",
    style: "linear-gradient(to right, rgb(138, 43, 226), rgb(255, 165, 0), rgb(248, 248, 255))"
  }, {
    name: "Lensod",
    class: "bg-lensod",
    style: "linear-gradient(to right, rgb(96, 37, 245), rgb(255, 85, 85))"
  }, {
    name: "Under Blue Green",
    class: "bg-under-blue-green",
    style: "linear-gradient(to right, rgb(5, 25, 55), rgb(0, 77, 122), rgb(0, 135, 147), rgb(0, 191, 114), rgb(168, 235, 18))"
  }, {
    name: "Electric Peacock",
    class: "bg-electric-peacock",
    style: "linear-gradient(to right, rgb(138, 43, 226), rgb(0, 0, 205), rgb(34, 139, 34), rgb(204, 255, 0))"
  }, {
    name: "Zenta",
    class: "bg-zenta",
    style: "linear-gradient(to right, rgb(42, 45, 62), rgb(254, 203, 110))"
  }, {
    name: "Telko",
    class: "bg-telko",
    style: "linear-gradient(to right, rgb(243, 98, 34), rgb(92, 182, 68), rgb(0, 127, 195))"
  }, {
    name: "Grade Grey",
    class: "bg-grade-grey",
    style: "linear-gradient(to right, rgb(189, 195, 199), rgb(44, 62, 80))"
  }, {
    name: "Piggy Pink",
    class: "bg-piggy-pink",
    style: "linear-gradient(to right, rgb(238, 156, 167), rgb(255, 221, 225))"
  }, {
    name: "Cool Blues",
    class: "bg-cool-blues",
    style: "linear-gradient(to right, rgb(33, 147, 176), rgb(109, 213, 237))"
  }, {
    name: "MegaTron",
    class: "bg-megatron",
    style: "linear-gradient(to right, rgb(198, 255, 221), rgb(251, 215, 134), rgb(247, 121, 125))"
  }, {
    name: "Moonlit Asteroid",
    class: "bg-moonlit-asteroid",
    style: "linear-gradient(to right, rgb(15, 32, 39), rgb(32, 58, 67), rgb(44, 83, 100))"
  }, {
    name: "JShine",
    class: "bg-jshine",
    style: "linear-gradient(to right, rgb(18, 194, 233), rgb(196, 113, 237), rgb(246, 79, 89))"
  }, {
    name: "Evening Sunshine",
    class: "bg-evening-sunshine",
    style: "linear-gradient(to right, rgb(185, 43, 39), rgb(21, 101, 192))"
  }, {
    name: "Dark Ocean",
    class: "bg-dark-ocean",
    style: "linear-gradient(to right, rgb(55, 59, 68), rgb(66, 134, 244))"
  }, {
    name: "Cool Sky",
    class: "bg-cool-sky",
    style: "linear-gradient(to right, rgb(41, 128, 185), rgb(109, 213, 250), rgb(255, 255, 255))"
  }, {
    name: "Yoda",
    class: "bg-yoda",
    style: "linear-gradient(to right, rgb(255, 0, 153), rgb(73, 50, 64))"
  }, {
    name: "Memariani",
    class: "bg-memariani",
    style: "linear-gradient(to right, rgb(170, 75, 107), rgb(107, 107, 131), rgb(59, 141, 153))"
  }, {
    name: "Amin",
    class: "bg-amin",
    style: "linear-gradient(to right, rgb(142, 45, 226), rgb(74, 0, 224))"
  }, {
    name: "Harvey",
    class: "bg-harvey",
    style: "linear-gradient(to right, rgb(31, 64, 55), rgb(153, 242, 200))"
  }, {
    name: "Neuromancer",
    class: "bg-neuromancer",
    style: "linear-gradient(to right, rgb(249, 83, 198), rgb(185, 29, 115))"
  }, {
    name: "Azur Lane",
    class: "bg-azur-lane",
    style: "linear-gradient(to right, rgb(127, 127, 213), rgb(134, 168, 231), rgb(145, 234, 228))"
  }, {
    name: "Witching Hour",
    class: "bg-witching-hour",
    style: "linear-gradient(to right, rgb(195, 20, 50), rgb(36, 11, 54))"
  }, {
    name: "Flare",
    class: "bg-flare",
    style: "linear-gradient(to right, rgb(241, 39, 17), rgb(245, 175, 25))"
  }, {
    name: "Metapolis",
    class: "bg-metapolis",
    style: "linear-gradient(to right, rgb(101, 153, 153), rgb(244, 121, 31))"
  }, {
    name: "Kyoo Pal",
    class: "bg-kyoo-pal",
    style: "linear-gradient(to right, rgb(221, 62, 84), rgb(107, 229, 133))"
  }, {
    name: "Kye Meh",
    class: "bg-kye-meh",
    style: "linear-gradient(to right, rgb(131, 96, 195), rgb(46, 191, 145))"
  }, {
    name: "Kyoo Tah",
    class: "bg-kyoo-tah",
    style: "linear-gradient(to right, rgb(84, 74, 125), rgb(255, 212, 82))"
  }, {
    name: "By Design",
    class: "bg-by-design",
    style: "linear-gradient(to right, rgb(0, 159, 255), rgb(236, 47, 75))"
  }, {
    name: "Ultra Voilet",
    class: "bg-ultra-voilet",
    style: "linear-gradient(to right, rgb(101, 78, 163), rgb(234, 175, 200))"
  }, {
    name: "Burning Orange",
    class: "bg-burning-orange",
    style: "linear-gradient(to right, rgb(255, 65, 108), rgb(255, 75, 43))"
  }, {
    name: "Wiretap",
    class: "bg-wiretap",
    style: "linear-gradient(to right, rgb(138, 35, 135), rgb(233, 64, 87), rgb(242, 113, 33))"
  }, {
    name: "Summer Dog",
    class: "bg-summer-dog",
    style: "linear-gradient(to right, rgb(168, 255, 120), rgb(120, 255, 214))"
  }, {
    name: "Rastafari",
    class: "bg-rastafari",
    style: "linear-gradient(to right, rgb(30, 150, 0), rgb(255, 242, 0), rgb(255, 0, 0))"
  }, {
    name: "Sin City Red",
    class: "bg-sin-city-red",
    style: "linear-gradient(to right, rgb(237, 33, 58), rgb(147, 41, 30))"
  }, {
    name: "Citrus Peel",
    class: "bg-citrus-peel",
    style: "linear-gradient(to right, rgb(253, 200, 48), rgb(243, 115, 53))"
  }, {
    name: "Blue Raspberry",
    class: "bg-blue-raspberry",
    style: "linear-gradient(to right, rgb(0, 180, 219), rgb(0, 131, 176))"
  }, {
    name: "Margo",
    class: "bg-margo",
    style: "linear-gradient(to right, rgb(255, 239, 186), rgb(255, 255, 255))"
  }, {
    name: "Magic",
    class: "bg-magic",
    style: "linear-gradient(to right, rgb(89, 193, 115), rgb(161, 127, 224), rgb(93, 38, 193))"
  }, {
    name: "Evening Night",
    class: "bg-evening-night",
    style: "linear-gradient(to right, rgb(0, 90, 167), rgb(255, 253, 228))"
  }, {
    name: "Vanusa",
    class: "bg-vanusa",
    style: "linear-gradient(to right, rgb(218, 68, 83), rgb(137, 33, 107))"
  }, {
    name: "Shifty",
    class: "bg-shifty",
    style: "linear-gradient(to right, rgb(99, 99, 99), rgb(162, 171, 88))"
  }, {
    name: "eXpresso",
    class: "bg-expresso",
    style: "linear-gradient(to right, rgb(173, 83, 137), rgb(60, 16, 83))"
  }, {
    name: "Slight Ocean View",
    class: "bg-slight-ocean-view",
    style: "linear-gradient(to right, rgb(168, 192, 255), rgb(63, 43, 150))"
  }, {
    name: "Pure Lust",
    class: "bg-pure-lust",
    style: "linear-gradient(to right, rgb(51, 51, 51), rgb(221, 24, 24))"
  }, {
    name: "Moon Purple",
    class: "bg-moon-purple",
    style: "linear-gradient(to right, rgb(78, 84, 200), rgb(143, 148, 251))"
  }, {
    name: "Red Sunset",
    class: "bg-red-sunset",
    style: "linear-gradient(to right, rgb(53, 92, 125), rgb(108, 91, 123), rgb(192, 108, 132)))"
  }, {
    name: "Shifter",
    class: "bg-shifter",
    style: "linear-gradient(to right, rgb(188, 78, 156), rgb(248, 7, 89))"
  }, {
    name: "Wedding Day Blues",
    class: "bg-wedding-day-blues",
    style: "linear-gradient(to right, rgb(64, 224, 208), rgb(255, 140, 0), rgb(255, 0, 128))"
  }, {
    name: "Sand to Blue",
    class: "bg-sand-to-blue",
    style: "linear-gradient(to right, rgb(62, 81, 81), rgb(222, 203, 164))"
  }, {
    name: "Quepal",
    class: "bg-quepal",
    style: "linear-gradient(to right, rgb(17, 153, 142), rgb(56, 239, 125))"
  }, {
    name: "Pun Yeta",
    class: "bg-pun-yeta",
    style: "linear-gradient(to right, rgb(16, 141, 199), rgb(239, 142, 56))"
  }, {
    name: "Sublime Light",
    class: "bg-sublime-light",
    style: "linear-gradient(to right, rgb(252, 92, 125), rgb(106, 130, 251))"
  }, {
    name: "Sublime Vivid",
    class: "bg-sublime-vivid",
    style: "linear-gradient(to right, rgb(252, 70, 107), rgb(63, 94, 251))"
  }, {
    name: "Bighead",
    class: "bg-bighead",
    style: "linear-gradient(to right, rgb(201, 75, 75), rgb(75, 19, 79))"
  }, {
    name: "Taran Tado",
    class: "bg-taran-tado",
    style: "linear-gradient(to right, rgb(35, 7, 77), rgb(204, 83, 51))"
  }, {
    name: "Relaxing red",
    class: "bg-relaxing-red",
    style: "linear-gradient(to right, rgb(255, 251, 213), rgb(178, 10, 44))"
  }, {
    name: "Lawrencium",
    class: "bg-lawrencium",
    style: "linear-gradient(to right, rgb(15, 12, 41), rgb(48, 43, 99), rgb(36, 36, 62))"
  }, {
    name: "Ohhappiness",
    class: "bg-ohhappiness",
    style: "linear-gradient(to right, rgb(0, 176, 155), rgb(150, 201, 61))"
  }, {
    name: "Delicate",
    class: "bg-delicate",
    style: "linear-gradient(to right, rgb(211, 204, 227), rgb(233, 228, 240))"
  }, {
    name: "Selenium",
    class: "bg-selenium",
    style: "linear-gradient(to right, rgb(60, 59, 63), rgb(96, 92, 60))"
  }, {
    name: "Sulphur",
    class: "bg-sulphur",
    style: "linear-gradient(to right, rgb(202, 197, 49), rgb(243, 249, 167))"
  }, {
    name: "Pink Flavour",
    class: "bg-pink-flavour",
    style: "linear-gradient(to right, rgb(128, 0, 128), rgb(255, 192, 203))"
  }, {
    name: "Rainbow Blue",
    class: "bg-rainbow-blue",
    style: "linear-gradient(to right, rgb(128, 0, 128), rgb(255, 192, 203))"
  }, {
    name: "Orange Fun",
    class: "bg-orange-fun",
    style: "linear-gradient(to right, rgb(252, 74, 26), rgb(247, 183, 51))"
  }, {
    name: "Digital Water",
    class: "bg-digital-water",
    style: "linear-gradient(to right, rgb(116, 235, 213), rgb(172, 182, 229))"
  }, {
    name: "Lithium",
    class: "bg-lithium",
    style: "linear-gradient(to right, rgb(109, 96, 39), rgb(211, 203, 184))"
  }, {
    name: "Argon",
    class: "bg-argon",
    style: "linear-gradient(to right, rgb(3, 0, 30), rgb(115, 3, 192), rgb(236, 56, 188), rgb(253, 239, 249))"
  }, {
    name: "Hydrogen",
    class: "bg-hydrogen",
    style: "linear-gradient(to right, rgb(102, 125, 182), rgb(0, 130, 200), rgb(0, 130, 200), rgb(102, 125, 182))"
  }, {
    name: "Zinc",
    class: "bg-zinc",
    style: "linear-gradient(to right, rgb(173, 169, 150), rgb(242, 242, 242), rgb(219, 219, 219), rgb(234, 234, 234))"
  }, {
    name: "Velvet Sun",
    class: "bg-velvet-sun",
    style: "linear-gradient(to right, rgb(225, 238, 195), rgb(240, 80, 83))"
  }, {
    name: "King Yna",
    class: "bg-king-yna",
    style: "linear-gradient(to right, rgb(26, 42, 108), rgb(178, 31, 31), rgb(253, 187, 45))"
  }, {
    name: "Summer",
    class: "bg-summer",
    style: "linear-gradient(to right, rgb(34, 193, 195), rgb(253, 187, 45))"
  }, {
    name: "Orange Coral",
    class: "bg-orange-coral",
    style: "linear-gradient(to right, rgb(255, 153, 102), rgb(255, 94, 98))"
  }, {
    name: "Purpink",
    class: "bg-purpink",
    style: "linear-gradient(to right, rgb(127, 0, 255), rgb(225, 0, 255))"
  }, {
    name: "Dull",
    class: "bg-dull",
    style: "linear-gradient(to right, rgb(201, 214, 255), rgb(226, 226, 226))"
  }, {
    name: "Kimoby Is The New Blue",
    class: "bg-kimoby-is-the-new-blue",
    style: "linear-gradient(to right, rgb(57, 106, 252), rgb(41, 72, 255))"
  }, {
    name: "Broken Hearts",
    class: "bg-broken-hearts",
    style: "linear-gradient(to right, rgb(217, 167, 199), rgb(255, 252, 220))"
  }, {
    name: "Subu",
    class: "bg-subu",
    style: "linear-gradient(to right, rgb(12, 235, 235), rgb(32, 227, 178), rgb(41, 255, 198))"
  }, {
    name: "Socialive",
    class: "bg-socialive",
    style: "linear-gradient(to right, rgb(6, 190, 182), rgb(72, 177, 191))"
  }, {
    name: "Crimson Tide",
    class: "bg-crimson-tide",
    style: "linear-gradient(to right, rgb(100, 43, 115), rgb(198, 66, 110))"
  }, {
    name: "Telegram",
    class: "bg-telegram",
    style: "linear-gradient(to right, rgb(28, 146, 210), rgb(242, 252, 254))"
  }, {
    name: "Terminal",
    class: "bg-terminal",
    style: "linear-gradient(to right, rgb(0, 0, 0), rgb(15, 155, 15))"
  }, {
    name: "Scooter",
    class: "bg-scooter",
    style: "linear-gradient(to right, rgb(54, 209, 220), rgb(91, 134, 229))"
  }, {
    name: "Alive",
    class: "bg-alive",
    style: "linear-gradient(to right, rgb(203, 53, 107), rgb(189, 63, 50))"
  }, {
    name: "Relay",
    class: "bg-relay",
    style: "linear-gradient(to right, rgb(58, 28, 113), rgb(215, 109, 119), rgb(255, 175, 123))"
  }, {
    name: "Meridian",
    class: "bg-meridian",
    style: "linear-gradient(to right, rgb(40, 60, 134), rgb(69, 162, 71))"
  }, {
    name: "Compare Now",
    class: "bg-compare-now",
    style: "linear-gradient(to right, rgb(239, 59, 54), rgb(255, 255, 255))"
  }, {
    name: "Mello",
    class: "bg-mello",
    style: "linear-gradient(to right, rgb(192, 57, 43), rgb(142, 68, 173))"
  }, {
    name: "Crystal Clear",
    class: "bg-crystal-clear",
    style: "linear-gradient(to right, rgb(21, 153, 87), rgb(21, 87, 153))"
  }, {
    name: "Visions of Grandeur",
    class: "bg-visions-of-grandeur",
    style: "linear-gradient(to right, rgb(0, 0, 70), rgb(28, 181, 224))"
  }, {
    name: "Chitty Chitty Bang Bang",
    class: "bg-chitty-chitty-bang-bang",
    style: "linear-gradient(to right, rgb(0, 121, 145), rgb(120, 255, 214))"
  }, {
    name: "Blue Skies",
    class: "bg-blue-skies",
    style: "linear-gradient(to right, rgb(86, 204, 242), rgb(47, 128, 237))"
  }, {
    name: "Sunkist",
    class: "bg-sunkist",
    style: "linear-gradient(to right, rgb(242, 153, 74), rgb(242, 201, 76))"
  }, {
    name: "Coal",
    class: "bg-coal",
    style: "linear-gradient(to right, rgb(235, 87, 87), rgb(0, 0, 0))"
  }, {
    name: "Html",
    class: "bg-html",
    style: "linear-gradient(to right, rgb(228, 77, 38), rgb(241, 101, 41))"
  }, {
    name: "Cinnamint",
    class: "bg-cinnamint",
    style: "linear-gradient(to right, rgb(74, 194, 154), rgb(189, 255, 243))"
  }, {
    name: "Maldives",
    class: "bg-maldives",
    style: "linear-gradient(to right, rgb(178, 254, 250), rgb(14, 210, 247))"
  }, {
    name: "Mini",
    class: "bg-mini",
    style: "linear-gradient(to right, rgb(48, 232, 191), rgb(255, 130, 53))"
  }, {
    name: "Sha la la",
    class: "bg-sha-la-la",
    style: "linear-gradient(to right, rgb(214, 109, 117), rgb(226, 149, 135))"
  }, {
    name: "Purplepine",
    class: "bg-purplepine",
    style: "linear-gradient(to right, rgb(32, 0, 44), rgb(203, 180, 212))"
  }, {
    name: "Celestial",
    class: "bg-celestial",
    style: "linear-gradient(to right, rgb(195, 55, 100), rgb(29, 38, 113))"
  }, {
    name: "Learning and Leading",
    class: "bg-learning-and-leading",
    style: "linear-gradient(to right, rgb(247, 151, 30), rgb(255, 210, 0))"
  }, {
    name: "Pacific Dream",
    class: "bg-pacific-dream",
    style: "linear-gradient(to right, rgb(52, 232, 158), rgb(15, 52, 67))"
  }, {
    name: "Venice",
    class: "bg-venice",
    style: "linear-gradient(to right, rgb(97, 144, 232), rgb(167, 191, 232))"
  }, {
    name: "Orca",
    class: "bg-orca",
    style: "linear-gradient(to right, rgb(68, 160, 141), rgb(9, 54, 55))"
  }, {
    name: "Love and Liberty",
    class: "bg-love-and-liberty",
    style: "linear-gradient(to right, rgb(32, 1, 34), rgb(111, 0, 0))"
  }, {
    name: "Very Blue",
    class: "bg-very-blue",
    style: "linear-gradient(to right, rgb(5, 117, 230), rgb(2, 27, 121))"
  }, {
    name: "Can You Feel The Love Tonight",
    class: "bg-can-you-feel-the-love-tonight",
    style: "linear-gradient(to right, rgb(69, 104, 220), rgb(176, 106, 179))"
  }, {
    name: "The Blue Lagoon",
    class: "bg-the-blue-lagoon",
    style: "linear-gradient(to right, rgb(67, 198, 172), rgb(25, 22, 84))"
  }, {
    name: "Under the Lake",
    class: "bg-under-the-lake",
    style: "linear-gradient(to right, rgb(9, 48, 40), rgb(35, 122, 87))"
  }, {
    name: "Honey Dew",
    class: "bg-honey-dew",
    style: "linear-gradient(to right, rgb(67, 198, 172), rgb(248, 255, 174))"
  }, {
    name: "Roseanna",
    class: "bg-roseanna",
    style: "linear-gradient(to right, rgb(255, 175, 189), rgb(255, 195, 160))"
  }, {
    name: "What lies Beyond",
    class: "bg-what-lies-beyond",
    style: "linear-gradient(to right, rgb(240, 242, 240), rgb(0, 12, 64))"
  }, {
    name: "Rose Colored Lenses",
    class: "bg-rose-colored-lenses",
    style: "linear-gradient(to right, rgb(232, 203, 192), rgb(99, 111, 164))"
  }, {
    name: "EasyMed",
    class: "bg-easymed",
    style: "linear-gradient(to right, rgb(220, 227, 91), rgb(69, 182, 73))"
  }, {
    name: "Cocoaa Ice",
    class: "bg-cocoaa-ice",
    style: "linear-gradient(to right, rgb(192, 192, 170), rgb(28, 239, 255))"
  }, {
    name: "Jodhpur",
    class: "bg-jodhpur",
    style: "linear-gradient(to right, rgb(156, 236, 251), rgb(101, 199, 247), rgb(0, 82, 212))"
  }, {
    name: "Jaipur",
    class: "bg-jaipur",
    style: "linear-gradient(to right, rgb(219, 230, 246), rgb(197, 121, 109))"
  }, {
    name: "Vice City",
    class: "bg-vice-city",
    style: "linear-gradient(to right, rgb(52, 148, 230), rgb(236, 110, 173))"
  }, {
    name: "Mild",
    class: "bg-mild",
    style: "linear-gradient(to right, rgb(103, 178, 111), rgb(76, 162, 205))"
  }, {
    name: "Dawn",
    class: "bg-dawn",
    style: "linear-gradient(to right, rgb(243, 144, 79), rgb(59, 67, 113))"
  }, {
    name: "Ibiza Sunset",
    class: "bg-ibiza-sunset",
    style: "linear-gradient(to right, rgb(238, 9, 121), rgb(255, 106, 0))"
  }, {
    name: "Radar",
    class: "bg-radar",
    style: "linear-gradient(to right, rgb(167, 112, 239), rgb(207, 139, 243), rgb(253, 185, 155))"
  }, {
    name: "80s Purple",
    class: "bg-80-s-Purple",
    style: "linear-gradient(to right, rgb(65, 41, 90), rgb(47, 7, 67))"
  }, {
    name: "Black Rose",
    class: "bg-black-rose",
    style: "linear-gradient(to right, rgb(244, 196, 243), rgb(252, 103, 250))"
  }, {
    name: "Brady Brady Fun Fun",
    class: "bg-brady-brady-fun-fun",
    style: "linear-gradient(to right, rgb(0, 195, 255), rgb(255, 255, 28))"
  }, {
    name: "Eds Sunset Gradient",
    class: "bg-ed-s-sunset-gradient",
    style: "linear-gradient(to right, rgb(255, 126, 95), rgb(254, 180, 123))"
  }, {
    name: "Snapchat",
    class: "bg-snapchat",
    style: "linear-gradient(to right, rgb(255, 252, 0), rgb(255, 255, 255))"
  }, {
    name: "Cosmic Fusion",
    class: "bg-cosmic-fusion",
    style: "linear-gradient(to right, rgb(255, 0, 204), rgb(51, 51, 153))"
  }, {
    name: "Nepal",
    class: "bg-nepal",
    style: "linear-gradient(to right, rgb(222, 97, 97), rgb(38, 87, 235))"
  }, {
    name: "Azure Pop",
    class: "bg-azure-pop",
    style: "linear-gradient(to right, rgb(239, 50, 217), rgb(137, 255, 253))"
  }, {
    name: "Love Couple",
    class: "bg-love-couple",
    style: "linear-gradient(to right, rgb(58, 97, 134), rgb(137, 37, 62))"
  }, {
    name: "Disco",
    class: "bg-disco",
    style: "linear-gradient(to right, rgb(78, 205, 196), rgb(85, 98, 112))"
  }, {
    name: "Limeade",
    class: "bg-limeade",
    style: "linear-gradient(to right, rgb(161, 255, 206), rgb(250, 255, 209))"
  }, {
    name: "Dania",
    class: "bg-dania",
    style: "linear-gradient(to right, rgb(190, 147, 197), rgb(123, 198, 204))"
  }, {
    name: "50 Shades of Grey",
    class: "bg-50-shades-of-grey",
    style: "linear-gradient(to right, rgb(189, 195, 199), rgb(44, 62, 80))"
  }, {
    name: "Jupiter",
    class: "bg-jupiter",
    style: "linear-gradient(to right, rgb(255, 216, 155), rgb(25, 84, 123))"
  }, {
    name: "IIIT Delhi",
    class: "bg-iiit-delhi",
    style: "linear-gradient(to right, rgb(128, 128, 128), rgb(63, 173, 168))"
  }, {
    name: "Sun on the Horizon",
    class: "bg-sun-on-the-horizon",
    style: "linear-gradient(to right, rgb(252, 234, 187), rgb(248, 181, 0))"
  }, {
    name: "Blood Red",
    class: "bg-blood-red",
    style: "linear-gradient(to right, rgb(248, 80, 50), rgb(231, 56, 39))"
  }, {
    name: "Sherbert",
    class: "bg-sherbert",
    style: "linear-gradient(to right, rgb(247, 157, 0), rgb(100, 243, 140))"
  }, {
    name: "Firewatch",
    class: "bg-firewatch",
    style: "linear-gradient(to right, rgb(203, 45, 62), rgb(239, 71, 58))"
  }, {
    name: "Lush",
    class: "bg-lush",
    style: "linear-gradient(to right, rgb(86, 171, 47), rgb(168, 224, 99))"
  }, {
    name: "Frost",
    class: "bg-frost",
    style: "linear-gradient(to right, rgb(0, 4, 40), rgb(0, 78, 146))"
  }, {
    name: "Mauve",
    class: "bg-mauve",
    style: "linear-gradient(to right, rgb(66, 39, 90), rgb(115, 75, 109))"
  }, {
    name: "Royal",
    class: "bg-royal",
    style: "linear-gradient(to right, rgb(20, 30, 48), rgb(36, 59, 85))"
  }, {
    name: "Minimal Red",
    class: "bg-minimal-red",
    style: "linear-gradient(to right, rgb(240, 0, 0), rgb(220, 40, 30))"
  }, {
    name: "Dusk",
    class: "bg-dusk",
    style: "linear-gradient(to right, rgb(44, 62, 80), rgb(253, 116, 108))"
  }, {
    name: "Deep Sea Space",
    class: "bg-deep-sea-space",
    style: "linear-gradient(to right, rgb(44, 62, 80), rgb(76, 161, 175))"
  }, {
    name: "Grapefruit Sunset",
    class: "bg-grapefruit-sunset",
    style: "linear-gradient(to right, rgb(233, 100, 67), rgb(144, 78, 149))"
  }, {
    name: "Sunset",
    class: "bg-sunset",
    style: "linear-gradient(to right, rgb(11, 72, 107), rgb(245, 98, 23))"
  }, {
    name: "Solid Vault",
    class: "bg-solid-vault",
    style: "linear-gradient(to right, rgb(58, 123, 213), rgb(58, 96, 115))"
  }, {
    name: "Bright Vault",
    class: "bg-bright-vault",
    style: "linear-gradient(to right, rgb(0, 210, 255), rgb(146, 141, 171))"
  }, {
    name: "Politics",
    class: "bg-politics",
    style: "linear-gradient(to right, rgb(33, 150, 243), rgb(244, 67, 54))"
  }, {
    name: "Sweet Morning",
    class: "bg-sweet-morning",
    style: "linear-gradient(to right, rgb(255, 95, 109), rgb(255, 195, 113))"
  }, {
    name: "Sylvia",
    class: "bg-sylvia",
    style: "linear-gradient(to right, rgb(255, 75, 31), rgb(255, 144, 104))"
  }, {
    name: "Transfile",
    class: "bg-transfile",
    style: "linear-gradient(to right, rgb(22, 191, 253), rgb(203, 48, 102))"
  }, {
    name: "Tranquil",
    class: "bg-tranquil",
    style: "linear-gradient(to right, rgb(238, 205, 163), rgb(239, 98, 159))"
  }, {
    name: "Red Ocean",
    class: "bg-red-ocean",
    style: "linear-gradient(to right, rgb(29, 67, 80), rgb(164, 57, 49))"
  }, {
    name: "Shahabi",
    class: "bg-shahabi",
    style: "linear-gradient(to right, rgb(168, 0, 119), rgb(102, 255, 0))"
  }, {
    name: "Alihossein",
    class: "bg-alihossein",
    style: "linear-gradient(to right, rgb(247, 255, 0), rgb(219, 54, 164))"
  }, {
    name: "Ali",
    class: "bg-ali",
    style: "linear-gradient(to right, rgb(255, 75, 31), rgb(31, 221, 255))"
  }, {
    name: "Purple White",
    class: "bg-purple-white",
    style: "linear-gradient(to right, rgb(186, 83, 112), rgb(244, 226, 216))"
  }, {
    name: "Colors Of Sky",
    class: "bg-colors-of-sky",
    style: "linear-gradient(to right, rgb(224, 234, 252), rgb(207, 222, 243))"
  }, {
    name: "Decent",
    class: "bg-decent",
    style: "linear-gradient(to right, rgb(76, 161, 175), rgb(196, 224, 229))"
  }, {
    name: "Deep Space",
    class: "bg-deep-space",
    style: "linear-gradient(to right, rgb(0, 0, 0), rgb(67, 67, 67))"
  }, {
    name: "Dark Skies",
    class: "bg-dark-skies",
    style: "linear-gradient(to right, rgb(75, 121, 161), rgb(40, 62, 81))"
  }, {
    name: "Suzy",
    class: "bg-suzy",
    style: "linear-gradient(to right, rgb(131, 77, 155), rgb(208, 78, 214))"
  }, {
    name: "Superman",
    class: "bg-superman",
    style: "linear-gradient(to right, rgb(0, 153, 247), rgb(241, 23, 18))"
  }, {
    name: "Nighthawk",
    class: "bg-nighthawk",
    style: "linear-gradient(to right, rgb(41, 128, 185), rgb(44, 62, 80))"
  }, {
    name: "Forest",
    class: "bg-forest",
    style: "linear-gradient(to right, rgb(90, 63, 55), rgb(44, 119, 68))"
  }, {
    name: "Miami Dolphins",
    class: "bg-miami-dolphins",
    style: "linear-gradient(to right, rgb(77, 160, 176), rgb(211, 157, 56))"
  }, {
    name: "Minnesota Vikings",
    class: "bg-minnesota-vikings",
    style: "linear-gradient(to right, rgb(86, 20, 176), rgb(219, 214, 92))"
  }, {
    name: "Christmas",
    class: "bg-christmas",
    style: "linear-gradient(to right, rgb(47, 115, 54), rgb(170, 58, 56))"
  }, {
    name: "Joomla",
    class: "bg-joomla",
    style: "linear-gradient(to right, rgb(30, 60, 114), rgb(42, 82, 152))"
  }, {
    name: "Pizelex",
    class: "bg-pizelex",
    style: "linear-gradient(to right, rgb(17, 67, 87), rgb(242, 148, 146))"
  }, {
    name: "Haikus",
    class: "bg-haikus",
    style: "linear-gradient(to right, rgb(253, 116, 108), rgb(255, 144, 104))"
  }, {
    name: "Pale Wood",
    class: "bg-pale-wood",
    style: "linear-gradient(to right, rgb(234, 205, 163), rgb(214, 174, 123))"
  }, {
    name: "Purplin",
    class: "bg-purplin",
    style: "linear-gradient(to right, rgb(106, 48, 147), rgb(160, 68, 255))"
  }, {
    name: "Inbox",
    class: "bg-inbox",
    style: "linear-gradient(to right, rgb(69, 127, 202), rgb(86, 145, 200))"
  }, {
    name: "Blush",
    class: "bg-blush",
    style: "linear-gradient(to right, rgb(178, 69, 146), rgb(241, 95, 121))"
  }, {
    name: "Back to the Future",
    class: "bg-back-to-the-future",
    style: "linear-gradient(to right, rgb(192, 36, 37), rgb(240, 203, 53))"
  }, {
    name: "Poncho",
    class: "bg-poncho",
    style: "linear-gradient(to right, rgb(64, 58, 62), rgb(190, 88, 105))"
  }, {
    name: "Green and Blue",
    class: "bg-green-and-blue",
    style: "linear-gradient(to right, rgb(194, 229, 156), rgb(100, 179, 244))"
  }, {
    name: "Light Orange",
    class: "bg-light-orange",
    style: "linear-gradient(to right, rgb(255, 183, 94), rgb(237, 143, 3))"
  }, {
    name: "Netflix",
    class: "bg-netflix",
    style: "linear-gradient(to right, rgb(142, 14, 0), rgb(31, 28, 24))"
  }, {
    name: "Little Leaf",
    class: "bg-little-leaf",
    style: "linear-gradient(to right, rgb(118, 184, 82), rgb(141, 194, 111))"
  }, {
    name: "Deep Purple",
    class: "bg-deep-purple",
    style: "linear-gradient(to right, rgb(103, 58, 183), rgb(81, 45, 168))"
  }, {
    name: "Back To Earth",
    class: "bg-back-to-earth",
    style: "linear-gradient(to right, rgb(0, 201, 255), rgb(146, 254, 157))"
  }, {
    name: "Master Card",
    class: "bg-master-card",
    style: "linear-gradient(to right, rgb(244, 107, 69), rgb(238, 168, 73))"
  }, {
    name: "Clear Sky",
    class: "bg-clear-sky",
    style: "linear-gradient(to right, rgb(0, 92, 151), rgb(54, 55, 149))"
  }, {
    name: "Passion",
    class: "bg-passion",
    style: "linear-gradient(to right, rgb(229, 57, 53), rgb(227, 93, 91))"
  }, {
    name: "Timber",
    class: "bg-timber",
    style: "linear-gradient(to right, rgb(252, 0, 255), rgb(0, 219, 222))"
  }, {
    name: "Between Night and Day",
    class: "bg-between-night-and-day",
    style: "linear-gradient(to right, rgb(44, 62, 80), rgb(52, 152, 219))"
  }, {
    name: "Sage Persuasion",
    class: "bg-sage-persuasion",
    style: "linear-gradient(to right, rgb(204, 204, 178), rgb(117, 117, 25))"
  }, {
    name: "Lizard",
    class: "bg-lizard",
    style: "linear-gradient(to right, rgb(48, 67, 82), rgb(215, 210, 204))"
  }, {
    name: "Piglet",
    class: "bg-piglet",
    style: "linear-gradient(to right, rgb(238, 156, 167), rgb(255, 221, 225))"
  }, {
    name: "Dark Knight",
    class: "bg-dark-knight",
    style: "linear-gradient(to right, rgb(186, 139, 2), rgb(24, 24, 24))"
  }, {
    name: "Curiosity blue",
    class: "bg-curiosity-blue",
    style: "linear-gradient(to right, rgb(82, 82, 82), rgb(61, 114, 180))"
  }, {
    name: "Ukraine",
    class: "bg-ukraine",
    style: "linear-gradient(to right, rgb(0, 79, 249), rgb(255, 249, 76))"
  }, {
    name: "Green to dark",
    class: "bg-green-to-dark",
    style: "linear-gradient(to right, rgb(106, 145, 19), rgb(20, 21, 23))"
  }, {
    name: "Fresh Turboscent",
    class: "bg-fresh-turboscent",
    style: "linear-gradient(to right, rgb(241, 242, 181), rgb(19, 80, 88))"
  }, {
    name: "Koko Caramel",
    class: "bg-koko-caramel",
    style: "linear-gradient(to right, rgb(209, 145, 60), rgb(255, 209, 148))"
  }, {
    name: "Virgin America",
    class: "bg-virgin-america",
    style: "linear-gradient(to right, rgb(123, 67, 151), rgb(220, 36, 48))"
  }, {
    name: "Portrait",
    class: "bg-portrait",
    style: "linear-gradient(to right, rgb(142, 158, 171), rgb(238, 242, 243))"
  }, {
    name: "Turquoise flow",
    class: "bg-turquoise-flow",
    style: "linear-gradient(to right, rgb(19, 106, 138), rgb(38, 120, 113))"
  }, {
    name: "Vine",
    class: "bg-vine",
    style: "linear-gradient(to right, rgb(0, 191, 143), rgb(0, 21, 16))"
  }, {
    name: "Flickr",
    class: "bg-flickr",
    style: "linear-gradient(to right, rgb(255, 0, 132), rgb(51, 0, 27))"
  }, {
    name: "Instagram",
    class: "bg-instagram",
    style: "linear-gradient(to right, rgb(131, 58, 180), rgb(253, 29, 29), rgb(252, 176, 69))"
  }, {
    name: "Atlas",
    class: "bg-atlas",
    style: "linear-gradient(to right, rgb(254, 172, 94), rgb(199, 121, 208), rgb(75, 192, 200))"
  }, {
    name: "Twitch",
    class: "bg-twitch",
    style: "linear-gradient(to right, rgb(100, 65, 165), rgb(42, 8, 69))"
  }, {
    name: "Pastel Orange at the Sun",
    class: "bg-pastel-orange-at-the-sun",
    style: "linear-gradient(to right, rgb(255, 179, 71), rgb(255, 204, 51))"
  }, {
    name: "Endless River",
    class: "bg-endless-river",
    style: "linear-gradient(to right, rgb(67, 206, 162), rgb(24, 90, 157))"
  }, {
    name: "Predawn",
    class: "bg-predawn",
    style: "linear-gradient(to right, rgb(255, 161, 127), rgb(0, 34, 62))"
  }, {
    name: "Purple Bliss",
    class: "bg-purple-bliss",
    style: "linear-gradient(to right, rgb(54, 0, 51), rgb(11, 135, 147))"
  }, {
    name: "Talking To Mice Elf",
    class: "bg-talking-to-mice-elf",
    style: "linear-gradient(to right, rgb(148, 142, 153), rgb(46, 20, 55))"
  }, {
    name: "Hersheys",
    class: "bg-hersheys",
    style: "linear-gradient(to right, rgb(30, 19, 12), rgb(154, 132, 120))"
  }, {
    name: "Crazy Orange I",
    class: "bg-crazy-orange-i",
    style: "linear-gradient(to right, rgb(211, 131, 18), rgb(168, 50, 121))"
  }, {
    name: "Between The Clouds",
    class: "bg-between-the-clouds",
    style: "linear-gradient(to right, rgb(115, 200, 169), rgb(55, 59, 68))"
  }, {
    name: "Metallic Toad",
    class: "bg-metallic-toad",
    style: "linear-gradient(to right, rgb(171, 186, 171), rgb(255, 255, 255))"
  }, {
    name: "Martini",
    class: "bg-martini",
    style: "linear-gradient(to right, rgb(253, 252, 71), rgb(36, 254, 65))"
  }, {
    name: "Friday",
    class: "bg-friday",
    style: "linear-gradient(to right, rgb(131, 164, 212), rgb(182, 251, 255))"
  }, {
    name: "ServQuick",
    class: "bg-servquick",
    style: "linear-gradient(to right, rgb(72, 85, 99), rgb(41, 50, 60))"
  }, {
    name: "Behongo",
    class: "bg-behongo",
    style: "linear-gradient(to right, rgb(82, 194, 52), rgb(6, 23, 0))"
  }, {
    name: "SoundCloud",
    class: "bg-soundcloud",
    style: "linear-gradient(to right, rgb(254, 140, 0), rgb(248, 54, 0))"
  }, {
    name: "Facebook Messenger",
    class: "bg-facebook-messenger",
    style: "linear-gradient(to right, rgb(0, 198, 255), rgb(0, 114, 255))"
  }, {
    name: "Shore",
    class: "bg-shore",
    style: "linear-gradient(to right, rgb(112, 225, 245), rgb(255, 209, 148))"
  }, {
    name: "Cheer Up Emo Kid",
    class: "bg-cheer-up-emo-kid",
    style: "linear-gradient(to right, rgb(85, 98, 112), rgb(255, 107, 107))"
  }, {
    name: "Amethyst",
    class: "bg-amethyst",
    style: "linear-gradient(to right, rgb(157, 80, 187), rgb(110, 72, 170))"
  }, {
    name: "Man of Steel",
    class: "bg-man-of-steel",
    style: "linear-gradient(to right, rgb(120, 2, 6), rgb(6, 17, 97))"
  }, {
    name: "Neon Life",
    class: "bg-neon-life",
    style: "linear-gradient(to right, rgb(179, 255, 171), rgb(18, 255, 247))"
  }, {
    name: "Teal Love",
    class: "bg-teal-love",
    style: "linear-gradient(to right, rgb(170, 255, 169), rgb(17, 255, 189))"
  }, {
    name: "Red Mist",
    class: "bg-red-mist",
    style: "linear-gradient(to right, rgb(0, 0, 0), rgb(231, 76, 60))"
  }, {
    name: "Starfall",
    class: "bg-starfall",
    style: "linear-gradient(to right, rgb(240, 194, 123), rgb(75, 18, 72))"
  }, {
    name: "Dance To Forget",
    class: "bg-dance-to-forget",
    style: "linear-gradient(to right, rgb(255, 78, 80), rgb(249, 212, 35))"
  }, {
    name: "Parklife",
    class: "bg-parklife",
    style: "linear-gradient(to right, rgb(173, 209, 0), rgb(123, 146, 10))"
  }, {
    name: "Cherryblossoms",
    class: "bg-cherryblossoms",
    style: "linear-gradient(to right, rgb(251, 211, 233), rgb(187, 55, 125))"
  }, {
    name: "Ash",
    class: "bg-ash",
    style: "linear-gradient(to right, rgb(96, 108, 136), rgb(63, 76, 107))"
  }, {
    name: "Virgin",
    class: "bg-virgin",
    style: "linear-gradient(to right, rgb(201, 255, 191), rgb(255, 175, 189))"
  }, {
    name: "Earthly",
    class: "bg-earthly",
    style: "linear-gradient(to right, rgb(100, 145, 115), rgb(219, 213, 164))"
  }, {
    name: "Dirty Fog",
    class: "bg-dirty-fog",
    style: "linear-gradient(to right, rgb(185, 147, 214), rgb(140, 166, 219))"
  }, {
    name: "The Strain",
    class: "bg-the-strain",
    style: "linear-gradient(to right, rgb(135, 0, 0), rgb(25, 10, 5))"
  }, {
    name: "Reef",
    class: "bg-reef",
    style: "linear-gradient(to right, rgb(0, 210, 255), rgb(58, 123, 213))"
  }, {
    name: "Candy",
    class: "bg-candy",
    style: "linear-gradient(to right, rgb(211, 149, 155), rgb(191, 230, 186))"
  }, {
    name: "Autumn",
    class: "bg-autumn",
    style: "linear-gradient(to right, rgb(218, 210, 153), rgb(176, 218, 185))"
  }, {
    name: "Nelson",
    class: "bg-nelson",
    style: "linear-gradient(to right, rgb(242, 112, 156), rgb(255, 148, 114))"
  }, {
    name: "Winter",
    class: "bg-winter",
    style: "linear-gradient(to right, rgb(230, 218, 218), rgb(39, 64, 70))"
  }, {
    name: "Forever Lost",
    class: "bg-forever-lost",
    style: "linear-gradient(to right, rgb(93, 65, 87), rgb(168, 202, 186))"
  }, {
    name: "Almost",
    class: "bg-almost",
    style: "linear-gradient(to right, rgb(221, 214, 243), rgb(250, 172, 168))"
  }, {
    name: "Moor",
    class: "bg-moor",
    style: "linear-gradient(to right, rgb(97, 97, 97), rgb(155, 197, 195))"
  }, {
    name: "Aqualicious",
    class: "bg-aqualicious",
    style: "linear-gradient(to right, rgb(80, 201, 195), rgb(150, 222, 218))"
  }, {
    name: "Misty Meadow",
    class: "bg-misty-meadow",
    style: "linear-gradient(to right, rgb(33, 95, 0), rgb(228, 228, 217))"
  }, {
    name: "Kyoto",
    class: "bg-kyoto",
    style: "linear-gradient(to right, rgb(194, 21, 0), rgb(255, 197, 0))"
  }, {
    name: "Sirius Tamed",
    class: "bg-sirius-tamed",
    style: "linear-gradient(to right, rgb(239, 239, 187), rgb(212, 211, 221))"
  }, {
    name: "Jonquil",
    class: "bg-jonquil",
    style: "linear-gradient(to right, rgb(255, 238, 238), rgb(221, 239, 187))"
  }, {
    name: "Petrichor",
    class: "bg-petrichor",
    style: "linear-gradient(to right, rgb(102, 102, 0), rgb(153, 153, 102))"
  }, {
    name: "A Lost Memory",
    class: "bg-a-lost-memory",
    style: "linear-gradient(to right, rgb(222, 98, 98), rgb(255, 184, 140))"
  }, {
    name: "Vasily",
    class: "bg-vasily",
    style: "linear-gradient(to right, rgb(233, 211, 98), rgb(51, 51, 51))"
  }, {
    name: "Blurry Beach",
    class: "bg-blurry-beach",
    style: "linear-gradient(to right, rgb(213, 51, 105), rgb(203, 173, 109))"
  }, {
    name: "Namn",
    class: "bg-namn",
    style: "linear-gradient(to right, rgb(167, 55, 55), rgb(122, 40, 40))"
  }, {
    name: "Day Tripper",
    class: "bg-day-tripper",
    style: "linear-gradient(to right, rgb(248, 87, 166), rgb(255, 88, 88))"
  }, {
    name: "Pinot Noir",
    class: "bg-pinot-noir",
    style: "linear-gradient(to right, rgb(75, 108, 183), rgb(24, 40, 72))"
  }, {
    name: "Miaka",
    class: "bg-miaka",
    style: "linear-gradient(to right, rgb(252, 53, 76), rgb(10, 191, 188))"
  }, {
    name: "Army",
    class: "bg-army",
    style: "linear-gradient(to right, rgb(65, 77, 11), rgb(114, 122, 23))"
  }, {
    name: "Shrimpy",
    class: "bg-shrimpy",
    style: "linear-gradient(to right, rgb(228, 58, 21), rgb(230, 82, 69))"
  }, {
    name: "Influenza",
    class: "bg-influenza",
    style: "linear-gradient(to right, rgb(192, 72, 72), rgb(72, 0, 72))"
  }, {
    name: "Calm Darya",
    class: "bg-calm-darya",
    style: "linear-gradient(to right, rgb(95, 44, 130), rgb(73, 160, 157))"
  }, {
    name: "Bourbon",
    class: "bg-bourbon",
    style: "linear-gradient(to right, rgb(236, 111, 102), rgb(243, 161, 131))"
  }, {
    name: "Stellar",
    class: "bg-stellar",
    style: "linear-gradient(to right, rgb(116, 116, 191), rgb(52, 138, 199))"
  }, {
    name: "Clouds",
    class: "bg-clouds",
    style: "linear-gradient(to right, rgb(236, 233, 230), rgb(255, 255, 255))"
  }, {
    name: "Moonrise",
    class: "bg-moonrise",
    style: "linear-gradient(to right, rgb(218, 226, 248), rgb(214, 164, 164))"
  }, {
    name: "Peach",
    class: "bg-peach",
    style: "linear-gradient(to right, rgb(237, 66, 100), rgb(255, 237, 188))"
  }, {
    name: "Dracula",
    class: "bg-dracula",
    style: "linear-gradient(to right, rgb(220, 36, 36), rgb(74, 86, 157))"
  }, {
    name: "Mantle",
    class: "bg-mantle",
    style: "linear-gradient(to right, rgb(36, 198, 220), rgb(81, 74, 157))"
  }, {
    name: "Titanium",
    class: "bg-titanium",
    style: "linear-gradient(to right, rgb(40, 48, 72), rgb(133, 147, 152))"
  }, {
    name: "Opa",
    class: "bg-opa",
    style: "linear-gradient(to right, rgb(61, 126, 170), rgb(255, 228, 122))"
  }, {
    name: "Sea Blizz",
    class: "bg-sea-blizz",
    style: "linear-gradient(to right, rgb(28, 216, 210), rgb(147, 237, 199))"
  }, {
    name: "Midnight City",
    class: "bg-midnight-city",
    style: "linear-gradient(to right, rgb(35, 37, 38), rgb(65, 67, 69))"
  }, {
    name: "Mystic",
    class: "bg-mystic",
    style: "linear-gradient(to right, rgb(117, 127, 154), rgb(215, 221, 232))"
  }, {
    name: "Shroom Haze",
    class: "bg-shroom-haze",
    style: "linear-gradient(to right, rgb(92, 37, 141), rgb(67, 137, 162))"
  }, {
    name: "Moss",
    class: "bg-moss",
    style: "linear-gradient(to right, rgb(19, 78, 94), rgb(113, 178, 128))"
  }, {
    name: "Bora Bora",
    class: "bg-bora-bora",
    style: "linear-gradient(to right, rgb(43, 192, 228), rgb(234, 236, 198))"
  }, {
    name: "Venice Blue",
    class: "bg-venice-blue",
    style: "linear-gradient(to right, rgb(8, 80, 120), rgb(133, 216, 206))"
  }, {
    name: "Electric Violet",
    class: "bg-electric-violet",
    style: "linear-gradient(to right, rgb(71, 118, 230), rgb(142, 84, 233))"
  }, {
    name: "Kashmir",
    class: "bg-kashmir",
    style: "linear-gradient(to right, rgb(97, 67, 133), rgb(81, 99, 149))"
  }, {
    name: "Steel Gray",
    class: "bg-steel-gray",
    style: "linear-gradient(to right, rgb(31, 28, 44), rgb(146, 141, 171))"
  }, {
    name: "Mirage",
    class: "bg-mirage",
    style: "linear-gradient(to right, rgb(22, 34, 42), rgb(58, 96, 115))"
  }, {
    name: "Juicy Orange",
    class: "bg-juicy-orange",
    style: "linear-gradient(to right, rgb(255, 128, 8), rgb(255, 200, 55))"
  }, {
    name: "Mojito",
    class: "bg-mojito",
    style: "linear-gradient(to right, rgb(29, 151, 108), rgb(147, 249, 185))"
  }, {
    name: "Cherry",
    class: "bg-cherry",
    style: "linear-gradient(to right, rgb(235, 51, 73), rgb(244, 92, 67))"
  }, {
    name: "Pinky",
    class: "bg-pinky",
    style: "linear-gradient(to right, rgb(221, 94, 137), rgb(247, 187, 151))"
  }, {
    name: "Sea Weed",
    class: "bg-sea-weed",
    style: "linear-gradient(to right, rgb(76, 184, 196), rgb(60, 211, 173))"
  }, {
    name: "Stripe",
    class: "bg-stripe",
    style: "linear-gradient(to right, rgb(31, 162, 255), rgb(18, 216, 250), rgb(166, 255, 203))"
  }, {
    name: "Purple Paradise",
    class: "bg-purple-paradise",
    style: "linear-gradient(to right, rgb(29, 43, 100), rgb(248, 205, 218))"
  }, {
    name: "Sunrise",
    class: "bg-sunrise",
    style: "linear-gradient(to right, rgb(255, 81, 47), rgb(240, 152, 25))"
  }, {
    name: "Aqua Marine",
    class: "bg-aqua-marine",
    style: "linear-gradient(to right, rgb(26, 41, 128), rgb(38, 208, 206))"
  }, {
    name: "Aubergine",
    class: "bg-aubergine",
    style: "linear-gradient(to right, rgb(170, 7, 107), rgb(97, 4, 95))"
  }, {
    name: "Bloody Mary",
    class: "bg-bloody-mary",
    style: "linear-gradient(to right, rgb(255, 81, 47), rgb(221, 36, 118))"
  }, {
    name: "Mango Pulp",
    class: "bg-mango-pulp",
    style: "linear-gradient(to right, rgb(240, 152, 25), rgb(237, 222, 93))"
  }, {
    name: "Frozen",
    class: "bg-frozen",
    style: "linear-gradient(to right, rgb(64, 59, 74), rgb(231, 233, 187))"
  }, {
    name: "Rose Water",
    class: "bg-rose-water",
    style: "linear-gradient(to right, rgb(229, 93, 135), rgb(95, 195, 228))"
  }, {
    name: "Horizon",
    class: "bg-horizon",
    style: "linear-gradient(to right, rgb(0, 57, 115), rgb(229, 229, 190))"
  }, {
    name: "Monte Carlo",
    class: "bg-monte-carlo",
    style: "linear-gradient(to right, rgb(204, 149, 192), rgb(219, 212, 180), rgb(122, 161, 210))"
  }, {
    name: "Lemon Twist",
    class: "bg-lemon-twist",
    style: "linear-gradient(to right, rgb(60, 165, 92), rgb(181, 172, 73))"
  }, {
    name: "Emerald Water",
    class: "bg-emerald-water",
    style: "linear-gradient(to right, rgb(52, 143, 80), rgb(86, 180, 211))"
  }, {
    name: "Intuitive Purple",
    class: "bg-intuitive-purple",
    style: "linear-gradient(to right, rgb(218, 34, 255), rgb(151, 51, 238))"
  }, {
    name: "Green Beach",
    class: "bg-green-beach",
    style: "linear-gradient(to right, rgb(2, 170, 176), rgb(0, 205, 172))"
  }, {
    name: "Sunny Days",
    class: "bg-sunny-days",
    style: "linear-gradient(to right, rgb(237, 229, 116), rgb(225, 245, 196))"
  }, {
    name: "Playing with Reds",
    class: "bg-playing-with-reds",
    style: "linear-gradient(to right, rgb(211, 16, 39), rgb(234, 56, 77))"
  }, {
    name: "Harmonic Energy",
    class: "bg-harmonic-energy",
    style: "linear-gradient(to right, rgb(22, 160, 133), rgb(244, 208, 63))"
  }, {
    name: "Cool Brown",
    class: "bg-cool-brown",
    style: "linear-gradient(to right, rgb(96, 56, 19), rgb(178, 159, 148))"
  }, {
    name: "YouTube",
    class: "bg-youtube",
    style: "linear-gradient(to right, rgb(229, 45, 39), rgb(179, 18, 23))"
  }, {
    name: "Noon to Dusk",
    class: "bg-noon-to-dusk",
    style: "linear-gradient(to right, rgb(255, 110, 127), rgb(191, 233, 255))"
  }, {
    name: "Hazel",
    class: "bg-hazel",
    style: "linear-gradient(to right, rgb(119, 161, 211), rgb(121, 203, 202), rgb(230, 132, 174))"
  }, {
    name: "Nimvelo",
    class: "bg-nimvelo",
    style: "linear-gradient(to right, rgb(49, 71, 85), rgb(38, 160, 218))"
  }, {
    name: "Sea Blue",
    class: "bg-sea-blue",
    style: "linear-gradient(to right, rgb(43, 88, 118), rgb(78, 67, 118))"
  }, {
    name: "Blooker20",
    class: "bg-blooker20",
    style: "linear-gradient(to right, rgb(230, 92, 0), rgb(249, 212, 35))"
  }, {
    name: "Sexy Blue",
    class: "bg-sexy-blue",
    style: "linear-gradient(to right, rgb(33, 147, 176), rgb(109, 213, 237))"
  }, {
    name: "Purple Love",
    class: "bg-purple-love",
    style: "linear-gradient(to right, rgb(204, 43, 94), rgb(117, 58, 136))"
  }, {
    name: "DIMIGO",
    class: "bg-dimigo",
    style: "linear-gradient(to right, rgb(236, 0, 140), rgb(252, 103, 103))"
  }, {
    name: "Skyline",
    class: "bg-skyline",
    style: "linear-gradient(to right, rgb(20, 136, 204), rgb(43, 50, 178))"
  }, {
    name: "Afternoon",
    class: "bg-afternoon",
    style: "linear-gradient(to right, rgb(0, 12, 64), rgb(96, 125, 139))"
  }, {
    name: "Sel",
    class: "bg-sel",
    style: "linear-gradient(to right, rgb(0, 70, 127), rgb(165, 204, 130))"
  }, {
    name: "Sky",
    class: "bg-sky",
    style: "linear-gradient(to right, rgb(7, 101, 133), rgb(255, 255, 255))"
  }, {
    name: "Petrol",
    class: "bg-petrol",
    style: "linear-gradient(to right, rgb(187, 210, 197), rgb(83, 105, 118))"
  }, {
    name: "Anamnisar",
    class: "bg-anamnisar",
    style: "linear-gradient(to right, rgb(151, 150, 240), rgb(251, 199, 212))"
  }, {
    name: "Copper",
    class: "bg-copper",
    style: "linear-gradient(to right, rgb(183, 152, 145), rgb(148, 113, 107))"
  }, {
    name: "Royal Blue + Petrol",
    class: "bg-royal-blue-petrol",
    style: "linear-gradient(to right, rgb(187, 210, 197), rgb(83, 105, 118), rgb(41, 46, 73))"
  }, {
    name: "Royal Blue",
    class: "bg-royal-blue",
    style: "linear-gradient(to right, rgb(83, 105, 118), rgb(41, 46, 73))"
  }, {
    name: "Windy",
    class: "bg-windy",
    style: "linear-gradient(to right, rgb(172, 182, 229), rgb(134, 253, 232))"
  }, {
    name: "Rea",
    class: "bg-rea",
    style: "linear-gradient(to right, rgb(255, 224, 0), rgb(121, 159, 12))"
  }, {
    name: "Bupe",
    class: "bg-bupe",
    style: "linear-gradient(to right, rgb(0, 65, 106), rgb(228, 229, 230))"
  }, {
    name: "Mango",
    class: "bg-mango",
    style: "linear-gradient(to right, rgb(255, 226, 89), rgb(255, 167, 81))"
  }, {
    name: "Reaqua",
    class: "bg-reaqua",
    style: "linear-gradient(to right, rgb(121, 159, 12), rgb(172, 187, 120))"
  }, {
    name: "Lunada",
    class: "bg-lunada",
    style: "linear-gradient(to right, rgb(84, 51, 255), rgb(32, 189, 255), rgb(165, 254, 203))"
  }, {
    name: "Bluelagoo",
    class: "bg-bluelagoo",
    style: "linear-gradient(to right, rgb(0, 82, 212), rgb(67, 100, 247), rgb(111, 177, 252))"
  }, {
    name: "Anwar",
    class: "bg-anwar",
    style: "linear-gradient(to right, rgb(51, 77, 80), rgb(203, 202, 165))"
  }, {
    name: "Combi",
    class: "bg-combi",
    style: "linear-gradient(to right, rgb(0, 65, 106), rgb(121, 159, 12), rgb(255, 224, 0))"
  }, {
    name: "Ver Black",
    class: "bg-ver-black",
    style: "linear-gradient(to right, rgb(247, 248, 248), rgb(172, 187, 120))"
  }, {
    name: "Ver",
    class: "bg-ver",
    style: "linear-gradient(to right, rgb(255, 224, 0), rgb(121, 159, 12))"
  }, {
    name: "Summer Breeze",
    class: "bg-summer-breeze",
    style: "linear-gradient(to right, rgb(251, 237, 150), rgb(171, 236, 214))"
  }, {
    name: "Blu",
    class: "bg-blu",
    style: "linear-gradient(to right, rgb(0, 65, 106), rgb(228, 229, 230))"
  }, {
    name: "Purple Dream",
    class: "bg-purple-dream",
    style: "linear-gradient(to right, rgb(191, 90, 224), rgb(168, 17, 218))"
  }, {
    name: "Blue & Orange",
    class: "bg-blue-and-orange",
    style: "linear-gradient(to right, rgb(253, 129, 18), rgb(0, 133, 202))"
  }, {
    name: "From Ice To Fire",
    class: "bg-from-ice-to-fire",
    style: "linear-gradient(to right, rgb(114, 198, 239), rgb(0, 78, 143))"
  }, {
    name: "The Sky And The Sea",
    class: "bg-the-sky-and-the-sea",
    style: "linear-gradient(to right, rgb(247, 148, 30), rgb(0, 78, 143))"
  }, {
    name: "Radioactive Heat",
    class: "bg-radioactive-heat",
    style: "linear-gradient(to right, rgb(247, 148, 30), rgb(114, 198, 239), rgb(0, 166, 81))"
  }, {
    name: "Ibtesam",
    class: "bg-ibtesam",
    style: "linear-gradient(to right, rgb(0, 245, 160), rgb(0, 217, 245))"
  }, {
    name: "Purple",
    class: "bg-purple",
    style: "linear-gradient(to right, rgb(200, 78, 137), rgb(241, 95, 121))"
  }, {
    name: "Farhan",
    class: "bg-farhan",
    style: "linear-gradient(to right, rgb(148, 0, 211), rgb(75, 0, 130))"
  }, {
    name: "Omolon",
    class: "bg-omolon",
    style: "linear-gradient(to right, rgb(9, 30, 58), rgb(47, 128, 237), rgb(45, 158, 224))"
  }, {
    name: "Star Gradient Background Image",
    class: "bg-star-gradient-background-image",
    style: "linear-gradient(30deg, #fe1a00, transparent 40%), linear-gradient(90deg,  #fd8f00, transparent 40%), linear-gradient(150deg, #23b550, transparent 40%), linear-gradient(210deg, #1061ff, transparent 40%), linear-gradient(270deg, #7b24a0, transparent 40%), linear-gradient(330deg, #ab31a9, transparent 40%)"
  }, {
    name: "Multicolor Light Gradient Background Photo",
    class: "bg-multicolor-light-gradient-background-photo",
    style: "linear-gradient(45deg, #0000ff, transparent 50%), linear-gradient(135deg, #ff0080, transparent 50%), linear-gradient(225deg, #80ff00, transparent 50%), linear-gradient(315deg, #7b24a0, transparent 50%)"
  }, {
    name: "Multicolor Radial Gradient Background Png",
    class: "bg-multicolor-radial-gradient-background-png",
    style: "radial-gradient(at 50% 10%, #fe1a00 -20%, transparent 30%), radial-gradient(at 30% 20%, #fd8f00 -20%, transparent 30%), radial-gradient(at 20% 50%, #fdcc00 -20%, transparent 30%), radial-gradient(at 30% 80%, #89e23b -20%, transparent 30%), radial-gradient(at 50% 90%, #23b550 -20%, transparent 30%), radial-gradient(at 70% 80%, #1061ff -20%, transparent 30%), radial-gradient(at 80% 50%, #ab31a9 -20%, transparent 30%), radial-gradient(at 70% 20%, #fff100 -20%, transparent 30%); background-blend-mode: screen"
  }];
  const blockStyle = {
    "--wm-link-color": linkColor || undefined,
    "--wm-link-hover-color": linkHoverColor || undefined,
    "--wm-dropcap-color": dropCapColor || undefined,
    "--wm-dropcap-size": dropCapSize ? `${dropCapSize}em` : undefined,
    "--wm-dropcap-lines": dropCapSize ? Math.max(2, Math.floor(dropCapSize * 0.75)) : undefined,
    "--wm-dropcap-weight": dropCapWeight || undefined,
    marginTop: margin?.top,
    marginBottom: margin?.bottom,
    marginLeft: margin?.left,
    marginRight: margin?.right,
    paddingTop: padding?.top,
    paddingBottom: padding?.bottom,
    paddingLeft: padding?.left,
    paddingRight: padding?.right
  };
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps)({
    className: ["wmblocks-paragraph", dropCap ? "overflow-hidden has-drop-cap" : "", backgroundColorClass, bgGradient, textStyle, textDecoration, textWrap, textTransform, fontSize, fontWeight, fontStyle, lineHeight, fontMonospace ? "font-monospace" : "", textReset ? "text-reset" : ""].filter(Boolean).join(" "),
    style: blockStyle
  });
  let innerContent = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
    className: "wmblocks-paragraph-text",
    tagName: "span",
    value: content,
    onChange: value => setAttributes({
      content: value
    }),
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Start typing...", "wm")
  });
  if (wrapStrong) innerContent = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("strong", {
    children: innerContent
  });
  if (wrapEm) innerContent = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("em", {
    children: innerContent
  });
  if (wrapDel) innerContent = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("del", {
    children: innerContent
  });
  if (wrapIns) innerContent = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("ins", {
    children: innerContent
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InspectorControls, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Link Colors", "wm"),
        initialOpen: false,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.BaseControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Link Color", "wm"),
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ColorPicker, {
            color: linkColor,
            onChangeComplete: v => setAttributes({
              linkColor: v.hex
            }),
            disableAlpha: true
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.BaseControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Link Hover Color", "wm"),
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ColorPicker, {
            color: linkHoverColor,
            onChangeComplete: v => setAttributes({
              linkHoverColor: v.hex
            }),
            disableAlpha: true
          })
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Typography & Format", "wm"),
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Font Size", "wm"),
          value: fontSize,
          options: [{
            label: "Default",
            value: ""
          }, {
            label: "FS 1",
            value: "fs-1"
          }, {
            label: "FS 2",
            value: "fs-2"
          }, {
            label: "FS 3",
            value: "fs-3"
          }, {
            label: "FS 4",
            value: "fs-4"
          }, {
            label: "FS 5",
            value: "fs-5"
          }, {
            label: "FS 6",
            value: "fs-6"
          }],
          onChange: v => setAttributes({
            fontSize: v
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Font Weight", "wm"),
          value: fontWeight,
          options: [{
            label: "Default",
            value: ""
          }, {
            label: "Bold",
            value: "fw-bold"
          }, {
            label: "Bolder",
            value: "fw-bolder"
          }, {
            label: "Semibold",
            value: "fw-semibold"
          }, {
            label: "Medium",
            value: "fw-medium"
          }, {
            label: "Normal",
            value: "fw-normal"
          }, {
            label: "Light",
            value: "fw-light"
          }, {
            label: "Lighter",
            value: "fw-lighter"
          }],
          onChange: v => setAttributes({
            fontWeight: v
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Line Height", "wm"),
          value: lineHeight,
          options: [{
            label: "Default",
            value: ""
          }, {
            label: "Line Height 1",
            value: "lh-1"
          }, {
            label: "Small (sm)",
            value: "lh-sm"
          }, {
            label: "Base",
            value: "lh-base"
          }, {
            label: "Large (lg)",
            value: "lh-lg"
          }],
          onChange: v => setAttributes({
            lineHeight: v
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Text Style", "wm"),
          value: textStyle,
          options: [{
            label: "Default",
            value: ""
          }, {
            label: "Lead",
            value: "lead"
          }, {
            label: "Small",
            value: "small"
          }, {
            label: "Mark / Highlight",
            value: "mark"
          }],
          onChange: v => setAttributes({
            textStyle: v
          })
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Structural Tags & Toggles", "wm"),
        initialOpen: false,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
          label: "Drop Cap",
          checked: dropCap,
          onChange: v => setAttributes({
            dropCap: v
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
          label: "Strong (Bold Wrap)",
          checked: wrapStrong,
          onChange: v => setAttributes({
            wrapStrong: v
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
          label: "Italic (Em Wrap)",
          checked: wrapEm,
          onChange: v => setAttributes({
            wrapEm: v
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
          label: "Deleted (Del Wrap)",
          checked: wrapDel,
          onChange: v => setAttributes({
            wrapDel: v
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
          label: "Insertion (Ins Wrap)",
          checked: wrapIns,
          onChange: v => setAttributes({
            wrapIns: v
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
          label: "Monospace Font",
          checked: fontMonospace,
          onChange: v => setAttributes({
            fontMonospace: v
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
          label: "Text Reset",
          checked: textReset,
          onChange: v => setAttributes({
            textReset: v
          })
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Background Color", "wm"),
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p", {
          style: {
            fontSize: "12px",
            marginBottom: "8px"
          },
          children: "Select a predefined Bootstrap shade. This updates both background and text color automatically."
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ColorPalette, {
          colors: backgroundColors,
          value: backgroundColors.find(c => c.slug === backgroundColorClass)?.color,
          onChange: value => {
            const selected = backgroundColors.find(c => c.color === value);
            setAttributes({
              backgroundColorClass: selected ? selected.slug : ""
            });
          },
          disableCustomColors: true,
          clearable: true
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Background Gradient", "wm"),
        initialOpen: false,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.BaseControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Choose a Gradient", "wm"),
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
            style: {
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: "8px",
              marginTop: "10px"
            },
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("button", {
              onClick: () => setAttributes({
                bgGradient: ""
              }),
              style: {
                height: "40px",
                border: bgGradient === "" ? "2px solid #000" : "1px solid #ccc",
                borderRadius: "4px",
                background: "#f0f0f0",
                cursor: "pointer"
              },
              children: "\u2715"
            }), gradientPresets.map(g => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("button", {
              onClick: () => setAttributes({
                bgGradient: g.class
              }),
              style: {
                height: "40px",
                border: bgGradient === g.class ? "2px solid #000" : "1px solid #ccc",
                borderRadius: "4px",
                background: g.style,
                cursor: "pointer"
              },
              title: g.name
            }, g.class))]
          })
        })
      }), dropCap && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Drop Cap Styles", "wm"),
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.BaseControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Drop Cap Color", "wm"),
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ColorPicker, {
            color: dropCapColor,
            onChangeComplete: v => setAttributes({
              dropCapColor: v.hex
            }),
            disableAlpha: true
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RangeControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Drop Cap Size (em)", "wm"),
          value: dropCapSize,
          onChange: v => setAttributes({
            dropCapSize: v
          }),
          min: 2,
          max: 8,
          step: 0.5
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Font Weight", "wm"),
          value: dropCapWeight,
          options: [{
            label: "Normal",
            value: "400"
          }, {
            label: "Semibold",
            value: "600"
          }, {
            label: "Bold",
            value: "700"
          }, {
            label: "Black (Heaviest)",
            value: "900"
          }],
          onChange: v => setAttributes({
            dropCapWeight: v
          })
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Spacing (Inline)", "wm"),
        initialOpen: false,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.BoxControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Margin", "wm"),
          values: margin,
          onChange: nextValues => setAttributes({
            margin: nextValues
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.BoxControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Padding", "wm"),
          values: padding,
          onChange: nextValues => setAttributes({
            padding: nextValues
          })
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p", {
      ...blockProps,
      children: innerContent
    })]
  });
}

/***/ },

/***/ "./src/paragraph/save.js"
/*!*******************************!*\
  !*** ./src/paragraph/save.js ***!
  \*******************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ save)
/* harmony export */ });
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);


function save({
  attributes
}) {
  const {
    // Your existing attributes
    content,
    dropCap,
    dropCapColor,
    dropCapSize,
    dropCapWeight,
    backgroundColorClass,
    bgGradient,
    linkColor,
    linkHoverColor,
    margin,
    padding,
    textStyle,
    textDecoration,
    textWrap,
    textTransform,
    fontSize,
    fontWeight,
    fontStyle,
    lineHeight,
    fontMonospace,
    textReset,
    wrapStrong,
    wrapEm,
    wrapDel,
    wrapIns
  } = attributes;
  const blockStyle = {
    '--wm-link-color': linkColor || undefined,
    '--wm-link-hover-color': linkHoverColor || undefined,
    '--wm-dropcap-color': dropCapColor || undefined,
    '--wm-dropcap-size': dropCapSize ? `${dropCapSize}em` : undefined,
    '--wm-dropcap-lines': dropCapSize ? Math.max(2, Math.floor(dropCapSize * 0.75)) : undefined,
    '--wm-dropcap-weight': dropCapWeight || undefined,
    marginTop: margin?.top,
    marginBottom: margin?.bottom,
    marginLeft: margin?.left,
    marginRight: margin?.right,
    paddingTop: padding?.top,
    paddingBottom: padding?.bottom,
    paddingLeft: padding?.left,
    paddingRight: padding?.right
  };

  // 1. Setup the base wrapper arguments with your existing classes & styles
  const wrapperArgs = {
    className: ['wmblocks-paragraph', dropCap ? 'overflow-hidden has-drop-cap' : '', backgroundColorClass, bgGradient, textStyle, textDecoration, textWrap, textTransform, fontSize, fontWeight, fontStyle, lineHeight, fontMonospace ? 'font-monospace' : '', textReset ? 'text-reset' : ''].filter(Boolean).join(' '),
    style: blockStyle
  };

  // 3. Pass the dynamic arguments into useBlockProps
  const blockProps = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.useBlockProps.save(wrapperArgs);
  let innerContent = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.RichText.Content, {
    className: "wmblocks-paragraph-text",
    value: content,
    tagName: "span"
  });
  if (wrapStrong) innerContent = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("strong", {
    children: innerContent
  });
  if (wrapEm) innerContent = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("em", {
    children: innerContent
  });
  if (wrapDel) innerContent = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("del", {
    children: innerContent
  });
  if (wrapIns) innerContent = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("ins", {
    children: innerContent
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p", {
    ...blockProps,
    children: innerContent
  });
}

/***/ },

/***/ "./src/paragraph/editor.scss"
/*!***********************************!*\
  !*** ./src/paragraph/editor.scss ***!
  \***********************************/
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

/***/ "./src/paragraph/block.json"
/*!**********************************!*\
  !*** ./src/paragraph/block.json ***!
  \**********************************/
(module) {

module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"wmblocks/paragraph","version":"1.0.0","title":"Paragraph","category":"watermelon-blocks","icon":"editor-paragraph","description":"Paragraph block.","supports":{"align":false,"color":false,"typography":false,"spacing":false,"html":false,"anchor":true},"attributes":{"bgGradient":{"type":"string","default":""},"backgroundColorClass":{"type":"string","default":""},"margin":{"type":"object","default":{}},"padding":{"type":"object","default":{}},"content":{"type":"string","source":"html","selector":".wmblocks-paragraph-text","default":""},"dropCap":{"type":"boolean","default":false},"dropCapColor":{"type":"string","default":""},"dropCapSize":{"type":"number","default":4},"dropCapWeight":{"type":"string","default":"700"},"linkColor":{"type":"string","default":""},"linkHoverColor":{"type":"string","default":""},"textStyle":{"type":"string","default":""},"textDecoration":{"type":"string","default":""},"textWrap":{"type":"string","default":""},"textTransform":{"type":"string","default":""},"fontSize":{"type":"string","default":""},"fontWeight":{"type":"string","default":""},"fontStyle":{"type":"string","default":""},"lineHeight":{"type":"string","default":""},"fontMonospace":{"type":"boolean","default":false},"textReset":{"type":"boolean","default":false},"wrapStrong":{"type":"boolean","default":false},"wrapEm":{"type":"boolean","default":false},"wrapDel":{"type":"boolean","default":false},"wrapIns":{"type":"boolean","default":false}},"textdomain":"wm","editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./style-index.css"}');

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
/*!********************************!*\
  !*** ./src/paragraph/index.js ***!
  \********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit */ "./src/paragraph/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./save */ "./src/paragraph/save.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./block.json */ "./src/paragraph/block.json");
/* harmony import */ var _controls_controlanimate_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../controls/controlanimate.js */ "./controls/controlanimate.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);

//import './style.scss';



// Add this to the top of index.js
 // Adjust the path if it's in a different folder

// Custom SVG icon representing a paragraph block

const paragraphIcon = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("svg", {
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("rect", {
    x: "2",
    y: "2",
    width: "20",
    height: "20",
    fill: "none"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("path", {
    d: "M15.75 22C15.5511 22 15.3603 21.9247 15.2197 21.7908C15.079 21.6568 15 21.4752 15 21.2857V3.42857H13.5V21.2857C13.5 21.4752 13.421 21.6568 13.2803 21.7908C13.1397 21.9247 12.9489 22 12.75 22C12.5511 22 12.3603 21.9247 12.2197 21.7908C12.079 21.6568 12 21.4752 12 21.2857V13.4286H10.5C8.9087 13.4286 7.38258 12.8265 6.25736 11.7549C5.13214 10.6833 4.5 9.22981 4.5 7.71429C4.5 6.19876 5.13214 4.74531 6.25736 3.67368C7.38258 2.60204 8.9087 2 10.5 2H18.75C18.9489 2 19.1397 2.07525 19.2803 2.20921C19.421 2.34316 19.5 2.52485 19.5 2.71429C19.5 2.90373 19.421 3.08541 19.2803 3.21936C19.1397 3.35332 18.9489 3.42857 18.75 3.42857H16.5V21.2857C16.5 21.4752 16.421 21.6568 16.2803 21.7908C16.1397 21.9247 15.9489 22 15.75 22Z",
    fill: "#007CED"
  })]
});
(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_3__.name, {
  icon: paragraphIcon,
  edit: _edit__WEBPACK_IMPORTED_MODULE_1__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_2__["default"]
});
})();

/******/ })()
;
//# sourceMappingURL=index.js.map