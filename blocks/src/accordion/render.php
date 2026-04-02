<?php
$accordion_id = ! empty( $attributes['accordionId'] ) ? esc_attr( $attributes['accordionId'] ) : 'accordion-' . wp_unique_id();
$always_open  = ! empty( $attributes['alwaysOpen'] );
$flush        = ! empty( $attributes['flush'] );

$accordion_class = implode( ' ', array_filter( [
	'accordion',
	$flush ? 'accordion-flush' : '',
], 'strlen' ) );

$wrapper_attributes = get_block_wrapper_attributes();
?>
<div <?php echo $wrapper_attributes; ?>>
	<div class="<?php echo $accordion_class; ?>" id="<?php echo $accordion_id; ?>">
		<?php foreach ( $block->inner_blocks as $item ) :
			if ( $item->name !== 'wmblocks/accordion-item' ) continue;

			$attrs      = $item->attributes;
			$item_id    = ! empty( $attrs['itemId'] )  ? esc_attr( $attrs['itemId'] )  : 'item-' . wp_unique_id();
			$heading    = ! empty( $attrs['heading'] )  ? wp_kses_post( $attrs['heading'] ) : '';
			$start_open = ! empty( $attrs['startOpen'] );

			$btn_class      = 'accordion-button' . ( $start_open ? '' : ' collapsed' );
			$collapse_class = 'accordion-collapse collapse' . ( $start_open ? ' show' : '' );
		?>
			<div class="accordion-item">
				<h2 class="accordion-header" id="heading-<?php echo $item_id; ?>">
					<button
						class="<?php echo $btn_class; ?>"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#collapse-<?php echo $item_id; ?>"
						aria-expanded="<?php echo $start_open ? 'true' : 'false'; ?>"
						aria-controls="collapse-<?php echo $item_id; ?>"
					>
						<?php echo $heading; ?>
					</button>
				</h2>
				<div
					id="collapse-<?php echo $item_id; ?>"
					class="<?php echo $collapse_class; ?>"
					aria-labelledby="heading-<?php echo $item_id; ?>"
					<?php if ( ! $always_open ) : ?>
						data-bs-parent="#<?php echo $accordion_id; ?>"
					<?php endif; ?>
				>
					<div class="accordion-body">
						<?php echo $item->render(); ?>
					</div>
				</div>
			</div>
		<?php endforeach; ?>
	</div>
</div>
