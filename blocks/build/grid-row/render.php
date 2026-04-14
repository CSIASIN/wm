<?php
$attrs = $attributes;

$row_classes = array_filter( [
	'row',
	! empty( $attrs['noGutters'] )      ? 'g-0'                                : '',
	! empty( $attrs['gutter'] )         ? esc_attr( $attrs['gutter'] )         : '',
	! empty( $attrs['gutterX'] )        ? esc_attr( $attrs['gutterX'] )        : '',
	! empty( $attrs['gutterY'] )        ? esc_attr( $attrs['gutterY'] )        : '',
	! empty( $attrs['gutterSm'] )       ? esc_attr( $attrs['gutterSm'] )       : '',
	! empty( $attrs['gutterXSm'] )      ? esc_attr( $attrs['gutterXSm'] )      : '',
	! empty( $attrs['gutterYSm'] )      ? esc_attr( $attrs['gutterYSm'] )      : '',
	! empty( $attrs['gutterMd'] )       ? esc_attr( $attrs['gutterMd'] )       : '',
	! empty( $attrs['gutterXMd'] )      ? esc_attr( $attrs['gutterXMd'] )      : '',
	! empty( $attrs['gutterYMd'] )      ? esc_attr( $attrs['gutterYMd'] )      : '',
	! empty( $attrs['gutterLg'] )       ? esc_attr( $attrs['gutterLg'] )       : '',
	! empty( $attrs['gutterXLg'] )      ? esc_attr( $attrs['gutterXLg'] )      : '',
	! empty( $attrs['gutterYLg'] )      ? esc_attr( $attrs['gutterYLg'] )      : '',
	! empty( $attrs['gutterXl'] )       ? esc_attr( $attrs['gutterXl'] )       : '',
	! empty( $attrs['gutterXXl'] )      ? esc_attr( $attrs['gutterXXl'] )      : '',
	! empty( $attrs['gutterYXl'] )      ? esc_attr( $attrs['gutterYXl'] )      : '',
	! empty( $attrs['gutterXxl'] )      ? esc_attr( $attrs['gutterXxl'] )      : '',
	! empty( $attrs['gutterXXxl'] )     ? esc_attr( $attrs['gutterXXxl'] )     : '',
	! empty( $attrs['gutterYXxl'] )     ? esc_attr( $attrs['gutterYXxl'] )     : '',
	! empty( $attrs['rowCols'] )        ? esc_attr( $attrs['rowCols'] )        : '',
	! empty( $attrs['rowColsSm'] )      ? esc_attr( $attrs['rowColsSm'] )      : '',
	! empty( $attrs['rowColsMd'] )      ? esc_attr( $attrs['rowColsMd'] )      : '',
	! empty( $attrs['rowColsLg'] )      ? esc_attr( $attrs['rowColsLg'] )      : '',
	! empty( $attrs['rowColsXl'] )      ? esc_attr( $attrs['rowColsXl'] )      : '',
	! empty( $attrs['rowColsXxl'] )     ? esc_attr( $attrs['rowColsXxl'] )     : '',
	! empty( $attrs['justifyContent'] ) ? esc_attr( $attrs['justifyContent'] ) : '',
	! empty( $attrs['alignItems'] )     ? esc_attr( $attrs['alignItems'] )     : '',
	! empty( $attrs['customClass'] )    ? esc_attr( $attrs['customClass'] )    : '',
], 'strlen' );

$wrapper_attributes = get_block_wrapper_attributes( [ 'class' => implode( ' ', $row_classes ) ] );
?>
<div <?php echo $wrapper_attributes; ?>><?php echo $content; ?></div>