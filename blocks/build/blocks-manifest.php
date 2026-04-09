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
		'textdomain' => 'wmblocks',
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
