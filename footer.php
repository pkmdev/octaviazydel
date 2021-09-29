<?php
/**
 * The template for displaying the footer
 *
 * Contains the closing of the #content div and all content after.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package Octavia_Zydel
 */

?>

	<footer id="colophon" class="site-footer">
		<div class="footer-inner">
			<?php if (!is_front_page()) { ?>
				<?php get_template_part( 'template-parts/footer', 'page' ); ?>
			<?php } else { ?>
				<?php get_template_part( 'template-parts/footer', 'home' ); ?>
			<?php } ?>
		</div>
	</footer><!-- #colophon -->
</div><!-- #page -->

<?php wp_footer(); ?>

</body>
</html>
