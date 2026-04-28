/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/badge/edit.js"
/*!***************************!*\
  !*** ./src/badge/edit.js ***!
  \***************************/
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
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./editor.scss */ "./src/badge/editor.scss");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);






// ── Colour definitions ─────────────────────────────────────────────────────

const VARIANTS = [{
  label: 'Primary',
  value: 'bg-primary',
  bg: '#0d6efd',
  text: '#fff'
}, {
  label: 'Secondary',
  value: 'bg-secondary',
  bg: '#6c757d',
  text: '#fff'
}, {
  label: 'Success',
  value: 'bg-success',
  bg: '#198754',
  text: '#fff'
}, {
  label: 'Danger',
  value: 'bg-danger',
  bg: '#dc3545',
  text: '#fff'
}, {
  label: 'Warning',
  value: 'bg-warning',
  bg: '#ffc107',
  text: '#000'
}, {
  label: 'Info',
  value: 'bg-info',
  bg: '#0dcaf0',
  text: '#000'
}, {
  label: 'Light',
  value: 'bg-light',
  bg: '#f8f9fa',
  text: '#000'
}, {
  label: 'Dark',
  value: 'bg-dark',
  bg: '#212529',
  text: '#fff'
}];

// text-bg-* classes (better contrast handling — BS 5.2+)
const TEXT_BG_VARIANTS = [{
  label: 'Primary (text-bg)',
  value: 'text-bg-primary'
}, {
  label: 'Secondary (text-bg)',
  value: 'text-bg-secondary'
}, {
  label: 'Success (text-bg)',
  value: 'text-bg-success'
}, {
  label: 'Danger (text-bg)',
  value: 'text-bg-danger'
}, {
  label: 'Warning (text-bg)',
  value: 'text-bg-warning'
}, {
  label: 'Info (text-bg)',
  value: 'text-bg-info'
}, {
  label: 'Light (text-bg)',
  value: 'text-bg-light'
}, {
  label: 'Dark (text-bg)',
  value: 'text-bg-dark'
}];
const ALL_VARIANT_OPTIONS = [{
  label: '── bg-* (classic) ──',
  value: '',
  disabled: true
}, ...VARIANTS.map(v => ({
  label: v.label,
  value: v.value
})), {
  label: '── text-bg-* (auto contrast) ──',
  value: '',
  disabled: true
}, ...TEXT_BG_VARIANTS];
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
function makeId() {
  return 'bd' + Math.random().toString(36).slice(2, 7);
}

// Get preview bg/text colours for editor swatches
function variantColors(value) {
  const v = VARIANTS.find(vv => vv.value === value);
  if (v) return {
    bg: v.bg,
    text: v.text
  };
  // text-bg-* — derive from base name
  const base = value.replace('text-bg-', '');
  const match = VARIANTS.find(vv => vv.value === 'bg-' + base);
  return match ? {
    bg: match.bg,
    text: match.text
  } : {
    bg: '#0d6efd',
    text: '#fff'
  };
}

