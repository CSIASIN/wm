/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/buttons/edit.js"
/*!*****************************!*\
  !*** ./src/buttons/edit.js ***!
  \*****************************/
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
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./editor.scss */ "./src/buttons/editor.scss");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);






// ── Constants ──────────────────────────────────────────────────────────────

const VARIANTS_BASE = [{
  label: 'Primary',
  value: 'primary'
}, {
  label: 'Secondary',
  value: 'secondary'
}, {
  label: 'Success',
  value: 'success'
}, {
  label: 'Danger',
  value: 'danger'
}, {
  label: 'Warning',
  value: 'warning'
}, {
  label: 'Info',
  value: 'info'
}, {
  label: 'Light',
  value: 'light'
}, {
  label: 'Dark',
  value: 'dark'
}, {
  label: 'Link',
  value: 'link'
}];

// Colour map for toolbar swatches
const VARIANT_COLOR = {
  primary: {
    bg: '#0d6efd',
    text: '#fff'
  },
  secondary: {
    bg: '#6c757d',
    text: '#fff'
  },
  success: {
    bg: '#198754',
    text: '#fff'
  },
  danger: {
    bg: '#dc3545',
    text: '#fff'
  },
  warning: {
    bg: '#ffc107',
    text: '#000'
  },
  info: {
    bg: '#0dcaf0',
    text: '#000'
  },
  light: {
    bg: '#f8f9fa',
    text: '#000'
  },
  dark: {
    bg: '#212529',
    text: '#fff'
  },
  link: {
    bg: 'transparent',
    text: '#0d6efd'
  }
};
const VARIANT_OPTIONS = VARIANTS_BASE.map(v => ({
  label: v.label,
  value: 'btn-' + v.value
}));
const OUTLINE_OPTIONS = VARIANTS_BASE.filter(v => v.value !== 'link').map(v => ({
  label: 'Outline ' + v.label,
  value: 'btn-outline-' + v.value
}));
const ALL_VARIANT_OPTIONS = [...VARIANT_OPTIONS, ...OUTLINE_OPTIONS];
const SIZE_OPTIONS = [{
  label: 'Default',
  value: ''
}, {
  label: 'Large',
  value: 'btn-lg'
}, {
  label: 'Small',
  value: 'btn-sm'
}];
const GAP_OPTIONS = [{
  label: 'None',
  value: ''
}, {
  label: 'XS',
  value: 'gap-1'
}, {
  label: 'SM',
  value: 'gap-2'
}, {
  label: 'MD',
  value: 'gap-3'
}, {
  label: 'LG',
  value: 'gap-4'
}];
const GROUP_SIZE_OPTIONS = [{
  label: 'Default',
  value: ''
}, {
  label: 'Large',
  value: 'btn-group-lg'
}, {
  label: 'Small',
  value: 'btn-group-sm'
}];

// Resolve the full btn class string for a button object
function btnClass(btn) {
  const base = btn.outline ? 'btn btn-outline-' + variantBase(btn.variant) : 'btn ' + btn.variant;
  return [base, btn.size, btn.active ? 'active' : '', btn.disabled ? 'disabled' : ''].filter(Boolean).join(' ');
}

// Strip 'btn-' prefix to get base colour name
function variantBase(variant) {
  return variant.replace(/^btn-outline-|^btn-/, '');
}
function makeId() {
  return 'b' + Math.random().toString(36).slice(2, 7);
}

// Default new button
function newButton(variant = 'btn-primary') {
  return {
    id: makeId(),
    label: 'Button',
    href: '#',
    target: '_self',
    variant,
    size: '',
    outline: false,
    disabled: false,
    active: false,
    type: 'link',
    stretchedLink: false,
    noWrap: false
  };
}

