/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "../../../../wordpress/wp-content/plugins/sb-field-block/src/sb-field-block/display_meta.js":
/*!**************************************************************************************************!*\
  !*** ../../../../wordpress/wp-content/plugins/sb-field-block/src/sb-field-block/display_meta.js ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DisplayMetaControl: () => (/* binding */ DisplayMetaControl)
/* harmony export */ });
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_server_side_render__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/server-side-render */ "@wordpress/server-side-render");
/* harmony import */ var _wordpress_server_side_render__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_server_side_render__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);



function getFieldDescription(postType, fieldName) {
  var field = getField(postType, fieldName);
  var description = field ? field['#title'] : fieldName;
  return description;
}
function getFieldType(postType, fieldName) {
  var field = getField(postType, fieldName);
  var fieldType = field ? field['#field_type'] : undefined;
  return fieldType;
}
function getPostFields(type) {
  const content = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.useSelect)(select => {
    return select('oiksb/fields').getFields();
  }, []);
  console.log("getPostFields");
  console.log(content);
  var postFields = content.find(({
    postType
  }) => postType === type);
  console.log(postFields);
  console.log("GPF after");
  return postFields;
}
function getField(postType, fieldName) {
  var postFields = getPostFields(postType);
  if (!postFields) {
    return null;
  }
  var field = postFields.fields.find(({
    name
  }) => name === fieldName);
  console.log(field);
  return field;
}
function needsRendering(fieldType) {
  console.log(fieldType);
  var fieldTypeNeedsRendering = {
    'text': false,
    'number': false
  };
  var fieldNeedsRendering = fieldTypeNeedsRendering.hasOwnProperty(fieldType) ? fieldTypeNeedsRendering.fieldType : true;
  return fieldNeedsRendering;
}
const DisplayMetaControl = props => {
  var postType = props.postType;
  var fieldName = props.fieldName;
  var fieldValue = props.fieldValue;
  var description = getFieldDescription(postType, fieldName);
  var fieldType = getFieldType(postType, fieldName);
  var separator = ": ";
  if (fieldValue === 'Please set Field name' || needsRendering(fieldType)) {
    // Use the postID passed in context to allow for use of the block in query loops.
    // Note: We don't need the postType field, but it might come in handy for debugging.
    // or for deciding if the field needs to be server side rendered.
    let urlQueryArgs = {
      "post_id": props.context.postId
    };
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)((_wordpress_server_side_render__WEBPACK_IMPORTED_MODULE_1___default()), {
      block: "oiksb/sb-field-block",
      attributes: props.attributes,
      urlQueryArgs: urlQueryArgs
    });
  } else {
    if (props.attributes.showLabel) {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
        className: "bw_metadata " + fieldName,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
          className: "label " + fieldName,
          children: description
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
          className: "sep",
          children: separator
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
          className: "value",
          children: fieldValue
        })]
      });
    } else {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
        className: "bw_metadata " + fieldName,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
          className: "value",
          children: fieldValue
        })
      });
    }
  }
};

/***/ }),

/***/ "../../../../wordpress/wp-content/plugins/sb-field-block/src/sb-field-block/edit.js":
/*!******************************************************************************************!*\
  !*** ../../../../wordpress/wp-content/plugins/sb-field-block/src/sb-field-block/edit.js ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Edit)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/core-data */ "@wordpress/core-data");
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./field */ "../../../../wordpress/wp-content/plugins/sb-field-block/src/sb-field-block/field.js");
/* harmony import */ var _post_type__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./post_type */ "../../../../wordpress/wp-content/plugins/sb-field-block/src/sb-field-block/post_type.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./store */ "../../../../wordpress/wp-content/plugins/sb-field-block/src/sb-field-block/store.js");
/* harmony import */ var _display_meta__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./display_meta */ "../../../../wordpress/wp-content/plugins/sb-field-block/src/sb-field-block/display_meta.js");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./editor.scss */ "../../../../wordpress/wp-content/plugins/sb-field-block/src/sb-field-block/editor.scss");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__);
/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */


/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
 */




//import { apiFetch } from '@wordpress/data-controls';


///import { Fields } from './fields';





/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */


/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */

function Edit({
  setAttributes,
  attributes,
  context
}) {
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps)();
  var postType = context.postType;
  /*
  postType = useSelect(
  	(select) => select('core/editor').getCurrentPostType(),
  	[]
  );
  */

  if (attributes.postType === undefined) {
    //postType = attributes.postType;
    onChangePostType(context.postType);
  } else {
    // We've already found a value using select.
  }

  // See https://developer.wordpress.org/block-editor/reference-guides/packages/packages-core-data/#useentityprop
  // This retrieves the post metadata for the current post.
  // The post type needs to support `custom-fields`
  var [meta, setMeta] = (0,_wordpress_core_data__WEBPACK_IMPORTED_MODULE_4__.useEntityProp)('postType', context.postType, 'meta');
  console.log("Meta before");
  console.log(meta);
  console.log("MA");
  const onChangeFieldName = value => {
    //attributes = getAttributes( value );
    setAttributes({
      fieldName: value
    });
  };

  //if ("" != attributes.fieldName) {
  const metaFieldValue = meta && "" != attributes.fieldName ? meta[attributes.fieldName] : 'Please set Field name';
  //
  function updateMetaValue(newValue) {
    setMeta({
      ...meta,
      [attributes.fieldName]: newValue
    });
  }
  function onChangePostType(newValue) {
    setAttributes({
      postType: newValue
    });
    setAttributes({
      fieldName: undefined
    });
  }
  const onChangeShowLabel = value => {
    setAttributes({
      showLabel: !attributes.showLabel
    });
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InspectorControls, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_post_type__WEBPACK_IMPORTED_MODULE_7__.PostTypeSelect, {
            value: attributes.postType,
            onChange: onChangePostType
          })
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_field__WEBPACK_IMPORTED_MODULE_6__.FieldSelect, {
            value: attributes.fieldName,
            onChange: onChangeFieldName,
            postType: attributes.postType
          })
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Show label', 'sb-field-block'),
            checked: !!attributes.showLabel,
            onChange: onChangeShowLabel
          })
        })
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("div", {
      ...blockProps,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_display_meta__WEBPACK_IMPORTED_MODULE_9__.DisplayMetaControl, {
        postType: attributes.postType,
        fieldName: attributes.fieldName,
        fieldValue: metaFieldValue,
        attributes: attributes,
        context: context
      })
    })]
  });
}

/***/ }),

/***/ "../../../../wordpress/wp-content/plugins/sb-field-block/src/sb-field-block/field.js":
/*!*******************************************************************************************!*\
  !*** ../../../../wordpress/wp-content/plugins/sb-field-block/src/sb-field-block/field.js ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FieldSelect: () => (/* binding */ FieldSelect)
/* harmony export */ });
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);
/**
 * Implements the Field selection list
 *
 * See fields.js for the first version that used an old method
 *
 * @copyright (C) Copyright Bobbing Wide 2021
 * @author Herb Miller @bobbingwide
 */




/**
 * Returns the fields array for the selected post type.
 *
 * @param fields
 * @param postType
 * @returns {*}
 */

function getPostTypeFields(fields, postType) {
  console.log(fields);
  if (0 === fields.length) {
    return [];
  }
  var postTypeFields = fields.filter(function (field) {
    return field.postType == postType;
  });
  console.log(postTypeFields);
  if (postTypeFields.length) {
    var postTypeFieldFirst = postTypeFields[0];
    return postTypeFieldFirst.fields;
  }
  return [];
}
function fieldOptions(fields, postType) {
  //if ( fields ) {
  var postTypeFields = getPostTypeFields(fields, postType);
  console.log(postTypeFields);
  var options = postTypeFields ? postTypeFields.map(field => fieldOption(field)) : [];
  //}
  return options;
}

/**
 * Map the field to a select list option
 *
 * @param field
 * @returns {{label: *, value: *}}
 */
