<?php
/**
 * render.php — wmblocks/placeholder
 *
 * Renders a skeleton / placeholder screen using Bootstrap 5.3 placeholder
 * classes. Supports all element types:
 *
 *   heading   → <h*><span class="placeholder …"></span></h*>
 *   paragraph → <p class="placeholder-glow"><span class="placeholder …"></span> …</p>
 *   button    → <a class="btn btn-primary disabled placeholder …"></a>
 *   image     → <div class="placeholder w-100" style="height:…"></div>
 *   avatar    → <div class="placeholder rounded-circle" style="width:48px;height:48px"></div>
 *   badge     → <span class="badge placeholder …"></span>
 *   text      → <span class="placeholder …"></span>
 *   divider   → empty spacing <div>
 *
 * All allowlists defined inline — no `global` — because WordPress runs
 * render.php inside a function scope.
 */

// ── Allowlists ────────────────────────────────────────────────────────────
$ok_colours = [
	'', 'bg-primary', 'bg-secondary', 'bg-success', 'bg-danger',
	'bg-warning', 'bg-info', 'bg-light', 'bg-dark',
];
$ok_sizes = [ '', 'placeholder-xs', 'placeholder-sm', 'placeholder-lg' ];
$ok_cols  = [
	'col-1','col-2','col-3','col-4','col-5','col-6',
	'col-7','col-8','col-9','col-10','col-11','col-12','col-auto',
];
$ok_animations = [ '', 'placeholder-glow', 'placeholder-wave' ];
$ok_tags       = [ 'h1','h2','h3','h4','h5','h6' ];
$ok_btn_colours = [
	'', 'bg-primary', 'bg-secondary', 'bg-success', 'bg-danger',
	'bg-warning', 'bg-info', 'bg-light', 'bg-dark',
];

// ── Inline helper: sanitise a placeholder class set for a span ────────────
if ( ! function_exists( 'wmblocks_ph_span_classes' ) ) {
	function wmblocks_ph_span_classes( string $cols, string $colour, string $size, string $global_colour, string $global_size, array $ok_colours, array $ok_sizes, array $ok_cols ): string {
		$safe_cols   = in_array( $cols,   $ok_cols,    true ) ? $cols   : 'col-6';
		$safe_colour = ( isset( $colour )       && in_array( $colour,       $ok_colours, true ) ) ? $colour       : '';
		$safe_colour = $safe_colour ?: ( in_array( $global_colour, $ok_colours, true ) ? $global_colour : '' );
		$safe_size   = ( isset( $size )         && in_array( $size,         $ok_sizes,   true ) ) ? $size         : '';
		$safe_size   = $safe_size   ?: ( in_array( $global_size,   $ok_sizes,   true ) ? $global_size   : '' );
		return implode( ' ', array_filter( [ 'placeholder', $safe_cols, $safe_colour, $safe_size ], 'strlen' ) );
	}
}

// ── Read attributes ───────────────────────────────────────────────────────
$rows         = ( isset( $attributes['rows'] ) && is_array( $attributes['rows'] ) ) ? $attributes['rows'] : [];
$animation    = ( isset( $attributes['animation'] ) && in_array( $attributes['animation'], $ok_animations, true ) )
                ? $attributes['animation'] : 'placeholder-glow';
$aria_hidden  = isset( $attributes['ariaHidden'] ) ? (bool) $attributes['ariaHidden'] : true;
$wrap_card    = ! empty( $attributes['wrapInCard'] );
$show_img_top = ! empty( $attributes['showImageRow'] );
$img_height   = ! empty( $attributes['imageHeight'] ) ? $attributes['imageHeight'] : '180px';
$global_col   = ( isset( $attributes['globalColour'] ) && in_array( $attributes['globalColour'], $ok_colours, true ) )
                ? $attributes['globalColour'] : '';
$global_size  = ( isset( $attributes['globalSize'] ) && in_array( $attributes['globalSize'], $ok_sizes, true ) )
                ? $attributes['globalSize'] : '';

// Aria hidden attribute string
$aria_attr    = $aria_hidden ? ' aria-hidden="true"' : '';

