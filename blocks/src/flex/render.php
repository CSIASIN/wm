<?php
$display        = ! empty( $attributes['display'] )        ? esc_attr( $attributes['display'] )        : 'd-flex';
$direction      = ! empty( $attributes['direction'] )      ? esc_attr( $attributes['direction'] )      : '';
$justify        = ! empty( $attributes['justifyContent'] ) ? esc_attr( $attributes['justifyContent'] ) : '';
$align_items    = ! empty( $attributes['alignItems'] )     ? esc_attr( $attributes['alignItems'] )     : '';
$align_content  = ! empty( $attributes['alignContent'] )   ? esc_attr( $attributes['alignContent'] )   : '';
$flex_wrap      = ! empty( $attributes['flexWrap'] )       ? esc_attr( $attributes['flexWrap'] )       : '';
$gap            = ! empty( $attributes['gap'] )            ? esc_attr( $attributes['gap'] )            : '';
$custom_class   = ! empty( $attributes['customClass'] )    ? esc_attr( $attributes['customClass'] )    : '';

$flex_class = implode( ' ', array_filter( [
	$display, $direction, $justify, $align_items,
	$align_content, $flex_wrap, $gap, $custom_class,
], 'strlen' ) );

$wrapper_attributes = get_block_wrapper_attributes( [ 'class' => $flex_class ] );
?>
<div <?php echo $wrapper_attributes; ?>>
	<?php echo $content; ?>
</div>
