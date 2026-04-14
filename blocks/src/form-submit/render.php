<?php
$label     = ! empty( $attributes['label'] )     ? esc_html( $attributes['label'] )     : 'Submit';
$variant   = ! empty( $attributes['variant'] )   ? esc_attr( $attributes['variant'] )   : 'btn-primary';
$size      = ! empty( $attributes['size'] )      ? esc_attr( $attributes['size'] )      : '';
$full_w    = ! empty( $attributes['fullWidth'] );
$disabled  = ! empty( $attributes['disabled'] );
$col       = ! empty( $attributes['colClass'] )  ? esc_attr( $attributes['colClass'] )  : '';
$btn_class = implode( ' ', array_filter( [ 'btn', $variant, $size, $full_w ? 'w-100' : '' ], 'strlen' ) );
$wrapper_attributes = get_block_wrapper_attributes( $col ? [ 'class' => $col ] : [] );
?>
<div <?php echo $wrapper_attributes; ?>>
	<div class="mb-3">
		<button type="submit" class="<?php echo $btn_class; ?>" <?php if ( $disabled ) echo 'disabled'; ?>>
			<?php echo $label; ?>
		</button>
	</div>
</div>
