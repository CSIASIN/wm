<?php
$icon_name  = ! empty( $attributes['iconName'] )    ? sanitize_key( $attributes['iconName'] )       : '';
$icon_svg   = ! empty( $attributes['iconSvg'] )     ? $attributes['iconSvg']                        : '';
$size       = ! empty( $attributes['size'] )        ? esc_attr( $attributes['size'] )               : '2rem';
$text_color = ! empty( $attributes['textColor'] )   ? esc_attr( $attributes['textColor'] )          : '';
$align      = ! empty( $attributes['align'] )       ? esc_attr( $attributes['align'] )              : '';
$link_url   = ! empty( $attributes['linkUrl'] )     ? esc_url( $attributes['linkUrl'] )             : '';
$link_target= ! empty( $attributes['linkTarget'] )  ? ' target="_blank" rel="noopener noreferrer"'  : '';
$aria_label = ! empty( $attributes['ariaLabel'] )   ? esc_attr( $attributes['ariaLabel'] )          : $icon_name;
$custom     = ! empty( $attributes['customClass'] ) ? esc_attr( $attributes['customClass'] )        : '';

if ( ! $icon_name ) return;

// Get SVG — prefer stored, fall back to fetching fresh
$svg = '';
if ( $icon_svg ) {
	// Strip the editor comment tag (<!-- icon-name -->)
	$svg = preg_replace( '/^<!--[^>]+-->/', '', $icon_svg );
} else {
	// Transient cache fallback
	$cache_key = 'wmblocks_bi_svg_' . $icon_name;
	$svg       = get_transient( $cache_key );
	if ( ! $svg ) {
		$response = wp_remote_get( "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.13.1/icons/{$icon_name}.svg", [ 'timeout' => 5 ] );
		if ( ! is_wp_error( $response ) && wp_remote_retrieve_response_code( $response ) === 200 ) {
			$svg = wp_remote_retrieve_body( $response );
			set_transient( $cache_key, $svg, WEEK_IN_SECONDS );
		}
	}
}

if ( ! $svg ) return;

// Set size on SVG
$svg = preg_replace( '/width="[^"]*"/',  'width="'  . $size . '"', $svg );
$svg = preg_replace( '/height="[^"]*"/', 'height="' . $size . '"', $svg );

// Sanitise SVG before output
$allowed_tags = [
	'svg'     => [ 'xmlns'=>[], 'width'=>[], 'height'=>[], 'fill'=>[], 'viewbox'=>[], 'viewBox'=>[], 'class'=>[], 'role'=>[], 'aria-label'=>[], 'aria-hidden'=>[], 'focusable'=>[] ],
	'path'    => [ 'd'=>[], 'fill-rule'=>[], 'clip-rule'=>[], 'fill'=>[], 'stroke'=>[], 'stroke-width'=>[] ],
	'circle'  => [ 'cx'=>[], 'cy'=>[], 'r'=>[], 'fill'=>[], 'stroke'=>[], 'stroke-width'=>[] ],
	'rect'    => [ 'x'=>[], 'y'=>[], 'width'=>[], 'height'=>[], 'rx'=>[], 'ry'=>[], 'fill'=>[] ],
	'line'    => [ 'x1'=>[], 'y1'=>[], 'x2'=>[], 'y2'=>[], 'stroke'=>[], 'stroke-width'=>[], 'stroke-linecap'=>[] ],
	'polyline'=> [ 'points'=>[], 'fill'=>[], 'stroke'=>[], 'stroke-width'=>[], 'stroke-linecap'=>[], 'stroke-linejoin'=>[] ],
	'polygon' => [ 'points'=>[], 'fill'=>[] ],
	'g'       => [ 'fill'=>[], 'stroke'=>[], 'transform'=>[] ],
	'use'     => [ 'href'=>[], 'xlink:href'=>[] ],
	'defs'    => [],
	'title'   => [],
];
$clean_svg = wp_kses( $svg, $allowed_tags );

// Build span class
$span_class = implode( ' ', array_filter( [ $text_color, $custom ], 'strlen' ) );

// Wrapper alignment
$wrap_class = implode( ' ', array_filter( [ $align ], 'strlen' ) );

$wrapper_attributes = get_block_wrapper_attributes( $wrap_class ? [ 'class' => $wrap_class ] : [] );
?>
<div <?php echo $wrapper_attributes; ?>>
	<?php if ( $link_url ) : ?>
		<a href="<?php echo $link_url; ?>"<?php echo $link_target; ?> aria-label="<?php echo $aria_label; ?>">
			<span<?php if ( $span_class ) echo ' class="' . $span_class . '"'; ?> role="img" aria-label="<?php echo $aria_label; ?>">
				<?php echo $clean_svg; ?>
			</span>
		</a>
	<?php else : ?>
		<span<?php if ( $span_class ) echo ' class="' . $span_class . '"'; ?> role="img" aria-label="<?php echo $aria_label; ?>">
			<?php echo $clean_svg; ?>
		</span>
	<?php endif; ?>
</div>
