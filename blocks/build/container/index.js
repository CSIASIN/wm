/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./controls/spacingControls.js"
/*!*************************************!*\
  !*** ./controls/spacingControls.js ***!
  \*************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MarginControl: () => (/* binding */ MarginControl),
/* harmony export */   PaddingControl: () => (/* binding */ PaddingControl)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);



const PADDING_OPTIONS = [{
  label: '— None —',
  value: ''
}, {
  label: 'p-0 (No Padding)',
  value: 'p-0'
}, {
  label: 'p-1 (0.25rem)',
  value: 'p-1'
}, {
  label: 'p-2 (0.5rem)',
  value: 'p-2'
}, {
  label: 'p-3 (1rem)',
  value: 'p-3'
}, {
  label: 'p-4 (1.5rem)',
  value: 'p-4'
}, {
  label: 'p-5 (3rem)',
  value: 'p-5'
}, {
  label: 'pt-0 (Top 0)',
  value: 'pt-0'
}, {
  label: 'pt-1 (0.25rem)',
  value: 'pt-1'
}, {
  label: 'pt-2 (0.5rem)',
  value: 'pt-2'
}, {
  label: 'pt-3 (1rem)',
  value: 'pt-3'
}, {
  label: 'pt-4 (1.5rem)',
  value: 'pt-4'
}, {
  label: 'pt-5 (3rem)',
  value: 'pt-5'
}, {
  label: 'pb-0 (Bottom 0)',
  value: 'pb-0'
}, {
  label: 'pb-1 (0.25rem)',
  value: 'pb-1'
}, {
  label: 'pb-2 (0.5rem)',
  value: 'pb-2'
}, {
  label: 'pb-3 (1rem)',
  value: 'pb-3'
}, {
  label: 'pb-4 (1.5rem)',
  value: 'pb-4'
}, {
  label: 'pb-5 (3rem)',
  value: 'pb-5'
}, {
  label: 'ps-0 (Start/Left 0)',
  value: 'ps-0'
}, {
  label: 'ps-1 (0.25rem)',
  value: 'ps-1'
}, {
  label: 'ps-2 (0.5rem)',
  value: 'ps-2'
}, {
  label: 'ps-3 (1rem)',
  value: 'ps-3'
}, {
  label: 'ps-4 (1.5rem)',
  value: 'ps-4'
}, {
  label: 'ps-5 (3rem)',
  value: 'ps-5'
}, {
  label: 'pe-0 (End/Right 0)',
  value: 'pe-0'
}, {
  label: 'pe-1 (0.25rem)',
  value: 'pe-1'
}, {
  label: 'pe-2 (0.5rem)',
  value: 'pe-2'
}, {
  label: 'pe-3 (1rem)',
  value: 'pe-3'
}, {
  label: 'pe-4 (1.5rem)',
  value: 'pe-4'
}, {
  label: 'pe-5 (3rem)',
  value: 'pe-5'
}, {
  label: 'px-0 (Left & Right 0)',
  value: 'px-0'
}, {
  label: 'px-1 (0.25rem)',
  value: 'px-1'
}, {
  label: 'px-2 (0.5rem)',
  value: 'px-2'
}, {
  label: 'px-3 (1rem)',
  value: 'px-3'
}, {
  label: 'px-4 (1.5rem)',
  value: 'px-4'
}, {
  label: 'px-5 (3rem)',
  value: 'px-5'
}, {
  label: 'py-0 (Top & Bottom 0)',
  value: 'py-0'
}, {
  label: 'py-1 (0.25rem)',
  value: 'py-1'
}, {
  label: 'py-2 (0.5rem)',
  value: 'py-2'
}, {
  label: 'py-3 (1rem)',
  value: 'py-3'
}, {
  label: 'py-4 (1.5rem)',
  value: 'py-4'
}, {
  label: 'py-5 (3rem)',
  value: 'py-5'
}];
const MARGIN_OPTIONS = [{
  label: '— None —',
  value: ''
}, {
  label: 'm-0 (No Margin)',
  value: 'm-0'
}, {
  label: 'm-1 (0.25rem)',
  value: 'm-1'
}, {
  label: 'm-2 (0.5rem)',
  value: 'm-2'
}, {
  label: 'm-3 (1rem)',
  value: 'm-3'
}, {
  label: 'm-4 (1.5rem)',
  value: 'm-4'
}, {
  label: 'm-5 (3rem)',
  value: 'm-5'
}, {
  label: 'm-auto',
  value: 'm-auto'
}, {
  label: 'mt-0 (Top 0)',
  value: 'mt-0'
}, {
  label: 'mt-1 (0.25rem)',
  value: 'mt-1'
}, {
  label: 'mt-2 (0.5rem)',
  value: 'mt-2'
}, {
  label: 'mt-3 (1rem)',
  value: 'mt-3'
}, {
  label: 'mt-4 (1.5rem)',
  value: 'mt-4'
}, {
  label: 'mt-5 (3rem)',
  value: 'mt-5'
}, {
  label: 'mt-auto',
  value: 'mt-auto'
}, {
  label: 'mb-0 (Bottom 0)',
  value: 'mb-0'
}, {
  label: 'mb-1 (0.25rem)',
  value: 'mb-1'
}, {
  label: 'mb-2 (0.5rem)',
  value: 'mb-2'
}, {
  label: 'mb-3 (1rem)',
  value: 'mb-3'
}, {
  label: 'mb-4 (1.5rem)',
  value: 'mb-4'
}, {
  label: 'mb-5 (3rem)',
  value: 'mb-5'
}, {
  label: 'mb-auto',
  value: 'mb-auto'
}, {
  label: 'ms-0 (Start/Left 0)',
  value: 'ms-0'
}, {
  label: 'ms-1 (0.25rem)',
  value: 'ms-1'
}, {
  label: 'ms-2 (0.5rem)',
  value: 'ms-2'
}, {
  label: 'ms-3 (1rem)',
  value: 'ms-3'
}, {
  label: 'ms-4 (1.5rem)',
  value: 'ms-4'
}, {
  label: 'ms-5 (3rem)',
  value: 'ms-5'
}, {
  label: 'ms-auto',
  value: 'ms-auto'
}, {
  label: 'me-0 (End/Right 0)',
  value: 'me-0'
}, {
  label: 'me-1 (0.25rem)',
  value: 'me-1'
}, {
  label: 'me-2 (0.5rem)',
  value: 'me-2'
}, {
  label: 'me-3 (1rem)',
  value: 'me-3'
}, {
  label: 'me-4 (1.5rem)',
  value: 'me-4'
}, {
  label: 'me-5 (3rem)',
  value: 'me-5'
}, {
  label: 'me-auto',
  value: 'me-auto'
}, {
  label: 'mx-0 (Left & Right 0)',
  value: 'mx-0'
}, {
  label: 'mx-1 (0.25rem)',
  value: 'mx-1'
}, {
  label: 'mx-2 (0.5rem)',
  value: 'mx-2'
}, {
  label: 'mx-3 (1rem)',
  value: 'mx-3'
}, {
  label: 'mx-4 (1.5rem)',
  value: 'mx-4'
}, {
  label: 'mx-5 (3rem)',
  value: 'mx-5'
}, {
  label: 'mx-auto',
  value: 'mx-auto'
}, {
  label: 'my-0 (Top & Bottom 0)',
  value: 'my-0'
}, {
  label: 'my-1 (0.25rem)',
  value: 'my-1'
}, {
  label: 'my-2 (0.5rem)',
  value: 'my-2'
}, {
  label: 'my-3 (1rem)',
  value: 'my-3'
}, {
  label: 'my-4 (1.5rem)',
  value: 'my-4'
}, {
  label: 'my-5 (3rem)',
  value: 'my-5'
}, {
  label: 'my-auto',
  value: 'my-auto'
}];
function PaddingControl({
  value,
  onChange
}) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Padding', 'wm'),
    initialOpen: false,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SelectControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Padding', 'wm'),
      help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('e.g. p-1 all sides, pt-1 top, pb-1 bottom, ps-1 start, pe-1 end, px left & right, py top & bottom', 'wm'),
      value: value,
      options: PADDING_OPTIONS,
      onChange: onChange
    })
  });
}
function MarginControl({
  value,
  onChange
}) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Margin', 'wm'),
    initialOpen: false,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SelectControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Margin', 'wm'),
      help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('e.g. m-1 all sides, mt-1 top, mb-1 bottom, ms-1 start, me-1 end, mx left & right, my top & bottom', 'wm'),
      value: value,
      options: MARGIN_OPTIONS,
      onChange: onChange
    })
  });
}

