<?php
/**
 * PHP file to use when rendering the card block type on the server to show on the front end.
 */

// Compile Classes
$classes = [ 'card' ];
$classes[] = $attributes['padding'] ?? '';
$classes[] = $attributes['margin'] ?? '';
$classes[] = $attributes['backgroundColor'] ?? '';
$classes[] = $attributes['shadow'] ?? '';
$classes[] = $attributes['borderSize'] ?? '';
$classes[] = $attributes['borderRadius'] ?? '';
$classes[] = $attributes['borderRadiusSize'] ?? '';
$classes[] = $attributes['borderOpacityClass'] ?? '';

// Framework structural classes required for video positioning bounds
$classes[] = 'position-relative';
$classes[] = 'overflow-hidden';

if (!empty($attributes['borderSides'])) $classes = array_merge($classes, $attributes['borderSides']);
if (!empty($attributes['borderRemove'])) $classes = array_merge($classes, $attributes['borderRemove']);
if (!empty($attributes['borderColor'])) $classes[] = $attributes['borderColor'];

// Visibility Logic
if (!empty($attributes['hideXs']))  $classes[] = 'd-none d-sm-block';
if (!empty($attributes['hideSm']))  $classes[] = 'd-sm-none d-md-block';
if (!empty($attributes['hideMd']))  $classes[] = 'd-md-none d-lg-block';
if (!empty($attributes['hideLg']))  $classes[] = 'd-lg-none d-xl-block';
if (!empty($attributes['hideXl']))  $classes[] = 'd-xl-none d-xxl-block';
if (!empty($attributes['hideXxl'])) $classes[] = 'd-xxl-none';

// Compile Styles
$styles = [];

// Advanced Background: Image / Gradient conditional compiler
if ( ! empty( $attributes['bgImageUrl'] ) ) {
    $styles[] = 'background-image: url(' . esc_url( $attributes['bgImageUrl'] ) . ')';
    $styles[] = 'background-size: cover';
    $styles[] = 'background-position: center';
} elseif ( ! empty( $attributes['bgGradient'] ) ) {
    $styles[] = 'background: ' . esc_attr( $attributes['bgGradient'] );
}

if (isset($attributes['opacity']) && (int)$attributes['opacity'] !== 100) {
    $styles[] = 'opacity:' . (floatval($attributes['opacity']) / 100);
}
if (!empty($attributes['textColor'])) {
    $styles[] = 'color:' . esc_attr($attributes['textColor']);
}
if (!empty($attributes['borderOpacityCustom'])) {
    $styles[] = '--bs-border-opacity:' . esc_attr($attributes['borderOpacityCustom']);
}
if (!empty($attributes['customCSS'])) {
    $styles[] = rtrim(esc_attr($attributes['customCSS']), ';');
}

$wrapper_args = [ 'class' => implode(' ', array_filter(array_map('trim', $classes))) ];
if (!empty($styles)) {
    $wrapper_args['style'] = implode('; ', $styles);
}

$anchor = !empty($attributes['anchor']) ? ' id="' . esc_attr($attributes['anchor']) . '"' : '';
$wrapper_attributes = get_block_wrapper_attributes($wrapper_args);
?>

<div <?php echo $wrapper_attributes; ?><?php echo $anchor; ?>>

    <?php /* Advanced Background Layer: HTML5 Video Engine */ ?>
    <?php if ( ! empty( $attributes['bgVideoUrl'] ) ) : ?>
        <video 
            src="<?php echo esc_url( $attributes['bgVideoUrl'] ); ?>" 
            autoplay 
            muted 
            loop 
            playsinline
            style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: cover; z-index: 0; pointer-events: none;"
        ></video>
    <?php endif; ?>

    <?php /* Context Stacking Wrapper: Forces content container cleanly above absolute media engines */ ?>
    <div class="card-body" style="position: relative; z-index: 1; width: 100%; height: 100%;">
        <?php echo $content; ?>
    </div>
    
</div>