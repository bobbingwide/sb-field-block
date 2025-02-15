/**
 * Implements the Field selection list
 *
 * See fields.js for the first version that used an old method
 *
 * @copyright (C) Copyright Bobbing Wide 2021
 * @author Herb Miller @bobbingwide
 */


import { useSelect } from '@wordpress/data';
import { SelectControl } from '@wordpress/components';

/**
 * Returns the fields array for the selected post type.
 *
 * @param fields
 * @param postType
 * @returns {*}
 */
function getPostTypeFields( fields, postType ) {
	console.log( fields );
	if ( 0 === fields.length ) {
		return [];
	}
	var postTypeFields = fields.filter( function( field) {
		return field.postType == postType;
	});
	console.log( postTypeFields );
	if ( postTypeFields.length ) {
		var postTypeFieldFirst = postTypeFields[0];
		return postTypeFieldFirst.fields;
	}
	return [];
}

function fieldOptions( fields, postType) {
	//if ( fields ) {
	var postTypeFields = getPostTypeFields( fields, postType);
	console.log( postTypeFields );
	var options = postTypeFields ? postTypeFields.map((field) => fieldOption(field)) : [];
	//}
	return options;
}

/**
 * Map the field to a select list option
 *
 * @param field
 * @returns {{label: *, value: *}}
 */
function fieldOption( field ) {
	return( { value: field.name, label: field['#title'] });
}

function defaultField( options ) {
	if ( options.length ) {
		return( options[0].value);
	}
	return null;

}





export const FieldSelect = ( props ) => {
	const content = useSelect( ( select ) => {
		return select( 'oiksb/fields' ).getFields( props.type );
	}, [ props.type ] );
	console.log( "FieldSelect");
	console.log( content );
	console.log( props );
	console.log( "FS after");
	var options = fieldOptions( content,props.postType );
	if ( props.value === undefined ) {
		props.onChange( defaultField( options ) );
	}
	return(
	<SelectControl label="Field" value={props.value}
				   options={options}
				   onChange={ props.onChange}
	/>
	);
}

