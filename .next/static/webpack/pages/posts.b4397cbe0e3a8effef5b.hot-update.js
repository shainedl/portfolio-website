webpackHotUpdate_N_E("pages/posts",{

/***/ "./pages/posts.js":
/*!************************!*\
  !*** ./pages/posts.js ***!
  \************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSG\", function() { return __N_SSG; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Posts; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/dist/next-server/lib/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/layout */ \"./components/layout.js\");\n/* harmony import */ var _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/utils.module.css */ \"./styles/utils.module.css\");\n/* harmony import */ var _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_utils_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_date__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/date */ \"./components/date.js\");\nvar _jsxFileName = \"/Users/shainedl/Documents/ShaineLeibowitz/pages/posts.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\nvar __N_SSG = true;\nfunction Posts(_ref) {\n  var _this = this;\n\n  var allPostsData = _ref.allPostsData;\n  return __jsx(_components_layout__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    home: true,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 5\n    }\n  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 7\n    }\n  }, __jsx(\"title\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 9\n    }\n  }, _components_layout__WEBPACK_IMPORTED_MODULE_2__[\"siteTitle\"], \" Blog\")), __jsx(\"section\", {\n    className: \"\".concat(_styles_utils_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.headingMd, \" \").concat(_styles_utils_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.padding1px),\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 7\n    }\n  }, __jsx(\"h2\", {\n    className: _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.headingLg,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 7\n    }\n  }, \"Blog\"), __jsx(\"ul\", {\n    className: _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.list,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 9\n    }\n  }, allPostsData.map(function (_ref2) {\n    var id = _ref2.id,\n        date = _ref2.date,\n        title = _ref2.title;\n    return __jsx(\"li\", {\n      className: _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.listItem,\n      key: id,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 27,\n        columnNumber: 13\n      }\n    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {\n      href: \"/posts/\".concat(id),\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 28,\n        columnNumber: 11\n      }\n    }, __jsx(\"a\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 29,\n        columnNumber: 13\n      }\n    }, title)), __jsx(\"br\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 31,\n        columnNumber: 11\n      }\n    }), __jsx(\"small\", {\n      className: _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.lightText,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 32,\n        columnNumber: 11\n      }\n    }, __jsx(_components_date__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n      dateString: date,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 33,\n        columnNumber: 13\n      }\n    })));\n  }))));\n}\n_c = Posts;\n\nvar _c;\n\n$RefreshReg$(_c, \"Posts\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcG9zdHMuanM/NmFkOSJdLCJuYW1lcyI6WyJQb3N0cyIsImFsbFBvc3RzRGF0YSIsInNpdGVUaXRsZSIsInV0aWxTdHlsZXMiLCJoZWFkaW5nTWQiLCJwYWRkaW5nMXB4IiwiaGVhZGluZ0xnIiwibGlzdCIsIm1hcCIsImlkIiwiZGF0ZSIsInRpdGxlIiwibGlzdEl0ZW0iLCJsaWdodFRleHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOztBQVdlLFNBQVNBLEtBQVQsT0FBaUM7QUFBQTs7QUFBQSxNQUFoQkMsWUFBZ0IsUUFBaEJBLFlBQWdCO0FBQzlDLFNBQ0UsTUFBQywwREFBRDtBQUFRLFFBQUksTUFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxnREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFRQyw0REFBUixVQURGLENBREYsRUFJRTtBQUFTLGFBQVMsWUFBS0MsK0RBQVUsQ0FBQ0MsU0FBaEIsY0FBNkJELCtEQUFVLENBQUNFLFVBQXhDLENBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQTtBQUFJLGFBQVMsRUFBRUYsK0RBQVUsQ0FBQ0csU0FBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURBLEVBRUU7QUFBSSxhQUFTLEVBQUVILCtEQUFVLENBQUNJLElBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR04sWUFBWSxDQUFDTyxHQUFiLENBQWlCO0FBQUEsUUFBR0MsRUFBSCxTQUFHQSxFQUFIO0FBQUEsUUFBT0MsSUFBUCxTQUFPQSxJQUFQO0FBQUEsUUFBYUMsS0FBYixTQUFhQSxLQUFiO0FBQUEsV0FDaEI7QUFBSSxlQUFTLEVBQUVSLCtEQUFVLENBQUNTLFFBQTFCO0FBQW9DLFNBQUcsRUFBRUgsRUFBekM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNGLE1BQUMsZ0RBQUQ7QUFBTSxVQUFJLG1CQUFZQSxFQUFaLENBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBSUUsS0FBSixDQURGLENBREUsRUFJRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BSkUsRUFLRjtBQUFPLGVBQVMsRUFBRVIsK0RBQVUsQ0FBQ1UsU0FBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFLE1BQUMsd0RBQUQ7QUFBTSxnQkFBVSxFQUFFSCxJQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREYsQ0FMRSxDQURnQjtBQUFBLEdBQWpCLENBREgsQ0FGRixDQUpGLENBREY7QUF1QkQ7S0F4QnVCVixLIiwiZmlsZSI6Ii4vcGFnZXMvcG9zdHMuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgTGF5b3V0LCB7IHNpdGVUaXRsZSB9IGZyb20gJy4uL2NvbXBvbmVudHMvbGF5b3V0J1xuaW1wb3J0IHV0aWxTdHlsZXMgZnJvbSAnLi4vc3R5bGVzL3V0aWxzLm1vZHVsZS5jc3MnXG5pbXBvcnQgeyBnZXRTb3J0ZWRQb3N0c0RhdGEgfSBmcm9tICcuLi9saWIvcG9zdHMnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgRGF0ZSBmcm9tICcuLi9jb21wb25lbnRzL2RhdGUnXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpIHtcbiAgY29uc3QgYWxsUG9zdHNEYXRhID0gZ2V0U29ydGVkUG9zdHNEYXRhKClcbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgYWxsUG9zdHNEYXRhXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBvc3RzKHsgYWxsUG9zdHNEYXRhIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0IGhvbWU+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPntzaXRlVGl0bGV9IEJsb2c8L3RpdGxlPlxuICAgICAgPC9IZWFkPlxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtgJHt1dGlsU3R5bGVzLmhlYWRpbmdNZH0gJHt1dGlsU3R5bGVzLnBhZGRpbmcxcHh9YH0+XG4gICAgICA8aDIgY2xhc3NOYW1lPXt1dGlsU3R5bGVzLmhlYWRpbmdMZ30+QmxvZzwvaDI+XG4gICAgICAgIDx1bCBjbGFzc05hbWU9e3V0aWxTdHlsZXMubGlzdH0+XG4gICAgICAgICAge2FsbFBvc3RzRGF0YS5tYXAoKHsgaWQsIGRhdGUsIHRpdGxlIH0pID0+IChcbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9e3V0aWxTdHlsZXMubGlzdEl0ZW19IGtleT17aWR9PlxuICAgICAgICAgIDxMaW5rIGhyZWY9e2AvcG9zdHMvJHtpZH1gfT5cbiAgICAgICAgICAgIDxhPnt0aXRsZX08L2E+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDxiciAvPlxuICAgICAgICAgIDxzbWFsbCBjbGFzc05hbWU9e3V0aWxTdHlsZXMubGlnaHRUZXh0fT5cbiAgICAgICAgICAgIDxEYXRlIGRhdGVTdHJpbmc9e2RhdGV9IC8+XG4gICAgICAgICAgPC9zbWFsbD5cbiAgICAgICAgPC9saT5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC91bD5cbiAgICAgIDwvc2VjdGlvbj5cbiAgICA8L0xheW91dD5cbiAgKVxufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/posts.js\n");

/***/ })

})