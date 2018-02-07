<?php

// Assets

function load_assets() {

	wp_deregister_script('jquery');

	wp_register_script('vendor.js', get_stylesheet_directory_uri() . '/build/js/vendor.js?' . uniqid());
	wp_register_script('script.js', get_stylesheet_directory_uri() . '/build/js/script.js?' . uniqid(), array('vendor'));
	wp_register_style('main.css', get_stylesheet_directory_uri() . '/build/css/main.css?' . uniqid(), false);

	wp_enqueue_script('vendor.js');
	wp_enqueue_script('script.js');
	wp_enqueue_style('main.css');

	// Localize script

	// wp_localize_script('script.js', 'wp', array(
	// 	'title'		=> get_the_title()
	// ));

}

add_action('wp_enqueue_scripts', 'load_assets');


// Setup REST

function setup_rest_routes() {

	register_rest_route( 'custom', '/menu', array(
		'methods' => 'GET',
		'callback' => 'my_callback',
	));

}

add_action('rest_api_init', 'setup_rest_routes');
