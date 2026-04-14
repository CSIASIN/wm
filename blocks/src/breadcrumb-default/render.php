<?php
/**
 * render.php — wmblocks/breadcrumb-default
 * Standard Bootstrap breadcrumb with default "/" divider.
 *
 * <nav aria-label="breadcrumb">
 *   <ol class="breadcrumb">
 *     <li class="breadcrumb-item"><a href="/">Home</a></li>
 *     <li class="breadcrumb-item"><a href="/lib">Library</a></li>
 *     <li class="breadcrumb-item active" aria-current="page">Data</li>
 *   </ol>
 * </nav>
 *
 * All allowlists inline — no global.
 */

$items      = ( isset( $attributes['items'] ) && is_array( $attributes['items'] ) ) ? $attributes['items'] : [];
$aria_label = ! empty( $attributes['ariaLabel'] ) ? esc_attr( $attributes['ariaLabel'] ) : 'breadcrumb';

if ( empty( $items ) ) {
	echo '<div ' . get_block_wrapper_attributes() . '></div>';
	return;
}

$last_idx     = count( $items ) - 1;
$items_html   = '';

foreach ( $items as $idx => $item ) {
	$label    = ! empty( $item['label'] ) ? wp_kses_post( $item['label'] ) : '';
	$url      = ! empty( $item['url'] )   ? esc_url( $item['url'] )         : '';
	$is_last  = ( $idx === $last_idx );

	if ( $is_last ) {
		$items_html .= '<li class="breadcrumb-item active" aria-current="page">' . $label . '</li>' . "\n";
	} else {
		$link        = $url ? '<a href="' . $url . '">' . $label . '</a>' : $label;
		$items_html .= '<li class="breadcrumb-item">' . $link . '</li>' . "\n";
	}
}

$wrapper_attr = get_block_wrapper_attributes();
?>
<div <?php echo $wrapper_attr; ?>>
	<nav aria-label="<?php echo $aria_label; ?>">
		<ol class="breadcrumb">
			<?php echo $items_html; ?>
		</ol>
	</nav>
</div>
