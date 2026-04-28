<?php
/**
 * render.php — Bootstrap Alert block
 *
 * Available variables (set by WordPress):
 *   $attributes  – block attribute values
 *   $content     – InnerBlocks HTML (the alert body content)
 *   $block       – WP_Block instance
 */

// ── Attributes ────────────────────────────────────────────────────────────
$variant     = ! empty( $attributes['variant'] )    ? $attributes['variant']                      : 'alert-primary';
$heading     = ! empty( $attributes['heading'] )    ? wp_kses_post( $attributes['heading'] )       : '';
$show_heading = ! empty( $attributes['showHeading'] );
$dismissible  = ! empty( $attributes['dismissible'] );
$show_icon    = ! empty( $attributes['showIcon'] );
$icon         = ! empty( $attributes['icon'] )      ? $attributes['icon']                          : 'bi-info-circle-fill';
$show_link    = ! empty( $attributes['showLink'] );
$link_text    = ! empty( $attributes['linkText'] )  ? wp_kses_post( $attributes['linkText'] )      : 'Learn more';
$link_url     = ! empty( $attributes['linkUrl'] )   ? esc_url( $attributes['linkUrl'] )            : '#';

// ── Validate variant against allowlist ────────────────────────────────────
$allowed_variants = [
	'alert-primary', 'alert-secondary', 'alert-success', 'alert-danger',
	'alert-warning', 'alert-info', 'alert-light', 'alert-dark',
];
if ( ! in_array( $variant, $allowed_variants, true ) ) {
	$variant = 'alert-primary';
}

// ── Validate Bootstrap Icon class ─────────────────────────────────────────
// Allow only bi-* class names (alphanumeric + dash)
$safe_icon = preg_match( '/^bi-[a-z0-9\-]+$/', $icon ) ? $icon : 'bi-info-circle-fill';

// ── Build alert CSS classes ───────────────────────────────────────────────
$alert_classes = implode( ' ', array_filter( [
	'alert',
	esc_attr( $variant ),
	$dismissible ? 'alert-dismissible fade show' : '',
], 'strlen' ) );

// ── Block wrapper attributes ──────────────────────────────────────────────
$wrapper_attributes = get_block_wrapper_attributes( [
	'class' => $alert_classes,
	'role'  => 'alert',
] );
?>
<div <?php echo $wrapper_attributes; ?>>

	<?php
	// ── Heading (with optional icon) ──────────────────────────────────
	if ( $show_heading && $heading ) :
	?>
		<h4 class="alert-heading">
			<?php if ( $show_icon ) : ?>
				<i class="bi <?php echo esc_attr( $safe_icon ); ?>" aria-hidden="true"></i>
			<?php endif; ?>
			<?php echo $heading; ?>
		</h4>

	<?php
	// ── Icon only (no heading) ────────────────────────────────────────
	elseif ( $show_icon ) :
	?>
		<i class="bi <?php echo esc_attr( $safe_icon ); ?> me-2" aria-hidden="true"></i>

	<?php endif; ?>


	<?php
	/**
	 * $content is the rendered InnerBlocks HTML (paragraphs, lists, etc.)
	 * Output directly — it comes from trusted block serialisation.
	 */
	echo $content;
	?>


	<?php
	// ── Optional alert-link ───────────────────────────────────────────
	if ( $show_link && $link_text ) :
	?>
		<hr>
		<p class="mb-0">
			<a href="<?php echo $link_url; ?>" class="alert-link">
				<?php echo $link_text; ?>
			</a>
		</p>
	<?php endif; ?>


	<?php
	// ── Dismiss button ────────────────────────────────────────────────
	if ( $dismissible ) :
	?>
		<button
			type="button"
			class="btn-close"
			data-bs-dismiss="alert"
			aria-label="<?php esc_attr_e( 'Close', 'wmblocks' ); ?>"
		></button>
	<?php endif; ?>

</div>
