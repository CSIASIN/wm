<?php
/**
 * render.php — wmblocks/ratio
 *
 * Wraps InnerBlocks content ($content) in a Bootstrap .ratio container.
 * Supports all preset ratios and a custom ratio via CSS variable.
 *
 * Bootstrap ratio pattern:
 *   <div class="ratio ratio-16x9">
 *     <iframe …></iframe>
 *   </div>
 *
 * Custom ratio:
 *   <div class="ratio" style="--bs-aspect-ratio: 50%;">
 *     <iframe …></iframe>
 *   </div>
 */

// ── Allowlists — all inline, no global ────────────────────────────────────
$ok_ratios = [ 'ratio-1x1', 'ratio-4x3', 'ratio-16x9', 'ratio-21x9', 'custom' ];

// ── Attributes ────────────────────────────────────────────────────────────
$ratio_raw    = isset( $attributes['ratio'] )       ? $attributes['ratio']       : 'ratio-16x9';
$custom_ratio = isset( $attributes['customRatio'] ) ? $attributes['customRatio'] : '';

// Validate ratio
$ratio = in_array( $ratio_raw, $ok_ratios, true ) ? $ratio_raw : 'ratio-16x9';

// ── Build ratio div classes and style ─────────────────────────────────────
$ratio_classes = 'ratio';
$ratio_style   = '';

if ( $ratio === 'custom' && $custom_ratio ) {
	// Parse "W/H" or "W:H" format
	$parts = preg_split( '/[\/:]/', $custom_ratio );
	if ( count( $parts ) === 2 ) {
		$w = floatval( $parts[0] );
		$h = floatval( $parts[1] );
		if ( $w > 0 && $h > 0 ) {
			$pct         = round( ( $h / $w ) * 100, 4 );
			$ratio_style = ' style="--bs-aspect-ratio:' . esc_attr( $pct ) . '%;"';
		}
	}
} elseif ( $ratio !== 'custom' ) {
	$ratio_classes .= ' ' . esc_attr( $ratio );
}

// ── Block wrapper ─────────────────────────────────────────────────────────
$wrapper_attr = get_block_wrapper_attributes( [ 'class' => $ratio_classes ] );
?>

	<div <?php echo  $wrapper_attr; ?> <?php echo $ratio_style; ?>>
		<?php echo $content; ?>
	</div>

