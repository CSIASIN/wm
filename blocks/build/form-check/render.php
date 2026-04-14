<?php
$type     = ! empty( $attributes['checkType'] ) ? $attributes['checkType']              : 'checkbox';
$label    = ! empty( $attributes['label'] )     ? esc_html( $attributes['label'] )      : '';
$name     = ! empty( $attributes['name'] )      ? esc_attr( $attributes['name'] )       : 'check_' . wp_unique_id();
$value    = ! empty( $attributes['value'] )     ? esc_attr( $attributes['value'] )      : '1';
$checked  = ! empty( $attributes['checked'] );
$disabled = ! empty( $attributes['disabled'] );
$inline   = ! empty( $attributes['inline'] );
$reverse  = ! empty( $attributes['reverse'] );
$col      = ! empty( $attributes['colClass'] )  ? esc_attr( $attributes['colClass'] )   : '';
$is_switch = $type === 'switch';
$uid = 'check-' . wp_unique_id();

$div_class = implode( ' ', array_filter( [ 'form-check', $is_switch ? 'form-switch' : '', $inline ? 'form-check-inline' : '', $reverse ? 'form-check-reverse' : '' ], 'strlen' ) );
$wrapper_attributes = get_block_wrapper_attributes( $col ? [ 'class' => $col ] : [] );
?>
<div <?php echo $wrapper_attributes; ?>>
	<div class="<?php echo $div_class; ?> mb-2">
		<input class="form-check-input" type="<?php echo $is_switch ? 'checkbox' : $type; ?>"
			id="<?php echo $uid; ?>" name="<?php echo $name; ?>" value="<?php echo $value; ?>"
			<?php if ( $is_switch ) echo 'role="switch"'; ?>
			<?php if ( $checked )   echo 'checked'; ?>
			<?php if ( $disabled )  echo 'disabled'; ?>
		>
		<?php if ( $label ) : ?><label class="form-check-label" for="<?php echo $uid; ?>"><?php echo $label; ?></label><?php endif; ?>
	</div>
</div>
