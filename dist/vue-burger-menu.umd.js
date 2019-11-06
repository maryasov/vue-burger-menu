(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["vue-burger-menu"] = factory();
	else
		root["vue-burger-menu"] = factory();
})((typeof self !== 'undefined' ? self : this), function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "fb15");
/******/ })
/************************************************************************/
/******/ ({

/***/ "1eb2":
/***/ (function(module, exports, __webpack_require__) {

// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var i
  if ((i = window.document.currentScript) && (i = i.src.match(/(.+\/)[^/]+\.js$/))) {
    __webpack_require__.p = i[1] // eslint-disable-line
  }
}


/***/ }),

/***/ "2350":
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ "499e":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/listToStyles.js
/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}

// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/addStylesClient.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return addStylesClient; });
/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/



var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}
var options = null
var ssrIdKey = 'data-vue-ssr-id'

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

function addStylesClient (parentId, list, _isProduction, _options) {
  isProduction = _isProduction

  options = _options || {}

  var styles = listToStyles(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = listToStyles(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[' + ssrIdKey + '~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }
  if (options.ssrId) {
    styleElement.setAttribute(ssrIdKey, obj.id)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),

/***/ "5e6f":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("6d18");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("55c52291", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "6d18":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("2350")(false);
// imports


// module
exports.push([module.i, "\nhtml{height:100%\n}\n.bm-burger-button{cursor:pointer;height:30px;left:36px;position:absolute;top:36px;width:36px\n}\n.bm-burger-button.hidden{display:none\n}\n.bm-burger-bars{background-color:#373a47\n}\n.line-style{height:20%;left:0;position:absolute;right:0\n}\n.cross-style{cursor:pointer;position:absolute;right:2px;top:12px\n}\n.bm-cross{background:#bdc3c7\n}\n.bm-cross-button{height:24px;width:24px\n}\n.bm-cross-button.hidden{display:none\n}\n.bm-menu{background-color:#3f3f41;height:100%;left:0;overflow-x:hidden;padding-top:60px;position:fixed;top:0;transition:.5s;width:0;z-index:1000\n}\n.bm-overlay{background:rgba(0,0,0,.3)\n}\n.bm-item-list{color:#b8b7ad;font-size:20px;margin-left:10%\n}\n.bm-item-list>*{display:flex;padding:.7em;text-decoration:none\n}\n.bm-item-list>*>span{color:#fff;font-weight:700;margin-left:10px\n}", ""]);

// exports


/***/ }),

/***/ "efa6":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Menu_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("5e6f");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Menu_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Menu_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Menu_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "fb15":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
var setPublicPath = __webpack_require__("1eb2");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"9cdd6cc0-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Menu/slide.vue?vue&type=template&id=70eb7296&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('Menu',_vm._b({on:{"openMenu":_vm.openMenu,"closeMenu":_vm.closeMenu}},'Menu',this.$attrs,false),[_vm._t("default")],2)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/Menu/slide.vue?vue&type=template&id=70eb7296&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"9cdd6cc0-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Menu.vue?vue&type=template&id=3a0fc078&
var Menuvue_type_template_id_3a0fc078_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('div',{ref:"sideNav",staticClass:"bm-menu"},[_c('nav',{staticClass:"bm-item-list"},[_vm._t("default")],2),_c('span',{staticClass:"bm-cross-button cross-style",class:{ hidden: !_vm.crossIcon },on:{"click":_vm.closeMenu}},_vm._l((2),function(x,index){return _c('span',{key:x,staticClass:"bm-cross",style:({ position: 'absolute', width: '3px', height: '14px',transform: index === 1 ? 'rotate(45deg)' : 'rotate(-45deg)'})})}))]),_c('div',{ref:"bmBurgerButton",staticClass:"bm-burger-button",class:{ hidden: !_vm.burgerIcon },on:{"click":_vm.openMenu}},[_vm._t("icon",_vm._l((3),function(x,index){return _c('span',{key:index,staticClass:"bm-burger-bars line-style",style:({top:20 * (index * 2) + '%'})})}))],2)])}
var Menuvue_type_template_id_3a0fc078_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/Menu.vue?vue&type=template&id=3a0fc078&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Menu.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var Menuvue_type_script_lang_js_ = ({
  name: 'menubar',
  data: function data() {
    return {
      isSideBarOpen: false
    };
  },
  props: {
    isOpen: {
      type: Boolean,
      required: false
    },
    right: {
      type: Boolean,
      required: false
    },
    width: {
      type: [String],
      required: false,
      default: '300'
    },
    disableEsc: {
      type: Boolean,
      required: false
    },
    noOverlay: {
      type: Boolean,
      required: false
    },
    onStateChange: {
      type: Function,
      required: false
    },
    burgerIcon: {
      type: Boolean,
      required: false,
      default: true
    },
    crossIcon: {
      type: Boolean,
      required: false,
      default: true
    },
    disableOutsideClick: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  methods: {
    openMenu: function openMenu() {
      this.$emit('openMenu');
      this.isSideBarOpen = true;

      if (!this.noOverlay) {
        document.body.classList.add('bm-overlay');
      }

      if (this.right) {
        this.$refs.sideNav.style.left = 'auto';
        this.$refs.sideNav.style.right = '0px';
      }

      this.$nextTick(function () {
        this.$refs.sideNav.style.width = this.width ? this.width + 'px' : '300px';
      });
    },
    closeMenu: function closeMenu() {
      this.$emit('closeMenu');
      this.isSideBarOpen = false;
      document.body.classList.remove('bm-overlay');
      this.$refs.sideNav.style.width = '0px';
    },
    closeMenuOnEsc: function closeMenuOnEsc(e) {
      e = e || window.event;

      if (e.key === 'Escape' || e.keyCode === 27) {
        this.closeMenu();
      }
    },
    documentClick: function documentClick(e) {
      var element = this.$refs.bmBurgerButton;
      var target = null;

      if (e && e.target) {
        target = e.target;
      }

      if (element && element !== target && !element.contains(target) && e.target.className !== 'bm-menu' && this.isSideBarOpen && !this.disableOutsideClick) {
        this.closeMenu();
      }
    }
  },
  mounted: function mounted() {
    if (!this.disableEsc) {
      document.addEventListener('keyup', this.closeMenuOnEsc);
    }
  },
  created: function created() {
    document.addEventListener('click', this.documentClick);
  },
  destroyed: function destroyed() {
    document.removeEventListener('keyup', this.closeMenuOnEsc);
    document.removeEventListener('click', this.documentClick);
  },
  watch: {
    isOpen: {
      deep: true,
      immediate: true,
      handler: function handler(newValue, oldValue) {
        var _this = this;

        this.$nextTick(function () {
          if (!oldValue && newValue) {
            _this.openMenu();
          }

          if (oldValue && !newValue) {
            _this.closeMenu();
          }
        });
      }
    },
    right: {
      deep: true,
      immediate: true,
      handler: function handler(oldValue, newValue) {
        var _this2 = this;

        if (oldValue) {
          this.$nextTick(function () {
            _this2.$refs.bmBurgerButton.style.left = 'auto';
            _this2.$refs.bmBurgerButton.style.right = '36px';
            _this2.$refs.sideNav.style.left = 'auto';
            _this2.$refs.sideNav.style.right = '0px';
            document.querySelector('.bm-burger-button').style.left = 'auto';
            document.querySelector('.bm-burger-button').style.right = '36px';
            document.querySelector('.bm-menu').style.left = 'auto';
            document.querySelector('.bm-menu').style.right = '0px';
            document.querySelector('.cross-style').style.right = '250px';
          });
        }

        if (newValue) {
          if (this.$refs.bmBurgerButton.hasAttribute('style')) {
            this.$refs.bmBurgerButton.removeAttribute('style');
            this.$refs.sideNav.style.right = 'auto';
            document.querySelector('.bm-burger-button').removeAttribute('style');
            document.getElementById('sideNav').style.right = 'auto';
            document.querySelector('.cross-style').style.right = '0px';
          }
        }
      }
    }
  }
});
// CONCATENATED MODULE: ./src/components/Menu.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Menuvue_type_script_lang_js_ = (Menuvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/Menu.vue?vue&type=style&index=0&lang=css&
var Menuvue_type_style_index_0_lang_css_ = __webpack_require__("efa6");

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./src/components/Menu.vue






/* normalize component */

var component = normalizeComponent(
  components_Menuvue_type_script_lang_js_,
  Menuvue_type_template_id_3a0fc078_render,
  Menuvue_type_template_id_3a0fc078_staticRenderFns,
  false,
  null,
  null,
  null
  
)

component.options.__file = "Menu.vue"
/* harmony default export */ var Menu = (component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Menu/slide.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//

/* harmony default export */ var slidevue_type_script_lang_js_ = ({
  name: 'slide',
  components: {
    Menu: Menu
  },
  methods: {
    openMenu: function openMenu() {
      this.$emit('openMenu');
    },
    closeMenu: function closeMenu() {
      this.$emit('closeMenu');
    }
  }
});
// CONCATENATED MODULE: ./src/components/Menu/slide.vue?vue&type=script&lang=js&
 /* harmony default export */ var Menu_slidevue_type_script_lang_js_ = (slidevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/Menu/slide.vue





/* normalize component */

var slide_component = normalizeComponent(
  Menu_slidevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

slide_component.options.__file = "slide.vue"
/* harmony default export */ var slide = (slide_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"9cdd6cc0-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Menu/bubble.vue?vue&type=template&id=e3d93326&
var bubblevue_type_template_id_e3d93326_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('Menu',_vm._b({ref:"sideNav",on:{"openMenu":_vm.openMenu,"closeMenu":_vm.closeMenu}},'Menu',this.$attrs,false),[_vm._t("default")],2)],1)}
var bubblevue_type_template_id_e3d93326_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/Menu/bubble.vue?vue&type=template&id=e3d93326&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Menu/bubble.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//

/* harmony default export */ var bubblevue_type_script_lang_js_ = ({
  name: 'bubble',
  components: {
    Menu: Menu
  },
  data: function data() {
    return {
      propsToPass: {
        isOpen: this.$attrs.isOpen,
        right: this.$attrs.right,
        width: this.$attrs.width,
        disableEsc: this.$attrs.disableEsc,
        noOverlay: this.$attrs.noOverlay,
        onStateChange: this.$attrs.onStateChange
      }
    };
  },
  methods: {
    openMenu: function openMenu() {
      //this.$emit("openMenu")
      var set = this.$refs.sideNav.$el.querySelector('.bm-menu'); //console.log(set,"lallan")

      set.style.borderRadius = '150% / 70%';

      if (this.$attrs.right) {
        set.style.borderTopRightRadius = '0px 900px';
        set.style.borderBottomRightRadius = '0px';
      } else {
        set.style.borderTopLeftRadius = '0px 900px';
        set.style.borderBottomLeftRadius = '0px';
      }

      set.style.transitionTimingFunction = 'easy-in';
      this.$emit("openMenu");
      setTimeout(function () {
        set.style.transitionTimingFunction = 'cubic-bezier(.29, 1.01, 1, -0.68)';
        set.style.borderRadius = '0px';
      }, 300);
    },
    closeMenu: function closeMenu() {
      //this.$emit("closeMenu")
      var set = this.$refs.sideNav.$el.querySelector('.bm-menu');
      set.style.transitionTimingFunction = null;
      this.$emit("closeMenu");
    }
  }
});
// CONCATENATED MODULE: ./src/components/Menu/bubble.vue?vue&type=script&lang=js&
 /* harmony default export */ var Menu_bubblevue_type_script_lang_js_ = (bubblevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/Menu/bubble.vue





/* normalize component */

var bubble_component = normalizeComponent(
  Menu_bubblevue_type_script_lang_js_,
  bubblevue_type_template_id_e3d93326_render,
  bubblevue_type_template_id_e3d93326_staticRenderFns,
  false,
  null,
  null,
  null
  
)

bubble_component.options.__file = "bubble.vue"
/* harmony default export */ var bubble = (bubble_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"9cdd6cc0-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Menu/reveal.vue?vue&type=template&id=01427236&
var revealvue_type_template_id_01427236_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('Menu',_vm._b({on:{"openMenu":_vm.push,"closeMenu":_vm.pull}},'Menu',this.$attrs,false),[_vm._t("default")],2)],1)}
var revealvue_type_template_id_01427236_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/Menu/reveal.vue?vue&type=template&id=01427236&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Menu/reveal.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//

/* harmony default export */ var revealvue_type_script_lang_js_ = ({
  name: 'reveal',
  data: function data() {
    return {
      bodyOldStyle: ''
    };
  },
  components: {
    Menu: Menu
  },
  methods: {
    openMenu: function openMenu() {
      this.$emit("openMenu");
    },
    closeMenu: function closeMenu() {
      this.$emit("closeMenu");
    },
    push: function push() {
      this.openMenu();
      var width = this.$attrs.width ? this.$attrs.width + 'px' : '300px';
      this.bodyOldStyle = document.body.getAttribute('style') || '';
      document.body.style.overflowX = 'hidden';

      if (this.$attrs.right) {
        document.querySelector('#page-wrap').style.transform = "translate3d(-".concat(width, ", 0px, 0px )");
      } else {
        document.querySelector('#page-wrap').style.transform = "translate3d(".concat(width, ", 0px, 0px )");
      }

      document.querySelector('#page-wrap').style.position = 'relative';
      document.querySelector('#page-wrap').style.transition = 'all 0.5s ease 0s';
    },
    pull: function pull() {
      this.closeMenu();
      document.querySelector('#page-wrap').style.transition = 'all 0.5s ease 0s';
      document.querySelector('#page-wrap').style.transform = '';
      document.querySelector('#page-wrap').style.position = '';
      document.body.setAttribute('style', this.bodyOldStyle);
    }
  }
});
// CONCATENATED MODULE: ./src/components/Menu/reveal.vue?vue&type=script&lang=js&
 /* harmony default export */ var Menu_revealvue_type_script_lang_js_ = (revealvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/Menu/reveal.vue





/* normalize component */

var reveal_component = normalizeComponent(
  Menu_revealvue_type_script_lang_js_,
  revealvue_type_template_id_01427236_render,
  revealvue_type_template_id_01427236_staticRenderFns,
  false,
  null,
  null,
  null
  
)

reveal_component.options.__file = "reveal.vue"
/* harmony default export */ var reveal = (reveal_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"9cdd6cc0-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Menu/push.vue?vue&type=template&id=1e67cf34&
var pushvue_type_template_id_1e67cf34_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('Menu',_vm._b({on:{"openMenu":_vm.push,"closeMenu":_vm.pull}},'Menu',this.$attrs,false),[_vm._t("default")],2)],1)}
var pushvue_type_template_id_1e67cf34_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/Menu/push.vue?vue&type=template&id=1e67cf34&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Menu/push.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//

