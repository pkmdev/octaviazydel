import { __ } from '@wordpress/i18n';
import { InnerBlocks, InspectorControls, RichText } from '@wordpress/block-editor';
const { Fragment } = wp.element;
import { Toolbar, Button, DateTimePicker, TextControl, Tooltip, Panel, PanelBody, PanelRow, FormToggle, SelectControl, FocalPointPicker, ColorPalette, AnglePickerControl, RangeControl, Modal} from '@wordpress/components';
import { useState } from '@wordpress/element';

import {withSelect, withDispatch, useSelect, useDispatch} from '@wordpress/data';
import { source, createBlock } from '@wordpress/blocks';
import { __experimentalBoxControl as BoxControl } from '@wordpress/components';

import {BackgroundStyle} from './../library/background-style';

export const name = 'layout-values-outer';


export const settings = {
	/**
	 * This is the display title for your block, which can be translated with `i18n` functions.
	 * The block inserter will show this name.
	 */
	title: __( 'Values BLock', 'octaviazydel' ),

	/**
	 * This is a short description for your block, can be translated with `i18n` functions.
	 * It will be shown in the Block Tab in the Settings Sidebar.
	 */
	description: __(
		'Values Block',
		'octaviazydel'
	),
	getEditWrapperProps( props ) {
    return {
      'data-align': 'full'
    };
  },

	/**
	 * Blocks are grouped into categories to help users browse and discover them.
	 * The categories provided by core are `common`, `embed`, `formatting`, `layout` and `widgets`.
	 */
	category: 'layout',

	/**
	 * An icon property should be specified to make it easier to identify a block.
	 * These can be any of WordPress’ Dashicons, or a custom svg element.
	 */
	icon: 'marker',

	/**
	 * Optional block extended support features.
	 */
	supports: {
		// Removes support for an HTML mode.
		html: false,
	},
	attributes: {
		background: {
			type: 'object',
			default: {}
		},
  },

  edit: ( props ) => {

		return [
			<Fragment>
			<InspectorControls>
				<BackgroundStyle
					background={props.attributes.background}
					onUpdate={change => props.setAttributes( {background: change } )}
				/>
			</InspectorControls>
      <BackgroundStyle.Render background={props.attributes.background}>
				<div id={"values_menu"}>
					<InnerBlocks template={ [[ 'octaviazydel/layout-values-inner', {} ]] }
									 allowedBlocks={['octaviazydel/layout-values-inner']} />
				</div>
			</BackgroundStyle.Render>
			</Fragment>
		];
	},

	save: ( props ) => {

		return (
	      <BackgroundStyle.Render className={ 'section__pattern'} background={props.attributes.background}>
				<div id={"values_menu"}>
						<InnerBlocks.Content />
				</div>
				</BackgroundStyle.Render>
		);
	},
}
