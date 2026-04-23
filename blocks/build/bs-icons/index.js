/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/bs-icons/edit.js"
/*!******************************!*\
  !*** ./src/bs-icons/edit.js ***!
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
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./editor.scss */ "./src/bs-icons/editor.scss");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);






const ICON_CDN = 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.13.1/icons/';
// wmblocksIconData is localised by ajax-handler.php via wp_localize_script / wp_add_inline_script.
// If nonce is empty the AJAX calls will 403 — check ajax-handler.php is required in functions.php.
const AJAX_DATA = window.wmblocksIconData || {
  ajaxUrl: 'ajaxurl',
  nonce: ''
};
if (!AJAX_DATA.nonce) {
  console.warn('[wmblocks/bs-icon] wmblocksIconData nonce is empty. Make sure ajax-handler.php is required in functions.php.');
}
const PER_PAGE = 48;
const COLOR_OPTS = [{
  label: '— Inherit —',
  value: ''
}, {
  label: 'text-primary',
  value: 'text-primary'
}, {
  label: 'text-secondary',
  value: 'text-secondary'
}, {
  label: 'text-success',
  value: 'text-success'
}, {
  label: 'text-danger',
  value: 'text-danger'
}, {
  label: 'text-warning',
  value: 'text-warning'
}, {
  label: 'text-info',
  value: 'text-info'
}, {
  label: 'text-dark',
  value: 'text-dark'
}, {
  label: 'text-light',
  value: 'text-light'
}, {
  label: 'text-muted',
  value: 'text-muted'
}, {
  label: 'text-white',
  value: 'text-white'
}, {
  label: 'text-body',
  value: 'text-body'
}, {
  label: 'text-body-emphasis',
  value: 'text-body-emphasis'
}];
const ALIGN_OPTS = [{
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

// Fetch SVG via AJAX (with transient cache on server side)
async function fetchSvg(name) {
  const url = `${AJAX_DATA.ajaxUrl}?action=wmblocks_icon_svg&nonce=${AJAX_DATA.nonce}&name=${encodeURIComponent(name)}`;
  try {
    const res = await fetch(url);
    const json = await res.json();
    return json.success ? json.data.svg : null;
  } catch {
    return null;
  }
}

// Fetch icon list page via AJAX
async function fetchIcons({
  category = 'all',
  search = '',
  page = 1
}) {
  const params = new URLSearchParams({
    action: 'wmblocks_icon_list',
    nonce: AJAX_DATA.nonce,
    category,
    search,
    page: String(page)
  });
  try {
    const res = await fetch(`${AJAX_DATA.ajaxUrl}?${params}`);
    const json = await res.json();
    return json.success ? json.data : null;
  } catch {
    return null;
  }
}

// ── Icon Grid ────────────────────────────────────────────────────────────────
function IconGrid({
  onSelect,
  selectedName
}) {
  const [category, setCategory] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useState)('all');
  const [search, setSearch] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useState)('');
  const [page, setPage] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useState)(1);
  const [icons, setIcons] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useState)([]);
  const [totalPages, setTotalPages] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useState)(1);
  const [total, setTotal] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useState)(0);
  const [loading, setLoading] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
  const [categories, setCategories] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useState)(['all']);
  const searchTimer = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useRef)(null);
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
      if (data.categories) setCategories(data.categories);
    }
    setLoading(false);
  }, []);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useEffect)(() => {
    load(category, search, page);
  }, []);
  const handleSearch = val => {
    setSearch(val);
    setPage(1);
    clearTimeout(searchTimer.current);
    searchTimer.current = setTimeout(() => load(category, val, 1), 400);
  };
  const handleCategory = cat => {
    setCategory(cat);
    setPage(1);
    setSearch('');
    load(cat, '', 1);
  };
  const handlePage = pg => {
    setPage(pg);
    load(category, search, pg);
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
    className: "wmblocks-icon-picker",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
      style: {
        padding: '8px',
        borderBottom: '1px solid #e9ecef'
      },
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("input", {
        type: "search",
        value: search,
        onChange: e => handleSearch(e.target.value),
        placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Search icons…', 'wmblocks'),
        style: {
          width: '100%',
          padding: '6px 10px',
          border: '1px solid #ddd',
          borderRadius: '4px',
          fontSize: '13px',
          outline: 'none',
          boxSizing: 'border-box'
        }
      }), total > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
        style: {
          fontSize: '10px',
          color: '#adb5bd',
          marginTop: '4px'
        },
        children: [total, " ", (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('icons', 'wmblocks'), search && ` ${(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('matching', 'wmblocks')} "${search}"`]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
      style: {
        display: 'flex',
        overflowX: 'auto',
        borderBottom: '1px solid #333',
        background: '#f8f9fa'
      },
      children: categories.map(cat => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("button", {
        onMouseDown: e => {
          e.preventDefault();
          handleCategory(cat);
        },
        style: {
          padding: '6px 10px',
          border: 'none',
          cursor: 'pointer',
          whiteSpace: 'nowrap',
          background: category === cat ? '#fff' : 'transparent',
          borderBottom: category === cat ? '2px solid #0d6efd' : '2px solid transparent',
          fontSize: '11px',
          color: category === cat ? '#0d6efd' : '#555',
          fontWeight: category === cat ? 600 : 400,
          flexShrink: 0
        },
        children: cat
      }, cat))
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
      style: {
        padding: '8px',
        minHeight: '160px',
        position: 'relative'
      },
      children: [loading && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
        style: {
          position: 'absolute',
          inset: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'rgba(255,255,255,0.8)',
          zIndex: 2
        },
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Spinner, {})
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
        style: {
          display: 'grid',
          gridTemplateColumns: 'repeat(8, 1fr)',
          gap: '4px'
        },
        children: icons.map(name => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("button", {
          title: name,
          onMouseDown: e => {
            e.preventDefault();
            onSelect(name);
          },
          style: {
            width: '100%',
            aspectRatio: '1',
            border: '1px solid',
            borderColor: selectedName === name ? '#0d6efd' : '#e9ecef',
            borderRadius: '4px',
            background: selectedName === name ? '#e8f4fd' : '#fff',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '4px'
          },
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("img", {
            src: `${ICON_CDN}${name}.svg`,
            alt: name,
            width: "18",
            height: "18",
            style: {
              display: 'block',
              pointerEvents: 'none'
            },
            loading: "lazy"
          })
        }, name))
      }), !loading && icons.length === 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
        style: {
          textAlign: 'center',
          color: '#adb5bd',
          padding: '20px',
          fontSize: '12px'
        },
        children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('No icons found', 'wmblocks')
      })]
    }), totalPages > 1 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '4px',
        padding: '8px',
        borderTop: '1px solid #e9ecef'
      },
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("button", {
        onMouseDown: e => {
          e.preventDefault();
          if (page > 1) handlePage(page - 1);
        },
        disabled: page === 1,
        style: {
          padding: '3px 8px',
          border: '1px solid #ddd',
          borderRadius: '3px',
          background: '#f8f9fa',
          cursor: page === 1 ? 'not-allowed' : 'pointer',
          opacity: page === 1 ? 0.4 : 1,
          fontSize: '12px'
        },
        children: "\u2190"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("span", {
        style: {
          fontSize: '11px',
          color: '#555'
        },
        children: [page, " / ", totalPages]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("button", {
        onMouseDown: e => {
          e.preventDefault();
          if (page < totalPages) handlePage(page + 1);
        },
        disabled: page === totalPages,
        style: {
          padding: '3px 8px',
          border: '1px solid #ddd',
          borderRadius: '3px',
          background: '#f8f9fa',
          cursor: page === totalPages ? 'not-allowed' : 'pointer',
          opacity: page === totalPages ? 0.4 : 1,
          fontSize: '12px'
        },
        children: "\u2192"
      })]
    })]
  });
}

