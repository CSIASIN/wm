<?php
/**
 * render.php — wmblocks/badge-button
 *
 * Outputs a Bootstrap button with a positioned badge/indicator/SVG marker.
 *
 * Three badge types:
 *   text  → <span class="position-absolute … badge rounded-pill text-bg-{colour}">+99</span>
 *   dot   → <span class="position-absolute … p-2 bg-{colour} border border-white rounded-circle"></span>
 *   svg   → <svg class="position-absolute … bi"> (caret-down etc.)
 *
 * The button carries position-relative. The badge carries position-absolute
 * with top-{0|50|100} start-{0|50|100} translate-middle.
 *
 * An optional Bootstrap Icon can be placed inside the button itself
 * (before or after the label text).
 *
 * All allowlists defined inline — no `global` — safe for WP render scope.
 */

// ── Allowlists ────────────────────────────────────────────────────────────
$ok_btn_variants = [
	'btn-primary','btn-secondary','btn-success','btn-danger',
	'btn-warning','btn-info','btn-light','btn-dark',
	'btn-outline-primary','btn-outline-secondary','btn-outline-success',
	'btn-outline-danger','btn-outline-warning','btn-outline-info',
	'btn-outline-light','btn-outline-dark',
];
$ok_btn_sizes   = [ '', 'btn-lg', 'btn-sm' ];
$ok_badge_types = [ 'text', 'dot', 'svg' ];
$ok_badge_colours = [
	'text-bg-danger','text-bg-primary','text-bg-secondary','text-bg-success',
	'text-bg-warning','text-bg-info','text-bg-dark','text-bg-light',
	// dot colours
	'bg-danger','bg-primary','bg-secondary','bg-success',
	'bg-warning','bg-info','bg-dark','bg-light',
];
$ok_badge_shapes = [ '', 'rounded-pill', 'rounded-circle' ];
$ok_top          = [ 'top-0', 'top-50', 'top-100' ];
$ok_start        = [ 'start-0', 'start-50', 'start-100' ];
$ok_translate    = [ 'translate-middle', 'translate-middle-x', 'translate-middle-y', '' ];
$ok_border_col   = [ '', 'border-white', 'border-light', 'border-dark', 'border-primary' ];
$ok_icon_pos     = [ 'before', 'after' ];
$ok_targets      = [ '_self', '_blank', '_parent', '_top' ];

// ── Bootstrap Icons SVG paths for button icon ─────────────────────────────
if ( ! function_exists( 'wmblocks_bb_btn_icon_paths' ) ) {
	function wmblocks_bb_btn_icon_paths(): array {
		return [
			'envelope'       => 'M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z',
			'bell'           => 'M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zM8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z',
			'cart'           => 'M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z',
			'person'         => 'M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z',
			'chat'           => 'M2.678 11.894a1 1 0 0 1 .287.801 10.97 10.97 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8.06 8.06 0 0 0 8 14c3.996 0 7-2.807 7-6 0-3.192-3.004-6-7-6S1 4.808 1 8c0 1.468.617 2.83 1.678 3.894zm-.493 3.905a21.682 21.682 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a9.68 9.68 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105z',
			'heart'          => 'm8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z',
			'star'           => 'M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z',
			'search'         => 'M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.099 6.5 6.5 0 0 0 0 0zm-5.44 1.06a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11z',
			'house'          => 'M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5ZM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5 5 5Z',
			'gear'           => 'M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492zM5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0z M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.892 3.433-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.892-1.64-.901-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52l-.094-.319zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115l.094-.319z',
			'download'       => 'M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z',
			'share'          => 'M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5z',
			'arrow-right'    => 'M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z',
			'play-fill'      => 'M11.596 8.697l-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z',
			'caret-down-fill'=> 'M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z',
			'three-dots'     => 'M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z',
		];
	}
}

