<?php
$list_style   = ! empty( $attributes['listStyle'] )   ? esc_attr( $attributes['listStyle'] )   : 'list-unstyled';
$custom_class = ! empty( $attributes['customClass'] ) ? esc_attr( $attributes['customClass'] ) : '';
$items        = ! empty( $attributes['items'] )       ? $attributes['items']                   : [];
$is_inline    = $list_style === 'list-inline';

$list_class = implode( ' ', array_filter( [ $list_style, $custom_class ], 'strlen' ) );

$wrapper_attributes = get_block_wrapper_attributes();
?>
<div <?php echo $wrapper_attributes; ?>>
	<ul class="<?php echo $list_class; ?>">
		<?php foreach ( $items as $item ) :
			$text = ! empty( $item['text'] ) ? wp_kses_post( $item['text'] ) : '';
			if ( ! $text ) continue;
		?>
			<li<?php if ( $is_inline ) echo ' class="list-inline-item"'; ?>>
				<?php echo $text; ?>
			</li>
		<?php endforeach; ?>
	</ul>
</div>
