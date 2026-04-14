<?php
$label      = ! empty( $attributes['label'] )       ? esc_html( $attributes['label'] )       : '';
$name       = ! empty( $attributes['name'] )        ? esc_attr( $attributes['name'] )        : 'textarea_' . wp_unique_id();
$placeholder= ! empty( $attributes['placeholder'] ) ? esc_attr( $attributes['placeholder'] ) : '';
$rows       = isset( $attributes['rows'] )          ? (int) $attributes['rows']               : 3;
$required   = ! empty( $attributes['required'] );
$disabled   = ! empty( $attributes['disabled'] );
$readonly   = ! empty( $attributes['readonly'] );
$help       = ! empty( $attributes['helpText'] )    ? esc_html( $attributes['helpText'] )    : '';
$col        = ! empty( $attributes['colClass'] )    ? esc_attr( $attributes['colClass'] )    : '';
$hide_label = ! empty( $attributes['hideLabel'] );
$uid        = 'textarea-' . wp_unique_id();
$wrapper_attributes = get_block_wrapper_attributes( $col ? [ 'class' => $col ] : [] );
?>
<div <?php echo $wrapper_attributes; ?>>
	<div class="mb-3">
		<?php if ( ! $hide_label && $label ) : ?><label for="<?php echo $uid; ?>" class="form-label"><?php echo $label; ?><?php if ( $required ) echo '<span class="text-danger">*</span>'; ?></label><?php endif; ?>
		<textarea class="form-control" id="<?php echo $uid; ?>" name="<?php echo $name; ?>" rows="<?php echo $rows; ?>"
			<?php if ( $placeholder ) echo 'placeholder="' . $placeholder . '"'; ?>
			<?php if ( $required ) echo 'required'; ?> <?php if ( $disabled ) echo 'disabled'; ?> <?php if ( $readonly ) echo 'readonly'; ?>></textarea>
		<?php if ( $help ) : ?><div class="form-text"><?php echo $help; ?></div><?php endif; ?>
	</div>
</div>
