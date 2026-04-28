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
/*!******************************************!*\
  !*** ./src/formats/inline-icon/index.js ***!
  \******************************************/
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
 * Bootstrap Icon — Inline Format
 *
 * Storage: <span class="wm-inline-icon" data-icon="NAME">&#xFEFF;</span>
 * Editor preview: editor.scss targets the span via data-icon attribute selector
 *                 and sets background-image to the CDN SVG URL at build time
 *                 for commonly used icons. Dynamic icons get a style injected
 *                 into BOTH the main document and the editor iframe document.
 * Frontend: inline-icon-render.php replaces span with real inline SVG.
 */






const FORMAT_NAME = 'wmblocks/bs-inline-icon';
const ICON_CDN = 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.13.1/icons/';
const AJAX_DATA = window.wmblocksIconData || {
  ajaxUrl: '/wp-admin/admin-ajax.php',
  nonce: ''
};
const ZWNBSP = '\uFEFF';

// ── Tab groups ────────────────────────────────────────────────────────────────
const TAB_GROUPS = [{
  name: 'interface',
  title: '🖥 Interface',
  cats: ['all', 'arrows', 'ui', 'media', 'files', 'devices']
}, {
  name: 'objects',
  title: '🏠 Objects',
  cats: ['all', 'buildings', 'nature', 'commerce', 'people', 'misc', 'shapes']
}, {
  name: 'connect',
  title: '💬 Connect',
  cats: ['all', 'communication', 'social']
}];
const GROUP_ALL_KEY = {
  interface: 'arrows|ui|media|files|devices',
  objects: 'buildings|nature|commerce|people|misc|shapes',
  connect: 'communication|social'
};

// ── AJAX helpers ──────────────────────────────────────────────────────────────
async function fetchIcons({
  category = 'all',
  search = '',
  page = 1
}) {
  const params = new URLSearchParams({
    action: 'wmblocks_icon_list',
    nonce: AJAX_DATA.nonce,
    category,
    search: search.trim().replace(/\s+/g, ' '),
    page: String(page)
  });
  try {
    const r = await fetch(`${AJAX_DATA.ajaxUrl}?${params}`);
    const j = await r.json();
    return j.success ? j.data : null;
  } catch {
    return null;
  }
}

// ── Editor preview: inject CSS into all documents ────────────────────────────
// Gutenberg renders the block editor in an <iframe> (the "canvas").
// Styles added to the main document head do NOT reach the iframe.
// We must inject into every document where icon spans may appear.

const injectedIcons = new Set();
function getEditorDocuments() {
  const docs = [document];
  // Find the Gutenberg editor canvas iframe
  document.querySelectorAll('iframe[name="editor-canvas"], iframe.editor-canvas__iframe, iframe[title]').forEach(iframe => {
    try {
      if (iframe.contentDocument) docs.push(iframe.contentDocument);
    } catch {}
  });
  return docs;
}
function injectIconStyle(name) {
  if (injectedIcons.has(name)) return;
  injectedIcons.add(name);
  const svgUrl = `${ICON_CDN}${encodeURIComponent(name)}.svg`;
  const css = `
.wm-inline-icon[data-icon="${name}"] {
	display: inline-block !important;
	width: 1em !important;
	height: 1em !important;
	min-width: 1em !important;
	background-image: url('${svgUrl}') !important;
	background-repeat: no-repeat !important;
	background-size: contain !important;
	background-position: center !important;
	vertical-align: -0.125em !important;
	color: transparent !important;
	font-size: inherit !important;
	line-height: 1 !important;
}`;

  // Inject into ALL documents (main + any iframes)
  getEditorDocuments().forEach(doc => {
    let styleTag = doc.getElementById('wm-inline-icon-styles');
    if (!styleTag) {
      styleTag = doc.createElement('style');
      styleTag.id = 'wm-inline-icon-styles';
      doc.head?.appendChild(styleTag);
    }
    styleTag.textContent += css;
  });
}

