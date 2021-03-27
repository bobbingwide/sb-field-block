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
	$args = [ 'render_callback' => 'sb_field_block_dynamic_block'];
	register_block_type_from_metadata( __DIR__, $args );
}
add_action( 'init', 'oiksb_sb_field_block_block_init' );

function sb_field_block_dynamic_block( $attributes ) {
	$seen_before = sb_field_block_increment( '_seen_before' );
	$html = '<div class="seen-before">';
	$html .= '<span>';
	$html .= __( 'Seen before:', 'sb-field-block' );
	$html .= '</span>';
	$html .= '<span class="seen-before-value">';
	$times = _n( '%1$s time', '%1$s times', $seen_before, "sb-field-block" );
	$html .= sprintf( $times, number_format_i18n( $seen_before ) );
	$html .= '</div>';

	return $html;
}
/**
 * Increments post meta value
 * @param string $meta_key Meta key
 * @return integer Incremented value
 */
function sb_field_block_increment( $meta_key ) {
	//bw_trace2();
	//bw_backtrace();
	$value = 0;
	$post = get_post();
	if (!$post) {
		return 0;
	}
	$value = get_post_meta($post->ID, $meta_key, true);
	if (false === $value || '' === $value) {
		$value = 0;
	}

	// only increment in the front end
	if ( !sb_is_rest() && !is_admin() ) {

		$value = $value + 1;
		update_post_meta($post->ID, $meta_key, $value);
	}
	return $value;
}

function sb_is_rest() {
	$is_rest = defined( 'REST_REQUEST' ) && REST_REQUEST;
	return $is_rest;
}






function sb_children_block_dynamic_block( $attributes ) {
	load_plugin_textdomain( 'sb-children-block', false, 'sb-children-block/languages' );
	$className = isset( $attributes['className']) ? $attributes['className'] : 'wp-block-oik-sb-children';
	$depth = isset( $attributes['depth']) ? $attributes['depth'] : 0;
	$post = get_post();
	$args = [ 'child_of' => $post->ID, 'echo' => false, 'title_li' => null, 'depth' => $depth, 'post_type' => $post->post_type ];
	$html = '<ul class="'. $className . '">';
	$html .= wp_list_pages( $args );
	$html .= '</ul>';
	return $html;
}
