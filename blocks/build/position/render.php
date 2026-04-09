<?php
$position_class = ! empty( $attributes['positionClass'] ) ? esc_attr( $attributes['positionClass'] ) : 'position-relative';
$display        = ! empty( $attributes['display'] )       ? esc_attr( $attributes['display'] )       : '';
$custom_class   = ! empty( $attributes['customClass'] )   ? esc_attr( $attributes['customClass'] )   : '';

$wrapper_class = implode( ' ', array_filter( [ $position_class, $display, $custom_class ], 'strlen' ) );
$wrapper_attributes = get_block_wrapper_attributes( [ 'class' => $wrapper_class ] );
?>
<div <?php echo $wrapper_attributes; ?>>
	<?php echo $content; ?>
</div>
