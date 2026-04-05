<?php
/**
 * render.php — wmblocks/table
 *
 * Renders a fully-featured Bootstrap 5.3 table from structured attribute data.
 *
 * Features:
 *   - thead / tbody / tfoot with any number of rows
 *   - Per-cell contextual colours, alignment, and th/td tag
 *   - Per-row contextual colour
 *   - All Bootstrap table modifiers: striped, striped-columns, hover,
 *     bordered, borderless, small, table-group-divider, variant, head variant
 *   - Caption with top/bottom positioning
 *   - Responsive wrapper at any breakpoint
 *
 * All allowlists are defined inline — no `global` — because WordPress runs
 * render.php inside a function scope.
 */

// ── Allowlists ────────────────────────────────────────────────────────────
$ok_table_variants = [
	'', 'table-primary', 'table-secondary', 'table-success', 'table-danger',
	'table-warning', 'table-info', 'table-light', 'table-dark',
];
$ok_head_variants = [
	'', 'table-dark', 'table-light', 'table-primary', 'table-secondary',
	'table-success', 'table-danger', 'table-warning', 'table-info',
];
$ok_cell_colours = [
	'', 'table-primary', 'table-secondary', 'table-success', 'table-danger',
	'table-warning', 'table-info', 'table-light', 'table-dark', 'table-active',
];
$ok_aligns = [ '', 'text-start', 'text-center', 'text-end' ];
$ok_tags   = [ 'td', 'th' ];
$ok_valign = [ '', 'align-top', 'align-middle', 'align-bottom' ];
$ok_border_colours = [
	'', 'border-primary', 'border-secondary', 'border-success', 'border-danger',
	'border-warning', 'border-info', 'border-dark', 'border-light',
];
$ok_responsive = [
	'', 'responsive', 'responsive-sm', 'responsive-md',
	'responsive-lg', 'responsive-xl', 'responsive-xxl',
];

// ── Attributes ────────────────────────────────────────────────────────────
$head_rows      = ( isset( $attributes['head'] )  && is_array( $attributes['head'] ) )  ? $attributes['head']  : [];
$body_rows      = ( isset( $attributes['body'] )  && is_array( $attributes['body'] ) )  ? $attributes['body']  : [];
$foot_rows      = ( isset( $attributes['foot'] )  && is_array( $attributes['foot'] ) )  ? $attributes['foot']  : [];
$caption        = ! empty( $attributes['caption'] )     ? wp_kses_post( $attributes['caption'] ) : '';
$caption_side   = isset( $attributes['captionSide'] ) && $attributes['captionSide'] === 'top' ? 'top' : 'bottom';
$show_head      = isset( $attributes['showHead'] )  ? (bool) $attributes['showHead']  : true;
$show_foot      = isset( $attributes['showFoot'] )  ? (bool) $attributes['showFoot']  : false;
$striped        = ! empty( $attributes['striped'] );
$striped_cols   = ! empty( $attributes['stripedColumns'] );
$hover          = ! empty( $attributes['hover'] );
$bordered       = ! empty( $attributes['bordered'] );
$borderless     = ! empty( $attributes['borderless'] );
$small          = ! empty( $attributes['small'] );
$divider        = ! empty( $attributes['divider'] );

$table_variant  = ( isset( $attributes['tableVariant'] ) && in_array( $attributes['tableVariant'], $ok_table_variants, true ) )
                  ? $attributes['tableVariant'] : '';
$head_variant   = ( isset( $attributes['headVariant'] )  && in_array( $attributes['headVariant'],  $ok_head_variants,  true ) )
                  ? $attributes['headVariant'] : '';
$valign         = ( isset( $attributes['verticalAlign'] ) && in_array( $attributes['verticalAlign'], $ok_valign, true ) )
                  ? $attributes['verticalAlign'] : '';
$border_colour  = ( isset( $attributes['borderColour'] ) && in_array( $attributes['borderColour'], $ok_border_colours, true ) )
                  ? $attributes['borderColour'] : '';
$responsive     = ( isset( $attributes['responsive'] ) && in_array( $attributes['responsive'], $ok_responsive, true ) )
                  ? $attributes['responsive'] : '';

// ── Build table CSS class ─────────────────────────────────────────────────
$table_classes = implode( ' ', array_filter( [
	'table',
	$table_variant,
	$striped      ? 'table-striped'         : '',
	$striped_cols ? 'table-striped-columns' : '',
	$hover        ? 'table-hover'           : '',
	$bordered     ? 'table-bordered'        : '',
	$bordered && $border_colour ? $border_colour : '',
	$borderless   ? 'table-borderless'      : '',
	$small        ? 'table-sm'              : '',
	$valign,
], 'strlen' ) );

