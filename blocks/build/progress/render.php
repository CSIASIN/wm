<?php
$bars   = ! empty( $attributes['bars'] )   ? $attributes['bars']   : [];
$height = ! empty( $attributes['height'] ) ? esc_attr( $attributes['height'] ) : '';

$height_style = $height ? ' style="height:' . $height . ';"' : '';

$wrapper_attributes = get_block_wrapper_attributes();
?>
<div <?php echo $wrapper_attributes; ?>>
<?php if ( count( $bars ) === 1 ) :
	// ── Single bar ──────────────────────────────────────────────────────────
	$bar     = $bars[0];
	$value   = isset( $bar['value'] )     ? (int) $bar['value']              : 0;
	$label   = ! empty( $bar['label'] )   ? esc_html( $bar['label'] )        : '';
	$show_lbl = ! empty( $bar['showLabel'] );
	$variant = ! empty( $bar['variant'] ) ? esc_attr( $bar['variant'] )      : 'bg-primary';
	$striped = ! empty( $bar['striped'] );
	$animated = ! empty( $bar['animated'] );

	$bar_class = implode( ' ', array_filter( [
		'progress-bar',
		$variant,
		$striped  ? 'progress-bar-striped'  : '',
		$animated ? 'progress-bar-animated' : '',
	], 'strlen' ) );
?>
	<div class="progress"<?php echo $height_style; ?> role="progressbar"
		aria-valuenow="<?php echo $value; ?>" aria-valuemin="0" aria-valuemax="100">
		<div class="<?php echo $bar_class; ?>" style="width:<?php echo $value; ?>%">
			<?php if ( $show_lbl ) echo $label ?: $value . '%'; ?>
		</div>
	</div>
<?php else :
	// ── Stacked bars ────────────────────────────────────────────────────────
?>
	<div class="progress"<?php echo $height_style; ?>>
		<?php foreach ( $bars as $bar ) :
			$value    = isset( $bar['value'] )      ? (int) $bar['value']         : 0;
			$label    = ! empty( $bar['label'] )    ? esc_html( $bar['label'] )   : '';
			$show_lbl  = ! empty( $bar['showLabel'] );
			$variant  = ! empty( $bar['variant'] )  ? esc_attr( $bar['variant'] ) : 'bg-primary';
			$striped  = ! empty( $bar['striped'] );
			$animated = ! empty( $bar['animated'] );

			$bar_class = implode( ' ', array_filter( [
				'progress-bar',
				$variant,
				$striped  ? 'progress-bar-striped'  : '',
				$animated ? 'progress-bar-animated' : '',
			], 'strlen' ) );
		?>
			<div class="<?php echo $bar_class; ?>" style="width:<?php echo $value; ?>%"
				role="progressbar" aria-valuenow="<?php echo $value; ?>" aria-valuemin="0" aria-valuemax="100">
				<?php if ( $show_lbl ) echo $label ?: $value . '%'; ?>
			</div>
		<?php endforeach; ?>
	</div>
<?php endif; ?>
</div>
