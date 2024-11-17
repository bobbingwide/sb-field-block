<?php

/**
 * Class SB_Field_Block
 * @copyright (C) Copyright Bobbing Wide 2021
 * @package sb-field-block
 */


class SB_Field_Block {

	private $post_type = null;
	private $field_name = null;
	private $showlabel = null;

	private $attributes = [];

	function __construct( $attributes ) {
		$this->setAttributes( $attributes );
		$this->maybeDisableLabel();
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
	 * Renders an oik field using bw_field(s)
	 *
	 * @return string
	 */
	function render_oik_field() {
		//oik_require_lib( 'bw_fields');
		oik_require( 'shortcodes/oik-fields.php', 'oik-fields');
		if ( function_exists( "oik_is_block_renderer") ) {
			oik_is_block_renderer( true );
		}
		$atts = ['fields' => $this->field_name];
		$html = bw_metadata( $atts );
		return $html;

	}

	/**
	 * Renders the field.
	 *
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

	/**
	 * Disables the display of the field's label.
	 *
	 * @TODO Implement in a less hacky manner.
	 *
	 * @return void
	 */
	function maybeDisableLabel() {
		if ( !$this->showlabel) {
			global $bw_fields;
			bw_trace2( $bw_fields, 'fields before');
			$bw_fields[ $this->field_name]['#args']['#label'] = false;
			bw_trace2( $bw_fields, 'fields after');
		}
	}
}
/*
$fieldName =
$html = '<div class="seen-before">';
$html .= '<span>';
$html .= __( 'Seen before:', 'sb-field-block' );
$html .= '</span>';
$html .= '<span class="seen-before-value">';
$times = _n( '%1$s time', '%1$s times', $seen_before, "sb-field-block" );
$html .= sprintf( $times, number_format_i18n( $seen_before ) );
$html .= '</div>';

*/
