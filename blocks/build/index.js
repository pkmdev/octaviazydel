/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayLikeToArray.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

module.exports = _arrayLikeToArray;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray.js */ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js");

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return arrayLikeToArray(arr);
}

module.exports = _arrayWithoutHoles;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/assertThisInitialized.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/classCallCheck.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/createClass.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/createClass.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/defineProperty.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/getPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  module.exports["default"] = module.exports, module.exports.__esModule = true;
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/inherits.js":
/*!*********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/inherits.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf.js */ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArray.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArray.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

module.exports = _iterableToArray;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableSpread.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableSpread;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js")["default"];

var assertThisInitialized = __webpack_require__(/*! ./assertThisInitialized.js */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/setPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  module.exports["default"] = module.exports, module.exports.__esModule = true;
  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/toConsumableArray.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toConsumableArray.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithoutHoles = __webpack_require__(/*! ./arrayWithoutHoles.js */ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js");

var iterableToArray = __webpack_require__(/*! ./iterableToArray.js */ "./node_modules/@babel/runtime/helpers/iterableToArray.js");

var unsupportedIterableToArray = __webpack_require__(/*! ./unsupportedIterableToArray.js */ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js");

var nonIterableSpread = __webpack_require__(/*! ./nonIterableSpread.js */ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js");

function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || unsupportedIterableToArray(arr) || nonIterableSpread();
}

module.exports = _toConsumableArray;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };

    module.exports["default"] = module.exports, module.exports.__esModule = true;
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };

    module.exports["default"] = module.exports, module.exports.__esModule = true;
  }

  return _typeof(obj);
}

module.exports = _typeof;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray.js */ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js");

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
}

module.exports = _unsupportedIterableToArray;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/classnames/index.js":
/*!******************************************!*\
  !*** ./node_modules/classnames/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames() {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg)) {
				if (arg.length) {
					var inner = classNames.apply(null, arg);
					if (inner) {
						classes.push(inner);
					}
				}
			} else if (argType === 'object') {
				if (arg.toString === Object.prototype.toString) {
					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes.push(key);
						}
					}
				} else {
					classes.push(arg.toString());
				}
			}
		}

		return classes.join(' ');
	}

	if ( true && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


/***/ }),

/***/ "./src/editor.scss":
/*!*************************!*\
  !*** ./src/editor.scss ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./editor.scss */ "./src/editor.scss");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_editor_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _layout_layout_fiftyfifty_inner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./layout/layout-fiftyfifty-inner */ "./src/layout/layout-fiftyfifty-inner.js");
/* harmony import */ var _layout_layout_fiftyfifty_outer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./layout/layout-fiftyfifty-outer */ "./src/layout/layout-fiftyfifty-outer.js");
/* harmony import */ var _layout_layout_lozengenav_outer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./layout/layout-lozengenav-outer */ "./src/layout/layout-lozengenav-outer.js");
/* harmony import */ var _layout_layout_lozengenav_inner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./layout/layout-lozengenav-inner */ "./src/layout/layout-lozengenav-inner.js");
/* harmony import */ var _layout_layout_values_inner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./layout/layout-values-inner */ "./src/layout/layout-values-inner.js");
/* harmony import */ var _layout_layout_values_outer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./layout/layout-values-outer */ "./src/layout/layout-values-outer.js");


/**
 * Import Block subfiles
 */







var family = 'octaviazydel';
var blocks = [_layout_layout_fiftyfifty_inner__WEBPACK_IMPORTED_MODULE_2__, _layout_layout_fiftyfifty_outer__WEBPACK_IMPORTED_MODULE_3__, _layout_layout_lozengenav_outer__WEBPACK_IMPORTED_MODULE_4__, _layout_layout_lozengenav_inner__WEBPACK_IMPORTED_MODULE_5__, _layout_layout_values_inner__WEBPACK_IMPORTED_MODULE_6__, _layout_layout_values_outer__WEBPACK_IMPORTED_MODULE_7__];

function registerBlock(block) {
  var name = block.name,
      settings = block.settings;
  Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__["registerBlockType"])(family + '/' + name, settings);
  var styles = block.styles;

  if (styles) {
    styles.forEach(function (style) {
      return Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__["registerBlockStyle"])(family + '/' + name, style);
    });
  }
}

blocks.forEach(registerBlock);

/***/ }),

/***/ "./src/layout/layout-fiftyfifty-inner.js":
/*!***********************************************!*\
  !*** ./src/layout/layout-fiftyfifty-inner.js ***!
  \***********************************************/
/*! exports provided: name, settings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "name", function() { return name; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "settings", function() { return settings; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _library_background_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../library/background-style */ "./src/library/background-style.js");

var registerBlockType = wp.blocks.registerBlockType;
var __ = wp.i18n.__;
var Fragment = wp.element.Fragment;
var _wp$blockEditor = wp.blockEditor,
    InspectorControls = _wp$blockEditor.InspectorControls,
    InnerBlocks = _wp$blockEditor.InnerBlocks;





