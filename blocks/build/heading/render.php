<?php
$level        = isset( $attributes['level'] )        ? (int) $attributes['level']                 : 2;
$content      = ! empty( $attributes['content'] )    ? wp_kses_post( $attributes['content'] )     : '';
$display_cls  = ! empty( $attributes['displayClass'] ) ? esc_attr( $attributes['displayClass'] ) : '';
$text_align   = ! empty( $attributes['textAlign'] )  ? esc_attr( $attributes['textAlign'] )      : '';
$text_color   = ! empty( $attributes['textColor'] )  ? esc_attr( $attributes['textColor'] )      : '';
$font_weight  = ! empty( $attributes['fontWeight'] ) ? esc_attr( $attributes['fontWeight'] )     : '';
$custom_class = ! empty( $attributes['customClass'] )? esc_attr( $attributes['customClass'] )    : '';

// Clamp level to 1–6
$level = max( 1, min( 6, $level ) );
$tag   = 'h' . $level;

$heading_class = implode( ' ', array_filter( [
	$display_cls,
	$text_align,
	$text_color,
	$font_weight,
	$custom_class,
], 'strlen' ) );

$wrapper_attributes = get_block_wrapper_attributes( [ 'class' => $heading_class ] );
?>

	<<?php echo $tag; ?> <?php if ( $heading_class ) echo $wrapper_attributes;  ?>>
		<?php echo $content; ?>
	</<?php echo $tag; ?>>



