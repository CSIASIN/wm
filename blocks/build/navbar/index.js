/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/navbar/edit.js"
/*!****************************!*\
  !*** ./src/navbar/edit.js ***!
  \****************************/
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
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./editor.scss */ "./src/navbar/editor.scss");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);






const COLOR_SCHEMES = [{
  label: 'Dark (bg-dark)',
  value: 'navbar-dark bg-dark'
}, {
  label: 'Dark (bg-black)',
  value: 'navbar-dark bg-black'
}, {
  label: 'Light (bg-light)',
  value: 'navbar-light bg-light'
}, {
  label: 'Light (bg-white)',
  value: 'navbar-light bg-white'
}, {
  label: 'Primary',
  value: 'navbar-dark bg-primary'
}, {
  label: 'Secondary',
  value: 'navbar-dark bg-secondary'
}, {
  label: 'Success',
  value: 'navbar-dark bg-success'
}, {
  label: 'Danger',
  value: 'navbar-dark bg-danger'
}, {
  label: 'Warning',
  value: 'navbar-dark bg-warning'
}, {
  label: 'Info',
  value: 'navbar-dark bg-info'
}, {
  label: 'Body (bg-body)',
  value: 'navbar-light bg-body'
}, {
  label: 'Transparent',
  value: 'navbar-light bg-transparent'
}];
const BREAKPOINTS = [{
  label: 'Always expanded',
  value: 'navbar-expand'
}, {
  label: 'Expand on SM+',
  value: 'navbar-expand-sm'
}, {
  label: 'Expand on MD+',
  value: 'navbar-expand-md'
}, {
  label: 'Expand on LG+',
  value: 'navbar-expand-lg'
}, {
  label: 'Expand on XL+',
  value: 'navbar-expand-xl'
}, {
  label: 'Expand on XXL+',
  value: 'navbar-expand-xxl'
}, {
  label: 'Never expanded',
  value: ''
}];
const PLACEMENTS = [{
  label: '— None (static) —',
  value: ''
}, {
  label: 'Fixed Top',
  value: 'fixed-top'
}, {
  label: 'Fixed Bottom',
  value: 'fixed-bottom'
}, {
  label: 'Sticky Top',
  value: 'sticky-top'
}, {
  label: 'Sticky Bottom',
  value: 'sticky-bottom'
}];
const CONTAINERS = [{
  label: 'container',
  value: 'container'
}, {
  label: 'container-fluid',
  value: 'container-fluid'
}, {
  label: 'container-sm',
  value: 'container-sm'
}, {
  label: 'container-md',
  value: 'container-md'
}, {
  label: 'container-lg',
  value: 'container-lg'
}, {
  label: 'container-xl',
  value: 'container-xl'
}];
const NAV_ALIGNMENTS = [{
  label: '— None —',
  value: ''
}, {
  label: 'ms-auto (Right)',
  value: 'ms-auto'
}, {
  label: 'me-auto (Left)',
  value: 'me-auto'
}, {
  label: 'mx-auto (Center)',
  value: 'mx-auto'
}];
function getNavColors(scheme) {
  if (scheme.includes('navbar-dark')) return {
    color: '#fff',
    mutedColor: 'rgba(255,255,255,0.55)'
  };
  return {
    color: 'rgba(0,0,0,0.85)',
    mutedColor: 'rgba(0,0,0,0.55)'
  };
}
function getSchemeBg(scheme) {
  const map = {
    'bg-dark': '#212529',
    'bg-black': '#000',
    'bg-light': '#f8f9fa',
    'bg-white': '#fff',
    'bg-primary': '#0d6efd',
    'bg-secondary': '#6c757d',
    'bg-success': '#198754',
    'bg-danger': '#dc3545',
    'bg-warning': '#ffc107',
    'bg-info': '#0dcaf0',
    'bg-body': '#fff',
    'bg-transparent': 'transparent'
  };
  for (const [cls, color] of Object.entries(map)) {
    if (scheme.includes(cls)) return color;
  }
  return '#212529';
}
function Edit({
  attributes,
  setAttributes,
  clientId
}) {
  const {
    navbarId,
    brandText,
    brandUrl,
    brandImageUrl,
    brandImageId,
    brandImageHeight,
    colorScheme,
    expandBreakpoint,
    placement,
    containerType,
    navItems,
    showSearch,
    searchPlaceholder,
    navAlignment
  } = attributes;

  // Track which nav item is selected in editor
  const [selectedItem, setSelectedItem] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useState)(null);
  const urlInputRef = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useRef)(null);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useEffect)(() => {
    if (!navbarId) {
      setAttributes({
        navbarId: 'navbar-' + clientId.slice(0, 8)
      });
    }
  }, []);

  // Focus URL input when item selected
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useEffect)(() => {
    if (selectedItem !== null && urlInputRef.current) {
      urlInputRef.current.focus();
    }
  }, [selectedItem]);
  const colors = getNavColors(colorScheme);
  const bgColor = getSchemeBg(colorScheme);
  const updateNavItem = (index, key, value) => {
    const updated = navItems.map((item, i) => i === index ? {
      ...item,
      [key]: value
    } : item);
    setAttributes({
      navItems: updated
    });
  };
  const addNavItem = () => {
    const newIndex = navItems.length;
    setAttributes({
      navItems: [...navItems, {
        label: 'New Link',
        url: '#',
        active: false,
        disabled: false
      }]
    });
    setSelectedItem(newIndex);
  };
  const removeNavItem = index => {
    setAttributes({
      navItems: navItems.filter((_, i) => i !== index)
    });
    setSelectedItem(null);
  };
  const moveNavItem = (index, direction) => {
    const items = [...navItems];
    const target = index + direction;
    if (target < 0 || target >= items.length) return;
    [items[index], items[target]] = [items[target], items[index]];
    setAttributes({
      navItems: items
    });
    setSelectedItem(target);
  };
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps)({
    className: 'wmblocks-navbar-wrapper'
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InspectorControls, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Brand', 'wmblocks'),
        initialOpen: true,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Brand Text', 'wmblocks'),
          value: brandText,
          onChange: v => setAttributes({
            brandText: v
          }),
          help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Leave empty to use only the logo image.', 'wmblocks')
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Brand URL', 'wmblocks'),
          value: brandUrl,
          onChange: v => setAttributes({
            brandUrl: v
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.MediaUploadCheck, {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.MediaUpload, {
            onSelect: media => setAttributes({
              brandImageUrl: media.url,
              brandImageId: media.id
            }),
            allowedTypes: ['image'],
            value: brandImageId,
            render: ({
              open
            }) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
              style: {
                marginBottom: '8px'
              },
              children: [brandImageUrl && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                style: {
                  marginBottom: '6px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px'
                },
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("img", {
                  src: brandImageUrl,
                  style: {
                    height: '30px',
                    objectFit: 'contain'
                  },
                  alt: ""
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
                  variant: "tertiary",
                  isDestructive: true,
                  size: "small",
                  onClick: () => setAttributes({
                    brandImageUrl: '',
                    brandImageId: 0
                  }),
                  children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Remove', 'wmblocks')
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
                variant: "secondary",
                size: "small",
                onClick: open,
                children: brandImageUrl ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Change Logo', 'wmblocks') : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Upload Logo', 'wmblocks')
              })]
            })
          })
        }), brandImageUrl && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Logo Height', 'wmblocks'),
          value: brandImageHeight,
          onChange: v => setAttributes({
            brandImageHeight: v
          }),
          help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('e.g. 30px', 'wmblocks')
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Appearance', 'wmblocks'),
        initialOpen: true,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Color Scheme', 'wmblocks'),
          value: colorScheme,
          options: COLOR_SCHEMES,
          onChange: v => setAttributes({
            colorScheme: v
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Expand Breakpoint', 'wmblocks'),
          value: expandBreakpoint,
          options: BREAKPOINTS,
          onChange: v => setAttributes({
            expandBreakpoint: v
          }),
          help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Collapse to hamburger below this breakpoint.', 'wmblocks')
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Placement', 'wmblocks'),
          value: placement,
          options: PLACEMENTS,
          onChange: v => setAttributes({
            placement: v
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Container', 'wmblocks'),
          value: containerType,
          options: CONTAINERS,
          onChange: v => setAttributes({
            containerType: v
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Nav Alignment', 'wmblocks'),
          value: navAlignment,
          options: NAV_ALIGNMENTS,
          onChange: v => setAttributes({
            navAlignment: v
          })
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Search', 'wmblocks'),
        initialOpen: false,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Show Search Form', 'wmblocks'),
          checked: !!showSearch,
          onChange: v => setAttributes({
            showSearch: v
          })
        }), showSearch && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Placeholder', 'wmblocks'),
          value: searchPlaceholder,
          onChange: v => setAttributes({
            searchPlaceholder: v
          })
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Advanced', 'wmblocks'),
        initialOpen: false,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Navbar ID', 'wmblocks'),
          value: navbarId,
          onChange: v => setAttributes({
            navbarId: v.replace(/\s+/g, '-').toLowerCase()
          }),
          help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Used for the mobile toggler collapse target.', 'wmblocks')
        })
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
      ...blockProps,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("nav", {
        style: {
          background: bgColor,
          padding: '8px 16px',
          display: 'flex',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '8px',
          borderRadius: '4px',
          minHeight: '56px'
        },
        "aria-label": (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Navbar preview', 'wmblocks'),
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("span", {
          style: {
            color: colors.color,
            fontWeight: 700,
            fontSize: '18px',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            marginRight: '16px'
          },
          children: [brandImageUrl && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("img", {
            src: brandImageUrl,
            style: {
              height: brandImageHeight,
              objectFit: 'contain'
            },
            alt: ""
          }), brandText && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
            children: brandText
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
          style: {
            display: 'flex',
            alignItems: 'center',
            gap: '2px',
            flex: 1,
            flexWrap: 'wrap',
            justifyContent: navAlignment === 'ms-auto' ? 'flex-end' : navAlignment === 'mx-auto' ? 'center' : 'flex-start'
          },
          children: [navItems.map((item, i) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
            style: {
              position: 'relative'
            },
            onBlur: e => {
              // Deselect only if focus leaves this item entirely
              if (!e.currentTarget.contains(e.relatedTarget)) {
                setSelectedItem(null);
              }
            },
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
              contentEditable: true,
              suppressContentEditableWarning: true,
              onFocus: () => setSelectedItem(i),
              onInput: e => updateNavItem(i, 'label', e.currentTarget.textContent),
              onKeyDown: e => {
                if (e.key === 'Enter') {
                  e.preventDefault();
                  e.currentTarget.blur();
                }
                if (e.key === 'Tab') {
                  e.preventDefault();
                  setSelectedItem(i + 1 < navItems.length ? i + 1 : null);
                }
                if (e.key === 'Escape') {
                  e.preventDefault();
                  e.currentTarget.blur();
                }
              },
              style: {
                display: 'inline-block',
                padding: '6px 10px',
                borderRadius: selectedItem === i ? '4px 4px 0 0' : '4px',
                fontSize: '14px',
                fontWeight: item.active ? 600 : 400,
                color: item.disabled ? colors.mutedColor : item.active ? colors.color : colors.mutedColor,
                background: selectedItem === i ? 'rgba(255,255,255,0.2)' : item.active ? 'rgba(255,255,255,0.1)' : 'transparent',
                opacity: item.disabled ? 0.5 : 1,
                cursor: 'text',
                outline: selectedItem === i ? '2px solid rgba(255,255,255,0.5)' : 'none',
                minWidth: '40px',
                whiteSpace: 'nowrap'
              },
              children: item.label
            }), selectedItem === i && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
              style: {
                position: 'absolute',
                top: '100%',
                left: 0,
                zIndex: 999,
                background: '#fff',
                border: '1px solid #ddd',
                borderRadius: '0 4px 4px 4px',
                padding: '8px',
                minWidth: '240px',
                boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
              },
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                style: {
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  marginBottom: '6px'
                },
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
                  style: {
                    fontSize: '11px',
                    color: '#555',
                    flexShrink: 0
                  },
                  children: "\uD83D\uDD17"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("input", {
                  ref: urlInputRef,
                  type: "url",
                  value: item.url,
                  onChange: e => updateNavItem(i, 'url', e.target.value),
                  onKeyDown: e => {
                    if (e.key === 'Escape' || e.key === 'Enter') setSelectedItem(null);
                  },
                  placeholder: "https://",
                  style: {
                    flex: 1,
                    fontSize: '12px',
                    padding: '4px 6px',
                    border: '1px solid #ccc',
                    borderRadius: '4px',
                    outline: 'none'
                  }
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                style: {
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  fontSize: '11px',
                  color: '#555',
                  marginBottom: '6px'
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
                    onChange: e => updateNavItem(i, 'active', e.target.checked)
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
                    onChange: e => updateNavItem(i, 'disabled', e.target.checked)
                  }), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Disabled', 'wmblocks')]
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                style: {
                  display: 'flex',
                  gap: '4px'
                },
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("button", {
                  onClick: () => moveNavItem(i, -1),
                  disabled: i === 0,
                  style: {
                    fontSize: '11px',
                    padding: '2px 6px',
                    border: '1px solid #ccc',
                    borderRadius: '3px',
                    background: '#f8f9fa',
                    cursor: i === 0 ? 'not-allowed' : 'pointer',
                    opacity: i === 0 ? 0.4 : 1
                  },
                  children: "\u2190"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("button", {
                  onClick: () => moveNavItem(i, 1),
                  disabled: i === navItems.length - 1,
                  style: {
                    fontSize: '11px',
                    padding: '2px 6px',
                    border: '1px solid #ccc',
                    borderRadius: '3px',
                    background: '#f8f9fa',
                    cursor: i === navItems.length - 1 ? 'not-allowed' : 'pointer',
                    opacity: i === navItems.length - 1 ? 0.4 : 1
                  },
                  children: "\u2192"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("button", {
                  onClick: () => removeNavItem(i),
                  style: {
                    fontSize: '11px',
                    padding: '2px 6px',
                    border: '1px solid #fcc',
                    borderRadius: '3px',
                    background: '#fff5f5',
                    color: '#c00',
                    cursor: 'pointer',
                    marginLeft: 'auto'
                  },
                  children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('✕ Remove', 'wmblocks')
                })]
              })]
            })]
          }, i)), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("button", {
            onClick: addNavItem,
            style: {
              fontSize: '12px',
              padding: '5px 10px',
              background: 'rgba(255,255,255,0.15)',
              border: '1px dashed rgba(255,255,255,0.4)',
              borderRadius: '4px',
              color: colors.color,
              cursor: 'pointer',
              marginLeft: '4px'
            },
            children: ["+ ", (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Add item', 'wmblocks')]
          }), showSearch && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
            style: {
              display: 'flex',
              gap: '4px',
              marginLeft: '8px'
            },
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("input", {
              type: "search",
              placeholder: searchPlaceholder,
              readOnly: true,
              style: {
                padding: '4px 8px',
                borderRadius: '4px',
                border: '1px solid rgba(255,255,255,0.3)',
                background: 'rgba(255,255,255,0.1)',
                color: colors.color,
                fontSize: '13px',
                outline: 'none'
              }
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("button", {
              style: {
                padding: '4px 10px',
                borderRadius: '4px',
                background: 'rgba(255,255,255,0.2)',
                border: 'none',
                color: colors.color,
                fontSize: '13px',
                cursor: 'default'
              },
              children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Search', 'wmblocks')
            })]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
          style: {
            marginLeft: 'auto',
            display: 'flex',
            flexDirection: 'column',
            gap: '4px',
            opacity: 0.5
          },
          title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Mobile toggler', 'wmblocks'),
          children: [0, 1, 2].map(i => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
            style: {
              width: '22px',
              height: '2px',
              background: colors.color,
              borderRadius: '2px'
            }
          }, i))
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
        style: {
          fontSize: '11px',
          color: '#757575',
          marginTop: '6px',
          fontStyle: 'italic'
        },
        children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Click any nav item to edit its label and URL. Use Brand panel on the right for logo settings.', 'wmblocks')
      })]
    })]
  });
}

