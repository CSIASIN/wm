<?php

/**
 * Template part for displaying the dark navbar
 */
?>
<nav id="nav-main" class="navbar navbar-expand-lg navbar-dark bg-dark">

    <div class="<?= apply_filters('bootscore/class/container', 'container', 'header'); ?>">

        <?php do_action('bootscore_before_navbar_brand'); ?>

        <!-- Navbar Brand -->
        <a class="<?= apply_filters('bootscore/class/header/navbar-brand', 'navbar-brand'); ?>" href="<?= esc_url(home_url()); ?>">
            <svg class="d-inline-block align-text-middle" xmlns="http://www.w3.org/2000/svg" width="70" height="70" class="bi" fill="currentColor" viewBox="0 0 200 200">
                <path fill-rule="evenodd" d="M101.2 141.2c-24.6 0-47.8-8-67-23.2-.6-.4-1.1-.9-1.7-1.4l-2.3-1.9 71.1-88.2 69.1 89.9-2.3 1.8c-.6.5-1.2.9-1.7 1.3-18.9 14.2-41.4 21.8-65.1 21.8Zm-62.6-27.3c18 14 39.7 21.4 62.6 21.4s43.1-6.9 60.8-20l-60.8-79.1-62.5 77.7Zm62.6 57.8c-19 0-37.4-3.7-54.8-11.1-11.3-4.8-21.9-11-31.6-18.5-.6-.4-1.1-.9-1.7-1.3l-2.3-1.9L26 120l2.3 1.9c.5.4 1.1.9 1.6 1.3 20.6 15.9 45.2 24.4 71.2 24.4s49-7.9 69.2-22.8c.6-.4 1.1-.8 1.7-1.2l2.4-1.8 14.8 19.3-2.4 1.8c-.6.4-1.2.9-1.7 1.3-8.9 6.7-18.7 12.3-29.1 16.6-17.4 7.3-35.8 11.1-54.8 11.1Zm-82-33.8c9 6.9 18.9 12.7 29.5 17.2 16.6 7 34.3 10.6 52.5 10.6s35.8-3.6 52.5-10.6c9.6-4.1 18.8-9.2 27.1-15.4l-7.5-9.8c-21.1 15.4-46 23.5-72.1 23.5s-52.7-8.7-74.2-25.1l-7.7 9.6Zm81.8-28.4c-4.2 0-7.4-4.8-7.4-11.1S98.5 88.5 99 88l1.9-1.6 1.9 1.6c.6.5 5.4 4.7 5.4 10.4s-3.2 11.1-7.4 11.1Zm0-14.6c-.7 1.1-1.4 2.3-1.4 3.6 0 2.7.8 4.4 1.4 4.9.5-.6 1.4-2.3 1.4-4.9s-.6-2.5-1.4-3.6m0-12.1c-4.2 0-7.4-4.8-7.4-11.1s4.9-9.9 5.4-10.4l1.9-1.6 1.9 1.6c.6.5 5.4 4.7 5.4 10.4s-3.2 11.1-7.4 11.1Zm0-14.7c-.7 1.1-1.4 2.3-1.4 3.6 0 2.7.8 4.4 1.4 4.9.5-.6 1.4-2.3 1.4-4.9s-.6-2.5-1.4-3.6m27.8 32.7c-.7 0-1.4-.1-2.1-.4-2.6-.9-5.1-3.5-6.6-6.9-2.3-5.1.4-11.1.7-11.8l1-2.2 2.4.5c.7.2 6.9 1.7 9.3 6.9 2.5 5.6 1.7 11.3-2 13.2-.8.4-1.6.6-2.5.6ZM125.3 87c-.3 1.3-.3 2.9.2 4.1 1.1 2.3 2.5 3.5 3.1 3.7.3-.7.4-2.7-.7-5.3-.5-1.1-1.6-2-2.6-2.5m-3.7 41.6c-.7 0-1.4-.1-2.1-.4-2.6-.9-5.1-3.5-6.6-6.9-2.3-5.1.4-11.1.7-11.8l1-2.2 2.4.5c.7.2 6.9 1.7 9.3 6.9 2.5 5.6 1.7 11.3-2 13.2-.8.4-1.6.6-2.5.6Zm-3.5-13.8c-.3 1.3-.3 2.9.2 4.1 1.1 2.3 2.5 3.5 3.1 3.7.3-.7.4-2.7-.7-5.3-.5-1.1-1.5-1.9-2.6-2.5m-46.4-14c-.9 0-1.8-.2-2.5-.6-3.7-1.9-4.6-7.6-2-13.2 2.4-5.2 8.6-6.8 9.3-6.9l2.4-.5 1 2.2c.3.7 3 6.7.7 11.8-1.5 3.4-4 6-6.6 6.9-.7.2-1.4.4-2.1.4Zm1-11.3c-1.2 2.6-1 4.6-.7 5.3.6-.2 2.1-1.4 3.1-3.7.5-1.2.5-2.7.2-4.1-1.1.6-2.1 1.4-2.6 2.5m5.6 39.1c-.9 0-1.8-.2-2.5-.6-3.7-1.9-4.6-7.6-2-13.2 2.4-5.2 8.6-6.8 9.3-6.9l2.4-.5 1 2.2c.3.7 3 6.7.7 11.8-1.5 3.4-4 6-6.6 6.9-.7.2-1.4.4-2.1.4Zm.9-11.3c-1.2 2.6-1 4.6-.7 5.3.6-.2 2.1-1.4 3.1-3.7.5-1.2.5-2.7.2-4.1-1.1.6-2.1 1.4-2.6 2.5" />
            </svg>
            WaterMelon
        </a>

        <?php do_action('bootscore_after_navbar_brand'); ?>

        <!-- Offcanvas Navbar -->
        <div class="offcanvas offcanvas-<?= apply_filters('bootscore/class/header/offcanvas/direction', 'end', 'menu'); ?>" tabindex="-1" id="offcanvas-navbar">
            <div class="offcanvas-header <?= apply_filters('bootscore/class/offcanvas/header', '', 'menu'); ?>">
                <span class="h5 offcanvas-title"><?= apply_filters('bootscore/offcanvas/navbar/title', __('Menu', 'bootscore')); ?></span>
                <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body <?= apply_filters('bootscore/class/offcanvas/body', '', 'menu'); ?>">

                <!-- Bootstrap 5 Nav Walker Main Menu -->
                <?php
                wp_nav_menu(array(
                    'theme_location' => 'main-menu',
                    'container'      => false,
                    'menu_class'     => '',
                    'fallback_cb'    => '__return_false',
                    'items_wrap'     => '<ul id="bootscore-navbar" class="navbar-nav ' . apply_filters('bootscore/class/header/navbar-nav', 'ms-auto') . ' %2$s">%3$s</ul>',
                    'depth'          => 2,
                    'walker'         => new bootstrap_5_wp_nav_menu_walker()
                ));
                ?>
                <!-- Top Nav 2 Widget -->
                <?php if (is_active_sidebar('top-nav-2')) : ?>
                    <?php dynamic_sidebar('top-nav-2'); ?>
                <?php endif; ?>

            </div>
        </div>

        <div class="header-actions <?= apply_filters('bootscore/class/header-actions', 'd-flex align-items-center'); ?>">

            <!-- Top Nav Widget -->
            <?php if (is_active_sidebar('top-nav')) : ?>
                <?php dynamic_sidebar('top-nav'); ?>
            <?php endif; ?>

            <?php
            if (class_exists('WooCommerce')) :
                get_template_part('template-parts/header/actions', 'woocommerce');
            else :
                get_template_part('template-parts/header/actions');
            endif;
            ?>

            <!-- Navbar Toggler -->
            <button class="<?= apply_filters('bootscore/class/header/button', 'btn btn-outline-secondary', 'nav-toggler'); ?> <?= apply_filters('bootscore/class/header/navbar/toggler/breakpoint', 'd-lg-none'); ?> <?= apply_filters('bootscore/class/header/action/spacer', 'ms-1 ms-md-2', 'nav-toggler'); ?> nav-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvas-navbar" aria-controls="offcanvas-navbar" aria-label="<?php esc_attr_e('Toggle main menu', 'bootscore'); ?>">
                <?= apply_filters('bootscore/icon/menu', '<i class="fa-solid fa-bars"></i>'); ?> <span class="visually-hidden-focusable">Menu</span>
            </button>

            <?php do_action('bootscore_after_nav_toggler'); ?>

        </div><!-- .header-actions -->

    </div><!-- .container -->

</nav><!-- .navbar -->