<?php
$navbar_id        = ! empty( $attributes['navbarId'] )         ? esc_attr( $attributes['navbarId'] )         : 'navbar-' . wp_unique_id();
$brand_text       = ! empty( $attributes['brandText'] )        ? esc_html( $attributes['brandText'] )        : '';
$brand_url        = ! empty( $attributes['brandUrl'] )         ? esc_url( $attributes['brandUrl'] )          : '#';
$brand_image_url  = ! empty( $attributes['brandImageUrl'] )    ? esc_url( $attributes['brandImageUrl'] )     : '';
$brand_img_height = ! empty( $attributes['brandImageHeight'] ) ? esc_attr( $attributes['brandImageHeight'] ) : '30px';
$color_scheme     = ! empty( $attributes['colorScheme'] )      ? esc_attr( $attributes['colorScheme'] )      : 'navbar-dark bg-dark';
$expand           = ! empty( $attributes['expandBreakpoint'] ) ? esc_attr( $attributes['expandBreakpoint'] ) : 'navbar-expand-lg';
$placement        = ! empty( $attributes['placement'] )        ? esc_attr( $attributes['placement'] )        : '';
$container_type   = ! empty( $attributes['containerType'] )    ? esc_attr( $attributes['containerType'] )    : 'container';
$nav_items        = ! empty( $attributes['navItems'] )         ? $attributes['navItems']                     : [];
$show_search      = ! empty( $attributes['showSearch'] );
$search_ph        = ! empty( $attributes['searchPlaceholder'] ) ? esc_attr( $attributes['searchPlaceholder'] ) : 'Search';
$nav_alignment    = ! empty( $attributes['navAlignment'] )     ? esc_attr( $attributes['navAlignment'] )     : '';

$navbar_class = implode( ' ', array_filter( [ 'navbar', $expand, $color_scheme, $placement ], 'strlen' ) );

$wrapper_attributes = get_block_wrapper_attributes();
?>
<div <?php echo $wrapper_attributes; ?>>
<nav class="<?php echo $navbar_class; ?>">
	<div class="<?php echo $container_type; ?>">

		<?php /* Brand */ ?>
		<a class="navbar-brand" href="<?php echo $brand_url; ?>">
			<?php if ( $brand_image_url ) : ?>
				<img src="<?php echo $brand_image_url; ?>" alt="<?php echo $brand_text; ?>" style="height:<?php echo $brand_img_height; ?>;" class="d-inline-block align-text-top<?php echo $brand_text ? ' me-2' : ''; ?>">
			<?php endif; ?>
			<?php echo $brand_text; ?>
		</a>

		<?php /* Toggler */ ?>
		<?php if ( $expand !== 'navbar-expand' ) : ?>
		<button
			class="navbar-toggler"
			type="button"
			data-bs-toggle="collapse"
			data-bs-target="#<?php echo $navbar_id; ?>"
			aria-controls="<?php echo $navbar_id; ?>"
			aria-expanded="false"
			aria-label="<?php esc_attr_e( 'Toggle navigation', 'wmblocks' ); ?>"
		>
			<span class="navbar-toggler-icon"></span>
		</button>
		<?php endif; ?>

		<?php /* Collapsible content */ ?>
		<div class="collapse navbar-collapse" id="<?php echo $navbar_id; ?>">

			<?php /* Nav links */ ?>
			<ul class="navbar-nav<?php echo $nav_alignment ? ' ' . $nav_alignment : ''; ?> mb-2 mb-lg-0">
				<?php foreach ( $nav_items as $item ) :
					$label    = ! empty( $item['label'] )    ? esc_html( $item['label'] )    : '';
					$url      = ! empty( $item['url'] )      ? esc_url( $item['url'] )        : '#';
					$active   = ! empty( $item['active'] );
					$disabled = ! empty( $item['disabled'] );
					$link_class = implode( ' ', array_filter( [ 'nav-link', $active ? 'active' : '', $disabled ? 'disabled' : '' ], 'strlen' ) );
				?>
					<li class="nav-item">
						<a
							class="<?php echo $link_class; ?>"
							href="<?php echo $disabled ? '#' : $url; ?>"
							<?php if ( $active ) : ?>aria-current="page"<?php endif; ?>
							<?php if ( $disabled ) : ?>aria-disabled="true" tabindex="-1"<?php endif; ?>
						>
							<?php echo $label; ?>
						</a>
					</li>
				<?php endforeach; ?>
			</ul>

			<?php /* Search form */ ?>
			<?php if ( $show_search ) : ?>
			<form class="d-flex" role="search">
				<input class="form-control me-2" type="search" placeholder="<?php echo $search_ph; ?>" aria-label="<?php echo $search_ph; ?>">
				<button class="btn btn-outline-light" type="submit"><?php esc_html_e( 'Search', 'wmblocks' ); ?></button>
			</form>
			<?php endif; ?>

		</div>
	</div>
</nav>
</div>