// ── Main Block ───────────────────────────────────────────────────────────────
function Edit({
  attributes,
  setAttributes
}) {
  const {
    iconName,
    iconSvg,
    size,
    textColor,
    align,
    linkUrl,
    linkTarget,
    ariaLabel,
    customClass
  } = attributes;
  const [loadingSvg, setLoadingSvg] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useState)(false);

  // Load SVG when icon name changes
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useEffect)(() => {
    if (!iconName) return;
    if (iconSvg && iconSvg.includes(`<!-- ${iconName} -->`)) return; // already loaded
    setLoadingSvg(true);
    fetchSvg(iconName).then(svg => {
      if (svg) {
        // Tag with comment so we know which icon this SVG belongs to
        setAttributes({
          iconSvg: `<!-- ${iconName} -->${svg}`
        });
      }
      setLoadingSvg(false);
    });
  }, [iconName]);
  const handleSelect = name => {
    setAttributes({
      iconName: name,
      iconSvg: ''
    });
  };

  // Build display SVG — strip the comment tag, set size
  const displaySvg = iconSvg ? iconSvg.replace(/^<!--[^>]+-->/, '').replace(/width="[^"]*"/, `width="${size}"`).replace(/height="[^"]*"/, `height="${size}"`) : null;
  const wrapClass = [textColor, align, customClass].filter(Boolean).join(' ');
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps)({
    className: ['wmblocks-bs-icon-wrapper', wrapClass].filter(Boolean).join(' ')
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InspectorControls, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Choose Icon', 'wmblocks'),
        initialOpen: true,
        children: [iconName && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
          style: {
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            marginBottom: '10px',
            padding: '8px',
            background: '#f0f6ff',
            borderRadius: '4px',
            border: '1px solid #cfe2ff'
          },
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("img", {
            src: `${ICON_CDN}${iconName}.svg`,
            width: "24",
            height: "24",
            alt: ""
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("code", {
            style: {
              fontSize: '12px',
              color: '#0d6efd'
            },
            children: ["bi-", iconName]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(IconGrid, {
          onSelect: handleSelect,
          selectedName: iconName
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Appearance', 'wmblocks'),
        initialOpen: true,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Size', 'wmblocks'),
          value: size,
          onChange: v => setAttributes({
            size: v
          }),
          placeholder: "2rem",
          help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('e.g. 1rem, 2rem, 48px, 3em', 'wmblocks')
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Color', 'wmblocks'),
          value: textColor,
          options: COLOR_OPTS,
          onChange: v => setAttributes({
            textColor: v
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Alignment', 'wmblocks'),
          value: align,
          options: ALIGN_OPTS,
          onChange: v => setAttributes({
            align: v
          })
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Link', 'wmblocks'),
        initialOpen: false,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('URL', 'wmblocks'),
          value: linkUrl,
          onChange: v => setAttributes({
            linkUrl: v
          }),
          type: "url",
          placeholder: "https://"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Open in new tab', 'wmblocks'),
          checked: !!linkTarget,
          onChange: v => setAttributes({
            linkTarget: v
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Aria Label', 'wmblocks'),
          value: ariaLabel,
          onChange: v => setAttributes({
            ariaLabel: v
          }),
          help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Required for accessibility when using a linked icon without visible text.', 'wmblocks')
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Advanced', 'wmblocks'),
        initialOpen: false,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Extra Classes', 'wmblocks'),
          value: customClass,
          onChange: v => setAttributes({
            customClass: v
          })
        })
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
      ...blockProps,
      children: [loadingSvg && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Spinner, {}), !loadingSvg && displaySvg && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
        className: textColor || undefined,
        dangerouslySetInnerHTML: {
          __html: displaySvg
        },
        title: iconName
      }), !loadingSvg && !displaySvg && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
        style: {
          display: 'inline-flex',
          alignItems: 'center',
          gap: '6px',
          padding: '8px 12px',
          border: '2px dashed #dee2e6',
          borderRadius: '4px',
          color: '#adb5bd',
          fontSize: '12px'
        },
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
          children: "\uD83D\uDD35"
        }), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Select an icon in the sidebar →', 'wmblocks')]
      })]
    })]
  });
}