/***/ },

/***/ "./controls/visibilityControl.js"
/*!***************************************!*\
  !*** ./controls/visibilityControl.js ***!
  \***************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VisibilityControl: () => (/* binding */ VisibilityControl)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);



const DOT = {
  display: 'inline-block',
  width: '6px',
  height: '6px',
  borderRadius: '50%',
  background: '#007cba',
  marginLeft: '4px',
  verticalAlign: 'middle'
};
const label11 = {
  fontSize: '11px',
  color: '#757575',
  textTransform: 'uppercase',
  fontWeight: 600
};
function VisibilityControl({
  hideXs,
  hideSm,
  hideMd,
  hideLg,
  hideXl,
  hideXxl,
  setAttributes
}) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Show / Hide', 'wm'),
    initialOpen: false,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      style: {
        ...label11,
        marginBottom: '4px'
      },
      children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Mobile & Tablet', 'wm')
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TabPanel, {
      tabs: [{
        name: 'xs',
        title: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("span", {
          children: ["XS", !!hideXs && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
            style: DOT
          })]
        })
      }, {
        name: 'sm',
        title: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("span", {
          children: ["SM", !!hideSm && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
            style: DOT
          })]
        })
      }, {
        name: 'md',
        title: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("span", {
          children: ["MD", !!hideMd && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
            style: DOT
          })]
        })
      }],
      children: tab => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
        style: {
          paddingTop: '12px'
        },
        children: [tab.name === 'xs' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToggleControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Hide on XS', 'wm'),
          checked: !!hideXs,
          onChange: val => setAttributes({
            hideXs: val
          }),
          help: hideXs ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Hidden on XS (< 576px). Adds: d-none d-sm-block', 'wm') : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Hide on Extra Small (< 576px) devices.', 'wm')
        }), tab.name === 'sm' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToggleControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Hide on SM', 'wm'),
          checked: !!hideSm,
          onChange: val => setAttributes({
            hideSm: val
          }),
          help: hideSm ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Hidden on SM (576px–767px). Adds: d-sm-none d-md-block', 'wm') : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Hide on Small (576px–767px) devices.', 'wm')
        }), tab.name === 'md' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToggleControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Hide on MD', 'wm'),
          checked: !!hideMd,
          onChange: val => setAttributes({
            hideMd: val
          }),
          help: hideMd ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Hidden on MD (768px–991px). Adds: d-md-none d-lg-block', 'wm') : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Hide on Medium (768px–991px) devices.', 'wm')
        })]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      style: {
        ...label11,
        margin: '12px 0 4px'
      },
      children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Desktop & Wide', 'wm')
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TabPanel, {
      tabs: [{
        name: 'lg',
        title: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("span", {
          children: ["LG", !!hideLg && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
            style: DOT
          })]
        })
      }, {
        name: 'xl',
        title: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("span", {
          children: ["XL", !!hideXl && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
            style: DOT
          })]
        })
      }, {
        name: 'xxl',
        title: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("span", {
          children: ["XXL", !!hideXxl && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
            style: DOT
          })]
        })
      }],
      children: tab => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
        style: {
          paddingTop: '12px'
        },
        children: [tab.name === 'lg' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToggleControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Hide on LG', 'wm'),
          checked: !!hideLg,
          onChange: val => setAttributes({
            hideLg: val
          }),
          help: hideLg ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Hidden on LG (992px–1199px). Adds: d-lg-none d-xl-block', 'wm') : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Hide on Large (992px–1199px) devices.', 'wm')
        }), tab.name === 'xl' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToggleControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Hide on XL', 'wm'),
          checked: !!hideXl,
          onChange: val => setAttributes({
            hideXl: val
          }),
          help: hideXl ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Hidden on XL (1200px–1399px). Adds: d-xl-none d-xxl-block', 'wm') : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Hide on Extra Large (1200px–1399px) devices.', 'wm')
        }), tab.name === 'xxl' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToggleControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Hide on XXL', 'wm'),
          checked: !!hideXxl,
          onChange: val => setAttributes({
            hideXxl: val
          }),
          help: hideXxl ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Hidden on XXL (≥1400px). Adds: d-xxl-none', 'wm') : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Hide on Extra Extra Large (≥1400px) devices.', 'wm')
        })]
      })
    })]
  });
}

