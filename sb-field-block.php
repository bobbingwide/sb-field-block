<?php
/**
 * Plugin Name:     Field block
 * Description:     Displays a post meta data field
 * Version:         0.0.0
 * Author:          bobbingwide
 * License:         GPL 3.0
 * License URI:     https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:     sb-field-block
 *
 * @package         oiksb
 */

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/block-editor/tutorials/block-tutorial/writing-your-first-block-type/
 */
function oiksb_sb_field_block_block_init() {
	register_block_type_from_metadata( __DIR__ );
}
add_action( 'init', 'oiksb_sb_field_block_block_init' );
