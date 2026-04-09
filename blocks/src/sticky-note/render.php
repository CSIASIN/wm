<?php
/**
 * render.php — wmblocks/sticky-note
 *
 * Wraps InnerBlocks content ($content) in a Bootstrap position helper element.
 *
 * Supported position modes:
 *   sticky-top    → position:sticky; top:0   (normal flow until scrolled past)
 *   sticky-bottom → position:sticky; bottom:0
 *   fixed-top     → position:fixed; top:0    (always floating above content)
 *   fixed-bottom  → position:fixed; bottom:0
 *
 * Responsive sticky variants (sticky-{breakpoint}-{top|bottom}):
 *   sticky-sm-top, sticky-md-top, sticky-lg-top, sticky-xl-top, sticky-xxl-top
 *   sticky-sm-bottom … sticky-xxl-bottom
 *
 * All allowlists are defined inline — no `global` — safe for WordPress render scope.
 */

// ── Allowlists ────────────────────────────────────────────────────────────
$ok_position_modes = [ 'sticky-top', 'sticky-bottom', 'fixed-top', 'fixed-bottom' ];
$ok_breakpoints    = [ '', 'sm', 'md', 'lg', 'xl', 'xxl' ];
$ok_bg_colors      = [
	'', 'bg-white', 'bg-light', 'bg-dark',
	'bg-primary', 'bg-secondary', 'bg-success', 'bg-danger',
	'bg-warning', 'bg-info',
];
$ok_shadows        = [ '', 'shadow-sm', 'shadow', 'shadow-lg' ];
$ok_padding        = [ '', 'py-1', 'py-2', 'py-3', 'py-4', 'py-5' ];
$ok_containers     = [
	'', 'container', 'container-sm', 'container-md',
	'container-lg', 'container-xl', 'container-fluid',
];
$ok_label_pos      = [
	'top-0 end-0',
	'top-0 start-0',
	'top-0 start-50 translate-middle-x',
	'bottom-0 end-0',
	'bottom-0 start-0',
];

// ── Attributes ────────────────────────────────────────────────────────────
$position_mode    = ( isset( $attributes['positionMode'] ) && in_array( $attributes['positionMode'], $ok_position_modes, true ) )
                    ? $attributes['positionMode'] : 'sticky-top';
$breakpoint       = ( isset( $attributes['breakpoint'] ) && in_array( $attributes['breakpoint'], $ok_breakpoints, true ) )
                    ? $attributes['breakpoint'] : '';
$z_index_raw      = isset( $attributes['zIndex'] ) ? $attributes['zIndex'] : '1020';
$bg_color         = ( isset( $attributes['bgColor'] ) && in_array( $attributes['bgColor'], $ok_bg_colors, true ) )
                    ? $attributes['bgColor'] : '';
$shadow           = ( isset( $attributes['shadow'] ) && in_array( $attributes['shadow'], $ok_shadows, true ) )
                    ? $attributes['shadow'] : '';
$padding          = ( isset( $attributes['padding'] ) && in_array( $attributes['padding'], $ok_padding, true ) )
                    ? $attributes['padding'] : '';
$container_width  = ( isset( $attributes['containerWidth'] ) && in_array( $attributes['containerWidth'], $ok_containers, true ) )
                    ? $attributes['containerWidth'] : '';
$show_label       = ! empty( $attributes['showLabel'] );
$label_text_raw   = ! empty( $attributes['labelText'] ) ? wp_kses_post( $attributes['labelText'] ) : '';
$label_pos_raw    = isset( $attributes['labelPosition'] ) ? $attributes['labelPosition'] : 'top-0 end-0';
$label_pos        = in_array( $label_pos_raw, $ok_label_pos, true ) ? $label_pos_raw : 'top-0 end-0';

// ── Determine if this is sticky or fixed ──────────────────────────────────
$is_sticky = str_starts_with( $position_mode, 'sticky' );
$is_fixed  = str_starts_with( $position_mode, 'fixed' );
$zone      = str_ends_with( $position_mode, 'top' ) ? 'top' : 'bottom';