/* harmony default export */ var pushvue_type_script_lang_js_ = ({
  name: 'push',
  data: function data() {
    return {
      bodyOldStyle: ''
    };
  },
  components: {
    Menu: Menu
  },
  methods: {
    openMenu: function openMenu() {
      this.$emit("openMenu");
    },
    closeMenu: function closeMenu() {
      this.$emit("closeMenu");
    },
    push: function push() {
      this.openMenu();
      var width = this.$attrs.width ? this.$attrs.width + 'px' : '300px';
      this.bodyOldStyle = document.body.getAttribute('style') || '';
      document.body.style.overflowX = 'hidden';

      if (this.$attrs.right) {
        document.querySelector('#page-wrap').style.transform = "translate3d(-".concat(width, ", 0px, 0px )");
      } else {
        document.querySelector('#page-wrap').style.transform = "translate3d(".concat(width, ", 0px, 0px )");
      }

      document.querySelector('#page-wrap').style.transition = 'all 0.5s ease 0s';
    },
    pull: function pull() {
      this.closeMenu();
      document.querySelector('#page-wrap').style.transition = 'all 0.5s ease 0s';
      document.querySelector('#page-wrap').style.transform = '';
      document.body.setAttribute('style', this.bodyOldStyle);
    }
  }
});
// CONCATENATED MODULE: ./src/components/Menu/push.vue?vue&type=script&lang=js&
 /* harmony default export */ var Menu_pushvue_type_script_lang_js_ = (pushvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/Menu/push.vue





/* normalize component */

var push_component = normalizeComponent(
  Menu_pushvue_type_script_lang_js_,
  pushvue_type_template_id_1e67cf34_render,
  pushvue_type_template_id_1e67cf34_staticRenderFns,
  false,
  null,
  null,
  null
  
)

push_component.options.__file = "push.vue"
/* harmony default export */ var push = (push_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"9cdd6cc0-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Menu/elastic.vue?vue&type=template&id=378b43ec&
var elasticvue_type_template_id_378b43ec_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('Menu',_vm._b({attrs:{"openMenu":"openMenu"},on:{"closeMenu":_vm.closeMenu}},'Menu',_vm.propsToPass,false),[_vm._t("default")],2)],1)}
var elasticvue_type_template_id_378b43ec_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/Menu/elastic.vue?vue&type=template&id=378b43ec&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Menu/elastic.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//

