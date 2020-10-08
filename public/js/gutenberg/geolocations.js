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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/script/gutenberg.js");
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

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithHoles.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

module.exports = _arrayWithHoles;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray */ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js");

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return arrayLikeToArray(arr);
}

module.exports = _arrayWithoutHoles;

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

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/extends.js":
/*!********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/extends.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _extends() {
  module.exports = _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArray.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArray.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}

module.exports = _iterableToArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

module.exports = _iterableToArrayLimit;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableRest.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableRest.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableRest;

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

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/slicedToArray.js":
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/slicedToArray.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithHoles = __webpack_require__(/*! ./arrayWithHoles */ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js");

var iterableToArrayLimit = __webpack_require__(/*! ./iterableToArrayLimit */ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js");

var unsupportedIterableToArray = __webpack_require__(/*! ./unsupportedIterableToArray */ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js");

var nonIterableRest = __webpack_require__(/*! ./nonIterableRest */ "./node_modules/@babel/runtime/helpers/nonIterableRest.js");

function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || unsupportedIterableToArray(arr, i) || nonIterableRest();
}

module.exports = _slicedToArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/toConsumableArray.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toConsumableArray.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithoutHoles = __webpack_require__(/*! ./arrayWithoutHoles */ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js");

var iterableToArray = __webpack_require__(/*! ./iterableToArray */ "./node_modules/@babel/runtime/helpers/iterableToArray.js");

var unsupportedIterableToArray = __webpack_require__(/*! ./unsupportedIterableToArray */ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js");

var nonIterableSpread = __webpack_require__(/*! ./nonIterableSpread */ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js");

function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || unsupportedIterableToArray(arr) || nonIterableSpread();
}

module.exports = _toConsumableArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray */ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js");

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
}

module.exports = _unsupportedIterableToArray;

/***/ }),

/***/ "./src/script/gutenberg.js":
/*!*********************************!*\
  !*** ./src/script/gutenberg.js ***!
  \*********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _gutenberg_features_document_panels_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gutenberg/features/document-panels.js */ "./src/script/gutenberg/features/document-panels.js");
/* harmony import */ var _gutenberg_features_blocks_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gutenberg/features/blocks.js */ "./src/script/gutenberg/features/blocks.js");



/***/ }),

/***/ "./src/script/gutenberg/blocks/AddressBlock.js":
/*!*****************************************************!*\
  !*** ./src/script/gutenberg/blocks/AddressBlock.js ***!
  \*****************************************************/
/*! exports provided: blockName */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blockName", function() { return blockName; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_AddressBlock__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/AddressBlock */ "./src/script/gutenberg/components/AddressBlock.js");



var blockName = 'geolocations/address';
var block = Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__["registerBlockType"])(blockName, {
  title: 'Address',
  description: 'Place a map',
  category: 'embed',
  icon: 'location-alt',
  supports: {
    align: false,
    customClassName: false,
    html: false
  },
  edit: function edit(args) {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_components_AddressBlock__WEBPACK_IMPORTED_MODULE_2__["default"], args);
  }
});

/***/ }),

/***/ "./src/script/gutenberg/components/AddressBlock.js":
/*!*********************************************************!*\
  !*** ./src/script/gutenberg/components/AddressBlock.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wordpress_server_side_render__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/server-side-render */ "@wordpress/server-side-render");
/* harmony import */ var _wordpress_server_side_render__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_server_side_render__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _blocks_AddressBlock__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../blocks/AddressBlock */ "./src/script/gutenberg/blocks/AddressBlock.js");






function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }







var Highlight = function Highlight(_ref) {
  var string = _ref.string,
      isHighlighted = _ref.isHighlighted;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__["Fragment"], null, isHighlighted ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__["createElement"])("strong", null, string) : string);
};

var Suggestion = function Suggestion(_ref2) {
  var ID = _ref2.ID,
      address = _ref2.address,
      post_title = _ref2.post_title,
      highlightID = _ref2.highlightID,
      highlightTitle = _ref2.highlightTitle,
      highlightAddress = _ref2.highlightAddress,
      onClick = _ref2.onClick;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__["createElement"])("div", {
    onClick: onClick,
    style: {
      borderBottom: "1px solid #efefef",
      padding: "10px 0"
    }
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__["createElement"])("small", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__["createElement"])(Highlight, {
    string: ID,
    isHighlighted: highlightID
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__["createElement"])("br", null), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__["createElement"])(Highlight, {
    string: post_title,
    isHighlighted: highlightTitle
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__["createElement"])("br", null), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__["createElement"])("i", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__["createElement"])(Highlight, {
    string: address,
    isHighlighted: highlightAddress
  })));
};

