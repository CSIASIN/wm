<?php
$trigger_text    = ! empty( $attributes['triggerText'] )   ? wp_kses_post( $attributes['triggerText'] ) : 'Toggle Content';
$trigger_variant = ! empty( $attributes['triggerVariant'] ) ? esc_attr( $attributes['triggerVariant'] ) : 'btn-primary';
$trigger_type    = ! empty( $attributes['triggerType'] )   ? $attributes['triggerType']                 : 'button';
$start_open      = ! empty( $attributes['startOpen'] );
$horizontal      = ! empty( $attributes['horizontal'] );
$content_width   = ! empty( $attributes['contentWidth'] )  ? esc_attr( $attributes['contentWidth'] )    : '300px';

// Resolve collapse ID
$collapse_id = ! empty( $attributes['collapseId'] )
	? esc_attr( $attributes['collapseId'] )
	: 'collapse-' . wp_unique_id();

$collapse_class = implode( ' ', array_filter( [
	'collapse',
	$horizontal ? 'collapse-horizontal' : '',
	$start_open ? 'show' : '',
], 'strlen' ) );

$wrapper_attributes = get_block_wrapper_attributes();
?>
<div <?php echo $wrapper_attributes; ?>>

	<?php if ( $trigger_type === 'link' ) : ?>
		<a
			class="btn <?php echo $trigger_variant; ?>"
			data-bs-toggle="collapse"
			href="#<?php echo $collapse_id; ?>"
			role="button"
			aria-expanded="<?php echo $start_open ? 'true' : 'false'; ?>"
			aria-controls="<?php echo $collapse_id; ?>"
		>
			<?php echo $trigger_text; ?>
		</a>
	<?php else : ?>
		<button
			class="btn <?php echo $trigger_variant; ?>"
			type="button"
			data-bs-toggle="collapse"
			data-bs-target="#<?php echo $collapse_id; ?>"
			aria-expanded="<?php echo $start_open ? 'true' : 'false'; ?>"
			aria-controls="<?php echo $collapse_id; ?>"
		>
			<?php echo $trigger_text; ?>
		</button>
	<?php endif; ?>

	<div
		class="<?php echo $collapse_class; ?>"
		id="<?php echo $collapse_id; ?>"
		<?php if ( $horizontal ) : ?>
			style="width:<?php echo $content_width; ?>;"
		<?php endif; ?>
	>
		<div class="card card-body">
			<?php echo $content; ?>
		</div>
	</div>

</div>