// ── SVG paths for badge/marker ─────────────────────────────────────────────
if ( ! function_exists( 'wmblocks_bb_badge_svg_paths' ) ) {
	function wmblocks_bb_badge_svg_paths(): array {
		return [
			'caret-down-fill' => 'M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z',
			'caret-up-fill'   => 'M7.247 4.86l-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z',
			'caret-left-fill' => 'M3.86 8.753l5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z',
			'caret-right-fill'=> 'M12.14 8.753l-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z',
			'arrow-down'      => 'M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z',
			'arrow-up'        => 'M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 0 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z',
			'chevron-down'    => 'M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z',
			'plus-circle-fill'=> 'M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z',
			'exclamation'     => 'M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.553.553 0 0 1-1.1 0L7.1 4.995z',
			'check2'          => 'M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z',
			'fire'            => 'M8 16c3.314 0 6-2 6-5.5 0-1.5-.5-4-2.5-6 .25 1.5-1.25 2-1.25 2C11 4 9 .5 6 0c.357 2 .5 4-2 6-1.25 1-2 2.729-2 4.5C2 14 4.686 16 8 16zm0-1c-1.657 0-3-1-3-2.75 0-.75.25-2 1.25-3C6.125 10 7 10.5 7 10.5c-.375-1.25.5-3.25 2-3.5-.179 1-.25 2 1 3 .625.5 1 1.364 1 2.25C11 14 9.657 15 8 15z',
		];
	}
}

// ── Read attributes ───────────────────────────────────────────────────────
$btn_label       = ! empty( $attributes['btnLabel'] )      ? wp_kses_post( $attributes['btnLabel'] )         : 'Button';
$btn_variant     = ( isset( $attributes['btnVariant'] ) && in_array( $attributes['btnVariant'], $ok_btn_variants, true ) )
                   ? $attributes['btnVariant'] : 'btn-primary';
$btn_size        = ( isset( $attributes['btnSize'] ) && in_array( $attributes['btnSize'], $ok_btn_sizes, true ) )
                   ? $attributes['btnSize'] : '';
$btn_href        = ! empty( $attributes['btnHref'] )       ? esc_url( $attributes['btnHref'] )               : '';
$btn_target      = ( isset( $attributes['btnTarget'] ) && in_array( $attributes['btnTarget'], $ok_targets, true ) )
                   ? $attributes['btnTarget'] : '_self';
$btn_icon_name   = isset( $attributes['btnIconName'] )     ? sanitize_key( $attributes['btnIconName'] )      : '';
$btn_icon_pos    = ( isset( $attributes['btnIconPosition'] ) && in_array( $attributes['btnIconPosition'], $ok_icon_pos, true ) )
                   ? $attributes['btnIconPosition'] : 'before';

$badge_type      = ( isset( $attributes['badgeType'] ) && in_array( $attributes['badgeType'], $ok_badge_types, true ) )
                   ? $attributes['badgeType'] : 'text';
$badge_label     = ! empty( $attributes['badgeLabel'] )    ? wp_kses_post( $attributes['badgeLabel'] )       : '+99';
$badge_colour    = ( isset( $attributes['badgeColour'] ) && in_array( $attributes['badgeColour'], $ok_badge_colours, true ) )
                   ? $attributes['badgeColour'] : 'text-bg-danger';
$badge_shape     = ( isset( $attributes['badgeShape'] ) && in_array( $attributes['badgeShape'], $ok_badge_shapes, true ) )
                   ? $attributes['badgeShape'] : 'rounded-pill';
$badge_top       = ( isset( $attributes['badgeTop'] ) && in_array( $attributes['badgeTop'], $ok_top, true ) )
                   ? $attributes['badgeTop'] : 'top-0';
$badge_start     = ( isset( $attributes['badgeStart'] ) && in_array( $attributes['badgeStart'], $ok_start, true ) )
                   ? $attributes['badgeStart'] : 'start-100';
$badge_translate = ( isset( $attributes['badgeTranslate'] ) && in_array( $attributes['badgeTranslate'], $ok_translate, true ) )
                   ? $attributes['badgeTranslate'] : 'translate-middle';
$badge_border    = ( isset( $attributes['badgeBorderColour'] ) && in_array( $attributes['badgeBorderColour'], $ok_border_col, true ) )
                   ? $attributes['badgeBorderColour'] : '';
$badge_svg_name  = isset( $attributes['badgeSvgName'] )    ? sanitize_key( $attributes['badgeSvgName'] )     : 'caret-down-fill';
$badge_a11y      = ! empty( $attributes['badgeA11yLabel'] )? esc_html( $attributes['badgeA11yLabel'] )       : 'unread messages';
$alignment       = isset( $attributes['alignment'] )       ? $attributes['alignment']                        : 'left';

// ── Button position class ─────────────────────────────────────────────────
// absolute base position class for the badge
$badge_pos_class = implode( ' ', array_filter(
	[ 'position-absolute', $badge_top, $badge_start, $badge_translate ],
	'strlen'
) );

