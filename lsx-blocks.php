<?php
/**
 * Plugin Name: LSX Blocks
 * Plugin URI: https://lsx.lsdev.biz/blocks/
 * Description: The LSX Blocks plugin gives you a collection of Guteberg blocks that you can use and customize. All the blocks are built to work with our powerful LSX theme.
 * Author: lightspeed
 * Author URI: https://www.lsdev.biz/
 * Version: 1.0.4
 * License: GPLv3 or later
 * License URI: https://www.gnu.org/licenses/gpl-3.0.html
 *
 * @package LSX BLOCKS
 */

define( 'LSX_BLOCKS_VER', '1.0.4' );
define( 'LSX_BLOCKS_PATH', plugin_dir_path( __FILE__ ) );
define( 'LSX_BLOCKS_CORE', __FILE__ );
define( 'LSX_BLOCKS_URL', plugin_dir_url( __FILE__ ) );

/**
 * Exit if accessed directly
 */
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

// Load internals
require_once LSX_BLOCKS_PATH . 'classes/class-core.php';
$lsx_blocks = lsx\blocks\classes\Core::get_instance();

/** Calling Stylesheet */
function link_css_stylesheet() {
	wp_enqueue_style( 'lsx_heading_style', plugins_url( '/dist/blocks.style.build.css', __FILE__ ) );
}
add_action( 'wp_head', 'link_css_stylesheet' );
