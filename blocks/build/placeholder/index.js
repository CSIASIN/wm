/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/placeholder/edit.js"
/*!*********************************!*\
  !*** ./src/placeholder/edit.js ***!
  \*********************************/
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
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./editor.scss */ "./src/placeholder/editor.scss");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);






// ── Constants ──────────────────────────────────────────────────────────────

// All elements a row can represent

const ELEMENT_TYPES = [{
  value: 'heading',
  label: 'Heading',
  icon: '𝐇',
  desc: 'A wide bar styled as a heading (h1–h6)'
}, {
  value: 'paragraph',
  label: 'Paragraph',
  icon: '¶',
  desc: 'Multiple spans that mimic paragraph text'
}, {
  value: 'button',
  label: 'Button',
  icon: '⬜',
  desc: 'A disabled placeholder button'
}, {
  value: 'image',
  label: 'Image / Thumbnail',
  icon: '🖼',
  desc: 'A full-width image skeleton bar'
}, {
  value: 'avatar',
  label: 'Avatar / Circle',
  icon: '◉',
  desc: 'A circular avatar placeholder'
}, {
  value: 'badge',
  label: 'Badge / Tag',
  icon: '🏷',
  desc: 'A small inline badge-sized bar'
}, {
  value: 'text',
  label: 'Text span',
  icon: '—',
  desc: 'A single inline placeholder span'
}, {
  value: 'divider',
  label: 'Spacer / Divider',
  icon: '╌',
  desc: 'Visual spacing between rows'
}];

// Bootstrap grid col widths
const COL_OPTIONS = [{
  label: 'Auto',
  value: 'col-auto'
}, {
  label: '1/12',
  value: 'col-1'
}, {
  label: '2/12',
  value: 'col-2'
}, {
  label: '3/12 (25%)',
  value: 'col-3'
}, {
  label: '4/12 (33%)',
  value: 'col-4'
}, {
  label: '5/12',
  value: 'col-5'
}, {
  label: '6/12 (50%)',
  value: 'col-6'
}, {
  label: '7/12',
  value: 'col-7'
}, {
  label: '8/12 (67%)',
  value: 'col-8'
}, {
  label: '9/12 (75%)',
  value: 'col-9'
}, {
  label: '10/12',
  value: 'col-10'
}, {
  label: '11/12',
  value: 'col-11'
}, {
  label: '12/12 (100%)',
  value: 'col-12'
}];

// Bootstrap placeholder colours
const COLOUR_OPTIONS = [{
  label: 'Default (grey)',
  value: ''
}, {
  label: 'Primary',
  value: 'bg-primary'
}, {
  label: 'Secondary',
  value: 'bg-secondary'
}, {
  label: 'Success',
  value: 'bg-success'
}, {
  label: 'Danger',
  value: 'bg-danger'
}, {
  label: 'Warning',
  value: 'bg-warning'
}, {
  label: 'Info',
  value: 'bg-info'
}, {
  label: 'Light',
  value: 'bg-light'
}, {
  label: 'Dark',
  value: 'bg-dark'
}];

// Colour → hex for live preview
const COLOUR_HEX = {
  '': '#dee2e6',
  'bg-primary': '#0d6efd',
  'bg-secondary': '#6c757d',
  'bg-success': '#198754',
  'bg-danger': '#dc3545',
  'bg-warning': '#ffc107',
  'bg-info': '#0dcaf0',
  'bg-light': '#f8f9fa',
  'bg-dark': '#212529'
};

// Placeholder sizes
const SIZE_OPTIONS = [{
  label: 'Default',
  value: ''
}, {
  label: 'XS',
  value: 'placeholder-xs'
}, {
  label: 'SM',
  value: 'placeholder-sm'
}, {
  label: 'LG',
  value: 'placeholder-lg'
}];

// Animation options
const ANIMATION_OPTIONS = [{
  label: 'Glow (fade in/out)',
  value: 'placeholder-glow'
}, {
  label: 'Wave (sweep)',
  value: 'placeholder-wave'
}, {
  label: 'None',
  value: ''
}];

// Heading tags
const HEADING_TAG_OPTIONS = [{
  label: 'H1',
  value: 'h1'
}, {
  label: 'H2',
  value: 'h2'
}, {
  label: 'H3',
  value: 'h3'
}, {
  label: 'H4',
  value: 'h4'
}, {
  label: 'H5',
  value: 'h5'
}, {
  label: 'H6',
  value: 'h6'
}];

