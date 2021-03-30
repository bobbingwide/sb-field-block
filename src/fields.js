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

		/** Each field consists of a slug and name.
		 * Where slug is the post meta key
		 * and name is the description
		 * @type {{fields: []}}
		 */
		this.state = {
			fields: [],

		};
		//console.log( this.state);
		//console.log( this );
	}

	componentDidMount() {
		const unsubscribe = subscribe( () => {
			wp.apiFetch( { path: '/wp/v2/posts', 'method': 'OPTIONS'} )
					.then( data => {
							console.log( 'response:', data );
							//var routes = data['routes'];
							//var post_route = data['routes']['/wp/v2/posts'];
							var properties = data['endpoints'][1]['args']['meta']['properties'];
							console.log( properties );
							var propertyNames = Object.getOwnPropertyNames( properties);
							console.log( propertyNames );
							var fields = this.getFieldsMapping( propertyNames, properties );
							this.setState( {fields}  );


						}
					);
		});
	}

	propertyMap( property, properties ) {
		return { 'slug': property, 'name': properties[property]['description']};
	}

	/**
	 * Maps field names to property names
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
