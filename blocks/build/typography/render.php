<?php
/**
 * render.php — wmblocks/typography
 *
 * Renders one of seven Bootstrap typography elements:
 *
 *   heading     → <h1–h6 class="[display-*] [text-*] [align]"> or
 *                 <p class="h1 [display-*]"> (heading class on non-heading tag)
 *                 with optional <small class="text-body-secondary"> subtext
 *
 *   lead        → <p class="lead [text-*] [align]">
 *
 *   blockquote  → <figure class="[align]">
 *                   <blockquote class="blockquote"><p>…</p></blockquote>
 *                   <figcaption class="blockquote-footer">… <cite>…</cite></figcaption>
 *                 </figure>
 *
 *   list        → <ul|ol class="[list-unstyled|list-inline] [text-*]">
 *                   <li [class="list-inline-item"]>…</li>
 *                 </ul|ol>
 *
 *   dl          → <dl class="row">
 *                   <dt class="col-sm-3">…</dt>
 *                   <dd class="col-sm-9">…</dd>
 *                 </dl>
 *
 *   abbr        → <p><abbr title="…" [class="initialism"]>…</abbr></p>
 *
 *   inline      → reference card of all inline element examples
 *
 * All allowlists defined inline — no `global` — safe for WP render scope.
 */

// ── Allowlists ────────────────────────────────────────────────────────────
$ok_element_types = [ 'heading', 'lead', 'blockquote', 'list', 'dl', 'abbr', 'inline' ];
$ok_heading_levels= [ 'h1','h2','h3','h4','h5','h6' ];
$ok_heading_class_tags = [ 'p','span','div' ];
$ok_display_classes = [ '','display-1','display-2','display-3','display-4','display-5','display-6' ];
$ok_align         = [ '','text-start','text-center','text-end' ];
$ok_text_colors   = [
	'','text-primary','text-secondary','text-success','text-danger',
	'text-warning','text-info','text-dark','text-body-secondary','text-body-emphasis',
];
$ok_list_styles   = [ '','list-unstyled','list-inline' ];
$ok_list_types    = [ 'ul','ol' ];
$ok_dl_term_cols  = [ 'col-sm-2','col-sm-3','col-sm-4','col-sm-6' ];
$ok_dl_def_cols   = [ 'col-sm-10','col-sm-9','col-sm-8','col-sm-6' ];

// ── Attributes ────────────────────────────────────────────────────────────
$element_type   = ( isset( $attributes['elementType'] ) && in_array( $attributes['elementType'], $ok_element_types, true ) )
                  ? $attributes['elementType'] : 'heading';

$content        = ! empty( $attributes['content'] )        ? wp_kses_post( $attributes['content'] )        : '';
$heading_level  = ( isset( $attributes['headingLevel'] )   && in_array( $attributes['headingLevel'],   $ok_heading_levels,      true ) ) ? $attributes['headingLevel']   : 'h2';
$use_h_class    = ! empty( $attributes['useHeadingClass'] );
$h_class_tag    = ( isset( $attributes['headingClassTag'] ) && in_array( $attributes['headingClassTag'], $ok_heading_class_tags, true ) ) ? $attributes['headingClassTag'] : 'p';
$display_class  = ( isset( $attributes['displayClass'] )   && in_array( $attributes['displayClass'],   $ok_display_classes,     true ) ) ? $attributes['displayClass']   : '';
$sub_text       = ! empty( $attributes['subText'] )        ? wp_kses_post( $attributes['subText'] )        : '';
$alignment      = ( isset( $attributes['alignment'] )      && in_array( $attributes['alignment'],      $ok_align,               true ) ) ? $attributes['alignment']      : '';
$text_color     = ( isset( $attributes['textColor'] )      && in_array( $attributes['textColor'],      $ok_text_colors,         true ) ) ? $attributes['textColor']      : '';
$lead_content   = ! empty( $attributes['leadContent'] )    ? wp_kses_post( $attributes['leadContent'] )    : '';

