import { __ } from '@wordpress/i18n';
import { InnerBlocks, InspectorControls } from '@wordpress/block-editor';
const { Fragment } = wp.element;
import { Toolbar, Button, DateTimePicker, TextControl, Tooltip, Panel, PanelBody, PanelRow, FormToggle, SelectControl, FocalPointPicker, ColorPalette, AnglePickerControl, RangeControl, Modal} from '@wordpress/components';
import { useState } from '@wordpress/element';

import {withSelect, withDispatch, useSelect, useDispatch} from '@wordpress/data';
import { source, createBlock } from '@wordpress/blocks';
import { __experimentalBoxControl as BoxControl } from '@wordpress/components';

import {BackgroundStyle} from './../library/background-style';

export const name = 'layout-fiftyfifty-outer';


export const settings = {
	/**
	 * This is the display title for your block, which can be translated with `i18n` functions.
	 * The block inserter will show this name.
	 */
	title: __( 'Content Container', 'octaviazydel' ),

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
	icon: 'columns',

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
		width: {
			type: 'number',
			default: 100
		},
		height: {
			 type: 'string',
			 default: 'auto'
		},
		fixedheight: {
			type: 'string'
		},
		fullwidth: {
			 type: 'string',
			 default: 'alignfull'
		 },
		 box: {
 			 type: 'object',
			 default: {
				 top: '50px',
				 left: '0',
				 bottom: '50px',
				 right: '0'
			 }
 		 },
		hasBottomBorder: {
			type: 'boolean',
			default: false
		}
  },

  edit: ( props ) => {
		const { className, clientId } = props;
    const { replaceInnerBlocks } = useDispatch("core/block-editor");
    const { inner_blocks } = useSelect(select => ({
        inner_blocks: select("core/block-editor").getBlocks(clientId)
    }));

		let style = {};
		let width2 = 100 - props.attributes.width;
		let grid = props.attributes.width.toString() + '% ' + width2.toString()+ '%';
		let classlist = props.attributes.fullwidth + (props.attributes.hasBottomBorder ? ' has-bottom-border' : '');

		style.minHeight = (props.attributes.height == '' ? props.attributes.fixedheight+'px' :  props.attributes.height );
		style.height = 'max-content';
		style.gridTemplateColumns =  grid;
		if (props.attributes.box) {
			style.paddingLeft = props.attributes.box.left;
			style.paddingRight = props.attributes.box.right;
			style.paddingTop = props.attributes.box.top;
			style.paddingBottom = props.attributes.box.bottom;
		}

		return [
			<Fragment>
			<InspectorControls>
				<PanelBody title="Panel Split">
					<PanelRow>
						<h2>{props.attributes.width}/{100 - props.attributes.width}</h2>
					</PanelRow>
					<PanelRow>
						<RangeControl
							label="Percent"
							value={ props.attributes.width }
							onChange={change => {
								inner_blocks.forEach( function(block, index) {
									if (index % 2 == 0) {
										inner_blocks[index].attributes.width = change
									} else {
										inner_blocks[index].attributes.width = 100 - change
									}
								})
								let inner_blocks_new = inner_blocks;

								if (inner_blocks.length < 2 && change != 100) {
										inner_blocks_new = [
												...inner_blocks,
												createBlock("octaviazydel/layout-fiftyfifty-inner")
										];
								} else if (inner_blocks.length > 1 && change == 100) {
										inner_blocks_new = inner_blocks.slice(0, 1);
								}

								replaceInnerBlocks(clientId, inner_blocks_new, false);
								props.setAttributes( {width: change } )
							}}
							min={ 0 }
							max={ 100 }
						/>
					</PanelRow>
				</PanelBody>
				<PanelBody title="Inner Padding">
					<PanelRow>
							<BoxControl
			            values={ props.attributes.box }
			            onChange={ change => {
										console.log(change);
										props.setAttributes({box: change});
									} }
			        />
					</PanelRow>
				</PanelBody>
				<PanelBody title="Section Height">
					<PanelRow>
						<SelectControl
							label="Section Height"
							value= {props.attributes.height}
							options={[
								{ label: 'Fixed', value: '' },
								{ label: 'Auto', value: 'auto' },
								{ label: '100%', value: '100vh' },
							 { label: '80%', value: '80vh' },
							 { label: '75%', value: '75vh' },
							 { label: '66%', value: '66.666vh' },
								{ label: '50%', value: '50vh' },
								{ label: '33%', value: '33.333vh'},
								{ label: '25%', value: '25vh'}
							]}
							onChange={change => props.setAttributes( {height: change } )}
						/>
					</PanelRow>
					<PanelRow>
					<TextControl
						label="Fixed Height in pixels"
						value={ props.attributes.fixedheight }
						onChange={change => props.setAttributes( {fixedheight: change } )}
					/>
					</PanelRow>
					<PanelRow>
							<SelectControl
								label="Section Width"
								value= {props.attributes.fullwidth}
								options={[
									{ label: 'Content Width', value: 'content-width' },
									{ label: 'Full Width', value: 'alignfull' },
									{ label: 'Content Full Width', value: 'content-alignfull alignfull'}
								]}
								onChange={change => props.setAttributes( {fullwidth: change } )}
							/>
					</PanelRow>
				</PanelBody>
				<BackgroundStyle
					background={props.attributes.background}
					onUpdate={change => props.setAttributes( {background: change } )}
				/>
			<PanelBody title="Bottom Border">
				<PanelRow>
					<h2>Bottom Border</h2>
					<FormToggle
					label={'Bottom Border'}
					checked={ props.attributes.hasBottomBorder }
					onChange={change => props.setAttributes({hasBottomBorder: !props.attributes.hasBottomBorder})}
					/>
				</PanelRow>
			</PanelBody>
			</InspectorControls>
	      <BackgroundStyle.Render className={ props.className} background={props.attributes.background}>
					<div className={"fifityfifty__inner"} style={style}>
					<InnerBlocks template={ [[ 'octaviazydel/layout-fiftyfifty-inner', {width: props.attributes.width} ]] }
	                 allowedBlocks={['octaviazydel/layout-fiftyfifty-inner']} />
					</div>
	  		</BackgroundStyle.Render>
			</Fragment>
		];
	},

	save: ( props ) => {
		let style = {};
		let width2 = 100 - props.attributes.width;
		let grid = props.attributes.width.toString() + '% ' + width2.toString()+ '%';
		let classlist = props.attributes.fullwidth + (props.attributes.hasBottomBorder ? ' has-bottom-border' : '');

		style.minHeight = (props.attributes.height == '' ? props.attributes.fixedheight+'px' :  props.attributes.height );
		style.height = 'max-content';
		style.gridTemplateColumns =  grid;
		if (props.attributes.box) {
			style.paddingLeft = props.attributes.box.left;
			style.paddingRight = props.attributes.box.right;
			style.paddingTop = props.attributes.box.top;
			style.paddingBottom = props.attributes.box.bottom;
		}
		return (
				<BackgroundStyle.Render className={ classlist } background={props.attributes.background}>
					<div className={"fifityfifty__inner"} style={style}>
	    			<InnerBlocks.Content />
					</div>
				</BackgroundStyle.Render>
		);
	},
}