/* harmony default export */ var elasticvue_type_script_lang_js_ = ({
  name: 'elastic',
  components: {
    Menu: Menu
  },
  data: function data() {
    return {
      propsToPass: {
        isOpen: this.$attrs.isOpen,
        right: this.$attrs.right,
        width: this.$attrs.width,
        disableEsc: this.$attrs.disableEsc,
        noOverlay: this.$attrs.noOverlay,
        onStateChange: this.$attrs.onStateChange
      }
    };
  },
  methods: {
    openMenu: function openMenu() {
      this.$emit("openMenu");
    },
    closeMenu: function closeMenu() {
      this.$emit("closeMenu");
    }
  }
});
// CONCATENATED MODULE: ./src/components/Menu/elastic.vue?vue&type=script&lang=js&
 /* harmony default export */ var Menu_elasticvue_type_script_lang_js_ = (elasticvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/Menu/elastic.vue





/* normalize component */

var elastic_component = normalizeComponent(
  Menu_elasticvue_type_script_lang_js_,
  elasticvue_type_template_id_378b43ec_render,
  elasticvue_type_template_id_378b43ec_staticRenderFns,
  false,
  null,
  null,
  null
  
)

elastic_component.options.__file = "elastic.vue"
/* harmony default export */ var elastic = (elastic_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"9cdd6cc0-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Menu/fallDown.vue?vue&type=template&id=1b3f33be&
var fallDownvue_type_template_id_1b3f33be_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('Menu',_vm._b({ref:"sideNav",on:{"openMenu":_vm.openMenu,"closeMenu":_vm.closeMenu}},'Menu',this.$attrs,false),[_vm._t("default")],2)],1)}
var fallDownvue_type_template_id_1b3f33be_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/Menu/fallDown.vue?vue&type=template&id=1b3f33be&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Menu/fallDown.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//

