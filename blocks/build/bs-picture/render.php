<?php
$sources          = ! empty( $attributes['sources'] )         ? $attributes['sources']                              : [];
$default_url      = ! empty( $attributes['defaultImageUrl'] ) ? esc_url( $attributes['defaultImageUrl'] )           : '';
$default_alt      = ! empty( $attributes['defaultImageAlt'] ) ? esc_attr( $attributes['defaultImageAlt'] )          : '';

$img_class = implode( ' ', array_filter( [
	! empty( $attributes['imgFluid'] )     ? 'img-fluid'     : '',
	! empty( $attributes['imgThumbnail'] ) ? 'img-thumbnail' : '',
	! empty( $attributes['rounded'] )      ? esc_attr( $attributes['rounded'] ) : '',
	! empty( $attributes['customClass'] )  ? esc_attr( $attributes['customClass'] ) : '',
], 'strlen' ) );

if ( ! $default_url ) return;

$wrapper_attributes = get_block_wrapper_attributes();
?>
<div <?php echo $wrapper_attributes; ?>>
	<picture>
		<?php foreach ( $sources as $source ) :
			if ( empty( $source['imageUrl'] ) ) continue;
		?>
			<source
				srcset="<?php echo esc_url( $source['imageUrl'] ); ?>"
				media="<?php echo esc_attr( $source['media'] ?? '' ); ?>"
			>
		<?php endforeach; ?>
		<img
			src="<?php echo $default_url; ?>"
			alt="<?php echo $default_alt; ?>"
			<?php if ( $img_class ) : ?>class="<?php echo $img_class; ?>"<?php endif; ?>
		>
	</picture>
</div>
