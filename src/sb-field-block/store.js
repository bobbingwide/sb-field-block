/*
Code copied from https://wholesomecode.ltd/blog/wordpress-gutenberg-rest-api/
- option changed to fields
- setOption changed to setFields
- getOption changed to getFields
- path in getFields changed to '/oiksb/v1/fields'
- console.logs added while attempting to follow the processing.

It didn't work when the I mixed Fields with fields
 */

import apiFetch from '@wordpress/api-fetch';
import { registerStore } from '@wordpress/data';

/**
 * Selectors
 */
const selectors = {
	getFields( state, postType ) {
		const { fields } = state;
		return fields;
	},
};

/**
 * Resolvers
 */
const resolvers = {
	*getFields( postType ) {
		const fields = yield actions.getFields(
			'/oiksb/v1/fields',
		);
		return actions.setFields( fields );
	},
};

/**
 * Actions
 */
const actions = {
	setFields( fields ) {
		return {
			type: 'SET_FIELDS',
			fields,
		};
	},
	getFields( path ) {
		return {
			type: 'GET_FIELDS',
			path,
		};
	},
};

/**
 * Controls
 */
const controls = {
	GET_FIELDS( action ) {
		return apiFetch( { path: action.path } );
	},
};

/**
 * Reducer
 *
 * @param {object} state
 * @param {string} action
 */
function reducer( state = { fields: [] }, action ) {
	console.log( 'reducer');
	console.log( state);
	console.log( action);
	switch ( action.type ) {
		case 'SET_FIELDS':
			return {
				...state,
				fields: action.fields,
			};
	}
	return state;
};

/**
 * Register Store
 */
const store = registerStore(
	'oiksb/fields',
	{
		actions,
		controls,
		reducer,
		resolvers,
		selectors,
	}
);

export default store;
