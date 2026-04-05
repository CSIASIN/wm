<?php
$image_url     = ! empty( $attributes['imageUrl'] )      ? esc_url( $attributes['imageUrl'] )        : '';
$image_alt     = ! empty( $attributes['imageAlt'] )      ? esc_attr( $attributes['imageAlt'] )       : '';
$image_width   = ! empty( $attributes['imageWidth'] )    ? esc_attr( $attributes['imageWidth'] )     : '';
$image_height  = ! empty( $attributes['imageHeight'] )   ? esc_attr( $attributes['imageHeight'] )    : '';

if ( ! $image_url ) return;

$img_class = implode( ' ', array_filter( [
	! empty( $attributes['imgFluid'] )      ? 'img-fluid'     : '',
	! empty( $attributes['imgThumbnail'] )  ? 'img-thumbnail' : '',
	! empty( $attributes['rounded'] )       ? esc_attr( $attributes['rounded'] )       : '',
	! empty( $attributes['borderSides'] )   ? implode( ' ', array_map( 'esc_attr', $attributes['borderSides'] ) ) : '',
	! empty( $attributes['borderColor'] )   ? esc_attr( $attributes['borderColor'] )   : '',
	! empty( $attributes['borderWidth'] )   ? esc_attr( $attributes['borderWidth'] )   : '',
	! empty( $attributes['borderOpacity'] ) ? esc_attr( $attributes['borderOpacity'] ) : '',
	! empty( $attributes['floatClass'] )    ? esc_attr( $attributes['floatClass'] )    : '',
	! empty( $attributes['displayClass'] )  ? esc_attr( $attributes['displayClass'] )  : '',
	! empty( $attributes['shadow'] )        ? esc_attr( $attributes['shadow'] )        : '',
	! empty( $attributes['customClass'] )   ? esc_attr( $attributes['customClass'] )   : '',
], 'strlen' ) );

$style_parts = [];
if ( $image_width )  $style_parts[] = 'width:'  . $image_width;
if ( $image_height ) $style_parts[] = 'height:' . $image_height;
$style_attr = $style_parts ? ' style="' . implode( ';', $style_parts ) . '"' : '';

$wrapper_attributes = get_block_wrapper_attributes();
?>
<div <?php echo $wrapper_attributes; ?>>
	<img
		src="<?php echo $image_url; ?>"
		alt="<?php echo $image_alt; ?>"
		<?php if ( $img_class ) : ?>class="<?php echo $img_class; ?>"<?php endif; ?>
		<?php echo $style_attr; ?>
	>
</div>
