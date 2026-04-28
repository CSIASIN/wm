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
const AJAX_DATA = window.wmblocksIconData || {
  ajaxUrl: 'ajaxurl',
  nonce: ''
};
if (!AJAX_DATA.nonce) {
  console.warn('[wmblocks/bs-icon] wmblocksIconData nonce is empty. Ensure ajax-handler.php is required in functions.php.');
}

// ── Tab groups — 3 parent tabs, each with sub-categories ─────────────────────
// "all" is always the first sub-category in every group so users can browse
// everything within that group without picking a specific sub-category.
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

// When "all" sub-cat is chosen inside a group, pass this special key to PHP
// which scans only the categories belonging to that group.
// e.g. group=interface → category=arrows|ui|media|files|devices
const GROUP_ALL_KEY = {
  interface: 'arrows|ui|media|files|devices',
  objects: 'buildings|nature|commerce|people|misc|shapes',
  connect: 'communication|social'
};

// ─────────────────────────────────────────────────────────────────────────────

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

// ── AJAX helpers ──────────────────────────────────────────────────────────────

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
async function fetchIcons({
  category = 'all',
  search = '',
  page = 1
}) {
  const normSearch = search.trim().replace(/\s+/g, ' ');
  const params = new URLSearchParams({
    action: 'wmblocks_icon_list',
    nonce: AJAX_DATA.nonce,
    category,
    search: normSearch,
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

// ── Icon Grid ─────────────────────────────────────────────────────────────────

function IconGrid({
  onSelect,
  selectedName
}) {
  const [search, setSearch] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useState)('');
  const [page, setPage] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useState)(1);
  const [icons, setIcons] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useState)([]);
  const [totalPages, setTotalPages] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useState)(1);
  const [total, setTotal] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useState)(0);
  const [loading, setLoading] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
  // activeGroup = one of TAB_GROUPS[].name
  const [activeGroup, setActiveGroup] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useState)('interface');
  // activeCat = sub-category slug within the active group, or 'all'
  const [activeCat, setActiveCat] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useState)('all');
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
    }
    setLoading(false);
  }, []);

  // Derive the real PHP category key from the current group + sub-cat
  const resolvedCat = (group, cat) => cat === 'all' ? GROUP_ALL_KEY[group] : cat;

  // Initial load
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useEffect)(() => {
    load(GROUP_ALL_KEY.interface, '', 1);
  }, []);
  const handleSearch = val => {
    setSearch(val);
    setPage(1);
    clearTimeout(searchTimer.current);
    // Search always spans ALL icons
    searchTimer.current = setTimeout(() => load('all', val, 1), 400);
  };
  const handleGroupChange = groupName => {
    setActiveGroup(groupName);
    setActiveCat('all');
    setPage(1);
    setSearch('');
    load(GROUP_ALL_KEY[groupName], '', 1);
  };
  const handleCatChange = cat => {
    setActiveCat(cat);
    setPage(1);
    load(resolvedCat(activeGroup, cat), search, 1);
  };
  const handlePage = pg => {
    setPage(pg);
    load(search ? 'all' : resolvedCat(activeGroup, activeCat), search, pg);
  };
  const currentGroup = TAB_GROUPS.find(g => g.name === activeGroup);

  // The 3 parent tabs for TabPanel
  const parentTabs = TAB_GROUPS.map(g => ({
    name: g.name,
    title: g.title
  }));
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
    className: "wmblocks-icon-picker",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
      className: "wmblocks-icon-picker__search",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SearchControl, {
        value: search,
        onChange: handleSearch,
        placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Search all icons… (e.g. house heart)', 'wmblocks'),
        hideLabelFromVision: true
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
        className: "wmblocks-icon-picker__count",
        children: loading ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Loading…', 'wmblocks') : `${total} ${(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('icons', 'wmblocks')}${search ? ` ${(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('matching', 'wmblocks')} "${search}"` : ''}`
      })]
    }), !search && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TabPanel, {
        className: "wmblocks-icon-picker__tabs",
        activeClass: "is-active",
        tabs: parentTabs,
        onSelect: handleGroupChange,
        initialTabName: activeGroup,
        children: () => null
      }), currentGroup && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
        className: "wmblocks-icon-picker__subcats",
        children: currentGroup.cats.map(cat => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("button", {
          className: `wmblocks-icon-picker__subcat-pill${activeCat === cat ? ' is-active' : ''}`,
          onMouseDown: e => {
            e.preventDefault();
            handleCatChange(cat);
          },
          children: cat === 'all' ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('All', 'wmblocks') : cat
        }, cat))
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
      className: "wmblocks-icon-picker__grid-wrap",
      children: [loading && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
        className: "wmblocks-icon-picker__loading",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Spinner, {})
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
        className: "wmblocks-icon-picker__grid",
        children: icons.map(name => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("button", {
          title: name,
          className: `wmblocks-icon-btn${selectedName === name ? ' is-selected' : ''}`,
          onMouseDown: e => {
            e.preventDefault();
            onSelect(name);
          },
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("img", {
            src: `${ICON_CDN}${name}.svg`,
            alt: name,
            width: "20",
            height: "20",
            loading: "lazy"
          })
        }, name))
      }), !loading && icons.length === 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
        className: "wmblocks-icon-picker__empty",
        children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('No icons found.', 'wmblocks')
      })]
    }), totalPages > 1 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
      className: "wmblocks-icon-picker__pagination",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("button", {
        className: "wmblocks-icon-picker__page-btn",
        disabled: page === 1,
        onMouseDown: e => {
          e.preventDefault();
          if (page > 1) handlePage(page - 1);
        },
        children: "\u2039"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("span", {
        className: "wmblocks-icon-picker__page-info",
        children: [page, " / ", totalPages]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("button", {
        className: "wmblocks-icon-picker__page-btn",
        disabled: page === totalPages,
        onMouseDown: e => {
          e.preventDefault();
          if (page < totalPages) handlePage(page + 1);
        },
        children: "\u203A"
      })]
    })]
  });
}

// ── Main edit ─────────────────────────────────────────────────────────────────

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
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useEffect)(() => {
    if (!iconName) return;
    if (iconSvg && iconSvg.includes(`<!-- ${iconName} -->`)) return;
    setLoadingSvg(true);
    fetchSvg(iconName).then(svg => {
      if (svg) setAttributes({
        iconSvg: `<!-- ${iconName} -->${svg}`
      });
      setLoadingSvg(false);
    });
  }, [iconName]);
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
          className: "wmblocks-icon-picker__selected-badge",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("img", {
            src: `${ICON_CDN}${iconName}.svg`,
            width: "24",
            height: "24",
            alt: ""
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("code", {
            children: ["bi-", iconName]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(IconGrid, {
          onSelect: name => setAttributes({
            iconName: name,
            iconSvg: ''
          }),
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
          help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Any CSS unit: 2rem, 48px, 3em', 'wmblocks')
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
          help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Required for accessibility on linked icons.', 'wmblocks')
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
        className: "wmblocks-bs-icon-placeholder",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
          children: "\u2B21"
        }), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Select an icon →', 'wmblocks')]
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