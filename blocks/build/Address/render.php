<?php

/**
 * render.php — wmblocks/address
 *
 * Renders a semantic HTML <address> element styled via Bootstrap reboot.
 * Bootstrap resets <address> to: font-style:normal, inherits line-height,
 * margin-bottom:1rem. Lines are separated with <br> as per Bootstrap docs.
 *
 * Four presentation styles:
 *   plain  → bare <address>, Bootstrap reboot only
 *   card   → wrapped in a Bootstrap card (border, padding, border-radius)
 *   border → left border accent via border-start utility
 *   pill   → coloured background with rounded corners
 *
 * Fields: name (bold), street, city/state/zip, country, phone (abbr), email (mailto link), website (link)
 * Optional: Bootstrap Icon SVGs before each line group
 *
 * All allowlists inline — no global.
 */

// ── Allowlists ────────────────────────────────────────────────────────────
$ok_styles   = ['plain', 'card', 'border', 'pill'];
$ok_accent   = ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'dark'];
$ok_text_clr = ['', 'text-body-secondary', 'text-primary', 'text-secondary', 'text-dark', 'text-light'];
$ok_fontsize = ['', 'small', 'fs-6', 'fs-5', 'fs-4'];

// ── Attributes ────────────────────────────────────────────────────────────
$style        = (isset($attributes['style']) && in_array($attributes['style'],       $ok_styles,   true)) ? $attributes['style']       : 'plain';
$accent       = (isset($attributes['accentColor']) && in_array($attributes['accentColor'], $ok_accent,   true)) ? $attributes['accentColor'] : 'primary';
$text_color   = (isset($attributes['textColor']) && in_array($attributes['textColor'],   $ok_text_clr, true)) ? $attributes['textColor']   : '';
$font_size    = (isset($attributes['fontSize']) && in_array($attributes['fontSize'],    $ok_fontsize, true)) ? $attributes['fontSize']    : '';
$show_icons   = ! empty($attributes['showIcons']);

$name         = ! empty($attributes['name']) ? wp_kses_post($attributes['name']) : '';
$show_name    = ! empty($attributes['showName']);
$street       = ! empty($attributes['street']) ? wp_kses_post($attributes['street']) : '';
$show_street  = ! empty($attributes['showStreet']);
$csz          = ! empty($attributes['cityStateZip']) ? wp_kses_post($attributes['cityStateZip']) : '';
$show_csz     = ! empty($attributes['showCityStateZip']);
$country      = ! empty($attributes['country']) ? wp_kses_post($attributes['country']) : '';
$show_country = ! empty($attributes['showCountry']);
$phone        = ! empty($attributes['phone']) ? wp_kses_post($attributes['phone']) : '';
$show_phone   = ! empty($attributes['showPhone']);
$phone_label  = ! empty($attributes['phoneLabel']) ? wp_kses_post($attributes['phoneLabel']) : 'P';
$email        = ! empty($attributes['email']) ? sanitize_email($attributes['email']) : '';
$show_email   = ! empty($attributes['showEmail']);
$website      = ! empty($attributes['website']) ? esc_url($attributes['website']) : '';
$show_website = ! empty($attributes['showWebsite']);

// ── Bootstrap Icon SVG paths (inline, no CDN) ────────────────────────────
$svg_building = '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true" style="vertical-align:-0.15em;"><path d="M14.763.075A.5.5 0 0 1 15 .5v15a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5V14h-1v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V10a.5.5 0 0 1 .342-.474L6 7.64V4.5a.5.5 0 0 1 .276-.447l8-4a.5.5 0 0 1 .487.022zM6 8.694 1 10.36V15h5V8.694zM7 15h2v-1.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5V15h2V1.309l-7 3.5V15z"/><path d="M2 11h1v1H2v-1zm2 0h1v1H4v-1zm-2 2h1v1H2v-1zm2 0h1v1H4v-1zm4-4h1v1H8V9zm2 0h1v1h-1V9zm-2 2h1v1H8v-1zm2 0h1v1h-1v-1zm2-2h1v1h-1V9zm0 2h1v1h-1v-1zM8 7h1v1H8V7zm2 0h1v1h-1V7zm2 0h1v1h-1V7zM8 5h1v1H8V5zm2 0h1v1h-1V5zm2 0h1v1h-1V5zm0-2h1v1h-1V3z"/></svg>';
$svg_pin      = '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true" style="vertical-align:-0.15em;"><path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z"/><path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/></svg>';
$svg_phone    = '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true" style="vertical-align:-0.15em;"><path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/></svg>';
$svg_email    = '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true" style="vertical-align:-0.15em;"><path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"/></svg>';
$svg_globe    = '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true" style="vertical-align:-0.15em;"><path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.5-6.923c-.67.204-1.335.82-1.887 1.855A7.97 7.97 0 0 0 5.145 4H7.5V1.077zM4.09 4a9.267 9.267 0 0 1 .64-1.539 6.7 6.7 0 0 1 .597-.933A7.025 7.025 0 0 0 2.255 4H4.09zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a6.958 6.958 0 0 0-.656 2.5h2.49zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5H4.847zM8.5 5v2.5h2.99a12.495 12.495 0 0 0-.337-2.5H8.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5H4.51zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5H8.5zM5.145 12c.138.386.295.744.468 1.068.552 1.035 1.218 1.65 1.887 1.855V12H5.145zm.182 2.472a6.696 6.696 0 0 1-.597-.933A9.268 9.268 0 0 1 4.09 12H2.255a7.024 7.024 0 0 0 3.072 2.472zM3.82 11a13.652 13.652 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5H3.82zm6.853 3.472A7.024 7.024 0 0 0 13.745 12H11.91a9.27 9.27 0 0 1-.64 1.539 6.688 6.688 0 0 1-.597.933zM8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855.173-.324.33-.682.468-1.068H8.5zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.65 13.65 0 0 1-.312 2.5zm2.802-3.5a6.959 6.959 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5h2.49zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7.024 7.024 0 0 0-3.072-2.472c.218.284.418.598.597.933zM10.855 4a7.966 7.966 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4h2.355z"/></svg>';

