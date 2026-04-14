/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/table/edit.js"
/*!***************************!*\
  !*** ./src/table/edit.js ***!
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
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./editor.scss */ "./src/table/editor.scss");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);






// ── Constants ──────────────────────────────────────────────────────────────

const CELL_COLOURS = [{
  label: 'None',
  value: '',
  hex: 'transparent',
  border: '#dee2e6'
}, {
  label: 'Primary',
  value: 'table-primary',
  hex: '#cfe2ff',
  border: '#9ec5fe'
}, {
  label: 'Secondary',
  value: 'table-secondary',
  hex: '#e2e3e5',
  border: '#c4c8cb'
}, {
  label: 'Success',
  value: 'table-success',
  hex: '#d1e7dd',
  border: '#a3cfbb'
}, {
  label: 'Danger',
  value: 'table-danger',
  hex: '#f8d7da',
  border: '#f1aeb5'
}, {
  label: 'Warning',
  value: 'table-warning',
  hex: '#fff3cd',
  border: '#ffe69c'
}, {
  label: 'Info',
  value: 'table-info',
  hex: '#cff4fc',
  border: '#9eeaf9'
}, {
  label: 'Light',
  value: 'table-light',
  hex: '#f8f9fa',
  border: '#dee2e6'
}, {
  label: 'Dark',
  value: 'table-dark',
  hex: '#212529',
  border: '#373b3e'
}, {
  label: 'Active',
  value: 'table-active',
  hex: '#e9ecef',
  border: '#dee2e6'
}];
const TABLE_VARIANTS = [{
  label: 'Default',
  value: ''
}, {
  label: 'Primary',
  value: 'table-primary'
}, {
  label: 'Secondary',
  value: 'table-secondary'
}, {
  label: 'Success',
  value: 'table-success'
}, {
  label: 'Danger',
  value: 'table-danger'
}, {
  label: 'Warning',
  value: 'table-warning'
}, {
  label: 'Info',
  value: 'table-info'
}, {
  label: 'Light',
  value: 'table-light'
}, {
  label: 'Dark',
  value: 'table-dark'
}];
const HEAD_VARIANTS = [{
  label: 'Default',
  value: ''
}, {
  label: 'Dark',
  value: 'table-dark'
}, {
  label: 'Light',
  value: 'table-light'
}, {
  label: 'Primary',
  value: 'table-primary'
}, {
  label: 'Secondary',
  value: 'table-secondary'
}, {
  label: 'Success',
  value: 'table-success'
}, {
  label: 'Danger',
  value: 'table-danger'
}, {
  label: 'Warning',
  value: 'table-warning'
}, {
  label: 'Info',
  value: 'table-info'
}];
const RESPONSIVE_OPTIONS = [{
  label: 'None',
  value: ''
}, {
  label: 'Always (xs+)',
  value: 'responsive'
}, {
  label: 'SM breakpoint',
  value: 'responsive-sm'
}, {
  label: 'MD breakpoint',
  value: 'responsive-md'
}, {
  label: 'LG breakpoint',
  value: 'responsive-lg'
}, {
  label: 'XL breakpoint',
  value: 'responsive-xl'
}, {
  label: 'XXL breakpoint',
  value: 'responsive-xxl'
}];
const ALIGN_OPTIONS = [{
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
}];
const BORDER_COLOURS = [{
  label: 'Default',
  value: ''
}, {
  label: 'Primary',
  value: 'border-primary'
}, {
  label: 'Secondary',
  value: 'border-secondary'
}, {
  label: 'Success',
  value: 'border-success'
}, {
  label: 'Danger',
  value: 'border-danger'
}, {
  label: 'Warning',
  value: 'border-warning'
}, {
  label: 'Info',
  value: 'border-info'
}, {
  label: 'Dark',
  value: 'border-dark'
}, {
  label: 'Light',
  value: 'border-light'
}];
const VALIGN_OPTIONS = [{
  label: 'Default',
  value: ''
}, {
  label: 'Top',
  value: 'align-top'
}, {
  label: 'Middle',
  value: 'align-middle'
}, {
  label: 'Bottom',
  value: 'align-bottom'
}];

