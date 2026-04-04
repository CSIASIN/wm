/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/card-image/edit.js"
/*!********************************!*\
  !*** ./src/card-image/edit.js ***!
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
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./editor.scss */ "./src/card-image/editor.scss");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);





const BG_OPTIONS = [{
  label: 'Default',
  value: ''
}, {
  label: 'Primary',
  value: 'text-bg-primary'
}, {
  label: 'Secondary',
  value: 'text-bg-secondary'
}, {
  label: 'Success',
  value: 'text-bg-success'
}, {
  label: 'Danger',
  value: 'text-bg-danger'
}, {
  label: 'Warning',
  value: 'text-bg-warning'
}, {
  label: 'Info',
  value: 'text-bg-info'
}, {
  label: 'Light',
  value: 'text-bg-light'
}, {
  label: 'Dark',
  value: 'text-bg-dark'
}];
const BTN_VARIANTS = [{
  label: 'Primary',
  value: 'btn-primary'
}, {
  label: 'Secondary',
  value: 'btn-secondary'
}, {
  label: 'Success',
  value: 'btn-success'
}, {
  label: 'Danger',
  value: 'btn-danger'
}, {
  label: 'Warning',
  value: 'btn-warning'
}, {
  label: 'Info',
  value: 'btn-info'
}, {
  label: 'Dark',
  value: 'btn-dark'
}, {
  label: 'Light',
  value: 'btn-light'
}, {
  label: 'Outline Primary',
  value: 'btn-outline-primary'
}, {
  label: 'Outline Secondary',
  value: 'btn-outline-secondary'
}];
const BADGE_VARIANTS = [{
  label: 'Primary',
  value: 'bg-primary text-white'
}, {
  label: 'Secondary',
  value: 'bg-secondary text-white'
}, {
  label: 'Success',
  value: 'bg-success text-white'
}, {
  label: 'Danger',
  value: 'bg-danger text-white'
}, {
  label: 'Warning',
  value: 'bg-warning text-dark'
}, {
  label: 'Info',
  value: 'bg-info text-dark'
}, {
  label: 'Dark',
  value: 'bg-dark text-white'
}, {
  label: 'Light',
  value: 'bg-light text-dark'
}];
const IMG_POSITION_OPTIONS = [{
  label: 'Top',
  value: 'top'
}, {
  label: 'Bottom',
  value: 'bottom'
}, {
  label: 'Overlay',
  value: 'overlay'
}, {
  label: 'Left (horizontal)',
  value: 'left'
}, {
  label: 'Right (horizontal)',
  value: 'right'
}];
const SHADOW_OPTIONS = [{
  label: 'None',
  value: ''
}, {
  label: 'Small',
  value: 'shadow-sm'
}, {
  label: 'Default',
  value: 'shadow'
}, {
  label: 'Large',
  value: 'shadow-lg'
}];
const IMG_COL_OPTIONS = [{
  label: '1/4 width',
  value: 'col-md-4'
}, {
  label: '1/3 width',
  value: 'col-md-4 col-lg-4'
}, {
  label: '1/2 width',
  value: 'col-md-6'
}, {
  label: '2/5 width',
  value: 'col-md-5'
}];
function Edit({
  attributes,
  setAttributes
}) {
  const {
    imageUrl,
    imageAlt,
    imageId,
    imagePosition,
    imageCol,
    title,
    subtitle,
    bodyText,
    showBadge,
    badgeText,
    badgeVariant,
    showLink,
    linkText,
    linkUrl,
    linkVariant,
    bgColor,
    borderColor,
    shadow,
    textAlign,
    noBorder
  } = attributes;
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps)({
    className: 'wmblocks-card-image-wrapper'
  });
  const cardClasses = ['card', bgColor, borderColor, shadow, noBorder ? 'border-0' : '', textAlign].filter(Boolean).join(' ');
  const isHorizontal = imagePosition === 'left' || imagePosition === 'right';
  const isOverlay = imagePosition === 'overlay';
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.BlockControls, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToolbarGroup, {
        children: IMG_POSITION_OPTIONS.map(p => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToolbarButton, {
          label: p.label,
          isPressed: imagePosition === p.value,
          onClick: () => setAttributes({
            imagePosition: p.value
          }),
          children: {
            top: '↑',
            bottom: '↓',
            overlay: '⊞',
            left: '←',
            right: '→'
          }[p.value]
        }, p.value))
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToolbarGroup, {
        children: ['text-start', 'text-center', 'text-end'].map(a => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToolbarButton, {
          icon: {
            'text-start': 'editor-alignleft',
            'text-center': 'editor-aligncenter',
            'text-end': 'editor-alignright'
          }[a],
          isPressed: textAlign === a,
          onClick: () => setAttributes({
            textAlign: textAlign === a ? '' : a
          })
        }, a))
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InspectorControls, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Image', 'wmblocks'),
        initialOpen: true,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Image Position', 'wmblocks'),
          value: imagePosition,
          options: IMG_POSITION_OPTIONS,
          onChange: v => setAttributes({
            imagePosition: v
          })
        }), isHorizontal && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Image Column Width', 'wmblocks'),
          value: imageCol,
          options: IMG_COL_OPTIONS,
          onChange: v => setAttributes({
            imageCol: v
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Image Alt Text', 'wmblocks'),
          value: imageAlt,
          onChange: v => setAttributes({
            imageAlt: v
          })
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Badge', 'wmblocks'),
        initialOpen: false,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Show Badge', 'wmblocks'),
          checked: !!showBadge,
          onChange: v => setAttributes({
            showBadge: v
          })
        }), showBadge && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Badge Text', 'wmblocks'),
            value: badgeText,
            onChange: v => setAttributes({
              badgeText: v
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Badge Colour', 'wmblocks'),
            value: badgeVariant,
            options: BADGE_VARIANTS,
            onChange: v => setAttributes({
              badgeVariant: v
            })
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Link Button', 'wmblocks'),
        initialOpen: false,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Show Button', 'wmblocks'),
          checked: !!showLink,
          onChange: v => setAttributes({
            showLink: v
          })
        }), showLink && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Button Text', 'wmblocks'),
            value: linkText,
            onChange: v => setAttributes({
              linkText: v
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Button URL', 'wmblocks'),
            value: linkUrl,
            onChange: v => setAttributes({
              linkUrl: v
            }),
            placeholder: "https://"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Button Style', 'wmblocks'),
            value: linkVariant,
            options: BTN_VARIANTS,
            onChange: v => setAttributes({
              linkVariant: v
            })
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Card Style', 'wmblocks'),
        initialOpen: false,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Background', 'wmblocks'),
          value: bgColor,
          options: BG_OPTIONS,
          onChange: v => setAttributes({
            bgColor: v
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Shadow', 'wmblocks'),
          value: shadow,
          options: SHADOW_OPTIONS,
          onChange: v => setAttributes({
            shadow: v
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('No Border', 'wmblocks'),
          checked: !!noBorder,
          onChange: v => setAttributes({
            noBorder: v
          })
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
      ...blockProps,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
        className: "wmblocks-card-image-label",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
          children: "Card + Image"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
          className: "wmblocks-card-image-chip",
          children: imagePosition
        }), bgColor && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
          className: "wmblocks-card-image-chip",
          children: bgColor
        }), shadow && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
          className: "wmblocks-card-image-chip",
          children: shadow
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
        className: cardClasses,
        style: {
          overflow: 'hidden'
        },
        children: isHorizontal ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
          className: "row g-0",
          children: [imagePosition === 'left' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
            className: imageCol,
            children: renderImageArea(imageUrl, imageId, imageAlt, setAttributes, true)
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
            className: 'col',
            children: renderCardBody({
              title,
              subtitle,
              bodyText,
              showBadge,
              badgeText,
              badgeVariant,
              showLink,
              linkText,
              linkUrl,
              linkVariant,
              isOverlay: false,
              setAttributes
            })
          }), imagePosition === 'right' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
            className: imageCol,
            children: renderImageArea(imageUrl, imageId, imageAlt, setAttributes, true)
          })]
        }) : isOverlay ?
        /*#__PURE__*/
        // Overlay card
        (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
          children: [renderImageArea(imageUrl, imageId, imageAlt, setAttributes, false), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
            className: "card-img-overlay",
            children: renderCardBody({
              title,
              subtitle,
              bodyText,
              showBadge,
              badgeText,
              badgeVariant,
              showLink,
              linkText,
              linkUrl,
              linkVariant,
              isOverlay: true,
              setAttributes
            })
          })]
        }) :
        /*#__PURE__*/
        // Top / Bottom card
        (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
          children: [imagePosition === 'top' && renderImageArea(imageUrl, imageId, imageAlt, setAttributes, false, 'top'), renderCardBody({
            title,
            subtitle,
            bodyText,
            showBadge,
            badgeText,
            badgeVariant,
            showLink,
            linkText,
            linkUrl,
            linkVariant,
            isOverlay: false,
            setAttributes
          }), imagePosition === 'bottom' && renderImageArea(imageUrl, imageId, imageAlt, setAttributes, false, 'bottom')]
        })
      })]
    })]
  });
}

