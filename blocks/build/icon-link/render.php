<?php
$url           = ! empty( $attributes['url'] )           ? esc_url( $attributes['url'] )                 : '#';
$new_tab       = ! empty( $attributes['newTab'] );
$link_text     = ! empty( $attributes['linkText'] )      ? wp_kses_post( $attributes['linkText'] )        : '';
$icon_svg      = ! empty( $attributes['iconSvg'] )       ? wp_kses( $attributes['iconSvg'], [
	'svg'  => [ 'xmlns' => [], 'width' => [], 'height' => [], 'fill' => [], 'viewbox' => [], 'viewBox' => [], 'class' => [], 'aria-hidden' => [], 'role' => [] ],
	'path' => [ 'd' => [], 'fill-rule' => [], 'clip-rule' => [], 'fill' => [] ],
	'g'    => [ 'fill' => [], 'stroke' => [] ],
	'rect' => [ 'x' => [], 'y' => [], 'width' => [], 'height' => [], 'rx' => [], 'fill' => [] ],
	'circle' => [ 'cx' => [], 'cy' => [], 'r' => [], 'fill' => [] ],
	'polyline' => [ 'points' => [], 'fill' => [], 'stroke' => [] ],
] ) : '';
$icon_position = ! empty( $attributes['iconPosition'] )  ? $attributes['iconPosition']                   : 'start';
$hover_anim    = ! empty( $attributes['hoverAnim'] );

$link_class = implode( ' ', array_filter( [
	'icon-link',
	$hover_anim                                ? 'icon-link-hover'                          : '',
	! empty( $attributes['linkColor'] )        ? esc_attr( $attributes['linkColor'] )       : '',
	! empty( $attributes['linkUnderline'] )    ? esc_attr( $attributes['linkUnderline'] )   : '',
	! empty( $attributes['linkOpacity'] )      ? esc_attr( $attributes['linkOpacity'] )     : '',
	! empty( $attributes['fontSize'] )         ? esc_attr( $attributes['fontSize'] )        : '',
	! empty( $attributes['gap'] )              ? esc_attr( $attributes['gap'] )             : '',
	! empty( $attributes['customClass'] )      ? esc_attr( $attributes['customClass'] )     : '',
], 'strlen' ) );

$target = $new_tab ? ' target="_blank" rel="noopener noreferrer"' : '';

$wrapper_attributes = get_block_wrapper_attributes();
?>
<div <?php echo $wrapper_attributes; ?>>
	<a href="<?php echo $url; ?>" class="<?php echo $link_class; ?>"<?php echo $target; ?>>
		<?php if ( $icon_svg && $icon_position === 'start' ) : ?>
			<?php echo $icon_svg; ?>
		<?php endif; ?>
		<?php echo $link_text; ?>
		<?php if ( $icon_svg && $icon_position === 'end' ) : ?>
			<?php echo $icon_svg; ?>
		<?php endif; ?>
	</a>
</div>
