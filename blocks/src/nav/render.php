<?php
/**
 * render.php — wmblocks/nav
 *
 * Renders a Bootstrap 5.3 nav component in all supported variants:
 *
 *   Styles:      base (.nav), tabs (.nav-tabs), pills (.nav-pills), underline (.nav-underline)
 *   Orientation: horizontal (default), vertical (.flex-column)
 *   Alignment:   left (default), center (.justify-content-center), right (.justify-content-end)
 *   Fill:        none, nav-fill, nav-justified
 *   Markup:      <ul>/<li> list (default) or <nav>/<a> flat structure
 *   Dropdowns:   any item can carry a Bootstrap dropdown menu
 *
 * All allowlists are defined inline — no `global` — because WordPress runs
 * render.php inside a function scope.
 */

// ── Allowlists ────────────────────────────────────────────────────────────
$ok_styles     = [ '', 'nav-tabs', 'nav-pills', 'nav-underline' ];
$ok_align      = [ '', 'justify-content-center', 'justify-content-end' ];
$ok_fill       = [ '', 'nav-fill', 'nav-justified' ];

// ── Attributes ────────────────────────────────────────────────────────────
$items          = ( isset( $attributes['items'] ) && is_array( $attributes['items'] ) )
                  ? $attributes['items'] : [];
$nav_style      = ( isset( $attributes['navStyle'] ) && in_array( $attributes['navStyle'], $ok_styles, true ) )
                  ? $attributes['navStyle'] : '';
$orientation    = isset( $attributes['orientation'] ) ? $attributes['orientation'] : 'horizontal';
$alignment      = ( isset( $attributes['alignment'] ) && in_array( $attributes['alignment'], $ok_align, true ) )
                  ? $attributes['alignment'] : '';
$fill           = ( isset( $attributes['fill'] ) && in_array( $attributes['fill'], $ok_fill, true ) )
                  ? $attributes['fill'] : '';
$use_nav_el     = ! empty( $attributes['useNavElement'] );
$aria_label     = ! empty( $attributes['ariaLabel'] ) ? esc_attr( $attributes['ariaLabel'] ) : 'Navigation';

$is_vertical    = $orientation === 'vertical';

// ── Build nav container class ─────────────────────────────────────────────
$nav_classes = implode( ' ', array_filter( [
	'nav',
	$nav_style,
	$is_vertical ? 'flex-column' : '',
	! $is_vertical ? $alignment  : '',
	! $is_vertical ? $fill       : '',
], 'strlen' ) );

// ── Helper: render dropdown menu items ────────────────────────────────────
if ( ! function_exists( 'wmblocks_nav_dropdown_menu' ) ) {
	function wmblocks_nav_dropdown_menu( array $dd_items, string $dd_id ): string {
		$html = '<ul class="dropdown-menu" aria-labelledby="' . esc_attr( $dd_id ) . '">' . "\n";
		foreach ( $dd_items as $di ) {
			if ( ! empty( $di['divider'] ) ) {
				$html .= '<li><hr class="dropdown-divider"></li>' . "\n";
			} else {
				$label = isset( $di['label'] ) ? wp_kses_post( $di['label'] ) : '';
				$href  = ! empty( $di['href'] )  ? esc_url( $di['href'] )       : '#';
				$html .= '<li><a class="dropdown-item" href="' . $href . '">' . $label . '</a></li>' . "\n";
			}
		}
		$html .= '</ul>' . "\n";
		return $html;
	}
}

// ── Build all nav items HTML ──────────────────────────────────────────────
$unique_prefix = 'wmnav-' . wp_unique_id();
$items_html    = '';

