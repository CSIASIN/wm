<?php
$label      = ! empty( $attributes['label'] )    ? esc_html( $attributes['label'] )  : '';
$name       = ! empty( $attributes['name'] )     ? esc_attr( $attributes['name'] )   : 'range_' . wp_unique_id();
$min        = isset( $attributes['min'] )        ? (int) $attributes['min']           : 0;
$max        = isset( $attributes['max'] )        ? (int) $attributes['max']           : 100;
$step       = isset( $attributes['step'] )       ? (int) $attributes['step']          : 1;
$value      = isset( $attributes['value'] )      ? (int) $attributes['value']         : 50;
$disabled   = ! empty( $attributes['disabled'] );
$help       = ! empty( $attributes['helpText'] ) ? esc_html( $attributes['helpText'] ) : '';
$col        = ! empty( $attributes['colClass'] ) ? esc_attr( $attributes['colClass'] ) : '';
$hide_label = ! empty( $attributes['hideLabel'] );
$uid = 'range-' . wp_unique_id();
$wrapper_attributes = get_block_wrapper_attributes( $col ? [ 'class' => $col ] : [] );
?>
<div <?php echo $wrapper_attributes; ?>>
	<div class="mb-3">
		<?php if ( ! $hide_label && $label ) : ?><label for="<?php echo $uid; ?>" class="form-label"><?php echo $label; ?></label><?php endif; ?>
		<input type="range" class="form-range" id="<?php echo $uid; ?>" name="<?php echo $name; ?>"
			min="<?php echo $min; ?>" max="<?php echo $max; ?>" step="<?php echo $step; ?>" value="<?php echo $value; ?>"
			<?php if ( $disabled ) echo 'disabled'; ?>>
		<?php if ( $help ) : ?><div class="form-text"><?php echo $help; ?></div><?php endif; ?>
	</div>
</div>
