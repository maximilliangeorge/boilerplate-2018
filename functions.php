<?php

// Disable Gutenberg
add_filter('use_block_editor_for_post', '__return_false');

// Assets

function load_assets() {

	wp_deregister_script('jquery');

	wp_register_script('vendor.js', get_stylesheet_directory_uri() . '/build/js/vendor.js?' . uniqid());
	wp_register_script('script.js', get_stylesheet_directory_uri() . '/build/js/script.js?' . uniqid(), array('vendor.js'));
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

// Hide unnecessary admin items

function remove_menus() {
  if (is_admin()) return;
  // remove_menu_page( 'index.php' );                  //Dashboard
  // remove_menu_page( 'jetpack' );                    //Jetpack* 
  // remove_menu_page( 'edit.php' );                   //Posts
  // remove_menu_page( 'upload.php' );                 //Media
  // remove_menu_page( 'edit.php?post_type=page' );    //Pages
  // remove_menu_page( 'edit-comments.php' );          //Comments
  // remove_menu_page( 'themes.php' );                 //Appearance
  // remove_menu_page( 'plugins.php' );                //Plugins
  // remove_menu_page( 'users.php' );                  //Users
  // remove_menu_page( 'tools.php' );                  //Tools
  // remove_menu_page( 'options-general.php' );        //Settings
}

add_action( 'admin_menu', 'remove_menus' );
