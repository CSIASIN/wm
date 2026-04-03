<?php
/**
 * render.php — Bootstrap Offcanvas block
 *
 * Available variables (set by WordPress):
 *   $attributes  – block attribute values
 *   $content     – InnerBlocks HTML (the offcanvas panel body)
 *   $block       – WP_Block instance
 */

// ── Attributes ───────────────────────────────────────────────────────────
$trigger_text    = ! empty( $attributes['triggerText'] )    ? wp_kses_post( $attributes['triggerText'] )    : 'Open Offcanvas';
$trigger_variant = ! empty( $attributes['triggerVariant'] ) ? esc_attr( $attributes['triggerVariant'] )     : 'btn-primary';
$trigger_type    = ! empty( $attributes['triggerType'] )    ? $attributes['triggerType']                    : 'button';
$placement       = ! empty( $attributes['placement'] )      ? $attributes['placement']                      : 'start';
$canvas_title    = ! empty( $attributes['offcanvasTitle'] ) ? wp_kses_post( $attributes['offcanvasTitle'] ) : '';
$show_header     = isset( $attributes['showHeader'] )       ? (bool) $attributes['showHeader']              : true;
$show_backdrop   = isset( $attributes['showBackdrop'] )     ? (bool) $attributes['showBackdrop']            : true;
$close_on_bd     = isset( $attributes['closeOnBackdrop'] )  ? (bool) $attributes['closeOnBackdrop']         : true;
$scroll_body     = ! empty( $attributes['scrollBody'] );

// ── Validate placement ────────────────────────────────────────────────────
$allowed_placements = [ 'start', 'end', 'top', 'bottom' ];
if ( ! in_array( $placement, $allowed_placements, true ) ) {
	$placement = 'start';
}

// ── Resolve offcanvas ID (unique on page) ─────────────────────────────────
$offcanvas_id = ! empty( $attributes['offcanvasId'] )
	? esc_attr( $attributes['offcanvasId'] )
	: 'offcanvas-' . wp_unique_id();

// ── Bootstrap backdrop value ──────────────────────────────────────────────
// true  → shows and closes on click
// static → shows but won't close on backdrop click
// false → no backdrop at all
$backdrop_value = $show_backdrop
	? ( $close_on_bd ? 'true' : 'static' )
	: 'false';

// ── Block wrapper attributes ──────────────────────────────────────────────
$wrapper_attributes = get_block_wrapper_attributes();
?>
<div <?php echo $wrapper_attributes; ?>>

	<?php
	// ── Trigger ──────────────────────────────────────────────────────────
	if ( $trigger_type === 'link' ) : ?>
		<a
			class="btn <?php echo $trigger_variant; ?>"
			href="#<?php echo $offcanvas_id; ?>"
			data-bs-toggle="offcanvas"
			role="button"
			aria-controls="<?php echo $offcanvas_id; ?>"
		>
			<?php echo $trigger_text; ?>
		</a>

	<?php else : ?>
		<button
			class="btn <?php echo $trigger_variant; ?>"
			type="button"
			data-bs-toggle="offcanvas"
			data-bs-target="#<?php echo $offcanvas_id; ?>"
			aria-controls="<?php echo $offcanvas_id; ?>"
		>
			<?php echo $trigger_text; ?>
		</button>
	<?php endif; ?>


	<?php
	// ── Offcanvas Panel ───────────────────────────────────────────────
	$offcanvas_class = 'offcanvas offcanvas-' . esc_attr( $placement );
	?>
	<div
		class="<?php echo esc_attr( $offcanvas_class ); ?>"
		tabindex="-1"
		id="<?php echo $offcanvas_id; ?>"
		aria-labelledby="<?php echo $offcanvas_id; ?>Label"
		data-bs-backdrop="<?php echo esc_attr( $backdrop_value ); ?>"
		data-bs-scroll="<?php echo $scroll_body ? 'true' : 'false'; ?>"
	>

		<?php if ( $show_header ) : ?>
		<div class="offcanvas-header">
			<h5 class="offcanvas-title" id="<?php echo $offcanvas_id; ?>Label">
				<?php echo $canvas_title; ?>
			</h5>
			<button
				type="button"
				class="btn-close"
				data-bs-dismiss="offcanvas"
				aria-label="<?php esc_attr_e( 'Close', 'wmblocks' ); ?>"
			></button>
		</div>
		<?php endif; ?>

		<?php
		/**
		 * $content is the rendered InnerBlocks HTML from the editor.
		 * WordPress wraps it in the save() div — we output it directly
		 * inside .offcanvas-body so Bootstrap styles apply correctly.
		 *
		 * wp_kses_post() is safe here because $content comes from trusted
		 * block output, not raw user input.
		 */
		?>
		<div class="offcanvas-body">
			<?php echo $content; ?>
		</div>

	</div><!-- /.offcanvas -->

</div><!-- /block wrapper -->