// ── ID helpers ─────────────────────────────────────────────────────────────
function uid(prefix = 'c') {
  return prefix + Math.random().toString(36).slice(2, 7);
}
function newCell(tag = 'td', content = '') {
  return {
    id: uid(),
    content,
    tag,
    colour: '',
    align: ''
  };
}
function newRow(colCount = 4, isHead = false) {
  return {
    id: uid('r'),
    colour: '',
    cells: Array.from({
      length: colCount
    }, () => newCell(isHead ? 'th' : 'td', ''))
  };
}

// ── Colour hex lookup ──────────────────────────────────────────────────────
function cellColourHex(value) {
  return CELL_COLOURS.find(c => c.value === value)?.hex || 'transparent';
}

// ── Edit component ─────────────────────────────────────────────────────────
function Edit({
  attributes,
  setAttributes
}) {
  const {
    head,
    body,
    foot,
    caption,
    captionSide,
    showHead,
    showFoot,
    tableVariant,
    headVariant,
    striped,
    stripedColumns,
    hover,
    bordered,
    borderColour,
    borderless,
    small,
    responsive,
    verticalAlign,
    divider
  } = attributes;

  // Selected cell — { section: 'head'|'body'|'foot', rowIdx, cellIdx }
  const [selected, setSelected] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useState)(null);
  // Whether the cell options popover is visible
  const [showCellOpts, setShowCellOpts] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps)({
    className: 'wmblocks-table-wrapper'
  });
  const colCount = head[0]?.cells?.length || body[0]?.cells?.length || 4;

  // ── Section helpers ──────────────────────────────────────────────
  function getSection(section) {
    return section === 'head' ? head : section === 'foot' ? foot : body;
  }
  function setSection(section, newData) {
    if (section === 'head') setAttributes({
      head: newData
    });else if (section === 'foot') setAttributes({
      foot: newData
    });else setAttributes({
      body: newData
    });
  }

  // ── Cell content update ───────────────────────────────────────────
  function updateCell(section, rowIdx, cellIdx, patch) {
    const rows = getSection(section).map((row, ri) => ri !== rowIdx ? row : {
      ...row,
      cells: row.cells.map((cell, ci) => ci !== cellIdx ? cell : {
        ...cell,
        ...patch
      })
    });
    setSection(section, rows);
  }

  // ── Row colour update ─────────────────────────────────────────────
  function updateRowColour(section, rowIdx, colour) {
    const rows = getSection(section).map((row, ri) => ri !== rowIdx ? row : {
      ...row,
      colour
    });
    setSection(section, rows);
  }

  // ── Add / Remove row ──────────────────────────────────────────────
  function addRow(section, after = null) {
    const rows = getSection(section);
    const isHead = section === 'head';
    const newR = newRow(colCount, isHead);
    let updated;
    if (after === null) {
      updated = [...rows, newR];
    } else {
      updated = [...rows];
      updated.splice(after + 1, 0, newR);
    }
    setSection(section, updated);
  }
  function removeRow(section, rowIdx) {
    const rows = getSection(section);
    if (rows.length <= 1 && section === 'body') return; // keep at least 1 body row
    setSection(section, rows.filter((_, i) => i !== rowIdx));
    setSelected(null);
  }
  function moveRow(section, rowIdx, dir) {
    const rows = [...getSection(section)];
    const swap = rowIdx + dir;
    if (swap < 0 || swap >= rows.length) return;
    [rows[rowIdx], rows[swap]] = [rows[swap], rows[rowIdx]];
    setSection(section, rows);
  }

  // ── Add / Remove column ───────────────────────────────────────────
  function addColumn(after = null) {
    const insertCell = (cells, isHead) => {
      const tag = isHead ? 'th' : 'td';
      const cell = newCell(tag, '');
      if (after === null) return [...cells, cell];
      const next = [...cells];
      next.splice(after + 1, 0, cell);
      return next;
    };
    setAttributes({
      head: head.map(r => ({
        ...r,
        cells: insertCell(r.cells, true)
      })),
      body: body.map(r => ({
        ...r,
        cells: insertCell(r.cells, false)
      })),
      foot: foot.map(r => ({
        ...r,
        cells: insertCell(r.cells, false)
      }))
    });
  }
  function removeColumn(cellIdx) {
    if (colCount <= 1) return;
    const rm = rows => rows.map(r => ({
      ...r,
      cells: r.cells.filter((_, ci) => ci !== cellIdx)
    }));
    setAttributes({
      head: rm(head),
      body: rm(body),
      foot: rm(foot)
    });
    setSelected(null);
  }

  // ── Toggle th/td ──────────────────────────────────────────────────
  function toggleCellTag(section, rowIdx, cellIdx) {
    const cell = getSection(section)[rowIdx]?.cells[cellIdx];
    if (!cell) return;
    updateCell(section, rowIdx, cellIdx, {
      tag: cell.tag === 'th' ? 'td' : 'th'
    });
  }

  // ── Selected cell accessors ────────────────────────────────────────
  const selCell = selected ? getSection(selected.section)?.[selected.rowIdx]?.cells?.[selected.cellIdx] : null;
  const selRow = selected ? getSection(selected.section)?.[selected.rowIdx] : null;

  // ── Build table class string for preview ──────────────────────────
  const tableClass = ['table', tableVariant, striped ? 'table-striped' : '', stripedColumns ? 'table-striped-columns' : '', hover ? 'table-hover' : '', bordered ? 'table-bordered' : '', borderColour && bordered ? borderColour : '', borderless ? 'table-borderless' : '', small ? 'table-sm' : '', verticalAlign || ''].filter(Boolean).join(' ');

  // ── Render a section (head / body / foot) ─────────────────────────
  const renderSection = (section, rows, isHead = false, isFoot = false) => {
    if (!rows || rows.length === 0) return null;
    return rows.map((row, rowIdx) => {
      const rowColour = row.colour ? cellColourHex(row.colour) : '';
      const isLastRow = rowIdx === rows.length - 1;
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("tr", {
        style: rowColour ? {
          background: rowColour
        } : {},
        children: [row.cells.map((cell, cellIdx) => {
          const isSel = selected?.section === section && selected.rowIdx === rowIdx && selected.cellIdx === cellIdx;
          const Tag = cell.tag || (isHead ? 'th' : 'td');
          const bgHex = cellColourHex(cell.colour);
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(Tag, {
            scope: Tag === 'th' ? isHead ? 'col' : 'row' : undefined,
            className: [cell.colour, cell.align].filter(Boolean).join(' '),
            style: {
              background: bgHex !== 'transparent' ? bgHex : undefined,
              outline: isSel ? '2px solid #0d6efd' : undefined,
              outlineOffset: isSel ? '-2px' : undefined,
              position: 'relative',
              cursor: 'text',
              minWidth: '60px',
              padding: '6px 8px'
            },
            onClick: () => {
              setSelected({
                section,
                rowIdx,
                cellIdx
              });
              setShowCellOpts(false);
            },
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
              tagName: "span",
              value: cell.content,
              onChange: v => updateCell(section, rowIdx, cellIdx, {
                content: v
              }),
              allowedFormats: ['core/bold', 'core/italic', 'core/link', 'core/code'],
              placeholder: isHead ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Header', 'wmblocks') : '—',
              style: {
                display: 'block',
                minWidth: '40px',
                outline: 'none'
              }
            })
          }, cell.id);
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("td", {
          className: "wmblocks-table-row-actions",
          style: {
            padding: '0 4px',
            border: 'none',
            verticalAlign: 'middle',
            whiteSpace: 'nowrap'
          },
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
            className: "wmblocks-table-row-action-group",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("button", {
              className: "wmblocks-table-action",
              onClick: () => moveRow(section, rowIdx, -1),
              disabled: rowIdx === 0,
              title: "Move up",
              children: "\u2191"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("button", {
              className: "wmblocks-table-action",
              onClick: () => moveRow(section, rowIdx, 1),
              disabled: isLastRow,
              title: "Move down",
              children: "\u2193"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("button", {
              className: "wmblocks-table-action",
              onClick: () => addRow(section, rowIdx),
              title: "Insert row below",
              children: "+"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("button", {
              className: "wmblocks-table-action wmblocks-table-action--danger",
              onClick: () => removeRow(section, rowIdx),
              disabled: rows.length <= 1 && section === 'body',
              title: "Remove row",
              children: "\u2715"
            })]
          })
        })]
      }, row.id);
    });
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.BlockControls, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToolbarGroup, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToolbarButton, {
          icon: "table-row-before",
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Add row above', 'wmblocks'),
          onClick: () => {
            const rowIdx = selected?.section === 'body' ? selected.rowIdx : null;
            if (rowIdx !== null && rowIdx > 0) addRow('body', rowIdx - 1);else addRow('body', null);
          }
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToolbarButton, {
          icon: "table-row-after",
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Add row below', 'wmblocks'),
          onClick: () => {
            const rowIdx = selected?.section === 'body' ? selected.rowIdx : body.length - 1;
            addRow('body', rowIdx);
          }
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToolbarButton, {
          icon: "table-row-delete",
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Remove row', 'wmblocks'),
          onClick: () => {
            if (selected?.section === 'body') removeRow('body', selected.rowIdx);
          },
          disabled: !selected || selected.section !== 'body'
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToolbarGroup, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToolbarButton, {
          icon: "table-col-before",
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Add column before', 'wmblocks'),
          onClick: () => {
            const ci = selected?.cellIdx ?? null;
            if (ci !== null && ci > 0) addColumn(ci - 1);else addColumn(0);
          }
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToolbarButton, {
          icon: "table-col-after",
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Add column after', 'wmblocks'),
          onClick: () => addColumn(selected?.cellIdx ?? colCount - 1)
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToolbarButton, {
          icon: "table-col-delete",
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Remove column', 'wmblocks'),
          onClick: () => {
            if (selected) removeColumn(selected.cellIdx);
          },
          disabled: !selected
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToolbarGroup, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToolbarButton, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Toggle cell header (th/td)', 'wmblocks'),
          isPressed: selCell?.tag === 'th',
          onClick: () => {
            if (selected) toggleCellTag(selected.section, selected.rowIdx, selected.cellIdx);
          },
          disabled: !selected,
          children: "TH"
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToolbarGroup, {
        children: ['text-start', 'text-center', 'text-end'].map(a => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToolbarButton, {
          icon: {
            'text-start': 'editor-alignleft',
            'text-center': 'editor-aligncenter',
            'text-end': 'editor-alignright'
          }[a],
          label: a,
          isPressed: selCell?.align === a,
          onClick: () => {
            if (selected) updateCell(selected.section, selected.rowIdx, selected.cellIdx, {
              align: selCell?.align === a ? '' : a
            });
          },
          disabled: !selected
        }, a))
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToolbarGroup, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToolbarButton, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Striped rows', 'wmblocks'),
          isPressed: striped,
          onClick: () => setAttributes({
            striped: !striped
          }),
          children: "\u2261 Stripe"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToolbarButton, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Hover rows', 'wmblocks'),
          isPressed: hover,
          onClick: () => setAttributes({
            hover: !hover
          }),
          children: "\u2248 Hover"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToolbarButton, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Bordered', 'wmblocks'),
          isPressed: bordered,
          onClick: () => setAttributes({
            bordered: !bordered
          }),
          children: "\u229E Border"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToolbarButton, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Small / compact', 'wmblocks'),
          isPressed: small,
          onClick: () => setAttributes({
            small: !small
          }),
          children: "SM"
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InspectorControls, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Table Style', 'wmblocks'),
        initialOpen: true,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Table Variant (colour)', 'wmblocks'),
          value: tableVariant,
          options: TABLE_VARIANTS,
          onChange: v => setAttributes({
            tableVariant: v
          }),
          help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Applies a contextual colour to the entire table.', 'wmblocks')
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Head Variant', 'wmblocks'),
          value: headVariant,
          options: HEAD_VARIANTS,
          onChange: v => setAttributes({
            headVariant: v
          }),
          help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Dark, light, or colour for the <thead> row.', 'wmblocks')
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Striped rows', 'wmblocks'),
            checked: !!striped,
            onChange: v => setAttributes({
              striped: v
            }),
            help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Adds zebra-striping to every other <tbody> row.', 'wmblocks')
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Striped columns', 'wmblocks'),
            checked: !!stripedColumns,
            onChange: v => setAttributes({
              stripedColumns: v
            }),
            help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Adds zebra-striping to every other column.', 'wmblocks')
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Hoverable rows', 'wmblocks'),
            checked: !!hover,
            onChange: v => setAttributes({
              hover: v
            }),
            help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Highlights rows on mouse-over.', 'wmblocks')
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Small / compact', 'wmblocks'),
            checked: !!small,
            onChange: v => setAttributes({
              small: v
            }),
            help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Halves the cell padding.', 'wmblocks')
          })
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Borders', 'wmblocks'),
        initialOpen: false,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Bordered', 'wmblocks'),
            checked: !!bordered,
            onChange: v => setAttributes({
              bordered: v
            }),
            help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Adds borders on all sides of the table and cells.', 'wmblocks')
          })
        }), bordered && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Border Colour', 'wmblocks'),
          value: borderColour,
          options: BORDER_COLOURS,
          onChange: v => setAttributes({
            borderColour: v
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Borderless', 'wmblocks'),
            checked: !!borderless,
            onChange: v => setAttributes({
              borderless: v
            }),
            help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Removes all borders from the table and cells.', 'wmblocks')
          })
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Caption & Structure', 'wmblocks'),
        initialOpen: false,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Caption', 'wmblocks'),
          value: caption,
          onChange: v => setAttributes({
            caption: v
          }),
          placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Optional table caption…', 'wmblocks')
        }), caption && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Caption Position', 'wmblocks'),
          value: captionSide,
          options: [{
            label: 'Bottom (default)',
            value: 'bottom'
          }, {
            label: 'Top',
            value: 'top'
          }],
          onChange: v => setAttributes({
            captionSide: v
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Show Header (<thead>)', 'wmblocks'),
            checked: !!showHead,
            onChange: v => setAttributes({
              showHead: v
            })
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Show Footer (<tfoot>)', 'wmblocks'),
            checked: !!showFoot,
            onChange: v => {
              setAttributes({
                showFoot: v
              });
              if (v && foot.length === 0) {
                // Initialise foot with empty row matching column count
                setAttributes({
                  foot: [newRow(colCount, false)]
                });
              }
            }
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Table group divider', 'wmblocks'),
            checked: !!divider,
            onChange: v => setAttributes({
              divider: v
            }),
            help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Adds a thick border above <tbody> (table-group-divider).', 'wmblocks')
          })
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Responsive', 'wmblocks'),
        initialOpen: false,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Responsive Wrapper', 'wmblocks'),
          value: responsive,
          options: RESPONSIVE_OPTIONS,
          onChange: v => setAttributes({
            responsive: v
          }),
          help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Wraps the table in a scrollable container at the chosen breakpoint.', 'wmblocks')
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Vertical Alignment', 'wmblocks'),
          value: verticalAlign,
          options: VALIGN_OPTIONS,
          onChange: v => setAttributes({
            verticalAlign: v
          }),
          help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Aligns cell content vertically across the whole table.', 'wmblocks')
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
        title: selected ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Selected Cell', 'wmblocks') + ' — ' + `[${selected.section.toUpperCase()} R${selected.rowIdx + 1} C${selected.cellIdx + 1}]` : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Selected Cell', 'wmblocks'),
        initialOpen: true,
        children: !selected ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
          style: {
            fontSize: '12px',
            color: '#aaa',
            fontStyle: 'italic',
            margin: 0
          },
          children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Click any cell to select it.', 'wmblocks')
        }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
            style: {
              fontSize: '11px',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '.05em',
              color: '#555',
              margin: '0 0 6px'
            },
            children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Cell colour', 'wmblocks')
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
            style: {
              display: 'flex',
              flexWrap: 'wrap',
              gap: '5px',
              marginBottom: '12px'
            },
            children: CELL_COLOURS.map(c => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("button", {
              title: c.label,
              style: {
                width: '24px',
                height: '24px',
                borderRadius: '50%',
                cursor: 'pointer',
                padding: 0,
                background: c.hex === 'transparent' ? '#fff' : c.hex,
                border: selCell?.colour === c.value ? '3px solid #0d6efd' : `1px solid ${c.border}`,
                transform: selCell?.colour === c.value ? 'scale(1.2)' : 'scale(1)',
                transition: 'all .12s'
              },
              onClick: () => updateCell(selected.section, selected.rowIdx, selected.cellIdx, {
                colour: c.value
              })
            }, c.value))
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
            style: {
              fontSize: '11px',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '.05em',
              color: '#555',
              margin: '0 0 6px'
            },
            children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Row colour', 'wmblocks')
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
            style: {
              display: 'flex',
              flexWrap: 'wrap',
              gap: '5px',
              marginBottom: '12px'
            },
            children: CELL_COLOURS.map(c => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("button", {
              title: c.label,
              style: {
                width: '24px',
                height: '24px',
                borderRadius: '4px',
                cursor: 'pointer',
                padding: 0,
                background: c.hex === 'transparent' ? '#fff' : c.hex,
                border: selRow?.colour === c.value ? '3px solid #0d6efd' : `1px solid ${c.border}`,
                transform: selRow?.colour === c.value ? 'scale(1.2)' : 'scale(1)',
                transition: 'all .12s'
              },
              onClick: () => updateRowColour(selected.section, selected.rowIdx, c.value)
            }, c.value))
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
            style: {
              fontSize: '11px',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '.05em',
              color: '#555',
              margin: '0 0 6px'
            },
            children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Cell tag', 'wmblocks')
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
            style: {
              display: 'flex',
              gap: '6px',
              marginBottom: '12px'
            },
            children: ['td', 'th'].map(tag => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("button", {
              style: {
                padding: '3px 12px',
                border: '1px solid #dee2e6',
                borderRadius: '4px',
                background: selCell?.tag === tag ? '#0d6efd' : '#fff',
                color: selCell?.tag === tag ? '#fff' : '#333',
                fontWeight: 700,
                fontSize: '12px',
                cursor: 'pointer',
                fontFamily: 'monospace'
              },
              onClick: () => toggleCellTag(selected.section, selected.rowIdx, selected.cellIdx),
              children: `<${tag}>`
            }, tag))
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Cell text align', 'wmblocks'),
            value: selCell?.align || '',
            options: ALIGN_OPTIONS,
            onChange: v => updateCell(selected.section, selected.rowIdx, selected.cellIdx, {
              align: v
            })
          })]
        })
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
      ...blockProps,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
        className: "wmblocks-table-meta-strip",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
          className: "wmblocks-table-chip",
          children: "Table"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("span", {
          className: "wmblocks-table-chip",
          children: [colCount, " cols"]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("span", {
          className: "wmblocks-table-chip",
          children: [body.length, " rows"]
        }), striped && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
          className: "wmblocks-table-chip",
          children: "striped"
        }), stripedColumns && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
          className: "wmblocks-table-chip",
          children: "striped cols"
        }), hover && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
          className: "wmblocks-table-chip",
          children: "hover"
        }), bordered && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
          className: "wmblocks-table-chip",
          children: "bordered"
        }), borderless && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
          className: "wmblocks-table-chip",
          children: "borderless"
        }), small && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
          className: "wmblocks-table-chip",
          children: "SM"
        }), tableVariant && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
          className: "wmblocks-table-chip",
          children: tableVariant
        }), responsive && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
          className: "wmblocks-table-chip",
          children: responsive
        }), selected && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("span", {
          className: "wmblocks-table-chip wmblocks-table-chip--selected",
          children: ["Selected: ", selected.section.toUpperCase(), " R", selected.rowIdx + 1, " C", selected.cellIdx + 1]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
        className: "wmblocks-table-hint-bar",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
          children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Click any cell to select · Type to edit · Row/column controls appear on hover · Cell options in sidebar →', 'wmblocks')
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
        className: "wmblocks-table-scroll-wrap",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("table", {
          className: tableClass,
          style: {
            marginBottom: 0
          },
          children: [caption && captionSide === 'top' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("caption", {
            style: {
              captionSide: 'top',
              padding: '8px 0 4px',
              fontStyle: 'italic',
              color: '#6c757d'
            },
            children: caption
          }), showHead && head.length > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("thead", {
            className: headVariant,
            children: [renderSection('head', head, true, false), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("tr", {
              className: "wmblocks-table-col-actions-row",
              children: [head[0].cells.map((_, ci) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("th", {
                style: {
                  padding: '2px 4px',
                  border: 'none',
                  background: 'transparent'
                },
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                  className: "wmblocks-table-col-action-group",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("button", {
                    className: "wmblocks-table-action",
                    onClick: () => addColumn(ci - 1),
                    title: "Add column before",
                    children: "\u2190+"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("button", {
                    className: "wmblocks-table-action",
                    onClick: () => addColumn(ci),
                    title: "Add column after",
                    children: "+\u2192"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("button", {
                    className: "wmblocks-table-action wmblocks-table-action--danger",
                    onClick: () => removeColumn(ci),
                    title: "Remove column",
                    disabled: colCount <= 1,
                    children: "\u2715"
                  })]
                })
              }, ci)), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("th", {
                style: {
                  border: 'none'
                }
              })]
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("tbody", {
            className: divider ? 'table-group-divider' : '',
            children: renderSection('body', body, false, false)
          }), showFoot && foot.length > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("tfoot", {
            children: renderSection('foot', foot, false, true)
          }), caption && captionSide !== 'top' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("caption", {
            style: {
              padding: '4px 0 8px',
              fontStyle: 'italic',
              color: '#6c757d'
            },
            children: caption
          })]
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
        className: "wmblocks-table-add-bar",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("button", {
          className: "wmblocks-table-add-btn",
          onClick: () => addRow('body'),
          children: ["+ ", (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Add row', 'wmblocks')]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("button", {
          className: "wmblocks-table-add-btn",
          onClick: () => addColumn(),
          children: ["+ ", (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Add column', 'wmblocks')]
        }), showFoot && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("button", {
          className: "wmblocks-table-add-btn",
          onClick: () => addRow('foot'),
          children: ["+ ", (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Add footer row', 'wmblocks')]
        })]
      })]
    })]
  });
}

/***/ },

/***/ "./src/table/index.js"
/*!****************************!*\
  !*** ./src/table/index.js ***!
  \****************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ "./src/table/style.scss");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./src/table/edit.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./block.json */ "./src/table/block.json");




(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_3__.name, {
  edit: _edit__WEBPACK_IMPORTED_MODULE_2__["default"],
  save: () => null // server-side rendered
});

/***/ },

/***/ "./src/table/editor.scss"
/*!*******************************!*\
  !*** ./src/table/editor.scss ***!
  \*******************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ },

/***/ "./src/table/style.scss"
/*!******************************!*\
  !*** ./src/table/style.scss ***!
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

/***/ "./src/table/block.json"
/*!******************************!*\
  !*** ./src/table/block.json ***!
  \******************************/
(module) {

module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"wmblocks/table","version":"0.1.0","title":"Table","category":"watermelon-blocks","icon":"editor-table","description":"Bootstrap table — a full-featured spreadsheet-like editor. Click any cell to type directly. Add/remove rows & columns, set per-cell colours, use all Bootstrap table variants: striped, bordered, hover, dark, responsive, and more.","example":{},"supports":{"html":false,"anchor":true},"attributes":{"head":{"type":"array","default":[{"id":"h1","cells":[{"id":"c1","content":"#","tag":"th","colour":"","align":""},{"id":"c2","content":"First","tag":"th","colour":"","align":""},{"id":"c3","content":"Last","tag":"th","colour":"","align":""},{"id":"c4","content":"Handle","tag":"th","colour":"","align":""}]}]},"body":{"type":"array","default":[{"id":"r1","colour":"","cells":[{"id":"c1","content":"1","tag":"th","colour":"","align":""},{"id":"c2","content":"Mark","tag":"td","colour":"","align":""},{"id":"c3","content":"Otto","tag":"td","colour":"","align":""},{"id":"c4","content":"@mdo","tag":"td","colour":"","align":""}]},{"id":"r2","colour":"","cells":[{"id":"c1","content":"2","tag":"th","colour":"","align":""},{"id":"c2","content":"Jacob","tag":"td","colour":"","align":""},{"id":"c3","content":"Thornton","tag":"td","colour":"","align":""},{"id":"c4","content":"@fat","tag":"td","colour":"","align":""}]},{"id":"r3","colour":"","cells":[{"id":"c1","content":"3","tag":"th","colour":"","align":""},{"id":"c2","content":"John","tag":"td","colour":"","align":""},{"id":"c3","content":"Doe","tag":"td","colour":"","align":""},{"id":"c4","content":"@social","tag":"td","colour":"","align":""}]}]},"foot":{"type":"array","default":[]},"caption":{"type":"string","default":""},"captionSide":{"type":"string","default":"bottom"},"showHead":{"type":"boolean","default":true},"showFoot":{"type":"boolean","default":false},"tableVariant":{"type":"string","default":""},"headVariant":{"type":"string","default":""},"striped":{"type":"boolean","default":false},"stripedColumns":{"type":"boolean","default":false},"hover":{"type":"boolean","default":false},"bordered":{"type":"boolean","default":false},"borderColour":{"type":"string","default":""},"borderless":{"type":"boolean","default":false},"small":{"type":"boolean","default":false},"responsive":{"type":"string","default":""},"verticalAlign":{"type":"string","default":""},"divider":{"type":"boolean","default":false}},"textdomain":"wm","editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./style-index.css","render":"file:./render.php","viewScript":"file:./view.js"}');

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
/******/ 			"table/index": 0,
/******/ 			"table/style-index": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["table/style-index"], () => (__webpack_require__("./src/table/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map