// ── Preset templates ───────────────────────────────────────────────────────
const TEMPLATES = {
  card: {
    label: 'Card skeleton',
    showImageRow: true,
    imageHeight: '180px',
    wrapInCard: true,
    rows: [{
      id: 'r1',
      element: 'heading',
      cols: 'col-6',
      colour: '',
      size: '',
      tag: 'h5'
    }, {
      id: 'r2',
      element: 'paragraph',
      cols: 'col-7',
      colour: '',
      size: '',
      spans: [{
        id: 's1',
        cols: 'col-7',
        colour: '',
        size: ''
      }, {
        id: 's2',
        cols: 'col-4',
        colour: '',
        size: ''
      }, {
        id: 's3',
        cols: 'col-6',
        colour: '',
        size: ''
      }, {
        id: 's4',
        cols: 'col-8',
        colour: '',
        size: ''
      }]
    }, {
      id: 'r3',
      element: 'button',
      cols: 'col-6',
      colour: 'bg-primary',
      size: '',
      tag: ''
    }]
  },
  article: {
    label: 'Article / Post',
    showImageRow: true,
    imageHeight: '220px',
    wrapInCard: false,
    rows: [{
      id: 'r1',
      element: 'badge',
      cols: 'col-2',
      colour: 'bg-secondary',
      size: 'placeholder-sm',
      tag: ''
    }, {
      id: 'r2',
      element: 'heading',
      cols: 'col-8',
      colour: '',
      size: 'placeholder-lg',
      tag: 'h2'
    }, {
      id: 'r3',
      element: 'heading',
      cols: 'col-5',
      colour: '',
      size: '',
      tag: 'h5'
    }, {
      id: 'r4',
      element: 'paragraph',
      cols: 'col-12',
      colour: '',
      size: '',
      spans: [{
        id: 's1',
        cols: 'col-12',
        colour: '',
        size: ''
      }, {
        id: 's2',
        cols: 'col-10',
        colour: '',
        size: ''
      }, {
        id: 's3',
        cols: 'col-11',
        colour: '',
        size: ''
      }, {
        id: 's4',
        cols: 'col-6',
        colour: '',
        size: ''
      }]
    }, {
      id: 'r5',
      element: 'button',
      cols: 'col-3',
      colour: 'bg-primary',
      size: '',
      tag: ''
    }]
  },
  profile: {
    label: 'Profile / User',
    showImageRow: false,
    wrapInCard: true,
    rows: [{
      id: 'r1',
      element: 'avatar',
      cols: 'col-2',
      colour: '',
      size: '',
      tag: ''
    }, {
      id: 'r2',
      element: 'divider',
      cols: 'col-12',
      colour: '',
      size: '',
      tag: ''
    }, {
      id: 'r3',
      element: 'heading',
      cols: 'col-5',
      colour: '',
      size: '',
      tag: 'h5'
    }, {
      id: 'r4',
      element: 'text',
      cols: 'col-8',
      colour: '',
      size: 'placeholder-sm',
      tag: ''
    }, {
      id: 'r5',
      element: 'text',
      cols: 'col-6',
      colour: '',
      size: 'placeholder-sm',
      tag: ''
    }, {
      id: 'r6',
      element: 'divider',
      cols: 'col-12',
      colour: '',
      size: '',
      tag: ''
    }, {
      id: 'r7',
      element: 'button',
      cols: 'col-4',
      colour: 'bg-primary',
      size: '',
      tag: ''
    }, {
      id: 'r8',
      element: 'button',
      cols: 'col-4',
      colour: 'bg-secondary',
      size: '',
      tag: ''
    }]
  },
  paragraph: {
    label: 'Text / Paragraph block',
    showImageRow: false,
    wrapInCard: false,
    rows: [{
      id: 'r1',
      element: 'heading',
      cols: 'col-4',
      colour: '',
      size: '',
      tag: 'h4'
    }, {
      id: 'r2',
      element: 'paragraph',
      cols: 'col-12',
      colour: '',
      size: '',
      spans: [{
        id: 's1',
        cols: 'col-11',
        colour: '',
        size: ''
      }, {
        id: 's2',
        cols: 'col-12',
        colour: '',
        size: ''
      }, {
        id: 's3',
        cols: 'col-9',
        colour: '',
        size: ''
      }, {
        id: 's4',
        cols: 'col-10',
        colour: '',
        size: ''
      }, {
        id: 's5',
        cols: 'col-7',
        colour: '',
        size: ''
      }]
    }]
  },
  buttons: {
    label: 'Button row',
    showImageRow: false,
    wrapInCard: false,
    rows: [{
      id: 'r1',
      element: 'button',
      cols: 'col-3',
      colour: 'bg-primary',
      size: '',
      tag: ''
    }, {
      id: 'r2',
      element: 'button',
      cols: 'col-3',
      colour: 'bg-secondary',
      size: '',
      tag: ''
    }]
  },
  custom: {
    label: 'Custom (blank)',
    showImageRow: false,
    wrapInCard: false,
    rows: [{
      id: 'r1',
      element: 'heading',
      cols: 'col-6',
      colour: '',
      size: '',
      tag: 'h5'
    }, {
      id: 'r2',
      element: 'paragraph',
      cols: 'col-7',
      colour: '',
      size: '',
      spans: [{
        id: 's1',
        cols: 'col-7',
        colour: '',
        size: ''
      }, {
        id: 's2',
        cols: 'col-4',
        colour: '',
        size: ''
      }]
    }, {
      id: 'r3',
      element: 'button',
      cols: 'col-6',
      colour: 'bg-primary',
      size: '',
      tag: ''
    }]
  }
};

