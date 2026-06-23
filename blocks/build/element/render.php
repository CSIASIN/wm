<?php
/**
 * render.php — wmblocks/element
 */

// 1. Tag Validation & Assignment
$allowed_tags = ['div', 'p', 'span', 'header', 'section', 'main'];
$tag = ( ! empty( $attributes['tagName'] ) && in_array( $attributes['tagName'], $allowed_tags, true ) ) ? $attributes['tagName'] : 'div';

static $has_printed_typography_css = false;
/**
 * 2. CHECK IF USER HAS ACTUALLY INTERVENED IN TYPOGRAPHY CONTROLS
 * If everything is completely default/empty, this block leaves global styles untouched.
 */
$has_typography_changes = ! empty( $attributes['fontFamily'] ) ||
                          ! empty( $attributes['fontWeight'] ) ||
                          ! empty( $attributes['textDecoration'] ) ||
                          ! empty( $attributes['textTransform'] ) ||
                          ! empty( $attributes['textFillColor'] ) ||
                          ! empty( $attributes['textStrokeColor'] ) ||
                          ( ! empty( $attributes['textShadowType'] ) && $attributes['textShadowType'] !== 'none' ) ||
                          ! empty( $attributes['fontSizeXs'] ) || ! empty( $attributes['fontSizeSm'] ) ||
                          ! empty( $attributes['fontSizeMd'] ) || ! empty( $attributes['fontSizeLg'] ) ||
                          ! empty( $attributes['fontSizeXl'] ) || ! empty( $attributes['fontSizeXxl'] ) ||
                          ! empty( $attributes['lineHeightXs'] ) || ! empty( $attributes['lineHeightSm'] ) ||
                          ! empty( $attributes['lineHeightMd'] ) || ! empty( $attributes['lineHeightLg'] ) ||
                          ! empty( $attributes['lineHeightXl'] ) || ! empty( $attributes['lineHeightXxl'] ) ||
                          ! empty( $attributes['letterSpacingXs'] ) || ! empty( $attributes['letterSpacingSm'] ) ||
                          ! empty( $attributes['letterSpacingMd'] ) || ! empty( $attributes['letterSpacingLg'] ) ||
                          ! empty( $attributes['letterSpacingXl'] ) || ! empty( $attributes['letterSpacingXxl'] ) ||
                          ! empty( $attributes['textIndentXs'] ) || ! empty( $attributes['textIndentSm'] ) ||
                          ! empty( $attributes['textIndentMd'] ) || ! empty( $attributes['textIndentLg'] ) ||
                          ! empty( $attributes['textIndentXl'] ) || ! empty( $attributes['textIndentXxl'] );

// 3. Load Custom Google Font ONLY if family is deliberately set
if ( ! empty( $attributes['fontFamily'] ) ) {
    $font_name = $attributes['fontFamily'];
    $font_url  = "https://fonts.googleapis.com/css2?family=" . str_replace( ' ', '+', $font_name ) . ":wght@100;300;400;600;700;900&display=swap";
    echo '<link rel="stylesheet" href="' . esc_url( $font_url ) . '" type="text/css" media="all" />';
}


$anchor  = ! empty( $attributes['anchor'] ) ? ' id="' . esc_attr( $attributes['anchor'] ) . '"' : '';
$classes = ['element'];

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

// Responsive Display Matrix
if ( ! empty( $attributes['hideXs'] ) )  $classes[] = 'd-none d-sm-block';
if ( ! empty( $attributes['hideSm'] ) )  $classes[] = 'd-sm-none d-md-block';
if ( ! empty( $attributes['hideMd'] ) )  $classes[] = 'd-md-none d-lg-block';
if ( ! empty( $attributes['hideLg'] ) )  $classes[] = 'd-lg-none d-xl-block';
if ( ! empty( $attributes['hideXl'] ) )  $classes[] = 'd-xl-none d-xxl-block';
if ( ! empty( $attributes['hideXxl'] ) ) $classes[] = 'd-xxl-none';

// Standard Baseline Styles Array
$standard_styles = [];

if ( isset( $attributes['opacity'] ) && (int) $attributes['opacity'] !== 100 ) {
    $standard_styles[] = 'opacity:' . ( floatval( $attributes['opacity'] ) / 100 );
}
if ( ! empty( $attributes['textColor'] ) ) {
    $standard_styles[] = 'color:' . esc_attr( $attributes['textColor'] );
}
if ( ! empty( $attributes['borderOpacityCustom'] ) ) {
    $standard_styles[] = '--bs-border-opacity:' . esc_attr( $attributes['borderOpacityCustom'] );
}
if ( ! empty( $attributes['customCSS'] ) ) {
    $standard_styles[] = rtrim( esc_attr( $attributes['customCSS'] ), ';' );
}

if ( ! empty( $attributes['bgImageUrl'] ) ) {
    $standard_styles[] = 'background-image: url(' . esc_url( $attributes['bgImageUrl'] ) . ')';
    $standard_styles[] = 'background-size: cover';
    $standard_styles[] = 'background-position: center';
} elseif ( ! empty( $attributes['bgGradient'] ) ) {
    $standard_styles[] = 'background-image: ' . esc_attr( $attributes['bgGradient'] );
}

/**
 * 4. CONDITIONAL TYPOGRAPHY SYSTEM ENGAGEMENT
 * We only target classes and print layouts if modifications are explicitly active.
 */
