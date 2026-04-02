<?php
// This file is generated. Do not modify it manually.
return array(
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
	)
);
