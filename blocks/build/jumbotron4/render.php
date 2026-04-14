<?php
$heading   = ! empty( $attributes['heading'] )     ? wp_kses_post( $attributes['heading'] )  : '';
$subtext   = ! empty( $attributes['subtext'] )     ? wp_kses_post( $attributes['subtext'] )  : '';
$btn1_text = ! empty( $attributes['btn1Text'] )    ? esc_html( $attributes['btn1Text'] )     : '';
$btn1_url  = ! empty( $attributes['btn1Url'] )     ? esc_url( $attributes['btn1Url'] )       : '#';
$btn1_var  = ! empty( $attributes['btn1Variant'] ) ? esc_attr( $attributes['btn1Variant'] )  : 'btn-primary';
$btn2_text = ! empty( $attributes['btn2Text'] )    ? esc_html( $attributes['btn2Text'] )     : '';
$btn2_url  = ! empty( $attributes['btn2Url'] )     ? esc_url( $attributes['btn2Url'] )       : '#';
$btn2_var  = ! empty( $attributes['btn2Variant'] ) ? esc_attr( $attributes['btn2Variant'] )  : 'btn-outline-secondary';
$bg        = ! empty( $attributes['bgColor'] )     ? esc_attr( $attributes['bgColor'] )      : 'bg-body-tertiary';
$rounded   = ! empty( $attributes['rounded'] )     ? esc_attr( $attributes['rounded'] )      : 'rounded-3';
$custom    = ! empty( $attributes['customClass'] ) ? esc_attr( $attributes['customClass'] )  : '';

$wrap_class = implode( ' ', array_filter( [ 'p-5 mb-4', $bg, $rounded, $custom ], 'strlen' ) );
$wrapper_attributes = get_block_wrapper_attributes();
?>
<div <?php echo $wrapper_attributes; ?>>
<div class="<?php echo $wrap_class; ?>">
  <h1 class="display-5 fw-bold"><?php echo $heading; ?></h1>
  <p class="col-md-8 fs-4"><?php echo $subtext; ?></p>
  <hr class="my-4">
  <div class="d-flex gap-2 flex-wrap">
    <?php if ( $btn1_text ) : ?><a href="<?php echo $btn1_url; ?>" class="btn <?php echo $btn1_var; ?> btn-lg"><?php echo $btn1_text; ?></a><?php endif; ?>
    <?php if ( $btn2_text ) : ?><a href="<?php echo $btn2_url; ?>" class="btn <?php echo $btn2_var; ?> btn-lg"><?php echo $btn2_text; ?></a><?php endif; ?>
  </div>
</div>
</div>
