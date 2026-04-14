/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/nav/edit.js"
/*!*************************!*\
  !*** ./src/nav/edit.js ***!
  \*************************/
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
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./editor.scss */ "./src/nav/editor.scss");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);






// ── Constants ──────────────────────────────────────────────────────────────

// Nav style variants

const NAV_STYLES = [{
  value: '',
  label: 'Base',
  icon: '—',
  desc: 'Plain links, no decoration'
}, {
  value: 'nav-tabs',
  label: 'Tabs',
  icon: '⊓',
  desc: 'Underlined tabs with border bottom'
}, {
  value: 'nav-pills',
  label: 'Pills',
  icon: '◉',
  desc: 'Rounded pill-shaped active items'
}, {
  value: 'nav-underline',
  label: 'Underline',
  icon: '▁',
  desc: 'Minimal underline on active item'
}];

// Alignment options (only for horizontal)
const ALIGNMENT_OPTIONS = [{
  value: '',
  label: 'Left (default)'
}, {
  value: 'justify-content-center',
  label: 'Center'
}, {
  value: 'justify-content-end',
  label: 'Right'
}];

// Fill / Justify options
const FILL_OPTIONS = [{
  value: '',
  label: 'None (auto width)'
}, {
  value: 'nav-fill',
  label: 'Fill (proportional widths)'
}, {
  value: 'nav-justified',
  label: 'Justified (equal widths)'
}];

// Icon map for orientation toolbar
const ORIENT_ICONS = {
  horizontal: '↔',
  vertical: '↕'
};

// ── ID generator ───────────────────────────────────────────────────────────
function uid(prefix = 'n') {
  return prefix + Math.random().toString(36).slice(2, 7);
}
function newItem() {
  return {
    id: uid(),
    label: 'Link',
    href: '#',
    active: false,
    disabled: false,
    hasDropdown: false,
    dropdownItems: []
  };
}
function newDropdownItem() {
  return {
    id: uid('d'),
    label: 'Action',
    href: '#',
    divider: false
  };
}