var name = 'layout-fiftyfifty-inner';
var settings = {
  title: __('Container Inner', 'octaviazydel'),
  // Block title.
  parent: ['octaviazydel/layout-fiftyfifty-outer'],
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
      type: 'object'
    },
    order: {
      type: 'number',
      default: 0
    }
  },
  edit: function edit(props) {
    var style = {};
    var innerStyle = {};
    var alignmentary = props.attributes.alignment.split(" ");
    innerStyle.maxWidth = props.attributes.contentWidth;
    innerStyle.width = '100%';

    switch (alignmentary[0]) {
      case 'top':
        style.justifyContent = 'flex-start';
        break;

      case 'bottom':
        style.justifyContent = 'flex-end';
        break;

      case 'center':
      default:
        style.justifyContent = 'center';
        break;
    }

    switch (alignmentary[1]) {
      case 'left':
        style.alignItems = 'flex-start';
        break;

      case 'right':
        style.alignItems = 'flex-end';
        break;

      case 'center':
      default:
        style.alignItems = 'center';
        break;
    }

    if (props.attributes.box) {
      innerStyle.paddingLeft = props.attributes.box.left;
      innerStyle.paddingRight = props.attributes.box.right;
      innerStyle.paddingTop = props.attributes.box.top;
      innerStyle.paddingBottom = props.attributes.box.bottom;
    }

    return [Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Fragment, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InspectorControls, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["PanelBody"], {
      title: "Content Position"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["PanelRow"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["__experimentalAlignmentMatrixControl"], {
      value: props.attributes.alignment,
      onChange: function onChange(change) {
        return props.setAttributes({
          alignment: change
        });
      }
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["PanelRow"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["TextControl"], {
      label: "Content Max Width (include variable)",
      value: props.attributes.contentWidth,
      onChange: function onChange(change) {
        return props.setAttributes({
          contentWidth: change
        });
      }
    }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["PanelBody"], {
      title: "Inner Padding"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["PanelRow"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["__experimentalBoxControl"], {
      values: props.attributes.box,
      onChange: function onChange(change) {
        console.log(change);
        props.setAttributes({
          box: change
        });
      }
    }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_library_background_style__WEBPACK_IMPORTED_MODULE_2__["BackgroundStyle"], {
      background: props.attributes.background,
      onUpdate: function onUpdate(change) {
        return props.setAttributes({
          background: change
        });
      }
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["PanelBody"], {
      title: "Mobile Order"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["PanelRow"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["__experimentalNumberControl"], {
      isShiftStepEnabled: false,
      onChange: function onChange(change) {
        return props.setAttributes({
          order: change
        });
      },
      step: 1,
      value: props.attributes.order
    })))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_library_background_style__WEBPACK_IMPORTED_MODULE_2__["BackgroundStyle"].Render, {
      className: props.className,
      background: props.attributes.background,
      style: style
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: 'inner__content',
      style: innerStyle
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InnerBlocks, null))))];
  },
  save: function save(props) {
    var style = {};
    var innerStyle = {};
    var alignmentary = props.attributes.alignment.split(" ");
    innerStyle.maxWidth = props.attributes.contentWidth;
    innerStyle.width = '100%';

    switch (alignmentary[0]) {
      case 'top':
        style.justifyContent = 'flex-start';
        break;

      case 'bottom':
        style.justifyContent = 'flex-end';
        break;

      case 'center':
      default:
        style.justifyContent = 'center';
        break;
    }

    switch (alignmentary[1]) {
      case 'left':
        style.alignItems = 'flex-start';
        break;

      case 'right':
        style.alignItems = 'flex-end';
        break;

      case 'center':
      default:
        style.alignItems = 'center';
        break;
    }

    if (props.attributes.box) {
      innerStyle.paddingLeft = props.attributes.box.left;
      innerStyle.paddingRight = props.attributes.box.right;
      innerStyle.paddingTop = props.attributes.box.top;
      innerStyle.paddingBottom = props.attributes.box.bottom;
    }

    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_library_background_style__WEBPACK_IMPORTED_MODULE_2__["BackgroundStyle"].Render, {
      className: props.attributes.fullwidth + (props.attributes.order != 0 ? ' mobile-order-' + props.attributes.order : ''),
      background: props.attributes.background,
      style: style
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: 'inner__content',
      style: innerStyle
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InnerBlocks.Content, null)));
  }
};

/***/ }),

/***/ "./src/layout/layout-fiftyfifty-outer.js":
/*!***********************************************!*\
  !*** ./src/layout/layout-fiftyfifty-outer.js ***!
  \***********************************************/
/*! exports provided: name, settings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "name", function() { return name; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "settings", function() { return settings; });
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _library_background_style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../library/background-style */ "./src/library/background-style.js");




var Fragment = wp.element.Fragment;






