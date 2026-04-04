<?php
/**
 * render.php — wmblocks/spinner
 *
 * Outputs one of:
 *   1. A bare spinner <div> — when no label, no button mode, left-aligned
 *   2. Spinner + visible label in a flex wrapper
 *   3. Spinner inside a <button> element (button mode)
 *
 * All allowlists are defined inline — no `global` usage — because WordPress
 * runs render.php inside a function scope.
 */

// ── Allowlists (inline — never global) ───────────────────────────────────
$ok_variants = [
	'text-primary','text-secondary','text-success','text-danger',
	'text-warning','text-info','text-light','text-dark',
];
$ok_btn_variants = [
	'btn-primary','btn-secondary','btn-success','btn-danger',
	'btn-warning','btn-info','btn-light','btn-dark',
	'btn-outline-primary','btn-outline-secondary','btn-outline-success',
	'btn-outline-danger','btn-outline-warning','btn-outline-info',
	'btn-outline-light','btn-outline-dark',
];
$ok_label_positions = [ 'right', 'left', 'below', 'above' ];
$ok_alignments      = [ 'left', 'center', 'right' ];

// ── Read & sanitise attributes ────────────────────────────────────────────
$spinner_type   = ! empty( $attributes['spinnerType'] ) && $attributes['spinnerType'] === 'grow'
                  ? 'grow' : 'border';

$variant        = ( isset( $attributes['variant'] ) && in_array( $attributes['variant'], $ok_variants, true ) )
                  ? $attributes['variant'] : 'text-primary';

$size_raw       = isset( $attributes['size'] ) ? $attributes['size'] : '';
$custom_size    = ! empty( $attributes['customSize'] ) ? $attributes['customSize'] : '';

$alignment      = ( isset( $attributes['alignment'] ) && in_array( $attributes['alignment'], $ok_alignments, true ) )
                  ? $attributes['alignment'] : 'left';

$show_label     = ! empty( $attributes['showLabel'] );
$label_text     = ! empty( $attributes['labelText'] ) ? wp_kses_post( $attributes['labelText'] ) : 'Loading...';
$label_position = ( isset( $attributes['labelPosition'] ) && in_array( $attributes['labelPosition'], $ok_label_positions, true ) )
                  ? $attributes['labelPosition'] : 'right';

$show_vh        = isset( $attributes['showVisuallyHidden'] ) ? (bool) $attributes['showVisuallyHidden'] : true;
$vh_text        = ! empty( $attributes['visuallyHiddenText'] ) ? esc_html( $attributes['visuallyHiddenText'] ) : 'Loading...';

$button_mode    = ! empty( $attributes['buttonMode'] );
$button_text    = ! empty( $attributes['buttonText'] ) ? wp_kses_post( $attributes['buttonText'] ) : 'Loading...';
$button_variant = ( isset( $attributes['buttonVariant'] ) && in_array( $attributes['buttonVariant'], $ok_btn_variants, true ) )
                  ? $attributes['buttonVariant'] : 'btn-primary';
$button_disabled = isset( $attributes['buttonDisabled'] ) ? (bool) $attributes['buttonDisabled'] : true;

// ── Build spinner CSS classes ─────────────────────────────────────────────
$spinner_base = $spinner_type === 'grow' ? 'spinner-grow' : 'spinner-border';

// Size class
$size_class = '';
if ( $size_raw === 'sm' ) {
	$size_class = $spinner_base . '-sm';
}

$spinner_classes = implode( ' ', array_filter(
	[ $spinner_base, $size_class, $variant ],
	'strlen'
) );

// Custom size via inline style (only when size === 'custom')
$custom_style = '';
if ( $size_raw === 'custom' && $custom_size ) {
	$safe_custom = esc_attr( $custom_size );
	$custom_style = ' style="width:' . $safe_custom . ';height:' . $safe_custom . ';"';
}

// Role attribute — grow uses role="status" too per BS docs
$spinner_html = '<div class="' . esc_attr( $spinner_classes ) . '" role="status"' . $custom_style . '>';
if ( $show_vh && $vh_text ) {
	$spinner_html .= '<span class="visually-hidden">' . $vh_text . '</span>';
}
$spinner_html .= '</div>';

// ── Alignment → wrapper class ─────────────────────────────────────────────
$align_class_map = [
	'left'   => '',                   // no extra class needed — block is block-level
	'center' => 'd-flex justify-content-center',
	'right'  => 'd-flex justify-content-end',
];
$align_class = $align_class_map[ $alignment ] ?? '';

// ── Block wrapper ─────────────────────────────────────────────────────────
$wrapper_extra = $align_class ? [ 'class' => $align_class ] : [];
$wrapper_attr  = get_block_wrapper_attributes( $wrapper_extra );

// ── Is this a "bare" single spinner (no label, no button, left aligned)? ──
// If yes, skip the inner wrapper div for lean markup.
$is_bare = ( ! $show_label && ! $button_mode && $alignment === 'left' );
?>
<div <?php echo $wrapper_attr; ?>>

<?php if ( $button_mode ) :
	// ── Spinner inside a button ───────────────────────────────────────
	$btn_class = implode( ' ', array_filter(
		[ 'btn', $button_variant, $button_disabled ? 'disabled' : '' ],
		'strlen'
	) );
	$dis_attr  = $button_disabled ? ' disabled' : '';
	?>
	<button type="button" class="<?php echo esc_attr( $btn_class ); ?>"<?php echo $dis_attr; ?>>
		<?php echo $spinner_html; ?>
		<?php echo $button_text; ?>
	</button>

<?php elseif ( $show_label ) :
	// ── Spinner + visible label ───────────────────────────────────────
	$is_vertical   = in_array( $label_position, [ 'above', 'below' ], true );
	$flex_dir      = $is_vertical ? 'flex-column' : '';
	$label_html    = '<span>' . $label_text . '</span>';

	$inner_classes = implode( ' ', array_filter(
		[ 'd-inline-flex align-items-center gap-2', $flex_dir ],
		'strlen'
	) );
	?>
	<div class="<?php echo esc_attr( $inner_classes ); ?>">
		<?php if ( in_array( $label_position, [ 'above', 'left' ], true ) ) : ?>
			<?php echo $label_html; ?>
			<?php echo $spinner_html; ?>
		<?php else : ?>
			<?php echo $spinner_html; ?>
			<?php echo $label_html; ?>
		<?php endif; ?>
	</div>

<?php elseif ( $is_bare ) : 
	// ── Bare spinner — no wrapper ─────────────────────────────────────
	echo $spinner_html;
?>
<?php else : 
	// ── Spinner with alignment (center/right) but no label ────────────
	// Alignment wrapper is already on the block div above.
	echo $spinner_html;
	?>
<?php endif; ?>

</div>