// ── Canvas sub-renderers ───────────────────────────────────────────────────
function renderImageArea(imageUrl, imageId, imageAlt, setAttributes, isHorizontal, position = '') {
  const imgClass = isHorizontal ? 'img-fluid rounded-start h-100 w-100' : position === 'bottom' ? 'card-img-bottom' : 'card-img-top';
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.MediaUploadCheck, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.MediaUpload, {
      onSelect: media => setAttributes({
        imageUrl: media.url,
        imageId: media.id,
        imageAlt: media.alt || ''
      }),
      allowedTypes: ['image'],
      value: imageId,
      render: ({
        open
      }) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
        className: "wmblocks-card-img-area",
        onClick: open,
        children: [imageUrl ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("img", {
          src: imageUrl,
          alt: imageAlt,
          className: imgClass,
          style: {
            display: 'block',
            width: '100%',
            objectFit: 'cover',
            minHeight: isHorizontal ? '100%' : '180px',
            maxHeight: isHorizontal ? 'none' : '240px'
          }
        }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
          className: "wmblocks-card-img-placeholder",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
            children: "\uD83D\uDDBC"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
            children: isHorizontal ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Click to set image', 'wmblocks') : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Click to set card image', 'wmblocks')
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
          className: "wmblocks-card-img-overlay-btn",
          children: imageUrl ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Change image', 'wmblocks') : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Upload image', 'wmblocks')
        })]
      })
    })
  });
}
function renderCardBody({
  title,
  subtitle,
  bodyText,
  showBadge,
  badgeText,
  badgeVariant,
  showLink,
  linkText,
  linkUrl,
  linkVariant,
  isOverlay,
  setAttributes
}) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
    className: "card-body",
    children: [showBadge && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
      tagName: "span",
      className: 'badge mb-2 ' + badgeVariant,
      value: badgeText,
      onChange: v => setAttributes({
        badgeText: v
      }),
      allowedFormats: [],
      placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Badge…', 'wmblocks')
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
      tagName: "h5",
      className: "card-title",
      value: title,
      onChange: v => setAttributes({
        title: v
      }),
      allowedFormats: ['core/bold', 'core/italic'],
      placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Card title…', 'wmblocks')
    }), subtitle && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
      tagName: "h6",
      className: "card-subtitle mb-2 text-muted",
      value: subtitle,
      onChange: v => setAttributes({
        subtitle: v
      }),
      allowedFormats: ['core/bold', 'core/italic'],
      placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Subtitle…', 'wmblocks')
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
      tagName: "p",
      className: "card-text",
      value: bodyText,
      onChange: v => setAttributes({
        bodyText: v
      }),
      allowedFormats: ['core/bold', 'core/italic', 'core/link'],
      placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Card body text…', 'wmblocks')
    }), showLink && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
      tagName: "a",
      className: 'btn ' + linkVariant,
      value: linkText,
      onChange: v => setAttributes({
        linkText: v
      }),
      allowedFormats: [],
      placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Button text…', 'wmblocks')
    })]
  });
}

