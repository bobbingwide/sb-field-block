<?php
/**
 * Class SB_Field_Block_Rest_Api
 * @copyright (C) Copyright Bobbing Wide 2021
 * @package sb-field-block
 */


class SB_Field_Block_Rest_Api
{

	function __construct() {

	}

	/**
	 * Attempting to understand how to implement the the REST API to return information about
	 * fields and their values.
	 *
	 * https://s.b/bigram/wp-json will return all the routes
	 * https://s.b/bigram/wp-json/oiksb/v1 returns the routes for oiksb/v1
	 * https://s.b/bigram/wp-json/oiksb/v1/fields returns the fields
	 * https://s.b/bigram/wp-json/oiksb/v1/fields/ID returns the field values for the given ID ?
	 */
	function register_routes() {
		//echo "Registering routes for sb_field_block";
		$args = ['methods' => 'GET',
				'callback' => [ $this, 'get_fields'],
				'args'
				];
		register_rest_route( 'oiksb/v1',
		'/fields'
		, $args );
	}

	/**
	 * Returns all the registered fields.
	 *
	 * We need a mapping of fields by object type.
	 * Does this include virtual fields such as dimensions and googlemap?
	 *
 	 * @return WP_Error|WP_HTTP_Response|WP_REST_Response
	 */
	function get_fields() {
		$data = [];
		//$data = bw_list_fields();
		$data = $this->get_all_fields();
		//print_r( $data );

		$response = rest_ensure_response( $data );
		return $response;
	}

	/**
	 * Returns the array of REST fields by object type
	 * @return array
	 */
	function get_all_fields()
	{
		global $bw_mapping;
		//print_r( $bw_mapping );
		$all_fields = [];

		foreach ( $bw_mapping['field'] as $object_type => $field_names ) {
			$fields = [];
			foreach ( $field_names as $field_name ) {
				$field = $this->get_rest_field($object_type, $field_name);
				if ($field) {
					$fields[] = $field;
				}
			}
			$all_fields[] = [$object_type => $fields];

		}
		return $all_fields;
	}

	/**
	 * Retrieves a REST field's definition.
	 *
	 * We know the field is registered for the object type but not if it's REST enabled.
	 * If it is we return the field's definition.
	 *
	 * @param $object_type
	 * @param $field_name
	 */
	function get_rest_field( $object_type, $field_name ) 	{
		$field = null;
		if ( $this->is_rest_field($object_type, $field_name) ) {
			$field = [];
			$field[$field_name] = $this->get_field_definition($field_name);
		}
		return $field;
	}

	function is_rest_field( $object_subtype, $field_name ) {
		//echo $field_name;
		$registered = registered_meta_key_exists( 'post', $field_name, $object_subtype );
		return $registered;
	}

	function get_field_definition( $field_name ) {
		global $bw_fields;
		return $bw_fields[ $field_name ];
	}
	/**
	 * Returns the fields for a particular object type?
	 */
	function get_fields_by_object_type() {

		global $bw_mapping;
		$bw_mapping['field'][$object_type][$field_name] = $field_name;

	}

}