/* harmony default export */ var fallDownvue_type_script_lang_js_ = ({
  name: 'elastic',
  components: {
    Menu: Menu
  },
  data: function data() {
    return {
      bodyOldStyle: '',
      propsToPass: {
        isOpen: this.$attrs.isOpen,
        right: this.$attrs.right,
        width: this.$attrs.width,
        disableEsc: this.$attrs.disableEsc,
        noOverlay: this.$attrs.noOverlay,
        onStateChange: this.$attrs.onStateChange
      }
    };
  },
  methods: {
    openMenu: function openMenu() {
      var _this = this;

      this.$emit("openMenu");
      var width = this.$attrs.width ? this.$attrs.width + 'px' : '300px';
      this.$refs.sideNav.$el.querySelector('.bm-menu').style.overflowY = 'hidden';
      this.bodyOldStyle = document.body.getAttribute('style') || '';
      document.body.style.overflowX = 'hidden';
      this.$refs.sideNav.$el.querySelector('.bm-menu').style.transition = '0.5s';

      if (this.$attrs.right) {
        document.querySelector('#page-wrap').style.transform = "translate3d(-".concat(width, ", 0px, 0px )");
      } else {
        document.querySelector('#page-wrap').style.transform = "translate3d(".concat(width, ", 0px, 0px )");
      }

      document.querySelector('#page-wrap').style.transition = 'all 0.5s ease 0s';
      this.$nextTick(function () {
        _this.$refs.sideNav.$el.querySelector('.bm-menu').style.height = '100%';
      });
    },
    closeMenu: function closeMenu() {
      this.$emit("closeMenu");
      document.querySelector('#page-wrap').style.transition = 'all 0.5s ease 0s';
      document.querySelector('#page-wrap').style.transform = '';
      document.body.setAttribute('style', this.bodyOldStyle);
      this.$refs.sideNav.$el.querySelector('.bm-menu').style.height = '0px';
    }
  },
  mounted: function mounted() {
    this.$refs.sideNav.$el.querySelector('.bm-menu').style.height = '0px';
  }
});
// CONCATENATED MODULE: ./src/components/Menu/fallDown.vue?vue&type=script&lang=js&
 /* harmony default export */ var Menu_fallDownvue_type_script_lang_js_ = (fallDownvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/Menu/fallDown.vue





/* normalize component */

var fallDown_component = normalizeComponent(
  Menu_fallDownvue_type_script_lang_js_,
  fallDownvue_type_template_id_1b3f33be_render,
  fallDownvue_type_template_id_1b3f33be_staticRenderFns,
  false,
  null,
  null,
  null
  
)

fallDown_component.options.__file = "fallDown.vue"
/* harmony default export */ var fallDown = (fallDown_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"9cdd6cc0-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Menu/pushRotate.vue?vue&type=template&id=b055c8f2&
var pushRotatevue_type_template_id_b055c8f2_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('Menu',_vm._b({on:{"openMenu":_vm.push,"closeMenu":_vm.pull}},'Menu',this.$attrs,false),[_vm._t("default")],2)],1)}
var pushRotatevue_type_template_id_b055c8f2_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/Menu/pushRotate.vue?vue&type=template&id=b055c8f2&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Menu/pushRotate.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//

