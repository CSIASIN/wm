<?php
$type        = ! empty( $attributes['fieldType'] )      ? esc_attr( $attributes['fieldType'] )       : 'text';
$label       = ! empty( $attributes['label'] )          ? esc_html( $attributes['label'] )           : '';
$name        = ! empty( $attributes['name'] )           ? esc_attr( $attributes['name'] )            : 'field_' . wp_unique_id();
$placeholder = ! empty( $attributes['placeholder'] )    ? esc_attr( $attributes['placeholder'] )     : '';
$help        = ! empty( $attributes['helpText'] )       ? esc_html( $attributes['helpText'] )        : '';
$required    = ! empty( $attributes['required'] );
$disabled    = ! empty( $attributes['disabled'] );
$readonly    = ! empty( $attributes['readonly'] );
$hide_label  = ! empty( $attributes['hideLabel'] );
$size        = ! empty( $attributes['size'] )           ? esc_attr( $attributes['size'] )            : '';
$col         = ! empty( $attributes['colClass'] )       ? esc_attr( $attributes['colClass'] )        : '';
$valid_fb    = ! empty( $attributes['validFeedback'] )  ? esc_html( $attributes['validFeedback'] )   : '';
$invalid_fb  = ! empty( $attributes['invalidFeedback'] )? esc_html( $attributes['invalidFeedback'] ) : '';

$uid = 'field-' . wp_unique_id();
$input_class = implode( ' ', array_filter( [ 'form-control', $size ], 'strlen' ) );

$wrapper_attributes = get_block_wrapper_attributes( $col ? [ 'class' => $col ] : [] );

if ( $type === 'hidden' ) :
	echo '<input type="hidden" name="' . $name . '">';
	return;
endif;
?>
<div <?php echo $wrapper_attributes; ?>>
	<div class="mb-3">
		<?php if ( ! $hide_label && $label ) : ?>
			<label for="<?php echo $uid; ?>" class="form-label">
				<?php echo $label; ?>
				<?php if ( $required ) : ?><span class="text-danger">*</span><?php endif; ?>
			</label>
		<?php endif; ?>
		<input
			type="<?php echo $type; ?>"
			class="<?php echo $input_class; ?>"
			id="<?php echo $uid; ?>"
			name="<?php echo $name; ?>"
			<?php if ( $placeholder ) : ?>placeholder="<?php echo $placeholder; ?>"<?php endif; ?>
			<?php if ( $required ) : ?>required<?php endif; ?>
			<?php if ( $disabled ) : ?>disabled<?php endif; ?>
			<?php if ( $readonly ) : ?>readonly<?php endif; ?>
		>
		<?php if ( $valid_fb )   : ?><div class="valid-feedback"><?php echo $valid_fb; ?></div><?php endif; ?>
		<?php if ( $invalid_fb ) : ?><div class="invalid-feedback"><?php echo $invalid_fb; ?></div><?php endif; ?>
		<?php if ( $help )       : ?><div id="<?php echo $uid; ?>Help" class="form-text"><?php echo $help; ?></div><?php endif; ?>
	</div>
</div>
