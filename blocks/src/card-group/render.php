<?php
/**
 * render.php — wmblocks/card-group
 * $content = InnerBlocks HTML (child card blocks)
 */

$layout   = isset( $attributes['layout'] ) ? $attributes['layout'] : 'grid';
$cols     = isset( $attributes['cols'] )   ? (int) $attributes['cols']   : 3;
$cols_sm  = isset( $attributes['colsSm'] ) ? (int) $attributes['colsSm'] : 1;
$cols_md  = isset( $attributes['colsMd'] ) ? (int) $attributes['colsMd'] : 2;
$gap_raw  = isset( $attributes['gap'] )    ? $attributes['gap']    : 'gap-3';

$ok_gaps = [ '', 'gap-1', 'gap-2', 'gap-3', 'gap-4', 'gap-5' ];
$safe_gap = in_array( $gap_raw, $ok_gaps, true ) ? $gap_raw : 'gap-3';

// Clamp cols
$cols    = max( 1, min( 6, $cols    ) );
$cols_sm = max( 1, min( 6, $cols_sm ) );
$cols_md = max( 1, min( 6, $cols_md ) );

$wrapper_attr = get_block_wrapper_attributes();

if ( $layout === 'card-group' ) :
	// Bootstrap card-group: flush, equal height, no gap
?>
<div <?php echo $wrapper_attr; ?>>
	<div class="card-group">
		<?php echo $content; ?>
	</div>
</div>

<?php elseif ( $layout === 'deck' ) :
	// Flex deck with gap
?>
<div <?php echo $wrapper_attr; ?>>
	<div class="d-flex flex-wrap <?php echo esc_attr( $safe_gap ); ?>">
		<?php echo $content; ?>
	</div>
</div>

<?php else :
	// Responsive CSS grid using Bootstrap row-cols-*
	$row_classes = implode( ' ', [
		'row',
		'row-cols-' . $cols_sm,
		'row-cols-md-' . $cols_md,
		'row-cols-lg-' . $cols,
		$safe_gap ? 'g-' . str_replace( 'gap-', '', $safe_gap ) : 'g-3',
	] );
?>
<div <?php echo $wrapper_attr; ?>>
	<div class="<?php echo esc_attr( $row_classes ); ?>">
		<?php echo $content; ?>
	</div>
</div>
<?php endif; ?>
