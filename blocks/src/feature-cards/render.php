<?php
/**
 * render.php — wmblocks/feature-cards
 * Bootstrap "Custom cards" feature section.
 *
 * <div class="row row-cols-1 row-cols-md-{cols} g-4">
 *   <div class="col">
 *     <div class="card {rounded} {shadow} overflow-hidden h-100">
 *       <img class="card-img-top" …>
 *       <div class="card-body">
 *         <ul class="d-flex list-unstyled gap-2 flex-wrap">
 *           <li><span class="badge {tagColour}">tag1</span></li>
 *           <li><span class="badge …">tag2</span></li>
 *         </ul>
 *         <h3 class="card-title h5">title</h3>
 *       </div>
 *     </div>
 *   </div>
 * </div>
 */

$ok_cols    = [ '2','3','4' ];
$ok_rounded = [ '','rounded','rounded-3','rounded-4' ];
$ok_shadow  = [ '','shadow-sm','shadow','shadow-lg' ];
$ok_tag_clr = [ 'text-bg-primary','text-bg-secondary','text-bg-success','text-bg-danger','text-bg-warning','text-bg-info','text-bg-dark','text-bg-light' ];

$cards   = ( isset( $attributes['cards'] ) && is_array( $attributes['cards'] ) ) ? $attributes['cards'] : [];
$cols    = ( isset( $attributes['cols'] )    && in_array( $attributes['cols'],    $ok_cols,    true ) ) ? $attributes['cols']    : '3';
$rounded = ( isset( $attributes['rounded'] ) && in_array( $attributes['rounded'], $ok_rounded, true ) ) ? $attributes['rounded'] : 'rounded-3';
$shadow  = ( isset( $attributes['shadow'] )  && in_array( $attributes['shadow'],  $ok_shadow,  true ) ) ? $attributes['shadow']  : 'shadow-sm';

$card_classes = implode( ' ', array_filter( [ 'card', 'overflow-hidden', 'h-100', $rounded, $shadow ], 'strlen' ) );

$wrapper_attr = get_block_wrapper_attributes();
?>
<div <?php echo $wrapper_attr; ?>>
<div class="row row-cols-1 row-cols-md-<?php echo esc_attr( $cols ); ?> align-items-stretch g-4">
<?php foreach ( $cards as $card ) :
	$title      = ! empty( $card['title'] )    ? wp_kses_post( $card['title'] )    : '';
	$image_url  = ! empty( $card['imageUrl'] ) ? esc_url( $card['imageUrl'] )       : '';
	$image_alt  = ! empty( $card['imageAlt'] ) ? esc_attr( $card['imageAlt'] )      : '';
	$tag1       = ! empty( $card['tag1'] )     ? wp_kses_post( $card['tag1'] )      : '';
	$tag2       = ! empty( $card['tag2'] )     ? wp_kses_post( $card['tag2'] )      : '';
	$tag_colour = ( isset( $card['tagColour'] ) && in_array( $card['tagColour'], $ok_tag_clr, true ) ) ? $card['tagColour'] : 'text-bg-primary';
?>
<div class="col">
	<div class="<?php echo esc_attr( $card_classes ); ?>">
		<?php if ( $image_url ) : ?>
		<img src="<?php echo $image_url; ?>" alt="<?php echo $image_alt; ?>" class="card-img-top" style="height:200px;object-fit:cover;">
		<?php else : ?>
		<div class="bg-light d-flex align-items-center justify-content-center" style="height:200px;">
			<span class="text-body-tertiary fs-1">🖼</span>
		</div>
		<?php endif; ?>
		<div class="card-body">
			<div class="d-flex gap-2 mb-2 flex-wrap">
				<?php if ( $tag1 ) : ?>
				<span class="badge <?php echo esc_attr( $tag_colour ); ?>"><?php echo $tag1; ?></span>
				<?php endif; ?>
				<?php if ( $tag2 ) : ?>
				<span class="badge <?php echo esc_attr( $tag_colour ); ?> opacity-75"><?php echo $tag2; ?></span>
				<?php endif; ?>
			</div>
			<h3 class="card-title h5"><?php echo $title; ?></h3>
		</div>
	</div>
</div>
<?php endforeach; ?>
</div>
</div>