function fieldOption(field) {
  return {
    value: field.name,
    label: field['#title']
  };
}
function defaultField(options) {
  if (options.length) {
    return options[0].value;
  }
  return null;
}
const FieldSelect = props => {
  const content = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.useSelect)(select => {
    return select('oiksb/fields').getFields(props.type);
  }, [props.type]);
  console.log("FieldSelect");
  console.log(content);
  console.log(props);
  console.log("FS after");
  var options = fieldOptions(content, props.postType);
  if (props.value === undefined) {
    props.onChange(defaultField(options));
  }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SelectControl, {
    label: "Field",
    value: props.value,
    options: options,
    onChange: props.onChange
  });
};

/***/ }),

/***/ "../../../../wordpress/wp-content/plugins/sb-field-block/src/sb-field-block/index.js":
/*!*******************************************************************************************!*\
  !*** ../../../../wordpress/wp-content/plugins/sb-field-block/src/sb-field-block/index.js ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ "../../../../wordpress/wp-content/plugins/sb-field-block/src/sb-field-block/style.scss");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "../../../../wordpress/wp-content/plugins/sb-field-block/src/sb-field-block/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./save */ "../../../../wordpress/wp-content/plugins/sb-field-block/src/sb-field-block/save.js");
/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/#registering-a-block
 */


/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * All files containing `style` keyword are bundled together. The code used
 * gets applied both to the front of your site and to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */


/**
 * Internal dependencies
 */




/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/#registering-a-block
 */
(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)('oiksb/sb-field-block', {
  /**
   * @see ./edit.js
   */
  edit: _edit__WEBPACK_IMPORTED_MODULE_2__["default"],
  /**
   * @see ./save.js
   */
  save: _save__WEBPACK_IMPORTED_MODULE_3__["default"]
});

/***/ }),

/***/ "../../../../wordpress/wp-content/plugins/sb-field-block/src/sb-field-block/post_type.js":
/*!***********************************************************************************************!*\
  !*** ../../../../wordpress/wp-content/plugins/sb-field-block/src/sb-field-block/post_type.js ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PostTypeSelect: () => (/* binding */ PostTypeSelect)
/* harmony export */ });
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);
/**
 * Implements the PostType selection list
 *
 * Similar to field.js with code copied from oik-content/post_type.js ( oik-blocks )
 *
 * @copyright (C) Copyright Bobbing Wide 2021, 2024
 * @author Herb Miller @bobbingwide
 */




/**
	 * Map the postType to a select list option
	 *
	 * @param postType
	 * @returns {{label: *, value: *}}
	 */

function postTypeOption(postType) {
  return {
    value: postType.postType,
    label: postType.label
  };
}
const PostTypeSelect = props => {
  /*
  const postTypes = useSelect((select) => {
  	return select('core').getPostTypes({per_page: -1});
  }, []);
  	 */

  const postTypes = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.useSelect)(select => {
    return select('oiksb/fields').getFields();
  }, []);
  console.log("PostTypeSelect");
  console.log(postTypes);
  console.log(props);
  console.log("PT after");
  if (postTypes && postTypes.length) {
    var options = postTypes.map(postType => postTypeOption(postType));
  } else {
    var options = [{
      value: '',
      label: 'Wait for it...'
    }];
  }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SelectControl, {
    label: "Post Type",
    value: props.value,
    options: options,
    onChange: props.onChange
  });
};

/***/ }),

/***/ "../../../../wordpress/wp-content/plugins/sb-field-block/src/sb-field-block/save.js":
/*!******************************************************************************************!*\
  !*** ../../../../wordpress/wp-content/plugins/sb-field-block/src/sb-field-block/save.js ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ save)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */


/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
 */


/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#save
 *
 * @return {WPElement} Element to render.
 */
function save() {
  // No information saved to the block
  // Data is saved to post meta via the hook
  return null;
}

/***/ }),