// ── ID generators ──────────────────────────────────────────────────────────
function makeId(prefix = 'r') {
  return prefix + Math.random().toString(36).slice(2, 7);
}

// ── Get a hex colour from global or row-level setting ─────────────────────
function resolveColour(rowColour, globalColour) {
  const c = rowColour || globalColour || '';
  return COLOUR_HEX[c] || '#dee2e6';
}

// ── Build placeholder bar style for live editor preview ───────────────────
// We mimic Bootstrap's .placeholder CSS without loading Bootstrap in admin.
function barStyle(colour, size, globalColour, globalSize) {
  const bg = resolveColour(colour, globalColour);
  const sz = size || globalSize || '';
  const ht = sz === 'placeholder-lg' ? '1.2em' : sz === 'placeholder-sm' ? '0.5em' : sz === 'placeholder-xs' ? '0.3em' : '0.75em';
  return {
    display: 'inline-block',
    height: ht,
    background: bg,
    borderRadius: '4px',
    opacity: 0.5,
    verticalAlign: 'middle'
  };
}

// ── Col width → percentage for preview ────────────────────────────────────
function colPercent(col) {
  const map = {
    'col-1': '8.33%',
    'col-2': '16.67%',
    'col-3': '25%',
    'col-4': '33.33%',
    'col-5': '41.67%',
    'col-6': '50%',
    'col-7': '58.33%',
    'col-8': '66.67%',
    'col-9': '75%',
    'col-10': '83.33%',
    'col-11': '91.67%',
    'col-12': '100%',
    'col-auto': 'auto'
  };
  return map[col] || '50%';
}

// ── Default new rows by element type ──────────────────────────────────────
function defaultRow(element) {
  const base = {
    id: makeId(),
    element,
    cols: 'col-6',
    colour: '',
    size: '',
    tag: '',
    spans: []
  };
  switch (element) {
    case 'heading':
      return {
        ...base,
        cols: 'col-5',
        tag: 'h5'
      };
    case 'paragraph':
      return {
        ...base,
        cols: 'col-12',
        spans: [{
          id: makeId('s'),
          cols: 'col-8',
          colour: '',
          size: ''
        }, {
          id: makeId('s'),
          cols: 'col-5',
          colour: '',
          size: ''
        }, {
          id: makeId('s'),
          cols: 'col-7',
          colour: '',
          size: ''
        }]
      };
    case 'button':
      return {
        ...base,
        cols: 'col-4',
        colour: 'bg-primary'
      };
    case 'image':
      return {
        ...base,
        cols: 'col-12',
        tag: '200px'
      };
    // tag stores custom height
    case 'avatar':
      return {
        ...base,
        cols: 'col-1'
      };
    case 'badge':
      return {
        ...base,
        cols: 'col-2',
        size: 'placeholder-sm'
      };
    case 'text':
      return {
        ...base,
        cols: 'col-6',
        size: 'placeholder-sm'
      };
    case 'divider':
      return {
        ...base,
        element: 'divider',
        cols: 'col-12'
      };
    default:
      return base;
  }
}

