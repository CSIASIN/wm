/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/image-link/edit.js"
/*!********************************!*\
  !*** ./src/image-link/edit.js ***!
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
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./editor.scss */ "./src/image-link/editor.scss");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);





const IMG_CLASSES = [{
  label: 'img-fluid',
  value: 'img-fluid'
}, {
  label: 'img-thumbnail',
  value: 'img-thumbnail'
}, {
  label: 'rounded',
  value: 'rounded'
}, {
  label: 'rounded-circle',
  value: 'rounded-circle'
}, {
  label: 'rounded-pill',
  value: 'rounded-pill'
}, {
  label: 'rounded-0',
  value: 'rounded-0'
}, {
  label: 'rounded-1',
  value: 'rounded-1'
}, {
  label: 'rounded-2',
  value: 'rounded-2'
}, {
  label: 'rounded-3',
  value: 'rounded-3'
}, {
  label: 'rounded-4',
  value: 'rounded-4'
}, {
  label: 'rounded-5',
  value: 'rounded-5'
}];
const ALIGN_OPTS = [{
  label: 'Top',
  value: 'align-self-start'
}, {
  label: 'Middle',
  value: 'align-self-center'
}, {
  label: 'Bottom',
  value: 'align-self-end'
}];
const GAP_OPTS = [{
  label: 'me-1',
  value: 'me-1'
}, {
  label: 'me-2',
  value: 'me-2'
}, {
  label: 'me-3',
  value: 'me-3'
}, {
  label: 'me-4',
  value: 'me-4'
}, {
  label: 'me-5',
  value: 'me-5'
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
  label: 'Light',
  value: 'btn-light'
}, {
  label: 'Dark',
  value: 'btn-dark'
}, {
  label: 'Link',
  value: 'btn-link'
}, {
  label: 'Outline Primary',
  value: 'btn-outline-primary'
}, {
  label: 'Outline Secondary',
  value: 'btn-outline-secondary'
}];
const SHADOW_OPTS = [{
  label: '— None —',
  value: ''
}, {
  label: 'shadow-sm',
  value: 'shadow-sm'
}, {
  label: 'shadow',
  value: 'shadow'
}, {
  label: 'shadow-lg',
  value: 'shadow-lg'
}];
const FIT_OPTS = [{
  label: '— None —',
  value: ''
}, {
  label: 'object-fit-cover',
  value: 'object-fit-cover'
}, {
  label: 'object-fit-contain',
  value: 'object-fit-contain'
}, {
  label: 'object-fit-fill',
  value: 'object-fit-fill'
}];