// ── Edit component ─────────────────────────────────────────────────────────
function Edit({
  attributes,
  setAttributes
}) {
  const {
    buttons,
    layout,
    groupMode,
    groupSize,
    groupVertical,
    alignment,
    gap
  } = attributes;

  // Which button's detail panel is open
  const [expandedId, setExpandedId] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useState)(null);
  // Which button is selected for sidebar style controls
  const [selectedId, setSelectedId] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useState)(buttons[0]?.id ?? null);
  const selectedBtn = buttons.find(b => b.id === selectedId) || buttons[0];
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps)({
    className: 'wmblocks-buttons-wrapper'
  });

  // ── Button CRUD ───────────────────────────────────────────────────
  function updateBtn(id, patch) {
    setAttributes({
      buttons: buttons.map(b => b.id === id ? {
        ...b,
        ...patch
      } : b)
    });
  }
  function removeBtn(id) {
    if (buttons.length <= 1) return; // keep at least one
    setAttributes({
      buttons: buttons.filter(b => b.id !== id)
    });
    if (expandedId === id) setExpandedId(null);
    if (selectedId === id) setSelectedId(buttons.find(b => b.id !== id)?.id);
  }
  function moveBtn(id, dir) {
    const idx = buttons.findIndex(b => b.id === id);
    const next = [...buttons];
    const swap = idx + dir;
    if (swap < 0 || swap >= next.length) return;
    [next[idx], next[swap]] = [next[swap], next[idx]];
    setAttributes({
      buttons: next
    });
  }
  function duplicateBtn(id) {
    const src = buttons.find(b => b.id === id);
    if (!src) return;
    const clone = {
      ...src,
      id: makeId(),
      label: src.label + ' (copy)'
    };
    const idx = buttons.findIndex(b => b.id === id);
    const next = [...buttons];
    next.splice(idx + 1, 0, clone);
    setAttributes({
      buttons: next
    });
    setSelectedId(clone.id);
    setExpandedId(clone.id);
  }
  function addButton() {
    const variant = selectedBtn?.variant || 'btn-primary';
    const size = selectedBtn?.size || '';
    const btn = {
      ...newButton(variant),
      size
    };
    setAttributes({
      buttons: [...buttons, btn]
    });
    setSelectedId(btn.id);
    setExpandedId(btn.id);
  }

  // ── Alignment wrapper style ───────────────────────────────────────
  const alignStyle = {
    left: 'flex-start',
    center: 'center',
    right: 'flex-end'
  }[alignment] || 'flex-start';

  // ── Render ────────────────────────────────────────────────────────
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.BlockControls, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToolbarGroup, {
        children: ['left', 'center', 'right'].map(a => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToolbarButton, {
          icon: 'editor-align' + a,
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Align ' + a, 'wmblocks'),
          isPressed: alignment === a,
          onClick: () => setAttributes({
            alignment: a
          })
        }, a))
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToolbarGroup, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToolbarButton, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Inline layout', 'wmblocks'),
          isPressed: layout === 'inline' && !groupMode,
          onClick: () => setAttributes({
            layout: 'inline',
            groupMode: false
          }),
          children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Inline', 'wmblocks')
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToolbarButton, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Stack layout', 'wmblocks'),
          isPressed: layout === 'stack',
          onClick: () => setAttributes({
            layout: 'stack',
            groupMode: false
          }),
          children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Stack', 'wmblocks')
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToolbarButton, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Button Group', 'wmblocks'),
          isPressed: groupMode,
          onClick: () => setAttributes({
            groupMode: !groupMode
          }),
          children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Group', 'wmblocks')
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToolbarGroup, {
        children: VARIANTS_BASE.map(v => {
          const col = VARIANT_COLOR[v.value];
          const isActive = selectedBtn && variantBase(selectedBtn.variant) === v.value;
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToolbarButton, {
            label: v.label,
            isPressed: isActive,
            onClick: () => selectedBtn && updateBtn(selectedBtn.id, {
              variant: 'btn-' + v.value,
              outline: false
            }),
            style: {
              background: isActive ? col.bg : '',
              color: isActive ? col.text : '',
              fontWeight: 600,
              fontSize: '10px',
              minWidth: '42px',
              borderRadius: '3px'
            },
            children: v.label.slice(0, 3)
          }, v.value);
        })
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InspectorControls, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
        title: selectedBtn ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Button Style', 'wmblocks') + ' — ' + (selectedBtn.label || 'Button') : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Button Style', 'wmblocks'),
        initialOpen: true,
        children: [!selectedBtn && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
          style: {
            fontSize: '12px',
            color: '#aaa',
            fontStyle: 'italic'
          },
          children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Click a button on the canvas to select it.', 'wmblocks')
        }), selectedBtn && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Variant', 'wmblocks'),
            value: selectedBtn.variant,
            options: ALL_VARIANT_OPTIONS,
            onChange: v => {
              const isOutline = v.startsWith('btn-outline-');
              updateBtn(selectedBtn.id, {
                variant: v,
                outline: isOutline
              });
            }
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Size', 'wmblocks'),
            value: selectedBtn.size,
            options: SIZE_OPTIONS,
            onChange: v => updateBtn(selectedBtn.id, {
              size: v
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Element Type', 'wmblocks'),
            value: selectedBtn.type,
            options: [{
              label: 'Link <a>',
              value: 'link'
            }, {
              label: 'Button <button>',
              value: 'button'
            }, {
              label: 'Input submit',
              value: 'submit'
            }, {
              label: 'Input reset',
              value: 'reset'
            }],
            onChange: v => updateBtn(selectedBtn.id, {
              type: v
            }),
            help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Use <a> for navigation, <button> for JS actions.', 'wmblocks')
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Active state', 'wmblocks'),
              checked: !!selectedBtn.active,
              onChange: v => updateBtn(selectedBtn.id, {
                active: v
              }),
              help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Adds .active class — appears pressed.', 'wmblocks')
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Disabled', 'wmblocks'),
              checked: !!selectedBtn.disabled,
              onChange: v => updateBtn(selectedBtn.id, {
                disabled: v
              }),
              help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Adds disabled attribute / .disabled class.', 'wmblocks')
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('No text wrap', 'wmblocks'),
              checked: !!selectedBtn.noWrap,
              onChange: v => updateBtn(selectedBtn.id, {
                noWrap: v
              }),
              help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Adds text-nowrap — button stays on one line.', 'wmblocks')
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Stretched link', 'wmblocks'),
              checked: !!selectedBtn.stretchedLink,
              onChange: v => updateBtn(selectedBtn.id, {
                stretchedLink: v
              }),
              help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Stretches the click area to fill the nearest positioned parent.', 'wmblocks')
            })
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Layout & Spacing', 'wmblocks'),
        initialOpen: true,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Alignment', 'wmblocks'),
          value: alignment,
          options: [{
            label: 'Left',
            value: 'left'
          }, {
            label: 'Center',
            value: 'center'
          }, {
            label: 'Right',
            value: 'right'
          }],
          onChange: v => setAttributes({
            alignment: v
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Layout', 'wmblocks'),
          value: groupMode ? 'group' : layout,
          options: [{
            label: 'Inline (flex row)',
            value: 'inline'
          }, {
            label: 'Stack (full width)',
            value: 'stack'
          }, {
            label: 'Button Group',
            value: 'group'
          }],
          onChange: v => {
            if (v === 'group') {
              setAttributes({
                groupMode: true,
                layout: 'inline'
              });
            } else {
              setAttributes({
                groupMode: false,
                layout: v
              });
            }
          },
          help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Button Group removes gaps and merges borders.', 'wmblocks')
        }), !groupMode && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Gap between buttons', 'wmblocks'),
          value: gap,
          options: GAP_OPTIONS,
          onChange: v => setAttributes({
            gap: v
          })
        }), groupMode && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Group Size', 'wmblocks'),
            value: groupSize,
            options: GROUP_SIZE_OPTIONS,
            onChange: v => setAttributes({
              groupSize: v
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Vertical Group', 'wmblocks'),
            checked: !!groupVertical,
            onChange: v => setAttributes({
              groupVertical: v
            }),
            help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Stack buttons vertically (btn-group-vertical).', 'wmblocks')
          })]
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
      ...blockProps,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
        className: "wmblocks-btn-meta-strip",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
          className: "wmblocks-btn-meta-chip",
          children: "Buttons"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
          className: "wmblocks-btn-meta-chip",
          children: groupMode ? groupVertical ? 'vertical group' : 'group' : layout
        }), groupMode && groupSize && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
          className: "wmblocks-btn-meta-chip",
          children: groupSize
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("span", {
          className: "wmblocks-btn-meta-chip",
          children: ["align: ", alignment]
        }), !groupMode && gap && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
          className: "wmblocks-btn-meta-chip",
          children: gap
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
        className: 'wmblocks-btn-canvas' + (layout === 'stack' && !groupMode ? ' wmblocks-btn-canvas--stack' : '') + (groupMode ? ' wmblocks-btn-canvas--group' : ''),
        style: {
          justifyContent: alignStyle
        },
        children: [buttons.map((btn, index) => {
          const isExpanded = expandedId === btn.id;
          const isSelected = selectedId === btn.id;
          const isLink = btn.type === 'link';
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
            className: 'wmblocks-btn-item' + (isSelected ? ' wmblocks-btn-item--selected' : '') + (isExpanded ? ' wmblocks-btn-item--expanded' : '') + (layout === 'stack' && !groupMode ? ' wmblocks-btn-item--stack' : ''),
            onClick: () => setSelectedId(btn.id),
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
              className: "wmblocks-btn-item__btn-wrap",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
                tagName: btn.type === 'button' ? 'button' : 'a',
                className: btnClass(btn) + (btn.noWrap ? ' text-nowrap' : '') + (btn.stretchedLink ? ' stretched-link' : ''),
                value: btn.label,
                onChange: v => updateBtn(btn.id, {
                  label: v
                }),
                allowedFormats: [],
                placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Button label…', 'wmblocks'),
                onClick: e => e.preventDefault()
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
              className: "wmblocks-btn-item__actions",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("button", {
                className: "wmblocks-btn-action",
                onClick: e => {
                  e.stopPropagation();
                  moveBtn(btn.id, -1);
                },
                disabled: index === 0,
                title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Move left / up', 'wmblocks'),
                children: "\u2190"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("button", {
                className: "wmblocks-btn-action",
                onClick: e => {
                  e.stopPropagation();
                  moveBtn(btn.id, 1);
                },
                disabled: index === buttons.length - 1,
                title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Move right / down', 'wmblocks'),
                children: "\u2192"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("button", {
                className: 'wmblocks-btn-action wmblocks-btn-action--expand' + (isExpanded ? ' is-active' : ''),
                onClick: e => {
                  e.stopPropagation();
                  setSelectedId(btn.id);
                  setExpandedId(isExpanded ? null : btn.id);
                },
                title: isExpanded ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Close options', 'wmblocks') : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Open options', 'wmblocks'),
                children: isExpanded ? '▲ Close' : '▼ Edit'
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("button", {
                className: "wmblocks-btn-action",
                onClick: e => {
                  e.stopPropagation();
                  duplicateBtn(btn.id);
                },
                title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Duplicate', 'wmblocks'),
                children: "\u2398"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("button", {
                className: "wmblocks-btn-action wmblocks-btn-action--remove",
                onClick: e => {
                  e.stopPropagation();
                  removeBtn(btn.id);
                },
                disabled: buttons.length <= 1,
                title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Remove', 'wmblocks'),
                children: "\u2715"
              })]
            }), isExpanded && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
              className: "wmblocks-btn-item__detail",
              onClick: e => e.stopPropagation(),
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                className: "wmblocks-btn-detail-header",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("span", {
                  className: "wmblocks-btn-detail-header__title",
                  children: [(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Button', 'wmblocks'), " ", index + 1, btn.label ? ` — "${btn.label.replace(/<[^>]*>/g, '')}"` : '']
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("button", {
                  className: "wmblocks-btn-detail-close",
                  onClick: e => {
                    e.stopPropagation();
                    setExpandedId(null);
                  },
                  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Close panel', 'wmblocks'),
                  children: ["\u2715 ", (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Close', 'wmblocks')]
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                className: "wmblocks-btn-detail-row",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
                  className: "wmblocks-btn-detail-label",
                  children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Style', 'wmblocks')
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
                  className: "wmblocks-btn-variant-swatches",
                  children: VARIANTS_BASE.map(v => {
                    const col = VARIANT_COLOR[v.value];
                    const solid = 'btn-' + v.value;
                    const outline = 'btn-outline-' + v.value;
                    const isSolid = btn.variant === solid && !btn.outline;
                    const isOut = btn.variant === outline || btn.variant === solid && btn.outline;
                    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                      className: "wmblocks-btn-swatch-group",
                      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("button", {
                        className: 'wmblocks-btn-swatch' + (isSolid ? ' is-active' : ''),
                        style: {
                          background: col.bg,
                          color: col.text,
                          borderColor: col.bg === 'transparent' ? '#0d6efd' : col.bg
                        },
                        onClick: () => updateBtn(btn.id, {
                          variant: solid,
                          outline: false
                        }),
                        title: v.label,
                        children: v.label.slice(0, 3)
                      }), v.value !== 'link' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("button", {
                        className: 'wmblocks-btn-swatch wmblocks-btn-swatch--outline' + (isOut ? ' is-active' : ''),
                        style: {
                          borderColor: col.bg,
                          color: col.bg === 'transparent' ? '#0d6efd' : col.bg
                        },
                        onClick: () => updateBtn(btn.id, {
                          variant: outline,
                          outline: true
                        }),
                        title: 'Outline ' + v.label,
                        children: v.label.slice(0, 3)
                      })]
                    }, v.value);
                  })
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                className: "wmblocks-btn-detail-row",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
                  className: "wmblocks-btn-detail-label",
                  children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Size', 'wmblocks')
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
                  className: "wmblocks-btn-size-pills",
                  children: [{
                    label: 'SM',
                    value: 'btn-sm'
                  }, {
                    label: 'MD',
                    value: ''
                  }, {
                    label: 'LG',
                    value: 'btn-lg'
                  }].map(s => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("button", {
                    className: 'wmblocks-btn-size-pill' + (btn.size === s.value ? ' is-active' : ''),
                    onClick: () => updateBtn(btn.id, {
                      size: s.value
                    }),
                    children: s.label
                  }, s.value))
                })]
              }), isLink && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                className: "wmblocks-btn-detail-row",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
                  className: "wmblocks-btn-detail-label",
                  children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('URL', 'wmblocks')
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("input", {
                  type: "url",
                  className: "wmblocks-btn-url-input",
                  value: btn.href || '',
                  onChange: e => updateBtn(btn.id, {
                    href: e.target.value
                  }),
                  placeholder: "https://",
                  onClick: e => e.stopPropagation()
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("select", {
                  className: "wmblocks-btn-target-select",
                  value: btn.target || '_self',
                  onChange: e => updateBtn(btn.id, {
                    target: e.target.value
                  }),
                  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Link target', 'wmblocks'),
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("option", {
                    value: "_self",
                    children: "_self"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("option", {
                    value: "_blank",
                    children: "_blank"
                  })]
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                className: "wmblocks-btn-detail-row",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
                  className: "wmblocks-btn-detail-label",
                  children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Type', 'wmblocks')
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
                  className: "wmblocks-btn-size-pills",
                  children: ['link', 'button', 'submit', 'reset'].map(t => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("button", {
                    className: 'wmblocks-btn-size-pill' + (btn.type === t ? ' is-active' : ''),
                    onClick: () => updateBtn(btn.id, {
                      type: t
                    }),
                    children: t
                  }, t))
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                className: "wmblocks-btn-detail-row wmblocks-btn-detail-row--flags",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
                  className: "wmblocks-btn-detail-label",
                  children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('State', 'wmblocks')
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                  className: "wmblocks-btn-flag-pills",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("button", {
                    className: 'wmblocks-btn-flag-pill' + (btn.active ? ' is-active' : ''),
                    onClick: () => updateBtn(btn.id, {
                      active: !btn.active
                    }),
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
                      className: "wmblocks-btn-flag-dot",
                      style: {
                        background: '#0d6efd'
                      }
                    }), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Active', 'wmblocks')]
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("button", {
                    className: 'wmblocks-btn-flag-pill' + (btn.disabled ? ' is-on' : ''),
                    onClick: () => updateBtn(btn.id, {
                      disabled: !btn.disabled
                    }),
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
                      className: "wmblocks-btn-flag-dot",
                      style: {
                        background: '#adb5bd'
                      }
                    }), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Disabled', 'wmblocks')]
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("button", {
                    className: 'wmblocks-btn-flag-pill' + (btn.noWrap ? ' is-on' : ''),
                    onClick: () => updateBtn(btn.id, {
                      noWrap: !btn.noWrap
                    }),
                    children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('No wrap', 'wmblocks')
                  })]
                })]
              })]
            })]
          }, btn.id);
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("button", {
          className: "wmblocks-btn-add",
          onClick: e => {
            e.stopPropagation();
            addButton();
          },
          title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Add button', 'wmblocks'),
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
            children: "+"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
            children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Add Button', 'wmblocks')
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
        className: "wmblocks-btn-footer-hint",
        children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Click label to edit inline · ▼ Edit opens options · ✕ Close returns to buttons · style & layout in sidebar →', 'wmblocks')
      })]
    })]
  });
}

