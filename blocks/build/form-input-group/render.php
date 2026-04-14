<?php
$label       = ! empty( $attributes['label'] )       ? esc_html( $attributes['label'] )       : '';
$name        = ! empty( $attributes['name'] )        ? esc_attr( $attributes['name'] )        : 'ig_' . wp_unique_id();
$type        = ! empty( $attributes['fieldType'] )   ? esc_attr( $attributes['fieldType'] )   : 'text';
$placeholder = ! empty( $attributes['placeholder'] ) ? esc_attr( $attributes['placeholder'] ) : '';
$prepend     = ! empty( $attributes['prepend'] )     ? esc_html( $attributes['prepend'] )     : '';
$append      = ! empty( $attributes['append'] )      ? esc_html( $attributes['append'] )      : '';
$required    = ! empty( $attributes['required'] );
$disabled    = ! empty( $attributes['disabled'] );
$size_cls    = ! empty( $attributes['size'] )        ? esc_attr( $attributes['size'] )        : '';
$help        = ! empty( $attributes['helpText'] )    ? esc_html( $attributes['helpText'] )    : '';
$col         = ! empty( $attributes['colClass'] )    ? esc_attr( $attributes['colClass'] )    : '';
$hide_label  = ! empty( $attributes['hideLabel'] );
$uid         = 'ig-' . wp_unique_id();
$ig_class    = implode( ' ', array_filter( [ 'input-group', $size_cls ], 'strlen' ) );
$wrapper_attributes = get_block_wrapper_attributes( $col ? [ 'class' => $col ] : [] );
?>
<div <?php echo $wrapper_attributes; ?>>
	<div class="mb-3">
		<?php if ( ! $hide_label && $label ) : ?><label for="<?php echo $uid; ?>" class="form-label"><?php echo $label; ?><?php if ( $required ) echo '<span class="text-danger">*</span>'; ?></label><?php endif; ?>
		<div class="<?php echo $ig_class; ?>">
			<?php if ( $prepend ) : ?><span class="input-group-text"><?php echo $prepend; ?></span><?php endif; ?>
			<input type="<?php echo $type; ?>" class="form-control" id="<?php echo $uid; ?>" name="<?php echo $name; ?>"
				<?php if ( $placeholder ) echo 'placeholder="' . $placeholder . '"'; ?>
				<?php if ( $required ) echo 'required'; ?> <?php if ( $disabled ) echo 'disabled'; ?>>
			<?php if ( $append ) : ?><span class="input-group-text"><?php echo $append; ?></span><?php endif; ?>
		</div>
		<?php if ( $help ) : ?><div class="form-text"><?php echo $help; ?></div><?php endif; ?>
	</div>
</div>
