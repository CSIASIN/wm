/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/button-group/edit.js"
/*!**********************************!*\
  !*** ./src/button-group/edit.js ***!
  \**********************************/
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
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./editor.scss */ "./src/button-group/editor.scss");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);






// ── Constants ──────────────────────────────────────────────────────────────

const VARIANTS = [{
  label: 'Primary',
  value: 'btn-primary',
  bg: '#0d6efd',
  text: '#fff'
}, {
  label: 'Secondary',
  value: 'btn-secondary',
  bg: '#6c757d',
  text: '#fff'
}, {
  label: 'Success',
  value: 'btn-success',
  bg: '#198754',
  text: '#fff'
}, {
  label: 'Danger',
  value: 'btn-danger',
  bg: '#dc3545',
  text: '#fff'
}, {
  label: 'Warning',
  value: 'btn-warning',
  bg: '#ffc107',
  text: '#000'
}, {
  label: 'Info',
  value: 'btn-info',
  bg: '#0dcaf0',
  text: '#000'
}, {
  label: 'Light',
  value: 'btn-light',
  bg: '#f8f9fa',
  text: '#000'
}, {
  label: 'Dark',
  value: 'btn-dark',
  bg: '#212529',
  text: '#fff'
}, {
  label: 'Outline Primary',
  value: 'btn-outline-primary',
  bg: 'transparent',
  text: '#0d6efd'
}, {
  label: 'Outline Secondary',
  value: 'btn-outline-secondary',
  bg: 'transparent',
  text: '#6c757d'
}, {
  label: 'Outline Success',
  value: 'btn-outline-success',
  bg: 'transparent',
  text: '#198754'
}, {
  label: 'Outline Danger',
  value: 'btn-outline-danger',
  bg: 'transparent',
  text: '#dc3545'
}, {
  label: 'Outline Warning',
  value: 'btn-outline-warning',
  bg: 'transparent',
  text: '#ffc107'
}, {
  label: 'Outline Info',
  value: 'btn-outline-info',
  bg: 'transparent',
  text: '#0dcaf0'
}, {
  label: 'Outline Light',
  value: 'btn-outline-light',
  bg: 'transparent',
  text: '#f8f9fa'
}, {
  label: 'Outline Dark',
  value: 'btn-outline-dark',
  bg: 'transparent',
  text: '#212529'
}];
const VARIANT_OPTIONS = VARIANTS.map(v => ({
  label: v.label,
  value: v.value
}));
const SIZE_OPTIONS = [{
  label: 'Default',
  value: ''
}, {
  label: 'Large',
  value: 'btn-group-lg'
}, {
  label: 'Small',
  value: 'btn-group-sm'
}];
const GROUP_MODE_OPTIONS = [{
  label: 'Button Group',
  value: 'group'
}, {
  label: 'Button Toolbar',
  value: 'toolbar'
}, {
  label: 'Vertical Group',
  value: 'vertical'
}];
const TOGGLE_MODE_OPTIONS = [{
  label: 'None (standard buttons)',
  value: 'none'
}, {
  label: 'Radio (one active)',
  value: 'radio'
}, {
  label: 'Checkbox (multi active)',
  value: 'checkbox'
}];
const ALIGNMENT_OPTIONS = [{
  label: 'Left',
  value: 'left'
}, {
  label: 'Center',
  value: 'center'
}, {
  label: 'Right',
  value: 'right'
}];

// Mode → icon label map for toolbar
const MODE_ICONS = {
  group: '▐▌',
  toolbar: '▐▌▐▌',
  vertical: '☰'
};
function makeId() {
  return 'g' + Math.random().toString(36).slice(2, 7);
}
function newButton(variant = 'btn-primary') {
  return {
    id: makeId(),
    label: 'Button',
    href: '',
    type: 'button',
    variant,
    active: false,
    disabled: false,
    isDropdown: false,
    dropdownItems: [],
    inputName: '',
    inputValue: ''
  };
}
function makeDropdownItem() {
  return {
    id: makeId(),
    label: 'Item',
    href: '#',
    divider: false
  };
}
function variantStyle(variant) {
  const v = VARIANTS.find(vv => vv.value === variant);
  return v ? {
    background: v.bg,
    color: v.text,
    border: v.bg === 'transparent' ? `1px solid ${v.text}` : 'none'
  } : {};
}

