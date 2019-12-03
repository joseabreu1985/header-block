<?php
namespace lsx\blocks\classes;

/**
 * @package   lsx\blocks\classes
 * @author    LightSpeed
 * @license   GPL-3.0+
 * @link
 * @copyright 2019 LightSpeed
 */

/**
 * Setup plugin class.
 *
 * @package lsx\blocks\classes
 * @author  LightSpeed
 */
class Frontend {

	/**
	 * Holds class instance
	 *
	 * @since 1.0.0
	 *
	 * @var      object
	 */
	protected static $instance = null;

	/**
	 * Initialize the plugin by setting localization, filters, and administration functions.
	 *
	 * @since 1.0.0
	 *
	 * @access private
	 */
	private function __construct() {
		//add_action( 'wp_enqueue_scripts', array( $this, 'scripts' ), 5 );
	}

	/**
	 * Return an instance of this class.
	 *
	 * @since 1.0.0
	 *
	 * @return    object \lsx\blocks\classes\Frontend();    A single instance of this class.
	 */
	public static function get_instance() {
		// If the single instance hasn't been set, set it now.
		if ( null == self::$instance ) {
			self::$instance = new self;
		}
		return self::$instance;
	}

	/**
	 * Enques the frontend scripts
	 */
	// public function scripts() {
	// 	wp_enqueue_style( 'lsx_heading_style', plugins_url( '/dist/blocks.style.build.css', __FILE__ ) );
	// }

	/**
	 * Enques the frontend scripts
	 */
	// public function scripts() {
	// 	wp_enqueue_script( 'lsx_blocks_script', LSX_BLOCKS_URL . '/dist/assets/js/frontend.js', array(), LSX_BLOCKS_VER, true );
	// }
}