/***/ },

/***/ "./controls/visualControls.js"
/*!************************************!*\
  !*** ./controls/visualControls.js ***!
  \************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BackgroundColorControl: () => (/* binding */ BackgroundColorControl),
/* harmony export */   BorderControl: () => (/* binding */ BorderControl),
/* harmony export */   CustomCSSControl: () => (/* binding */ CustomCSSControl),
/* harmony export */   OpacityControl: () => (/* binding */ OpacityControl),
/* harmony export */   ShadowControl: () => (/* binding */ ShadowControl),
/* harmony export */   TextColorControl: () => (/* binding */ TextColorControl)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);



// ─── Background Color ────────────────────────────────────────────────────────

const BG_COLORS = [{
  label: 'Primary',
  value: 'bg-primary',
  color: '#0d6efd'
}, {
  label: 'Primary Subtle',
  value: 'bg-primary-subtle',
  color: '#cfe2ff'
}, {
  label: 'Secondary',
  value: 'bg-secondary',
  color: '#6c757d'
}, {
  label: 'Secondary Subtle',
  value: 'bg-secondary-subtle',
  color: '#e2e3e5'
}, {
  label: 'Success',
  value: 'bg-success',
  color: '#198754'
}, {
  label: 'Success Subtle',
  value: 'bg-success-subtle',
  color: '#d1e7dd'
}, {
  label: 'Danger',
  value: 'bg-danger',
  color: '#dc3545'
}, {
  label: 'Danger Subtle',
  value: 'bg-danger-subtle',
  color: '#f8d7da'
}, {
  label: 'Warning',
  value: 'bg-warning',
  color: '#ffc107'
}, {
  label: 'Warning Subtle',
  value: 'bg-warning-subtle',
  color: '#fff3cd'
}, {
  label: 'Info',
  value: 'bg-info',
  color: '#0dcaf0'
}, {
  label: 'Info Subtle',
  value: 'bg-info-subtle',
  color: '#cff4fc'
}, {
  label: 'Light',
  value: 'bg-light',
  color: '#f8f9fa'
}, {
  label: 'Light Subtle',
  value: 'bg-light-subtle',
  color: '#fcfcfd'
}, {
  label: 'Dark',
  value: 'bg-dark',
  color: '#212529'
}, {
  label: 'Dark Subtle',
  value: 'bg-dark-subtle',
  color: '#ced4da'
}, {
  label: 'Body Secondary',
  value: 'bg-body-secondary',
  color: '#e9ecef'
}, {
  label: 'Body Tertiary',
  value: 'bg-body-tertiary',
  color: '#f8f9fa'
}, {
  label: 'Body',
  value: 'bg-body',
  color: '#ffffff'
}, {
  label: 'Black',
  value: 'bg-black',
  color: '#000000'
}, {
  label: 'White',
  value: 'bg-white',
  color: '#ffffff'
}, {
  label: 'Transparent',
  value: 'bg-transparent',
  color: 'transparent'
}];
function BackgroundColorControl({
  value,
  onChange
}) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Background Color', 'wm'),
    initialOpen: false,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      style: {
        marginBottom: '8px',
        fontSize: '11px',
        color: '#757575',
        textTransform: 'uppercase',
        fontWeight: 600
      },
      children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Select Background', 'wm')
    }), value && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      style: {
        marginBottom: '10px',
        display: 'flex',
        alignItems: 'center',
        gap: '8px'
      },
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
        style: {
          fontSize: '12px',
          color: '#555'
        },
        children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Selected:', 'wm')
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("code", {
        style: {
          fontSize: '11px',
          background: '#f0f0f0',
          padding: '2px 6px',
          borderRadius: '3px'
        },
        children: value
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("button", {
        onClick: () => onChange(''),
        style: {
          marginLeft: 'auto',
          fontSize: '11px',
          color: '#cc1818',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          padding: 0
        },
        children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('✕ Clear', 'wm')
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(5, 1fr)',
        gap: '6px'
      },
      children: BG_COLORS.map(({
        label,
        value: val,
        color
      }) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("button", {
        title: label + ' (' + val + ')',
        onClick: () => onChange(val === value ? '' : val),
        style: {
          width: '100%',
          aspectRatio: '1',
          background: color === 'transparent' ? 'repeating-conic-gradient(#ccc 0% 25%, #fff 0% 50%) 0 0 / 10px 10px' : color,
          border: val === value ? '3px solid #007cba' : '2px solid #ddd',
          borderRadius: '4px',
          cursor: 'pointer',
          boxSizing: 'border-box',
          outline: val === value ? '2px solid #007cba' : 'none',
          outlineOffset: '1px'
        }
      }, val))
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      style: {
        marginTop: '8px',
        fontSize: '11px',
        color: '#757575'
      },
      children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Hover to see class name. Click to select, click again to deselect.', 'wm')
    })]
  });
}

