<?php

/**
 * render.php — wmblocks/card-image
 */

$classes = ['card'];

if (! empty($attributes['backgroundColor'])) {
    $classes[] = esc_attr($attributes['backgroundColor']);
}

$classes[] = $attributes['padding'] ?? '';
$classes[] = $attributes['margin'] ?? '';
$classes[] = $attributes['shadow'] ?? '';
$classes[] = $attributes['borderSize'] ?? '';
$classes[] = $attributes['borderRadius'] ?? '';
$classes[] = $attributes['borderRadiusSize'] ?? '';
$classes[] = $attributes['borderOpacityClass'] ?? '';
$classes[] = $attributes['textAlign'] ?? '';

if (! empty($attributes['borderSides']))  $classes = array_merge($classes, $attributes['borderSides']);
if (! empty($attributes['borderRemove'])) $classes = array_merge($classes, $attributes['borderRemove']);
if (! empty($attributes['borderColor']))  $classes[] = $attributes['borderColor'];
if (! empty($attributes['noBorder']))     $classes[] = 'border-0';

// Visibility Settings
if (! empty($attributes['hideXs']))  $classes[] = 'd-none d-sm-block';
if (! empty($attributes['hideSm']))  $classes[] = 'd-sm-none d-md-block';
if (! empty($attributes['hideMd']))  $classes[] = 'd-md-none d-lg-block';
if (! empty($attributes['hideLg']))  $classes[] = 'd-lg-none d-xl-block';
if (! empty($attributes['hideXl']))  $classes[] = 'd-xl-none d-xxl-block';
if (! empty($attributes['hideXxl'])) $classes[] = 'd-xxl-none';

$styles = [];
if (isset($attributes['opacity']) && (int) $attributes['opacity'] !== 100) {
    $styles[] = 'opacity:' . (floatval($attributes['opacity']) / 100);
}
if (! empty($attributes['textColor'])) {
    $styles[] = 'color:' . esc_attr($attributes['textColor']);
}
if (! empty($attributes['borderOpacityCustom'])) {
    $styles[] = '--bs-border-opacity:' . esc_attr($attributes['borderOpacityCustom']);
}
if (! empty($attributes['customCSS'])) {
    $styles[] = rtrim(esc_attr($attributes['customCSS']), ';');
}

$wrapper_args = ['class' => implode(' ', array_filter($classes))];
if (! empty($styles)) {
    $wrapper_args['style'] = implode('; ', $styles);
}

$anchor = ! empty($attributes['anchor']) ? ' id="' . esc_attr($attributes['anchor']) . '"' : '';
$wrapper_attr = get_block_wrapper_attributes($wrapper_args);

// --- DYNAMIC ASSET COMPILATION ---
$media_type    = $attributes['mediaType'] ?? 'image';
$image_url     = ! empty($attributes['imageUrl']) ? esc_url($attributes['imageUrl']) : '';
$image_alt     = isset($attributes['imageAlt']) ? esc_attr($attributes['imageAlt']) : '';
$image_pos     = $attributes['imagePosition'] ?? 'top';
$image_col     = esc_attr($attributes['imageCol'] ?? 'col-md-4');
$is_horizontal = in_array($image_pos, ['left', 'right'], true);
$is_overlay    = $image_pos === 'overlay';

$asset_html = '';

$asset_classes = [];
if ($is_horizontal) {
    $asset_classes[] = 'rounded-start';
} elseif ($image_pos === 'bottom') {
    $asset_classes[] = 'card-img-bottom';
} elseif ($is_overlay) {
    $asset_classes[] = 'card-img';
} else {
    $asset_classes[] = 'card-img-top';
}

if (! empty($attributes['imageBorderSides']))    $asset_classes = array_merge($asset_classes, $attributes['imageBorderSides']);
if (! empty($attributes['imageBorderRemove']))   $asset_classes = array_merge($asset_classes, $attributes['imageBorderRemove']);
if (! empty($attributes['imageDisplayClass']))   $asset_classes[] = esc_attr($attributes['imageDisplayClass']);
if (! empty($attributes['imageAlignClass']))     $asset_classes[] = esc_attr($attributes['imageAlignClass']);
if (! empty($attributes['imageBorderColor']))    $asset_classes[] = esc_attr($attributes['imageBorderColor']);
if (! empty($attributes['imageBorderOpacityClass'])) $asset_classes[] = esc_attr($attributes['imageBorderOpacityClass']);
if (! empty($attributes['imageBorderSize']))     $asset_classes[] = esc_attr($attributes['imageBorderSize']);
if (! empty($attributes['imageBorderRadius']))   $asset_classes[] = esc_attr($attributes['imageBorderRadius']);
if (! empty($attributes['imageBorderRadiusSize'])) $asset_classes[] = esc_attr($attributes['imageBorderRadiusSize']);

$asset_styles = [];
$asset_styles[] = 'width: ' . (! empty($attributes['imageWidth']) ? esc_attr($attributes['imageWidth']) : '100%');

$fallback_h    = $is_horizontal ? '100%' : '200px';
$asset_styles[] = 'height: ' . (! empty($attributes['imageHeight']) ? esc_attr($attributes['imageHeight']) : $fallback_h);
$asset_styles[] = 'object-fit: ' . (! empty($attributes['imageObjectFit']) ? esc_attr($attributes['imageObjectFit']) : 'cover');