// ── Edit component ─────────────────────────────────────────────────────────
function Edit({
  attributes,
  setAttributes
}) {
  const {
    items,
    navStyle,
    orientation,
    alignment,
    fill,
    useNavElement,
    ariaLabel
  } = attributes;

  // Which item's expand panel is open
  const [expandedId, setExpandedId] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useState)(null);
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps)({
    className: 'wmblocks-nav-wrapper'
  });
  const isVertical = orientation === 'vertical';

  // ── Item CRUD ─────────────────────────────────────────────────────
  function updateItem(id, patch) {
    setAttributes({
      items: items.map(it => it.id === id ? {
        ...it,
        ...patch
      } : it)
    });
  }
  function removeItem(id) {
    if (items.length <= 1) return;
    setAttributes({
      items: items.filter(it => it.id !== id)
    });
    if (expandedId === id) setExpandedId(null);
  }
  function moveItem(id, dir) {
    const idx = items.findIndex(it => it.id === id);
    const next = [...items];
    const swap = idx + dir;
    if (swap < 0 || swap >= next.length) return;
    [next[idx], next[swap]] = [next[swap], next[idx]];
    setAttributes({
      items: next
    });
  }
  function duplicateItem(id) {
    const src = items.find(it => it.id === id);
    if (!src) return;
    const clone = {
      ...src,
      id: uid(),
      label: src.label + ' (copy)',
      active: false
    };
    const idx = items.findIndex(it => it.id === id);
    const next = [...items];
    next.splice(idx + 1, 0, clone);
    setAttributes({
      items: next
    });
    setExpandedId(clone.id);
  }
  function addItem() {
    const item = newItem();
    setAttributes({
      items: [...items, item]
    });
    setExpandedId(item.id);
  }

  // Enforce only one active item at a time when toggling
  function setActive(id, val) {
    setAttributes({
      items: items.map(it => ({
        ...it,
        active: it.id === id ? val : val ? false : it.active
      }))
    });
  }

  // ── Dropdown item CRUD ────────────────────────────────────────────
  function addDropdownItem(itemId) {
    const item = items.find(it => it.id === itemId);
    if (!item) return;
    updateItem(itemId, {
      dropdownItems: [...(item.dropdownItems || []), newDropdownItem()]
    });
  }
  function updateDropdownItem(itemId, diId, patch) {
    const item = items.find(it => it.id === itemId);
    if (!item) return;
    updateItem(itemId, {
      dropdownItems: item.dropdownItems.map(di => di.id === diId ? {
        ...di,
        ...patch
      } : di)
    });
  }
  function removeDropdownItem(itemId, diId) {
    const item = items.find(it => it.id === itemId);
    if (!item) return;
    updateItem(itemId, {
      dropdownItems: item.dropdownItems.filter(di => di.id !== diId)
    });
  }

  // ── Build nav class for live preview ──────────────────────────────
  const navClass = ['nav', navStyle, isVertical ? 'flex-column' : '', !isVertical ? alignment : '', fill].filter(Boolean).join(' ');

  // ── Render ────────────────────────────────────────────────────────
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.BlockControls, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToolbarGroup, {
        children: NAV_STYLES.map(s => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToolbarButton, {
          label: s.label + ' nav',
          isPressed: navStyle === s.value,
          onClick: () => setAttributes({
            navStyle: s.value
          }),
          children: [s.icon, " ", s.label]
        }, s.value))
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToolbarGroup, {
        children: ['horizontal', 'vertical'].map(o => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToolbarButton, {
          label: o.charAt(0).toUpperCase() + o.slice(1),
          isPressed: orientation === o,
          onClick: () => setAttributes({
            orientation: o
          }),
          children: [ORIENT_ICONS[o], " ", o.charAt(0).toUpperCase() + o.slice(1)]
        }, o))
      }), !isVertical && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToolbarGroup, {
        children: ['', 'justify-content-center', 'justify-content-end'].map(a => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToolbarButton, {
          icon: a === '' ? 'editor-alignleft' : a.includes('center') ? 'editor-aligncenter' : 'editor-alignright',
          label: ALIGNMENT_OPTIONS.find(o => o.value === a)?.label,
          isPressed: alignment === a,
          onClick: () => setAttributes({
            alignment: a
          })
        }, a))
      }), !isVertical && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToolbarGroup, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToolbarButton, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Fill (nav-fill)', 'wmblocks'),
          isPressed: fill === 'nav-fill',
          onClick: () => setAttributes({
            fill: fill === 'nav-fill' ? '' : 'nav-fill'
          }),
          children: "\u21D4 Fill"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToolbarButton, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Justified (nav-justified)', 'wmblocks'),
          isPressed: fill === 'nav-justified',
          onClick: () => setAttributes({
            fill: fill === 'nav-justified' ? '' : 'nav-justified'
          }),
          children: "\u21D4 Equal"
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InspectorControls, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Nav Style', 'wmblocks'),
        initialOpen: true,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
          style: {
            display: 'flex',
            flexDirection: 'column',
            gap: '6px',
            marginBottom: '12px'
          },
          children: NAV_STYLES.map(s => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("button", {
            onClick: () => setAttributes({
              navStyle: s.value
            }),
            style: {
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              padding: '8px 12px',
              border: navStyle === s.value ? '2px solid #198754' : '1px solid #dee2e6',
              borderRadius: '5px',
              background: navStyle === s.value ? '#d1e7dd' : '#fff',
              color: navStyle === s.value ? '#0f5132' : '#333',
              fontWeight: navStyle === s.value ? 700 : 400,
              cursor: 'pointer',
              fontSize: '13px',
              transition: 'all .12s',
              textAlign: 'left'
            },
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
              style: {
                fontSize: '18px',
                width: '24px',
                textAlign: 'center'
              },
              children: s.icon
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
                style: {
                  fontWeight: 700
                },
                children: s.label
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
                style: {
                  fontSize: '11px',
                  color: '#888',
                  marginTop: '1px'
                },
                children: s.desc
              })]
            }), navStyle === s.value && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
              style: {
                marginLeft: 'auto'
              },
              children: "\u2713"
            })]
          }, s.value))
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Layout', 'wmblocks'),
        initialOpen: true,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Orientation', 'wmblocks'),
          value: orientation,
          options: [{
            label: '↔ Horizontal (default)',
            value: 'horizontal'
          }, {
            label: '↕ Vertical (flex-column)',
            value: 'vertical'
          }],
          onChange: v => setAttributes({
            orientation: v
          }),
          help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Vertical stacks items in a column using flex-column.', 'wmblocks')
        }), !isVertical && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Alignment', 'wmblocks'),
            value: alignment,
            options: ALIGNMENT_OPTIONS,
            onChange: v => setAttributes({
              alignment: v
            }),
            help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Aligns nav items along the horizontal axis.', 'wmblocks')
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Fill / Justify', 'wmblocks'),
            value: fill,
            options: FILL_OPTIONS,
            onChange: v => setAttributes({
              fill: v
            }),
            help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Fill: proportional widths. Justified: all items equal width.', 'wmblocks')
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Markup & Accessibility', 'wmblocks'),
        initialOpen: false,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Use <nav> element', 'wmblocks'),
            checked: !!useNavElement,
            onChange: v => setAttributes({
              useNavElement: v
            }),
            help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('ON: renders <nav class="nav"> with direct <a> children. OFF: renders <ul class="nav"><li class="nav-item"> structure (recommended for most cases).', 'wmblocks')
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('ARIA label', 'wmblocks'),
          value: ariaLabel,
          onChange: v => setAttributes({
            ariaLabel: v
          }),
          help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Describes the nav to screen readers. Required when using <nav> element.', 'wmblocks')
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
      ...blockProps,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
        className: "wmblocks-nav-meta-strip",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
          className: "wmblocks-nav-chip",
          children: "Nav"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("span", {
          className: "wmblocks-nav-chip wmblocks-nav-chip--style",
          children: [NAV_STYLES.find(s => s.value === navStyle)?.icon, ' ', NAV_STYLES.find(s => s.value === navStyle)?.label || 'Base']
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
          className: "wmblocks-nav-chip",
          children: orientation
        }), alignment && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
          className: "wmblocks-nav-chip",
          children: alignment.replace('justify-content-', '')
        }), fill && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
          className: "wmblocks-nav-chip",
          children: fill
        }), useNavElement && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
          className: "wmblocks-nav-chip",
          children: "<nav>"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("span", {
          className: "wmblocks-nav-chip",
          children: [items.length, " items"]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
        className: "wmblocks-nav-style-bar",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
          className: "wmblocks-nav-style-bar__label",
          children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Style:', 'wmblocks')
        }), NAV_STYLES.map(s => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("button", {
          className: 'wmblocks-nav-style-pill' + (navStyle === s.value ? ' is-active' : ''),
          onClick: () => setAttributes({
            navStyle: s.value
          }),
          title: s.desc,
          children: [s.icon, " ", s.label]
        }, s.value)), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
          className: "wmblocks-nav-style-bar__sep"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("button", {
          className: 'wmblocks-nav-style-pill' + (orientation === 'vertical' ? ' is-active' : ''),
          onClick: () => setAttributes({
            orientation: orientation === 'vertical' ? 'horizontal' : 'vertical'
          }),
          title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Toggle vertical/horizontal', 'wmblocks'),
          children: "\u2195 Vertical"
        }), !isVertical && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("button", {
            className: 'wmblocks-nav-style-pill' + (fill === 'nav-fill' ? ' is-active' : ''),
            onClick: () => setAttributes({
              fill: fill === 'nav-fill' ? '' : 'nav-fill'
            }),
            children: "\u21D4 Fill"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("button", {
            className: 'wmblocks-nav-style-pill' + (fill === 'nav-justified' ? ' is-active' : ''),
            onClick: () => setAttributes({
              fill: fill === 'nav-justified' ? '' : 'nav-justified'
            }),
            children: "\u21D4 Equal"
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
        className: 'wmblocks-nav-preview' + (isVertical ? ' wmblocks-nav-preview--vertical' : ''),
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
          className: "wmblocks-nav-preview__label",
          children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Preview & Edit', 'wmblocks')
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("ul", {
          className: navClass,
          style: {
            marginBottom: 0,
            flexWrap: isVertical ? 'nowrap' : 'wrap'
          },
          children: items.map((item, index) => {
            const isExpanded = expandedId === item.id;
            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("li", {
              className: 'nav-item' + (item.hasDropdown ? ' dropdown' : ''),
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                className: "wmblocks-nav-link-wrap",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
                  tagName: "a",
                  className: ['nav-link', item.active ? 'active' : '', item.disabled ? 'disabled' : '', item.hasDropdown ? 'dropdown-toggle' : ''].filter(Boolean).join(' '),
                  value: item.label,
                  onChange: v => updateItem(item.id, {
                    label: v
                  }),
                  allowedFormats: [],
                  placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Nav link…', 'wmblocks'),
                  "aria-current": item.active ? 'page' : undefined
                }), item.active && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
                  className: "wmblocks-nav-badge wmblocks-nav-badge--active",
                  children: "active"
                }), item.disabled && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
                  className: "wmblocks-nav-badge wmblocks-nav-badge--disabled",
                  children: "disabled"
                }), item.hasDropdown && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
                  className: "wmblocks-nav-badge wmblocks-nav-badge--dd",
                  children: "\u25BE dropdown"
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                className: "wmblocks-nav-item-actions",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("button", {
                  className: "wmblocks-nav-action",
                  onClick: () => moveItem(item.id, -1),
                  disabled: index === 0,
                  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Move left / up', 'wmblocks'),
                  children: isVertical ? '↑' : '←'
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("button", {
                  className: "wmblocks-nav-action",
                  onClick: () => moveItem(item.id, 1),
                  disabled: index === items.length - 1,
                  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Move right / down', 'wmblocks'),
                  children: isVertical ? '↓' : '→'
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("button", {
                  className: 'wmblocks-nav-action wmblocks-nav-action--expand' + (isExpanded ? ' is-active' : ''),
                  onClick: () => setExpandedId(isExpanded ? null : item.id),
                  title: isExpanded ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Close options', 'wmblocks') : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Options', 'wmblocks'),
                  children: isExpanded ? '▲' : '▼'
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("button", {
                  className: "wmblocks-nav-action",
                  onClick: () => duplicateItem(item.id),
                  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Duplicate', 'wmblocks'),
                  children: "\u2398"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("button", {
                  className: "wmblocks-nav-action wmblocks-nav-action--remove",
                  onClick: () => removeItem(item.id),
                  disabled: items.length <= 1,
                  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Remove', 'wmblocks'),
                  children: "\u2715"
                })]
              }), isExpanded && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                className: "wmblocks-nav-item-detail",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                  className: "wmblocks-nav-detail-row",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
                    className: "wmblocks-nav-detail-label",
                    children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('URL', 'wmblocks')
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("input", {
                    type: "url",
                    className: "wmblocks-nav-url-input",
                    value: item.href || '',
                    onChange: e => updateItem(item.id, {
                      href: e.target.value
                    }),
                    placeholder: "https://"
                  })]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                  className: "wmblocks-nav-detail-row",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
                    className: "wmblocks-nav-detail-label",
                    children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('State', 'wmblocks')
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                    className: "wmblocks-nav-flag-row",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("button", {
                      className: 'wmblocks-nav-flag-btn' + (item.active ? ' is-on' : ''),
                      onClick: () => setActive(item.id, !item.active),
                      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
                        className: "wmblocks-nav-flag-dot wmblocks-nav-flag-dot--active"
                      }), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Active', 'wmblocks'), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
                        className: "wmblocks-nav-flag-state",
                        children: item.active ? 'ON' : 'off'
                      })]
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("button", {
                      className: 'wmblocks-nav-flag-btn' + (item.disabled ? ' is-on' : ''),
                      onClick: () => updateItem(item.id, {
                        disabled: !item.disabled
                      }),
                      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
                        className: "wmblocks-nav-flag-dot wmblocks-nav-flag-dot--disabled"
                      }), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Disabled', 'wmblocks'), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
                        className: "wmblocks-nav-flag-state",
                        children: item.disabled ? 'ON' : 'off'
                      })]
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("button", {
                      className: 'wmblocks-nav-flag-btn' + (item.hasDropdown ? ' is-on' : ''),
                      onClick: () => updateItem(item.id, {
                        hasDropdown: !item.hasDropdown
                      }),
                      children: ["\u25BE ", (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Dropdown', 'wmblocks'), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
                        className: "wmblocks-nav-flag-state",
                        children: item.hasDropdown ? 'ON' : 'off'
                      })]
                    })]
                  })]
                }), item.hasDropdown && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                  className: "wmblocks-nav-dropdown-manager",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                    className: "wmblocks-nav-dropdown-manager__header",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
                      children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Dropdown Items', 'wmblocks')
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("button", {
                      className: "wmblocks-nav-dd-add-btn",
                      onClick: () => addDropdownItem(item.id),
                      children: ["+ ", (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Add item', 'wmblocks')]
                    })]
                  }), (item.dropdownItems || []).length === 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
                    className: "wmblocks-nav-dd-empty",
                    children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('No dropdown items yet — click Add item', 'wmblocks')
                  }), (item.dropdownItems || []).map((di, di_idx) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                    className: "wmblocks-nav-dd-row",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("input", {
                      type: "checkbox",
                      checked: !!di.divider,
                      onChange: e => updateDropdownItem(item.id, di.id, {
                        divider: e.target.checked
                      }),
                      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Make divider', 'wmblocks'),
                      style: {
                        flexShrink: 0
                      }
                    }), di.divider ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
                      className: "wmblocks-nav-dd-divider-label",
                      children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('— divider', 'wmblocks')
                    }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
                      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("input", {
                        type: "text",
                        className: "wmblocks-nav-dd-input",
                        value: di.label,
                        onChange: e => updateDropdownItem(item.id, di.id, {
                          label: e.target.value
                        }),
                        placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Label', 'wmblocks')
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("input", {
                        type: "url",
                        className: "wmblocks-nav-dd-input wmblocks-nav-dd-input--url",
                        value: di.href,
                        onChange: e => updateDropdownItem(item.id, di.id, {
                          href: e.target.value
                        }),
                        placeholder: "href"
                      })]
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("button", {
                      className: "wmblocks-nav-dd-remove",
                      onClick: () => removeDropdownItem(item.id, di.id),
                      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Remove', 'wmblocks'),
                      children: "\u2715"
                    })]
                  }, di.id))]
                })]
              })]
            }, item.id);
          })
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
        className: "wmblocks-nav-add-bar",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("button", {
          className: "wmblocks-nav-add-btn",
          onClick: addItem,
          children: ["+ ", (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Add nav item', 'wmblocks')]
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
        className: "wmblocks-nav-footer-hint",
        children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Click any label to edit inline · ▼ for URL, active/disabled & dropdown · style controls above & in sidebar →', 'wmblocks')
      })]
    })]
  });
}