// Watch for new icon spans in ALL documents and inject their styles
function scanForNewIcons() {
  getEditorDocuments().forEach(doc => {
    doc.querySelectorAll('.wm-inline-icon[data-icon]').forEach(span => {
      injectIconStyle(span.getAttribute('data-icon'));
    });
  });
}

// Observe main document — also re-check for new iframes being added
new MutationObserver(scanForNewIcons).observe(document.body, {
  childList: true,
  subtree: true
});

// Re-scan periodically for iframe mount (iframe loads async after script runs)
const iframeCheckInterval = setInterval(() => {
  scanForNewIcons();
  // Stop polling once we find the editor iframe
  if (document.querySelector('iframe[name="editor-canvas"], iframe.editor-canvas__iframe')) {
    clearInterval(iframeCheckInterval);
    // Start observing the iframe's document too
    const iframe = document.querySelector('iframe[name="editor-canvas"], iframe.editor-canvas__iframe');
    try {
      if (iframe?.contentDocument?.body) {
        new MutationObserver(scanForNewIcons).observe(iframe.contentDocument.body, {
          childList: true,
          subtree: true
        });
      }
    } catch {}
  }
}, 500);

// ── Icon picker ───────────────────────────────────────────────────────────────
function InlineIconPicker({
  onPick
}) {
  const [search, setSearch] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useState)('');
  const [page, setPage] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useState)(1);
  const [icons, setIcons] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useState)([]);
  const [totalPages, setTotalPages] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useState)(1);
  const [total, setTotal] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useState)(0);
  const [loading, setLoading] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
  const [activeGroup, setActiveGroup] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useState)('interface');
  const [activeCat, setActiveCat] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useState)('all');
  const timer = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useRef)(null);
  const resolvedCat = (g, c) => c === 'all' ? GROUP_ALL_KEY[g] : c;
  const load = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useCallback)(async (cat, srch, pg) => {
    setLoading(true);
    const data = await fetchIcons({
      category: cat,
      search: srch,
      page: pg
    });
    if (data) {
      setIcons(data.icons);
      setTotalPages(data.pages);
      setTotal(data.total);
    }
    setLoading(false);
  }, []);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useEffect)(() => {
    load(GROUP_ALL_KEY.interface, '', 1);
  }, []);
  const handleSearch = v => {
    setSearch(v);
    setPage(1);
    clearTimeout(timer.current);
    timer.current = setTimeout(() => load('all', v, 1), 350);
  };
  const handleGroup = g => {
    setActiveGroup(g);
    setActiveCat('all');
    setPage(1);
    setSearch('');
    load(GROUP_ALL_KEY[g], '', 1);
  };
  const handleCat = c => {
    setActiveCat(c);
    setPage(1);
    load(resolvedCat(activeGroup, c), '', 1);
  };
  const handlePage = d => {
    const p = page + d;
    setPage(p);
    load(search ? 'all' : resolvedCat(activeGroup, activeCat), search, p);
  };
  const currentGroup = TAB_GROUPS.find(g => g.name === activeGroup);
  const parentTabs = TAB_GROUPS.map(g => ({
    name: g.name,
    title: g.title
  }));
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
    className: "wm-inline-icon-picker",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
      className: "wm-inline-icon-picker__search",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SearchControl, {
        value: search,
        onChange: handleSearch,
        placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Search icons…', 'wmblocks'),
        hideLabelFromVision: true
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
        className: "wm-inline-icon-picker__count",
        children: loading ? '…' : `${total} icons`
      })]
    }), !search && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TabPanel, {
        className: "wm-inline-icon-picker__tabs",
        activeClass: "is-active",
        tabs: parentTabs,
        onSelect: handleGroup,
        initialTabName: activeGroup,
        children: () => null
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
        className: "wm-inline-icon-picker__subcats",
        children: currentGroup?.cats.map(cat => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("button", {
          className: `wm-inline-icon-picker__pill${activeCat === cat ? ' is-active' : ''}`,
          onMouseDown: e => {
            e.preventDefault();
            handleCat(cat);
          },
          children: cat === 'all' ? 'All' : cat
        }, cat))
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
      className: "wm-inline-icon-picker__grid-wrap",
      children: [loading && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
        className: "wm-inline-icon-picker__spinner",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Spinner, {})
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
        className: "wm-inline-icon-picker__grid",
        children: icons.map(name => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("button", {
          title: name,
          className: "wm-inline-icon-picker__btn",
          onMouseDown: e => {
            e.preventDefault();
            onPick(name);
          },
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("img", {
            src: `${ICON_CDN}${name}.svg`,
            alt: name,
            width: "16",
            height: "16",
            loading: "lazy"
          })
        }, name))
      }), !loading && icons.length === 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
        className: "wm-inline-icon-picker__empty",
        children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('No icons found.', 'wmblocks')
      })]
    }), totalPages > 1 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
      className: "wm-inline-icon-picker__pager",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("button", {
        disabled: page === 1,
        onMouseDown: e => {
          e.preventDefault();
          if (page > 1) handlePage(-1);
        },
        children: "\u2039"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("span", {
        children: [page, " / ", totalPages]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("button", {
        disabled: page === totalPages,
        onMouseDown: e => {
          e.preventDefault();
          if (page < totalPages) handlePage(1);
        },
        children: "\u203A"
      })]
    })]
  });
}

