<?php
$anchor  = ! empty( $attributes['anchor'] ) ? ' id="' . esc_attr( $attributes['anchor'] ) . '"' : '';
$type       = ! empty( $attributes['containerType'] ) ? esc_attr( $attributes['containerType'] ) : 'container';
$text_align = ! empty( $attributes['textAlign'] )     ? esc_attr( $attributes['textAlign'] )     : '';
$overflow   = ! empty( $attributes['overflow'] )      ? esc_attr( $attributes['overflow'] )      : '';
$padding    = ! empty( $attributes['padding'] )       ? esc_attr( $attributes['padding'] )       : '';
$custom     = ! empty( $attributes['customClass'] )   ? esc_attr( $attributes['customClass'] )   : '';

$extra_classes = implode( ' ', array_filter( [ $type, $text_align, $overflow, $padding, $custom ], 'strlen' ) );

// ── Background image ────────────────────────────────────────────────────────
$bg_url        = ! empty( $attributes['bgImageUrl'] )      ? esc_url( $attributes['bgImageUrl'] )           : '';
$bg_size       = ! empty( $attributes['bgSize'] )          ? esc_attr( $attributes['bgSize'] )              : 'cover';
$bg_position   = ! empty( $attributes['bgPosition'] )      ? esc_attr( $attributes['bgPosition'] )          : 'center center';
$bg_repeat     = ! empty( $attributes['bgRepeat'] )        ? esc_attr( $attributes['bgRepeat'] )            : 'no-repeat';
$bg_attachment = ! empty( $attributes['bgAttachment'] )    ? esc_attr( $attributes['bgAttachment'] )        : 'scroll';
$min_height    = ! empty( $attributes['minHeight'] )       ? esc_attr( $attributes['minHeight'] )           : '';

// Overlay
$overlay_color   = ! empty( $attributes['bgOverlayColor'] )   ? $attributes['bgOverlayColor']   : '';
$overlay_opacity = isset( $attributes['bgOverlayOpacity'] )   ? (float) $attributes['bgOverlayOpacity'] : 0.4;

// Build inline style for wrapper
$inline_styles = [];

if ( $bg_url ) {
	$inline_styles[] = 'background-image: url(' . $bg_url . ')';
	$inline_styles[] = 'background-size: '       . $bg_size;
	$inline_styles[] = 'background-position: '   . $bg_position;
	$inline_styles[] = 'background-repeat: '     . $bg_repeat;
	$inline_styles[] = 'background-attachment: ' . $bg_attachment;
}

if ( $min_height ) {
	$inline_styles[] = 'min-height: ' . $min_height;
}

if ( $bg_url ) {
	$inline_styles[] = 'position: relative';
}

$style_attr = ! empty( $inline_styles ) ? ' style="' . implode( '; ', $inline_styles ) . '"' : '';

// ── Overlay helper ──────────────────────────────────────────────────────────
$overlay_html = '';
if ( $bg_url && $overlay_color ) {
	// Convert hex to rgba
	$hex = ltrim( $overlay_color, '#' );
	if ( strlen( $hex ) === 3 ) {
		$hex = $hex[0].$hex[0].$hex[1].$hex[1].$hex[2].$hex[2];
	}
	if ( strlen( $hex ) === 6 ) {
		$r = hexdec( substr( $hex, 0, 2 ) );
		$g = hexdec( substr( $hex, 2, 2 ) );
		$b = hexdec( substr( $hex, 4, 2 ) );
		$overlay_rgba  = "rgba({$r},{$g},{$b},{$overlay_opacity})";
		$overlay_html  = '<div aria-hidden="true" style="position:absolute;inset:0;background:' . esc_attr( $overlay_rgba ) . ';pointer-events:none;z-index:0;"></div>';
	}
}

// Content needs z-index above overlay when overlay is present
$content_wrap_open  = $overlay_html ? '<div style="position:relative;z-index:1;">' : '';
$content_wrap_close = $overlay_html ? '</div>' : '';

$wrapper_attributes = get_block_wrapper_attributes( [
	'class' => $extra_classes,
	'style' => ! empty( $inline_styles ) ? implode( '; ', $inline_styles ) : '',
] );
?>
<div <?php echo $wrapper_attributes; ?> <?php echo $anchor; ?> ><?php echo $overlay_html . $content_wrap_open . $content; echo $content_wrap_close; ?></div>