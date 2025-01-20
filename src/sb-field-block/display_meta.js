import {useSelect} from "@wordpress/data";
import ServerSideRender from '@wordpress/server-side-render';

function getFieldDescription( postType, fieldName ) {
	var field = getField( postType, fieldName);
	var description = field ? field['#title'] : fieldName;
	return description;
}

function getFieldType( postType, fieldName ) {
	var field = getField( postType, fieldName);
	var fieldType = field ? field['#field_type'] : undefined;
	return fieldType;
}

function getPostFields( type ) {
	const content = useSelect( ( select ) => {
		return select( 'oiksb/fields' ).getFields();
	}, [] );
	console.log( "getPostFields");
	console.log( content );
	var postFields = content.find( ({ postType }) => postType === type );
	console.log( postFields );
	console.log( "GPF after");
	return postFields;
}

function getField( postType, fieldName ) {
	var postFields = getPostFields( postType );
	if ( !postFields ) {
		return null;
	}
	var field = postFields.fields.find( ({ name }) => name === fieldName );
	console.log( field );
	return field;

}

function needsRendering( fieldType ) {
	console.log( fieldType );
 var fieldTypeNeedsRendering = {
 	'text': false,
	 'number': false
 };
 var fieldNeedsRendering = fieldTypeNeedsRendering.hasOwnProperty( fieldType ) ? fieldTypeNeedsRendering.fieldType : true;


	return fieldNeedsRendering;
}

export const DisplayMetaControl = ( props ) => {
	var postType = props.postType;
	var fieldName = props.fieldName;
	var fieldValue = props.fieldValue;
	var description = getFieldDescription( postType, fieldName );
	var fieldType = getFieldType( postType, fieldName );
	var separator = ": ";

	if ( fieldValue === 'Please set Field name' || needsRendering( fieldType ) ) {
		// Use the postID passed in context to allow for use of the block in query loops.
		// Note: We don't need the postType field, but it might come in handy for debugging.
		// or for deciding if the field needs to be server side rendered.
		let urlQueryArgs = { "post_id": props.context.postId };
		return(
		<ServerSideRender block="oiksb/sb-field-block" attributes={props.attributes} urlQueryArgs={ urlQueryArgs }/>
		);
	}
	else {
		if ( props.attributes.showLabel ) {
			return(
				<div className={"bw_metadata " + fieldName}>
					<span className={"label " + fieldName}>
						{description}
					</span>
					<span className="sep">{separator}
					</span>
					<span className="value">{fieldValue}
					</span>
				</div>
			);
		} else {
			return (
				<div className={"bw_metadata " + fieldName}>
					<span className="value">{fieldValue}
					</span>
				</div>
			);
		}
	}
}
