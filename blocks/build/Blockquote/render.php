<?php
$quote        = ! empty( $attributes['quote'] )       ? wp_kses_post( $attributes['quote'] )       : '';
$source_name  = ! empty( $attributes['sourceName'] )  ? esc_html( $attributes['sourceName'] )      : '';
$source_title = ! empty( $attributes['sourceTitle'] ) ? esc_html( $attributes['sourceTitle'] )     : '';
$text_align   = ! empty( $attributes['textAlign'] )   ? esc_attr( $attributes['textAlign'] )       : '';
$custom_class = ! empty( $attributes['customClass'] ) ? esc_attr( $attributes['customClass'] )     : '';

$figure_class = implode( ' ', array_filter( [ $text_align, $custom_class ], 'strlen' ) );

$wrapper_attributes = get_block_wrapper_attributes();
?>
<div <?php echo $wrapper_attributes; ?>>
	<figure<?php if ( $figure_class ) echo ' class="' . $figure_class . '"'; ?>>
		<blockquote class="blockquote">
			<p><?php echo $quote; ?></p>
		</blockquote>
		<?php if ( $source_name || $source_title ) : ?>
			<figcaption class="blockquote-footer">
				<?php echo $source_name; ?>
				<?php if ( $source_title ) : ?>
					<cite title="<?php echo $source_title; ?>"><?php echo $source_title; ?></cite>
				<?php endif; ?>
			</figcaption>
		<?php endif; ?>
	</figure>
</div>
