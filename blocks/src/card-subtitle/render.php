<?php
/**
 * Dynamic Render Template for Heading Block (W3C Standard Compliant)
 */

$level        = isset( $attributes['level'] )         ? (int) $attributes['level']        : 2;
$content      = ! empty( $attributes['content'] )     ? $attributes['content']            : '';
$display_cls  = ! empty( $attributes['displayClass'] ) ? esc_attr( $attributes['displayClass'] ) : '';
$text_align   = ! empty( $attributes['textAlign'] )    ? esc_attr( $attributes['textAlign'] )    : '';
$text_color   = ! empty( $attributes['textColor'] )    ? esc_attr( $attributes['textColor'] )    : '';
$font_weight  = ! empty( $attributes['fontWeight'] )   ? esc_attr( $attributes['fontWeight'] )   : '';
$custom_class = ! empty( $attributes['customClass'] )  ? esc_attr( $attributes['customClass'] )  : '';

$level = max( 1, min( 6, $level ) );
$tag   = 'h' . $level;

// Combine typography modifiers with container design frameworks
$classes = [ $display_cls, $text_align, $text_color, $font_weight, $custom_class ];

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

// Background Processing
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
}

$wrapper_args = [ 'class' => implode( ' ', array_filter( array_map( 'trim', $classes ) ) ) ];
if ( ! empty( $styles ) ) {
    $wrapper_args['style'] = implode( '; ', $styles );
}

$wrapper_attr = get_block_wrapper_attributes( $wrapper_args );
$anchor = ! empty( $attributes['anchor'] ) ? ' id="' . esc_attr( $attributes['anchor'] ) . '"' : '';
?>

<<?php echo $tag; ?> <?php echo $wrapper_attr; ?> <?php echo $anchor; ?>>
    <?php if ( $has_video ) : ?>
        <video 
            src="<?php echo esc_url( $attributes['bgVideoUrl'] ); ?>" 
            autoplay muted loop playsinline
            style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: cover; z-index: 0; pointer-events: none;"
        ></video>
        <span style="position: relative; z-index: 1; display: block; width: 100%;">
            <?php echo $content; ?>
        </span>
    <?php else : ?>
        <?php echo $content; ?>
    <?php endif; ?>
</<?php echo $tag; ?>>