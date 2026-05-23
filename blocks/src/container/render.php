<?php
/**
 * PHP file to use when rendering the block type on the server to show on the front end.
 */
$anchor  = ! empty( $attributes['anchor'] ) ? ' id="' . esc_attr( $attributes['anchor'] ) . '"' : '';
$padding    = isset( $attributes['padding'] ) ? esc_attr( $attributes['padding'] ) : '';
$background = ! empty( $attributes['backgroundColor'] ) ? ' ' . esc_attr( $attributes['backgroundColor'] ) : '';
$margin     = isset( $attributes['margin'] )      ? esc_attr( $attributes['margin'] )      : '';
$shadow     = ! empty( $attributes['shadow'] )            ? esc_attr( trim( $attributes['shadow'] ) )               : '';
$container_type = isset( $attributes['containerType'] )   ? esc_attr( $attributes['containerType'] ) : 'container-fluid';

// Visibility classes — one per breakpoint
$visibility = '';
if ( ! empty( $attributes['hideXs'] ) )  $visibility .= ' d-none d-sm-block';
if ( ! empty( $attributes['hideSm'] ) )  $visibility .= ' d-sm-none d-md-block';
if ( ! empty( $attributes['hideMd'] ) )  $visibility .= ' d-md-none d-lg-block';
if ( ! empty( $attributes['hideLg'] ) )  $visibility .= ' d-lg-none d-xl-block';
if ( ! empty( $attributes['hideXl'] ) )  $visibility .= ' d-xl-none d-xxl-block';
if ( ! empty( $attributes['hideXxl'] ) ) $visibility .= ' d-xxl-none';

// Border classes
$border_sides         = ! empty( $attributes['borderSides'] )       ? ' ' . implode( ' ', array_map( 'esc_attr', $attributes['borderSides'] ) ) : '';
$border_remove        = ! empty( $attributes['borderRemove'] )      ? ' ' . implode( ' ', array_map( 'esc_attr', $attributes['borderRemove'] ) ) : '';
$border_color         = ! empty( $attributes['borderColor'] )       ? ' ' . esc_attr( $attributes['borderColor'] )   : '';
$border_opacity_class = ! empty( $attributes['borderOpacityClass'] ) ? ' ' . esc_attr( $attributes['borderOpacityClass'] ) : '';
$border_size          = ! empty( $attributes['borderSize'] )        ? ' ' . esc_attr( $attributes['borderSize'] )    : '';
$border_radius        = ! empty( $attributes['borderRadius'] )      ? ' ' . esc_attr( $attributes['borderRadius'] )  : '';
$border_radius_size   = ! empty( $attributes['borderRadiusSize'] )  ? ' ' . esc_attr( $attributes['borderRadiusSize'] ) : '';

// Build inline styles array
$styles = [];

// Advanced Background: Image / Gradient conditional integration
if ( ! empty( $attributes['bgImageUrl'] ) ) {
    $styles[] = 'background-image: url(' . esc_url( $attributes['bgImageUrl'] ) . ')';
    $styles[] = 'background-size: cover';
    $styles[] = 'background-position: center';
} elseif ( ! empty( $attributes['bgGradient'] ) ) {
    $styles[] = 'background: ' . esc_attr( $attributes['bgGradient'] );
}

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

$has_video = ! empty( $attributes['bgVideoUrl'] );
 
$class_list = [
    $container_type,
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
];

// Context structure attributes logic handles background tracking layers
if ( $has_video ) {
    $class_list[] = 'position-relative';
    $class_list[] = 'overflow-hidden';
}

$wrapper_args = array( 'class' => implode( ' ', array_filter( array_map( 'trim', $class_list ), 'strlen' ) ) );

if ( ! empty( $styles ) ) {
    $wrapper_args['style'] = implode( '; ', $styles );
}
 
$wrapper_attributes = get_block_wrapper_attributes( $wrapper_args );
?>
<div <?php echo $wrapper_attributes; ?> <?php echo $anchor; ?>>

    <?php if ( $has_video ) : ?>
        <video 
            src="<?php echo esc_url( $attributes['bgVideoUrl'] ); ?>" 
            autoplay 
            muted 
            loop 
            playsinline
            style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: cover; z-index: 0; pointer-events: none;"
        ></video>

        <div style="position: relative; z-index: 1; width: 100%; height: 100%;">
            <?php echo $content; ?>
        </div>
    <?php else : ?>
        <?php echo $content; ?>
    <?php endif; ?>
    
</div>