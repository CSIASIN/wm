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
	)
);
