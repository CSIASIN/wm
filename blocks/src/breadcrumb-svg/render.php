<?php
/**
 * render.php — wmblocks/breadcrumb-svg
 * Bootstrap breadcrumb with an SVG icon as the divider.
 *
 * The SVG is embedded as a URL-encoded data URI in --bs-breadcrumb-divider:
 *
 * <nav style="--bs-breadcrumb-divider: url(&quot;data:image/svg+xml,…&quot;);">
 *   <ol class="breadcrumb">…</ol>
 * </nav>
 *
 * All SVG path data is hardcoded (no user-supplied SVG paths).
 * The only user-controlled variable is the fill/stroke colour, which is
 * strictly validated as a hex colour.
 * All allowlists inline — no global.
 */

// ── Allowlists ────────────────────────────────────────────────────────────
$ok_svg_keys = [ 'arrow', 'chevron', 'double', 'slash', 'dot', 'dash' ];

// ── Hardcoded SVG shape data — no user-supplied paths ─────────────────────
$svg_shapes = [
	'arrow' => [
		'w' => 8, 'h' => 8,
		'element' => 'path',
		'attrs'   => [ 'd' => 'M2.5 0L1 1.5 3.5 4 1 6.5 2.5 8l4-4-4-4z' ],
		'fill'    => true,
	],
	'chevron' => [
		'w' => 10, 'h' => 10,
		'element' => 'path',
		'attrs'   => [ 'd' => 'M3 1l4 4-4 4', 'stroke-width' => '1.5', 'fill' => 'none', 'stroke-linecap' => 'round', 'stroke-linejoin' => 'round' ],
		'stroke'  => true,
	],
	'double' => [
		'w' => 12, 'h' => 8,
		'element' => 'path',
		'attrs'   => [ 'd' => 'M1 0L4 4 1 8M6 0l3 4-3 4', 'stroke-width' => '1.3', 'fill' => 'none', 'stroke-linecap' => 'round', 'stroke-linejoin' => 'round' ],
		'stroke'  => true,
	],
	'slash' => [
		'w' => 6, 'h' => 10,
		'element' => 'path',
		'attrs'   => [ 'd' => 'M5 0L1 10', 'stroke-width' => '1.2', 'fill' => 'none', 'stroke-linecap' => 'round' ],
		'stroke'  => true,
	],
	'dot' => [
		'w' => 6, 'h' => 8,
		'element' => 'circle',
		'attrs'   => [ 'cx' => '3', 'cy' => '4', 'r' => '2' ],
		'fill'    => true,
	],
	'dash' => [
		'w' => 8, 'h' => 8,
		'element' => 'path',
		'attrs'   => [ 'd' => 'M0 4h8', 'stroke-width' => '1.5', 'fill' => 'none', 'stroke-linecap' => 'round' ],
		'stroke'  => true,
	],
];

// ── Read and validate attributes ──────────────────────────────────────────
$items     = ( isset( $attributes['items'] ) && is_array( $attributes['items'] ) ) ? $attributes['items'] : [];
$svg_key   = ( isset( $attributes['svgDivider'] ) && in_array( $attributes['svgDivider'], $ok_svg_keys, true ) )
             ? $attributes['svgDivider'] : 'arrow';
$raw_color = ! empty( $attributes['dividerColor'] ) ? $attributes['dividerColor'] : '#6c757d';
$aria_label= ! empty( $attributes['ariaLabel'] )    ? esc_attr( $attributes['ariaLabel'] ) : 'breadcrumb';

// Strictly validate hex colour (3 or 6 hex digits, with or without #)
if ( preg_match( '/^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/', $raw_color, $m ) ) {
	$safe_color = '#' . ltrim( $raw_color, '#' );
} else {
	$safe_color = '#6c757d'; // fallback
}

// ── Build the SVG data URI ─────────────────────────────────────────────────
$shape   = $svg_shapes[ $svg_key ];
$w       = (int) $shape['w'];
$h       = (int) $shape['h'];
$el      = $shape['element']; // 'path' or 'circle'
$color   = $safe_color;
$encoded_color = rawurlencode( $color );

// Build element attribute string from hardcoded array
$attr_str = '';
foreach ( $shape['attrs'] as $attr_name => $attr_val ) {
	// Both key and value are hardcoded — no user input here
	$attr_str .= ' ' . $attr_name . '=\'' . $attr_val . '\'';
}

// Add fill or stroke from validated colour
if ( ! empty( $shape['fill'] ) ) {
	$attr_str .= ' fill=\'' . $color . '\'';
} elseif ( ! empty( $shape['stroke'] ) ) {
	$attr_str .= ' stroke=\'' . $color . '\'';
}

// Build the full SVG string and URL-encode it for the CSS custom property
$svg_inner = '<' . $el . $attr_str . '/>';
// Encode the full SVG — < > # must be URL-encoded for CSS data URI
$encoded_svg = rawurlencode(
	"<svg xmlns='http://www.w3.org/2000/svg' width='{$w}' height='{$h}' viewBox='0 0 {$w} {$h}'>{$svg_inner}</svg>"
);

// CSS custom property value
$divider_css = '--bs-breadcrumb-divider: url("data:image/svg+xml,' . $encoded_svg . '");';

// ── Build breadcrumb items HTML ────────────────────────────────────────────
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
	<nav style="<?php echo esc_attr( $divider_css ); ?>" aria-label="<?php echo $aria_label; ?>">
		<ol class="breadcrumb">
			<?php echo $items_html; ?>
		</ol>
	</nav>
</div>
