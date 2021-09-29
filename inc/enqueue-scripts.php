<?php
/**
 * Enqueue scripts and styles.
 */

function octaviazydel_scripts() {
	wp_enqueue_style( 'octaviazydel-style', get_stylesheet_uri(), array(), _S_VERSION );
	wp_style_add_data( 'octaviazydel-style', 'rtl', 'replace' );

	wp_enqueue_script( 'octaviazydel-navigation', get_template_directory_uri() . '/js/navigation.js', array(), filemtime(get_stylesheet_directory() .'/js/navigation.js'), true );
  wp_enqueue_script( 'octaviazydel-app', get_template_directory_uri() . '/js/app.js', array(), filemtime(get_stylesheet_directory() .'/js/app.js'), true );


	if ( is_singular() && comments_open() && get_option( 'thread_comments' ) ) {
		wp_enqueue_script( 'comment-reply' );
	}
}
add_action( 'wp_enqueue_scripts', 'octaviazydel_scripts' );

function octaviazydel_scripts_admin() {

}

add_action( 'admin_enqueue_scripts', 'octaviazydel_scripts_admin');

function octaviazydel_blockeditor_enqueue() {
   wp_enqueue_script('octaviazydel-blocks', get_stylesheet_directory_uri() . '/blocks/build/index.js', array('wp-blocks'));
   wp_enqueue_script('octaviazydel-page-options', get_stylesheet_directory_uri() . '/admin/build/index.js', array(
 			'wp-blocks',
 			'wp-i18n',
 			'wp-element',
 			'wp-editor',
 			'wp-plugins',
 			'wp-edit-post',
 			'wp-data',
 		));
  wp_enqueue_style( 'octaviazydel-blocks-style', get_stylesheet_directory_uri() . '/blocks/build/index.css' );

}
add_action( 'enqueue_block_editor_assets', 'octaviazydel_blockeditor_enqueue' );


 ?>
