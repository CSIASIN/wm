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
 * Editor preview: CSS background-image injected into both main doc + iframe
 * Frontend: inline-icon-render.php replaces span with real inline SVG
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
  page = 1,
  perPage = 80
}) {
  const params = new URLSearchParams({
    action: 'wmblocks_icon_list',
    nonce: AJAX_DATA.nonce,
    category,
    search: search.trim().replace(/\s+/g, ' '),
    page: String(page),
    per_page: String(perPage)
  });
  try {
    const r = await fetch(`${AJAX_DATA.ajaxUrl}?${params}`);
    const j = await r.json();
    return j.success ? j.data : null;
  } catch {
    return null;
  }
}

// ── Editor SVG preview — CSS only, never touch contentEditable DOM ────────────
//
// CRITICAL: We must NEVER inject anything into the contentEditable span.
// Gutenberg serialises the contentEditable DOM to produce post_content.
// If we inject an SVG into the span, Gutenberg saves the SVG (broken by
// its HTML serialiser) into post_content — which is exactly the bug.
//
// Solution: inject a <style> tag with background-image rules into every
// document (main + iframe). The span shows the icon via CSS background-image
// without touching the DOM content Gutenberg reads for serialisation.

const injectedIcons = new Set();
function getEditorDocs() {
  const docs = [document];
  document.querySelectorAll('iframe').forEach(f => {
    try {
      if (f.contentDocument && f.contentDocument !== document) {
        docs.push(f.contentDocument);
      }
    } catch {}
  });
  return docs;
}
function injectIconStyle(name) {
  if (!name) return;

  // Always re-inject into all docs — new iframes may have appeared
  const css = [`.wm-inline-icon[data-icon="${name}"] {`, `  background-image: url('${ICON_CDN}${encodeURIComponent(name)}.svg');`, `  background-repeat: no-repeat;`, `  background-size: contain;`, `  background-position: center;`, `  display: inline-block;`, `  width: 1em;`, `  height: 1em;`, `  min-width: 1em;`, `  color: transparent;`, `  vertical-align: -0.125em;`, `  font-size: inherit;`, `  line-height: 1;`, `}`].join('\n');
  if (!injectedIcons.has(name)) {
    injectedIcons.add(name);
  }
  getEditorDocs().forEach(doc => {
    try {
      let styleEl = doc.getElementById('wm-inline-icon-styles');
      if (!styleEl) {
        styleEl = doc.createElement('style');
        styleEl.id = 'wm-inline-icon-styles';
        (doc.head || doc.documentElement).appendChild(styleEl);
      }
      // Only add if not already present for this icon
      if (!styleEl.textContent.includes(`data-icon="${name}"`)) {
        styleEl.textContent += css;
      }
    } catch {}
  });
}
function scanAndInjectStyles() {
  getEditorDocs().forEach(doc => {
    try {
      doc.querySelectorAll('.wm-inline-icon[data-icon]').forEach(span => {
        injectIconStyle(span.getAttribute('data-icon'));
      });
    } catch {}
  });
}

// Watch main document for new icon spans
new MutationObserver(scanAndInjectStyles).observe(document.body, {
  childList: true,
  subtree: true
});

// Poll for editor iframes and observe them too
const iframeTimer = setInterval(() => {
  const iframes = Array.from(document.querySelectorAll('iframe'));
  iframes.forEach(f => {
    try {
      if (f.contentDocument?.body && !f._wmStyleObserving) {
        f._wmStyleObserving = true;
        // Inject all already-known icons into the new iframe doc
        injectedIcons.forEach(name => injectIconStyle(name));
        // Watch for new icons inside this iframe
        new MutationObserver(scanAndInjectStyles).observe(f.contentDocument.body, {
          childList: true,
          subtree: true
        });
        scanAndInjectStyles();
      }
    } catch {}
  });
  if (iframes.length) clearInterval(iframeTimer);
}, 300);

// wp.data subscriber to catch editor state changes
if (window.wp?.data) {
  let scanDebounce;
  wp.data.subscribe(() => {
    clearTimeout(scanDebounce);
    scanDebounce = setTimeout(scanAndInjectStyles, 150);
  });
}

