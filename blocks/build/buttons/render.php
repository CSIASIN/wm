<?php
/**
 * render.php — Bootstrap Buttons block
 *
 * Available variables (injected by WordPress block renderer):
 *   $attributes  – block attribute values
 *   $content     – unused (no InnerBlocks)
 *   $block       – WP_Block instance
 *
 * NOTE: render.php is included by WordPress inside an internal function,
 * so variables defined here are NOT in the global scope. All allowlists
 * are therefore defined inline inside the helper function below — never
 * via `global`, which would silently return NULL in this context.
 */

// ── Helper: build one button/link HTML string ─────────────────────────────
// All allowlists live here so they are always in scope — no globals needed.
if ( ! function_exists( 'wmblocks_render_single_button' ) ) {

	function wmblocks_render_single_button( array $btn ): string {

		// ── Allowlists (defined inline — safe from scope issues) ──────
		$ok_variants = [
			'btn-primary', 'btn-secondary', 'btn-success', 'btn-danger',
			'btn-warning', 'btn-info', 'btn-light', 'btn-dark', 'btn-link',
			'btn-outline-primary', 'btn-outline-secondary', 'btn-outline-success',
			'btn-outline-danger',  'btn-outline-warning',   'btn-outline-info',
			'btn-outline-light',   'btn-outline-dark',
		];
		$ok_sizes   = [ '', 'btn-sm', 'btn-lg', 'btn-group-sm', 'btn-group-lg' ];
		$ok_types   = [ 'link', 'button', 'submit', 'reset' ];
		$ok_targets = [ '_self', '_blank', '_parent', '_top' ];

		// ── Sanitise each attribute ───────────────────────────────────
		$label   = isset( $btn['label'] )   ? wp_kses_post( $btn['label'] )   : 'Button';
		$href    = isset( $btn['href'] )    ? esc_url( $btn['href'] )         : '#';

		$target  = ( isset( $btn['target'] ) && in_array( $btn['target'], $ok_targets, true ) )
		           ? $btn['target'] : '_self';

		$type    = ( isset( $btn['type'] ) && in_array( $btn['type'], $ok_types, true ) )
		           ? $btn['type'] : 'link';

		$variant = ( isset( $btn['variant'] ) && in_array( $btn['variant'], $ok_variants, true ) )
		           ? $btn['variant'] : 'btn-primary';

		$size    = ( isset( $btn['size'] ) && in_array( $btn['size'], $ok_sizes, true ) )
		           ? $btn['size'] : '';

		$disabled       = ! empty( $btn['disabled'] );
		$active         = ! empty( $btn['active'] );
		$no_wrap        = ! empty( $btn['noWrap'] );
		$stretched_link = ! empty( $btn['stretchedLink'] );

		// ── Build CSS class string ────────────────────────────────────
		$classes = implode( ' ', array_filter( [
			'btn',
			$variant,
			$size,
			$active         ? 'active'         : '',
			$disabled       ? 'disabled'        : '',
			$no_wrap        ? 'text-nowrap'     : '',
			$stretched_link ? 'stretched-link'  : '',
		], 'strlen' ) );

		// ── Render the correct HTML element ───────────────────────────
		if ( $type === 'submit' || $type === 'reset' ) {
			// <input type="submit|reset">
			$dis_attr = $disabled ? ' disabled' : '';
			return '<input type="' . esc_attr( $type ) . '"'
			       . ' class="' . esc_attr( $classes ) . '"'
			       . ' value="' . esc_attr( wp_strip_all_tags( $label ) ) . '"'
			       . $dis_attr . '>';
		}

		if ( $type === 'button' ) {
			// <button type="button">
			$dis_attr  = $disabled ? ' disabled' : '';
			$aria_attr = $active   ? ' aria-pressed="true"' : '';
			return '<button type="button"'
			       . ' class="' . esc_attr( $classes ) . '"'
			       . $dis_attr . $aria_attr . '>'
			       . $label . '</button>';
		}

		// Default: <a> link
		$rel_attr  = ( $target === '_blank' ) ? ' rel="noopener noreferrer"' : '';
		$dis_attr  = $disabled ? ' tabindex="-1" aria-disabled="true"' : '';
		$aria_attr = $active   ? ' aria-pressed="true"' : '';

		return '<a href="' . $href . '"'
		       . ' class="' . esc_attr( $classes ) . '"'
		       . ' target="' . esc_attr( $target ) . '"'
		       . $rel_attr . $dis_attr . $aria_attr . '>'
		       . $label . '</a>';
	}
}

// ── Read & sanitise block-level attributes ────────────────────────────────
$buttons        = ( isset( $attributes['buttons'] ) && is_array( $attributes['buttons'] ) )
                  ? $attributes['buttons'] : [];
