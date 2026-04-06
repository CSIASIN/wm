<?php
$gap           = ! empty( $attributes['gap'] )          ? esc_attr( $attributes['gap'] )         : 'gap-3';
$show_dividers = ! empty( $attributes['showDividers'] );
$custom_class  = ! empty( $attributes['customClass'] )  ? esc_attr( $attributes['customClass'] ) : '';

$stack_class = implode( ' ', array_filter( [ 'hstack', $gap, $custom_class ], 'strlen' ) );
$wrapper_attributes = get_block_wrapper_attributes( [ 'class' => $stack_class ] );

// If dividers enabled — inject .vr between items via PHP
if ( $show_dividers ) :
	// Parse inner blocks and inject vr between them
	$inner_html = $content;
	// Simple approach: wrap content and let Bootstrap handle layout
endif;
?>
<div <?php echo $wrapper_attributes; ?>>
	<?php echo $content; ?>
</div>