/***/ "../../../../wordpress/wp-content/plugins/sb-field-block/src/sb-field-block/store.js":
/*!*******************************************************************************************!*\
  !*** ../../../../wordpress/wp-content/plugins/sb-field-block/src/sb-field-block/store.js ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/api-fetch */ "@wordpress/api-fetch");
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__);
/*
Code copied from https://wholesomecode.ltd/blog/wordpress-gutenberg-rest-api/
- option changed to fields
- setOption changed to setFields
- getOption changed to getFields
- path in getFields changed to '/oiksb/v1/fields'
- console.logs added while attempting to follow the processing.

It didn't work when the I mixed Fields with fields
 */




/**
 * Selectors
 */
const selectors = {
  getFields(state, postType) {
    const {
      fields
    } = state;
    return fields;
  }
};

/**
 * Resolvers
 */
const resolvers = {
  *getFields(postType) {
    const fields = yield actions.getFields('/oiksb/v1/fields');
    return actions.setFields(fields);
  }
};

/**
 * Actions
 */
const actions = {
  setFields(fields) {
    return {
      type: 'SET_FIELDS',
      fields
    };
  },
  getFields(path) {
    return {
      type: 'GET_FIELDS',
      path
    };
  }
};

/**
 * Controls
 */
const controls = {
  GET_FIELDS(action) {
    return _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0___default()({
      path: action.path
    });
  }
};

/**
 * Reducer
 *
 * @param {object} state
 * @param {string} action
 */
function reducer(state = {
  fields: []
}, action) {
  console.log('reducer');
  console.log(state);
  console.log(action);
  switch (action.type) {
    case 'SET_FIELDS':
      return {
        ...state,
        fields: action.fields
      };
  }
  return state;
}
;

/**
 * Register Store
 */
const store = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.registerStore)('oiksb/fields', {
  actions,
  controls,
  reducer,
  resolvers,
  selectors
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (store);

/***/ }),

/***/ "../../../../wordpress/wp-content/plugins/sb-field-block/src/sb-field-block/editor.scss":
/*!**********************************************************************************************!*\
  !*** ../../../../wordpress/wp-content/plugins/sb-field-block/src/sb-field-block/editor.scss ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "../../../../wordpress/wp-content/plugins/sb-field-block/src/sb-field-block/style.scss":
/*!*********************************************************************************************!*\
  !*** ../../../../wordpress/wp-content/plugins/sb-field-block/src/sb-field-block/style.scss ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "react/jsx-runtime":
/*!**********************************!*\
  !*** external "ReactJSXRuntime" ***!
  \**********************************/
/***/ ((module) => {

module.exports = window["ReactJSXRuntime"];

/***/ }),

/***/ "@wordpress/api-fetch":
/*!**********************************!*\
  !*** external ["wp","apiFetch"] ***!
  \**********************************/
/***/ ((module) => {

module.exports = window["wp"]["apiFetch"];

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ ((module) => {

module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ ((module) => {

module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ ((module) => {

module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/core-data":
/*!**********************************!*\
  !*** external ["wp","coreData"] ***!
  \**********************************/
/***/ ((module) => {

module.exports = window["wp"]["coreData"];

/***/ }),

/***/ "@wordpress/data":
/*!******************************!*\
  !*** external ["wp","data"] ***!
  \******************************/
/***/ ((module) => {

module.exports = window["wp"]["data"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ ((module) => {

module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ ((module) => {

module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "@wordpress/server-side-render":
/*!******************************************!*\
  !*** external ["wp","serverSideRender"] ***!
  \******************************************/
/***/ ((module) => {

module.exports = window["wp"]["serverSideRender"];

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var chunkIds = deferred[i][0];
/******/ 				var fn = deferred[i][1];
/******/ 				var priority = deferred[i][2];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"sb-field-block": 0,
/******/ 			"./style-sb-field-block": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunksb_field_block"] = self["webpackChunksb_field_block"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["./style-sb-field-block"], () => (__webpack_require__("../../../../wordpress/wp-content/plugins/sb-field-block/src/sb-field-block/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=sb-field-block.js.map