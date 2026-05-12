<?php
/**
 * Bootstrap Icon AJAX handler.
 *
 * Include from functions.php:
 *   require_once get_template_directory() . '/blocks/src/bs-icon/ajax-handler.php';
 */

if ( ! defined( 'ABSPATH' ) ) exit;

// ── Icon list — returns paginated name array (no SVG, lightweight) ────────
add_action( 'wp_ajax_wmblocks_icon_list', 'wmblocks_ajax_icon_list' );
function wmblocks_ajax_icon_list() {
	check_ajax_referer( 'wmblocks_icon_nonce', 'nonce' );

	$categories_file = dirname( __FILE__ ) . '/icon-categories.php';
	if ( ! file_exists( $categories_file ) ) {
		wp_send_json_error( 'icon-categories.php not found' );
	}
	$categories = require $categories_file;

	$category = sanitize_text_field( $_GET['category'] ?? 'all' );
	$search   = sanitize_text_field( $_GET['search']   ?? '' );
	$page     = max( 1, (int) ( $_GET['page'] ?? 1 ) );
	$per_page = 48;

	// Build complete deduplicated flat list across every category.
	// This is used as the corpus for search (always scans everything).
	$all_icons = [];
	foreach ( $categories as $cat => $names ) {
		if ( $cat === 'all' ) continue;
		foreach ( $names as $name ) {
			if ( ! in_array( $name, $all_icons, true ) ) {
				$all_icons[] = $name;
			}
		}
	}

	// If a search term is present always search ALL icons regardless of category.
	// Split on spaces → AND logic: every word must appear in the icon name.
	// e.g. "house heart" → matches "house-heart", "house-heart-fill" etc.
	if ( $search !== '' ) {
		$terms = array_filter( array_map( 'trim', explode( ' ', $search ) ) );
		$icons = array_values( array_filter( $all_icons, function( $n ) use ( $terms ) {
			foreach ( $terms as $term ) {
				if ( ! str_contains( $n, $term ) ) return false;
			}
			return true;
		} ) );

	} elseif ( $category === 'all' ) {
		// Plain "all" = every icon
		$icons = $all_icons;

	} elseif ( str_contains( $category, '|' ) ) {
		// Pipe-separated group key e.g. "arrows|ui|media|files|devices"
		// Used by the JS when "All" sub-tab is selected within a group.
		$group_cats = array_filter( explode( '|', $category ) );
		$icons = [];
		foreach ( $group_cats as $gc ) {
			foreach ( ( $categories[ $gc ] ?? [] ) as $name ) {
				if ( ! in_array( $name, $icons, true ) ) {
					$icons[] = $name;
				}
			}
		}

	} else {
		// Single specific category
		$icons = $categories[ $category ] ?? [];
	}

	$total  = count( $icons );
	$offset = ( $page - 1 ) * $per_page;
	$paged  = array_slice( $icons, $offset, $per_page );

	wp_send_json_success( [
		'icons'      => array_values( $paged ),
		'total'      => $total,
		'page'       => $page,
		'per_page'   => $per_page,
		'pages'      => (int) ceil( $total / max( 1, $per_page ) ),
		'categories' => array_keys( $categories ),
	] );
}

// ── Single SVG — fetches from CDN and caches in transient ─────────────────
add_action( 'wp_ajax_wmblocks_icon_svg', 'wmblocks_ajax_icon_svg' );
function wmblocks_ajax_icon_svg() {
	check_ajax_referer( 'wmblocks_icon_nonce', 'nonce' );

	$name = sanitize_key( $_GET['name'] ?? '' );
	if ( ! $name ) {
		wp_send_json_error( 'No icon name provided' );
	}

	$cache_key = 'wmblocks_bi_' . md5( $name );
	$svg       = get_transient( $cache_key );

	if ( ! $svg ) {
		$url      = 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.13.1/icons/' . $name . '.svg';
		$response = wp_remote_get( $url, [ 'timeout' => 10 ] );

		if ( is_wp_error( $response ) || wp_remote_retrieve_response_code( $response ) !== 200 ) {
			wp_send_json_error( 'Could not fetch icon: ' . $name );
		}

		$svg = wp_remote_retrieve_body( $response );
		set_transient( $cache_key, $svg, WEEK_IN_SECONDS );
	}

	wp_send_json_success( [ 'svg' => $svg, 'name' => $name ] );
}

// ── Localise AJAX URL + nonce for the block editor script ─────────────────
add_action( 'enqueue_block_editor_assets', 'wmblocks_icon_localize', 20 );
function wmblocks_icon_localize() {
	/**
	 * @wordpress/scripts registers the editorScript handle as:
	 *   {namespace}-{block-name}-editor-script
	 * For wmblocks/bs-icon that becomes:
	 *   wmblocks-bs-icon-editor-script
	 *
	 * We try that handle first, then fall back to the asset-file approach,
	 * then fall back to wp_add_inline_script on any registered script.
	 */
	$primary_handle  = 'wmblocks-bs-icon-editor-script';
	$fallback_handle = 'file:./index.js'; // never valid but triggers the fallback

	$data = json_encode( [
		'ajaxUrl' => admin_url( 'admin-ajax.php' ),
		'nonce'   => wp_create_nonce( 'wmblocks_icon_nonce' ),
	] );

	// Try the standard @wordpress/scripts handle
	if ( wp_script_is( $primary_handle, 'registered' ) ) {
		wp_localize_script( $primary_handle, 'wmblocksIconData', [
			'ajaxUrl' => admin_url( 'admin-ajax.php' ),
			'nonce'   => wp_create_nonce( 'wmblocks_icon_nonce' ),
		] );
		return;
	}

	// Fallback: inject directly as an inline script before any registered
	// wmblocks script — this always works regardless of handle naming.
	$inline = "window.wmblocksIconData = $data;";

	// Find any registered wmblocks script to attach the inline to
	global $wp_scripts;
	if ( ! empty( $wp_scripts->registered ) ) {
		foreach ( $wp_scripts->registered as $handle => $script ) {
			if ( strpos( $handle, 'wmblocks' ) !== false ) {
				wp_add_inline_script( $handle, $inline, 'before' );
				return;
			}
		}
	}

	// Last resort: attach to wp-blocks which is always registered in the editor
	wp_add_inline_script( 'wp-blocks', $inline, 'before' );
}