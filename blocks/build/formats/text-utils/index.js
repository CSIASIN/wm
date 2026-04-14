/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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

/***/ "@wordpress/components"
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
(module) {

module.exports = window["wp"]["components"];

/***/ },

/***/ "@wordpress/element"
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
(module) {

module.exports = window["wp"]["element"];

/***/ },

/***/ "@wordpress/i18n"
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
(module) {

module.exports = window["wp"]["i18n"];

/***/ },

/***/ "@wordpress/rich-text"
/*!**********************************!*\
  !*** external ["wp","richText"] ***!
  \**********************************/
(module) {

module.exports = window["wp"]["richText"];

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
/*!*****************************************!*\
  !*** ./src/formats/text-utils/index.js ***!
  \*****************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_rich_text__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/rich-text */ "@wordpress/rich-text");
/* harmony import */ var _wordpress_rich_text__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_rich_text__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);
/**
 * Bootstrap Text Utility Formats
 * Registers inline <span class="bs-*"> formats for the WP rich text toolbar.
 * Each format wraps selected text in a span with the Bootstrap class applied.
 */






// ─── Format definitions ────────────────────────────────────────────────────

const FORMAT_GROUPS = [{
  group: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Text Color', 'wmblocks'),
  icon: '🎨',
  formats: [{
    name: 'text-primary',
    label: 'Primary',
    preview: '#0d6efd'
  }, {
    name: 'text-secondary',
    label: 'Secondary',
    preview: '#6c757d'
  }, {
    name: 'text-success',
    label: 'Success',
    preview: '#198754'
  }, {
    name: 'text-danger',
    label: 'Danger',
    preview: '#dc3545'
  }, {
    name: 'text-warning',
    label: 'Warning',
    preview: '#ffc107'
  }, {
    name: 'text-info',
    label: 'Info',
    preview: '#0dcaf0'
  }, {
    name: 'text-light',
    label: 'Light',
    preview: '#f8f9fa',
    bg: '#6c757d'
  }, {
    name: 'text-dark',
    label: 'Dark',
    preview: '#212529'
  }, {
    name: 'text-body',
    label: 'Body',
    preview: '#212529'
  }, {
    name: 'text-muted',
    label: 'Muted',
    preview: '#6c757d'
  }, {
    name: 'text-white',
    label: 'White',
    preview: '#ffffff',
    bg: '#6c757d'
  }, {
    name: 'text-body-emphasis',
    label: 'Body Emphasis',
    preview: '#000000'
  }, {
    name: 'text-body-secondary',
    label: 'Body Secondary',
    preview: '#6c757d'
  }, {
    name: 'text-body-tertiary',
    label: 'Body Tertiary',
    preview: '#adb5bd'
  }]
}, {
  group: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Font Size', 'wmblocks'),
  icon: '🔤',
  formats: [{
    name: 'fs-1',
    label: 'fs-1 (2.5rem)',
    previewStyle: {
      fontSize: '20px',
      fontWeight: 700
    }
  }, {
    name: 'fs-2',
    label: 'fs-2 (2rem)',
    previewStyle: {
      fontSize: '17px',
      fontWeight: 700
    }
  }, {
    name: 'fs-3',
    label: 'fs-3 (1.75rem)',
    previewStyle: {
      fontSize: '15px',
      fontWeight: 600
    }
  }, {
    name: 'fs-4',
    label: 'fs-4 (1.5rem)',
    previewStyle: {
      fontSize: '14px'
    }
  }, {
    name: 'fs-5',
    label: 'fs-5 (1.25rem)',
    previewStyle: {
      fontSize: '13px'
    }
  }, {
    name: 'fs-6',
    label: 'fs-6 (1rem)',
    previewStyle: {
      fontSize: '12px'
    }
  }]
}, {
  group: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Font Weight', 'wmblocks'),
  icon: 'B',
  formats: [{
    name: 'fw-bold',
    label: 'Bold (700)',
    previewStyle: {
      fontWeight: 700
    }
  }, {
    name: 'fw-bolder',
    label: 'Bolder',
    previewStyle: {
      fontWeight: 900
    }
  }, {
    name: 'fw-semibold',
    label: 'Semibold (600)',
    previewStyle: {
      fontWeight: 600
    }
  }, {
    name: 'fw-medium',
    label: 'Medium (500)',
    previewStyle: {
      fontWeight: 500
    }
  }, {
    name: 'fw-normal',
    label: 'Normal (400)',
    previewStyle: {
      fontWeight: 400
    }
  }, {
    name: 'fw-light',
    label: 'Light (300)',
    previewStyle: {
      fontWeight: 300
    }
  }, {
    name: 'fw-lighter',
    label: 'Lighter',
    previewStyle: {
      fontWeight: 200
    }
  }, {
    name: 'fst-italic',
    label: 'Italic',
    previewStyle: {
      fontStyle: 'italic'
    }
  }, {
    name: 'fst-normal',
    label: 'Normal style',
    previewStyle: {
      fontStyle: 'normal'
    }
  }]
}, {
  group: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Text Transform', 'wmblocks'),
  icon: 'Aa',
  formats: [{
    name: 'text-uppercase',
    label: 'UPPERCASE',
    previewStyle: {
      textTransform: 'uppercase',
      letterSpacing: '1px',
      fontSize: '11px'
    }
  }, {
    name: 'text-lowercase',
    label: 'lowercase',
    previewStyle: {
      textTransform: 'lowercase'
    }
  }, {
    name: 'text-capitalize',
    label: 'Capitalize',
    previewStyle: {
      textTransform: 'capitalize'
    }
  }]
}, {
  group: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Text Decoration', 'wmblocks'),
  icon: 'U̲',
  formats: [{
    name: 'text-decoration-underline',
    label: 'Underline',
    previewStyle: {
      textDecoration: 'underline'
    }
  }, {
    name: 'text-decoration-line-through',
    label: 'Strikethrough',
    previewStyle: {
      textDecoration: 'line-through'
    }
  }, {
    name: 'text-decoration-none',
    label: 'No decoration',
    previewStyle: {
      textDecoration: 'none',
      opacity: 0.7
    }
  }]
}, {
  group: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Line Height', 'wmblocks'),
  icon: '↕',
  formats: [{
    name: 'lh-1',
    label: 'lh-1 (1)',
    previewStyle: {
      lineHeight: 1
    }
  }, {
    name: 'lh-sm',
    label: 'lh-sm (1.25)',
    previewStyle: {
      lineHeight: 1.25
    }
  }, {
    name: 'lh-base',
    label: 'lh-base (1.5)',
    previewStyle: {
      lineHeight: 1.5
    }
  }, {
    name: 'lh-lg',
    label: 'lh-lg (2)',
    previewStyle: {
      lineHeight: 2
    }
  }]
}, {
  group: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Misc', 'wmblocks'),
  icon: '⚙',
  formats: [{
    name: 'font-monospace',
    label: 'Monospace',
    previewStyle: {
      fontFamily: 'monospace',
      fontSize: '12px'
    }
  }, {
    name: 'text-wrap',
    label: 'text-wrap',
    previewStyle: {
      fontSize: '11px'
    }
  }, {
    name: 'text-nowrap',
    label: 'text-nowrap',
    previewStyle: {
      whiteSpace: 'nowrap',
      fontSize: '11px'
    }
  }, {
    name: 'text-break',
    label: 'text-break',
    previewStyle: {
      wordBreak: 'break-all',
      fontSize: '11px'
    }
  }, {
    name: 'text-truncate',
    label: 'text-truncate',
    previewStyle: {
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
      maxWidth: '80px',
      display: 'inline-block',
      fontSize: '11px'
    }
  }, {
    name: 'text-reset',
    label: 'text-reset',
    previewStyle: {
      color: 'inherit',
      fontSize: '11px'
    }
  }]
}];