var SelectedLocation = function SelectedLocation(_ref3) {
  var ID = _ref3.ID,
      address = _ref3.address,
      post_title = _ref3.post_title,
      onRemove = _ref3.onRemove;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__["createElement"])("div", {
    style: {
      border: "1px solid #efefef",
      borderColor: "var(--wp-admin-theme-color)",
      padding: 10,
      marginLeft: -10,
      marginRight: -10,
      marginBottom: 20,
      position: "relative"
    }
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__["createElement"])("small", null, ID), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__["createElement"])("br", null), post_title, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__["createElement"])("br", null), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__["createElement"])("i", null, address), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__["createElement"])("span", {
    style: {
      position: "absolute",
      right: 10,
      top: "50%",
      marginTop: -10,
      cursor: "pointer"
    },
    onClick: onRemove
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["Dashicon"], {
    icon: "trash"
  })));
};

var isPartOf = function isPartOf(value, part) {
  return value.toLowerCase().indexOf(part.toLowerCase()) >= 0;
};

var AddressInspectorControls = function AddressInspectorControls(_ref4) {
  var attributes = _ref4.attributes,
      setAttributes = _ref4.setAttributes;
  var _Geolocations = Geolocations,
      i18n = _Geolocations.i18n,
      locations = _Geolocations.locations;
  var _attributes$single = attributes.single,
      single = _attributes$single === void 0 ? false : _attributes$single,
      post_id = attributes.post_id,
      _attributes$taxonomy = attributes.taxonomy,
      taxonomy = _attributes$taxonomy === void 0 ? "" : _attributes$taxonomy,
      _attributes$terms = attributes.terms,
      terms = _attributes$terms === void 0 ? "" : _attributes$terms;

  var setSingle = function setSingle(single) {
    return setAttributes({
      single: single
    });
  };

  var setTerms = function setTerms(terms) {
    return setAttributes({
      terms: terms
    });
  };

  var setTaxonomy = function setTaxonomy(taxonomy) {
    return setAttributes({
      taxonomy: taxonomy
    });
  };

  var setPostId = function setPostId(post_id) {
    return setAttributes({
      post_id: post_id
    });
  };

  var _useState = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__["useState"])(""),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_3___default()(_useState, 2),
      address = _useState2[0],
      setAddress = _useState2[1];

  var _useState3 = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__["useState"])(10),
      _useState4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_3___default()(_useState3, 2),
      numberOfSuggestions = _useState4[0],
      setNumberOfSuggestions = _useState4[1];

  var selectedLocation = locations.find(function (_ref5) {
    var ID = _ref5.ID;
    return ID === post_id;
  });
  console.log(selectedLocation);

  var handleShowMore = function handleShowMore() {
    return setNumberOfSuggestions(function (value) {
      return value + 10;
    });
  };

  var suggestionsById = locations.filter(function (_ref6) {
    var ID = _ref6.ID;
    return ID + "" === address;
  }).map(function (location) {
    return _objectSpread(_objectSpread({}, location), {}, {
      highlightID: true
    });
  });
  var suggestionsByTitle = locations.filter(function (_ref7) {
    var post_title = _ref7.post_title;
    return isPartOf(post_title, address);
  }).map(function (location) {
    return _objectSpread(_objectSpread({}, location), {}, {
      highlightTitle: true
    });
  });
  var suggestionsByAddress = locations.filter(function (location) {
    return isPartOf(location.address, address);
  }).map(function (location) {
    return _objectSpread(_objectSpread({}, location), {}, {
      highlightAddress: true
    });
  });
  var suggestions = address.length > 0 ? [].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default()(suggestionsById), _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default()(suggestionsByTitle), _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default()(suggestionsByAddress)) : [];

  var uniqueSuggestions = _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default()(new Set(suggestions.map(function (_ref8) {
    var ID = _ref8.ID;
    return ID;
  }))).map(function (ID) {
    return suggestions.find(function (location) {
      return location.ID === ID;
    });
  });

  var hasMore = uniqueSuggestions.length > numberOfSuggestions;
  var slicedSuggestions = uniqueSuggestions.slice(0, numberOfSuggestions);
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["PanelBody"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["ToggleControl"], {
    label: i18n.onlyOneAddress,
    help: single ? i18n.onlyOneAddress_true : i18n.onlyOneAddress_false,
    checked: single,
    onChange: setSingle
  }), single ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__["Fragment"], null, selectedLocation ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__["createElement"])(SelectedLocation, _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, selectedLocation, {
    onRemove: function onRemove() {
      return setPostId(0);
    }
  })) : null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["TextControl"], {
    label: i18n.selectPost,
    value: address,
    onChange: setAddress
  }), slicedSuggestions.map(function (suggestion) {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__["createElement"])(Suggestion, _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
      key: suggestion.ID
    }, suggestion, {
      onClick: function onClick() {
        setPostId(suggestion.ID);
      }
    }));
  }), hasMore ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__["createElement"])("div", {
    style: {
      textAlign: "center"
    }
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["Button"], {
    isTertiary: true,
    onClick: handleShowMore
  }, "Show more")) : null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__["createElement"])("p", {
    className: "description"
  }, i18n.selectPost_description)) : Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["SelectControl"], {
    label: i18n.selectTaxonomy,
    value: taxonomy,
    onChange: setTaxonomy,
    options: [{
      label: 'Category',
      value: 'category'
    }, {
      label: 'Tag',
      value: 'post_tag'
    }]
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["TextControl"], {
    label: i18n.setTerms,
    value: terms,
    onChange: setTerms
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__["createElement"])("p", {
    className: "description"
  }, i18n.setTerms_description)));
};

