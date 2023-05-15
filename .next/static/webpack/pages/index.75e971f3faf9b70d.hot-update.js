"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/Product.js":
/*!***********************************!*\
  !*** ./src/components/Product.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _heroicons_react_solid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @heroicons/react/solid */ \"./node_modules/@heroicons/react/solid/esm/index.js\");\n/* harmony import */ var react_currency_formatter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-currency-formatter */ \"./node_modules/react-currency-formatter/dist/react-currency-formatter.umd.js\");\n/* harmony import */ var react_currency_formatter__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_currency_formatter__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst MAX_RATING = 5;\nconst MIN_RATING = 1;\nfunction Product(param) {\n    let { id , title , price , description , category , image  } = param;\n    _s();\n    const [rating] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING);\n    const [hasPrime] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(Math.random() < 0.5);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col items-center justify-center w-80 bg-white rounded-lg shadow-lg \",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"relative pb-3/4\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    src: image,\n                    id: id,\n                    width: \"50\",\n                    objectFit: \"cover\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\meeta\\\\OneDrive\\\\Desktop\\\\bugoff\\\\BuggOff-React-Ecom\\\\src\\\\components\\\\Product.js\",\n                    lineNumber: 20,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\meeta\\\\OneDrive\\\\Desktop\\\\bugoff\\\\BuggOff-React-Ecom\\\\src\\\\components\\\\Product.js\",\n                lineNumber: 19,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"p-4 flex flex-col flex-grow\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-gray-500 uppercase text-xs mb-1\",\n                        children: category\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\meeta\\\\OneDrive\\\\Desktop\\\\bugoff\\\\BuggOff-React-Ecom\\\\src\\\\components\\\\Product.js\",\n                        lineNumber: 23,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        className: \"text-lg min-h-200 font-medium mb-1\",\n                        children: title\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\meeta\\\\OneDrive\\\\Desktop\\\\bugoff\\\\BuggOff-React-Ecom\\\\src\\\\components\\\\Product.js\",\n                        lineNumber: 24,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex items-center mb-1\",\n                        children: Array(rating).fill().map((_, i)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_4__.StarIcon, {\n                                className: \"h-5 w-5 text-yellow-1 00\"\n                            }, i, false, {\n                                fileName: \"C:\\\\Users\\\\meeta\\\\OneDrive\\\\Desktop\\\\bugoff\\\\BuggOff-React-Ecom\\\\src\\\\components\\\\Product.js\",\n                                lineNumber: 29,\n                                columnNumber: 29\n                            }, this))\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\meeta\\\\OneDrive\\\\Desktop\\\\bugoff\\\\BuggOff-React-Ecom\\\\src\\\\components\\\\Product.js\",\n                        lineNumber: 25,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-gray-500 text-sm mb-2 line-clamp-3\",\n                        children: description\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\meeta\\\\OneDrive\\\\Desktop\\\\bugoff\\\\BuggOff-React-Ecom\\\\src\\\\components\\\\Product.js\",\n                        lineNumber: 32,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex items-center mb-2\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_currency_formatter__WEBPACK_IMPORTED_MODULE_3___default()), {\n                            quantity: price + 800,\n                            currency: \"INR\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\meeta\\\\OneDrive\\\\Desktop\\\\bugoff\\\\BuggOff-React-Ecom\\\\src\\\\components\\\\Product.js\",\n                            lineNumber: 34,\n                            columnNumber: 21\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\meeta\\\\OneDrive\\\\Desktop\\\\bugoff\\\\BuggOff-React-Ecom\\\\src\\\\components\\\\Product.js\",\n                        lineNumber: 33,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"bg-blue-500 text-white py-2 rounded-lg font-medium transition-colors duration-300 hover:bg-blue-600\",\n                        children: \"Add to Cart\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\meeta\\\\OneDrive\\\\Desktop\\\\bugoff\\\\BuggOff-React-Ecom\\\\src\\\\components\\\\Product.js\",\n                        lineNumber: 37,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\meeta\\\\OneDrive\\\\Desktop\\\\bugoff\\\\BuggOff-React-Ecom\\\\src\\\\components\\\\Product.js\",\n                lineNumber: 22,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\meeta\\\\OneDrive\\\\Desktop\\\\bugoff\\\\BuggOff-React-Ecom\\\\src\\\\components\\\\Product.js\",\n        lineNumber: 18,\n        columnNumber: 9\n    }, this);\n}\n_s(Product, \"iAFI4jNUmIsuo72nUPAkXMwMyHY=\");\n_c = Product;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Product);\nvar _c;\n$RefreshReg$(_c, \"Product\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Qcm9kdWN0LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTs7QUFBMEI7QUFDSztBQUNtQjtBQUNqQjtBQUNlO0FBRWhELE1BQU1LLGFBQWE7QUFDbkIsTUFBTUMsYUFBYTtBQUVuQixTQUFTQyxRQUFRLEtBQWtELEVBQUU7UUFBcEQsRUFBRUMsR0FBRSxFQUFFQyxNQUFLLEVBQUVDLE1BQUssRUFBRUMsWUFBVyxFQUFFQyxTQUFRLEVBQUVDLE1BQUssRUFBRSxHQUFsRDs7SUFDYixNQUFNLENBQUNDLE9BQU8sR0FBR1gsK0NBQVFBLENBQ3JCWSxLQUFLQyxLQUFLLENBQUNELEtBQUtFLE1BQU0sS0FBTVosQ0FBQUEsYUFBYUMsYUFBYSxNQUFNQTtJQUdoRSxNQUFNLENBQUNZLFNBQVMsR0FBR2YsK0NBQVFBLENBQUNZLEtBQUtFLE1BQU0sS0FBSztJQUU1QyxxQkFDSSw4REFBQ0U7UUFBSUMsV0FBVTs7MEJBQ1gsOERBQUNEO2dCQUFJQyxXQUFVOzBCQUNYLDRFQUFDQztvQkFBSUMsS0FBS1Q7b0JBQU9MLElBQUlBO29CQUFJZSxPQUFNO29CQUFLQyxXQUFVOzs7Ozs7Ozs7OzswQkFFbEQsOERBQUNMO2dCQUFJQyxXQUFVOztrQ0FDWCw4REFBQ0s7d0JBQUVMLFdBQVU7a0NBQXdDUjs7Ozs7O2tDQUNyRCw4REFBQ2M7d0JBQUdOLFdBQVU7a0NBQXNDWDs7Ozs7O2tDQUNwRCw4REFBQ1U7d0JBQUlDLFdBQVU7a0NBQ1ZPLE1BQU1iLFFBQ0ZjLElBQUksR0FDSkMsR0FBRyxDQUFDLENBQUNDLEdBQUdDLGtCQUNMLDhEQUFDN0IsNERBQVFBO2dDQUFTa0IsV0FBVTsrQkFBYlc7Ozs7Ozs7Ozs7a0NBRzNCLDhEQUFDTjt3QkFBRUwsV0FBVTtrQ0FBMkNUOzs7Ozs7a0NBQ3hELDhEQUFDUTt3QkFBSUMsV0FBVTtrQ0FDWCw0RUFBQ2hCLGlFQUFRQTs0QkFBQzRCLFVBQVV0QixRQUFNOzRCQUFLdUIsVUFBUzs7Ozs7Ozs7Ozs7a0NBRzVDLDhEQUFDQzt3QkFBT2QsV0FBVTtrQ0FBc0c7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU14STtHQWpDU2I7S0FBQUE7QUFtQ1QsK0RBQWVBLE9BQU9BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvUHJvZHVjdC5qcz80ZTgwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcclxuaW1wb3J0IHsgU3Rhckljb24gfSBmcm9tICdAaGVyb2ljb25zL3JlYWN0L3NvbGlkJztcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBDdXJyZW5jeSBmcm9tICdyZWFjdC1jdXJyZW5jeS1mb3JtYXR0ZXInO1xyXG5cclxuY29uc3QgTUFYX1JBVElORyA9IDU7XHJcbmNvbnN0IE1JTl9SQVRJTkcgPSAxO1xyXG5cclxuZnVuY3Rpb24gUHJvZHVjdCh7IGlkLCB0aXRsZSwgcHJpY2UsIGRlc2NyaXB0aW9uLCBjYXRlZ29yeSwgaW1hZ2UgfSkge1xyXG4gICAgY29uc3QgW3JhdGluZ10gPSB1c2VTdGF0ZShcclxuICAgICAgICBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoTUFYX1JBVElORyAtIE1JTl9SQVRJTkcgKyAxKSkgKyBNSU5fUkFUSU5HXHJcbiAgICApO1xyXG5cclxuICAgIGNvbnN0IFtoYXNQcmltZV0gPSB1c2VTdGF0ZShNYXRoLnJhbmRvbSgpIDwgMC41KTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgdy04MCAgYmctd2hpdGUgcm91bmRlZC1sZyBzaGFkb3ctbGcgXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgcGItMy80XCI+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz17aW1hZ2V9IGlkPXtpZH0gd2lkdGg9XCI1MFwiIG9iamVjdEZpdD1cImNvdmVyXCIgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC00IGZsZXggZmxleC1jb2wgZmxleC1ncm93XCI+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNTAwIHVwcGVyY2FzZSB0ZXh0LXhzIG1iLTFcIj57Y2F0ZWdvcnl9PC9wPlxyXG4gICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtbGcgbWluLWgtMjAwIGZvbnQtbWVkaXVtIG1iLTFcIj57dGl0bGV9PC9oMj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgbWItMVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHtBcnJheShyYXRpbmcpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5maWxsKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgLm1hcCgoXywgaSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFN0YXJJY29uIGtleT17aX0gY2xhc3NOYW1lPVwiaC01IHctNSB0ZXh0LXllbGxvdy0xICAwMFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNTAwIHRleHQtc20gbWItMiBsaW5lLWNsYW1wLTNcIj57ZGVzY3JpcHRpb259PC9wPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBtYi0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEN1cnJlbmN5IHF1YW50aXR5PXtwcmljZSs4MDB9IGN1cnJlbmN5PVwiSU5SXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJiZy1ibHVlLTUwMCB0ZXh0LXdoaXRlIHB5LTIgcm91bmRlZC1sZyBmb250LW1lZGl1bSB0cmFuc2l0aW9uLWNvbG9ycyBkdXJhdGlvbi0zMDAgaG92ZXI6YmctYmx1ZS02MDBcIj5cclxuICAgICAgICAgICAgICAgICAgICBBZGQgdG8gQ2FydFxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvZHVjdDtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiSW1hZ2UiLCJTdGFySWNvbiIsInVzZVN0YXRlIiwiQ3VycmVuY3kiLCJNQVhfUkFUSU5HIiwiTUlOX1JBVElORyIsIlByb2R1Y3QiLCJpZCIsInRpdGxlIiwicHJpY2UiLCJkZXNjcmlwdGlvbiIsImNhdGVnb3J5IiwiaW1hZ2UiLCJyYXRpbmciLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJoYXNQcmltZSIsImRpdiIsImNsYXNzTmFtZSIsImltZyIsInNyYyIsIndpZHRoIiwib2JqZWN0Rml0IiwicCIsImgyIiwiQXJyYXkiLCJmaWxsIiwibWFwIiwiXyIsImkiLCJxdWFudGl0eSIsImN1cnJlbmN5IiwiYnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Product.js\n"));

/***/ })

});