/***/ },

/***/ "./src/navbar/index.js"
/*!*****************************!*\
  !*** ./src/navbar/index.js ***!
  \*****************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.scss */ "./src/navbar/style.scss");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit */ "./src/navbar/edit.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./block.json */ "./src/navbar/block.json");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);






(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_4__.name, {
  edit: _edit__WEBPACK_IMPORTED_MODULE_3__["default"],
  save: () => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
    ..._wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps.save()
  })
});

/***/ },

/***/ "./src/navbar/editor.scss"
/*!********************************!*\
  !*** ./src/navbar/editor.scss ***!
  \********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ },

/***/ "./src/navbar/style.scss"
/*!*******************************!*\
  !*** ./src/navbar/style.scss ***!
  \*******************************/
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

/***/ "./src/navbar/block.json"
/*!*******************************!*\
  !*** ./src/navbar/block.json ***!
  \*******************************/
(module) {

module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"wmblocks/navbar","version":"0.1.0","title":"Navbar","category":"watermelon-blocks","icon":"menu","description":"Bootstrap responsive navigation bar with brand, nav links, and mobile toggler.","example":{},"supports":{"html":false,"anchor":true},"attributes":{"navbarId":{"type":"string","default":""},"brandText":{"type":"string","default":"Navbar"},"brandUrl":{"type":"string","default":"#"},"brandImageUrl":{"type":"string","default":""},"brandImageId":{"type":"number","default":0},"brandImageHeight":{"type":"string","default":"30px"},"colorScheme":{"type":"string","default":"navbar-dark bg-dark"},"expandBreakpoint":{"type":"string","default":"navbar-expand-lg"},"placement":{"type":"string","default":""},"containerType":{"type":"string","default":"container"},"navItems":{"type":"array","default":[{"label":"Home","url":"#","active":true,"disabled":false},{"label":"About","url":"#","active":false,"disabled":false},{"label":"Services","url":"#","active":false,"disabled":false},{"label":"Contact","url":"#","active":false,"disabled":false}],"items":{"type":"object"}},"showSearch":{"type":"boolean","default":false},"searchPlaceholder":{"type":"string","default":"Search"},"navAlignment":{"type":"string","default":""}},"textdomain":"wm","editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./style-index.css","render":"file:./render.php","viewScript":"file:./view.js"}');

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
/******/ 			"navbar/index": 0,
/******/ 			"navbar/style-index": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["navbar/style-index"], () => (__webpack_require__("./src/navbar/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map