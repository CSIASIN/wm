/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/list-group/edit.js"
/*!********************************!*\
  !*** ./src/list-group/edit.js ***!
  \********************************/
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
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./editor.scss */ "./src/list-group/editor.scss");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);






const VARIANTS = [{
  label: '— Default —',
  value: ''
}, {
  label: 'Primary',
  value: 'list-group-item-primary'
}, {
  label: 'Secondary',
  value: 'list-group-item-secondary'
}, {
  label: 'Success',
  value: 'list-group-item-success'
}, {
  label: 'Danger',
  value: 'list-group-item-danger'
}, {
  label: 'Warning',
  value: 'list-group-item-warning'
}, {
  label: 'Info',
  value: 'list-group-item-info'
}, {
  label: 'Light',
  value: 'list-group-item-light'
}, {
  label: 'Dark',
  value: 'list-group-item-dark'
}];
const BADGE_VARIANTS = [{
  label: 'Primary',
  value: 'text-bg-primary'
}, {
  label: 'Secondary',
  value: 'text-bg-secondary'
}, {
  label: 'Success',
  value: 'text-bg-success'
}, {
  label: 'Danger',
  value: 'text-bg-danger'
}, {
  label: 'Warning',
  value: 'text-bg-warning'
}, {
  label: 'Info',
  value: 'text-bg-info'
}, {
  label: 'Light',
  value: 'text-bg-light'
}, {
  label: 'Dark',
  value: 'text-bg-dark'
}];
const HORIZONTAL_OPTIONS = [{
  label: '— Off —',
  value: ''
}, {
  label: 'Always',
  value: 'list-group-horizontal'
}, {
  label: 'From SM',
  value: 'list-group-horizontal-sm'
}, {
  label: 'From MD',
  value: 'list-group-horizontal-md'
}, {
  label: 'From LG',
  value: 'list-group-horizontal-lg'
}, {
  label: 'From XL',
  value: 'list-group-horizontal-xl'
}, {
  label: 'From XXL',
  value: 'list-group-horizontal-xxl'
}];