$quote_text     = ! empty( $attributes['quoteText'] )      ? wp_kses_post( $attributes['quoteText'] )      : '';
$quote_source   = ! empty( $attributes['quoteSource'] )    ? wp_kses_post( $attributes['quoteSource'] )    : '';
$quote_src_title= ! empty( $attributes['quoteSourceTitle'] )? wp_kses_post( $attributes['quoteSourceTitle'] ) : '';

$list_type      = ( isset( $attributes['listType'] )       && in_array( $attributes['listType'],       $ok_list_types,          true ) ) ? $attributes['listType']       : 'ul';
$list_style     = ( isset( $attributes['listStyle'] )      && in_array( $attributes['listStyle'],      $ok_list_styles,         true ) ) ? $attributes['listStyle']      : '';
$list_items     = ( isset( $attributes['listItems'] )      && is_array( $attributes['listItems'] ) )   ? $attributes['listItems']       : [];

$dl_items       = ( isset( $attributes['dlItems'] )        && is_array( $attributes['dlItems'] ) )     ? $attributes['dlItems']         : [];
$dl_term_cols   = ( isset( $attributes['dlTermCols'] )     && in_array( $attributes['dlTermCols'],     $ok_dl_term_cols,        true ) ) ? $attributes['dlTermCols']     : 'col-sm-3';
$dl_def_cols    = ( isset( $attributes['dlDefCols'] )      && in_array( $attributes['dlDefCols'],      $ok_dl_def_cols,         true ) ) ? $attributes['dlDefCols']      : 'col-sm-9';

$abbr_text      = ! empty( $attributes['abbrText'] )       ? wp_kses_post( $attributes['abbrText'] )       : 'HTML';
$abbr_title     = ! empty( $attributes['abbrTitle'] )      ? esc_attr( $attributes['abbrTitle'] )           : '';
$abbr_initialism= ! empty( $attributes['abbrInitialism'] );

// ── Block wrapper ─────────────────────────────────────────────────────────
$wrapper_attr = get_block_wrapper_attributes();

// ── Helper: build class string from array ─────────────────────────────────
function wm_cls( array $parts ): string {
	return implode( ' ', array_filter( $parts, 'strlen' ) );
}

// ── Build HTML per element type ───────────────────────────────────────────
$output = '';

