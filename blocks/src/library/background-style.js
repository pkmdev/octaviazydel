import { __ } from '@wordpress/i18n';
import { Button, Panel, PanelBody, PanelRow, RangeControl, FormToggle, FocalPointPicker} from '@wordpress/components';
const { PanelColorSettings, withColors, getColorClassName, MediaUpload, MediaUploadCheck } = wp.blockEditor;
import { __experimentalNumberControl as NumberControl } from '@wordpress/components';
import { __experimentalAlignmentMatrixControl as AlignmentMatrixControl } from "@wordpress/components";
import { __experimentalRadio as Radio, __experimentalRadioGroup as RadioGroup } from '@wordpress/components';
import {
	useBlockProps,
	__experimentalPanelColorGradientSettings as PanelColorGradientSettings
} from '@wordpress/block-editor';

import classnames from 'classnames';
import { forwardRef } from '@wordpress/element';
const { Fragment } = wp.element;
const { Component } = wp.element;

const ALLOWED_MEDIA_TYPES = [ 'image' ];
const ALLOWED_VIDEO_TYPES = [ 'video' ];


class BackgroundStyle extends Component {
  constructor( props ) {
    super( ...arguments )
    this.props = props;
    this.onUpdate = props.onUpdate;

    this.setImage = this.setImage.bind(this);
    this.setVideo = this.setVideo.bind(this);
		this.setAlignment = this.setAlignment.bind(this);
    this.setSize = this.setSize.bind(this);
    this.setFixedDimension = this.setFixedDimension.bind(this);
    this.setBackgroundType = this.setBackgroundType.bind(this);
    this.setDimension = this.setDimension.bind(this);
    this.setDimensionPixels = this.setDimensionPixels.bind(this);
    this.setFocalPoint = this.setFocalPoint.bind(this);
    this.setBackgroundColor = this.setBackgroundColor.bind(this);
    this.setBackgroundGradient = this.setBackgroundGradient.bind(this);
  }

  setImage(x) {
    this.props.background = { ...this.props.background, image: x }
    this.onUpdate(this.props.background);
  }
  setVideo(x) {
    this.props.background = { ...this.props.background, video: x }
    this.onUpdate(this.props.background);
  }
  setAlignment(x) {
    this.props.background = { ...this.props.background, alignment: x };
    this.onUpdate(this.props.background);
  }
  setSize(x) {
    this.props.background = { ...this.props.background, size: x };
    this.onUpdate(this.props.background);
  }
  setFixedDimension(x) {
    this.props.background = { ...this.props.background, fixedDimension: !this.props.background.fixedDimension };
    this.onUpdate(this.props.background);
  }
  setBackgroundType(x) {
    this.props.background = { ...this.props.background, backgroundType: x, image: false, video: false };
    this.onUpdate(this.props.background);
  }
  setDimension(x) {
    this.props.background = { ...this.props.background, dimension: x };
    this.onUpdate(this.props.background);
  }
  setDimensionPixels(x) {
    this.props.background = { ...this.props.background, dimensionPixels: x };
    this.onUpdate(this.props.background);
  }
  setFocalPoint(x) {
    this.props.background = { ...this.props.background, focalPoint: x };
    this.onUpdate(this.props.background);
  }
  setBackgroundColor(x) {
    if (typeof x == 'undefined') x = false;
    this.props.background = { ...this.props.background, backgroundColor: x };
    this.onUpdate(this.props.background);
  }
  setBackgroundGradient(x) {
    if (typeof x == 'undefined') x = false;
    this.props.background = { ...this.props.background, backgroundGradient: x };
    this.onUpdate(this.props.background);
  }

