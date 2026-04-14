/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/typography/edit.js"
/*!********************************!*\
  !*** ./src/typography/edit.js ***!
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
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./editor.scss */ "./src/typography/editor.scss");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);






// ── Element types ──────────────────────────────────────────────────────────

const ELEMENT_TYPES = [{
  value: 'heading',
  label: 'Heading',
  icon: 'H',
  desc: 'h1–h6 with optional display class & subtext'
}, {
  value: 'lead',
  label: 'Lead paragraph',
  icon: 'P⬆',
  desc: 'Standout paragraph with .lead class'
}, {
  value: 'blockquote',
  label: 'Blockquote',
  icon: '❝',
  desc: 'Styled quote with optional attribution'
}, {
  value: 'list',
  label: 'List',
  icon: '≡',
  desc: 'ul/ol — default, unstyled, or inline'
}, {
  value: 'dl',
  label: 'Description list',
  icon: 'D',
  desc: 'Term/definition pairs in grid layout'
}, {
  value: 'abbr',
  label: 'Abbreviation',
  icon: 'Ab',
  desc: '<abbr> with tooltip title & initialism option'
}, {
  value: 'inline',
  label: 'Inline text',
  icon: 'Aa',
  desc: 'Paragraph with mark, del, ins, s, u, small etc.'
}];
const HEADING_LEVELS = [{
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
const DISPLAY_CLASSES = [{
  label: 'None (regular heading)',
  value: ''
}, {
  label: 'Display 1',
  value: 'display-1'
}, {
  label: 'Display 2',
  value: 'display-2'
}, {
  label: 'Display 3',
  value: 'display-3'
}, {
  label: 'Display 4',
  value: 'display-4'
}, {
  label: 'Display 5',
  value: 'display-5'
}, {
  label: 'Display 6',
  value: 'display-6'
}];
const HEADING_CLASS_TAGS = [{
  label: '<p>',
  value: 'p'
}, {
  label: '<span>',
  value: 'span'
}, {
  label: '<div>',
  value: 'div'
}];
const LIST_STYLE_OPTIONS = [{
  label: 'Default (bulleted/numbered)',
  value: ''
}, {
  label: 'Unstyled (no bullets)',
  value: 'list-unstyled'
}, {
  label: 'Inline (horizontal)',
  value: 'list-inline'
}];
const TEXT_COLORS = [{
  label: 'Default',
  value: ''
}, {
  label: 'Primary',
  value: 'text-primary'
}, {
  label: 'Secondary',
  value: 'text-secondary'
}, {
  label: 'Success',
  value: 'text-success'
}, {
  label: 'Danger',
  value: 'text-danger'
}, {
  label: 'Warning',
  value: 'text-warning'
}, {
  label: 'Info',
  value: 'text-info'
}, {
  label: 'Dark',
  value: 'text-dark'
}, {
  label: 'Muted',
  value: 'text-body-secondary'
}, {
  label: 'Body emphasis',
  value: 'text-body-emphasis'
}];
const DL_COL_OPTIONS = [{
  label: '1/6  (col-sm-2)',
  value: 'col-sm-2'
}, {
  label: '1/4  (col-sm-3)',
  value: 'col-sm-3'
}, {
  label: '1/3  (col-sm-4)',
  value: 'col-sm-4'
}, {
  label: '1/2  (col-sm-6)',
  value: 'col-sm-6'
}];
function uid(p = 'i') {
  return p + Math.random().toString(36).slice(2, 7);
}

// ── Edit component ─────────────────────────────────────────────────────────
function Edit({
  attributes,
  setAttributes
}) {
  const {
    elementType,
    content,
    headingLevel,
    useHeadingClass,
    headingClassTag,
    displayClass,
    subText,
    alignment,
    quoteText,
    quoteSource,
    quoteSourceTitle,
    listType,
    listStyle,
    listItems,
    dlItems,
    dlTermCols,
    dlDefCols,
    abbrText,
    abbrTitle,
    abbrInitialism,
    inlineContent,
    textColor,
    leadContent
  } = attributes;
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps)({
    className: 'wmblocks-typo-wrapper'
  });
  const curType = ELEMENT_TYPES.find(t => t.value === elementType) || ELEMENT_TYPES[0];

  // ── List item CRUD ─────────────────────────────────────────────────
  function updateListItem(id, text) {
    setAttributes({
      listItems: listItems.map(i => i.id === id ? {
        ...i,
        text
      } : i)
    });
  }
  function addListItem() {
    setAttributes({
      listItems: [...listItems, {
        id: uid(),
        text: 'New item'
      }]
    });
  }
  function removeListItem(id) {
    if (listItems.length <= 1) return;
    setAttributes({
      listItems: listItems.filter(i => i.id !== id)
    });
  }
  function moveListItem(id, dir) {
    const idx = listItems.findIndex(i => i.id === id);
    const next = [...listItems];
    const swap = idx + dir;
    if (swap < 0 || swap >= next.length) return;
    [next[idx], next[swap]] = [next[swap], next[idx]];
    setAttributes({
      listItems: next
    });
  }

  // ── DL item CRUD ───────────────────────────────────────────────────
  function updateDlItem(id, patch) {
    setAttributes({
      dlItems: dlItems.map(d => d.id === id ? {
        ...d,
        ...patch
      } : d)
    });
  }
  function addDlItem() {
    setAttributes({
      dlItems: [...dlItems, {
        id: uid('d'),
        term: 'Term',
        definition: 'Definition.'
      }]
    });
  }
  function removeDlItem(id) {
    if (dlItems.length <= 1) return;
    setAttributes({
      dlItems: dlItems.filter(d => d.id !== id)
    });
  }

  // ── Compute figcaption alignment for blockquote ────────────────────
  const figureClass = alignment ? alignment : '';

  // ── Inspector ─────────────────────────────────────────────────────
  const inspector = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InspectorControls, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Element Type', 'wmblocks'),
      initialOpen: true,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
        style: {
          display: 'flex',
          flexDirection: 'column',
          gap: '5px'
        },
        children: ELEMENT_TYPES.map(t => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("button", {
          onClick: () => setAttributes({
            elementType: t.value
          }),
          style: {
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            padding: '8px 12px',
            border: elementType === t.value ? '2px solid #7952b3' : '1px solid #dee2e6',
            borderRadius: '5px',
            background: elementType === t.value ? '#f3eeff' : '#fff',
            color: elementType === t.value ? '#5c2d91' : '#333',
            fontWeight: elementType === t.value ? 700 : 400,
            cursor: 'pointer',
            fontSize: '12px',
            transition: 'all .12s',
            textAlign: 'left'
          },
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
            style: {
              width: '28px',
              height: '28px',
              background: elementType === t.value ? '#7952b3' : '#dee2e6',
              color: elementType === t.value ? '#fff' : '#555',
              borderRadius: '4px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 700,
              fontSize: '11px',
              flexShrink: 0
            },
            children: t.icon
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
              style: {
                fontWeight: 700
              },
              children: t.label
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
              style: {
                fontSize: '10px',
                color: '#888',
                marginTop: '1px'
              },
              children: t.desc
            })]
          }), elementType === t.value && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
            style: {
              marginLeft: 'auto'
            },
            children: "\u2713"
          })]
        }, t.value))
      })
    }), elementType === 'heading' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Heading Options', 'wmblocks'),
      initialOpen: true,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Heading level', 'wmblocks'),
        value: headingLevel,
        options: HEADING_LEVELS,
        onChange: v => setAttributes({
          headingLevel: v
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Display class', 'wmblocks'),
        value: displayClass,
        options: DISPLAY_CLASSES,
        onChange: v => setAttributes({
          displayClass: v
        }),
        help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Display headings are larger, lighter-weight hero headings.', 'wmblocks')
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Use as heading class on different tag', 'wmblocks'),
          checked: !!useHeadingClass,
          onChange: v => setAttributes({
            useHeadingClass: v
          }),
          help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('When ON, outputs a <p class="h2"> instead of <h2> — useful for visual style without semantic heading.', 'wmblocks')
        })
      }), useHeadingClass && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('HTML tag', 'wmblocks'),
        value: headingClassTag,
        options: HEADING_CLASS_TAGS,
        onChange: v => setAttributes({
          headingClassTag: v
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Text colour', 'wmblocks'),
        value: textColor,
        options: TEXT_COLORS,
        onChange: v => setAttributes({
          textColor: v
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Alignment', 'wmblocks'),
        value: alignment,
        options: [{
          label: 'Default',
          value: ''
        }, {
          label: 'Left',
          value: 'text-start'
        }, {
          label: 'Center',
          value: 'text-center'
        }, {
          label: 'Right',
          value: 'text-end'
        }],
        onChange: v => setAttributes({
          alignment: v
        })
      })]
    }), elementType === 'lead' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Lead Options', 'wmblocks'),
      initialOpen: true,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Text colour', 'wmblocks'),
        value: textColor,
        options: TEXT_COLORS,
        onChange: v => setAttributes({
          textColor: v
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Alignment', 'wmblocks'),
        value: alignment,
        options: [{
          label: 'Default',
          value: ''
        }, {
          label: 'Left',
          value: 'text-start'
        }, {
          label: 'Center',
          value: 'text-center'
        }, {
          label: 'Right',
          value: 'text-end'
        }],
        onChange: v => setAttributes({
          alignment: v
        })
      })]
    }), elementType === 'blockquote' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Blockquote Options', 'wmblocks'),
      initialOpen: true,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Alignment', 'wmblocks'),
        value: alignment,
        options: [{
          label: 'Left (default)',
          value: ''
        }, {
          label: 'Center',
          value: 'text-center'
        }, {
          label: 'Right',
          value: 'text-end'
        }],
        onChange: v => setAttributes({
          alignment: v
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
        style: {
          fontSize: '11px',
          color: '#888',
          margin: '4px 0'
        },
        children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Edit quote text, attribution, and source title directly on the canvas.', 'wmblocks')
      })]
    }), elementType === 'list' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('List Options', 'wmblocks'),
      initialOpen: true,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('List type', 'wmblocks'),
        value: listType,
        options: [{
          label: 'Unordered (ul)',
          value: 'ul'
        }, {
          label: 'Ordered (ol)',
          value: 'ol'
        }],
        onChange: v => setAttributes({
          listType: v
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('List style', 'wmblocks'),
        value: listStyle,
        options: LIST_STYLE_OPTIONS,
        onChange: v => setAttributes({
          listStyle: v
        }),
        help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Unstyled removes bullets. Inline displays items horizontally.', 'wmblocks')
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Text colour', 'wmblocks'),
        value: textColor,
        options: TEXT_COLORS,
        onChange: v => setAttributes({
          textColor: v
        })
      })]
    }), elementType === 'dl' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Description List Options', 'wmblocks'),
      initialOpen: true,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Term column width', 'wmblocks'),
        value: dlTermCols,
        options: DL_COL_OPTIONS,
        onChange: v => {
          const defMap = {
            'col-sm-2': 'col-sm-10',
            'col-sm-3': 'col-sm-9',
            'col-sm-4': 'col-sm-8',
            'col-sm-6': 'col-sm-6'
          };
          setAttributes({
            dlTermCols: v,
            dlDefCols: defMap[v] || 'col-sm-9'
          });
        }
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("p", {
        style: {
          fontSize: '11px',
          color: '#888',
          margin: '0'
        },
        children: [(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Definition col: ', 'wmblocks'), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("code", {
          children: dlDefCols
        })]
      })]
    }), elementType === 'abbr' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Abbreviation Options', 'wmblocks'),
      initialOpen: true,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Full title (tooltip)', 'wmblocks'),
        value: abbrTitle,
        onChange: v => setAttributes({
          abbrTitle: v
        }),
        help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Shown as a tooltip on hover.', 'wmblocks')
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Initialism (.initialism)', 'wmblocks'),
          checked: !!abbrInitialism,
          onChange: v => setAttributes({
            abbrInitialism: v
          }),
          help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Slightly smaller font-size for capital-letter abbreviations.', 'wmblocks')
        })
      })]
    })]
  });

  // ── Toolbar ────────────────────────────────────────────────────────
  const toolbar = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.BlockControls, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToolbarGroup, {
      children: ELEMENT_TYPES.map(t => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToolbarButton, {
        label: t.label,
        isPressed: elementType === t.value,
        onClick: () => setAttributes({
          elementType: t.value
        }),
        children: t.icon
      }, t.value))
    }), elementType === 'heading' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToolbarGroup, {
      children: HEADING_LEVELS.map(l => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToolbarButton, {
        label: l.label,
        isPressed: headingLevel === l.value && !displayClass,
        onClick: () => setAttributes({
          headingLevel: l.value,
          displayClass: ''
        }),
        children: l.label
      }, l.value))
    }), elementType === 'heading' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToolbarGroup, {
      children: [1, 2, 3, 4, 5, 6].map(n => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToolbarButton, {
        label: 'Display ' + n,
        isPressed: displayClass === 'display-' + n,
        onClick: () => setAttributes({
          displayClass: displayClass === 'display-' + n ? '' : 'display-' + n
        }),
        children: ["D", n]
      }, n))
    }), ['heading', 'lead', 'blockquote'].includes(elementType) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToolbarGroup, {
      children: ['', 'text-start', 'text-center', 'text-end'].map(a => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToolbarButton, {
        icon: {
          '': 'editor-alignleft',
          'text-start': 'editor-alignleft',
          'text-center': 'editor-aligncenter',
          'text-end': 'editor-alignright'
        }[a],
        label: a || 'Default',
        isPressed: alignment === a,
        onClick: () => setAttributes({
          alignment: a
        })
      }, a))
    })]
  });

  // ── Canvas renders per element type ───────────────────────────────

  const renderHeading = () => {
    const Tag = useHeadingClass ? headingClassTag : headingLevel;
    const classNames = [useHeadingClass ? headingLevel : '', displayClass, alignment, textColor].filter(Boolean).join(' ');
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(Tag, {
      className: classNames || undefined,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
        tagName: "span",
        value: content,
        onChange: v => setAttributes({
          content: v
        }),
        allowedFormats: ['core/bold', 'core/italic', 'core/link'],
        placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Heading text…', 'wmblocks')
      }), subText ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
        children: [' ', /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
          tagName: "small",
          className: "text-body-secondary",
          value: subText,
          onChange: v => setAttributes({
            subText: v
          }),
          allowedFormats: [],
          placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Secondary text…', 'wmblocks')
        })]
      }) : null]
    });
  };
  const renderLead = () => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
    tagName: "p",
    className: ['lead', alignment, textColor].filter(Boolean).join(' '),
    value: leadContent,
    onChange: v => setAttributes({
      leadContent: v
    }),
    allowedFormats: ['core/bold', 'core/italic', 'core/link'],
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Lead paragraph text…', 'wmblocks')
  });
  const renderBlockquote = () => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("figure", {
    className: figureClass || undefined,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("blockquote", {
      className: "blockquote",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
        tagName: "p",
        value: quoteText,
        onChange: v => setAttributes({
          quoteText: v
        }),
        allowedFormats: ['core/bold', 'core/italic'],
        placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Quote text…', 'wmblocks')
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("figcaption", {
      className: "blockquote-footer wmblocks-typo-bq-footer",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
        tagName: "span",
        value: quoteSource,
        onChange: v => setAttributes({
          quoteSource: v
        }),
        allowedFormats: [],
        placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Author name…', 'wmblocks')
      }), ' ', /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
        tagName: "cite",
        value: quoteSourceTitle,
        onChange: v => setAttributes({
          quoteSourceTitle: v
        }),
        allowedFormats: [],
        placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Source title (optional)…', 'wmblocks')
      })]
    })]
  });
  const renderList = () => {
    const Tag = listType === 'ol' ? 'ol' : 'ul';
    const liClass = listStyle === 'list-inline' ? 'list-inline-item' : '';
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(Tag, {
        className: [listStyle, textColor].filter(Boolean).join(' ') || undefined,
        children: listItems.map((item, idx) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("li", {
          className: liClass || undefined,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
            tagName: "span",
            value: item.text,
            onChange: v => updateListItem(item.id, v),
            allowedFormats: ['core/bold', 'core/italic', 'core/link'],
            placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('List item…', 'wmblocks')
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("span", {
            className: "wmblocks-typo-list-actions",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("button", {
              onClick: () => moveListItem(item.id, -1),
              disabled: idx === 0,
              title: "Up",
              children: "\u2191"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("button", {
              onClick: () => moveListItem(item.id, 1),
              disabled: idx === listItems.length - 1,
              title: "Down",
              children: "\u2193"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("button", {
              onClick: () => removeListItem(item.id),
              disabled: listItems.length <= 1,
              title: "Remove",
              className: "wmblocks-typo-remove",
              children: "\u2715"
            })]
          })]
        }, item.id))
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("button", {
        className: "wmblocks-typo-add-btn",
        onClick: addListItem,
        children: ["+ ", (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Add item', 'wmblocks')]
      })]
    });
  };
  const renderDl = () => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("dl", {
      className: "row",
      children: dlItems.map(item => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("dt", {
          className: dlTermCols,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
            tagName: "span",
            value: item.term,
            onChange: v => updateDlItem(item.id, {
              term: v
            }),
            allowedFormats: ['core/bold'],
            placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Term…', 'wmblocks')
          })
        }, item.id + '-t'), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("dd", {
          className: dlDefCols,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
            tagName: "span",
            value: item.definition,
            onChange: v => updateDlItem(item.id, {
              definition: v
            }),
            allowedFormats: ['core/bold', 'core/italic'],
            placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Definition…', 'wmblocks')
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("button", {
            className: "wmblocks-typo-remove wmblocks-typo-dl-remove",
            onClick: () => removeDlItem(item.id),
            disabled: dlItems.length <= 1,
            title: "Remove pair",
            children: "\u2715"
          })]
        }, item.id + '-d')]
      }))
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("button", {
      className: "wmblocks-typo-add-btn",
      onClick: addDlItem,
      children: ["+ ", (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Add term/definition pair', 'wmblocks')]
    })]
  });
  const renderAbbr = () => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("p", {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("abbr", {
      title: abbrTitle,
      className: abbrInitialism ? 'initialism' : undefined,
      style: {
        cursor: 'help',
        textDecoration: 'underline dotted'
      },
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
        tagName: "span",
        value: abbrText,
        onChange: v => setAttributes({
          abbrText: v
        }),
        allowedFormats: [],
        placeholder: "HTML"
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("span", {
      style: {
        marginLeft: '8px',
        fontSize: '11px',
        color: '#888',
        fontStyle: 'italic'
      },
      children: ["\u2190 title: ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("code", {
        children: abbrTitle || '…'
      }), abbrInitialism ? ' · .initialism' : '']
    })]
  });
  const renderInline = () => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
      style: {
        fontSize: '11px',
        color: '#888',
        marginBottom: '6px',
        fontStyle: 'italic'
      },
      children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Use the Format toolbar (Bold, Italic, etc.) to apply inline styles. HTML inline elements like <mark>, <del>, <ins>, <u>, <s>, <small> are supported via the Custom HTML format or the rendered output below.', 'wmblocks')
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
      className: "wmblocks-typo-inline-examples",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("p", {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("mark", {
          style: {
            padding: '.1875em',
            backgroundColor: '#fff3cd'
          },
          children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Highlighted', 'wmblocks')
        }), " \u2014 ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("code", {
          children: "<mark>"
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("p", {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("del", {
          children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Deleted text', 'wmblocks')
        }), " \u2014 ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("code", {
          children: "<del>"
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("p", {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("s", {
          children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('No longer accurate', 'wmblocks')
        }), " \u2014 ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("code", {
          children: "<s>"
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("p", {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("ins", {
          children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Inserted text', 'wmblocks')
        }), " \u2014 ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("code", {
          children: "<ins>"
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("p", {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("u", {
          children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Underlined', 'wmblocks')
        }), " \u2014 ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("code", {
          children: "<u>"
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("p", {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("small", {
          children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Fine print / small', 'wmblocks')
        }), " \u2014 ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("code", {
          children: "<small>"
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("p", {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("strong", {
          children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Bold / strong', 'wmblocks')
        }), " \u2014 ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("code", {
          children: "<strong>"
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("p", {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("em", {
          children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Italic / em', 'wmblocks')
        }), " \u2014 ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("code", {
          children: "<em>"
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
      style: {
        marginTop: '12px',
        fontSize: '11px',
        color: '#555',
        background: '#f8f9fa',
        padding: '8px 12px',
        borderRadius: '4px',
        border: '1px solid #dee2e6'
      },
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("strong", {
        children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Tip:', 'wmblocks')
      }), " ", (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Use a core/html block or the core/paragraph block with custom HTML to wrap text in these semantic tags. This block renders a reference card showing all available inline elements.', 'wmblocks')]
    })]
  });

  // ── Canvas renderer ────────────────────────────────────────────────
  const renderCanvas = () => {
    switch (elementType) {
      case 'heading':
        return renderHeading();
      case 'lead':
        return renderLead();
      case 'blockquote':
        return renderBlockquote();
      case 'list':
        return renderList();
      case 'dl':
        return renderDl();
      case 'abbr':
        return renderAbbr();
      case 'inline':
        return renderInline();
      default:
        return renderHeading();
    }
  };

  // ── Sub-text toggle in heading ─────────────────────────────────────
  const headingSubTextToggle = elementType === 'heading' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
    className: "wmblocks-typo-subtext-toggle",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
      children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Sub-text:', 'wmblocks')
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("button", {
      className: 'wmblocks-typo-pill' + (subText !== undefined ? '' : ''),
      onClick: () => setAttributes({
        subText: subText ? '' : 'Secondary text'
      }),
      children: subText ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('✕ Remove', 'wmblocks') : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('+ Add secondary text', 'wmblocks')
    })]
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
    children: [toolbar, inspector, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
      ...blockProps,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
        className: "wmblocks-typo-meta-strip",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
          className: "wmblocks-typo-chip wmblocks-typo-chip--main",
          children: curType.icon
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
          className: "wmblocks-typo-chip wmblocks-typo-chip--type",
          children: curType.label
        }), elementType === 'heading' && headingLevel && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
          className: "wmblocks-typo-chip",
          children: headingLevel.toUpperCase()
        }), elementType === 'heading' && displayClass && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
          className: "wmblocks-typo-chip",
          children: displayClass
        }), elementType === 'heading' && useHeadingClass && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("span", {
          className: "wmblocks-typo-chip",
          children: ["<", headingClassTag, " class=\"", headingLevel, "\">"]
        }), elementType === 'list' && listStyle && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
          className: "wmblocks-typo-chip",
          children: listStyle
        }), elementType === 'blockquote' && alignment && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
          className: "wmblocks-typo-chip",
          children: alignment
        }), textColor && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
          className: "wmblocks-typo-chip",
          children: textColor
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
        className: "wmblocks-typo-type-bar",
        children: ELEMENT_TYPES.map(t => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("button", {
          className: 'wmblocks-typo-type-btn' + (elementType === t.value ? ' is-active' : ''),
          onClick: () => setAttributes({
            elementType: t.value
          }),
          title: t.desc,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
            className: "wmblocks-typo-type-icon",
            children: t.icon
          }), t.label]
        }, t.value))
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
        className: "wmblocks-typo-options-bar",
        children: [elementType === 'heading' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
            className: "wmblocks-typo-bar-label",
            children: "Level:"
          }), HEADING_LEVELS.map(l => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("button", {
            className: 'wmblocks-typo-pill' + (headingLevel === l.value ? ' is-active' : ''),
            onClick: () => setAttributes({
              headingLevel: l.value
            }),
            children: l.label
          }, l.value)), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
            className: "wmblocks-typo-bar-sep"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
            className: "wmblocks-typo-bar-label",
            children: "Display:"
          }), [1, 2, 3, 4, 5, 6].map(n => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("button", {
            className: 'wmblocks-typo-pill' + (displayClass === 'display-' + n ? ' is-active' : ''),
            onClick: () => setAttributes({
              displayClass: displayClass === 'display-' + n ? '' : 'display-' + n
            }),
            children: ["D", n]
          }, n))]
        }), elementType === 'list' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
            className: "wmblocks-typo-bar-label",
            children: "Type:"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("button", {
            className: 'wmblocks-typo-pill' + (listType === 'ul' ? ' is-active' : ''),
            onClick: () => setAttributes({
              listType: 'ul'
            }),
            children: "\u2022 ul"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("button", {
            className: 'wmblocks-typo-pill' + (listType === 'ol' ? ' is-active' : ''),
            onClick: () => setAttributes({
              listType: 'ol'
            }),
            children: "1. ol"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
            className: "wmblocks-typo-bar-sep"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
            className: "wmblocks-typo-bar-label",
            children: "Style:"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("button", {
            className: 'wmblocks-typo-pill' + (listStyle === '' ? ' is-active' : ''),
            onClick: () => setAttributes({
              listStyle: ''
            }),
            children: "Default"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("button", {
            className: 'wmblocks-typo-pill' + (listStyle === 'list-unstyled' ? ' is-active' : ''),
            onClick: () => setAttributes({
              listStyle: 'list-unstyled'
            }),
            children: "Unstyled"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("button", {
            className: 'wmblocks-typo-pill' + (listStyle === 'list-inline' ? ' is-active' : ''),
            onClick: () => setAttributes({
              listStyle: 'list-inline'
            }),
            children: "Inline"
          })]
        }), elementType === 'blockquote' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
            className: "wmblocks-typo-bar-label",
            children: "Align:"
          }), [{
            v: '',
            l: 'Left'
          }, {
            v: 'text-center',
            l: 'Center'
          }, {
            v: 'text-end',
            l: 'Right'
          }].map(a => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("button", {
            className: 'wmblocks-typo-pill' + (alignment === a.v ? ' is-active' : ''),
            onClick: () => setAttributes({
              alignment: a.v
            }),
            children: a.l
          }, a.v))]
        }), elementType === 'abbr' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("button", {
            className: 'wmblocks-typo-pill' + (abbrInitialism ? ' is-active' : ''),
            onClick: () => setAttributes({
              abbrInitialism: !abbrInitialism
            }),
            children: [".initialism ", abbrInitialism ? 'ON' : 'off']
          })
        })]
      }), headingSubTextToggle, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
        className: "wmblocks-typo-content-area",
        children: renderCanvas()
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
        className: "wmblocks-typo-footer-hint",
        children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Click text to edit inline · switch type in bar above · full options in sidebar →', 'wmblocks')
      })]
    })]
  });
}