// ─── Text Color ───────────────────────────────────────────────────────────────

function TextColorControl({
  value,
  onChange
}) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Text Color', 'wm'),
    initialOpen: false,
    children: [value && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      style: {
        marginBottom: '10px',
        display: 'flex',
        alignItems: 'center',
        gap: '8px'
      },
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
        style: {
          width: '24px',
          height: '24px',
          borderRadius: '4px',
          background: value,
          border: '1px solid #ddd',
          flexShrink: 0
        }
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("code", {
        style: {
          fontSize: '11px',
          background: '#f0f0f0',
          padding: '2px 6px',
          borderRadius: '3px',
          flex: 1
        },
        children: value
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("button", {
        onClick: () => onChange(''),
        style: {
          fontSize: '11px',
          color: '#cc1818',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          padding: 0
        },
        children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('✕ Clear', 'wm')
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ColorPicker, {
      color: value || '#000000',
      onChange: onChange,
      enableAlpha: true,
      defaultValue: "#000000"
    })]
  });
}

// ─── Opacity ──────────────────────────────────────────────────────────────────

function OpacityControl({
  value,
  onChange
}) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Opacity', 'wm'),
    initialOpen: false,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      style: {
        marginBottom: '12px'
      },
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
        style: {
          fontSize: '11px',
          color: '#757575',
          textTransform: 'uppercase',
          fontWeight: 600,
          marginBottom: '8px'
        },
        children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Presets', 'wm')
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Flex, {
        gap: 1,
        wrap: true,
        children: [10, 25, 50, 75, 100].map(preset => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.FlexItem, {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
            variant: value === preset ? 'primary' : 'secondary',
            size: "small",
            onClick: () => onChange(preset),
            style: {
              minWidth: '48px'
            },
            children: [preset, "%"]
          })
        }, preset))
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.RangeControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Custom Opacity', 'wm'),
      value: value,
      onChange: onChange,
      min: 0,
      max: 100,
      step: 1,
      renderTooltipContent: v => v + '%'
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Flex, {
      align: "center",
      gap: 2,
      style: {
        marginTop: '8px'
      },
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.FlexItem, {
        isBlock: true,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.__experimentalNumberControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Opacity Value (%)', 'wm'),
          value: value,
          min: 0,
          max: 100,
          step: 1,
          onChange: v => onChange(Math.min(100, Math.max(0, parseInt(v, 10) || 0))),
          suffix: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
            style: {
              padding: '0 8px',
              color: '#757575'
            },
            children: "%"
          })
        })
      })
    }), value !== 100 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
      variant: "tertiary",
      size: "small",
      onClick: () => onChange(100),
      style: {
        marginTop: '8px',
        color: '#cc1818'
      },
      children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('✕ Reset to 100%', 'wm')
    })]
  });
}