/***/ },

/***/ "./src/card-image/index.js"
/*!*********************************!*\
  !*** ./src/card-image/index.js ***!
  \*********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ "./src/card-image/style.scss");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./src/card-image/edit.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./block.json */ "./src/card-image/block.json");




(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_3__.name, {
  edit: _edit__WEBPACK_IMPORTED_MODULE_2__["default"],
  save: () => null // server-side rendered
});

/***/ },

/***/ "./src/card-image/editor.scss"
/*!************************************!*\
  !*** ./src/card-image/editor.scss ***!
  \************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ },

/***/ "./src/card-image/style.scss"
/*!***********************************!*\
  !*** ./src/card-image/style.scss ***!
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

/***/ "@wordpress/i18n"
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
(module) {

module.exports = window["wp"]["i18n"];

/***/ },

/***/ "./src/card-image/block.json"
/*!***********************************!*\
  !*** ./src/card-image/block.json ***!
  \***********************************/
(module) {

module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"wmblocks/card-image","version":"0.1.0","title":"Card with Image","category":"watermelon-blocks","icon":"format-image","description":"Bootstrap card with image, title, subtitle, body text, and an optional button link. Supports top, bottom, overlay, and horizontal (side-by-side) layouts.","example":{},"supports":{"html":false,"anchor":true},"attributes":{"imageUrl":{"type":"string","default":""},"imageAlt":{"type":"string","default":""},"imageId":{"type":"number","default":0},"imagePosition":{"type":"string","default":"top"},"imageCol":{"type":"string","default":"col-md-4"},"title":{"type":"string","default":"Card title"},"subtitle":{"type":"string","default":""},"bodyText":{"type":"string","default":"Some quick example text to build on the card title and make up the bulk of the card\'s content."},"showBadge":{"type":"boolean","default":false},"badgeText":{"type":"string","default":"New"},"badgeVariant":{"type":"string","default":"bg-primary"},"showLink":{"type":"boolean","default":true},"linkText":{"type":"string","default":"Go somewhere"},"linkUrl":{"type":"string","default":"#"},"linkVariant":{"type":"string","default":"btn-primary"},"bgColor":{"type":"string","default":""},"borderColor":{"type":"string","default":""},"shadow":{"type":"string","default":""},"textAlign":{"type":"string","default":""},"noBorder":{"type":"boolean","default":false}},"textdomain":"wm","editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./style-index.css","render":"file:./render.php","viewScript":"file:./view.js"}');

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
/******/ 			"card-image/index": 0,
/******/ 			"card-image/style-index": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["card-image/style-index"], () => (__webpack_require__("./src/card-image/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map