<?php
/**
 * Dynamic Render Template for Card Header (Flat Markup)
 */

$anchor  = ! empty( $attributes['anchor'] ) ? ' id="' . esc_attr( $attributes['anchor'] ) . '"' : '';
$content = ! empty( $attributes['content'] ) ? $attributes['content'] : 'Featured';
$styles  = [];

if ( ! empty( $attributes['bgImageUrl'] ) ) {
    $styles[] = 'background-image: url(' . esc_url( $attributes['bgImageUrl'] ) . '); background-size: cover; background-position: center;';
} elseif ( ! empty( $attributes['bgGradient'] ) ) {
    $styles[] = 'background: ' . esc_attr( $attributes['bgGradient'] ) . ';';
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

$classes = [ 
    'card-header', 
    $has_video ? 'position-relative overflow-hidden' : '', 
    $attributes['padding'] ?? '', 
    $attributes['margin'] ?? '', 
    $attributes['backgroundColor'] ?? '', 
    $attributes['shadow'] ?? '', 
    $attributes['borderSize'] ?? '', 
    $attributes['borderRadius'] ?? '', 
    $attributes['borderRadiusSize'] ?? '', 
    $attributes['borderOpacityClass'] ?? '' 
];

if ( ! empty( $attributes['borderSides'] ) )   $classes = array_merge( $classes, $attributes['borderSides'] );
if ( ! empty( $attributes['borderRemove'] ) )  $classes = array_merge( $classes, $attributes['borderRemove'] );
if ( ! empty( $attributes['borderColor'] ) )   $classes[] = $attributes['borderColor'];

if ( ! empty( $attributes['hideXs'] ) )  $classes[] = 'd-none d-sm-block';
if ( ! empty( $attributes['hideSm'] ) )  $classes[] = 'd-sm-none d-md-block';
if ( ! empty( $attributes['hideMd'] ) )  $classes[] = 'd-md-none d-lg-block';
if ( ! empty( $attributes['hideLg'] ) )  $classes[] = 'd-lg-none d-xl-block';
if ( ! empty( $attributes['hideXl'] ) )  $classes[] = 'd-xl-none d-xxl-block';
if ( ! empty( $attributes['hideXxl'] ) ) $classes[] = 'd-xxl-none';

$wrapper_args = [ 'class' => implode( ' ', array_filter( array_map( 'trim', $classes ) ) ) ];
if ( ! empty( $styles ) ) { 
    $wrapper_args['style'] = implode( '; ', $styles ); 
}
?>
<div <?php echo get_block_wrapper_attributes( $wrapper_args ); ?> <?php echo $anchor; ?>>
    <?php if ( $has_video ) : ?>
        <video src="<?php echo esc_url( $attributes['bgVideoUrl'] ); ?>" autoplay muted loop playsinline style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: cover; z-index: 0; pointer-events: none;"></video>
        <span style="position: relative; z-index: 1; display: block; width: 100%;">
            <?php echo $content; ?>
        </span>
    <?php else : ?>
        <?php echo $content; ?>
    <?php endif; ?>
</div>