// ─── Shadow ───────────────────────────────────────────────────────────────────

function ShadowControl({
  value,
  onChange
}) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Shadow', 'wm'),
    initialOpen: false,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SelectControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Box Shadow', 'wm'),
      value: value,
      options: [{
        label: '— None —',
        value: ''
      }, {
        label: 'shadow-none',
        value: 'shadow-none'
      }, {
        label: 'shadow-sm',
        value: 'shadow-sm'
      }, {
        label: 'shadow',
        value: 'shadow'
      }, {
        label: 'shadow-lg',
        value: 'shadow-lg'
      }],
      onChange: onChange,
      help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Apply a Bootstrap box shadow utility class.', 'wm')
    })
  });
}

// ─── Border ───────────────────────────────────────────────────────────────────

const BORDER_COLORS = [{
  label: 'Primary',
  value: 'border-primary',
  color: '#0d6efd'
}, {
  label: 'Primary Subtle',
  value: 'border-primary-subtle',
  color: '#cfe2ff'
}, {
  label: 'Secondary',
  value: 'border-secondary',
  color: '#6c757d'
}, {
  label: 'Secondary Subtle',
  value: 'border-secondary-subtle',
  color: '#e2e3e5'
}, {
  label: 'Success',
  value: 'border-success',
  color: '#198754'
}, {
  label: 'Success Subtle',
  value: 'border-success-subtle',
  color: '#d1e7dd'
}, {
  label: 'Danger',
  value: 'border-danger',
  color: '#dc3545'
}, {
  label: 'Danger Subtle',
  value: 'border-danger-subtle',
  color: '#f8d7da'
}, {
  label: 'Warning',
  value: 'border-warning',
  color: '#ffc107'
}, {
  label: 'Warning Subtle',
  value: 'border-warning-subtle',
  color: '#fff3cd'
}, {
  label: 'Info',
  value: 'border-info',
  color: '#0dcaf0'
}, {
  label: 'Info Subtle',
  value: 'border-info-subtle',
  color: '#cff4fc'
}, {
  label: 'Light',
  value: 'border-light',
  color: '#f8f9fa'
}, {
  label: 'Light Subtle',
  value: 'border-light-subtle',
  color: '#e9ecef'
}, {
  label: 'Dark',
  value: 'border-dark',
  color: '#212529'
}, {
  label: 'Dark Subtle',
  value: 'border-dark-subtle',
  color: '#ced4da'
}, {
  label: 'Black',
  value: 'border-black',
  color: '#000000'
}, {
  label: 'White',
  value: 'border-white',
  color: '#ffffff'
}];
const label11 = {
  margin: '10px 0 4px',
  fontSize: '11px',
  color: '#757575',
  textTransform: 'uppercase',
  fontWeight: 600
};
function BorderControl({
  borderSides,
  borderRemove,
  borderColor,
  borderOpacityClass,
  borderOpacityCustom,
  borderSize,
  borderRadius,
  borderRadiusSize,
  setAttributes
}) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Border', 'wm'),
    initialOpen: false,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      style: {
        ...label11,
        marginTop: 0
      },
      children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Border Sides', 'wm')
    }), ['border', 'border-top', 'border-end', 'border-bottom', 'border-start'].map(cls => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.CheckboxControl, {
      label: cls,
      checked: (borderSides || []).includes(cls),
      onChange: checked => setAttributes({
        borderSides: checked ? [...(borderSides || []), cls] : (borderSides || []).filter(c => c !== cls)
      })
    }, cls)), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      style: label11,
      children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Remove Border Sides', 'wm')
    }), ['border-0', 'border-top-0', 'border-end-0', 'border-bottom-0', 'border-start-0'].map(cls => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.CheckboxControl, {
      label: cls,
      checked: (borderRemove || []).includes(cls),
      onChange: checked => setAttributes({
        borderRemove: checked ? [...(borderRemove || []), cls] : (borderRemove || []).filter(c => c !== cls)
      })
    }, cls)), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      style: {
        ...label11,
        marginTop: '10px',
        marginBottom: '8px'
      },
      children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Border Color', 'wm')
    }), borderColor && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      style: {
        marginBottom: '8px',
        display: 'flex',
        alignItems: 'center',
        gap: '8px'
      },
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("code", {
        style: {
          fontSize: '11px',
          background: '#f0f0f0',
          padding: '2px 6px',
          borderRadius: '3px'
        },
        children: borderColor
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("button", {
        onClick: () => setAttributes({
          borderColor: ''
        }),
        style: {
          fontSize: '11px',
          color: '#cc1818',
          background: 'none',
          border: 'none',
          cursor: 'pointer'
        },
        children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('✕ Clear', 'wm')
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(5, 1fr)',
        gap: '6px',
        marginBottom: '8px'
      },
      children: BORDER_COLORS.map(({
        label,
        value,
        color
      }) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("button", {
        title: label + '\n' + value,
        onClick: () => setAttributes({
          borderColor: value === borderColor ? '' : value
        }),
        style: {
          width: '100%',
          aspectRatio: '1',
          background: color,
          border: value === borderColor ? '3px solid #007cba' : '2px solid #ddd',
          borderRadius: '4px',
          cursor: 'pointer',
          boxSizing: 'border-box',
          outline: value === borderColor ? '2px solid #007cba' : 'none',
          outlineOffset: '1px'
        }
      }, value))
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      style: label11,
      children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Border Opacity', 'wm')
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Flex, {
      gap: 1,
      wrap: true,
      style: {
        marginBottom: '8px'
      },
      children: [{
        label: '75%',
        value: 'border-opacity-75'
      }, {
        label: '50%',
        value: 'border-opacity-50'
      }, {
        label: '25%',
        value: 'border-opacity-25'
      }, {
        label: '10%',
        value: 'border-opacity-10'
      }].map(({
        label,
        value
      }) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.FlexItem, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
          variant: borderOpacityClass === value ? 'primary' : 'secondary',
          size: "small",
          onClick: () => setAttributes({
            borderOpacityClass: borderOpacityClass === value ? '' : value
          }),
          children: label
        })
      }, value))
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextareaControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Custom Border Opacity (CSS var)', 'wm'),
      help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('e.g. .5 → sets --bs-border-opacity: .5', 'wm'),
      value: borderOpacityCustom,
      onChange: value => setAttributes({
        borderOpacityCustom: value
      }),
      rows: 1
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      style: label11,
      children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Border Width', 'wm')
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Flex, {
      gap: 1,
      wrap: true,
      style: {
        marginBottom: '8px'
      },
      children: ['1', '2', '3', '4', '5'].map(size => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.FlexItem, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
          variant: borderSize === 'border-' + size ? 'primary' : 'secondary',
          size: "small",
          onClick: () => setAttributes({
            borderSize: borderSize === 'border-' + size ? '' : 'border-' + size
          }),
          style: {
            minWidth: '36px'
          },
          children: size
        })
      }, size))
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      style: label11,
      children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Border Radius Side', 'wm')
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Flex, {
      gap: 1,
      wrap: true,
      style: {
        marginBottom: '8px'
      },
      children: ['rounded', 'rounded-top', 'rounded-end', 'rounded-bottom', 'rounded-start'].map(cls => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.FlexItem, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
          variant: borderRadius === cls ? 'primary' : 'secondary',
          size: "small",
          onClick: () => setAttributes({
            borderRadius: borderRadius === cls ? '' : cls
          }),
          children: cls.replace('rounded-', '') || 'all'
        })
      }, cls))
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      style: label11,
      children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Border Radius Size', 'wm')
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Flex, {
      gap: 1,
      wrap: true,
      style: {
        marginBottom: '4px'
      },
      children: ['rounded-0', 'rounded-1', 'rounded-2', 'rounded-3', 'rounded-4', 'rounded-5', 'rounded-circle', 'rounded-pill', 'rounded-top-1', 'rounded-top-2', 'rounded-top-3', 'rounded-top-4', 'rounded-top-5'].map(cls => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.FlexItem, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
          variant: borderRadiusSize === cls ? 'primary' : 'secondary',
          size: "small",
          onClick: () => setAttributes({
            borderRadiusSize: borderRadiusSize === cls ? '' : cls
          }),
          children: cls.replace('rounded-', '')
        })
      }, cls))
    })]
  });
}

