<?php
$action      = ! empty( $attributes['formAction'] )     ? esc_url( $attributes['formAction'] )       : '';
$method      = ! empty( $attributes['formMethod'] )     ? esc_attr( $attributes['formMethod'] )      : 'post';
$layout      = ! empty( $attributes['formLayout'] )     ? $attributes['formLayout']                  : 'stacked';
$validated   = ! empty( $attributes['validated'] );
$novalidate  = isset( $attributes['novalidate'] ) ? (bool) $attributes['novalidate'] : true;
$autocomplete = ! empty( $attributes['autocomplete'] )  ? esc_attr( $attributes['autocomplete'] )    : 'on';
$success_msg = ! empty( $attributes['successMessage'] ) ? esc_html( $attributes['successMessage'] )  : '';
$custom      = ! empty( $attributes['customClass'] )    ? esc_attr( $attributes['customClass'] )     : '';

$form_class = implode( ' ', array_filter( [
	$layout === 'inline' ? 'row row-cols-lg-auto g-3 align-items-center' : '',
	$layout === 'grid'   ? 'row g-3' : '',
	$validated ? 'was-validated' : '',
	$custom,
], 'strlen' ) );

$wrapper_attributes = get_block_wrapper_attributes();
?>
<div <?php echo $wrapper_attributes; ?>>
	<?php if ( $success_msg ) : ?>
		<div class="wmblocks-form-success alert alert-success d-none" role="alert"><?php echo $success_msg; ?></div>
	<?php endif; ?>
	<form
		<?php if ( $action ) echo 'action="' . $action . '"'; ?>
		method="<?php echo $method; ?>"
		<?php if ( $form_class ) echo 'class="' . $form_class . '"'; ?>
		autocomplete="<?php echo $autocomplete; ?>"
		<?php if ( $novalidate ) echo 'novalidate'; ?>
		data-wm-form
	>
		<?php wp_nonce_field( 'wmblocks_form_nonce', '_wmblocks_nonce' ); ?>
		<?php echo $content; ?>
	</form>
</div>
