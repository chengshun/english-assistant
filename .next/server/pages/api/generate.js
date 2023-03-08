"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/generate";
exports.ids = ["pages/api/generate"];
exports.modules = {

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("dotenv");

/***/ }),

/***/ "(api)/./pages/api/generate.ts":
/*!*******************************!*\
  !*** ./pages/api/generate.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dotenv */ \"dotenv\");\n/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dotenv__WEBPACK_IMPORTED_MODULE_0__);\n\ndotenv__WEBPACK_IMPORTED_MODULE_0__.config();\n// const controller = new AbortController()\n// const timeoutId = setTimeout(() => controller.abort(), 12000)\nasync function handler(req, res) {\n    const { prompt  } = req.body;\n    const payload = {\n        model: \"gpt-3.5-turbo\",\n        messages: [\n            {\n                \"role\": \"system\",\n                \"content\": \"You are a helpful assistant that help learning English.\"\n            },\n            {\n                \"role\": \"user\",\n                \"content\": prompt\n            }\n        ]\n    };\n    const response = await fetch(\"https://api.openai.com/v1/chat/completions\", {\n        // signal: controller.signal,\n        headers: {\n            \"Content-Type\": \"application/json\",\n            Authorization: `Bearer ${process.env.OPENAI_API_KEY ?? \"\"}`\n        },\n        method: \"POST\",\n        body: JSON.stringify(payload),\n        redirect: \"follow\"\n    });\n    // clearTimeout(timeoutId);\n    const json = await response.json();\n    res.status(200).json(json);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZ2VuZXJhdGUudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQWdDO0FBRWhDQSwwQ0FBYTtBQUViLDJDQUEyQztBQUMzQyxnRUFBZ0U7QUFFakQsZUFBZUUsUUFBUUMsR0FBUSxFQUFFQyxHQUFRLEVBQUU7SUFDeEQsTUFBTSxFQUFFQyxPQUFNLEVBQUUsR0FBR0YsSUFBSUcsSUFBSTtJQUUzQixNQUFNQyxVQUFVO1FBQ2RDLE9BQU87UUFDUEMsVUFBVTtZQUNSO2dCQUFFLFFBQVE7Z0JBQVUsV0FBVztZQUEwRDtZQUN6RjtnQkFBRSxRQUFRO2dCQUFRLFdBQVdKO1lBQU87U0FDckM7SUFDSDtJQUVBLE1BQU1LLFdBQVcsTUFBTUMsTUFBTSw4Q0FBOEM7UUFDekUsNkJBQTZCO1FBQzdCQyxTQUFTO1lBQ1AsZ0JBQWdCO1lBQ2hCQyxlQUFlLENBQUMsT0FBTyxFQUFFQyxRQUFRQyxHQUFHLENBQUNDLGNBQWMsSUFBSSxHQUFHLENBQUM7UUFDN0Q7UUFDQUMsUUFBUTtRQUNSWCxNQUFNWSxLQUFLQyxTQUFTLENBQUNaO1FBQ3JCYSxVQUFVO0lBQ1o7SUFDQSwyQkFBMkI7SUFFM0IsTUFBTUMsT0FBTyxNQUFNWCxTQUFTVyxJQUFJO0lBQ2hDakIsSUFBSWtCLE1BQU0sQ0FBQyxLQUFLRCxJQUFJLENBQUNBO0FBQ3ZCLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lbmdsaXNoLWFzc2lzdGFudC8uL3BhZ2VzL2FwaS9nZW5lcmF0ZS50cz8yNjVlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGRvdGVudiBmcm9tICdkb3RlbnYnXG5cbmRvdGVudi5jb25maWcoKTtcblxuLy8gY29uc3QgY29udHJvbGxlciA9IG5ldyBBYm9ydENvbnRyb2xsZXIoKVxuLy8gY29uc3QgdGltZW91dElkID0gc2V0VGltZW91dCgoKSA9PiBjb250cm9sbGVyLmFib3J0KCksIDEyMDAwKVxuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcTogYW55LCByZXM6IGFueSkge1xuICBjb25zdCB7IHByb21wdCB9ID0gcmVxLmJvZHk7XG5cbiAgY29uc3QgcGF5bG9hZCA9IHtcbiAgICBtb2RlbDogXCJncHQtMy41LXR1cmJvXCIsXG4gICAgbWVzc2FnZXM6IFtcbiAgICAgIHsgXCJyb2xlXCI6IFwic3lzdGVtXCIsIFwiY29udGVudFwiOiBcIllvdSBhcmUgYSBoZWxwZnVsIGFzc2lzdGFudCB0aGF0IGhlbHAgbGVhcm5pbmcgRW5nbGlzaC5cIiB9LFxuICAgICAgeyBcInJvbGVcIjogXCJ1c2VyXCIsIFwiY29udGVudFwiOiBwcm9tcHQgfVxuICAgIF0sXG4gIH07XG5cbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcImh0dHBzOi8vYXBpLm9wZW5haS5jb20vdjEvY2hhdC9jb21wbGV0aW9uc1wiLCB7XG4gICAgLy8gc2lnbmFsOiBjb250cm9sbGVyLnNpZ25hbCxcbiAgICBoZWFkZXJzOiB7XG4gICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHtwcm9jZXNzLmVudi5PUEVOQUlfQVBJX0tFWSA/PyBcIlwifWAsXG4gICAgfSxcbiAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHBheWxvYWQpLFxuICAgIHJlZGlyZWN0OiAnZm9sbG93J1xuICB9KTtcbiAgLy8gY2xlYXJUaW1lb3V0KHRpbWVvdXRJZCk7XG5cbiAgY29uc3QganNvbiA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgcmVzLnN0YXR1cygyMDApLmpzb24oanNvbik7XG59Il0sIm5hbWVzIjpbImRvdGVudiIsImNvbmZpZyIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJwcm9tcHQiLCJib2R5IiwicGF5bG9hZCIsIm1vZGVsIiwibWVzc2FnZXMiLCJyZXNwb25zZSIsImZldGNoIiwiaGVhZGVycyIsIkF1dGhvcml6YXRpb24iLCJwcm9jZXNzIiwiZW52IiwiT1BFTkFJX0FQSV9LRVkiLCJtZXRob2QiLCJKU09OIiwic3RyaW5naWZ5IiwicmVkaXJlY3QiLCJqc29uIiwic3RhdHVzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/generate.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/generate.ts"));
module.exports = __webpack_exports__;

})();