// ── Layout mode descriptions
const MODES = [{
  value: 'media',
  label: 'Media Object',
  desc: 'Image beside text (flex row)'
}, {
  value: 'card',
  label: 'Stretched Card',
  desc: 'Image top, whole box clickable'
}, {
  value: 'image',
  label: 'Plain Image Link',
  desc: 'Just a linked image'
}];
function Edit({
  attributes,
  setAttributes
}) {
  const {
    layoutMode,
    url,
    newTab,
    stretchedLink,
    imageUrl,
    imageId,
    imageAlt,
    imageWidth,
    imagePosition,
    imgClass,
    imageGap,
    imageAlign,
    title,
    body,
    linkText,
    linkVariant,
    showLinkBtn,
    wrapperClass,
    rounded,
    shadow,
    objectFit,
    objectHeight
  } = attributes;
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps)({
    className: 'wmblocks-image-link-wrapper'
  });

  // Gap class flips when image is on the end
  const gapClass = imagePosition === 'end' ? imageGap.replace('me-', 'ms-') : imageGap;
  const imgStyles = {
    width: imageWidth || 'auto',
    objectFit: objectFit ? objectFit.replace('object-fit-', '') : undefined,
    height: objectHeight || undefined,
    flexShrink: 0,
    maxWidth: '100%'
  };

  // Image uploader shared component
  const ImageArea = () => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.MediaUploadCheck, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.MediaUpload, {
      onSelect: m => setAttributes({
        imageUrl: m.url,
        imageId: m.id,
        imageAlt: m.alt || ''
      }),
      allowedTypes: ['image'],
      value: imageId,
      render: ({
        open
      }) => imageUrl ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
        style: {
          position: 'relative',
          display: 'inline-block'
        },
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("img", {
          src: imageUrl,
          alt: imageAlt,
          className: [imgClass, rounded, objectFit].filter(Boolean).join(' '),
          style: imgStyles,
          onClick: open
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("button", {
          onClick: e => {
            e.stopPropagation();
            setAttributes({
              imageUrl: '',
              imageId: 0
            });
          },
          style: {
            position: 'absolute',
            top: 4,
            right: 4,
            background: 'rgba(0,0,0,.6)',
            color: '#fff',
            border: 'none',
            borderRadius: 3,
            fontSize: 10,
            padding: '2px 5px',
            cursor: 'pointer'
          },
          children: "\u2715"
        })]
      }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
        onClick: open,
        style: {
          width: imageWidth || '120px',
          minHeight: '80px',
          border: '2px dashed #adb5bd',
          borderRadius: 4,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          cursor: 'pointer',
          color: '#6c757d',
          background: '#f8f9fa',
          gap: 4
        },
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
          style: {
            fontSize: 28
          },
          children: "\uD83D\uDDBC"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
          style: {
            fontSize: 11
          },
          children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Upload image', 'wmblocks')
        })]
      })
    })
  });

  // Inline editable text helper
  const Editable = ({
    value,
    onChange,
    tag: Tag = 'span',
    style = {},
    placeholder
  }) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(Tag, {
    contentEditable: true,
    suppressContentEditableWarning: true,
    onInput: e => onChange(e.currentTarget.textContent),
    onKeyDown: e => e.key === 'Enter' && (e.preventDefault(), e.currentTarget.blur()),
    style: {
      outline: 'none',
      cursor: 'text',
      ...style
    },
    "data-placeholder": placeholder,
    children: value
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InspectorControls, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Layout Mode', 'wmblocks'),
        initialOpen: true,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
          style: {
            display: 'flex',
            flexDirection: 'column',
            gap: 4
          },
          children: MODES.map(m => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("button", {
            onMouseDown: e => {
              e.preventDefault();
              setAttributes({
                layoutMode: m.value
              });
            },
            style: {
              padding: '8px 10px',
              textAlign: 'left',
              border: '1px solid',
              borderColor: layoutMode === m.value ? '#007cba' : '#ddd',
              borderRadius: 4,
              background: layoutMode === m.value ? '#e8f4fd' : '#f8f9fa',
              cursor: 'pointer'
            },
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
              style: {
                fontSize: 12,
                fontWeight: 600,
                color: layoutMode === m.value ? '#007cba' : '#333'
              },
              children: m.label
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
              style: {
                fontSize: 11,
                color: '#777',
                marginTop: 2
              },
              children: m.desc
            })]
          }, m.value))
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Link', 'wmblocks'),
        initialOpen: true,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('URL', 'wmblocks'),
          value: url,
          onChange: v => setAttributes({
            url: v
          }),
          type: "url",
          placeholder: "https://"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Open in new tab', 'wmblocks'),
          checked: !!newTab,
          onChange: v => setAttributes({
            newTab: v
          })
        }), layoutMode !== 'image' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Stretched Link', 'wmblocks'),
          checked: !!stretchedLink,
          onChange: v => setAttributes({
            stretchedLink: v
          }),
          help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Makes the entire block clickable via ::after pseudo-element.', 'wmblocks')
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Image', 'wmblocks'),
        initialOpen: true,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Image Style', 'wmblocks'),
          value: imgClass,
          options: IMG_CLASSES,
          onChange: v => setAttributes({
            imgClass: v
          })
        }), layoutMode === 'media' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
            style: {
              marginBottom: 8
            },
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
              style: {
                fontSize: 11,
                fontWeight: 600,
                color: '#1e1e1e',
                marginBottom: 6
              },
              children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Image Position', 'wmblocks')
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ButtonGroup, {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
                variant: imagePosition === 'start' ? 'primary' : 'secondary',
                onClick: () => setAttributes({
                  imagePosition: 'start'
                }),
                children: ["\u2190 ", (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Left', 'wmblocks')]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
                variant: imagePosition === 'end' ? 'primary' : 'secondary',
                onClick: () => setAttributes({
                  imagePosition: 'end'
                }),
                children: [(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Right', 'wmblocks'), " \u2192"]
              })]
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Vertical Align', 'wmblocks'),
            value: imageAlign,
            options: ALIGN_OPTS,
            onChange: v => setAttributes({
              imageAlign: v
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Gap', 'wmblocks'),
            value: imageGap,
            options: GAP_OPTS,
            onChange: v => setAttributes({
              imageGap: v
            })
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Image Width', 'wmblocks'),
          value: imageWidth,
          onChange: v => setAttributes({
            imageWidth: v
          }),
          placeholder: "120px"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Object Fit', 'wmblocks'),
          value: objectFit,
          options: FIT_OPTS,
          onChange: v => setAttributes({
            objectFit: v
          })
        }), objectFit && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Object Height', 'wmblocks'),
          value: objectHeight,
          onChange: v => setAttributes({
            objectHeight: v
          }),
          placeholder: "200px"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Alt Text', 'wmblocks'),
          value: imageAlt,
          onChange: v => setAttributes({
            imageAlt: v
          })
        })]
      }), layoutMode !== 'image' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Content', 'wmblocks'),
        initialOpen: false,
        children: [showLinkBtn && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Button Text', 'wmblocks'),
            value: linkText,
            onChange: v => setAttributes({
              linkText: v
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Button Style', 'wmblocks'),
            value: linkVariant,
            options: BTN_VARIANTS,
            onChange: v => setAttributes({
              linkVariant: v
            })
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Show Button', 'wmblocks'),
          checked: !!showLinkBtn,
          onChange: v => setAttributes({
            showLinkBtn: v
          })
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Style', 'wmblocks'),
        initialOpen: false,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Shadow', 'wmblocks'),
          value: shadow,
          options: SHADOW_OPTS,
          onChange: v => setAttributes({
            shadow: v
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Extra Classes', 'wmblocks'),
          value: wrapperClass,
          onChange: v => setAttributes({
            wrapperClass: v
          })
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
      ...blockProps,
      children: [layoutMode === 'image' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
          style: {
            marginBottom: 6
          },
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(ImageArea, {})
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
          style: {
            display: 'flex',
            gap: 8,
            alignItems: 'center',
            flexWrap: 'wrap'
          },
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("input", {
            type: "url",
            value: url,
            onChange: e => setAttributes({
              url: e.target.value
            }),
            placeholder: "https://",
            style: {
              flex: 1,
              fontSize: 12,
              padding: '4px 8px',
              border: '1px solid #ccc',
              borderRadius: 4,
              outline: 'none',
              minWidth: 120
            }
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("label", {
            style: {
              fontSize: 11,
              display: 'flex',
              alignItems: 'center',
              gap: 4,
              cursor: 'pointer'
            },
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("input", {
              type: "checkbox",
              checked: !!newTab,
              onChange: e => setAttributes({
                newTab: e.target.checked
              })
            }), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('New tab', 'wmblocks')]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
          style: {
            fontSize: 10,
            color: '#6c757d',
            marginTop: 4,
            fontStyle: 'italic'
          },
          children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Plain linked image — no stretched-link, just an anchor wrapping the img tag.', 'wmblocks')
        })]
      }), layoutMode === 'card' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
        className: ['card position-relative', shadow, wrapperClass].filter(Boolean).join(' '),
        style: {
          overflow: 'hidden'
        },
        children: [imageUrl ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.MediaUploadCheck, {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.MediaUpload, {
            onSelect: m => setAttributes({
              imageUrl: m.url,
              imageId: m.id,
              imageAlt: m.alt || ''
            }),
            allowedTypes: ['image'],
            value: imageId,
            render: ({
              open
            }) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
              style: {
                position: 'relative'
              },
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("img", {
                src: imageUrl,
                alt: imageAlt,
                className: ['card-img-top', imgClass, objectFit].filter(Boolean).join(' '),
                style: {
                  width: '100%',
                  height: objectHeight || '200px',
                  objectFit: objectFit ? objectFit.replace('object-fit-', '') : 'cover',
                  cursor: 'pointer'
                },
                onClick: open
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("button", {
                onClick: e => {
                  e.stopPropagation();
                  setAttributes({
                    imageUrl: '',
                    imageId: 0
                  });
                },
                style: {
                  position: 'absolute',
                  top: 6,
                  right: 6,
                  background: 'rgba(0,0,0,.6)',
                  color: '#fff',
                  border: 'none',
                  borderRadius: 3,
                  fontSize: 10,
                  padding: '2px 5px',
                  cursor: 'pointer'
                },
                children: "\u2715"
              })]
            })
          })
        }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.MediaUploadCheck, {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.MediaUpload, {
            onSelect: m => setAttributes({
              imageUrl: m.url,
              imageId: m.id,
              imageAlt: m.alt || ''
            }),
            allowedTypes: ['image'],
            value: imageId,
            render: ({
              open
            }) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
              onClick: open,
              style: {
                height: objectHeight || '160px',
                background: '#e9ecef',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                flexDirection: 'column',
                gap: 4,
                color: '#6c757d'
              },
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
                style: {
                  fontSize: 32
                },
                children: "\uD83D\uDDBC"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
                style: {
                  fontSize: 12
                },
                children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Click to upload', 'wmblocks')
              })]
            })
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
          className: "card-body",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(Editable, {
            tag: "h5",
            value: title,
            onChange: v => setAttributes({
              title: v
            }),
            style: {
              display: 'block',
              fontWeight: 700,
              marginBottom: 8,
              fontSize: 18
            },
            placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Card title…', 'wmblocks')
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(Editable, {
            tag: "p",
            value: body,
            onChange: v => setAttributes({
              body: v
            }),
            style: {
              display: 'block',
              color: '#555',
              fontSize: 14,
              marginBottom: 12
            },
            placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Card text…', 'wmblocks')
          }), showLinkBtn && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
            style: {
              display: 'flex',
              alignItems: 'center',
              gap: 8
            },
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("a", {
              href: "#",
              className: ['btn', linkVariant, stretchedLink ? 'stretched-link' : ''].filter(Boolean).join(' '),
              onClick: e => e.preventDefault(),
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(Editable, {
                value: linkText,
                onChange: v => setAttributes({
                  linkText: v
                })
              })
            }), stretchedLink && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
              style: {
                fontSize: 10,
                color: '#6c757d',
                fontStyle: 'italic'
              },
              children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('↑ stretched — entire card is clickable', 'wmblocks')
            })]
          })]
        })]
      }), layoutMode === 'media' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
        className: ['d-flex position-relative', imagePosition === 'end' ? 'flex-row-reverse' : '', shadow, wrapperClass].filter(Boolean).join(' '),
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
          className: [imageAlign, gapClass].filter(Boolean).join(' '),
          style: {
            flexShrink: 0
          },
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(ImageArea, {})
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
          style: {
            flex: 1
          },
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(Editable, {
            tag: "h5",
            value: title,
            onChange: v => setAttributes({
              title: v
            }),
            style: {
              display: 'block',
              fontWeight: 700,
              marginBottom: 6,
              fontSize: 18
            },
            placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Heading…', 'wmblocks')
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(Editable, {
            tag: "p",
            value: body,
            onChange: v => setAttributes({
              body: v
            }),
            style: {
              display: 'block',
              color: '#555',
              fontSize: 14,
              marginBottom: 10
            },
            placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Body text…', 'wmblocks')
          }), showLinkBtn && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
            style: {
              display: 'flex',
              alignItems: 'center',
              gap: 8
            },
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("a", {
              href: "#",
              className: ['btn', linkVariant, stretchedLink ? 'stretched-link' : ''].filter(Boolean).join(' '),
              onClick: e => e.preventDefault(),
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(Editable, {
                value: linkText,
                onChange: v => setAttributes({
                  linkText: v
                })
              })
            }), stretchedLink && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
              style: {
                fontSize: 10,
                color: '#6c757d',
                fontStyle: 'italic'
              },
              children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('↑ stretched', 'wmblocks')
            })]
          })]
        })]
      }), url && url !== '#' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
        style: {
          fontSize: 10,
          color: '#6c757d',
          marginTop: 6
        },
        children: ["\u2192 ", url, newTab ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)(' (new tab)', 'wmblocks') : '']
      })]
    })]
  });
}

