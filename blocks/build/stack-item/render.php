<?php
$flex_fill   = ! empty( $attributes['flexFill'] )    ? 'flex-fill'                           : '';
$padding     = ! empty( $attributes['padding'] )     ? esc_attr( $attributes['padding'] )    : '';
$auto_margin = ! empty( $attributes['autoMargin'] )  ? esc_attr( $attributes['autoMargin'] ) : '';
$align_self  = ! empty( $attributes['alignSelf'] )   ? esc_attr( $attributes['alignSelf'] )  : '';
$show_divider = ! empty( $attributes['showDivider'] );
$custom      = ! empty( $attributes['customClass'] ) ? esc_attr( $attributes['customClass'] ): '';

$item_class = implode( ' ', array_filter( [
	$flex_fill, $padding, $auto_margin, $align_self, $custom,
], 'strlen' ) );

$wrapper_args = $item_class ? [ 'class' => $item_class ] : [];
$wrapper_attributes = get_block_wrapper_attributes( $wrapper_args );
?>
<?php if ( $show_divider ) : ?><div class="vr"></div><?php endif; ?>
<div <?php echo $wrapper_attributes; ?>>
	<?php echo $content; ?>
</div>
