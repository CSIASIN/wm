/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./controls/background.js"
/*!********************************!*\
  !*** ./controls/background.js ***!
  \********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BackgroundControl: () => (/* binding */ BackgroundControl)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);




const BackgroundControl = ({
  bgImageUrl,
  bgImageId,
  bgGradient,
  bgVideoUrl,
  bgVideoId,
  setAttributes
}) => {
  // Helpers to clear competing backgrounds when a new one is applied
  const onSelectImage = media => {
    setAttributes({
      bgImageId: media.id,
      bgImageUrl: media.url,
      bgGradient: '',
      bgVideoId: 0,
      bgVideoUrl: ''
    });
  };
  const onSelectGradient = currentGradient => {
    setAttributes({
      // If Gutenberg sends undefined (when cleared), save it as an empty string
      bgGradient: currentGradient || '',
      bgImageId: 0,
      bgImageUrl: '',
      bgVideoId: 0,
      bgVideoUrl: ''
    });
  };
  const onSelectVideo = media => {
    setAttributes({
      bgVideoId: media.id,
      bgVideoUrl: media.url,
      bgImageId: 0,
      bgImageUrl: '',
      bgGradient: ''
    });
  };

  // Helper to completely clear all backgrounds
  const clearBackgrounds = () => {
    setAttributes({
      bgImageId: 0,
      bgImageUrl: '',
      bgGradient: '',
      bgVideoId: 0,
      bgVideoUrl: ''
    });
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Advanced Background', 'wm'),
    initialOpen: false,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TabPanel, {
      className: "wm-background-tabs",
      activeClass: "is-active",
      tabs: [{
        name: 'image',
        title: 'Image',
        className: 'tab-image'
      }, {
        name: 'gradient',
        title: 'Gradient',
        className: 'tab-gradient'
      }, {
        name: 'video',
        title: 'Video',
        className: 'tab-video'
      }],
      children: tab => {
        if (tab.name === 'image') {
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
            className: "wm-bg-image-control",
            style: {
              marginTop: '15px'
            },
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.MediaUploadCheck, {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.MediaUpload, {
                onSelect: onSelectImage,
                allowedTypes: ['image'],
                value: bgImageId,
                render: ({
                  open
                }) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
                  children: bgImageUrl ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
                    style: {
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '10px'
                    },
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("img", {
                      src: bgImageUrl,
                      alt: "Background preview",
                      style: {
                        width: '100%',
                        borderRadius: '4px'
                      }
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
                      variant: "secondary",
                      onClick: open,
                      children: "Replace Image"
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
                      variant: "link",
                      isDestructive: true,
                      onClick: clearBackgrounds,
                      children: "Remove Image"
                    })]
                  }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
                    variant: "primary",
                    onClick: open,
                    style: {
                      width: '100%',
                      justifyContent: 'center'
                    },
                    children: "Select Image"
                  })
                })
              })
            })
          });
        }
        if (tab.name === 'gradient') {
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
            className: "wm-bg-gradient-control",
            style: {
              marginTop: '15px'
            },
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.GradientPicker
            // FIX: Force empty strings to be 'undefined' so the parser doesn't crash
            , {
              value: bgGradient || undefined,
              onChange: onSelectGradient,
              gradients: [{
                name: 'Subtle Ash',
                gradient: 'linear-gradient(135deg, #fdfbfb 0%, #ebedee 100%)',
                slug: 'subtle-ash'
              }, {
                name: 'Night Sky',
                gradient: 'linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)',
                slug: 'night-sky'
              }]
            }), bgGradient && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
              variant: "link",
              isDestructive: true,
              onClick: clearBackgrounds,
              style: {
                marginTop: '10px'
              },
              children: "Clear Gradient"
            })]
          });
        }
        if (tab.name === 'video') {
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
            className: "wm-bg-video-control",
            style: {
              marginTop: '15px'
            },
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
              style: {
                fontSize: '12px',
                color: '#666'
              },
              children: "Video will play automatically, muted, in a loop behind your content."
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.MediaUploadCheck, {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.MediaUpload, {
                onSelect: onSelectVideo,
                allowedTypes: ['video'],
                value: bgVideoId,
                render: ({
                  open
                }) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
                  children: bgVideoUrl ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
                    style: {
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '10px'
                    },
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("video", {
                      src: bgVideoUrl,
                      style: {
                        width: '100%',
                        borderRadius: '4px'
                      },
                      muted: true
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
                      variant: "secondary",
                      onClick: open,
                      children: "Replace Video"
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
                      variant: "link",
                      isDestructive: true,
                      onClick: clearBackgrounds,
                      children: "Remove Video"
                    })]
                  }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
                    variant: "primary",
                    onClick: open,
                    style: {
                      width: '100%',
                      justifyContent: 'center'
                    },
                    children: "Select Video"
                  })
                })
              })
            })]
          });
        }
      }
    })
  });
};

