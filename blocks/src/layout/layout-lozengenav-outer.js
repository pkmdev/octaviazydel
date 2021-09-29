import { __ } from '@wordpress/i18n';
import { InnerBlocks, InspectorControls, RichText } from '@wordpress/block-editor';
const { Fragment } = wp.element;
import { Toolbar, Button, DateTimePicker, TextControl, Tooltip, Panel, PanelBody, PanelRow, FormToggle, SelectControl, FocalPointPicker, ColorPalette, AnglePickerControl, RangeControl, Modal} from '@wordpress/components';
import { useState } from '@wordpress/element';

import {withSelect, withDispatch, useSelect, useDispatch} from '@wordpress/data';
import { source, createBlock } from '@wordpress/blocks';
import { __experimentalBoxControl as BoxControl } from '@wordpress/components';

import {BackgroundStyle} from './../library/background-style';

export const name = 'layout-lozengenav-outer';


export const settings = {
	/**
	 * This is the display title for your block, which can be translated with `i18n` functions.
	 * The block inserter will show this name.
	 */
	title: __( 'Lozenge Navigation', 'octaviazydel' ),

	/**
	 * This is a short description for your block, can be translated with `i18n` functions.
	 * It will be shown in the Block Tab in the Settings Sidebar.
	 */
	description: __(
		'Content Container',
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
	icon: 'button',

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
		topText: {
			type: 'string'
		},
		bottomtext: {
			type: 'string',
			default: '...explore...'
		}
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
			<div className={ props.className+' split__header'} >
	      <BackgroundStyle.Render className={ 'section__pattern'} background={props.attributes.background}>
					<RichText
							tagName="h2"
							onChange={text => props.setAttributes({ topText: text })}
							value={ props.attributes.topText }
							placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
					/>
				</BackgroundStyle.Render>
					<div className={"section__center"}>
						<div className={"lozenge__nav"}>
							<InnerBlocks template={ [[ 'octaviazydel/layout-lozengenav-inner', {} ]] }
			                 allowedBlocks={['octaviazydel/layout-lozengenav-inner']} />
						</div>
					</div>
					<div class="section__solid">
						<RichText
								tagName="h3"
								onChange={text => props.setAttributes({ bottomtext: text })}
								value={ props.attributes.bottomtext }
								placeholder="...explore..."
						/>
					</div>
				</div>

			</Fragment>
		];
	},

	save: ( props ) => {

		return (
				<div className={ props.className+' split__header'} >
		      <BackgroundStyle.Render className={ 'section__pattern'} background={props.attributes.background}>
						<RichText.Content tagName="h2" value={ props.attributes.topText } />
					</BackgroundStyle.Render>
					<div className={"section__center"}>
						<div className={"lozenge__nav"}>
							<InnerBlocks.Content />
						</div>
					</div>
					<div class="section__solid" style={{background: 'white'}}>
						<RichText.Content tagName="h3" value={ props.attributes.bottomtext } />
					</div>
				</div>
		);
	},
}