var name = 'layout-fiftyfifty-outer';
var settings = {
  /**
   * This is the display title for your block, which can be translated with `i18n` functions.
   * The block inserter will show this name.
   */
  title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Content Container', 'octaviazydel'),

  /**
   * This is a short description for your block, can be translated with `i18n` functions.
   * It will be shown in the Block Tab in the Settings Sidebar.
   */
  description: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Content Container', 'octaviazydel'),
  getEditWrapperProps: function getEditWrapperProps(props) {
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
    html: false
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
  edit: function edit(props) {
    var className = props.className,
        clientId = props.clientId;

    var _useDispatch = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_5__["useDispatch"])("core/block-editor"),
        replaceInnerBlocks = _useDispatch.replaceInnerBlocks;

    var _useSelect = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_5__["useSelect"])(function (select) {
      return {
        inner_blocks: select("core/block-editor").getBlocks(clientId)
      };
    }),
        inner_blocks = _useSelect.inner_blocks;

    var style = {};
    var width2 = 100 - props.attributes.width;
    var grid = props.attributes.width.toString() + '% ' + width2.toString() + '%';
    var classlist = props.attributes.fullwidth + (props.attributes.hasBottomBorder ? ' has-bottom-border' : '');
    style.minHeight = props.attributes.height == '' ? props.attributes.fixedheight + 'px' : props.attributes.height;
    style.height = 'max-content';
    style.gridTemplateColumns = grid;

    if (props.attributes.box) {
      style.paddingLeft = props.attributes.box.left;
      style.paddingRight = props.attributes.box.right;
      style.paddingTop = props.attributes.box.top;
      style.paddingBottom = props.attributes.box.bottom;
    }

    return [Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(Fragment, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["InspectorControls"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["PanelBody"], {
      title: "Panel Split"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["PanelRow"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("h2", null, props.attributes.width, "/", 100 - props.attributes.width)), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["PanelRow"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["RangeControl"], {
      label: "Percent",
      value: props.attributes.width,
      onChange: function onChange(change) {
        inner_blocks.forEach(function (block, index) {
          if (index % 2 == 0) {
            inner_blocks[index].attributes.width = change;
          } else {
            inner_blocks[index].attributes.width = 100 - change;
          }
        });
        var inner_blocks_new = inner_blocks;

        if (inner_blocks.length < 2 && change != 100) {
          inner_blocks_new = [].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(inner_blocks), [Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_6__["createBlock"])("octaviazydel/layout-fiftyfifty-inner")]);
        } else if (inner_blocks.length > 1 && change == 100) {
          inner_blocks_new = inner_blocks.slice(0, 1);
        }

        replaceInnerBlocks(clientId, inner_blocks_new, false);
        props.setAttributes({
          width: change
        });
      },
      min: 0,
      max: 100
    }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["PanelBody"], {
      title: "Inner Padding"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["PanelRow"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["__experimentalBoxControl"], {
      values: props.attributes.box,
      onChange: function onChange(change) {
        console.log(change);
        props.setAttributes({
          box: change
        });
      }
    }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["PanelBody"], {
      title: "Section Height"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["PanelRow"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["SelectControl"], {
      label: "Section Height",
      value: props.attributes.height,
      options: [{
        label: 'Fixed',
        value: ''
      }, {
        label: 'Auto',
        value: 'auto'
      }, {
        label: '100%',
        value: '100vh'
      }, {
        label: '80%',
        value: '80vh'
      }, {
        label: '75%',
        value: '75vh'
      }, {
        label: '66%',
        value: '66.666vh'
      }, {
        label: '50%',
        value: '50vh'
      }, {
        label: '33%',
        value: '33.333vh'
      }, {
        label: '25%',
        value: '25vh'
      }],
      onChange: function onChange(change) {
        return props.setAttributes({
          height: change
        });
      }
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["PanelRow"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["TextControl"], {
      label: "Fixed Height in pixels",
      value: props.attributes.fixedheight,
      onChange: function onChange(change) {
        return props.setAttributes({
          fixedheight: change
        });
      }
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["PanelRow"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["SelectControl"], {
      label: "Section Width",
      value: props.attributes.fullwidth,
      options: [{
        label: 'Content Width',
        value: 'content-width'
      }, {
        label: 'Full Width',
        value: 'alignfull'
      }, {
        label: 'Content Full Width',
        value: 'content-alignfull alignfull'
      }],
      onChange: function onChange(change) {
        return props.setAttributes({
          fullwidth: change
        });
      }
    }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_library_background_style__WEBPACK_IMPORTED_MODULE_7__["BackgroundStyle"], {
      background: props.attributes.background,
      onUpdate: function onUpdate(change) {
        return props.setAttributes({
          background: change
        });
      }
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["PanelBody"], {
      title: "Bottom Border"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["PanelRow"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("h2", null, "Bottom Border"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["FormToggle"], {
      label: 'Bottom Border',
      checked: props.attributes.hasBottomBorder,
      onChange: function onChange(change) {
        return props.setAttributes({
          hasBottomBorder: !props.attributes.hasBottomBorder
        });
      }
    })))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_library_background_style__WEBPACK_IMPORTED_MODULE_7__["BackgroundStyle"].Render, {
      className: props.className,
      background: props.attributes.background
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      className: "fifityfifty__inner",
      style: style
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["InnerBlocks"], {
      template: [['octaviazydel/layout-fiftyfifty-inner', {
        width: props.attributes.width
      }]],
      allowedBlocks: ['octaviazydel/layout-fiftyfifty-inner']
    }))))];
  },
  save: function save(props) {
    var style = {};
    var width2 = 100 - props.attributes.width;
    var grid = props.attributes.width.toString() + '% ' + width2.toString() + '%';
    var classlist = props.attributes.fullwidth + (props.attributes.hasBottomBorder ? ' has-bottom-border' : '');
    style.minHeight = props.attributes.height == '' ? props.attributes.fixedheight + 'px' : props.attributes.height;
    style.height = 'max-content';
    style.gridTemplateColumns = grid;

    if (props.attributes.box) {
      style.paddingLeft = props.attributes.box.left;
      style.paddingRight = props.attributes.box.right;
      style.paddingTop = props.attributes.box.top;
      style.paddingBottom = props.attributes.box.bottom;
    }

    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_library_background_style__WEBPACK_IMPORTED_MODULE_7__["BackgroundStyle"].Render, {
      className: classlist,
      background: props.attributes.background
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      className: "fifityfifty__inner",
      style: style
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["InnerBlocks"].Content, null)));
  }
};

/***/ }),

/***/ "./src/layout/layout-lozengenav-inner.js":
/*!***********************************************!*\
  !*** ./src/layout/layout-lozengenav-inner.js ***!
  \***********************************************/
/*! exports provided: name, settings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "name", function() { return name; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "settings", function() { return settings; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _library_background_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../library/background-style */ "./src/library/background-style.js");

var registerBlockType = wp.blocks.registerBlockType;
var __ = wp.i18n.__;
var Fragment = wp.element.Fragment;
var _wp$blockEditor = wp.blockEditor,
    RichText = _wp$blockEditor.RichText,
    InspectorControls = _wp$blockEditor.InspectorControls,
    InnerBlocks = _wp$blockEditor.InnerBlocks;



var name = 'layout-lozengenav-inner';
var settings = {
  title: __('Lozenge Nav Item', 'octaviazydel'),
  // Block title.
  parent: ['octaviazydel/layout-lozengenav-outer'],
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
  edit: function edit(props) {
    var colors = wp.data.select('core/block-editor').getSettings().colors;
    return [Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Fragment, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InspectorControls, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["Panel"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["PanelBody"], {
      title: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Fragment, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", null, "Nav Color"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["ColorIndicator"], {
        colorValue: props.attributes.color
      }))
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", null, "Select a Color"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["ColorIndicator"], {
      colorValue: props.attributes.color
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["ColorPalette"], {
      colors: colors,
      value: props.attributes.color,
      onChange: function onChange(color) {
        return props.setAttributes({
          color: color
        });
      }
    }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["Panel"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["PanelBody"], {
      title: 'Link URL'
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["TextControl"], {
      label: "Link URL",
      value: props.attributes.url,
      onChange: function onChange(url) {
        return props.setAttributes({
          linkurl: url
        });
      }
    })))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: props.className,
      style: {
        color: props.attributes.color,
        border: '1px solid currentColor',
        borderRadius: '1000px',
        paddingInline: '2rem'
      }
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: 'tab__header'
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText, {
      className: '',
      tagName: "p",
      onChange: function onChange(text) {
        return props.setAttributes({
          title: text
        });
      },
      value: props.attributes.title,
      placeholder: "Name"
    }))))];
  },
  save: function save(props) {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "lozenge__nav__item",
      style: {
        background: props.attributes.color
      }
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("a", {
      href: props.attributes.url,
      style: {
        color: props.attributes.color
      }
    }, props.attributes.title));
  }
};