// ─── Register every format as wmblocks/bs-{name} ──────────────────────────
FORMAT_GROUPS.forEach(({
  formats
}) => {
  formats.forEach(({
    name
  }) => {
    const formatName = `wmblocks/bs-${name}`;
    (0,_wordpress_rich_text__WEBPACK_IMPORTED_MODULE_0__.registerFormatType)(formatName, {
      title: name,
      tagName: 'span',
      className: name,
      edit() {
        return null;
      } // All editing via the combined toolbar button
    });
  });
});

// ─── Combined toolbar dropdown ────────────────────────────────────────────
function BSTextUtilsButton({
  value,
  onChange,
  isActive
}) {
  const [open, setOpen] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
  const [activeGroup, setActiveGroup] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useState)(0);
  const btnRef = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useRef)(null);

  // Detect which formats are currently active on selection
  const activeFormats = (0,_wordpress_rich_text__WEBPACK_IMPORTED_MODULE_0__.getActiveFormats)(value) || [];
  const activeClassNames = activeFormats.map(f => f.type.replace('wmblocks/bs-', ''));
  const hasActive = FORMAT_GROUPS.some(g => g.formats.some(f => activeClassNames.includes(f.name)));
  const applyFormat = name => {
    const formatType = `wmblocks/bs-${name}`;
    onChange((0,_wordpress_rich_text__WEBPACK_IMPORTED_MODULE_0__.toggleFormat)(value, {
      type: formatType
    }));
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichTextToolbarButton, {
      icon: () => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("span", {
        style: {
          fontWeight: 700,
          fontSize: '11px',
          padding: '0 4px',
          color: hasActive ? '#007cba' : 'currentColor',
          border: hasActive ? '1px solid #007cba' : 'none',
          borderRadius: 2
        },
        children: ["BS", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
          style: {
            fontSize: '9px'
          },
          children: "T"
        })]
      }),
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('BS Text Utilities', 'wmblocks'),
      onClick: () => setOpen(!open),
      isActive: hasActive,
      ref: btnRef
    }), open && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Popover, {
      placement: "bottom-start",
      onClose: () => setOpen(false),
      noArrow: false,
      focusOnMount: false,
      style: {
        zIndex: 99999
      },
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
        style: {
          width: 320,
          background: '#fff',
          boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
          borderRadius: 6,
          overflow: 'hidden'
        },
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
          style: {
            display: 'flex',
            borderBottom: '1px solid #e2e8f0',
            overflowX: 'auto',
            background: '#f8f9fa'
          },
          children: FORMAT_GROUPS.map((g, i) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("button", {
            onMouseDown: e => {
              e.preventDefault();
              setActiveGroup(i);
            },
            style: {
              padding: '6px 10px',
              border: 'none',
              cursor: 'pointer',
              whiteSpace: 'nowrap',
              background: activeGroup === i ? '#fff' : 'transparent',
              borderBottom: activeGroup === i ? '2px solid #007cba' : '2px solid transparent',
              fontSize: 13,
              color: activeGroup === i ? '#007cba' : '#555',
              fontWeight: activeGroup === i ? 600 : 400
            },
            title: g.group,
            children: g.icon
          }, i))
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
          style: {
            padding: '8px 12px 4px',
            fontSize: 11,
            fontWeight: 600,
            color: '#555',
            textTransform: 'uppercase',
            letterSpacing: '0.5px'
          },
          children: FORMAT_GROUPS[activeGroup].group
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
          style: {
            padding: '4px 8px 10px',
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            maxHeight: 260,
            overflowY: 'auto'
          },
          children: FORMAT_GROUPS[activeGroup].formats.map(fmt => {
            const isOn = activeClassNames.includes(fmt.name);
            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("button", {
              onMouseDown: e => {
                e.preventDefault();
                applyFormat(fmt.name);
              },
              style: {
                display: 'flex',
                alignItems: 'center',
                gap: 10,
                padding: '6px 8px',
                border: '1px solid',
                borderColor: isOn ? '#007cba' : '#e9ecef',
                borderRadius: 4,
                background: isOn ? '#e8f4fd' : '#fff',
                cursor: 'pointer',
                textAlign: 'left'
              },
              children: [fmt.preview !== undefined && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
                style: {
                  display: 'inline-block',
                  width: 16,
                  height: 16,
                  borderRadius: '50%',
                  background: fmt.preview,
                  border: '1px solid rgba(0,0,0,0.1)',
                  flexShrink: 0,
                  ...(fmt.bg ? {
                    boxShadow: `0 0 0 2px ${fmt.bg}`
                  } : {})
                }
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
                style: {
                  flex: 1,
                  fontSize: 12,
                  ...(fmt.previewStyle || {})
                },
                children: fmt.label
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("code", {
                style: {
                  fontSize: 10,
                  color: '#6c757d',
                  background: '#f8f9fa',
                  padding: '1px 5px',
                  borderRadius: 3,
                  fontFamily: 'monospace'
                },
                children: [".", fmt.name]
              }), isOn && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
                style: {
                  color: '#007cba',
                  fontSize: 14
                },
                children: "\u2713"
              })]
            }, fmt.name);
          })
        }), activeClassNames.length > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
          style: {
            padding: '6px 12px',
            borderTop: '1px solid #e9ecef',
            background: '#f8f9fa',
            display: 'flex',
            alignItems: 'center',
            gap: 6,
            flexWrap: 'wrap'
          },
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
            style: {
              fontSize: 10,
              color: '#555',
              flexShrink: 0
            },
            children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Active:', 'wmblocks')
          }), activeClassNames.map(cls => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("code", {
            style: {
              fontSize: 10,
              background: '#007cba',
              color: '#fff',
              padding: '1px 5px',
              borderRadius: 3
            },
            children: cls
          }, cls)), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("button", {
            onMouseDown: e => {
              e.preventDefault();
              // Clear all active BS text formats
              let newValue = value;
              activeClassNames.forEach(cls => {
                newValue = (0,_wordpress_rich_text__WEBPACK_IMPORTED_MODULE_0__.toggleFormat)(newValue, {
                  type: `wmblocks/bs-${cls}`
                });
              });
              onChange(newValue);
            },
            style: {
              marginLeft: 'auto',
              fontSize: 10,
              padding: '1px 6px',
              border: '1px solid #fcc',
              borderRadius: 3,
              background: '#fff5f5',
              color: '#c00',
              cursor: 'pointer'
            },
            children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('✕ Clear all', 'wmblocks')
          })]
        })]
      })
    })]
  });
}

// ─── Register the combined toolbar button using the first format slot ─────
// We piggyback on the first format's edit() to inject the toolbar button once
const TOOLBAR_FORMAT = 'wmblocks/bs-text-utils-toolbar';
(0,_wordpress_rich_text__WEBPACK_IMPORTED_MODULE_0__.registerFormatType)(TOOLBAR_FORMAT, {
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('BS Text Utilities', 'wmblocks'),
  tagName: 'span',
  className: null,
  // not a real format, just hosts the toolbar button
  edit({
    value,
    onChange,
    isActive
  }) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(BSTextUtilsButton, {
      value: value,
      onChange: onChange,
      isActive: isActive
    });
  }
});
})();

/******/ })()
;
//# sourceMappingURL=index.js.map