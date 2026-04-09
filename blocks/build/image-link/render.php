<?php
$layout        = ! empty( $attributes['layoutMode'] )    ? $attributes['layoutMode']                       : 'media';
$url           = ! empty( $attributes['url'] )           ? esc_url( $attributes['url'] )                   : '#';
$new_tab       = ! empty( $attributes['newTab'] );
$stretched     = ! empty( $attributes['stretchedLink'] );
$image_url     = ! empty( $attributes['imageUrl'] )      ? esc_url( $attributes['imageUrl'] )              : '';
$image_alt     = ! empty( $attributes['imageAlt'] )      ? esc_attr( $attributes['imageAlt'] )             : '';
$image_width   = ! empty( $attributes['imageWidth'] )    ? esc_attr( $attributes['imageWidth'] )           : '120px';
$img_class     = ! empty( $attributes['imgClass'] )      ? esc_attr( $attributes['imgClass'] )             : 'img-fluid';
$image_pos     = ! empty( $attributes['imagePosition'] ) ? $attributes['imagePosition']                    : 'start';
$image_gap     = ! empty( $attributes['imageGap'] )      ? esc_attr( $attributes['imageGap'] )             : 'me-3';
$image_align   = ! empty( $attributes['imageAlign'] )    ? esc_attr( $attributes['imageAlign'] )           : 'align-self-start';
$title         = ! empty( $attributes['title'] )         ? wp_kses_post( $attributes['title'] )            : '';
$body          = ! empty( $attributes['body'] )          ? wp_kses_post( $attributes['body'] )             : '';
$link_text     = ! empty( $attributes['linkText'] )      ? esc_html( $attributes['linkText'] )             : 'Go somewhere';
$link_variant  = ! empty( $attributes['linkVariant'] )   ? esc_attr( $attributes['linkVariant'] )          : 'btn-primary';
$show_btn      = isset( $attributes['showLinkBtn'] )     ? (bool) $attributes['showLinkBtn']               : true;
$wrapper_class = ! empty( $attributes['wrapperClass'] )  ? esc_attr( $attributes['wrapperClass'] )         : '';
$shadow        = ! empty( $attributes['shadow'] )        ? esc_attr( $attributes['shadow'] )               : '';
$object_fit    = ! empty( $attributes['objectFit'] )     ? esc_attr( $attributes['objectFit'] )            : '';
$object_height = ! empty( $attributes['objectHeight'] )  ? esc_attr( $attributes['objectHeight'] )         : '';

$target_attr = $new_tab ? ' target="_blank" rel="noopener noreferrer"' : '';
$link_class  = implode( ' ', array_filter( [ 'btn', $link_variant, $stretched ? 'stretched-link' : '' ], 'strlen' ) );
$gap_class   = $image_pos === 'end' ? str_replace( 'me-', 'ms-', $image_gap ) : $image_gap;
$img_style   = 'width:' . $image_width . ';' . ( $object_height ? 'height:' . $object_height . ';' : '' ) . ( $object_fit ? 'object-fit:' . str_replace( 'object-fit-', '', $object_fit ) . ';' : '' );
$full_img_class = implode( ' ', array_filter( [ $img_class, $object_fit ], 'strlen' ) );

$wrapper_attributes = get_block_wrapper_attributes();
?>
<div <?php echo $wrapper_attributes; ?>>

<?php if ( $layout === 'image' ) : ?>
	<?php /* ── Plain Image Link ── */ ?>
	<a href="<?php echo $url; ?>"<?php echo $target_attr; ?>>
		<?php if ( $image_url ) : ?>
			<img src="<?php echo $image_url; ?>" alt="<?php echo $image_alt; ?>" class="<?php echo $full_img_class; ?>" style="<?php echo $img_style; ?>">
		<?php endif; ?>
	</a>

<?php elseif ( $layout === 'card' ) : ?>
	<?php /* ── Stretched Card ── */ ?>
	<div class="<?php echo implode( ' ', array_filter( [ 'card position-relative', $shadow, $wrapper_class ], 'strlen' ) ); ?>">
		<?php if ( $image_url ) : ?>
			<img src="<?php echo $image_url; ?>" class="<?php echo implode( ' ', array_filter( [ 'card-img-top', $full_img_class ], 'strlen' ) ); ?>"
				alt="<?php echo $image_alt; ?>"
				<?php if ( $object_height ) : ?>style="height:<?php echo $object_height; ?>;object-fit:<?php echo $object_fit ? str_replace( 'object-fit-', '', $object_fit ) : 'cover'; ?>;"<?php endif; ?>>
		<?php endif; ?>
		<div class="card-body">
			<?php if ( $title ) : ?><h5 class="card-title"><?php echo $title; ?></h5><?php endif; ?>
			<?php if ( $body )  : ?><p class="card-text"><?php echo $body; ?></p><?php endif; ?>
			<?php if ( $show_btn ) : ?>
				<a href="<?php echo $url; ?>" class="<?php echo $link_class; ?>"<?php echo $target_attr; ?>><?php echo $link_text; ?></a>
			<?php endif; ?>
		</div>
	</div>

<?php else : ?>
	<?php /* ── Media Object ── */ ?>
	<div class="<?php echo implode( ' ', array_filter( [ 'd-flex position-relative', $image_pos === 'end' ? 'flex-row-reverse' : '', $shadow, $wrapper_class ], 'strlen' ) ); ?>">
		<?php if ( $image_url ) : ?>
			<div class="<?php echo $image_align . ' ' . $gap_class; ?>" style="flex-shrink:0;">
				<img src="<?php echo $image_url; ?>" alt="<?php echo $image_alt; ?>" class="<?php echo $full_img_class; ?>" style="<?php echo $img_style; ?>">
			</div>
		<?php endif; ?>
		<div>
			<?php if ( $title ) : ?><h5 class="mt-0"><?php echo $title; ?></h5><?php endif; ?>
			<?php if ( $body )  : ?><p><?php echo $body; ?></p><?php endif; ?>
			<?php if ( $show_btn ) : ?>
				<a href="<?php echo $url; ?>" class="<?php echo $link_class; ?>"<?php echo $target_attr; ?>><?php echo $link_text; ?></a>
			<?php endif; ?>
		</div>
	</div>
<?php endif; ?>

</div>
