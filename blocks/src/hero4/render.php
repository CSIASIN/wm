<?php
$heading     = ! empty( $attributes['heading'] )       ? wp_kses_post( $attributes['heading'] )     : '';
$subtext     = ! empty( $attributes['subtext'] )       ? wp_kses_post( $attributes['subtext'] )     : '';
$form_action = ! empty( $attributes['formAction'] )    ? esc_url( $attributes['formAction'] )       : '';
$email_lbl   = ! empty( $attributes['emailLabel'] )    ? esc_html( $attributes['emailLabel'] )      : 'Email address';
$pass_lbl    = ! empty( $attributes['passwordLabel'] ) ? esc_html( $attributes['passwordLabel'] )   : 'Password';
$rem_lbl     = ! empty( $attributes['rememberLabel'] ) ? esc_html( $attributes['rememberLabel'] )   : 'Remember me';
$submit_text = ! empty( $attributes['submitText'] )    ? esc_html( $attributes['submitText'] )      : 'Sign up';
$submit_var  = ! empty( $attributes['submitVariant'] ) ? esc_attr( $attributes['submitVariant'] )   : 'btn-primary';
$legal       = ! empty( $attributes['legalText'] )     ? wp_kses_post( $attributes['legalText'] )   : '';
$bg          = ! empty( $attributes['bgColor'] )       ? esc_attr( $attributes['bgColor'] )         : '';
$custom      = ! empty( $attributes['customClass'] )   ? esc_attr( $attributes['customClass'] )     : '';
$wrap_class  = implode( ' ', array_filter( [ 'py-5', $bg, $custom ], 'strlen' ) );
$uid = wp_unique_id( 'hero4-' );
$wrapper_attributes = get_block_wrapper_attributes();
?>
<div <?php echo $wrapper_attributes; ?>>
<div class="<?php echo $wrap_class; ?>">
  <div class="container">
    <div class="row align-items-center g-5 py-5">
      <div class="col-lg-7">
        <h1 class="display-5 fw-bold lh-1 mb-3"><?php echo $heading; ?></h1>
        <p class="lead"><?php echo $subtext; ?></p>
      </div>
      <div class="col-lg-5">
        <div class="p-4 p-md-5 border rounded-3 bg-body-tertiary">
          <form <?php if ( $form_action ) echo 'action="' . $form_action . '"'; ?> method="post">
            <?php wp_nonce_field( 'wmblocks_hero_form', '_hero_nonce' ); ?>
            <div class="form-floating mb-3">
              <input type="email" class="form-control" id="<?php echo $uid; ?>email" name="email" placeholder="name@example.com" required>
              <label for="<?php echo $uid; ?>email"><?php echo $email_lbl; ?></label>
            </div>
            <div class="form-floating mb-3">
              <input type="password" class="form-control" id="<?php echo $uid; ?>pass" name="password" placeholder="Password" required>
              <label for="<?php echo $uid; ?>pass"><?php echo $pass_lbl; ?></label>
            </div>
            <div class="checkbox mb-3">
              <label><input type="checkbox" name="remember"> <?php echo $rem_lbl; ?></label>
            </div>
            <button class="btn <?php echo $submit_var; ?> w-100 btn-lg" type="submit"><?php echo $submit_text; ?></button>
            <hr>
            <?php if ( $legal ) : ?><small class="text-body-secondary"><?php echo $legal; ?></small><?php endif; ?>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>
</div>
