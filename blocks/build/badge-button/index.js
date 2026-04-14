/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/badge-button/edit.js"
/*!**********************************!*\
  !*** ./src/badge-button/edit.js ***!
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
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./editor.scss */ "./src/badge-button/editor.scss");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);






// ── Bootstrap Icons SVG paths for the BUTTON icon (inline) ────────────────

const BTN_ICONS = {
  'none': {
    label: 'None',
    path: ''
  },
  'envelope': {
    label: 'Envelope / Email',
    path: 'M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z'
  },
  'bell': {
    label: 'Bell / Alert',
    path: 'M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zM8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z'
  },
  'cart': {
    label: 'Shopping cart',
    path: 'M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z'
  },
  'person': {
    label: 'Person / Profile',
    path: 'M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z'
  },
  'chat': {
    label: 'Chat / Message',
    path: 'M2.678 11.894a1 1 0 0 1 .287.801 10.97 10.97 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8.06 8.06 0 0 0 8 14c3.996 0 7-2.807 7-6 0-3.192-3.004-6-7-6S1 4.808 1 8c0 1.468.617 2.83 1.678 3.894zm-.493 3.905a21.682 21.682 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a9.68 9.68 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105z'
  },
  'heart': {
    label: 'Heart',
    path: 'm8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z'
  },
  'star': {
    label: 'Star',
    path: 'M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z'
  },
  'search': {
    label: 'Search',
    path: 'M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.099 6.5 6.5 0 0 0 0 0zm-5.44 1.06a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11z'
  },
  'house': {
    label: 'Home',
    path: 'M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5ZM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5 5 5Z'
  },
  'gear': {
    label: 'Settings / Gear',
    path: 'M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492zM5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0z M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.892 3.433-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.892-1.64-.901-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52l-.094-.319zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115l.094-.319z'
  },
  'download': {
    label: 'Download',
    path: 'M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z'
  },
  'share': {
    label: 'Share',
    path: 'M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5z'
  },
  'arrow-right': {
    label: 'Arrow right',
    path: 'M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z'
  },
  'play-fill': {
    label: 'Play',
    path: 'M11.596 8.697l-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z'
  },
  'caret-down-fill': {
    label: 'Caret down',
    path: 'M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z'
  },
  'three-dots': {
    label: 'Three dots menu',
    path: 'M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z'
  }
};

// SVG icons available as the positioned badge/marker element
const BADGE_SVGS = {
  'caret-down-fill': {
    label: 'Caret down',
    path: 'M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z'
  },
  'caret-up-fill': {
    label: 'Caret up',
    path: 'M7.247 4.86l-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z'
  },
  'caret-left-fill': {
    label: 'Caret left',
    path: 'M3.86 8.753l5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z'
  },
  'caret-right-fill': {
    label: 'Caret right',
    path: 'M12.14 8.753l-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z'
  },
  'arrow-down': {
    label: 'Arrow down',
    path: 'M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z'
  },
  'arrow-up': {
    label: 'Arrow up',
    path: 'M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 0 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z'
  },
  'chevron-down': {
    label: 'Chevron down',
    path: 'M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'
  },
  'plus-circle-fill': {
    label: 'Plus circle',
    path: 'M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z'
  },
  'exclamation': {
    label: 'Exclamation',
    path: 'M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.553.553 0 0 1-1.1 0L7.1 4.995z'
  },
  'check2': {
    label: 'Check',
    path: 'M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z'
  },
  'fire': {
    label: 'Fire / Hot',
    path: 'M8 16c3.314 0 6-2 6-5.5 0-1.5-.5-4-2.5-6 .25 1.5-1.25 2-1.25 2C11 4 9 .5 6 0c.357 2 .5 4-2 6-1.25 1-2 2.729-2 4.5C2 14 4.686 16 8 16zm0-1c-1.657 0-3-1-3-2.75 0-.75.25-2 1.25-3C6.125 10 7 10.5 7 10.5c-.375-1.25.5-3.25 2-3.5-.179 1-.25 2 1 3 .625.5 1 1.364 1 2.25C11 14 9.657 15 8 15z'
  }
};