  render() {
    const gradients = wp.data.select('core/block-editor').getSettings().gradients;
  	const colors = wp.data.select('core/block-editor').getSettings().colors;
     let { image = false, video = false, alignment = 'center center', size = 'cover', fixedDimension = false, backgroundType = 'image', dimension = 50, dimensionPixels = 200, focalPoint = {x: '.5',y: '.5'}, backgroundColor = '', backgroundGradient = '' } = this.props.background;
     console.log(gradients, colors);
     return [
       <Panel>
        <PanelBody title="Backgroud Settings">
         <PanelColorGradientSettings
           title={ __("Background Color") }
           initialOpen={false}
           settings={ [ {
             colorValue: backgroundColor,
             gradientValue: backgroundGradient,
             colors:colors,
             gradients:gradients,
             label:__("Choose a color or a gradient"),
             onColorChange:this.setBackgroundColor,
             onGradientChange:this.setBackgroundGradient
           }
            ] }
         >
         </PanelColorGradientSettings>
         <PanelBody title="Background Image" initialOpen={false}>

            <PanelRow>
              <h2>Background Type</h2>
            </PanelRow>
            <PanelRow>
              <RadioGroup label="Action" onChange={ this.setBackgroundType } checked={ backgroundType }>
                <Radio value="image">Image</Radio>
                <Radio value="video">Video</Radio>
              </RadioGroup>
            </PanelRow>
             <MediaUploadCheck>
              {backgroundType == 'image' ?
               <MediaUpload
                 allowedTypes={ALLOWED_MEDIA_TYPES}
                 multiple={false}
                 value={image ? image.id : ''}
                 onSelect={this.setImage}
                 render={({ open }) => (
                   image ?
                     <Fragment>
                       <PanelRow>
                         <img src={image.url} dimension={image.dimension / 2} />
                       </PanelRow>
                       <PanelRow>
                         <Button onClick={() => this.setImage('')} className="button is-small">Remove Image</Button>
                       </PanelRow>
                     </Fragment>
                     :
                     <PanelRow>
                       <Button onClick={open} className="button">Upload Image</Button>
                     </PanelRow>
                 )}
               />
               :
               <MediaUpload
                 allowedTypes={['video']}
                 multiple={false}
                 value={video ? video.id : ''}
                 accept="video/*"
                 onSelect={this.setVideo}
                 render={({ open }) => (
                   video ?
                     <Fragment>
                       <PanelRow>
                         <video src={video.url} />
                       </PanelRow>
                       <PanelRow>
                         <Button onClick={() => this.setVideo('')} className="button is-small">Remove Video</Button>
                       </PanelRow>
                     </Fragment>
                     :
                     <PanelRow>
                       <Button onClick={open} className="button">Upload Video</Button>
                     </PanelRow>
                 )}
               />
             }
             </MediaUploadCheck>

          {image || video ?
            <Fragment>
               <PanelRow>
                 <h2>Background {image ? 'Image' : 'Video' } Alignment</h2>
               </PanelRow>
               <PanelRow>
                 <AlignmentMatrixControl
                   value={alignment}
                   onChange={this.setAlignment}
                 />
               </PanelRow>

               <PanelRow>
                   <h2>Background Size</h2>
               </PanelRow>
               <PanelRow>
                 <RadioGroup label="Action" onChange={ this.setSize } checked={ size }>
                   <Radio value="cover">Cover</Radio>
                   <Radio value="contain">Contain</Radio>
                   <Radio value="width">W</Radio>
                   <Radio value="height">H</Radio>
                 </RadioGroup>
               </PanelRow>
               {size == 'cover' && image ?
                 <PanelRow>
                   <FocalPointPicker
                     label="Image Focal Point"
                     url={ (image ? image.url : false) }
                     dimensions={ {
                         dimension: 'auto',
                         height: 'auto'
                       } }
                     value={ focalPoint }
                     onChange={ this.setFocalPoint }
                   />
                 </PanelRow>
              : ''}
               {size == 'width' || size == 'height' ?
                 <Fragment>
                   <PanelRow>
                     <h2>Fixed Dimension</h2>
                     <FormToggle
                       label={'Dimension'}
                       help={ fixedDimension ? 'Fixed' : 'Percent' }
                       checked={ fixedDimension }
                       onChange={this.setFixedDimension}
                     />
                   </PanelRow>
                   {fixedDimension ?
                     <PanelRow>
                       <NumberControl
                         label="Pixels"
                         value={ dimensionPixels }
                         onChange={ this.setDimensionPixels }
                       />
                     </PanelRow>
                   :
                     <PanelRow>
                       <RangeControl
                         label="Percent"
                         value={ dimension }
                         onChange={ this.setDimension }
                         min={ 0 }
                         max={ 100 }
                       />
                     </PanelRow>
                   }
                 </Fragment>
               : ''}
          </Fragment>
        : ''}
         </PanelBody>
        </PanelBody>

       </Panel>
     ];
  }
}





/**
 * Internal dependencies
 */


const BackgroundStyleRender = ( { className, children, background, style = {}, vidstyle = {} }, ref ) => {
  let { image = false, video = false, alignment = 'center center', size = 'cover', fixedDimension = false, backgroundType = 'image', dimension = 50, dimensionPixels = 200, focalPoint = {x: '.5',y: '.5'}, backgroundColor = '', backgroundGradient } = background;
	const classNames = classnames( className, 'custom__background' );
  style.backgroundImage = backgroundGradient;
  if (image) {
    var xl = typeof image?.sizes?.large !== 'undefined' ? image.sizes.large.url : image.url;
    //style.background = 'url('+image.url+')';
    style.backgroundImage =  '-webkit-image-set(url('+(typeof image.sizes?.medium?.url !== 'undefined' ? image.sizes.medium.url : image.url)+') 1x, url('+ xl+') 3x)'+(style.backgroundImage ? ', '+style.backgroundImage : ''); // :
    style.backgroundRepeat = 'no-repeat';
    style.backgroundPosition = alignment;
    style.backgroundSize =  (size != 'width' && size != 'height'  ? size : (fixedDimension ? (size == 'width' ? dimensionPixels+'px auto' : 'auto '+dimensionPixels+'px') : (size == 'width' ? dimension+'% auto' : 'auto '+dimension+'%')));
  }
  if (video) {
    vidstyle.objectPosition = alignment;
    vidstyle.objectFit = (size != 'width' && size != 'height'  ? size : (fixedDimension ? (size == 'width' ? dimensionPixels+'px auto' : 'auto '+dimensionPixels+'px') : (size == 'width' ? dimension+'% auto' : 'auto '+dimension+'%')));
    vidstyle.width = '100%';
    vidstyle.height = '100%';
  }
  style.backgroundColor = backgroundColor ? backgroundColor : 'transparent';

	return (
		<div className={ classNames } ref={ ref } style={style} >
      { video ?
      <video style={vidstyle} src={video.url} playsinline autoplay muted loop />
      : ''}
			{ children }
		</div>
	);
}

BackgroundStyle.Render = forwardRef( BackgroundStyleRender );





export {BackgroundStyle};