/***/ },

/***/ "./src/image-link/index.js"
/*!*********************************!*\
  !*** ./src/image-link/index.js ***!
  \*********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.scss */ "./src/image-link/style.scss");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit */ "./src/image-link/edit.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./block.json */ "./src/image-link/block.json");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);






(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_4__.name, {
  edit: _edit__WEBPACK_IMPORTED_MODULE_3__["default"],
  save: () => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
    ..._wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps.save()
  })
});

/***/ },

/***/ "./src/image-link/editor.scss"
/*!************************************!*\
  !*** ./src/image-link/editor.scss ***!
  \************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ },

/***/ "./src/image-link/style.scss"
/*!***********************************!*\
  !*** ./src/image-link/style.scss ***!
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

/***/ "./src/image-link/block.json"
/*!***********************************!*\
  !*** ./src/image-link/block.json ***!
  \***********************************/
(module) {

module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"wmblocks/image-link","version":"0.1.0","title":"Image Link","category":"watermelon-blocks","icon":"admin-links","description":"Bootstrap image-link — image with text as media object, stretched-link card, or plain linked image. Three layout modes.","example":{},"supports":{"html":false,"anchor":true},"attributes":{"layoutMode":{"type":"string","default":"media"},"url":{"type":"string","default":"#"},"newTab":{"type":"boolean","default":false},"stretchedLink":{"type":"boolean","default":true},"imageUrl":{"type":"string","default":""},"imageId":{"type":"number","default":0},"imageAlt":{"type":"string","default":""},"imageWidth":{"type":"string","default":"120px"},"imagePosition":{"type":"string","default":"start"},"imgClass":{"type":"string","default":"img-fluid"},"imageGap":{"type":"string","default":"me-3"},"imageAlign":{"type":"string","default":"align-self-start"},"title":{"type":"string","default":"Image link heading"},"body":{"type":"string","default":"Some quick example text to build on the title and make up the bulk of the content."},"linkText":{"type":"string","default":"Go somewhere"},"linkVariant":{"type":"string","default":"btn-primary"},"showLinkBtn":{"type":"boolean","default":true},"wrapperClass":{"type":"string","default":""},"rounded":{"type":"string","default":""},"shadow":{"type":"string","default":""},"objectFit":{"type":"string","default":""},"objectHeight":{"type":"string","default":""}},"textdomain":"wm","editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./style-index.css","render":"file:./render.php"}');

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
/******/ 			"image-link/index": 0,
/******/ 			"image-link/style-index": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["image-link/style-index"], () => (__webpack_require__("./src/image-link/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map