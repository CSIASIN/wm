<?php
/**
 * render.php — wmblocks/hero1
 */

$bg     = ! empty( $attributes['bgColor'] )     ? esc_attr( $attributes['bgColor'] )     : '';
$custom = ! empty( $attributes['customClass'] ) ? esc_attr( $attributes['customClass'] ) : '';

$wrap_class = implode( ' ', array_filter( [ 'px-4 py-5 text-center', $bg, $custom ], 'strlen' ) );
$wrapper_attributes = get_block_wrapper_attributes( [ 'class' => $wrap_class ] );
?>

<div <?php echo $wrapper_attributes; ?>>
    <div class="container py-5">
        <div class="hero-inner-content">
            <?php echo $content; ?>
        </div>
    </div>
</div>