$layout         = isset( $attributes['layout'] )        ? $attributes['layout']        : 'inline';
$group_mode     = ! empty( $attributes['groupMode'] );
$group_size     = isset( $attributes['groupSize'] )     ? $attributes['groupSize']     : '';
$group_vertical = ! empty( $attributes['groupVertical'] );
$alignment      = isset( $attributes['alignment'] )     ? $attributes['alignment']     : 'left';
$gap_raw        = isset( $attributes['gap'] )           ? $attributes['gap']           : 'gap-2';

// Validate gap & group-size against allowlists (also inline — no globals)
$ok_gaps       = [ '', 'gap-1', 'gap-2', 'gap-3', 'gap-4', 'gap-5' ];
$ok_group_size = [ '', 'btn-group-sm', 'btn-group-lg' ];
$safe_gap       = in_array( $gap_raw,    $ok_gaps,       true ) ? $gap_raw    : 'gap-2';
$safe_grp_size  = in_array( $group_size, $ok_group_size, true ) ? $group_size : '';

// Alignment → Bootstrap flex utility
$align_map   = [
	'left'   => 'justify-content-start',
	'center' => 'justify-content-center',
	'right'  => 'justify-content-end',
];
$align_class = isset( $align_map[ $alignment ] ) ? $align_map[ $alignment ] : 'justify-content-start';

// ── Decide how much wrapper markup is needed ──────────────────────────────
//
// Goal: keep the output as lean as Bootstrap itself would produce.
//
//  • 1 button  + inline layout + no group  → bare button/link, no inner div
//  • 1 button  + stack layout              → d-grid wrapper (makes it full-width)
//  • 1 button  + group mode                → btn-group wrapper (semantically correct)
//  • 2+ buttons + inline layout            → d-flex wrapper with gap + alignment
//  • 2+ buttons + stack layout             → d-grid wrapper
//  • 2+ buttons + group mode               → btn-group wrapper
//
// The outer <div class="wp-block-wmblocks-buttons"> from get_block_wrapper_attributes()
// is required by WordPress (for anchor, className, spacing supports) but we keep
// everything INSIDE it as lean as possible.

$button_count = count( $buttons );
$is_single_inline = ( $button_count === 1 && ! $group_mode && $layout !== 'stack' );

// For single inline button, pass alignment via the wrapper itself
$wrapper_extra_classes = '';
if ( $is_single_inline ) {
	$wrapper_extra_classes = match ( $alignment ) {
		'center' => 'd-flex justify-content-center',
		'right'  => 'd-flex justify-content-end',
		default  => '', // left — no extra wrapper classes needed
	};
}

$wrapper_attributes = get_block_wrapper_attributes(
	$wrapper_extra_classes ? [ 'class' => $wrapper_extra_classes ] : []
);
?>
<div <?php echo $wrapper_attributes; ?>>

<?php if ( $group_mode ) :
	// ── Button Group: btn-group or btn-group-vertical ─────────────────
	$grp_classes = implode( ' ', array_filter( [
		$group_vertical ? 'btn-group-vertical' : 'btn-group',
		$safe_grp_size,
	], 'strlen' ) );
?>
	<div class="<?php echo esc_attr( $grp_classes ); ?>" role="group" aria-label="<?php esc_attr_e( 'Button group', 'wmblocks' ); ?>">
		<?php foreach ( $buttons as $btn ) : ?>
			<?php echo wmblocks_render_single_button( $btn ); ?>
		<?php endforeach; ?>
	</div>

<?php elseif ( $layout === 'stack' ) :
	// ── Stack: d-grid makes each button full-width ────────────────────
?>
	<div class="d-grid gap-2">
		<?php foreach ( $buttons as $btn ) : ?>
			<?php echo wmblocks_render_single_button( $btn ); ?>
		<?php endforeach; ?>
	</div>

<?php elseif ( $is_single_inline ) :
	// ── Single button, inline: no inner wrapper at all ────────────────
	echo wmblocks_render_single_button( $buttons[0] );
?>
<?php else :
	// ── Multiple buttons, inline: flex row with gap + alignment ───────
	$flex_classes = implode( ' ', array_filter( [
		'd-flex flex-wrap',
		$align_class,
		$safe_gap,
	], 'strlen' ) );
?>
	<div class="<?php echo esc_attr( $flex_classes ); ?>">
		<?php foreach ( $buttons as $btn ) : ?>
			<?php echo wmblocks_render_single_button( $btn ); ?>
		<?php endforeach; ?>
	</div>

<?php endif; ?>

</div>