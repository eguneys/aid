var kcapeW;
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./css/devbeta.scss":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./css/devbeta.scss ***!
  \*******************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _common_assets_pink_pyramid_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/assets/pink-pyramid.png */ "../common/assets/pink-pyramid.png");
// Imports




var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_common_assets_pink_pyramid_png__WEBPACK_IMPORTED_MODULE_3__);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "md-board {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n}\n\nmd-wrap {\n  --md-coord-color-black:#ED7272;\n  --md-coord-color-white:#E8E9B7;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  display: block;\n}\nmd-wrap coords {\n  position: absolute;\n  display: flex;\n  pointer-events: none;\n  opacity: 0.8;\n}", "",{"version":3,"sources":["webpack://./../common/css/vendor/_board.scss","webpack://./css/devbeta.scss","webpack://./../common/css/vendor/_ssehc.scss"],"names":[],"mappings":"AAAA;EACE,yDAAA;ACCF;;ACAA;EACE,8BAAA;EACA,8BAAA;EAEA,kBAAA;EACA,WAAA;EACA,YAAA;EACA,cAAA;ADEF;ACAE;EACE,kBAAA;EACA,aAAA;EACA,oBAAA;EACA,YAAA;ADEJ","sourcesContent":["md-board {\n  background-image: url('#{$asset-path}/pink-pyramid.png');\n}\n","md-board {\n  background-image: url(\"../../common/assets//pink-pyramid.png\");\n}\n\nmd-wrap {\n  --md-coord-color-black:#ED7272;\n  --md-coord-color-white:#E8E9B7;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  display: block;\n}\nmd-wrap coords {\n  position: absolute;\n  display: flex;\n  pointer-events: none;\n  opacity: 0.8;\n}","@import 'board';\n\nmd-wrap {\n  --md-coord-color-black:#ED7272;\n  --md-coord-color-white:#E8E9B7;\n\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  display: block;\n\n  coords {\n    position: absolute;\n    display: flex;\n    pointer-events: none;\n    opacity: 0.8; \n  }\n  \n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/***/ ((module) => {



function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (typeof btoa === "function") {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = url && url.__esModule ? url.default : url;

  if (typeof url !== "string") {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    // eslint-disable-next-line no-param-reassign
    url = url.slice(1, -1);
  }

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./css/devbeta.scss":
/*!**************************!*\
  !*** ./css/devbeta.scss ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_devbeta_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./devbeta.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./css/devbeta.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_devbeta_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_devbeta_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : 0;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ app)
/* harmony export */ });
/* harmony import */ var hhh__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hhh */ "../../../../hhh/lib/index.js");
/* harmony import */ var hhh__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hhh__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view */ "./src/view.ts");


function app(element) {
    var recons = (0,hhh__WEBPACK_IMPORTED_MODULE_0__.vinit)();
    var vnode = (0,_view__WEBPACK_IMPORTED_MODULE_1__.default)();
    var $_ = recons(vnode);
    element.appendChild($_);
}


/***/ }),

/***/ "./src/view.ts":
/*!*********************!*\
  !*** ./src/view.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ view)
/* harmony export */ });
/* harmony import */ var hhh__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hhh */ "../../../../hhh/lib/index.js");
/* harmony import */ var hhh__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hhh__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ssehcit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ssehcit */ "../../../../ssehcit/lib/index.js");


function view() {
    return (0,hhh__WEBPACK_IMPORTED_MODULE_0__.vh)('div', {}, {
        element: function () { return function (elm) {
            (0,ssehcit__WEBPACK_IMPORTED_MODULE_1__.default)(elm);
        }; }
    }, []);
}


/***/ }),

/***/ "../common/assets/pink-pyramid.png":
/*!*****************************************!*\
  !*** ../common/assets/pink-pyramid.png ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0d852b9e5ea3e8b12a7c.png";

/***/ }),

/***/ "../../../../hhh/lib/diff.js":
/*!***********************************!*\
  !*** ../../../../hhh/lib/diff.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, exports) => {


exports.__esModule = true;
exports.array = void 0;
function refEqual(a, b) {
    return a === b;
}
function array(ls, ols, isEqual) {
    if (isEqual === void 0) { isEqual = refEqual; }
    var still = [], added = [], removed = [];
    var _loop_1 = function (l) {
        if (ols.find(function (_) { return isEqual(_, l); })) {
            still.push(l);
        }
        else {
            added.push(l);
        }
    };
    for (var _i = 0, ls_1 = ls; _i < ls_1.length; _i++) {
        var l = ls_1[_i];
        _loop_1(l);
    }
    var _loop_2 = function (l) {
        if (!still.find(function (_) { return isEqual(l, _); }) &&
            !added.find(function (_) { return isEqual(l, _); })) {
            removed.push(l);
        }
    };
    for (var _a = 0, ols_1 = ols; _a < ols_1.length; _a++) {
        var l = ols_1[_a];
        _loop_2(l);
    }
    return {
        added: added,
        removed: removed,
        still: still
    };
}
exports.array = array;


/***/ }),

/***/ "../../../../hhh/lib/h.js":
/*!********************************!*\
  !*** ../../../../hhh/lib/h.js ***!
  \********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


exports.__esModule = true;
exports.h = void 0;
var is = __webpack_require__(/*! ./is */ "../../../../hhh/lib/is.js");
var vh_1 = __webpack_require__(/*! ./vh */ "../../../../hhh/lib/vh.js");
function h(sel, b, c) {
    var data = {};
    var prop;
    var textOrChildren;
    var i;
    if (c !== undefined) {
        if (b !== null) {
            data = b;
        }
        if (is.array(c)) {
            textOrChildren = c;
        }
        else if (is.primitive(c)) {
            textOrChildren = c + '';
        }
        else if (c && c.sel) {
            textOrChildren = [c];
        }
    }
    else if (b !== undefined && b !== null) {
        if (is.array(b)) {
            textOrChildren = b;
        }
        else if (is.primitive(b)) {
            textOrChildren = b + '';
        }
        else if (b && b.sel) {
            textOrChildren = [b];
        }
        else {
            data = b;
        }
    }
    if (textOrChildren !== undefined) {
        if (typeof textOrChildren === 'string') {
            return vh_1.vh(sel, prop, data, [vh_1.vh({ text: textOrChildren }, undefined, {}, [])]);
        }
        else {
            var children = textOrChildren.map(function (child) {
                if (is.primitive(child)) {
                    return vh_1.vh({ text: child }, undefined, {}, []);
                }
                else {
                    return child;
                }
            });
            return vh_1.vh(sel, prop, data, children);
        }
    }
    else {
        return vh_1.vh(sel, prop, data, []);
    }
}
exports.h = h;


/***/ }),

/***/ "../../../../hhh/lib/htmldomapi.js":
/*!*****************************************!*\
  !*** ../../../../hhh/lib/htmldomapi.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, exports) => {


exports.__esModule = true;
exports.htmlDomApi = void 0;
function createElement(tagName, options) {
    return document.createElement(tagName, options);
}
function createTextNode(text) {
    return document.createTextNode(text);
}
function appendChild(node, child) {
    node.appendChild(child);
}
exports.htmlDomApi = {
    createElement: createElement,
    createTextNode: createTextNode,
    appendChild: appendChild
};


/***/ }),

/***/ "../../../../hhh/lib/index.js":
/*!************************************!*\
  !*** ../../../../hhh/lib/index.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
exports.__esModule = true;
__exportStar(__webpack_require__(/*! ./h */ "../../../../hhh/lib/h.js"), exports);
__exportStar(__webpack_require__(/*! ./vh */ "../../../../hhh/lib/vh.js"), exports);
__exportStar(__webpack_require__(/*! ./vinit */ "../../../../hhh/lib/vinit.js"), exports);


/***/ }),

/***/ "../../../../hhh/lib/is.js":
/*!*********************************!*\
  !*** ../../../../hhh/lib/is.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, exports) => {


exports.__esModule = true;
exports.primitive = exports.array = void 0;
exports.array = Array.isArray;
function primitive(s) {
    return typeof s === 'string' || typeof s === 'number';
}
exports.primitive = primitive;


/***/ }),

/***/ "../../../../hhh/lib/vh.js":
/*!*********************************!*\
  !*** ../../../../hhh/lib/vh.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, exports) => {


exports.__esModule = true;
exports.vh = exports.vmap = exports.isVHNode = exports.VPair = void 0;
var VPair = /** @class */ (function () {
    function VPair(oldUpdate) {
        this.oldUpdate = oldUpdate;
    }
    VPair.prototype.add = function (update) {
        var oldUpdate = this.oldUpdate;
        this.oldUpdate = update;
        return [update, oldUpdate];
    };
    return VPair;
}());
exports.VPair = VPair;
function isVHNode(_) {
    return (_.selOrText !== undefined);
}
exports.isVHNode = isVHNode;
function vmap(data, mf, parentProp) {
    return {
        data: data,
        updatePair: new VPair([]),
        mf: mf,
        parentProp: parentProp,
        update: function (_) { },
        updateProp: function (_) { }
    };
}
exports.vmap = vmap;
function vh(selOrText, prop, updates, children, parentProp) {
    return {
        selOrText: selOrText,
        prop: prop,
        parentProp: parentProp,
        updates: updates,
        updatePairs: {
            klassList: new VPair([])
        },
        update: function (_) { },
        updateParentProp: function (_) { },
        children: children
    };
}
exports.vh = vh;


/***/ }),

/***/ "../../../../hhh/lib/vinit.js":
/*!************************************!*\
  !*** ../../../../hhh/lib/vinit.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
exports.vinit = void 0;
var vh_1 = __webpack_require__(/*! ./vh */ "../../../../hhh/lib/vh.js");
var htmldomapi_1 = __webpack_require__(/*! ./htmldomapi */ "../../../../hhh/lib/htmldomapi.js");
var diff = __webpack_require__(/*! ./diff */ "../../../../hhh/lib/diff.js");
function vinit() {
    function shallowEqual(a, b) {
        if (typeof a === 'object' && typeof b === 'object') {
            for (var key in a) {
                if (a[key] !== b[key]) {
                    return false;
                }
            }
            return true;
        }
        else {
            return a === b;
        }
    }
    // updateChildren(updatePair.add(data), mf, $d);
    function updateChildren(_a, mf, children, parentProp, $parent) {
        var arr = _a[0], oldArray = _a[1];
        var _b = diff.array(arr, oldArray, shallowEqual), added = _b.added, removed = _b.removed, still = _b.still;
        var recycle = [];
        removed.forEach(function (_) {
            var _$ = Array.from(children.keys()).find(function (_v$) { return shallowEqual(_v$.prop, _); });
            if (_$) {
                recycle.push(_$);
            }
        });
        added.forEach(function (_) {
            var v$ = recycle.pop();
            if (v$) {
                v$.update(_);
            }
            else {
                var newV$ = mf(_, parentProp), new$ = recons(newV$);
                $parent.appendChild(new$);
                children.set(newV$, new$);
            }
        });
        recycle.forEach(function (r$) {
            var $_ = children.get(r$);
            if ($_) {
                $parent.removeChild($_);
            }
            children["delete"](r$);
        });
    }
    function updateKlassList(_a, elm) {
        var klassList = _a[0], oldKlassList = _a[1];
        var _b = diff.array(klassList, oldKlassList), added = _b.added, removed = _b.removed, still = _b.still;
        removed.forEach(function (_) {
            return elm.classList.remove(_);
        });
        added.forEach(function (_) {
            return elm.classList.add(_);
        });
    }
    function updateVChildren(children, $parent) {
        var updatePair = children.updatePair, mf = children.mf, data = children.data, parentProp = children.parentProp;
        var cmap = new Map();
        children.update = function (data) {
            updateChildren(updatePair.add(data), mf, cmap, parentProp, $parent);
        };
        children.updateProp = function (prop) {
            parentProp = prop;
            Array.from(cmap.keys()).forEach(function (_) {
                _.updateParentProp(prop);
            });
        };
        children.update(data);
    }
    function updateVHNodeChild(child, $parent) {
        var $_ = recons(child);
        $parent.appendChild($_);
    }
    function propCombine(oprop, prop) {
        if (typeof oprop === 'object') {
            if (typeof prop === 'object') {
                return __assign(__assign({}, oprop), prop);
            }
        }
        return prop;
    }
    function recons(vh) {
        var api = htmldomapi_1.htmlDomApi;
        var selOrText = vh.selOrText, prop = vh.prop, updates = vh.updates, updatePairs = vh.updatePairs, children = vh.children;
        var $d, $dc;
        if (typeof selOrText === 'string') {
            var _a = selOrText.split('.'), tagname = _a[0], klass = _a.slice(1);
            $d = api.createElement(tagname);
            klass.forEach(function (_) {
                return $d.classList.add(_);
            });
        }
        else {
            $d = api.createTextNode(selOrText.text);
        }
        vh.updateParentProp = function (prop) {
            vh.parentProp = prop;
            vh.update(vh.prop);
        };
        vh.update = function (_prop) {
            var _a;
            if (_prop) {
                vh.prop = propCombine(vh.prop, _prop);
            }
            var withParentProp = vh.parentProp ? propCombine(vh.parentProp, vh.prop) : vh.prop;
            (_a = updates.element) === null || _a === void 0 ? void 0 : _a.call(updates, withParentProp)($d);
            if (updates.klassList) {
                var pairs = updatePairs.klassList.add(updates.klassList(withParentProp));
                updateKlassList(pairs, $d);
            }
        };
        vh.update(prop);
        children.forEach(function (child) {
            if (vh_1.isVHNode(child)) {
                updateVHNodeChild(child, $d);
            }
            else {
                updateVChildren(child, $d);
            }
        });
        if (updates.resize) {
            var ur_1 = updates.resize;
            new ResizeObserver(function (e) {
                ur_1($d.getBoundingClientRect());
            }).observe($d);
        }
        return $d;
    }
    return recons;
}
exports.vinit = vinit;


/***/ }),

/***/ "../../../../nefs/lib/board.js":
/*!*************************************!*\
  !*** ../../../../nefs/lib/board.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.fen = void 0;
const nt = __importStar(__webpack_require__(/*! ./types */ "../../../../nefs/lib/types.js"));
const pi = __importStar(__webpack_require__(/*! ./piece */ "../../../../nefs/lib/piece.js"));
const db_1 = __webpack_require__(/*! ./db */ "../../../../nefs/lib/db.js");
function fen(board) {
    let res = [];
    for (let rank of nt.rdirections) {
        let rankS = '';
        let space = 0;
        for (let file of nt.directions) {
            let piece = board.get(db_1.poss.pget(file, rank));
            if (piece) {
                if (space !== 0) {
                    rankS += space;
                    space = 0;
                }
                rankS += pi.fen(piece);
            }
            else {
                space++;
            }
        }
        if (space !== 0) {
            rankS += space;
        }
        res.push(rankS);
    }
    return res.join('/');
}
exports.fen = fen;
//# sourceMappingURL=board.js.map

/***/ }),

/***/ "../../../../nefs/lib/db.js":
/*!**********************************!*\
  !*** ../../../../nefs/lib/db.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.pieces = exports.poss = exports.DB = void 0;
const nt = __importStar(__webpack_require__(/*! ./types */ "../../../../nefs/lib/types.js"));
const p = __importStar(__webpack_require__(/*! ./pos */ "../../../../nefs/lib/pos.js"));
const r = __importStar(__webpack_require__(/*! ./role */ "../../../../nefs/lib/role.js"));
class DB {
    constructor(make, mA, mB, allA, allB) {
        this.space = new Map();
        this.make = make;
        this.mA = mA;
        this.mB = mB;
        this.all = [];
        for (let a of allA) {
            for (let b of allB) {
                this.all.push(this.pget(a, b));
            }
        }
    }
    pget(a, b) {
        let bc = this.space.get(a);
        if (bc) {
            let c = bc.get(b);
            if (c) {
                return c;
            }
            else {
                let _c = this.make(a, b);
                bc.set(b, _c);
                return _c;
            }
        }
        else {
            let c = this.make(a, b);
            let bc = new Map()
                .set(b, c);
            this.space.set(a, bc);
            return c;
        }
    }
    nget(sa, sb) {
        return this.mget(this.mA(sa), this.mB(sb));
    }
    mget(ma, mb) {
        if (ma && mb) {
            return this.pget(ma, mb);
        }
    }
}
exports.DB = DB;
exports.poss = new DB(((f, r) => [f, r]), p.mDirection, p.mDirection, nt.directions, nt.directions);
exports.pieces = new DB((color, role) => ({ color, role }), r.mColor, r.mRole, nt.colors, nt.roles);
//# sourceMappingURL=db.js.map

/***/ }),

/***/ "../../../../nefs/lib/fen.js":
/*!***********************************!*\
  !*** ../../../../nefs/lib/fen.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.space = exports.situation = exports.fen = void 0;
const b = __importStar(__webpack_require__(/*! ./board */ "../../../../nefs/lib/board.js"));
const db_1 = __webpack_require__(/*! ./db */ "../../../../nefs/lib/db.js");
function fen(situation) {
    let color = situation.turn;
    let rest = "KQkq - 0 1";
    return `${b.fen(situation.board)} ${color} ${rest}`;
}
exports.fen = fen;
function situation(fen) {
    let _pieces = new Map();
    let [ranksS, colorS] = fen.split(' ');
    if (!ranksS || !colorS) {
        return;
    }
    if (colorS !== "w" && colorS !== "b") {
        return;
    }
    let ranks = ranksS.split('/');
    if (ranks.length !== 8) {
        return;
    }
    for (let i = 0; i < ranks.length; i++) {
        let rank = 8 - i;
        let file = 1;
        for (let j = 0; j < ranks[i].length; j++) {
            let c = ranks[i][j];
            let piece = db_1.pieces.nget(c, c);
            if (piece) {
                let pos = db_1.poss.nget(file, rank);
                if (pos && piece) {
                    _pieces.set(pos, piece);
                }
                file += 1;
            }
            else {
                let _s = space(c);
                if (_s) {
                    file += _s;
                }
            }
        }
    }
    let board = _pieces;
    return {
        board,
        turn: colorS
    };
}
exports.situation = situation;
function space(c) {
    if (c.match(/[1-8]/)) {
        return parseInt(c);
    }
}
exports.space = space;
//# sourceMappingURL=fen.js.map

/***/ }),

/***/ "../../../../nefs/lib/index.js":
/*!*************************************!*\
  !*** ../../../../nefs/lib/index.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.side = exports.db = exports.f = exports.pi = exports.r = exports.p = exports.b = exports.nt = void 0;
exports.nt = __importStar(__webpack_require__(/*! ./types */ "../../../../nefs/lib/types.js"));
exports.b = __importStar(__webpack_require__(/*! ./board */ "../../../../nefs/lib/board.js"));
exports.p = __importStar(__webpack_require__(/*! ./pos */ "../../../../nefs/lib/pos.js"));
exports.r = __importStar(__webpack_require__(/*! ./role */ "../../../../nefs/lib/role.js"));
exports.pi = __importStar(__webpack_require__(/*! ./piece */ "../../../../nefs/lib/piece.js"));
exports.f = __importStar(__webpack_require__(/*! ./fen */ "../../../../nefs/lib/fen.js"));
exports.db = __importStar(__webpack_require__(/*! ./db */ "../../../../nefs/lib/db.js"));
exports.side = __importStar(__webpack_require__(/*! ./side */ "../../../../nefs/lib/side.js"));
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../nefs/lib/piece.js":
/*!*************************************!*\
  !*** ../../../../nefs/lib/piece.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.fen = void 0;
function fen(piece) {
    if (piece.color === 'w') {
        return piece.role.toUpperCase();
    }
    return piece.role;
}
exports.fen = fen;
//# sourceMappingURL=piece.js.map

/***/ }),

/***/ "../../../../nefs/lib/pos.js":
/*!***********************************!*\
  !*** ../../../../nefs/lib/pos.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.dopKey = exports.key = exports.rkey = exports.fkey = exports.mRankKey = exports.mFileKey = exports.mPosKey = exports.posKey2fKey = exports.posKey2rKey = exports.rByKey = exports.fByKey = exports.posKeys = exports.rankKeys = exports.fileKeys = exports.isPos = exports.mDirection = exports.isDirection = void 0;
function isDirection(_) {
    return !!mDirection(_);
}
exports.isDirection = isDirection;
function mDirection(_) {
    if (_ >= 1 && _ <= 8) {
        return _;
    }
}
exports.mDirection = mDirection;
function isPos(_) {
    if (Array.isArray(_)) {
        if (_.length === 2) {
            return _.map(isDirection).every(_ => !!_);
        }
    }
    return false;
}
exports.isPos = isPos;
exports.fileKeys = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
exports.rankKeys = ['1', '2', '3', '4', '5', '6', '7', '8'];
exports.posKeys = [
    'a1', 'a2', 'a3', 'a4', 'a5', 'a6', 'a7', 'a8',
    'b1', 'b2', 'b3', 'b4', 'b5', 'b6', 'b7', 'b8',
    'c1', 'c2', 'c3', 'c4', 'c5', 'c6', 'c7', 'c8',
    'd1', 'd2', 'd3', 'd4', 'd5', 'd6', 'd7', 'd8',
    'e1', 'e2', 'e3', 'e4', 'e5', 'e6', 'e7', 'e8',
    'f1', 'f2', 'f3', 'f4', 'f5', 'f6', 'f7', 'f8',
    'g1', 'g2', 'g3', 'g4', 'g5', 'g6', 'g7', 'g8',
    'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'h7', 'h8'
];
const fByKey = (_) => {
    return exports.fileKeys.indexOf(_) + 1;
};
exports.fByKey = fByKey;
const rByKey = (_) => {
    return exports.rankKeys.indexOf(_) + 1;
};
exports.rByKey = rByKey;
const posKey2rKey = (_) => {
    return _[1];
};
exports.posKey2rKey = posKey2rKey;
const posKey2fKey = (_) => {
    return _[0];
};
exports.posKey2fKey = posKey2fKey;
const mPosKey = (_) => {
    if (exports.posKeys.includes(_)) {
        let i = exports.posKeys.indexOf(_);
        return exports.posKeys[i];
    }
};
exports.mPosKey = mPosKey;
function mFileKey(_) {
    if (exports.fileKeys.includes(_)) {
        let i = exports.fileKeys.indexOf(_);
        return exports.fileKeys[i];
    }
}
exports.mFileKey = mFileKey;
function mRankKey(_) {
    if (exports.rankKeys.includes(_)) {
        let i = exports.rankKeys.indexOf(_);
        return exports.rankKeys[i];
    }
}
exports.mRankKey = mRankKey;
function fkey(f) {
    return exports.fileKeys[f - 1];
}
exports.fkey = fkey;
function rkey(r) {
    return exports.rankKeys[r - 1];
}
exports.rkey = rkey;
function key(p) {
    return (fkey(p[0]) + rkey(p[1]));
}
exports.key = key;
function dopKey(_) {
    if (isPos(_)) {
        return key(_);
    }
    else if (isDirection(_)) {
        return rkey(_);
    }
    else {
        return 'dopX';
    }
}
exports.dopKey = dopKey;
//# sourceMappingURL=pos.js.map

/***/ }),

/***/ "../../../../nefs/lib/role.js":
/*!************************************!*\
  !*** ../../../../nefs/lib/role.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.otherColor = exports.mColor = exports.mRole = exports.isRole = void 0;
const nt = __importStar(__webpack_require__(/*! ./types */ "../../../../nefs/lib/types.js"));
function isRole(_) {
    return !mRole(_);
}
exports.isRole = isRole;
function mRole(str) {
    let _ = str.toLowerCase();
    if (nt.roles.includes(_)) {
        return _;
    }
}
exports.mRole = mRole;
function mColor(str) {
    let _ = str.toLowerCase();
    if (nt.roles.includes(_)) {
        if (_ === str) {
            return 'b';
        }
        else {
            return 'w';
        }
    }
}
exports.mColor = mColor;
function otherColor(color) {
    return color === 'w' ? 'b' : 'w';
}
exports.otherColor = otherColor;
//# sourceMappingURL=role.js.map

/***/ }),

/***/ "../../../../nefs/lib/side.js":
/*!************************************!*\
  !*** ../../../../nefs/lib/side.js ***!
  \************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.isCastles = exports.LongCastle = exports.ShortCastle = exports.H = exports.G = exports.F = exports.E = exports.D = exports.C = exports.B = exports.A = void 0;
exports.A = 1;
exports.B = 2;
exports.C = 3;
exports.D = 4;
exports.E = 5;
exports.F = 6;
exports.G = 7;
exports.H = 8;
exports.ShortCastle = {
    king: exports.G,
    rook: exports.F,
    trip: 1
};
exports.LongCastle = {
    king: exports.C,
    rook: exports.D,
    trip: -1
};
function isCastles(meta) {
    return (meta.king !== undefined);
}
exports.isCastles = isCastles;
//# sourceMappingURL=side.js.map

/***/ }),

/***/ "../../../../nefs/lib/types.js":
/*!*************************************!*\
  !*** ../../../../nefs/lib/types.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.longColor = exports.longRole = exports.promotables = exports.roles = exports.colors = exports.ranks = exports.files = exports.rdirections = exports.directions = exports.initialFen = void 0;
exports.initialFen = 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1';
exports.directions = [1, 2, 3, 4, 5, 6, 7, 8];
exports.rdirections = [8, 7, 6, 5, 4, 3, 2, 1];
exports.files = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
exports.ranks = ['1', '2', '3', '4', '5', '6', '7', '8'];
exports.colors = ['w', 'b'];
exports.roles = ['r', 'b', 'n', 'q', 'k', 'p'];
exports.promotables = ['r', 'b', 'n', 'q'];
exports.longRole = {
    'b': 'bishop',
    'n': 'knight',
    'r': 'rook',
    'k': 'king',
    'q': 'queen',
    'p': 'pawn'
};
exports.longColor = {
    'w': 'white',
    'b': 'black'
};
//# sourceMappingURL=types.js.map

/***/ }),

/***/ "../../../../ssehc/lib/api.js":
/*!************************************!*\
  !*** ../../../../ssehc/lib/api.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var Api = /** @class */ (function () {
    function Api(ctrl) {
        this.ctrl = ctrl;
    }
    Api.prototype.fen = function (fen) {
        this.ctrl.fen(fen);
    };
    return Api;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Api);
//# sourceMappingURL=api.js.map

/***/ }),

/***/ "../../../../ssehc/lib/ctrl.js":
/*!*************************************!*\
  !*** ../../../../ssehc/lib/ctrl.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util */ "../../../../ssehc/lib/util.js");
/* harmony import */ var nefs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! nefs */ "../../../../nefs/lib/index.js");
/* harmony import */ var nefs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nefs__WEBPACK_IMPORTED_MODULE_1__);


