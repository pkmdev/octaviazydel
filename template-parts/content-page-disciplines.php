<?php
/**
 * Template part for displaying page content in page.php
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package Octavia_Zydel
 */

global $post;
$page_meta = get_post_meta($post->ID);
$headerbg =  ($page_meta['header_color'][0] ? $page_meta['header_color'][0] : $page_meta['header_gradient'][0]);
?>

<article id="post-<?php the_ID(); ?>" <?php post_class('disciplines'); ?>>
	<header class="entry-header split__header">
		<div class="section__pattern" style="background: <?php echo $headerbg; ?>">
			<h2>Our passion isn't in talent acquisition; it's just something we excel in.<br />
No, our genuine fervour lies in our shared narrative through the disciplines of...</h2>
		</div>
		<div class="section__center">
			<ul class="lozenge__nav">
			<?php

			$args = array(
				'post_parent' => $post->ID,
				'post_type' => 'page',
				'numberposts' => '-1',
				'post_status' => 'publish'
			);
			$children = get_children($args);



			foreach ($children as $i => $child) {
				$meta = get_post_meta($child->ID);
				$children[$i]->meta = $meta;

				echo '<li class="lozenge__nav__item" style="background:'.$meta['page_color'][0].'"><a href="#'.$child->post_name.'" style="color:'.$meta['page_color'][0].'">'.$child->post_title.'</a></li>';

			}
			?>
		</ul>
		</div>
		<div class="section__solid">
			<h3>...explore...</h3>
		</div>
	</header><!-- .entry-header -->

	<?php foreach ($children as $child) { ?>

		<header class="discipline-header split__header" id="<?php echo $child->post_name; ?>">
			<div class="section__pattern" style="background-image: url(<?php echo wp_get_attachment_image_url($child->meta['page_pattern'][0], 'full'); ?>)">
				<img class="discipline__logo" src="<?php echo wp_get_attachment_image_url($child->meta['page_logo'][0], 'full'); ?>" alt="<?php echo $child->post_title; ?>" ?>
			</div>
			<div class="section__center">
				<a class="explore__link" href="<?php echo the_permalink($child->ID); ?>">Explore</a>
				<div class="thumbprint__logo__box" style="color: <?php echo $child->meta['page_color'][0]; ?>">
					<a href="<?php echo the_permalink($child->ID); ?>">
						<img src="<?php echo wp_get_attachment_image_url($child->meta['footer_thumbprint'][0], 'full'); ?>" alt="<?php echo $child->post_title; ?>" ?>
						<?php echo $child->post_title; ?>
					</a>
				</div>
				<div class="accent__color__box" style="background: <?php echo $child->meta['page_color'][0]; ?>"></div>
			</div>
			<div class="section__solid" style="background: <?php echo ($child->meta['header_color'][0] ? $child->meta['header_color'][0] : $child->meta['header_gradient'][0]); ?>">
			</div>
		</header><!-- .entry-header -->

	<?php } ?>
</article><!-- #post-<?php the_ID(); ?> -->
