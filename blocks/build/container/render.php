<?php
/**
 * PHP file to use when rendering the block type on the server to show on the front end.
 *
 * The following variables are exposed to the file:
 *     $attributes (array): The block attributes.
 *     $content (string): The block default content.
 *     $block (WP_Block): The block instance.
 *
 * @see https://github.com/WordPress/gutenberg/blob/trunk/docs/reference-guides/block-api/block-metadata.md#render
 */
?>
<?php
$padding = isset( $attributes['padding'] ) ? esc_attr( $attributes['padding'] ) : '';
$background      = ! empty( $attributes['backgroundColor'] ) ? ' ' . esc_attr( $attributes['backgroundColor'] ) : '';
$anchor  = ! empty( $attributes['anchor'] ) ? ' id="' . esc_attr( $attributes['anchor'] ) . '"' : '';
$custom_css = ! empty( $attributes['customCSS'] ) ? ' style="' . esc_attr( $attributes['customCSS'] ) . '"' : '';
$margin     = isset( $attributes['margin'] )      ? esc_attr( $attributes['margin'] )      : '';
 $shadow             = ! empty( $attributes['shadow'] )            ? esc_attr( trim( $attributes['shadow'] ) )               : '';
 // Visibility classes — one per breakpoint
$visibility = '';
if ( ! empty( $attributes['hideXs'] ) )  $visibility .= ' d-none d-sm-block';
if ( ! empty( $attributes['hideSm'] ) )  $visibility .= ' d-sm-none d-md-block';
if ( ! empty( $attributes['hideMd'] ) )  $visibility .= ' d-md-none d-lg-block';
if ( ! empty( $attributes['hideLg'] ) )  $visibility .= ' d-lg-none d-xl-block';
if ( ! empty( $attributes['hideXl'] ) )  $visibility .= ' d-xl-none d-xxl-block';
if ( ! empty( $attributes['hideXxl'] ) ) $visibility .= ' d-xxl-none';


 // Border classes
$border_sides         = ! empty( $attributes['borderSides'] )      ? ' ' . implode( ' ', array_map( 'esc_attr', $attributes['borderSides'] ) ) : '';
$border_remove        = ! empty( $attributes['borderRemove'] )     ? ' ' . implode( ' ', array_map( 'esc_attr', $attributes['borderRemove'] ) ) : '';
$border_color         = ! empty( $attributes['borderColor'] )      ? ' ' . esc_attr( $attributes['borderColor'] )   : '';
$border_opacity_class = ! empty( $attributes['borderOpacityClass'] ) ? ' ' . esc_attr( $attributes['borderOpacityClass'] ) : '';
$border_size          = ! empty( $attributes['borderSize'] )       ? ' ' . esc_attr( $attributes['borderSize'] )    : '';
$border_radius        = ! empty( $attributes['borderRadius'] )     ? ' ' . esc_attr( $attributes['borderRadius'] )  : '';
$border_radius_size   = ! empty( $attributes['borderRadiusSize'] ) ? ' ' . esc_attr( $attributes['borderRadiusSize'] ) : '';
// Build inline styles array — all in one place, passed into wrapper attributes
$styles = [];
if ( isset( $attributes['opacity'] ) && (int) $attributes['opacity'] !== 100 ) {
	$styles[] = 'opacity:' . ( floatval( $attributes['opacity'] ) / 100 );
}
if ( ! empty( $attributes['textColor'] ) ) {
	$styles[] = 'color:' . esc_attr( $attributes['textColor'] );
}
if ( ! empty( $attributes['borderOpacityCustom'] ) ) {
	$styles[] = '--bs-border-opacity:' . esc_attr( $attributes['borderOpacityCustom'] );
}
if ( ! empty( $attributes['customCSS'] ) ) {
	$styles[] = rtrim( esc_attr( $attributes['customCSS'] ), ';' );
}
 
$all_classes = implode( ' ', array_filter( [
	'container',
	$padding,
	$margin,
	$background,
	$shadow,
	$border_sides,
	$border_remove,
	$border_color,
	$border_opacity_class,
	$border_size,
	$border_radius,
	$border_radius_size,
	$visibility,
], 'strlen' ) );
 
// Pass BOTH class and style into get_block_wrapper_attributes so they are merged into one style attribute
$wrapper_args = array( 'class' => $all_classes );
if ( ! empty( $styles ) ) {
	$wrapper_args['style'] = implode( '; ', $styles );
}
 
$wrapper_attributes = get_block_wrapper_attributes( $wrapper_args );
?>
<div <?php echo $wrapper_attributes; ?><?php echo $anchor; ?>>
	<?php esc_html_e( 'Container block from wordpress used mostly in grid rows and columns!', 'wm' ); ?>
</div>