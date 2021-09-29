<?php
/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package Octavia_Zydel
 */

?>
<!doctype html>
<html <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="profile" href="https://gmpg.org/xfn/11">

	<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
<?php wp_body_open(); ?>
<div id="page" class="site">
	<a class="skip-link screen-reader-text" href="#primary"><?php esc_html_e( 'Skip to content', 'octaviazydel' ); ?></a>

	<header id="masthead" class="site-header">
		<?php if (!is_front_page()) { ?>
			<div class="site-branding">
				<?php $altlogo = get_post_meta($post->ID, 'page_logo', true);
				if ($altlogo) {echo '<img src="'.wp_get_attachment_image_url($altlogo, 'full').'"/>'; }
				else {the_custom_logo();} ?>
			</div><!-- .site-branding -->
		<?php } ?>
	</header><!-- #masthead -->
	<div class="site-menu-sidebar">
		<nav id="site-navigation" class="main-navigation">
			<div class="slide-out-menu">
				<?php get_template_part( 'template-parts/menu', 'slideout' ); ?>
			</div>
			<button class="menu-toggle" aria-controls="main-menu" aria-expanded="false">
				<i class="icon-menu-arrows"></i>
				<?php esc_html_e( 'menu', 'octaviazydel' ); ?>
			</button>
		</nav><!-- #site-navigation -->
		<?php if (!is_front_page()) { ?>
			<?php get_template_part( 'template-parts/menu', 'sidebar' ); ?>
		<?php } else { ?>
			<?php get_template_part( 'template-parts/sidebar', 'home' ); ?>
		<?php } ?>
	</div>