// ─── Custom CSS ───────────────────────────────────────────────────────────────

function CustomCSSControl({
  value,
  onChange
}) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Custom CSS', 'wm'),
    initialOpen: false,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextareaControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Inline CSS', 'wm'),
      help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('e.g. height:300px; width:300px', 'wm'),
      value: value,
      onChange: onChange,
      rows: 3
    })
  });
}

/***/ },

/***/ "./src/container/edit.js"
/*!*******************************!*\
  !*** ./src/container/edit.js ***!
  \*******************************/
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
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./editor.scss */ "./src/container/editor.scss");
/* harmony import */ var _block_preview_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./block-preview.png */ "./src/container/block-preview.png");
/* harmony import */ var _controls_spacingControls__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../controls/spacingControls */ "./controls/spacingControls.js");
/* harmony import */ var _controls_visualControls__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../controls/visualControls */ "./controls/visualControls.js");
/* harmony import */ var _controls_visibilityControl__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../controls/visibilityControl */ "./controls/visibilityControl.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__);
/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */


/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */


/**
 * WordPress components used for the sidebar panel and select control.
 */

//import { PanelBody, SelectControl } from '@wordpress/components';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */


/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
//const { InspectorControls } = wp.editor;
//const { PanelBody } = wp.components;



// Shared controls — copy the controls/ folder next to each block's src folder