var Ctrl = /** @class */ (function () {
    function Ctrl(opts) {
        this.sLastMove = new _util__WEBPACK_IMPORTED_MODULE_0__.Sub([]);
        this.sSituation = new _util__WEBPACK_IMPORTED_MODULE_0__.Sub(nefs__WEBPACK_IMPORTED_MODULE_1__.f.situation(opts.fen ? opts.fen : nefs__WEBPACK_IMPORTED_MODULE_1__.nt.initialFen));
        if (opts.lastMove) {
            var m1_1 = nefs__WEBPACK_IMPORTED_MODULE_1__.db.poss.pget(nefs__WEBPACK_IMPORTED_MODULE_1__.p.fByKey(opts.lastMove[0]), nefs__WEBPACK_IMPORTED_MODULE_1__.p.rByKey(opts.lastMove[1])), m2_1 = nefs__WEBPACK_IMPORTED_MODULE_1__.db.poss.pget(nefs__WEBPACK_IMPORTED_MODULE_1__.p.fByKey(opts.lastMove[2]), nefs__WEBPACK_IMPORTED_MODULE_1__.p.rByKey(opts.lastMove[3]));
            this.sLastMove
                .apply(function (_) {
                _.push(m1_1);
                _.push(m2_1);
            });
        }
    }
    Ctrl.prototype.fen = function (fen) {
        var s = nefs__WEBPACK_IMPORTED_MODULE_1__.f.situation(fen);
        if (s) {
            this.sSituation.trigger(s);
        }
    };
    Ctrl.prototype.trigger = function () {
        this.sSituation.trigger();
        this.sLastMove.trigger();
    };
    return Ctrl;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Ctrl);
//# sourceMappingURL=ctrl.js.map

/***/ }),

/***/ "../../../../ssehc/lib/index.js":
/*!**************************************!*\
  !*** ../../../../ssehc/lib/index.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _main__WEBPACK_IMPORTED_MODULE_0__.default)
/* harmony export */ });
/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main */ "../../../../ssehc/lib/main.js");

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../ssehc/lib/main.js":
/*!*************************************!*\
  !*** ../../../../ssehc/lib/main.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ app)
/* harmony export */ });
/* harmony import */ var hhh__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hhh */ "../../../../hhh/lib/index.js");
/* harmony import */ var hhh__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hhh__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api */ "../../../../ssehc/lib/api.js");
/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./view */ "../../../../ssehc/lib/view.js");
/* harmony import */ var _ctrl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ctrl */ "../../../../ssehc/lib/ctrl.js");




function app(element, opts) {
    if (opts === void 0) { opts = {}; }
    var reconcile = (0,hhh__WEBPACK_IMPORTED_MODULE_0__.vinit)();
    var _ctrl = new _ctrl__WEBPACK_IMPORTED_MODULE_3__.default(opts);
    var vnode = (0,_view__WEBPACK_IMPORTED_MODULE_2__.default)(_ctrl);
    var $app = reconcile(vnode);
    _ctrl.trigger();
    element.appendChild($app);
    return new _api__WEBPACK_IMPORTED_MODULE_1__.default(_ctrl);
}
//# sourceMappingURL=main.js.map

/***/ }),

/***/ "../../../../ssehc/lib/util.js":
/*!*************************************!*\
  !*** ../../../../ssehc/lib/util.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "mem": () => (/* binding */ mem),
/* harmony export */   "Sub": () => (/* binding */ Sub),
/* harmony export */   "ffPosToTranslateAbs": () => (/* binding */ ffPosToTranslateAbs)
/* harmony export */ });
function mem(f) {
    var val = undefined;
    var res = function () {
        if (!val) {
            val = f();
        }
        return val;
    };
    res.clear = function () {
        val = undefined;
    };
    return res;
}
var Sub = /** @class */ (function () {
    function Sub(val) {
        this.val = val;
        this.subs = [];
    }
    Sub.prototype.apply = function (fn) {
        fn(this.val);
    };
    Sub.prototype.sub = function (fn) {
        this.subs.push(fn);
    };
    Sub.prototype.isub = function (fn) {
        this.subs.push(fn);
        fn(this.val);
    };
    Sub.prototype.trigger = function (val) {
        var _this = this;
        this.val = val || this.val;
        this.subs.forEach(function (_) { return _(_this.val); });
    };
    return Sub;
}());

var posToTranslateBase = function (pos, xFactor, yFactor) { return [
    (pos[0] - 1) * xFactor,
    (8 - pos[1]) * yFactor
]; };
function ffPosToTranslateAbs(bounds) {
    var xFactor = bounds.width / 8, yFactor = bounds.height / 8;
    return function (pos) {
        return posToTranslateBase(pos, xFactor, yFactor);
    };
}
//# sourceMappingURL=util.js.map

/***/ }),

/***/ "../../../../ssehc/lib/view.js":
/*!*************************************!*\
  !*** ../../../../ssehc/lib/view.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "styleTransform": () => (/* binding */ styleTransform),
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var hhh__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hhh */ "../../../../hhh/lib/index.js");
/* harmony import */ var hhh__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hhh__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var nefs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! nefs */ "../../../../nefs/lib/index.js");
/* harmony import */ var nefs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nefs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./util */ "../../../../ssehc/lib/util.js");



function styleTransform(pos) {
    return function (elm) {
        elm.style.transform = "translate(" + pos[0] + "px," + pos[1] + "px)";
    };
}
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(ctrl) {
    var fPosToTranslate = function (pos) { return pos; };
    var v$Pieces = (0,hhh__WEBPACK_IMPORTED_MODULE_0__.vmap)([], function (props, parentProps) {
        return (0,hhh__WEBPACK_IMPORTED_MODULE_0__.vh)('piece', props, {
            klassList: function (_a) {
                var piece = _a.piece;
                return [nefs__WEBPACK_IMPORTED_MODULE_1__.nt.longColor[piece.color],
                    nefs__WEBPACK_IMPORTED_MODULE_1__.nt.longRole[piece.role]];
            },
            element: function (_a) {
                var pos = _a.pos, fPosToTranslate = _a.fPosToTranslate;
                return styleTransform(fPosToTranslate(pos));
            }
        }, [], parentProps);
    }, { fPosToTranslate: fPosToTranslate });
    var v$LastMoves = (0,hhh__WEBPACK_IMPORTED_MODULE_0__.vmap)([], function (pos, parentProps) {
        return (0,hhh__WEBPACK_IMPORTED_MODULE_0__.vh)('square.last-move', { pos: pos }, { element: function (_a) {
                var pos = _a.pos, fPosToTranslate = _a.fPosToTranslate;
                return styleTransform(fPosToTranslate(pos));
            }
        }, [], parentProps);
    }, { fPosToTranslate: fPosToTranslate });
    var v$board = (0,hhh__WEBPACK_IMPORTED_MODULE_0__.h)('md-board', [
        v$LastMoves,
        v$Pieces
    ]);
    var v$coRanks = (0,hhh__WEBPACK_IMPORTED_MODULE_0__.vh)('coords.ranks', {}, {
        klassList: function (_a) {
            var turn = _a.turn;
            return [nefs__WEBPACK_IMPORTED_MODULE_1__.nt.longColor[turn]];
        }
    }, nefs__WEBPACK_IMPORTED_MODULE_1__.nt.ranks.map(function (_) { return (0,hhh__WEBPACK_IMPORTED_MODULE_0__.h)('coord', _); })), v$coFiles = (0,hhh__WEBPACK_IMPORTED_MODULE_0__.vh)('coords.files', {}, {
        klassList: function (_a) {
            var turn = _a.turn;
            return [nefs__WEBPACK_IMPORTED_MODULE_1__.nt.longColor[turn]];
        }
    }, nefs__WEBPACK_IMPORTED_MODULE_1__.nt.files.map(function (_) { return (0,hhh__WEBPACK_IMPORTED_MODULE_0__.h)('coord', _); }));
    ctrl.sSituation.sub(function (situation) {
        var board = situation.board, turn = situation.turn;
        v$coRanks.update({ turn: turn });
        v$coFiles.update({ turn: turn });
        var pieceProps = Array.from(board.entries())
            .map(function (_a) {
            var pos = _a[0], piece = _a[1];
            return ({ pos: pos, piece: piece });
        });
        v$Pieces.update(pieceProps);
    });
    ctrl.sLastMove.sub(function (lastMove) {
        v$LastMoves.update(lastMove);
    });
    var onResize = function (bounds) {
        var _fpt = (0,_util__WEBPACK_IMPORTED_MODULE_2__.ffPosToTranslateAbs)(bounds);
        v$LastMoves.updateProp({ fPosToTranslate: _fpt });
        v$Pieces.updateProp({ fPosToTranslate: _fpt });
    };
    return (0,hhh__WEBPACK_IMPORTED_MODULE_0__.h)('md-wrap', {
        resize: onResize
    }, [
        v$board,
        v$coRanks,
        v$coFiles
    ]);
}
//# sourceMappingURL=view.js.map

/***/ }),

/***/ "../../../../ssehcit/lib/api.js":
/*!**************************************!*\
  !*** ../../../../ssehcit/lib/api.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var Api = /** @class */ (function () {
    function Api(ctrl) {
        this.ctrl = ctrl;
    }
    Api.prototype.fen = function (fen) {
        this.ctrl.fen(fen);
    };
    return Api;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Api);
//# sourceMappingURL=api.js.map

/***/ }),

/***/ "../../../../ssehcit/lib/ctrl.js":
/*!***************************************!*\
  !*** ../../../../ssehcit/lib/ctrl.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var nefs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! nefs */ "../../../../nefs/lib/index.js");
/* harmony import */ var nefs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nefs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var tschess__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tschess */ "../../../../tschess/lib/index.js");
/* harmony import */ var tschess__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tschess__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./util */ "../../../../ssehcit/lib/util.js");



var Ctrl = /** @class */ (function () {
    function Ctrl() {
        var situation = nefs__WEBPACK_IMPORTED_MODULE_0__.f.situation(nefs__WEBPACK_IMPORTED_MODULE_0__.nt.initialFen);
        this.subRecons = new _util__WEBPACK_IMPORTED_MODULE_2__.Sub(undefined);
        this.subSituation = new _util__WEBPACK_IMPORTED_MODULE_2__.Sub(situation);
        this.selection = new _util__WEBPACK_IMPORTED_MODULE_2__.Sub({ active: false });
    }
    Ctrl.prototype.fen = function (fen) {
        var situation = nefs__WEBPACK_IMPORTED_MODULE_0__.f.situation(fen);
        if (situation) {
            this.subSituation.pub(situation);
        }
    };
    Ctrl.prototype.initPub = function () {
        this.subSituation.pub();
        this.subRecons.pub();
    };
    Ctrl.prototype.selectSpare = function (piece) {
        this.selection.mutate(function (_) {
            _.active = true;
            _.piece = piece;
            _.source = undefined;
        });
    };
    Ctrl.prototype.select = function (key, epos) {
        var _this = this;
        this.subSituation.mutate(function (situation) {
            var newBoard = tschess__WEBPACK_IMPORTED_MODULE_1__.b.pickup(situation.board, key);
            var piece = situation.board.get(key);
            if (newBoard) {
                _this.selection.mutate(function (_) {
                    _.active = true;
                    _.piece = piece;
                    _.source = key;
                });
                situation.board = newBoard;
            }
        });
    };
    Ctrl.prototype.unselectBoard = function (key) {
        var _this = this;
        this.subSituation.mutate(function (situation) {
            var piece = _this.selection.currentValue.piece;
            var b2 = tschess__WEBPACK_IMPORTED_MODULE_1__.b.drop(situation.board, key, piece);
            if (b2) {
                situation.board = b2;
            }
        });
    };
    Ctrl.prototype.unselect = function (epos) {
        this.selection.mutate(function (_) { return _.active = false; });
    };
    Ctrl.prototype.move = function (epos) {
        if (this.selection.currentValue) {
            this.selection.mutate(function (_) { return _.epos = epos; });
        }
    };
    return Ctrl;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Ctrl);
//# sourceMappingURL=ctrl.js.map

/***/ }),

/***/ "../../../../ssehcit/lib/events.js":
/*!*****************************************!*\
  !*** ../../../../ssehcit/lib/events.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ bindDocument)
/* harmony export */ });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util */ "../../../../ssehcit/lib/util.js");

function bindDocument(ctrl) {
    document.addEventListener('mousemove', function (e) {
        ctrl.move((0,_util__WEBPACK_IMPORTED_MODULE_0__.eventPosition)(e));
    });
    document.addEventListener('mouseup', function (e) {
        ctrl.unselect((0,_util__WEBPACK_IMPORTED_MODULE_0__.eventPosition)(e));
    });
}
//# sourceMappingURL=events.js.map

/***/ }),

/***/ "../../../../ssehcit/lib/index.js":
/*!****************************************!*\
  !*** ../../../../ssehcit/lib/index.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _main__WEBPACK_IMPORTED_MODULE_0__.default)
/* harmony export */ });
/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main */ "../../../../ssehcit/lib/main.js");

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../ssehcit/lib/main.js":
/*!***************************************!*\
  !*** ../../../../ssehcit/lib/main.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ app)
/* harmony export */ });
/* harmony import */ var hhh__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hhh */ "../../../../hhh/lib/index.js");
/* harmony import */ var hhh__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hhh__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./events */ "../../../../ssehcit/lib/events.js");
/* harmony import */ var _ctrl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ctrl */ "../../../../ssehcit/lib/ctrl.js");
/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./view */ "../../../../ssehcit/lib/view.js");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./api */ "../../../../ssehcit/lib/api.js");





function app(element) {
    var recons = (0,hhh__WEBPACK_IMPORTED_MODULE_0__.vinit)();
    var ctrl = new _ctrl__WEBPACK_IMPORTED_MODULE_2__.default();
    var view = new _view__WEBPACK_IMPORTED_MODULE_3__.default(ctrl);
    (0,_events__WEBPACK_IMPORTED_MODULE_1__.default)(ctrl);
    var $_ = recons(view.vApp());
    element.appendChild($_);
    ctrl.initPub();
    return new _api__WEBPACK_IMPORTED_MODULE_4__.default(ctrl);
}
//# sourceMappingURL=main.js.map

/***/ }),

/***/ "../../../../ssehcit/lib/util.js":
/*!***************************************!*\
  !*** ../../../../ssehcit/lib/util.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Sub": () => (/* binding */ Sub),
/* harmony export */   "boardPosition": () => (/* binding */ boardPosition),
/* harmony export */   "eventPosition": () => (/* binding */ eventPosition)
/* harmony export */ });
/* harmony import */ var nefs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! nefs */ "../../../../nefs/lib/index.js");
/* harmony import */ var nefs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nefs__WEBPACK_IMPORTED_MODULE_0__);

var Sub = /** @class */ (function () {
    function Sub(a) {
        this.subs = [];
        this.currentValue = a;
    }
    Sub.prototype.sub = function (fn) {
        this.subs.push(fn);
    };
    Sub.prototype.pub = function (val) {
        var _this = this;
        if (val) {
            this.currentValue = val;
        }
        this.subs.forEach(function (_) { return _(_this.currentValue); });
    };
    Sub.prototype.mutate = function (fn) {
        fn(this.currentValue);
        this.pub(this.currentValue);
    };
    return Sub;
}());

function boardPosition(ep, pov, bounds) {
    var pfile = Math.ceil((8 * (ep[0] - bounds.left)) / bounds.width);
    var prank = Math.ceil((8 * (ep[1] - bounds.top)) / bounds.height);
    if (pov === 'w') {
        prank = 9 - prank;
    }
    else {
        pfile = 9 - pfile;
    }
    return nefs__WEBPACK_IMPORTED_MODULE_0__.db.poss.nget(pfile, prank);
}
function eventPosition(e) {
    if (e.clientX || e.clientX === 0)
        return [e.clientX, e.clientY];
    return;
}
//# sourceMappingURL=util.js.map

/***/ }),

/***/ "../../../../ssehcit/lib/view.js":
/*!***************************************!*\
  !*** ../../../../ssehcit/lib/view.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "styleTransform": () => (/* binding */ styleTransform),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var hhh__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hhh */ "../../../../hhh/lib/index.js");
/* harmony import */ var hhh__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hhh__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ssehc__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ssehc */ "../../../../ssehc/lib/index.js");
/* harmony import */ var nefs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! nefs */ "../../../../nefs/lib/index.js");
/* harmony import */ var nefs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(nefs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./util */ "../../../../ssehcit/lib/util.js");



var poss = nefs__WEBPACK_IMPORTED_MODULE_2__.db.poss;

function styleTransform(pos) {
    return function (elm) {
        elm.style.transform = "translate(" + pos[0] + "px," + pos[1] + "px)";
    };
}
var View = /** @class */ (function () {
    function View(ctrl) {
        this.ctrl = ctrl;
        this.bBounds = new _util__WEBPACK_IMPORTED_MODULE_3__.Sub(undefined);
    }
    View.prototype.vSpare = function (color) {
        var _this = this;
        var pieces = nefs__WEBPACK_IMPORTED_MODULE_2__.nt.roles.map(function (role) {
            return nefs__WEBPACK_IMPORTED_MODULE_2__.db.pieces.pget(color, role);
        });
        var v$spares = pieces.map(function (piece) {
            return (0,hhh__WEBPACK_IMPORTED_MODULE_0__.vh)('div.no-square', {}, {
                element: function () { return function ($_) {
                    $_.addEventListener('mousedown', function (e) {
                        _this.ctrl.selectSpare(piece);
                    });
                }; }
            }, [(0,hhh__WEBPACK_IMPORTED_MODULE_0__.h)('div', [(0,hhh__WEBPACK_IMPORTED_MODULE_0__.vh)('piece', { piece: piece }, {
                        klassList: function (_a) {
                            var piece = _a.piece;
                            return [nefs__WEBPACK_IMPORTED_MODULE_2__.nt.longColor[piece.color], nefs__WEBPACK_IMPORTED_MODULE_2__.nt.longRole[piece.role]];
                        }
                    }, [])])
            ]);
        });
        return (0,hhh__WEBPACK_IMPORTED_MODULE_0__.h)('div.spare', v$spares);
    };
    View.prototype.vBoard = function () {
        var _this = this;
        var v$board = (0,hhh__WEBPACK_IMPORTED_MODULE_0__.vh)('div.board', {}, {
            resize: function (bounds) { return _this.bBounds.pub(bounds); },
            element: function () { return function ($_) {
                _this.apiss = (0,ssehc__WEBPACK_IMPORTED_MODULE_1__.default)($_, {});
                $_.addEventListener('mousedown', function (e) {
                    var epos = _util__WEBPACK_IMPORTED_MODULE_3__.eventPosition(e);
                    var orig = _util__WEBPACK_IMPORTED_MODULE_3__.boardPosition(epos, _this.ctrl.subSituation.currentValue.turn, $_.getBoundingClientRect());
                    _this.ctrl.select(orig, epos);
                });
                $_.addEventListener('mouseup', function (e) {
                    var epos = _util__WEBPACK_IMPORTED_MODULE_3__.eventPosition(e);
                    var orig = _util__WEBPACK_IMPORTED_MODULE_3__.boardPosition(epos, _this.ctrl.subSituation.currentValue.turn, $_.getBoundingClientRect());
                    _this.ctrl.unselectBoard(orig);
                });
            }; }
        }, [this.vDrag()]);
        this.ctrl.subSituation.sub(function (situation) {
            _this.apiss.fen(nefs__WEBPACK_IMPORTED_MODULE_2__.f.fen(situation));
        });
        return v$board;
    };
    View.prototype.vDrag = function () {
        var dProps = {
            fPosToTranslate: function (_) { return _; },
            piece: { role: 'r', color: 'w' },
            hidden: true,
            pos: [0, 0]
        };
        var v$drag = (0,hhh__WEBPACK_IMPORTED_MODULE_0__.vh)('piece.dragging', dProps, {
            element: function (_a) {
                var pos = _a.pos, fPosToTranslate = _a.fPosToTranslate;
                return styleTransform(fPosToTranslate(pos));
            },
            klassList: function (_a) {
                var piece = _a.piece, hidden = _a.hidden;
                return [hidden ? 'hidden' : [], nefs__WEBPACK_IMPORTED_MODULE_2__.nt.longRole[piece.role], nefs__WEBPACK_IMPORTED_MODULE_2__.nt.longColor[piece.color]].flat();
            }
        }, [], {});
        this.ctrl.selection.sub(function (selection) {
            if (selection.active) {
                v$drag.update({
                    hidden: false,
                    piece: selection.piece,
                    pos: selection.epos
                });
            }
            else {
                v$drag.update({
                    hidden: true
                });
            }
        });
        this.bBounds.sub(function (bounds) {
            var fPosToTranslate = function (pos) {
                return [pos[0] - bounds.left - bounds.width / 16, pos[1] - bounds.top - bounds.height / 16];
            };
            v$drag.update({
                fPosToTranslate: fPosToTranslate
            });
        });
        return v$drag;
    };
    View.prototype.vApp = function () {
        return (0,hhh__WEBPACK_IMPORTED_MODULE_0__.h)('div.board-editor', [
            this.vSpare('b'),
            this.vBoard(),
            this.vSpare('w')
        ]);
    };
    return View;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (View);
//# sourceMappingURL=view.js.map

/***/ }),

/***/ "../../../../tschess/lib/actor.js":
/*!****************************************!*\
  !*** ../../../../tschess/lib/actor.js ***!
  \****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.moves = exports.actors = exports.castles = void 0;
const nefs_1 = __webpack_require__(/*! nefs */ "../../../../nefs/lib/index.js");
const b = __importStar(__webpack_require__(/*! ./board */ "../../../../tschess/lib/board.js"));
const dir = __importStar(__webpack_require__(/*! ./direction */ "../../../../tschess/lib/direction.js"));
const disp = __importStar(__webpack_require__(/*! ./displace */ "../../../../tschess/lib/displace.js"));
let { poss, pieces } = nefs_1.db;
function castles(board, turn, castle) {
    let situationBefore = {
        board,
        turn
    };
    let king = pieces.pget(turn, 'k');
    let rook = pieces.pget(turn, 'r');
    let origKingPos = b.posOf(board, king);
    if (!origKingPos) {
        return;
    }
    let destKingPos = poss.pget(castle.king, origKingPos[1]);
    let rookTrip = dir.rroute0(castle.trip, origKingPos[0]);
    let origRookPos = b.firstPosForPieceOnRoute(board, rook, origKingPos, rookTrip);
    if (!origRookPos) {
        return;
    }
    let destRookPos = poss.pget(castle.rook, origRookPos[1]);
    let after = b.castle(board, origKingPos, destKingPos, origRookPos, destRookPos);
    if (!after) {
        return;
    }
    return {
        piece: king,
        situationBefore,
        after,
        castle: nefs_1.side.ShortCastle,
        orig: origKingPos,
        dest: destKingPos,
    };
}
exports.castles = castles;
function actors(board, piece, pos, promotion) {
    let res = [];
    for (let [_pos, _piece] of board.entries()) {
        if (_piece === piece &&
            _pos[0] === (pos[0] || _pos[0]) &&
            _pos[1] === (pos[1] || _pos[1]))
            res.push({
                pos: _pos,
                piece,
                board,
                promotion
            });
    }
    return res;
}
exports.actors = actors;
function moves({ board, piece, pos }) {
    let situationBefore = {
        board,
        turn: piece.color
    };
    let projection = disp.projection(pos, piece);
    let captures = disp.route1Captures(pos, piece).flatMap(route0 => {
        let captures = [];
        for (let i = 1; i < projection + 1; i++) {
            let to = route0[i];
            if (!to) {
                continue;
            }
            if (board.get(to)) {
                let after = b.capture(board, pos, to);
                if (after) {
                    captures.push({
                        piece,
                        situationBefore,
                        after,
                        orig: pos,
                        dest: to,
                        capture: to
                    });
                }
                break;
            }
        }
        return captures;
    });
    let moves = disp.route1(pos, piece).flatMap(route0 => {
        let moves = [];
        for (let i = 1; i < projection + 1; i++) {
            let to = route0[i];
            if (!to) {
                continue;
            }
            let _to = to;
            if (!board.get(to)) {
                if (disp.promotes(to, piece)) {
                    nefs_1.nt.promotables.forEach(role => {
                        let b1 = b.move(board, pos, to), after = b.promote(b1, to, role);
                        if (after) {
                            moves.push({
                                piece,
                                situationBefore,
                                after,
                                orig: pos,
                                dest: _to,
                                promotion: role
                            });
                        }
                    });
                }
                else {
                    let after = b.move(board, pos, to);
                    if (after) {
                        moves.push({
                            piece,
                            situationBefore,
                            after,
                            orig: pos,
                            dest: to
                        });
                    }
                }
            }
        }
        return moves;
    });
    return [...moves, ...captures];
}
exports.moves = moves;
//# sourceMappingURL=actor.js.map

/***/ }),

/***/ "../../../../tschess/lib/board.js":
/*!****************************************!*\
  !*** ../../../../tschess/lib/board.js ***!
  \****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.fen = exports.posOf = exports.firstPosForPieceOnRoute = exports.actors = exports.castle = exports.promote = exports.pickup = exports.drop = exports.move = exports.capture = void 0;
const nefs_1 = __webpack_require__(/*! nefs */ "../../../../nefs/lib/index.js");
const u = __importStar(__webpack_require__(/*! ./util */ "../../../../tschess/lib/util.js"));
let { poss } = nefs_1.db;
exports.capture = u.seqable(_capture);
exports.move = u.seqable(_move);
exports.drop = u.seqable(_drop);
exports.pickup = u.seqable(_pickup);
exports.promote = u.seqable(_promote);
exports.castle = u.seqable(_castle);
function actors(board) {
    let res = new Map();
    for (let [pos, piece] of board) {
        if (piece.role === 'p') {
            for (let promotion of nefs_1.nt.promotables) {
                res.set(pos, {
                    pos,
                    piece,
                    board,
                    promotion
                });
            }
        }
        else {
            res.set(pos, {
                pos,
                piece,
                board
            });
        }
    }
    return res;
}
exports.actors = actors;
function firstPosForPieceOnRoute(board, piece, pos, trip) {
    return [...board.entries()]
        .filter(([pos, _piece]) => piece === _piece && trip.includes(pos[0]))
        .map(([k]) => k)[0];
}
exports.firstPosForPieceOnRoute = firstPosForPieceOnRoute;
function posOf(board, piece, file) {
    return [...board.entries()]
        .filter(([pos, _piece]) => (pos[0] === file || pos[0]) && piece === _piece)
        .map(([k]) => k)[0];
}
exports.posOf = posOf;
function fen(board) {
    let res = [];
    for (let rank of nefs_1.nt.directions.slice(0).reverse()) {
        let rankS = '';
        let space = 0;
        for (let file of nefs_1.nt.directions) {
            let piece = board.get(poss.pget(file, rank));
            if (piece) {
                if (space !== 0) {
                    rankS += space;
                    space = 0;
                }
                rankS += nefs_1.pi.fen(piece);
            }
            else {
                space++;
            }
        }
        if (space !== 0) {
            rankS += space;
        }
        res.push(rankS);
    }
    return res.join('/');
}
exports.fen = fen;
function _castle(board, origKing, destKing, origRook, destRook) {
    let king = board.get(origKing), rook = board.get(origRook);
    if (king && rook) {
        let b2 = new Map([...board]);
        b2.delete(origKing);
        b2.delete(origRook);
        b2.set(destKing, king);
        b2.set(destRook, rook);
        return b2;
    }
}
function _capture(board, pos, to) {
    let p = board.get(pos);
    if (p) {
        let b2 = new Map([...board]);
        b2.delete(pos);
        b2.set(to, p);
        return b2;
    }
}
function _pickup(board, pos) {
    let p = board.get(pos);
    if (p) {
        let b2 = new Map([...board]);
        b2.delete(pos);
        return b2;
    }
}
function _drop(board, pos, piece) {
    let b2 = new Map([...board]);
    b2.set(pos, piece);
    return b2;
}
function _move(board, pos, to) {
    let p = board.get(pos);
    if (p) {
        let b2 = new Map([...board]);
        b2.delete(pos);
        b2.set(to, p);
        return b2;
    }
}
function _promote(board, pos, to) {
    let p = board.get(pos);
    if (p) {
        let p2 = {
            role: to,
            color: p.color
        };
        let b2 = new Map([...board]);
        b2.delete(pos);
        b2.set(pos, p2);
        return b2;
    }
}
//# sourceMappingURL=board.js.map

