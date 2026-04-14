<?php
$col_classes = array_filter( [
	! empty( $attributes['col'] )        ? esc_attr( $attributes['col'] )        : 'col',
	! empty( $attributes['colSm'] )      ? esc_attr( $attributes['colSm'] )      : '',
	! empty( $attributes['colMd'] )      ? esc_attr( $attributes['colMd'] )      : '',
	! empty( $attributes['colLg'] )      ? esc_attr( $attributes['colLg'] )      : '',
	! empty( $attributes['colXl'] )      ? esc_attr( $attributes['colXl'] )      : '',
	! empty( $attributes['colXxl'] )     ? esc_attr( $attributes['colXxl'] )     : '',
	! empty( $attributes['offset'] )     ? esc_attr( $attributes['offset'] )     : '',
	! empty( $attributes['offsetSm'] )   ? esc_attr( $attributes['offsetSm'] )   : '',
	! empty( $attributes['offsetMd'] )   ? esc_attr( $attributes['offsetMd'] )   : '',
	! empty( $attributes['offsetLg'] )   ? esc_attr( $attributes['offsetLg'] )   : '',
	! empty( $attributes['offsetXl'] )   ? esc_attr( $attributes['offsetXl'] )   : '',
	! empty( $attributes['order'] )      ? esc_attr( $attributes['order'] )      : '',
	! empty( $attributes['orderSm'] )    ? esc_attr( $attributes['orderSm'] )    : '',
	! empty( $attributes['orderMd'] )    ? esc_attr( $attributes['orderMd'] )    : '',
	! empty( $attributes['orderLg'] )    ? esc_attr( $attributes['orderLg'] )    : '',
	! empty( $attributes['alignSelf'] )  ? esc_attr( $attributes['alignSelf'] )  : '',
	! empty( $attributes['customClass'] )? esc_attr( $attributes['customClass'] ): '',
], 'strlen' );

$wrapper_attributes = get_block_wrapper_attributes( [ 'class' => implode( ' ', $col_classes ) ] );
?>
<div <?php echo $wrapper_attributes; ?>><?php echo $content; ?></div>