<?php
/**
 * render.php — wmblocks/div
 */

$classes = [];

if ( ! empty( $attributes['backgroundColor'] ) ) {
    $classes[] = esc_attr( $attributes['backgroundColor'] );
}

$classes[] = $attributes['padding'] ?? '';
$classes[] = $attributes['margin'] ?? '';
$classes[] = $attributes['shadow'] ?? '';
$classes[] = $attributes['borderSize'] ?? '';
$classes[] = $attributes['borderRadius'] ?? '';
$classes[] = $attributes['borderRadiusSize'] ?? '';
$classes[] = $attributes['borderOpacityClass'] ?? '';

if ( ! empty( $attributes['borderSides'] ) )  $classes = array_merge( $classes, $attributes['borderSides'] );
if ( ! empty( $attributes['borderRemove'] ) ) $classes = array_merge( $classes, $attributes['borderRemove'] );
if ( ! empty( $attributes['borderColor'] ) )  $classes[] = $attributes['borderColor'];

// Visibility Settings
if ( ! empty( $attributes['hideXs'] ) )  $classes[] = 'd-none d-sm-block';
if ( ! empty( $attributes['hideSm'] ) )  $classes[] = 'd-sm-none d-md-block';
if ( ! empty( $attributes['hideMd'] ) )  $classes[] = 'd-md-none d-lg-block';
if ( ! empty( $attributes['hideLg'] ) )  $classes[] = 'd-lg-none d-xl-block';
if ( ! empty( $attributes['hideXl'] ) )  $classes[] = 'd-xl-none d-xxl-block';
if ( ! empty( $attributes['hideXxl'] ) ) $classes[] = 'd-xxl-none';

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


// 1. Merge Background Image / Gradient
if ( ! empty( $attributes['bgImageUrl'] ) ) {
    $styles[] = 'background-image: url(' . esc_url( $attributes['bgImageUrl'] ) . ')';
    $styles[] = 'background-size: cover';
    $styles[] = 'background-position: center';
} elseif ( ! empty( $attributes['bgGradient'] ) ) {
    $styles[] = 'background-image: ' . esc_attr( $attributes['bgGradient'] );
}

// Ensure the container handles video overlays properly
$classes[] = 'position-relative';
$classes[] = 'overflow-hidden';

$wrapper_args = [ 'class' => implode( ' ', array_filter( $classes ) ) ];

if ( ! empty( $styles ) ) {
    $wrapper_args['style'] = implode( '; ', $styles );
}

// Ensure the wrapper attributes handle both classes, styles, and the custom block ID anchor.
$wrapper_attr = get_block_wrapper_attributes( $wrapper_args );

?>

<div <?php echo $wrapper_attr; ?>>
    
    <?php /* Render HTML Video tag if a video is set */ ?>
    <?php if ( ! empty( $attributes['bgVideoUrl'] ) ) : ?>
        <video 
            src="<?php echo esc_url( $attributes['bgVideoUrl'] ); ?>" 
            autoplay muted loop playsinline
            style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: cover; z-index: 0; pointer-events: none;"
        ></video>
    <?php endif; ?>

    <?php /* Wrap content so it renders above the video */ ?>
    <div style="position: relative; z-index: 1;">
        <?php echo $content; ?>
    </div>
    
</div>