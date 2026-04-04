<?php
/**
 * render.php — wmblocks/badge
 *
 * NOTE: all allowlists are defined inline — never via global — because
 * WordPress includes render.php inside an internal function scope.
 */

if ( ! function_exists( 'wmblocks_render_single_badge' ) ) {

	function wmblocks_render_single_badge( array $badge ): string {

		// ── Allowlists ────────────────────────────────────────────────
		$ok_variants = [
			'bg-primary', 'bg-secondary', 'bg-success', 'bg-danger',
			'bg-warning',  'bg-info',      'bg-light',   'bg-dark',
			'text-bg-primary', 'text-bg-secondary', 'text-bg-success',
			'text-bg-danger',  'text-bg-warning',   'text-bg-info',
			'text-bg-light',   'text-bg-dark',
		];

		// ── Sanitise ──────────────────────────────────────────────────
		$text    = isset( $badge['text'] )    ? wp_kses_post( $badge['text'] ) : '';
		$variant = ( isset( $badge['variant'] ) && in_array( $badge['variant'], $ok_variants, true ) )
		           ? $badge['variant'] : 'bg-primary';
		$pill            = ! empty( $badge['pill'] );
		$href            = ! empty( $badge['href'] )          ? esc_url( $badge['href'] )  : '';
		$positioned_top  = ! empty( $badge['positionedTop'] );
		$positioned_start= ! empty( $badge['positionedStart'] );

		// ── Build class string ────────────────────────────────────────
		// Positioned badges need: position-absolute top-0 start-50 translate-middle
		// (or top-0 start-0) so they sit on a parent button/element.
		$position_classes = '';
		if ( $positioned_top ) {
			$position_classes = $positioned_start
				? 'position-absolute top-0 start-0 translate-middle'
				: 'position-absolute top-0 start-50 translate-middle';
		}

		$classes = implode( ' ', array_filter(
			[ 'badge', $variant, $pill ? 'rounded-pill' : '', $position_classes ],
			'strlen'
		) );

		if ( $href ) {
			return '<a href="' . $href . '" class="' . esc_attr( $classes ) . '">' . $text . '</a>';
		}

		return '<span class="' . esc_attr( $classes ) . '">' . $text . '</span>';
	}
}

// ── Block attributes ──────────────────────────────────────────────────────
$badges     = ( isset( $attributes['badges'] ) && is_array( $attributes['badges'] ) )
              ? $attributes['badges'] : [];
$alignment  = isset( $attributes['alignment'] ) ? $attributes['alignment'] : 'left';
$gap_raw    = isset( $attributes['gap'] )       ? $attributes['gap']       : 'gap-2';
$wrap_inline= ! empty( $attributes['wrapInline'] );

// ── Validate gap ──────────────────────────────────────────────────────────
$ok_gaps  = [ '', 'gap-1', 'gap-2', 'gap-3', 'gap-4', 'gap-5' ];
$safe_gap = in_array( $gap_raw, $ok_gaps, true ) ? $gap_raw : 'gap-2';

// ── Alignment → flex class ────────────────────────────────────────────────
$align_map   = [
	'left'   => 'justify-content-start',
	'center' => 'justify-content-center',
	'right'  => 'justify-content-end',
];
$align_class = isset( $align_map[ $alignment ] ) ? $align_map[ $alignment ] : 'justify-content-start';

// ── Decide wrapper — lean markup like the Buttons block ───────────────────
//
//  • 1 badge  + inline mode  → bare <span> or <a>, no wrapper div
//  • 1 badge  + flex mode    → bare badge (alignment via block wrapper class)
//  • 2+ badges + flex mode   → d-flex wrapper with gap
//  • any + wrapInline        → no flex wrapper, badges flow as inline elements
//
$badge_count      = count( $badges );
$is_single_inline = ( $badge_count === 1 && ! $wrap_inline );

// Extra classes on the WP block wrapper for single-badge alignment
$wrapper_extra = '';
if ( $is_single_inline && $alignment !== 'left' ) {
	$wrapper_extra = ( $alignment === 'center' ? 'd-flex justify-content-center' : 'd-flex justify-content-end' );
}

$wrapper_attr = get_block_wrapper_attributes(
	$wrapper_extra ? [ 'class' => $wrapper_extra ] : []
);
?>
<span <?php echo $wrapper_attr; ?>>

<?php if ( $wrap_inline ) :
	// ── Inline flow — badges as plain inline elements ─────────────────
	foreach ( $badges as $badge ) {
		echo wmblocks_render_single_badge( $badge ) . ' ';
	}

elseif ( $is_single_inline ) :
	// ── Single badge — no inner wrapper ───────────────────────────────
	echo wmblocks_render_single_badge( $badges[0] );

else :
	// ── Multiple badges — flex row with gap + alignment ───────────────
	$flex_classes = implode( ' ', array_filter(
		[ 'd-flex flex-wrap', $align_class, $safe_gap ],
		'strlen'
	) );
	?>
	<div class="<?php echo esc_attr( $flex_classes ); ?>">
		<?php foreach ( $badges as $badge ) : ?>
			<?php echo wmblocks_render_single_badge( $badge ); ?>
		<?php endforeach; ?>
	</div>
<?php endif; ?>

		</span>
