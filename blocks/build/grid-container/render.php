<?php
$type       = ! empty( $attributes['containerType'] ) ? esc_attr( $attributes['containerType'] ) : 'container';
$text_align = ! empty( $attributes['textAlign'] )     ? esc_attr( $attributes['textAlign'] )     : '';
$overflow   = ! empty( $attributes['overflow'] )      ? esc_attr( $attributes['overflow'] )      : '';
$padding    = ! empty( $attributes['padding'] )       ? esc_attr( $attributes['padding'] )       : '';
$custom     = ! empty( $attributes['customClass'] )   ? esc_attr( $attributes['customClass'] )   : '';

$extra_classes = implode( ' ', array_filter( [ $type, $text_align, $overflow, $padding, $custom ], 'strlen' ) );
$wrapper_attributes = get_block_wrapper_attributes( [ 'class' => $extra_classes ] );
?>
<div <?php echo $wrapper_attributes; ?>><?php echo $content; ?></div>