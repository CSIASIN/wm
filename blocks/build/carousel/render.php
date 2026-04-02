<?php
$carousel_id     = ! empty( $attributes['anchor'] )       ? esc_attr( $attributes['anchor'] )  : 'carousel-' . wp_unique_id();
$show_indicators = isset( $attributes['showIndicators'] ) ? (bool) $attributes['showIndicators'] : true;
$show_controls   = isset( $attributes['showControls'] )   ? (bool) $attributes['showControls']   : true;
$crossfade       = ! empty( $attributes['crossfade'] );
$autoplay        = isset( $attributes['autoplay'] )       ? (bool) $attributes['autoplay']       : true;
$interval        = isset( $attributes['interval'] )       ? (int)  $attributes['interval']       : 5000;
$pause           = ! empty( $attributes['pauseOnHover'] ) ? 'hover' : 'false';
$touch           = isset( $attributes['touch'] )          ? ( $attributes['touch'] ? 'true' : 'false' ) : 'true';

// Collect slides
$slides = [];
foreach ( $block->inner_blocks as $inner ) {
	if ( $inner->name === 'wmblocks/carousel-slide' ) {
		$slides[] = $inner;
	}
}

// #2 — caption position helper
if ( ! function_exists( 'wm_caption_position_class' ) ) {
	function wm_caption_position_class( $position ) {
		switch ( $position ) {
			case 'top':    return 'carousel-caption-top';
			case 'middle': return 'carousel-caption-middle';
			default:       return '';
		}
	}
}

// #3 — hex + opacity to rgba
if ( ! function_exists( 'wm_hex_to_rgba' ) ) {
	function wm_hex_to_rgba( $hex, $opacity ) {
		$hex = ltrim( $hex, '#' );
		if ( strlen( $hex ) === 3 ) {
			$hex = $hex[0].$hex[0].$hex[1].$hex[1].$hex[2].$hex[2];
		}
		$r = hexdec( substr( $hex, 0, 2 ) );
		$g = hexdec( substr( $hex, 2, 2 ) );
		$b = hexdec( substr( $hex, 4, 2 ) );
		$a = round( $opacity / 100, 2 );
		return "rgba($r, $g, $b, $a)";
	}
}

$carousel_class = 'carousel slide' . ( $crossfade ? ' carousel-fade' : '' );
$wrapper_attributes = get_block_wrapper_attributes( [ 'class' => $carousel_class ] );
?>
<div
	<?php echo $wrapper_attributes; ?>
	id="<?php echo $carousel_id; ?>"
	data-bs-ride="<?php echo $autoplay ? 'carousel' : 'false'; ?>"
	data-bs-interval="<?php echo $interval; ?>"
	data-bs-pause="<?php echo $pause; ?>"
	data-bs-touch="<?php echo $touch; ?>"
>

	<?php if ( $show_indicators && count( $slides ) > 1 ) : ?>
	<div class="carousel-indicators">
		<?php foreach ( $slides as $i => $slide ) : ?>
			<button
				type="button"
				data-bs-target="#<?php echo $carousel_id; ?>"
				data-bs-slide-to="<?php echo $i; ?>"
				<?php echo $i === 0 ? 'class="active" aria-current="true"' : ''; ?>
				aria-label="<?php echo esc_attr( __( 'Slide', 'wmblocks' ) . ' ' . ( $i + 1 ) ); ?>"
			></button>
		<?php endforeach; ?>
	</div>
	<?php endif; ?>

	<div class="carousel-inner">
		<?php foreach ( $slides as $i => $slide ) :
			$attrs           = $slide->attributes;
			$image_url       = ! empty( $attrs['imageUrl'] )       ? esc_url( $attrs['imageUrl'] )    : '';
			$image_alt       = ! empty( $attrs['imageAlt'] )       ? esc_attr( $attrs['imageAlt'] )   : '';
			$caption         = ! empty( $attrs['caption'] )        ? esc_html( $attrs['caption'] )    : '';
			$caption_text    = ! empty( $attrs['captionText'] )    ? esc_html( $attrs['captionText'] ) : '';
			$show_caption    = ! empty( $attrs['showCaption'] );
			$caption_pos     = ! empty( $attrs['captionPosition'] ) ? $attrs['captionPosition'] : 'bottom';
			$caption_color   = ! empty( $attrs['captionBgColor'] )  ? $attrs['captionBgColor']  : '#000000';
			$caption_opacity = isset( $attrs['captionBgOpacity'] )  ? (int) $attrs['captionBgOpacity'] : 50;
			$slide_interval  = ! empty( $attrs['interval'] )        ? (int) $attrs['interval']  : 0;
			$item_class      = 'carousel-item' . ( $i === 0 ? ' active' : '' );

			// #2 — position style
			$pos_style = '';
			if ( $caption_pos === 'top' )    $pos_style = 'top:0; bottom:auto; transform:none;';
			if ( $caption_pos === 'middle' ) $pos_style = 'top:50%; bottom:auto; transform:translateY(-50%);';

			// #3 — caption bg rgba
			$caption_bg = wm_hex_to_rgba( $caption_color, $caption_opacity );
		?>
			<div
				class="<?php echo $item_class; ?>"
				<?php if ( $slide_interval > 0 ) : ?>data-bs-interval="<?php echo $slide_interval; ?>"<?php endif; ?>
			>
				<?php if ( $image_url ) : ?>
					<img src="<?php echo $image_url; ?>" class="d-block w-100" alt="<?php echo $image_alt; ?>">
				<?php else : ?>
					<div class="d-block w-100" style="min-height:400px; background: #6c757d;"></div>
				<?php endif; ?>

				<?php if ( $show_caption && ( $caption || $caption_text ) ) : ?>
				<div
					class="carousel-caption d-none d-md-block"
					style="background:<?php echo esc_attr( $caption_bg ); ?>; padding:16px 20px; border-radius:4px; <?php echo $pos_style; ?>"
				>
					<?php if ( $caption ) : ?>
						<h5><?php echo $caption; ?></h5>
					<?php endif; ?>
					<?php if ( $caption_text ) : ?>
						<p><?php echo $caption_text; ?></p>
					<?php endif; ?>
				</div>
				<?php endif; ?>
			</div>
		<?php endforeach; ?>
	</div>

	<?php if ( $show_controls && count( $slides ) > 1 ) : ?>
	<button class="carousel-control-prev" type="button" data-bs-target="#<?php echo $carousel_id; ?>" data-bs-slide="prev">
		<span class="carousel-control-prev-icon" aria-hidden="true"></span>
		<span class="visually-hidden"><?php esc_html_e( 'Previous', 'wmblocks' ); ?></span>
	</button>
	<button class="carousel-control-next" type="button" data-bs-target="#<?php echo $carousel_id; ?>" data-bs-slide="next">
		<span class="carousel-control-next-icon" aria-hidden="true"></span>
		<span class="visually-hidden"><?php esc_html_e( 'Next', 'wmblocks' ); ?></span>
	</button>
	<?php endif; ?>

</div>