// ── Edit component ─────────────────────────────────────────────────────────
function Edit({
  attributes,
  setAttributes
}) {
  const {
    groupMode,
    size,
    alignment,
    ariaLabel,
    buttons,
    toggleMode,
    inputGroupName
  } = attributes;

  // Which button's detail panel is open
  const [expandedId, setExpandedId] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useState)(null);
  // Which button is "selected" — drives sidebar variant panel
  const [selectedId, setSelectedId] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useState)(buttons[0]?.id ?? null);
  const selectedBtn = buttons.find(b => b.id === selectedId) ?? buttons[0];
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps)({
    className: 'wmblocks-btngroup-wrapper'
  });
  const isToggle = toggleMode !== 'none';
  const isVertical = groupMode === 'vertical';
  const isToolbar = groupMode === 'toolbar';

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
    if (buttons.length <= 1) return;
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
    const variant = selectedBtn?.variant ?? 'btn-primary';
    const btn = newButton(variant);
    setAttributes({
      buttons: [...buttons, btn]
    });
    setSelectedId(btn.id);
    setExpandedId(btn.id);
  }

  // Dropdown item helpers
  function addDropdownItem(btnId) {
    const btn = buttons.find(b => b.id === btnId);
    if (!btn) return;
    updateBtn(btnId, {
      dropdownItems: [...(btn.dropdownItems || []), makeDropdownItem()]
    });
  }
  function updateDropdownItem(btnId, itemId, patch) {
    const btn = buttons.find(b => b.id === btnId);
    if (!btn) return;
    updateBtn(btnId, {
      dropdownItems: btn.dropdownItems.map(di => di.id === itemId ? {
        ...di,
        ...patch
      } : di)
    });
  }
  function removeDropdownItem(btnId, itemId) {
    const btn = buttons.find(b => b.id === btnId);
    if (!btn) return;
    updateBtn(btnId, {
      dropdownItems: btn.dropdownItems.filter(di => di.id !== itemId)
    });
  }

  // Apply variant to all buttons at once
  function applyVariantToAll(variant) {
    setAttributes({
      buttons: buttons.map(b => ({
        ...b,
        variant
      }))
    });
  }

  // ── Alignment style for wrapper ────────────────────────────────────
  const alignStyle = {
    left: 'flex-start',
    center: 'center',
    right: 'flex-end'
  }[alignment] || 'flex-start';

  // ── Build group class for live preview ─────────────────────────────
  const groupClass = isVertical ? ['btn-group-vertical', size].filter(Boolean).join(' ') : ['btn-group', size].filter(Boolean).join(' ');

  // ── Render ────────────────────────────────────────────────────────
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.BlockControls, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToolbarGroup, {
        children: ['group', 'toolbar', 'vertical'].map(m => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToolbarButton, {
          label: GROUP_MODE_OPTIONS.find(o => o.value === m)?.label,
          isPressed: groupMode === m,
          onClick: () => setAttributes({
            groupMode: m
          }),
          children: MODE_ICONS[m]
        }, m))
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToolbarGroup, {
        children: SIZE_OPTIONS.map(s => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToolbarButton, {
          label: 'Size: ' + s.label,
          isPressed: size === s.value,
          onClick: () => setAttributes({
            size: s.value
          }),
          children: s.label.slice(0, 2)
        }, s.value))
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToolbarGroup, {
        children: ['left', 'center', 'right'].map(a => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToolbarButton, {
          icon: `editor-align${a}`,
          label: 'Align ' + a,
          isPressed: alignment === a,
          onClick: () => setAttributes({
            alignment: a
          })
        }, a))
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToolbarGroup, {
        children: VARIANTS.slice(0, 8).map(v => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToolbarButton, {
          label: v.label,
          onClick: () => selectedBtn && updateBtn(selectedBtn.id, {
            variant: v.value
          }),
          isPressed: selectedBtn?.variant === v.value,
          style: {
            background: selectedBtn?.variant === v.value ? v.bg : '',
            color: selectedBtn?.variant === v.value ? v.text : '',
            fontWeight: 700,
            fontSize: '10px',
            minWidth: '40px'
          },
          children: v.label.slice(0, 3)
        }, v.value))
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InspectorControls, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Group Settings', 'wmblocks'),
        initialOpen: true,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Group Mode', 'wmblocks'),
          value: groupMode,
          options: GROUP_MODE_OPTIONS,
          onChange: v => setAttributes({
            groupMode: v
          }),
          help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Group = merged flush buttons. Toolbar = multiple groups side by side. Vertical = stacked column.', 'wmblocks')
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Size', 'wmblocks'),
          value: size,
          options: SIZE_OPTIONS,
          onChange: v => setAttributes({
            size: v
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Alignment', 'wmblocks'),
          value: alignment,
          options: ALIGNMENT_OPTIONS,
          onChange: v => setAttributes({
            alignment: v
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('ARIA Label', 'wmblocks'),
          value: ariaLabel,
          onChange: v => setAttributes({
            ariaLabel: v
          }),
          help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Accessible label for the group element (aria-label).', 'wmblocks')
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Toggle Buttons', 'wmblocks'),
        initialOpen: false,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Toggle Mode', 'wmblocks'),
          value: toggleMode,
          options: TOGGLE_MODE_OPTIONS,
          onChange: v => setAttributes({
            toggleMode: v
          }),
          help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Radio = only one can be active. Checkbox = any can be active. Uses <input> elements under the hood.', 'wmblocks')
        }), isToggle && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Input Group Name', 'wmblocks'),
          value: inputGroupName,
          onChange: v => setAttributes({
            inputGroupName: v.replace(/\s+/g, '-').toLowerCase()
          }),
          help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Shared name attribute for the radio/checkbox inputs (must be unique per page).', 'wmblocks')
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
        title: selectedBtn ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Button Style', 'wmblocks') + ' — ' + (selectedBtn.label || 'Button') : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Button Style', 'wmblocks'),
        initialOpen: true,
        children: !selectedBtn ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
          style: {
            fontSize: '12px',
            color: '#aaa',
            fontStyle: 'italic'
          },
          children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Click a button on the canvas to select it.', 'wmblocks')
        }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Variant', 'wmblocks'),
            value: selectedBtn.variant,
            options: VARIANT_OPTIONS,
            onChange: v => updateBtn(selectedBtn.id, {
              variant: v
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Active', 'wmblocks'),
              checked: !!selectedBtn.active,
              onChange: v => updateBtn(selectedBtn.id, {
                active: v
              })
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Disabled', 'wmblocks'),
              checked: !!selectedBtn.disabled,
              onChange: v => updateBtn(selectedBtn.id, {
                disabled: v
              })
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Nested Dropdown', 'wmblocks'),
              checked: !!selectedBtn.isDropdown,
              onChange: v => updateBtn(selectedBtn.id, {
                isDropdown: v
              }),
              help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Turns this button into a dropdown trigger with its own menu.', 'wmblocks')
            })
          }), selectedBtn.isDropdown && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
              style: {
                fontSize: '11px',
                color: '#888',
                marginTop: 0
              },
              children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Manage dropdown items in the canvas expand panel (▼).', 'wmblocks')
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("hr", {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
            style: {
              fontSize: '11px',
              color: '#888',
              margin: '4px 0 8px'
            },
            children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Apply variant to all buttons:', 'wmblocks')
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
            style: {
              display: 'flex',
              flexWrap: 'wrap',
              gap: '4px'
            },
            children: VARIANTS.slice(0, 8).map(v => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("button", {
              style: {
                background: v.bg,
                color: v.text,
                border: 'none',
                borderRadius: '4px',
                padding: '3px 8px',
                fontSize: '10px',
                fontWeight: 700,
                cursor: 'pointer'
              },
              onClick: () => applyVariantToAll(v.value),
              title: 'Apply ' + v.label + ' to all',
              children: v.label.slice(0, 3)
            }, v.value))
          })]
        })
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
      ...blockProps,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
        className: "wmblocks-btngroup-meta-strip",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
          className: "wmblocks-btngroup-chip",
          children: "Button Group"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
          className: "wmblocks-btngroup-chip",
          children: groupMode
        }), size && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
          className: "wmblocks-btngroup-chip",
          children: size
        }), isToggle && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
          className: "wmblocks-btngroup-chip",
          children: toggleMode
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("span", {
          className: "wmblocks-btngroup-chip",
          children: ["align: ", alignment]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
        className: "wmblocks-btngroup-canvas-outer",
        style: {
          display: 'flex',
          justifyContent: alignStyle
        },
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
          className: 'wmblocks-btngroup-preview ' + groupClass,
          style: isVertical ? {
            display: 'inline-flex',
            flexDirection: 'column'
          } : {},
          children: [buttons.map((btn, index) => {
            const isExpanded = expandedId === btn.id;
            const isSelected = selectedId === btn.id;
            const vStyle = variantStyle(btn.variant);

            // Button classes
            const btnClass = ['btn', btn.variant, btn.active ? 'active' : '', btn.disabled ? 'disabled' : ''].filter(Boolean).join(' ');
            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
              className: 'wmblocks-btngroup-item' + (isSelected ? ' is-selected' : '') + (isExpanded ? ' is-expanded' : '') + (btn.isDropdown ? ' is-dropdown' : ''),
              onClick: () => setSelectedId(btn.id),
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                className: "wmblocks-btngroup-item__btn-row",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
                  tagName: "button",
                  className: btnClass + (btn.isDropdown ? ' dropdown-toggle' : ''),
                  value: btn.label,
                  onChange: v => updateBtn(btn.id, {
                    label: v
                  }),
                  allowedFormats: [],
                  placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Label…', 'wmblocks'),
                  onClick: e => e.preventDefault(),
                  style: isSelected ? {
                    outline: '2px solid #0ea5e9',
                    outlineOffset: '2px'
                  } : {}
                }), btn.isDropdown && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
                  className: "wmblocks-btngroup-item__dropdown-badge",
                  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Nested dropdown', 'wmblocks'),
                  children: "\u25BE dropdown"
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                className: "wmblocks-btngroup-item__actions",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("button", {
                  className: "wmblocks-btngroup-action",
                  onClick: e => {
                    e.stopPropagation();
                    moveBtn(btn.id, -1);
                  },
                  disabled: index === 0,
                  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Move left', 'wmblocks'),
                  children: "\u2190"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("button", {
                  className: "wmblocks-btngroup-action",
                  onClick: e => {
                    e.stopPropagation();
                    moveBtn(btn.id, 1);
                  },
                  disabled: index === buttons.length - 1,
                  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Move right', 'wmblocks'),
                  children: "\u2192"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("button", {
                  className: 'wmblocks-btngroup-action wmblocks-btngroup-action--expand' + (isExpanded ? ' is-active' : ''),
                  onClick: e => {
                    e.stopPropagation();
                    setSelectedId(btn.id);
                    setExpandedId(isExpanded ? null : btn.id);
                  },
                  title: isExpanded ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Close options', 'wmblocks') : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Options', 'wmblocks'),
                  children: isExpanded ? '▲' : '▼'
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("button", {
                  className: "wmblocks-btngroup-action",
                  onClick: e => {
                    e.stopPropagation();
                    duplicateBtn(btn.id);
                  },
                  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Duplicate', 'wmblocks'),
                  children: "\u2398"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("button", {
                  className: "wmblocks-btngroup-action wmblocks-btngroup-action--remove",
                  onClick: e => {
                    e.stopPropagation();
                    removeBtn(btn.id);
                  },
                  disabled: buttons.length <= 1,
                  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Remove', 'wmblocks'),
                  children: "\u2715"
                })]
              }), isExpanded && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                className: "wmblocks-btngroup-item__detail",
                onClick: e => e.stopPropagation(),
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                  className: "wmblocks-btngroup-detail-row",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
                    className: "wmblocks-btngroup-detail-label",
                    children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Style', 'wmblocks')
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
                    className: "wmblocks-btngroup-swatches",
                    children: VARIANTS.slice(0, 8).map(v => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("button", {
                      className: 'wmblocks-btngroup-swatch' + (btn.variant === v.value ? ' is-active' : ''),
                      style: {
                        background: v.bg,
                        color: v.text
                      },
                      onClick: () => updateBtn(btn.id, {
                        variant: v.value
                      }),
                      title: v.label,
                      children: v.label.slice(0, 3)
                    }, v.value))
                  })]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                  className: "wmblocks-btngroup-detail-row",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
                    className: "wmblocks-btngroup-detail-label",
                    children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Outline', 'wmblocks')
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
                    className: "wmblocks-btngroup-swatches",
                    children: VARIANTS.slice(8).map(v => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("button", {
                      className: 'wmblocks-btngroup-swatch wmblocks-btngroup-swatch--outline' + (btn.variant === v.value ? ' is-active' : ''),
                      style: {
                        borderColor: v.text,
                        color: v.text
                      },
                      onClick: () => updateBtn(btn.id, {
                        variant: v.value
                      }),
                      title: v.label,
                      children: v.label.replace('Outline ', '').slice(0, 3)
                    }, v.value))
                  })]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                  className: "wmblocks-btngroup-detail-row",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
                    className: "wmblocks-btngroup-detail-label",
                    children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('URL', 'wmblocks')
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("input", {
                    type: "url",
                    className: "wmblocks-btngroup-url-input",
                    value: btn.href || '',
                    onChange: e => updateBtn(btn.id, {
                      href: e.target.value
                    }),
                    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('https:// (leave empty for <button>)', 'wmblocks')
                  })]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                  className: "wmblocks-btngroup-detail-row",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
                    className: "wmblocks-btngroup-detail-label",
                    children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('State', 'wmblocks')
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                    className: "wmblocks-btngroup-flag-row",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("button", {
                      className: 'wmblocks-btngroup-flag-btn' + (btn.active ? ' is-on' : ''),
                      onClick: () => updateBtn(btn.id, {
                        active: !btn.active
                      }),
                      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
                        className: "wmblocks-btngroup-flag-dot wmblocks-btngroup-flag-dot--active"
                      }), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Active', 'wmblocks')]
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("button", {
                      className: 'wmblocks-btngroup-flag-btn' + (btn.disabled ? ' is-on' : ''),
                      onClick: () => updateBtn(btn.id, {
                        disabled: !btn.disabled
                      }),
                      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
                        className: "wmblocks-btngroup-flag-dot wmblocks-btngroup-flag-dot--disabled"
                      }), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Disabled', 'wmblocks')]
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("button", {
                      className: 'wmblocks-btngroup-flag-btn' + (btn.isDropdown ? ' is-on' : ''),
                      onClick: () => updateBtn(btn.id, {
                        isDropdown: !btn.isDropdown
                      }),
                      children: ["\u25BE ", (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Dropdown', 'wmblocks')]
                    })]
                  })]
                }), isToggle && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                  className: "wmblocks-btngroup-detail-row",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
                    className: "wmblocks-btngroup-detail-label",
                    children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Input', 'wmblocks')
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
                    className: "wmblocks-btngroup-input-row",
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("input", {
                      type: "text",
                      className: "wmblocks-btngroup-url-input",
                      value: btn.inputValue || '',
                      onChange: e => updateBtn(btn.id, {
                        inputValue: e.target.value
                      }),
                      placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Input value attribute', 'wmblocks'),
                      style: {
                        flex: 1
                      }
                    })
                  })]
                }), btn.isDropdown && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                  className: "wmblocks-btngroup-dropdown-items",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                    className: "wmblocks-btngroup-dropdown-items__header",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
                      children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Dropdown Items', 'wmblocks')
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("button", {
                      className: "wmblocks-btngroup-dropdown-add-btn",
                      onClick: () => addDropdownItem(btn.id),
                      children: ["+ ", (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Add', 'wmblocks')]
                    })]
                  }), (btn.dropdownItems || []).length === 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
                    className: "wmblocks-btngroup-dropdown-empty",
                    children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('No items yet — click Add', 'wmblocks')
                  }), (btn.dropdownItems || []).map(di => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                    className: "wmblocks-btngroup-dropdown-item",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("input", {
                      type: "checkbox",
                      checked: !!di.divider,
                      onChange: e => updateDropdownItem(btn.id, di.id, {
                        divider: e.target.checked
                      }),
                      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Divider', 'wmblocks'),
                      style: {
                        flexShrink: 0,
                        marginTop: '2px'
                      }
                    }), di.divider ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
                      className: "wmblocks-btngroup-dropdown-divider-label",
                      children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('— divider', 'wmblocks')
                    }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
                      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("input", {
                        type: "text",
                        className: "wmblocks-btngroup-dropdown-input",
                        value: di.label,
                        onChange: e => updateDropdownItem(btn.id, di.id, {
                          label: e.target.value
                        }),
                        placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Item label', 'wmblocks')
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("input", {
                        type: "url",
                        className: "wmblocks-btngroup-dropdown-input",
                        value: di.href,
                        onChange: e => updateDropdownItem(btn.id, di.id, {
                          href: e.target.value
                        }),
                        placeholder: "href"
                      })]
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("button", {
                      className: "wmblocks-btngroup-dropdown-remove",
                      onClick: () => removeDropdownItem(btn.id, di.id),
                      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Remove', 'wmblocks'),
                      children: "\u2715"
                    })]
                  }, di.id))]
                })]
              })]
            }, btn.id);
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("button", {
            className: "wmblocks-btngroup-add-btn",
            onClick: e => {
              e.stopPropagation();
              addButton();
            },
            title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Add button to group', 'wmblocks'),
            children: ["+ ", (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Add', 'wmblocks')]
          })]
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
        className: "wmblocks-btngroup-footer-hint",
        children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Click label to edit inline · ▼ for style, URL & options · group settings in sidebar →', 'wmblocks')
      })]
    })]
  });
}

