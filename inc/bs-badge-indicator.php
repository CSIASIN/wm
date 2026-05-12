<?php
/**
 * Badge & Indicator — Frontend Render Filter
 *
 * Two jobs:
 *
 * 1. Badge with link — the rich text format stores <span class="wm-badge ...">
 *    with href/target attributes. The WP rich-text serialiser saves <span>
 *    even when href is set. This filter upgrades any wm-badge span that has
 *    an href to a proper <a> tag.
 *
 * 2. Indicator — the format stores:
 *       <span class="wm-badge-host position-relative"
 *             data-ind-color="bg-danger"
 *             data-ind-pos="top-0 start-100 translate-middle"
 *             data-ind-size="p-2">text</span>
 *    This filter reads the data attributes and injects the dot span inside.
 *
 * Add to functions.php (top level):
 *   require_once get_template_directory() . '/blocks/src/formats/badge/render-filter.php';
 */

if ( ! defined( 'ABSPATH' ) ) exit;

add_filter( 'the_content', 'wmblocks_render_badges', 20 );
add_filter( 'the_excerpt', 'wmblocks_render_badges', 20 );

function wmblocks_render_badges( $content ) {
	if ( strpos( $content, 'wm-badge' ) === false ) return $content;

	// ── Pass 1: upgrade badge spans with href to <a> tags ─────────────────
	// Matches: <span class="... wm-badge ..." href="URL" ...>...</span>
	$content = preg_replace_callback(
		'/<span\b([^>]*\bwm-badge\b[^>]*\bhref="([^"]+)"[^>]*)>(.*?)<\/span>/is',
		function( $m ) {
			$all_attrs = $m[1];
			$href      = esc_url( $m[2] );
			$inner     = $m[3];

			// Extract target / rel if present
			$target = '';
			$rel    = '';
			if ( preg_match( '/\btarget="([^"]*)"/', $all_attrs, $tm ) ) {
				$target = ' target="' . esc_attr( $tm[1] ) . '"';
			}
			if ( preg_match( '/\brel="([^"]*)"/', $all_attrs, $rm ) ) {
				$rel = ' rel="' . esc_attr( $rm[1] ) . '"';
			}

			// Build class from the span attrs (strip href/target/rel)
			$class_attr = '';
			if ( preg_match( '/\bclass="([^"]*)"/', $all_attrs, $cm ) ) {
				$class_attr = ' class="' . esc_attr( $cm[1] ) . '"';
			}

			return '<a href="' . $href . '"' . $class_attr . $target . $rel . '>' . $inner . '</a>';
		},
		$content
	);

	// ── Pass 2: inject indicator dot into wm-badge-host spans ─────────────
	// Matches: <span class="... wm-badge-host ..." data-ind-color="..." ...>text</span>
	$content = preg_replace_callback(
		'/<span\b([^>]*\bwm-badge-host\b[^>]*)>([\s\S]*?)<\/span>/i',
		function( $m ) {
			$attrs = $m[1];
			$inner = $m[2];

			// Extract data attributes
			$color    = 'bg-danger';
			$position = 'top-0 start-100 translate-middle';
			$size     = 'p-2';

			if ( preg_match( '/\bdata-ind-color="([^"]*)"/', $attrs, $c ) ) {
				$color = esc_attr( $c[1] );
			}
			if ( preg_match( '/\bdata-ind-pos="([^"]*)"/', $attrs, $p ) ) {
				$position = esc_attr( $p[1] );
			}
			if ( preg_match( '/\bdata-ind-size="([^"]*)"/', $attrs, $s ) ) {
				$size = esc_attr( $s[1] );
			}

			// Sanitise class values — only allow Bootstrap utility classes
			$allowed_chars = '/^[a-z0-9\-\s]+$/i';
			if ( ! preg_match( $allowed_chars, $color ) )    $color    = 'bg-danger';
			if ( ! preg_match( $allowed_chars, $position ) ) $position = 'top-0 start-100 translate-middle';
			if ( ! preg_match( $allowed_chars, $size ) )     $size     = 'p-2';

			// Build clean class for the host span (remove data attrs from output)
			$host_class = 'position-relative wm-badge-host';
			if ( preg_match( '/\bclass="([^"]*)"/', $attrs, $cl ) ) {
				// Use whatever class was saved but ensure position-relative is present
				$saved = $cl[1];
				if ( strpos( $saved, 'position-relative' ) === false ) {
					$saved = 'position-relative ' . $saved;
				}
				$host_class = esc_attr( $saved );
			}

			// Build the indicator dot span
			$dot_class = implode( ' ', array_filter( [
				'position-absolute',
				$position,
				$size,
				$color,
				'border border-light rounded-circle',
				'wm-badge-indicator',
			] ) );

			$dot = '<span class="' . esc_attr( $dot_class ) . '"></span>';

			return '<span class="' . $host_class . '">' . $inner . $dot . '</span>';
		},
		$content
	);

	return $content;
}