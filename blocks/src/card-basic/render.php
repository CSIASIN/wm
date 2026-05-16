<?php
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

$wrapper_args = [ 'class' => implode(' ', array_filter($classes)) ];
if (!empty($styles)) {
    $wrapper_args['style'] = implode('; ', $styles);
}

$anchor = !empty($attributes['anchor']) ? ' id="' . esc_attr($attributes['anchor']) . '"' : '';
$wrapper_attributes = get_block_wrapper_attributes($wrapper_args);
?>

<div <?php echo $wrapper_attributes; ?><?php echo $anchor; ?>>
    <div class="card-body">
        <?php echo $content; ?>
    </div>
</div>