// ── Edit component ─────────────────────────────────────────────────────────
function Edit({
  attributes,
  setAttributes
}) {
  const {
    badges,
    alignment,
    gap,
    wrapInline
  } = attributes;

  // Which badge's expand panel is open
  const [expandedId, setExpandedId] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useState)(null);
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps)({
    className: 'wmblocks-badge-wrapper'
  });

  // ── Badge CRUD ────────────────────────────────────────────────────
  function updateBadge(id, patch) {
    setAttributes({
      badges: badges.map(b => b.id === id ? {
        ...b,
        ...patch
      } : b)
    });
  }
  function removeBadge(id) {
    if (badges.length <= 1) return;
    setAttributes({
      badges: badges.filter(b => b.id !== id)
    });
    if (expandedId === id) setExpandedId(null);
  }
  function moveBadge(id, dir) {
    const idx = badges.findIndex(b => b.id === id);
    const next = [...badges];
    const swap = idx + dir;
    if (swap < 0 || swap >= next.length) return;
    [next[idx], next[swap]] = [next[swap], next[idx]];
    setAttributes({
      badges: next
    });
  }
  function addBadge() {
    // Inherit the last badge's variant so they feel consistent
    const last = badges[badges.length - 1];
    const variant = last?.variant || 'bg-primary';
    const pill = last?.pill || false;
    const nb = {
      id: makeId(),
      text: 'New',
      variant,
      pill,
      href: '',
      positionedTop: false,
      positionedStart: false
    };
    setAttributes({
      badges: [...badges, nb]
    });
    setExpandedId(nb.id);
  }

  // ── Alignment flex style ──────────────────────────────────────────
  const justifyMap = {
    left: 'flex-start',
    center: 'center',
    right: 'flex-end'
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.BlockControls, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToolbarGroup, {
        children: ['left', 'center', 'right'].map(a => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToolbarButton, {
          icon: `editor-align${a}`,
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Align ' + a, 'wmblocks'),
          isPressed: alignment === a,
          onClick: () => setAttributes({
            alignment: a
          })
        }, a))
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToolbarGroup, {
        children: VARIANTS.map(v => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToolbarButton, {
          label: v.label,
          onClick: () => setAttributes({
            badges: badges.map(b => ({
              ...b,
              variant: v.value
            }))
          }),
          style: {
            background: v.bg,
            color: v.text,
            fontWeight: 700,
            fontSize: '10px',
            minWidth: '42px',
            borderRadius: '3px',
            margin: '0 1px'
          },
          children: v.label.slice(0, 3)
        }, v.value))
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToolbarGroup, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToolbarButton, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Toggle pill shape for all badges', 'wmblocks'),
          isPressed: badges.every(b => b.pill),
          onClick: () => {
            const allPill = badges.every(b => b.pill);
            setAttributes({
              badges: badges.map(b => ({
                ...b,
                pill: !allPill
              }))
            });
          },
          children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('💊 Pill', 'wmblocks')
        })
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InspectorControls, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Layout', 'wmblocks'),
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
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Gap between badges', 'wmblocks'),
          value: gap,
          options: GAP_OPTIONS,
          onChange: v => setAttributes({
            gap: v
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Wrap inline (no flex row)', 'wmblocks'),
          checked: !!wrapInline,
          onChange: v => setAttributes({
            wrapInline: v
          }),
          help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('When on, badges flow as inline elements inside text rather than a flex row.', 'wmblocks')
        })]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
      ...blockProps,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
        className: "wmblocks-badge-meta-strip",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
          className: "wmblocks-badge-meta-chip",
          children: "Badges"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("span", {
          className: "wmblocks-badge-meta-chip",
          children: [badges.length, " badge", badges.length !== 1 ? 's' : '']
        }), wrapInline && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
          className: "wmblocks-badge-meta-chip",
          children: "inline"
        }), gap && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
          className: "wmblocks-badge-meta-chip",
          children: gap
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
        className: "wmblocks-badge-canvas-row",
        style: {
          display: wrapInline ? 'block' : 'flex',
          flexWrap: 'wrap',
          justifyContent: justifyMap[alignment] || 'flex-start',
          gap: gap ? '8px' : '0'
        },
        children: [badges.map((badge, index) => {
          const isExpanded = expandedId === badge.id;
          const colors = variantColors(badge.variant);

          // Build the badge class string for live preview
          const badgeClass = ['badge', badge.variant, badge.pill ? 'rounded-pill' : '', badge.href ? 'wmblocks-badge-linked' : ''].filter(Boolean).join(' ');
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
            className: 'wmblocks-badge-item' + (isExpanded ? ' wmblocks-badge-item--expanded' : ''),
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
              className: "wmblocks-badge-item__badge-row",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
                tagName: badge.href ? 'a' : 'span',
                className: badgeClass,
                value: badge.text,
                onChange: v => updateBadge(badge.id, {
                  text: v
                }),
                allowedFormats: [],
                placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Badge…', 'wmblocks'),
                style: {
                  background: colors.bg,
                  color: colors.text,
                  cursor: 'text'
                }
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                className: "wmblocks-badge-item__actions",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("button", {
                  className: "wmblocks-badge-action",
                  onClick: () => moveBadge(badge.id, -1),
                  disabled: index === 0,
                  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Move left', 'wmblocks'),
                  children: "\u2190"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("button", {
                  className: "wmblocks-badge-action",
                  onClick: () => moveBadge(badge.id, 1),
                  disabled: index === badges.length - 1,
                  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Move right', 'wmblocks'),
                  children: "\u2192"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("button", {
                  className: 'wmblocks-badge-action wmblocks-badge-action--expand' + (isExpanded ? ' is-active' : ''),
                  onClick: () => setExpandedId(isExpanded ? null : badge.id),
                  title: isExpanded ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Close options', 'wmblocks') : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Open options', 'wmblocks'),
                  children: isExpanded ? '▲ Close' : '▼ Edit'
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("button", {
                  className: "wmblocks-badge-action wmblocks-badge-action--remove",
                  onClick: () => removeBadge(badge.id),
                  disabled: badges.length <= 1,
                  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Remove badge', 'wmblocks'),
                  children: "\u2715"
                })]
              })]
            }), isExpanded && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
              className: "wmblocks-badge-item__detail",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                className: "wmblocks-badge-detail-header",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("span", {
                  className: "wmblocks-badge-detail-header__title",
                  children: [(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Badge', 'wmblocks'), " ", index + 1, badge.text ? ` — "${badge.text.replace(/<[^>]*>/g, '')}"` : '']
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("button", {
                  className: "wmblocks-badge-detail-close",
                  onClick: () => setExpandedId(null),
                  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Close panel', 'wmblocks'),
                  children: ["\u2715 ", (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Close', 'wmblocks')]
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                className: "wmblocks-badge-detail-row",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
                  className: "wmblocks-badge-detail-label",
                  children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Colour', 'wmblocks')
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
                  className: "wmblocks-badge-swatches",
                  children: VARIANTS.map(v => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("button", {
                    className: 'wmblocks-badge-swatch' + (badge.variant === v.value ? ' is-active' : ''),
                    style: {
                      background: v.bg,
                      color: v.text
                    },
                    onClick: () => updateBadge(badge.id, {
                      variant: v.value
                    }),
                    title: v.label,
                    children: v.label.slice(0, 3)
                  }, v.value))
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                className: "wmblocks-badge-detail-row",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
                  className: "wmblocks-badge-detail-label",
                  children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Auto', 'wmblocks')
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
                  className: "wmblocks-badge-swatches",
                  children: TEXT_BG_VARIANTS.map(v => {
                    const col = variantColors(v.value);
                    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("button", {
                      className: 'wmblocks-badge-swatch wmblocks-badge-swatch--textbg' + (badge.variant === v.value ? ' is-active' : ''),
                      style: {
                        background: col.bg,
                        color: col.text
                      },
                      onClick: () => updateBadge(badge.id, {
                        variant: v.value
                      }),
                      title: v.label,
                      children: v.label.replace(' (text-bg)', '').slice(0, 3)
                    }, v.value);
                  })
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                className: "wmblocks-badge-detail-row",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
                  className: "wmblocks-badge-detail-label",
                  children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Shape', 'wmblocks')
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                  className: "wmblocks-badge-pill-pills",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("button", {
                    className: 'wmblocks-badge-shape-btn' + (!badge.pill ? ' is-active' : ''),
                    onClick: () => updateBadge(badge.id, {
                      pill: false
                    }),
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
                      style: {
                        display: 'inline-block',
                        width: 32,
                        height: 14,
                        background: 'currentColor',
                        borderRadius: 3,
                        opacity: .7
                      }
                    }), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Square', 'wmblocks')]
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("button", {
                    className: 'wmblocks-badge-shape-btn' + (badge.pill ? ' is-active' : ''),
                    onClick: () => updateBadge(badge.id, {
                      pill: true
                    }),
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
                      style: {
                        display: 'inline-block',
                        width: 32,
                        height: 14,
                        background: 'currentColor',
                        borderRadius: 20,
                        opacity: .7
                      }
                    }), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Pill', 'wmblocks')]
                  })]
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                className: "wmblocks-badge-detail-row",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
                  className: "wmblocks-badge-detail-label",
                  children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Link', 'wmblocks')
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("input", {
                  type: "url",
                  className: "wmblocks-badge-url-input",
                  value: badge.href || '',
                  onChange: e => updateBadge(badge.id, {
                    href: e.target.value
                  }),
                  placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('https:// (optional)', 'wmblocks')
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                className: "wmblocks-badge-detail-row wmblocks-badge-detail-row--flags",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
                  className: "wmblocks-badge-detail-label",
                  children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Position', 'wmblocks')
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                  className: "wmblocks-badge-flag-row",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("button", {
                    className: 'wmblocks-badge-flag-btn' + (badge.positionedTop ? ' is-on' : ''),
                    onClick: () => updateBadge(badge.id, {
                      positionedTop: !badge.positionedTop
                    }),
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
                      className: "wmblocks-badge-flag-dot"
                    }), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Top', 'wmblocks'), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
                      className: "wmblocks-badge-flag-state",
                      children: badge.positionedTop ? 'ON' : 'off'
                    })]
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("button", {
                    className: 'wmblocks-badge-flag-btn' + (badge.positionedStart ? ' is-on' : ''),
                    onClick: () => updateBadge(badge.id, {
                      positionedStart: !badge.positionedStart
                    }),
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
                      className: "wmblocks-badge-flag-dot"
                    }), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Start', 'wmblocks'), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
                      className: "wmblocks-badge-flag-state",
                      children: badge.positionedStart ? 'ON' : 'off'
                    })]
                  })]
                }), (badge.positionedTop || badge.positionedStart) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
                  className: "wmblocks-badge-position-note",
                  children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Positioned badges use translate-middle and are placed relative to a parent element with position:relative. Wrap your button/element manually.', 'wmblocks')
                })]
              })]
            })]
          }, badge.id);
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("button", {
          className: "wmblocks-badge-add",
          onClick: addBadge,
          title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Add badge', 'wmblocks'),
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
            children: "+"
          }), " ", (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Add Badge', 'wmblocks')]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
        className: "wmblocks-badge-footer-hint",
        children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Click label to edit inline · ▼ Edit opens options · ✕ Close returns to badges · colours in toolbar', 'wmblocks')
      })]
    })]
  });
}

