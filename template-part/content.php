<?php
/**
 * Template part for displaying posts
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package Watermelon_Wordpress_Theme
 */

?>
<?php echo "content template parts"?>
 

	  <?php if ( is_singular() ) : ?>
	  <div id="content" class="site-content <?= apply_filters('bootscore/class/container', 'container', 'single'); ?> <?= apply_filters('bootscore/class/content/spacer', 'pt-3 pb-5', 'single'); ?>">
    <div id="primary" class="content-area">
      
      <?php do_action( 'bootscore_after_primary_open', 'single' ); ?>

      <?php wm_breadcrumb(); ?>

      <div class="row">
        <div class="<?= apply_filters('bootscore/class/main/col', 'col'); ?>">

          <main id="main" class="site-main">

            <div class="entry-header">
              <?php //the_post(); ?>
              <?php wm_category_badge(); ?>
              <?php do_action( 'bootscore_before_title', 'single' ); ?>
              <?php the_title('<h1 class="entry-title ' . apply_filters('bootscore/class/entry/title', '', 'single') . '">', '</h1>'); ?>
              <?php do_action( 'bootscore_after_title', 'single' ); ?>
              <p class="entry-meta">
                <small class="text-body-secondary">
                  <?php
                 wm_date();
                  wm_author();
                  wm_comment_count();
                  ?>
                </small>
              </p>
              <?php bootscore_post_thumbnail(); ?>
            </div>
            
            <?php do_action( 'bootscore_after_featured_image', 'single' ); ?>

            <div class="entry-content">
              <?php the_content(); ?>
            </div>
            
            <?php do_action( 'bootscore_before_entry_footer', 'single' ); ?>

            <div class="entry-footer clear-both">
              <div class="mb-4">
                <?php wm_tags(); ?>
              </div>
              <!-- Related posts using bS Swiper plugin -->
              <?php if (function_exists('bootscore_related_posts')) bootscore_related_posts(); ?>
              <nav aria-label="bs page navigation">
                <ul class="pagination justify-content-center">
                  <li class="page-item">
                    <?php previous_post_link('%link'); ?>
                  </li>
                  <li class="page-item">
                    <?php next_post_link('%link'); ?>
                  </li>
                </ul>
              </nav>
              <?php comments_template(); ?>
            </div>

          </main>

        </div>
        <?php get_sidebar(); ?>
      </div>

    </div>
  </div>
	  
							  <?php elseif ( is_singular() && is_page()) : ?>
							  
							            <main id="main" class="site-main">

            <div class="entry-header">
              <?php the_post(); ?>
              <?php do_action( 'bootscore_before_title', 'page' ); ?>
              <?php the_title('<h1 class="entry-title ' . apply_filters('bootscore/class/entry/title', '', 'page') . '">', '</h1>'); ?>
              <?php do_action( 'bootscore_after_title', 'page' ); ?>
              <?php wm_post_thumbnail(); ?>
            </div>
            
            <?php do_action( 'bootscore_after_featured_image', 'page' ); ?>

            <div class="entry-content">
              <?php the_content(); ?>
            </div>
            
            <?php do_action( 'bootscore_before_entry_footer', 'page' ); ?>

            <div class="entry-footer">
              <?php comments_template(); ?>
            </div>

          </main>
		  
						  <?php else : ?>
						  
						  <article id="post-<?php the_ID(); ?>" <?php post_class( apply_filters('', 'card horizontal mb-4', 'index') ); ?>>

                    <div class="<?= apply_filters('', 'row g-0', 'index'); ?>">

                      <?php if (has_post_thumbnail()) : ?>
                        <div class="<?= apply_filters('', 'col-lg-6 col-xl-5 col-xxl-4', 'index'); ?>">
                          <a href="<?php the_permalink(); ?>">
                            <?php the_post_thumbnail('medium', array('class' => apply_filters('', 'card-img-lg-start', 'index'))); ?>
                          </a>
                        </div>
                      <?php endif; ?>

                      <div class="<?= apply_filters('', 'col', 'index'); ?>">
                        <div class="<?= apply_filters('', 'card-body', 'index'); ?>">
                          
                          <div class="d-flex justify-content-between gap-3">

                            <?php if (apply_filters('', true, 'index')) : ?>
                              <?php wm_category_badge(); ?>
                            <?php endif; ?>

                            <?php if (is_sticky() ) { ?>
                              <p class="sticky-badge"><span class="badge text-bg-danger"><svg class="bi" aria-hidden="true"><use href="#bi-star-fill"></use></svg></span></p>
                            <?php } ?>
                            
                          </div>
                          
                        

                          <a class="text-body text-decoration-none" href="<?php the_permalink(); ?>">
                            <?php the_title('<h2 class="blog-post-title h5">', '</h2>'); ?>
                          </a>
                          
                        

                          <?php if (apply_filters('bootscore/loop/meta', true, 'index')) : ?>
                            <?php if ('post' === get_post_type()) : ?>
                              <p class="meta small mb-2 text-body-secondary">
                                <?php
                                wm_date();
                                wm_author();
                                wm_comments();
                                wm_edit();
                                ?>
                              </p>
                            <?php endif; ?>
                          <?php endif; ?>
 <?php if (apply_filters('bootscore/loop/excerpt', true, 'index')) : ?>
                            <p class="<?= apply_filters('bootscore/class/loop/card-text/excerpt', 'card-text', 'index'); ?>">
                              <a class="text-body text-decoration-none" href="<?php the_permalink(); ?>">
                                <?= strip_tags(get_the_excerpt()); ?>
                              </a>
                            </p>
                          <?php endif; ?>

                          <?php if (apply_filters('bootscore/loop/read-more', true, 'index')) : ?>
                            <p class="<?= apply_filters('bootscore/class/loop/card-text/read-more', 'card-text', 'index'); ?>">
                              <a class="<?= apply_filters('bootscore/class/loop/read-more', 'read-more', 'index'); ?>" href="<?php the_permalink(); ?>">
                                <?= apply_filters('bootscore/loop/read-more/text', __('Read more »', 'bootscore', 'index')); ?>
                              </a>
                            </p>
                          <?php endif; ?>

           
					
						  


                          <?php if (apply_filters('bootscore/loop/tags', true, 'index')) : ?>
                            <?php wm_tags(); ?>
                          <?php endif; ?>

                        </div>

                        <?php do_action('bootscore_loop_item_after_card_body', 'index'); ?>

                      </div><!-- col -->
                    </div><!-- row -->
                  </article><!-- article -->
				  
						  <?php endif; ?>
						  

