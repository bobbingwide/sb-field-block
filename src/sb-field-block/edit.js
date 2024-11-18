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
import { TextControl, PanelBody, PanelRow, ToggleControl } from '@wordpress/components';
import { useSelect } from '@wordpress/data';
import { useEntityProp } from '@wordpress/core-data';
//import { apiFetch } from '@wordpress/data-controls';
import { Fragment } from '@wordpress/element';

///import { Fields } from './fields';
import { FieldSelect } from './field';
import { PostTypeSelect } from './post_type';
import { Store } from './store';
import { DisplayMetaControl} from './display_meta';

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
export default function Edit( { setAttributes, attributes, context } ) {
	const blockProps = useBlockProps();

	var postType = context.postType;
	/*
	postType = useSelect(
		(select) => select('core/editor').getCurrentPostType(),
		[]
	);
	*/

	if ( attributes.postType === undefined ) {
		//postType = attributes.postType;
		onChangePostType( context.postType );
	} else {
	  // We've already found a value using select.
	}

	// See https://developer.wordpress.org/block-editor/reference-guides/packages/packages-core-data/#useentityprop
	// This retrieves the post metadata for the current post.
	// The post type needs to support `custom-fields`
	var [meta, setMeta] = useEntityProp(
		'postType',
		context.postType,
		'meta'
	);
	console.log( "Meta before");
	console.log(meta);
	console.log( "MA");
	const onChangeFieldName = (value) => {
		//attributes = getAttributes( value );
		setAttributes({fieldName: value});
	}

	//if ("" != attributes.fieldName) {
		const metaFieldValue = ( meta && "" != attributes.fieldName) ? meta[attributes.fieldName] : 'Please set Field name';
	//
	function updateMetaValue( newValue ) {
		setMeta( { ...meta, [attributes.fieldName]: newValue } );
	}

	function onChangePostType( newValue ) {
		setAttributes({postType: newValue});
		setAttributes( {fieldName: undefined });
	}

	const onChangeShowLabel = (value) => {
		setAttributes( { showLabel: !attributes.showLabel });
	}

	return (
		<Fragment>

			<InspectorControls>
				<PanelBody>
					<PanelRow>
						<PostTypeSelect value={attributes.postType} onChange={onChangePostType} />
					</PanelRow>
				</PanelBody>
				<PanelBody>
					<PanelRow>
					<FieldSelect value={attributes.fieldName} onChange={onChangeFieldName} postType={attributes.postType} />
					</PanelRow>
				</PanelBody>
				<PanelBody>
					<PanelRow>
						<ToggleControl
							label={ __( 'Show label', 'sb-field-block' ) }
							checked={ !! attributes.showLabel }
							onChange={ onChangeShowLabel }

						/>
					</PanelRow>
				</PanelBody>
			</InspectorControls>
			<div { ...blockProps }>
				<DisplayMetaControl postType={attributes.postType} fieldName={attributes.fieldName} fieldValue={metaFieldValue} attributes={attributes} context={context}/>

			</div>
		</Fragment>

		);


}
