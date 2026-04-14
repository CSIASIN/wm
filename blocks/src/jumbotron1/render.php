<?php
$icon_svg   = ! empty( $attributes['iconSvg'] )     ? wp_kses( $attributes['iconSvg'], [
	'svg'  => [ 'xmlns'=>[], 'width'=>[], 'height'=>[], 'fill'=>[], 'viewbox'=>[], 'viewBox'=>[], 'class'=>[], 'aria-hidden'=>[] ],
	'path' => [ 'd'=>[], 'fill-rule'=>[], 'clip-rule'=>[], 'fill'=>[] ],
	'circle' => [ 'cx'=>[], 'cy'=>[], 'r'=>[], 'fill'=>[] ],
] ) : '';
$icon_color = ! empty( $attributes['iconColor'] )   ? esc_attr( $attributes['iconColor'] )   : 'text-body-secondary';
$heading    = ! empty( $attributes['heading'] )     ? wp_kses_post( $attributes['heading'] )  : '';
$subtext    = ! empty( $attributes['subtext'] )     ? wp_kses_post( $attributes['subtext'] )  : '';
$btn1_text  = ! empty( $attributes['btn1Text'] )    ? esc_html( $attributes['btn1Text'] )     : '';
$btn1_url   = ! empty( $attributes['btn1Url'] )     ? esc_url( $attributes['btn1Url'] )       : '#';
$btn1_var   = ! empty( $attributes['btn1Variant'] ) ? esc_attr( $attributes['btn1Variant'] )  : 'btn-primary';
$btn2_text  = ! empty( $attributes['btn2Text'] )    ? esc_html( $attributes['btn2Text'] )     : '';
$btn2_url   = ! empty( $attributes['btn2Url'] )     ? esc_url( $attributes['btn2Url'] )       : '#';
$btn2_var   = ! empty( $attributes['btn2Variant'] ) ? esc_attr( $attributes['btn2Variant'] )  : 'btn-outline-secondary';
$bg         = ! empty( $attributes['bgColor'] )     ? esc_attr( $attributes['bgColor'] )      : '';
$col        = ! empty( $attributes['colWidth'] )    ? esc_attr( $attributes['colWidth'] )     : 'col-lg-6';
$custom     = ! empty( $attributes['customClass'] ) ? esc_attr( $attributes['customClass'] )  : '';

$wrap_class = implode( ' ', array_filter( [ 'p-5 mb-4 rounded-3', $bg, $custom ], 'strlen' ) );
$wrapper_attributes = get_block_wrapper_attributes();
?>
<div <?php echo $wrapper_attributes; ?>>
<div class="<?php echo $wrap_class; ?>">
  <div class="container-fluid py-5">
    <?php if ( $icon_svg ) : ?>
    <div class="mb-4 <?php echo $icon_color; ?>"><?php echo $icon_svg; ?></div>
    <?php endif; ?>
    <h1 class="display-5 fw-bold"><?php echo $heading; ?></h1>
    <div class="<?php echo $col; ?>">
      <p class="col fs-5"><?php echo $subtext; ?></p>
    </div>
    <div class="d-flex gap-2 flex-wrap">
      <?php if ( $btn1_text ) : ?><a href="<?php echo $btn1_url; ?>" class="btn <?php echo $btn1_var; ?> btn-lg"><?php echo $btn1_text; ?></a><?php endif; ?>
      <?php if ( $btn2_text ) : ?><a href="<?php echo $btn2_url; ?>" class="btn <?php echo $btn2_var; ?> btn-lg"><?php echo $btn2_text; ?></a><?php endif; ?>
    </div>
  </div>
</div>
</div>
