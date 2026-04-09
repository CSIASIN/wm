<?php
$position_type = ! empty( $attributes['positionType'] ) ? esc_attr( $attributes['positionType'] ) : 'position-absolute';
$top           = ! empty( $attributes['top'] )          ? esc_attr( $attributes['top'] )          : '';
$bottom        = ! empty( $attributes['bottom'] )       ? esc_attr( $attributes['bottom'] )       : '';
$start         = ! empty( $attributes['start'] )        ? esc_attr( $attributes['start'] )        : '';
$end           = ! empty( $attributes['end'] )          ? esc_attr( $attributes['end'] )          : '';
$translate     = ! empty( $attributes['translate'] )    ? esc_attr( $attributes['translate'] )    : '';
$z_index       = ! empty( $attributes['zIndex'] )       ? esc_attr( $attributes['zIndex'] )       : '';
$custom_class  = ! empty( $attributes['customClass'] )  ? esc_attr( $attributes['customClass'] )  : '';

$element_class = implode( ' ', array_filter( [
	$position_type, $top, $bottom, $start, $end, $translate, $z_index, $custom_class,
], 'strlen' ) );

$wrapper_attributes = get_block_wrapper_attributes( [ 'class' => $element_class ] );
?>
<div <?php echo $wrapper_attributes; ?>>
	<?php echo $content; ?>
</div>
