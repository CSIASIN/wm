<?php
$allowed_tags = ['p', 'span', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6'];
$wrapper_tag  = ! empty( $attributes['wrapperTag'] ) && in_array( $attributes['wrapperTag'], $allowed_tags, true ) ? $attributes['wrapperTag'] : 'p';

$content_type = ! empty( $attributes['contentType'] ) ? $attributes['contentType'] : 'text';
$text         = ! empty( $attributes['text'] )        ? wp_kses_post( $attributes['text'] )        : '';
$image_url    = ! empty( $attributes['imageUrl'] )    ? esc_url( $attributes['imageUrl'] )         : '';

$is_inline_flex     = isset( $attributes['isInlineFlex'] )     ? (bool) $attributes['isInlineFlex']     : true;
$is_aligned_center  = isset( $attributes['isAlignedCenter'] )  ? (bool) $attributes['isAlignedCenter']  : true;
$hover_anim         = ! empty( $attributes['hoverAnim'] );

$icon_svg = ! empty( $attributes['iconSvg'] ) ? wp_kses( $attributes['iconSvg'], [
    'svg'  => [ 
        'xmlns' => [], 'width' => [], 'height' => [], 'fill' => [], 
        'viewbox' => [], 'viewBox' => [], 'class' => [], 'aria-hidden' => [], 
        'role' => [], 'style' => [], 'stroke' => [], 'stroke-width' => [] 
    ],
    'path' => [ 
        'd' => [], 'fill-rule' => [], 'clip-rule' => [], 'fill' => [], 
        'style' => [], 'stroke' => [], 'stroke-width' => [] 
    ],
    'g'    => [ 'fill' => [], 'stroke' => [], 'stroke-width' => [], 'style' => [] ],
    'rect' => [ 
        'x' => [], 'y' => [], 'width' => [], 'height' => [], 'rx' => [], 
        'fill' => [], 'style' => [], 'stroke' => [], 'stroke-width' => [] 
    ],
    'circle' => [ 
        'cx' => [], 'cy' => [], 'r' => [], 'fill' => [], 
        'style' => [], 'stroke' => [], 'stroke-width' => [] 
    ],
] ) : '';

$icon_position = ! empty( $attributes['iconPosition'] ) ? $attributes['iconPosition'] : 'start';

$structural_class = implode( ' ', array_filter( [
    $is_inline_flex                       ? 'd-inline-flex'                         : '',
    $is_aligned_center                    ? 'align-items-center'                    : '',
    $hover_anim                           ? 'icon-link-hover'                       : '',
    ! empty( $attributes['textColor'] )   ? esc_attr( $attributes['textColor'] )    : '',
    ! empty( $attributes['underlineClass'] ) ? esc_attr( $attributes['underlineClass'] ) : '',
    ! empty( $attributes['textOpacity'] )  ? esc_attr( $attributes['textOpacity'] )  : '',
    ! empty( $attributes['fontSize'] )    ? esc_attr( $attributes['fontSize'] )     : '',
    ! empty( $attributes['gap'] )         ? esc_attr( $attributes['gap'] )          : '',
    ! empty( $attributes['customClass'] ) ? esc_attr( $attributes['customClass'] )  : '',
], 'strlen' ) );
$anchor  = ! empty( $attributes['anchor'] ) ? ' id="' . esc_attr( $attributes['anchor'] ) . '"' : '';

$wrapper_attributes = get_block_wrapper_attributes( [ 'class' => $structural_class ] );
?>

    <<?php echo $wrapper_tag; ?> <?php echo $anchor; ?> <?php echo $wrapper_attributes; ?>>
        <?php if ( $icon_svg && $icon_position === 'start' ) : ?>
            <?php echo $icon_svg; ?>
        <?php endif; ?>
        
        <span><?php echo $text; ?></span>
        
        <?php if ( $icon_svg && $icon_position === 'end' ) : ?>
            <?php echo $icon_svg; ?>
        <?php endif; ?>
    </<?php echo $wrapper_tag; ?>>
