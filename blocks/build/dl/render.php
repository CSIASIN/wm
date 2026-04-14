<?php
$aligned      = ! empty( $attributes['aligned'] );
$dt_col       = ! empty( $attributes['dtCol'] )       ? esc_attr( $attributes['dtCol'] )       : 'col-sm-3';
$dd_col       = ! empty( $attributes['ddCol'] )       ? esc_attr( $attributes['ddCol'] )       : 'col-sm-9';
$items        = ! empty( $attributes['items'] )       ? $attributes['items']                   : [];
$custom_class = ! empty( $attributes['customClass'] ) ? esc_attr( $attributes['customClass'] ) : '';

$wrapper_attributes = get_block_wrapper_attributes();
?>
<div <?php echo $wrapper_attributes; ?>>
	<dl<?php if ( $custom_class ) echo ' class="' . $custom_class . '"'; ?>>
		<?php foreach ( $items as $item ) :
			$term = ! empty( $item['term'] ) ? esc_html( $item['term'] ) : '';
			$desc = ! empty( $item['desc'] ) ? wp_kses_post( $item['desc'] ) : '';
		?>
			<?php if ( $aligned ) : ?>
				<div class="row">
					<dt class="<?php echo $dt_col; ?>"><?php echo $term; ?></dt>
					<dd class="<?php echo $dd_col; ?>"><?php echo $desc; ?></dd>
				</div>
			<?php else : ?>
				<dt><?php echo $term; ?></dt>
				<dd><?php echo $desc; ?></dd>
			<?php endif; ?>
		<?php endforeach; ?>
	</dl>
</div>
