<?php
$heading   = ! empty( $attributes['heading'] )     ? wp_kses_post( $attributes['heading'] )  : '';
$subtext   = ! empty( $attributes['subtext'] )     ? wp_kses_post( $attributes['subtext'] )  : '';
$btn1_text = ! empty( $attributes['btn1Text'] )    ? esc_html( $attributes['btn1Text'] )     : '';
$btn1_url  = ! empty( $attributes['btn1Url'] )     ? esc_url( $attributes['btn1Url'] )       : '#';
$btn1_var  = ! empty( $attributes['btn1Variant'] ) ? esc_attr( $attributes['btn1Variant'] )  : 'btn-primary';
$bg        = ! empty( $attributes['bgColor'] )     ? esc_attr( $attributes['bgColor'] )      : 'bg-body-tertiary';
$custom    = ! empty( $attributes['customClass'] ) ? esc_attr( $attributes['customClass'] )  : '';

$wrap_class = implode( ' ', array_filter( [ 'p-5 mb-4 rounded-3', $bg, $custom ], 'strlen' ) );
$wrapper_attributes = get_block_wrapper_attributes();
?>
<div <?php echo $wrapper_attributes; ?>>
<div class="<?php echo $wrap_class; ?>">
  <div class="container-fluid py-5">
    <h1 class="display-5 fw-bold"><?php echo $heading; ?></h1>
    <p class="col-md-8 fs-4"><?php echo $subtext; ?></p>
    <?php if ( $btn1_text ) : ?><a href="<?php echo $btn1_url; ?>" class="btn <?php echo $btn1_var; ?> btn-lg"><?php echo $btn1_text; ?></a><?php endif; ?>
  </div>
</div>
</div>