// ── Popover rendered as a sibling to the list, not inside the item ──────────
function ItemPopover({
  item,
  index,
  itemType,
  onUpdate,
  onMove,
  onRemove,
  onClose,
  totalItems
}) {
  const ref = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useRef)(null);

  // Close on outside click
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useEffect)(() => {
    const handler = e => {
      if (ref.current && !ref.current.contains(e.target)) onClose();
    };
    // Delay so the same click that opens doesn't immediately close
    const timer = setTimeout(() => document.addEventListener('mousedown', handler), 100);
    return () => {
      clearTimeout(timer);
      document.removeEventListener('mousedown', handler);
    };
  }, []);
  const field = (label, value, onChange, placeholder = '', type = 'text', width = '100%') => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      marginBottom: '8px'
    },
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
      style: {
        fontSize: '11px',
        color: '#555',
        width: '64px',
        flexShrink: 0
      },
      children: label
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("input", {
      type: type,
      value: value,
      onChange: e => onChange(e.target.value),
      placeholder: placeholder,
      style: {
        width,
        fontSize: '12px',
        padding: '4px 6px',
        border: '1px solid #ccc',
        borderRadius: '4px',
        outline: 'none',
        flex: 1
      }
    })]
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
    ref: ref,
    onMouseDown: e => e.stopPropagation(),
    style: {
      background: '#fff',
      border: '1px solid #ddd',
      borderRadius: '4px',
      padding: '12px',
      minWidth: '300px',
      boxShadow: '0 4px 16px rgba(0,0,0,0.15)',
      marginTop: '2px'
    },
    children: [itemType === 'a' && field('🔗 URL', item.url, v => onUpdate('url', v), 'https://', 'url'), field((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Subtext', 'wmblocks'), item.subtext, v => onUpdate('subtext', v), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Optional subtitle…', 'wmblocks')), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        marginBottom: '8px'
      },
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
        style: {
          fontSize: '11px',
          color: '#555',
          width: '64px',
          flexShrink: 0
        },
        children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Badge', 'wmblocks')
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("input", {
        type: "text",
        value: item.badge,
        onChange: e => onUpdate('badge', e.target.value),
        placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('e.g. 14', 'wmblocks'),
        style: {
          width: '64px',
          fontSize: '12px',
          padding: '4px 6px',
          border: '1px solid #ccc',
          borderRadius: '4px',
          outline: 'none'
        }
      }), item.badge && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("select", {
        value: item.badgeVariant,
        onChange: e => onUpdate('badgeVariant', e.target.value),
        style: {
          flex: 1,
          fontSize: '12px',
          padding: '4px 6px',
          border: '1px solid #ccc',
          borderRadius: '4px'
        },
        children: BADGE_VARIANTS.map(opt => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("option", {
          value: opt.value,
          children: opt.label
        }, opt.value))
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        marginBottom: '8px'
      },
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
        style: {
          fontSize: '11px',
          color: '#555',
          width: '64px',
          flexShrink: 0
        },
        children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Color', 'wmblocks')
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("select", {
        value: item.variant,
        onChange: e => onUpdate('variant', e.target.value),
        style: {
          flex: 1,
          fontSize: '12px',
          padding: '4px 6px',
          border: '1px solid #ccc',
          borderRadius: '4px'
        },
        children: VARIANTS.map(opt => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("option", {
          value: opt.value,
          children: opt.label
        }, opt.value))
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
      style: {
        display: 'flex',
        gap: '16px',
        marginBottom: '10px',
        fontSize: '12px'
      },
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("label", {
        style: {
          display: 'flex',
          alignItems: 'center',
          gap: '4px',
          cursor: 'pointer'
        },
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("input", {
          type: "checkbox",
          checked: !!item.active,
          onChange: e => onUpdate('active', e.target.checked)
        }), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Active', 'wmblocks')]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("label", {
        style: {
          display: 'flex',
          alignItems: 'center',
          gap: '4px',
          cursor: 'pointer'
        },
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("input", {
          type: "checkbox",
          checked: !!item.disabled,
          onChange: e => onUpdate('disabled', e.target.checked)
        }), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Disabled', 'wmblocks')]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
      style: {
        display: 'flex',
        gap: '6px',
        borderTop: '1px solid #eee',
        paddingTop: '8px'
      },
      children: [[['↑ Up', () => onMove(-1), index === 0], ['↓ Down', () => onMove(1), index === totalItems - 1]].map(([label, fn, dis]) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("button", {
        onMouseDown: e => {
          e.preventDefault();
          fn();
        },
        disabled: dis,
        style: {
          fontSize: '11px',
          padding: '3px 8px',
          border: '1px solid #ddd',
          borderRadius: '3px',
          background: '#f8f9fa',
          cursor: dis ? 'not-allowed' : 'pointer',
          opacity: dis ? 0.4 : 1
        },
        children: label
      }, label)), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("button", {
        onMouseDown: e => {
          e.preventDefault();
          onRemove();
        },
        style: {
          fontSize: '11px',
          padding: '3px 8px',
          border: '1px solid #fcc',
          borderRadius: '3px',
          background: '#fff5f5',
          color: '#c00',
          cursor: 'pointer',
          marginLeft: 'auto'
        },
        children: ["\u2715 ", (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Remove', 'wmblocks')]
      })]
    })]
  });
}

// ── Main block ────────────────────────────────────────────────────────────────
function Edit({
  attributes,
  setAttributes
}) {
  const {
    itemType,
    flush,
    numbered,
    horizontal,
    items
  } = attributes;
  const [selectedItem, setSelectedItem] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useState)(null);
  const Tag = numbered ? 'ol' : itemType === 'li' ? 'ul' : 'div';
  const listClass = ['list-group', flush ? 'list-group-flush' : '', numbered ? 'list-group-numbered' : '', horizontal || ''].filter(Boolean).join(' ');
  const itemClass = item => ['list-group-item', itemType !== 'li' ? 'list-group-item-action' : '', item.variant || '', item.active ? 'active' : '', item.disabled ? 'disabled' : ''].filter(Boolean).join(' ');
  const updateItem = (i, key, val) => setAttributes({
    items: items.map((item, idx) => idx === i ? {
      ...item,
      [key]: val
    } : item)
  });
  const addItem = () => {
    const idx = items.length;
    setAttributes({
      items: [...items, {
        text: 'New item',
        subtext: '',
        badge: '',
        badgeVariant: 'text-bg-primary',
        url: '',
        variant: '',
        active: false,
        disabled: false
      }]
    });
    setSelectedItem(idx);
  };
  const removeItem = i => {
    setAttributes({
      items: items.filter((_, idx) => idx !== i)
    });
    setSelectedItem(null);
  };
  const moveItem = (i, dir) => {
    const arr = [...items],
      t = i + dir;
    if (t < 0 || t >= arr.length) return;
    [arr[i], arr[t]] = [arr[t], arr[i]];
    setAttributes({
      items: arr
    });
    setSelectedItem(t);
  };
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps)({
    className: 'wmblocks-list-group-wrapper'
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InspectorControls, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('List Group Settings', 'wmblocks'),
        initialOpen: true,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Item Type', 'wmblocks'),
          value: itemType,
          options: [{
            label: 'Plain list (li)',
            value: 'li'
          }, {
            label: 'Links (a)',
            value: 'a'
          }, {
            label: 'Buttons (button)',
            value: 'button'
          }],
          onChange: v => setAttributes({
            itemType: v
          }),
          help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Links and buttons add list-group-item-action.', 'wmblocks')
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Flush', 'wmblocks'),
          checked: !!flush,
          onChange: v => setAttributes({
            flush: v
          }),
          help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Remove borders and rounded corners.', 'wmblocks')
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Numbered', 'wmblocks'),
          checked: !!numbered,
          onChange: v => setAttributes({
            numbered: v
          }),
          help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Auto-numbered items via CSS counter.', 'wmblocks')
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Horizontal', 'wmblocks'),
          value: horizontal,
          options: HORIZONTAL_OPTIONS,
          onChange: v => setAttributes({
            horizontal: v
          })
        })]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
      ...blockProps,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(Tag, {
        className: listClass,
        children: [items.map((item, i) => {
          const ItemTag = itemType === 'li' ? 'li' : itemType === 'a' ? 'a' : 'button';
          const hasBadge = !!item.badge;
          const hasSub = !!item.subtext;
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(ItemTag, {
            className: itemClass(item),
            ...(itemType === 'a' ? {
              href: item.url || '#'
            } : {}),
            ...(itemType === 'button' ? {
              type: 'button'
            } : {}),
            ...(item.active ? {
              'aria-current': 'true'
            } : {}),
            ...(item.disabled && itemType === 'a' ? {
              'aria-disabled': 'true'
            } : {}),
            ...(item.disabled && itemType === 'button' ? {
              disabled: true
            } : {}),
            style: {
              cursor: 'default',
              outline: selectedItem === i ? '2px solid #007cba' : 'none',
              outlineOffset: '-2px'
            },
            onMouseDown: e => {
              // Only toggle selection if clicking the item itself, not a contentEditable child
              if (e.target.contentEditable === 'true') return;
              e.preventDefault();
              setSelectedItem(selectedItem === i ? null : i);
            },
            children: hasSub || hasBadge ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
              className: "d-flex justify-content-between align-items-start",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                className: "ms-2 me-auto",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
                  className: "fw-bold",
                  contentEditable: true,
                  suppressContentEditableWarning: true,
                  onMouseDown: e => e.stopPropagation(),
                  onInput: e => updateItem(i, 'text', e.currentTarget.textContent),
                  onKeyDown: e => e.key === 'Enter' && (e.preventDefault(), e.currentTarget.blur()),
                  style: {
                    outline: 'none',
                    cursor: 'text',
                    minWidth: '40px'
                  },
                  children: item.text
                }), hasSub && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
                  contentEditable: true,
                  suppressContentEditableWarning: true,
                  onMouseDown: e => e.stopPropagation(),
                  onInput: e => updateItem(i, 'subtext', e.currentTarget.textContent),
                  style: {
                    outline: 'none',
                    cursor: 'text',
                    fontSize: '13px',
                    display: 'block'
                  },
                  children: item.subtext
                })]
              }), hasBadge && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
                className: 'badge rounded-pill ' + item.badgeVariant,
                children: item.badge
              })]
            }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
              className: "d-flex justify-content-between align-items-center",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
                contentEditable: true,
                suppressContentEditableWarning: true,
                onMouseDown: e => e.stopPropagation(),
                onInput: e => updateItem(i, 'text', e.currentTarget.textContent),
                onKeyDown: e => e.key === 'Enter' && (e.preventDefault(), e.currentTarget.blur()),
                style: {
                  outline: 'none',
                  cursor: 'text',
                  flex: 1,
                  minWidth: '40px'
                },
                children: item.text
              }), hasBadge && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
                className: 'badge rounded-pill ' + item.badgeVariant,
                children: item.badge
              })]
            })
          }, i);
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("li", {
          className: "list-group-item",
          style: {
            background: 'transparent',
            border: '1px dashed #ccc',
            cursor: 'pointer',
            color: '#007cba',
            fontSize: '13px',
            textAlign: 'center'
          },
          onMouseDown: e => {
            e.preventDefault();
            addItem();
          },
          children: ["+ ", (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Add item', 'wmblocks')]
        })]
      }), selectedItem !== null && items[selectedItem] && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(ItemPopover, {
        item: items[selectedItem],
        index: selectedItem,
        itemType: itemType,
        totalItems: items.length,
        onUpdate: (key, val) => updateItem(selectedItem, key, val),
        onMove: dir => moveItem(selectedItem, dir),
        onRemove: () => removeItem(selectedItem),
        onClose: () => setSelectedItem(null)
      })]
    })]
  });
}

