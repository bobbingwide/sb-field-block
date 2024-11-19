=== Field block ===
Contributors:      bobbingwide
Tags:              block
Requires at least: 6.6.0
Tested up to:      6.7.0
Stable tag:        0.1.0
Requires PHP:      8.2.0
License:           GPL 3.0
License URI:       https://www.gnu.org/licenses/gpl-2.0.html

Displays a post metadata field in a block.

== Description ==

The Field block ( oiksb/sb-field-block ) displays post meta data for your post types.
Use it replace [bw_fields] and [bw_field] shortcodes in your content or block based themes.

The field block supports all fields which have been registered to WordPress using register_post_meta().
This includes fields defined using oik-fields as virtual fields.
For a field to be rendered inside the block editor the post type must be registered to `show_in_rest` and support `custom-fields`.


== Installation ==
1. Upload the contents of the sb-field-block plugin to the `/wp-content/plugins/sb-field-block' directory
1. Activate the sb-field-block plugin through the 'Plugins' menu in WordPress

Note: sb-field-block is dependent upon the oik-fields and the oik base plugin.



== Frequently Asked Questions ==

= Where is the FAQ? =

tbc

= How do I register my custom fields? =

tbc

For examples see the latest development in the oik-events plugin.
The plugin was prototyped with the oik-plugins plugin.

= What are the dependencies? =

The block displays fields which have been registered using functionality provided by oik and oik-fields.

= What field types are supported? =

The plugin has been tested to display fields registered with the following types.

- text
- email
- URL
- virtual
- noderef
- sctext
- select
- numeric
- textarea
- date
- time

= Does it support ACF? =

No. Consider using Field block for ACF Pro or Meta Field Block

= Does it support taxonomies? =

Don't know. I've not yet tried it.


== Screenshots ==
1. sb-field-block in the block editor
2. sb-field-block on the front end
3. Field block settings

== Upgrade Notice ==
Use this plugin to replace the [bw_fields] and/or [bw_field] shortcodes in your post content or block based themes.

== Changelog ==
= 0.1.0 = 
* Changed: Remove tracing from sb_field_block_dynamic_block() #8
* Changed: Improve handling for showLabel toggle #7
* Added: Update supports, incl. several experimental options #10
* Changed: Update build #9
* Changed: Add postType label to the REST response #9
* Changed: Continue to support style and editorStyle files, but comment out all of the debug styling #3
* Changed: Obtain post type label from the oiksb/fields store #9
* Changed: Default field name to the first field for the post type #9
* Changed: Default the postType value from context. Reset fieldName to undefined on postType change #9
* Fixed: Correct relative file name for editorStyle #3
* Changed: Update build #7 #8
* Added: Implement QAD prototype solution for showLabel attribute #7
* Changed: Pass the postId from context as urlQueryArgs post_id #8
* Changed: Handle context, passing it to DisplayMetaControl for server side rendering #8
* Changed: Add usesContext: to enable correct post_id to be passed on ServerSideRender #8
* Changed: Add Show Label toggle #7
* Changed: Add $content and $block params to sb_field_block_dynamic_block() #8
* Tested: With WordPress 6.7 and WordPress Multisite
* Tested: With Gutenberg 19.6.2
* Tested: With PHP 8.3

= 0.0.1 =
* Changed: Reinstated for use by oik-events #6
* Tested: With WordPress 6.7 and WordPress Multisite
* Tested: With Gutenberg 19.6.2
* Tested: With PHP 8.3

= 0.0.0 =
* Added: Originally developed Mar-June 2021

== Further reading ==
If you want to read more about the oik plugins then please visit the

[oik base plugin](https://www.oik-plugins.com/oik)
[oik-fields](https://www.oik-plugins.com/oik-plugins/oik-fields-custom-post-type-field-apis/)
[oik-types](https://www.oik-plugins.com/oik-plugins/oik-types/)
[oik-blocks](https://www.oik-plugins.com/oik-plugins/oik-blocks-wordpress-blocks-for-oik-shortcodes/)