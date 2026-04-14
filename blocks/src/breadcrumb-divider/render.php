<?php
/**
 * render.php — wmblocks/breadcrumb-divider
 * Bootstrap breadcrumb with a custom character divider via CSS custom property.
 *
 * <nav style="--bs-breadcrumb-divider: '>';" aria-label="breadcrumb">
 *   <ol class="breadcrumb">…</ol>
 * </nav>
 *
 * The divider character is passed as a CSS custom property value.
 * Reserved characters are escaped for safe inline CSS.
 * All allowlists inline — no global.
 */

$items          = ( isset( $attributes['items'] ) && is_array( $attributes['items'] ) ) ? $attributes['items'] : [];
$aria_label     = ! empty( $attributes['ariaLabel'] )    ? esc_attr( $attributes['ariaLabel'] ) : 'breadcrumb';
$preset_divider = ! empty( $attributes['divider'] )      ? $attributes['divider']               : '/';
$custom_divider = ! empty( $attributes['customDivider'] )? $attributes['customDivider']          : '';

// Determine which divider to use
$raw_divider = $custom_divider ?: $preset_divider;

// Allowed preset characters (safe for inline CSS)
$ok_presets = [ '/', '>', '»', '›', '•', '|', '~', '-', '→', '✦' ];

if ( $custom_divider ) {
	// Strip anything dangerous — allow only printable non-quote non-backslash chars
	$raw_divider = preg_replace( '/[\'\"\\\\<>]/', '', $custom_divider );
	$raw_divider = mb_substr( $raw_divider, 0, 4 ); // max 4 chars
} elseif ( ! in_array( $raw_divider, $ok_presets, true ) ) {
	$raw_divider = '/';
}

// Build safe CSS value: wrap in single quotes for CSS content property
// Escape any remaining special chars for CSS
$css_divider = htmlspecialchars( $raw_divider, ENT_QUOTES, 'UTF-8' );
$nav_style   = "--bs-breadcrumb-divider: '" . $css_divider . "';";

if ( empty( $items ) ) {
	echo '<div ' . get_block_wrapper_attributes() . '></div>';
	return;
}

$last_idx   = count( $items ) - 1;
$items_html = '';

foreach ( $items as $idx => $item ) {
	$label   = ! empty( $item['label'] ) ? wp_kses_post( $item['label'] ) : '';
	$url     = ! empty( $item['url'] )   ? esc_url( $item['url'] )         : '';
	$is_last = ( $idx === $last_idx );

	if ( $is_last ) {
		$items_html .= '<li class="breadcrumb-item active" aria-current="page">' . $label . '</li>' . "\n";
	} else {
		$link        = $url ? '<a href="' . $url . '">' . $label . '</a>' : $label;
		$items_html .= '<li class="breadcrumb-item">' . $link . '</li>' . "\n";
	}
}

$wrapper_attr = get_block_wrapper_attributes();
?>
<div <?php echo $wrapper_attr; ?>>
	<nav style="<?php echo esc_attr( $nav_style ); ?>" aria-label="<?php echo $aria_label; ?>">
		<ol class="breadcrumb">
			<?php echo $items_html; ?>
		</ol>
	</nav>
</div>
