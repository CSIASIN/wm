<?php
/**
 * render.php — wmblocks/button-group
 *
 * Supports:
 *   - Basic btn-group (horizontal)
 *   - Vertical btn-group-vertical
 *   - Button toolbar (wraps multiple groups)
 *   - Radio / Checkbox toggle buttons (input-based)
 *   - Nested dropdown inside a group
 *   - Sizing: btn-group-lg / btn-group-sm
 *
 * NOTE: All allowlists are defined inline inside functions —
 * never via `global` — because WordPress runs render.php inside
 * a function scope where global variables are not accessible.
 */

// ── Helper: render a single standard button or link ───────────────────────
if ( ! function_exists( 'wmblocks_btngroup_render_button' ) ) {
	function wmblocks_btngroup_render_button( array $btn, string $group_size = '' ): string {

		$ok_variants = [
			'btn-primary','btn-secondary','btn-success','btn-danger',
			'btn-warning','btn-info','btn-light','btn-dark',
			'btn-outline-primary','btn-outline-secondary','btn-outline-success',
			'btn-outline-danger','btn-outline-warning','btn-outline-info',
			'btn-outline-light','btn-outline-dark',
		];
		$ok_sizes = [ '', 'btn-sm', 'btn-lg', 'btn-group-sm', 'btn-group-lg' ];

		$label    = isset( $btn['label'] )   ? wp_kses_post( $btn['label'] )   : 'Button';
		$href     = ! empty( $btn['href'] )  ? esc_url( $btn['href'] )         : '';
		$variant  = ( isset( $btn['variant'] ) && in_array( $btn['variant'], $ok_variants, true ) )
		            ? $btn['variant'] : 'btn-primary';
		$active   = ! empty( $btn['active'] );
		$disabled = ! empty( $btn['disabled'] );

		$classes = implode( ' ', array_filter(
			[ 'btn', $variant, $active ? 'active' : '', $disabled ? 'disabled' : '' ],
			'strlen'
		) );

		$aria_active   = $active   ? ' aria-pressed="true"' : '';
		$disabled_attr = $disabled ? ' disabled' : '';
		$dis_link_attr = $disabled ? ' tabindex="-1" aria-disabled="true"' : '';

		if ( $href ) {
			return '<a href="' . $href . '" class="' . esc_attr( $classes ) . '"' . $dis_link_attr . $aria_active . '>' . $label . '</a>';
		}

		return '<button type="button" class="' . esc_attr( $classes ) . '"' . $disabled_attr . $aria_active . '>' . $label . '</button>';
	}
}

// ── Helper: render a toggle input button (radio/checkbox) ─────────────────
if ( ! function_exists( 'wmblocks_btngroup_render_toggle' ) ) {
	function wmblocks_btngroup_render_toggle( array $btn, string $toggle_mode, string $group_name, int $index ): string {

		$ok_variants = [
			'btn-primary','btn-secondary','btn-success','btn-danger',
			'btn-warning','btn-info','btn-light','btn-dark',
			'btn-outline-primary','btn-outline-secondary','btn-outline-success',
			'btn-outline-danger','btn-outline-warning','btn-outline-info',
			'btn-outline-light','btn-outline-dark',
		];

		$label       = isset( $btn['label'] )      ? wp_kses_post( $btn['label'] )      : 'Button';
		$input_value = isset( $btn['inputValue'] )  ? esc_attr( $btn['inputValue'] )     : esc_attr( 'option' . ( $index + 1 ) );
		$variant     = ( isset( $btn['variant'] ) && in_array( $btn['variant'], $ok_variants, true ) )
		               ? $btn['variant'] : 'btn-primary';
		$active      = ! empty( $btn['active'] );
		$input_id    = 'btncheck-' . esc_attr( $group_name ) . '-' . $index;
		$input_type  = $toggle_mode === 'radio' ? 'radio' : 'checkbox';
		$autocomplete= $input_type === 'radio'  ? ' autocomplete="off"' : '';

		$html  = '<input type="' . $input_type . '" class="btn-check" name="' . esc_attr( $group_name ) . '"';
		$html .= ' id="' . $input_id . '" value="' . $input_value . '"' . $autocomplete;
		$html .= $active ? ' checked' : '';
		$html .= '>';
		$html .= '<label class="btn ' . esc_attr( $variant ) . '" for="' . $input_id . '">' . $label . '</label>';

		return $html;
	}
}