// ── Build position class ──────────────────────────────────────────────────
// For sticky modes with a breakpoint: sticky-{bp}-{zone}
// For fixed modes: fixed-top / fixed-bottom (no responsive variant)
if ( $is_sticky && $breakpoint ) {
	$position_class = 'sticky-' . $breakpoint . '-' . $zone;
} else {
	$position_class = $position_mode;
}

// ── Validate z-index ──────────────────────────────────────────────────────
$ok_z_values = [ 'auto', '100', '200', '500', '1000', '1020', '1030', '1040', '1050', '9999' ];
$safe_z      = in_array( $z_index_raw, $ok_z_values, true ) ? $z_index_raw : '1020';

// ── Build wrapper class ────────────────────────────────────────────────────
$wrapper_classes = implode( ' ', array_filter(
	[ $position_class, $bg_color, $shadow, $padding, 'w-100' ],
	'strlen'
) );

// ── Auto label text ───────────────────────────────────────────────────────
if ( $show_label && ! $label_text_raw ) {
	$label_map = [
		'sticky-top'    => __( 'Sticky Top', 'wmblocks' ),
		'sticky-bottom' => __( 'Sticky Bottom', 'wmblocks' ),
		'fixed-top'     => __( 'Fixed Top', 'wmblocks' ),
		'fixed-bottom'  => __( 'Fixed Bottom', 'wmblocks' ),
	];
	$label_text_raw = $label_map[ $position_mode ] ?? $position_class;
}

// ── Build label badge HTML ─────────────────────────────────────────────────
$label_html = '';
if ( $show_label && $label_text_raw ) {
	$badge_classes = 'position-absolute ' . esc_attr( $label_pos ) . ' badge bg-secondary';
	$label_html    = '<span class="' . $badge_classes . '" style="font-size:.65rem;opacity:.75;pointer-events:none;">'
	               . $label_text_raw . '</span>';
}

$has_label = $show_label && $label_text_raw;

// ── Build the inner wrapper style ─────────────────────────────────────────
// The Bootstrap position helper div (fixed-top, sticky-top, etc.) MUST stay
// completely free of inline styles — any style="position:..." would override
// Bootstrap's own position declaration.
//
// Strategy:
//   • The Bootstrap position class div  → no inline style whatsoever
//   • An inner wrapper div              → carries position:relative (for the
//                                         label badge anchor) and z-index
//
// When there IS a container class, that div becomes the inner wrapper.
// When there is NO container class, we add a plain inner wrapper div.

$inner_style_parts = [];
if ( $has_label ) {
	$inner_style_parts[] = 'position:relative';
}
if ( $safe_z !== 'auto' ) {
	$inner_style_parts[] = 'z-index:' . esc_attr( $safe_z );
}
$inner_style_attr = ! empty( $inner_style_parts )
	? ' style="' . implode( ';', $inner_style_parts ) . ';"'
	: '';

// ── Assemble inner HTML ───────────────────────────────────────────────────
if ( $container_width ) {
	// Container div becomes the positioned inner wrapper
	$inner_html = '<div class="' . esc_attr( $container_width ) . '"' . $inner_style_attr . '>'
	            . $content
	            . $label_html
	            . '</div>';
} elseif ( $inner_style_attr || $has_label ) {
	// No container — add a plain wrapper only when needed (label or z-index)
	$inner_html = '<div' . $inner_style_attr . '>'
	            . $content
	            . $label_html
	            . '</div>';
} else {
	// No label, no z-index override, no container — output content directly,
	// keeping markup as lean as possible
	$inner_html = $content;
}

// ── Block wrapper — the outer div carries the WP block classes & anchor ───
// The Bootstrap position div carries ONLY its position class + appearance
// classes. No inline style on this div — ever.
$wrapper_attr = get_block_wrapper_attributes();
?>
<div <?php echo $wrapper_attr; ?>>
	<div class="<?php echo esc_attr( $wrapper_classes ); ?>">
		<?php echo $inner_html; ?>
	</div>
</div>