// ── Edit component ─────────────────────────────────────────────────────────
function Edit({
  attributes,
  setAttributes
}) {
  const {
    rows,
    animation,
    ariaHidden,
    template,
    wrapInCard,
    showImageRow,
    imageHeight,
    globalColour,
    globalSize
  } = attributes;

  // Which row's expand panel is open
  const [expandedId, setExpandedId] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useState)(null);
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps)({
    className: 'wmblocks-placeholder-wrapper'
  });

  // ── Apply template preset ──────────────────────────────────────────
  function applyTemplate(tplKey) {
    const tpl = TEMPLATES[tplKey];
    if (!tpl) return;
    setAttributes({
      template: tplKey,
      rows: tpl.rows,
      wrapInCard: tpl.wrapInCard,
      showImageRow: tpl.showImageRow ?? false,
      imageHeight: tpl.imageHeight ?? '180px'
    });
    setExpandedId(null);
  }

  // ── Row CRUD ───────────────────────────────────────────────────────
  function updateRow(id, patch) {
    setAttributes({
      rows: rows.map(r => r.id === id ? {
        ...r,
        ...patch
      } : r),
      template: 'custom'
    });
  }
  function removeRow(id) {
    if (rows.length <= 1) return;
    setAttributes({
      rows: rows.filter(r => r.id !== id),
      template: 'custom'
    });
    if (expandedId === id) setExpandedId(null);
  }
  function moveRow(id, dir) {
    const idx = rows.findIndex(r => r.id === id);
    const next = [...rows];
    const swap = idx + dir;
    if (swap < 0 || swap >= next.length) return;
    [next[idx], next[swap]] = [next[swap], next[idx]];
    setAttributes({
      rows: next,
      template: 'custom'
    });
  }
  function addRow(element) {
    const row = defaultRow(element);
    setAttributes({
      rows: [...rows, row],
      template: 'custom'
    });
    setExpandedId(row.id);
  }

  // ── Paragraph span CRUD ────────────────────────────────────────────
  function addSpan(rowId) {
    const row = rows.find(r => r.id === rowId);
    if (!row) return;
    const span = {
      id: makeId('s'),
      cols: 'col-6',
      colour: '',
      size: ''
    };
    updateRow(rowId, {
      spans: [...(row.spans || []), span]
    });
  }
  function updateSpan(rowId, spanId, patch) {
    const row = rows.find(r => r.id === rowId);
    if (!row) return;
    updateRow(rowId, {
      spans: row.spans.map(s => s.id === spanId ? {
        ...s,
        ...patch
      } : s)
    });
  }
  function removeSpan(rowId, spanId) {
    const row = rows.find(r => r.id === rowId);
    if (!row || row.spans.length <= 1) return;
    updateRow(rowId, {
      spans: row.spans.filter(s => s.id !== spanId)
    });
  }

  // ── Glow animation CSS for editor ─────────────────────────────────
  const animKeyframes = `
		@keyframes wm-ph-glow { 50% { opacity: 0.2; } }
		@keyframes wm-ph-wave {
			100% { mask-position: -200% 0; -webkit-mask-position: -200% 0; }
		}
	`;
  const animStyle = animation === 'placeholder-glow' ? {
    animation: 'wm-ph-glow 2s ease-in-out infinite'
  } : {};

  // ── Render a single row preview ────────────────────────────────────
  function renderRowPreview(row) {
    const colour = resolveColour(row.colour, globalColour);
    const bs = barStyle(row.colour, row.size, globalColour, globalSize);
    const width = colPercent(row.cols);
    switch (row.element) {
      case 'image':
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
          style: {
            width: '100%',
            height: row.tag || imageHeight || '180px',
            background: colour,
            opacity: 0.4,
            borderRadius: '4px',
            ...animStyle
          }
        });
      case 'avatar':
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
          style: {
            width: '48px',
            height: '48px',
            borderRadius: '50%',
            background: colour,
            opacity: 0.5,
            flexShrink: 0,
            ...animStyle
          }
        });
      case 'divider':
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
          style: {
            height: '16px'
          }
        });
      case 'badge':
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
          style: {
            ...bs,
            width,
            borderRadius: '12px',
            ...animStyle
          }
        });
      case 'button':
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
          style: {
            ...bs,
            width,
            height: '2rem',
            borderRadius: '6px',
            background: resolveColour(row.colour, globalColour),
            ...animStyle
          }
        });
      case 'paragraph':
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
          style: {
            display: 'flex',
            flexWrap: 'wrap',
            gap: '6px',
            ...animStyle
          },
          children: (row.spans || []).map(span => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
            style: {
              ...barStyle(span.colour, span.size, globalColour, globalSize),
              width: colPercent(span.cols)
            }
          }, span.id))
        });
      case 'heading':
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
          style: {
            ...bs,
            width,
            height: row.tag === 'h1' ? '1.8em' : row.tag === 'h2' ? '1.6em' : row.tag === 'h3' ? '1.4em' : row.tag === 'h4' ? '1.2em' : '1em',
            borderRadius: '4px',
            ...animStyle
          }
        });
      default:
        // 'text'
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
          style: {
            ...bs,
            width,
            ...animStyle
          }
        });
    }
  }

  // ── Inspector Controls ─────────────────────────────────────────────
  const inspector = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InspectorControls, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Template', 'wmblocks'),
      initialOpen: true,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
        style: {
          fontSize: '12px',
          color: '#666',
          marginTop: 0
        },
        children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Load a preset skeleton layout. This will replace your current rows.', 'wmblocks')
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
        style: {
          display: 'flex',
          flexDirection: 'column',
          gap: '6px'
        },
        children: Object.entries(TEMPLATES).map(([key, tpl]) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("button", {
          onClick: () => applyTemplate(key),
          style: {
            padding: '7px 12px',
            border: template === key ? '2px solid #7c3aed' : '1px solid #dee2e6',
            borderRadius: '5px',
            background: template === key ? '#f5f0ff' : '#fff',
            color: template === key ? '#4a0db0' : '#333',
            fontWeight: template === key ? 700 : 400,
            fontSize: '12px',
            cursor: 'pointer',
            textAlign: 'left',
            transition: 'all .15s'
          },
          children: [tpl.label, template === key && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
            style: {
              marginLeft: '6px',
              fontSize: '10px',
              opacity: .7
            },
            children: "\u2713 active"
          })]
        }, key))
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Animation & Behaviour', 'wmblocks'),
      initialOpen: true,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Animation', 'wmblocks'),
        value: animation,
        options: ANIMATION_OPTIONS,
        onChange: v => setAttributes({
          animation: v
        }),
        help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Applied to every placeholder row as a parent class.', 'wmblocks')
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('aria-hidden="true"', 'wmblocks'),
        checked: !!ariaHidden,
        onChange: v => setAttributes({
          ariaHidden: v
        }),
        help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Hides the skeleton from screen readers. Recommended — pair with a visually-hidden loading message elsewhere.', 'wmblocks')
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Wrap in Card', 'wmblocks'),
        checked: !!wrapInCard,
        onChange: v => setAttributes({
          wrapInCard: v
        }),
        help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Wraps everything in a Bootstrap .card > .card-body container.', 'wmblocks')
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Top image row', 'wmblocks'),
        checked: !!showImageRow,
        onChange: v => setAttributes({
          showImageRow: v
        }),
        help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Adds a full-width skeleton image bar above the rows (like a card-img-top).', 'wmblocks')
      }), showImageRow && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Image row height', 'wmblocks'),
        value: imageHeight,
        onChange: v => setAttributes({
          imageHeight: v
        }),
        placeholder: "180px"
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Global Defaults', 'wmblocks'),
      initialOpen: false,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
        style: {
          fontSize: '11px',
          color: '#888',
          marginTop: 0
        },
        children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Applied to any row that has no individual colour/size set.', 'wmblocks')
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Default colour', 'wmblocks'),
        value: globalColour,
        options: COLOUR_OPTIONS,
        onChange: v => setAttributes({
          globalColour: v
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Default size', 'wmblocks'),
        value: globalSize,
        options: SIZE_OPTIONS,
        onChange: v => setAttributes({
          globalSize: v
        })
      })]
    })]
  });

  // ── Toolbar ────────────────────────────────────────────────────────
  const toolbar = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.BlockControls, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToolbarGroup, {
      children: Object.entries(TEMPLATES).slice(0, 5).map(([key, tpl]) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToolbarButton, {
        label: tpl.label,
        isPressed: template === key,
        onClick: () => applyTemplate(key),
        children: tpl.label.split(' ')[0]
      }, key))
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToolbarGroup, {
      children: ANIMATION_OPTIONS.map(a => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToolbarButton, {
        label: a.label,
        isPressed: animation === a.value,
        onClick: () => setAttributes({
          animation: a.value
        }),
        children: a.value === 'placeholder-glow' ? '✦' : a.value === 'placeholder-wave' ? '〜' : '○'
      }, a.value))
    })]
  });

  // ── Main render ────────────────────────────────────────────────────
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
    children: [toolbar, inspector, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
      ...blockProps,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("style", {
        children: animKeyframes
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
        className: "wmblocks-ph-meta-strip",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
          className: "wmblocks-ph-chip",
          children: "Placeholder"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
          className: "wmblocks-ph-chip",
          children: template
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
          className: "wmblocks-ph-chip",
          children: animation || 'no animation'
        }), wrapInCard && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
          className: "wmblocks-ph-chip",
          children: "card"
        }), showImageRow && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
          className: "wmblocks-ph-chip",
          children: "img top"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("span", {
          className: "wmblocks-ph-chip",
          children: [rows.length, " rows"]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
        className: "wmblocks-ph-template-bar",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
          className: "wmblocks-ph-template-label",
          children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Template:', 'wmblocks')
        }), Object.entries(TEMPLATES).map(([key, tpl]) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("button", {
          className: 'wmblocks-ph-template-btn' + (template === key ? ' is-active' : ''),
          onClick: () => applyTemplate(key),
          title: tpl.label,
          children: tpl.label
        }, key))]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
        className: 'wmblocks-ph-preview' + (wrapInCard ? ' wmblocks-ph-preview--card' : ''),
        children: [showImageRow && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
          className: "wmblocks-ph-image-top",
          style: {
            height: imageHeight,
            ...animStyle
          }
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
          className: wrapInCard ? 'wmblocks-ph-card-body' : '',
          children: rows.map((row, index) => {
            const isExpanded = expandedId === row.id;
            const isDivider = row.element === 'divider';
            const elemType = ELEMENT_TYPES.find(e => e.value === row.element);
            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
              className: 'wmblocks-ph-row' + (isExpanded ? ' wmblocks-ph-row--expanded' : '') + (isDivider ? ' wmblocks-ph-row--divider' : ''),
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                className: "wmblocks-ph-row__label",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
                  className: "wmblocks-ph-row__type-icon",
                  title: elemType?.desc,
                  children: elemType?.icon
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
                  className: "wmblocks-ph-row__type-name",
                  children: elemType?.label
                }), row.cols && !isDivider && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
                  className: "wmblocks-ph-row__col-badge",
                  children: row.cols
                }), (row.colour || globalColour) && !isDivider && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
                  className: "wmblocks-ph-row__colour-dot",
                  style: {
                    background: resolveColour(row.colour, globalColour)
                  },
                  title: row.colour || globalColour
                }), row.size && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
                  className: "wmblocks-ph-row__size-badge",
                  children: row.size.replace('placeholder-', '')
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
                className: "wmblocks-ph-row__preview",
                children: renderRowPreview(row)
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                className: "wmblocks-ph-row__actions",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("button", {
                  className: "wmblocks-ph-action",
                  onClick: () => moveRow(row.id, -1),
                  disabled: index === 0,
                  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Move up', 'wmblocks'),
                  children: "\u2191"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("button", {
                  className: "wmblocks-ph-action",
                  onClick: () => moveRow(row.id, 1),
                  disabled: index === rows.length - 1,
                  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Move down', 'wmblocks'),
                  children: "\u2193"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("button", {
                  className: 'wmblocks-ph-action wmblocks-ph-action--expand' + (isExpanded ? ' is-active' : ''),
                  onClick: () => setExpandedId(isExpanded ? null : row.id),
                  title: isExpanded ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Close options', 'wmblocks') : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Options', 'wmblocks'),
                  children: isExpanded ? '▲' : '▼'
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("button", {
                  className: "wmblocks-ph-action wmblocks-ph-action--remove",
                  onClick: () => removeRow(row.id),
                  disabled: rows.length <= 1,
                  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Remove row', 'wmblocks'),
                  children: "\u2715"
                })]
              }), isExpanded && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                className: "wmblocks-ph-row__detail",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                  className: "wmblocks-ph-detail-section",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
                    className: "wmblocks-ph-detail-heading",
                    children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Element type', 'wmblocks')
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
                    className: "wmblocks-ph-type-pills",
                    children: ELEMENT_TYPES.map(et => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("button", {
                      className: 'wmblocks-ph-type-pill' + (row.element === et.value ? ' is-active' : ''),
                      onClick: () => updateRow(row.id, {
                        element: et.value,
                        ...(et.value === 'paragraph' && !row.spans?.length ? {
                          spans: defaultRow('paragraph').spans
                        } : {})
                      }),
                      title: et.desc,
                      children: [et.icon, " ", et.label]
                    }, et.value))
                  })]
                }), row.element === 'heading' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                  className: "wmblocks-ph-detail-section",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
                    className: "wmblocks-ph-detail-heading",
                    children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Heading level', 'wmblocks')
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
                    className: "wmblocks-ph-type-pills",
                    children: HEADING_TAG_OPTIONS.map(ht => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("button", {
                      className: 'wmblocks-ph-type-pill' + (row.tag === ht.value ? ' is-active' : ''),
                      onClick: () => updateRow(row.id, {
                        tag: ht.value
                      }),
                      children: ht.label
                    }, ht.value))
                  })]
                }), row.element === 'image' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                  className: "wmblocks-ph-detail-section",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
                    className: "wmblocks-ph-detail-heading",
                    children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Image height', 'wmblocks')
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("input", {
                    type: "text",
                    className: "wmblocks-ph-text-input",
                    value: row.tag || '',
                    onChange: e => updateRow(row.id, {
                      tag: e.target.value
                    }),
                    placeholder: "200px"
                  })]
                }), row.element !== 'divider' && row.element !== 'paragraph' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                  className: "wmblocks-ph-detail-section",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
                    className: "wmblocks-ph-detail-heading",
                    children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Width (col)', 'wmblocks')
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
                    className: "wmblocks-ph-col-grid",
                    children: COL_OPTIONS.map(co => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("button", {
                      className: 'wmblocks-ph-col-btn' + (row.cols === co.value ? ' is-active' : ''),
                      onClick: () => updateRow(row.id, {
                        cols: co.value
                      }),
                      title: co.label,
                      children: co.value.replace('col-', '')
                    }, co.value))
                  })]
                }), row.element !== 'divider' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                  className: "wmblocks-ph-detail-section",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
                    className: "wmblocks-ph-detail-heading",
                    children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Colour', 'wmblocks')
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
                    className: "wmblocks-ph-colour-swatches",
                    children: COLOUR_OPTIONS.map(co => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("button", {
                      className: 'wmblocks-ph-colour-swatch' + (row.colour === co.value ? ' is-active' : ''),
                      style: {
                        background: COLOUR_HEX[co.value],
                        border: co.value === '' ? '1px dashed #aaa' : '2px solid transparent',
                        outline: row.colour === co.value ? '3px solid rgba(124,58,237,.6)' : 'none'
                      },
                      onClick: () => updateRow(row.id, {
                        colour: co.value
                      }),
                      title: co.label
                    }, co.value))
                  })]
                }), !['divider', 'image', 'avatar'].includes(row.element) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                  className: "wmblocks-ph-detail-section",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
                    className: "wmblocks-ph-detail-heading",
                    children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Size', 'wmblocks')
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
                    className: "wmblocks-ph-type-pills",
                    children: SIZE_OPTIONS.map(so => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("button", {
                      className: 'wmblocks-ph-type-pill' + (row.size === so.value ? ' is-active' : ''),
                      onClick: () => updateRow(row.id, {
                        size: so.value
                      }),
                      children: so.label
                    }, so.value))
                  })]
                }), row.element === 'paragraph' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                  className: "wmblocks-ph-detail-section wmblocks-ph-spans-section",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                    className: "wmblocks-ph-spans-header",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
                      className: "wmblocks-ph-detail-heading",
                      children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Text spans', 'wmblocks')
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("button", {
                      className: "wmblocks-ph-span-add",
                      onClick: () => addSpan(row.id),
                      children: ["+ ", (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Add span', 'wmblocks')]
                    })]
                  }), (row.spans || []).map((span, si) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                    className: "wmblocks-ph-span-row",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
                      className: "wmblocks-ph-span-num",
                      children: si + 1
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
                      className: "wmblocks-ph-col-grid wmblocks-ph-col-grid--compact",
                      children: ['col-3', 'col-4', 'col-5', 'col-6', 'col-7', 'col-8', 'col-9', 'col-10', 'col-11', 'col-12'].map(c => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("button", {
                        className: 'wmblocks-ph-col-btn' + (span.cols === c ? ' is-active' : ''),
                        onClick: () => updateSpan(row.id, span.id, {
                          cols: c
                        }),
                        children: c.replace('col-', '')
                      }, c))
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
                      className: "wmblocks-ph-span-colours",
                      children: COLOUR_OPTIONS.slice(0, 5).map(co => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("button", {
                        className: 'wmblocks-ph-colour-swatch wmblocks-ph-colour-swatch--sm' + (span.colour === co.value ? ' is-active' : ''),
                        style: {
                          background: COLOUR_HEX[co.value],
                          border: co.value === '' ? '1px dashed #aaa' : '2px solid transparent'
                        },
                        onClick: () => updateSpan(row.id, span.id, {
                          colour: co.value
                        }),
                        title: co.label
                      }, co.value))
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("button", {
                      className: "wmblocks-ph-span-remove",
                      onClick: () => removeSpan(row.id, span.id),
                      disabled: (row.spans || []).length <= 1,
                      children: "\u2715"
                    })]
                  }, span.id))]
                })]
              })]
            }, row.id);
          })
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
        className: "wmblocks-ph-add-bar",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
          className: "wmblocks-ph-add-label",
          children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('+ Add row:', 'wmblocks')
        }), ELEMENT_TYPES.map(et => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("button", {
          className: "wmblocks-ph-add-btn",
          onClick: () => addRow(et.value),
          title: et.desc,
          children: [et.icon, " ", et.label]
        }, et.value))]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
        className: "wmblocks-ph-footer-hint",
        children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('▼ to configure each row · template shortcuts above · animation & card wrap in sidebar →', 'wmblocks')
      })]
    })]
  });
}

