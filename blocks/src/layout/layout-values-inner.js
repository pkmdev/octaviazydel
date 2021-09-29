const { registerBlockType } = wp.blocks;
const { __ } = wp.i18n;
const { Fragment } = wp.element;
const { RichText, InspectorControls, InnerBlocks } = wp.blockEditor;
import { Button, Panel, PanelBody, PanelRow, FormToggle, TextControl} from '@wordpress/components';
import {BackgroundStyle} from './../library/background-style';
import { ColorIndicator, ColorPalette } from '@wordpress/components';

export const name = 'layout-values-inner';

export const settings = {
	title: __( 'Values Item', 'octaviazydel' ), // Block title.
  parent: [ 'octaviazydel/layout-values-outer' ],
	icon: 'marker',
	category: 'layout',
	attributes: {
		title: {
			type: 'string'
		},
		radius: {
			type: 'string',
			default: '36px'
		},
    color: {
      type: 'string'
    },
    text: {
      type: 'string'
    }
	},
	edit: (props) => {
    const colors = wp.data.select('core/block-editor').getSettings().colors;

		return [
      <Fragment>
        <InspectorControls>
          <Panel>
            <PanelBody title= {<Fragment><span>Nav Color</span><ColorIndicator colorValue = {props.attributes.color} /></Fragment>}>
              <span>Select a Color</span><ColorIndicator colorValue = {props.attributes.color} />
              <ColorPalette
                colors = {colors}
                value = {props.attributes.color}
                onChange = {color => props.setAttributes({ color: color })} />
            </PanelBody>
          </Panel>
          <Panel>
            <PanelBody title= {'Radius'}>
							<TextControl
								label="Radius in pixels"
								value={ props.attributes.radius }
								onChange={radius => props.setAttributes({ radius: radius })}
								/>
          	</PanelBody>
        	</Panel>
        </InspectorControls>

  			<div className={props.className} style={{color: props.attributes.color, border: '1px solid currentColor', borderRadius: '1000px', paddingInline: '2rem'}}>
					<RichText
						className={ '' }
						tagName="h3"
						onChange={text => props.setAttributes({ title: text })}
						value={ props.attributes.title }
						placeholder="Title"
					/>
					<RichText
						className={ '' }
						tagName="p"
						onChange={text => props.setAttributes({ text: text })}
						value={ props.attributes.text }
						placeholder="The shortest distance between two points is achieved by stripping away the unessential and staying close to the solution."
					/>
  			</div>
      </Fragment>
		];

	},
	save: (props) => {
		const rand = Math.random().toString(16).substr(2, 8);
		return(
			<Fragment>
				<input type="radio" name={"menu_item"} value="" class="menu_item" data-radius={props.attributes.radius} data-color={props.attributes.color} data-target={rand} />
			  <div id={rand} className={"menu_content"}>
					<RichText.Content tagName="h3" value={ props.attributes.title } />
					<RichText.Content tagName="p" value={ props.attributes.text } />
			  </div>
			</Fragment>

		);
	}
};