/***/ },

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
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);




const PADDING_OPTIONS = [{
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

// Reusable Advanced Multiselect Engine Component
function SpacingMultiSelect({
  title,
  value,
  options,
  onChange
}) {
  const [searchTerm, setSearchTerm] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useState)('');

  // Parse the saved space-separated string back to an active elements array
  const activeClasses = value && typeof value === 'string' ? value.split(' ').filter(Boolean) : [];

  // Filter list entries based on live typing criteria matches
  const filteredOptions = options.filter(opt => opt.label.toLowerCase().includes(searchTerm.toLowerCase()) || opt.value.toLowerCase().includes(searchTerm.toLowerCase()));
  const handleToggle = (optValue, isChecked) => {
    let updatedList;
    if (isChecked) {
      updatedList = [...activeClasses, optValue];
    } else {
      updatedList = activeClasses.filter(v => v !== optValue);
    }
    onChange(updatedList.join(' '));
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, {
    title: title,
    initialOpen: false,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '8px'
      },
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("span", {
        style: {
          fontSize: '11px',
          color: '#666',
          fontWeight: '500'
        },
        children: [activeClasses.length, " ", (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Selected', 'wm')]
      }), activeClasses.length > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
        isDestructive: true,
        isLink: true,
        onClick: () => onChange(''),
        style: {
          padding: 0,
          height: 'auto',
          fontSize: '12px',
          textDecoration: 'none'
        },
        children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Clear All', 'wm')
      })]
    }), activeClasses.length > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
      style: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: '4px',
        marginBottom: '10px',
        background: '#f0f0f0',
        padding: '6px',
        borderRadius: '4px'
      },
      children: activeClasses.map(val => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("span", {
        style: {
          background: '#fff',
          border: '1px solid #ccc',
          padding: '2px 6px',
          borderRadius: '4px',
          fontSize: '11px',
          display: 'inline-flex',
          alignItems: 'center',
          gap: '6px',
          fontWeight: '500'
        },
        children: [val, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
          onClick: () => handleToggle(val, false),
          style: {
            cursor: 'pointer',
            color: '#cc0000',
            fontWeight: 'bold',
            fontSize: '12px'
          },
          role: "button",
          tabIndex: 0,
          children: "\xD7"
        })]
      }, val))
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
      placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Search utility classes (e.g., top, 3)...', 'wm'),
      value: searchTerm,
      onChange: setSearchTerm,
      style: {
        marginBottom: '8px'
      }
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
      style: {
        maxHeight: '160px',
        overflowY: 'auto',
        border: '1px solid #ddd',
        padding: '8px 10px',
        borderRadius: '4px',
        background: '#fff'
      },
      children: filteredOptions.length === 0 ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
        style: {
          color: '#888',
          fontStyle: 'italic',
          fontSize: '12px',
          textAlign: 'center',
          padding: '10px 0'
        },
        children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('No matching classes found', 'wm')
      }) : filteredOptions.map(opt => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.CheckboxControl, {
        label: opt.label,
        checked: activeClasses.includes(opt.value),
        onChange: checked => handleToggle(opt.value, checked),
        style: {
          marginBottom: '6px'
        }
      }, opt.value))
    })]
  });
}
function PaddingControl({
  value,
  onChange
}) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(SpacingMultiSelect, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Padding', 'wm'),
    value: value,
    options: PADDING_OPTIONS,
    onChange: onChange
  });
}
function MarginControl({
  value,
  onChange
}) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(SpacingMultiSelect, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Margin', 'wm'),
    value: value,
    options: MARGIN_OPTIONS,
    onChange: onChange
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

/***/ "./src/card-footer/edit.js"
/*!*********************************!*\
  !*** ./src/card-footer/edit.js ***!
  \*********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Edit)
/* harmony export */ });
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _controls_spacingControls__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../controls/spacingControls */ "./controls/spacingControls.js");
/* harmony import */ var _controls_visualControls__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../controls/visualControls */ "./controls/visualControls.js");
/* harmony import */ var _controls_visibilityControl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../controls/visibilityControl */ "./controls/visibilityControl.js");
/* harmony import */ var _controls_background__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../controls/background */ "./controls/background.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);







