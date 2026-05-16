<?php
/**
 * render.php — wmblocks/card-image
 */

// Gather theme system classes
$classes = [ 'card' ];

// FIX: Explicitly check and assign the shared background color control value
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
$classes[] = $attributes['textAlign'] ?? '';

if ( ! empty( $attributes['borderSides'] ) )  $classes = array_merge( $classes, $attributes['borderSides'] );
if ( ! empty( $attributes['borderRemove'] ) ) $classes = array_merge( $classes, $attributes['borderRemove'] );
if ( ! empty( $attributes['borderColor'] ) )  $classes[] = $attributes['borderColor'];
if ( ! empty( $attributes['noBorder'] ) )     $classes[] = 'border-0';

// Visibility Settings
if ( ! empty( $attributes['hideXs'] ) )  $classes[] = 'd-none d-sm-block';
if ( ! empty( $attributes['hideSm'] ) )  $classes[] = 'd-sm-none d-md-block';
if ( ! empty( $attributes['hideMd'] ) )  $classes[] = 'd-md-none d-lg-block';
if ( ! empty( $attributes['hideLg'] ) )  $classes[] = 'd-lg-none d-xl-block';
if ( ! empty( $attributes['hideXl'] ) )  $classes[] = 'd-xl-none d-xxl-block';
if ( ! empty( $attributes['hideXxl'] ) ) $classes[] = 'd-xxl-none';

// Inline style processor
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

$wrapper_args = [ 'class' => implode( ' ', array_filter( $classes ) ) ];
if ( ! empty( $styles ) ) {
    $wrapper_args['style'] = implode( '; ', $styles );
}

$anchor = ! empty( $attributes['anchor'] ) ? ' id="' . esc_attr( $attributes['anchor'] ) . '"' : '';
$wrapper_attr = get_block_wrapper_attributes( $wrapper_args );

// Image Styling Construction
$image_url  = ! empty( $attributes['imageUrl'] ) ? esc_url( $attributes['imageUrl'] ) : '';
$image_alt  = isset( $attributes['imageAlt'] ) ? esc_attr( $attributes['imageAlt'] ) : '';
$image_pos  = $attributes['imagePosition'] ?? 'top';
$image_col  = esc_attr( $attributes['imageCol'] ?? 'col-md-4' );

$img_h      = ! empty( $attributes['imageHeight'] ) ? esc_attr( $attributes['imageHeight'] ) : '';
$img_w      = ! empty( $attributes['imageWidth'] ) ? esc_attr( $attributes['imageWidth'] ) : '100%';
$img_fit    = ! empty( $attributes['imageObjectFit'] ) ? esc_attr( $attributes['imageObjectFit'] ) : 'cover';

$is_horizontal = in_array( $image_pos, [ 'left', 'right' ], true );
$is_overlay    = $image_pos === 'overlay';

// Compute dynamic inline element style rules for front-end rendering
$fallback_h    = $is_horizontal ? '100%' : '200px';
$resolved_h    = $img_h ? $img_h : $fallback_h;
$img_inline_style = "style=\"width: {$img_w}; height: {$resolved_h}; object-fit: {$img_fit}; display: block;\"";

// Image Tags
$img_top    = $image_url ? '<img src="' . $image_url . '" class="card-img-top" ' . $img_inline_style . ' alt="' . $image_alt . '">' : '';
$img_bottom = $image_url ? '<img src="' . $image_url . '" class="card-img-bottom" ' . $img_inline_style . ' alt="' . $image_alt . '">' : '';
$img_cover  = $image_url ? '<img src="' . $image_url . '" class="card-img" ' . $img_inline_style . ' alt="' . $image_alt . '">' : '';
$img_side   = $image_url ? '<img src="' . $image_url . '" class="img-fluid rounded-start" ' . $img_inline_style . ' alt="' . $image_alt . '">' : '';

// Body Assembly
$title      = ! empty( $attributes['title'] ) ? wp_kses_post( $attributes['title'] ) : '';
$subtitle   = ! empty( $attributes['subtitle'] ) ? wp_kses_post( $attributes['subtitle'] ) : '';
$body_text  = ! empty( $attributes['bodyText'] ) ? wp_kses_post( $attributes['bodyText'] ) : '';
$show_badge = ! empty( $attributes['showBadge'] );
$badge_text = ! empty( $attributes['badgeText'] ) ? wp_kses_post( $attributes['badgeText'] ) : 'New';
$badge_var  = ! empty( $attributes['badgeVariant'] ) ? esc_attr( $attributes['badgeVariant'] ) : 'bg-primary text-white';
$show_link  = ! empty( $attributes['showLink'] );

$badge_html    = $show_badge ? '<span class="badge mb-2 ' . $badge_var . '">' . $badge_text . '</span>' : '';
$subtitle_html = $subtitle ? '<h6 class="card-subtitle mb-2 text-muted">' . $subtitle . '</h6>' : '';

$body_html = '<div class="card-body">';
$body_html .= $badge_html;
$body_html .= '<h5 class="card-title">' . $title . '</h5>';
$body_html .= $subtitle_html;
$body_html .= '<p class="card-text">' . $body_text . '</p>';

if ( $show_link && ! empty( $content ) ) {
    $body_html .= '<div class="wmblocks-button-wrapper mt-3">' . $content . '</div>';
}
$body_html .= '</div>';
?>

<div <?php echo $wrapper_attr; ?><?php echo $anchor; ?>>
    <?php if ( $is_horizontal ) : ?>
        <div class="row g-0">
            <?php if ( $image_pos === 'left' ) : ?>
                <div class="<?php echo $image_col; ?>"><?php echo $img_side; ?></div>
                <div class="col"><?php echo $body_html; ?></div>
            <?php else : ?>
                <div class="col"><?php echo $body_html; ?></div>
                <div class="<?php echo $image_col; ?>"><?php echo $img_side; ?></div>
            <?php endif; ?>
        </div>
    <?php elseif ( $is_overlay ) : ?>
        <?php echo $img_cover; ?>
        <div class="card-img-overlay"><?php echo $body_html; ?></div>
    <?php elseif ( $image_pos === 'bottom' ) : ?>
        <?php echo $body_html; ?>
        <?php echo $img_bottom; ?>
    <?php else : ?>
        <?php echo $img_top; ?>
        <?php echo $body_html; ?>
    <?php endif; ?>
</div>