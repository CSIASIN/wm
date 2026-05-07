<?php
/**
 * Inline Icon Frontend Renderer
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
	 * Match the span in both attribute orderings.
	 * Inner content can be:
	 *   - ZWNBSP text: &#xFEFF; or raw UTF-8 \xEF\xBB\xBF
	 *   - Empty
	 *   - Broken SVG fragments (empty <svg> + orphaned <path> + <br>) — legacy saved content
	 *
	 * We use [\s\S]*? (lazy match any content including newlines) between
	 * the opening span and closing span to catch ALL variants.
	 */
	$pattern = '/<span\b([^>]*)>([\s\S]*?)<\/span>/i';

	return preg_replace_callback( $pattern, function( $matches ) {
		$attrs   = $matches[1];
		$inner   = $matches[2];

		// Must have wm-inline-icon class
		if ( strpos( $attrs, 'wm-inline-icon' ) === false ) {
			return $matches[0];
		}

		// Extract icon name from data-icon attribute
		if ( ! preg_match( '/\bdata-icon="([a-z0-9][a-z0-9\-]*)"/i', $attrs, $icon_match ) ) {
			return $matches[0];
		}

		$name = sanitize_key( $icon_match[1] );
		if ( ! $name ) return $matches[0];

		$svg = wmblocks_get_icon_svg( $name );
		return $svg ? $svg : $matches[0];

	}, $content );
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

	// Collapse whitespace between tags — prevents <br> artifacts
	$svg = preg_replace( '/>\s+</', '><', $svg );
	$svg = trim( $svg );

	// Set 1em sizing
	$svg = preg_replace( '/\bwidth="[^"]*"/',  'width="1em"',  $svg );
	$svg = preg_replace( '/\bheight="[^"]*"/', 'height="1em"', $svg );

	// Accessibility + alignment
	if ( strpos( $svg, 'aria-hidden' ) === false ) {
		$svg = str_replace( '<svg ', '<svg aria-hidden="true" focusable="false" ', $svg );
	}
	if ( strpos( $svg, 'vertical-align' ) === false ) {
		$svg = str_replace( '<svg ', '<svg style="vertical-align:-0.125em" ', $svg );
	}

	// Security: strip scripts and event handlers
	$svg = preg_replace( '/<script\b[^>]*>.*?<\/script>/is', '', $svg );
	$svg = preg_replace( '/\s+on\w+\s*=\s*(["\'])[^"\']*\1/i', '', $svg );
	$svg = preg_replace( '/\bhref\s*=\s*["\']javascript:[^"\']*["\']/i', '', $svg );

	// Sanity check
	if ( ! preg_match( '/^\s*<svg\b/i', $svg ) ) return false;

	return $svg;
}