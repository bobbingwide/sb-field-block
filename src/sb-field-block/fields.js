/**
 * Implements the Fields selection list
 *
 * @copyright (C) Copyright Bobbing Wide 2021
 * @author Herb Miller @bobbingwide
 */
const { select, subscribe } = wp.data;
const { Component } = wp.element;
const { SelectControl } = wp.components;

export class Fields extends Component {
	constructor() {
		super( ...arguments );

		/**
		 * @type {{fields: []}}
		 */
		this.state = {
			fields: [],
			fieldsSet: false,
			loading: false,

		};
		//console.log( this.state);
		//console.log( this );
	}

	/**
	 * This should vary depending on the active post type.
	 *
	 * @TODO No idea how this should work in the Site Editor which needs to know the post type you've picked.
	 *
	 * @returns {string}
	 */
	getPath() {
		//var postType = wp.data.select('core/editor').getCurrentPostType();
		//console.log( postType);
		//return '/wp/v2/' + postType;
		return '/oiksb/v1/fields';

	}

	componentDidMount() {
		//var fields = this.state.fields;
		console.log( 'Fields::componentDidMount' );
		if ( this.state.fieldsSet ) {
			// That's OK then?
			console.log("Fields:", fields);

		} else if ( false === this.state.loading ) {
			this.setState( { loading: true });
			const unsubscribe = subscribe(() => {
				var path = this.getPath();
				console.log( "path", path);
				wp.apiFetch({path: path, 'method': 'GET'})
					.then(data => {
							console.log('response:', data);

							//var routes = data['routes'];
							//var post_route = data['routes']['/wp/v2/posts'];
							//var properties = data['endpoints'][1]['args']['meta']['properties'];
							//console.log(properties);
							//var propertyNames = Object.getOwnPropertyNames(properties);
							//console.log(propertyNames);
							//var fields = this.getFieldsMapping(propertyNames, properties);
							//this.setState({fields});
							//console.log( this.state );
							this.setState( {fieldsSet: true, loading: false, fields: data});
							console.log( this.state );


						}
					);
			});
		}
	}

	/**
	 * Returns the mapping of Field names to descriptions.
	 *
	 * If there's no description we set it to the property.
	 * This happens for _genesis* theme fields.
	 * 	 *
	 * @param property
	 * @param properties
	 * @returns {{name: *, slug}}
	 */
	propertyMap( property, properties ) {
		var name = properties[property]['description'];
		if ( "" === name ) {
			name = property;
		}
		return { 'slug': property, 'name': name };
	}

	/**
	 * Maps field names to property names.
	 *
	 * @param propertyNames
	 * @param properties
	 * @returns {*}
	 */
	getFieldsMapping( propertyNames, properties ) {
		console.log( propertyNames);
		console.log( properties );
		// each field should be { 'slug': propertyName, 'name': properties[propertyName]['
		var fieldsMapping = propertyNames.map( (property ) => this.propertyMap( property, properties ) );


		return fieldsMapping;
	}

	fieldList() {
		var fields = this.state.fields;
		if ( fields ) {
			return(
				<ul>
					{ fields.map((  field ) => this.fieldMap( field ) )}
				</ul>
			) } else {
			return( <p>Field</p>)
		}
	}


	fieldListSelect() {
		var fields = this.state.fields;
		if ( fields ) {
			var options = fields.map(( field ) => this.fieldOption( field ) );
			return(
				<SelectControl label="Field" value={this.props.fieldName}
							   options={options}
							   onChange={ this.props.onChange}
				/>
			);
		} else {
			console.log( "Loading field list");
			return( <p>Loading field list</p>);
		}
	}

	/**
	 * Map the fields to a select list
	 * @param field
	 * @returns {*}
	 */

	fieldMap( field ) {
		console.log( field );
		return( <li>{field.slug}</li>);
	}

	/**
	 * Map the field to a select list option
	 *
	 * @param field
	 * @returns {{label: *, value: *}}
	 */
	fieldOption( field ) {
		return( { value: field.slug, label: field.name });
	}

	render() {
		return( this.fieldListSelect()
		);
	}
}