/***/ }),

/***/ "./src/layout/layout-lozengenav-outer.js":
/*!***********************************************!*\
  !*** ./src/layout/layout-lozengenav-outer.js ***!
  \***********************************************/
/*! exports provided: name, settings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "name", function() { return name; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "settings", function() { return settings; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _library_background_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../library/background-style */ "./src/library/background-style.js");



var Fragment = wp.element.Fragment;






var name = 'layout-lozengenav-outer';
var settings = {
  /**
   * This is the display title for your block, which can be translated with `i18n` functions.
   * The block inserter will show this name.
   */
  title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Lozenge Navigation', 'octaviazydel'),

  /**
   * This is a short description for your block, can be translated with `i18n` functions.
   * It will be shown in the Block Tab in the Settings Sidebar.
   */
  description: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Content Container', 'octaviazydel'),
  getEditWrapperProps: function getEditWrapperProps(props) {
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
    html: false
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
  edit: function edit(props) {
    return [Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Fragment, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["InspectorControls"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_library_background_style__WEBPACK_IMPORTED_MODULE_6__["BackgroundStyle"], {
      background: props.attributes.background,
      onUpdate: function onUpdate(change) {
        return props.setAttributes({
          background: change
        });
      }
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: props.className + ' split__header'
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_library_background_style__WEBPACK_IMPORTED_MODULE_6__["BackgroundStyle"].Render, {
      className: 'section__pattern',
      background: props.attributes.background
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["RichText"], {
      tagName: "h2",
      onChange: function onChange(text) {
        return props.setAttributes({
          topText: text
        });
      },
      value: props.attributes.topText,
      placeholder: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "section__center"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "lozenge__nav"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["InnerBlocks"], {
      template: [['octaviazydel/layout-lozengenav-inner', {}]],
      allowedBlocks: ['octaviazydel/layout-lozengenav-inner']
    }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      class: "section__solid"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["RichText"], {
      tagName: "h3",
      onChange: function onChange(text) {
        return props.setAttributes({
          bottomtext: text
        });
      },
      value: props.attributes.bottomtext,
      placeholder: "...explore..."
    }))))];
  },
  save: function save(props) {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: props.className + ' split__header'
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_library_background_style__WEBPACK_IMPORTED_MODULE_6__["BackgroundStyle"].Render, {
      className: 'section__pattern',
      background: props.attributes.background
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["RichText"].Content, {
      tagName: "h2",
      value: props.attributes.topText
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "section__center"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "lozenge__nav"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["InnerBlocks"].Content, null))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      class: "section__solid",
      style: {
        background: 'white'
      }
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["RichText"].Content, {
      tagName: "h3",
      value: props.attributes.bottomtext
    })));
  }
};

