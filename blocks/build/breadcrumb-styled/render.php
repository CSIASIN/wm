<?php
/**
 * render.php — wmblocks/breadcrumb-styled
 * Bootstrap breadcrumb with full visual styling.
 *
 * Wraps the <nav> in a styled <div> with bg-*, padding, border-radius, border,
 * font-size utilities. Custom divider via --bs-breadcrumb-divider on <nav>.
 *
 * <div class="bg-light p-3 rounded-3 border border-primary">
 *   <nav style="--bs-breadcrumb-divider: '/';" aria-label="breadcrumb">
 *     <ol class="breadcrumb mb-0">
 *       <li class="breadcrumb-item"><a href="/" class="link-primary">Home</a></li>
 *       <li class="breadcrumb-item active" aria-current="page">Data</li>
 *     </ol>
 *   </nav>
 * </div>
 *
 * All allowlists inline — no global.
 */

// ── Allowlists ────────────────────────────────────────────────────────────
$ok_bg = [
	'', 'bg-light', 'bg-white', 'bg-dark', 'bg-primary',
	'bg-secondary', 'bg-success', 'bg-danger', 'bg-warning', 'bg-info',
];
$ok_padding = [
	'', 'p-1', 'p-2', 'p-3', 'p-4', 'p-5', 'py-2 px-3', 'py-3 px-4',
];
$ok_rounded = [
	'', 'rounded', 'rounded-2', 'rounded-3', 'rounded-4', 'rounded-pill',
];
$ok_border_color = [
	'', 'border-primary', 'border-secondary', 'border-success',
	'border-danger', 'border-warning', 'border-dark', 'border-light',
];
$ok_font_size = [ '', 'small', 'fs-6', 'fs-5', 'fs-4' ];
$ok_link_color = [
	'', 'link-primary', 'link-secondary', 'link-success',
	'link-danger', 'link-warning', 'link-info', 'link-light', 'link-dark',
];
$ok_dividers = [ '/', '>', '»', '›', '•', '|', '~', '-', '→', '✦' ];

// ── Read attributes ────────────────────────────────────────────────────────
$items        = ( isset( $attributes['items'] ) && is_array( $attributes['items'] ) ) ? $attributes['items'] : [];
$aria_label   = ! empty( $attributes['ariaLabel'] )   ? esc_attr( $attributes['ariaLabel'] ) : 'breadcrumb';
$bg_color     = ( isset( $attributes['bgColor'] )     && in_array( $attributes['bgColor'],     $ok_bg,           true ) ) ? $attributes['bgColor']     : 'bg-light';
$padding      = ( isset( $attributes['padding'] )     && in_array( $attributes['padding'],     $ok_padding,      true ) ) ? $attributes['padding']     : 'p-3';
$rounded      = ( isset( $attributes['rounded'] )     && in_array( $attributes['rounded'],     $ok_rounded,      true ) ) ? $attributes['rounded']     : 'rounded-3';
$border       = ! empty( $attributes['border'] );
$border_color = ( isset( $attributes['borderColor'] ) && in_array( $attributes['borderColor'], $ok_border_color, true ) ) ? $attributes['borderColor'] : '';
$font_size    = ( isset( $attributes['fontSize'] )    && in_array( $attributes['fontSize'],    $ok_font_size,    true ) ) ? $attributes['fontSize']    : '';
$link_color   = ( isset( $attributes['linkColor'] )   && in_array( $attributes['linkColor'],   $ok_link_color,   true ) ) ? $attributes['linkColor']   : '';
$raw_divider  = ! empty( $attributes['divider'] )     ? $attributes['divider'] : '/';

// Validate divider
if ( ! in_array( $raw_divider, $ok_dividers, true ) ) {
	$raw_divider = '/';
}
$css_divider = htmlspecialchars( $raw_divider, ENT_QUOTES, 'UTF-8' );
$nav_style   = "--bs-breadcrumb-divider: '" . $css_divider . "';";

// ── Build wrapper div classes ──────────────────────────────────────────────
$wrapper_div_classes = implode( ' ', array_filter( [
	$bg_color,
	$padding,
	$rounded,
	$border ? 'border' : '',
	$border && $border_color ? $border_color : '',
	$font_size,
], 'strlen' ) );

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
		$link_class  = $link_color ? ' class="' . esc_attr( $link_color ) . '"' : '';
		$link        = $url ? '<a href="' . $url . '"' . $link_class . '>' . $label . '</a>' : $label;
		$items_html .= '<li class="breadcrumb-item">' . $link . '</li>' . "\n";
	}
}

$block_wrapper = get_block_wrapper_attributes();
?>
<div <?php echo $block_wrapper; ?>>
	<div class="<?php echo esc_attr( $wrapper_div_classes ); ?>">
		<nav style="<?php echo esc_attr( $nav_style ); ?>" aria-label="<?php echo $aria_label; ?>">
			<ol class="breadcrumb mb-0">
				<?php echo $items_html; ?>
			</ol>
		</nav>
	</div>
</div>
