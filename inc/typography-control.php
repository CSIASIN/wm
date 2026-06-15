<?php

/**
 * Generates an array of explicit style rules supporting advanced fluid cascades.
 *
 *
 * @package wm 
 * @version 0.1.0
 */


// Exit if accessed directly
defined('ABSPATH') || exit;

/**
 * Generates an array of explicit style rules supporting advanced fluid cascades.
 */

if (!function_exists('get_wm_typography_styles')) :

/**
 * Advanced Dynamic Typography Style Compiler
 *
 * Processes flat typography attributes into inline CSS declarations for the front-end.
 */
function get_wm_typography_styles( $attributes ) {
    $styles = [];

    $font_family     = $attributes['fontFamily'] ?? '';
    $font_weight     = $attributes['fontWeight'] ?? '';
    $text_decoration = $attributes['textDecoration'] ?? '';
    $text_transform  = $attributes['textTransform'] ?? '';
    $text_fill_color = $attributes['textFillColor'] ?? '';
    $text_stroke_w   = $attributes['textStrokeWidth'] ?? '1.5px';
    $text_stroke_c   = $attributes['textStrokeColor'] ?? '';
    $text_shadow_t   = $attributes['textShadowType'] ?? 'none';
    $text_shadow_c   = $attributes['textShadowColor'] ?? '#000000';
    $text_shadow_w   = $attributes['textShadowWidth'] ?? '1px';
    $text_shadow_x   = $attributes['textShadowX'] ?? '2px';
    $text_shadow_y   = $attributes['textShadowY'] ?? '2px';
    $text_shadow_b   = $attributes['textShadowBlur'] ?? '4px';

    if ( $font_family )     $styles[] = "font-family: '{$font_family}', sans-serif";
    if ( $font_weight )     $styles[] = "font-weight: {$font_weight}";
    if ( $text_decoration ) $styles[] = "text-decoration: {$text_decoration}";
    if ( $text_transform )  $styles[] = "text-transform: {$text_transform}";

    // Webkit Font Text Styling
    if ( $text_fill_color ) {
        $styles[] = "-webkit-text-fill-color: {$text_fill_color}";
    }
    if ( $text_stroke_c ) {
        $styles[] = "-webkit-text-stroke-width: {$text_stroke_w}";
        $styles[] = "-webkit-text-stroke-color: {$text_stroke_c}";
    }

    // Shadow Rendering Matrix
if ( $text_shadow_t === 'outline' && $text_shadow_c ) {
    // Exact 8-axis calculations map explicitly down to text elements
    $styles[] = "text-shadow: -{$text_shadow_w} -{$text_shadow_w} 0 {$text_shadow_c}, 0 -{$text_shadow_w} 0 {$text_shadow_c}, {$text_shadow_w} -{$text_shadow_w} 0 {$text_shadow_c}, {$text_shadow_w} 0 0 {$text_shadow_c}, {$text_shadow_w} {$text_shadow_w} 0 {$text_shadow_c}, 0 {$text_shadow_w} 0 {$text_shadow_c}, -{$text_shadow_w} {$text_shadow_w} 0 {$text_shadow_c}, -{$text_shadow_w} 0 0 {$text_shadow_c}";
} elseif ( $text_shadow_t === 'drop' && $text_shadow_c ) {
    $styles[] = "text-shadow: {$text_shadow_x} {$text_shadow_y} {$text_shadow_b} {$text_shadow_c}";
}

    // Process Responsive Custom Properties Layout Variables
    $breakpoints = ['Xs', 'Sm', 'Md', 'Lg', 'Xl', 'Xxl'];
    foreach ( $breakpoints as $bp ) {
        $lower_bp = strtolower( $bp );
        if ( ! empty( $attributes["fontSize{$bp}"] ) )      $styles[] = "--wm-font-size-{$lower_bp}: " . $attributes["fontSize{$bp}"];
        if ( ! empty( $attributes["lineHeight{$bp}"] ) )    $styles[] = "--wm-line-height-{$lower_bp}: " . $attributes["lineHeight{$bp}"];
        if ( ! empty( $attributes["letterSpacing{$bp}"] ) ) $styles[] = "--wm-letter-spacing-{$lower_bp}: " . $attributes["letterSpacing{$bp}"];
        if ( ! empty( $attributes["textIndent{$bp}"] ) )    $styles[] = "--wm-text-indent-{$lower_bp}: " . $attributes["textIndent{$bp}"];
    }

    return $styles;
}
endif;