<?php
/**
 * Plugin Name:     Field block
 * Description:     Displays a post meta data field
 * Version:         0.1.0
 * Author:          bobbingwide
 * License:         GPL 3.0
 * License URI:     https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:     sb-field-block
 *
 * @package         oiksb
 * @copyright (C) Copyright Bobbing Wide 2021, 2024
 */

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/block-editor/tutorials/block-tutorial/writing-your-first-block-type/
 */
function oiksb_sb_field_block_block_init() {
	$args = [ 'render_callback' => 'sb_field_block_dynamic_block'];
	$registered = register_block_type_from_metadata( __DIR__ . '/src/sb-field-block', $args );
	bw_trace2( $registered, "registered?", false );
}
add_action( 'init', 'oiksb_sb_field_block_block_init' );
add_action( 'rest_api_init', 'oiksb_sb_field_block_rest_api_init');

function sb_field_block_dynamic_block( $attributes, $content, $block ) {
	//bw_trace2();
	//bw_backtrace();
	require_once 'libs/class-sb-field-block.php';
	$fieldBlock = new SB_Field_Block( $attributes );
	//$fieldBlock->setAttributes( $attributes );
	$html = $fieldBlock->render();
	if ( $html ) {
		$html=oik_server_side_wrapper( $attributes, $html );
	}
	return $html;
}

function sb_is_rest() {
	$is_rest = defined( 'REST_REQUEST' ) && REST_REQUEST;
	return $is_rest;
}

function oiksb_sb_field_block_rest_api_init( ) {

	require_once 'libs/class-sb-field-block-rest-api.php';
	$fieldBlockRestApi = new SB_Field_Block_Rest_Api();
	$fieldBlockRestApi->register_routes();
}
