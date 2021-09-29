const { registerBlockType } = wp.blocks;
const { __ } = wp.i18n;
const { Fragment } = wp.element;
const { RichText, InspectorControls, InnerBlocks } = wp.blockEditor;
import { Button, Panel, PanelBody, PanelRow, FormToggle, TextControl} from '@wordpress/components';
import {BackgroundStyle} from './../library/background-style';
import { ColorIndicator, ColorPalette } from '@wordpress/components';

export const name = 'layout-lozengenav-inner';

export const settings = {
	title: __( 'Lozenge Nav Item', 'octaviazydel' ), // Block title.
  parent: [ 'octaviazydel/layout-lozengenav-outer' ],
	icon: 'button',
	category: 'layout',
	attributes: {
		title: {
			type: 'string'
		},
    color: {
      type: 'string'
    },
    url: {
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
            <PanelBody title= {'Link URL'}>
              <TextControl
                label="Link URL"
                value={ props.attributes.url }
                onChange={url => props.setAttributes({ linkurl: url })}
                />
          </PanelBody>
        </Panel>
        </InspectorControls>

  			<div className={props.className} style={{color: props.attributes.color, border: '1px solid currentColor', borderRadius: '1000px', paddingInline: '2rem'}}>
  				<div className={'tab__header'}>
  					<RichText
  						className={ '' }
  						tagName="p"
  						onChange={text => props.setAttributes({ title: text })}
  						value={ props.attributes.title }
  						placeholder="Name"
  					/>
  				</div>
  			</div>
      </Fragment>
		];

	},
	save: (props) => {

		return(
      <div className={"lozenge__nav__item"} style={{background: props.attributes.color}}>
        <a href={props.attributes.url} style={{color: props.attributes.color}}>
          {props.attributes.title}
        </a>
      </div>

		);
	}
};