/***/ }),

/***/ "./src/layout/layout-values-inner.js":
/*!*******************************************!*\
  !*** ./src/layout/layout-values-inner.js ***!
  \*******************************************/
/*! exports provided: name, settings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "name", function() { return name; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "settings", function() { return settings; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _library_background_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../library/background-style */ "./src/library/background-style.js");

var registerBlockType = wp.blocks.registerBlockType;
var __ = wp.i18n.__;
var Fragment = wp.element.Fragment;
var _wp$blockEditor = wp.blockEditor,
    RichText = _wp$blockEditor.RichText,
    InspectorControls = _wp$blockEditor.InspectorControls,
    InnerBlocks = _wp$blockEditor.InnerBlocks;



var name = 'layout-values-inner';
var settings = {
  title: __('Values Item', 'octaviazydel'),
  // Block title.
  parent: ['octaviazydel/layout-values-outer'],
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
  edit: function edit(props) {
    var colors = wp.data.select('core/block-editor').getSettings().colors;
    return [Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Fragment, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InspectorControls, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["Panel"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["PanelBody"], {
      title: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Fragment, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", null, "Nav Color"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["ColorIndicator"], {
        colorValue: props.attributes.color
      }))
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", null, "Select a Color"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["ColorIndicator"], {
      colorValue: props.attributes.color
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["ColorPalette"], {
      colors: colors,
      value: props.attributes.color,
      onChange: function onChange(color) {
        return props.setAttributes({
          color: color
        });
      }
    }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["Panel"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["PanelBody"], {
      title: 'Radius'
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["TextControl"], {
      label: "Radius in pixels",
      value: props.attributes.radius,
      onChange: function onChange(radius) {
        return props.setAttributes({
          radius: radius
        });
      }
    })))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: props.className,
      style: {
        color: props.attributes.color,
        border: '1px solid currentColor',
        borderRadius: '1000px',
        paddingInline: '2rem'
      }
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText, {
      className: '',
      tagName: "h3",
      onChange: function onChange(text) {
        return props.setAttributes({
          title: text
        });
      },
      value: props.attributes.title,
      placeholder: "Title"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText, {
      className: '',
      tagName: "p",
      onChange: function onChange(text) {
        return props.setAttributes({
          text: text
        });
      },
      value: props.attributes.text,
      placeholder: "The shortest distance between two points is achieved by stripping away the unessential and staying close to the solution."
    })))];
  },
  save: function save(props) {
    var rand = Math.random().toString(16).substr(2, 8);
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Fragment, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("input", {
      type: "radio",
      name: "menu_item",
      value: "",
      class: "menu_item",
      "data-radius": props.attributes.radius,
      "data-color": props.attributes.color,
      "data-target": rand
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      id: rand,
      className: "menu_content"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText.Content, {
      tagName: "h3",
      value: props.attributes.title
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText.Content, {
      tagName: "p",
      value: props.attributes.text
    })));
  }
};

/***/ }),

/***/ "./src/layout/layout-values-outer.js":
/*!*******************************************!*\
  !*** ./src/layout/layout-values-outer.js ***!
  \*******************************************/
/*! exports provided: name, settings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "name", function() { return name; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "settings", function() { return settings; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _library_background_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../library/background-style */ "./src/library/background-style.js");



var Fragment = wp.element.Fragment;






var name = 'layout-values-outer';
var settings = {
  /**
   * This is the display title for your block, which can be translated with `i18n` functions.
   * The block inserter will show this name.
   */
  title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Values BLock', 'octaviazydel'),

  /**
   * This is a short description for your block, can be translated with `i18n` functions.
   * It will be shown in the Block Tab in the Settings Sidebar.
   */
  description: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Values Block', 'octaviazydel'),
  getEditWrapperProps: function getEditWrapperProps(props) {
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
    html: false
  },
  attributes: {
    background: {
      type: 'object',
      default: {}
    }
  },
  edit: function edit(props) {
    return [Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Fragment, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["InspectorControls"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_library_background_style__WEBPACK_IMPORTED_MODULE_6__["BackgroundStyle"], {
      background: props.attributes.background,
      onUpdate: function onUpdate(change) {
        return props.setAttributes({
          background: change
        });
      }
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_library_background_style__WEBPACK_IMPORTED_MODULE_6__["BackgroundStyle"].Render, {
      background: props.attributes.background
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      id: "values_menu"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["InnerBlocks"], {
      template: [['octaviazydel/layout-values-inner', {}]],
      allowedBlocks: ['octaviazydel/layout-values-inner']
    }))))];
  },
  save: function save(props) {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_library_background_style__WEBPACK_IMPORTED_MODULE_6__["BackgroundStyle"].Render, {
      className: 'section__pattern',
      background: props.attributes.background
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      id: "values_menu"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["InnerBlocks"].Content, null)));
  }
};

