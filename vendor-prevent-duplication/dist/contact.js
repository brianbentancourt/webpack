/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"contact": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	__webpack_require__.p = "./dist/";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./vendor-prevent-duplication/src/js/contact.js","vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./vendor-prevent-duplication/src/css/estilos.css":
/*!********************************************************!*\
  !*** ./vendor-prevent-duplication/src/css/estilos.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\n\n//# sourceURL=webpack:///./vendor-prevent-duplication/src/css/estilos.css?");

/***/ }),

/***/ "./vendor-prevent-duplication/src/img/dev.png":
/*!****************************************************!*\
  !*** ./vendor-prevent-duplication/src/img/dev.png ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"data:image/png;base64,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\"\n\n//# sourceURL=webpack:///./vendor-prevent-duplication/src/img/dev.png?");

/***/ }),

/***/ "./vendor-prevent-duplication/src/js/components/teacher.js":
/*!*****************************************************************!*\
  !*** ./vendor-prevent-duplication/src/js/components/teacher.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\nfunction Teacher(props) {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", {\n    className: \"Teacher\"\n  }, props.name, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", {\n    key: props.twitter,\n    href: \"https://twitter.com/\".concat(props.twitter)\n  }, \"@\", props.twitter));\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Teacher);\n\n//# sourceURL=webpack:///./vendor-prevent-duplication/src/js/components/teacher.js?");

/***/ }),

/***/ "./vendor-prevent-duplication/src/js/components/teachers.js":
/*!******************************************************************!*\
  !*** ./vendor-prevent-duplication/src/js/components/teachers.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ \"./node_modules/@babel/runtime/helpers/extends.js\");\n/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/getPrototypeOf.js\");\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ \"./node_modules/@babel/runtime/helpers/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _teacher_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./teacher.js */ \"./vendor-prevent-duplication/src/js/components/teacher.js\");\n/* harmony import */ var _css_estilos_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../css/estilos.css */ \"./vendor-prevent-duplication/src/css/estilos.css\");\n/* harmony import */ var _css_estilos_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_css_estilos_css__WEBPACK_IMPORTED_MODULE_8__);\n\n\n\n\n\n\n\n\n\n\nvar Teachers =\n/*#__PURE__*/\nfunction (_Component) {\n  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(Teachers, _Component);\n\n  function Teachers() {\n    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, Teachers);\n\n    return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(Teachers).apply(this, arguments));\n  }\n\n  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(Teachers, [{\n    key: \"render\",\n    value: function render() {\n      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(\"ul\", {\n        className: \"Teachers\"\n      }, this.props.data.teachers.map(function (teacherData) {\n        return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_teacher_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({\n          key: teacherData.twitter\n        }, teacherData));\n      })));\n    }\n  }]);\n\n  return Teachers;\n}(react__WEBPACK_IMPORTED_MODULE_6__[\"Component\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Teachers);\n\n//# sourceURL=webpack:///./vendor-prevent-duplication/src/js/components/teachers.js?");

/***/ }),

/***/ "./vendor-prevent-duplication/src/js/contact.js":
/*!******************************************************!*\
  !*** ./vendor-prevent-duplication/src/js/contact.js ***!
  \******************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_estilos_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/estilos.css */ \"./vendor-prevent-duplication/src/css/estilos.css\");\n/* harmony import */ var _css_estilos_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_estilos_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _message_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./message.js */ \"./vendor-prevent-duplication/src/js/message.js\");\n/* harmony import */ var _img_dev_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../img/dev.png */ \"./vendor-prevent-duplication/src/img/dev.png\");\n/* harmony import */ var _img_dev_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_img_dev_png__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _teachers_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../teachers.json */ \"./vendor-prevent-duplication/teachers.json\");\nvar _teachers_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../teachers.json */ \"./vendor-prevent-duplication/teachers.json\", 1);\n/* harmony import */ var _renderToDom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./renderToDom */ \"./vendor-prevent-duplication/src/js/renderToDom.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-dom */ \"./node_modules/react-dom/index.js\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _components_teachers_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/teachers.js */ \"./vendor-prevent-duplication/src/js/components/teachers.js\");\n\n\n\n\n\n\n\n\nObject(react_dom__WEBPACK_IMPORTED_MODULE_6__[\"render\"])(react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_teachers_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n  data: _teachers_json__WEBPACK_IMPORTED_MODULE_3__\n}), document.getElementById('container'));\n\n//# sourceURL=webpack:///./vendor-prevent-duplication/src/js/contact.js?");

/***/ }),

/***/ "./vendor-prevent-duplication/src/js/message.js":
/*!******************************************************!*\
  !*** ./vendor-prevent-duplication/src/js/message.js ***!
  \******************************************************/
/*! exports provided: firstMessage, delayedMessage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"firstMessage\", function() { return firstMessage; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"delayedMessage\", function() { return delayedMessage; });\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/asyncToGenerator.js\");\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _renderToDom_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./renderToDom.js */ \"./vendor-prevent-duplication/src/js/renderToDom.js\");\n\n\n\nvar waitTime = new Promise(function (ok, error) {\n  setTimeout(function () {\n    ok('pasaron 2 segundos');\n  }, 2000);\n});\nvar firstMessage = 'hola mundo desde modulo';\nvar delayedMessage =\n/*#__PURE__*/\nfunction () {\n  var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(\n  /*#__PURE__*/\n  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {\n    var message, element;\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            _context.next = 2;\n            return waitTime;\n\n          case 2:\n            message = _context.sent;\n            element = document.createElement('p');\n            element.textContent = message;\n            Object(_renderToDom_js__WEBPACK_IMPORTED_MODULE_2__[\"renderToDom\"])(element);\n\n          case 6:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee, this);\n  }));\n\n  return function delayedMessage() {\n    return _ref.apply(this, arguments);\n  };\n}();\n\n//# sourceURL=webpack:///./vendor-prevent-duplication/src/js/message.js?");

/***/ }),

/***/ "./vendor-prevent-duplication/src/js/renderToDom.js":
/*!**********************************************************!*\
  !*** ./vendor-prevent-duplication/src/js/renderToDom.js ***!
  \**********************************************************/
/*! exports provided: renderToDom */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderToDom\", function() { return renderToDom; });\nvar renderToDom = function renderToDom(el) {\n  document.body.append(el);\n};\n\n//# sourceURL=webpack:///./vendor-prevent-duplication/src/js/renderToDom.js?");

/***/ }),

/***/ "./vendor-prevent-duplication/teachers.json":
/*!**************************************************!*\
  !*** ./vendor-prevent-duplication/teachers.json ***!
  \**************************************************/
/*! exports provided: teachers, default */
/***/ (function(module) {

eval("module.exports = {\"teachers\":[{\"name\":\"Freddy Vega\",\"twitter\":\"freddier\"},{\"name\":\"Sacha Lifszyc\",\"twitter\":\"sachalifs\"},{\"name\":\"Julian Duque\",\"twitter\":\"julian_duque\"},{\"name\":\"Leonidas Esteban\",\"twitter\":\"leonidasEsteban\"}]};\n\n//# sourceURL=webpack:///./vendor-prevent-duplication/teachers.json?");

/***/ })

/******/ });