if (! empty($attributes['imageAlignClass']) && strpos($attributes['imageAlignClass'], 'd-block') !== false) {
    $asset_styles[] = 'display: block';
} else {
    $asset_styles[] = 'display: inline-block';
}

if (! empty($attributes['imageBorderOpacityCustom'])) {
    $asset_styles[] = '--bs-border-opacity: ' . esc_attr($attributes['imageBorderOpacityCustom']);
}

if ($media_type === 'icon') {
    $icon_svg = ! empty($attributes['iconSvg']) ? $attributes['iconSvg'] : '';
    if ($icon_svg) {
        $sanitized_svg = wp_kses($icon_svg, [
            'svg'      => [ 'xmlns' => [], 'width' => [], 'height' => [], 'fill' => [], 'viewbox' => [], 'viewBox' => [], 'class' => [], 'aria-hidden' => [], 'role' => [], 'style' => [], 'stroke' => [], 'stroke-width' => [] ],
            'path'     => [ 'd' => [], 'fill-rule' => [], 'clip-rule' => [], 'fill' => [], 'stroke' => [], 'stroke-width' => [], 'style' => [], 'stroke-linecap' => [], 'stroke-linejoin' => [] ],
            'g'        => [ 'fill' => [], 'stroke' => [], 'stroke-width' => [], 'style' => [] ],
            'rect'     => [ 'x' => [], 'y' => [], 'width' => [], 'height' => [], 'rx' => [], 'ry' => [], 'fill' => [], 'stroke' => [], 'stroke-width' => [], 'style' => [] ],
            'circle'   => [ 'cx' => [], 'cy' => [], 'r' => [], 'fill' => [], 'stroke' => [], 'stroke-width' => [], 'style' => [] ],
            'polyline' => [ 'points' => [], 'fill' => [], 'stroke' => [], 'stroke-width' => [], 'style' => [] ],
            'line'     => [ 'x1' => [], 'y1' => [], 'x2' => [], 'y2' => [], 'stroke' => [], 'stroke-width' => [], 'style' => [] ]
        ]);

        if (! empty($attributes['iconColor'])) {
            $asset_styles[] = 'color: ' . esc_attr($attributes['iconColor']);
        }
        $asset_styles[] = 'display: flex';
        $asset_styles[] = 'align-items: center';
        $asset_styles[] = 'justify-content: center';

        $asset_html = '<div class="wmblocks-div-container wmblocks-card-icon-box ' . implode(' ', array_filter($asset_classes)) . '" style="' . implode('; ', $asset_styles) . '">' . $sanitized_svg . '</div>';
    }
} else {
    if ($image_url) {
        $asset_html = '<img src="' . $image_url . '" class="' . implode(' ', array_filter($asset_classes)) . '" style="' . implode('; ', $asset_styles) . '" alt="' . $image_alt . '">';
    }
}

// Body Assembly
$title         = ! empty($attributes['title']) ? wp_kses_post($attributes['title']) : '';
$subtitle      = ! empty($attributes['subtitle']) ? wp_kses_post($attributes['subtitle']) : '';
$body_text     = ! empty($attributes['bodyText']) ? wp_kses_post($attributes['bodyText']) : '';
$show_badge    = ! empty($attributes['showBadge']);
$badge_text    = ! empty($attributes['badgeText']) ? wp_kses_post($attributes['badgeText']) : 'New';
$badge_var     = ! empty($attributes['badgeVariant']) ? esc_attr($attributes['badgeVariant']) : 'bg-primary text-white';
$show_link     = ! empty($attributes['showLink']);

$badge_html    = $show_badge ? '<span class="badge mb-2 ' . $badge_var . '">' . $badge_text . '</span>' : '';
$subtitle_html = $subtitle ? '<h6 class="card-subtitle mb-2 text-muted">' . $subtitle . '</h6>' : '';

$body_html = '<div class="card-body">';
$body_html .= $badge_html;
$body_html .= '<h5 class="card-title">' . $title . '</h5>';
$body_html .= $subtitle_html;
$body_html .= '<p class="card-text">' . $body_text . '</p>';

if ($show_link && ! empty($content)) {
    $body_html .= '<div class="wmblocks-button-wrapper mt-3">' . $content . '</div>';
}
$body_html .= '</div>';
?>

<div <?php echo $wrapper_attr; ?><?php echo $anchor; ?>>
    <?php if ($is_horizontal) : ?>
        <div class="row g-0">
            <?php if ($image_pos === 'left') : ?>
                <div class="<?php echo $image_col; ?>"><?php echo $asset_html; ?></div>
                <div class="col"><?php echo $body_html; ?></div>
            <?php else : ?>
                <div class="col"><?php echo $body_html; ?></div>
                <div class="<?php echo $image_col; ?>"><?php echo $asset_html; ?></div>
            <?php endif; ?>
        </div>
    <?php elseif ($is_overlay) : ?>
        <?php echo $asset_html; ?>
        <div class="card-img-overlay"><?php echo $body_html; ?></div>
    <?php elseif ($image_pos === 'bottom') : ?>
        <?php echo $body_html; ?>
        <?php echo $asset_html; ?>
    <?php else : ?>
        <?php echo $asset_html; ?>
        <?php echo $body_html; ?>
    <?php endif; ?>
</div>