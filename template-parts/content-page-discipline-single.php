<?php
/**
 * Template part for displaying page content in page.php
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package Octavia_Zydel
 */
global $post;
$meta = get_post_meta($post->ID);
?>

<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
	<header class="discipline-header split__header" id="<?php echo $post->post_name; ?>">

		<div class="section__solid" style="background: <?php echo ($meta['header_color'][0] ? $meta['header_color'][0] : $meta['header_gradient'][0]); ?>">
		</div>
		<div class="section__center">
			<h1><?php echo $post->post_title; ?></h1>
			<div class="thumbprint__logo__box" style="color: <?php echo $meta['page_color'][0]; ?>">
				<span>
					<img src="<?php echo wp_get_attachment_image_url($meta['footer_thumbprint'][0], 'full'); ?>" alt="<?php echo $post->post_title; ?>" ?>
					<?php echo $post->post_title; ?>
				</span>
			</div>
			<div class="accent__color__box" style="background: <?php echo $meta['page_color'][0]; ?>"></div>
		</div>

	</header><!-- .entry-header -->

	<div class="entry-content" style="background-image: url(<?php echo wp_get_attachment_image_url($meta['page_pattern'][0], 'full'); ?>)">
		<div class="inner__content">
			<?php
			the_content(); ?>
		</div>
	</div><!-- .entry-content -->
	<?php
	$nextid = get_next_sibling_page_id();
	echo $post->ID.' '.$nextid;
	$next = get_post($nextid);
	$nmeta = get_post_meta($next->ID);
	?>
	<footer style="background-image: url(<?php echo wp_get_attachment_image_url($nmeta['page_pattern'][0], 'full'); ?>), <?php echo ($nmeta['header_color'][0] ? $nmeta['header_color'][0] : $nmeta['header_gradient'][0]); ?>">
		<div class="section__center">
			<div class="accent__color__box" style="background: <?php echo $nmeta['page_color'][0]; ?>"></div>
			<a class="explore__link" href="<?php echo the_permalink($next->ID); ?>">Explore</a>
			<div class="thumbprint__logo__box" style="color: <?php echo $nmeta['page_color'][0]; ?>">
				<span>
					<img src="<?php echo wp_get_attachment_image_url($nmeta['footer_thumbprint'][0], 'full'); ?>" alt="<?php echo $next->post_title; ?>" ?>
					<?php echo $next->post_title; ?>
				</span>
			</div>
		</div>
	</footer>
</article><!-- #post-<?php the_ID(); ?> -->