// ── Helper: render one placeholder row ────────────────────────────────────
// Returns an HTML string. Defined as a closure so it captures $ok_* arrays
// and $global_* values cleanly without globals.
$render_row = function( array $row ) use (
	$animation, $ok_colours, $ok_sizes, $ok_cols, $ok_tags,
	$global_col, $global_size
): string {

	$element = isset( $row['element'] ) ? $row['element'] : 'text';
	$cols    = ( isset( $row['cols'] )   && in_array( $row['cols'],   $ok_cols,    true ) ) ? $row['cols']   : 'col-6';
	$colour  = ( isset( $row['colour'] ) && in_array( $row['colour'], $ok_colours, true ) ) ? $row['colour'] : '';
	$size    = ( isset( $row['size'] )   && in_array( $row['size'],   $ok_sizes,   true ) ) ? $row['size']   : '';
	$tag     = ( isset( $row['tag'] )    && in_array( $row['tag'],    $ok_tags,    true ) ) ? $row['tag']    : 'h5';

	// Resolve global fallbacks
	$eff_colour = $colour ?: $global_col;
	$eff_size   = $size   ?: $global_size;

	$span_classes = implode( ' ', array_filter( [ 'placeholder', $cols, $eff_colour, $eff_size ], 'strlen' ) );

	switch ( $element ) {

		// ── Heading ──────────────────────────────────────────────────
		case 'heading':
			$anim_wrap = $animation ? ' ' . $animation : '';
			return '<' . $tag . ' class="' . esc_attr( $anim_wrap ) . '">'
			       . '<span class="' . esc_attr( $span_classes ) . '"></span>'
			       . '</' . $tag . '>';

		// ── Paragraph (multiple spans) ────────────────────────────────
		case 'paragraph':
			$spans     = ( isset( $row['spans'] ) && is_array( $row['spans'] ) ) ? $row['spans'] : [];
			$anim_wrap = $animation ? $animation : '';
			$spans_html = '';
			foreach ( $spans as $span ) {
				$sc = implode( ' ', array_filter( [
					'placeholder',
					( isset( $span['cols'] )   && in_array( $span['cols'],   $ok_cols,    true ) ) ? $span['cols']   : 'col-6',
					( isset( $span['colour'] ) && in_array( $span['colour'], $ok_colours, true ) ) ? $span['colour'] : $eff_colour,
					( isset( $span['size'] )   && in_array( $span['size'],   $ok_sizes,   true ) ) ? $span['size']   : $eff_size,
				], 'strlen' ) );
				$spans_html .= '<span class="' . esc_attr( $sc ) . '"></span>' . "\n";
			}
			if ( ! $spans_html ) {
				$spans_html = '<span class="' . esc_attr( $span_classes ) . '"></span>';
			}
			return '<p class="' . esc_attr( $anim_wrap ) . '">' . "\n" . $spans_html . '</p>';

		// ── Button ────────────────────────────────────────────────────
		case 'button':
			// For buttons: placeholder class goes on the <a> itself alongside btn classes.
			// Bootstrap docs: <a class="btn btn-primary disabled placeholder col-6">
			$btn_colour = $eff_colour ?: 'bg-primary';
			// Map bg-* → btn-* for the button base style
			$btn_variant_map = [
				'bg-primary'   => 'btn-primary',   'bg-secondary' => 'btn-secondary',
				'bg-success'   => 'btn-success',    'bg-danger'    => 'btn-danger',
				'bg-warning'   => 'btn-warning',    'bg-info'      => 'btn-info',
				'bg-light'     => 'btn-light',      'bg-dark'      => 'btn-dark',
				''             => 'btn-primary',
			];
			$btn_variant = $btn_variant_map[ $btn_colour ] ?? 'btn-primary';
			$btn_classes = implode( ' ', array_filter(
				[ 'btn', $btn_variant, 'disabled', 'placeholder', $cols, $eff_size ],
				'strlen'
			) );
			return '<a class="' . esc_attr( $btn_classes ) . '" aria-disabled="true"></a>';

		// ── Image skeleton ────────────────────────────────────────────
		case 'image':
			$img_h  = ! empty( $row['tag'] ) ? esc_attr( $row['tag'] ) : '180px';
			$anim_wrap = $animation ? ' ' . $animation : '';
			$img_classes = implode( ' ', array_filter(
				[ 'placeholder', 'w-100', $eff_colour, $anim_wrap ],
				'strlen'
			) );
			return '<div class="' . esc_attr( $img_classes ) . '" style="height:' . $img_h . ';"></div>';

		// ── Avatar / Circle ───────────────────────────────────────────
		case 'avatar':
			$anim_wrap   = $animation ? ' ' . $animation : '';
			$avt_classes = implode( ' ', array_filter(
				[ 'placeholder', 'rounded-circle', $eff_colour, $anim_wrap ],
				'strlen'
			) );
			return '<div class="' . esc_attr( $avt_classes ) . '" style="width:48px;height:48px;"></div>';

		// ── Badge / Tag ───────────────────────────────────────────────
		case 'badge':
			$anim_wrap   = $animation ? ' ' . $animation : '';
			$bdg_classes = implode( ' ', array_filter(
				[ 'badge', 'placeholder', $cols, $eff_colour, $eff_size, $anim_wrap ],
				'strlen'
			) );
			return '<span class="' . esc_attr( $bdg_classes ) . '"></span>';

		// ── Divider / Spacer ──────────────────────────────────────────
		case 'divider':
			return '<div class="py-2"></div>';

		// ── Generic text span (default) ────────────────────────────────
		default:
			$anim_wrap = $animation ? $animation : '';
			$txt_classes = implode( ' ', array_filter(
				[ $anim_wrap ],
				'strlen'
			) );
			return '<p class="' . esc_attr( trim( $txt_classes ) ) . '">'
			       . '<span class="' . esc_attr( $span_classes ) . '"></span>'
			       . '</p>';
	}
};

// ── Build all rows HTML ───────────────────────────────────────────────────
$rows_html = '';
foreach ( $rows as $row ) {
	$rows_html .= $render_row( $row ) . "\n";
}

// ── Wrap in card if enabled ───────────────────────────────────────────────
if ( $wrap_card ) {
	$img_top_html = '';
	if ( $show_img_top ) {
		$anim_cls    = $animation ? ' ' . $animation : '';
		$img_top_html = '<div class="placeholder w-100' . esc_attr( $anim_cls ) . '" style="height:' . esc_attr( $img_height ) . ';"></div>';
	}
	$inner_html = $img_top_html . '<div class="card-body">' . $rows_html . '</div>';
	$block_html = '<div class="card">' . $inner_html . '</div>';
} else {
	$img_top_html = '';
	if ( $show_img_top ) {
		$anim_cls    = $animation ? ' ' . $animation : '';
		$img_top_html = '<div class="placeholder w-100 mb-3' . esc_attr( $anim_cls ) . '" style="height:' . esc_attr( $img_height ) . ';"></div>';
	}
	$block_html = $img_top_html . $rows_html;
}

// ── Block wrapper ─────────────────────────────────────────────────────────
$wrapper_attr = get_block_wrapper_attributes();
?>
<div <?php echo $wrapper_attr; ?><?php echo $aria_attr; ?>>
	<?php echo $block_html; ?>
</div>
