<?php

/**
 * Class SB_Field_Block
 * @copyright (C) Copyright Bobbing Wide 2021, 2024
 * @package sb-field-block
 */

class SB_Field_Block {

	private $post_type = null;
	private $field_name = null;
	private $showlabel = null;

	private $attributes = [];

	function __construct( $attributes ) {
		$this->setAttributes( $attributes );
	}

	function setAttributes( $attributes ) {
		$this->attributes = $attributes;
		$this->post_type = isset( $attributes[ 'postType' ] ) ?  $attributes['postType'] : null;
		$this->field_name = isset( $attributes[ 'fieldName' ] ) ? $attributes['fieldName'] : null;
		$this->showlabel = isset(  $attributes[ 'showLabel' ] ) ?  $attributes['showLabel'] : null;
	}

	/**
	 * Increments post meta value
	 * @param string $meta_key Meta key
	 * @return integer Incremented value
	 */
	function getPostMeta( ) {
		$value = null;
		$post = get_post();
		if (!$post) {
			return 'No post';
		}
		$mixed = get_post_meta($post->ID, $this->field_name, true);
		print_r( $mixed);
		if ( is_array( $mixed ) ) {
			$value = implode( ',', $mixed );
		} else {
			$value = $mixed;
		}
		return $value;
	}

	/**
	 * Is this an oik field?
	 */
	function is_oik_field() {
		$oik_field = false;
		if ( did_action( 'oik_fields_loaded')) {
			$oik_field = true;
			if ( function_exists( 'bw_get_field_description')) {
				$oik_field = ( null !== bw_get_field_description( $this->field_name ) );
			} else {
				echo 'bw_get_field_description not available';
			}
		}
		return $oik_field;
	}

	/**
	 * Renders an oik field using bw_field(s) logic.
	 *
	 * The field can be post metadata or a virtual field.
	 *
	 * @TODO Try with taxonomies as well?
	 *
	 * @return string
	 */
	function render_oik_field() {
		if ( function_exists( "oik_is_block_renderer") ) {
			oik_is_block_renderer( true );
		}
		if ( $this->showlabel ) {
			oik_require( 'shortcodes/oik-fields.php', 'oik-fields');
			$atts = ['fields' => $this->field_name, 'id' => '.'];
			$html=bw_metadata( $atts );
		} else {

			oik_require( 'shortcodes/oik-field.php', 'oik-fields');
			$atts = ['fields' => $this->field_name];

			$html = bw_field( $atts );
		}
		/**
		 * Cater for fields with no value that have been themed as an empty span.
		 */
		if ( $html === '<span class="value"></span>') {
			$html = null;
		}
		return $html;
	}

	/**
	 * Renders the field.
	 *
	 * @return string
	 */
	function render() {
		if ( $this->field_name ) {
			if ($this->is_oik_field()) {
				$html = $this->render_oik_field();
			} else {
				$html = '<div>'; // or span;
				$html .= $this->getPostMeta();
				$html .= '</div>';
			}
		} else {
			$html = '<!-- Field block. No field name -->';
		}
		return $html;
	}

}