/* harmony default export */ var pushRotatevue_type_script_lang_js_ = ({
  name: 'pushrotate',
  components: {
    Menu: Menu
  },
  data: function data() {
    return {
      bodyOldStyle: '',
      appOldStyle: ''
    };
  },
  methods: {
    openMenu: function openMenu() {
      this.$emit("openMenu");
    },
    closeMenu: function closeMenu() {
      this.$emit("closeMenu");
    },
    push: function push() {
      this.openMenu();
      var width = this.$attrs.width ? this.$attrs.width + 'px' : '300px';
      this.bodyOldStyle = document.body.getAttribute('style') || '';
      document.body.style.overflowX = 'hidden';

      if (this.$attrs.right) {
        document.querySelector('#page-wrap').style.transform = "translate3d(-".concat(width, ", 0px, 0px ) rotateY(15deg)");
        document.querySelector('#page-wrap').style.transformOrigin = '100% 50% 0px';
      } else {
        document.querySelector('#page-wrap').style.transform = "translate3d(".concat(width, ", 0px, 0px ) rotateY(-15deg)");
        document.querySelector('#page-wrap').style.transformOrigin = '0% 50% 0px';
      }

      document.querySelector('#page-wrap').style.transformStyle = 'preserve-3d';
      document.querySelector('#page-wrap').style.transition = 'all 0.5s ease 0s';
      this.appOldStyle = document.querySelector('#app').getAttribute('style') || '';
      document.querySelector('#app').style.perspective = '1500px';
      document.querySelector('#app').style.overflow = 'hidden';
    },
    pull: function pull() {
      this.closeMenu();
      document.querySelector('#page-wrap').style.transition = 'all 0.5s ease 0s';
      document.querySelector('#page-wrap').style.transform = '';
      document.querySelector('#page-wrap').style.transformStyle = '';
      document.querySelector('#page-wrap').style.transformOrigin = '';
      document.querySelector('#app').setAttribute('style', this.appOldStyle);
      document.body.setAttribute('style', this.bodyOldStyle);
    }
  }
});
// CONCATENATED MODULE: ./src/components/Menu/pushRotate.vue?vue&type=script&lang=js&
 /* harmony default export */ var Menu_pushRotatevue_type_script_lang_js_ = (pushRotatevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/Menu/pushRotate.vue





/* normalize component */

var pushRotate_component = normalizeComponent(
  Menu_pushRotatevue_type_script_lang_js_,
  pushRotatevue_type_template_id_b055c8f2_render,
  pushRotatevue_type_template_id_b055c8f2_staticRenderFns,
  false,
  null,
  null,
  null
  
)

pushRotate_component.options.__file = "pushRotate.vue"
/* harmony default export */ var pushRotate = (pushRotate_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"9cdd6cc0-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Menu/stack.vue?vue&type=template&id=9093ae04&
var stackvue_type_template_id_9093ae04_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('Menu',_vm._b({attrs:{"openMenu":"openMenu"},on:{"closeMenu":_vm.closeMenu}},'Menu',_vm.propsToPass,false),[_vm._t("default")],2)],1)}
var stackvue_type_template_id_9093ae04_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/Menu/stack.vue?vue&type=template&id=9093ae04&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Menu/stack.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//

