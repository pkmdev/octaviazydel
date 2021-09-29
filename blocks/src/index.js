
import { registerBlockType, registerBlockStyle } from '@wordpress/blocks';

import './editor.scss';

/**
 * Import Block subfiles
 */

import * as fiftyfiftyInner from './layout/layout-fiftyfifty-inner';
import * as fiftyfiftyOuter from './layout/layout-fiftyfifty-outer';
import * as lozengenavOuter from './layout/layout-lozengenav-outer';
import * as lozengenavInner from './layout/layout-lozengenav-inner';
import * as valuesInner from './layout/layout-values-inner';
import * as valuesOuter from './layout/layout-values-outer';

const family = 'octaviazydel'

const blocks = [
  fiftyfiftyInner,
  fiftyfiftyOuter,
  lozengenavOuter,
  lozengenavInner,
  valuesInner,
  valuesOuter
];

function registerBlock( block ) {
    const { name, settings } = block;
    registerBlockType( family+'/'+name, settings );
    const {styles} = block;
    if (styles) {
      styles.forEach(style => registerBlockStyle(family+'/'+name, style))
    }
}

blocks.forEach( registerBlock );