// ── Icon Modal ────────────────────────────────────────────────────────────────
function IconModal({
  onPick,
  onClose
}) {
  const [search, setSearch] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useState)('');
  const [page, setPage] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useState)(1);
  const [icons, setIcons] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useState)([]);
  const [totalPages, setTotalPages] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useState)(1);
  const [total, setTotal] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useState)(0);
  const [loading, setLoading] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
  const [activeGroup, setActiveGroup] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useState)('interface');
  const [activeCat, setActiveCat] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useState)('all');
  const [hovered, setHovered] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useState)('');
  const timer = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useRef)(null);
  const resolvedCat = (g, c) => c === 'all' ? GROUP_ALL_KEY[g] : c;
  const load = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useCallback)(async (cat, srch, pg) => {
    setLoading(true);
    const data = await fetchIcons({
      category: cat,
      search: srch,
      page: pg,
      perPage: 80
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
    load(resolvedCat(activeGroup, c), search, 1);
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
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Modal, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Insert Bootstrap Icon', 'wmblocks'),
    onRequestClose: onClose,
    className: "wm-icon-modal",
    size: "large",
    isFullScreen: false,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
      className: "wm-icon-modal__body",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
        className: "wm-icon-modal__search-row",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
          className: "wm-icon-modal__search-wrap",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SearchControl, {
            value: search,
            onChange: handleSearch,
            placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Search all 1500+ icons… e.g. house fill, arrow up', 'wmblocks'),
            hideLabelFromVision: true
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
          className: "wm-icon-modal__count",
          children: loading ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Spinner, {}) : `${total} ${(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('icons', 'wmblocks')}${search ? ` ${(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('found', 'wmblocks')}` : ''}`
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
        className: "wm-icon-modal__hint",
        children: hovered ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("img", {
            src: `${ICON_CDN}${hovered}.svg`,
            width: "16",
            height: "16",
            alt: ""
          }), " ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("code", {
            children: hovered
          })]
        }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
          style: {
            color: '#aaa'
          },
          children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Hover an icon to see its name, click to insert', 'wmblocks')
        })
      }), !search && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TabPanel, {
          className: "wm-icon-modal__tabs",
          activeClass: "is-active",
          tabs: parentTabs,
          onSelect: handleGroup,
          initialTabName: activeGroup,
          children: () => null
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
          className: "wm-icon-modal__subcats",
          children: currentGroup?.cats.map(cat => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("button", {
            className: `wm-icon-modal__pill${activeCat === cat ? ' is-active' : ''}`,
            onMouseDown: e => {
              e.preventDefault();
              handleCat(cat);
            },
            children: cat === 'all' ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('All', 'wmblocks') : cat
          }, cat))
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
        className: "wm-icon-modal__grid-wrap",
        children: [loading && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
          className: "wm-icon-modal__loading",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Spinner, {})
        }), !loading && icons.length === 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
          className: "wm-icon-modal__empty",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
            style: {
              fontSize: 48
            },
            children: "\uD83D\uDD0D"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("p", {
            children: [(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('No icons found for', 'wmblocks'), " ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("strong", {
              children: ["\"", search, "\""]
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
            style: {
              color: '#aaa',
              fontSize: 12
            },
            children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Try a different keyword, e.g. "arrow" or "house"', 'wmblocks')
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
          className: "wm-icon-modal__grid",
          children: icons.map(name => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("button", {
            title: name,
            className: "wm-icon-modal__icon-btn",
            onClick: () => onPick(name),
            onMouseEnter: () => setHovered(name),
            onMouseLeave: () => setHovered(''),
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("img", {
              src: `${ICON_CDN}${name}.svg`,
              alt: name,
              width: "24",
              height: "24",
              loading: "lazy"
            })
          }, name))
        })]
      }), totalPages > 1 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
        className: "wm-icon-modal__pagination",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
          variant: "secondary",
          disabled: page === 1,
          onClick: () => {
            if (page > 1) handlePage(-1);
          },
          children: ["\u2190 ", (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Prev', 'wmblocks')]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("span", {
          className: "wm-icon-modal__page-info",
          children: [(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Page', 'wmblocks'), " ", page, " / ", totalPages]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
          variant: "secondary",
          disabled: page === totalPages,
          onClick: () => {
            if (page < totalPages) handlePage(1);
          },
          children: [(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Next', 'wmblocks'), " \u2192"]
        })]
      })]
    })
  });
}

// ── Toolbar button ────────────────────────────────────────────────────────────
function InlineIconButton({
  value,
  onChange,
  isActive
}) {
  const [modalOpen, setModalOpen] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
  const activeIconName = ((0,_wordpress_rich_text__WEBPACK_IMPORTED_MODULE_0__.getActiveFormats)(value) || []).find(f => f.type === FORMAT_NAME)?.attributes?.['data-icon'] || '';
  const handlePick = name => {
    setModalOpen(false);
    injectIconStyle(name);
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
          padding: '0 4px',
          color: isActive ? '#3858e9' : 'currentColor',
          border: `1px solid ${isActive ? '#3858e9' : 'transparent'}`,
          borderRadius: 3
        },
        children: activeIconName ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("img", {
          src: `${ICON_CDN}${activeIconName}.svg`,
          width: "16",
          height: "16",
          alt: activeIconName,
          style: {
            verticalAlign: 'middle'
          }
        }) : '⬡'
      }),
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Insert Bootstrap Icon', 'wmblocks'),
      onClick: () => setModalOpen(true),
      isActive: isActive
    }), modalOpen && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(IconModal, {
      onPick: handlePick,
      onClose: () => setModalOpen(false)
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