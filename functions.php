<?php
/**
 * Watermelon Wordpress Theme functions and definitions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package Watermelon_Wordpress_Theme
 */
 
/**
 * Load required files
 */
require_once('inc/globals.php');                // Global Variables
require_once('inc/breadcrumb.php');             // Breadcrumbs
require_once('inc/navmenu.php');                // Navmenu
require_once('inc/navwalker.php');              // Bootstrap Navwalker
require_once('inc/comments.php');               // Comments
require_once('inc/pagination.php');             // Pagination
require_once('inc/enqueue.php');                // Enqueue

/**
 * Sets up theme defaults and registers support for various WordPress features.
 *
 * Note that this function is hooked into the after_setup_theme hook, which
 * runs before the init hook. The init hook is too late for some features, such
 * as indicating support for post thumbnails.
 */
function wm_setup() {
	/*
		* Make theme available for translation.
		* Translations can be filed in the /languages/ directory.
		* If you're building a theme based on Watermelon Wordpress Theme, use a find and replace
		* to change 'wm' to the name of your theme in all the template files.
		*/
	load_theme_textdomain( 'wm', get_template_directory() . '/languages' );

	// Add default posts and comments RSS feed links to head.
	add_theme_support( 'automatic-feed-links' );

	/*
		* Let WordPress manage the document title.
		* By adding theme support, we declare that this theme does not use a
		* hard-coded <title> tag in the document head, and expect WordPress to
		* provide it for us.
		*/
	add_theme_support( 'title-tag' );

	/*
		* Enable support for Post Thumbnails on posts and pages.
		*
		* @link https://developer.wordpress.org/themes/functionality/featured-images-post-thumbnails/
		*/
	add_theme_support( 'post-thumbnails' );

	// This theme uses wp_nav_menu() in one location.
	register_nav_menus(
		array(
			'menu-1' => esc_html__( 'Primary', 'wm' ),
		)
	);

	/*
		* Switch default core markup for search form, comment form, and comments
		* to output valid HTML5.
		*/
	add_theme_support(
		'html5',
		array(
			'search-form',
			'comment-form',
			'comment-list',
			'gallery',
			'caption',
			'style',
			'script',
		)
	);

	// Set up the WordPress core custom background feature.
	add_theme_support(
		'custom-background',
		apply_filters(
			'wm_custom_background_args',
			array(
				'default-color' => 'ffffff',
				'default-image' => '',
			)
		)
	);

	// Add theme support for selective refresh for widgets.
	add_theme_support( 'customize-selective-refresh-widgets' );

	/**
	 * Add support for core custom logo.
	 *
	 * @link https://codex.wordpress.org/Theme_Logo
	 */
	add_theme_support(
		'custom-logo',
		array(
			'height'      => 250,
			'width'       => 250,
			'flex-width'  => true,
			'flex-height' => true,
		)
	);
}
add_action( 'after_setup_theme', 'wm_setup' );

/**
 * Set the content width in pixels, based on the theme's design and stylesheet.
 *
 * Priority 0 to make it available to lower priority callbacks.
 *
 * @global int $content_width
 */
function wm_content_width() {
	$GLOBALS['content_width'] = apply_filters( 'wm_content_width', 640 );
}
add_action( 'after_setup_theme', 'wm_content_width', 0 );

/**
 * Register widget area.
 *
 * @link https://developer.wordpress.org/themes/functionality/sidebars/#registering-a-sidebar
 */
function wm_widgets_init() {
	register_sidebar(
		array(
			'name'          => esc_html__( 'Sidebar', 'wm' ),
			'id'            => 'sidebar-1',
			'description'   => esc_html__( 'Add widgets here.', 'wm' ),
			'before_widget' => '<section id="%1$s" class="widget %2$s">',
			'after_widget'  => '</section>',
			'before_title'  => '<h2 class="widget-title">',
			'after_title'   => '</h2>',
		)
	);
}
add_action( 'widgets_init', 'wm_widgets_init' );

