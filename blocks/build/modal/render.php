<?php
$modal_id         = ! empty( $attributes['modalId'] )         ? esc_attr( $attributes['modalId'] )         : 'modal-' . wp_unique_id();
$trigger_text     = ! empty( $attributes['triggerText'] )     ? esc_html( $attributes['triggerText'] )     : 'Launch Modal';
$trigger_variant  = ! empty( $attributes['triggerVariant'] )  ? esc_attr( $attributes['triggerVariant'] )  : 'btn-primary';
$modal_title      = ! empty( $attributes['modalTitle'] )      ? wp_kses_post( $attributes['modalTitle'] )  : 'Modal';
$modal_size       = ! empty( $attributes['modalSize'] )       ? ' ' . esc_attr( $attributes['modalSize'] ) : '';
$centered         = ! empty( $attributes['centered'] );
$scrollable       = ! empty( $attributes['scrollable'] );
$static_backdrop  = ! empty( $attributes['staticBackdrop'] );
$show_footer      = isset( $attributes['showFooter'] ) ? (bool) $attributes['showFooter'] : true;
$close_btn_text   = ! empty( $attributes['closeButtonText'] )  ? esc_html( $attributes['closeButtonText'] )  : 'Close';
$save_btn_text    = ! empty( $attributes['saveButtonText'] )   ? esc_html( $attributes['saveButtonText'] )   : 'Save changes';
$save_btn_variant = ! empty( $attributes['saveButtonVariant'] ) ? esc_attr( $attributes['saveButtonVariant'] ) : 'btn-primary';

$dialog_class = implode( ' ', array_filter( [
	'modal-dialog',
	$modal_size,
	$centered   ? 'modal-dialog-centered'   : '',
	$scrollable ? 'modal-dialog-scrollable' : '',
], 'strlen' ) );

$wrapper_attributes = get_block_wrapper_attributes();
?>

<?php /* ── Trigger Button ── */ ?>
<button
	type="button"
	class="btn <?php echo $trigger_variant; ?>"
	data-bs-toggle="modal"
	data-bs-target="#<?php echo $modal_id; ?>"
>
	<?php echo $trigger_text; ?>
</button>

<?php /* ── Modal ── */ ?>
<div
	class="modal fade"
	id="<?php echo $modal_id; ?>"
	tabindex="-1"
	aria-labelledby="<?php echo $modal_id; ?>Label"
	aria-hidden="true"
	<?php if ( $static_backdrop ) : ?>
		data-bs-backdrop="static"
		data-bs-keyboard="false"
	<?php endif; ?>
>
	<div class="<?php echo $dialog_class; ?>">
		<div class="modal-content">

			<div class="modal-header">
				<h5 class="modal-title" id="<?php echo $modal_id; ?>Label">
					<?php echo $modal_title; ?>
				</h5>
				<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="<?php esc_attr_e( 'Close', 'wmblocks' ); ?>"></button>
			</div>

			<div class="modal-body" <?php echo $wrapper_attributes; ?>>
				<?php echo $content; ?>
			</div>

			<?php if ( $show_footer ) : ?>
			<div class="modal-footer">
				<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
					<?php echo $close_btn_text; ?>
				</button>
				<button type="button" class="btn <?php echo $save_btn_variant; ?>">
					<?php echo $save_btn_text; ?>
				</button>
			</div>
			<?php endif; ?>

		</div>
	</div>
</div>