// ── Helper: render a nested dropdown inside the group ─────────────────────
if ( ! function_exists( 'wmblocks_btngroup_render_dropdown' ) ) {
	function wmblocks_btngroup_render_dropdown( array $btn, string $dd_id ): string {

		$ok_variants = [
			'btn-primary','btn-secondary','btn-success','btn-danger',
			'btn-warning','btn-info','btn-light','btn-dark',
			'btn-outline-primary','btn-outline-secondary','btn-outline-success',
			'btn-outline-danger','btn-outline-warning','btn-outline-info',
			'btn-outline-light','btn-outline-dark',
		];

		$label   = isset( $btn['label'] )   ? wp_kses_post( $btn['label'] ) : 'Dropdown';
		$variant = ( isset( $btn['variant'] ) && in_array( $btn['variant'], $ok_variants, true ) )
		           ? $btn['variant'] : 'btn-primary';
		$active  = ! empty( $btn['active'] );
		$dis     = ! empty( $btn['disabled'] );

		$btn_classes = implode( ' ', array_filter(
			[ 'btn', $variant, 'dropdown-toggle', $active ? 'active' : '', $dis ? 'disabled' : '' ],
			'strlen'
		) );

		$html  = '<div class="btn-group" role="group">';
		$html .= '<button type="button" id="' . esc_attr( $dd_id ) . '" class="' . esc_attr( $btn_classes ) . '"';
		$html .= ' data-bs-toggle="dropdown" aria-expanded="false">' . $label . '</button>';
		$html .= '<ul class="dropdown-menu" aria-labelledby="' . esc_attr( $dd_id ) . '">';

		foreach ( ( $btn['dropdownItems'] ?? [] ) as $item ) {
			if ( ! empty( $item['divider'] ) ) {
				$html .= '<li><hr class="dropdown-divider"></li>';
			} else {
				$item_label = isset( $item['label'] ) ? wp_kses_post( $item['label'] ) : '';
				$item_href  = ! empty( $item['href'] )  ? esc_url( $item['href'] )       : '#';
				$html .= '<li><a class="dropdown-item" href="' . $item_href . '">' . $item_label . '</a></li>';
			}
		}

		$html .= '</ul>';
		$html .= '</div>';

		return $html;
	}
}

// ── Read & sanitise block-level attributes ────────────────────────────────
$buttons     = ( isset( $attributes['buttons'] ) && is_array( $attributes['buttons'] ) )
               ? $attributes['buttons'] : [];
$group_mode  = isset( $attributes['groupMode'] )     ? $attributes['groupMode']     : 'group';
$toggle_mode = isset( $attributes['toggleMode'] )    ? $attributes['toggleMode']    : 'none';
$group_name  = isset( $attributes['inputGroupName'] ) ? sanitize_key( $attributes['inputGroupName'] ) : 'btngroup';
$size_raw    = isset( $attributes['size'] )          ? $attributes['size']          : '';
$alignment   = isset( $attributes['alignment'] )     ? $attributes['alignment']     : 'left';
$aria_label  = isset( $attributes['ariaLabel'] )     ? esc_attr( $attributes['ariaLabel'] ) : 'Button group';

// Validate size
$ok_sizes = [ '', 'btn-group-sm', 'btn-group-lg' ];
$safe_size = in_array( $size_raw, $ok_sizes, true ) ? $size_raw : '';

// Validate group mode
$ok_modes = [ 'group', 'toolbar', 'vertical' ];
if ( ! in_array( $group_mode, $ok_modes, true ) ) $group_mode = 'group';

// Validate toggle mode
$ok_toggle = [ 'none', 'radio', 'checkbox' ];
if ( ! in_array( $toggle_mode, $ok_toggle, true ) ) $toggle_mode = 'none';
$is_toggle = $toggle_mode !== 'none';

// Alignment wrapper class
$align_map   = [ 'left' => 'justify-content-start', 'center' => 'justify-content-center', 'right' => 'justify-content-end' ];
$align_class = $align_map[ $alignment ] ?? 'justify-content-start';
$needs_align_wrap = $alignment !== 'left';

// ── Unique ID for any nested dropdowns ────────────────────────────────────
$unique_prefix = 'wmbg-' . wp_unique_id();

// ── Build inner HTML (all buttons/items) ──────────────────────────────────
$inner_html = '';

foreach ( $buttons as $index => $btn ) {
	$dd_id = $unique_prefix . '-dd-' . $index;

	if ( $is_toggle ) {
		$inner_html .= wmblocks_btngroup_render_toggle( $btn, $toggle_mode, $group_name, $index );
	} elseif ( ! empty( $btn['isDropdown'] ) ) {
		$inner_html .= wmblocks_btngroup_render_dropdown( $btn, $dd_id );
	} else {
		$inner_html .= wmblocks_btngroup_render_button( $btn, $safe_size );
	}
}

// ── Wrapper attributes ────────────────────────────────────────────────────
$wrapper_extra = $needs_align_wrap ? [ 'class' => 'd-flex ' . $align_class ] : [];
$wrapper_attr  = get_block_wrapper_attributes( $wrapper_extra );
?>
<div <?php echo $wrapper_attr; ?>>

<?php if ( $group_mode === 'toolbar' ) :
	// ── Button Toolbar — wraps the group inside a toolbar container ───
	?>
	<div class="btn-toolbar <?php echo esc_attr( $safe_size ); ?>" role="toolbar" aria-label="<?php echo $aria_label; ?>">
		<div class="btn-group me-2" role="group">
			<?php echo $inner_html; ?>
		</div>
	</div>

<?php elseif ( $group_mode === 'vertical' ) :
	// ── Vertical group ────────────────────────────────────────────────
	$grp_classes = implode( ' ', array_filter( [ 'btn-group-vertical', $safe_size ], 'strlen' ) );
	?>
	<div class="<?php echo esc_attr( $grp_classes ); ?>" role="group" aria-label="<?php echo $aria_label; ?>">
		<?php echo $inner_html; ?>
	</div>

<?php else :
	// ── Standard horizontal btn-group ────────────────────────────────
	$grp_classes = implode( ' ', array_filter( [ 'btn-group', $safe_size ], 'strlen' ) );
	?>
	<div class="<?php echo esc_attr( $grp_classes ); ?>" role="group" aria-label="<?php echo $aria_label; ?>">
		<?php echo $inner_html; ?>
	</div>

<?php endif; ?>

</div>