/***/ }),

/***/ "../../../../tschess/lib/direction.js":
/*!********************************************!*\
  !*** ../../../../tschess/lib/direction.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.rroute2 = exports.rroute1 = exports.rroute0 = exports.isRoute0 = exports.isRoute1 = exports.ddir2 = exports.ddir1 = exports.ddir0 = void 0;
const nefs_1 = __webpack_require__(/*! nefs */ "../../../../nefs/lib/index.js");
let { poss } = nefs_1.db;
function ddir0(_d0, d) {
    let _res = (_d0 + d);
    if (nefs_1.p.isDirection(_res)) {
        return _res;
    }
}
exports.ddir0 = ddir0;
function ddir1(_d1, p) {
    return poss.mget(ddir0(_d1[0], p[0]), ddir0(_d1[1], p[1]));
}
exports.ddir1 = ddir1;
function ddir2(_d2, p) {
    let res = new Set();
    _d2.forEach(_ => {
        let _res = ddir1(_, p);
        if (_res) {
            res.add(_res);
        }
    });
    return res;
}
exports.ddir2 = ddir2;
function isRoute1(_) {
    if (Array.isArray(_)) {
        return _.every(isRoute0);
    }
    else {
        return false;
    }
}
exports.isRoute1 = isRoute1;
function isRoute0(_) {
    if (Array.isArray(_)) {
        if (_.length >= 1 && _.length <= 8) {
            return _.every(_ => Array.isArray(_) && _.length === 2);
        }
    }
    return false;
}
exports.isRoute0 = isRoute0;
function rroute0(_d0, dir) {
    let res = [dir];
    let ndir = dir;
    if (_d0 === 0) {
        return res;
    }
    while (true) {
        let _mndir = ddir0(_d0, ndir);
        if (_mndir) {
            ndir = _mndir;
            res.push(ndir);
        }
        else {
            break;
        }
    }
    return res;
}
exports.rroute0 = rroute0;
function rroute1(_d1, pos) {
    let f0 = rroute0(_d1[0], pos[0]), f1 = rroute0(_d1[1], pos[1]);
    let res = [poss.pget(f0[0], f1[0])];
    let oneWraps = Math.min((_d1[0] === 0 ? f1.length : f0.length), (_d1[1] === 0 ? f0.length : f1.length));
    for (let i = 1; i < oneWraps; i++) {
        if (res) {
            res.push(poss.pget(f0[f0.length === 1 ? 0 : i], f1[f1.length === 1 ? 0 : i]));
        }
    }
    return res;
}
exports.rroute1 = rroute1;
function rroute2(_d2, pos) {
    let res = [];
    for (let _d1 of _d2) {
        res.push(rroute1(_d1, pos));
    }
    return res;
}
exports.rroute2 = rroute2;
//# sourceMappingURL=direction.js.map

/***/ }),

/***/ "../../../../tschess/lib/displace.js":
/*!*******************************************!*\
  !*** ../../../../tschess/lib/displace.js ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.opposite = exports.displace = exports.projection = exports.route1 = exports.route1Captures = exports.projections = exports.promotes = void 0;
const dir = __importStar(__webpack_require__(/*! ./direction */ "../../../../tschess/lib/direction.js"));
const dt = __importStar(__webpack_require__(/*! ./dtypes */ "../../../../tschess/lib/dtypes.js"));
let regulars = {
    'n': dt.DKnight,
    'r': dt.DRook,
    'b': dt.DBishop,
    'q': dt.DQueen,
    'k': dt.DKing
};
let pawns = {
    'w': dt.DWPawn,
    'b': dt.DBPawn,
};
let pawnCaptures = {
    'w': dt.DWPawnC,
    'b': dt.DBPawnC
};
const regularProjection = {
    'p': 1,
    'n': 1,
    'r': 8,
    'b': 8,
    'q': 8,
    'k': 1
};
const pawn2MoveRanks = {
    'w': 2,
    'b': 7
};
const pawnPromoteRanks = {
    'w': 8,
    'b': 1
};
function promotes(to, piece) {
    return piece.role === 'p' &&
        to[1] === pawnPromoteRanks[piece.color];
}
exports.promotes = promotes;
exports.projections = [1, 2, 3, 4, 5, 6, 7];
function route1Captures(pos, piece) {
    if (piece.role === 'p') {
        return dir.rroute2(pawnCaptures[piece.color], pos);
    }
    return dir.rroute2(regulars[piece.role], pos);
}
exports.route1Captures = route1Captures;
function route1(pos, piece) {
    if (piece.role === 'p') {
        return dir.rroute2(pawns[piece.color], pos);
    }
    return dir.rroute2(regulars[piece.role], pos);
}
exports.route1 = route1;
function projection(pos, piece) {
    if (piece.role === 'p') {
        if (pawn2MoveRanks[piece.color] === pos[1]) {
            return 2;
        }
    }
    return regularProjection[piece.role];
}
exports.projection = projection;
function displace(a, b) {
    return (a - b);
}
exports.displace = displace;
function opposite(a) {
    return a * -1;
}
exports.opposite = opposite;
//# sourceMappingURL=displace.js.map

/***/ }),

/***/ "../../../../tschess/lib/dtypes.js":
/*!*****************************************!*\
  !*** ../../../../tschess/lib/dtypes.js ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.d2s = exports.DBPawnC = exports.DWPawnC = exports.DBPawn = exports.DWPawn = exports.DBPawn2 = exports.DWPawn2 = exports.DKing = exports.DQueen = exports.DBishop = exports.DRook = exports.DKnight = exports.d1s = exports.d0s = void 0;
const sss = __importStar(__webpack_require__(/*! ./sss */ "../../../../tschess/lib/sss.js"));
exports.d0s = [-7, -6, -5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7];
exports.d1s = [];
for (let d00 of exports.d0s) {
    for (let d01 of exports.d0s) {
        exports.d1s.push([d00, d01]);
    }
}
exports.DKnight = new Set([[-1, 2], [-1, -2],
    [1, 2], [1, -2],
    [2, 1], [2, -1],
    [-2, 1], [-2, -1]]);
exports.DRook = new Set([[-1, 0], [1, 0], [0, -1], [0, 1]]);
exports.DBishop = new Set([[-1, 1], [-1, -1], [1, 1], [1, -1]]);
exports.DQueen = sss.union(exports.DRook, exports.DBishop);
exports.DKing = exports.DQueen;
exports.DWPawn2 = new Set([[0, 2]]);
exports.DBPawn2 = new Set([[0, -2]]);
exports.DWPawn = new Set([[0, 1]]);
exports.DBPawn = new Set([[0, -1]]);
exports.DWPawnC = new Set([[1, 1], [-1, 1]]);
exports.DBPawnC = new Set([[1, -1], [-1, -1]]);
exports.d2s = [
    exports.DKnight,
    exports.DRook,
    exports.DBishop,
    exports.DQueen,
    exports.DKing,
    exports.DWPawn2,
    exports.DBPawn2,
    exports.DWPawn,
    exports.DBPawn,
    exports.DWPawnC,
    exports.DBPawnC
];
//# sourceMappingURL=dtypes.js.map

/***/ }),

/***/ "../../../../tschess/lib/index.js":
/*!****************************************!*\
  !*** ../../../../tschess/lib/index.js ***!
  \****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.dt = exports.m = exports.a = exports.disp = exports.dir = exports.b = exports.ts = void 0;
exports.ts = __importStar(__webpack_require__(/*! ./types */ "../../../../tschess/lib/types.js"));
exports.b = __importStar(__webpack_require__(/*! ./board */ "../../../../tschess/lib/board.js"));
exports.dir = __importStar(__webpack_require__(/*! ./direction */ "../../../../tschess/lib/direction.js"));
exports.disp = __importStar(__webpack_require__(/*! ./displace */ "../../../../tschess/lib/displace.js"));
exports.a = __importStar(__webpack_require__(/*! ./actor */ "../../../../tschess/lib/actor.js"));
exports.m = __importStar(__webpack_require__(/*! ./move */ "../../../../tschess/lib/move.js"));
exports.dt = __importStar(__webpack_require__(/*! ./dtypes */ "../../../../tschess/lib/dtypes.js"));
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../tschess/lib/move.js":
/*!***************************************!*\
  !*** ../../../../tschess/lib/move.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.str = exports.san = exports.uci = exports.situationAfter = exports.move = void 0;
const nefs_1 = __webpack_require__(/*! nefs */ "../../../../nefs/lib/index.js");
const actor_1 = __webpack_require__(/*! ./actor */ "../../../../tschess/lib/actor.js");
let { pieces } = nefs_1.db;
function move(before, sanMeta) {
    if (nefs_1.side.isCastles(sanMeta)) {
        return actor_1.castles(before.board, before.turn, sanMeta);
    }
    else {
        return _move(before, sanMeta);
    }
}
exports.move = move;
function _move(before, sanMeta) {
    let _actors = actor_1.actors(before.board, pieces.pget(before.turn, sanMeta.role), [sanMeta.file, sanMeta.rank], sanMeta.promotion);
    return _actors.flatMap(actor => actor_1.moves(actor)
        .filter(_ => _.dest === sanMeta.to))[0];
}
function situationAfter(move) {
    return {
        board: move.after,
        turn: nefs_1.r.otherColor(move.piece.color)
    };
}
exports.situationAfter = situationAfter;
function uci(move) {
    return nefs_1.p.key(move.orig) + nefs_1.p.key(move.dest);
}
exports.uci = uci;
function san(move) {
    if (move.castle === nefs_1.side.ShortCastle) {
        return "O-O";
    }
    else if (move.castle === nefs_1.side.LongCastle) {
        return "O-O-O";
    }
    let pieceS = '', fileS = '', rankS = '', captureS = '', toS = nefs_1.p.key(move.dest), promotionS = '', checkS = '', mateS = '';
    if (move.piece.role !== 'p') {
        pieceS = nefs_1.pi.fen(move.piece).toUpperCase();
    }
    return [pieceS, fileS, rankS, captureS, toS, promotionS, checkS, mateS].join('');
}
exports.san = san;
function str(move) {
    return nefs_1.p.key(move.orig) + nefs_1.p.key(move.dest);
}
exports.str = str;
//# sourceMappingURL=move.js.map

/***/ }),

/***/ "../../../../tschess/lib/sss.js":
/*!**************************************!*\
  !*** ../../../../tschess/lib/sss.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.union = void 0;
function union(setA, setB) {
    let _union = new Set(setA);
    for (let elem of setB) {
        _union.add(elem);
    }
    return _union;
}
exports.union = union;
//# sourceMappingURL=sss.js.map

/***/ }),

/***/ "../../../../tschess/lib/types.js":
/*!****************************************!*\
  !*** ../../../../tschess/lib/types.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=types.js.map

/***/ }),

/***/ "../../../../tschess/lib/util.js":
/*!***************************************!*\
  !*** ../../../../tschess/lib/util.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.seqable = void 0;
const seqable = (cb) => (x, ...args) => typeof x === "undefined" ? undefined : cb(x, ...args);
exports.seqable = seqable;
//# sourceMappingURL=util.js.map

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!************************!*\
  !*** ./src/devboot.ts ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _main__WEBPACK_IMPORTED_MODULE_1__.default)
/* harmony export */ });
/* harmony import */ var _css_devbeta_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/devbeta.scss */ "./css/devbeta.scss");
/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main */ "./src/main.ts");



})();