// ── Build address <address> content ───────────────────────────────────────
$lines = []; // each entry is one output line; will be joined with <br>\n

// Name / Organisation
if ($show_name && $name) {
	$icon  = $show_icons ? '<span style="color:var(--bs-' . esc_attr($accent) . ');">' . $svg_building . '</span> ' : '';
	$lines[] = $icon . '<strong>' . $name . '</strong>';
}

// Street
if ($show_street && $street) {
	$icon    = $show_icons ? '<span style="color:var(--bs-' . esc_attr($accent) . ');">' . $svg_pin . '</span> ' : '';
	$lines[] = $icon . $street;
}

// City, State, Zip
if ($show_csz && $csz) {
	// No icon on second address line — keep the vertical rhythm clean
	$lines[] = $csz;
}

// Country
if ($show_country && $country) {
	$lines[] = $country;
}

// ── Contact details — slightly visually separated via an empty line ────────
$has_address_lines = $show_name || $show_street || $show_csz || $show_country;
$has_contact_lines = ($show_phone && $phone) || ($show_email && $email) || ($show_website && $website);

if ($has_address_lines && $has_contact_lines) {
	$lines[] = ''; // empty <br> spacer
}

// Phone
if ($show_phone && $phone) {
	$icon    = $show_icons ? '<span style="color:var(--bs-' . esc_attr($accent) . ');">' . $svg_phone . '</span> ' : '';
	$abbr    = '<abbr title="' . esc_attr__('Phone', 'wmblocks') . '">' . $phone_label . '</abbr>: ';
	$lines[] = $icon . $abbr . $phone;
}

// Email
if ($show_email && $email) {
	$icon    = $show_icons ? '<span style="color:var(--bs-' . esc_attr($accent) . ');">' . $svg_email . '</span> ' : '';
	$abbr    = '<abbr title="' . esc_attr__('Email', 'wmblocks') . '">E</abbr>: ';
	$link    = '<a href="mailto:' . esc_attr($email) . '">' . esc_html($email) . '</a>';
	$lines[] = $icon . $abbr . $link;
}

// Website
if ($show_website && $website) {
	$icon    = $show_icons ? '<span style="color:var(--bs-' . esc_attr($accent) . ');">' . $svg_globe . '</span> ' : '';
	$abbr    = '<abbr title="' . esc_attr__('Website', 'wmblocks') . '">W</abbr>: ';
	$display = esc_html(preg_replace('/^https?:\/\//', '', $website));
	$link    = '<a href="' . $website . '">' . $display . '</a>';
	$lines[] = $icon . $abbr . $link;
}

// Join with <br>
$address_content = implode("<br>\n", $lines);

// ── Build address class string ────────────────────────────────────────────
$address_classes = implode(' ', array_filter([$text_color, $font_size], 'strlen'));
$address_cls_attr = $address_classes ? ' class="' . esc_attr($address_classes) . '"' : '';

// ── Build the <address> element ────────────────────────────────────────────
$address_html = '<address' . $address_cls_attr . '>' . "\n" . $address_content . "\n" . '</address>';

// ── Wrap in presentation style ─────────────────────────────────────────────
$wrapper_attr = get_block_wrapper_attributes();

switch ($style) {
	case 'card':
		$inner = '<div class="card"><div class="card-body">' . $address_html . '</div></div>';
		break;

	case 'border':
		// Bootstrap border-start utility + padding-start
		$inner = '<div class="border-start border-' . esc_attr($accent) . ' border-3 ps-3">' . $address_html . '</div>';
		break;

	case 'pill':
		// Light-tinted background with rounded corners using Bootstrap bg- and text- utilities
		$inner = '<div class="p-3 rounded-3 bg-' . esc_attr($accent) . ' bg-opacity-10 border border-' . esc_attr($accent) . ' border-opacity-25">' . $address_html . '</div>';
		break;

	default: // plain
		$inner = $address_html;
		break;
}
?>
<div <?php echo $wrapper_attr; ?>><?php echo $inner; ?></div>