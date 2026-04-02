<?php
$tab_style   = ! empty( $attributes['tabStyle'] )  ? esc_attr( $attributes['tabStyle'] )  : 'nav-tabs';
$tab_fill    = ! empty( $attributes['tabFill'] )   ? ' ' . esc_attr( $attributes['tabFill'] ) : '';
$vertical    = ! empty( $attributes['vertical'] );
$fade_effect = isset( $attributes['fadeEffect'] ) ? (bool) $attributes['fadeEffect'] : true;
$block_id    = 'wmtabs-' . wp_unique_id();

$tab_items = [];
foreach ( $block->inner_blocks as $inner_block ) {
	if ( $inner_block->name === 'wmblocks/tab-item' ) {
		$tab_items[] = $inner_block;
	}
}

$wrapper_class = $vertical ? 'd-flex align-items-start' : '';
$nav_class     = trim( 'nav ' . $tab_style . $tab_fill . ( $vertical ? ' flex-column me-3' : '' ) );
$wrapper_attributes = get_block_wrapper_attributes( $wrapper_class ? [ 'class' => $wrapper_class ] : [] );
?>
<div <?php echo $wrapper_attributes; ?>>

	<ul class="<?php echo $nav_class; ?>" id="<?php echo $block_id; ?>" role="tablist"
		<?php if ( $vertical ) : ?>aria-orientation="vertical"<?php endif; ?>>
		<?php
		$index = 0;
		foreach ( $tab_items as $item ) :
			$attrs     = $item->attributes;
			$label     = ! empty( $attrs['tabLabel'] ) ? wp_strip_all_tags( $attrs['tabLabel'] ) : 'Tab ' . ( $index + 1 );
			$tab_id    = ! empty( $attrs['tabId'] )    ? esc_attr( $attrs['tabId'] )             : 'tab-' . $index;
			$is_active = ! empty( $attrs['isActive'] );
		?>
			<li class="nav-item" role="presentation">
				<button
					class="nav-link<?php echo $is_active ? ' active' : ''; ?>"
					id="<?php echo $tab_id; ?>-tab"
					data-bs-toggle="tab"
					data-bs-target="#<?php echo $tab_id; ?>-pane"
					type="button"
					role="tab"
					aria-controls="<?php echo $tab_id; ?>-pane"
					aria-selected="<?php echo $is_active ? 'true' : 'false'; ?>"
				>
					<?php echo esc_html( $label ); ?>
				</button>
			</li>
		<?php
			$index++;
		endforeach;
		?>
	</ul>

	<div class="tab-content<?php echo $vertical ? ' flex-grow-1' : ''; ?>" id="<?php echo $block_id; ?>Content">
		<?php
		$index = 0;
		foreach ( $tab_items as $item ) :
			$attrs     = $item->attributes;
			$tab_id    = ! empty( $attrs['tabId'] ) ? esc_attr( $attrs['tabId'] ) : 'tab-' . $index;
			$is_active = ! empty( $attrs['isActive'] );
			$pane_class = 'tab-pane' . ( $fade_effect ? ' fade' : '' ) . ( $is_active ? ' show active' : '' );
		?>
			<div
				class="<?php echo $pane_class; ?>"
				id="<?php echo $tab_id; ?>-pane"
				role="tabpanel"
				aria-labelledby="<?php echo $tab_id; ?>-tab"
				tabindex="0"
			>
				<?php echo $item->render(); ?>
			</div>
		<?php
			$index++;
		endforeach;
		?>
	</div>

</div>
