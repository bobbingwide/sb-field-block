import {useSelect} from "@wordpress/data";

function getFieldDescription( postType, fieldName ) {
	var field = getField( postType, fieldName);
	var description = field ? field['#title'] : fieldName;
	return description;
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

export const DisplayMetaControl = ( props ) => {
	var postType = props.postType;
	var fieldName = props.fieldName;
	var fieldValue = props.fieldValue;
	var description = getFieldDescription( postType, fieldName );
	return (
		<div className={ "bw_metadata " + fieldName } >
			<span className={"label " + fieldName} >
				{description}
			</span>
			<span className="sep">:
			</span>
			<span className="value">{fieldValue}
			</span>
		</div>
	);
}