/***/ },

/***/ "./src/typography/index.js"
/*!*********************************!*\
  !*** ./src/typography/index.js ***!
  \*********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ "./src/typography/style.scss");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./src/typography/edit.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./block.json */ "./src/typography/block.json");




(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_3__.name, {
  edit: _edit__WEBPACK_IMPORTED_MODULE_2__["default"],
  // Fully server-side rendered
  save: () => null
});

/***/ },

/***/ "./src/typography/editor.scss"
/*!************************************!*\
  !*** ./src/typography/editor.scss ***!
  \************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ },

/***/ "./src/typography/style.scss"
/*!***********************************!*\
  !*** ./src/typography/style.scss ***!
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

/***/ "./src/typography/block.json"
/*!***********************************!*\
  !*** ./src/typography/block.json ***!
  \***********************************/
(module) {

module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"wmblocks/typography","version":"0.1.0","title":"Typography","category":"watermelon-blocks","icon":"editor-paragraph","description":"Bootstrap typography toolkit — one block for all Bootstrap typographic elements: headings (h1–h6 + display classes), lead paragraphs, blockquotes with attribution, unstyled/inline lists, description lists, abbreviations, and inline text elements (mark, del, ins, s, u, small, strong, em). Select the element type and configure everything inline.","example":{},"supports":{"html":false,"anchor":true},"attributes":{"elementType":{"type":"string","default":"heading"},"content":{"type":"string","default":"Bootstrap heading"},"headingLevel":{"type":"string","default":"h2"},"useHeadingClass":{"type":"boolean","default":false},"headingClassTag":{"type":"string","default":"p"},"displayClass":{"type":"string","default":""},"subText":{"type":"string","default":""},"alignment":{"type":"string","default":""},"quoteText":{"type":"string","default":"A well-known quote, contained in a blockquote element."},"quoteSource":{"type":"string","default":""},"quoteSourceTitle":{"type":"string","default":""},"listType":{"type":"string","default":"ul"},"listStyle":{"type":"string","default":""},"listItems":{"type":"array","default":[{"id":"i1","text":"First item"},{"id":"i2","text":"Second item"},{"id":"i3","text":"Third item"}]},"dlItems":{"type":"array","default":[{"id":"d1","term":"Term","definition":"Definition for the term."},{"id":"d2","term":"Another term","definition":"This definition is short."}]},"dlTermCols":{"type":"string","default":"col-sm-3"},"dlDefCols":{"type":"string","default":"col-sm-9"},"abbrText":{"type":"string","default":"HTML"},"abbrTitle":{"type":"string","default":"HyperText Markup Language"},"abbrInitialism":{"type":"boolean","default":false},"inlineContent":{"type":"string","default":"You can use the <mark>mark tag</mark> to highlight text, or use <strong>bold</strong> and <em>italic</em> styles."},"textColor":{"type":"string","default":""},"leadContent":{"type":"string","default":"This is a lead paragraph. It stands out from regular paragraphs."}},"textdomain":"wm","editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./style-index.css","render":"file:./render.php","viewScript":"file:./view.js"}');

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
/******/ 			"typography/index": 0,
/******/ 			"typography/style-index": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["typography/style-index"], () => (__webpack_require__("./src/typography/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map