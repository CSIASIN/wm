<?php
$item_type  = ! empty( $attributes['itemType'] )  ? $attributes['itemType']  : 'li';
$flush      = ! empty( $attributes['flush'] );
$numbered   = ! empty( $attributes['numbered'] );
$horizontal = ! empty( $attributes['horizontal'] ) ? $attributes['horizontal'] : '';
$items      = ! empty( $attributes['items'] )      ? $attributes['items']      : [];

// List wrapper tag
$tag = $numbered ? 'ol' : ( $item_type === 'li' ? 'ul' : 'div' );

// List class
$list_class = implode( ' ', array_filter( [
	'list-group',
	$flush    ? 'list-group-flush'    : '',
	$numbered ? 'list-group-numbered' : '',
	$horizontal,
], 'strlen' ) );

// Item tag
$item_tag = $item_type === 'li' ? 'li' : ( $item_type === 'a' ? 'a' : 'button' );

$wrapper_attributes = get_block_wrapper_attributes();
?>
<div <?php echo $wrapper_attributes; ?>>
<<?php echo $tag; ?> class="ff <?php echo esc_attr( $list_class ); ?>">
	<?php foreach ( $items as $item ) :
		$text         = ! empty( $item['text'] )        ? wp_kses_post( $item['text'] )         : '';
		$subtext      = ! empty( $item['subtext'] )     ? wp_kses_post( $item['subtext'] )      : '';
		$badge        = ! empty( $item['badge'] )       ? esc_html( $item['badge'] )            : '';
		$badge_var    = ! empty( $item['badgeVariant'] ) ? esc_attr( $item['badgeVariant'] )    : 'text-bg-primary';
		$url          = ! empty( $item['url'] )         ? esc_url( $item['url'] )               : '#';
		$variant      = ! empty( $item['variant'] )     ? esc_attr( $item['variant'] )          : '';
		$active       = ! empty( $item['active'] );
		$disabled     = ! empty( $item['disabled'] );

		$item_class = implode( ' ', array_filter( [
			'list-group-item',
			$item_type !== 'li' ? 'list-group-item-action' : '',
			$variant,
			$active   ? 'active'   : '',
			$disabled ? 'disabled' : '',
		], 'strlen' ) );

		$has_subtext = $subtext || $badge;
	?>
		<<?php echo $item_tag; ?>
			class="<?php echo $item_class; ?>"
			<?php if ( $item_type === 'a' ) : ?>href="<?php echo $url; ?>"<?php endif; ?>
			<?php if ( $item_type === 'button' ) : ?>type="button"<?php endif; ?>
			<?php if ( $active )                : ?>aria-current="true"<?php endif; ?>
			<?php if ( $disabled && $item_type === 'a' ) : ?>aria-disabled="true"<?php endif; ?>
			<?php if ( $disabled && $item_type === 'button' ) : ?>disabled<?php endif; ?>
		>
			<?php if ( $has_subtext ) : ?>
				<div class="d-flex justify-content-between align-items-start">
					<div class="ms-2 me-auto">
						<div class="fw-bold"><?php echo $text; ?></div>
						<?php echo $subtext; ?>
					</div>
					<?php if ( $badge ) : ?>
						<span class="badge rounded-pill <?php echo $badge_var; ?>"><?php echo $badge; ?></span>
					<?php endif; ?>
				</div>
			<?php elseif ( $badge ) : ?>
				<div class="d-flex justify-content-between align-items-center">
					<span><?php echo $text; ?></span>
					<span class="badge rounded-pill <?php echo $badge_var; ?>"><?php echo $badge; ?></span>
				</div>
			<?php else : ?>
				<?php echo $text; ?>
			<?php endif; ?>
		</<?php echo $item_tag; ?>>
	<?php endforeach; ?>
</<?php echo $tag; ?>>
</div>