foreach ( $items as $index => $item ) {
	$label        = isset( $item['label'] )   ? wp_kses_post( $item['label'] ) : '';
	$href         = ! empty( $item['href'] )  ? esc_url( $item['href'] )       : '#';
	$active       = ! empty( $item['active'] );
	$disabled     = ! empty( $item['disabled'] );
	$has_dropdown = ! empty( $item['hasDropdown'] );
	$dd_items     = ( $has_dropdown && isset( $item['dropdownItems'] ) && is_array( $item['dropdownItems'] ) )
	                ? $item['dropdownItems'] : [];
	$dd_id        = $unique_prefix . '-dd-' . $index;

	// ── Link class ─────────────────────────────────────────────────────
	$link_classes = implode( ' ', array_filter( [
		'nav-link',
		$active       ? 'active'         : '',
		$disabled     ? 'disabled'       : '',
		$has_dropdown ? 'dropdown-toggle' : '',
	], 'strlen' ) );

	// ── ARIA attributes on the link ────────────────────────────────────
	$aria_current  = $active   ? ' aria-current="page"'    : '';
	$aria_disabled = $disabled ? ' aria-disabled="true"'   : '';
	$aria_expanded = $has_dropdown ? ' aria-expanded="false"' : '';
	$aria_controls = $has_dropdown ? ' aria-controls="' . esc_attr( $dd_id ) . 'Menu"' : '';

	// ── data-bs-toggle for dropdown ────────────────────────────────────
	$dd_toggle     = $has_dropdown ? ' data-bs-toggle="dropdown"' : '';
	$dd_id_attr    = $has_dropdown ? ' id="' . esc_attr( $dd_id ) . '"' : '';

	// ── Render as <ul>/<li> structure (default, recommended) ──────────
	if ( ! $use_nav_el ) {

		$item_li_class = 'nav-item' . ( $has_dropdown ? ' dropdown' : '' );

		if ( $has_dropdown ) {
			// Dropdown item — <button> toggle + <ul> menu inside a div.btn-group wrapper
			$items_html .= '<li class="' . esc_attr( $item_li_class ) . '">' . "\n";
			$items_html .= '<a class="' . esc_attr( $link_classes ) . '" href="' . $href . '"'
			             . $dd_id_attr . $dd_toggle . $aria_expanded . $aria_controls
			             . $aria_current . $aria_disabled . '>' . $label . '</a>' . "\n";
			$items_html .= wmblocks_nav_dropdown_menu( $dd_items, $dd_id );
			$items_html .= '</li>' . "\n";

		} else {
			// Standard nav item
			$items_html .= '<li class="' . esc_attr( $item_li_class ) . '">' . "\n";
			$items_html .= '<a class="' . esc_attr( $link_classes ) . '" href="' . $href . '"'
			             . $aria_current . $aria_disabled . '>' . $label . '</a>' . "\n";
			$items_html .= '</li>' . "\n";
		}

	} else {
		// ── Flat <nav>/<a> structure ──────────────────────────────────
		if ( $has_dropdown ) {
			// Wrap dropdown in a small div to anchor the menu
			$items_html .= '<div class="nav-item dropdown">' . "\n";
			$items_html .= '<a class="' . esc_attr( $link_classes ) . '" href="' . $href . '"'
			             . $dd_id_attr . $dd_toggle . $aria_expanded . $aria_controls
			             . $aria_current . $aria_disabled . '>' . $label . '</a>' . "\n";
			$items_html .= wmblocks_nav_dropdown_menu( $dd_items, $dd_id );
			$items_html .= '</div>' . "\n";
		} else {
			$items_html .= '<a class="' . esc_attr( $link_classes ) . '" href="' . $href . '"'
			             . $aria_current . $aria_disabled . '>' . $label . '</a>' . "\n";
		}
	}
}

// ── Block wrapper ─────────────────────────────────────────────────────────
$wrapper_attr = get_block_wrapper_attributes();
?>
<div <?php echo $wrapper_attr; ?>>

<?php if ( ! $use_nav_el ) : ?>
	<?php /* <ul> / <li> structure */ ?>
	<ul class="<?php echo esc_attr( $nav_classes ); ?>">
		<?php echo $items_html; ?>
	</ul>

<?php else : ?>
	<?php /* Flat <nav> / <a> structure */ ?>
	<nav class="<?php echo esc_attr( $nav_classes ); ?>" aria-label="<?php echo $aria_label; ?>">
		<?php echo $items_html; ?>
	</nav>

<?php endif; ?>

</div>
