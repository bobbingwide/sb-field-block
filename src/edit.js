/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
 */
import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { TextControl, PanelBody, PanelRow } from '@wordpress/components';
import { useSelect } from '@wordpress/data';
import { useEntityProp } from '@wordpress/core-data';
//import { apiFetch } from '@wordpress/data-controls';
import { Fragment } from '@wordpress/element';

import { Fields } from './fields';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
export default function Edit( { setAttributes, attributes } ) {
	const blockProps = useBlockProps();
	const postType = useSelect(
		(select) => select('core/editor').getCurrentPostType(),
		[]
	);
	const [meta, setMeta] = useEntityProp(
		'postType',
		postType,
		'meta'
	);
	console.log(attributes);

	const onChangeFieldName = (value) => {
		//attributes = getAttributes( value );
		setAttributes({fieldName: value});
	}

	//if ("" != attributes.fieldName) {
		const metaFieldValue = ( "" != attributes.fieldName) ? meta[attributes.fieldName] : 'Please set Field name';
	//
	function updateMetaValue( newValue ) {
		setMeta( { ...meta, [attributes.fieldName]: newValue } );
	}
	//console.log( attributes.seenBefore);


	//var times = ( '1' === attributes.seenBefore ) ? 'time' : 'times';

	// const stuff = getMetaFields();
	//const stuffAlt = getMetaFieldsAlt();
// 	var fieldList = Fields.fieldList();

	return (
		<Fragment>

			<InspectorControls>
				<PanelBody>
					<PanelRow>
					<Fields value={attributes.fieldName} onChange={onChangeFieldName} />
					</PanelRow>
				</PanelBody>
			</InspectorControls>
			<div { ...blockProps }>
				<TextControl
					label="Field Name: {attributes.fieldName}"
					value={ metaFieldValue }
					onChange={ updateMetaValue }
				/>
				<p>Field name: {attributes.fieldName}</p>

			</div>
		</Fragment>

		);


}
