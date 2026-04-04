<?php
$image_url        = ! empty( $attributes['imageUrl'] )        ? esc_url( $attributes['imageUrl'] )         : '';
$image_alt        = ! empty( $attributes['imageAlt'] )        ? esc_attr( $attributes['imageAlt'] )        : '';
$image_width      = ! empty( $attributes['imageWidth'] )      ? esc_attr( $attributes['imageWidth'] )      : '128px';
$image_position   = ! empty( $attributes['imagePosition'] )   ? $attributes['imagePosition']               : 'start';
$image_align      = ! empty( $attributes['imageAlign'] )      ? esc_attr( $attributes['imageAlign'] )      : 'align-self-start';
$image_class      = ! empty( $attributes['imageClass'] )      ? esc_attr( $attributes['imageClass'] )      : 'img-fluid';
$image_gap        = ! empty( $attributes['imageGap'] )        ? esc_attr( $attributes['imageGap'] )        : 'me-3';
$image_url2       = ! empty( $attributes['imageUrl2'] )       ? esc_url( $attributes['imageUrl2'] )        : '';
$image_alt2       = ! empty( $attributes['imageAlt2'] )       ? esc_attr( $attributes['imageAlt2'] )       : '';
$show_second      = ! empty( $attributes['showSecondImage'] );

// Gap class — flip me-* to ms-* when image is on the right
$gap_class = $image_position === 'end'
	? str_replace( 'me-', 'ms-', $image_gap )
	: $image_gap;

$wrapper_attributes = get_block_wrapper_attributes();
?>
<div <?php echo $wrapper_attributes; ?>>
	<div class="d-flex<?php echo $image_position === 'end' ? ' flex-row-reverse' : ''; ?>">

		<?php /* ── Left / Start image ── */ ?>
		<?php if ( $image_position === 'start' && $image_url ) : ?>
			<div class="<?php echo $image_align . ' ' . $gap_class; ?>" style="flex-shrink:0;">
				<img
					src="<?php echo $image_url; ?>"
					alt="<?php echo $image_alt; ?>"
					class="<?php echo $image_class; ?>"
					style="width:<?php echo $image_width; ?>;"
				>
			</div>
		<?php endif; ?>

		<?php /* ── Content ── */ ?>
		<div class="flex-grow-1">
			<?php echo $content; ?>
		</div>

		<?php /* ── Right / End image ── */ ?>
		<?php if ( $image_position === 'end' && $image_url ) : ?>
			<div class="<?php echo $image_align . ' ' . $gap_class; ?>" style="flex-shrink:0;">
				<img
					src="<?php echo $image_url; ?>"
					alt="<?php echo $image_alt; ?>"
					class="<?php echo $image_class; ?>"
					style="width:<?php echo $image_width; ?>;"
				>
			</div>
		<?php endif; ?>

		<?php /* ── Second image (both sides) ── */ ?>
		<?php if ( $show_second && $image_url2 ) : ?>
			<div class="<?php echo $image_align; ?> ms-3" style="flex-shrink:0;">
				<img
					src="<?php echo $image_url2; ?>"
					alt="<?php echo $image_alt2; ?>"
					class="<?php echo $image_class; ?>"
					style="width:<?php echo $image_width; ?>;"
				>
			</div>
		<?php endif; ?>

	</div>
</div>