// ── Toolbar button ────────────────────────────────────────────────────────────
function InlineIconButton({
  value,
  onChange,
  isActive
}) {
  const [open, setOpen] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
  const activeIconName = ((0,_wordpress_rich_text__WEBPACK_IMPORTED_MODULE_0__.getActiveFormats)(value) || []).find(f => f.type === FORMAT_NAME)?.attributes?.['data-icon'] || '';
  const handlePick = name => {
    setOpen(false);
    injectIconStyle(name); // inject CSS immediately on insert
    const charValue = (0,_wordpress_rich_text__WEBPACK_IMPORTED_MODULE_0__.create)({
      text: ZWNBSP
    });
    const formatted = (0,_wordpress_rich_text__WEBPACK_IMPORTED_MODULE_0__.applyFormat)({
      ...charValue,
      start: 0,
      end: 1
    }, {
      type: FORMAT_NAME,
      attributes: {
        'data-icon': name
      }
    });
    onChange((0,_wordpress_rich_text__WEBPACK_IMPORTED_MODULE_0__.insert)(value, formatted));
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichTextToolbarButton, {
      icon: () => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
        style: {
          fontWeight: 700,
          fontSize: 13,
          padding: '0 3px',
          color: isActive ? '#3858e9' : 'currentColor',
          border: `1px solid ${isActive ? '#3858e9' : 'transparent'}`,
          borderRadius: 3
        },
        children: "\u2B21"
      }),
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Insert Bootstrap Icon', 'wmblocks'),
      onClick: () => setOpen(v => !v),
      isActive: isActive
    }), open && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Popover, {
      placement: "bottom-start",
      onClose: () => setOpen(false),
      focusOnMount: false,
      noArrow: true,
      style: {
        zIndex: 999999
      },
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
        className: "wm-inline-icon-popover",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
          className: "wm-inline-icon-popover__header",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
            children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Insert Icon', 'wmblocks')
          }), activeIconName && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("span", {
            style: {
              display: 'flex',
              alignItems: 'center',
              gap: 4
            },
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("img", {
              src: `${ICON_CDN}${activeIconName}.svg`,
              width: "14",
              height: "14",
              alt: ""
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("code", {
              style: {
                fontSize: 10,
                color: '#aaa'
              },
              children: activeIconName
            })]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(InlineIconPicker, {
          onPick: handlePick
        })]
      })
    })]
  });
}

// ── Register format ───────────────────────────────────────────────────────────
(0,_wordpress_rich_text__WEBPACK_IMPORTED_MODULE_0__.registerFormatType)(FORMAT_NAME, {
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Bootstrap Icon', 'wmblocks'),
  tagName: 'span',
  className: 'wm-inline-icon',
  attributes: {
    'data-icon': 'data-icon'
  },
  edit({
    value,
    onChange,
    isActive
  }) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(InlineIconButton, {
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