// ── Button variants ────────────────────────────────────────────────────────
const BTN_VARIANTS = [{
  label: 'Primary',
  value: 'btn-primary',
  hex: '#0d6efd',
  text: '#fff'
}, {
  label: 'Secondary',
  value: 'btn-secondary',
  hex: '#6c757d',
  text: '#fff'
}, {
  label: 'Success',
  value: 'btn-success',
  hex: '#198754',
  text: '#fff'
}, {
  label: 'Danger',
  value: 'btn-danger',
  hex: '#dc3545',
  text: '#fff'
}, {
  label: 'Warning',
  value: 'btn-warning',
  hex: '#ffc107',
  text: '#000'
}, {
  label: 'Info',
  value: 'btn-info',
  hex: '#0dcaf0',
  text: '#000'
}, {
  label: 'Light',
  value: 'btn-light',
  hex: '#f8f9fa',
  text: '#000'
}, {
  label: 'Dark',
  value: 'btn-dark',
  hex: '#212529',
  text: '#fff'
}, {
  label: 'Outline Primary',
  value: 'btn-outline-primary',
  hex: 'transparent',
  text: '#0d6efd'
}, {
  label: 'Outline Secondary',
  value: 'btn-outline-secondary',
  hex: 'transparent',
  text: '#6c757d'
}, {
  label: 'Outline Success',
  value: 'btn-outline-success',
  hex: 'transparent',
  text: '#198754'
}, {
  label: 'Outline Danger',
  value: 'btn-outline-danger',
  hex: 'transparent',
  text: '#dc3545'
}, {
  label: 'Outline Dark',
  value: 'btn-outline-dark',
  hex: 'transparent',
  text: '#212529'
}];

// ── Badge colour options ───────────────────────────────────────────────────
const BADGE_COLOURS = [{
  label: 'Danger (red)',
  value: 'text-bg-danger',
  hex: '#dc3545'
}, {
  label: 'Primary',
  value: 'text-bg-primary',
  hex: '#0d6efd'
}, {
  label: 'Secondary',
  value: 'text-bg-secondary',
  hex: '#6c757d'
}, {
  label: 'Success',
  value: 'text-bg-success',
  hex: '#198754'
}, {
  label: 'Warning',
  value: 'text-bg-warning',
  hex: '#ffc107'
}, {
  label: 'Info',
  value: 'text-bg-info',
  hex: '#0dcaf0'
}, {
  label: 'Dark',
  value: 'text-bg-dark',
  hex: '#212529'
}, {
  label: 'Light',
  value: 'text-bg-light',
  hex: '#f8f9fa'
}];

// Dot/indicator colours (no badge class, just bg + border)
const DOT_COLOURS = [{
  label: 'Danger (red)',
  value: 'bg-danger',
  hex: '#dc3545'
}, {
  label: 'Primary',
  value: 'bg-primary',
  hex: '#0d6efd'
}, {
  label: 'Success',
  value: 'bg-success',
  hex: '#198754'
}, {
  label: 'Warning',
  value: 'bg-warning',
  hex: '#ffc107'
}, {
  label: 'Info',
  value: 'bg-info',
  hex: '#0dcaf0'
}, {
  label: 'Dark',
  value: 'bg-dark',
  hex: '#212529'
}];