kcapeW = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9rY2FwZVcvLi9jc3MvZGV2YmV0YS5zY3NzIiwid2VicGFjazovL2tjYXBlVy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8va2NhcGVXLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8va2NhcGVXLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9rY2FwZVcvLi9jc3MvZGV2YmV0YS5zY3NzPzVmNTQiLCJ3ZWJwYWNrOi8va2NhcGVXLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2tjYXBlVy8uL3NyYy9tYWluLnRzIiwid2VicGFjazovL2tjYXBlVy8uL3NyYy92aWV3LnRzIiwid2VicGFjazovL2tjYXBlVy8uLi9oaGgvbGliL2RpZmYuanMiLCJ3ZWJwYWNrOi8va2NhcGVXLy4uL2hoaC9saWIvaC5qcyIsIndlYnBhY2s6Ly9rY2FwZVcvLi4vaGhoL2xpYi9odG1sZG9tYXBpLmpzIiwid2VicGFjazovL2tjYXBlVy8uLi9oaGgvbGliL2luZGV4LmpzIiwid2VicGFjazovL2tjYXBlVy8uLi9oaGgvbGliL2lzLmpzIiwid2VicGFjazovL2tjYXBlVy8uLi9oaGgvbGliL3ZoLmpzIiwid2VicGFjazovL2tjYXBlVy8uLi9oaGgvbGliL3Zpbml0LmpzIiwid2VicGFjazovL2tjYXBlVy8uLi9uZWZzL2xpYi9ib2FyZC5qcyIsIndlYnBhY2s6Ly9rY2FwZVcvLi4vbmVmcy9saWIvZGIuanMiLCJ3ZWJwYWNrOi8va2NhcGVXLy4uL25lZnMvbGliL2Zlbi5qcyIsIndlYnBhY2s6Ly9rY2FwZVcvLi4vbmVmcy9saWIvaW5kZXguanMiLCJ3ZWJwYWNrOi8va2NhcGVXLy4uL25lZnMvbGliL3BpZWNlLmpzIiwid2VicGFjazovL2tjYXBlVy8uLi9uZWZzL2xpYi9wb3MuanMiLCJ3ZWJwYWNrOi8va2NhcGVXLy4uL25lZnMvbGliL3JvbGUuanMiLCJ3ZWJwYWNrOi8va2NhcGVXLy4uL25lZnMvbGliL3NpZGUuanMiLCJ3ZWJwYWNrOi8va2NhcGVXLy4uL25lZnMvbGliL3R5cGVzLmpzIiwid2VicGFjazovL2tjYXBlVy8uLi9zc2VoYy9saWIvYXBpLmpzIiwid2VicGFjazovL2tjYXBlVy8uLi9zc2VoYy9saWIvY3RybC5qcyIsIndlYnBhY2s6Ly9rY2FwZVcvLi4vc3NlaGMvbGliL2luZGV4LmpzIiwid2VicGFjazovL2tjYXBlVy8uLi9zc2VoYy9saWIvbWFpbi5qcyIsIndlYnBhY2s6Ly9rY2FwZVcvLi4vc3NlaGMvbGliL3V0aWwuanMiLCJ3ZWJwYWNrOi8va2NhcGVXLy4uL3NzZWhjL2xpYi92aWV3LmpzIiwid2VicGFjazovL2tjYXBlVy8uLi9zc2VoY2l0L2xpYi9hcGkuanMiLCJ3ZWJwYWNrOi8va2NhcGVXLy4uL3NzZWhjaXQvbGliL2N0cmwuanMiLCJ3ZWJwYWNrOi8va2NhcGVXLy4uL3NzZWhjaXQvbGliL2V2ZW50cy5qcyIsIndlYnBhY2s6Ly9rY2FwZVcvLi4vc3NlaGNpdC9saWIvaW5kZXguanMiLCJ3ZWJwYWNrOi8va2NhcGVXLy4uL3NzZWhjaXQvbGliL21haW4uanMiLCJ3ZWJwYWNrOi8va2NhcGVXLy4uL3NzZWhjaXQvbGliL3V0aWwuanMiLCJ3ZWJwYWNrOi8va2NhcGVXLy4uL3NzZWhjaXQvbGliL3ZpZXcuanMiLCJ3ZWJwYWNrOi8va2NhcGVXLy4uL3RzY2hlc3MvbGliL2FjdG9yLmpzIiwid2VicGFjazovL2tjYXBlVy8uLi90c2NoZXNzL2xpYi9ib2FyZC5qcyIsIndlYnBhY2s6Ly9rY2FwZVcvLi4vdHNjaGVzcy9saWIvZGlyZWN0aW9uLmpzIiwid2VicGFjazovL2tjYXBlVy8uLi90c2NoZXNzL2xpYi9kaXNwbGFjZS5qcyIsIndlYnBhY2s6Ly9rY2FwZVcvLi4vdHNjaGVzcy9saWIvZHR5cGVzLmpzIiwid2VicGFjazovL2tjYXBlVy8uLi90c2NoZXNzL2xpYi9pbmRleC5qcyIsIndlYnBhY2s6Ly9rY2FwZVcvLi4vdHNjaGVzcy9saWIvbW92ZS5qcyIsIndlYnBhY2s6Ly9rY2FwZVcvLi4vdHNjaGVzcy9saWIvc3NzLmpzIiwid2VicGFjazovL2tjYXBlVy8uLi90c2NoZXNzL2xpYi90eXBlcy5qcyIsIndlYnBhY2s6Ly9rY2FwZVcvLi4vdHNjaGVzcy9saWIvdXRpbC5qcyIsIndlYnBhY2s6Ly9rY2FwZVcvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8va2NhcGVXL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2tjYXBlVy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8va2NhcGVXL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8va2NhcGVXL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8va2NhcGVXL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8va2NhcGVXL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2tjYXBlVy8uL3NyYy9kZXZib290LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNzSDtBQUM3QjtBQUNPO0FBQ2Y7QUFDakYsOEJBQThCLG1GQUEyQixDQUFDLHdHQUFxQztBQUMvRix5Q0FBeUMsc0ZBQStCLENBQUMsNERBQTZCO0FBQ3RHO0FBQ0Esb0RBQW9ELHNFQUFzRSxHQUFHLGFBQWEsbUNBQW1DLG1DQUFtQyx1QkFBdUIsZ0JBQWdCLGlCQUFpQixtQkFBbUIsR0FBRyxrQkFBa0IsdUJBQXVCLGtCQUFr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QUNBO1dBQ0Esa0M7Ozs7Ozs7Ozs7Ozs7Ozs7QUNmNkI7QUFFSSIsImZpbGUiOiJtYWluLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyBmcm9tIFwiLi4vLi4vY29tbW9uL2Fzc2V0cy9waW5rLXB5cmFtaWQucG5nXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwibWQtYm9hcmQge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG59XFxuXFxubWQtd3JhcCB7XFxuICAtLW1kLWNvb3JkLWNvbG9yLWJsYWNrOiNFRDcyNzI7XFxuICAtLW1kLWNvb3JkLWNvbG9yLXdoaXRlOiNFOEU5Qjc7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5tZC13cmFwIGNvb3JkcyB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICBvcGFjaXR5OiAwLjg7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uLy4uL2NvbW1vbi9jc3MvdmVuZG9yL19ib2FyZC5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9jc3MvZGV2YmV0YS5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi8uLi9jb21tb24vY3NzL3ZlbmRvci9fc3NlaGMuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLHlEQUFBO0FDQ0Y7O0FDQUE7RUFDRSw4QkFBQTtFQUNBLDhCQUFBO0VBRUEsa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7QURFRjtBQ0FFO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0VBQ0Esb0JBQUE7RUFDQSxZQUFBO0FERUpcIixcInNvdXJjZXNDb250ZW50XCI6W1wibWQtYm9hcmQge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcjeyRhc3NldC1wYXRofS9waW5rLXB5cmFtaWQucG5nJyk7XFxufVxcblwiLFwibWQtYm9hcmQge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCIuLi8uLi9jb21tb24vYXNzZXRzLy9waW5rLXB5cmFtaWQucG5nXFxcIik7XFxufVxcblxcbm1kLXdyYXAge1xcbiAgLS1tZC1jb29yZC1jb2xvci1ibGFjazojRUQ3MjcyO1xcbiAgLS1tZC1jb29yZC1jb2xvci13aGl0ZTojRThFOUI3O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxubWQtd3JhcCBjb29yZHMge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgb3BhY2l0eTogMC44O1xcbn1cIixcIkBpbXBvcnQgJ2JvYXJkJztcXG5cXG5tZC13cmFwIHtcXG4gIC0tbWQtY29vcmQtY29sb3ItYmxhY2s6I0VENzI3MjtcXG4gIC0tbWQtY29vcmQtY29sb3Itd2hpdGU6I0U4RTlCNztcXG5cXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuXFxuICBjb29yZHMge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgICBvcGFjaXR5OiAwLjg7IFxcbiAgfVxcbiAgXFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgXCJcIl1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2ldKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiXCIuY29uY2F0KG1lZGlhUXVlcnksIFwiIGFuZCBcIikuY29uY2F0KGl0ZW1bMl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBfc2xpY2VkVG9BcnJheShhcnIsIGkpIHsgcmV0dXJuIF9hcnJheVdpdGhIb2xlcyhhcnIpIHx8IF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHx8IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIsIGkpIHx8IF9ub25JdGVyYWJsZVJlc3QoKTsgfVxuXG5mdW5jdGlvbiBfbm9uSXRlcmFibGVSZXN0KCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpOyB9XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHsgaWYgKCFvKSByZXR1cm47IGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTsgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTsgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7IGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgfVxuXG5mdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikgeyBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDsgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7IGFycjJbaV0gPSBhcnJbaV07IH0gcmV0dXJuIGFycjI7IH1cblxuZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgeyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJ1bmRlZmluZWRcIiB8fCAhKFN5bWJvbC5pdGVyYXRvciBpbiBPYmplY3QoYXJyKSkpIHJldHVybjsgdmFyIF9hcnIgPSBbXTsgdmFyIF9uID0gdHJ1ZTsgdmFyIF9kID0gZmFsc2U7IHZhciBfZSA9IHVuZGVmaW5lZDsgdHJ5IHsgZm9yICh2YXIgX2kgPSBhcnJbU3ltYm9sLml0ZXJhdG9yXSgpLCBfczsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkgeyBfYXJyLnB1c2goX3MudmFsdWUpOyBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7IH0gfSBjYXRjaCAoZXJyKSB7IF9kID0gdHJ1ZTsgX2UgPSBlcnI7IH0gZmluYWxseSB7IHRyeSB7IGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0gIT0gbnVsbCkgX2lbXCJyZXR1cm5cIl0oKTsgfSBmaW5hbGx5IHsgaWYgKF9kKSB0aHJvdyBfZTsgfSB9IHJldHVybiBfYXJyOyB9XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhIb2xlcyhhcnIpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycjsgfVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSkge1xuICB2YXIgX2l0ZW0gPSBfc2xpY2VkVG9BcnJheShpdGVtLCA0KSxcbiAgICAgIGNvbnRlbnQgPSBfaXRlbVsxXSxcbiAgICAgIGNzc01hcHBpbmcgPSBfaXRlbVszXTtcblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgIG9wdGlvbnMgPSB7fTtcbiAgfSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZXJzY29yZS1kYW5nbGUsIG5vLXBhcmFtLXJlYXNzaWduXG5cblxuICB1cmwgPSB1cmwgJiYgdXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybDtcblxuICBpZiAodHlwZW9mIHVybCAhPT0gXCJzdHJpbmdcIikge1xuICAgIHJldHVybiB1cmw7XG4gIH0gLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiaW1wb3J0IGFwaSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgICAgICAgaW1wb3J0IGNvbnRlbnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vZGV2YmV0YS5zY3NzXCI7XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0IGRlZmF1bHQgY29udGVudC5sb2NhbHMgfHwge307IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBpc09sZElFID0gZnVuY3Rpb24gaXNPbGRJRSgpIHtcbiAgdmFyIG1lbW87XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSgpIHtcbiAgICBpZiAodHlwZW9mIG1lbW8gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuICAgICAgLy8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuICAgICAgLy8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuICAgICAgLy8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG4gICAgICAvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcbiAgICAgIG1lbW8gPSBCb29sZWFuKHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtbztcbiAgfTtcbn0oKTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uIGdldFRhcmdldCgpIHtcbiAgdmFyIG1lbW8gPSB7fTtcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKHRhcmdldCkge1xuICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtb1t0YXJnZXRdO1xuICB9O1xufSgpO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgdmFyIGF0dHJpYnV0ZXMgPSBvcHRpb25zLmF0dHJpYnV0ZXMgfHwge307XG5cbiAgaWYgKHR5cGVvZiBhdHRyaWJ1dGVzLm5vbmNlID09PSAndW5kZWZpbmVkJykge1xuICAgIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gJ3VuZGVmaW5lZCcgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgICBpZiAobm9uY2UpIHtcbiAgICAgIGF0dHJpYnV0ZXMubm9uY2UgPSBub25jZTtcbiAgICB9XG4gIH1cblxuICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyaWJ1dGVzW2tleV0pO1xuICB9KTtcblxuICBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICB9IGVsc2Uge1xuICAgIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQob3B0aW9ucy5pbnNlcnQgfHwgJ2hlYWQnKTtcblxuICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICAgIH1cblxuICAgIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gIH1cblxuICByZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbnZhciByZXBsYWNlVGV4dCA9IGZ1bmN0aW9uIHJlcGxhY2VUZXh0KCkge1xuICB2YXIgdGV4dFN0b3JlID0gW107XG4gIHJldHVybiBmdW5jdGlvbiByZXBsYWNlKGluZGV4LCByZXBsYWNlbWVudCkge1xuICAgIHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcbiAgICByZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcbiAgfTtcbn0oKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyhzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG4gIHZhciBjc3MgPSByZW1vdmUgPyAnJyA6IG9iai5tZWRpYSA/IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIikuY29uY2F0KG9iai5jc3MsIFwifVwiKSA6IG9iai5jc3M7IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG4gICAgdmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG4gICAgaWYgKGNoaWxkTm9kZXNbaW5kZXhdKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfVxuXG4gICAgaWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG4gICAgICBzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyhzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZSgnbWVkaWEnLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKCdtZWRpYScpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyIHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlO1xuICB2YXIgdXBkYXRlO1xuICB2YXIgcmVtb3ZlO1xuXG4gIGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuICAgIHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuICAgIHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuICAgIHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUgPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblxuICAgIHJlbW92ZSA9IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfTtcbiAgfVxuXG4gIHVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICByZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307IC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuICAvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cbiAgaWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09ICdib29sZWFuJykge1xuICAgIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuICB9XG5cbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChuZXdMaXN0KSAhPT0gJ1tvYmplY3QgQXJyYXldJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRvbVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5Eb21bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5Eb20uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJpbXBvcnQgeyB2aW5pdCB9IGZyb20gJ2hoaCc7XG5pbXBvcnQgdmlldyBmcm9tICcuL3ZpZXcnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhcHAoZWxlbWVudDogRWxlbWVudCkge1xuXG4gIGxldCByZWNvbnMgPSB2aW5pdCgpO1xuXG4gIGxldCB2bm9kZSA9IHZpZXcoKTtcblxuICBsZXQgJF8gPSByZWNvbnModm5vZGUpO1xuXG4gIGVsZW1lbnQuYXBwZW5kQ2hpbGQoJF8pO1xufVxuIiwiaW1wb3J0IHsgdmgsIGggfSBmcm9tICdoaGgnO1xuaW1wb3J0IHNzZWhjaVQgZnJvbSAnc3NlaGNpdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHZpZXcoKSB7XG5cbiAgcmV0dXJuIHZoKCdkaXYnLCB7fSwge1xuICAgIGVsZW1lbnQ6ICgpID0+IChlbG06IE5vZGUpID0+IHtcbiAgICAgIHNzZWhjaVQoZWxtKTtcbiAgICB9XG4gIH0sIFtdKTtcbiAgXG59XG4iLCJcInVzZSBzdHJpY3RcIjtcbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmFycmF5ID0gdm9pZCAwO1xuZnVuY3Rpb24gcmVmRXF1YWwoYSwgYikge1xuICAgIHJldHVybiBhID09PSBiO1xufVxuZnVuY3Rpb24gYXJyYXkobHMsIG9scywgaXNFcXVhbCkge1xuICAgIGlmIChpc0VxdWFsID09PSB2b2lkIDApIHsgaXNFcXVhbCA9IHJlZkVxdWFsOyB9XG4gICAgdmFyIHN0aWxsID0gW10sIGFkZGVkID0gW10sIHJlbW92ZWQgPSBbXTtcbiAgICB2YXIgX2xvb3BfMSA9IGZ1bmN0aW9uIChsKSB7XG4gICAgICAgIGlmIChvbHMuZmluZChmdW5jdGlvbiAoXykgeyByZXR1cm4gaXNFcXVhbChfLCBsKTsgfSkpIHtcbiAgICAgICAgICAgIHN0aWxsLnB1c2gobCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBhZGRlZC5wdXNoKGwpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBmb3IgKHZhciBfaSA9IDAsIGxzXzEgPSBsczsgX2kgPCBsc18xLmxlbmd0aDsgX2krKykge1xuICAgICAgICB2YXIgbCA9IGxzXzFbX2ldO1xuICAgICAgICBfbG9vcF8xKGwpO1xuICAgIH1cbiAgICB2YXIgX2xvb3BfMiA9IGZ1bmN0aW9uIChsKSB7XG4gICAgICAgIGlmICghc3RpbGwuZmluZChmdW5jdGlvbiAoXykgeyByZXR1cm4gaXNFcXVhbChsLCBfKTsgfSkgJiZcbiAgICAgICAgICAgICFhZGRlZC5maW5kKGZ1bmN0aW9uIChfKSB7IHJldHVybiBpc0VxdWFsKGwsIF8pOyB9KSkge1xuICAgICAgICAgICAgcmVtb3ZlZC5wdXNoKGwpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBmb3IgKHZhciBfYSA9IDAsIG9sc18xID0gb2xzOyBfYSA8IG9sc18xLmxlbmd0aDsgX2ErKykge1xuICAgICAgICB2YXIgbCA9IG9sc18xW19hXTtcbiAgICAgICAgX2xvb3BfMihsKTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgICAgYWRkZWQ6IGFkZGVkLFxuICAgICAgICByZW1vdmVkOiByZW1vdmVkLFxuICAgICAgICBzdGlsbDogc3RpbGxcbiAgICB9O1xufVxuZXhwb3J0cy5hcnJheSA9IGFycmF5O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5oID0gdm9pZCAwO1xudmFyIGlzID0gcmVxdWlyZShcIi4vaXNcIik7XG52YXIgdmhfMSA9IHJlcXVpcmUoXCIuL3ZoXCIpO1xuZnVuY3Rpb24gaChzZWwsIGIsIGMpIHtcbiAgICB2YXIgZGF0YSA9IHt9O1xuICAgIHZhciBwcm9wO1xuICAgIHZhciB0ZXh0T3JDaGlsZHJlbjtcbiAgICB2YXIgaTtcbiAgICBpZiAoYyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGlmIChiICE9PSBudWxsKSB7XG4gICAgICAgICAgICBkYXRhID0gYjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaXMuYXJyYXkoYykpIHtcbiAgICAgICAgICAgIHRleHRPckNoaWxkcmVuID0gYztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChpcy5wcmltaXRpdmUoYykpIHtcbiAgICAgICAgICAgIHRleHRPckNoaWxkcmVuID0gYyArICcnO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGMgJiYgYy5zZWwpIHtcbiAgICAgICAgICAgIHRleHRPckNoaWxkcmVuID0gW2NdO1xuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2UgaWYgKGIgIT09IHVuZGVmaW5lZCAmJiBiICE9PSBudWxsKSB7XG4gICAgICAgIGlmIChpcy5hcnJheShiKSkge1xuICAgICAgICAgICAgdGV4dE9yQ2hpbGRyZW4gPSBiO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGlzLnByaW1pdGl2ZShiKSkge1xuICAgICAgICAgICAgdGV4dE9yQ2hpbGRyZW4gPSBiICsgJyc7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoYiAmJiBiLnNlbCkge1xuICAgICAgICAgICAgdGV4dE9yQ2hpbGRyZW4gPSBbYl07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBkYXRhID0gYjtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAodGV4dE9yQ2hpbGRyZW4gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBpZiAodHlwZW9mIHRleHRPckNoaWxkcmVuID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgcmV0dXJuIHZoXzEudmgoc2VsLCBwcm9wLCBkYXRhLCBbdmhfMS52aCh7IHRleHQ6IHRleHRPckNoaWxkcmVuIH0sIHVuZGVmaW5lZCwge30sIFtdKV0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdmFyIGNoaWxkcmVuID0gdGV4dE9yQ2hpbGRyZW4ubWFwKGZ1bmN0aW9uIChjaGlsZCkge1xuICAgICAgICAgICAgICAgIGlmIChpcy5wcmltaXRpdmUoY2hpbGQpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB2aF8xLnZoKHsgdGV4dDogY2hpbGQgfSwgdW5kZWZpbmVkLCB7fSwgW10pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNoaWxkO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIHZoXzEudmgoc2VsLCBwcm9wLCBkYXRhLCBjaGlsZHJlbik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHJldHVybiB2aF8xLnZoKHNlbCwgcHJvcCwgZGF0YSwgW10pO1xuICAgIH1cbn1cbmV4cG9ydHMuaCA9IGg7XG4iLCJcInVzZSBzdHJpY3RcIjtcbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmh0bWxEb21BcGkgPSB2b2lkIDA7XG5mdW5jdGlvbiBjcmVhdGVFbGVtZW50KHRhZ05hbWUsIG9wdGlvbnMpIHtcbiAgICByZXR1cm4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWdOYW1lLCBvcHRpb25zKTtcbn1cbmZ1bmN0aW9uIGNyZWF0ZVRleHROb2RlKHRleHQpIHtcbiAgICByZXR1cm4gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUodGV4dCk7XG59XG5mdW5jdGlvbiBhcHBlbmRDaGlsZChub2RlLCBjaGlsZCkge1xuICAgIG5vZGUuYXBwZW5kQ2hpbGQoY2hpbGQpO1xufVxuZXhwb3J0cy5odG1sRG9tQXBpID0ge1xuICAgIGNyZWF0ZUVsZW1lbnQ6IGNyZWF0ZUVsZW1lbnQsXG4gICAgY3JlYXRlVGV4dE5vZGU6IGNyZWF0ZVRleHROb2RlLFxuICAgIGFwcGVuZENoaWxkOiBhcHBlbmRDaGlsZFxufTtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fY3JlYXRlQmluZGluZyA9ICh0aGlzICYmIHRoaXMuX19jcmVhdGVCaW5kaW5nKSB8fCAoT2JqZWN0LmNyZWF0ZSA/IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIGsyLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24oKSB7IHJldHVybiBtW2tdOyB9IH0pO1xufSkgOiAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xuICAgIG9bazJdID0gbVtrXTtcbn0pKTtcbnZhciBfX2V4cG9ydFN0YXIgPSAodGhpcyAmJiB0aGlzLl9fZXhwb3J0U3RhcikgfHwgZnVuY3Rpb24obSwgZXhwb3J0cykge1xuICAgIGZvciAodmFyIHAgaW4gbSkgaWYgKHAgIT09IFwiZGVmYXVsdFwiICYmICFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoZXhwb3J0cywgcCkpIF9fY3JlYXRlQmluZGluZyhleHBvcnRzLCBtLCBwKTtcbn07XG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuX19leHBvcnRTdGFyKHJlcXVpcmUoXCIuL2hcIiksIGV4cG9ydHMpO1xuX19leHBvcnRTdGFyKHJlcXVpcmUoXCIuL3ZoXCIpLCBleHBvcnRzKTtcbl9fZXhwb3J0U3RhcihyZXF1aXJlKFwiLi92aW5pdFwiKSwgZXhwb3J0cyk7XG4iLCJcInVzZSBzdHJpY3RcIjtcbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLnByaW1pdGl2ZSA9IGV4cG9ydHMuYXJyYXkgPSB2b2lkIDA7XG5leHBvcnRzLmFycmF5ID0gQXJyYXkuaXNBcnJheTtcbmZ1bmN0aW9uIHByaW1pdGl2ZShzKSB7XG4gICAgcmV0dXJuIHR5cGVvZiBzID09PSAnc3RyaW5nJyB8fCB0eXBlb2YgcyA9PT0gJ251bWJlcic7XG59XG5leHBvcnRzLnByaW1pdGl2ZSA9IHByaW1pdGl2ZTtcbiIsIlwidXNlIHN0cmljdFwiO1xuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMudmggPSBleHBvcnRzLnZtYXAgPSBleHBvcnRzLmlzVkhOb2RlID0gZXhwb3J0cy5WUGFpciA9IHZvaWQgMDtcbnZhciBWUGFpciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBWUGFpcihvbGRVcGRhdGUpIHtcbiAgICAgICAgdGhpcy5vbGRVcGRhdGUgPSBvbGRVcGRhdGU7XG4gICAgfVxuICAgIFZQYWlyLnByb3RvdHlwZS5hZGQgPSBmdW5jdGlvbiAodXBkYXRlKSB7XG4gICAgICAgIHZhciBvbGRVcGRhdGUgPSB0aGlzLm9sZFVwZGF0ZTtcbiAgICAgICAgdGhpcy5vbGRVcGRhdGUgPSB1cGRhdGU7XG4gICAgICAgIHJldHVybiBbdXBkYXRlLCBvbGRVcGRhdGVdO1xuICAgIH07XG4gICAgcmV0dXJuIFZQYWlyO1xufSgpKTtcbmV4cG9ydHMuVlBhaXIgPSBWUGFpcjtcbmZ1bmN0aW9uIGlzVkhOb2RlKF8pIHtcbiAgICByZXR1cm4gKF8uc2VsT3JUZXh0ICE9PSB1bmRlZmluZWQpO1xufVxuZXhwb3J0cy5pc1ZITm9kZSA9IGlzVkhOb2RlO1xuZnVuY3Rpb24gdm1hcChkYXRhLCBtZiwgcGFyZW50UHJvcCkge1xuICAgIHJldHVybiB7XG4gICAgICAgIGRhdGE6IGRhdGEsXG4gICAgICAgIHVwZGF0ZVBhaXI6IG5ldyBWUGFpcihbXSksXG4gICAgICAgIG1mOiBtZixcbiAgICAgICAgcGFyZW50UHJvcDogcGFyZW50UHJvcCxcbiAgICAgICAgdXBkYXRlOiBmdW5jdGlvbiAoXykgeyB9LFxuICAgICAgICB1cGRhdGVQcm9wOiBmdW5jdGlvbiAoXykgeyB9XG4gICAgfTtcbn1cbmV4cG9ydHMudm1hcCA9IHZtYXA7XG5mdW5jdGlvbiB2aChzZWxPclRleHQsIHByb3AsIHVwZGF0ZXMsIGNoaWxkcmVuLCBwYXJlbnRQcm9wKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgc2VsT3JUZXh0OiBzZWxPclRleHQsXG4gICAgICAgIHByb3A6IHByb3AsXG4gICAgICAgIHBhcmVudFByb3A6IHBhcmVudFByb3AsXG4gICAgICAgIHVwZGF0ZXM6IHVwZGF0ZXMsXG4gICAgICAgIHVwZGF0ZVBhaXJzOiB7XG4gICAgICAgICAgICBrbGFzc0xpc3Q6IG5ldyBWUGFpcihbXSlcbiAgICAgICAgfSxcbiAgICAgICAgdXBkYXRlOiBmdW5jdGlvbiAoXykgeyB9LFxuICAgICAgICB1cGRhdGVQYXJlbnRQcm9wOiBmdW5jdGlvbiAoXykgeyB9LFxuICAgICAgICBjaGlsZHJlbjogY2hpbGRyZW5cbiAgICB9O1xufVxuZXhwb3J0cy52aCA9IHZoO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19hc3NpZ24gPSAodGhpcyAmJiB0aGlzLl9fYXNzaWduKSB8fCBmdW5jdGlvbiAoKSB7XG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKVxuICAgICAgICAgICAgICAgIHRbcF0gPSBzW3BdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0O1xuICAgIH07XG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59O1xuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMudmluaXQgPSB2b2lkIDA7XG52YXIgdmhfMSA9IHJlcXVpcmUoXCIuL3ZoXCIpO1xudmFyIGh0bWxkb21hcGlfMSA9IHJlcXVpcmUoXCIuL2h0bWxkb21hcGlcIik7XG52YXIgZGlmZiA9IHJlcXVpcmUoXCIuL2RpZmZcIik7XG5mdW5jdGlvbiB2aW5pdCgpIHtcbiAgICBmdW5jdGlvbiBzaGFsbG93RXF1YWwoYSwgYikge1xuICAgICAgICBpZiAodHlwZW9mIGEgPT09ICdvYmplY3QnICYmIHR5cGVvZiBiID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgZm9yICh2YXIga2V5IGluIGEpIHtcbiAgICAgICAgICAgICAgICBpZiAoYVtrZXldICE9PSBiW2tleV0pIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGEgPT09IGI7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gdXBkYXRlQ2hpbGRyZW4odXBkYXRlUGFpci5hZGQoZGF0YSksIG1mLCAkZCk7XG4gICAgZnVuY3Rpb24gdXBkYXRlQ2hpbGRyZW4oX2EsIG1mLCBjaGlsZHJlbiwgcGFyZW50UHJvcCwgJHBhcmVudCkge1xuICAgICAgICB2YXIgYXJyID0gX2FbMF0sIG9sZEFycmF5ID0gX2FbMV07XG4gICAgICAgIHZhciBfYiA9IGRpZmYuYXJyYXkoYXJyLCBvbGRBcnJheSwgc2hhbGxvd0VxdWFsKSwgYWRkZWQgPSBfYi5hZGRlZCwgcmVtb3ZlZCA9IF9iLnJlbW92ZWQsIHN0aWxsID0gX2Iuc3RpbGw7XG4gICAgICAgIHZhciByZWN5Y2xlID0gW107XG4gICAgICAgIHJlbW92ZWQuZm9yRWFjaChmdW5jdGlvbiAoXykge1xuICAgICAgICAgICAgdmFyIF8kID0gQXJyYXkuZnJvbShjaGlsZHJlbi5rZXlzKCkpLmZpbmQoZnVuY3Rpb24gKF92JCkgeyByZXR1cm4gc2hhbGxvd0VxdWFsKF92JC5wcm9wLCBfKTsgfSk7XG4gICAgICAgICAgICBpZiAoXyQpIHtcbiAgICAgICAgICAgICAgICByZWN5Y2xlLnB1c2goXyQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgYWRkZWQuZm9yRWFjaChmdW5jdGlvbiAoXykge1xuICAgICAgICAgICAgdmFyIHYkID0gcmVjeWNsZS5wb3AoKTtcbiAgICAgICAgICAgIGlmICh2JCkge1xuICAgICAgICAgICAgICAgIHYkLnVwZGF0ZShfKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHZhciBuZXdWJCA9IG1mKF8sIHBhcmVudFByb3ApLCBuZXckID0gcmVjb25zKG5ld1YkKTtcbiAgICAgICAgICAgICAgICAkcGFyZW50LmFwcGVuZENoaWxkKG5ldyQpO1xuICAgICAgICAgICAgICAgIGNoaWxkcmVuLnNldChuZXdWJCwgbmV3JCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZWN5Y2xlLmZvckVhY2goZnVuY3Rpb24gKHIkKSB7XG4gICAgICAgICAgICB2YXIgJF8gPSBjaGlsZHJlbi5nZXQociQpO1xuICAgICAgICAgICAgaWYgKCRfKSB7XG4gICAgICAgICAgICAgICAgJHBhcmVudC5yZW1vdmVDaGlsZCgkXyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjaGlsZHJlbltcImRlbGV0ZVwiXShyJCk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBmdW5jdGlvbiB1cGRhdGVLbGFzc0xpc3QoX2EsIGVsbSkge1xuICAgICAgICB2YXIga2xhc3NMaXN0ID0gX2FbMF0sIG9sZEtsYXNzTGlzdCA9IF9hWzFdO1xuICAgICAgICB2YXIgX2IgPSBkaWZmLmFycmF5KGtsYXNzTGlzdCwgb2xkS2xhc3NMaXN0KSwgYWRkZWQgPSBfYi5hZGRlZCwgcmVtb3ZlZCA9IF9iLnJlbW92ZWQsIHN0aWxsID0gX2Iuc3RpbGw7XG4gICAgICAgIHJlbW92ZWQuZm9yRWFjaChmdW5jdGlvbiAoXykge1xuICAgICAgICAgICAgcmV0dXJuIGVsbS5jbGFzc0xpc3QucmVtb3ZlKF8pO1xuICAgICAgICB9KTtcbiAgICAgICAgYWRkZWQuZm9yRWFjaChmdW5jdGlvbiAoXykge1xuICAgICAgICAgICAgcmV0dXJuIGVsbS5jbGFzc0xpc3QuYWRkKF8pO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgZnVuY3Rpb24gdXBkYXRlVkNoaWxkcmVuKGNoaWxkcmVuLCAkcGFyZW50KSB7XG4gICAgICAgIHZhciB1cGRhdGVQYWlyID0gY2hpbGRyZW4udXBkYXRlUGFpciwgbWYgPSBjaGlsZHJlbi5tZiwgZGF0YSA9IGNoaWxkcmVuLmRhdGEsIHBhcmVudFByb3AgPSBjaGlsZHJlbi5wYXJlbnRQcm9wO1xuICAgICAgICB2YXIgY21hcCA9IG5ldyBNYXAoKTtcbiAgICAgICAgY2hpbGRyZW4udXBkYXRlID0gZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgICAgIHVwZGF0ZUNoaWxkcmVuKHVwZGF0ZVBhaXIuYWRkKGRhdGEpLCBtZiwgY21hcCwgcGFyZW50UHJvcCwgJHBhcmVudCk7XG4gICAgICAgIH07XG4gICAgICAgIGNoaWxkcmVuLnVwZGF0ZVByb3AgPSBmdW5jdGlvbiAocHJvcCkge1xuICAgICAgICAgICAgcGFyZW50UHJvcCA9IHByb3A7XG4gICAgICAgICAgICBBcnJheS5mcm9tKGNtYXAua2V5cygpKS5mb3JFYWNoKGZ1bmN0aW9uIChfKSB7XG4gICAgICAgICAgICAgICAgXy51cGRhdGVQYXJlbnRQcm9wKHByb3ApO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICAgIGNoaWxkcmVuLnVwZGF0ZShkYXRhKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gdXBkYXRlVkhOb2RlQ2hpbGQoY2hpbGQsICRwYXJlbnQpIHtcbiAgICAgICAgdmFyICRfID0gcmVjb25zKGNoaWxkKTtcbiAgICAgICAgJHBhcmVudC5hcHBlbmRDaGlsZCgkXyk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHByb3BDb21iaW5lKG9wcm9wLCBwcm9wKSB7XG4gICAgICAgIGlmICh0eXBlb2Ygb3Byb3AgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHByb3AgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF9fYXNzaWduKF9fYXNzaWduKHt9LCBvcHJvcCksIHByb3ApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBwcm9wO1xuICAgIH1cbiAgICBmdW5jdGlvbiByZWNvbnModmgpIHtcbiAgICAgICAgdmFyIGFwaSA9IGh0bWxkb21hcGlfMS5odG1sRG9tQXBpO1xuICAgICAgICB2YXIgc2VsT3JUZXh0ID0gdmguc2VsT3JUZXh0LCBwcm9wID0gdmgucHJvcCwgdXBkYXRlcyA9IHZoLnVwZGF0ZXMsIHVwZGF0ZVBhaXJzID0gdmgudXBkYXRlUGFpcnMsIGNoaWxkcmVuID0gdmguY2hpbGRyZW47XG4gICAgICAgIHZhciAkZCwgJGRjO1xuICAgICAgICBpZiAodHlwZW9mIHNlbE9yVGV4dCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIHZhciBfYSA9IHNlbE9yVGV4dC5zcGxpdCgnLicpLCB0YWduYW1lID0gX2FbMF0sIGtsYXNzID0gX2Euc2xpY2UoMSk7XG4gICAgICAgICAgICAkZCA9IGFwaS5jcmVhdGVFbGVtZW50KHRhZ25hbWUpO1xuICAgICAgICAgICAga2xhc3MuZm9yRWFjaChmdW5jdGlvbiAoXykge1xuICAgICAgICAgICAgICAgIHJldHVybiAkZC5jbGFzc0xpc3QuYWRkKF8pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAkZCA9IGFwaS5jcmVhdGVUZXh0Tm9kZShzZWxPclRleHQudGV4dCk7XG4gICAgICAgIH1cbiAgICAgICAgdmgudXBkYXRlUGFyZW50UHJvcCA9IGZ1bmN0aW9uIChwcm9wKSB7XG4gICAgICAgICAgICB2aC5wYXJlbnRQcm9wID0gcHJvcDtcbiAgICAgICAgICAgIHZoLnVwZGF0ZSh2aC5wcm9wKTtcbiAgICAgICAgfTtcbiAgICAgICAgdmgudXBkYXRlID0gZnVuY3Rpb24gKF9wcm9wKSB7XG4gICAgICAgICAgICB2YXIgX2E7XG4gICAgICAgICAgICBpZiAoX3Byb3ApIHtcbiAgICAgICAgICAgICAgICB2aC5wcm9wID0gcHJvcENvbWJpbmUodmgucHJvcCwgX3Byb3ApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIHdpdGhQYXJlbnRQcm9wID0gdmgucGFyZW50UHJvcCA/IHByb3BDb21iaW5lKHZoLnBhcmVudFByb3AsIHZoLnByb3ApIDogdmgucHJvcDtcbiAgICAgICAgICAgIChfYSA9IHVwZGF0ZXMuZWxlbWVudCkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmNhbGwodXBkYXRlcywgd2l0aFBhcmVudFByb3ApKCRkKTtcbiAgICAgICAgICAgIGlmICh1cGRhdGVzLmtsYXNzTGlzdCkge1xuICAgICAgICAgICAgICAgIHZhciBwYWlycyA9IHVwZGF0ZVBhaXJzLmtsYXNzTGlzdC5hZGQodXBkYXRlcy5rbGFzc0xpc3Qod2l0aFBhcmVudFByb3ApKTtcbiAgICAgICAgICAgICAgICB1cGRhdGVLbGFzc0xpc3QocGFpcnMsICRkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgdmgudXBkYXRlKHByb3ApO1xuICAgICAgICBjaGlsZHJlbi5mb3JFYWNoKGZ1bmN0aW9uIChjaGlsZCkge1xuICAgICAgICAgICAgaWYgKHZoXzEuaXNWSE5vZGUoY2hpbGQpKSB7XG4gICAgICAgICAgICAgICAgdXBkYXRlVkhOb2RlQ2hpbGQoY2hpbGQsICRkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHVwZGF0ZVZDaGlsZHJlbihjaGlsZCwgJGQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKHVwZGF0ZXMucmVzaXplKSB7XG4gICAgICAgICAgICB2YXIgdXJfMSA9IHVwZGF0ZXMucmVzaXplO1xuICAgICAgICAgICAgbmV3IFJlc2l6ZU9ic2VydmVyKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgdXJfMSgkZC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSk7XG4gICAgICAgICAgICB9KS5vYnNlcnZlKCRkKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gJGQ7XG4gICAgfVxuICAgIHJldHVybiByZWNvbnM7XG59XG5leHBvcnRzLnZpbml0ID0gdmluaXQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2NyZWF0ZUJpbmRpbmcgPSAodGhpcyAmJiB0aGlzLl9fY3JlYXRlQmluZGluZykgfHwgKE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBrMiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uKCkgeyByZXR1cm4gbVtrXTsgfSB9KTtcbn0pIDogKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcbiAgICBvW2syXSA9IG1ba107XG59KSk7XG52YXIgX19zZXRNb2R1bGVEZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX3NldE1vZHVsZURlZmF1bHQpIHx8IChPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIHYpIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobywgXCJkZWZhdWx0XCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHYgfSk7XG59KSA6IGZ1bmN0aW9uKG8sIHYpIHtcbiAgICBvW1wiZGVmYXVsdFwiXSA9IHY7XG59KTtcbnZhciBfX2ltcG9ydFN0YXIgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0U3RhcikgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIGlmIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpIHJldHVybiBtb2Q7XG4gICAgdmFyIHJlc3VsdCA9IHt9O1xuICAgIGlmIChtb2QgIT0gbnVsbCkgZm9yICh2YXIgayBpbiBtb2QpIGlmIChrICE9PSBcImRlZmF1bHRcIiAmJiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9kLCBrKSkgX19jcmVhdGVCaW5kaW5nKHJlc3VsdCwgbW9kLCBrKTtcbiAgICBfX3NldE1vZHVsZURlZmF1bHQocmVzdWx0LCBtb2QpO1xuICAgIHJldHVybiByZXN1bHQ7XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5mZW4gPSB2b2lkIDA7XG5jb25zdCBudCA9IF9faW1wb3J0U3RhcihyZXF1aXJlKFwiLi90eXBlc1wiKSk7XG5jb25zdCBwaSA9IF9faW1wb3J0U3RhcihyZXF1aXJlKFwiLi9waWVjZVwiKSk7XG5jb25zdCBkYl8xID0gcmVxdWlyZShcIi4vZGJcIik7XG5mdW5jdGlvbiBmZW4oYm9hcmQpIHtcbiAgICBsZXQgcmVzID0gW107XG4gICAgZm9yIChsZXQgcmFuayBvZiBudC5yZGlyZWN0aW9ucykge1xuICAgICAgICBsZXQgcmFua1MgPSAnJztcbiAgICAgICAgbGV0IHNwYWNlID0gMDtcbiAgICAgICAgZm9yIChsZXQgZmlsZSBvZiBudC5kaXJlY3Rpb25zKSB7XG4gICAgICAgICAgICBsZXQgcGllY2UgPSBib2FyZC5nZXQoZGJfMS5wb3NzLnBnZXQoZmlsZSwgcmFuaykpO1xuICAgICAgICAgICAgaWYgKHBpZWNlKSB7XG4gICAgICAgICAgICAgICAgaWYgKHNwYWNlICE9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHJhbmtTICs9IHNwYWNlO1xuICAgICAgICAgICAgICAgICAgICBzcGFjZSA9IDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJhbmtTICs9IHBpLmZlbihwaWVjZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBzcGFjZSsrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChzcGFjZSAhPT0gMCkge1xuICAgICAgICAgICAgcmFua1MgKz0gc3BhY2U7XG4gICAgICAgIH1cbiAgICAgICAgcmVzLnB1c2gocmFua1MpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzLmpvaW4oJy8nKTtcbn1cbmV4cG9ydHMuZmVuID0gZmVuO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Ym9hcmQuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19jcmVhdGVCaW5kaW5nID0gKHRoaXMgJiYgdGhpcy5fX2NyZWF0ZUJpbmRpbmcpIHx8IChPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobywgazIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbigpIHsgcmV0dXJuIG1ba107IH0gfSk7XG59KSA6IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XG4gICAgb1trMl0gPSBtW2tdO1xufSkpO1xudmFyIF9fc2V0TW9kdWxlRGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19zZXRNb2R1bGVEZWZhdWx0KSB8fCAoT2JqZWN0LmNyZWF0ZSA/IChmdW5jdGlvbihvLCB2KSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIFwiZGVmYXVsdFwiLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2IH0pO1xufSkgOiBmdW5jdGlvbihvLCB2KSB7XG4gICAgb1tcImRlZmF1bHRcIl0gPSB2O1xufSk7XG52YXIgX19pbXBvcnRTdGFyID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydFN0YXIpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xuICAgIHZhciByZXN1bHQgPSB7fTtcbiAgICBpZiAobW9kICE9IG51bGwpIGZvciAodmFyIGsgaW4gbW9kKSBpZiAoayAhPT0gXCJkZWZhdWx0XCIgJiYgT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vZCwgaykpIF9fY3JlYXRlQmluZGluZyhyZXN1bHQsIG1vZCwgayk7XG4gICAgX19zZXRNb2R1bGVEZWZhdWx0KHJlc3VsdCwgbW9kKTtcbiAgICByZXR1cm4gcmVzdWx0O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMucGllY2VzID0gZXhwb3J0cy5wb3NzID0gZXhwb3J0cy5EQiA9IHZvaWQgMDtcbmNvbnN0IG50ID0gX19pbXBvcnRTdGFyKHJlcXVpcmUoXCIuL3R5cGVzXCIpKTtcbmNvbnN0IHAgPSBfX2ltcG9ydFN0YXIocmVxdWlyZShcIi4vcG9zXCIpKTtcbmNvbnN0IHIgPSBfX2ltcG9ydFN0YXIocmVxdWlyZShcIi4vcm9sZVwiKSk7XG5jbGFzcyBEQiB7XG4gICAgY29uc3RydWN0b3IobWFrZSwgbUEsIG1CLCBhbGxBLCBhbGxCKSB7XG4gICAgICAgIHRoaXMuc3BhY2UgPSBuZXcgTWFwKCk7XG4gICAgICAgIHRoaXMubWFrZSA9IG1ha2U7XG4gICAgICAgIHRoaXMubUEgPSBtQTtcbiAgICAgICAgdGhpcy5tQiA9IG1CO1xuICAgICAgICB0aGlzLmFsbCA9IFtdO1xuICAgICAgICBmb3IgKGxldCBhIG9mIGFsbEEpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGIgb2YgYWxsQikge1xuICAgICAgICAgICAgICAgIHRoaXMuYWxsLnB1c2godGhpcy5wZ2V0KGEsIGIpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBwZ2V0KGEsIGIpIHtcbiAgICAgICAgbGV0IGJjID0gdGhpcy5zcGFjZS5nZXQoYSk7XG4gICAgICAgIGlmIChiYykge1xuICAgICAgICAgICAgbGV0IGMgPSBiYy5nZXQoYik7XG4gICAgICAgICAgICBpZiAoYykge1xuICAgICAgICAgICAgICAgIHJldHVybiBjO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgbGV0IF9jID0gdGhpcy5tYWtlKGEsIGIpO1xuICAgICAgICAgICAgICAgIGJjLnNldChiLCBfYyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF9jO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgbGV0IGMgPSB0aGlzLm1ha2UoYSwgYik7XG4gICAgICAgICAgICBsZXQgYmMgPSBuZXcgTWFwKClcbiAgICAgICAgICAgICAgICAuc2V0KGIsIGMpO1xuICAgICAgICAgICAgdGhpcy5zcGFjZS5zZXQoYSwgYmMpO1xuICAgICAgICAgICAgcmV0dXJuIGM7XG4gICAgICAgIH1cbiAgICB9XG4gICAgbmdldChzYSwgc2IpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubWdldCh0aGlzLm1BKHNhKSwgdGhpcy5tQihzYikpO1xuICAgIH1cbiAgICBtZ2V0KG1hLCBtYikge1xuICAgICAgICBpZiAobWEgJiYgbWIpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnBnZXQobWEsIG1iKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbmV4cG9ydHMuREIgPSBEQjtcbmV4cG9ydHMucG9zcyA9IG5ldyBEQigoKGYsIHIpID0+IFtmLCByXSksIHAubURpcmVjdGlvbiwgcC5tRGlyZWN0aW9uLCBudC5kaXJlY3Rpb25zLCBudC5kaXJlY3Rpb25zKTtcbmV4cG9ydHMucGllY2VzID0gbmV3IERCKChjb2xvciwgcm9sZSkgPT4gKHsgY29sb3IsIHJvbGUgfSksIHIubUNvbG9yLCByLm1Sb2xlLCBudC5jb2xvcnMsIG50LnJvbGVzKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRiLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fY3JlYXRlQmluZGluZyA9ICh0aGlzICYmIHRoaXMuX19jcmVhdGVCaW5kaW5nKSB8fCAoT2JqZWN0LmNyZWF0ZSA/IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIGsyLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24oKSB7IHJldHVybiBtW2tdOyB9IH0pO1xufSkgOiAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xuICAgIG9bazJdID0gbVtrXTtcbn0pKTtcbnZhciBfX3NldE1vZHVsZURlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9fc2V0TW9kdWxlRGVmYXVsdCkgfHwgKE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgdikge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBcImRlZmF1bHRcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdiB9KTtcbn0pIDogZnVuY3Rpb24obywgdikge1xuICAgIG9bXCJkZWZhdWx0XCJdID0gdjtcbn0pO1xudmFyIF9faW1wb3J0U3RhciA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnRTdGFyKSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgaWYgKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgcmV0dXJuIG1vZDtcbiAgICB2YXIgcmVzdWx0ID0ge307XG4gICAgaWYgKG1vZCAhPSBudWxsKSBmb3IgKHZhciBrIGluIG1vZCkgaWYgKGsgIT09IFwiZGVmYXVsdFwiICYmIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb2QsIGspKSBfX2NyZWF0ZUJpbmRpbmcocmVzdWx0LCBtb2QsIGspO1xuICAgIF9fc2V0TW9kdWxlRGVmYXVsdChyZXN1bHQsIG1vZCk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLnNwYWNlID0gZXhwb3J0cy5zaXR1YXRpb24gPSBleHBvcnRzLmZlbiA9IHZvaWQgMDtcbmNvbnN0IGIgPSBfX2ltcG9ydFN0YXIocmVxdWlyZShcIi4vYm9hcmRcIikpO1xuY29uc3QgZGJfMSA9IHJlcXVpcmUoXCIuL2RiXCIpO1xuZnVuY3Rpb24gZmVuKHNpdHVhdGlvbikge1xuICAgIGxldCBjb2xvciA9IHNpdHVhdGlvbi50dXJuO1xuICAgIGxldCByZXN0ID0gXCJLUWtxIC0gMCAxXCI7XG4gICAgcmV0dXJuIGAke2IuZmVuKHNpdHVhdGlvbi5ib2FyZCl9ICR7Y29sb3J9ICR7cmVzdH1gO1xufVxuZXhwb3J0cy5mZW4gPSBmZW47XG5mdW5jdGlvbiBzaXR1YXRpb24oZmVuKSB7XG4gICAgbGV0IF9waWVjZXMgPSBuZXcgTWFwKCk7XG4gICAgbGV0IFtyYW5rc1MsIGNvbG9yU10gPSBmZW4uc3BsaXQoJyAnKTtcbiAgICBpZiAoIXJhbmtzUyB8fCAhY29sb3JTKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKGNvbG9yUyAhPT0gXCJ3XCIgJiYgY29sb3JTICE9PSBcImJcIikge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGxldCByYW5rcyA9IHJhbmtzUy5zcGxpdCgnLycpO1xuICAgIGlmIChyYW5rcy5sZW5ndGggIT09IDgpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJhbmtzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGxldCByYW5rID0gOCAtIGk7XG4gICAgICAgIGxldCBmaWxlID0gMTtcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCByYW5rc1tpXS5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgbGV0IGMgPSByYW5rc1tpXVtqXTtcbiAgICAgICAgICAgIGxldCBwaWVjZSA9IGRiXzEucGllY2VzLm5nZXQoYywgYyk7XG4gICAgICAgICAgICBpZiAocGllY2UpIHtcbiAgICAgICAgICAgICAgICBsZXQgcG9zID0gZGJfMS5wb3NzLm5nZXQoZmlsZSwgcmFuayk7XG4gICAgICAgICAgICAgICAgaWYgKHBvcyAmJiBwaWVjZSkge1xuICAgICAgICAgICAgICAgICAgICBfcGllY2VzLnNldChwb3MsIHBpZWNlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZmlsZSArPSAxO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgbGV0IF9zID0gc3BhY2UoYyk7XG4gICAgICAgICAgICAgICAgaWYgKF9zKSB7XG4gICAgICAgICAgICAgICAgICAgIGZpbGUgKz0gX3M7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGxldCBib2FyZCA9IF9waWVjZXM7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgYm9hcmQsXG4gICAgICAgIHR1cm46IGNvbG9yU1xuICAgIH07XG59XG5leHBvcnRzLnNpdHVhdGlvbiA9IHNpdHVhdGlvbjtcbmZ1bmN0aW9uIHNwYWNlKGMpIHtcbiAgICBpZiAoYy5tYXRjaCgvWzEtOF0vKSkge1xuICAgICAgICByZXR1cm4gcGFyc2VJbnQoYyk7XG4gICAgfVxufVxuZXhwb3J0cy5zcGFjZSA9IHNwYWNlO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZmVuLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fY3JlYXRlQmluZGluZyA9ICh0aGlzICYmIHRoaXMuX19jcmVhdGVCaW5kaW5nKSB8fCAoT2JqZWN0LmNyZWF0ZSA/IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIGsyLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24oKSB7IHJldHVybiBtW2tdOyB9IH0pO1xufSkgOiAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xuICAgIG9bazJdID0gbVtrXTtcbn0pKTtcbnZhciBfX3NldE1vZHVsZURlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9fc2V0TW9kdWxlRGVmYXVsdCkgfHwgKE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgdikge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBcImRlZmF1bHRcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdiB9KTtcbn0pIDogZnVuY3Rpb24obywgdikge1xuICAgIG9bXCJkZWZhdWx0XCJdID0gdjtcbn0pO1xudmFyIF9faW1wb3J0U3RhciA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnRTdGFyKSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgaWYgKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgcmV0dXJuIG1vZDtcbiAgICB2YXIgcmVzdWx0ID0ge307XG4gICAgaWYgKG1vZCAhPSBudWxsKSBmb3IgKHZhciBrIGluIG1vZCkgaWYgKGsgIT09IFwiZGVmYXVsdFwiICYmIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb2QsIGspKSBfX2NyZWF0ZUJpbmRpbmcocmVzdWx0LCBtb2QsIGspO1xuICAgIF9fc2V0TW9kdWxlRGVmYXVsdChyZXN1bHQsIG1vZCk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLnNpZGUgPSBleHBvcnRzLmRiID0gZXhwb3J0cy5mID0gZXhwb3J0cy5waSA9IGV4cG9ydHMuciA9IGV4cG9ydHMucCA9IGV4cG9ydHMuYiA9IGV4cG9ydHMubnQgPSB2b2lkIDA7XG5leHBvcnRzLm50ID0gX19pbXBvcnRTdGFyKHJlcXVpcmUoXCIuL3R5cGVzXCIpKTtcbmV4cG9ydHMuYiA9IF9faW1wb3J0U3RhcihyZXF1aXJlKFwiLi9ib2FyZFwiKSk7XG5leHBvcnRzLnAgPSBfX2ltcG9ydFN0YXIocmVxdWlyZShcIi4vcG9zXCIpKTtcbmV4cG9ydHMuciA9IF9faW1wb3J0U3RhcihyZXF1aXJlKFwiLi9yb2xlXCIpKTtcbmV4cG9ydHMucGkgPSBfX2ltcG9ydFN0YXIocmVxdWlyZShcIi4vcGllY2VcIikpO1xuZXhwb3J0cy5mID0gX19pbXBvcnRTdGFyKHJlcXVpcmUoXCIuL2ZlblwiKSk7XG5leHBvcnRzLmRiID0gX19pbXBvcnRTdGFyKHJlcXVpcmUoXCIuL2RiXCIpKTtcbmV4cG9ydHMuc2lkZSA9IF9faW1wb3J0U3RhcihyZXF1aXJlKFwiLi9zaWRlXCIpKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5mZW4gPSB2b2lkIDA7XG5mdW5jdGlvbiBmZW4ocGllY2UpIHtcbiAgICBpZiAocGllY2UuY29sb3IgPT09ICd3Jykge1xuICAgICAgICByZXR1cm4gcGllY2Uucm9sZS50b1VwcGVyQ2FzZSgpO1xuICAgIH1cbiAgICByZXR1cm4gcGllY2Uucm9sZTtcbn1cbmV4cG9ydHMuZmVuID0gZmVuO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cGllY2UuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmRvcEtleSA9IGV4cG9ydHMua2V5ID0gZXhwb3J0cy5ya2V5ID0gZXhwb3J0cy5ma2V5ID0gZXhwb3J0cy5tUmFua0tleSA9IGV4cG9ydHMubUZpbGVLZXkgPSBleHBvcnRzLm1Qb3NLZXkgPSBleHBvcnRzLnBvc0tleTJmS2V5ID0gZXhwb3J0cy5wb3NLZXkycktleSA9IGV4cG9ydHMuckJ5S2V5ID0gZXhwb3J0cy5mQnlLZXkgPSBleHBvcnRzLnBvc0tleXMgPSBleHBvcnRzLnJhbmtLZXlzID0gZXhwb3J0cy5maWxlS2V5cyA9IGV4cG9ydHMuaXNQb3MgPSBleHBvcnRzLm1EaXJlY3Rpb24gPSBleHBvcnRzLmlzRGlyZWN0aW9uID0gdm9pZCAwO1xuZnVuY3Rpb24gaXNEaXJlY3Rpb24oXykge1xuICAgIHJldHVybiAhIW1EaXJlY3Rpb24oXyk7XG59XG5leHBvcnRzLmlzRGlyZWN0aW9uID0gaXNEaXJlY3Rpb247XG5mdW5jdGlvbiBtRGlyZWN0aW9uKF8pIHtcbiAgICBpZiAoXyA+PSAxICYmIF8gPD0gOCkge1xuICAgICAgICByZXR1cm4gXztcbiAgICB9XG59XG5leHBvcnRzLm1EaXJlY3Rpb24gPSBtRGlyZWN0aW9uO1xuZnVuY3Rpb24gaXNQb3MoXykge1xuICAgIGlmIChBcnJheS5pc0FycmF5KF8pKSB7XG4gICAgICAgIGlmIChfLmxlbmd0aCA9PT0gMikge1xuICAgICAgICAgICAgcmV0dXJuIF8ubWFwKGlzRGlyZWN0aW9uKS5ldmVyeShfID0+ICEhXyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xufVxuZXhwb3J0cy5pc1BvcyA9IGlzUG9zO1xuZXhwb3J0cy5maWxlS2V5cyA9IFsnYScsICdiJywgJ2MnLCAnZCcsICdlJywgJ2YnLCAnZycsICdoJ107XG5leHBvcnRzLnJhbmtLZXlzID0gWycxJywgJzInLCAnMycsICc0JywgJzUnLCAnNicsICc3JywgJzgnXTtcbmV4cG9ydHMucG9zS2V5cyA9IFtcbiAgICAnYTEnLCAnYTInLCAnYTMnLCAnYTQnLCAnYTUnLCAnYTYnLCAnYTcnLCAnYTgnLFxuICAgICdiMScsICdiMicsICdiMycsICdiNCcsICdiNScsICdiNicsICdiNycsICdiOCcsXG4gICAgJ2MxJywgJ2MyJywgJ2MzJywgJ2M0JywgJ2M1JywgJ2M2JywgJ2M3JywgJ2M4JyxcbiAgICAnZDEnLCAnZDInLCAnZDMnLCAnZDQnLCAnZDUnLCAnZDYnLCAnZDcnLCAnZDgnLFxuICAgICdlMScsICdlMicsICdlMycsICdlNCcsICdlNScsICdlNicsICdlNycsICdlOCcsXG4gICAgJ2YxJywgJ2YyJywgJ2YzJywgJ2Y0JywgJ2Y1JywgJ2Y2JywgJ2Y3JywgJ2Y4JyxcbiAgICAnZzEnLCAnZzInLCAnZzMnLCAnZzQnLCAnZzUnLCAnZzYnLCAnZzcnLCAnZzgnLFxuICAgICdoMScsICdoMicsICdoMycsICdoNCcsICdoNScsICdoNicsICdoNycsICdoOCdcbl07XG5jb25zdCBmQnlLZXkgPSAoXykgPT4ge1xuICAgIHJldHVybiBleHBvcnRzLmZpbGVLZXlzLmluZGV4T2YoXykgKyAxO1xufTtcbmV4cG9ydHMuZkJ5S2V5ID0gZkJ5S2V5O1xuY29uc3QgckJ5S2V5ID0gKF8pID0+IHtcbiAgICByZXR1cm4gZXhwb3J0cy5yYW5rS2V5cy5pbmRleE9mKF8pICsgMTtcbn07XG5leHBvcnRzLnJCeUtleSA9IHJCeUtleTtcbmNvbnN0IHBvc0tleTJyS2V5ID0gKF8pID0+IHtcbiAgICByZXR1cm4gX1sxXTtcbn07XG5leHBvcnRzLnBvc0tleTJyS2V5ID0gcG9zS2V5MnJLZXk7XG5jb25zdCBwb3NLZXkyZktleSA9IChfKSA9PiB7XG4gICAgcmV0dXJuIF9bMF07XG59O1xuZXhwb3J0cy5wb3NLZXkyZktleSA9IHBvc0tleTJmS2V5O1xuY29uc3QgbVBvc0tleSA9IChfKSA9PiB7XG4gICAgaWYgKGV4cG9ydHMucG9zS2V5cy5pbmNsdWRlcyhfKSkge1xuICAgICAgICBsZXQgaSA9IGV4cG9ydHMucG9zS2V5cy5pbmRleE9mKF8pO1xuICAgICAgICByZXR1cm4gZXhwb3J0cy5wb3NLZXlzW2ldO1xuICAgIH1cbn07XG5leHBvcnRzLm1Qb3NLZXkgPSBtUG9zS2V5O1xuZnVuY3Rpb24gbUZpbGVLZXkoXykge1xuICAgIGlmIChleHBvcnRzLmZpbGVLZXlzLmluY2x1ZGVzKF8pKSB7XG4gICAgICAgIGxldCBpID0gZXhwb3J0cy5maWxlS2V5cy5pbmRleE9mKF8pO1xuICAgICAgICByZXR1cm4gZXhwb3J0cy5maWxlS2V5c1tpXTtcbiAgICB9XG59XG5leHBvcnRzLm1GaWxlS2V5ID0gbUZpbGVLZXk7XG5mdW5jdGlvbiBtUmFua0tleShfKSB7XG4gICAgaWYgKGV4cG9ydHMucmFua0tleXMuaW5jbHVkZXMoXykpIHtcbiAgICAgICAgbGV0IGkgPSBleHBvcnRzLnJhbmtLZXlzLmluZGV4T2YoXyk7XG4gICAgICAgIHJldHVybiBleHBvcnRzLnJhbmtLZXlzW2ldO1xuICAgIH1cbn1cbmV4cG9ydHMubVJhbmtLZXkgPSBtUmFua0tleTtcbmZ1bmN0aW9uIGZrZXkoZikge1xuICAgIHJldHVybiBleHBvcnRzLmZpbGVLZXlzW2YgLSAxXTtcbn1cbmV4cG9ydHMuZmtleSA9IGZrZXk7XG5mdW5jdGlvbiBya2V5KHIpIHtcbiAgICByZXR1cm4gZXhwb3J0cy5yYW5rS2V5c1tyIC0gMV07XG59XG5leHBvcnRzLnJrZXkgPSBya2V5O1xuZnVuY3Rpb24ga2V5KHApIHtcbiAgICByZXR1cm4gKGZrZXkocFswXSkgKyBya2V5KHBbMV0pKTtcbn1cbmV4cG9ydHMua2V5ID0ga2V5O1xuZnVuY3Rpb24gZG9wS2V5KF8pIHtcbiAgICBpZiAoaXNQb3MoXykpIHtcbiAgICAgICAgcmV0dXJuIGtleShfKTtcbiAgICB9XG4gICAgZWxzZSBpZiAoaXNEaXJlY3Rpb24oXykpIHtcbiAgICAgICAgcmV0dXJuIHJrZXkoXyk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICByZXR1cm4gJ2RvcFgnO1xuICAgIH1cbn1cbmV4cG9ydHMuZG9wS2V5ID0gZG9wS2V5O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cG9zLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fY3JlYXRlQmluZGluZyA9ICh0aGlzICYmIHRoaXMuX19jcmVhdGVCaW5kaW5nKSB8fCAoT2JqZWN0LmNyZWF0ZSA/IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIGsyLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24oKSB7IHJldHVybiBtW2tdOyB9IH0pO1xufSkgOiAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xuICAgIG9bazJdID0gbVtrXTtcbn0pKTtcbnZhciBfX3NldE1vZHVsZURlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9fc2V0TW9kdWxlRGVmYXVsdCkgfHwgKE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgdikge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBcImRlZmF1bHRcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdiB9KTtcbn0pIDogZnVuY3Rpb24obywgdikge1xuICAgIG9bXCJkZWZhdWx0XCJdID0gdjtcbn0pO1xudmFyIF9faW1wb3J0U3RhciA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnRTdGFyKSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgaWYgKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgcmV0dXJuIG1vZDtcbiAgICB2YXIgcmVzdWx0ID0ge307XG4gICAgaWYgKG1vZCAhPSBudWxsKSBmb3IgKHZhciBrIGluIG1vZCkgaWYgKGsgIT09IFwiZGVmYXVsdFwiICYmIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb2QsIGspKSBfX2NyZWF0ZUJpbmRpbmcocmVzdWx0LCBtb2QsIGspO1xuICAgIF9fc2V0TW9kdWxlRGVmYXVsdChyZXN1bHQsIG1vZCk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLm90aGVyQ29sb3IgPSBleHBvcnRzLm1Db2xvciA9IGV4cG9ydHMubVJvbGUgPSBleHBvcnRzLmlzUm9sZSA9IHZvaWQgMDtcbmNvbnN0IG50ID0gX19pbXBvcnRTdGFyKHJlcXVpcmUoXCIuL3R5cGVzXCIpKTtcbmZ1bmN0aW9uIGlzUm9sZShfKSB7XG4gICAgcmV0dXJuICFtUm9sZShfKTtcbn1cbmV4cG9ydHMuaXNSb2xlID0gaXNSb2xlO1xuZnVuY3Rpb24gbVJvbGUoc3RyKSB7XG4gICAgbGV0IF8gPSBzdHIudG9Mb3dlckNhc2UoKTtcbiAgICBpZiAobnQucm9sZXMuaW5jbHVkZXMoXykpIHtcbiAgICAgICAgcmV0dXJuIF87XG4gICAgfVxufVxuZXhwb3J0cy5tUm9sZSA9IG1Sb2xlO1xuZnVuY3Rpb24gbUNvbG9yKHN0cikge1xuICAgIGxldCBfID0gc3RyLnRvTG93ZXJDYXNlKCk7XG4gICAgaWYgKG50LnJvbGVzLmluY2x1ZGVzKF8pKSB7XG4gICAgICAgIGlmIChfID09PSBzdHIpIHtcbiAgICAgICAgICAgIHJldHVybiAnYic7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gJ3cnO1xuICAgICAgICB9XG4gICAgfVxufVxuZXhwb3J0cy5tQ29sb3IgPSBtQ29sb3I7XG5mdW5jdGlvbiBvdGhlckNvbG9yKGNvbG9yKSB7XG4gICAgcmV0dXJuIGNvbG9yID09PSAndycgPyAnYicgOiAndyc7XG59XG5leHBvcnRzLm90aGVyQ29sb3IgPSBvdGhlckNvbG9yO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cm9sZS5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuaXNDYXN0bGVzID0gZXhwb3J0cy5Mb25nQ2FzdGxlID0gZXhwb3J0cy5TaG9ydENhc3RsZSA9IGV4cG9ydHMuSCA9IGV4cG9ydHMuRyA9IGV4cG9ydHMuRiA9IGV4cG9ydHMuRSA9IGV4cG9ydHMuRCA9IGV4cG9ydHMuQyA9IGV4cG9ydHMuQiA9IGV4cG9ydHMuQSA9IHZvaWQgMDtcbmV4cG9ydHMuQSA9IDE7XG5leHBvcnRzLkIgPSAyO1xuZXhwb3J0cy5DID0gMztcbmV4cG9ydHMuRCA9IDQ7XG5leHBvcnRzLkUgPSA1O1xuZXhwb3J0cy5GID0gNjtcbmV4cG9ydHMuRyA9IDc7XG5leHBvcnRzLkggPSA4O1xuZXhwb3J0cy5TaG9ydENhc3RsZSA9IHtcbiAgICBraW5nOiBleHBvcnRzLkcsXG4gICAgcm9vazogZXhwb3J0cy5GLFxuICAgIHRyaXA6IDFcbn07XG5leHBvcnRzLkxvbmdDYXN0bGUgPSB7XG4gICAga2luZzogZXhwb3J0cy5DLFxuICAgIHJvb2s6IGV4cG9ydHMuRCxcbiAgICB0cmlwOiAtMVxufTtcbmZ1bmN0aW9uIGlzQ2FzdGxlcyhtZXRhKSB7XG4gICAgcmV0dXJuIChtZXRhLmtpbmcgIT09IHVuZGVmaW5lZCk7XG59XG5leHBvcnRzLmlzQ2FzdGxlcyA9IGlzQ2FzdGxlcztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXNpZGUuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmxvbmdDb2xvciA9IGV4cG9ydHMubG9uZ1JvbGUgPSBleHBvcnRzLnByb21vdGFibGVzID0gZXhwb3J0cy5yb2xlcyA9IGV4cG9ydHMuY29sb3JzID0gZXhwb3J0cy5yYW5rcyA9IGV4cG9ydHMuZmlsZXMgPSBleHBvcnRzLnJkaXJlY3Rpb25zID0gZXhwb3J0cy5kaXJlY3Rpb25zID0gZXhwb3J0cy5pbml0aWFsRmVuID0gdm9pZCAwO1xuZXhwb3J0cy5pbml0aWFsRmVuID0gJ3JuYnFrYm5yL3BwcHBwcHBwLzgvOC84LzgvUFBQUFBQUFAvUk5CUUtCTlIgdyBLUWtxIC0gMCAxJztcbmV4cG9ydHMuZGlyZWN0aW9ucyA9IFsxLCAyLCAzLCA0LCA1LCA2LCA3LCA4XTtcbmV4cG9ydHMucmRpcmVjdGlvbnMgPSBbOCwgNywgNiwgNSwgNCwgMywgMiwgMV07XG5leHBvcnRzLmZpbGVzID0gWydhJywgJ2InLCAnYycsICdkJywgJ2UnLCAnZicsICdnJywgJ2gnXTtcbmV4cG9ydHMucmFua3MgPSBbJzEnLCAnMicsICczJywgJzQnLCAnNScsICc2JywgJzcnLCAnOCddO1xuZXhwb3J0cy5jb2xvcnMgPSBbJ3cnLCAnYiddO1xuZXhwb3J0cy5yb2xlcyA9IFsncicsICdiJywgJ24nLCAncScsICdrJywgJ3AnXTtcbmV4cG9ydHMucHJvbW90YWJsZXMgPSBbJ3InLCAnYicsICduJywgJ3EnXTtcbmV4cG9ydHMubG9uZ1JvbGUgPSB7XG4gICAgJ2InOiAnYmlzaG9wJyxcbiAgICAnbic6ICdrbmlnaHQnLFxuICAgICdyJzogJ3Jvb2snLFxuICAgICdrJzogJ2tpbmcnLFxuICAgICdxJzogJ3F1ZWVuJyxcbiAgICAncCc6ICdwYXduJ1xufTtcbmV4cG9ydHMubG9uZ0NvbG9yID0ge1xuICAgICd3JzogJ3doaXRlJyxcbiAgICAnYic6ICdibGFjaydcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD10eXBlcy5qcy5tYXAiLCJ2YXIgQXBpID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIEFwaShjdHJsKSB7XG4gICAgICAgIHRoaXMuY3RybCA9IGN0cmw7XG4gICAgfVxuICAgIEFwaS5wcm90b3R5cGUuZmVuID0gZnVuY3Rpb24gKGZlbikge1xuICAgICAgICB0aGlzLmN0cmwuZmVuKGZlbik7XG4gICAgfTtcbiAgICByZXR1cm4gQXBpO1xufSgpKTtcbmV4cG9ydCBkZWZhdWx0IEFwaTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFwaS5qcy5tYXAiLCJpbXBvcnQgeyBTdWIgfSBmcm9tICcuL3V0aWwnO1xuaW1wb3J0IHsgbnQsIGYsIGRiLCBwIH0gZnJvbSAnbmVmcyc7XG52YXIgQ3RybCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBDdHJsKG9wdHMpIHtcbiAgICAgICAgdGhpcy5zTGFzdE1vdmUgPSBuZXcgU3ViKFtdKTtcbiAgICAgICAgdGhpcy5zU2l0dWF0aW9uID0gbmV3IFN1YihmLnNpdHVhdGlvbihvcHRzLmZlbiA/IG9wdHMuZmVuIDogbnQuaW5pdGlhbEZlbikpO1xuICAgICAgICBpZiAob3B0cy5sYXN0TW92ZSkge1xuICAgICAgICAgICAgdmFyIG0xXzEgPSBkYi5wb3NzLnBnZXQocC5mQnlLZXkob3B0cy5sYXN0TW92ZVswXSksIHAuckJ5S2V5KG9wdHMubGFzdE1vdmVbMV0pKSwgbTJfMSA9IGRiLnBvc3MucGdldChwLmZCeUtleShvcHRzLmxhc3RNb3ZlWzJdKSwgcC5yQnlLZXkob3B0cy5sYXN0TW92ZVszXSkpO1xuICAgICAgICAgICAgdGhpcy5zTGFzdE1vdmVcbiAgICAgICAgICAgICAgICAuYXBwbHkoZnVuY3Rpb24gKF8pIHtcbiAgICAgICAgICAgICAgICBfLnB1c2gobTFfMSk7XG4gICAgICAgICAgICAgICAgXy5wdXNoKG0yXzEpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgQ3RybC5wcm90b3R5cGUuZmVuID0gZnVuY3Rpb24gKGZlbikge1xuICAgICAgICB2YXIgcyA9IGYuc2l0dWF0aW9uKGZlbik7XG4gICAgICAgIGlmIChzKSB7XG4gICAgICAgICAgICB0aGlzLnNTaXR1YXRpb24udHJpZ2dlcihzKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgQ3RybC5wcm90b3R5cGUudHJpZ2dlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5zU2l0dWF0aW9uLnRyaWdnZXIoKTtcbiAgICAgICAgdGhpcy5zTGFzdE1vdmUudHJpZ2dlcigpO1xuICAgIH07XG4gICAgcmV0dXJuIEN0cmw7XG59KCkpO1xuZXhwb3J0IGRlZmF1bHQgQ3RybDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWN0cmwuanMubWFwIiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gJy4vbWFpbic7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXAiLCJpbXBvcnQgeyB2aW5pdCB9IGZyb20gJ2hoaCc7XG5pbXBvcnQgQXBpIGZyb20gJy4vYXBpJztcbmltcG9ydCB2aWV3IGZyb20gJy4vdmlldyc7XG5pbXBvcnQgQ3RybCBmcm9tICcuL2N0cmwnO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYXBwKGVsZW1lbnQsIG9wdHMpIHtcbiAgICBpZiAob3B0cyA9PT0gdm9pZCAwKSB7IG9wdHMgPSB7fTsgfVxuICAgIHZhciByZWNvbmNpbGUgPSB2aW5pdCgpO1xuICAgIHZhciBfY3RybCA9IG5ldyBDdHJsKG9wdHMpO1xuICAgIHZhciB2bm9kZSA9IHZpZXcoX2N0cmwpO1xuICAgIHZhciAkYXBwID0gcmVjb25jaWxlKHZub2RlKTtcbiAgICBfY3RybC50cmlnZ2VyKCk7XG4gICAgZWxlbWVudC5hcHBlbmRDaGlsZCgkYXBwKTtcbiAgICByZXR1cm4gbmV3IEFwaShfY3RybCk7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1tYWluLmpzLm1hcCIsImV4cG9ydCBmdW5jdGlvbiBtZW0oZikge1xuICAgIHZhciB2YWwgPSB1bmRlZmluZWQ7XG4gICAgdmFyIHJlcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCF2YWwpIHtcbiAgICAgICAgICAgIHZhbCA9IGYoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdmFsO1xuICAgIH07XG4gICAgcmVzLmNsZWFyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YWwgPSB1bmRlZmluZWQ7XG4gICAgfTtcbiAgICByZXR1cm4gcmVzO1xufVxudmFyIFN1YiA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBTdWIodmFsKSB7XG4gICAgICAgIHRoaXMudmFsID0gdmFsO1xuICAgICAgICB0aGlzLnN1YnMgPSBbXTtcbiAgICB9XG4gICAgU3ViLnByb3RvdHlwZS5hcHBseSA9IGZ1bmN0aW9uIChmbikge1xuICAgICAgICBmbih0aGlzLnZhbCk7XG4gICAgfTtcbiAgICBTdWIucHJvdG90eXBlLnN1YiA9IGZ1bmN0aW9uIChmbikge1xuICAgICAgICB0aGlzLnN1YnMucHVzaChmbik7XG4gICAgfTtcbiAgICBTdWIucHJvdG90eXBlLmlzdWIgPSBmdW5jdGlvbiAoZm4pIHtcbiAgICAgICAgdGhpcy5zdWJzLnB1c2goZm4pO1xuICAgICAgICBmbih0aGlzLnZhbCk7XG4gICAgfTtcbiAgICBTdWIucHJvdG90eXBlLnRyaWdnZXIgPSBmdW5jdGlvbiAodmFsKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHRoaXMudmFsID0gdmFsIHx8IHRoaXMudmFsO1xuICAgICAgICB0aGlzLnN1YnMuZm9yRWFjaChmdW5jdGlvbiAoXykgeyByZXR1cm4gXyhfdGhpcy52YWwpOyB9KTtcbiAgICB9O1xuICAgIHJldHVybiBTdWI7XG59KCkpO1xuZXhwb3J0IHsgU3ViIH07XG52YXIgcG9zVG9UcmFuc2xhdGVCYXNlID0gZnVuY3Rpb24gKHBvcywgeEZhY3RvciwgeUZhY3RvcikgeyByZXR1cm4gW1xuICAgIChwb3NbMF0gLSAxKSAqIHhGYWN0b3IsXG4gICAgKDggLSBwb3NbMV0pICogeUZhY3RvclxuXTsgfTtcbmV4cG9ydCBmdW5jdGlvbiBmZlBvc1RvVHJhbnNsYXRlQWJzKGJvdW5kcykge1xuICAgIHZhciB4RmFjdG9yID0gYm91bmRzLndpZHRoIC8gOCwgeUZhY3RvciA9IGJvdW5kcy5oZWlnaHQgLyA4O1xuICAgIHJldHVybiBmdW5jdGlvbiAocG9zKSB7XG4gICAgICAgIHJldHVybiBwb3NUb1RyYW5zbGF0ZUJhc2UocG9zLCB4RmFjdG9yLCB5RmFjdG9yKTtcbiAgICB9O1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXRpbC5qcy5tYXAiLCJpbXBvcnQgeyBoLCB2aCwgdm1hcCB9IGZyb20gJ2hoaCc7XG5pbXBvcnQgeyBudCB9IGZyb20gJ25lZnMnO1xuaW1wb3J0IHsgZmZQb3NUb1RyYW5zbGF0ZUFicyB9IGZyb20gJy4vdXRpbCc7XG5leHBvcnQgZnVuY3Rpb24gc3R5bGVUcmFuc2Zvcm0ocG9zKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChlbG0pIHtcbiAgICAgICAgZWxtLnN0eWxlLnRyYW5zZm9ybSA9IFwidHJhbnNsYXRlKFwiICsgcG9zWzBdICsgXCJweCxcIiArIHBvc1sxXSArIFwicHgpXCI7XG4gICAgfTtcbn1cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChjdHJsKSB7XG4gICAgdmFyIGZQb3NUb1RyYW5zbGF0ZSA9IGZ1bmN0aW9uIChwb3MpIHsgcmV0dXJuIHBvczsgfTtcbiAgICB2YXIgdiRQaWVjZXMgPSB2bWFwKFtdLCBmdW5jdGlvbiAocHJvcHMsIHBhcmVudFByb3BzKSB7XG4gICAgICAgIHJldHVybiB2aCgncGllY2UnLCBwcm9wcywge1xuICAgICAgICAgICAga2xhc3NMaXN0OiBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgICAgICB2YXIgcGllY2UgPSBfYS5waWVjZTtcbiAgICAgICAgICAgICAgICByZXR1cm4gW250LmxvbmdDb2xvcltwaWVjZS5jb2xvcl0sXG4gICAgICAgICAgICAgICAgICAgIG50LmxvbmdSb2xlW3BpZWNlLnJvbGVdXTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlbGVtZW50OiBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgICAgICB2YXIgcG9zID0gX2EucG9zLCBmUG9zVG9UcmFuc2xhdGUgPSBfYS5mUG9zVG9UcmFuc2xhdGU7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHN0eWxlVHJhbnNmb3JtKGZQb3NUb1RyYW5zbGF0ZShwb3MpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgW10sIHBhcmVudFByb3BzKTtcbiAgICB9LCB7IGZQb3NUb1RyYW5zbGF0ZTogZlBvc1RvVHJhbnNsYXRlIH0pO1xuICAgIHZhciB2JExhc3RNb3ZlcyA9IHZtYXAoW10sIGZ1bmN0aW9uIChwb3MsIHBhcmVudFByb3BzKSB7XG4gICAgICAgIHJldHVybiB2aCgnc3F1YXJlLmxhc3QtbW92ZScsIHsgcG9zOiBwb3MgfSwgeyBlbGVtZW50OiBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgICAgICB2YXIgcG9zID0gX2EucG9zLCBmUG9zVG9UcmFuc2xhdGUgPSBfYS5mUG9zVG9UcmFuc2xhdGU7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHN0eWxlVHJhbnNmb3JtKGZQb3NUb1RyYW5zbGF0ZShwb3MpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgW10sIHBhcmVudFByb3BzKTtcbiAgICB9LCB7IGZQb3NUb1RyYW5zbGF0ZTogZlBvc1RvVHJhbnNsYXRlIH0pO1xuICAgIHZhciB2JGJvYXJkID0gaCgnbWQtYm9hcmQnLCBbXG4gICAgICAgIHYkTGFzdE1vdmVzLFxuICAgICAgICB2JFBpZWNlc1xuICAgIF0pO1xuICAgIHZhciB2JGNvUmFua3MgPSB2aCgnY29vcmRzLnJhbmtzJywge30sIHtcbiAgICAgICAga2xhc3NMaXN0OiBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgIHZhciB0dXJuID0gX2EudHVybjtcbiAgICAgICAgICAgIHJldHVybiBbbnQubG9uZ0NvbG9yW3R1cm5dXTtcbiAgICAgICAgfVxuICAgIH0sIG50LnJhbmtzLm1hcChmdW5jdGlvbiAoXykgeyByZXR1cm4gaCgnY29vcmQnLCBfKTsgfSkpLCB2JGNvRmlsZXMgPSB2aCgnY29vcmRzLmZpbGVzJywge30sIHtcbiAgICAgICAga2xhc3NMaXN0OiBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgIHZhciB0dXJuID0gX2EudHVybjtcbiAgICAgICAgICAgIHJldHVybiBbbnQubG9uZ0NvbG9yW3R1cm5dXTtcbiAgICAgICAgfVxuICAgIH0sIG50LmZpbGVzLm1hcChmdW5jdGlvbiAoXykgeyByZXR1cm4gaCgnY29vcmQnLCBfKTsgfSkpO1xuICAgIGN0cmwuc1NpdHVhdGlvbi5zdWIoZnVuY3Rpb24gKHNpdHVhdGlvbikge1xuICAgICAgICB2YXIgYm9hcmQgPSBzaXR1YXRpb24uYm9hcmQsIHR1cm4gPSBzaXR1YXRpb24udHVybjtcbiAgICAgICAgdiRjb1JhbmtzLnVwZGF0ZSh7IHR1cm46IHR1cm4gfSk7XG4gICAgICAgIHYkY29GaWxlcy51cGRhdGUoeyB0dXJuOiB0dXJuIH0pO1xuICAgICAgICB2YXIgcGllY2VQcm9wcyA9IEFycmF5LmZyb20oYm9hcmQuZW50cmllcygpKVxuICAgICAgICAgICAgLm1hcChmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgIHZhciBwb3MgPSBfYVswXSwgcGllY2UgPSBfYVsxXTtcbiAgICAgICAgICAgIHJldHVybiAoeyBwb3M6IHBvcywgcGllY2U6IHBpZWNlIH0pO1xuICAgICAgICB9KTtcbiAgICAgICAgdiRQaWVjZXMudXBkYXRlKHBpZWNlUHJvcHMpO1xuICAgIH0pO1xuICAgIGN0cmwuc0xhc3RNb3ZlLnN1YihmdW5jdGlvbiAobGFzdE1vdmUpIHtcbiAgICAgICAgdiRMYXN0TW92ZXMudXBkYXRlKGxhc3RNb3ZlKTtcbiAgICB9KTtcbiAgICB2YXIgb25SZXNpemUgPSBmdW5jdGlvbiAoYm91bmRzKSB7XG4gICAgICAgIHZhciBfZnB0ID0gZmZQb3NUb1RyYW5zbGF0ZUFicyhib3VuZHMpO1xuICAgICAgICB2JExhc3RNb3Zlcy51cGRhdGVQcm9wKHsgZlBvc1RvVHJhbnNsYXRlOiBfZnB0IH0pO1xuICAgICAgICB2JFBpZWNlcy51cGRhdGVQcm9wKHsgZlBvc1RvVHJhbnNsYXRlOiBfZnB0IH0pO1xuICAgIH07XG4gICAgcmV0dXJuIGgoJ21kLXdyYXAnLCB7XG4gICAgICAgIHJlc2l6ZTogb25SZXNpemVcbiAgICB9LCBbXG4gICAgICAgIHYkYm9hcmQsXG4gICAgICAgIHYkY29SYW5rcyxcbiAgICAgICAgdiRjb0ZpbGVzXG4gICAgXSk7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD12aWV3LmpzLm1hcCIsInZhciBBcGkgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gQXBpKGN0cmwpIHtcbiAgICAgICAgdGhpcy5jdHJsID0gY3RybDtcbiAgICB9XG4gICAgQXBpLnByb3RvdHlwZS5mZW4gPSBmdW5jdGlvbiAoZmVuKSB7XG4gICAgICAgIHRoaXMuY3RybC5mZW4oZmVuKTtcbiAgICB9O1xuICAgIHJldHVybiBBcGk7XG59KCkpO1xuZXhwb3J0IGRlZmF1bHQgQXBpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBpLmpzLm1hcCIsImltcG9ydCB7IG50LCBmIH0gZnJvbSAnbmVmcyc7XG5pbXBvcnQgeyBiIH0gZnJvbSAndHNjaGVzcyc7XG5pbXBvcnQgeyBTdWIgfSBmcm9tICcuL3V0aWwnO1xudmFyIEN0cmwgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gQ3RybCgpIHtcbiAgICAgICAgdmFyIHNpdHVhdGlvbiA9IGYuc2l0dWF0aW9uKG50LmluaXRpYWxGZW4pO1xuICAgICAgICB0aGlzLnN1YlJlY29ucyA9IG5ldyBTdWIodW5kZWZpbmVkKTtcbiAgICAgICAgdGhpcy5zdWJTaXR1YXRpb24gPSBuZXcgU3ViKHNpdHVhdGlvbik7XG4gICAgICAgIHRoaXMuc2VsZWN0aW9uID0gbmV3IFN1Yih7IGFjdGl2ZTogZmFsc2UgfSk7XG4gICAgfVxuICAgIEN0cmwucHJvdG90eXBlLmZlbiA9IGZ1bmN0aW9uIChmZW4pIHtcbiAgICAgICAgdmFyIHNpdHVhdGlvbiA9IGYuc2l0dWF0aW9uKGZlbik7XG4gICAgICAgIGlmIChzaXR1YXRpb24pIHtcbiAgICAgICAgICAgIHRoaXMuc3ViU2l0dWF0aW9uLnB1YihzaXR1YXRpb24pO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBDdHJsLnByb3RvdHlwZS5pbml0UHViID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLnN1YlNpdHVhdGlvbi5wdWIoKTtcbiAgICAgICAgdGhpcy5zdWJSZWNvbnMucHViKCk7XG4gICAgfTtcbiAgICBDdHJsLnByb3RvdHlwZS5zZWxlY3RTcGFyZSA9IGZ1bmN0aW9uIChwaWVjZSkge1xuICAgICAgICB0aGlzLnNlbGVjdGlvbi5tdXRhdGUoZnVuY3Rpb24gKF8pIHtcbiAgICAgICAgICAgIF8uYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgIF8ucGllY2UgPSBwaWVjZTtcbiAgICAgICAgICAgIF8uc291cmNlID0gdW5kZWZpbmVkO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIEN0cmwucHJvdG90eXBlLnNlbGVjdCA9IGZ1bmN0aW9uIChrZXksIGVwb3MpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdGhpcy5zdWJTaXR1YXRpb24ubXV0YXRlKGZ1bmN0aW9uIChzaXR1YXRpb24pIHtcbiAgICAgICAgICAgIHZhciBuZXdCb2FyZCA9IGIucGlja3VwKHNpdHVhdGlvbi5ib2FyZCwga2V5KTtcbiAgICAgICAgICAgIHZhciBwaWVjZSA9IHNpdHVhdGlvbi5ib2FyZC5nZXQoa2V5KTtcbiAgICAgICAgICAgIGlmIChuZXdCb2FyZCkge1xuICAgICAgICAgICAgICAgIF90aGlzLnNlbGVjdGlvbi5tdXRhdGUoZnVuY3Rpb24gKF8pIHtcbiAgICAgICAgICAgICAgICAgICAgXy5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBfLnBpZWNlID0gcGllY2U7XG4gICAgICAgICAgICAgICAgICAgIF8uc291cmNlID0ga2V5O1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHNpdHVhdGlvbi5ib2FyZCA9IG5ld0JvYXJkO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9O1xuICAgIEN0cmwucHJvdG90eXBlLnVuc2VsZWN0Qm9hcmQgPSBmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHRoaXMuc3ViU2l0dWF0aW9uLm11dGF0ZShmdW5jdGlvbiAoc2l0dWF0aW9uKSB7XG4gICAgICAgICAgICB2YXIgcGllY2UgPSBfdGhpcy5zZWxlY3Rpb24uY3VycmVudFZhbHVlLnBpZWNlO1xuICAgICAgICAgICAgdmFyIGIyID0gYi5kcm9wKHNpdHVhdGlvbi5ib2FyZCwga2V5LCBwaWVjZSk7XG4gICAgICAgICAgICBpZiAoYjIpIHtcbiAgICAgICAgICAgICAgICBzaXR1YXRpb24uYm9hcmQgPSBiMjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBDdHJsLnByb3RvdHlwZS51bnNlbGVjdCA9IGZ1bmN0aW9uIChlcG9zKSB7XG4gICAgICAgIHRoaXMuc2VsZWN0aW9uLm11dGF0ZShmdW5jdGlvbiAoXykgeyByZXR1cm4gXy5hY3RpdmUgPSBmYWxzZTsgfSk7XG4gICAgfTtcbiAgICBDdHJsLnByb3RvdHlwZS5tb3ZlID0gZnVuY3Rpb24gKGVwb3MpIHtcbiAgICAgICAgaWYgKHRoaXMuc2VsZWN0aW9uLmN1cnJlbnRWYWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5zZWxlY3Rpb24ubXV0YXRlKGZ1bmN0aW9uIChfKSB7IHJldHVybiBfLmVwb3MgPSBlcG9zOyB9KTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgcmV0dXJuIEN0cmw7XG59KCkpO1xuZXhwb3J0IGRlZmF1bHQgQ3RybDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWN0cmwuanMubWFwIiwiaW1wb3J0IHsgZXZlbnRQb3NpdGlvbiB9IGZyb20gJy4vdXRpbCc7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBiaW5kRG9jdW1lbnQoY3RybCkge1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGN0cmwubW92ZShldmVudFBvc2l0aW9uKGUpKTtcbiAgICB9KTtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgY3RybC51bnNlbGVjdChldmVudFBvc2l0aW9uKGUpKTtcbiAgICB9KTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWV2ZW50cy5qcy5tYXAiLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSAnLi9tYWluJztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcCIsImltcG9ydCB7IHZpbml0IH0gZnJvbSAnaGhoJztcbmltcG9ydCBldmVudHMgZnJvbSAnLi9ldmVudHMnO1xuaW1wb3J0IEN0cmwgZnJvbSAnLi9jdHJsJztcbmltcG9ydCBWaWV3IGZyb20gJy4vdmlldyc7XG5pbXBvcnQgQXBpIGZyb20gJy4vYXBpJztcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFwcChlbGVtZW50KSB7XG4gICAgdmFyIHJlY29ucyA9IHZpbml0KCk7XG4gICAgdmFyIGN0cmwgPSBuZXcgQ3RybCgpO1xuICAgIHZhciB2aWV3ID0gbmV3IFZpZXcoY3RybCk7XG4gICAgZXZlbnRzKGN0cmwpO1xuICAgIHZhciAkXyA9IHJlY29ucyh2aWV3LnZBcHAoKSk7XG4gICAgZWxlbWVudC5hcHBlbmRDaGlsZCgkXyk7XG4gICAgY3RybC5pbml0UHViKCk7XG4gICAgcmV0dXJuIG5ldyBBcGkoY3RybCk7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1tYWluLmpzLm1hcCIsImltcG9ydCB7IGRiIH0gZnJvbSAnbmVmcyc7XG52YXIgU3ViID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFN1YihhKSB7XG4gICAgICAgIHRoaXMuc3VicyA9IFtdO1xuICAgICAgICB0aGlzLmN1cnJlbnRWYWx1ZSA9IGE7XG4gICAgfVxuICAgIFN1Yi5wcm90b3R5cGUuc3ViID0gZnVuY3Rpb24gKGZuKSB7XG4gICAgICAgIHRoaXMuc3Vicy5wdXNoKGZuKTtcbiAgICB9O1xuICAgIFN1Yi5wcm90b3R5cGUucHViID0gZnVuY3Rpb24gKHZhbCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICBpZiAodmFsKSB7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRWYWx1ZSA9IHZhbDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnN1YnMuZm9yRWFjaChmdW5jdGlvbiAoXykgeyByZXR1cm4gXyhfdGhpcy5jdXJyZW50VmFsdWUpOyB9KTtcbiAgICB9O1xuICAgIFN1Yi5wcm90b3R5cGUubXV0YXRlID0gZnVuY3Rpb24gKGZuKSB7XG4gICAgICAgIGZuKHRoaXMuY3VycmVudFZhbHVlKTtcbiAgICAgICAgdGhpcy5wdWIodGhpcy5jdXJyZW50VmFsdWUpO1xuICAgIH07XG4gICAgcmV0dXJuIFN1Yjtcbn0oKSk7XG5leHBvcnQgeyBTdWIgfTtcbmV4cG9ydCBmdW5jdGlvbiBib2FyZFBvc2l0aW9uKGVwLCBwb3YsIGJvdW5kcykge1xuICAgIHZhciBwZmlsZSA9IE1hdGguY2VpbCgoOCAqIChlcFswXSAtIGJvdW5kcy5sZWZ0KSkgLyBib3VuZHMud2lkdGgpO1xuICAgIHZhciBwcmFuayA9IE1hdGguY2VpbCgoOCAqIChlcFsxXSAtIGJvdW5kcy50b3ApKSAvIGJvdW5kcy5oZWlnaHQpO1xuICAgIGlmIChwb3YgPT09ICd3Jykge1xuICAgICAgICBwcmFuayA9IDkgLSBwcmFuaztcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHBmaWxlID0gOSAtIHBmaWxlO1xuICAgIH1cbiAgICByZXR1cm4gZGIucG9zcy5uZ2V0KHBmaWxlLCBwcmFuayk7XG59XG5leHBvcnQgZnVuY3Rpb24gZXZlbnRQb3NpdGlvbihlKSB7XG4gICAgaWYgKGUuY2xpZW50WCB8fCBlLmNsaWVudFggPT09IDApXG4gICAgICAgIHJldHVybiBbZS5jbGllbnRYLCBlLmNsaWVudFldO1xuICAgIHJldHVybjtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXV0aWwuanMubWFwIiwiaW1wb3J0IHsgdmgsIGggfSBmcm9tICdoaGgnO1xuaW1wb3J0IHNzZWhDIGZyb20gJ3NzZWhjJztcbmltcG9ydCB7IG50LCBkYiwgZiB9IGZyb20gJ25lZnMnO1xudmFyIHBvc3MgPSBkYi5wb3NzO1xuaW1wb3J0ICogYXMgdSBmcm9tICcuL3V0aWwnO1xuZXhwb3J0IGZ1bmN0aW9uIHN0eWxlVHJhbnNmb3JtKHBvcykge1xuICAgIHJldHVybiBmdW5jdGlvbiAoZWxtKSB7XG4gICAgICAgIGVsbS5zdHlsZS50cmFuc2Zvcm0gPSBcInRyYW5zbGF0ZShcIiArIHBvc1swXSArIFwicHgsXCIgKyBwb3NbMV0gKyBcInB4KVwiO1xuICAgIH07XG59XG52YXIgVmlldyA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBWaWV3KGN0cmwpIHtcbiAgICAgICAgdGhpcy5jdHJsID0gY3RybDtcbiAgICAgICAgdGhpcy5iQm91bmRzID0gbmV3IHUuU3ViKHVuZGVmaW5lZCk7XG4gICAgfVxuICAgIFZpZXcucHJvdG90eXBlLnZTcGFyZSA9IGZ1bmN0aW9uIChjb2xvcikge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB2YXIgcGllY2VzID0gbnQucm9sZXMubWFwKGZ1bmN0aW9uIChyb2xlKSB7XG4gICAgICAgICAgICByZXR1cm4gZGIucGllY2VzLnBnZXQoY29sb3IsIHJvbGUpO1xuICAgICAgICB9KTtcbiAgICAgICAgdmFyIHYkc3BhcmVzID0gcGllY2VzLm1hcChmdW5jdGlvbiAocGllY2UpIHtcbiAgICAgICAgICAgIHJldHVybiB2aCgnZGl2Lm5vLXNxdWFyZScsIHt9LCB7XG4gICAgICAgICAgICAgICAgZWxlbWVudDogZnVuY3Rpb24gKCkgeyByZXR1cm4gZnVuY3Rpb24gKCRfKSB7XG4gICAgICAgICAgICAgICAgICAgICRfLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5jdHJsLnNlbGVjdFNwYXJlKHBpZWNlKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfTsgfVxuICAgICAgICAgICAgfSwgW2goJ2RpdicsIFt2aCgncGllY2UnLCB7IHBpZWNlOiBwaWVjZSB9LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBrbGFzc0xpc3Q6IGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBwaWVjZSA9IF9hLnBpZWNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbbnQubG9uZ0NvbG9yW3BpZWNlLmNvbG9yXSwgbnQubG9uZ1JvbGVbcGllY2Uucm9sZV1dO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LCBbXSldKVxuICAgICAgICAgICAgXSk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gaCgnZGl2LnNwYXJlJywgdiRzcGFyZXMpO1xuICAgIH07XG4gICAgVmlldy5wcm90b3R5cGUudkJvYXJkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB2YXIgdiRib2FyZCA9IHZoKCdkaXYuYm9hcmQnLCB7fSwge1xuICAgICAgICAgICAgcmVzaXplOiBmdW5jdGlvbiAoYm91bmRzKSB7IHJldHVybiBfdGhpcy5iQm91bmRzLnB1Yihib3VuZHMpOyB9LFxuICAgICAgICAgICAgZWxlbWVudDogZnVuY3Rpb24gKCkgeyByZXR1cm4gZnVuY3Rpb24gKCRfKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMuYXBpc3MgPSBzc2VoQygkXywge30pO1xuICAgICAgICAgICAgICAgICRfLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBlcG9zID0gdS5ldmVudFBvc2l0aW9uKGUpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgb3JpZyA9IHUuYm9hcmRQb3NpdGlvbihlcG9zLCBfdGhpcy5jdHJsLnN1YlNpdHVhdGlvbi5jdXJyZW50VmFsdWUudHVybiwgJF8uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkpO1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy5jdHJsLnNlbGVjdChvcmlnLCBlcG9zKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAkXy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGVwb3MgPSB1LmV2ZW50UG9zaXRpb24oZSk7XG4gICAgICAgICAgICAgICAgICAgIHZhciBvcmlnID0gdS5ib2FyZFBvc2l0aW9uKGVwb3MsIF90aGlzLmN0cmwuc3ViU2l0dWF0aW9uLmN1cnJlbnRWYWx1ZS50dXJuLCAkXy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSk7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLmN0cmwudW5zZWxlY3RCb2FyZChvcmlnKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH07IH1cbiAgICAgICAgfSwgW3RoaXMudkRyYWcoKV0pO1xuICAgICAgICB0aGlzLmN0cmwuc3ViU2l0dWF0aW9uLnN1YihmdW5jdGlvbiAoc2l0dWF0aW9uKSB7XG4gICAgICAgICAgICBfdGhpcy5hcGlzcy5mZW4oZi5mZW4oc2l0dWF0aW9uKSk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gdiRib2FyZDtcbiAgICB9O1xuICAgIFZpZXcucHJvdG90eXBlLnZEcmFnID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgZFByb3BzID0ge1xuICAgICAgICAgICAgZlBvc1RvVHJhbnNsYXRlOiBmdW5jdGlvbiAoXykgeyByZXR1cm4gXzsgfSxcbiAgICAgICAgICAgIHBpZWNlOiB7IHJvbGU6ICdyJywgY29sb3I6ICd3JyB9LFxuICAgICAgICAgICAgaGlkZGVuOiB0cnVlLFxuICAgICAgICAgICAgcG9zOiBbMCwgMF1cbiAgICAgICAgfTtcbiAgICAgICAgdmFyIHYkZHJhZyA9IHZoKCdwaWVjZS5kcmFnZ2luZycsIGRQcm9wcywge1xuICAgICAgICAgICAgZWxlbWVudDogZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICAgICAgdmFyIHBvcyA9IF9hLnBvcywgZlBvc1RvVHJhbnNsYXRlID0gX2EuZlBvc1RvVHJhbnNsYXRlO1xuICAgICAgICAgICAgICAgIHJldHVybiBzdHlsZVRyYW5zZm9ybShmUG9zVG9UcmFuc2xhdGUocG9zKSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAga2xhc3NMaXN0OiBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgICAgICB2YXIgcGllY2UgPSBfYS5waWVjZSwgaGlkZGVuID0gX2EuaGlkZGVuO1xuICAgICAgICAgICAgICAgIHJldHVybiBbaGlkZGVuID8gJ2hpZGRlbicgOiBbXSwgbnQubG9uZ1JvbGVbcGllY2Uucm9sZV0sIG50LmxvbmdDb2xvcltwaWVjZS5jb2xvcl1dLmZsYXQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgW10sIHt9KTtcbiAgICAgICAgdGhpcy5jdHJsLnNlbGVjdGlvbi5zdWIoZnVuY3Rpb24gKHNlbGVjdGlvbikge1xuICAgICAgICAgICAgaWYgKHNlbGVjdGlvbi5hY3RpdmUpIHtcbiAgICAgICAgICAgICAgICB2JGRyYWcudXBkYXRlKHtcbiAgICAgICAgICAgICAgICAgICAgaGlkZGVuOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgcGllY2U6IHNlbGVjdGlvbi5waWVjZSxcbiAgICAgICAgICAgICAgICAgICAgcG9zOiBzZWxlY3Rpb24uZXBvc1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdiRkcmFnLnVwZGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgIGhpZGRlbjogdHJ1ZVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5iQm91bmRzLnN1YihmdW5jdGlvbiAoYm91bmRzKSB7XG4gICAgICAgICAgICB2YXIgZlBvc1RvVHJhbnNsYXRlID0gZnVuY3Rpb24gKHBvcykge1xuICAgICAgICAgICAgICAgIHJldHVybiBbcG9zWzBdIC0gYm91bmRzLmxlZnQgLSBib3VuZHMud2lkdGggLyAxNiwgcG9zWzFdIC0gYm91bmRzLnRvcCAtIGJvdW5kcy5oZWlnaHQgLyAxNl07XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgdiRkcmFnLnVwZGF0ZSh7XG4gICAgICAgICAgICAgICAgZlBvc1RvVHJhbnNsYXRlOiBmUG9zVG9UcmFuc2xhdGVcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHYkZHJhZztcbiAgICB9O1xuICAgIFZpZXcucHJvdG90eXBlLnZBcHAgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBoKCdkaXYuYm9hcmQtZWRpdG9yJywgW1xuICAgICAgICAgICAgdGhpcy52U3BhcmUoJ2InKSxcbiAgICAgICAgICAgIHRoaXMudkJvYXJkKCksXG4gICAgICAgICAgICB0aGlzLnZTcGFyZSgndycpXG4gICAgICAgIF0pO1xuICAgIH07XG4gICAgcmV0dXJuIFZpZXc7XG59KCkpO1xuZXhwb3J0IGRlZmF1bHQgVmlldztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXZpZXcuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19jcmVhdGVCaW5kaW5nID0gKHRoaXMgJiYgdGhpcy5fX2NyZWF0ZUJpbmRpbmcpIHx8IChPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobywgazIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbigpIHsgcmV0dXJuIG1ba107IH0gfSk7XG59KSA6IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XG4gICAgb1trMl0gPSBtW2tdO1xufSkpO1xudmFyIF9fc2V0TW9kdWxlRGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19zZXRNb2R1bGVEZWZhdWx0KSB8fCAoT2JqZWN0LmNyZWF0ZSA/IChmdW5jdGlvbihvLCB2KSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIFwiZGVmYXVsdFwiLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2IH0pO1xufSkgOiBmdW5jdGlvbihvLCB2KSB7XG4gICAgb1tcImRlZmF1bHRcIl0gPSB2O1xufSk7XG52YXIgX19pbXBvcnRTdGFyID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydFN0YXIpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xuICAgIHZhciByZXN1bHQgPSB7fTtcbiAgICBpZiAobW9kICE9IG51bGwpIGZvciAodmFyIGsgaW4gbW9kKSBpZiAoayAhPT0gXCJkZWZhdWx0XCIgJiYgT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vZCwgaykpIF9fY3JlYXRlQmluZGluZyhyZXN1bHQsIG1vZCwgayk7XG4gICAgX19zZXRNb2R1bGVEZWZhdWx0KHJlc3VsdCwgbW9kKTtcbiAgICByZXR1cm4gcmVzdWx0O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMubW92ZXMgPSBleHBvcnRzLmFjdG9ycyA9IGV4cG9ydHMuY2FzdGxlcyA9IHZvaWQgMDtcbmNvbnN0IG5lZnNfMSA9IHJlcXVpcmUoXCJuZWZzXCIpO1xuY29uc3QgYiA9IF9faW1wb3J0U3RhcihyZXF1aXJlKFwiLi9ib2FyZFwiKSk7XG5jb25zdCBkaXIgPSBfX2ltcG9ydFN0YXIocmVxdWlyZShcIi4vZGlyZWN0aW9uXCIpKTtcbmNvbnN0IGRpc3AgPSBfX2ltcG9ydFN0YXIocmVxdWlyZShcIi4vZGlzcGxhY2VcIikpO1xubGV0IHsgcG9zcywgcGllY2VzIH0gPSBuZWZzXzEuZGI7XG5mdW5jdGlvbiBjYXN0bGVzKGJvYXJkLCB0dXJuLCBjYXN0bGUpIHtcbiAgICBsZXQgc2l0dWF0aW9uQmVmb3JlID0ge1xuICAgICAgICBib2FyZCxcbiAgICAgICAgdHVyblxuICAgIH07XG4gICAgbGV0IGtpbmcgPSBwaWVjZXMucGdldCh0dXJuLCAnaycpO1xuICAgIGxldCByb29rID0gcGllY2VzLnBnZXQodHVybiwgJ3InKTtcbiAgICBsZXQgb3JpZ0tpbmdQb3MgPSBiLnBvc09mKGJvYXJkLCBraW5nKTtcbiAgICBpZiAoIW9yaWdLaW5nUG9zKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgbGV0IGRlc3RLaW5nUG9zID0gcG9zcy5wZ2V0KGNhc3RsZS5raW5nLCBvcmlnS2luZ1Bvc1sxXSk7XG4gICAgbGV0IHJvb2tUcmlwID0gZGlyLnJyb3V0ZTAoY2FzdGxlLnRyaXAsIG9yaWdLaW5nUG9zWzBdKTtcbiAgICBsZXQgb3JpZ1Jvb2tQb3MgPSBiLmZpcnN0UG9zRm9yUGllY2VPblJvdXRlKGJvYXJkLCByb29rLCBvcmlnS2luZ1Bvcywgcm9va1RyaXApO1xuICAgIGlmICghb3JpZ1Jvb2tQb3MpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBsZXQgZGVzdFJvb2tQb3MgPSBwb3NzLnBnZXQoY2FzdGxlLnJvb2ssIG9yaWdSb29rUG9zWzFdKTtcbiAgICBsZXQgYWZ0ZXIgPSBiLmNhc3RsZShib2FyZCwgb3JpZ0tpbmdQb3MsIGRlc3RLaW5nUG9zLCBvcmlnUm9va1BvcywgZGVzdFJvb2tQb3MpO1xuICAgIGlmICghYWZ0ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgICBwaWVjZToga2luZyxcbiAgICAgICAgc2l0dWF0aW9uQmVmb3JlLFxuICAgICAgICBhZnRlcixcbiAgICAgICAgY2FzdGxlOiBuZWZzXzEuc2lkZS5TaG9ydENhc3RsZSxcbiAgICAgICAgb3JpZzogb3JpZ0tpbmdQb3MsXG4gICAgICAgIGRlc3Q6IGRlc3RLaW5nUG9zLFxuICAgIH07XG59XG5leHBvcnRzLmNhc3RsZXMgPSBjYXN0bGVzO1xuZnVuY3Rpb24gYWN0b3JzKGJvYXJkLCBwaWVjZSwgcG9zLCBwcm9tb3Rpb24pIHtcbiAgICBsZXQgcmVzID0gW107XG4gICAgZm9yIChsZXQgW19wb3MsIF9waWVjZV0gb2YgYm9hcmQuZW50cmllcygpKSB7XG4gICAgICAgIGlmIChfcGllY2UgPT09IHBpZWNlICYmXG4gICAgICAgICAgICBfcG9zWzBdID09PSAocG9zWzBdIHx8IF9wb3NbMF0pICYmXG4gICAgICAgICAgICBfcG9zWzFdID09PSAocG9zWzFdIHx8IF9wb3NbMV0pKVxuICAgICAgICAgICAgcmVzLnB1c2goe1xuICAgICAgICAgICAgICAgIHBvczogX3BvcyxcbiAgICAgICAgICAgICAgICBwaWVjZSxcbiAgICAgICAgICAgICAgICBib2FyZCxcbiAgICAgICAgICAgICAgICBwcm9tb3Rpb25cbiAgICAgICAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gcmVzO1xufVxuZXhwb3J0cy5hY3RvcnMgPSBhY3RvcnM7XG5mdW5jdGlvbiBtb3Zlcyh7IGJvYXJkLCBwaWVjZSwgcG9zIH0pIHtcbiAgICBsZXQgc2l0dWF0aW9uQmVmb3JlID0ge1xuICAgICAgICBib2FyZCxcbiAgICAgICAgdHVybjogcGllY2UuY29sb3JcbiAgICB9O1xuICAgIGxldCBwcm9qZWN0aW9uID0gZGlzcC5wcm9qZWN0aW9uKHBvcywgcGllY2UpO1xuICAgIGxldCBjYXB0dXJlcyA9IGRpc3Aucm91dGUxQ2FwdHVyZXMocG9zLCBwaWVjZSkuZmxhdE1hcChyb3V0ZTAgPT4ge1xuICAgICAgICBsZXQgY2FwdHVyZXMgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCBwcm9qZWN0aW9uICsgMTsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgdG8gPSByb3V0ZTBbaV07XG4gICAgICAgICAgICBpZiAoIXRvKSB7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoYm9hcmQuZ2V0KHRvKSkge1xuICAgICAgICAgICAgICAgIGxldCBhZnRlciA9IGIuY2FwdHVyZShib2FyZCwgcG9zLCB0byk7XG4gICAgICAgICAgICAgICAgaWYgKGFmdGVyKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhcHR1cmVzLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgcGllY2UsXG4gICAgICAgICAgICAgICAgICAgICAgICBzaXR1YXRpb25CZWZvcmUsXG4gICAgICAgICAgICAgICAgICAgICAgICBhZnRlcixcbiAgICAgICAgICAgICAgICAgICAgICAgIG9yaWc6IHBvcyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlc3Q6IHRvLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2FwdHVyZTogdG9cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjYXB0dXJlcztcbiAgICB9KTtcbiAgICBsZXQgbW92ZXMgPSBkaXNwLnJvdXRlMShwb3MsIHBpZWNlKS5mbGF0TWFwKHJvdXRlMCA9PiB7XG4gICAgICAgIGxldCBtb3ZlcyA9IFtdO1xuICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8IHByb2plY3Rpb24gKyAxOyBpKyspIHtcbiAgICAgICAgICAgIGxldCB0byA9IHJvdXRlMFtpXTtcbiAgICAgICAgICAgIGlmICghdG8pIHtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCBfdG8gPSB0bztcbiAgICAgICAgICAgIGlmICghYm9hcmQuZ2V0KHRvKSkge1xuICAgICAgICAgICAgICAgIGlmIChkaXNwLnByb21vdGVzKHRvLCBwaWVjZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgbmVmc18xLm50LnByb21vdGFibGVzLmZvckVhY2gocm9sZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgYjEgPSBiLm1vdmUoYm9hcmQsIHBvcywgdG8pLCBhZnRlciA9IGIucHJvbW90ZShiMSwgdG8sIHJvbGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGFmdGVyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbW92ZXMucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBpZWNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXR1YXRpb25CZWZvcmUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFmdGVyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcmlnOiBwb3MsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlc3Q6IF90byxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvbW90aW9uOiByb2xlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGFmdGVyID0gYi5tb3ZlKGJvYXJkLCBwb3MsIHRvKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGFmdGVyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtb3Zlcy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwaWVjZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXR1YXRpb25CZWZvcmUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWZ0ZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3JpZzogcG9zLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlc3Q6IHRvXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbW92ZXM7XG4gICAgfSk7XG4gICAgcmV0dXJuIFsuLi5tb3ZlcywgLi4uY2FwdHVyZXNdO1xufVxuZXhwb3J0cy5tb3ZlcyA9IG1vdmVzO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YWN0b3IuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19jcmVhdGVCaW5kaW5nID0gKHRoaXMgJiYgdGhpcy5fX2NyZWF0ZUJpbmRpbmcpIHx8IChPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobywgazIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbigpIHsgcmV0dXJuIG1ba107IH0gfSk7XG59KSA6IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XG4gICAgb1trMl0gPSBtW2tdO1xufSkpO1xudmFyIF9fc2V0TW9kdWxlRGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19zZXRNb2R1bGVEZWZhdWx0KSB8fCAoT2JqZWN0LmNyZWF0ZSA/IChmdW5jdGlvbihvLCB2KSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIFwiZGVmYXVsdFwiLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2IH0pO1xufSkgOiBmdW5jdGlvbihvLCB2KSB7XG4gICAgb1tcImRlZmF1bHRcIl0gPSB2O1xufSk7XG52YXIgX19pbXBvcnRTdGFyID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydFN0YXIpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xuICAgIHZhciByZXN1bHQgPSB7fTtcbiAgICBpZiAobW9kICE9IG51bGwpIGZvciAodmFyIGsgaW4gbW9kKSBpZiAoayAhPT0gXCJkZWZhdWx0XCIgJiYgT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vZCwgaykpIF9fY3JlYXRlQmluZGluZyhyZXN1bHQsIG1vZCwgayk7XG4gICAgX19zZXRNb2R1bGVEZWZhdWx0KHJlc3VsdCwgbW9kKTtcbiAgICByZXR1cm4gcmVzdWx0O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuZmVuID0gZXhwb3J0cy5wb3NPZiA9IGV4cG9ydHMuZmlyc3RQb3NGb3JQaWVjZU9uUm91dGUgPSBleHBvcnRzLmFjdG9ycyA9IGV4cG9ydHMuY2FzdGxlID0gZXhwb3J0cy5wcm9tb3RlID0gZXhwb3J0cy5waWNrdXAgPSBleHBvcnRzLmRyb3AgPSBleHBvcnRzLm1vdmUgPSBleHBvcnRzLmNhcHR1cmUgPSB2b2lkIDA7XG5jb25zdCBuZWZzXzEgPSByZXF1aXJlKFwibmVmc1wiKTtcbmNvbnN0IHUgPSBfX2ltcG9ydFN0YXIocmVxdWlyZShcIi4vdXRpbFwiKSk7XG5sZXQgeyBwb3NzIH0gPSBuZWZzXzEuZGI7XG5leHBvcnRzLmNhcHR1cmUgPSB1LnNlcWFibGUoX2NhcHR1cmUpO1xuZXhwb3J0cy5tb3ZlID0gdS5zZXFhYmxlKF9tb3ZlKTtcbmV4cG9ydHMuZHJvcCA9IHUuc2VxYWJsZShfZHJvcCk7XG5leHBvcnRzLnBpY2t1cCA9IHUuc2VxYWJsZShfcGlja3VwKTtcbmV4cG9ydHMucHJvbW90ZSA9IHUuc2VxYWJsZShfcHJvbW90ZSk7XG5leHBvcnRzLmNhc3RsZSA9IHUuc2VxYWJsZShfY2FzdGxlKTtcbmZ1bmN0aW9uIGFjdG9ycyhib2FyZCkge1xuICAgIGxldCByZXMgPSBuZXcgTWFwKCk7XG4gICAgZm9yIChsZXQgW3BvcywgcGllY2VdIG9mIGJvYXJkKSB7XG4gICAgICAgIGlmIChwaWVjZS5yb2xlID09PSAncCcpIHtcbiAgICAgICAgICAgIGZvciAobGV0IHByb21vdGlvbiBvZiBuZWZzXzEubnQucHJvbW90YWJsZXMpIHtcbiAgICAgICAgICAgICAgICByZXMuc2V0KHBvcywge1xuICAgICAgICAgICAgICAgICAgICBwb3MsXG4gICAgICAgICAgICAgICAgICAgIHBpZWNlLFxuICAgICAgICAgICAgICAgICAgICBib2FyZCxcbiAgICAgICAgICAgICAgICAgICAgcHJvbW90aW9uXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXMuc2V0KHBvcywge1xuICAgICAgICAgICAgICAgIHBvcyxcbiAgICAgICAgICAgICAgICBwaWVjZSxcbiAgICAgICAgICAgICAgICBib2FyZFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlcztcbn1cbmV4cG9ydHMuYWN0b3JzID0gYWN0b3JzO1xuZnVuY3Rpb24gZmlyc3RQb3NGb3JQaWVjZU9uUm91dGUoYm9hcmQsIHBpZWNlLCBwb3MsIHRyaXApIHtcbiAgICByZXR1cm4gWy4uLmJvYXJkLmVudHJpZXMoKV1cbiAgICAgICAgLmZpbHRlcigoW3BvcywgX3BpZWNlXSkgPT4gcGllY2UgPT09IF9waWVjZSAmJiB0cmlwLmluY2x1ZGVzKHBvc1swXSkpXG4gICAgICAgIC5tYXAoKFtrXSkgPT4gaylbMF07XG59XG5leHBvcnRzLmZpcnN0UG9zRm9yUGllY2VPblJvdXRlID0gZmlyc3RQb3NGb3JQaWVjZU9uUm91dGU7XG5mdW5jdGlvbiBwb3NPZihib2FyZCwgcGllY2UsIGZpbGUpIHtcbiAgICByZXR1cm4gWy4uLmJvYXJkLmVudHJpZXMoKV1cbiAgICAgICAgLmZpbHRlcigoW3BvcywgX3BpZWNlXSkgPT4gKHBvc1swXSA9PT0gZmlsZSB8fCBwb3NbMF0pICYmIHBpZWNlID09PSBfcGllY2UpXG4gICAgICAgIC5tYXAoKFtrXSkgPT4gaylbMF07XG59XG5leHBvcnRzLnBvc09mID0gcG9zT2Y7XG5mdW5jdGlvbiBmZW4oYm9hcmQpIHtcbiAgICBsZXQgcmVzID0gW107XG4gICAgZm9yIChsZXQgcmFuayBvZiBuZWZzXzEubnQuZGlyZWN0aW9ucy5zbGljZSgwKS5yZXZlcnNlKCkpIHtcbiAgICAgICAgbGV0IHJhbmtTID0gJyc7XG4gICAgICAgIGxldCBzcGFjZSA9IDA7XG4gICAgICAgIGZvciAobGV0IGZpbGUgb2YgbmVmc18xLm50LmRpcmVjdGlvbnMpIHtcbiAgICAgICAgICAgIGxldCBwaWVjZSA9IGJvYXJkLmdldChwb3NzLnBnZXQoZmlsZSwgcmFuaykpO1xuICAgICAgICAgICAgaWYgKHBpZWNlKSB7XG4gICAgICAgICAgICAgICAgaWYgKHNwYWNlICE9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHJhbmtTICs9IHNwYWNlO1xuICAgICAgICAgICAgICAgICAgICBzcGFjZSA9IDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJhbmtTICs9IG5lZnNfMS5waS5mZW4ocGllY2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgc3BhY2UrKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoc3BhY2UgIT09IDApIHtcbiAgICAgICAgICAgIHJhbmtTICs9IHNwYWNlO1xuICAgICAgICB9XG4gICAgICAgIHJlcy5wdXNoKHJhbmtTKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlcy5qb2luKCcvJyk7XG59XG5leHBvcnRzLmZlbiA9IGZlbjtcbmZ1bmN0aW9uIF9jYXN0bGUoYm9hcmQsIG9yaWdLaW5nLCBkZXN0S2luZywgb3JpZ1Jvb2ssIGRlc3RSb29rKSB7XG4gICAgbGV0IGtpbmcgPSBib2FyZC5nZXQob3JpZ0tpbmcpLCByb29rID0gYm9hcmQuZ2V0KG9yaWdSb29rKTtcbiAgICBpZiAoa2luZyAmJiByb29rKSB7XG4gICAgICAgIGxldCBiMiA9IG5ldyBNYXAoWy4uLmJvYXJkXSk7XG4gICAgICAgIGIyLmRlbGV0ZShvcmlnS2luZyk7XG4gICAgICAgIGIyLmRlbGV0ZShvcmlnUm9vayk7XG4gICAgICAgIGIyLnNldChkZXN0S2luZywga2luZyk7XG4gICAgICAgIGIyLnNldChkZXN0Um9vaywgcm9vayk7XG4gICAgICAgIHJldHVybiBiMjtcbiAgICB9XG59XG5mdW5jdGlvbiBfY2FwdHVyZShib2FyZCwgcG9zLCB0bykge1xuICAgIGxldCBwID0gYm9hcmQuZ2V0KHBvcyk7XG4gICAgaWYgKHApIHtcbiAgICAgICAgbGV0IGIyID0gbmV3IE1hcChbLi4uYm9hcmRdKTtcbiAgICAgICAgYjIuZGVsZXRlKHBvcyk7XG4gICAgICAgIGIyLnNldCh0bywgcCk7XG4gICAgICAgIHJldHVybiBiMjtcbiAgICB9XG59XG5mdW5jdGlvbiBfcGlja3VwKGJvYXJkLCBwb3MpIHtcbiAgICBsZXQgcCA9IGJvYXJkLmdldChwb3MpO1xuICAgIGlmIChwKSB7XG4gICAgICAgIGxldCBiMiA9IG5ldyBNYXAoWy4uLmJvYXJkXSk7XG4gICAgICAgIGIyLmRlbGV0ZShwb3MpO1xuICAgICAgICByZXR1cm4gYjI7XG4gICAgfVxufVxuZnVuY3Rpb24gX2Ryb3AoYm9hcmQsIHBvcywgcGllY2UpIHtcbiAgICBsZXQgYjIgPSBuZXcgTWFwKFsuLi5ib2FyZF0pO1xuICAgIGIyLnNldChwb3MsIHBpZWNlKTtcbiAgICByZXR1cm4gYjI7XG59XG5mdW5jdGlvbiBfbW92ZShib2FyZCwgcG9zLCB0bykge1xuICAgIGxldCBwID0gYm9hcmQuZ2V0KHBvcyk7XG4gICAgaWYgKHApIHtcbiAgICAgICAgbGV0IGIyID0gbmV3IE1hcChbLi4uYm9hcmRdKTtcbiAgICAgICAgYjIuZGVsZXRlKHBvcyk7XG4gICAgICAgIGIyLnNldCh0bywgcCk7XG4gICAgICAgIHJldHVybiBiMjtcbiAgICB9XG59XG5mdW5jdGlvbiBfcHJvbW90ZShib2FyZCwgcG9zLCB0bykge1xuICAgIGxldCBwID0gYm9hcmQuZ2V0KHBvcyk7XG4gICAgaWYgKHApIHtcbiAgICAgICAgbGV0IHAyID0ge1xuICAgICAgICAgICAgcm9sZTogdG8sXG4gICAgICAgICAgICBjb2xvcjogcC5jb2xvclxuICAgICAgICB9O1xuICAgICAgICBsZXQgYjIgPSBuZXcgTWFwKFsuLi5ib2FyZF0pO1xuICAgICAgICBiMi5kZWxldGUocG9zKTtcbiAgICAgICAgYjIuc2V0KHBvcywgcDIpO1xuICAgICAgICByZXR1cm4gYjI7XG4gICAgfVxufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Ym9hcmQuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLnJyb3V0ZTIgPSBleHBvcnRzLnJyb3V0ZTEgPSBleHBvcnRzLnJyb3V0ZTAgPSBleHBvcnRzLmlzUm91dGUwID0gZXhwb3J0cy5pc1JvdXRlMSA9IGV4cG9ydHMuZGRpcjIgPSBleHBvcnRzLmRkaXIxID0gZXhwb3J0cy5kZGlyMCA9IHZvaWQgMDtcbmNvbnN0IG5lZnNfMSA9IHJlcXVpcmUoXCJuZWZzXCIpO1xubGV0IHsgcG9zcyB9ID0gbmVmc18xLmRiO1xuZnVuY3Rpb24gZGRpcjAoX2QwLCBkKSB7XG4gICAgbGV0IF9yZXMgPSAoX2QwICsgZCk7XG4gICAgaWYgKG5lZnNfMS5wLmlzRGlyZWN0aW9uKF9yZXMpKSB7XG4gICAgICAgIHJldHVybiBfcmVzO1xuICAgIH1cbn1cbmV4cG9ydHMuZGRpcjAgPSBkZGlyMDtcbmZ1bmN0aW9uIGRkaXIxKF9kMSwgcCkge1xuICAgIHJldHVybiBwb3NzLm1nZXQoZGRpcjAoX2QxWzBdLCBwWzBdKSwgZGRpcjAoX2QxWzFdLCBwWzFdKSk7XG59XG5leHBvcnRzLmRkaXIxID0gZGRpcjE7XG5mdW5jdGlvbiBkZGlyMihfZDIsIHApIHtcbiAgICBsZXQgcmVzID0gbmV3IFNldCgpO1xuICAgIF9kMi5mb3JFYWNoKF8gPT4ge1xuICAgICAgICBsZXQgX3JlcyA9IGRkaXIxKF8sIHApO1xuICAgICAgICBpZiAoX3Jlcykge1xuICAgICAgICAgICAgcmVzLmFkZChfcmVzKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiByZXM7XG59XG5leHBvcnRzLmRkaXIyID0gZGRpcjI7XG5mdW5jdGlvbiBpc1JvdXRlMShfKSB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkoXykpIHtcbiAgICAgICAgcmV0dXJuIF8uZXZlcnkoaXNSb3V0ZTApO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbn1cbmV4cG9ydHMuaXNSb3V0ZTEgPSBpc1JvdXRlMTtcbmZ1bmN0aW9uIGlzUm91dGUwKF8pIHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShfKSkge1xuICAgICAgICBpZiAoXy5sZW5ndGggPj0gMSAmJiBfLmxlbmd0aCA8PSA4KSB7XG4gICAgICAgICAgICByZXR1cm4gXy5ldmVyeShfID0+IEFycmF5LmlzQXJyYXkoXykgJiYgXy5sZW5ndGggPT09IDIpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbn1cbmV4cG9ydHMuaXNSb3V0ZTAgPSBpc1JvdXRlMDtcbmZ1bmN0aW9uIHJyb3V0ZTAoX2QwLCBkaXIpIHtcbiAgICBsZXQgcmVzID0gW2Rpcl07XG4gICAgbGV0IG5kaXIgPSBkaXI7XG4gICAgaWYgKF9kMCA9PT0gMCkge1xuICAgICAgICByZXR1cm4gcmVzO1xuICAgIH1cbiAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgICBsZXQgX21uZGlyID0gZGRpcjAoX2QwLCBuZGlyKTtcbiAgICAgICAgaWYgKF9tbmRpcikge1xuICAgICAgICAgICAgbmRpciA9IF9tbmRpcjtcbiAgICAgICAgICAgIHJlcy5wdXNoKG5kaXIpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlcztcbn1cbmV4cG9ydHMucnJvdXRlMCA9IHJyb3V0ZTA7XG5mdW5jdGlvbiBycm91dGUxKF9kMSwgcG9zKSB7XG4gICAgbGV0IGYwID0gcnJvdXRlMChfZDFbMF0sIHBvc1swXSksIGYxID0gcnJvdXRlMChfZDFbMV0sIHBvc1sxXSk7XG4gICAgbGV0IHJlcyA9IFtwb3NzLnBnZXQoZjBbMF0sIGYxWzBdKV07XG4gICAgbGV0IG9uZVdyYXBzID0gTWF0aC5taW4oKF9kMVswXSA9PT0gMCA/IGYxLmxlbmd0aCA6IGYwLmxlbmd0aCksIChfZDFbMV0gPT09IDAgPyBmMC5sZW5ndGggOiBmMS5sZW5ndGgpKTtcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8IG9uZVdyYXBzOyBpKyspIHtcbiAgICAgICAgaWYgKHJlcykge1xuICAgICAgICAgICAgcmVzLnB1c2gocG9zcy5wZ2V0KGYwW2YwLmxlbmd0aCA9PT0gMSA/IDAgOiBpXSwgZjFbZjEubGVuZ3RoID09PSAxID8gMCA6IGldKSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlcztcbn1cbmV4cG9ydHMucnJvdXRlMSA9IHJyb3V0ZTE7XG5mdW5jdGlvbiBycm91dGUyKF9kMiwgcG9zKSB7XG4gICAgbGV0IHJlcyA9IFtdO1xuICAgIGZvciAobGV0IF9kMSBvZiBfZDIpIHtcbiAgICAgICAgcmVzLnB1c2gocnJvdXRlMShfZDEsIHBvcykpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzO1xufVxuZXhwb3J0cy5ycm91dGUyID0gcnJvdXRlMjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRpcmVjdGlvbi5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2NyZWF0ZUJpbmRpbmcgPSAodGhpcyAmJiB0aGlzLl9fY3JlYXRlQmluZGluZykgfHwgKE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBrMiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uKCkgeyByZXR1cm4gbVtrXTsgfSB9KTtcbn0pIDogKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcbiAgICBvW2syXSA9IG1ba107XG59KSk7XG52YXIgX19zZXRNb2R1bGVEZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX3NldE1vZHVsZURlZmF1bHQpIHx8IChPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIHYpIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobywgXCJkZWZhdWx0XCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHYgfSk7XG59KSA6IGZ1bmN0aW9uKG8sIHYpIHtcbiAgICBvW1wiZGVmYXVsdFwiXSA9IHY7XG59KTtcbnZhciBfX2ltcG9ydFN0YXIgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0U3RhcikgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIGlmIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpIHJldHVybiBtb2Q7XG4gICAgdmFyIHJlc3VsdCA9IHt9O1xuICAgIGlmIChtb2QgIT0gbnVsbCkgZm9yICh2YXIgayBpbiBtb2QpIGlmIChrICE9PSBcImRlZmF1bHRcIiAmJiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9kLCBrKSkgX19jcmVhdGVCaW5kaW5nKHJlc3VsdCwgbW9kLCBrKTtcbiAgICBfX3NldE1vZHVsZURlZmF1bHQocmVzdWx0LCBtb2QpO1xuICAgIHJldHVybiByZXN1bHQ7XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5vcHBvc2l0ZSA9IGV4cG9ydHMuZGlzcGxhY2UgPSBleHBvcnRzLnByb2plY3Rpb24gPSBleHBvcnRzLnJvdXRlMSA9IGV4cG9ydHMucm91dGUxQ2FwdHVyZXMgPSBleHBvcnRzLnByb2plY3Rpb25zID0gZXhwb3J0cy5wcm9tb3RlcyA9IHZvaWQgMDtcbmNvbnN0IGRpciA9IF9faW1wb3J0U3RhcihyZXF1aXJlKFwiLi9kaXJlY3Rpb25cIikpO1xuY29uc3QgZHQgPSBfX2ltcG9ydFN0YXIocmVxdWlyZShcIi4vZHR5cGVzXCIpKTtcbmxldCByZWd1bGFycyA9IHtcbiAgICAnbic6IGR0LkRLbmlnaHQsXG4gICAgJ3InOiBkdC5EUm9vayxcbiAgICAnYic6IGR0LkRCaXNob3AsXG4gICAgJ3EnOiBkdC5EUXVlZW4sXG4gICAgJ2snOiBkdC5ES2luZ1xufTtcbmxldCBwYXducyA9IHtcbiAgICAndyc6IGR0LkRXUGF3bixcbiAgICAnYic6IGR0LkRCUGF3bixcbn07XG5sZXQgcGF3bkNhcHR1cmVzID0ge1xuICAgICd3JzogZHQuRFdQYXduQyxcbiAgICAnYic6IGR0LkRCUGF3bkNcbn07XG5jb25zdCByZWd1bGFyUHJvamVjdGlvbiA9IHtcbiAgICAncCc6IDEsXG4gICAgJ24nOiAxLFxuICAgICdyJzogOCxcbiAgICAnYic6IDgsXG4gICAgJ3EnOiA4LFxuICAgICdrJzogMVxufTtcbmNvbnN0IHBhd24yTW92ZVJhbmtzID0ge1xuICAgICd3JzogMixcbiAgICAnYic6IDdcbn07XG5jb25zdCBwYXduUHJvbW90ZVJhbmtzID0ge1xuICAgICd3JzogOCxcbiAgICAnYic6IDFcbn07XG5mdW5jdGlvbiBwcm9tb3Rlcyh0bywgcGllY2UpIHtcbiAgICByZXR1cm4gcGllY2Uucm9sZSA9PT0gJ3AnICYmXG4gICAgICAgIHRvWzFdID09PSBwYXduUHJvbW90ZVJhbmtzW3BpZWNlLmNvbG9yXTtcbn1cbmV4cG9ydHMucHJvbW90ZXMgPSBwcm9tb3RlcztcbmV4cG9ydHMucHJvamVjdGlvbnMgPSBbMSwgMiwgMywgNCwgNSwgNiwgN107XG5mdW5jdGlvbiByb3V0ZTFDYXB0dXJlcyhwb3MsIHBpZWNlKSB7XG4gICAgaWYgKHBpZWNlLnJvbGUgPT09ICdwJykge1xuICAgICAgICByZXR1cm4gZGlyLnJyb3V0ZTIocGF3bkNhcHR1cmVzW3BpZWNlLmNvbG9yXSwgcG9zKTtcbiAgICB9XG4gICAgcmV0dXJuIGRpci5ycm91dGUyKHJlZ3VsYXJzW3BpZWNlLnJvbGVdLCBwb3MpO1xufVxuZXhwb3J0cy5yb3V0ZTFDYXB0dXJlcyA9IHJvdXRlMUNhcHR1cmVzO1xuZnVuY3Rpb24gcm91dGUxKHBvcywgcGllY2UpIHtcbiAgICBpZiAocGllY2Uucm9sZSA9PT0gJ3AnKSB7XG4gICAgICAgIHJldHVybiBkaXIucnJvdXRlMihwYXduc1twaWVjZS5jb2xvcl0sIHBvcyk7XG4gICAgfVxuICAgIHJldHVybiBkaXIucnJvdXRlMihyZWd1bGFyc1twaWVjZS5yb2xlXSwgcG9zKTtcbn1cbmV4cG9ydHMucm91dGUxID0gcm91dGUxO1xuZnVuY3Rpb24gcHJvamVjdGlvbihwb3MsIHBpZWNlKSB7XG4gICAgaWYgKHBpZWNlLnJvbGUgPT09ICdwJykge1xuICAgICAgICBpZiAocGF3bjJNb3ZlUmFua3NbcGllY2UuY29sb3JdID09PSBwb3NbMV0pIHtcbiAgICAgICAgICAgIHJldHVybiAyO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZWd1bGFyUHJvamVjdGlvbltwaWVjZS5yb2xlXTtcbn1cbmV4cG9ydHMucHJvamVjdGlvbiA9IHByb2plY3Rpb247XG5mdW5jdGlvbiBkaXNwbGFjZShhLCBiKSB7XG4gICAgcmV0dXJuIChhIC0gYik7XG59XG5leHBvcnRzLmRpc3BsYWNlID0gZGlzcGxhY2U7XG5mdW5jdGlvbiBvcHBvc2l0ZShhKSB7XG4gICAgcmV0dXJuIGEgKiAtMTtcbn1cbmV4cG9ydHMub3Bwb3NpdGUgPSBvcHBvc2l0ZTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRpc3BsYWNlLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fY3JlYXRlQmluZGluZyA9ICh0aGlzICYmIHRoaXMuX19jcmVhdGVCaW5kaW5nKSB8fCAoT2JqZWN0LmNyZWF0ZSA/IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIGsyLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24oKSB7IHJldHVybiBtW2tdOyB9IH0pO1xufSkgOiAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xuICAgIG9bazJdID0gbVtrXTtcbn0pKTtcbnZhciBfX3NldE1vZHVsZURlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9fc2V0TW9kdWxlRGVmYXVsdCkgfHwgKE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgdikge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBcImRlZmF1bHRcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdiB9KTtcbn0pIDogZnVuY3Rpb24obywgdikge1xuICAgIG9bXCJkZWZhdWx0XCJdID0gdjtcbn0pO1xudmFyIF9faW1wb3J0U3RhciA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnRTdGFyKSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgaWYgKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgcmV0dXJuIG1vZDtcbiAgICB2YXIgcmVzdWx0ID0ge307XG4gICAgaWYgKG1vZCAhPSBudWxsKSBmb3IgKHZhciBrIGluIG1vZCkgaWYgKGsgIT09IFwiZGVmYXVsdFwiICYmIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb2QsIGspKSBfX2NyZWF0ZUJpbmRpbmcocmVzdWx0LCBtb2QsIGspO1xuICAgIF9fc2V0TW9kdWxlRGVmYXVsdChyZXN1bHQsIG1vZCk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmQycyA9IGV4cG9ydHMuREJQYXduQyA9IGV4cG9ydHMuRFdQYXduQyA9IGV4cG9ydHMuREJQYXduID0gZXhwb3J0cy5EV1Bhd24gPSBleHBvcnRzLkRCUGF3bjIgPSBleHBvcnRzLkRXUGF3bjIgPSBleHBvcnRzLkRLaW5nID0gZXhwb3J0cy5EUXVlZW4gPSBleHBvcnRzLkRCaXNob3AgPSBleHBvcnRzLkRSb29rID0gZXhwb3J0cy5ES25pZ2h0ID0gZXhwb3J0cy5kMXMgPSBleHBvcnRzLmQwcyA9IHZvaWQgMDtcbmNvbnN0IHNzcyA9IF9faW1wb3J0U3RhcihyZXF1aXJlKFwiLi9zc3NcIikpO1xuZXhwb3J0cy5kMHMgPSBbLTcsIC02LCAtNSwgLTQsIC0zLCAtMiwgLTEsIDAsIDEsIDIsIDMsIDQsIDUsIDYsIDddO1xuZXhwb3J0cy5kMXMgPSBbXTtcbmZvciAobGV0IGQwMCBvZiBleHBvcnRzLmQwcykge1xuICAgIGZvciAobGV0IGQwMSBvZiBleHBvcnRzLmQwcykge1xuICAgICAgICBleHBvcnRzLmQxcy5wdXNoKFtkMDAsIGQwMV0pO1xuICAgIH1cbn1cbmV4cG9ydHMuREtuaWdodCA9IG5ldyBTZXQoW1stMSwgMl0sIFstMSwgLTJdLFxuICAgIFsxLCAyXSwgWzEsIC0yXSxcbiAgICBbMiwgMV0sIFsyLCAtMV0sXG4gICAgWy0yLCAxXSwgWy0yLCAtMV1dKTtcbmV4cG9ydHMuRFJvb2sgPSBuZXcgU2V0KFtbLTEsIDBdLCBbMSwgMF0sIFswLCAtMV0sIFswLCAxXV0pO1xuZXhwb3J0cy5EQmlzaG9wID0gbmV3IFNldChbWy0xLCAxXSwgWy0xLCAtMV0sIFsxLCAxXSwgWzEsIC0xXV0pO1xuZXhwb3J0cy5EUXVlZW4gPSBzc3MudW5pb24oZXhwb3J0cy5EUm9vaywgZXhwb3J0cy5EQmlzaG9wKTtcbmV4cG9ydHMuREtpbmcgPSBleHBvcnRzLkRRdWVlbjtcbmV4cG9ydHMuRFdQYXduMiA9IG5ldyBTZXQoW1swLCAyXV0pO1xuZXhwb3J0cy5EQlBhd24yID0gbmV3IFNldChbWzAsIC0yXV0pO1xuZXhwb3J0cy5EV1Bhd24gPSBuZXcgU2V0KFtbMCwgMV1dKTtcbmV4cG9ydHMuREJQYXduID0gbmV3IFNldChbWzAsIC0xXV0pO1xuZXhwb3J0cy5EV1Bhd25DID0gbmV3IFNldChbWzEsIDFdLCBbLTEsIDFdXSk7XG5leHBvcnRzLkRCUGF3bkMgPSBuZXcgU2V0KFtbMSwgLTFdLCBbLTEsIC0xXV0pO1xuZXhwb3J0cy5kMnMgPSBbXG4gICAgZXhwb3J0cy5ES25pZ2h0LFxuICAgIGV4cG9ydHMuRFJvb2ssXG4gICAgZXhwb3J0cy5EQmlzaG9wLFxuICAgIGV4cG9ydHMuRFF1ZWVuLFxuICAgIGV4cG9ydHMuREtpbmcsXG4gICAgZXhwb3J0cy5EV1Bhd24yLFxuICAgIGV4cG9ydHMuREJQYXduMixcbiAgICBleHBvcnRzLkRXUGF3bixcbiAgICBleHBvcnRzLkRCUGF3bixcbiAgICBleHBvcnRzLkRXUGF3bkMsXG4gICAgZXhwb3J0cy5EQlBhd25DXG5dO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZHR5cGVzLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fY3JlYXRlQmluZGluZyA9ICh0aGlzICYmIHRoaXMuX19jcmVhdGVCaW5kaW5nKSB8fCAoT2JqZWN0LmNyZWF0ZSA/IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIGsyLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24oKSB7IHJldHVybiBtW2tdOyB9IH0pO1xufSkgOiAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xuICAgIG9bazJdID0gbVtrXTtcbn0pKTtcbnZhciBfX3NldE1vZHVsZURlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9fc2V0TW9kdWxlRGVmYXVsdCkgfHwgKE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgdikge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBcImRlZmF1bHRcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdiB9KTtcbn0pIDogZnVuY3Rpb24obywgdikge1xuICAgIG9bXCJkZWZhdWx0XCJdID0gdjtcbn0pO1xudmFyIF9faW1wb3J0U3RhciA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnRTdGFyKSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgaWYgKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgcmV0dXJuIG1vZDtcbiAgICB2YXIgcmVzdWx0ID0ge307XG4gICAgaWYgKG1vZCAhPSBudWxsKSBmb3IgKHZhciBrIGluIG1vZCkgaWYgKGsgIT09IFwiZGVmYXVsdFwiICYmIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb2QsIGspKSBfX2NyZWF0ZUJpbmRpbmcocmVzdWx0LCBtb2QsIGspO1xuICAgIF9fc2V0TW9kdWxlRGVmYXVsdChyZXN1bHQsIG1vZCk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmR0ID0gZXhwb3J0cy5tID0gZXhwb3J0cy5hID0gZXhwb3J0cy5kaXNwID0gZXhwb3J0cy5kaXIgPSBleHBvcnRzLmIgPSBleHBvcnRzLnRzID0gdm9pZCAwO1xuZXhwb3J0cy50cyA9IF9faW1wb3J0U3RhcihyZXF1aXJlKFwiLi90eXBlc1wiKSk7XG5leHBvcnRzLmIgPSBfX2ltcG9ydFN0YXIocmVxdWlyZShcIi4vYm9hcmRcIikpO1xuZXhwb3J0cy5kaXIgPSBfX2ltcG9ydFN0YXIocmVxdWlyZShcIi4vZGlyZWN0aW9uXCIpKTtcbmV4cG9ydHMuZGlzcCA9IF9faW1wb3J0U3RhcihyZXF1aXJlKFwiLi9kaXNwbGFjZVwiKSk7XG5leHBvcnRzLmEgPSBfX2ltcG9ydFN0YXIocmVxdWlyZShcIi4vYWN0b3JcIikpO1xuZXhwb3J0cy5tID0gX19pbXBvcnRTdGFyKHJlcXVpcmUoXCIuL21vdmVcIikpO1xuZXhwb3J0cy5kdCA9IF9faW1wb3J0U3RhcihyZXF1aXJlKFwiLi9kdHlwZXNcIikpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLnN0ciA9IGV4cG9ydHMuc2FuID0gZXhwb3J0cy51Y2kgPSBleHBvcnRzLnNpdHVhdGlvbkFmdGVyID0gZXhwb3J0cy5tb3ZlID0gdm9pZCAwO1xuY29uc3QgbmVmc18xID0gcmVxdWlyZShcIm5lZnNcIik7XG5jb25zdCBhY3Rvcl8xID0gcmVxdWlyZShcIi4vYWN0b3JcIik7XG5sZXQgeyBwaWVjZXMgfSA9IG5lZnNfMS5kYjtcbmZ1bmN0aW9uIG1vdmUoYmVmb3JlLCBzYW5NZXRhKSB7XG4gICAgaWYgKG5lZnNfMS5zaWRlLmlzQ2FzdGxlcyhzYW5NZXRhKSkge1xuICAgICAgICByZXR1cm4gYWN0b3JfMS5jYXN0bGVzKGJlZm9yZS5ib2FyZCwgYmVmb3JlLnR1cm4sIHNhbk1ldGEpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuIF9tb3ZlKGJlZm9yZSwgc2FuTWV0YSk7XG4gICAgfVxufVxuZXhwb3J0cy5tb3ZlID0gbW92ZTtcbmZ1bmN0aW9uIF9tb3ZlKGJlZm9yZSwgc2FuTWV0YSkge1xuICAgIGxldCBfYWN0b3JzID0gYWN0b3JfMS5hY3RvcnMoYmVmb3JlLmJvYXJkLCBwaWVjZXMucGdldChiZWZvcmUudHVybiwgc2FuTWV0YS5yb2xlKSwgW3Nhbk1ldGEuZmlsZSwgc2FuTWV0YS5yYW5rXSwgc2FuTWV0YS5wcm9tb3Rpb24pO1xuICAgIHJldHVybiBfYWN0b3JzLmZsYXRNYXAoYWN0b3IgPT4gYWN0b3JfMS5tb3ZlcyhhY3RvcilcbiAgICAgICAgLmZpbHRlcihfID0+IF8uZGVzdCA9PT0gc2FuTWV0YS50bykpWzBdO1xufVxuZnVuY3Rpb24gc2l0dWF0aW9uQWZ0ZXIobW92ZSkge1xuICAgIHJldHVybiB7XG4gICAgICAgIGJvYXJkOiBtb3ZlLmFmdGVyLFxuICAgICAgICB0dXJuOiBuZWZzXzEuci5vdGhlckNvbG9yKG1vdmUucGllY2UuY29sb3IpXG4gICAgfTtcbn1cbmV4cG9ydHMuc2l0dWF0aW9uQWZ0ZXIgPSBzaXR1YXRpb25BZnRlcjtcbmZ1bmN0aW9uIHVjaShtb3ZlKSB7XG4gICAgcmV0dXJuIG5lZnNfMS5wLmtleShtb3ZlLm9yaWcpICsgbmVmc18xLnAua2V5KG1vdmUuZGVzdCk7XG59XG5leHBvcnRzLnVjaSA9IHVjaTtcbmZ1bmN0aW9uIHNhbihtb3ZlKSB7XG4gICAgaWYgKG1vdmUuY2FzdGxlID09PSBuZWZzXzEuc2lkZS5TaG9ydENhc3RsZSkge1xuICAgICAgICByZXR1cm4gXCJPLU9cIjtcbiAgICB9XG4gICAgZWxzZSBpZiAobW92ZS5jYXN0bGUgPT09IG5lZnNfMS5zaWRlLkxvbmdDYXN0bGUpIHtcbiAgICAgICAgcmV0dXJuIFwiTy1PLU9cIjtcbiAgICB9XG4gICAgbGV0IHBpZWNlUyA9ICcnLCBmaWxlUyA9ICcnLCByYW5rUyA9ICcnLCBjYXB0dXJlUyA9ICcnLCB0b1MgPSBuZWZzXzEucC5rZXkobW92ZS5kZXN0KSwgcHJvbW90aW9uUyA9ICcnLCBjaGVja1MgPSAnJywgbWF0ZVMgPSAnJztcbiAgICBpZiAobW92ZS5waWVjZS5yb2xlICE9PSAncCcpIHtcbiAgICAgICAgcGllY2VTID0gbmVmc18xLnBpLmZlbihtb3ZlLnBpZWNlKS50b1VwcGVyQ2FzZSgpO1xuICAgIH1cbiAgICByZXR1cm4gW3BpZWNlUywgZmlsZVMsIHJhbmtTLCBjYXB0dXJlUywgdG9TLCBwcm9tb3Rpb25TLCBjaGVja1MsIG1hdGVTXS5qb2luKCcnKTtcbn1cbmV4cG9ydHMuc2FuID0gc2FuO1xuZnVuY3Rpb24gc3RyKG1vdmUpIHtcbiAgICByZXR1cm4gbmVmc18xLnAua2V5KG1vdmUub3JpZykgKyBuZWZzXzEucC5rZXkobW92ZS5kZXN0KTtcbn1cbmV4cG9ydHMuc3RyID0gc3RyO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bW92ZS5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMudW5pb24gPSB2b2lkIDA7XG5mdW5jdGlvbiB1bmlvbihzZXRBLCBzZXRCKSB7XG4gICAgbGV0IF91bmlvbiA9IG5ldyBTZXQoc2V0QSk7XG4gICAgZm9yIChsZXQgZWxlbSBvZiBzZXRCKSB7XG4gICAgICAgIF91bmlvbi5hZGQoZWxlbSk7XG4gICAgfVxuICAgIHJldHVybiBfdW5pb247XG59XG5leHBvcnRzLnVuaW9uID0gdW5pb247XG4vLyMgc291cmNlTWFwcGluZ1VSTD1zc3MuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD10eXBlcy5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuc2VxYWJsZSA9IHZvaWQgMDtcbmNvbnN0IHNlcWFibGUgPSAoY2IpID0+ICh4LCAuLi5hcmdzKSA9PiB0eXBlb2YgeCA9PT0gXCJ1bmRlZmluZWRcIiA/IHVuZGVmaW5lZCA6IGNiKHgsIC4uLmFyZ3MpO1xuZXhwb3J0cy5zZXFhYmxlID0gc2VxYWJsZTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXV0aWwuanMubWFwIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0aWYoX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSkge1xuXHRcdHJldHVybiBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiaW1wb3J0ICcuLi9jc3MvZGV2YmV0YS5zY3NzJztcblxuZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gJy4vbWFpbic7XG4iXSwic291cmNlUm9vdCI6IiJ9