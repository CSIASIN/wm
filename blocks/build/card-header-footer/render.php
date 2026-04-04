<?php
/**
 * render.php — wmblocks/card-header-footer
 * $content = InnerBlocks HTML (card body contents)
 */

if ( ! function_exists( 'wmblocks_card_hf_card_classes' ) ) {
	function wmblocks_card_hf_card_classes( array $attrs ): string {
		$ok_bg     = [ '', 'text-bg-primary','text-bg-secondary','text-bg-success','text-bg-danger','text-bg-warning','text-bg-info','text-bg-light','text-bg-dark' ];
		$ok_border = [ '', 'border-primary','border-secondary','border-success','border-danger','border-warning','border-info','border-light','border-dark' ];
		$ok_shadow = [ '', 'shadow-sm', 'shadow', 'shadow-lg' ];
		$ok_align  = [ '', 'text-start', 'text-center', 'text-end' ];
		$bg       = ( isset( $attrs['bgColor'] )     && in_array( $attrs['bgColor'],     $ok_bg,     true ) ) ? $attrs['bgColor']     : '';
		$border   = ( isset( $attrs['borderColor'] ) && in_array( $attrs['borderColor'], $ok_border, true ) ) ? $attrs['borderColor'] : '';
		$shadow   = ( isset( $attrs['shadow'] )      && in_array( $attrs['shadow'],      $ok_shadow, true ) ) ? $attrs['shadow']      : '';
		$align    = ( isset( $attrs['textAlign'] )   && in_array( $attrs['textAlign'],   $ok_align,  true ) ) ? $attrs['textAlign']   : '';
		$no_brd   = ! empty( $attrs['noBorder'] );
		return implode( ' ', array_filter( [ 'card', $bg, $border, $shadow, $align, $no_brd ? 'border-0' : '' ], 'strlen' ) );
	}
}

// Zone-bg allowlist (bg-* text-* combos we set in the editor)
$ok_zone_bg = [
	'',
	'bg-primary text-white',   'bg-secondary text-white', 'bg-success text-white',
	'bg-danger text-white',    'bg-warning text-dark',    'bg-info text-dark',
	'bg-light text-dark',      'bg-dark text-white',
];

$show_header    = ! empty( $attributes['showHeader'] );
$show_footer    = ! empty( $attributes['showFooter'] );
$header_text    = ! empty( $attributes['headerText'] )    ? wp_kses_post( $attributes['headerText'] )    : '';
$footer_text    = ! empty( $attributes['footerText'] )    ? wp_kses_post( $attributes['footerText'] )    : '';
$hdr_bg         = ( isset( $attributes['headerBgVariant'] ) && in_array( $attributes['headerBgVariant'], $ok_zone_bg, true ) ) ? $attributes['headerBgVariant'] : '';
$ftr_bg         = ( isset( $attributes['footerBgVariant'] ) && in_array( $attributes['footerBgVariant'], $ok_zone_bg, true ) ) ? $attributes['footerBgVariant'] : '';
$custom_width   = ! empty( $attributes['customWidth'] )   ? $attributes['customWidth']                   : '';
$card_classes   = wmblocks_card_hf_card_classes( $attributes );
$width_style    = $custom_width ? ' style="width:' . esc_attr( $custom_width ) . ';"' : '';
$wrapper_attr   = get_block_wrapper_attributes();
?>
<div <?php echo $wrapper_attr; ?>>
	<div class="<?php echo esc_attr( $card_classes ); ?>"<?php echo $width_style; ?>>

		<?php if ( $show_header && $header_text ) : ?>
			<div class="card-header <?php echo esc_attr( $hdr_bg ); ?>">
				<?php echo $header_text; ?>
			</div>
		<?php endif; ?>

		<div class="card-body">
			<?php echo $content; ?>
		</div>

		<?php if ( $show_footer && $footer_text ) : ?>
			<div class="card-footer text-muted <?php echo esc_attr( $ftr_bg ); ?>">
				<?php echo $footer_text; ?>
			</div>
		<?php endif; ?>

	</div>
</div>