/***/ }),

/***/ "./src/library/background-style.js":
/*!*****************************************!*\
  !*** ./src/library/background-style.js ***!
  \*****************************************/
/*! exports provided: BackgroundStyle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BackgroundStyle", function() { return BackgroundStyle; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_11__);









function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }



var _wp$blockEditor = wp.blockEditor,
    PanelColorSettings = _wp$blockEditor.PanelColorSettings,
    withColors = _wp$blockEditor.withColors,
    getColorClassName = _wp$blockEditor.getColorClassName,
    MediaUpload = _wp$blockEditor.MediaUpload,
    MediaUploadCheck = _wp$blockEditor.MediaUploadCheck;






var Fragment = wp.element.Fragment;
var Component = wp.element.Component;
var ALLOWED_MEDIA_TYPES = ['image'];
var ALLOWED_VIDEO_TYPES = ['video'];

var BackgroundStyle = /*#__PURE__*/function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(BackgroundStyle, _Component);

  var _super = _createSuper(BackgroundStyle);

  function BackgroundStyle(props) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, BackgroundStyle);

    _this = _super.apply(this, arguments);
    _this.props = props;
    _this.onUpdate = props.onUpdate;
    _this.setImage = _this.setImage.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this));
    _this.setVideo = _this.setVideo.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this));
    _this.setAlignment = _this.setAlignment.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this));
    _this.setSize = _this.setSize.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this));
    _this.setFixedDimension = _this.setFixedDimension.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this));
    _this.setBackgroundType = _this.setBackgroundType.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this));
    _this.setDimension = _this.setDimension.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this));
    _this.setDimensionPixels = _this.setDimensionPixels.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this));
    _this.setFocalPoint = _this.setFocalPoint.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this));
    _this.setBackgroundColor = _this.setBackgroundColor.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this));
    _this.setBackgroundGradient = _this.setBackgroundGradient.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this));
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(BackgroundStyle, [{
    key: "setImage",
    value: function setImage(x) {
      this.props.background = _objectSpread(_objectSpread({}, this.props.background), {}, {
        image: x
      });
      this.onUpdate(this.props.background);
    }
  }, {
    key: "setVideo",
    value: function setVideo(x) {
      this.props.background = _objectSpread(_objectSpread({}, this.props.background), {}, {
        video: x
      });
      this.onUpdate(this.props.background);
    }
  }, {
    key: "setAlignment",
    value: function setAlignment(x) {
      this.props.background = _objectSpread(_objectSpread({}, this.props.background), {}, {
        alignment: x
      });
      this.onUpdate(this.props.background);
    }
  }, {
    key: "setSize",
    value: function setSize(x) {
      this.props.background = _objectSpread(_objectSpread({}, this.props.background), {}, {
        size: x
      });
      this.onUpdate(this.props.background);
    }
  }, {
    key: "setFixedDimension",
    value: function setFixedDimension(x) {
      this.props.background = _objectSpread(_objectSpread({}, this.props.background), {}, {
        fixedDimension: !this.props.background.fixedDimension
      });
      this.onUpdate(this.props.background);
    }
  }, {
    key: "setBackgroundType",
    value: function setBackgroundType(x) {
      this.props.background = _objectSpread(_objectSpread({}, this.props.background), {}, {
        backgroundType: x,
        image: false,
        video: false
      });
      this.onUpdate(this.props.background);
    }
  }, {
    key: "setDimension",
    value: function setDimension(x) {
      this.props.background = _objectSpread(_objectSpread({}, this.props.background), {}, {
        dimension: x
      });
      this.onUpdate(this.props.background);
    }
  }, {
    key: "setDimensionPixels",
    value: function setDimensionPixels(x) {
      this.props.background = _objectSpread(_objectSpread({}, this.props.background), {}, {
        dimensionPixels: x
      });
      this.onUpdate(this.props.background);
    }
  }, {
    key: "setFocalPoint",
    value: function setFocalPoint(x) {
      this.props.background = _objectSpread(_objectSpread({}, this.props.background), {}, {
        focalPoint: x
      });
      this.onUpdate(this.props.background);
    }
  }, {
    key: "setBackgroundColor",
    value: function setBackgroundColor(x) {
      if (typeof x == 'undefined') x = false;
      this.props.background = _objectSpread(_objectSpread({}, this.props.background), {}, {
        backgroundColor: x
      });
      this.onUpdate(this.props.background);
    }
  }, {
    key: "setBackgroundGradient",
    value: function setBackgroundGradient(x) {
      if (typeof x == 'undefined') x = false;
      this.props.background = _objectSpread(_objectSpread({}, this.props.background), {}, {
        backgroundGradient: x
      });
      this.onUpdate(this.props.background);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var gradients = wp.data.select('core/block-editor').getSettings().gradients;
      var colors = wp.data.select('core/block-editor').getSettings().colors;
      var _this$props$backgroun = this.props.background,
          _this$props$backgroun2 = _this$props$backgroun.image,
          image = _this$props$backgroun2 === void 0 ? false : _this$props$backgroun2,
          _this$props$backgroun3 = _this$props$backgroun.video,
          video = _this$props$backgroun3 === void 0 ? false : _this$props$backgroun3,
          _this$props$backgroun4 = _this$props$backgroun.alignment,
          alignment = _this$props$backgroun4 === void 0 ? 'center center' : _this$props$backgroun4,
          _this$props$backgroun5 = _this$props$backgroun.size,
          size = _this$props$backgroun5 === void 0 ? 'cover' : _this$props$backgroun5,
          _this$props$backgroun6 = _this$props$backgroun.fixedDimension,
          fixedDimension = _this$props$backgroun6 === void 0 ? false : _this$props$backgroun6,
          _this$props$backgroun7 = _this$props$backgroun.backgroundType,
          backgroundType = _this$props$backgroun7 === void 0 ? 'image' : _this$props$backgroun7,
          _this$props$backgroun8 = _this$props$backgroun.dimension,
          dimension = _this$props$backgroun8 === void 0 ? 50 : _this$props$backgroun8,
          _this$props$backgroun9 = _this$props$backgroun.dimensionPixels,
          dimensionPixels = _this$props$backgroun9 === void 0 ? 200 : _this$props$backgroun9,
          _this$props$backgroun10 = _this$props$backgroun.focalPoint,
          focalPoint = _this$props$backgroun10 === void 0 ? {
        x: '.5',
        y: '.5'
      } : _this$props$backgroun10,
          _this$props$backgroun11 = _this$props$backgroun.backgroundColor,
          backgroundColor = _this$props$backgroun11 === void 0 ? '' : _this$props$backgroun11,
          _this$props$backgroun12 = _this$props$backgroun.backgroundGradient,
          backgroundGradient = _this$props$backgroun12 === void 0 ? '' : _this$props$backgroun12;
      console.log(gradients, colors);
      return [Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__["Panel"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__["PanelBody"], {
        title: "Backgroud Settings"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_10__["__experimentalPanelColorGradientSettings"], {
        title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__["__"])("Background Color"),
        initialOpen: false,
        settings: [{
          colorValue: backgroundColor,
          gradientValue: backgroundGradient,
          colors: colors,
          gradients: gradients,
          label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__["__"])("Choose a color or a gradient"),
          onColorChange: this.setBackgroundColor,
          onGradientChange: this.setBackgroundGradient
        }]
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__["PanelBody"], {
        title: "Background Image",
        initialOpen: false
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__["PanelRow"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])("h2", null, "Background Type")), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__["PanelRow"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__["__experimentalRadioGroup"], {
        label: "Action",
        onChange: this.setBackgroundType,
        checked: backgroundType
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__["__experimentalRadio"], {
        value: "image"
      }, "Image"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__["__experimentalRadio"], {
        value: "video"
      }, "Video"))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(MediaUploadCheck, null, backgroundType == 'image' ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(MediaUpload, {
        allowedTypes: ALLOWED_MEDIA_TYPES,
        multiple: false,
        value: image ? image.id : '',
        onSelect: this.setImage,
        render: function render(_ref) {
          var open = _ref.open;
          return image ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(Fragment, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__["PanelRow"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])("img", {
            src: image.url,
            dimension: image.dimension / 2
          })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__["PanelRow"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__["Button"], {
            onClick: function onClick() {
              return _this2.setImage('');
            },
            className: "button is-small"
          }, "Remove Image"))) : Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__["PanelRow"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__["Button"], {
            onClick: open,
            className: "button"
          }, "Upload Image"));
        }
      }) : Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(MediaUpload, {
        allowedTypes: ['video'],
        multiple: false,
        value: video ? video.id : '',
        accept: "video/*",
        onSelect: this.setVideo,
        render: function render(_ref2) {
          var open = _ref2.open;
          return video ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(Fragment, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__["PanelRow"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])("video", {
            src: video.url
          })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__["PanelRow"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__["Button"], {
            onClick: function onClick() {
              return _this2.setVideo('');
            },
            className: "button is-small"
          }, "Remove Video"))) : Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__["PanelRow"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__["Button"], {
            onClick: open,
            className: "button"
          }, "Upload Video"));
        }
      })), image || video ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(Fragment, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__["PanelRow"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])("h2", null, "Background ", image ? 'Image' : 'Video', " Alignment")), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__["PanelRow"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__["__experimentalAlignmentMatrixControl"], {
        value: alignment,
        onChange: this.setAlignment
      })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__["PanelRow"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])("h2", null, "Background Size")), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__["PanelRow"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__["__experimentalRadioGroup"], {
        label: "Action",
        onChange: this.setSize,
        checked: size
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__["__experimentalRadio"], {
        value: "cover"
      }, "Cover"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__["__experimentalRadio"], {
        value: "contain"
      }, "Contain"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__["__experimentalRadio"], {
        value: "width"
      }, "W"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__["__experimentalRadio"], {
        value: "height"
      }, "H"))), size == 'cover' && image ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__["PanelRow"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__["FocalPointPicker"], {
        label: "Image Focal Point",
        url: image ? image.url : false,
        dimensions: {
          dimension: 'auto',
          height: 'auto'
        },
        value: focalPoint,
        onChange: this.setFocalPoint
      })) : '', size == 'width' || size == 'height' ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(Fragment, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__["PanelRow"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])("h2", null, "Fixed Dimension"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__["FormToggle"], {
        label: 'Dimension',
        help: fixedDimension ? 'Fixed' : 'Percent',
        checked: fixedDimension,
        onChange: this.setFixedDimension
      })), fixedDimension ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__["PanelRow"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__["__experimentalNumberControl"], {
        label: "Pixels",
        value: dimensionPixels,
        onChange: this.setDimensionPixels
      })) : Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__["PanelRow"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__["RangeControl"], {
        label: "Percent",
        value: dimension,
        onChange: this.setDimension,
        min: 0,
        max: 100
      }))) : '') : '')))];
    }
  }]);

  return BackgroundStyle;
}(Component);
/**
 * Internal dependencies
 */


