<?php
$gap          = ! empty( $attributes['gap'] )         ? esc_attr( $attributes['gap'] )         : 'gap-3';
$custom_class = ! empty( $attributes['customClass'] ) ? esc_attr( $attributes['customClass'] ) : '';

$stack_class = implode( ' ', array_filter( [ 'vstack', $gap, $custom_class ], 'strlen' ) );
$wrapper_attributes = get_block_wrapper_attributes( [ 'class' => $stack_class ] );
?>
<div <?php echo $wrapper_attributes; ?>>
	<?php echo $content; ?>
</div>
