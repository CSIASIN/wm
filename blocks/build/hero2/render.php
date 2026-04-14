<?php
$heading   = ! empty( $attributes['heading'] )     ? wp_kses_post( $attributes['heading'] )   : '';
$subtext   = ! empty( $attributes['subtext'] )     ? wp_kses_post( $attributes['subtext'] )   : '';
$btn1_text = ! empty( $attributes['btn1Text'] )    ? esc_html( $attributes['btn1Text'] )      : '';
$btn1_url  = ! empty( $attributes['btn1Url'] )     ? esc_url( $attributes['btn1Url'] )        : '#';
$btn1_var  = ! empty( $attributes['btn1Variant'] ) ? esc_attr( $attributes['btn1Variant'] )   : 'btn-primary';
$btn2_text = ! empty( $attributes['btn2Text'] )    ? esc_html( $attributes['btn2Text'] )      : '';
$btn2_url  = ! empty( $attributes['btn2Url'] )     ? esc_url( $attributes['btn2Url'] )        : '#';
$btn2_var  = ! empty( $attributes['btn2Variant'] ) ? esc_attr( $attributes['btn2Variant'] )   : 'btn-outline-secondary';
$img_url   = ! empty( $attributes['imageUrl'] )    ? esc_url( $attributes['imageUrl'] )       : '';
$img_alt   = ! empty( $attributes['imageAlt'] )    ? esc_attr( $attributes['imageAlt'] )      : '';
$bg        = ! empty( $attributes['bgColor'] )     ? esc_attr( $attributes['bgColor'] )       : '';
$custom    = ! empty( $attributes['customClass'] ) ? esc_attr( $attributes['customClass'] )   : '';
$wrap_class = implode( ' ', array_filter( [ 'px-4 py-5 text-center', $bg, $custom ], 'strlen' ) );
$wrapper_attributes = get_block_wrapper_attributes();
?>
<div <?php echo $wrapper_attributes; ?>>
<div class="<?php echo $wrap_class; ?>">
  <div class="container py-5">
    <h1 class="display-5 fw-bold"><?php echo $heading; ?></h1>
    <div class="col-lg-6 mx-auto">
      <p class="lead mb-4"><?php echo $subtext; ?></p>
      <div class="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
        <a href="<?php echo $btn1_url; ?>" class="btn <?php echo $btn1_var; ?> btn-lg px-4 gap-3"><?php echo $btn1_text; ?></a>
        <a href="<?php echo $btn2_url; ?>" class="btn <?php echo $btn2_var; ?> btn-lg px-4"><?php echo $btn2_text; ?></a>
      </div>
    </div>
    <?php if ( $img_url ) : ?>
    <div class="overflow-hidden" style="max-height:30vh;border-radius:.5rem;box-shadow:0 0 40px rgba(0,0,0,.15);">
      <img src="<?php echo $img_url; ?>" class="img-fluid" alt="<?php echo $img_alt; ?>">
    </div>
    <?php endif; ?>
  </div>
</div>
</div>
