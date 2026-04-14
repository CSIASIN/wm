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
$wrap_class = implode( ' ', array_filter( [ 'container px-4 py-5', $bg, $custom ], 'strlen' ) );
$wrapper_attributes = get_block_wrapper_attributes();
?>
<div <?php echo $wrapper_attributes; ?>>
<div class="<?php echo $wrap_class; ?>" style="border-top:1px solid #dee2e6;border-bottom:1px solid #dee2e6;">
  <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
    <?php if ( $img_url ) : ?>
    <div class="col-10 col-sm-8 col-lg-6">
      <img src="<?php echo $img_url; ?>" class="d-block mx-lg-auto img-fluid rounded shadow-lg" alt="<?php echo $img_alt; ?>">
    </div>
    <?php endif; ?>
    <div class="col-lg-6">
      <h1 class="display-5 fw-bold lh-1 mb-3"><?php echo $heading; ?></h1>
      <p class="lead"><?php echo $subtext; ?></p>
      <div class="d-grid gap-2 d-md-flex justify-content-md-start">
        <a href="<?php echo $btn1_url; ?>" class="btn <?php echo $btn1_var; ?> btn-lg px-4 me-md-2"><?php echo $btn1_text; ?></a>
        <a href="<?php echo $btn2_url; ?>" class="btn <?php echo $btn2_var; ?> btn-lg px-4"><?php echo $btn2_text; ?></a>
      </div>
    </div>
  </div>
</div>
</div>