// ── Badge position grid ────────────────────────────────────────────────────
// 9 positions: top × start combinations with translate-middle
const POSITION_GRID = [{
  topVal: 'top-0',
  startVal: 'start-0',
  translate: 'translate-middle',
  label: '↖ Top Start'
}, {
  topVal: 'top-0',
  startVal: 'start-50',
  translate: 'translate-middle',
  label: '⬆ Top Center'
}, {
  topVal: 'top-0',
  startVal: 'start-100',
  translate: 'translate-middle',
  label: '↗ Top End'
}, {
  topVal: 'top-50',
  startVal: 'start-0',
  translate: 'translate-middle',
  label: '⬅ Mid Start'
}, {
  topVal: 'top-50',
  startVal: 'start-50',
  translate: 'translate-middle',
  label: '• Center'
}, {
  topVal: 'top-50',
  startVal: 'start-100',
  translate: 'translate-middle',
  label: '➡ Mid End'
}, {
  topVal: 'top-100',
  startVal: 'start-0',
  translate: 'translate-middle',
  label: '↙ Bot Start'
}, {
  topVal: 'top-100',
  startVal: 'start-50',
  translate: 'translate-middle',
  label: '⬇ Bot Center'
}, {
  topVal: 'top-100',
  startVal: 'start-100',
  translate: 'translate-middle',
  label: '↘ Bot End'
}];

// Helper to look up hex from badge colour value
function badgeHex(value, type, dotColour) {
  if (type === 'dot') {
    return DOT_COLOURS.find(c => c.value === dotColour)?.hex || '#dc3545';
  }
  return BADGE_COLOURS.find(c => c.value === value)?.hex || '#dc3545';
}

// Helper to build SVG element
function makeSvg(path, cls = '', style = {}) {
  if (!path) return null;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 16 16",
    width: "1em",
    height: "1em",
    fill: "currentColor",
    className: 'bi ' + cls,
    style: style,
    "aria-hidden": "true",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("path", {
      d: path
    })
  });
}

