webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/ThemeFloatBar.js":
/*!*****************************************!*\
  !*** ./src/components/ThemeFloatBar.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! semantic-ui-react */ \"./node_modules/semantic-ui-react/dist/es/index.js\");\n/* harmony import */ var _src_constants_rahulworld__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../src/constants/rahulworld */ \"./src/constants/rahulworld.js\");\n\n\n\nvar _jsxFileName = \"/Users/rahulchauhan/Desktop/web-portfolio/rahulworld.github.io/2021/src/components/ThemeFloatBar.js\",\n    _this = undefined;\n\n\n\n\n\n\n\n\nvar style = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"style\", {\n  children: \"\\n    @keyframes back-to-docs {\\n        0% { transform: translateY(0); }\\n        50% { transform: translateY(0.35em); }\\n        100% { transform: translateY(0); }\\n    }\\n  \"\n}, void 0, false, {\n  fileName: _jsxFileName,\n  lineNumber: 20,\n  columnNumber: 3\n}, undefined);\n\nvar FloatBar = function FloatBar(_ref) {\n  var theme = _ref.theme,\n      _ref$setTheme = _ref.setTheme,\n      setTheme = _ref$setTheme === void 0 ? function () {} : _ref$setTheme;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: [style, (theme === null || theme === void 0 ? void 0 : theme.selectedTheme) !== _src_constants_rahulworld__WEBPACK_IMPORTED_MODULE_6__[\"THEMES\"][0] && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__[\"Button\"] // as={Link}\n    // to='/layouts'\n    , {\n      onClick: function onClick() {\n        return setTheme(_src_constants_rahulworld__WEBPACK_IMPORTED_MODULE_6__[\"THEMES\"][0]);\n      } // icon=\"github\"\n      ,\n      icon: \"left arrow\",\n      content: \"Theme 1\" // secondary\n      ,\n      target: \"_blank\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 9\n    }, _this), (theme === null || theme === void 0 ? void 0 : theme.selectedTheme) !== _src_constants_rahulworld__WEBPACK_IMPORTED_MODULE_6__[\"THEMES\"][1] && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__[\"Button\"] // as={Link}\n    , {\n      to: \"/theme2\",\n      onClick: function onClick() {\n        return setTheme(_src_constants_rahulworld__WEBPACK_IMPORTED_MODULE_6__[\"THEMES\"][1]);\n      } // color=\"teal\"\n      ,\n      color: \"red\",\n      icon: \"left arrow\",\n      content: \"Theme 2\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 9\n    }, _this), (theme === null || theme === void 0 ? void 0 : theme.selectedTheme) !== _src_constants_rahulworld__WEBPACK_IMPORTED_MODULE_6__[\"THEMES\"][2] && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__[\"Button\"] // as={Link}\n    , {\n      to: \"/theme3\",\n      onClick: function onClick() {\n        return setTheme(_src_constants_rahulworld__WEBPACK_IMPORTED_MODULE_6__[\"THEMES\"][2]);\n      } // icon=\"travel\"\n      ,\n      icon: \"left arrow\",\n      color: \"teal\",\n      content: \"Theme 3\" // secondary\n      ,\n      target: \"_blank\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 58,\n      columnNumber: 9\n    }, _this)]\n  }, void 0, true);\n};\n\n_c = FloatBar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (FloatBar);\n\nvar _c;\n\n$RefreshReg$(_c, \"FloatBar\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvVGhlbWVGbG9hdEJhci5qcz81ZGVhIl0sIm5hbWVzIjpbInN0eWxlIiwiRmxvYXRCYXIiLCJ0aGVtZSIsInNldFRoZW1lIiwic2VsZWN0ZWRUaGVtZSIsIlRIRU1FUyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFZQTs7QUFFQSxJQUFNQSxLQUFLLGdCQUNUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREY7O0FBWUEsSUFBTUMsUUFBUSxHQUFHLFNBQVhBLFFBQVc7QUFBQSxNQUFFQyxLQUFGLFFBQUVBLEtBQUY7QUFBQSwyQkFBU0MsUUFBVDtBQUFBLE1BQVNBLFFBQVQsOEJBQW9CLFlBQU0sQ0FBRSxDQUE1QjtBQUFBLHNCQUNiO0FBQUEsZUFDR0gsS0FESCxFQUVHLENBQUFFLEtBQUssU0FBTCxJQUFBQSxLQUFLLFdBQUwsWUFBQUEsS0FBSyxDQUFFRSxhQUFQLE1BQXlCQyxnRUFBTSxDQUFDLENBQUQsQ0FBL0IsaUJBQ0MscUVBQUMsd0RBQUQsQ0FDRTtBQUNBO0FBRkY7QUFHRSxhQUFPLEVBQUU7QUFBQSxlQUFNRixRQUFRLENBQUNFLGdFQUFNLENBQUMsQ0FBRCxDQUFQLENBQWQ7QUFBQSxPQUhYLENBSUU7QUFKRjtBQUtFLFVBQUksRUFBQyxZQUxQO0FBTUUsYUFBTyxFQUFDLFNBTlYsQ0FPRTtBQVBGO0FBUUUsWUFBTSxFQUFDO0FBUlQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUhKLEVBY0csQ0FBQUgsS0FBSyxTQUFMLElBQUFBLEtBQUssV0FBTCxZQUFBQSxLQUFLLENBQUVFLGFBQVAsTUFBeUJDLGdFQUFNLENBQUMsQ0FBRCxDQUEvQixpQkFDQyxxRUFBQyx3REFBRCxDQUNFO0FBREY7QUFFRSxRQUFFLEVBQUMsU0FGTDtBQUdFLGFBQU8sRUFBRTtBQUFBLGVBQU1GLFFBQVEsQ0FBQ0UsZ0VBQU0sQ0FBQyxDQUFELENBQVAsQ0FBZDtBQUFBLE9BSFgsQ0FJRTtBQUpGO0FBS0UsV0FBSyxFQUFDLEtBTFI7QUFNRSxVQUFJLEVBQUMsWUFOUDtBQU9FLGFBQU8sRUFBQztBQVBWO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFmSixFQXlCRyxDQUFBSCxLQUFLLFNBQUwsSUFBQUEsS0FBSyxXQUFMLFlBQUFBLEtBQUssQ0FBRUUsYUFBUCxNQUF5QkMsZ0VBQU0sQ0FBQyxDQUFELENBQS9CLGlCQUNDLHFFQUFDLHdEQUFELENBQ0U7QUFERjtBQUVFLFFBQUUsRUFBQyxTQUZMO0FBR0UsYUFBTyxFQUFFO0FBQUEsZUFBTUYsUUFBUSxDQUFDRSxnRUFBTSxDQUFDLENBQUQsQ0FBUCxDQUFkO0FBQUEsT0FIWCxDQUlFO0FBSkY7QUFLRSxVQUFJLEVBQUMsWUFMUDtBQU1FLFdBQUssRUFBQyxNQU5SO0FBT0UsYUFBTyxFQUFDLFNBUFYsQ0FRRTtBQVJGO0FBU0UsWUFBTSxFQUFDO0FBVFQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQTFCSjtBQUFBLGtCQURhO0FBQUEsQ0FBakI7O0tBQU1KLFE7QUEwQ1NBLHVFQUFmIiwiZmlsZSI6Ii4vc3JjL2NvbXBvbmVudHMvVGhlbWVGbG9hdEJhci5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VSZWYsIHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IHtcbiAgSGVhZGVyLFxuICBTZWdtZW50LFxuICBJY29uLFxuICBHcmlkLFxuICBGbGFnLFxuICBMYWJlbCxcbiAgQnV0dG9uLFxuICBMaXN0LFxuICBTdGlja3ksXG4gIFJlZixcbn0gZnJvbSBcInNlbWFudGljLXVpLXJlYWN0XCI7XG5pbXBvcnQgeyBUSEVNRVMgfSBmcm9tIFwiLi4vLi4vc3JjL2NvbnN0YW50cy9yYWh1bHdvcmxkXCI7XG5cbmNvbnN0IHN0eWxlID0gKFxuICA8c3R5bGU+XG4gICAge2BcbiAgICBAa2V5ZnJhbWVzIGJhY2stdG8tZG9jcyB7XG4gICAgICAgIDAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApOyB9XG4gICAgICAgIDUwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwLjM1ZW0pOyB9XG4gICAgICAgIDEwMCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7IH1cbiAgICB9XG4gIGB9XG4gIDwvc3R5bGU+XG4pO1xuXG5jb25zdCBGbG9hdEJhciA9ICh7dGhlbWUsIHNldFRoZW1lID0gKCkgPT4ge319KSA9PiAoXG4gICAgPD5cbiAgICAgIHtzdHlsZX1cbiAgICAgIHt0aGVtZT8uc2VsZWN0ZWRUaGVtZSAhPT0gVEhFTUVTWzBdICYmIChcbiAgICAgICAgPEJ1dHRvblxuICAgICAgICAgIC8vIGFzPXtMaW5rfVxuICAgICAgICAgIC8vIHRvPScvbGF5b3V0cydcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRUaGVtZShUSEVNRVNbMF0pfVxuICAgICAgICAgIC8vIGljb249XCJnaXRodWJcIlxuICAgICAgICAgIGljb249XCJsZWZ0IGFycm93XCJcbiAgICAgICAgICBjb250ZW50PVwiVGhlbWUgMVwiXG4gICAgICAgICAgLy8gc2Vjb25kYXJ5XG4gICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgLz5cbiAgICAgICl9XG4gICAgICB7dGhlbWU/LnNlbGVjdGVkVGhlbWUgIT09IFRIRU1FU1sxXSAmJiAoXG4gICAgICAgIDxCdXR0b25cbiAgICAgICAgICAvLyBhcz17TGlua31cbiAgICAgICAgICB0bz0nL3RoZW1lMidcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRUaGVtZShUSEVNRVNbMV0pfVxuICAgICAgICAgIC8vIGNvbG9yPVwidGVhbFwiXG4gICAgICAgICAgY29sb3I9XCJyZWRcIlxuICAgICAgICAgIGljb249XCJsZWZ0IGFycm93XCJcbiAgICAgICAgICBjb250ZW50PVwiVGhlbWUgMlwiXG4gICAgICAgIC8+XG4gICAgICApfVxuICAgICAge3RoZW1lPy5zZWxlY3RlZFRoZW1lICE9PSBUSEVNRVNbMl0gJiYgKFxuICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgLy8gYXM9e0xpbmt9XG4gICAgICAgICAgdG89Jy90aGVtZTMnXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0VGhlbWUoVEhFTUVTWzJdKX1cbiAgICAgICAgICAvLyBpY29uPVwidHJhdmVsXCJcbiAgICAgICAgICBpY29uPVwibGVmdCBhcnJvd1wiXG4gICAgICAgICAgY29sb3I9XCJ0ZWFsXCJcbiAgICAgICAgICBjb250ZW50PVwiVGhlbWUgM1wiXG4gICAgICAgICAgLy8gc2Vjb25kYXJ5XG4gICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgLz5cbiAgICAgICl9XG4gICAgPC8+XG4gICk7XG5cbmV4cG9ydCBkZWZhdWx0IEZsb2F0QmFyOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/ThemeFloatBar.js\n");

/***/ })

})