/***/ },

/***/ "./src/list-group/index.js"
/*!*********************************!*\
  !*** ./src/list-group/index.js ***!
  \*********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.scss */ "./src/list-group/style.scss");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit */ "./src/list-group/edit.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./block.json */ "./src/list-group/block.json");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);






(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_4__.name, {
  edit: _edit__WEBPACK_IMPORTED_MODULE_3__["default"],
  save: () => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
    ..._wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps.save()
  })
});

/***/ },

/***/ "./src/list-group/editor.scss"
/*!************************************!*\
  !*** ./src/list-group/editor.scss ***!
  \************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ },

/***/ "./src/list-group/style.scss"
/*!***********************************!*\
  !*** ./src/list-group/style.scss ***!
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

/***/ "./src/list-group/block.json"
/*!***********************************!*\
  !*** ./src/list-group/block.json ***!
  \***********************************/
(module) {

module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"wmblocks/list-group","version":"0.1.0","title":"List Group","category":"watermelon-blocks","icon":"list-view","description":"Bootstrap list group — flexible content list with variants, badges, links and actions.","example":{},"supports":{"html":false,"anchor":true},"attributes":{"itemType":{"type":"string","default":"li"},"flush":{"type":"boolean","default":false},"numbered":{"type":"boolean","default":false},"horizontal":{"type":"string","default":""},"items":{"type":"array","default":[{"text":"An item","subtext":"","badge":"","badgeVariant":"text-bg-primary","url":"","variant":"","active":false,"disabled":false},{"text":"A second item","subtext":"","badge":"","badgeVariant":"text-bg-primary","url":"","variant":"","active":false,"disabled":false},{"text":"A third item","subtext":"","badge":"","badgeVariant":"text-bg-primary","url":"","variant":"","active":false,"disabled":false}],"items":{"type":"object"}}},"textdomain":"wm","editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./style-index.css","render":"file:./render.php"}');

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
/******/ 			"list-group/index": 0,
/******/ 			"list-group/style-index": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["list-group/style-index"], () => (__webpack_require__("./src/list-group/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map