// ── Edit component ─────────────────────────────────────────────────────────
function Edit({
  attributes,
  setAttributes
}) {
  const {
    btnLabel,
    btnVariant,
    btnSize,
    btnHref,
    btnTarget,
    btnIconName,
    btnIconPosition,
    badgeType,
    badgeLabel,
    badgeColour,
    badgeShape,
    badgeTop,
    badgeStart,
    badgeTranslate,
    badgeBorderColour,
    badgeSvgName,
    badgeA11yLabel,
    alignment
  } = attributes;
  const [showBtnIconPicker, setShowBtnIconPicker] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
  const [showSvgPicker, setShowSvgPicker] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps)({
    className: 'wmblocks-bb-wrapper'
  });

  // ── Lookup helpers ────────────────────────────────────────────────
  const btnV = BTN_VARIANTS.find(v => v.value === btnVariant) || BTN_VARIANTS[0];
  const badgeHexVal = badgeHex(badgeColour, badgeType, badgeColour);

  // Find the active position from the grid
  const activePos = POSITION_GRID.find(p => p.topVal === badgeTop && p.startVal === badgeStart) || POSITION_GRID[2]; // default: top-end

  // ── Live preview renders ───────────────────────────────────────────

  // The button's own icon (before/after label)
  const btnIcon = btnIconName && btnIconName !== 'none' && BTN_ICONS[btnIconName]?.path ? makeSvg(BTN_ICONS[btnIconName].path, '', {
    fontSize: '1em',
    verticalAlign: '-0.125em'
  }) : null;

  // The positioned badge / dot / svg
  function renderBadge() {
    const posClass = `position-absolute ${badgeTop} ${badgeStart} ${badgeTranslate}`;
    if (badgeType === 'text') {
      // Pill/square badge with count text
      const cls = `${posClass} badge ${badgeShape} ${badgeColour} ${badgeBorderColour ? 'border ' + badgeBorderColour : ''}`;
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
        className: cls,
        style: {
          fontSize: '10px',
          lineHeight: 1.3,
          minWidth: '18px',
          textAlign: 'center'
        },
        children: badgeLabel || '+99'
      });
    }
    if (badgeType === 'dot') {
      // Dot indicator — no text, just coloured circle
      const dotBg = DOT_COLOURS.find(c => c.value === badgeColour)?.value || 'bg-danger';
      const cls = `${posClass} p-2 ${dotBg} border border-2 border-white rounded-circle`;
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
        className: cls,
        style: {
          width: '12px',
          height: '12px',
          display: 'inline-block',
          boxSizing: 'content-box'
        }
      });
    }
    if (badgeType === 'svg') {
      // SVG marker positioned on the button
      const svgPath = BADGE_SVGS[badgeSvgName]?.path || BADGE_SVGS['caret-down-fill'].path;
      return makeSvg(svgPath, posClass + ' mt-1', {
        fill: btnV.hex === 'transparent' ? btnV.text : btnV.hex,
        fontSize: '1em'
      });
    }
    return null;
  }

  // ── Alignment ─────────────────────────────────────────────────────
  const alignStyle = {
    left: 'flex-start',
    center: 'center',
    right: 'flex-end'
  }[alignment] || 'flex-start';
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.BlockControls, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToolbarGroup, {
        children: BTN_VARIANTS.slice(0, 8).map(v => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToolbarButton, {
          label: v.label,
          isPressed: btnVariant === v.value,
          onClick: () => setAttributes({
            btnVariant: v.value
          }),
          style: {
            background: btnVariant === v.value ? v.hex : '',
            color: btnVariant === v.value ? v.text : '',
            fontWeight: 700,
            fontSize: '10px',
            minWidth: '38px'
          },
          children: v.label.slice(0, 3)
        }, v.value))
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToolbarGroup, {
        children: ['text', 'dot', 'svg'].map(t => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToolbarButton, {
          label: t.charAt(0).toUpperCase() + t.slice(1) + ' badge',
          isPressed: badgeType === t,
          onClick: () => setAttributes({
            badgeType: t
          }),
          children: [{
            text: 'T',
            dot: '•',
            svg: '◈'
          }[t], " ", t.charAt(0).toUpperCase() + t.slice(1)]
        }, t))
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToolbarGroup, {
        children: ['left', 'center', 'right'].map(a => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToolbarButton, {
          icon: `editor-align${a}`,
          label: 'Align ' + a,
          isPressed: alignment === a,
          onClick: () => setAttributes({
            alignment: a
          })
        }, a))
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InspectorControls, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Button', 'wmblocks'),
        initialOpen: true,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Variant', 'wmblocks'),
          value: btnVariant,
          options: BTN_VARIANTS.map(v => ({
            label: v.label,
            value: v.value
          })),
          onChange: v => setAttributes({
            btnVariant: v
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Size', 'wmblocks'),
          value: btnSize,
          options: [{
            label: 'Default',
            value: ''
          }, {
            label: 'Large',
            value: 'btn-lg'
          }, {
            label: 'Small',
            value: 'btn-sm'
          }],
          onChange: v => setAttributes({
            btnSize: v
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Link URL (leave empty for <button>)', 'wmblocks'),
          value: btnHref,
          onChange: v => setAttributes({
            btnHref: v
          }),
          placeholder: "https://"
        }), btnHref && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Open in', 'wmblocks'),
          value: btnTarget,
          options: [{
            label: 'Same tab',
            value: '_self'
          }, {
            label: 'New tab',
            value: '_blank'
          }],
          onChange: v => setAttributes({
            btnTarget: v
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Icon position', 'wmblocks'),
          value: btnIconPosition,
          options: [{
            label: 'Before label',
            value: 'before'
          }, {
            label: 'After label',
            value: 'after'
          }],
          onChange: v => setAttributes({
            btnIconPosition: v
          })
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Badge', 'wmblocks'),
        initialOpen: true,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Badge type', 'wmblocks'),
          value: badgeType,
          options: [{
            label: 'Text badge (pill/square with count)',
            value: 'text'
          }, {
            label: 'Dot indicator (no text)',
            value: 'dot'
          }, {
            label: 'SVG marker (icon positioned on btn)',
            value: 'svg'
          }],
          onChange: v => setAttributes({
            badgeType: v
          })
        }), badgeType === 'text' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Badge colour', 'wmblocks'),
            value: badgeColour,
            options: BADGE_COLOURS.map(c => ({
              label: c.label,
              value: c.value
            })),
            onChange: v => setAttributes({
              badgeColour: v
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Shape', 'wmblocks'),
            value: badgeShape,
            options: [{
              label: 'Pill (rounded-pill)',
              value: 'rounded-pill'
            }, {
              label: 'Square (default)',
              value: ''
            }, {
              label: 'Circle',
              value: 'rounded-circle'
            }],
            onChange: v => setAttributes({
              badgeShape: v
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Border colour', 'wmblocks'),
            value: badgeBorderColour,
            options: [{
              label: 'None',
              value: ''
            }, {
              label: 'White',
              value: 'border-white'
            }, {
              label: 'Light',
              value: 'border-light'
            }, {
              label: 'Dark',
              value: 'border-dark'
            }, {
              label: 'Primary',
              value: 'border-primary'
            }],
            onChange: v => setAttributes({
              badgeBorderColour: v
            })
          })]
        }), badgeType === 'dot' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Dot colour', 'wmblocks'),
          value: badgeColour,
          options: DOT_COLOURS.map(c => ({
            label: c.label,
            value: c.value
          })),
          onChange: v => setAttributes({
            badgeColour: v
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Visually hidden a11y text', 'wmblocks'),
          value: badgeA11yLabel,
          onChange: v => setAttributes({
            badgeA11yLabel: v
          }),
          help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Screen reader text inside the badge (e.g. "unread messages"). Required for accessibility.', 'wmblocks')
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Alignment', 'wmblocks'),
        initialOpen: false,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Block alignment', 'wmblocks'),
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
        })
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
      ...blockProps,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
        className: "wmblocks-bb-meta-strip",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
          className: "wmblocks-bb-chip wmblocks-bb-chip--main",
          children: "Badge on Button"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
          className: "wmblocks-bb-chip",
          children: btnVariant.replace('btn-', '')
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("span", {
          className: "wmblocks-bb-chip",
          children: ["badge: ", badgeType]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
          className: "wmblocks-bb-chip",
          children: activePos.label
        }), btnIconName && btnIconName !== 'none' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("span", {
          className: "wmblocks-bb-chip",
          children: ["icon: ", btnIconName]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
        className: "wmblocks-bb-canvas-row",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
          className: "wmblocks-bb-preview-area",
          style: {
            justifyContent: alignStyle
          },
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
            style: {
              padding: '24px 32px',
              display: 'inline-flex'
            },
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("button", {
              type: "button",
              className: ['btn', btnVariant, btnSize, 'position-relative'].filter(Boolean).join(' '),
              style: {
                cursor: 'default'
              },
              onClick: e => e.preventDefault(),
              children: [btnIcon && btnIconPosition === 'before' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
                style: {
                  marginRight: '6px',
                  display: 'inline-flex',
                  verticalAlign: 'middle'
                },
                children: btnIcon
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
                tagName: "span",
                value: btnLabel,
                onChange: v => setAttributes({
                  btnLabel: v
                }),
                allowedFormats: [],
                placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Button text…', 'wmblocks'),
                style: {
                  cursor: 'text'
                }
              }), btnIcon && btnIconPosition === 'after' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
                style: {
                  marginLeft: '6px',
                  display: 'inline-flex',
                  verticalAlign: 'middle'
                },
                children: btnIcon
              }), renderBadge()]
            })
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
          className: "wmblocks-bb-controls-panel",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
            className: "wmblocks-bb-ctrl-section",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
              className: "wmblocks-bb-ctrl-heading",
              children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Button style', 'wmblocks')
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
              className: "wmblocks-bb-btn-swatches",
              children: BTN_VARIANTS.slice(0, 8).map(v => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("button", {
                className: 'wmblocks-bb-btn-swatch' + (btnVariant === v.value ? ' is-active' : ''),
                style: {
                  background: v.hex === 'transparent' ? '#fff' : v.hex,
                  color: v.text,
                  border: v.hex === 'transparent' ? `1px solid ${v.text}` : '2px solid transparent'
                },
                onClick: () => setAttributes({
                  btnVariant: v.value
                }),
                title: v.label,
                children: v.label.slice(0, 3)
              }, v.value))
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
              className: "wmblocks-bb-btn-swatches wmblocks-bb-btn-swatches--outline",
              children: BTN_VARIANTS.slice(8).map(v => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("button", {
                className: 'wmblocks-bb-btn-swatch wmblocks-bb-btn-swatch--outline' + (btnVariant === v.value ? ' is-active' : ''),
                style: {
                  borderColor: v.text,
                  color: v.text
                },
                onClick: () => setAttributes({
                  btnVariant: v.value
                }),
                title: v.label,
                children: v.label.replace('Outline ', '').slice(0, 3)
              }, v.value))
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
            className: "wmblocks-bb-ctrl-section",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
              className: "wmblocks-bb-ctrl-heading",
              children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Button icon', 'wmblocks')
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
              className: "wmblocks-bb-icon-row",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("button", {
                className: "wmblocks-bb-icon-toggle",
                onClick: () => setShowBtnIconPicker(!showBtnIconPicker),
                children: [btnIconName && btnIconName !== 'none' && BTN_ICONS[btnIconName]?.path ? makeSvg(BTN_ICONS[btnIconName].path, '', {
                  fontSize: '16px'
                }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
                  style: {
                    fontSize: '12px',
                    color: '#aaa'
                  },
                  children: "No icon"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
                  children: showBtnIconPicker ? '▲' : '▼'
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                className: "wmblocks-bb-icon-pos-pills",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("button", {
                  className: 'wmblocks-bb-pill' + (btnIconPosition === 'before' ? ' is-active' : ''),
                  onClick: () => setAttributes({
                    btnIconPosition: 'before'
                  }),
                  children: "\u2190 Before"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("button", {
                  className: 'wmblocks-bb-pill' + (btnIconPosition === 'after' ? ' is-active' : ''),
                  onClick: () => setAttributes({
                    btnIconPosition: 'after'
                  }),
                  children: "After \u2192"
                })]
              })]
            }), showBtnIconPicker && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
              className: "wmblocks-bb-mini-icon-grid",
              children: Object.entries(BTN_ICONS).map(([key, ic]) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("button", {
                className: 'wmblocks-bb-mini-icon-btn' + (btnIconName === key ? ' is-selected' : ''),
                onClick: () => {
                  setAttributes({
                    btnIconName: key
                  });
                  setShowBtnIconPicker(false);
                },
                title: ic.label,
                children: [ic.path ? makeSvg(ic.path, '', {
                  display: 'block',
                  margin: '0 auto 2px',
                  fontSize: '16px'
                }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
                  style: {
                    fontSize: '8px',
                    color: '#aaa'
                  },
                  children: "\u2715"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
                  className: "wmblocks-bb-mini-icon-label",
                  children: key === 'none' ? 'None' : ic.label.split(' / ')[0]
                })]
              }, key))
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
            className: "wmblocks-bb-ctrl-section",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
              className: "wmblocks-bb-ctrl-heading",
              children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Badge type', 'wmblocks')
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
              className: "wmblocks-bb-type-pills",
              children: [{
                v: 'text',
                l: 'T Text'
              }, {
                v: 'dot',
                l: '• Dot'
              }, {
                v: 'svg',
                l: '◈ SVG'
              }].map(t => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("button", {
                className: 'wmblocks-bb-pill' + (badgeType === t.v ? ' is-active' : ''),
                onClick: () => setAttributes({
                  badgeType: t.v
                }),
                children: t.l
              }, t.v))
            })]
          }), badgeType === 'text' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
            className: "wmblocks-bb-ctrl-section",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
              className: "wmblocks-bb-ctrl-heading",
              children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Badge label', 'wmblocks')
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("input", {
              type: "text",
              className: "wmblocks-bb-text-input",
              value: badgeLabel,
              onChange: e => setAttributes({
                badgeLabel: e.target.value
              }),
              placeholder: "+99",
              maxLength: 8
            })]
          }), badgeType !== 'svg' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
            className: "wmblocks-bb-ctrl-section",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
              className: "wmblocks-bb-ctrl-heading",
              children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Badge colour', 'wmblocks')
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
              className: "wmblocks-bb-badge-swatches",
              children: (badgeType === 'dot' ? DOT_COLOURS : BADGE_COLOURS).map(c => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("button", {
                className: 'wmblocks-bb-badge-swatch' + (badgeColour === c.value ? ' is-active' : ''),
                style: {
                  background: c.hex,
                  outline: badgeColour === c.value ? `3px solid rgba(0,0,0,.3)` : 'none',
                  outlineOffset: '2px'
                },
                onClick: () => setAttributes({
                  badgeColour: c.value
                }),
                title: c.label
              }, c.value))
            })]
          }), badgeType === 'text' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
            className: "wmblocks-bb-ctrl-section",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
              className: "wmblocks-bb-ctrl-heading",
              children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Badge shape', 'wmblocks')
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
              className: "wmblocks-bb-type-pills",
              children: [{
                v: 'rounded-pill',
                l: '💊 Pill'
              }, {
                v: '',
                l: '▪ Square'
              }, {
                v: 'rounded-circle',
                l: '⚫ Circle'
              }].map(s => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("button", {
                className: 'wmblocks-bb-pill' + (badgeShape === s.v ? ' is-active' : ''),
                onClick: () => setAttributes({
                  badgeShape: s.v
                }),
                children: s.l
              }, s.v))
            })]
          }), badgeType === 'svg' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
            className: "wmblocks-bb-ctrl-section",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
              className: "wmblocks-bb-ctrl-heading",
              children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('SVG marker', 'wmblocks')
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("button", {
              className: "wmblocks-bb-icon-toggle",
              onClick: () => setShowSvgPicker(!showSvgPicker),
              children: [makeSvg(BADGE_SVGS[badgeSvgName]?.path || '', '', {
                fontSize: '16px'
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
                style: {
                  fontSize: '11px'
                },
                children: BADGE_SVGS[badgeSvgName]?.label || badgeSvgName
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
                children: showSvgPicker ? '▲' : '▼'
              })]
            }), showSvgPicker && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
              className: "wmblocks-bb-mini-icon-grid",
              children: Object.entries(BADGE_SVGS).map(([key, ic]) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("button", {
                className: 'wmblocks-bb-mini-icon-btn' + (badgeSvgName === key ? ' is-selected' : ''),
                onClick: () => {
                  setAttributes({
                    badgeSvgName: key
                  });
                  setShowSvgPicker(false);
                },
                title: ic.label,
                children: [makeSvg(ic.path, '', {
                  display: 'block',
                  margin: '0 auto 2px',
                  fontSize: '16px'
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
                  className: "wmblocks-bb-mini-icon-label",
                  children: ic.label
                })]
              }, key))
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
            className: "wmblocks-bb-ctrl-section",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
              className: "wmblocks-bb-ctrl-heading",
              children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Badge position', 'wmblocks')
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
              className: "wmblocks-bb-pos-grid",
              children: POSITION_GRID.map((pos, i) => {
                const isActive = pos.topVal === badgeTop && pos.startVal === badgeStart;
                // Badge colour indicator in the grid cell
                const cellBg = isActive ? badgeHexVal : '#e9ecef';
                const row = Math.floor(i / 3);
                const col = i % 3;
                return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("button", {
                  className: 'wmblocks-bb-pos-cell' + (isActive ? ' is-active' : ''),
                  onClick: () => setAttributes({
                    badgeTop: pos.topVal,
                    badgeStart: pos.startVal,
                    badgeTranslate: pos.translate
                  }),
                  title: pos.label,
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
                    className: "wmblocks-bb-pos-dot",
                    style: {
                      background: cellBg
                    }
                  })
                }, i);
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
              style: {
                fontSize: '10px',
                color: '#aaa',
                marginTop: '4px',
                fontStyle: 'italic'
              },
              children: [activePos.label, " \u2014 ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("code", {
                style: {
                  fontSize: '10px',
                  background: '#f1f1f1',
                  padding: '0 3px',
                  borderRadius: '2px'
                },
                children: [badgeTop, " ", badgeStart, " ", badgeTranslate]
              })]
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
            className: "wmblocks-bb-ctrl-section",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
              className: "wmblocks-bb-ctrl-heading",
              children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Link URL', 'wmblocks')
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("input", {
              type: "url",
              className: "wmblocks-bb-text-input wmblocks-bb-text-input--url",
              value: btnHref,
              onChange: e => setAttributes({
                btnHref: e.target.value
              }),
              placeholder: "https:// (leave empty for <button>)"
            })]
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
        className: "wmblocks-bb-footer-hint",
        children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Click button text to edit inline · all badge & button options in right panel · sidebar for full settings →', 'wmblocks')
      })]
    })]
  });
}

