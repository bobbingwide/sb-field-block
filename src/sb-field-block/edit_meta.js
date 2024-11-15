import { TextControl } from '@wordpress/components';
import { useEntityProp } from '@wordpress/core-data';




export const EditMetaControl = ( props ) => {
		var postType = props.postType;
		var fieldName = props.fieldName;
		const [ meta, setMeta ] = useEntityProp( 'postType', postType, 'meta' );
		console.log( "Meta before");
		console.log(meta);
		console.log( "MA");
		const metaFieldValue = meta[ fieldName ];
		function updateMetaValue( newValue ) {
			setMeta( { ...meta, fieldName: newValue } );
		}
		return (
				<TextControl
					label="Meta Block Field"
					value={ metaFieldValue }
					onChange={ updateMetaValue }
				/>
		);
}