function Edit({
  attributes,
  setAttributes
}) {
  const {
    content,
    margin,
    padding,
    customCSS,
    backgroundColor,
    opacity,
    shadow,
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
    bgImageUrl,
    bgImageId,
    bgGradient,
    bgVideoUrl,
    bgVideoId
  } = attributes;
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
  const dynamicBgStyles = bgImageUrl ? {
    backgroundImage: `url(${bgImageUrl})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  } : bgGradient ? {
    background: bgGradient
  } : {};
  const hasVideo = !!bgVideoUrl;
  const borderClasses = [...(borderSides || []), ...(borderRemove || []), borderColor, borderOpacityClass, borderSize, borderRadius, borderRadiusSize].filter(Boolean).join(' ');
  const visibilityClasses = [hideXs ? 'd-none d-sm-block' : '', hideSm ? 'd-sm-none d-md-block' : '', hideMd ? 'd-md-none d-lg-block' : '', hideLg ? 'd-lg-none d-xl-block' : '', hideXl ? 'd-xl-none d-xxl-block' : '', hideXxl ? 'd-xxl-none' : ''].filter(Boolean).join(' ');

  // Injected card-footer base selector class
  const combinedClassName = ['card-footer', hasVideo ? 'position-relative overflow-hidden' : '', textColor, padding, margin, backgroundColor, shadow, borderClasses, visibilityClasses].filter(Boolean).map(c => c.trim()).filter(Boolean).join(' ');
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.useBlockProps)({
    className: combinedClassName,
    style: {
      ...dynamicBgStyles,
      opacity: opacity !== 100 ? opacity / 100 : undefined,
      ...(borderOpacityCustom ? {
        '--bs-border-opacity': borderOpacityCustom
      } : {}),
      ...parseInlineCSS(customCSS)
    }
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.InspectorControls, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_controls_spacingControls__WEBPACK_IMPORTED_MODULE_2__.PaddingControl, {
        value: padding,
        onChange: v => setAttributes({
          padding: v
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_controls_spacingControls__WEBPACK_IMPORTED_MODULE_2__.MarginControl, {
        value: margin,
        onChange: v => setAttributes({
          margin: v
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_controls_visualControls__WEBPACK_IMPORTED_MODULE_3__.BackgroundColorControl, {
        value: backgroundColor,
        onChange: v => setAttributes({
          backgroundColor: v
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_controls_background__WEBPACK_IMPORTED_MODULE_5__.BackgroundControl, {
        bgImageUrl: bgImageUrl,
        bgImageId: bgImageId,
        bgGradient: bgGradient,
        bgVideoUrl: bgVideoUrl,
        bgVideoId: bgVideoId,
        setAttributes: setAttributes
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_controls_visualControls__WEBPACK_IMPORTED_MODULE_3__.OpacityControl, {
        value: opacity,
        onChange: v => setAttributes({
          opacity: v
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_controls_visualControls__WEBPACK_IMPORTED_MODULE_3__.TextColorControl, {
        value: textColor,
        onChange: v => setAttributes({
          textColor: v
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_controls_visualControls__WEBPACK_IMPORTED_MODULE_3__.ShadowControl, {
        value: shadow,
        onChange: v => setAttributes({
          shadow: v
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_controls_visualControls__WEBPACK_IMPORTED_MODULE_3__.BorderControl, {
        borderSides: borderSides,
        borderRemove: borderRemove,
        borderColor: borderColor,
        borderOpacityClass: borderOpacityClass,
        borderOpacityCustom: borderOpacityCustom,
        borderSize: borderSize,
        borderRadius: borderRadius,
        borderRadiusSize: borderRadiusSize,
        setAttributes: setAttributes
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_controls_visualControls__WEBPACK_IMPORTED_MODULE_3__.CustomCSSControl, {
        value: customCSS,
        onChange: v => setAttributes({
          customCSS: v
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_controls_visibilityControl__WEBPACK_IMPORTED_MODULE_4__.VisibilityControl, {
        hideXs: hideXs,
        hideSm: hideSm,
        hideMd: hideMd,
        hideLg: hideLg,
        hideXl: hideXl,
        hideXxl: hideXxl,
        setAttributes: setAttributes
      })]
    }), hasVideo ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
      ...blockProps,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("video", {
        src: bgVideoUrl,
        autoPlay: true,
        muted: true,
        loop: true,
        playsInline: true,
        style: {
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: 0,
          pointerEvents: 'none'
        }
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.RichText, {
        tagName: "span",
        value: content,
        onChange: val => setAttributes({
          content: val
        }),
        placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('2 days ago', 'wmblocks'),
        style: {
          position: 'relative',
          zIndex: 1,
          display: 'block',
          width: '100%'
        }
      })]
    }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.RichText, {
      ...blockProps,
      tagName: "div",
      value: content,
      onChange: val => setAttributes({
        content: val
      }),
      placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('2 days ago', 'wmblocks')
    })]
  });
}

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

/***/ "./src/card-footer/block.json"
/*!************************************!*\
  !*** ./src/card-footer/block.json ***!
  \************************************/
(module) {

module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"wmblocks/card-footer","version":"0.1.0","title":"Card Footer","category":"watermelon-blocks","icon":"button","description":"Standard Bootstrap card footer with flat text structure and utility controls.","supports":{"html":false,"anchor":true},"attributes":{"anchor":{"type":"string","default":""},"content":{"type":"string","default":"2 days ago"},"margin":{"type":"string","default":""},"padding":{"type":"string","default":""},"backgroundColor":{"type":"string","default":""},"textColor":{"type":"string","default":"text-body-secondary"},"opacity":{"type":"number","default":100},"shadow":{"type":"string","default":""},"borderSides":{"type":"array","default":[]},"borderRemove":{"type":"array","default":[]},"borderColor":{"type":"string","default":""},"borderOpacityClass":{"type":"string","default":""},"borderOpacityCustom":{"type":"string","default":""},"borderSize":{"type":"string","default":""},"borderRadius":{"type":"string","default":""},"borderRadiusSize":{"type":"string","default":""},"customCSS":{"type":"string","default":""},"hideXs":{"type":"boolean","default":false},"hideSm":{"type":"boolean","default":false},"hideMd":{"type":"boolean","default":false},"hideLg":{"type":"boolean","default":false},"hideXl":{"type":"boolean","default":false},"hideXxl":{"type":"boolean","default":false},"bgImageUrl":{"type":"string","default":""},"bgImageId":{"type":"number","default":0},"bgGradient":{"type":"string","default":""},"bgVideoUrl":{"type":"string","default":""},"bgVideoId":{"type":"number","default":0}},"textdomain":"wm","editorScript":"file:./index.js","render":"file:./render.php"}');

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
/************************************************************************/
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!**********************************!*\
  !*** ./src/card-footer/index.js ***!
  \**********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit */ "./src/card-footer/edit.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./block.json */ "./src/card-footer/block.json");



(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_2__.name, {
  icon: 'button',
  edit: _edit__WEBPACK_IMPORTED_MODULE_1__["default"],
  save: () => null // Dynamic Block configuration
});
})();

/******/ })()
;
//# sourceMappingURL=index.js.map