/***/ },

/***/ "./src/buttons/index.js"
/*!******************************!*\
  !*** ./src/buttons/index.js ***!
  \******************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ "./src/buttons/style.scss");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./src/buttons/edit.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./block.json */ "./src/buttons/block.json");




(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_3__.name, {
  edit: _edit__WEBPACK_IMPORTED_MODULE_2__["default"],
  // Fully server-side rendered via render.php
  save: () => null
});

/***/ },

/***/ "./src/buttons/editor.scss"
/*!*********************************!*\
  !*** ./src/buttons/editor.scss ***!
  \*********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ },

/***/ "./src/buttons/style.scss"
/*!********************************!*\
  !*** ./src/buttons/style.scss ***!
  \********************************/
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

/***/ "./src/buttons/block.json"
/*!********************************!*\
  !*** ./src/buttons/block.json ***!
  \********************************/
(module) {

module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"wmblocks/buttons","version":"0.1.0","title":"Buttons","category":"watermelon-blocks","icon":"button","description":"Bootstrap buttons — add one or multiple buttons with full control over variant, size, style, state and layout. Labels editable inline on the canvas.","example":{},"supports":{"html":false,"anchor":true},"attributes":{"buttons":{"type":"array","default":[{"id":"b1","label":"Primary Button","href":"#","target":"_self","variant":"btn-primary","size":"","outline":false,"disabled":false,"active":false,"type":"link","stretchedLink":false,"noWrap":false}]},"layout":{"type":"string","default":"inline"},"groupMode":{"type":"boolean","default":false},"groupSize":{"type":"string","default":""},"groupVertical":{"type":"boolean","default":false},"alignment":{"type":"string","default":"left"},"gap":{"type":"string","default":"gap-2"}},"textdomain":"wm","editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./style-index.css","render":"file:./render.php","viewScript":"file:./view.js"}');

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
/******/ 			"buttons/index": 0,
/******/ 			"buttons/style-index": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["buttons/style-index"], () => (__webpack_require__("./src/buttons/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map