/* harmony default export */ var stackvue_type_script_lang_js_ = ({
  name: 'stack',
  components: {
    Menu: Menu
  },
  data: function data() {
    return {
      propsToPass: {
        isOpen: this.$attrs.isOpen,
        right: this.$attrs.right,
        width: this.$attrs.width,
        disableEsc: this.$attrs.disableEsc,
        noOverlay: this.$attrs.noOverlay,
        onStateChange: this.$attrs.onStateChange
      }
    };
  },
  methods: {
    openMenu: function openMenu() {
      this.$emit("openMenu");
    },
    closeMenu: function closeMenu() {
      this.$emit("closeMenu");
    }
  }
});
// CONCATENATED MODULE: ./src/components/Menu/stack.vue?vue&type=script&lang=js&
 /* harmony default export */ var Menu_stackvue_type_script_lang_js_ = (stackvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/Menu/stack.vue





/* normalize component */

var stack_component = normalizeComponent(
  Menu_stackvue_type_script_lang_js_,
  stackvue_type_template_id_9093ae04_render,
  stackvue_type_template_id_9093ae04_staticRenderFns,
  false,
  null,
  null,
  null
  
)

stack_component.options.__file = "stack.vue"
/* harmony default export */ var stack = (stack_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"9cdd6cc0-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Menu/scaleRotate.vue?vue&type=template&id=5c3b7fd8&
var scaleRotatevue_type_template_id_5c3b7fd8_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('Menu',_vm._b({on:{"openMenu":_vm.push,"closeMenu":_vm.pull}},'Menu',this.$attrs,false),[_vm._t("default")],2)],1)}
var scaleRotatevue_type_template_id_5c3b7fd8_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/Menu/scaleRotate.vue?vue&type=template&id=5c3b7fd8&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Menu/scaleRotate.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//