if ( $has_typography_changes ) {
    $classes[] = 'wmblocks-typography-target'; 
    $typography_styles = get_wm_typography_styles( $attributes );
    
    if ( ! empty( $typography_styles ) ) {
        $standard_styles = array_merge( $standard_styles, $typography_styles );
    }

    // Print the CSS structural stylesheet ONLY once, and ONLY when needed
    if ( ! $has_printed_typography_css ) {
        ?>
        <style id="wmblocks-typography-engine-layout">
            .wmblocks-typography-target {
                font-size: var(--wm-font-size-xs);
                line-height: var(--wm-line-height-xs);
                letter-spacing: var(--wm-letter-spacing-xs);
                text-indent: var(--wm-text-indent-xs);
            }
            .wmblocks-typography-target p,
            .wmblocks-typography-target h1,
            .wmblocks-typography-target h2,
            .wmblocks-typography-target h3,
            .wmblocks-typography-target h4,
            .wmblocks-typography-target h5,
            .wmblocks-typography-target h6,
            .wmblocks-typography-target span,
            .wmblocks-typography-target a {
                font-size: inherit !important;
                line-height: inherit !important;
                letter-spacing: inherit !important;
                text-indent: inherit !important;
                font-family: inherit;
                font-weight: inherit;
                text-decoration: inherit;
                text-transform: inherit;
                -webkit-text-fill-color: inherit;
                -webkit-text-stroke-width: inherit;
                -webkit-text-stroke-color: inherit;
                text-shadow: inherit;
            }
            @media (min-width: 576px) { .wmblocks-typography-target { font-size: var(--wm-font-size-sm, var(--wm-font-size-xs)); line-height: var(--wm-line-height-sm, var(--wm-line-height-xs)); letter-spacing: var(--wm-letter-spacing-sm, var(--wm-letter-spacing-xs)); text-indent: var(--wm-text-indent-sm, var(--wm-text-indent-xs)); } }
            @media (min-width: 768px) { .wmblocks-typography-target { font-size: var(--wm-font-size-md, var(--wm-font-size-sm)); line-height: var(--wm-line-height-md, var(--wm-line-height-xs)); letter-spacing: var(--wm-letter-spacing-md, var(--wm-letter-spacing-xs)); text-indent: var(--wm-text-indent-md, var(--wm-text-indent-xs)); } }
            @media (min-width: 992px) { .wmblocks-typography-target { font-size: var(--wm-font-size-lg, var(--wm-font-size-md)); line-height: var(--wm-line-height-lg, var(--wm-line-height-xs)); letter-spacing: var(--wm-letter-spacing-lg, var(--wm-letter-spacing-xs)); text-indent: var(--wm-text-indent-lg, var(--wm-text-indent-xs)); } }
            @media (min-width: 1200px) { .wmblocks-typography-target { font-size: var(--wm-font-size-xl, var(--wm-font-size-lg)); line-height: var(--wm-line-height-xl, var(--wm-line-height-xs)); letter-spacing: var(--wm-letter-spacing-xl, var(--wm-letter-spacing-xs)); text-indent: var(--wm-text-indent-xl, var(--wm-text-indent-xs)); } }
            @media (min-width: 1400px) { .wmblocks-typography-target { font-size: var(--wm-font-size-xxl, var(--wm-font-size-xl)); line-height: var(--wm-line-height-xxl, var(--wm-line-height-xs)); letter-spacing: var(--wm-letter-spacing-xxl, var(--wm-letter-spacing-xs)); text-indent: var(--wm-text-indent-xxl, var(--wm-text-indent-xs)); } }
        </style>
        <?php
        $has_printed_typography_css = true;
    }
}

$has_drop_cap      = ! empty( $attributes['dropCap'] );
if ( $has_drop_cap ) {
    $classes[] = 'has-drop-cap';
}

$has_video = ! empty( $attributes['bgVideoUrl'] );
if ( $has_video ) {
    $classes[] = 'position-relative';
    $classes[] = 'overflow-hidden';
}

// Build standard safe arguments string
$wrapper_args = [ 'class' => implode( ' ', array_filter( array_map( 'trim', $classes ) ) ) ];
if ( ! empty( $standard_styles ) ) {
    $wrapper_args['style'] = implode( '; ', $standard_styles );
}

$wrapper_attr = get_block_wrapper_attributes( $wrapper_args );

// Combine standard rules with our un-sanitized custom typography array safely
$all_styles = $standard_styles;
if ( ! empty( $typography_styles ) ) {
    $all_styles = array_merge( $all_styles, $typography_styles );
}
$compiled_style_string = ! empty( $all_styles ) ? ' style="' . esc_attr( implode( '; ', $all_styles ) ) . '"' : '';

// 5. Inject our manual style overwrite block to bypass safecss_filter_attr strips
$clean_wrapper_attr = preg_replace( '/style="[^"]*"/', '', $wrapper_attr );
?>

<<?php echo $tag; ?> <?php echo $clean_wrapper_attr; ?> <?php echo $compiled_style_string; ?> <?php echo $anchor; ?>>
    <?php if ( $has_video ) : ?>
        <video 
            src="<?php echo esc_url( $attributes['bgVideoUrl'] ); ?>" 
            autoplay muted loop playsinline
            style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: cover; z-index: 0; pointer-events: none;"
        ></video>
        
        <div style="position: relative; z-index: 1;">
            <?php echo $content; ?>
        </div>
    <?php else : ?>
        <?php echo $content; ?>
    <?php endif; ?>
</<?php echo $tag; ?>>