var AddressBlock = function AddressBlock(_ref9) {
  var isSelected = _ref9.isSelected,
      className = _ref9.className,
      setAttributes = _ref9.setAttributes,
      attributes = _ref9.attributes;
  console.log(attributes);
  var _attributes$single2 = attributes.single,
      single = _attributes$single2 === void 0 ? false : _attributes$single2,
      _attributes$post_id = attributes.post_id,
      post_id = _attributes$post_id === void 0 ? 0 : _attributes$post_id,
      _attributes$taxonomy2 = attributes.taxonomy,
      taxonomy = _attributes$taxonomy2 === void 0 ? "" : _attributes$taxonomy2,
      _attributes$terms2 = attributes.terms,
      terms = _attributes$terms2 === void 0 ? "" : _attributes$terms2;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__["InspectorControls"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__["createElement"])(AddressInspectorControls, {
    setAttributes: setAttributes,
    attributes: attributes
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__["createElement"])("div", {
    className: className
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__["createElement"])(_wordpress_server_side_render__WEBPACK_IMPORTED_MODULE_7___default.a, {
    block: _blocks_AddressBlock__WEBPACK_IMPORTED_MODULE_8__["blockName"],
    attributes: attributes
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (AddressBlock);

/***/ }),

/***/ "./src/script/gutenberg/components/GeolocationControl.js":
/*!***************************************************************!*\
  !*** ./src/script/gutenberg/components/GeolocationControl.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _hooks_use_geolocation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../hooks/use-geolocation */ "./src/script/gutenberg/hooks/use-geolocation.js");







var GeolocationControl = function GeolocationControl(_ref) {
  var fields = _ref.fields;

  var _useGeolocation = Object(_hooks_use_geolocation__WEBPACK_IMPORTED_MODULE_4__["useGeolocation"])(),
      _useGeolocation2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useGeolocation, 2),
      geolocation = _useGeolocation2[0],
      setGeolocationFields = _useGeolocation2[1];

  console.log(geolocation, fields);
  var inputFields = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["useMemo"])(function () {
    return fields.filter(function (_ref2) {
      var hide = _ref2.hide;
      return !hide;
    });
  }, [fields.map(function (_ref3) {
    var key = _ref3.key;
    return key;
  })]);
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("div", null, inputFields.map(function (_ref4) {
    var key = _ref4.key,
        label = _ref4.label,
        readonly = _ref4.readonly;
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["TextControl"], {
      key: key,
      label: label,
      readOnly: readonly,
      value: geolocation[key] || "",
      onChange: function onChange(value) {
        setGeolocationFields(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, key, value));
      }
    });
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (GeolocationControl);

/***/ }),

