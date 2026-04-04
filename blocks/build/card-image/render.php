<?php
/**
 * render.php — wmblocks/card-image
 */

if ( ! function_exists( 'wmblocks_card_image_classes' ) ) {
	function wmblocks_card_image_classes( array $attrs ): string {
		$ok_bg     = [ '', 'text-bg-primary','text-bg-secondary','text-bg-success','text-bg-danger','text-bg-warning','text-bg-info','text-bg-light','text-bg-dark' ];
		$ok_shadow = [ '', 'shadow-sm', 'shadow', 'shadow-lg' ];
		$ok_align  = [ '', 'text-start', 'text-center', 'text-end' ];
		$bg        = ( isset( $attrs['bgColor'] )   && in_array( $attrs['bgColor'],   $ok_bg,     true ) ) ? $attrs['bgColor']   : '';
		$shadow    = ( isset( $attrs['shadow'] )    && in_array( $attrs['shadow'],    $ok_shadow, true ) ) ? $attrs['shadow']    : '';
		$align     = ( isset( $attrs['textAlign'] ) && in_array( $attrs['textAlign'], $ok_align,  true ) ) ? $attrs['textAlign'] : '';
		$no_border = ! empty( $attrs['noBorder'] );
		return implode( ' ', array_filter( [ 'card', $bg, $shadow, $align, $no_border ? 'border-0' : '' ], 'strlen' ) );
	}
}

$image_url  = ! empty( $attributes['imageUrl'] )      ? esc_url( $attributes['imageUrl'] )         : '';
$image_alt  = isset( $attributes['imageAlt'] )        ? esc_attr( $attributes['imageAlt'] )        : '';
$image_pos  = isset( $attributes['imagePosition'] )   ? $attributes['imagePosition']               : 'top';
$image_col  = isset( $attributes['imageCol'] )        ? esc_attr( $attributes['imageCol'] )        : 'col-md-4';
$title      = ! empty( $attributes['title'] )         ? wp_kses_post( $attributes['title'] )       : '';
$subtitle   = ! empty( $attributes['subtitle'] )      ? wp_kses_post( $attributes['subtitle'] )    : '';
$body_text  = ! empty( $attributes['bodyText'] )      ? wp_kses_post( $attributes['bodyText'] )    : '';
$show_badge = ! empty( $attributes['showBadge'] );
$badge_text = ! empty( $attributes['badgeText'] )     ? wp_kses_post( $attributes['badgeText'] )   : 'New';
$badge_var  = ! empty( $attributes['badgeVariant'] )  ? esc_attr( $attributes['badgeVariant'] )    : 'bg-primary text-white';
$show_link  = ! empty( $attributes['showLink'] );
$link_text  = ! empty( $attributes['linkText'] )      ? wp_kses_post( $attributes['linkText'] )    : 'Go somewhere';
$link_url   = ! empty( $attributes['linkUrl'] )       ? esc_url( $attributes['linkUrl'] )          : '#';
$link_var   = ! empty( $attributes['linkVariant'] )   ? esc_attr( $attributes['linkVariant'] )     : 'btn-primary';

$ok_positions = [ 'top', 'bottom', 'overlay', 'left', 'right' ];
if ( ! in_array( $image_pos, $ok_positions, true ) ) $image_pos = 'top';

$is_horizontal = in_array( $image_pos, [ 'left', 'right' ], true );
$is_overlay    = $image_pos === 'overlay';
$card_classes  = wmblocks_card_image_classes( $attributes );
$wrapper_attr  = get_block_wrapper_attributes();

// ── Image tag helper
$img_top    = $image_url ? '<img src="' . $image_url . '" class="card-img-top" alt="' . $image_alt . '">'    : '';
$img_bottom = $image_url ? '<img src="' . $image_url . '" class="card-img-bottom" alt="' . $image_alt . '">' : '';
$img_cover  = $image_url ? '<img src="' . $image_url . '" class="card-img" alt="' . $image_alt . '">'        : '';
$img_side   = $image_url ? '<img src="' . $image_url . '" class="img-fluid rounded-start h-100 w-100" style="object-fit:cover;" alt="' . $image_alt . '">' : '';

// ── Card body HTML
$badge_html    = $show_badge ? '<span class="badge mb-2 ' . $badge_var . '">' . $badge_text . '</span>' : '';
$subtitle_html = $subtitle   ? '<h6 class="card-subtitle mb-2 text-muted">' . $subtitle . '</h6>' : '';
$link_html     = $show_link  ? '<a href="' . $link_url . '" class="btn ' . $link_var . '">' . $link_text . '</a>' : '';
$body_html     = '<div class="card-body">' . $badge_html . '<h5 class="card-title">' . $title . '</h5>' . $subtitle_html . '<p class="card-text">' . $body_text . '</p>' . $link_html . '</div>';
?>
<div <?php echo $wrapper_attr; ?>>
<div class="<?php echo esc_attr( $card_classes ); ?>">

<?php if ( $is_horizontal ) : ?>
	<div class="row g-0">
		<?php if ( $image_pos === 'left' ) : ?>
			<div class="<?php echo esc_attr( $image_col ); ?>"><?php echo $img_side; ?></div>
			<div class="col"><?php echo $body_html; ?></div>
		<?php else : ?>
			<div class="col"><?php echo $body_html; ?></div>
			<div class="<?php echo esc_attr( $image_col ); ?>"><?php echo $img_side; ?></div>
		<?php endif; ?>
	</div>

<?php elseif ( $is_overlay ) : ?>
	<?php echo $img_cover; ?>
	<div class="card-img-overlay"><?php echo $body_html; ?></div>

<?php elseif ( $image_pos === 'bottom' ) : ?>
	<?php echo $body_html; ?>
	<?php echo $img_bottom; ?>

<?php else : ?>
	<?php echo $img_top; ?>
	<?php echo $body_html; ?>
<?php endif; ?>

</div>
</div>
