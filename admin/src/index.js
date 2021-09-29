import { __ } from '@wordpress/i18n';

const { registerPlugin } = wp.plugins;
const { PluginDocumentSettingPanel } = wp.editPost;
const { Fragment, Component, useState } = wp.element;
const { Panel, PanelRow, PanelBody, Button, Image } = wp.components
import { ColorIndicator, ColorPalette } from '@wordpress/components';

import { MediaUpload, MediaUploadCheck } from "@wordpress/block-editor";

const { withSelect, withDispatch, useSelect } = wp.data;

const applyWithSelect = withSelect( ( select ) => {
	const { getEditedPostAttribute } = select( 'core/editor' );
	const gradients = select('core/block-editor').getSettings().gradients;
	const colors = select('core/block-editor').getSettings().colors;

	return {
		meta: getEditedPostAttribute( 'meta' ),
		colors: colors,
		gradients: gradients
	};
} );

const applyWithDispatch = withDispatch( ( dispatch, { meta } ) => {
	const { editPost } = dispatch( 'core/editor' );

	return {
		updateMeta( newMeta ) {
			editPost( { meta: newMeta } ); // Important: Old and new meta need to be merged in a non-mutating way!
		},
	};
} );

import {
	useBlockProps,
	__experimentalPanelColorGradientSettings as PanelColorGradientSettings
} from '@wordpress/block-editor';

//styles that make it look good in the editor
import './editor.scss';

function ImageItem( { id } ) {
	const image = useSelect( ( select ) => {
		return select( 'core' ).getMedia( id )
	}, [ id ] );
	return image ? <img src = {image.source_url } /> : false
}

class PageOptions extends Component {

	render() {
		// Nested object destructuring.
		const {
			meta: {
				page_color: pageColor,
				page_gradient: pageGradient,
        header_color: headerColor,
				header_gradient: headerGradient,
				footer_color: footerColor,
				footer_gradient: footerGradient,
				page_pattern: pagePattern,
        page_logo: pageLogo, //
        footer_thumbprint: footerThumbprint
			} = {},
			updateMeta,
		} = this.props;
		console.log(this.props.meta);

		return (
			<PluginDocumentSettingPanel
					name = 'page-options'
					icon = 'admin-settings'
					title = 'Page Options'
				>
				<PanelColorGradientSettings
					title={ __("Page Header Color") }
					initialOpen={false}
					settings={ [ {
						colorValue: headerColor,
						gradientValue: headerGradient,
						colors:this.props.colors,
						gradients:this.props.gradients,
						label:__("Choose a color or a gradient"),
						onColorChange:(newValue) => updateMeta( { header_color: newValue || '' } ),
						onGradientChange:(newValue) => updateMeta( { header_gradient: newValue || '' } )
					}
					 ] }
				>
				</PanelColorGradientSettings>
				<Panel>
					<PanelBody initialOpen={false} title= {<Fragment><span>Page Accent Color</span><ColorIndicator colorValue = {pageColor} /></Fragment>}>
						<span>Select a Color</span><ColorIndicator colorValue = {pageColor} />
						<ColorPalette
							colors = {this.props.colors}
							value = {pageColor}
							onChange = {(newValue) => updateMeta( { page_color: newValue || '' } )} />
					</PanelBody>
				</Panel>
				<PanelColorGradientSettings
					title={ __("Footer/Contact color") }
					initialOpen={false}
					settings={ [ {
						colorValue: footerColor,
						gradientValue: footerGradient,
						colors:this.props.colors,
						gradients:this.props.gradients,
						label:__("Choose a color or a gradient"),
						onColorChange:(newValue) => updateMeta( { footer_color: newValue || '' } ),
						onGradientChange:(newValue) => updateMeta( { footer_gradient: newValue || '' } )
					}
					 ] }
				>
				</PanelColorGradientSettings>
				<Panel>
          <PanelBody initialOpen={false} title = {'Page Logo Override'}>
            <ImageItem id = {pageLogo} />
            <MediaUploadCheck>
              <MediaUpload
                  onSelect = {(value) => updateMeta({page_logo: value.id})}
                  type = {'image'}
									value = {pageLogo}
									render = {(obj) => {return <Button onClick = {obj.open} className = {'button'}>Select Logo</Button>}}
              />
            </MediaUploadCheck>
						<p>Defaults to logo in Customizer</p>
          </PanelBody>
        </Panel>
				<Panel>
          <PanelBody initialOpen={false} title = {'Icon Logo'}>
            <ImageItem id = {footerThumbprint} />
            <MediaUploadCheck>
              <MediaUpload
                  onSelect = {(value) => updateMeta({footer_thumbprint: value.id})}
                  type = {'image'}
									value = {footerThumbprint}
									render = {(obj) => {return <Button onClick = {obj.open} className = {'button'}>Select Icon</Button>}}
              />
            </MediaUploadCheck>
          </PanelBody>
        </Panel>
				<Panel>
          <PanelBody initialOpen={false} title = {'Background Pattern'}>
            <ImageItem id = {pagePattern} />
            <MediaUploadCheck>
              <MediaUpload
                  onSelect = {(value) => updateMeta({page_pattern: value.id})}
                  type = {'image'}
									value = {pagePattern}
									render = {(obj) => {return <Button onClick = {obj.open} className = {'button'}>Select Background Pattern</Button>}}
              />
            </MediaUploadCheck>
          </PanelBody>
        </Panel>
			</PluginDocumentSettingPanel>

		)
	}
}

const render =
		applyWithSelect(
	      applyWithDispatch(
	          PageOptions
	      )
    )

registerPlugin( 'page-options', {
	icon: 'art',
	render,
} );