function Edit({
  attributes,
  setAttributes
}) {
  const {
    margin,
    padding,
    customCSS,
    preview,
    backgroundColor,
    opacity,
    borderSides,
    borderRemove,
    borderColor,
    borderOpacityClass,
    borderOpacityCustom,
    borderSize,
    borderRadius,
    borderRadiusSize,
    textColor,
    hideXs,
    hideSm,
    hideMd,
    hideLg,
    hideXl,
    hideXxl,
    shadow
  } = attributes;
  if (preview) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
      style: {
        width: '100%'
      },
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("img", {
        src: _block_preview_png__WEBPACK_IMPORTED_MODULE_4__,
        alt: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Container block preview', 'wm'),
        style: {
          width: '100%',
          height: 'auto',
          display: 'block'
        }
      })
    });
  }
  const parseInlineCSS = cssString => {
    if (!cssString) return {};
    return cssString.split(';').reduce((styleObj, rule) => {
      const [property, value] = rule.split(':');
      if (property && value) {
        const camelProp = property.trim().replace(/-([a-z])/g, (_, l) => l.toUpperCase());
        styleObj[camelProp] = value.trim();
      }
      return styleObj;
    }, {});
  };
  const borderClasses = [...(borderSides || []), ...(borderRemove || []), borderColor, borderOpacityClass, borderSize, borderRadius, borderRadiusSize].filter(Boolean).join(' ');
  const visibilityClasses = [!!hideXs ? 'd-none d-sm-block' : '', !!hideSm ? 'd-sm-none d-md-block' : '', !!hideMd ? 'd-md-none d-lg-block' : '', !!hideLg ? 'd-lg-none d-xl-block' : '', !!hideXl ? 'd-xl-none d-xxl-block' : '', !!hideXxl ? 'd-xxl-none' : ''].filter(Boolean).join(' ');
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps)({
    style: {
      opacity: opacity !== 100 ? opacity / 100 : undefined,
      color: textColor || undefined,
      ...(borderOpacityCustom ? {
        '--bs-border-opacity': borderOpacityCustom
      } : {}),
      ...parseInlineCSS(customCSS)
    }
  });
  const combinedClassName = [blockProps.className, 'container', padding, margin, backgroundColor, borderClasses, visibilityClasses, shadow].filter(Boolean).map(c => c.trim()).filter(Boolean).join(' ');
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InspectorControls, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_controls_spacingControls__WEBPACK_IMPORTED_MODULE_5__.PaddingControl, {
        value: padding,
        onChange: v => setAttributes({
          padding: v
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_controls_spacingControls__WEBPACK_IMPORTED_MODULE_5__.MarginControl, {
        value: margin,
        onChange: v => setAttributes({
          margin: v
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_controls_visualControls__WEBPACK_IMPORTED_MODULE_6__.BackgroundColorControl, {
        value: backgroundColor,
        onChange: v => setAttributes({
          backgroundColor: v
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_controls_visualControls__WEBPACK_IMPORTED_MODULE_6__.OpacityControl, {
        value: opacity,
        onChange: v => setAttributes({
          opacity: v
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_controls_visualControls__WEBPACK_IMPORTED_MODULE_6__.TextColorControl, {
        value: textColor,
        onChange: v => setAttributes({
          textColor: v
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_controls_visualControls__WEBPACK_IMPORTED_MODULE_6__.ShadowControl, {
        value: shadow,
        onChange: v => setAttributes({
          shadow: v
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_controls_visualControls__WEBPACK_IMPORTED_MODULE_6__.BorderControl, {
        borderSides: borderSides,
        borderRemove: borderRemove,
        borderColor: borderColor,
        borderOpacityClass: borderOpacityClass,
        borderOpacityCustom: borderOpacityCustom,
        borderSize: borderSize,
        borderRadius: borderRadius,
        borderRadiusSize: borderRadiusSize,
        setAttributes: setAttributes
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_controls_visualControls__WEBPACK_IMPORTED_MODULE_6__.CustomCSSControl, {
        value: customCSS,
        onChange: v => setAttributes({
          customCSS: v
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_controls_visibilityControl__WEBPACK_IMPORTED_MODULE_7__.VisibilityControl, {
        hideXs: hideXs,
        hideSm: hideSm,
        hideMd: hideMd,
        hideLg: hideLg,
        hideXl: hideXl,
        hideXxl: hideXxl,
        setAttributes: setAttributes
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
      ...blockProps,
      className: combinedClassName,
      children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Container – used for grid, row and columns', 'wm')
    })]
  });
}

/***/ },

/***/ "./src/container/index.js"
/*!********************************!*\
  !*** ./src/container/index.js ***!
  \********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ "./src/container/style.scss");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./src/container/edit.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./block.json */ "./src/container/block.json");
/* harmony import */ var _block_preview_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./block-preview.png */ "./src/container/block-preview.png");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);
/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */


/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * All files containing `style` keyword are bundled together. The code used
 * gets applied both to the front of your site and to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */


/**
 * Internal dependencies
 */




/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */

// Custom SVG icon representing a container/layout block

const containerIcon = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("rect", {
    x: "2",
    y: "4",
    width: "20",
    height: "16",
    rx: "2",
    ry: "2",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("line", {
    x1: "2",
    y1: "9",
    x2: "22",
    y2: "9",
    stroke: "currentColor",
    strokeWidth: "1.5"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("line", {
    x1: "6",
    y1: "13",
    x2: "18",
    y2: "13",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeDasharray: "2 1"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("line", {
    x1: "6",
    y1: "16",
    x2: "14",
    y2: "16",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeDasharray: "2 1"
  })]
});
(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_3__.name, {
  icon: containerIcon,
  example: {
    attributes: {
      preview: true
    }
  },
  edit: _edit__WEBPACK_IMPORTED_MODULE_2__["default"],
  save: () => null
});

/***/ },

/***/ "./src/container/editor.scss"
/*!***********************************!*\
  !*** ./src/container/editor.scss ***!
  \***********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ },

/***/ "./src/container/style.scss"
/*!**********************************!*\
  !*** ./src/container/style.scss ***!
  \**********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ },

/***/ "./src/container/block-preview.png"
/*!*****************************************!*\
  !*** ./src/container/block-preview.png ***!
  \*****************************************/
(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/block-preview.3e05152f.png";

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

/***/ "@wordpress/i18n"
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
(module) {

module.exports = window["wp"]["i18n"];

/***/ },

/***/ "./src/container/block.json"
/*!**********************************!*\
  !*** ./src/container/block.json ***!
  \**********************************/
(module) {

module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"wmblocks/container","version":"0.1.0","title":"Container","category":"watermelon-blocks","icon":"layout","description":"Containers are a fundamental building block of Watermelon theme that contain, pad, and align your content within a given device or viewport.","example":{"attributes":{"padding":"p-3","customCSS":"height:80px;"}},"supports":{"html":false,"anchor":true},"attributes":{"padding":{"type":"string","default":"p-0"},"margin":{"type":"string","default":""},"anchor":{"type":"string","default":"containerID"},"customCSS":{"type":"string","default":""},"preview":{"type":"boolean","default":false},"backgroundColor":{"type":"string","default":""},"opacity":{"type":"number","default":100},"borderSides":{"type":"array","default":[],"items":{"type":"string"}},"borderRemove":{"type":"array","default":[],"items":{"type":"string"}},"borderColor":{"type":"string","default":""},"borderOpacityClass":{"type":"string","default":""},"borderOpacityCustom":{"type":"string","default":""},"borderSize":{"type":"string","default":""},"borderRadius":{"type":"string","default":""},"borderRadiusSize":{"type":"string","default":""},"textColor":{"type":"string","default":""},"hideXs":{"type":"boolean","default":false},"hideSm":{"type":"boolean","default":false},"hideMd":{"type":"boolean","default":false},"hideLg":{"type":"boolean","default":false},"hideXl":{"type":"boolean","default":false},"hideXxl":{"type":"boolean","default":false},"shadow":{"type":"string","default":""}},"textdomain":"wm","editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./style-index.css","render":"file:./render.php","viewScript":"file:./view.js"}');

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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (globalThis.importScripts) scriptUrl = globalThis.location + "";
/******/ 		var document = globalThis.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl + "../";
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
/******/ 			"container/index": 0,
/******/ 			"container/style-index": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["container/style-index"], () => (__webpack_require__("./src/container/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map