/***/ },

/***/ "./src/button-group/index.js"
/*!***********************************!*\
  !*** ./src/button-group/index.js ***!
  \***********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ "./src/button-group/style.scss");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./src/button-group/edit.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./block.json */ "./src/button-group/block.json");




(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_3__.name, {
  edit: _edit__WEBPACK_IMPORTED_MODULE_2__["default"],
  // Fully server-side rendered — no InnerBlocks
  save: () => null
});

/***/ },

/***/ "./src/button-group/editor.scss"
/*!**************************************!*\
  !*** ./src/button-group/editor.scss ***!
  \**************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ },

/***/ "./src/button-group/style.scss"
/*!*************************************!*\
  !*** ./src/button-group/style.scss ***!
  \*************************************/
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

/***/ "./src/button-group/block.json"
/*!*************************************!*\
  !*** ./src/button-group/block.json ***!
  \*************************************/
(module) {

module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"wmblocks/button-group","version":"0.1.0","title":"Button Group","category":"watermelon-blocks","icon":"button","description":"Bootstrap button group — merge buttons into a flush, connected row or toolbar. Supports basic group, toolbar, vertical, radio/checkbox toggle, nested dropdown, and sizing. All labels editable inline on the canvas.","example":{},"supports":{"html":false,"anchor":true},"attributes":{"groupMode":{"type":"string","default":"group","enum":["group","toolbar","vertical"]},"size":{"type":"string","default":""},"alignment":{"type":"string","default":"left"},"ariaLabel":{"type":"string","default":"Button group"},"buttons":{"type":"array","default":[{"id":"g1","label":"Left","href":"","type":"button","variant":"btn-primary","active":false,"disabled":false,"isDropdown":false,"dropdownItems":[],"inputName":"","inputValue":""},{"id":"g2","label":"Middle","href":"","type":"button","variant":"btn-primary","active":false,"disabled":false,"isDropdown":false,"dropdownItems":[],"inputName":"","inputValue":""},{"id":"g3","label":"Right","href":"","type":"button","variant":"btn-primary","active":false,"disabled":false,"isDropdown":false,"dropdownItems":[],"inputName":"","inputValue":""}]},"toggleMode":{"type":"string","default":"none","enum":["none","radio","checkbox"]},"inputGroupName":{"type":"string","default":"btngroup"}},"textdomain":"wm","editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./style-index.css","render":"file:./render.php","viewScript":"file:./view.js"}');

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
/******/ 			"button-group/index": 0,
/******/ 			"button-group/style-index": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["button-group/style-index"], () => (__webpack_require__("./src/button-group/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map