// ── Build the button's own SVG icon ──────────────────────────────────────
$btn_svg_html = '';
if ( $btn_icon_name && $btn_icon_name !== 'none' ) {
	$btn_icon_paths = wmblocks_bb_btn_icon_paths();
	if ( isset( $btn_icon_paths[ $btn_icon_name ] ) ) {
		$path = esc_attr( $btn_icon_paths[ $btn_icon_name ] );
		$btn_svg_html = '<svg xmlns="http://www.w3.org/2000/svg" class="bi" width="1em" height="1em"'
		              . ' viewBox="0 0 16 16" fill="currentColor" aria-hidden="true"'
		              . ' style="vertical-align:-0.125em;">'
		              . '<path d="' . $path . '"/></svg>';
	}
}

// ── Build the badge HTML ──────────────────────────────────────────────────
$a11y_span = $badge_a11y
	? '<span class="visually-hidden">' . $badge_a11y . '</span>'
	: '';

if ( $badge_type === 'text' ) {
	// ── Text badge ────────────────────────────────────────────────────
	$badge_classes = implode( ' ', array_filter(
		[ $badge_pos_class, 'badge', $badge_shape, $badge_colour,
		  $badge_border ? 'border ' . $badge_border : '' ],
		'strlen'
	) );
	$badge_html = '<span class="' . esc_attr( $badge_classes ) . '">'
	            . $badge_label
	            . $a11y_span
	            . '</span>';

} elseif ( $badge_type === 'dot' ) {
	// ── Dot indicator — no text, just coloured circle ─────────────────
	$dot_classes = implode( ' ', array_filter(
		[ $badge_pos_class, 'p-2', $badge_colour, 'border border-2 border-white rounded-circle' ],
		'strlen'
	) );
	$badge_html = '<span class="' . esc_attr( $dot_classes ) . '">' . $a11y_span . '</span>';

} else {
	// ── SVG marker ────────────────────────────────────────────────────
	$badge_svg_paths = wmblocks_bb_badge_svg_paths();
	$svg_path        = isset( $badge_svg_paths[ $badge_svg_name ] )
	                   ? esc_attr( $badge_svg_paths[ $badge_svg_name ] )
	                   : esc_attr( $badge_svg_paths['caret-down-fill'] );

	// Use current button colour for the SVG fill
	$badge_html = '<svg xmlns="http://www.w3.org/2000/svg" class="bi ' . esc_attr( $badge_pos_class ) . ' mt-1"'
	            . ' width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor"'
	            . ' aria-hidden="true">'
	            . '<path d="' . $svg_path . '"/>'
	            . '</svg>';
}

// ── Build button inner content ────────────────────────────────────────────
$btn_icon_before = $btn_svg_html && $btn_icon_pos === 'before'
	? '<span style="margin-right:.375em;display:inline-flex;vertical-align:middle;">' . $btn_svg_html . '</span>'
	: '';
$btn_icon_after  = $btn_svg_html && $btn_icon_pos === 'after'
	? '<span style="margin-left:.375em;display:inline-flex;vertical-align:middle;">' . $btn_svg_html . '</span>'
	: '';

$btn_inner = $btn_icon_before . $btn_label . $btn_icon_after . $badge_html;

// ── Build button HTML ─────────────────────────────────────────────────────
$btn_classes = implode( ' ', array_filter(
	[ 'btn', $btn_variant, $btn_size, 'position-relative' ],
	'strlen'
) );

if ( $btn_href ) {
	$target_attr = ( $btn_target !== '_self' ) ? ' target="' . esc_attr( $btn_target ) . '"' : '';
	$rel_attr    = ( $btn_target === '_blank' ) ? ' rel="noopener noreferrer"'                : '';
	$btn_html    = '<a class="' . esc_attr( $btn_classes ) . '" href="' . $btn_href . '"'
	             . $target_attr . $rel_attr . '>' . $btn_inner . '</a>';
} else {
	$btn_html = '<button type="button" class="' . esc_attr( $btn_classes ) . '">'
	          . $btn_inner . '</button>';
}

// ── Alignment wrapper ─────────────────────────────────────────────────────
$align_map   = [ 'left' => 'text-start', 'center' => 'text-center', 'right' => 'text-end' ];
$align_class = $align_map[ $alignment ] ?? 'text-start';

$wrapper_attr = get_block_wrapper_attributes( [ 'class' => $align_class ] );
?>
<div <?php echo $wrapper_attr; ?>>
	<?php echo $btn_html; ?>
</div>
