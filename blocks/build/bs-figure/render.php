<?php
$image_url   = ! empty( $attributes['imageUrl'] )  ? esc_url( $attributes['imageUrl'] )  : '';
$image_alt   = ! empty( $attributes['imageAlt'] )  ? esc_attr( $attributes['imageAlt'] ) : '';
$caption     = ! empty( $attributes['caption'] )   ? wp_kses_post( $attributes['caption'] ) : '';
$float_class = ! empty( $attributes['floatClass'] ) ? esc_attr( $attributes['floatClass'] ) : '';
$cap_align   = ! empty( $attributes['captionAlign'] ) ? esc_attr( $attributes['captionAlign'] ) : '';

$img_class = implode( ' ', array_filter( [
	'figure-img',
	! empty( $attributes['imgFluid'] )     ? 'img-fluid'     : '',
	! empty( $attributes['imgThumbnail'] ) ? 'img-thumbnail' : '',
	! empty( $attributes['rounded'] )      ? esc_attr( $attributes['rounded'] ) : '',
	! empty( $attributes['borderSides'] )  ? implode( ' ', array_map( 'esc_attr', $attributes['borderSides'] ) ) : '',
	! empty( $attributes['borderColor'] )  ? esc_attr( $attributes['borderColor'] ) : '',
	! empty( $attributes['borderWidth'] )  ? esc_attr( $attributes['borderWidth'] ) : '',
	! empty( $attributes['customClass'] )  ? esc_attr( $attributes['customClass'] ) : '',
], 'strlen' ) );

$figure_class = implode( ' ', array_filter( [ 'figure', $float_class ], 'strlen' ) );
$caption_class = implode( ' ', array_filter( [ 'figure-caption', $cap_align ], 'strlen' ) );

$wrapper_attributes = get_block_wrapper_attributes();
?>
<div <?php echo $wrapper_attributes; ?>>
	<figure class="<?php echo $figure_class; ?>">
		<?php if ( $image_url ) : ?>
			<img src="<?php echo $image_url; ?>" class="<?php echo $img_class; ?>" alt="<?php echo $image_alt; ?>">
		<?php endif; ?>
		<?php if ( $caption ) : ?>
			<figcaption class="<?php echo $caption_class; ?>"><?php echo $caption; ?></figcaption>
		<?php endif; ?>
	</figure>
</div>
