<?php
/**
 * render.php — wmblocks/youtube
 *
 * Renders a YouTube iframe wrapped in a Bootstrap .ratio container.
 * All embed parameters are built from attributes and appended to the
 * embed URL as query string parameters.
 *
 * Supports:
 *   - youtu.be, youtube.com/watch, /shorts, /live, /embed
 *   - Privacy-enhanced mode (youtube-nocookie.com)
 *   - autoplay, mute, controls, loop, modestbranding, rel
 *   - start, end, playlist
 *   - cc_load_policy, cc_lang_pref
 *   - Custom and preset aspect ratios
 *
 * All allowlists inline — no `global` — safe for WordPress render context.
 */

// ── Allowlists ────────────────────────────────────────────────────────────
$ok_ratios = [ 'ratio-1x1', 'ratio-4x3', 'ratio-16x9', 'ratio-21x9', 'custom' ];

// ── Attributes ────────────────────────────────────────────────────────────
$video_id        = isset( $attributes['videoId'] )        ? preg_replace( '/[^a-zA-Z0-9_-]/', '', $attributes['videoId'] ) : '';
$ratio_raw       = isset( $attributes['ratio'] )          ? $attributes['ratio']           : 'ratio-16x9';
$custom_ratio    = isset( $attributes['customRatio'] )    ? $attributes['customRatio']     : '';
$iframe_title    = ! empty( $attributes['title'] )        ? esc_attr( $attributes['title'] ) : 'YouTube video';
$autoplay        = ! empty( $attributes['autoplay'] )     ? 1 : 0;
$mute            = ! empty( $attributes['mute'] )         ? 1 : 0;
$controls        = isset( $attributes['controls'] )       ? ( $attributes['controls'] ? 1 : 0 ) : 1;
$loop            = ! empty( $attributes['loop'] )         ? 1 : 0;
$modestbranding  = ! empty( $attributes['modestbranding'] ) ? 1 : 0;
$rel             = isset( $attributes['rel'] )            ? ( $attributes['rel'] ? 1 : 0 ) : 1;
$privacy         = ! empty( $attributes['privacyEnhanced'] );
$start           = isset( $attributes['start'] )          ? (int) $attributes['start']     : 0;
$end             = isset( $attributes['end'] )            ? (int) $attributes['end']       : 0;
$playlist_id     = ! empty( $attributes['playlistId'] )   ? preg_replace( '/[^a-zA-Z0-9_-]/', '', $attributes['playlistId'] ) : '';
$cc              = ! empty( $attributes['cc'] );
$cc_lang         = ! empty( $attributes['ccLang'] )       ? preg_replace( '/[^a-zA-Z]/', '', $attributes['ccLang'] ) : 'en';

// ── Validate ratio ────────────────────────────────────────────────────────
$ratio = in_array( $ratio_raw, $ok_ratios, true ) ? $ratio_raw : 'ratio-16x9';

// ── Early return: nothing to render if no video ID ───────────────────────
if ( ! $video_id ) {
	$wrapper_attr = get_block_wrapper_attributes();
	echo '<div ' . $wrapper_attr . '></div>';
	return;
}

// ── Build the embed URL ───────────────────────────────────────────────────
$domain   = $privacy ? 'www.youtube-nocookie.com' : 'www.youtube.com';
$base_url = 'https://' . $domain . '/embed/' . $video_id;

$params = [];

// Autoplay — also force mute when autoplay is on (browser requirement)
if ( $autoplay ) {
	$params['autoplay'] = 1;
	$params['mute']     = 1; // required for autoplay in modern browsers
} elseif ( $mute ) {
	$params['mute'] = 1;
}

// Controls
if ( $controls === 0 ) $params['controls'] = 0;

// Loop — requires playlist param set to the video ID itself
if ( $loop ) {
	$params['loop']     = 1;
	$params['playlist'] = $playlist_id ?: $video_id;
}

// Playlist (overrides loop's playlist if set separately)
if ( $playlist_id && ! $loop ) {
	$params['list'] = $playlist_id;
}

// Modestbranding
if ( $modestbranding ) $params['modestbranding'] = 1;

// Related videos (0 = from same channel only)
if ( $rel === 0 ) $params['rel'] = 0;

// Start / End times
if ( $start > 0 ) $params['start'] = $start;
if ( $end   > 0 ) $params['end']   = $end;

// Captions
if ( $cc ) {
	$params['cc_load_policy'] = 1;
	$params['cc_lang_pref']   = $cc_lang;
}

// Build query string
$embed_url = $base_url;
if ( ! empty( $params ) ) {
	$embed_url .= '?' . http_build_query( $params );
}

// ── Build ratio class + style ──────────────────────────────────────────────
$ratio_classes = 'ratio';
$ratio_style   = '';

if ( $ratio === 'custom' && $custom_ratio ) {
	$parts = preg_split( '/[\/:]/', $custom_ratio );
	if ( count( $parts ) === 2 ) {
		$w = floatval( $parts[ 0 ] );
		$h = floatval( $parts[ 1 ] );
		if ( $w > 0 && $h > 0 ) {
			$pct         = round( ( $h / $w ) * 100, 4 );
			$ratio_style = ' style="--bs-aspect-ratio:' . esc_attr( $pct ) . '%;"';
		}
	}
} elseif ( $ratio !== 'custom' ) {
	$ratio_classes .= ' ' . esc_attr( $ratio );
}

// ── Block wrapper ─────────────────────────────────────────────────────────
$wrapper_attr = get_block_wrapper_attributes();
?>
<div <?php echo $wrapper_attr; ?>>
	<div class="<?php echo esc_attr( $ratio_classes ); ?>"<?php echo $ratio_style; ?>>
		<iframe
			src="<?php echo esc_url( $embed_url ); ?>"
			title="<?php echo $iframe_title; ?>"
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
			allowfullscreen
			loading="lazy"
		></iframe>
	</div>
</div>
