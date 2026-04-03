<?php
$toast_id       = ! empty( $attributes['toastId'] )       ? esc_attr( $attributes['toastId'] )       : 'toast-' . wp_unique_id();
$trigger_text   = ! empty( $attributes['triggerText'] )   ? esc_html( $attributes['triggerText'] )   : 'Show Toast';
$trigger_variant = ! empty( $attributes['triggerVariant'] ) ? esc_attr( $attributes['triggerVariant'] ) : 'btn-primary';
$show_trigger   = isset( $attributes['showTrigger'] )     ? (bool) $attributes['showTrigger']        : true;
$toast_title    = ! empty( $attributes['toastTitle'] )    ? wp_kses_post( $attributes['toastTitle'] )   : '';
$toast_subtitle = ! empty( $attributes['toastSubtitle'] ) ? wp_kses_post( $attributes['toastSubtitle'] ) : '';
$toast_body     = ! empty( $attributes['toastBody'] )     ? wp_kses_post( $attributes['toastBody'] )     : '';
$show_header    = isset( $attributes['showHeader'] )      ? (bool) $attributes['showHeader']         : true;
$show_close     = isset( $attributes['showClose'] )       ? (bool) $attributes['showClose']          : true;
$autohide       = isset( $attributes['autohide'] )        ? (bool) $attributes['autohide']           : true;
$delay          = isset( $attributes['delay'] )           ? (int)  $attributes['delay']              : 5000;
$position       = ! empty( $attributes['position'] )      ? esc_attr( $attributes['position'] )      : 'bottom-0 end-0';
$color_variant  = ! empty( $attributes['colorVariant'] )  ? esc_attr( $attributes['colorVariant'] )  : '';

$toast_class = implode( ' ', array_filter( [ 'toast', $color_variant ], 'strlen' ) );

$wrapper_attributes = get_block_wrapper_attributes();
?>
<div <?php echo $wrapper_attributes; ?>>

	<?php if ( $show_trigger ) : ?>
	<button
		type="button"
		class="btn <?php echo $trigger_variant; ?>"
		id="<?php echo $toast_id; ?>-trigger"
		onclick="(function(){ var el = document.getElementById('<?php echo $toast_id; ?>'); if(el && window.bootstrap){ new bootstrap.Toast(el).show(); } })()"
	>
		<?php echo $trigger_text; ?>
	</button>
	<?php endif; ?>

	<?php /* Toast container — fixed position */ ?>
	<div class="toast-container position-fixed <?php echo $position; ?> p-3" style="z-index:1200;">
		<div
			id="<?php echo $toast_id; ?>"
			class="<?php echo $toast_class; ?>"
			role="alert"
			aria-live="assertive"
			aria-atomic="true"
			data-bs-autohide="<?php echo $autohide ? 'true' : 'false'; ?>"
			data-bs-delay="<?php echo $delay; ?>"
		>
			<?php if ( $show_header ) : ?>
			<div class="toast-header">
				<div class="rounded me-2" style="width:16px;height:16px;background:<?php echo $color_variant ? 'currentColor' : '#0d6efd'; ?>;"></div>
				<strong class="me-auto"><?php echo $toast_title; ?></strong>
				<?php if ( $toast_subtitle ) : ?>
					<small class="text-body-secondary"><?php echo $toast_subtitle; ?></small>
				<?php endif; ?>
				<?php if ( $show_close ) : ?>
					<button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="<?php esc_attr_e( 'Close', 'wmblocks' ); ?>"></button>
				<?php endif; ?>
			</div>
			<?php endif; ?>

			<div class="toast-body">
				<?php echo $toast_body; ?>
				<?php if ( ! $show_header && $show_close ) : ?>
				<div class="mt-2 pt-2 border-top d-flex justify-content-end">
					<button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="<?php esc_attr_e( 'Close', 'wmblocks' ); ?>"></button>
				</div>
				<?php endif; ?>
			</div>
		</div>
	</div>

</div>
