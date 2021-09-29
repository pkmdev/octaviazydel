const { registerBlockType } = wp.blocks;
const { __ } = wp.i18n;
const { Fragment } = wp.element;
const { InspectorControls, InnerBlocks } = wp.blockEditor;
import { __experimentalAlignmentMatrixControl as AlignmentMatrixControl } from "@wordpress/components";

import { Toolbar, Button, DateTimePicker, TextControl, Tooltip, Panel, PanelBody, PanelRow, FormToggle, SelectControl, FocalPointPicker, ColorPalette, AnglePickerControl, RangeControl, Modal} from '@wordpress/components';
import {BackgroundStyle} from './../library/background-style';
import { __experimentalBoxControl as BoxControl } from '@wordpress/components';
import { __experimentalNumberControl as NumberControl } from '@wordpress/components';


export const name = 'layout-fiftyfifty-inner';

export const settings = {
	title: __( 'Container Inner', 'octaviazydel' ), // Block title.
  parent: [ 'octaviazydel/layout-fiftyfifty-outer' ],
	icon: 'carrot',
	category: 'layout',
	attributes: {
		background: {
			type: 'object',
			default: {}
		},
		alignment: {
			type: 'string',
			default: 'center center'
		},
		contentWidth: {
			 type: 'string',
			 default: '100%'
		},
		width: {
			 type: 'string',
			 default: '82%'
		},
		box: {
			type: 'object',
		},
		order: {
			type: 'number',
			default: 0
		}

	},

	edit: (props) => {
		let style = {};
		let innerStyle = {}
		let alignmentary = props.attributes.alignment.split(" ");
		innerStyle.maxWidth = props.attributes.contentWidth;
		innerStyle.width = '100%';
		switch (alignmentary[0]) {
			case 'top' :
			style.justifyContent = 'flex-start';
			break;

			case 'bottom' :
			style.justifyContent = 'flex-end';
			break;

			case 'center' :
			default :
			style.justifyContent = 'center';
			break;
		}

		switch (alignmentary[1]) {
			case 'left' :
			style.alignItems = 'flex-start';
			break;

			case 'right' :
			style.alignItems = 'flex-end';
			break;

			case 'center' :
			default :
			style.alignItems = 'center';
			break;
		}
		if (props.attributes.box) {
			innerStyle.paddingLeft = props.attributes.box.left;
			innerStyle.paddingRight = props.attributes.box.right;
			innerStyle.paddingTop = props.attributes.box.top;
			innerStyle.paddingBottom = props.attributes.box.bottom;
		}

		return [
			<Fragment>
				<InspectorControls>
					<PanelBody title="Content Position">
						 <PanelRow>
								 <AlignmentMatrixControl
									 value={props.attributes.alignment}
									 onChange={change => props.setAttributes( {alignment: change } )}
								 />
						 </PanelRow>
						 <PanelRow>
								 <TextControl
									label="Content Max Width (include variable)"
									value={ props.attributes.contentWidth }
									onChange={change => props.setAttributes( {contentWidth: change } )}
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
					<BackgroundStyle
						background={props.attributes.background}
						onUpdate={change => props.setAttributes( {background: change } )}
					/>
					<PanelBody title="Mobile Order">
					 <PanelRow>
					 	<NumberControl
							isShiftStepEnabled={ false }
							onChange={ change => props.setAttributes( {order: change } ) }
							step={ 1 }
							value={ props.attributes.order }
							/>
					 </PanelRow>
				 </PanelBody>
				</InspectorControls>
	      <BackgroundStyle.Render className={ props.className} background={props.attributes.background} style={style}>
					<div className={'inner__content'} style={innerStyle}>
						<InnerBlocks />
					</div>
	  		</BackgroundStyle.Render>
			</Fragment>
		];

	},
	save: (props) => {

		let style = {};
		let innerStyle = {}
		let alignmentary = props.attributes.alignment.split(" ");
		innerStyle.maxWidth = props.attributes.contentWidth;
		innerStyle.width = '100%';
		switch (alignmentary[0]) {
			case 'top' :
			style.justifyContent = 'flex-start';
			break;

			case 'bottom' :
			style.justifyContent = 'flex-end';
			break;

			case 'center' :
			default :
			style.justifyContent = 'center';
			break;
		}

		switch (alignmentary[1]) {
			case 'left' :
			style.alignItems = 'flex-start';
			break;

			case 'right' :
			style.alignItems = 'flex-end';
			break;

			case 'center' :
			default :
			style.alignItems = 'center';
			break;
		}
		if (props.attributes.box) {
			innerStyle.paddingLeft = props.attributes.box.left;
			innerStyle.paddingRight = props.attributes.box.right;
			innerStyle.paddingTop = props.attributes.box.top;
			innerStyle.paddingBottom = props.attributes.box.bottom;
		}

		return(
			<BackgroundStyle.Render className={ props.attributes.fullwidth + (props.attributes.order != 0 ? ' mobile-order-'+props.attributes.order : '') } background={props.attributes.background} style={style}>
				<div className={'inner__content'} style={innerStyle}>
	    		<InnerBlocks.Content />
				</div>
			</BackgroundStyle.Render>
		);
	}
};