var BackgroundStyleRender = function BackgroundStyleRender(_ref3, ref) {
  var className = _ref3.className,
      children = _ref3.children,
      background = _ref3.background,
      _ref3$style = _ref3.style,
      style = _ref3$style === void 0 ? {} : _ref3$style,
      _ref3$vidstyle = _ref3.vidstyle,
      vidstyle = _ref3$vidstyle === void 0 ? {} : _ref3$vidstyle;
  var _background$image = background.image,
      image = _background$image === void 0 ? false : _background$image,
      _background$video = background.video,
      video = _background$video === void 0 ? false : _background$video,
      _background$alignment = background.alignment,
      alignment = _background$alignment === void 0 ? 'center center' : _background$alignment,
      _background$size = background.size,
      size = _background$size === void 0 ? 'cover' : _background$size,
      _background$fixedDime = background.fixedDimension,
      fixedDimension = _background$fixedDime === void 0 ? false : _background$fixedDime,
      _background$backgroun = background.backgroundType,
      backgroundType = _background$backgroun === void 0 ? 'image' : _background$backgroun,
      _background$dimension = background.dimension,
      dimension = _background$dimension === void 0 ? 50 : _background$dimension,
      _background$dimension2 = background.dimensionPixels,
      dimensionPixels = _background$dimension2 === void 0 ? 200 : _background$dimension2,
      _background$focalPoin = background.focalPoint,
      focalPoint = _background$focalPoin === void 0 ? {
    x: '.5',
    y: '.5'
  } : _background$focalPoin,
      _background$backgroun2 = background.backgroundColor,
      backgroundColor = _background$backgroun2 === void 0 ? '' : _background$backgroun2,
      backgroundGradient = background.backgroundGradient;
  var classNames = classnames__WEBPACK_IMPORTED_MODULE_11___default()(className, 'custom__background');
  style.backgroundImage = backgroundGradient;

  if (image) {
    var _image$sizes, _image$sizes2, _image$sizes2$medium;

    var xl = typeof (image === null || image === void 0 ? void 0 : (_image$sizes = image.sizes) === null || _image$sizes === void 0 ? void 0 : _image$sizes.large) !== 'undefined' ? image.sizes.large.url : image.url; //style.background = 'url('+image.url+')';

    style.backgroundImage = '-webkit-image-set(url(' + (typeof ((_image$sizes2 = image.sizes) === null || _image$sizes2 === void 0 ? void 0 : (_image$sizes2$medium = _image$sizes2.medium) === null || _image$sizes2$medium === void 0 ? void 0 : _image$sizes2$medium.url) !== 'undefined' ? image.sizes.medium.url : image.url) + ') 1x, url(' + xl + ') 3x)' + (style.backgroundImage ? ', ' + style.backgroundImage : ''); // :

    style.backgroundRepeat = 'no-repeat';
    style.backgroundPosition = alignment;
    style.backgroundSize = size != 'width' && size != 'height' ? size : fixedDimension ? size == 'width' ? dimensionPixels + 'px auto' : 'auto ' + dimensionPixels + 'px' : size == 'width' ? dimension + '% auto' : 'auto ' + dimension + '%';
  }

  if (video) {
    vidstyle.objectPosition = alignment;
    vidstyle.objectFit = size != 'width' && size != 'height' ? size : fixedDimension ? size == 'width' ? dimensionPixels + 'px auto' : 'auto ' + dimensionPixels + 'px' : size == 'width' ? dimension + '% auto' : 'auto ' + dimension + '%';
    vidstyle.width = '100%';
    vidstyle.height = '100%';
  }

  style.backgroundColor = backgroundColor ? backgroundColor : 'transparent';
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])("div", {
    className: classNames,
    ref: ref,
    style: style
  }, video ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])("video", {
    style: vidstyle,
    src: video.url,
    playsinline: true,
    autoplay: true,
    muted: true,
    loop: true
  }) : '', children);
};

BackgroundStyle.Render = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["forwardRef"])(BackgroundStyleRender);


/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["blockEditor"]; }());

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["blocks"]; }());

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["components"]; }());

/***/ }),

/***/ "@wordpress/data":
/*!******************************!*\
  !*** external ["wp","data"] ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["data"]; }());

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["element"]; }());

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["i18n"]; }());

/***/ })

/******/ });
//# sourceMappingURL=index.js.map