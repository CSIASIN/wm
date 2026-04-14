<?php
$type        = ! empty( $attributes['fieldType'] )   ? esc_attr( $attributes['fieldType'] )   : 'text';
$label       = ! empty( $attributes['label'] )       ? esc_html( $attributes['label'] )       : '';
$name        = ! empty( $attributes['name'] )        ? esc_attr( $attributes['name'] )        : 'float_' . wp_unique_id();
$placeholder = ! empty( $attributes['placeholder'] ) ? esc_attr( $attributes['placeholder'] ) : ' ';
$required    = ! empty( $attributes['required'] );
$disabled    = ! empty( $attributes['disabled'] );
$col         = ! empty( $attributes['colClass'] )    ? esc_attr( $attributes['colClass'] )    : '';
$uid         = 'float-' . wp_unique_id();
$wrapper_attributes = get_block_wrapper_attributes( $col ? [ 'class' => $col ] : [] );
?>
<div <?php echo $wrapper_attributes; ?>>
	<div class="form-floating mb-3">
		<input type="<?php echo $type; ?>" class="form-control" id="<?php echo $uid; ?>" name="<?php echo $name; ?>"
			placeholder="<?php echo $placeholder ?: ' '; ?>"
			<?php if ( $required ) echo 'required'; ?> <?php if ( $disabled ) echo 'disabled'; ?>>
		<label for="<?php echo $uid; ?>"><?php echo $label; ?><?php if ( $required ) echo '<span class="text-danger">*</span>'; ?></label>
	</div>
</div>
