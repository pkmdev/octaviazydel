<?php
/**
 * Functions which enhance the theme by hooking into WordPress
 *
 * @package Octavia_Zydel
 */

/**
 * Adds custom classes to the array of body classes.
 *
 * @param array $classes Classes for the body element.
 * @return array
 */
function octaviazydel_body_classes( $classes ) {
	// Adds a class of hfeed to non-singular pages.
	if ( ! is_singular() ) {
		$classes[] = 'hfeed';
	}

	// Adds a class of no-sidebar when there is no sidebar present.
	if ( ! is_active_sidebar( 'sidebar-1' ) ) {
		$classes[] = 'no-sidebar';
	}

	return $classes;
}
add_filter( 'body_class', 'octaviazydel_body_classes' );

/**
 * Add a pingback url auto-discovery header for single posts, pages, or attachments.
 */
function octaviazydel_pingback_header() {
	if ( is_singular() && pings_open() ) {
		printf( '<link rel="pingback" href="%s">', esc_url( get_bloginfo( 'pingback_url' ) ) );
	}
}
add_action( 'wp_head', 'octaviazydel_pingback_header' );

/**
  * Function to register social types to add to customizer
  */

function octaviazydel_register_social_media($slug, $title = false, $icon = false, $priority = 50) {
	global $octaviazydel_social;
	if (!isset($octaviazydel_social[$slug])) {
		$new_social = array();
		$new_social['slug'] = $slug;
		$new_social['title'] = $title ? $title : $slug;
		$new_social['icon'] = $icon ? $icon : 'icon-'.$slug;
		$new_social['priority'] = $priority;

		$octaviazydel_social[$slug] = $new_social;
	}
}

function octaviazydel_social_display($echo = true) {
	global $octaviazydel_social;
	$output = '<ul class="social_links">';
	foreach ($octaviazydel_social as $social) {
		$output .= '<li class="social_link"><a href="'.get_theme_mod('octaviazydel_'.$social['slug'].'_link').'" target="_blank"><i class="'.$social['icon'].'"></i></a></li>';
	}
	$output .= '</ul>';
	if ($echo) echo $output;
	return $output;
}

/**
	* Register the post meta to make it available in the page sidebar
	*/
function octaviazydel_register_page_meta() {

		register_post_meta('page', 'page_color', array(
	    'show_in_rest' => true,
	    'type' => 'string',
	    'single' => true,
	  ));
		register_post_meta('page', 'page_gradient', array(
	    'show_in_rest' => true,
	    'type' => 'string',
	    'single' => true,
	  ));
		register_post_meta('page', 'header_color', array(
	    'show_in_rest' => true,
	    'type' => 'string',
	    'single' => true,
	  ));
		register_post_meta('page', 'header_gradient', array(
	    'show_in_rest' => true,
	    'type' => 'string',
	    'single' => true,
	  ));
		register_post_meta('page', 'footer_color', array(
	    'show_in_rest' => true,
	    'type' => 'string',
	    'single' => true,
	  ));
		register_post_meta('page', 'footer_gradient', array(
	    'show_in_rest' => true,
	    'type' => 'string',
	    'single' => true,
	  ));
		register_post_meta('page', 'page_pattern', array(
	    'show_in_rest' => true,
	    'type' => 'number',
	    'single' => true,
	  ));
		register_post_meta('page', 'page_logo', array(
	    'show_in_rest' => true,
	    'type' => 'number',
	    'single' => true,
	  ));
		register_post_meta('page', 'footer_thumbprint', array(
	    'show_in_rest' => true,
	    'type' => 'number',
	    'single' => true,
	  ));
}
add_action( 'init', 'octaviazydel_register_page_meta' );

function get_next_sibling_page_id() {
    global $post;

    $siblings = get_pages('sort_column=menu_order&child_of='.$post->post_parent.'&parent='.$post->post_parent);

    foreach ($siblings as $key => $sibling){
        if ($post->ID == $sibling->ID){
            $current_id = $key;
        }
    }

    $next = $siblings[$current_id+1]->ID;

    if($siblings[$current_id+1]->ID == '' ){
        $next = $siblings[0]->ID;
    }

    return $next;
}
