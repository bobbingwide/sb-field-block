/**
 * Implements the PostType selection list
 *
 * Similar to field.js with code copied from oik-content/post_type.js ( oik-blocks )
 *
 * @copyright (C) Copyright Bobbing Wide 2021
 * @author Herb Miller @bobbingwide
 */


import { useSelect } from '@wordpress/data';
import { SelectControl } from '@wordpress/components';

/**
	 * Map the postType to a select list option
	 *
	 * @param postType
	 * @returns {{label: *, value: *}}
	 */
function postTypeOption( postType ) {
		return( { value: postType.slug, label: postType.name });
}


export const PostTypeSelect = ( props ) => {
	const postTypes = useSelect((select) => {
		return select('core').getPostTypes({per_page: -1});
	}, []);
	console.log("PostTypeSelect");
	console.log(postTypes);
	console.log("PT after");
	if (postTypes && postTypes.length) {
		var options = postTypes.map((postType) => postTypeOption(postType));
	} else {
		var options = [{ value: '', label: 'Wait for it...' }];
	}
	return (
		<SelectControl label="Post Type" value={props.postType}
					   options={options}
					   onChange={props.onChange}
		/>
	);
}
