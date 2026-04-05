<?php
$flex_fill   = ! empty( $attributes['flexFill'] )    ? 'flex-fill'                    : '';
$flex_grow   = ! empty( $attributes['flexGrow'] )    ? esc_attr( $attributes['flexGrow'] )   : '';
$flex_shrink = ! empty( $attributes['flexShrink'] )  ? esc_attr( $attributes['flexShrink'] ) : '';
$align_self  = ! empty( $attributes['alignSelf'] )   ? esc_attr( $attributes['alignSelf'] )  : '';
$order       = ! empty( $attributes['order'] )       ? esc_attr( $attributes['order'] )      : '';
$auto_margin = ! empty( $attributes['autoMargin'] )  ? esc_attr( $attributes['autoMargin'] ) : '';
$custom      = ! empty( $attributes['customClass'] ) ? esc_attr( $attributes['customClass'] ): '';
$min_width   = ! empty( $attributes['minWidth'] )    ? esc_attr( $attributes['minWidth'] )   : '';

$item_class = implode( ' ', array_filter( [
	$flex_fill, $flex_grow, $flex_shrink,
	$align_self, $order, $auto_margin, $custom,
], 'strlen' ) );

$wrapper_args = [];
if ( $item_class ) $wrapper_args['class'] = $item_class;
if ( $min_width )  $wrapper_args['style'] = 'min-width:' . $min_width . ';';

$wrapper_attributes = get_block_wrapper_attributes( $wrapper_args );
?>
<div <?php echo $wrapper_attributes; ?>>
	<?php echo $content; ?>
</div>
