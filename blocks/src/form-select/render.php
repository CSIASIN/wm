<?php
$label      = ! empty( $attributes['label'] )    ? esc_html( $attributes['label'] )  : '';
$name       = ! empty( $attributes['name'] )     ? esc_attr( $attributes['name'] )   : 'select_' . wp_unique_id();
$options    = ! empty( $attributes['options'] )  ? $attributes['options']             : [];
$multiple   = ! empty( $attributes['multiple'] );
$size_cls   = ! empty( $attributes['size'] )     ? esc_attr( $attributes['size'] )   : '';
$required   = ! empty( $attributes['required'] );
$disabled   = ! empty( $attributes['disabled'] );
$help       = ! empty( $attributes['helpText'] ) ? esc_html( $attributes['helpText'] ) : '';
$col        = ! empty( $attributes['colClass'] ) ? esc_attr( $attributes['colClass'] ) : '';
$hide_label = ! empty( $attributes['hideLabel'] );
$uid        = 'select-' . wp_unique_id();
$select_cls = implode( ' ', array_filter( [ 'form-select', $size_cls ], 'strlen' ) );
$wrapper_attributes = get_block_wrapper_attributes( $col ? [ 'class' => $col ] : [] );
?>
<div <?php echo $wrapper_attributes; ?>>
	<div class="mb-3">
		<?php if ( ! $hide_label && $label ) : ?>
			<label for="<?php echo $uid; ?>" class="form-label"><?php echo $label; ?><?php if ( $required ) echo '<span class="text-danger">*</span>'; ?></label>
		<?php endif; ?>
		<select class="<?php echo $select_cls; ?>" id="<?php echo $uid; ?>" name="<?php echo $name; ?><?php echo $multiple ? '[]' : ''; ?>"
			<?php if ( $multiple ) echo 'multiple'; ?> <?php if ( $required ) echo 'required'; ?> <?php if ( $disabled ) echo 'disabled'; ?>>
			<?php foreach ( $options as $opt ) : ?>
				<option value="<?php echo esc_attr( $opt['value'] ?? '' ); ?>"><?php echo esc_html( $opt['label'] ?? '' ); ?></option>
			<?php endforeach; ?>
		</select>
		<?php if ( $help ) : ?><div class="form-text"><?php echo $help; ?></div><?php endif; ?>
	</div>
</div>