/***/ },

/***/ "./src/bs-icons/index.js"
/*!*******************************!*\
  !*** ./src/bs-icons/index.js ***!
  \*******************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.scss */ "./src/bs-icons/style.scss");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit */ "./src/bs-icons/edit.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./block.json */ "./src/bs-icons/block.json");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);






(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_4__.name, {
  edit: _edit__WEBPACK_IMPORTED_MODULE_3__["default"],
  save: () => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
    ..._wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps.save()
  })
});

/***/ },

/***/ "./src/bs-icons/editor.scss"
/*!**********************************!*\
  !*** ./src/bs-icons/editor.scss ***!
  \**********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ },

/***/ "./src/bs-icons/style.scss"
/*!*********************************!*\
  !*** ./src/bs-icons/style.scss ***!
  \*********************************/
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

/***/ "./src/bs-icons/block.json"
/*!*********************************!*\
  !*** ./src/bs-icons/block.json ***!
  \*********************************/
(module) {

module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"wmblocks/bs-icon","version":"0.1.0","title":"Bootstrap Icon","category":"watermelon-blocks","icon":"star-filled","description":"Insert any Bootstrap Icon by name with size, color, alignment and link options.","supports":{"html":false,"anchor":true},"attributes":{"iconName":{"type":"string","default":"star"},"iconSvg":{"type":"string","default":""},"size":{"type":"string","default":"2rem"},"color":{"type":"string","default":""},"textColor":{"type":"string","default":""},"align":{"type":"string","default":""},"linkUrl":{"type":"string","default":""},"linkTarget":{"type":"boolean","default":false},"ariaLabel":{"type":"string","default":""},"customClass":{"type":"string","default":""}},"textdomain":"wm","editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./style-index.css","render":"file:./render.php"}');

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
/******/ 			"bs-icons/index": 0,
/******/ 			"bs-icons/style-index": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["bs-icons/style-index"], () => (__webpack_require__("./src/bs-icons/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map