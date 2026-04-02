<?php
/**
 * Template part for displaying results in search pages
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package Watermelon_Wordpress_Theme
 */

?>
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