/* harmony default export */ var scaleRotatevue_type_script_lang_js_ = ({
  name: 'scalerotate',
  components: {
    Menu: Menu
  },
  data: function data() {
    return {
      bodyOldStyle: '',
      appOldStyle: ''
    };
  },
  methods: {
    openMenu: function openMenu() {
      this.$emit("openMenu");
    },
    closeMenu: function closeMenu() {
      this.$emit("closeMenu");
    },
    push: function push() {
      this.openMenu();
      var width = this.$attrs.width ? this.$attrs.width + 'px' : '100px';
      this.bodyOldStyle = document.body.getAttribute('style') || '';
      document.body.style.overflowX = 'hidden';

      if (this.$attrs.right) {
        document.querySelector('#page-wrap').style.transform = "translate3d(-".concat(width, ", 0px, -600px ) rotateY(20deg)");
      } else {
        document.querySelector('#page-wrap').style.transform = "translate3d(".concat(width, ", 0px, -600px ) rotateY(-20deg)");
      }

      document.querySelector('#page-wrap').style.transformStyle = 'preserve-3d';
      document.querySelector('#page-wrap').style.transition = 'all 0.5s ease 0s';
      document.querySelector('#page-wrap').style.overflow = 'hidden';
      this.appOldStyle = document.querySelector('#app').getAttribute('style') || '';
      document.querySelector('#app').style.perspective = '1500px';
      document.querySelector('#app').style.overflow = 'hidden';
      document.querySelector('#app').style.height = '100%';
    },
    pull: function pull() {
      this.closeMenu();
      document.querySelector('#page-wrap').style.transition = 'all 0.5s ease 0s';
      document.querySelector('#page-wrap').style.transform = '';
      document.querySelector('#page-wrap').style.transformStyle = '';
      document.querySelector('#page-wrap').style.transformOrigin = '';
      document.querySelector('#page-wrap').style.overflow = 'auto';
      document.querySelector('#app').setAttribute('style', this.appOldStyle);
      document.body.setAttribute('style', this.bodyOldStyle);
    }
  }
});
// CONCATENATED MODULE: ./src/components/Menu/scaleRotate.vue?vue&type=script&lang=js&
 /* harmony default export */ var Menu_scaleRotatevue_type_script_lang_js_ = (scaleRotatevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/Menu/scaleRotate.vue





/* normalize component */

var scaleRotate_component = normalizeComponent(
  Menu_scaleRotatevue_type_script_lang_js_,
  scaleRotatevue_type_template_id_5c3b7fd8_render,
  scaleRotatevue_type_template_id_5c3b7fd8_staticRenderFns,
  false,
  null,
  null,
  null
  
)

scaleRotate_component.options.__file = "scaleRotate.vue"
/* harmony default export */ var scaleRotate = (scaleRotate_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"9cdd6cc0-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Menu/scaleDown.vue?vue&type=template&id=34b586d9&
var scaleDownvue_type_template_id_34b586d9_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('Menu',_vm._b({on:{"openMenu":_vm.push,"closeMenu":_vm.pull}},'Menu',this.$attrs,false),[_vm._t("default")],2)],1)}
var scaleDownvue_type_template_id_34b586d9_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/Menu/scaleDown.vue?vue&type=template&id=34b586d9&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Menu/scaleDown.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//