switch ( $element_type ) {

	// ── HEADING ───────────────────────────────────────────────────────
	case 'heading': {
		$sub_html = $sub_text
			? ' <small class="text-body-secondary">' . $sub_text . '</small>'
			: '';

		if ( $use_h_class ) {
			// Heading class on a non-heading tag (e.g. <p class="h2">)
			$tag       = esc_attr( $h_class_tag );
			$cls       = wm_cls( [ $heading_level, $display_class, $alignment, $text_color ] );
			$class_attr = $cls ? ' class="' . esc_attr( $cls ) . '"' : '';
			$output    = "<$tag$class_attr>$content$sub_html</$tag>";
		} else {
			// Semantic heading element
			$cls        = wm_cls( [ $display_class, $alignment, $text_color ] );
			$class_attr = $cls ? ' class="' . esc_attr( $cls ) . '"' : '';
			$tag        = esc_attr( $heading_level );
			$output     = "<$tag$class_attr>$content$sub_html</$tag>";
		}
		break;
	}

	// ── LEAD ──────────────────────────────────────────────────────────
	case 'lead': {
		$cls        = wm_cls( [ 'lead', $alignment, $text_color ] );
		$output     = '<p class="' . esc_attr( $cls ) . '">' . $lead_content . '</p>';
		break;
	}

	// ── BLOCKQUOTE ────────────────────────────────────────────────────
	case 'blockquote': {
		$figure_cls  = $alignment ? ' class="' . esc_attr( $alignment ) . '"' : '';

		$attribution = '';
		if ( $quote_source || $quote_src_title ) {
			$source_html = esc_html( $quote_source );
			if ( $quote_src_title ) {
				$source_html .= ' <cite title="' . esc_attr( $quote_src_title ) . '">' . wp_kses_post( $quote_src_title ) . '</cite>';
			}
			$attribution = "\n  <figcaption class=\"blockquote-footer\">$source_html</figcaption>";
		}

		$output = "<figure$figure_cls>\n"
		        . "  <blockquote class=\"blockquote\">\n"
		        . "    <p>$quote_text</p>\n"
		        . "  </blockquote>$attribution\n"
		        . "</figure>";
		break;
	}

	// ── LIST ──────────────────────────────────────────────────────────
	case 'list': {
		$tag       = esc_attr( $list_type );
		$cls       = wm_cls( [ $list_style, $text_color ] );
		$class_attr = $cls ? ' class="' . esc_attr( $cls ) . '"' : '';
		$li_class  = $list_style === 'list-inline' ? ' class="list-inline-item"' : '';

		$items_html = '';
		foreach ( $list_items as $item ) {
			$text        = isset( $item['text'] ) ? wp_kses_post( $item['text'] ) : '';
			$items_html .= "  <li$li_class>$text</li>\n";
		}

		$output = "<$tag$class_attr>\n$items_html</$tag>";
		break;
	}

	// ── DESCRIPTION LIST ──────────────────────────────────────────────
	case 'dl': {
		$dt_cls     = esc_attr( $dl_term_cols );
		$dd_cls     = esc_attr( $dl_def_cols );

		$pairs_html = '';
		foreach ( $dl_items as $item ) {
			$term       = isset( $item['term'] )       ? wp_kses_post( $item['term'] )       : '';
			$definition = isset( $item['definition'] ) ? wp_kses_post( $item['definition'] ) : '';
			$pairs_html .= "  <dt class=\"$dt_cls\">$term</dt>\n";
			$pairs_html .= "  <dd class=\"$dd_cls\">$definition</dd>\n";
		}

		$output = "<dl class=\"row\">\n$pairs_html</dl>";
		break;
	}

	// ── ABBREVIATION ──────────────────────────────────────────────────
	case 'abbr': {
		$abbr_cls   = $abbr_initialism ? ' class="initialism"' : '';
		$title_attr = $abbr_title ? ' title="' . esc_attr( $abbr_title ) . '"' : '';
		$output     = '<p><abbr' . $title_attr . $abbr_cls . '>' . $abbr_text . '</abbr></p>';
		break;
	}

	// ── INLINE TEXT ELEMENTS ──────────────────────────────────────────
	case 'inline': {
		$output = '<div class="wmblocks-typography-inline-ref">'
		        . '<p>' . __( 'You can use the', 'wmblocks' ) . ' <mark>' . __( 'mark tag', 'wmblocks' ) . '</mark> ' . __( 'to highlight text.', 'wmblocks' ) . '</p>'
		        . '<p><del>' . __( 'This line of text is meant to be treated as deleted text.', 'wmblocks' ) . '</del></p>'
		        . '<p><s>' . __( 'This line of text is meant to be treated as no longer accurate.', 'wmblocks' ) . '</s></p>'
		        . '<p><ins>' . __( 'This line of text is meant to be treated as an addition to the document.', 'wmblocks' ) . '</ins></p>'
		        . '<p><u>' . __( 'This line of text will render as underlined.', 'wmblocks' ) . '</u></p>'
		        . '<p><small>' . __( 'This line of text is meant to be treated as fine print.', 'wmblocks' ) . '</small></p>'
		        . '<p><strong>' . __( 'This line rendered as bold text.', 'wmblocks' ) . '</strong></p>'
		        . '<p><em>' . __( 'This line rendered as italicized text.', 'wmblocks' ) . '</em></p>'
		        . '</div>';
		break;
	}

} // end switch

?>
<div <?php echo $wrapper_attr; ?>>
	<?php echo $output; ?>
</div>