/**
 * Enqueue scripts and styles.

function wm_scripts() {
	wp_enqueue_style( 'wm-style', get_stylesheet_uri(), array(), _S_VERSION );
	wp_style_add_data( 'wm-style', 'rtl', 'replace' );

	wp_enqueue_script( 'wm-navigation', get_template_directory_uri() . '/js/navigation.js', array(), _S_VERSION, true );

	if ( is_singular() && comments_open() && get_option( 'thread_comments' ) ) {
		wp_enqueue_script( 'comment-reply' );
	}
} */
//add_action( 'wp_enqueue_scripts', 'wm_scripts' );

/**
 * Implement the Custom Header feature.
 */
require get_template_directory() . '/inc/custom-header.php';

/**
 * Custom template tags for this theme.
 */
require get_template_directory() . '/inc/template-tags.php';

/**
 * Functions which enhance the theme by hooking into WordPress.
 */
require get_template_directory() . '/inc/template-functions.php';

/**
 * Customizer additions.
 */
require get_template_directory() . '/inc/customizer.php';

/**
 * Load Jetpack compatibility file.
 */
if ( defined( 'JETPACK__VERSION' ) ) {
	require get_template_directory() . '/inc/jetpack.php';
}

/**
 * Load WooCommerce compatibility file.
 */
if ( class_exists( 'WooCommerce' ) ) {
	require get_template_directory() . '/inc/woocommerce.php';
}


add_filter( 'block_categories_all', function( $categories ) {
    return array_merge(
        array(
            array(
                'slug'  => 'watermelon-blocks',
                'title' => __( 'Watermelon Blocks', 'wm' ),
                'icon'  => null,
            ),
        ),
        $categories
    );
}, 10, 2 );

function wmblocks_container_block_init() {
	wp_register_block_types_from_metadata_collection( __DIR__ . '/blocks/build', __DIR__ . '/blocks/build/blocks-manifest.php' );
}
add_action( 'init', 'wmblocks_container_block_init' );


function wm_enqueue_formatting_toolbar() {
    wp_enqueue_script(
        'tooltips', get_template_directory_uri().'/blocks/build/formats/tooltips/index.js',
        [ 'wp-rich-text', 'wp-element', 'wp-block-editor', 'wp-i18n' ],
        false,
        true
    );
	    wp_enqueue_script(
        'popovers', get_template_directory_uri().'/blocks/build/formats/popover/index.js',
        [ 'wp-rich-text', 'wp-element', 'wp-block-editor', 'wp-i18n' ],
        false,
        true
    );
}
add_action('enqueue_block_editor_assets', 'wm_enqueue_formatting_toolbar');


add_action('wp_ajax_ce_load_more_cat_posts', 'ce_load_more_cat_posts');
add_action('wp_ajax_nopriv_ce_load_more_cat_posts', 'ce_load_more_cat_posts');
function ce_load_more_cat_posts()
{
	       $query = new WP_Query(
                                array(
                            'posts_per_page' => 5,
                            'cat' => $_POST['catid'],
                            'post_status' => 'publish',
                            'orderby' => 'rand',
                            'order' => 'ASC'
                                )
                        );
						
  //  global $wpdb;
  //  $paged=$_POST['paged']*500;
//    $query= stripslashes($_POST['query']);
  //  $allColorNames = $wpdb->get_results($query." limit $paged,500");
	
                    $i = 1;
                        if ($query->have_posts()) :
                            while ($query->have_posts()):$query->the_post();
							$excerpt = get_the_excerpt();
						
                                ?>
                                <h3 class="jumbotron-heading h4 mb-3"><a href="<?php echo get_the_permalink();?>" title="<?php echo get_the_title();?>"> <?php echo get_the_title();?></a></h3>
                                <p class="font-weight-light text-muted border-bottom" >by <?php echo get_the_author() ;?> | Last Updated on <?php echo get_the_modified_date();?> | Created on <?php echo get_the_date();?></p>
                                <?php
                                $i++;
                            endwhile;
                            
                            wp_reset_postdata();
                        else:
                            echo "0";
                        endif;
    die(0);
}


function wm_footer_js()
{
	$footer_js = get_theme_mod('footer_js_code', '');
	if (!empty($footer_js)) {
		echo "{$footer_js}";
	}
}
add_action('wp_footer', 'wm_footer_js');
