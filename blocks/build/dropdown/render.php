<?php
/**
 * render.php — Bootstrap Dropdown block
 *
 * Available variables:
 *   $attributes  – block attribute values
 *   $content     – unused (no InnerBlocks)
 *   $block       – WP_Block instance
 */

// ── Attributes ────────────────────────────────────────────────────────────
$trigger_text    = ! empty( $attributes['triggerText'] )    ? wp_kses_post( $attributes['triggerText'] )  : 'Dropdown';
$trigger_variant = ! empty( $attributes['triggerVariant'] ) ? esc_attr( $attributes['triggerVariant'] )   : 'btn-primary';
$trigger_size    = ! empty( $attributes['triggerSize'] )    ? esc_attr( $attributes['triggerSize'] )      : '';
$split_button    = ! empty( $attributes['splitButton'] );
$direction       = ! empty( $attributes['direction'] )      ? $attributes['direction']                     : 'dropdown';
$menu_align      = ! empty( $attributes['menuAlign'] )      ? esc_attr( $attributes['menuAlign'] )        : '';
$dark_menu       = ! empty( $attributes['darkMenu'] );
$auto_close      = isset( $attributes['autoClose'] )        ? $attributes['autoClose']                    : 'true';
$items           = ! empty( $attributes['items'] )          ? $attributes['items']                        : [];

// ── Validate direction ─────────────────────────────────────────────────────
// direction can be a space-separated set of classes e.g. "dropup dropup-center"
// We trust only known class tokens.
$allowed_dir_tokens = [
	'dropdown', 'dropup', 'dropend', 'dropstart', 'dropup-center', 'dropdown-center',
];
$direction_classes = implode( ' ', array_filter(
	explode( ' ', $direction ),
	fn( $t ) => in_array( $t, $allowed_dir_tokens, true )
) );
if ( empty( $direction_classes ) ) {
	$direction_classes = 'dropdown';
}

// ── Button base classes ────────────────────────────────────────────────────
$btn_base = implode( ' ', array_filter( [ 'btn', $trigger_variant, $trigger_size ], 'strlen' ) );

// ── Menu classes ───────────────────────────────────────────────────────────
$allowed_align_tokens = [
	'dropdown-menu-end',
	'dropdown-menu-sm-end', 'dropdown-menu-md-end',
	'dropdown-menu-lg-end', 'dropdown-menu-xl-end',
];
$safe_align = in_array( $menu_align, $allowed_align_tokens, true ) ? $menu_align : '';

$menu_class = implode( ' ', array_filter( [
	'dropdown-menu',
	$safe_align,
	$dark_menu ? 'dropdown-menu-dark' : '',
], 'strlen' ) );

// ── auto-close data attribute value ───────────────────────────────────────
$allowed_autoclose = [ 'true', 'false', 'inside', 'outside' ];
$auto_close_val    = in_array( $auto_close, $allowed_autoclose, true ) ? $auto_close : 'true';

// ── Unique dropdown ID (needed for aria-labelledby) ───────────────────────
$dropdown_id = 'dd-' . wp_unique_id();

// ── Block wrapper ─────────────────────────────────────────────────────────
$wrapper_attributes = get_block_wrapper_attributes( [
	'class' => $direction_classes,
] );



/**
 * Render the <li> items inside the dropdown <ul>.
 *
 * Supported item types:
 *   link    → <li><a class="dropdown-item">
 *   button  → <li><button class="dropdown-item">
 *   header  → <li><h6 class="dropdown-header">
 *   divider → <li><hr class="dropdown-divider">
 *   text    → <li><span class="dropdown-item-text">
 *
 * @param  array $items  Array of item objects from block attributes.
 * @return string        HTML string of <li> elements.
 */
if ( ! function_exists( 'wmblocks_render_dropdown_items' ) ) {
	function wmblocks_render_dropdown_items( array $items ): string {
		$html = '';

		foreach ( $items as $item ) {
			$type     = isset( $item['type'] )     ? $item['type']              : 'link';
			$label    = isset( $item['label'] )    ? wp_kses_post( $item['label'] ) : '';
			$href     = isset( $item['href'] )     ? esc_url( $item['href'] )   : '#';
			$disabled = ! empty( $item['disabled'] );
			$active   = ! empty( $item['active'] );

			switch ( $type ) {

				case 'divider':
					$html .= '<li><hr class="dropdown-divider"></li>' . "\n";
					break;

				case 'header':
					$html .= '<li><h6 class="dropdown-header">' . $label . '</h6></li>' . "\n";
					break;

				case 'text':
					$html .= '<li><span class="dropdown-item-text">' . $label . '</span></li>' . "\n";
					break;

				case 'button':
					$item_class = implode( ' ', array_filter( [
						'dropdown-item',
						$active   ? 'active'   : '',
						$disabled ? 'disabled' : '',
					], 'strlen' ) );
					$aria = $active ? ' aria-current="true"' : '';
					$dis  = $disabled ? ' disabled' : '';
					$html .= '<li><button type="button" class="' . esc_attr( $item_class ) . '"' . $aria . $dis . '>' . $label . '</button></li>' . "\n";
					break;

				case 'link':
				default:
					$item_class = implode( ' ', array_filter( [
						'dropdown-item',
						$active   ? 'active'   : '',
						$disabled ? 'disabled' : '',
					], 'strlen' ) );
					$aria     = $active   ? ' aria-current="true"'        : '';
					$tab      = $disabled ? ' tabindex="-1" aria-disabled="true"' : '';
					$html    .= '<li><a class="' . esc_attr( $item_class ) . '" href="' . $href . '"' . $aria . $tab . '>' . $label . '</a></li>' . "\n";
					break;
			}
		}

		return $html;
	}
}

?>

<div <?php echo $wrapper_attributes; ?>>

	<?php if ( $split_button ) : ?>
		<?php
		/*
		 * Split button: an action <button> + a separate caret <button> for the toggle.
		 * Both sit inside a btn-group.
		 */
		?>
		<div class="btn-group">
			<button type="button" class="<?php echo esc_attr( $btn_base ); ?>">
				<?php echo $trigger_text; ?>
			</button>
			<button
				type="button"
				class="<?php echo esc_attr( $btn_base ); ?> dropdown-toggle dropdown-toggle-split"
				data-bs-toggle="dropdown"
				aria-expanded="false"
				data-bs-auto-close="<?php echo esc_attr( $auto_close_val ); ?>"
				id="<?php echo $dropdown_id; ?>"
			>
				<span class="visually-hidden"><?php esc_html_e( 'Toggle Dropdown', 'wmblocks' ); ?></span>
			</button>
			<ul class="<?php echo esc_attr( $menu_class ); ?>" aria-labelledby="<?php echo $dropdown_id; ?>">
				<?php echo wmblocks_render_dropdown_items( $items ); ?>
			</ul>
		</div>

	<?php else : ?>
		<?php
		/*
		 * Single button: one <button> with dropdown-toggle carries both
		 * the label and the caret.
		 */
		?>
		<button
			class="<?php echo esc_attr( $btn_base ); ?> dropdown-toggle"
			type="button"
			data-bs-toggle="dropdown"
			aria-expanded="false"
			data-bs-auto-close="<?php echo esc_attr( $auto_close_val ); ?>"
			id="<?php echo $dropdown_id; ?>"
		>
			<?php echo $trigger_text; ?>
		</button>
		<ul class="<?php echo esc_attr( $menu_class ); ?>" aria-labelledby="<?php echo $dropdown_id; ?>">
			<?php echo wmblocks_render_dropdown_items( $items ); ?>
		</ul>

	<?php endif; ?>

</div>

