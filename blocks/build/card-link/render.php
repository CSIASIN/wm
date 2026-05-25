<?php
/**
 * Dynamic Render Template for Card Link Block (W3C Standard Compliant)
 */

$content      = ! empty( $attributes['content'] )   ? $attributes['content']         : 'Card link';
$url          = ! empty( $attributes['url'] )       ? $attributes['url']             : '#';
$link_color   = ! empty( $attributes['linkColor'] ) ? esc_attr( $attributes['linkColor'] ) : '';

// Map structural layout selectors
$classes = [ 'card-link', $link_color ];

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
if ( ! empty( $attributes['borderOpacityCustom'] ) ) {
    $styles[] = '--bs-border-opacity:' . esc_attr( $attributes['borderOpacityCustom'] );
}
if ( ! empty( $attributes['customCSS'] ) ) {
    $styles[] = rtrim( esc_attr( $attributes['customCSS'] ), ';' );
}

// Background Image / Gradient
if ( ! empty( $attributes['bgImageUrl'] ) ) {
    $styles[] = 'background-image: url(' . esc_url( $attributes['bgImageUrl'] ) . ')';
    $styles[] = 'background-size: cover';
    $styles[] = 'background-position: center';
} elseif ( ! empty( $attributes['bgGradient'] ) ) {
    $styles[] = 'background-image: ' . esc_attr( $attributes['bgGradient'] );
}

$has_video = ! empty( $attributes['bgVideoUrl'] );
if ( $has_video ) {
    $classes[] = 'position-relative';
    $classes[] = 'overflow-hidden';
    $classes[] = 'd-inline-block'; // Protect inline bounds mapping with active tracking systems
}

$wrapper_args = [ 'class' => implode( ' ', array_filter( array_map( 'trim', $classes ) ) ) ];
if ( ! empty( $styles ) ) {
    $wrapper_args['style'] = implode( '; ', $styles );
}

$wrapper_attr = get_block_wrapper_attributes( $wrapper_args );
$anchor = ! empty( $attributes['anchor'] ) ? ' id="' . esc_attr( $attributes['anchor'] ) . '"' : '';
?>

<a href="<?php echo esc_url( $url ); ?>" <?php echo $wrapper_attr; ?> <?php echo $anchor; ?>>
    <?php if ( $has_video ) : ?>
        <video 
            src="<?php echo esc_url( $attributes['bgVideoUrl'] ); ?>" 
            autoplay muted loop playsinline
            style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: cover; z-index: 0; pointer-events: none;"
        ></video>
        <span style="position: relative; z-index: 1; display: inline-block;">
            <?php echo $content; ?>
        </span>
    <?php else : ?>
        <?php echo $content; ?>
    <?php endif; ?>
</a>