<?php
/**
 * Octavia Zydel Theme Customizer
 *
 * @package Octavia_Zydel
 */

/**
 * Add postMessage support for site title and description for the Theme Customizer.
 *
 * @param WP_Customize_Manager $wp_customize Theme Customizer object.
 */
function octaviazydel_customize_register( $wp_customize ) {
	$wp_customize->get_setting( 'blogname' )->transport         = 'postMessage';
	$wp_customize->get_setting( 'blogdescription' )->transport  = 'postMessage';
	$wp_customize->get_setting( 'header_textcolor' )->transport = 'postMessage';

	if ( isset( $wp_customize->selective_refresh ) ) {
		$wp_customize->selective_refresh->add_partial(
			'blogname',
			array(
				'selector'        => '.site-title a',
				'render_callback' => 'octaviazydel_customize_partial_blogname',
			)
		);
		$wp_customize->selective_refresh->add_partial(
			'blogdescription',
			array(
				'selector'        => '.site-description',
				'render_callback' => 'octaviazydel_customize_partial_blogdescription',
			)
		);
	}
}
add_action( 'customize_register', 'octaviazydel_customize_register' );

/** Footer Options */
function octaviazydel_site_customize_register( $wp_customize ) {



	$wp_customize->add_section( 'octaviazydel_social_media_links',
	    array(
	        'title'         => __( 'Social Media Links', 'octaviazydel' ),
	        'priority'      => 40,
	        //'panel'         => 'octaviazydel_theme_options'
	    )
	);

	global $octaviazydel_social;

	foreach ($octaviazydel_social as $social) {

		$wp_customize->add_setting( "octaviazydel_".$social['slug']."_link",
	    array(
	        'sanitize_callback' => 'sanitize_text_field',
	    )
		);
		$wp_customize->add_control( "octaviazydel_".$social['slug']."_link",
	    array(
	        'type'        => 'text',
	        'priority'    => $social['priority'],
	        'section'     => 'octaviazydel_social_media_links',
	        'label'       => $social['title'],
	        'description' => $social['title']." page URL",
	    )
		);
	}

}

add_action( 'customize_register', 'octaviazydel_site_customize_register' );

/**
 * Render the site title for the selective refresh partial.
 *
 * @return void
 */
function octaviazydel_customize_partial_blogname() {
	bloginfo( 'name' );
}

/**
 * Render the site tagline for the selective refresh partial.
 *
 * @return void
 */
function octaviazydel_customize_partial_blogdescription() {
	bloginfo( 'description' );
}

/**
 * Binds JS handlers to make Theme Customizer preview reload changes asynchronously.
 */
function octaviazydel_customize_preview_js() {
	wp_enqueue_script( 'octaviazydel-customizer', get_template_directory_uri() . '/js/customizer.js', array( 'customize-preview' ), _S_VERSION, true );
}
add_action( 'customize_preview_init', 'octaviazydel_customize_preview_js' );

function octaviazydel_remove_options( $wp_customize ) {
 $wp_customize->remove_control("header_image");
 $wp_customize->remove_panel("widgets");
 $wp_customize->remove_section("colors");
 $wp_customize->remove_section("background_image");
 $wp_customize->remove_section("static_front_page");
}

add_action( "customize_register", "octaviazydel_remove_options" );
