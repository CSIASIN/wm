<?php
/**
 * Inline Icon Frontend Renderer
 *
 * Replaces <span class="wm-inline-icon" data-icon="NAME">...</span>
 * with the actual cached SVG at render time via the_content filter.
 *
 * Add to functions.php (top level, not inside a hook):
 *   require_once get_template_directory() . '/blocks/src/formats/inline-icon/inline-icon-render.php';
 */

if ( ! defined( 'ABSPATH' ) ) exit;

add_filter( 'the_content', 'wmblocks_render_inline_icons', 20 );
add_filter( 'the_excerpt', 'wmblocks_render_inline_icons', 20 );

function wmblocks_render_inline_icons( $content ) {
	if ( strpos( $content, 'wm-inline-icon' ) === false ) {
		return $content;
	}

	/**
	 * Match spans in BOTH attribute orderings AND with ANY inner content.
	 *
	 * The JS stores the span with a ZWNBSP anchor character which WordPress
	 * may encode as:
	 *   - Raw UTF-8 bytes:  \xEF\xBB\xBF
	 *   - HTML entity:      &#xFEFF;  or  &#65279;
	 *   - Empty/whitespace: after wpautop processing
	 *
	 * So we match [^<]* (anything that isn't a tag) between the open/close tags.
	 * This catches ALL variants including the ZWNBSP character.
	 *
	 * Two alternates handle both attribute orderings:
	 *   1. class="wm-inline-icon" ... data-icon="NAME"
	 *   2. data-icon="NAME" ... class="wm-inline-icon"
	 */
	$pattern = '/' .
		'<span\b[^>]*\bclass="[^"]*wm-inline-icon[^"]*"[^>]*\bdata-icon="([a-z0-9][a-z0-9\-]*)"[^>]*>[^<]*<\/span>' .
		'|' .
		'<span\b[^>]*\bdata-icon="([a-z0-9][a-z0-9\-]*)"[^>]*\bclass="[^"]*wm-inline-icon[^"]*"[^>]*>[^<]*<\/span>' .
		'/i';

	return preg_replace_callback( $pattern, 'wmblocks_inline_icon_replace', $content );
}

function wmblocks_inline_icon_replace( $matches ) {
	// $matches[1] — icon name when class comes first in attributes
	// $matches[2] — icon name when data-icon comes first in attributes
	$name = sanitize_key( ! empty( $matches[1] ) ? $matches[1] : $matches[2] );
	if ( ! $name ) return $matches[0];

	$svg = wmblocks_get_icon_svg( $name );
	return $svg ? $svg : $matches[0];
}

function wmblocks_get_icon_svg( $name ) {
	$name      = sanitize_key( $name );
	$cache_key = 'wmblocks_bi_' . md5( $name );
	$svg       = get_transient( $cache_key );

	if ( ! $svg ) {
		$url      = 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.13.1/icons/' . $name . '.svg';
		$response = wp_remote_get( $url, array( 'timeout' => 8 ) );

		if ( is_wp_error( $response ) || wp_remote_retrieve_response_code( $response ) !== 200 ) {
			return false;
		}

		$svg = wp_remote_retrieve_body( $response );
		if ( ! $svg || strpos( $svg, '<svg' ) === false ) return false;

		set_transient( $cache_key, $svg, WEEK_IN_SECONDS );
	}

	// Set 1em size to match surrounding text
	$svg = preg_replace( '/\bwidth="[^"]*"/',  'width="1em"',  $svg );
	$svg = preg_replace( '/\bheight="[^"]*"/', 'height="1em"', $svg );

	// Inject accessibility + alignment attributes on the <svg> tag
	$svg = preg_replace_callback( '/<svg\b([^>]*)>/i', function( $m ) {
		$a = $m[1];
		if ( strpos( $a, 'aria-hidden' ) === false ) {
			$a .= ' aria-hidden="true" focusable="false"';
		}
		if ( strpos( $a, 'vertical-align' ) === false ) {
			if ( preg_match( '/style="([^"]*)"/i', $a, $sm ) ) {
				$a = str_replace( $sm[0], 'style="' . $sm[1] . ';vertical-align:-0.125em"', $a );
			} else {
				$a .= ' style="vertical-align:-0.125em"';
			}
		}
		return '<svg' . $a . '>';
	}, $svg );

	// Sanitise SVG output
	$allowed = array(
		'svg'      => array( 'xmlns' => array(), 'width' => array(), 'height' => array(),
		                     'fill' => array(), 'viewbox' => array(), 'viewBox' => array(),
		                     'class' => array(), 'role' => array(), 'aria-hidden' => array(),
		                     'aria-label' => array(), 'focusable' => array(), 'style' => array() ),
		'path'     => array( 'd' => array(), 'fill' => array(), 'fill-rule' => array(),
		                     'clip-rule' => array(), 'stroke' => array(), 'stroke-width' => array(),
		                     'stroke-linecap' => array(), 'stroke-linejoin' => array() ),
		'circle'   => array( 'cx' => array(), 'cy' => array(), 'r' => array(),
		                     'fill' => array(), 'stroke' => array(), 'stroke-width' => array() ),
		'rect'     => array( 'x' => array(), 'y' => array(), 'width' => array(),
		                     'height' => array(), 'rx' => array(), 'ry' => array(), 'fill' => array() ),
		'line'     => array( 'x1' => array(), 'y1' => array(), 'x2' => array(), 'y2' => array(),
		                     'stroke' => array(), 'stroke-width' => array(), 'stroke-linecap' => array() ),
		'polyline' => array( 'points' => array(), 'fill' => array(), 'stroke' => array(),
		                     'stroke-width' => array(), 'stroke-linecap' => array(), 'stroke-linejoin' => array() ),
		'polygon'  => array( 'points' => array(), 'fill' => array() ),
		'g'        => array( 'fill' => array(), 'stroke' => array(), 'transform' => array() ),
		'defs'     => array(),
		'title'    => array(),
		'use'      => array( 'href' => array(), 'xlink:href' => array() ),
		'mask'     => array( 'id' => array() ),
		'clippath' => array( 'id' => array() ),
	);

	return wp_kses( $svg, $allowed );
}