/* harmony default export */ var scaleDownvue_type_script_lang_js_ = ({
  name: 'scaledown',
  components: {
    Menu: Menu
  },
  data: function data() {
    return {
      bodyOldStyle: '',
      appOldStyle: ''
    };
  },
  methods: {
    openMenu: function openMenu() {
      this.$emit("openMenu");
    },
    closeMenu: function closeMenu() {
      this.$emit("closeMenu");
    },
    push: function push() {
      this.openMenu();
      var width = this.$attrs.width ? this.$attrs.width + 'px' : '100px';
      this.bodyOldStyle = document.body.getAttribute('style') || '';
      document.body.style.overflowX = 'hidden';

      if (this.$attrs.right) {
        document.querySelector('#page-wrap').style.transform = "translate3d(-".concat(width, ", 0px, -600px ) ");
      } else {
        document.querySelector('#page-wrap').style.transform = "translate3d(".concat(width, ", 0px, -600px ) ");
      }

      document.querySelector('#page-wrap').style.transformStyle = 'preserve-3d';
      document.querySelector('#page-wrap').style.transition = 'all 0.5s ease 0s';
      document.querySelector('#page-wrap').style.overflow = 'hidden';
      this.appOldStyle = document.querySelector('#app').getAttribute('style') || '';
      document.querySelector('#app').style.perspective = '1500px';
      document.querySelector('#app').style.overflow = 'hidden';
      document.querySelector('#app').style.height = '100%';
    },
    pull: function pull() {
      this.closeMenu();
      document.querySelector('#page-wrap').style.transition = 'all 0.5s ease 0s';
      document.querySelector('#page-wrap').style.transform = '';
      document.querySelector('#page-wrap').style.transformStyle = '';
      document.querySelector('#page-wrap').style.transformOrigin = '';
      document.querySelector('#page-wrap').style.overflow = 'auto';
      document.querySelector('#app').setAttribute('style', this.appOldStyle);
      document.body.setAttribute('style', this.bodyOldStyle);
    }
  }
});
// CONCATENATED MODULE: ./src/components/Menu/scaleDown.vue?vue&type=script&lang=js&
 /* harmony default export */ var Menu_scaleDownvue_type_script_lang_js_ = (scaleDownvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/Menu/scaleDown.vue





/* normalize component */

var scaleDown_component = normalizeComponent(
  Menu_scaleDownvue_type_script_lang_js_,
  scaleDownvue_type_template_id_34b586d9_render,
  scaleDownvue_type_template_id_34b586d9_staticRenderFns,
  false,
  null,
  null,
  null
  
)

scaleDown_component.options.__file = "scaleDown.vue"
/* harmony default export */ var scaleDown = (scaleDown_component.exports);
// CONCATENATED MODULE: ./src/components/index.js
// Different CSS animations











/* harmony default export */ var components = ({
  Menu: Menu,
  Slide: slide,
  Bubble: bubble,
  Reveal: reveal,
  Push: push,
  PushRotate: pushRotate,
  ScaleDown: scaleDown,
  ScaleRotate: scaleRotate,
  Stack: stack,
  FallDown: fallDown,
  Elastic: elastic
});
// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (components);



/***/ })

/******/ })["default"];
});
//# sourceMappingURL=vue-burger-menu.umd.js.map