/***/ },

/***/ "./src/placeholder/index.js"
/*!**********************************!*\
  !*** ./src/placeholder/index.js ***!
  \**********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ "./src/placeholder/style.scss");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./src/placeholder/edit.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./block.json */ "./src/placeholder/block.json");




(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_3__.name, {
  edit: _edit__WEBPACK_IMPORTED_MODULE_2__["default"],
  // Fully server-side rendered — no InnerBlocks
  save: () => null
});

/***/ },

/***/ "./src/placeholder/editor.scss"
/*!*************************************!*\
  !*** ./src/placeholder/editor.scss ***!
  \*************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ },

/***/ "./src/placeholder/style.scss"
/*!************************************!*\
  !*** ./src/placeholder/style.scss ***!
  \************************************/
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

/***/ "./src/placeholder/block.json"
/*!************************************!*\
  !*** ./src/placeholder/block.json ***!
  \************************************/
(module) {

module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"wmblocks/placeholder","version":"0.1.0","title":"Placeholder","category":"watermelon-blocks","icon":"image-filter","description":"Bootstrap placeholder / skeleton loader — build skeleton screens row by row. Pick a preset template or craft your own rows of heading, paragraph spans, button, image, avatar, and more. Full control over width, colour, size, and animation.","example":{},"supports":{"html":false,"anchor":true},"attributes":{"rows":{"type":"array","default":[{"id":"r1","element":"heading","cols":"col-6","colour":"","size":"","tag":"h5"},{"id":"r2","element":"paragraph","spans":[{"id":"s1","cols":"col-7","colour":"","size":""},{"id":"s2","cols":"col-4","colour":"","size":""},{"id":"s3","cols":"col-6","colour":"","size":""},{"id":"s4","cols":"col-8","colour":"","size":""}]},{"id":"r3","element":"button","cols":"col-6","colour":"bg-primary","size":"","tag":""}]},"animation":{"type":"string","default":"placeholder-glow"},"ariaHidden":{"type":"boolean","default":true},"template":{"type":"string","default":"custom"},"wrapInCard":{"type":"boolean","default":false},"showImageRow":{"type":"boolean","default":false},"imageHeight":{"type":"string","default":"180px"},"globalColour":{"type":"string","default":""},"globalSize":{"type":"string","default":""}},"textdomain":"wm","editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./style-index.css","render":"file:./render.php","viewScript":"file:./view.js"}');

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
/******/ 			"placeholder/index": 0,
/******/ 			"placeholder/style-index": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["placeholder/style-index"], () => (__webpack_require__("./src/placeholder/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map