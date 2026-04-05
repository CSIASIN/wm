<?php
$media_type  = ! empty( $attributes['mediaType'] )   ? $attributes['mediaType']                          : 'image';
$image_url   = ! empty( $attributes['imageUrl'] )    ? esc_url( $attributes['imageUrl'] )                : '';
$image_alt   = ! empty( $attributes['imageAlt'] )    ? esc_attr( $attributes['imageAlt'] )               : '';
$video_url   = ! empty( $attributes['videoUrl'] )    ? esc_url( $attributes['videoUrl'] )                : '';
$iframe_src  = ! empty( $attributes['iframeSrc'] )   ? esc_url( $attributes['iframeSrc'] )               : '';
$iframe_title = ! empty( $attributes['iframeTitle'] ) ? esc_attr( $attributes['iframeTitle'] )           : 'Embedded content';
$width       = ! empty( $attributes['width'] )       ? esc_attr( $attributes['width'] )                  : '100%';
$height      = ! empty( $attributes['height'] )      ? esc_attr( $attributes['height'] )                 : '300px';
$autoplay    = ! empty( $attributes['autoplay'] );
$muted       = ! empty( $attributes['muted'] );
$loop        = ! empty( $attributes['loop'] );
$controls    = isset( $attributes['controls'] ) ? (bool) $attributes['controls'] : true;
$allow_fs    = isset( $attributes['allowFullscreen'] ) ? (bool) $attributes['allowFullscreen'] : true;

// Build media element class
$media_class = implode( ' ', array_filter( [
	! empty( $attributes['objectFit'] )   ? esc_attr( $attributes['objectFit'] )   : '',
	! empty( $attributes['objectFitSm'] ) ? esc_attr( $attributes['objectFitSm'] ) : '',
	! empty( $attributes['objectFitMd'] ) ? esc_attr( $attributes['objectFitMd'] ) : '',
	! empty( $attributes['objectFitLg'] ) ? esc_attr( $attributes['objectFitLg'] ) : '',
	! empty( $attributes['objectFitXl'] ) ? esc_attr( $attributes['objectFitXl'] ) : '',
	! empty( $attributes['rounded'] )     ? esc_attr( $attributes['rounded'] )     : '',
	! empty( $attributes['customClass'] ) ? esc_attr( $attributes['customClass'] ) : '',
], 'strlen' ) );

$size_style = 'width:' . $width . ';height:' . $height . ';';

$wrapper_attributes = get_block_wrapper_attributes();
?>
<div <?php echo $wrapper_attributes; ?>>
	<?php if ( $media_type === 'image' && $image_url ) : ?>
		<img
			src="<?php echo $image_url; ?>"
			alt="<?php echo $image_alt; ?>"
			<?php if ( $media_class ) : ?>class="<?php echo $media_class; ?>"<?php endif; ?>
			style="<?php echo $size_style; ?>"
		>

	<?php elseif ( $media_type === 'video' && $video_url ) : ?>
		<video
			<?php if ( $media_class ) : ?>class="<?php echo $media_class; ?>"<?php endif; ?>
			style="<?php echo $size_style; ?>"
			<?php if ( $autoplay )  : ?>autoplay<?php endif; ?>
			<?php if ( $muted )     : ?>muted<?php endif; ?>
			<?php if ( $loop )      : ?>loop<?php endif; ?>
			<?php if ( $controls )  : ?>controls<?php endif; ?>
		>
			<source src="<?php echo $video_url; ?>">
		</video>

	<?php elseif ( $media_type === 'iframe' && $iframe_src ) : ?>
		<iframe
			src="<?php echo $iframe_src; ?>"
			title="<?php echo $iframe_title; ?>"
			<?php if ( $media_class ) : ?>class="<?php echo $media_class; ?>"<?php endif; ?>
			style="<?php echo $size_style; ?>border:0;"
			<?php if ( $allow_fs ) : ?>allowfullscreen<?php endif; ?>
			loading="lazy"
		></iframe>
	<?php endif; ?>
</div>
