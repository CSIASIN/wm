<?php
// This file is generated. Do not modify it manually.
return array(
	'accordion' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'wmblocks/accordion',
		'version' => '0.1.0',
		'title' => 'Accordion',
		'category' => 'watermelon-blocks',
		'icon' => 'menu-alt',
		'description' => 'Bootstrap accordion — a list of collapsible items with one open at a time.',
		'example' => array(
			
		),
		'supports' => array(
			'html' => false,
			'anchor' => true
		),
		'attributes' => array(
			'alwaysOpen' => array(
				'type' => 'boolean',
				'default' => false
			),
			'flush' => array(
				'type' => 'boolean',
				'default' => false
			),
			'accordionId' => array(
				'type' => 'string',
				'default' => ''
			)
		),
		'providesContext' => array(
			'wmblocks/accordionId' => 'accordionId',
			'wmblocks/alwaysOpen' => 'alwaysOpen'
		),
		'textdomain' => 'wm',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'render' => 'file:./render.php',
		'viewScript' => 'file:./view.js'
	),
	'accordion-item' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'wmblocks/accordion-item',
		'version' => '0.1.0',
		'title' => 'Accordion Item',
		'category' => 'watermelon-blocks',
		'icon' => 'minus',
		'description' => 'A single item inside the Accordion block.',
		'example' => array(
			
		),
		'parent' => array(
			'wmblocks/accordion'
		),
		'supports' => array(
			'html' => false,
			'reusable' => false
		),
		'attributes' => array(
			'itemId' => array(
				'type' => 'string',
				'default' => ''
			),
			'heading' => array(
				'type' => 'string',
				'default' => 'Accordion Item'
			),
			'startOpen' => array(
				'type' => 'boolean',
				'default' => false
			)
		),
		'usesContext' => array(
			'wmblocks/accordionId',
			'wmblocks/alwaysOpen'
		),
		'textdomain' => 'wm',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'render' => 'file:./render.php'
	),
	'alerts' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'wmblocks/alert',
		'version' => '0.1.0',
		'title' => 'Alert',
		'category' => 'watermelon-blocks',
		'icon' => 'warning',
		'description' => 'Bootstrap alert — contextual feedback messages with optional heading, icon, dismiss button, and any block content inside.',
		'example' => array(
			
		),
		'supports' => array(
			'html' => false,
			'anchor' => true
		),
		'attributes' => array(
			'variant' => array(
				'type' => 'string',
				'default' => 'alert-primary'
			),
			'heading' => array(
				'type' => 'string',
				'default' => ''
			),
			'showHeading' => array(
				'type' => 'boolean',
				'default' => false
			),
			'dismissible' => array(
				'type' => 'boolean',
				'default' => false
			),
			'showIcon' => array(
				'type' => 'boolean',
				'default' => false
			),
			'icon' => array(
				'type' => 'string',
				'default' => 'bi-info-circle-fill'
			),
			'showLink' => array(
				'type' => 'boolean',
				'default' => false
			),
			'linkText' => array(
				'type' => 'string',
				'default' => 'Learn more'
			),
			'linkUrl' => array(
				'type' => 'string',
				'default' => '#'
			)
		),
		'textdomain' => 'wm',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'render' => 'file:./render.php',
		'viewScript' => 'file:./view.js'
	),
	'aspect-ration' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'wmblocks/ratio',
		'version' => '0.1.0',
		'title' => 'Aspect Ratio',
		'category' => 'watermelon-blocks',
		'icon' => 'format-video',
		'description' => 'Bootstrap ratio helper — wraps any embedded content (iframe, video, image) in a responsive aspect-ratio container. Choose from 1x1, 4x3, 16x9, 21x9 or set a custom ratio.',
		'example' => array(
			
		),
		'supports' => array(
			'html' => false,
			'anchor' => true
		),
		'attributes' => array(
			'ratio' => array(
				'type' => 'string',
				'default' => 'ratio-16x9'
			),
			'customRatio' => array(
				'type' => 'string',
				'default' => ''
			)
		),
		'textdomain' => 'wm',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'render' => 'file:./render.php',
		'viewScript' => 'file:./view.js'
	),
	'badge' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'wmblocks/badge',
		'version' => '0.1.0',
		'title' => 'Badge',
		'category' => 'watermelon-blocks',
		'icon' => 'tag',
		'description' => 'Bootstrap badges — one or more inline badge labels with full control over colour, pill shape, positioning, and optional link. All labels editable directly on the canvas.',
		'example' => array(
			
		),
		'supports' => array(
			'html' => false,
			'anchor' => true
		),
		'attributes' => array(
			'badges' => array(
				'type' => 'array',
				'default' => array(
					array(
						'id' => 'bd1',
						'text' => 'New',
						'variant' => 'bg-primary',
						'pill' => false,
						'href' => '',
						'positionedTop' => false,
						'positionedStart' => false
					)
				)
			),
			'alignment' => array(
				'type' => 'string',
				'default' => 'left'
			),
			'gap' => array(
				'type' => 'string',
				'default' => 'gap-2'
			),
			'wrapInline' => array(
				'type' => 'boolean',
				'default' => false
			)
		),
		'textdomain' => 'wm',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'render' => 'file:./render.php',
		'viewScript' => 'file:./view.js'
	),
	'badge-button' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'wmblocks/badge-button',
		'version' => '0.1.0',
		'title' => 'Badge on Button',
		'category' => 'watermelon-blocks',
		'icon' => 'marker',
		'description' => 'Bootstrap positioned badge on a button — a button with an absolutely-positioned badge, dot indicator, or SVG marker. Uses position-relative on the button and position-absolute with top/start/translate-middle on the badge. Optionally adds a Bootstrap Icon inside the button itself.',
		'example' => array(
			
		),
		'supports' => array(
			'html' => false,
			'anchor' => true
		),
		'attributes' => array(
			'btnLabel' => array(
				'type' => 'string',
				'default' => 'Inbox'
			),
			'btnVariant' => array(
				'type' => 'string',
				'default' => 'btn-primary'
			),
			'btnSize' => array(
				'type' => 'string',
				'default' => ''
			),
			'btnHref' => array(
				'type' => 'string',
				'default' => ''
			),
			'btnTarget' => array(
				'type' => 'string',
				'default' => '_self'
			),
			'btnIconName' => array(
				'type' => 'string',
				'default' => ''
			),
			'btnIconPosition' => array(
				'type' => 'string',
				'default' => 'before'
			),
			'badgeType' => array(
				'type' => 'string',
				'default' => 'text'
			),
			'badgeLabel' => array(
				'type' => 'string',
				'default' => '+99'
			),
			'badgeColour' => array(
				'type' => 'string',
				'default' => 'text-bg-danger'
			),
			'badgeShape' => array(
				'type' => 'string',
				'default' => 'rounded-pill'
			),
			'badgeTop' => array(
				'type' => 'string',
				'default' => 'top-0'
			),
			'badgeStart' => array(
				'type' => 'string',
				'default' => 'start-100'
			),
			'badgeTranslate' => array(
				'type' => 'string',
				'default' => 'translate-middle'
			),
			'badgeBorderColour' => array(
				'type' => 'string',
				'default' => ''
			),
			'badgeSvgName' => array(
				'type' => 'string',
				'default' => 'caret-down-fill'
			),
			'badgeA11yLabel' => array(
				'type' => 'string',
				'default' => 'unread messages'
			),
			'alignment' => array(
				'type' => 'string',
				'default' => 'left'
			)
		),
		'textdomain' => 'wm',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'render' => 'file:./render.php',
		'viewScript' => 'file:./view.js'
	),
	'Blockquote' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'wmblocks/blockquote',
		'version' => '0.1.0',
		'title' => 'Blockquote',
		'category' => 'watermelon-blocks',
		'icon' => 'format-quote',
		'description' => 'Bootstrap blockquote with optional citation source — name and title.',
		'example' => array(
			
		),
		'supports' => array(
			'html' => false,
			'anchor' => true
		),
		'attributes' => array(
			'quote' => array(
				'type' => 'string',
				'default' => 'A well-known quote, contained in a blockquote element.'
			),
			'sourceName' => array(
				'type' => 'string',
				'default' => ''
			),
			'sourceTitle' => array(
				'type' => 'string',
				'default' => ''
			),
			'textAlign' => array(
				'type' => 'string',
				'default' => ''
			),
			'customClass' => array(
				'type' => 'string',
				'default' => ''
			)
		),
		'textdomain' => 'wm',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'render' => 'file:./render.php'
	),
	'breadcrumb-default' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'wmblocks/breadcrumb-default',
		'version' => '0.1.0',
		'title' => 'Breadcrumb — Default',
		'category' => 'watermelon-blocks',
		'icon' => 'menu-alt3',
		'description' => 'Bootstrap standard breadcrumb with the default / divider. Add, remove and reorder items inline on the canvas. The last item is always the active current page.',
		'example' => array(
			
		),
		'supports' => array(
			'html' => false,
			'anchor' => true
		),
		'attributes' => array(
			'items' => array(
				'type' => 'array',
				'default' => array(
					array(
						'id' => 'b1',
						'label' => 'Home',
						'url' => '/'
					),
					array(
						'id' => 'b2',
						'label' => 'Library',
						'url' => '/library'
					),
					array(
						'id' => 'b3',
						'label' => 'Data',
						'url' => ''
					)
				)
			),
			'ariaLabel' => array(
				'type' => 'string',
				'default' => 'breadcrumb'
			)
		),
		'textdomain' => 'wm',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'render' => 'file:./render.php',
		'viewScript' => 'file:./view.js'
	),
	'breadcrumb-divider' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'wmblocks/breadcrumb-divider',
		'version' => '0.1.0',
		'title' => 'Breadcrumb — Custom Divider',
		'category' => 'watermelon-blocks',
		'icon' => 'menu-alt3',
		'description' => 'Bootstrap breadcrumb with a custom character divider. Pick from /, >, », •, |, ~, or enter your own character. Uses --bs-breadcrumb-divider CSS custom property.',
		'example' => array(
			
		),
		'supports' => array(
			'html' => false,
			'anchor' => true
		),
		'attributes' => array(
			'items' => array(
				'type' => 'array',
				'default' => array(
					array(
						'id' => 'b1',
						'label' => 'Home',
						'url' => '/'
					),
					array(
						'id' => 'b2',
						'label' => 'Library',
						'url' => '/library'
					),
					array(
						'id' => 'b3',
						'label' => 'Data',
						'url' => ''
					)
				)
			),
			'divider' => array(
				'type' => 'string',
				'default' => '>'
			),
			'customDivider' => array(
				'type' => 'string',
				'default' => ''
			),
			'ariaLabel' => array(
				'type' => 'string',
				'default' => 'breadcrumb'
			)
		),
		'textdomain' => 'wm',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'render' => 'file:./render.php',
		'viewScript' => 'file:./view.js'
	),
	'breadcrumb-styled' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'wmblocks/breadcrumb-styled',
		'version' => '0.1.0',
		'title' => 'Breadcrumb — Styled',
		'category' => 'watermelon-blocks',
		'icon' => 'menu-alt3',
		'description' => 'Bootstrap breadcrumb with full visual styling — background colour, padding, border, border-radius, and font size. Makes the breadcrumb visually prominent as a hero sub-bar or page header element.',
		'example' => array(
			
		),
		'supports' => array(
			'html' => false,
			'anchor' => true
		),
		'attributes' => array(
			'items' => array(
				'type' => 'array',
				'default' => array(
					array(
						'id' => 'b1',
						'label' => 'Home',
						'url' => '/'
					),
					array(
						'id' => 'b2',
						'label' => 'Library',
						'url' => '/library'
					),
					array(
						'id' => 'b3',
						'label' => 'Data',
						'url' => ''
					)
				)
			),
			'divider' => array(
				'type' => 'string',
				'default' => '/'
			),
			'bgColor' => array(
				'type' => 'string',
				'default' => 'bg-light'
			),
			'padding' => array(
				'type' => 'string',
				'default' => 'p-3'
			),
			'rounded' => array(
				'type' => 'string',
				'default' => 'rounded-3'
			),
			'border' => array(
				'type' => 'boolean',
				'default' => false
			),
			'borderColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'fontSize' => array(
				'type' => 'string',
				'default' => ''
			),
			'linkColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'ariaLabel' => array(
				'type' => 'string',
				'default' => 'breadcrumb'
			)
		),
		'textdomain' => 'wm',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'render' => 'file:./render.php',
		'viewScript' => 'file:./view.js'
	),
	'breadcrumb-svg' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'wmblocks/breadcrumb-svg',
		'version' => '0.1.0',
		'title' => 'Breadcrumb — SVG Divider',
		'category' => 'watermelon-blocks',
		'icon' => 'menu-alt3',
		'description' => 'Bootstrap breadcrumb with an SVG icon as the divider, set via the --bs-breadcrumb-divider CSS custom property as a data URI. Choose from arrow, chevron, dot, dash, or pipe SVG shapes. Colour-aware.',
		'example' => array(
			
		),
		'supports' => array(
			'html' => false,
			'anchor' => true
		),
		'attributes' => array(
			'items' => array(
				'type' => 'array',
				'default' => array(
					array(
						'id' => 'b1',
						'label' => 'Home',
						'url' => '/'
					),
					array(
						'id' => 'b2',
						'label' => 'Library',
						'url' => '/library'
					),
					array(
						'id' => 'b3',
						'label' => 'Data',
						'url' => ''
					)
				)
			),
			'svgDivider' => array(
				'type' => 'string',
				'default' => 'arrow'
			),
			'dividerColor' => array(
				'type' => 'string',
				'default' => '#6c757d'
			),
			'ariaLabel' => array(
				'type' => 'string',
				'default' => 'breadcrumb'
			)
		),
		'textdomain' => 'wm',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'render' => 'file:./render.php',
		'viewScript' => 'file:./view.js'
	),
	'bs-figure' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'wmblocks/bs-figure',
		'version' => '0.1.0',
		'title' => 'Figure',
		'category' => 'watermelon-blocks',
		'icon' => 'camera',
		'description' => 'Bootstrap figure — image with optional caption using <figure> and <figcaption>.',
		'example' => array(
			
		),
		'supports' => array(
			'html' => false,
			'anchor' => true
		),
		'attributes' => array(
			'imageUrl' => array(
				'type' => 'string',
				'default' => ''
			),
			'imageId' => array(
				'type' => 'number',
				'default' => 0
			),
			'imageAlt' => array(
				'type' => 'string',
				'default' => ''
			),
			'caption' => array(
				'type' => 'string',
				'default' => ''
			),
			'imgFluid' => array(
				'type' => 'boolean',
				'default' => true
			),
			'imgThumbnail' => array(
				'type' => 'boolean',
				'default' => false
			),
			'rounded' => array(
				'type' => 'string',
				'default' => ''
			),
			'floatClass' => array(
				'type' => 'string',
				'default' => ''
			),
			'borderSides' => array(
				'type' => 'array',
				'default' => array(
					
				),
				'items' => array(
					'type' => 'string'
				)
			),
			'borderColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'borderWidth' => array(
				'type' => 'string',
				'default' => ''
			),
			'captionAlign' => array(
				'type' => 'string',
				'default' => ''
			),
			'customClass' => array(
				'type' => 'string',
				'default' => ''
			)
		),
		'textdomain' => 'wm',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'render' => 'file:./render.php'
	),
	'bs-images' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'wmblocks/bs-image',
		'version' => '0.1.0',
		'title' => 'BS Image',
		'category' => 'watermelon-blocks',
		'icon' => 'format-image',
		'description' => 'Bootstrap image with fluid, thumbnail, float, border and rounded classes.',
		'example' => array(
			
		),
		'supports' => array(
			'html' => false,
			'anchor' => true
		),
		'attributes' => array(
			'imageUrl' => array(
				'type' => 'string',
				'default' => ''
			),
			'imageId' => array(
				'type' => 'number',
				'default' => 0
			),
			'imageAlt' => array(
				'type' => 'string',
				'default' => ''
			),
			'imageWidth' => array(
				'type' => 'string',
				'default' => ''
			),
			'imageHeight' => array(
				'type' => 'string',
				'default' => ''
			),
			'imgFluid' => array(
				'type' => 'boolean',
				'default' => false
			),
			'imgThumbnail' => array(
				'type' => 'boolean',
				'default' => false
			),
			'floatClass' => array(
				'type' => 'string',
				'default' => ''
			),
			'displayClass' => array(
				'type' => 'string',
				'default' => ''
			),
			'rounded' => array(
				'type' => 'string',
				'default' => ''
			),
			'borderSides' => array(
				'type' => 'array',
				'default' => array(
					
				),
				'items' => array(
					'type' => 'string'
				)
			),
			'borderColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'borderWidth' => array(
				'type' => 'string',
				'default' => ''
			),
			'borderOpacity' => array(
				'type' => 'string',
				'default' => ''
			),
			'shadow' => array(
				'type' => 'string',
				'default' => ''
			),
			'customClass' => array(
				'type' => 'string',
				'default' => ''
			)
		),
		'textdomain' => 'wm',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'render' => 'file:./render.php'
	),
	'bs-picture' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'wmblocks/bs-picture',
		'version' => '0.1.0',
		'title' => 'Picture',
		'category' => 'watermelon-blocks',
		'icon' => 'images-alt',
		'description' => 'Bootstrap picture element with multiple source breakpoints for art direction.',
		'example' => array(
			
		),
		'supports' => array(
			'html' => false,
			'anchor' => true
		),
		'attributes' => array(
			'sources' => array(
				'type' => 'array',
				'default' => array(
					array(
						'imageUrl' => '',
						'imageId' => 0,
						'media' => '(min-width: 1200px)'
					),
					array(
						'imageUrl' => '',
						'imageId' => 0,
						'media' => '(min-width: 768px)'
					)
				),
				'items' => array(
					'type' => 'object'
				)
			),
			'defaultImageUrl' => array(
				'type' => 'string',
				'default' => ''
			),
			'defaultImageId' => array(
				'type' => 'number',
				'default' => 0
			),
			'defaultImageAlt' => array(
				'type' => 'string',
				'default' => ''
			),
			'imgFluid' => array(
				'type' => 'boolean',
				'default' => true
			),
			'imgThumbnail' => array(
				'type' => 'boolean',
				'default' => false
			),
			'rounded' => array(
				'type' => 'string',
				'default' => ''
			),
			'customClass' => array(
				'type' => 'string',
				'default' => ''
			)
		),
		'textdomain' => 'wm',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'render' => 'file:./render.php'
	),
	'button-group' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'wmblocks/button-group',
		'version' => '0.1.0',
		'title' => 'Button Group',
		'category' => 'watermelon-blocks',
		'icon' => 'button',
		'description' => 'Bootstrap button group — merge buttons into a flush, connected row or toolbar. Supports basic group, toolbar, vertical, radio/checkbox toggle, nested dropdown, and sizing. All labels editable inline on the canvas.',
		'example' => array(
			
		),
		'supports' => array(
			'html' => false,
			'anchor' => true
		),
		'attributes' => array(
			'groupMode' => array(
				'type' => 'string',
				'default' => 'group',
				'enum' => array(
					'group',
					'toolbar',
					'vertical'
				)
			),
			'size' => array(
				'type' => 'string',
				'default' => ''
			),
			'alignment' => array(
				'type' => 'string',
				'default' => 'left'
			),
			'ariaLabel' => array(
				'type' => 'string',
				'default' => 'Button group'
			),
			'buttons' => array(
				'type' => 'array',
				'default' => array(
					array(
						'id' => 'g1',
						'label' => 'Left',
						'href' => '',
						'type' => 'button',
						'variant' => 'btn-primary',
						'active' => false,
						'disabled' => false,
						'isDropdown' => false,
						'dropdownItems' => array(
							
						),
						'inputName' => '',
						'inputValue' => ''
					),
					array(
						'id' => 'g2',
						'label' => 'Middle',
						'href' => '',
						'type' => 'button',
						'variant' => 'btn-primary',
						'active' => false,
						'disabled' => false,
						'isDropdown' => false,
						'dropdownItems' => array(
							
						),
						'inputName' => '',
						'inputValue' => ''
					),
					array(
						'id' => 'g3',
						'label' => 'Right',
						'href' => '',
						'type' => 'button',
						'variant' => 'btn-primary',
						'active' => false,
						'disabled' => false,
						'isDropdown' => false,
						'dropdownItems' => array(
							
						),
						'inputName' => '',
						'inputValue' => ''
					)
				)
			),
			'toggleMode' => array(
				'type' => 'string',
				'default' => 'none',
				'enum' => array(
					'none',
					'radio',
					'checkbox'
				)
			),
			'inputGroupName' => array(
				'type' => 'string',
				'default' => 'btngroup'
			)
		),
		'textdomain' => 'wm',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'render' => 'file:./render.php',
		'viewScript' => 'file:./view.js'
	),
	'buttons' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'wmblocks/buttons',
		'version' => '0.1.0',
		'title' => 'Buttons',
		'category' => 'watermelon-blocks',
		'icon' => 'button',
		'description' => 'Bootstrap buttons — add one or multiple buttons with full control over variant, size, style, state and layout. Labels editable inline on the canvas.',
		'example' => array(
			
		),
		'supports' => array(
			'html' => false,
			'anchor' => true
		),
		'attributes' => array(
			'buttons' => array(
				'type' => 'array',
				'default' => array(
					array(
						'id' => 'b1',
						'label' => 'Primary Button',
						'href' => '#',
						'target' => '_self',
						'variant' => 'btn-primary',
						'size' => '',
						'outline' => false,
						'disabled' => false,
						'active' => false,
						'type' => 'link',
						'stretchedLink' => false,
						'noWrap' => false
					)
				)
			),
			'layout' => array(
				'type' => 'string',
				'default' => 'inline'
			),
			'groupMode' => array(
				'type' => 'boolean',
				'default' => false
			),
			'groupSize' => array(
				'type' => 'string',
				'default' => ''
			),
			'groupVertical' => array(
				'type' => 'boolean',
				'default' => false
			),
			'alignment' => array(
				'type' => 'string',
				'default' => 'left'
			),
			'gap' => array(
				'type' => 'string',
				'default' => 'gap-2'
			)
		),
		'textdomain' => 'wm',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'render' => 'file:./render.php',
		'viewScript' => 'file:./view.js'
	),
	'card' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'wmblocks/card',
		'version' => '0.1.0',
		'title' => 'Card',
		'category' => 'watermelon-blocks',
		'icon' => 'media-default',
		'description' => 'Bootstrap base card — a flexible content container. Add any blocks inside the card body.',
		'example' => array(
			
		),
		'supports' => array(
			'html' => false,
			'anchor' => true
		),
		'attributes' => array(
			'bgColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'textColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'borderColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'shadow' => array(
				'type' => 'string',
				'default' => ''
			),
			'borderRadius' => array(
				'type' => 'string',
				'default' => ''
			),
			'noBorder' => array(
				'type' => 'boolean',
				'default' => false
			),
			'textAlign' => array(
				'type' => 'string',
				'default' => ''
			),
			'customWidth' => array(
				'type' => 'string',
				'default' => ''
			)
		),
		'textdomain' => 'wm',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'render' => 'file:./render.php',
		'viewScript' => 'file:./view.js'
	),
	'card-group' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'wmblocks/card-group',
		'version' => '0.1.0',
		'title' => 'Card Group',
		'category' => 'watermelon-blocks',
		'icon' => 'grid-view',
		'description' => 'A responsive grid or Bootstrap card-group that holds multiple Card with Image children side by side.',
		'example' => array(
			
		),
		'supports' => array(
			'html' => false,
			'anchor' => true
		),
		'attributes' => array(
			'layout' => array(
				'type' => 'string',
				'default' => 'grid'
			),
			'cols' => array(
				'type' => 'string',
				'default' => '3'
			),
			'gap' => array(
				'type' => 'string',
				'default' => 'gap-3'
			),
			'colsSm' => array(
				'type' => 'string',
				'default' => '1'
			),
			'colsMd' => array(
				'type' => 'string',
				'default' => '2'
			)
		),
		'textdomain' => 'wm',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'render' => 'file:./render.php',
		'viewScript' => 'file:./view.js'
	),
	'card-header-footer' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'wmblocks/card-header-footer',
		'version' => '0.1.0',
		'title' => 'Card with Header & Footer',
		'category' => 'watermelon-blocks',
		'icon' => 'layout',
		'description' => 'Bootstrap card with three distinct editable zones — header, body (InnerBlocks), and footer. Perfect for pricing tables, feature boxes, and structured content.',
		'example' => array(
			
		),
		'supports' => array(
			'html' => false,
			'anchor' => true
		),
		'attributes' => array(
			'headerText' => array(
				'type' => 'string',
				'default' => 'Featured'
			),
			'footerText' => array(
				'type' => 'string',
				'default' => '2 days ago'
			),
			'showHeader' => array(
				'type' => 'boolean',
				'default' => true
			),
			'showFooter' => array(
				'type' => 'boolean',
				'default' => true
			),
			'headerVariant' => array(
				'type' => 'string',
				'default' => ''
			),
			'footerVariant' => array(
				'type' => 'string',
				'default' => ''
			),
			'bgColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'borderColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'shadow' => array(
				'type' => 'string',
				'default' => ''
			),
			'textAlign' => array(
				'type' => 'string',
				'default' => ''
			),
			'noBorder' => array(
				'type' => 'boolean',
				'default' => false
			),
			'headerBgVariant' => array(
				'type' => 'string',
				'default' => ''
			),
			'footerBgVariant' => array(
				'type' => 'string',
				'default' => ''
			),
			'customWidth' => array(
				'type' => 'string',
				'default' => ''
			)
		),
		'textdomain' => 'wm',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'render' => 'file:./render.php',
		'viewScript' => 'file:./view.js'
	),
	'card-image' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'wmblocks/card-image',
		'version' => '0.1.0',
		'title' => 'Card with Image',
		'category' => 'watermelon-blocks',
		'icon' => 'format-image',
		'description' => 'Bootstrap card with image, title, subtitle, body text, and an optional button link. Supports top, bottom, overlay, and horizontal (side-by-side) layouts.',
		'example' => array(
			
		),
		'supports' => array(
			'html' => false,
			'anchor' => true
		),
		'attributes' => array(
			'imageUrl' => array(
				'type' => 'string',
				'default' => ''
			),
			'imageAlt' => array(
				'type' => 'string',
				'default' => ''
			),
			'imageId' => array(
				'type' => 'number',
				'default' => 0
			),
			'imagePosition' => array(
				'type' => 'string',
				'default' => 'top'
			),
			'imageCol' => array(
				'type' => 'string',
				'default' => 'col-md-4'
			),
			'title' => array(
				'type' => 'string',
				'default' => 'Card title'
			),
			'subtitle' => array(
				'type' => 'string',
				'default' => ''
			),
			'bodyText' => array(
				'type' => 'string',
				'default' => 'Some quick example text to build on the card title and make up the bulk of the card\'s content.'
			),
			'showBadge' => array(
				'type' => 'boolean',
				'default' => false
			),
			'badgeText' => array(
				'type' => 'string',
				'default' => 'New'
			),
			'badgeVariant' => array(
				'type' => 'string',
				'default' => 'bg-primary'
			),
			'showLink' => array(
				'type' => 'boolean',
				'default' => true
			),
			'linkText' => array(
				'type' => 'string',
				'default' => 'Go somewhere'
			),
			'linkUrl' => array(
				'type' => 'string',
				'default' => '#'
			),
			'linkVariant' => array(
				'type' => 'string',
				'default' => 'btn-primary'
			),
			'bgColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'borderColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'shadow' => array(
				'type' => 'string',
				'default' => ''
			),
			'textAlign' => array(
				'type' => 'string',
				'default' => ''
			),
			'noBorder' => array(
				'type' => 'boolean',
				'default' => false
			)
		),
		'textdomain' => 'wm',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'render' => 'file:./render.php',
		'viewScript' => 'file:./view.js'
	),
	'carousel' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'wmblocks/carousel',
		'version' => '0.1.0',
		'title' => 'Carousel',
		'category' => 'watermelon-blocks',
		'icon' => 'images-alt2',
		'description' => 'Bootstrap carousel slideshow for cycling through images or content slides.',
		'example' => array(
			
		),
		'supports' => array(
			'html' => false,
			'anchor' => true
		),
		'attributes' => array(
			'showIndicators' => array(
				'type' => 'boolean',
				'default' => true
			),
			'showControls' => array(
				'type' => 'boolean',
				'default' => true
			),
			'crossfade' => array(
				'type' => 'boolean',
				'default' => false
			),
			'autoplay' => array(
				'type' => 'boolean',
				'default' => true
			),
			'interval' => array(
				'type' => 'number',
				'default' => 5000
			),
			'pauseOnHover' => array(
				'type' => 'boolean',
				'default' => true
			),
			'touch' => array(
				'type' => 'boolean',
				'default' => true
			),
			'activeSlideIndex' => array(
				'type' => 'number',
				'default' => 0
			)
		),
		'providesContext' => array(
			'wmblocks/activeSlideIndex' => 'activeSlideIndex'
		),
		'textdomain' => 'wmblocks',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'render' => 'file:./render.php',
		'viewScript' => 'file:./view.js'
	),
	'carousel-slide' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'wmblocks/carousel-slide',
		'version' => '0.1.0',
		'title' => 'Carousel Slide',
		'category' => 'watermelon-blocks',
		'icon' => 'format-image',
		'description' => 'A single slide inside the Carousel block.',
		'example' => array(
			
		),
		'parent' => array(
			'wmblocks/carousel'
		),
		'supports' => array(
			'html' => false,
			'reusable' => false
		),
		'attributes' => array(
			'imageUrl' => array(
				'type' => 'string',
				'default' => ''
			),
			'imageId' => array(
				'type' => 'number',
				'default' => 0
			),
			'imageAlt' => array(
				'type' => 'string',
				'default' => ''
			),
			'caption' => array(
				'type' => 'string',
				'default' => ''
			),
			'captionText' => array(
				'type' => 'string',
				'default' => ''
			),
			'showCaption' => array(
				'type' => 'boolean',
				'default' => false
			),
			'interval' => array(
				'type' => 'number',
				'default' => 0
			),
			'captionPosition' => array(
				'type' => 'string',
				'default' => 'bottom'
			),
			'captionBgColor' => array(
				'type' => 'string',
				'default' => '#000000'
			),
			'captionBgOpacity' => array(
				'type' => 'number',
				'default' => 50
			)
		),
		'usesContext' => array(
			'wmblocks/activeSlideIndex',
			'wmblocks/slideIndex'
		),
		'textdomain' => 'wmblocks',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'render' => 'file:./render.php'
	),
	'collapse' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'wmblocks/collapse',
		'version' => '0.1.0',
		'title' => 'Collapse',
		'category' => 'watermelon-blocks',
		'icon' => 'arrow-down-alt2',
		'description' => 'Bootstrap collapse — toggle visibility of content with a trigger button.',
		'example' => array(
			
		),
		'supports' => array(
			'html' => false,
			'anchor' => true
		),
		'attributes' => array(
			'collapseId' => array(
				'type' => 'string',
				'default' => ''
			),
			'triggerText' => array(
				'type' => 'string',
				'default' => 'Toggle Content'
			),
			'triggerVariant' => array(
				'type' => 'string',
				'default' => 'btn-primary'
			),
			'triggerType' => array(
				'type' => 'string',
				'default' => 'button'
			),
			'startOpen' => array(
				'type' => 'boolean',
				'default' => false
			),
			'horizontal' => array(
				'type' => 'boolean',
				'default' => false
			),
			'contentWidth' => array(
				'type' => 'string',
				'default' => '300px'
			)
		),
		'textdomain' => 'wm',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'render' => 'file:./render.php',
		'viewScript' => 'file:./view.js'
	),
	'container' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'wmblocks/container',
		'version' => '0.1.0',
		'title' => 'Container',
		'category' => 'watermelon-blocks',
		'icon' => 'layout',
		'description' => 'Containers are a fundamental building block of Watermelon theme that contain, pad, and align your content within a given device or viewport.',
		'example' => array(
			'attributes' => array(
				'padding' => 'p-3',
				'customCSS' => 'height:80px;'
			)
		),
		'supports' => array(
			'html' => false,
			'anchor' => true
		),
		'attributes' => array(
			'padding' => array(
				'type' => 'string',
				'default' => 'p-0'
			),
			'margin' => array(
				'type' => 'string',
				'default' => ''
			),
			'anchor' => array(
				'type' => 'string',
				'default' => 'containerID'
			),
			'customCSS' => array(
				'type' => 'string',
				'default' => ''
			),
			'preview' => array(
				'type' => 'boolean',
				'default' => false
			),
			'backgroundColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'opacity' => array(
				'type' => 'number',
				'default' => 100
			),
			'borderSides' => array(
				'type' => 'array',
				'default' => array(
					
				),
				'items' => array(
					'type' => 'string'
				)
			),
			'borderRemove' => array(
				'type' => 'array',
				'default' => array(
					
				),
				'items' => array(
					'type' => 'string'
				)
			),
			'borderColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'borderOpacityClass' => array(
				'type' => 'string',
				'default' => ''
			),
			'borderOpacityCustom' => array(
				'type' => 'string',
				'default' => ''
			),
			'borderSize' => array(
				'type' => 'string',
				'default' => ''
			),
			'borderRadius' => array(
				'type' => 'string',
				'default' => ''
			),
			'borderRadiusSize' => array(
				'type' => 'string',
				'default' => ''
			),
			'textColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'hideXs' => array(
				'type' => 'boolean',
				'default' => false
			),
			'hideSm' => array(
				'type' => 'boolean',
				'default' => false
			),
			'hideMd' => array(
				'type' => 'boolean',
				'default' => false
			),
			'hideLg' => array(
				'type' => 'boolean',
				'default' => false
			),
			'hideXl' => array(
				'type' => 'boolean',
				'default' => false
			),
			'hideXxl' => array(
				'type' => 'boolean',
				'default' => false
			),
			'shadow' => array(
				'type' => 'string',
				'default' => ''
			)
		),
		'textdomain' => 'wm',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'render' => 'file:./render.php',
		'viewScript' => 'file:./view.js'
	),
	'div' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'wmblocks/div',
		'version' => '0.1.0',
		'title' => 'Div',
		'category' => 'watermelon-blocks',
		'icon' => 'smiley',
		'description' => 'Div aredd a basic building block of Watermelon that contain, pad, and align your content within a given device or viewport.',
		'example' => array(
			
		),
		'supports' => array(
			'html' => false
		),
		'textdomain' => 'wm',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'render' => 'file:./render.php',
		'viewScript' => 'file:./view.js'
	),
	'dl' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'wmblocks/dl',
		'version' => '0.1.0',
		'title' => 'Description List',
		'category' => 'watermelon-blocks',
		'icon' => 'editor-ul',
		'description' => 'Bootstrap description list — aligned dt/dd pairs with optional column grid layout.',
		'example' => array(
			
		),
		'supports' => array(
			'html' => false,
			'anchor' => true
		),
		'attributes' => array(
			'aligned' => array(
				'type' => 'boolean',
				'default' => true
			),
			'dtCol' => array(
				'type' => 'string',
				'default' => 'col-sm-3'
			),
			'ddCol' => array(
				'type' => 'string',
				'default' => 'col-sm-9'
			),
			'items' => array(
				'type' => 'array',
				'default' => array(
					array(
						'term' => 'Full Name',
						'desc' => 'John Doe'
					),
					array(
						'term' => 'Job Title',
						'desc' => 'Lead Developer'
					),
					array(
						'term' => 'Location',
						'desc' => 'New York, USA'
					)
				),
				'items' => array(
					'type' => 'object'
				)
			),
			'customClass' => array(
				'type' => 'string',
				'default' => ''
			)
		),
		'textdomain' => 'wm',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'render' => 'file:./render.php'
	),
	'dropdown' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'wmblocks/dropdown',
		'version' => '0.1.0',
		'title' => 'Dropdown',
		'category' => 'watermelon-blocks',
		'icon' => 'menu',
		'description' => 'Bootstrap dropdown — a toggleable contextual menu with links, headers, dividers and more.',
		'example' => array(
			
		),
		'supports' => array(
			'html' => false,
			'anchor' => true
		),
		'attributes' => array(
			'triggerText' => array(
				'type' => 'string',
				'default' => 'Dropdown'
			),
			'triggerVariant' => array(
				'type' => 'string',
				'default' => 'btn-primary'
			),
			'triggerSize' => array(
				'type' => 'string',
				'default' => ''
			),
			'splitButton' => array(
				'type' => 'boolean',
				'default' => false
			),
			'direction' => array(
				'type' => 'string',
				'default' => 'dropdown'
			),
			'menuAlign' => array(
				'type' => 'string',
				'default' => ''
			),
			'darkMenu' => array(
				'type' => 'boolean',
				'default' => false
			),
			'autoClose' => array(
				'type' => 'string',
				'default' => 'true'
			),
			'items' => array(
				'type' => 'array',
				'default' => array(
					array(
						'id' => 'i1',
						'type' => 'link',
						'label' => 'Action',
						'href' => '#',
						'disabled' => false,
						'active' => false
					),
					array(
						'id' => 'i2',
						'type' => 'link',
						'label' => 'Another action',
						'href' => '#',
						'disabled' => false,
						'active' => false
					),
					array(
						'id' => 'i3',
						'type' => 'link',
						'label' => 'Something else',
						'href' => '#',
						'disabled' => false,
						'active' => false
					),
					array(
						'id' => 'i4',
						'type' => 'divider',
						'label' => '',
						'href' => '',
						'disabled' => false,
						'active' => false
					),
					array(
						'id' => 'i5',
						'type' => 'link',
						'label' => 'Separated link',
						'href' => '#',
						'disabled' => false,
						'active' => false
					)
				)
			)
		),
		'textdomain' => 'wm',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'render' => 'file:./render.php',
		'viewScript' => 'file:./view.js'
	),
	'feature-cards' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'wmblocks/feature-cards',
		'version' => '0.1.0',
		'title' => 'Feature Cards',
		'category' => 'watermelon-blocks',
		'icon' => 'grid-view',
		'description' => 'Bootstrap features — custom cards layout. A row of cards each with a stacked list of image/avatar, metadata tags (location, time, category), and a heading title. Ideal for blog posts, projects, or team showcases.',
		'example' => array(
			
		),
		'supports' => array(
			'html' => false,
			'anchor' => true
		),
		'attributes' => array(
			'cards' => array(
				'type' => 'array',
				'default' => array(
					array(
						'id' => 'k1',
						'title' => 'Short title, long jacket',
						'imageUrl' => '',
						'imageAlt' => 'Card image',
						'tag1' => 'Earth',
						'tag2' => '3d',
						'tagColour' => 'text-bg-primary'
					),
					array(
						'id' => 'k2',
						'title' => 'Much longer title that wraps to multiple lines',
						'imageUrl' => '',
						'imageAlt' => 'Card image',
						'tag1' => 'Pakistan',
						'tag2' => '4d',
						'tagColour' => 'text-bg-success'
					),
					array(
						'id' => 'k3',
						'title' => 'Another longer title belongs here',
						'imageUrl' => '',
						'imageAlt' => 'Card image',
						'tag1' => 'California',
						'tag2' => '5d',
						'tagColour' => 'text-bg-danger'
					)
				)
			),
			'cols' => array(
				'type' => 'string',
				'default' => '3'
			),
			'rounded' => array(
				'type' => 'string',
				'default' => 'rounded-3'
			),
			'shadow' => array(
				'type' => 'string',
				'default' => 'shadow-sm'
			)
		),
		'textdomain' => 'wm',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'render' => 'file:./render.php',
		'viewScript' => 'file:./view.js'
	),
	'feature-columns' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'wmblocks/feature-columns',
		'version' => '0.1.0',
		'title' => 'Feature Columns',
		'category' => 'watermelon-blocks',
		'icon' => 'grid-view',
		'description' => 'Bootstrap features — columns with icons layout. Responsive 3-column grid where each column has a Bootstrap Icon in a coloured rounded square, a heading, body text and an optional CTA link.',
		'example' => array(
			
		),
		'supports' => array(
			'html' => false,
			'anchor' => true
		),
		'attributes' => array(
			'columns' => array(
				'type' => 'array',
				'default' => array(
					array(
						'id' => 'c1',
						'icon' => 'lightning-charge-fill',
						'iconBg' => 'text-bg-primary',
						'title' => 'Featured title',
						'body' => 'Paragraph of text beneath the heading to explain the heading. We\'ll add onto it with another sentence and probably just keep going until we run out of words.',
						'ctaLabel' => 'Call to action',
						'ctaUrl' => '#',
						'ctaVariant' => 'link-primary'
					),
					array(
						'id' => 'c2',
						'icon' => 'people-fill',
						'iconBg' => 'text-bg-primary',
						'title' => 'Featured title',
						'body' => 'Paragraph of text beneath the heading to explain the heading. We\'ll add onto it with another sentence and probably just keep going until we run out of words.',
						'ctaLabel' => 'Call to action',
						'ctaUrl' => '#',
						'ctaVariant' => 'link-primary'
					),
					array(
						'id' => 'c3',
						'icon' => 'gear-fill',
						'iconBg' => 'text-bg-primary',
						'title' => 'Featured title',
						'body' => 'Paragraph of text beneath the heading to explain the heading. We\'ll add onto it with another sentence and probably just keep going until we run out of words.',
						'ctaLabel' => 'Call to action',
						'ctaUrl' => '#',
						'ctaVariant' => 'link-primary'
					)
				)
			),
			'cols' => array(
				'type' => 'string',
				'default' => '3'
			),
			'iconSize' => array(
				'type' => 'string',
				'default' => 'fs-2'
			)
		),
		'textdomain' => 'wm',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'render' => 'file:./render.php',
		'viewScript' => 'file:./view.js'
	),
	'feature-hanging' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'wmblocks/feature-hanging',
		'version' => '0.1.0',
		'title' => 'Feature Hanging Icons',
		'category' => 'watermelon-blocks',
		'icon' => 'grid-view',
		'description' => 'Bootstrap features — hanging icons layout. 3-column grid where each column has a large icon in a coloured rounded pill that \'hangs\' at the start, with heading, body text and a button.',
		'example' => array(
			
		),
		'supports' => array(
			'html' => false,
			'anchor' => true
		),
		'attributes' => array(
			'items' => array(
				'type' => 'array',
				'default' => array(
					array(
						'id' => 'h1',
						'icon' => 'lightning-charge-fill',
						'iconBg' => 'text-bg-primary',
						'title' => 'Featured title',
						'body' => 'Paragraph of text beneath the heading to explain the heading. We\'ll add onto it with another sentence and probably just keep going until we run out of words.',
						'btnLabel' => 'Primary button',
						'btnUrl' => '#',
						'btnVariant' => 'btn-primary'
					),
					array(
						'id' => 'h2',
						'icon' => 'people-fill',
						'iconBg' => 'text-bg-success',
						'title' => 'Featured title',
						'body' => 'Paragraph of text beneath the heading to explain the heading. We\'ll add onto it with another sentence and probably just keep going until we run out of words.',
						'btnLabel' => 'Primary button',
						'btnUrl' => '#',
						'btnVariant' => 'btn-success'
					),
					array(
						'id' => 'h3',
						'icon' => 'gear-fill',
						'iconBg' => 'text-bg-danger',
						'title' => 'Featured title',
						'body' => 'Paragraph of text beneath the heading to explain the heading. We\'ll add onto it with another sentence and probably just keep going until we run out of words.',
						'btnLabel' => 'Primary button',
						'btnUrl' => '#',
						'btnVariant' => 'btn-danger'
					)
				)
			),
			'cols' => array(
				'type' => 'string',
				'default' => '3'
			)
		),
		'textdomain' => 'wm',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'render' => 'file:./render.php',
		'viewScript' => 'file:./view.js'
	),
	'feature-icon-grid' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'wmblocks/feature-icon-grid',
		'version' => '0.1.0',
		'title' => 'Feature Icon Grid',
		'category' => 'watermelon-blocks',
		'icon' => 'grid-view',
		'description' => 'Bootstrap features — icon grid layout. A dense 2-column or 4-column grid of small icon + heading + short description cells. Perfect for listing many features compactly.',
		'example' => array(
			
		),
		'supports' => array(
			'html' => false,
			'anchor' => true
		),
		'attributes' => array(
			'items' => array(
				'type' => 'array',
				'default' => array(
					array(
						'id' => 'g1',
						'icon' => 'lightning-charge-fill',
						'iconColour' => 'text-primary',
						'title' => 'Featured title',
						'body' => 'Paragraph of text beneath the heading to explain the heading.'
					),
					array(
						'id' => 'g2',
						'icon' => 'people-fill',
						'iconColour' => 'text-success',
						'title' => 'Featured title',
						'body' => 'Paragraph of text beneath the heading to explain the heading.'
					),
					array(
						'id' => 'g3',
						'icon' => 'gear-fill',
						'iconColour' => 'text-danger',
						'title' => 'Featured title',
						'body' => 'Paragraph of text beneath the heading to explain the heading.'
					),
					array(
						'id' => 'g4',
						'icon' => 'globe',
						'iconColour' => 'text-warning',
						'title' => 'Featured title',
						'body' => 'Paragraph of text beneath the heading to explain the heading.'
					),
					array(
						'id' => 'g5',
						'icon' => 'heart-fill',
						'iconColour' => 'text-info',
						'title' => 'Featured title',
						'body' => 'Paragraph of text beneath the heading to explain the heading.'
					),
					array(
						'id' => 'g6',
						'icon' => 'graph-up-arrow',
						'iconColour' => 'text-primary',
						'title' => 'Featured title',
						'body' => 'Paragraph of text beneath the heading to explain the heading.'
					),
					array(
						'id' => 'g7',
						'icon' => 'trophy-fill',
						'iconColour' => 'text-success',
						'title' => 'Featured title',
						'body' => 'Paragraph of text beneath the heading to explain the heading.'
					),
					array(
						'id' => 'g8',
						'icon' => 'shield-fill-check',
						'iconColour' => 'text-danger',
						'title' => 'Featured title',
						'body' => 'Paragraph of text beneath the heading to explain the heading.'
					)
				)
			),
			'cols' => array(
				'type' => 'string',
				'default' => '4'
			),
			'iconSize' => array(
				'type' => 'string',
				'default' => 'fs-2'
			)
		),
		'textdomain' => 'wm',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'render' => 'file:./render.php',
		'viewScript' => 'file:./view.js'
	),
	'feature-with-title' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'wmblocks/feature-with-title',
		'version' => '0.1.0',
		'title' => 'Features with Title',
		'category' => 'watermelon-blocks',
		'icon' => 'grid-view',
		'description' => 'Bootstrap features — section with a left-aligned title and CTA on one side, and a 2×2 icon feature grid on the other. Perfect for a \'Why choose us\' or \'How it works\' marketing section.',
		'example' => array(
			
		),
		'supports' => array(
			'html' => false,
			'anchor' => true
		),
		'attributes' => array(
			'sectionTitle' => array(
				'type' => 'string',
				'default' => 'Left-aligned title explaining these awesome features'
			),
			'sectionBody' => array(
				'type' => 'string',
				'default' => 'Paragraph of text beneath the heading to explain the heading. We\'ll add onto it with another sentence and probably just keep going until we run out of words.'
			),
			'btnLabel' => array(
				'type' => 'string',
				'default' => 'Primary button'
			),
			'btnUrl' => array(
				'type' => 'string',
				'default' => '#'
			),
			'btnVariant' => array(
				'type' => 'string',
				'default' => 'btn-primary'
			),
			'titleCols' => array(
				'type' => 'string',
				'default' => 'col-lg-4'
			),
			'featureCols' => array(
				'type' => 'string',
				'default' => 'col-lg-8'
			),
			'features' => array(
				'type' => 'array',
				'default' => array(
					array(
						'id' => 'f1',
						'icon' => 'lightning-charge-fill',
						'iconColour' => 'text-primary',
						'title' => 'Featured title',
						'body' => 'Paragraph of text beneath the heading to explain the heading.'
					),
					array(
						'id' => 'f2',
						'icon' => 'people-fill',
						'iconColour' => 'text-success',
						'title' => 'Featured title',
						'body' => 'Paragraph of text beneath the heading to explain the heading.'
					),
					array(
						'id' => 'f3',
						'icon' => 'gear-fill',
						'iconColour' => 'text-danger',
						'title' => 'Featured title',
						'body' => 'Paragraph of text beneath the heading to explain the heading.'
					),
					array(
						'id' => 'f4',
						'icon' => 'globe',
						'iconColour' => 'text-warning',
						'title' => 'Featured title',
						'body' => 'Paragraph of text beneath the heading to explain the heading.'
					)
				)
			)
		),
		'textdomain' => 'wm',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'render' => 'file:./render.php',
		'viewScript' => 'file:./view.js'
	),
	'flex' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'wmblocks/flex-container',
		'version' => '0.1.0',
		'title' => 'Flex Container',
		'category' => 'watermelon-blocks',
		'icon' => 'columns',
		'description' => 'Bootstrap flexbox container — d-flex with full control over direction, justify, align, wrap and gap.',
		'example' => array(
			
		),
		'supports' => array(
			'html' => false,
			'anchor' => true
		),
		'attributes' => array(
			'display' => array(
				'type' => 'string',
				'default' => 'd-flex'
			),
			'direction' => array(
				'type' => 'string',
				'default' => ''
			),
			'justifyContent' => array(
				'type' => 'string',
				'default' => ''
			),
			'alignItems' => array(
				'type' => 'string',
				'default' => ''
			),
			'alignContent' => array(
				'type' => 'string',
				'default' => ''
			),
			'flexWrap' => array(
				'type' => 'string',
				'default' => ''
			),
			'gap' => array(
				'type' => 'string',
				'default' => ''
			),
			'customClass' => array(
				'type' => 'string',
				'default' => ''
			)
		),
		'providesContext' => array(
			'wmblocks/flexContainerId' => 'display'
		),
		'textdomain' => 'wm',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'render' => 'file:./render.php'
	),
	'flex-item' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'wmblocks/flex-item',
		'version' => '0.1.0',
		'title' => 'Flex Item',
		'category' => 'watermelon-blocks',
		'icon' => 'align-pull-left',
		'description' => 'A flex item inside a Flex Container block.',
		'example' => array(
			
		),
		'parent' => array(
			'wmblocks/flex-container'
		),
		'supports' => array(
			'html' => false,
			'reusable' => false
		),
		'attributes' => array(
			'flexFill' => array(
				'type' => 'boolean',
				'default' => false
			),
			'flexGrow' => array(
				'type' => 'string',
				'default' => ''
			),
			'flexShrink' => array(
				'type' => 'string',
				'default' => ''
			),
			'alignSelf' => array(
				'type' => 'string',
				'default' => ''
			),
			'order' => array(
				'type' => 'string',
				'default' => ''
			),
			'autoMargin' => array(
				'type' => 'string',
				'default' => ''
			),
			'customClass' => array(
				'type' => 'string',
				'default' => ''
			),
			'minWidth' => array(
				'type' => 'string',
				'default' => ''
			)
		),
		'textdomain' => 'wm',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'render' => 'file:./render.php'
	),
	'form' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'wmblocks/form',
		'version' => '0.1.0',
		'title' => 'Bootstrap Form',
		'category' => 'watermelon-blocks',
		'icon' => 'feedback',
		'description' => 'Bootstrap form container with configurable action, method, layout and validation.',
		'supports' => array(
			'html' => false,
			'anchor' => true
		),
		'attributes' => array(
			'formAction' => array(
				'type' => 'string',
				'default' => ''
			),
			'formMethod' => array(
				'type' => 'string',
				'default' => 'post'
			),
			'formLayout' => array(
				'type' => 'string',
				'default' => 'stacked'
			),
			'validated' => array(
				'type' => 'boolean',
				'default' => false
			),
			'novalidate' => array(
				'type' => 'boolean',
				'default' => true
			),
			'autocomplete' => array(
				'type' => 'string',
				'default' => 'on'
			),
			'successMessage' => array(
				'type' => 'string',
				'default' => 'Thank you! Your message has been sent.'
			),
			'customClass' => array(
				'type' => 'string',
				'default' => ''
			)
		),
		'providesContext' => array(
			'wmblocks/formLayout' => 'formLayout'
		),
		'textdomain' => 'wm',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'render' => 'file:./render.php'
	),
	'form-check' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'wmblocks/form-check',
		'version' => '0.1.0',
		'title' => 'Form Check',
		'category' => 'watermelon-blocks',
		'icon' => 'yes',
		'description' => 'Bootstrap checkbox, radio button, or toggle switch.',
		'parent' => array(
			'wmblocks/bs-form'
		),
		'supports' => array(
			'html' => false,
			'reusable' => false
		),
		'attributes' => array(
			'checkType' => array(
				'type' => 'string',
				'default' => 'checkbox'
			),
			'label' => array(
				'type' => 'string',
				'default' => 'Check me out'
			),
			'name' => array(
				'type' => 'string',
				'default' => ''
			),
			'value' => array(
				'type' => 'string',
				'default' => '1'
			),
			'checked' => array(
				'type' => 'boolean',
				'default' => false
			),
			'disabled' => array(
				'type' => 'boolean',
				'default' => false
			),
			'inline' => array(
				'type' => 'boolean',
				'default' => false
			),
			'reverse' => array(
				'type' => 'boolean',
				'default' => false
			),
			'colClass' => array(
				'type' => 'string',
				'default' => ''
			)
		),
		'usesContext' => array(
			'wmblocks/formLayout'
		),
		'textdomain' => 'wm',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'render' => 'file:./render.php',
		'style' => 'file:./style-index.css'
	),
	'form-field' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'wmblocks/form-field',
		'version' => '0.1.0',
		'title' => 'Form Field',
		'category' => 'watermelon-blocks',
		'icon' => 'text-page',
		'description' => 'Bootstrap form-control input — text, email, password, number, date, file and more.',
		'parent' => array(
			'wmblocks/form'
		),
		'supports' => array(
			'html' => false,
			'reusable' => false
		),
		'attributes' => array(
			'fieldType' => array(
				'type' => 'string',
				'default' => 'text'
			),
			'label' => array(
				'type' => 'string',
				'default' => 'Label'
			),
			'name' => array(
				'type' => 'string',
				'default' => ''
			),
			'placeholder' => array(
				'type' => 'string',
				'default' => ''
			),
			'helpText' => array(
				'type' => 'string',
				'default' => ''
			),
			'required' => array(
				'type' => 'boolean',
				'default' => false
			),
			'disabled' => array(
				'type' => 'boolean',
				'default' => false
			),
			'readonly' => array(
				'type' => 'boolean',
				'default' => false
			),
			'size' => array(
				'type' => 'string',
				'default' => ''
			),
			'colClass' => array(
				'type' => 'string',
				'default' => ''
			),
			'hideLabel' => array(
				'type' => 'boolean',
				'default' => false
			),
			'validFeedback' => array(
				'type' => 'string',
				'default' => ''
			),
			'invalidFeedback' => array(
				'type' => 'string',
				'default' => ''
			)
		),
		'usesContext' => array(
			'wmblocks/formLayout'
		),
		'textdomain' => 'wm',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'render' => 'file:./render.php'
	),
	'form-floating' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'wmblocks/form-floating',
		'version' => '0.1.0',
		'title' => 'Floating Label',
		'category' => 'watermelon-blocks',
		'icon' => 'editor-textcolor',
		'description' => 'Bootstrap floating label input — label animates above the field on focus.',
		'parent' => array(
			'wmblocks/bs-form'
		),
		'supports' => array(
			'html' => false,
			'reusable' => false
		),
		'attributes' => array(
			'fieldType' => array(
				'type' => 'string',
				'default' => 'text'
			),
			'label' => array(
				'type' => 'string',
				'default' => 'Email address'
			),
			'name' => array(
				'type' => 'string',
				'default' => ''
			),
			'placeholder' => array(
				'type' => 'string',
				'default' => ' '
			),
			'required' => array(
				'type' => 'boolean',
				'default' => false
			),
			'disabled' => array(
				'type' => 'boolean',
				'default' => false
			),
			'colClass' => array(
				'type' => 'string',
				'default' => ''
			)
		),
		'usesContext' => array(
			'wmblocks/formLayout'
		),
		'textdomain' => 'wm',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'render' => 'file:./render.php',
		'style' => 'file:./style-index.css'
	),
	'form-input-group' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'wmblocks/form-input-group',
		'version' => '0.1.0',
		'title' => 'Input Group',
		'category' => 'watermelon-blocks',
		'icon' => 'minus',
		'description' => 'Bootstrap input-group — input with prepend and/or append addons.',
		'parent' => array(
			'wmblocks/bs-form'
		),
		'supports' => array(
			'html' => false,
			'reusable' => false
		),
		'attributes' => array(
			'label' => array(
				'type' => 'string',
				'default' => 'Username'
			),
			'name' => array(
				'type' => 'string',
				'default' => ''
			),
			'fieldType' => array(
				'type' => 'string',
				'default' => 'text'
			),
			'placeholder' => array(
				'type' => 'string',
				'default' => ''
			),
			'prepend' => array(
				'type' => 'string',
				'default' => '@'
			),
			'append' => array(
				'type' => 'string',
				'default' => ''
			),
			'required' => array(
				'type' => 'boolean',
				'default' => false
			),
			'disabled' => array(
				'type' => 'boolean',
				'default' => false
			),
			'size' => array(
				'type' => 'string',
				'default' => ''
			),
			'helpText' => array(
				'type' => 'string',
				'default' => ''
			),
			'colClass' => array(
				'type' => 'string',
				'default' => ''
			),
			'hideLabel' => array(
				'type' => 'boolean',
				'default' => false
			)
		),
		'usesContext' => array(
			'wmblocks/formLayout'
		),
		'textdomain' => 'wm',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'render' => 'file:./render.php',
		'style' => 'file:./style-index.css'
	),
	'form-range' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'wmblocks/form-range',
		'version' => '0.1.0',
		'title' => 'Form Range',
		'category' => 'watermelon-blocks',
		'icon' => 'leftright',
		'description' => 'Bootstrap range input slider.',
		'parent' => array(
			'wmblocks/bs-form'
		),
		'supports' => array(
			'html' => false,
			'reusable' => false
		),
		'attributes' => array(
			'label' => array(
				'type' => 'string',
				'default' => 'Range'
			),
			'name' => array(
				'type' => 'string',
				'default' => ''
			),
			'min' => array(
				'type' => 'number',
				'default' => 0
			),
			'max' => array(
				'type' => 'number',
				'default' => 100
			),
			'step' => array(
				'type' => 'number',
				'default' => 1
			),
			'value' => array(
				'type' => 'number',
				'default' => 50
			),
			'disabled' => array(
				'type' => 'boolean',
				'default' => false
			),
			'helpText' => array(
				'type' => 'string',
				'default' => ''
			),
			'colClass' => array(
				'type' => 'string',
				'default' => ''
			),
			'hideLabel' => array(
				'type' => 'boolean',
				'default' => false
			)
		),
		'usesContext' => array(
			'wmblocks/formLayout'
		),
		'textdomain' => 'wm',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'render' => 'file:./render.php',
		'style' => 'file:./style-index.css'
	),
	'form-select' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'wmblocks/form-select',
		'version' => '0.1.0',
		'title' => 'Form Select',
		'category' => 'watermelon-blocks',
		'icon' => 'arrow-down-alt2',
		'description' => 'Bootstrap form-select dropdown with configurable options.',
		'parent' => array(
			'wmblocks/bs-form'
		),
		'supports' => array(
			'html' => false,
			'reusable' => false
		),
		'attributes' => array(
			'label' => array(
				'type' => 'string',
				'default' => 'Select an option'
			),
			'name' => array(
				'type' => 'string',
				'default' => ''
			),
			'options' => array(
				'type' => 'array',
				'default' => array(
					array(
						'value' => '',
						'label' => 'Choose...'
					),
					array(
						'value' => '1',
						'label' => 'Option 1'
					),
					array(
						'value' => '2',
						'label' => 'Option 2'
					)
				),
				'items' => array(
					'type' => 'object'
				)
			),
			'multiple' => array(
				'type' => 'boolean',
				'default' => false
			),
			'size' => array(
				'type' => 'string',
				'default' => ''
			),
			'required' => array(
				'type' => 'boolean',
				'default' => false
			),
			'disabled' => array(
				'type' => 'boolean',
				'default' => false
			),
			'helpText' => array(
				'type' => 'string',
				'default' => ''
			),
			'colClass' => array(
				'type' => 'string',
				'default' => ''
			),
			'hideLabel' => array(
				'type' => 'boolean',
				'default' => false
			)
		),
		'usesContext' => array(
			'wmblocks/formLayout'
		),
		'textdomain' => 'wm',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'render' => 'file:./render.php',
		'style' => 'file:./style-index.css'
	),
	'form-submit' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'wmblocks/form-submit',
		'version' => '0.1.0',
		'title' => 'Form Submit',
		'category' => 'watermelon-blocks',
		'icon' => 'arrow-right-alt',
		'description' => 'Bootstrap form submit button.',
		'parent' => array(
			'wmblocks/bs-form'
		),
		'supports' => array(
			'html' => false,
			'reusable' => false
		),
		'attributes' => array(
			'label' => array(
				'type' => 'string',
				'default' => 'Submit'
			),
			'variant' => array(
				'type' => 'string',
				'default' => 'btn-primary'
			),
			'size' => array(
				'type' => 'string',
				'default' => ''
			),
			'fullWidth' => array(
				'type' => 'boolean',
				'default' => false
			),
			'disabled' => array(
				'type' => 'boolean',
				'default' => false
			),
			'colClass' => array(
				'type' => 'string',
				'default' => ''
			)
		),
		'textdomain' => 'wm',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'render' => 'file:./render.php',
		'style' => 'file:./style-index.css'
	),
	'form-textarea' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'wmblocks/form-textarea',
		'version' => '0.1.0',
		'title' => 'Form Textarea',
		'category' => 'watermelon-blocks',
		'icon' => 'editor-paragraph',
		'description' => 'Bootstrap textarea form control.',
		'parent' => array(
			'wmblocks/bs-form'
		),
		'supports' => array(
			'html' => false,
			'reusable' => false
		),
		'attributes' => array(
			'label' => array(
				'type' => 'string',
				'default' => 'Message'
			),
			'name' => array(
				'type' => 'string',
				'default' => ''
			),
			'placeholder' => array(
				'type' => 'string',
				'default' => ''
			),
			'rows' => array(
				'type' => 'number',
				'default' => 3
			),
			'required' => array(
				'type' => 'boolean',
				'default' => false
			),
			'disabled' => array(
				'type' => 'boolean',
				'default' => false
			),
			'readonly' => array(
				'type' => 'boolean',
				'default' => false
			),
			'helpText' => array(
				'type' => 'string',
				'default' => ''
			),
			'colClass' => array(
				'type' => 'string',
				'default' => ''
			),
			'hideLabel' => array(
				'type' => 'boolean',
				'default' => false
			)
		),
		'usesContext' => array(
			'wmblocks/formLayout'
		),
		'textdomain' => 'wm',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'render' => 'file:./render.php',
		'style' => 'file:./style-index.css'
	),
	'grid-col' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'wmblocks/grid-col',
		'version' => '0.1.0',
		'title' => 'Grid Column',
		'category' => 'watermelon-blocks',
		'icon' => 'align-pull-left',
		'description' => 'Bootstrap column — direct child of a grid row with responsive width, offset, order and align.',
		'example' => array(
			
		),
		'supports' => array(
			'html' => false,
			'anchor' => true
		),
		'attributes' => array(
			'col' => array(
				'type' => 'string',
				'default' => 'col'
			),
			'colSm' => array(
				'type' => 'string',
				'default' => ''
			),
			'colMd' => array(
				'type' => 'string',
				'default' => ''
			),
			'colLg' => array(
				'type' => 'string',
				'default' => ''
			),
			'colXl' => array(
				'type' => 'string',
				'default' => ''
			),
			'colXxl' => array(
				'type' => 'string',
				'default' => ''
			),
			'offset' => array(
				'type' => 'string',
				'default' => ''
			),
			'offsetSm' => array(
				'type' => 'string',
				'default' => ''
			),
			'offsetMd' => array(
				'type' => 'string',
				'default' => ''
			),
			'offsetLg' => array(
				'type' => 'string',
				'default' => ''
			),
			'offsetXl' => array(
				'type' => 'string',
				'default' => ''
			),
			'order' => array(
				'type' => 'string',
				'default' => ''
			),
			'orderSm' => array(
				'type' => 'string',
				'default' => ''
			),
			'orderMd' => array(
				'type' => 'string',
				'default' => ''
			),
			'orderLg' => array(
				'type' => 'string',
				'default' => ''
			),
			'alignSelf' => array(
				'type' => 'string',
				'default' => ''
			),
			'customClass' => array(
				'type' => 'string',
				'default' => ''
			)
		),
		'usesContext' => array(
			'wmblocks/inRow'
		),
		'textdomain' => 'wm',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'render' => 'file:./render.php'
	),
	'grid-container' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'wmblocks/grid-container',
		'version' => '0.1.0',
		'title' => 'Grid Container',
		'category' => 'watermelon-blocks',
		'icon' => 'layout',
		'description' => 'Bootstrap container — the root wrapper for grid rows and columns.',
		'example' => array(
			
		),
		'supports' => array(
			'html' => false,
			'anchor' => true
		),
		'attributes' => array(
			'containerType' => array(
				'type' => 'string',
				'default' => 'container'
			),
			'textAlign' => array(
				'type' => 'string',
				'default' => ''
			),
			'customClass' => array(
				'type' => 'string',
				'default' => ''
			),
			'overflow' => array(
				'type' => 'string',
				'default' => ''
			),
			'padding' => array(
				'type' => 'string',
				'default' => ''
			)
		),
		'providesContext' => array(
			'wmblocks/inGrid' => 'containerType'
		),
		'textdomain' => 'wm',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'render' => 'file:./render.php'
	),
	'grid-row' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'wmblocks/grid-row',
		'version' => '0.1.0',
		'title' => 'Grid Row',
		'category' => 'watermelon-blocks',
		'icon' => 'minus',
		'description' => 'Bootstrap row — horizontal group of columns inside a container.',
		'example' => array(
			
		),
		'supports' => array(
			'html' => false,
			'anchor' => true
		),
		'attributes' => array(
			'gutterX' => array(
				'type' => 'string',
				'default' => ''
			),
			'gutterY' => array(
				'type' => 'string',
				'default' => ''
			),
			'gutter' => array(
				'type' => 'string',
				'default' => ''
			),
			'rowCols' => array(
				'type' => 'string',
				'default' => ''
			),
			'rowColsSm' => array(
				'type' => 'string',
				'default' => ''
			),
			'rowColsMd' => array(
				'type' => 'string',
				'default' => ''
			),
			'rowColsLg' => array(
				'type' => 'string',
				'default' => ''
			),
			'rowColsXl' => array(
				'type' => 'string',
				'default' => ''
			),
			'rowColsXxl' => array(
				'type' => 'string',
				'default' => ''
			),
			'justifyContent' => array(
				'type' => 'string',
				'default' => ''
			),
			'alignItems' => array(
				'type' => 'string',
				'default' => ''
			),
			'noGutters' => array(
				'type' => 'boolean',
				'default' => false
			),
			'customClass' => array(
				'type' => 'string',
				'default' => ''
			),
			'gutterSm' => array(
				'type' => 'string',
				'default' => ''
			),
			'gutterXSm' => array(
				'type' => 'string',
				'default' => ''
			),
			'gutterYSm' => array(
				'type' => 'string',
				'default' => ''
			),
			'gutterMd' => array(
				'type' => 'string',
				'default' => ''
			),
			'gutterXMd' => array(
				'type' => 'string',
				'default' => ''
			),
			'gutterYMd' => array(
				'type' => 'string',
				'default' => ''
			),
			'gutterLg' => array(
				'type' => 'string',
				'default' => ''
			),
			'gutterXLg' => array(
				'type' => 'string',
				'default' => ''
			),
			'gutterYLg' => array(
				'type' => 'string',
				'default' => ''
			),
			'gutterXl' => array(
				'type' => 'string',
				'default' => ''
			),
			'gutterXXl' => array(
				'type' => 'string',
				'default' => ''
			),
			'gutterYXl' => array(
				'type' => 'string',
				'default' => ''
			),
			'gutterXxl' => array(
				'type' => 'string',
				'default' => ''
			),
			'gutterXXxl' => array(
				'type' => 'string',
				'default' => ''
			),
			'gutterYXxl' => array(
				'type' => 'string',
				'default' => ''
			)
		),
		'providesContext' => array(
			'wmblocks/inRow' => 'rowCols'
		),
		'textdomain' => 'wm',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'render' => 'file:./render.php'
	),
	'heading' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'wmblocks/bs-heading',
		'version' => '0.1.0',
		'title' => 'BS Heading',
		'category' => 'watermelon-blocks',
		'icon' => 'heading',
		'description' => 'Bootstrap heading — h1–h6 with optional display heading class, text utilities and lead.',
		'example' => array(
			
		),
		'supports' => array(
			'html' => false,
			'anchor' => true
		),
		'attributes' => array(
			'level' => array(
				'type' => 'number',
				'default' => 2
			),
			'content' => array(
				'type' => 'string',
				'default' => 'Bootstrap Heading'
			),
			'displayClass' => array(
				'type' => 'string',
				'default' => ''
			),
			'textAlign' => array(
				'type' => 'string',
				'default' => ''
			),
			'textColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'fontWeight' => array(
				'type' => 'string',
				'default' => ''
			),
			'customClass' => array(
				'type' => 'string',
				'default' => ''
			)
		),
		'textdomain' => 'wm',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'render' => 'file:./render.php'
	),
	'hero1' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'wmblocks/hero1',
		'version' => '0.1.0',
		'title' => 'Hero 1 — Centered',
		'category' => 'watermelon-blocks',
		'icon' => 'cover-image',
		'description' => 'Centered hero with logo, headline, subtext and two buttons.',
		'supports' => array(
			'html' => false,
			'anchor' => true
		),
		'attributes' => array(
			'logoUrl' => array(
				'type' => 'string',
				'default' => ''
			),
			'logoId' => array(
				'type' => 'number',
				'default' => 0
			),
			'logoHeight' => array(
				'type' => 'string',
				'default' => '72px'
			),
			'heading' => array(
				'type' => 'string',
				'default' => 'Centered hero'
			),
			'subtext' => array(
				'type' => 'string',
				'default' => 'Quickly design and customize responsive mobile-first sites with Bootstrap, the world\'s most popular front-end open source toolkit.'
			),
			'btn1Text' => array(
				'type' => 'string',
				'default' => 'Primary button'
			),
			'btn1Url' => array(
				'type' => 'string',
				'default' => '#'
			),
			'btn1Variant' => array(
				'type' => 'string',
				'default' => 'btn-primary'
			),
			'btn2Text' => array(
				'type' => 'string',
				'default' => 'Secondary'
			),
			'btn2Url' => array(
				'type' => 'string',
				'default' => '#'
			),
			'btn2Variant' => array(
				'type' => 'string',
				'default' => 'btn-outline-secondary'
			),
			'bgColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'customClass' => array(
				'type' => 'string',
				'default' => ''
			)
		),
		'textdomain' => 'wm',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'render' => 'file:./render.php'
	),
	'hero2' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'wmblocks/hero2',
		'version' => '0.1.0',
		'title' => 'Hero 2 — Centered + Screenshot',
		'category' => 'watermelon-blocks',
		'icon' => 'cover-image',
		'description' => 'Centered hero with headline, subtext, buttons and a screenshot image below.',
		'supports' => array(
			'html' => false,
			'anchor' => true
		),
		'attributes' => array(
			'heading' => array(
				'type' => 'string',
				'default' => 'Centered screenshot'
			),
			'subtext' => array(
				'type' => 'string',
				'default' => 'Quickly design and customize responsive mobile-first sites with Bootstrap, the world\'s most popular front-end open source toolkit.'
			),
			'btn1Text' => array(
				'type' => 'string',
				'default' => 'Primary button'
			),
			'btn1Url' => array(
				'type' => 'string',
				'default' => '#'
			),
			'btn1Variant' => array(
				'type' => 'string',
				'default' => 'btn-primary'
			),
			'btn2Text' => array(
				'type' => 'string',
				'default' => 'Secondary'
			),
			'btn2Url' => array(
				'type' => 'string',
				'default' => '#'
			),
			'btn2Variant' => array(
				'type' => 'string',
				'default' => 'btn-outline-secondary'
			),
			'imageUrl' => array(
				'type' => 'string',
				'default' => ''
			),
			'imageId' => array(
				'type' => 'number',
				'default' => 0
			),
			'imageAlt' => array(
				'type' => 'string',
				'default' => 'App screenshot'
			),
			'bgColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'customClass' => array(
				'type' => 'string',
				'default' => ''
			)
		),
		'textdomain' => 'wm',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'render' => 'file:./render.php'
	),
	'hero3' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'wmblocks/hero3',
		'version' => '0.1.0',
		'title' => 'Hero 3 — Left-aligned + Image',
		'category' => 'watermelon-blocks',
		'icon' => 'cover-image',
		'description' => 'Left-aligned hero with headline, text and buttons alongside a right image.',
		'supports' => array(
			'html' => false,
			'anchor' => true
		),
		'attributes' => array(
			'heading' => array(
				'type' => 'string',
				'default' => 'Responsive left-aligned hero with image'
			),
			'subtext' => array(
				'type' => 'string',
				'default' => 'Quickly design and customize responsive mobile-first sites with Bootstrap, the world\'s most popular front-end open source toolkit.'
			),
			'btn1Text' => array(
				'type' => 'string',
				'default' => 'Primary'
			),
			'btn1Url' => array(
				'type' => 'string',
				'default' => '#'
			),
			'btn1Variant' => array(
				'type' => 'string',
				'default' => 'btn-primary'
			),
			'btn2Text' => array(
				'type' => 'string',
				'default' => 'Default'
			),
			'btn2Url' => array(
				'type' => 'string',
				'default' => '#'
			),
			'btn2Variant' => array(
				'type' => 'string',
				'default' => 'btn-outline-secondary'
			),
			'imageUrl' => array(
				'type' => 'string',
				'default' => ''
			),
			'imageId' => array(
				'type' => 'number',
				'default' => 0
			),
			'imageAlt' => array(
				'type' => 'string',
				'default' => ''
			),
			'bgColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'customClass' => array(
				'type' => 'string',
				'default' => ''
			)
		),
		'textdomain' => 'wm',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'render' => 'file:./render.php'
	),
	'hero4' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'wmblocks/hero4',
		'version' => '0.1.0',
		'title' => 'Hero 4 — Sign-up Form',
		'category' => 'watermelon-blocks',
		'icon' => 'cover-image',
		'description' => 'Vertically centered hero with a sign-up form on the right.',
		'supports' => array(
			'html' => false,
			'anchor' => true
		),
		'attributes' => array(
			'heading' => array(
				'type' => 'string',
				'default' => 'Vertically centered hero sign-up form'
			),
			'subtext' => array(
				'type' => 'string',
				'default' => 'Below is an example form built entirely with Bootstrap\'s form controls. Each required form group has a validation state.'
			),
			'formAction' => array(
				'type' => 'string',
				'default' => ''
			),
			'emailLabel' => array(
				'type' => 'string',
				'default' => 'Email address'
			),
			'passwordLabel' => array(
				'type' => 'string',
				'default' => 'Password'
			),
			'rememberLabel' => array(
				'type' => 'string',
				'default' => 'Remember me'
			),
			'submitText' => array(
				'type' => 'string',
				'default' => 'Sign up'
			),
			'submitVariant' => array(
				'type' => 'string',
				'default' => 'btn-primary'
			),
			'legalText' => array(
				'type' => 'string',
				'default' => 'By clicking Sign up, you agree to the terms of use.'
			),
			'bgColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'customClass' => array(
				'type' => 'string',
				'default' => ''
			)
		),
		'textdomain' => 'wm',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'render' => 'file:./render.php'
	),
	'hero5' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'wmblocks/hero5',
		'version' => '0.1.0',
		'title' => 'Hero 5 — Border + Cropped Image',
		'category' => 'watermelon-blocks',
		'icon' => 'cover-image',
		'description' => 'Border hero with content on the left and a cropped/shadowed image on the right.',
		'supports' => array(
			'html' => false,
			'anchor' => true
		),
		'attributes' => array(
			'heading' => array(
				'type' => 'string',
				'default' => 'Border hero with cropped image and shadows'
			),
			'subtext' => array(
				'type' => 'string',
				'default' => 'Quickly design and customize responsive mobile-first sites with Bootstrap, the world\'s most popular front-end open source toolkit.'
			),
			'btn1Text' => array(
				'type' => 'string',
				'default' => 'Primary'
			),
			'btn1Url' => array(
				'type' => 'string',
				'default' => '#'
			),
			'btn1Variant' => array(
				'type' => 'string',
				'default' => 'btn-primary'
			),
			'btn2Text' => array(
				'type' => 'string',
				'default' => 'Default'
			),
			'btn2Url' => array(
				'type' => 'string',
				'default' => '#'
			),
			'btn2Variant' => array(
				'type' => 'string',
				'default' => 'btn-outline-secondary'
			),
			'imageUrl' => array(
				'type' => 'string',
				'default' => ''
			),
			'imageId' => array(
				'type' => 'number',
				'default' => 0
			),
			'imageAlt' => array(
				'type' => 'string',
				'default' => ''
			),
			'bgColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'customClass' => array(
				'type' => 'string',
				'default' => ''
			)
		),
		'textdomain' => 'wm',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'render' => 'file:./render.php'
	),
	'hero6' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'wmblocks/hero6',
		'version' => '0.1.0',
		'title' => 'Hero 6 — Dark',
		'category' => 'watermelon-blocks',
		'icon' => 'cover-image',
		'description' => 'Dark background hero with headline, subtext, and buttons.',
		'supports' => array(
			'html' => false,
			'anchor' => true
		),
		'attributes' => array(
			'heading' => array(
				'type' => 'string',
				'default' => 'Dark color hero'
			),
			'subtext' => array(
				'type' => 'string',
				'default' => 'Quickly design and customize responsive mobile-first sites with Bootstrap, the world\'s most popular front-end open source toolkit.'
			),
			'btn1Text' => array(
				'type' => 'string',
				'default' => 'Custom button'
			),
			'btn1Url' => array(
				'type' => 'string',
				'default' => '#'
			),
			'btn1Variant' => array(
				'type' => 'string',
				'default' => 'btn-outline-light'
			),
			'btn2Text' => array(
				'type' => 'string',
				'default' => 'Secondary'
			),
			'btn2Url' => array(
				'type' => 'string',
				'default' => '#'
			),
			'btn2Variant' => array(
				'type' => 'string',
				'default' => 'btn-outline-secondary'
			),
			'bgColor' => array(
				'type' => 'string',
				'default' => 'bg-dark text-white'
			),
			'customClass' => array(
				'type' => 'string',
				'default' => ''
			)
		),
		'textdomain' => 'wm',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'render' => 'file:./render.php'
	),
	'hstack' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'wmblocks/hstack',
		'version' => '0.1.0',
		'title' => 'Horizontal Stack',
		'category' => 'watermelon-blocks',
		'icon' => 'leftright',
		'description' => 'Bootstrap hstack — horizontal flex row layout. Items are vertically centered by default.',
		'example' => array(
			
		),
		'supports' => array(
			'html' => false,
			'anchor' => true
		),
		'attributes' => array(
			'gap' => array(
				'type' => 'string',
				'default' => 'gap-3'
			),
			'showDividers' => array(
				'type' => 'boolean',
				'default' => false
			),
			'customClass' => array(
				'type' => 'string',
				'default' => ''
			)
		),
		'providesContext' => array(
			'wmblocks/stackType' => 'gap'
		),
		'textdomain' => 'wm',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'render' => 'file:./render.php'
	),
	'icon-link' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'wmblocks/icon-link',
		'version' => '0.1.0',
		'title' => 'Icon Link',
		'category' => 'watermelon-blocks',
		'icon' => 'admin-links',
		'description' => 'Bootstrap icon-link helper — an anchor with an inline SVG icon and text, with optional hover animation.',
		'example' => array(
			
		),
		'supports' => array(
			'html' => false,
			'anchor' => true
		),
		'attributes' => array(
			'url' => array(
				'type' => 'string',
				'default' => '#'
			),
			'newTab' => array(
				'type' => 'boolean',
				'default' => false
			),
			'linkText' => array(
				'type' => 'string',
				'default' => 'Icon link'
			),
			'iconSvg' => array(
				'type' => 'string',
				'default' => ''
			),
			'iconPosition' => array(
				'type' => 'string',
				'default' => 'start'
			),
			'hoverAnim' => array(
				'type' => 'boolean',
				'default' => false
			),
			'linkColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'linkUnderline' => array(
				'type' => 'string',
				'default' => ''
			),
			'linkOpacity' => array(
				'type' => 'string',
				'default' => ''
			),
			'fontSize' => array(
				'type' => 'string',
				'default' => ''
			),
			'gap' => array(
				'type' => 'string',
				'default' => ''
			),
			'customClass' => array(
				'type' => 'string',
				'default' => ''
			)
		),
		'textdomain' => 'wm',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'render' => 'file:./render.php'
	),
	'image-link' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'wmblocks/image-link',
		'version' => '0.1.0',
		'title' => 'Image Link',
		'category' => 'watermelon-blocks',
		'icon' => 'admin-links',
		'description' => 'Bootstrap image-link — image with text as media object, stretched-link card, or plain linked image. Three layout modes.',
		'example' => array(
			
		),
		'supports' => array(
			'html' => false,
			'anchor' => true
		),
		'attributes' => array(
			'layoutMode' => array(
				'type' => 'string',
				'default' => 'media'
			),
			'url' => array(
				'type' => 'string',
				'default' => '#'
			),
			'newTab' => array(
				'type' => 'boolean',
				'default' => false
			),
			'stretchedLink' => array(
				'type' => 'boolean',
				'default' => true
			),
			'imageUrl' => array(
				'type' => 'string',
				'default' => ''
			),
			'imageId' => array(
				'type' => 'number',
				'default' => 0
			),
			'imageAlt' => array(
				'type' => 'string',
				'default' => ''
			),
			'imageWidth' => array(
				'type' => 'string',
				'default' => '120px'
			),
			'imagePosition' => array(
				'type' => 'string',
				'default' => 'start'
			),
			'imgClass' => array(
				'type' => 'string',
				'default' => 'img-fluid'
			),
			'imageGap' => array(
				'type' => 'string',
				'default' => 'me-3'
			),
			'imageAlign' => array(
				'type' => 'string',
				'default' => 'align-self-start'
			),
			'title' => array(
				'type' => 'string',
				'default' => 'Image link heading'
			),
			'body' => array(
				'type' => 'string',
				'default' => 'Some quick example text to build on the title and make up the bulk of the content.'
			),
			'linkText' => array(
				'type' => 'string',
				'default' => 'Go somewhere'
			),
			'linkVariant' => array(
				'type' => 'string',
				'default' => 'btn-primary'
			),
			'showLinkBtn' => array(
				'type' => 'boolean',
				'default' => true
			),
			'wrapperClass' => array(
				'type' => 'string',
				'default' => ''
			),
			'rounded' => array(
				'type' => 'string',
				'default' => ''
			),
			'shadow' => array(
				'type' => 'string',
				'default' => ''
			),
			'objectFit' => array(
				'type' => 'string',
				'default' => ''
			),
			'objectHeight' => array(
				'type' => 'string',
				'default' => ''
			)
		),
		'textdomain' => 'wm',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'render' => 'file:./render.php'
	),
	'jumbotron0' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'wmblocks/jumbotron0',
		'version' => '0.1.0',
		'title' => 'Jumbotron 1 — With Icon',
		'category' => 'watermelon-blocks',
		'icon' => 'star-filled',
		'description' => 'Jumbotron with an SVG icon at the top, heading, text and two CTA buttons.',
		'supports' => array(
			'html' => false,
			'anchor' => true
		),
		'attributes' => array(
			'iconSvg' => array(
				'type' => 'string',
				'default' => '<svg xmlns="http://www.w3.org/2000/svg" width="75" height="75" fill="currentColor" viewBox="0 0 16 16"><path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/><path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z"/></svg>'
			),
			'iconColor' => array(
				'type' => 'string',
				'default' => 'text-body-secondary'
			),
			'heading' => array(
				'type' => 'string',
				'default' => 'Jumbotron with icon'
			),
			'subtext' => array(
				'type' => 'string',
				'default' => 'This is a custom jumbotron featuring an SVG image at the top, some longer text that wraps early thanks to a responsive col-* class, and a customized call to action.'
			),
			'btn1Text' => array(
				'type' => 'string',
				'default' => 'Call to action'
			),
			'btn1Url' => array(
				'type' => 'string',
				'default' => '#'
			),
			'btn1Variant' => array(
				'type' => 'string',
				'default' => 'btn-primary'
			),
			'btn2Text' => array(
				'type' => 'string',
				'default' => 'Secondary link'
			),
			'btn2Url' => array(
				'type' => 'string',
				'default' => '#'
			),
			'btn2Variant' => array(
				'type' => 'string',
				'default' => 'btn-outline-secondary'
			),
			'bgColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'colWidth' => array(
				'type' => 'string',
				'default' => 'col-lg-6'
			),
			'customClass' => array(
				'type' => 'string',
				'default' => ''
			)
		),
		'textdomain' => 'wm',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'render' => 'file:./render.php'
	),
	'jumbotron1' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'wmblocks/jumbotron1',
		'version' => '0.1.0',
		'title' => 'Jumbotron 1 — With Icon',
		'category' => 'watermelon-blocks',
		'icon' => 'star-filled',
		'description' => 'Jumbotron with an SVG icon at the top, heading, text and two CTA buttons.',
		'supports' => array(
			'html' => false,
			'anchor' => true
		),
		'attributes' => array(
			'iconSvg' => array(
				'type' => 'string',
				'default' => '<svg xmlns="http://www.w3.org/2000/svg" width="75" height="75" fill="currentColor" viewBox="0 0 16 16"><path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/><path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z"/></svg>'
			),
			'iconColor' => array(
				'type' => 'string',
				'default' => 'text-body-secondary'
			),
			'heading' => array(
				'type' => 'string',
				'default' => 'Jumbotron with icon'
			),
			'subtext' => array(
				'type' => 'string',
				'default' => 'This is a custom jumbotron featuring an SVG image at the top, some longer text that wraps early thanks to a responsive col-* class, and a customized call to action.'
			),
			'btn1Text' => array(
				'type' => 'string',
				'default' => 'Call to action'
			),
			'btn1Url' => array(
				'type' => 'string',
				'default' => '#'
			),
			'btn1Variant' => array(
				'type' => 'string',
				'default' => 'btn-primary'
			),
			'btn2Text' => array(
				'type' => 'string',
				'default' => 'Secondary link'
			),
			'btn2Url' => array(
				'type' => 'string',
				'default' => '#'
			),
			'btn2Variant' => array(
				'type' => 'string',
				'default' => 'btn-outline-secondary'
			),
			'bgColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'colWidth' => array(
				'type' => 'string',
				'default' => 'col-lg-6'
			),
			'customClass' => array(
				'type' => 'string',
				'default' => ''
			)
		),
		'textdomain' => 'wm',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'render' => 'file:./render.php'
	),
	'jumbotron2' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'wmblocks/jumbotron2',
		'version' => '0.1.0',
		'title' => 'Jumbotron 2 — Placeholder (Faded)',
		'category' => 'watermelon-blocks',
		'icon' => 'star-filled',
		'description' => 'Faded placeholder jumbotron with muted background, heading, text and a single CTA.',
		'supports' => array(
			'html' => false,
			'anchor' => true
		),
		'attributes' => array(
			'heading' => array(
				'type' => 'string',
				'default' => 'Placeholder jumbotron'
			),
			'subtext' => array(
				'type' => 'string',
				'default' => 'This faded back jumbotron is useful for placeholder content. It\'s also a great way to add a bit of context to a page or section when no content is available and to encourage visitors to take a specific action.'
			),
			'btn1Text' => array(
				'type' => 'string',
				'default' => 'Call to action'
			),
			'btn1Url' => array(
				'type' => 'string',
				'default' => '#'
			),
			'btn1Variant' => array(
				'type' => 'string',
				'default' => 'btn-primary'
			),
			'bgColor' => array(
				'type' => 'string',
				'default' => 'bg-body-tertiary'
			),
			'customClass' => array(
				'type' => 'string',
				'default' => ''
			)
		),
		'textdomain' => 'wm',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'render' => 'file:./render.php'
	),
	'jumbotron3' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'wmblocks/jumbotron3',
		'version' => '0.1.0',
		'title' => 'Jumbotron 3 — Full Width',
		'category' => 'watermelon-blocks',
		'icon' => 'star-filled',
		'description' => 'Full-width edge-to-edge jumbotron with a container inside for aligned content.',
		'supports' => array(
			'html' => false,
			'anchor' => true
		),
		'attributes' => array(
			'heading' => array(
				'type' => 'string',
				'default' => 'Full-width jumbotron'
			),
			'subtext' => array(
				'type' => 'string',
				'default' => 'This takes the basic jumbotron above and makes its background edge-to-edge with a .container inside to align content.'
			),
			'btn1Text' => array(
				'type' => 'string',
				'default' => 'Call to action'
			),
			'btn1Url' => array(
				'type' => 'string',
				'default' => '#'
			),
			'btn1Variant' => array(
				'type' => 'string',
				'default' => 'btn-primary'
			),
			'btn2Text' => array(
				'type' => 'string',
				'default' => 'Secondary'
			),
			'btn2Url' => array(
				'type' => 'string',
				'default' => '#'
			),
			'btn2Variant' => array(
				'type' => 'string',
				'default' => 'btn-outline-secondary'
			),
			'bgColor' => array(
				'type' => 'string',
				'default' => 'bg-body-tertiary'
			),
			'containerType' => array(
				'type' => 'string',
				'default' => 'container'
			),
			'customClass' => array(
				'type' => 'string',
				'default' => ''
			)
		),
		'textdomain' => 'wm',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'render' => 'file:./render.php'
	),
	'jumbotron4' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'wmblocks/jumbotron4',
		'version' => '0.1.0',
		'title' => 'Jumbotron 4 — Basic',
		'category' => 'watermelon-blocks',
		'icon' => 'star-filled',
		'description' => 'Simple Bootstrap jumbotron sitting within a container, built with utility classes.',
		'supports' => array(
			'html' => false,
			'anchor' => true
		),
		'attributes' => array(
			'heading' => array(
				'type' => 'string',
				'default' => 'Basic jumbotron'
			),
			'subtext' => array(
				'type' => 'string',
				'default' => 'This is a simple Bootstrap jumbotron that sits within a .container, recreated with built-in utility classes.'
			),
			'btn1Text' => array(
				'type' => 'string',
				'default' => 'Call to action'
			),
			'btn1Url' => array(
				'type' => 'string',
				'default' => '#'
			),
			'btn1Variant' => array(
				'type' => 'string',
				'default' => 'btn-primary'
			),
			'btn2Text' => array(
				'type' => 'string',
				'default' => 'Secondary'
			),
			'btn2Url' => array(
				'type' => 'string',
				'default' => '#'
			),
			'btn2Variant' => array(
				'type' => 'string',
				'default' => 'btn-outline-secondary'
			),
			'bgColor' => array(
				'type' => 'string',
				'default' => 'bg-body-tertiary'
			),
			'rounded' => array(
				'type' => 'string',
				'default' => 'rounded-3'
			),
			'customClass' => array(
				'type' => 'string',
				'default' => ''
			)
		),
		'textdomain' => 'wm',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'render' => 'file:./render.php'
	),
	'list' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'wmblocks/list',
		'version' => '0.1.0',
		'title' => 'BS List',
		'category' => 'watermelon-blocks',
		'icon' => 'list-view',
		'description' => 'Bootstrap list — unstyled or inline list items with full inline editing.',
		'example' => array(
			
		),
		'supports' => array(
			'html' => false,
			'anchor' => true
		),
		'attributes' => array(
			'listStyle' => array(
				'type' => 'string',
				'default' => 'list-unstyled'
			),
			'items' => array(
				'type' => 'array',
				'default' => array(
					array(
						'text' => 'First list item'
					),
					array(
						'text' => 'Second list item'
					),
					array(
						'text' => 'Third list item'
					)
				),
				'items' => array(
					'type' => 'object'
				)
			),
			'customClass' => array(
				'type' => 'string',
				'default' => ''
			)
		),
		'textdomain' => 'wm',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'render' => 'file:./render.php'
	),
	'list-group' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'wmblocks/list-group',
		'version' => '0.1.0',
		'title' => 'List Group',
		'category' => 'watermelon-blocks',
		'icon' => 'list-view',
		'description' => 'Bootstrap list group — flexible content list with variants, badges, links and actions.',
		'example' => array(
			
		),
		'supports' => array(
			'html' => false,
			'anchor' => true
		),
		'attributes' => array(
			'itemType' => array(
				'type' => 'string',
				'default' => 'li'
			),
			'flush' => array(
				'type' => 'boolean',
				'default' => false
			),
			'numbered' => array(
				'type' => 'boolean',
				'default' => false
			),
			'horizontal' => array(
				'type' => 'string',
				'default' => ''
			),
			'items' => array(
				'type' => 'array',
				'default' => array(
					array(
						'text' => 'An item',
						'subtext' => '',
						'badge' => '',
						'badgeVariant' => 'text-bg-primary',
						'url' => '',
						'variant' => '',
						'active' => false,
						'disabled' => false
					),
					array(
						'text' => 'A second item',
						'subtext' => '',
						'badge' => '',
						'badgeVariant' => 'text-bg-primary',
						'url' => '',
						'variant' => '',
						'active' => false,
						'disabled' => false
					),
					array(
						'text' => 'A third item',
						'subtext' => '',
						'badge' => '',
						'badgeVariant' => 'text-bg-primary',
						'url' => '',
						'variant' => '',
						'active' => false,
						'disabled' => false
					)
				),
				'items' => array(
					'type' => 'object'
				)
			)
		),
		'textdomain' => 'wm',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'render' => 'file:./render.php'
	),
	'media-object-fit' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'wmblocks/object-fit',
		'version' => '0.1.0',
		'title' => 'Media Object Fit',
		'category' => 'watermelon-blocks',
		'icon' => 'format-video',
		'description' => 'Bootstrap object-fit utilities for images, videos and iframes — control how media fills its container.',
		'example' => array(
			
		),
		'supports' => array(
			'html' => false,
			'anchor' => true
		),
		'attributes' => array(
			'mediaType' => array(
				'type' => 'string',
				'default' => 'image'
			),
			'imageUrl' => array(
				'type' => 'string',
				'default' => ''
			),
			'imageId' => array(
				'type' => 'number',
				'default' => 0
			),
			'imageAlt' => array(
				'type' => 'string',
				'default' => ''
			),
			'videoUrl' => array(
				'type' => 'string',
				'default' => ''
			),
			'videoId' => array(
				'type' => 'number',
				'default' => 0
			),
			'iframeSrc' => array(
				'type' => 'string',
				'default' => ''
			),
			'iframeTitle' => array(
				'type' => 'string',
				'default' => ''
			),
			'objectFit' => array(
				'type' => 'string',
				'default' => 'object-fit-cover'
			),
			'objectFitSm' => array(
				'type' => 'string',
				'default' => ''
			),
			'objectFitMd' => array(
				'type' => 'string',
				'default' => ''
			),
			'objectFitLg' => array(
				'type' => 'string',
				'default' => ''
			),
			'objectFitXl' => array(
				'type' => 'string',
				'default' => ''
			),
			'width' => array(
				'type' => 'string',
				'default' => '100%'
			),
			'height' => array(
				'type' => 'string',
				'default' => '300px'
			),
			'rounded' => array(
				'type' => 'string',
				'default' => ''
			),
			'autoplay' => array(
				'type' => 'boolean',
				'default' => false
			),
			'muted' => array(
				'type' => 'boolean',
				'default' => true
			),
			'loop' => array(
				'type' => 'boolean',
				'default' => false
			),
			'controls' => array(
				'type' => 'boolean',
				'default' => true
			),
			'allowFullscreen' => array(
				'type' => 'boolean',
				'default' => true
			),
			'customClass' => array(
				'type' => 'string',
				'default' => ''
			)
		),
		'textdomain' => 'wm',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'render' => 'file:./render.php'
	),
	'mediaobject' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'wmblocks/media-object',
		'version' => '0.1.0',
		'title' => 'Media Object',
		'category' => 'watermelon-blocks',
		'icon' => 'align-pull-left',
		'description' => 'Bootstrap media object — image alongside text content using flexbox.',
		'example' => array(
			
		),
		'supports' => array(
			'html' => false,
			'anchor' => true
		),
		'attributes' => array(
			'imageUrl' => array(
				'type' => 'string',
				'default' => ''
			),
			'imageId' => array(
				'type' => 'number',
				'default' => 0
			),
			'imageAlt' => array(
				'type' => 'string',
				'default' => ''
			),
			'imageWidth' => array(
				'type' => 'string',
				'default' => '128px'
			),
			'imagePosition' => array(
				'type' => 'string',
				'default' => 'start'
			),
			'imageAlign' => array(
				'type' => 'string',
				'default' => 'align-self-start'
			),
			'imageClass' => array(
				'type' => 'string',
				'default' => 'img-fluid'
			),
			'imageGap' => array(
				'type' => 'string',
				'default' => 'me-3'
			),
			'imageUrl2' => array(
				'type' => 'string',
				'default' => ''
			),
			'imageId2' => array(
				'type' => 'number',
				'default' => 0
			),
			'imageAlt2' => array(
				'type' => 'string',
				'default' => ''
			),
			'showSecondImage' => array(
				'type' => 'boolean',
				'default' => false
			)
		),
		'textdomain' => 'wm',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'render' => 'file:./render.php'
	),
	'modal' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'wmblocks/modal',
		'version' => '0.1.0',
		'title' => 'Modal',
		'category' => 'watermelon-blocks',
		'icon' => 'welcome-widgets-menus',
		'description' => 'Bootstrap modal dialog with configurable trigger button, header, body and footer.',
		'example' => array(
			
		),
		'supports' => array(
			'html' => false,
			'anchor' => true
		),
		'attributes' => array(
			'modalId' => array(
				'type' => 'string',
				'default' => ''
			),
			'triggerText' => array(
				'type' => 'string',
				'default' => 'Launch Modal'
			),
			'triggerVariant' => array(
				'type' => 'string',
				'default' => 'btn-primary'
			),
			'modalTitle' => array(
				'type' => 'string',
				'default' => 'Modal Title'
			),
			'modalSize' => array(
				'type' => 'string',
				'default' => ''
			),
			'centered' => array(
				'type' => 'boolean',
				'default' => false
			),
			'scrollable' => array(
				'type' => 'boolean',
				'default' => false
			),
			'staticBackdrop' => array(
				'type' => 'boolean',
				'default' => false
			),
			'showFooter' => array(
				'type' => 'boolean',
				'default' => true
			),
			'closeButtonText' => array(
				'type' => 'string',
				'default' => 'Close'
			),
			'saveButtonText' => array(
				'type' => 'string',
				'default' => 'Save changes'
			),
			'saveButtonVariant' => array(
				'type' => 'string',
				'default' => 'btn-primary'
			)
		),
		'textdomain' => 'wmblocks',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'render' => 'file:./render.php',
		'viewScript' => 'file:./view.js'
	),
	'nav' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'wmblocks/nav',
		'version' => '0.1.0',
		'title' => 'Nav',
		'category' => 'watermelon-blocks',
		'icon' => 'menu',
		'description' => 'Bootstrap nav — a flexible navigation component in base, tabs, pills, or underline style. Supports horizontal/vertical orientation, fill/justify, alignment, dropdowns per item, active/disabled states, and both ul/li and nav/a markup. All items editable inline on the canvas.',
		'example' => array(
			
		),
		'supports' => array(
			'html' => false,
			'anchor' => true
		),
		'attributes' => array(
			'items' => array(
				'type' => 'array',
				'default' => array(
					array(
						'id' => 'n1',
						'label' => 'Active',
						'href' => '#',
						'active' => true,
						'disabled' => false,
						'hasDropdown' => false,
						'dropdownItems' => array(
							
						)
					),
					array(
						'id' => 'n2',
						'label' => 'Link',
						'href' => '#',
						'active' => false,
						'disabled' => false,
						'hasDropdown' => false,
						'dropdownItems' => array(
							
						)
					),
					array(
						'id' => 'n3',
						'label' => 'Link',
						'href' => '#',
						'active' => false,
						'disabled' => false,
						'hasDropdown' => false,
						'dropdownItems' => array(
							
						)
					),
					array(
						'id' => 'n4',
						'label' => 'Disabled',
						'href' => '#',
						'active' => false,
						'disabled' => true,
						'hasDropdown' => false,
						'dropdownItems' => array(
							
						)
					)
				)
			),
			'navStyle' => array(
				'type' => 'string',
				'default' => ''
			),
			'orientation' => array(
				'type' => 'string',
				'default' => 'horizontal'
			),
			'alignment' => array(
				'type' => 'string',
				'default' => ''
			),
			'fill' => array(
				'type' => 'string',
				'default' => ''
			),
			'useNavElement' => array(
				'type' => 'boolean',
				'default' => false
			),
			'ariaLabel' => array(
				'type' => 'string',
				'default' => 'Navigation'
			)
		),
		'textdomain' => 'wm',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'render' => 'file:./render.php',
		'viewScript' => 'file:./view.js'
	),
	'navbar' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'wmblocks/navbar',
		'version' => '0.1.0',
		'title' => 'Navbar',
		'category' => 'watermelon-blocks',
		'icon' => 'menu',
		'description' => 'Bootstrap responsive navigation bar with brand, nav links, and mobile toggler.',
		'example' => array(
			
		),
		'supports' => array(
			'html' => false,
			'anchor' => true
		),
		'attributes' => array(
			'navbarId' => array(
				'type' => 'string',
				'default' => ''
			),
			'brandText' => array(
				'type' => 'string',
				'default' => 'Navbar'
			),
			'brandUrl' => array(
				'type' => 'string',
				'default' => '#'
			),
			'brandImageUrl' => array(
				'type' => 'string',
				'default' => ''
			),
			'brandImageId' => array(
				'type' => 'number',
				'default' => 0
			),
			'brandImageHeight' => array(
				'type' => 'string',
				'default' => '30px'
			),
			'colorScheme' => array(
				'type' => 'string',
				'default' => 'navbar-dark bg-dark'
			),
			'expandBreakpoint' => array(
				'type' => 'string',
				'default' => 'navbar-expand-lg'
			),
			'placement' => array(
				'type' => 'string',
				'default' => ''
			),
			'containerType' => array(
				'type' => 'string',
				'default' => 'container'
			),
			'navItems' => array(
				'type' => 'array',
				'default' => array(
					array(
						'label' => 'Home',
						'url' => '#',
						'active' => true,
						'disabled' => false
					),
					array(
						'label' => 'About',
						'url' => '#',
						'active' => false,
						'disabled' => false
					),
					array(
						'label' => 'Services',
						'url' => '#',
						'active' => false,
						'disabled' => false
					),
					array(
						'label' => 'Contact',
						'url' => '#',
						'active' => false,
						'disabled' => false
					)
				),
				'items' => array(
					'type' => 'object'
				)
			),
			'showSearch' => array(
				'type' => 'boolean',
				'default' => false
			),
			'searchPlaceholder' => array(
				'type' => 'string',
				'default' => 'Search'
			),
			'navAlignment' => array(
				'type' => 'string',
				'default' => ''
			)
		),
		'textdomain' => 'wm',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'render' => 'file:./render.php',
		'viewScript' => 'file:./view.js'
	),
	'offcanvas' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'wmblocks/offcanvas',
		'version' => '0.1.0',
		'title' => 'Offcanvas',
		'category' => 'watermelon-blocks',
		'icon' => 'align-pull-right',
		'description' => 'Bootstrap offcanvas — a sidebar drawer that slides in from any edge with a trigger button.',
		'example' => array(
			
		),
		'supports' => array(
			'html' => false,
			'anchor' => true
		),
		'attributes' => array(
			'offcanvasId' => array(
				'type' => 'string',
				'default' => ''
			),
			'placement' => array(
				'type' => 'string',
				'default' => 'start'
			),
			'offcanvasTitle' => array(
				'type' => 'string',
				'default' => 'Offcanvas Title'
			),
			'showBackdrop' => array(
				'type' => 'boolean',
				'default' => true
			),
			'closeOnBackdrop' => array(
				'type' => 'boolean',
				'default' => true
			),
			'scrollBody' => array(
				'type' => 'boolean',
				'default' => false
			),
			'showHeader' => array(
				'type' => 'boolean',
				'default' => true
			),
			'triggerText' => array(
				'type' => 'string',
				'default' => 'Open Offcanvas'
			),
			'triggerVariant' => array(
				'type' => 'string',
				'default' => 'btn-primary'
			),
			'triggerType' => array(
				'type' => 'string',
				'default' => 'button'
			)
		),
		'textdomain' => 'wm',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'render' => 'file:./render.php',
		'viewScript' => 'file:./view.js'
	),
	'placeholder' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'wmblocks/placeholder',
		'version' => '0.1.0',
		'title' => 'Placeholder',
		'category' => 'watermelon-blocks',
		'icon' => 'image-filter',
		'description' => 'Bootstrap placeholder / skeleton loader — build skeleton screens row by row. Pick a preset template or craft your own rows of heading, paragraph spans, button, image, avatar, and more. Full control over width, colour, size, and animation.',
		'example' => array(
			
		),
		'supports' => array(
			'html' => false,
			'anchor' => true
		),
		'attributes' => array(
			'rows' => array(
				'type' => 'array',
				'default' => array(
					array(
						'id' => 'r1',
						'element' => 'heading',
						'cols' => 'col-6',
						'colour' => '',
						'size' => '',
						'tag' => 'h5'
					),
					array(
						'id' => 'r2',
						'element' => 'paragraph',
						'spans' => array(
							array(
								'id' => 's1',
								'cols' => 'col-7',
								'colour' => '',
								'size' => ''
							),
							array(
								'id' => 's2',
								'cols' => 'col-4',
								'colour' => '',
								'size' => ''
							),
							array(
								'id' => 's3',
								'cols' => 'col-6',
								'colour' => '',
								'size' => ''
							),
							array(
								'id' => 's4',
								'cols' => 'col-8',
								'colour' => '',
								'size' => ''
							)
						)
					),
					array(
						'id' => 'r3',
						'element' => 'button',
						'cols' => 'col-6',
						'colour' => 'bg-primary',
						'size' => '',
						'tag' => ''
					)
				)
			),
			'animation' => array(
				'type' => 'string',
				'default' => 'placeholder-glow'
			),
			'ariaHidden' => array(
				'type' => 'boolean',
				'default' => true
			),
			'template' => array(
				'type' => 'string',
				'default' => 'custom'
			),
			'wrapInCard' => array(
				'type' => 'boolean',
				'default' => false
			),
			'showImageRow' => array(
				'type' => 'boolean',
				'default' => false
			),
			'imageHeight' => array(
				'type' => 'string',
				'default' => '180px'
			),
			'globalColour' => array(
				'type' => 'string',
				'default' => ''
			),
			'globalSize' => array(
				'type' => 'string',
				'default' => ''
			)
		),
		'textdomain' => 'wm',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'render' => 'file:./render.php',
		'viewScript' => 'file:./view.js'
	),
	'position' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'wmblocks/position-wrapper',
		'version' => '0.1.0',
		'title' => 'Position Wrapper',
		'category' => 'watermelon-blocks',
		'icon' => 'editor-expand',
		'description' => 'Bootstrap position-relative container. Add Position Element children to place badges, labels, and overlays on top.',
		'example' => array(
			
		),
		'supports' => array(
			'html' => false,
			'anchor' => true
		),
		'attributes' => array(
			'positionClass' => array(
				'type' => 'string',
				'default' => 'position-relative'
			),
			'display' => array(
				'type' => 'string',
				'default' => 'd-inline-flex'
			),
			'customClass' => array(
				'type' => 'string',
				'default' => ''
			)
		),
		'providesContext' => array(
			'wmblocks/wrapperPosition' => 'positionClass'
		),
		'textdomain' => 'wm',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'render' => 'file:./render.php'
	),
	'position-element' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'wmblocks/position-element',
		'version' => '0.1.0',
		'title' => 'Position Element',
		'category' => 'watermelon-blocks',
		'icon' => 'location',
		'description' => 'A positioned element inside a Position Container — place it at top/bottom/start/end with translate helpers.',
		'example' => array(
			
		),
		'parent' => array(
			'wmblocks/position-wrapper'
		),
		'supports' => array(
			'html' => false,
			'reusable' => false
		),
		'attributes' => array(
			'positionType' => array(
				'type' => 'string',
				'default' => 'position-absolute'
			),
			'top' => array(
				'type' => 'string',
				'default' => ''
			),
			'bottom' => array(
				'type' => 'string',
				'default' => ''
			),
			'start' => array(
				'type' => 'string',
				'default' => ''
			),
			'end' => array(
				'type' => 'string',
				'default' => ''
			),
			'translate' => array(
				'type' => 'string',
				'default' => ''
			),
			'zIndex' => array(
				'type' => 'string',
				'default' => ''
			),
			'customClass' => array(
				'type' => 'string',
				'default' => ''
			)
		),
		'textdomain' => 'wm',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./editor.scss',
		'style' => 'file:./style.scss',
		'render' => 'file:./render.php'
	),
	'progress' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'wmblocks/progress',
		'version' => '0.1.0',
		'title' => 'Progress',
		'category' => 'watermelon-blocks',
		'icon' => 'minus',
		'description' => 'Bootstrap progress bar — single or stacked bars with labels, colors, striped and animated variants.',
		'example' => array(
			
		),
		'supports' => array(
			'html' => false,
			'anchor' => true
		),
		'attributes' => array(
			'height' => array(
				'type' => 'string',
				'default' => ''
			),
			'bars' => array(
				'type' => 'array',
				'default' => array(
					array(
						'value' => 75,
						'label' => '',
						'showLabel' => false,
						'variant' => 'bg-primary',
						'striped' => false,
						'animated' => false
					)
				),
				'items' => array(
					'type' => 'object'
				)
			)
		),
		'textdomain' => 'wm',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'render' => 'file:./render.php'
	),
	'spinner' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'wmblocks/spinner',
		'version' => '0.1.0',
		'title' => 'Spinner',
		'category' => 'watermelon-blocks',
		'icon' => 'update',
		'description' => 'Bootstrap spinner — animated loading indicator in border or grow style. Supports all colour variants, sizing, optional label, button mode, and alignment.',
		'example' => array(
			
		),
		'supports' => array(
			'html' => false,
			'anchor' => true
		),
		'attributes' => array(
			'spinnerType' => array(
				'type' => 'string',
				'default' => 'border'
			),
			'variant' => array(
				'type' => 'string',
				'default' => 'text-primary'
			),
			'size' => array(
				'type' => 'string',
				'default' => ''
			),
			'customSize' => array(
				'type' => 'string',
				'default' => ''
			),
			'alignment' => array(
				'type' => 'string',
				'default' => 'left'
			),
			'showLabel' => array(
				'type' => 'boolean',
				'default' => false
			),
			'labelText' => array(
				'type' => 'string',
				'default' => 'Loading...'
			),
			'labelPosition' => array(
				'type' => 'string',
				'default' => 'right'
			),
			'showVisuallyHidden' => array(
				'type' => 'boolean',
				'default' => true
			),
			'visuallyHiddenText' => array(
				'type' => 'string',
				'default' => 'Loading...'
			),
			'buttonMode' => array(
				'type' => 'boolean',
				'default' => false
			),
			'buttonText' => array(
				'type' => 'string',
				'default' => 'Loading...'
			),
			'buttonVariant' => array(
				'type' => 'string',
				'default' => 'btn-primary'
			),
			'buttonDisabled' => array(
				'type' => 'boolean',
				'default' => true
			)
		),
		'textdomain' => 'wm',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'render' => 'file:./render.php',
		'viewScript' => 'file:./view.js'
	),
	'stack-item' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'wmblocks/stack-item',
		'version' => '0.1.0',
		'title' => 'Stack Item',
		'category' => 'watermelon-blocks',
		'icon' => 'minus',
		'description' => 'A single item inside a vstack or hstack.',
		'example' => array(
			
		),
		'parent' => array(
			'wmblocks/vstack',
			'wmblocks/hstack'
		),
		'supports' => array(
			'html' => false,
			'reusable' => false
		),
		'attributes' => array(
			'autoMargin' => array(
				'type' => 'string',
				'default' => ''
			),
			'padding' => array(
				'type' => 'string',
				'default' => ''
			),
			'flexFill' => array(
				'type' => 'boolean',
				'default' => false
			),
			'alignSelf' => array(
				'type' => 'string',
				'default' => ''
			),
			'showDivider' => array(
				'type' => 'boolean',
				'default' => false
			),
			'customClass' => array(
				'type' => 'string',
				'default' => ''
			)
		),
		'usesContext' => array(
			'wmblocks/stackType'
		),
		'textdomain' => 'wmblocks',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'render' => 'file:./render.php'
	),
	'sticky-note' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'wmblocks/sticky-note',
		'version' => '0.1.0',
		'title' => 'Sticky / Fixed Element',
		'category' => 'watermelon-blocks',
		'icon' => 'sticky',
		'description' => 'Bootstrap position helper block — makes any content sticky or fixed to the viewport. Supports fixed-top, fixed-bottom, sticky-top, sticky-bottom, and all responsive breakpoint variants. Drop any blocks inside. Perfect for sticky headers, floating CTAs, fixed banners, and pinned sidebars.',
		'example' => array(
			
		),
		'supports' => array(
			'html' => false,
			'anchor' => true
		),
		'attributes' => array(
			'positionMode' => array(
				'type' => 'string',
				'default' => 'sticky-top'
			),
			'breakpoint' => array(
				'type' => 'string',
				'default' => ''
			),
			'zIndex' => array(
				'type' => 'string',
				'default' => '1020'
			),
			'bgColor' => array(
				'type' => 'string',
				'default' => 'bg-white'
			),
			'shadow' => array(
				'type' => 'string',
				'default' => 'shadow-sm'
			),
			'padding' => array(
				'type' => 'string',
				'default' => 'py-2'
			),
			'showLabel' => array(
				'type' => 'boolean',
				'default' => true
			),
			'labelText' => array(
				'type' => 'string',
				'default' => ''
			),
			'labelPosition' => array(
				'type' => 'string',
				'default' => 'top-0 end-0'
			),
			'containerWidth' => array(
				'type' => 'string',
				'default' => ''
			),
			'editorPreviewMode' => array(
				'type' => 'string',
				'default' => 'inline'
			)
		),
		'textdomain' => 'wm',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'render' => 'file:./render.php',
		'viewScript' => 'file:./view.js'
	),
	'tab-item' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'wmblocks/tab-item',
		'version' => '0.1.0',
		'title' => 'Tab Item',
		'category' => 'watermelon-blocks',
		'icon' => 'welcome-add-page',
		'description' => 'A single tab pane — child of the Tabs block.',
		'example' => array(
			
		),
		'parent' => array(
			'wmblocks/tabs'
		),
		'supports' => array(
			'html' => false,
			'reusable' => false
		),
		'attributes' => array(
			'tabLabel' => array(
				'type' => 'string',
				'default' => 'Tab'
			),
			'tabId' => array(
				'type' => 'string',
				'default' => ''
			),
			'isActive' => array(
				'type' => 'boolean',
				'default' => false
			)
		),
		'usesContext' => array(
			'wmblocks/activeTabIndex',
			'wmblocks/fadeEffect'
		),
		'textdomain' => 'wmblocks',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'render' => 'file:./render.php'
	),
	'table' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'wmblocks/table',
		'version' => '0.1.0',
		'title' => 'Table',
		'category' => 'watermelon-blocks',
		'icon' => 'editor-table',
		'description' => 'Bootstrap table — a full-featured spreadsheet-like editor. Click any cell to type directly. Add/remove rows & columns, set per-cell colours, use all Bootstrap table variants: striped, bordered, hover, dark, responsive, and more.',
		'example' => array(
			
		),
		'supports' => array(
			'html' => false,
			'anchor' => true
		),
		'attributes' => array(
			'head' => array(
				'type' => 'array',
				'default' => array(
					array(
						'id' => 'h1',
						'cells' => array(
							array(
								'id' => 'c1',
								'content' => '#',
								'tag' => 'th',
								'colour' => '',
								'align' => ''
							),
							array(
								'id' => 'c2',
								'content' => 'First',
								'tag' => 'th',
								'colour' => '',
								'align' => ''
							),
							array(
								'id' => 'c3',
								'content' => 'Last',
								'tag' => 'th',
								'colour' => '',
								'align' => ''
							),
							array(
								'id' => 'c4',
								'content' => 'Handle',
								'tag' => 'th',
								'colour' => '',
								'align' => ''
							)
						)
					)
				)
			),
			'body' => array(
				'type' => 'array',
				'default' => array(
					array(
						'id' => 'r1',
						'colour' => '',
						'cells' => array(
							array(
								'id' => 'c1',
								'content' => '1',
								'tag' => 'th',
								'colour' => '',
								'align' => ''
							),
							array(
								'id' => 'c2',
								'content' => 'Mark',
								'tag' => 'td',
								'colour' => '',
								'align' => ''
							),
							array(
								'id' => 'c3',
								'content' => 'Otto',
								'tag' => 'td',
								'colour' => '',
								'align' => ''
							),
							array(
								'id' => 'c4',
								'content' => '@mdo',
								'tag' => 'td',
								'colour' => '',
								'align' => ''
							)
						)
					),
					array(
						'id' => 'r2',
						'colour' => '',
						'cells' => array(
							array(
								'id' => 'c1',
								'content' => '2',
								'tag' => 'th',
								'colour' => '',
								'align' => ''
							),
							array(
								'id' => 'c2',
								'content' => 'Jacob',
								'tag' => 'td',
								'colour' => '',
								'align' => ''
							),
							array(
								'id' => 'c3',
								'content' => 'Thornton',
								'tag' => 'td',
								'colour' => '',
								'align' => ''
							),
							array(
								'id' => 'c4',
								'content' => '@fat',
								'tag' => 'td',
								'colour' => '',
								'align' => ''
							)
						)
					),
					array(
						'id' => 'r3',
						'colour' => '',
						'cells' => array(
							array(
								'id' => 'c1',
								'content' => '3',
								'tag' => 'th',
								'colour' => '',
								'align' => ''
							),
							array(
								'id' => 'c2',
								'content' => 'John',
								'tag' => 'td',
								'colour' => '',
								'align' => ''
							),
							array(
								'id' => 'c3',
								'content' => 'Doe',
								'tag' => 'td',
								'colour' => '',
								'align' => ''
							),
							array(
								'id' => 'c4',
								'content' => '@social',
								'tag' => 'td',
								'colour' => '',
								'align' => ''
							)
						)
					)
				)
			),
			'foot' => array(
				'type' => 'array',
				'default' => array(
					
				)
			),
			'caption' => array(
				'type' => 'string',
				'default' => ''
			),
			'captionSide' => array(
				'type' => 'string',
				'default' => 'bottom'
			),
			'showHead' => array(
				'type' => 'boolean',
				'default' => true
			),
			'showFoot' => array(
				'type' => 'boolean',
				'default' => false
			),
			'tableVariant' => array(
				'type' => 'string',
				'default' => ''
			),
			'headVariant' => array(
				'type' => 'string',
				'default' => ''
			),
			'striped' => array(
				'type' => 'boolean',
				'default' => false
			),
			'stripedColumns' => array(
				'type' => 'boolean',
				'default' => false
			),
			'hover' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bordered' => array(
				'type' => 'boolean',
				'default' => false
			),
			'borderColour' => array(
				'type' => 'string',
				'default' => ''
			),
			'borderless' => array(
				'type' => 'boolean',
				'default' => false
			),
			'small' => array(
				'type' => 'boolean',
				'default' => false
			),
			'responsive' => array(
				'type' => 'string',
				'default' => ''
			),
			'verticalAlign' => array(
				'type' => 'string',
				'default' => ''
			),
			'divider' => array(
				'type' => 'boolean',
				'default' => false
			)
		),
		'textdomain' => 'wm',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'render' => 'file:./render.php',
		'viewScript' => 'file:./view.js'
	),
	'tabs' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'wmblocks/tabs',
		'version' => '0.1.0',
		'title' => 'Tabs',
		'category' => 'watermelon-blocks',
		'icon' => 'table-row-after',
		'description' => 'Bootstrap JavaScript tabs with nav and tab content panels.',
		'example' => array(
			
		),
		'supports' => array(
			'html' => false,
			'anchor' => true
		),
		'attributes' => array(
			'tabStyle' => array(
				'type' => 'string',
				'default' => 'nav-tabs'
			),
			'tabFill' => array(
				'type' => 'string',
				'default' => ''
			),
			'activeTabIndex' => array(
				'type' => 'number',
				'default' => 0
			),
			'vertical' => array(
				'type' => 'boolean',
				'default' => false
			),
			'fadeEffect' => array(
				'type' => 'boolean',
				'default' => true
			)
		),
		'providesContext' => array(
			'wmblocks/activeTabIndex' => 'activeTabIndex',
			'wmblocks/fadeEffect' => 'fadeEffect'
		),
		'textdomain' => 'wmblocks',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'render' => 'file:./render.php',
		'viewScript' => 'file:./view.js'
	),
	'Toasts' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'wmblocks/toast',
		'version' => '0.1.0',
		'title' => 'Toast',
		'category' => 'watermelon-blocks',
		'icon' => 'admin-comments',
		'description' => 'Bootstrap toast notification with trigger button, header and body.',
		'example' => array(
			
		),
		'supports' => array(
			'html' => false,
			'anchor' => true
		),
		'attributes' => array(
			'toastId' => array(
				'type' => 'string',
				'default' => ''
			),
			'triggerText' => array(
				'type' => 'string',
				'default' => 'Show Toast'
			),
			'triggerVariant' => array(
				'type' => 'string',
				'default' => 'btn-primary'
			),
			'showTrigger' => array(
				'type' => 'boolean',
				'default' => true
			),
			'toastTitle' => array(
				'type' => 'string',
				'default' => 'Bootstrap'
			),
			'toastSubtitle' => array(
				'type' => 'string',
				'default' => '11 mins ago'
			),
			'toastBody' => array(
				'type' => 'string',
				'default' => 'Hello, world! This is a toast message.'
			),
			'showHeader' => array(
				'type' => 'boolean',
				'default' => true
			),
			'showClose' => array(
				'type' => 'boolean',
				'default' => true
			),
			'autohide' => array(
				'type' => 'boolean',
				'default' => true
			),
			'delay' => array(
				'type' => 'number',
				'default' => 5000
			),
			'position' => array(
				'type' => 'string',
				'default' => 'bottom-0 end-0'
			),
			'colorVariant' => array(
				'type' => 'string',
				'default' => ''
			)
		),
		'textdomain' => 'wm',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'render' => 'file:./render.php',
		'viewScript' => 'file:./view.js'
	),
	'typography' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'wmblocks/typography',
		'version' => '0.1.0',
		'title' => 'Typography',
		'category' => 'watermelon-blocks',
		'icon' => 'editor-paragraph',
		'description' => 'Bootstrap typography toolkit — one block for all Bootstrap typographic elements: headings (h1–h6 + display classes), lead paragraphs, blockquotes with attribution, unstyled/inline lists, description lists, abbreviations, and inline text elements (mark, del, ins, s, u, small, strong, em). Select the element type and configure everything inline.',
		'example' => array(
			
		),
		'supports' => array(
			'html' => false,
			'anchor' => true
		),
		'attributes' => array(
			'elementType' => array(
				'type' => 'string',
				'default' => 'heading'
			),
			'content' => array(
				'type' => 'string',
				'default' => 'Bootstrap heading'
			),
			'headingLevel' => array(
				'type' => 'string',
				'default' => 'h2'
			),
			'useHeadingClass' => array(
				'type' => 'boolean',
				'default' => false
			),
			'headingClassTag' => array(
				'type' => 'string',
				'default' => 'p'
			),
			'displayClass' => array(
				'type' => 'string',
				'default' => ''
			),
			'subText' => array(
				'type' => 'string',
				'default' => ''
			),
			'alignment' => array(
				'type' => 'string',
				'default' => ''
			),
			'quoteText' => array(
				'type' => 'string',
				'default' => 'A well-known quote, contained in a blockquote element.'
			),
			'quoteSource' => array(
				'type' => 'string',
				'default' => ''
			),
			'quoteSourceTitle' => array(
				'type' => 'string',
				'default' => ''
			),
			'listType' => array(
				'type' => 'string',
				'default' => 'ul'
			),
			'listStyle' => array(
				'type' => 'string',
				'default' => ''
			),
			'listItems' => array(
				'type' => 'array',
				'default' => array(
					array(
						'id' => 'i1',
						'text' => 'First item'
					),
					array(
						'id' => 'i2',
						'text' => 'Second item'
					),
					array(
						'id' => 'i3',
						'text' => 'Third item'
					)
				)
			),
			'dlItems' => array(
				'type' => 'array',
				'default' => array(
					array(
						'id' => 'd1',
						'term' => 'Term',
						'definition' => 'Definition for the term.'
					),
					array(
						'id' => 'd2',
						'term' => 'Another term',
						'definition' => 'This definition is short.'
					)
				)
			),
			'dlTermCols' => array(
				'type' => 'string',
				'default' => 'col-sm-3'
			),
			'dlDefCols' => array(
				'type' => 'string',
				'default' => 'col-sm-9'
			),
			'abbrText' => array(
				'type' => 'string',
				'default' => 'HTML'
			),
			'abbrTitle' => array(
				'type' => 'string',
				'default' => 'HyperText Markup Language'
			),
			'abbrInitialism' => array(
				'type' => 'boolean',
				'default' => false
			),
			'inlineContent' => array(
				'type' => 'string',
				'default' => 'You can use the <mark>mark tag</mark> to highlight text, or use <strong>bold</strong> and <em>italic</em> styles.'
			),
			'textColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'leadContent' => array(
				'type' => 'string',
				'default' => 'This is a lead paragraph. It stands out from regular paragraphs.'
			)
		),
		'textdomain' => 'wm',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'render' => 'file:./render.php',
		'viewScript' => 'file:./view.js'
	),
	'vstack' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'wmblocks/vstack',
		'version' => '0.1.0',
		'title' => 'Vertical Stack',
		'category' => 'watermelon-blocks',
		'icon' => 'move',
		'description' => 'Bootstrap vstack — vertical flex column layout. Items are full-width by default.',
		'example' => array(
			
		),
		'supports' => array(
			'html' => false,
			'anchor' => true
		),
		'attributes' => array(
			'gap' => array(
				'type' => 'string',
				'default' => 'gap-3'
			),
			'customClass' => array(
				'type' => 'string',
				'default' => ''
			)
		),
		'providesContext' => array(
			'wmblocks/stackType' => 'gap'
		),
		'textdomain' => 'wmblocks',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'render' => 'file:./render.php'
	),
	'youtube' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'wmblocks/youtube',
		'version' => '0.1.0',
		'title' => 'YouTube Video',
		'category' => 'watermelon-blocks',
		'icon' => 'video-alt3',
		'description' => 'Embed a YouTube video inside a Bootstrap responsive ratio container. Paste any YouTube URL, pick your aspect ratio, and fine-tune all embed parameters — autoplay, controls, loop, mute, start time, captions, and more.',
		'example' => array(
			
		),
		'supports' => array(
			'html' => false,
			'anchor' => true
		),
		'attributes' => array(
			'url' => array(
				'type' => 'string',
				'default' => ''
			),
			'videoId' => array(
				'type' => 'string',
				'default' => ''
			),
			'ratio' => array(
				'type' => 'string',
				'default' => 'ratio-16x9'
			),
			'customRatio' => array(
				'type' => 'string',
				'default' => ''
			),
			'title' => array(
				'type' => 'string',
				'default' => 'YouTube video'
			),
			'autoplay' => array(
				'type' => 'boolean',
				'default' => false
			),
			'mute' => array(
				'type' => 'boolean',
				'default' => false
			),
			'controls' => array(
				'type' => 'boolean',
				'default' => true
			),
			'loop' => array(
				'type' => 'boolean',
				'default' => false
			),
			'modestbranding' => array(
				'type' => 'boolean',
				'default' => false
			),
			'rel' => array(
				'type' => 'boolean',
				'default' => true
			),
			'privacyEnhanced' => array(
				'type' => 'boolean',
				'default' => false
			),
			'start' => array(
				'type' => 'number',
				'default' => 0
			),
			'end' => array(
				'type' => 'number',
				'default' => 0
			),
			'playlistId' => array(
				'type' => 'string',
				'default' => ''
			),
			'cc' => array(
				'type' => 'boolean',
				'default' => false
			),
			'ccLang' => array(
				'type' => 'string',
				'default' => 'en'
			)
		),
		'textdomain' => 'wm',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'render' => 'file:./render.php',
		'viewScript' => 'file:./view.js'
	)
);