/***/ },

/***/ "./src/badge-button/index.js"
/*!***********************************!*\
  !*** ./src/badge-button/index.js ***!
  \***********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ "./src/badge-button/style.scss");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./src/badge-button/edit.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./block.json */ "./src/badge-button/block.json");




(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_3__.name, {
  edit: _edit__WEBPACK_IMPORTED_MODULE_2__["default"],
  save: () => null // fully server-side rendered
});

/***/ },

/***/ "./src/badge-button/editor.scss"
/*!**************************************!*\
  !*** ./src/badge-button/editor.scss ***!
  \**************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ },

/***/ "./src/badge-button/style.scss"
/*!*************************************!*\
  !*** ./src/badge-button/style.scss ***!
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

/***/ "./src/badge-button/block.json"
/*!*************************************!*\
  !*** ./src/badge-button/block.json ***!
  \*************************************/
(module) {

module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"wmblocks/badge-button","version":"0.1.0","title":"Badge on Button","category":"watermelon-blocks","icon":"marker","description":"Bootstrap positioned badge on a button — a button with an absolutely-positioned badge, dot indicator, or SVG marker. Uses position-relative on the button and position-absolute with top/start/translate-middle on the badge. Optionally adds a Bootstrap Icon inside the button itself.","example":{},"supports":{"html":false,"anchor":true},"attributes":{"btnLabel":{"type":"string","default":"Inbox"},"btnVariant":{"type":"string","default":"btn-primary"},"btnSize":{"type":"string","default":""},"btnHref":{"type":"string","default":""},"btnTarget":{"type":"string","default":"_self"},"btnIconName":{"type":"string","default":""},"btnIconPosition":{"type":"string","default":"before"},"badgeType":{"type":"string","default":"text"},"badgeLabel":{"type":"string","default":"+99"},"badgeColour":{"type":"string","default":"text-bg-danger"},"badgeShape":{"type":"string","default":"rounded-pill"},"badgeTop":{"type":"string","default":"top-0"},"badgeStart":{"type":"string","default":"start-100"},"badgeTranslate":{"type":"string","default":"translate-middle"},"badgeBorderColour":{"type":"string","default":""},"badgeSvgName":{"type":"string","default":"caret-down-fill"},"badgeA11yLabel":{"type":"string","default":"unread messages"},"alignment":{"type":"string","default":"left"}},"textdomain":"wm","editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./style-index.css","render":"file:./render.php","viewScript":"file:./view.js"}');

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
/******/ 			"badge-button/index": 0,
/******/ 			"badge-button/style-index": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["badge-button/style-index"], () => (__webpack_require__("./src/badge-button/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map