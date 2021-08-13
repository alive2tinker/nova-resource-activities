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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(1);
module.exports = __webpack_require__(6);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

Nova.booting(function (Vue, router, store) {
  Vue.component('resource-activities', __webpack_require__(2));
});

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(11)
}
var normalizeComponent = __webpack_require__(3)
/* script */
var __vue_script__ = __webpack_require__(4)
/* template */
var __vue_template__ = __webpack_require__(15)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-68ff5483"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/js/components/Tool.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-68ff5483", Component.options)
  } else {
    hotAPI.reload("data-v-68ff5483", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 3 */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open 'C:\\laragon\\www\\ndashboard\\nova-components\\ResourceActivities\\node_modules\\vue-loader\\lib\\component-normalizer.js'");

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
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

/* harmony default export */ __webpack_exports__["default"] = ({
    props: ["resourceName", "resourceId", "panel"],

    data: function data() {
        return {
            activities: []
        };
    },
    mounted: function mounted() {
        var _this = this;

        Nova.request().get("/nova-vendor/resource-activities/" + this.resourceName + "/" + this.resourceId).then(function (response) {
            console.log(response.data.data);
            _this.activities = response.data.data;
        });
    }
});

/***/ }),
/* 5 */,
/* 6 */
/***/ (function(module, exports) {

throw new Error("Module build failed: ModuleBuildError: Module build failed: Error: ENOENT: no such file or directory, open 'C:\\laragon\\www\\ndashboard\\nova-components\\ResourceActivities\\node_modules\\css-loader\\lib\\css-base.js'\n    at C:\\laragon\\www\\ndashboard\\nova-components\\ResourceActivities\\node_modules\\webpack\\lib\\NormalModule.js:195:19\n    at C:\\laragon\\www\\ndashboard\\nova-components\\ResourceActivities\\node_modules\\loader-runner\\lib\\LoaderRunner.js:367:11\n    at C:\\laragon\\www\\ndashboard\\nova-components\\ResourceActivities\\node_modules\\loader-runner\\lib\\LoaderRunner.js:203:19\n    at C:\\laragon\\www\\ndashboard\\nova-components\\ResourceActivities\\node_modules\\enhanced-resolve\\lib\\CachedInputFileSystem.js:70:14\n    at processTicksAndRejections (internal/process/task_queues.js:75:11)");

/***/ }),
/* 7 */,
/* 8 */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open 'C:\\laragon\\www\\ndashboard\\nova-components\\ResourceActivities\\node_modules\\css-loader\\lib\\css-base.js'");

/***/ }),
/* 9 */,
/* 10 */,
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(12);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(13)("18a4f44c", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-68ff5483\",\"scoped\":true,\"hasInlineConfig\":true}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Tool.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-68ff5483\",\"scoped\":true,\"hasInlineConfig\":true}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Tool.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)(false);
// imports


// module
exports.push([module.i, "\n.timeline-link[data-v-68ff5483] {\n    width: 0.2rem;\n    border-radius: 1rem;\n    margin-left: 1rem;\n    margin-top: 0.5rem;\n    margin-bottom: 0.5rem;\n    min-height: 30px;\n    height: 100%;\n}\n.timeline-dot[data-v-68ff5483]{\n  width: 0.3rem;\n  aspect-ratio: 1;\n  border-radius: 1rem;\n  margin-left: 1rem;\n  margin-top: 0.5rem;\n  margin-bottom: 0.5rem;\n}\n.border-gray-500[data-v-68ff5483] {\n    --tw-border-opacity: 1;\n    border-color: rgba(107, 114, 128, var(--tw-border-opacity));\n}\n.bg-gray-500[data-v-68ff5483] {\n    --tw-bg-opacity: 1;\n    background-color: rgba(107, 114, 128, var(--tw-bg-opacity));\n}\n", ""]);

// exports


/***/ }),
/* 13 */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open 'C:\\laragon\\www\\ndashboard\\nova-components\\ResourceActivities\\node_modules\\vue-style-loader\\lib\\addStylesClient.js'");

/***/ }),
/* 14 */,
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("card", { staticClass: "w-1/2 px-6 py-3" }, [
    _c("h4", [_vm._v("Activity Log")]),
    _vm._v(" "),
    _c(
      "ul",
      { staticClass: "my-3 p-0" },
      _vm._l(_vm.activities, function(activity, index) {
        return _c(
          "li",
          {
            key: activity.id,
            staticClass: "flex flex-row my-2 overflow-hidden"
          },
          [
            _c("div", { staticClass: "flex-col px-3" }, [
              _c(
                "p",
                {
                  staticClass: "rounded-full border-2 border-gray-500 px-3 py-2"
                },
                [
                  _vm._v(
                    "\n                    " +
                      _vm._s(index) +
                      "\n                "
                  )
                ]
              ),
              _vm._v(" "),
              _c("div", {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: index != _vm.activities.length - 1,
                    expression: "index != activities.length - 1"
                  }
                ],
                staticClass: "timeline-link bg-gray-500"
              }),
              _vm._v(" "),
              _c("div", {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: index == _vm.activities.length - 1,
                    expression: "index == activities.length - 1"
                  }
                ],
                staticClass: "timeline-dot bg-gray-500"
              })
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "flex-col" }, [
              _c("h4", { staticClass: "text-gray-100" }, [
                _vm._v(_vm._s(activity.description))
              ]),
              _vm._v(" "),
              _c("p", [_vm._v(_vm._s(activity.createdAt))])
            ])
          ]
        )
      }),
      0
    )
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-68ff5483", module.exports)
  }
}

/***/ })
/******/ ]);