/***/ },

/***/ "./src/nav/index.js"
/*!**************************!*\
  !*** ./src/nav/index.js ***!
  \**************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ "./src/nav/style.scss");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./src/nav/edit.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./block.json */ "./src/nav/block.json");




(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_3__.name, {
  edit: _edit__WEBPACK_IMPORTED_MODULE_2__["default"],
  // Fully server-side rendered — no InnerBlocks
  save: () => null
});

/***/ },

/***/ "./src/nav/editor.scss"
/*!*****************************!*\
  !*** ./src/nav/editor.scss ***!
  \*****************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ },

/***/ "./src/nav/style.scss"
/*!****************************!*\
  !*** ./src/nav/style.scss ***!
  \****************************/
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

/***/ "./src/nav/block.json"
/*!****************************!*\
  !*** ./src/nav/block.json ***!
  \****************************/
(module) {

module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"wmblocks/nav","version":"0.1.0","title":"Nav","category":"watermelon-blocks","icon":"menu","description":"Bootstrap nav — a flexible navigation component in base, tabs, pills, or underline style. Supports horizontal/vertical orientation, fill/justify, alignment, dropdowns per item, active/disabled states, and both ul/li and nav/a markup. All items editable inline on the canvas.","example":{},"supports":{"html":false,"anchor":true},"attributes":{"items":{"type":"array","default":[{"id":"n1","label":"Active","href":"#","active":true,"disabled":false,"hasDropdown":false,"dropdownItems":[]},{"id":"n2","label":"Link","href":"#","active":false,"disabled":false,"hasDropdown":false,"dropdownItems":[]},{"id":"n3","label":"Link","href":"#","active":false,"disabled":false,"hasDropdown":false,"dropdownItems":[]},{"id":"n4","label":"Disabled","href":"#","active":false,"disabled":true,"hasDropdown":false,"dropdownItems":[]}]},"navStyle":{"type":"string","default":""},"orientation":{"type":"string","default":"horizontal"},"alignment":{"type":"string","default":""},"fill":{"type":"string","default":""},"useNavElement":{"type":"boolean","default":false},"ariaLabel":{"type":"string","default":"Navigation"}},"textdomain":"wm","editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./style-index.css","render":"file:./render.php","viewScript":"file:./view.js"}');

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
/******/ 			"nav/index": 0,
/******/ 			"nav/style-index": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["nav/style-index"], () => (__webpack_require__("./src/nav/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map