// ── Helper: render a set of rows as <tr><th|td>…</tr> ─────────────────────
if ( ! function_exists( 'wmblocks_table_render_rows' ) ) {
	function wmblocks_table_render_rows( array $rows, bool $is_head, array $ok_cell_colours, array $ok_aligns, array $ok_tags ): string {
		$html = '';
		foreach ( $rows as $row ) {
			$cells = isset( $row['cells'] ) && is_array( $row['cells'] ) ? $row['cells'] : [];

			// Row colour class
			$row_colour = ( isset( $row['colour'] ) && in_array( $row['colour'], $ok_cell_colours, true ) )
			              ? ' class="' . esc_attr( $row['colour'] ) . '"' : '';

			$html .= '<tr' . $row_colour . '>' . "\n";

			foreach ( $cells as $index => $cell ) {
				$content = isset( $cell['content'] ) ? wp_kses_post( $cell['content'] ) : '';
				$tag     = ( isset( $cell['tag'] ) && in_array( $cell['tag'], $ok_tags, true ) )
				           ? $cell['tag'] : ( $is_head ? 'th' : 'td' );
				$colour  = ( isset( $cell['colour'] ) && in_array( $cell['colour'], $ok_cell_colours, true ) )
				           ? $cell['colour'] : '';
				$align   = ( isset( $cell['align'] ) && in_array( $cell['align'], $ok_aligns, true ) )
				           ? $cell['align'] : '';

				$cell_classes = implode( ' ', array_filter( [ $colour, $align ], 'strlen' ) );
				$class_attr   = $cell_classes ? ' class="' . esc_attr( $cell_classes ) . '"' : '';

				// scope attribute for accessibility
				$scope = '';
				if ( $tag === 'th' ) {
					$scope = $is_head ? ' scope="col"' : ' scope="row"';
				}

				$html .= "\t<$tag$class_attr$scope>$content</$tag>\n";
			}

			$html .= '</tr>' . "\n";
		}
		return $html;
	}
}

// ── Block wrapper ─────────────────────────────────────────────────────────
$wrapper_attr = get_block_wrapper_attributes();

// ── Build output ──────────────────────────────────────────────────────────
$table_html = '';

// Caption top
if ( $caption && $caption_side === 'top' ) {
	$table_html .= '<caption class="caption-top">' . $caption . '</caption>' . "\n";
}

// thead
if ( $show_head && ! empty( $head_rows ) ) {
	$head_class = $head_variant ? ' class="' . esc_attr( $head_variant ) . '"' : '';
	$table_html .= '<thead' . $head_class . '>' . "\n";
	$table_html .= wmblocks_table_render_rows( $head_rows, true, $ok_cell_colours, $ok_aligns, $ok_tags );
	$table_html .= '</thead>' . "\n";
}

// tbody
if ( ! empty( $body_rows ) ) {
	$tbody_class = $divider ? ' class="table-group-divider"' : '';
	$table_html .= '<tbody' . $tbody_class . '>' . "\n";
	$table_html .= wmblocks_table_render_rows( $body_rows, false, $ok_cell_colours, $ok_aligns, $ok_tags );
	$table_html .= '</tbody>' . "\n";
}

// tfoot
if ( $show_foot && ! empty( $foot_rows ) ) {
	$table_html .= '<tfoot>' . "\n";
	$table_html .= wmblocks_table_render_rows( $foot_rows, false, $ok_cell_colours, $ok_aligns, $ok_tags );
	$table_html .= '</tfoot>' . "\n";
}

// Caption bottom
if ( $caption && $caption_side !== 'top' ) {
	$table_html .= '<caption>' . $caption . '</caption>' . "\n";
}

// ── Responsive wrapper ────────────────────────────────────────────────────
$table_output = '<table class="' . esc_attr( $table_classes ) . '">' . "\n" . $table_html . '</table>';

if ( $responsive ) {
	$resp_class = $responsive === 'responsive' ? 'table-responsive' : 'table-' . esc_attr( $responsive );
	$table_output = '<div class="' . $resp_class . '">' . "\n" . $table_output . "\n</div>";
}
?>
<div <?php echo $wrapper_attr; ?>>
	<?php echo $table_output; ?>
</div>
