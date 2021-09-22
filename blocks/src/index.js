
import { registerBlockType, registerBlockStyle } from '@wordpress/blocks';

import './style.scss';
import './editor.scss';

/**
 * Import Block subfiles
 */

// import * as hero from './hero';

const family = 'oz'

const blocks = [];

function registerBlock( block ) {
    const { name, settings } = block;
    registerBlockType( family+'/'+name, settings );
    const {styles} = block;
    if (styles) {
      styles.forEach(style => registerBlockStyle(family+'/'+name, style))
    }
}

blocks.forEach( registerBlock );
