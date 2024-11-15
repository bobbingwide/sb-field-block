# Field block 
![banner](assets/sb-field-block-banner-772x250.jpg)
* Contributors:      bobbingwide
* Tags:              block
* Requires at least: 6.6.0
* Tested up to:      6.7.0
* Stable tag:        0.0.1
* Requires PHP:      8.2.0
* License:           GPL 3.0
* License URI:       https://www.gnu.org/licenses/gpl-2.0.html

Displays a post meta data field in a block.

## Description 

The Field block ( oiksb/sb-field-block ) displays post meta data for your post types.
Use it replace [bw_fields] and [bw_field] shortcodes in your content or block based themes.

The field block supports all fields which have been registered to WordPress using register_post_meta().
This includes fields defined using oik-fields as virtual fields.
For a field to be rendered inside the block editor the post type must be registered to `show_in_rest` and support `custom-fields`.


## Installation 
1. Upload the contents of the sb-field-block plugin to the `/wp-content/plugins/sb-field-block' directory
1. Activate the sb-field-block plugin through the 'Plugins' menu in WordPress

* Note: sb-field-block is dependent upon the oik-fields and the oik base plugin.



## Frequently Asked Questions 

# Where is the FAQ? 

tbc

# How do I register my custom fields? 

tbc

For examples see the latest development in the oik-events plugin.
The plugin was prototyped with the oik-plugins plugin.

# What are the dependencies? 

The block displays fields which have been registered using oik and oik-fields.

# What field types are supported? 

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

# Does it support ACF? 

No. Consider using Field block for ACF Pro or Meta Field Block

# Does it support taxonomies? 

Don't know. I've not yet tried it.


## Screenshots 

1. sb-field-block in the block editor
2. sb-field-block on the front end
3. Field block settings

## Upgrade Notice 
Use this plugin to replace the [bw_fields] or [bw_field] shortcodes in your post content or block based themes.

## Changelog 
# 0.0.1 
* Changed: Reinstated for use by oik-events #6
* Tested: With WordPress 6.7 and WordPress Multisite
* Tested: With Gutenberg 19.6.2
* Tested: With PHP 8.3

# 0.0.0 
* Added: Originally developed Mar-June 2021


## Further reading 
If you want to read more about the oik plugins then please visit the

[oik base plugin](https://www.oik-plugins.com/oik)