/***/ },

/***/ "./src/badge/index.js"
/*!****************************!*\
  !*** ./src/badge/index.js ***!
  \****************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ "./src/badge/style.scss");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./src/badge/edit.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./block.json */ "./src/badge/block.json");




(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_3__.name, {
  edit: _edit__WEBPACK_IMPORTED_MODULE_2__["default"],
  // Fully server-side rendered via render.php — no InnerBlocks needed
  save: () => null
});

/***/ },

/***/ "./src/badge/editor.scss"
/*!*******************************!*\
  !*** ./src/badge/editor.scss ***!
  \*******************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ },

/***/ "./src/badge/style.scss"
/*!******************************!*\
  !*** ./src/badge/style.scss ***!
  \******************************/
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

/***/ "./src/badge/block.json"
/*!******************************!*\
  !*** ./src/badge/block.json ***!
  \******************************/
(module) {

module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"wmblocks/badge","version":"0.1.0","title":"Badge","category":"watermelon-blocks","icon":"tag","description":"Bootstrap badges — one or more inline badge labels with full control over colour, pill shape, positioning, and optional link. All labels editable directly on the canvas.","example":{},"supports":{"html":false,"anchor":true},"attributes":{"badges":{"type":"array","default":[{"id":"bd1","text":"New","variant":"bg-primary","pill":false,"href":"","positionedTop":false,"positionedStart":false}]},"alignment":{"type":"string","default":"left"},"gap":{"type":"string","default":"gap-2"},"wrapInline":{"type":"boolean","default":false}},"textdomain":"wm","editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./style-index.css","render":"file:./render.php","viewScript":"file:./view.js"}');

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
/******/ 			"badge/index": 0,
/******/ 			"badge/style-index": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["badge/style-index"], () => (__webpack_require__("./src/badge/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map