/***/ "./src/script/gutenberg/features/blocks.js":
/*!*************************************************!*\
  !*** ./src/script/gutenberg/features/blocks.js ***!
  \*************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _blocks_AddressBlock_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../blocks/AddressBlock.js */ "./src/script/gutenberg/blocks/AddressBlock.js");
// ------------------------------
// custom blocks
// ------------------------------


/***/ }),

/***/ "./src/script/gutenberg/features/document-panels.js":
/*!**********************************************************!*\
  !*** ./src/script/gutenberg/features/document-panels.js ***!
  \**********************************************************/
/*! exports provided: GEOLOCATION_PANEL_ID */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GEOLOCATION_PANEL_ID", function() { return GEOLOCATION_PANEL_ID; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_plugins__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/plugins */ "@wordpress/plugins");
/* harmony import */ var _wordpress_plugins__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_plugins__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_edit_post__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/edit-post */ "@wordpress/edit-post");
/* harmony import */ var _wordpress_edit_post__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_edit_post__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_GeolocationControl_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/GeolocationControl.js */ "./src/script/gutenberg/components/GeolocationControl.js");

// ------------------------------
// custom document area panels
// ------------------------------



 // ------------------------------------------
// extend documents panel
// ------------------------------------------

var GEOLOCATION_PANEL_ID = "geolocation-document-panel";
var GeolocationsDocumentPanel = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__["withSelect"])(function (select) {
  return {
    postType: select('core/editor').getCurrentPostType()
  };
})(function (_ref) {
  var postType = _ref.postType;
  if (!Geolocations.postTypes.includes(postType)) return null;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_edit_post__WEBPACK_IMPORTED_MODULE_2__["PluginDocumentSettingPanel"], {
    title: "Geolocation",
    icon: "location-alt"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_components_GeolocationControl_js__WEBPACK_IMPORTED_MODULE_4__["default"], Geolocations));
});
Object(_wordpress_plugins__WEBPACK_IMPORTED_MODULE_1__["registerPlugin"])(GEOLOCATION_PANEL_ID, {
  render: function render() {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(GeolocationsDocumentPanel, null);
  }
});

/***/ }),

/***/ "./src/script/gutenberg/hooks/use-geolocation.js":
/*!*******************************************************!*\
  !*** ./src/script/gutenberg/hooks/use-geolocation.js ***!
  \*******************************************************/
/*! exports provided: useGeolocation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useGeolocation", function() { return useGeolocation; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__);


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }


var useGeolocation = function useGeolocation() {
  var geolocation = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__["useSelect"])(function (select) {
    return select('core/editor').getEditedPostAttribute('geolocation');
  });

  var _dispatch = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__["dispatch"])('core/editor'),
      editPost = _dispatch.editPost;

  return [geolocation, function (fieldsMap) {
    console.log(fieldsMap, geolocation);
    editPost({
      geolocation: _objectSpread(_objectSpread({}, geolocation), fieldsMap)
    });
  }];
};

/***/ }),

/***/ "@wordpress/block-editor":
/*!**********************************************!*\
  !*** external {"this":["wp","blockEditor"]} ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["blockEditor"]; }());

/***/ }),

/***/ "@wordpress/blocks":
/*!*****************************************!*\
  !*** external {"this":["wp","blocks"]} ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["blocks"]; }());

/***/ }),

/***/ "@wordpress/components":
/*!*********************************************!*\
  !*** external {"this":["wp","components"]} ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["components"]; }());

/***/ }),

/***/ "@wordpress/data":
/*!***************************************!*\
  !*** external {"this":["wp","data"]} ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["data"]; }());

/***/ }),

/***/ "@wordpress/edit-post":
/*!*******************************************!*\
  !*** external {"this":["wp","editPost"]} ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["editPost"]; }());

/***/ }),

/***/ "@wordpress/element":
/*!******************************************!*\
  !*** external {"this":["wp","element"]} ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["element"]; }());

/***/ }),

/***/ "@wordpress/plugins":
/*!******************************************!*\
  !*** external {"this":["wp","plugins"]} ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["plugins"]; }());

/***/ }),

/***/ "@wordpress/server-side-render":
/*!***************************************************!*\
  !*** external {"this":["wp","serverSideRender"]} ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["serverSideRender"]; }());

/***/ })

/******/ });
//# sourceMappingURL=geolocations.map