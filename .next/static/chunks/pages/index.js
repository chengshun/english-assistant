/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([["pages/index"],{

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?absolutePagePath=%2FUsers%2Fshuncheng%2FDocuments%2Fenglish-assistant%2Fpages%2Findex.tsx&page=%2F!":
/*!**************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?absolutePagePath=%2FUsers%2Fshuncheng%2FDocuments%2Fenglish-assistant%2Fpages%2Findex.tsx&page=%2F! ***!
  \**************************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval(__webpack_require__.ts("\n    (window.__NEXT_P = window.__NEXT_P || []).push([\n      \"/\",\n      function () {\n        return __webpack_require__(/*! ./pages/index.tsx */ \"./pages/index.tsx\");\n      }\n    ]);\n    if(true) {\n      module.hot.dispose(function () {\n        window.__NEXT_P.push([\"/\"])\n      });\n    }\n  //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWNsaWVudC1wYWdlcy1sb2FkZXIuanM/YWJzb2x1dGVQYWdlUGF0aD0lMkZVc2VycyUyRnNodW5jaGVuZyUyRkRvY3VtZW50cyUyRmVuZ2xpc2gtYXNzaXN0YW50JTJGcGFnZXMlMkZpbmRleC50c3gmcGFnZT0lMkYhLmpzIiwibWFwcGluZ3MiOiI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLG1CQUFPLENBQUMsNENBQW1CO0FBQzFDO0FBQ0E7QUFDQSxPQUFPLElBQVU7QUFDakIsTUFBTSxVQUFVO0FBQ2hCO0FBQ0EsT0FBTztBQUNQO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLz80M2FiIl0sInNvdXJjZXNDb250ZW50IjpbIlxuICAgICh3aW5kb3cuX19ORVhUX1AgPSB3aW5kb3cuX19ORVhUX1AgfHwgW10pLnB1c2goW1xuICAgICAgXCIvXCIsXG4gICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiByZXF1aXJlKFwiLi9wYWdlcy9pbmRleC50c3hcIik7XG4gICAgICB9XG4gICAgXSk7XG4gICAgaWYobW9kdWxlLmhvdCkge1xuICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgd2luZG93Ll9fTkVYVF9QLnB1c2goW1wiL1wiXSlcbiAgICAgIH0pO1xuICAgIH1cbiAgIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?absolutePagePath=%2FUsers%2Fshuncheng%2FDocuments%2Fenglish-assistant%2Fpages%2Findex.tsx&page=%2F!\n"));

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nfunction Home() {\n    _s();\n    const [answer, setAnswer] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [question, setQuestion] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const prompt = 'Explain the word \"'.concat(question, '\" and give me some exmaple sentences');\n    const generateAnswer = async (e)=>{\n        if (!question) return;\n        e.preventDefault();\n        setAnswer(\"\"); // clear previous\n        const response = await fetch(\"https://api.openai.com/v1/chat/completions\", {\n            method: \"POST\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify({\n                prompt\n            })\n        });\n        if (!response.ok) {\n            console.error(response.statusText);\n        }\n        let result = await response.json();\n        if (result.error) {\n            console.error(result.error);\n        }\n        setAnswer(result.choices[0].message.content);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"English assistant\"\n                    }, void 0, false, {\n                        fileName: \"/Users/shuncheng/Documents/english-assistant/pages/index.tsx\",\n                        lineNumber: 39,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Generated by create next app\"\n                    }, void 0, false, {\n                        fileName: \"/Users/shuncheng/Documents/english-assistant/pages/index.tsx\",\n                        lineNumber: 40,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"viewport\",\n                        content: \"width=device-width, initial-scale=1\"\n                    }, void 0, false, {\n                        fileName: \"/Users/shuncheng/Documents/english-assistant/pages/index.tsx\",\n                        lineNumber: 41,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"/Users/shuncheng/Documents/english-assistant/pages/index.tsx\",\n                        lineNumber: 42,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/shuncheng/Documents/english-assistant/pages/index.tsx\",\n                lineNumber: 38,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: \"flex max-w-5xl mx-auto flex-col items-center justify-center py-2 min-h-screen\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"sm:text-6xl text-4xl max-w-[708px] font-bold text-slate-900\",\n                        children: \"English Assistant\"\n                    }, void 0, false, {\n                        fileName: \"/Users/shuncheng/Documents/english-assistant/pages/index.tsx\",\n                        lineNumber: 45,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-slate-500 mt-5\",\n                        children: \"ask so far\"\n                    }, void 0, false, {\n                        fileName: \"/Users/shuncheng/Documents/english-assistant/pages/index.tsx\",\n                        lineNumber: 46,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"max-w-xl w-full\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex mt-10 items-center space-x-3\"\n                            }, void 0, false, {\n                                fileName: \"/Users/shuncheng/Documents/english-assistant/pages/index.tsx\",\n                                lineNumber: 48,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex mt-10 items-center space-x-3\"\n                            }, void 0, false, {\n                                fileName: \"/Users/shuncheng/Documents/english-assistant/pages/index.tsx\",\n                                lineNumber: 49,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                                className: \"w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black my-5\",\n                                rows: 5,\n                                placeholder: \"e.g. Abandon\",\n                                spellCheck: false,\n                                value: question,\n                                onChange: (e)=>setQuestion(e.target.value)\n                            }, void 0, false, {\n                                fileName: \"/Users/shuncheng/Documents/english-assistant/pages/index.tsx\",\n                                lineNumber: 50,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex mt-10 items-center space-x-3\"\n                            }, void 0, false, {\n                                fileName: \"/Users/shuncheng/Documents/english-assistant/pages/index.tsx\",\n                                lineNumber: 58,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"bg-black rounded-xl text-white font-medium px-4 py-2 sm:mt-10 mt-8 hover:bg-black/80 w-full\",\n                                onClick: generateAnswer,\n                                children: \"Get Answer\"\n                            }, void 0, false, {\n                                fileName: \"/Users/shuncheng/Documents/english-assistant/pages/index.tsx\",\n                                lineNumber: 59,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/shuncheng/Documents/english-assistant/pages/index.tsx\",\n                        lineNumber: 47,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"space-y-10 my-10\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                className: \"sm:text-4xl text-3xl font-bold text-slate-900 mx-auto\",\n                                children: \"Answer Content\"\n                            }, void 0, false, {\n                                fileName: \"/Users/shuncheng/Documents/english-assistant/pages/index.tsx\",\n                                lineNumber: 67,\n                                columnNumber: 11\n                            }, this),\n                            answer && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"space-y-8 flex flex-col items-center justify-center max-w-xl mx-auto\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"bg-white rounded-xl shadow-md p-4 hover:bg-gray-100 transition cursor-copy border\",\n                                    children: answer\n                                }, void 0, false, {\n                                    fileName: \"/Users/shuncheng/Documents/english-assistant/pages/index.tsx\",\n                                    lineNumber: 71,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/shuncheng/Documents/english-assistant/pages/index.tsx\",\n                                lineNumber: 70,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/shuncheng/Documents/english-assistant/pages/index.tsx\",\n                        lineNumber: 66,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/shuncheng/Documents/english-assistant/pages/index.tsx\",\n                lineNumber: 44,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Home, \"z2SPSrqhVEC8EoIujtrAi44PlnY=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQWlDO0FBQ0o7QUFFZCxTQUFTRSxPQUFPOztJQUM3QixNQUFNLENBQUNDLFFBQVFDLFVBQVUsR0FBR0osK0NBQVFBLENBQUM7SUFDckMsTUFBTSxDQUFDSyxVQUFVQyxZQUFZLEdBQUdOLCtDQUFRQSxDQUFDO0lBRXpDLE1BQU1PLFNBQVMscUJBQThCLE9BQVRGLFVBQVM7SUFFN0MsTUFBTUcsaUJBQWlCLE9BQU9DLElBQVc7UUFDdkMsSUFBSSxDQUFDSixVQUFVO1FBQ2ZJLEVBQUVDLGNBQWM7UUFDaEJOLFVBQVUsS0FBSyxpQkFBaUI7UUFFaEMsTUFBTU8sV0FBVyxNQUFNQyxNQUFNLDhDQUE4QztZQUN6RUMsUUFBUTtZQUNSQyxTQUFTO2dCQUNQLGdCQUFnQjtZQUNsQjtZQUNBQyxNQUFNQyxLQUFLQyxTQUFTLENBQUM7Z0JBQ25CVjtZQUNGO1FBQ0Y7UUFFQSxJQUFJLENBQUNJLFNBQVNPLEVBQUUsRUFBRTtZQUNoQkMsUUFBUUMsS0FBSyxDQUFDVCxTQUFTVSxVQUFVO1FBQ25DLENBQUM7UUFFRCxJQUFJQyxTQUFTLE1BQU1YLFNBQVNZLElBQUk7UUFDaEMsSUFBSUQsT0FBT0YsS0FBSyxFQUFFO1lBQ2hCRCxRQUFRQyxLQUFLLENBQUNFLE9BQU9GLEtBQUs7UUFDNUIsQ0FBQztRQUNEaEIsVUFBVWtCLE9BQU9FLE9BQU8sQ0FBQyxFQUFFLENBQUNDLE9BQU8sQ0FBQ0MsT0FBTztJQUM3QztJQUVBLHFCQUNFOzswQkFDRSw4REFBQ3pCLGtEQUFJQTs7a0NBQ0gsOERBQUMwQjtrQ0FBTTs7Ozs7O2tDQUNQLDhEQUFDQzt3QkFBS0MsTUFBSzt3QkFBY0gsU0FBUTs7Ozs7O2tDQUNqQyw4REFBQ0U7d0JBQUtDLE1BQUs7d0JBQVdILFNBQVE7Ozs7OztrQ0FDOUIsOERBQUNJO3dCQUFLQyxLQUFJO3dCQUFPQyxNQUFLOzs7Ozs7Ozs7Ozs7MEJBRXhCLDhEQUFDQztnQkFBS0MsV0FBVTs7a0NBQ2QsOERBQUNDO3dCQUFHRCxXQUFVO2tDQUE4RDs7Ozs7O2tDQUM1RSw4REFBQ0U7d0JBQUVGLFdBQVU7a0NBQXNCOzs7Ozs7a0NBQ25DLDhEQUFDRzt3QkFBSUgsV0FBVTs7MENBQ2IsOERBQUNHO2dDQUFJSCxXQUFVOzs7Ozs7MENBQ2YsOERBQUNHO2dDQUFJSCxXQUFVOzs7Ozs7MENBQ2YsOERBQUNJO2dDQUNDSixXQUFVO2dDQUNWSyxNQUFNO2dDQUNOQyxhQUFZO2dDQUNaQyxZQUFZLEtBQUs7Z0NBQ2pCQyxPQUFPckM7Z0NBQ1BzQyxVQUFVLENBQUNsQyxJQUFNSCxZQUFZRyxFQUFFbUMsTUFBTSxDQUFDRixLQUFLOzs7Ozs7MENBRTdDLDhEQUFDTDtnQ0FBSUgsV0FBVTs7Ozs7OzBDQUNmLDhEQUFDVztnQ0FDQ1gsV0FBVTtnQ0FDVlksU0FBU3RDOzBDQUNWOzs7Ozs7Ozs7Ozs7a0NBSUgsOERBQUM2Qjt3QkFBSUgsV0FBVTs7MENBQ2IsOERBQUNhO2dDQUFHYixXQUFVOzBDQUF3RDs7Ozs7OzRCQUVwRS9CLHdCQUNBLDhEQUFDa0M7Z0NBQUlILFdBQVU7MENBQ2IsNEVBQUNHO29DQUFJSCxXQUFVOzhDQUFxRi9COzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT2xILENBQUM7R0ExRXVCRDtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC50c3g/MDdmZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IFthbnN3ZXIsIHNldEFuc3dlcl0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW3F1ZXN0aW9uLCBzZXRRdWVzdGlvbl0gPSB1c2VTdGF0ZShcIlwiKTtcblxuICBjb25zdCBwcm9tcHQgPSBgRXhwbGFpbiB0aGUgd29yZCBcIiR7cXVlc3Rpb259XCIgYW5kIGdpdmUgbWUgc29tZSBleG1hcGxlIHNlbnRlbmNlc2A7XG5cbiAgY29uc3QgZ2VuZXJhdGVBbnN3ZXIgPSBhc3luYyAoZTogYW55KSA9PiB7XG4gICAgaWYgKCFxdWVzdGlvbikgcmV0dXJuO1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBzZXRBbnN3ZXIoXCJcIik7IC8vIGNsZWFyIHByZXZpb3VzXG5cbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCdodHRwczovL2FwaS5vcGVuYWkuY29tL3YxL2NoYXQvY29tcGxldGlvbnMnLCB7XG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICB9LFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICBwcm9tcHQsXG4gICAgICB9KSxcbiAgICB9KTtcblxuICAgIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IocmVzcG9uc2Uuc3RhdHVzVGV4dCk7XG4gICAgfVxuXG4gICAgbGV0IHJlc3VsdCA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICBpZiAocmVzdWx0LmVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKHJlc3VsdC5lcnJvcik7XG4gICAgfVxuICAgIHNldEFuc3dlcihyZXN1bHQuY2hvaWNlc1swXS5tZXNzYWdlLmNvbnRlbnQpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+RW5nbGlzaCBhc3Npc3RhbnQ8L3RpdGxlPlxuICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PVwiR2VuZXJhdGVkIGJ5IGNyZWF0ZSBuZXh0IGFwcFwiIC8+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MVwiIC8+XG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxtYWluIGNsYXNzTmFtZT1cImZsZXggbWF4LXctNXhsIG14LWF1dG8gZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHB5LTIgbWluLWgtc2NyZWVuXCI+XG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJzbTp0ZXh0LTZ4bCB0ZXh0LTR4bCBtYXgtdy1bNzA4cHhdIGZvbnQtYm9sZCB0ZXh0LXNsYXRlLTkwMFwiPkVuZ2xpc2ggQXNzaXN0YW50PC9oMT5cbiAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbGF0ZS01MDAgbXQtNVwiPmFzayBzbyBmYXI8L3A+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWF4LXcteGwgdy1mdWxsXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IG10LTEwIGl0ZW1zLWNlbnRlciBzcGFjZS14LTNcIj48L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggbXQtMTAgaXRlbXMtY2VudGVyIHNwYWNlLXgtM1wiPjwvZGl2PlxuICAgICAgICAgIDx0ZXh0YXJlYVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIHJvdW5kZWQtbWQgYm9yZGVyLWdyYXktMzAwIHNoYWRvdy1zbSBmb2N1czpib3JkZXItYmxhY2sgZm9jdXM6cmluZy1ibGFjayBteS01XCJcbiAgICAgICAgICAgIHJvd3M9ezV9XG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cImUuZy4gQWJhbmRvblwiXG4gICAgICAgICAgICBzcGVsbENoZWNrPXtmYWxzZX1cbiAgICAgICAgICAgIHZhbHVlPXtxdWVzdGlvbn1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0UXVlc3Rpb24oZS50YXJnZXQudmFsdWUpfSAgICAgICAgICBcbiAgICAgICAgICA+PC90ZXh0YXJlYT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggbXQtMTAgaXRlbXMtY2VudGVyIHNwYWNlLXgtM1wiPjwvZGl2PlxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLWJsYWNrIHJvdW5kZWQteGwgdGV4dC13aGl0ZSBmb250LW1lZGl1bSBweC00IHB5LTIgc206bXQtMTAgbXQtOCBob3ZlcjpiZy1ibGFjay84MCB3LWZ1bGxcIlxuICAgICAgICAgICAgb25DbGljaz17Z2VuZXJhdGVBbnN3ZXJ9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgR2V0IEFuc3dlclxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTEwIG15LTEwXCI+XG4gICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInNtOnRleHQtNHhsIHRleHQtM3hsIGZvbnQtYm9sZCB0ZXh0LXNsYXRlLTkwMCBteC1hdXRvXCI+QW5zd2VyIENvbnRlbnQ8L2gyPlxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGFuc3dlciAmJlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTggZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgbWF4LXcteGwgbXgtYXV0b1wiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXdoaXRlIHJvdW5kZWQteGwgc2hhZG93LW1kIHAtNCBob3ZlcjpiZy1ncmF5LTEwMCB0cmFuc2l0aW9uIGN1cnNvci1jb3B5IGJvcmRlclwiPnthbnN3ZXJ9PC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICB9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9tYWluPlxuICAgIDwvPlxuICApXG59XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJIZWFkIiwiSG9tZSIsImFuc3dlciIsInNldEFuc3dlciIsInF1ZXN0aW9uIiwic2V0UXVlc3Rpb24iLCJwcm9tcHQiLCJnZW5lcmF0ZUFuc3dlciIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInJlc3BvbnNlIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJvayIsImNvbnNvbGUiLCJlcnJvciIsInN0YXR1c1RleHQiLCJyZXN1bHQiLCJqc29uIiwiY2hvaWNlcyIsIm1lc3NhZ2UiLCJjb250ZW50IiwidGl0bGUiLCJtZXRhIiwibmFtZSIsImxpbmsiLCJyZWwiLCJocmVmIiwibWFpbiIsImNsYXNzTmFtZSIsImgxIiwicCIsImRpdiIsInRleHRhcmVhIiwicm93cyIsInBsYWNlaG9sZGVyIiwic3BlbGxDaGVjayIsInZhbHVlIiwib25DaGFuZ2UiLCJ0YXJnZXQiLCJidXR0b24iLCJvbkNsaWNrIiwiaDIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ }),

/***/ "./node_modules/next/head.js":
/*!***********************************!*\
  !*** ./node_modules/next/head.js ***!
  \***********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval(__webpack_require__.ts("module.exports = __webpack_require__(/*! ./dist/shared/lib/head */ \"./node_modules/next/dist/shared/lib/head.js\")\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9oZWFkLmpzLmpzIiwibWFwcGluZ3MiOiJBQUFBLGlIQUFrRCIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbmV4dC9oZWFkLmpzPzg4NDkiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3Qvc2hhcmVkL2xpYi9oZWFkJylcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/next/head.js\n"));

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["pages/_app","main"], function() { return __webpack_exec__("./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?absolutePagePath=%2FUsers%2Fshuncheng%2FDocuments%2Fenglish-assistant%2Fpages%2Findex.tsx&page=%2F!"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);