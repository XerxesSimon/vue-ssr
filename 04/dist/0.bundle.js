(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./node_modules/_babel-loader@8.2.2@babel-loader/lib/index.js!./node_modules/_vue-loader@15.9.6@vue-loader/lib/index.js?!./src/components/Foo.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_babel-loader@8.2.2@babel-loader/lib!./node_modules/_vue-loader@15.9.6@vue-loader/lib??vue-loader-options!./src/components/Foo.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"./node_modules/_axios@0.21.1@axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n//\n//\n//\n//\n//\n//\n//\n// import { signup } from '@/api/base'\n// import { test } from '@/api/base'\n // type multipart/form-data\n// function test (url, data = '', type = 'application/json') {\n//   return axios({\n//     url: 'http://127.0.0.1:5000/test',\n//     // url: '/test',\n//     method: 'get',\n//     data: data,\n//     headers: {\n//       'Content-Type': type\n//     }\n//   })\n// }\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  data: function data() {\n    return {\n      data: '1111'\n    };\n  },\n  beforeCreate: function beforeCreate() {\n    var _this = this;\n\n    axios__WEBPACK_IMPORTED_MODULE_0___default()({\n      // url: 'http://192.168.0.102:5000/test',\n      url: 'http://127.0.0.1:5000/test',\n      method: 'get',\n      data: '',\n      headers: {\n        'Content-Type': 'application/json'\n      }\n    }).then(function (res) {\n      _this.data = 'res.data';\n    })[\"catch\"](function (error) {\n      _this.data = '555';\n    });\n    this.data = '8888888';\n  },\n  mounted: function mounted() {// this.init()\n  },\n  methods: {\n    init: function init() {\n      var _this2 = this;\n\n      this.data = '2222'; // axios({\n      //   url: 'http://127.0.0.1:5000/test',\n      //   method: 'get',\n      //   data: '',\n      //   headers: {\n      //     'Content-Type': 'application/json'\n      //   }\n      // }).then((res) => {\n      //   this.data = res.data\n      // }).catch((error) => {\n      //   this.data = '555'\n      // })\n\n      test().then(function (res) {\n        _this2.data = res.data;\n      })[\"catch\"](function (error) {\n        _this2.data = '555';\n      });\n      this.data = '333';\n    }\n  }\n});\n\n//# sourceURL=webpack:///./src/components/Foo.vue?./node_modules/_babel-loader@8.2.2@babel-loader/lib!./node_modules/_vue-loader@15.9.6@vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/_vue-loader@15.9.6@vue-loader/lib/loaders/templateLoader.js?!./node_modules/_vue-loader@15.9.6@vue-loader/lib/index.js?!./src/components/Foo.vue?vue&type=template&id=54024074&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_vue-loader@15.9.6@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_vue-loader@15.9.6@vue-loader/lib??vue-loader-options!./src/components/Foo.vue?vue&type=template&id=54024074& ***!
  \***********************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\"div\", { staticClass: \"books container\" }, [\n    _vm._v(\"\\n  小书\\n  \" + _vm._s(_vm.data) + \"\\n\")\n  ])\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./src/components/Foo.vue?./node_modules/_vue-loader@15.9.6@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_vue-loader@15.9.6@vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./src/components/Foo.vue":
/*!********************************!*\
  !*** ./src/components/Foo.vue ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Foo_vue_vue_type_template_id_54024074___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Foo.vue?vue&type=template&id=54024074& */ \"./src/components/Foo.vue?vue&type=template&id=54024074&\");\n/* harmony import */ var _Foo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Foo.vue?vue&type=script&lang=js& */ \"./src/components/Foo.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_15_9_6_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/_vue-loader@15.9.6@vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/_vue-loader@15.9.6@vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_15_9_6_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _Foo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _Foo_vue_vue_type_template_id_54024074___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _Foo_vue_vue_type_template_id_54024074___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"src/components/Foo.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./src/components/Foo.vue?");

/***/ }),

/***/ "./src/components/Foo.vue?vue&type=script&lang=js&":
/*!*********************************************************!*\
  !*** ./src/components/Foo.vue?vue&type=script&lang=js& ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_babel_loader_8_2_2_babel_loader_lib_index_js_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_Foo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/_babel-loader@8.2.2@babel-loader/lib!../../node_modules/_vue-loader@15.9.6@vue-loader/lib??vue-loader-options!./Foo.vue?vue&type=script&lang=js& */ \"./node_modules/_babel-loader@8.2.2@babel-loader/lib/index.js!./node_modules/_vue-loader@15.9.6@vue-loader/lib/index.js?!./src/components/Foo.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_babel_loader_8_2_2_babel_loader_lib_index_js_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_Foo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./src/components/Foo.vue?");

/***/ }),

/***/ "./src/components/Foo.vue?vue&type=template&id=54024074&":
/*!***************************************************************!*\
  !*** ./src/components/Foo.vue?vue&type=template&id=54024074& ***!
  \***************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_Foo_vue_vue_type_template_id_54024074___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/_vue-loader@15.9.6@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/_vue-loader@15.9.6@vue-loader/lib??vue-loader-options!./Foo.vue?vue&type=template&id=54024074& */ \"./node_modules/_vue-loader@15.9.6@vue-loader/lib/loaders/templateLoader.js?!./node_modules/_vue-loader@15.9.6@vue-loader/lib/index.js?!./src/components/Foo.vue?vue&type=template&id=54024074&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_Foo_vue_vue_type_template_id_54024074___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_Foo_vue_vue_type_template_id_54024074___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./src/components/Foo.vue?");

/***/ })

}]);