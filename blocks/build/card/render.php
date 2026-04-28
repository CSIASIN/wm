<?php
/**
 * render.php — wmblocks/card (base card)
 * $content = InnerBlocks HTML (the card body contents)
 */

$ok_bg      = [ '', 'text-bg-primary','text-bg-secondary','text-bg-success','text-bg-danger','text-bg-warning','text-bg-info','text-bg-light','text-bg-dark' ];
$ok_border  = [ '', 'border-primary','border-secondary','border-success','border-danger','border-warning','border-info','border-light','border-dark' ];
$ok_shadow  = [ '', 'shadow-sm', 'shadow', 'shadow-lg' ];
$ok_radius  = [ '', 'rounded-0','rounded-1','rounded-2','rounded-3','rounded-4','rounded-5' ];
$ok_align   = [ '', 'text-start', 'text-center', 'text-end' ];

$bg_color     = ( isset( $attributes['bgColor'] )     && in_array( $attributes['bgColor'],     $ok_bg,     true ) ) ? $attributes['bgColor']     : '';
$border_color = ( isset( $attributes['borderColor'] ) && in_array( $attributes['borderColor'], $ok_border, true ) ) ? $attributes['borderColor'] : '';
$shadow       = ( isset( $attributes['shadow'] )      && in_array( $attributes['shadow'],      $ok_shadow, true ) ) ? $attributes['shadow']      : '';
$border_radius= ( isset( $attributes['borderRadius'] )&& in_array( $attributes['borderRadius'],$ok_radius, true ) ) ? $attributes['borderRadius']: '';
$text_align   = ( isset( $attributes['textAlign'] )   && in_array( $attributes['textAlign'],   $ok_align,  true ) ) ? $attributes['textAlign']   : '';
$no_border    = ! empty( $attributes['noBorder'] );
$custom_width = ! empty( $attributes['customWidth'] ) ? $attributes['customWidth'] : '';

$card_classes = implode( ' ', array_filter(
	[ 'card', $bg_color, $border_color, $shadow, $border_radius, $no_border ? 'border-0' : '', $text_align ],
	'strlen'
) );

$width_style  = $custom_width ? ' style="width:' . esc_attr( $custom_width ) . ';"' : '';
$wrapper_attr = get_block_wrapper_attributes( [ 'class' => $card_classes ] );
?>

	<div <?php echo $wrapper_attr; ?> <?php echo $width_style; ?>>
		<div class="card-body">
			<?php echo $content; ?>
		</div>
	</div>

