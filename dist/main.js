/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss ***!
  \*****************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! assets/background.png */ "./src/assets/background.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;900&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  box-sizing: border-box;\n}\n\nbody {\n  margin: 0;\n  color: white;\n  font-family: \"Roboto\", sans-serif;\n  background-color: #232323;\n}\n\n.wrapper {\n  overflow: auto;\n  margin: 0 auto;\n  max-width: 1000px;\n  min-height: 100vh;\n}\n\nbutton, a {\n  transition: 0.2s all;\n}\n\nnav {\n  position: absolute;\n  top: 40px;\n  left: 0;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  gap: 30px;\n}\nnav button {\n  appearance: none;\n  border: none;\n  background: none;\n  color: white;\n  font-size: 1rem;\n  padding: 0;\n  font-weight: normal;\n  min-width: 70px;\n}\nnav button:hover {\n  color: #f2c378;\n  font-weight: bold;\n  letter-spacing: -0.5px;\n  text-decoration: 1px underline #f2c378;\n  text-underline-offset: 5px;\n}\n\n.main-page {\n  height: 100vh;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-position: center;\n  background-size: cover;\n  text-align: center;\n  padding-top: 200px;\n}\n.main-page .wrapper {\n  min-height: 0;\n}\n.main-page h1 {\n  font-weight: 900;\n}\n.main-page p {\n  font-weight: 300;\n  line-height: 2rem;\n}\n.main-page button {\n  margin-top: 3rem;\n}\n\nbutton {\n  cursor: pointer;\n  appearance: none;\n  background-color: #f2c378;\n  color: #232323;\n  font-weight: 900;\n  padding: 16px 80px;\n  border-radius: 5px;\n  border: none;\n}\nbutton:hover {\n  opacity: 0.9;\n}\nbutton:active {\n  opacity: 0.8;\n}\n\nh2 {\n  color: #f2c378;\n  font-weight: normal;\n  font-size: 3rem;\n  text-align: center;\n}\n\n.card-container {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));\n  gap: 30px;\n  padding: 0 50px;\n}\n.card-container .product-card {\n  background-color: #393939;\n  box-shadow: #232323 0 0 10px 6px;\n  border-radius: 10px;\n}\n.card-container .product-card .product-card-img {\n  width: 100%;\n  height: 200px;\n  object-fit: cover;\n  border-radius: 10px 10px 0 0;\n}\n.card-container .product-card .description-container {\n  margin: 0 20px;\n}\n.card-container .product-card .description-container p {\n  font-weight: bold;\n  letter-spacing: 0.5px;\n}\n.card-container .product-card .description-container .cooking-time-container {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.card-container .product-card .description-container .cooking-time-container span {\n  font-size: 0.9rem;\n}\n.card-container .product-card .description-container .cooking-time-container img {\n  height: 1.6rem;\n}\n.card-container .product-card .description-container .bottom-container {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin: 1.4rem 0;\n}\n.card-container .product-card .description-container .bottom-container .grading-container {\n  display: flex;\n  gap: 4px;\n}\n.card-container .product-card .description-container .bottom-container .grading-container img {\n  height: 0.8rem;\n}\n.card-container .product-card .description-container .bottom-container a {\n  font-weight: bold;\n  text-decoration: none;\n  border-bottom: #f2c378 1px solid;\n  color: #f2c378;\n  padding: 5px 10px;\n}\n.card-container .product-card .description-container .bottom-container a:hover {\n  opacity: 0.8;\n}\n\n.our-story {\n  display: flex;\n  align-items: center;\n}\n.our-story h2 {\n  text-align: left;\n  margin: 1.4rem 0;\n}\n.our-story p {\n  line-height: 1.65rem;\n}\n.our-story .image-container {\n  height: 500px;\n  display: flex;\n  justify-content: center;\n  align-items: flex-end;\n}\n.our-story .image-container div {\n  flex: 0;\n}\n.our-story .image-container div:last-child {\n  align-self: flex-start;\n}\n.our-story .image-container img {\n  width: 200px;\n  height: 220px;\n  object-fit: cover;\n}\n.our-story .image-container img:nth-child(2n+1) {\n  margin: 0 15px 15px 0;\n}\n.our-story a {\n  color: white;\n  text-decoration: none;\n  font-weight: 900;\n  letter-spacing: 1.3px;\n}\n\n.our-story > div {\n  flex: 1;\n}", "",{"version":3,"sources":["webpack://./src/style.scss"],"names":[],"mappings":"AAOA;EACE,sBAAA;AALF;;AAQA;EACE,SAAA;EACA,YAVW;EAWX,iCAAA;EACA,yBAbiB;AAQnB;;AAQA;EACE,cAAA;EACA,cAAA;EACA,iBAAA;EACA,iBAAA;AALF;;AAQA;EACE,oBAAA;AALF;;AAQA;EACE,kBAAA;EACA,SAAA;EACA,OAAA;EACA,WAAA;EACA,aAAA;EACA,uBAAA;EACA,SAAA;AALF;AAOE;EACE,gBAAA;EACA,YAAA;EACA,gBAAA;EACA,YAAA;EACA,eAAA;EACA,UAAA;EACA,mBAAA;EACA,eAAA;AALJ;AAOI;EACE,cAhDS;EAiDT,iBAAA;EACA,sBAAA;EACA,sCAAA;EACA,0BAAA;AALN;;AAUA;EACE,aAAA;EACA,yDAAA;EACA,2BAAA;EACA,sBAAA;EACA,kBAAA;EACA,kBAAA;AAPF;AASE;EACE,aAAA;AAPJ;AAUE;EACE,gBAAA;AARJ;AAWE;EACE,gBAAA;EACA,iBAAA;AATJ;AAYE;EACE,gBAAA;AAVJ;;AAcA;EACE,eAAA;EACA,gBAAA;EACA,yBAtFa;EAuFb,cAtFiB;EAuFjB,gBAAA;EACA,kBAAA;EACA,kBAAA;EACA,YAAA;AAXF;AAaE;EACE,YAAA;AAXJ;AAcE;EACE,YAAA;AAZJ;;AAgBA;EACE,cAvGa;EAwGb,mBAAA;EACA,eAAA;EACA,kBAAA;AAbF;;AAgBA;EACE,aAAA;EACA,2DAAA;EACA,SAAA;EACA,eAAA;AAbF;AAeE;EACE,yBAhHsB;EAiHtB,gCAAA;EACA,mBAAA;AAbJ;AAeI;EACE,WAAA;EACA,aAAA;EACA,iBAAA;EACA,4BAAA;AAbN;AAgBI;EACE,cAAA;AAdN;AAgBM;EACE,iBAAA;EACA,qBAAA;AAdR;AAiBM;EACE,aAAA;EACA,mBAAA;EACA,SAAA;AAfR;AAiBQ;EACE,iBAAA;AAfV;AAkBQ;EACE,cAAA;AAhBV;AAoBM;EACE,aAAA;EACA,8BAAA;EACA,mBAAA;EACA,gBAAA;AAlBR;AAoBQ;EACE,aAAA;EACA,QAAA;AAlBV;AAoBU;EACE,cAAA;AAlBZ;AAsBQ;EACE,iBAAA;EACA,qBAAA;EACA,gCAAA;EACA,cAxKK;EAyKL,iBAAA;AApBV;AAsBU;EACE,YAAA;AApBZ;;AA4BA;EACE,aAAA;EACA,mBAAA;AAzBF;AA2BE;EACE,gBAAA;EACA,gBAAA;AAzBJ;AA4BE;EACE,oBAAA;AA1BJ;AA6BE;EACE,aAAA;EACA,aAAA;EACA,uBAAA;EACA,qBAAA;AA3BJ;AA6BI;EACE,OAAA;AA3BN;AA8BI;EACE,sBAAA;AA5BN;AA+BI;EACE,YAAA;EACA,aAAA;EACA,iBAAA;AA7BN;AAgCI;EACE,qBAAA;AA9BN;AAkCE;EACE,YAAA;EACA,qBAAA;EACA,gBAAA;EACA,qBAAA;AAhCJ;;AAoCA;EACE,OAAA;AAjCF","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;900&display=swap');\n$accent-color: #f2c378;\n$background-color: #232323;\n$font-color: white;\n$font-color-button: $background-color;\n$content-card-background: #393939;\n\n*{\n  box-sizing: border-box;\n}\n\nbody{\n  margin: 0;\n  color: $font-color;\n  font-family: 'Roboto', sans-serif;\n  background-color: $background-color;\n}\n\n.wrapper{\n  overflow: auto;\n  margin: 0 auto;\n  max-width: 1000px;\n  min-height: 100vh;\n}\n\nbutton, a{\n  transition: 0.2s all;\n}\n\nnav{\n  position: absolute;\n  top: 40px;\n  left: 0;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  gap:30px;\n\n  button{\n    appearance: none;\n    border: none;\n    background: none;\n    color: white;\n    font-size: 1rem;\n    padding:0;\n    font-weight: normal;\n    min-width: 70px;\n\n    &:hover{\n      color: $accent-color;\n      font-weight: bold;\n      letter-spacing: -0.5px;\n      text-decoration: 1px underline $accent-color;\n      text-underline-offset: 5px;      \n    }\n  }\n}\n\n.main-page{\n  height: 100vh;\n  background-image: url(assets/background.png);\n  background-position: center;\n  background-size: cover;\n  text-align: center;\n  padding-top: 200px;\n\n  .wrapper{\n    min-height: 0;\n  }\n\n  h1{\n    font-weight: 900;\n  }\n\n  p{\n    font-weight: 300;\n    line-height: 2rem;\n  }\n\n  button{\n    margin-top: 3rem;\n  }\n}\n\nbutton{\n  cursor: pointer;\n  appearance: none;\n  background-color: $accent-color;\n  color: $font-color-button;\n  font-weight: 900;\n  padding: 16px 80px;\n  border-radius: 5px;\n  border: none;\n\n  &:hover{\n    opacity: 0.9;\n  }\n\n  &:active{\n    opacity: 0.8;\n  }\n}\n\nh2{\n  color: $accent-color;\n  font-weight: normal;\n  font-size: 3rem;\n  text-align: center;\n}\n\n.card-container{\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(230px,1fr));\n  gap: 30px;\n  padding: 0 50px;\n\n  .product-card{\n    background-color: $content-card-background;\n    box-shadow: $background-color 0 0 10px 6px;\n    border-radius: 10px;\n\n    .product-card-img{\n      width: 100%;\n      height: 200px;\n      object-fit: cover;\n      border-radius: 10px 10px 0 0;\n    }\n\n    .description-container{\n      margin: 0 20px;\n\n      p{\n        font-weight: bold;\n        letter-spacing: 0.5px;\n      }\n\n      .cooking-time-container {\n        display: flex;\n        align-items: center;\n        gap: 10px;\n\n        span{\n          font-size: 0.9rem;\n        }\n\n        img{\n          height: 1.6rem;\n        }\n      }\n\n      .bottom-container{\n        display: flex;\n        justify-content: space-between;\n        align-items: center;\n        margin: 1.4rem 0;\n\n        .grading-container{\n          display: flex;\n          gap: 4px;\n  \n          img{\n            height: 0.8rem;\n          }\n        }\n\n        a{\n          font-weight: bold;\n          text-decoration: none;\n          border-bottom:  $accent-color 1px solid;\n          color: $accent-color;\n          padding: 5px 10px;\n\n          &:hover{\n            opacity: 0.8;\n          }\n        }\n      }\n    }\n  }\n}\n\n.our-story{\n  display: flex;\n  align-items: center;\n\n  h2{\n    text-align:left;\n    margin: 1.4rem 0;\n  }\n\n  p{\n    line-height: 1.65rem;\n  }\n\n  .image-container{\n    height: 500px;\n    display: flex;\n    justify-content: center;\n    align-items: flex-end;\n  \n    div {\n      flex: 0;\n    }\n  \n    div:last-child{\n      align-self: flex-start;\n    }\n  \n    img {\n      width: 200px;\n      height: 220px;\n      object-fit: cover;\n    }\n  \n    img:nth-child(2n + 1){\n      margin: 0 15px 15px 0;\n    }\n  }\n\n  a{\n    color: white;\n    text-decoration: none;\n    font-weight: 900;\n    letter-spacing: 1.3px;\n  }\n}\n\n.our-story > div{\n  flex: 1;\n}"],"sourceRoot":""}]);
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
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./style.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
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
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
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
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/modules/aboutUs.js":
/*!********************************!*\
  !*** ./src/modules/aboutUs.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createAboutUs)
/* harmony export */ });
/* harmony import */ var _assets_img_1_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/img_1.jpg */ "./src/assets/img_1.jpg");
/* harmony import */ var _assets_img_2_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/img_2.jpg */ "./src/assets/img_2.jpg");
/* harmony import */ var _assets_img_3_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/img_3.jpg */ "./src/assets/img_3.jpg");
/* harmony import */ var _assets_img_4_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/img_4.jpg */ "./src/assets/img_4.jpg");





function createAboutUs() {
  const root = document.body;//remove in the future
  const wrapper = document.createElement('div');
  const h2 = document.createElement('h2');
  const descriptionContain = document.createElement('div');
  const imgContainer = document.createElement('div');
  const imgInnerContainerOne = document.createElement('div');
  const imgInnerContainerTwo = document.createElement('div');
  const text = document.createElement('p');
  const link = document.createElement('a');
  const imgOne = document.createElement('img');
  const imgTwo = document.createElement('img');
  const imgThree = document.createElement('img');
  const imgFour = document.createElement('img');

  wrapper.classList.add('wrapper');
  wrapper.classList.add('our-story');
  descriptionContain.classList.add('description-container');
  imgContainer.classList.add('image-container');

  h2.textContent = "Our Story";
  text.textContent = "Our restaurant story starts with my uncle. My uncle had a restaurant called, Avec. That restaurant closed. A couple years ago my husband and I decided to buy the rights to my uncle's restaurant and start a restaurant. For the first couple years we worked really hard on our restaurant. After two years it began to make money and we got excited.";
  link.textContent = "More About us"
  link.href = "#"
  imgOne.src = _assets_img_1_jpg__WEBPACK_IMPORTED_MODULE_0__;
  imgTwo.src = _assets_img_2_jpg__WEBPACK_IMPORTED_MODULE_1__;
  imgThree.src = _assets_img_3_jpg__WEBPACK_IMPORTED_MODULE_2__;
  imgFour.src = _assets_img_4_jpg__WEBPACK_IMPORTED_MODULE_3__;

  descriptionContain.appendChild(h2);
  descriptionContain.appendChild(text);
  descriptionContain.appendChild(link);
  imgInnerContainerOne.appendChild(imgOne);
  imgInnerContainerOne.appendChild(imgTwo);
  imgInnerContainerTwo.appendChild(imgThree);
  imgInnerContainerTwo.appendChild(imgFour);
  imgContainer.appendChild(imgInnerContainerOne);
  imgContainer.appendChild(imgInnerContainerTwo);
  wrapper.appendChild(imgContainer);
  wrapper.appendChild(descriptionContain);
  root.appendChild(wrapper);//remove in the future

  return wrapper;
}

/***/ }),

/***/ "./src/modules/header.js":
/*!*******************************!*\
  !*** ./src/modules/header.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createHeader)
/* harmony export */ });
function createHeader() {
  const nav = document.createElement('nav');
  const homeButton = createBtn('Home', () => console.log('test'))
  const menuButton = createBtn('Menu', () => console.log('test'))
  const aboutUsButton = createBtn('About us', () => console.log('test'));
  
  nav.appendChild(homeButton);
  nav.appendChild(menuButton);
  nav.appendChild(aboutUsButton);

  return nav;
}

function createBtn(text, onClick) {
  const button = document.createElement('button');
  button.textContent = text;
  button.addEventListener('click', onClick);
  return button;
}

/***/ }),

/***/ "./src/modules/homePage.js":
/*!*********************************!*\
  !*** ./src/modules/homePage.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createMainPage)
/* harmony export */ });
function createMainPage() {;
  const mainPage = document.createElement('div');
  const wrapper = document.createElement('div');
  const h1 = document.createElement('h1');
  const p = document.createElement('p');
  const button = document.createElement('button');

  mainPage.classList.add('main-page');
  wrapper.classList.add('wrapper');

  h1.textContent = 'Good Food, Great Vibe';
  p.textContent = 'We serve nice food and provide a great place for people to relax with friends, family and colleagues, many of whom have been coming to our restaurants for years.'
  button.textContent = 'Book A Table';

  mainPage.appendChild(wrapper);
  wrapper.appendChild(h1);
  wrapper.appendChild(p);
  wrapper.appendChild(button);

  return mainPage
}


/***/ }),

/***/ "./src/modules/initialize.js":
/*!***********************************!*\
  !*** ./src/modules/initialize.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ init)
/* harmony export */ });
/* harmony import */ var _homePage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./homePage */ "./src/modules/homePage.js");
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header */ "./src/modules/header.js");



function init() {
  const root = document.body;
  const main = document.createElement('main');

  root.appendChild((0,_header__WEBPACK_IMPORTED_MODULE_1__["default"])());
  root.appendChild(main);
  main.appendChild((0,_homePage__WEBPACK_IMPORTED_MODULE_0__["default"])());
}


/***/ }),

/***/ "./src/assets/background.png":
/*!***********************************!*\
  !*** ./src/assets/background.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3c161030c65173936776.png";

/***/ }),

/***/ "./src/assets/img_1.jpg":
/*!******************************!*\
  !*** ./src/assets/img_1.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0c0849df22c2ba55bccc.jpg";

/***/ }),

/***/ "./src/assets/img_2.jpg":
/*!******************************!*\
  !*** ./src/assets/img_2.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "995379ef56a6dc70809c.jpg";

/***/ }),

/***/ "./src/assets/img_3.jpg":
/*!******************************!*\
  !*** ./src/assets/img_3.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "28e0c24d007d744aa9f3.jpg";

/***/ }),

/***/ "./src/assets/img_4.jpg":
/*!******************************!*\
  !*** ./src/assets/img_4.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1bb55c826ba870f12242.jpg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");
/* harmony import */ var _modules_initialize__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/initialize */ "./src/modules/initialize.js");
/* harmony import */ var _modules_aboutUs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/aboutUs */ "./src/modules/aboutUs.js");




//init();

(0,_modules_aboutUs__WEBPACK_IMPORTED_MODULE_2__["default"])();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3N0eWxlLnNjc3MiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZS5zY3NzPzc1YmEiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbW9kdWxlcy9hYm91dFVzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tb2R1bGVzL2hlYWRlci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbW9kdWxlcy9ob21lUGFnZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbW9kdWxlcy9pbml0aWFsaXplLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCJhc3NldHMvYmFja2dyb3VuZC5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJvYm90bzp3Z2h0QDMwMDs0MDA7OTAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmJvZHkge1xcbiAgbWFyZ2luOiAwO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJSb2JvdG9cXFwiLCBzYW5zLXNlcmlmO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIzMjMyMztcXG59XFxuXFxuLndyYXBwZXIge1xcbiAgb3ZlcmZsb3c6IGF1dG87XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIG1heC13aWR0aDogMTAwMHB4O1xcbiAgbWluLWhlaWdodDogMTAwdmg7XFxufVxcblxcbmJ1dHRvbiwgYSB7XFxuICB0cmFuc2l0aW9uOiAwLjJzIGFsbDtcXG59XFxuXFxubmF2IHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogNDBweDtcXG4gIGxlZnQ6IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGdhcDogMzBweDtcXG59XFxubmF2IGJ1dHRvbiB7XFxuICBhcHBlYXJhbmNlOiBub25lO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZDogbm9uZTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIHBhZGRpbmc6IDA7XFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgbWluLXdpZHRoOiA3MHB4O1xcbn1cXG5uYXYgYnV0dG9uOmhvdmVyIHtcXG4gIGNvbG9yOiAjZjJjMzc4O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBsZXR0ZXItc3BhY2luZzogLTAuNXB4O1xcbiAgdGV4dC1kZWNvcmF0aW9uOiAxcHggdW5kZXJsaW5lICNmMmMzNzg7XFxuICB0ZXh0LXVuZGVybGluZS1vZmZzZXQ6IDVweDtcXG59XFxuXFxuLm1haW4tcGFnZSB7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBwYWRkaW5nLXRvcDogMjAwcHg7XFxufVxcbi5tYWluLXBhZ2UgLndyYXBwZXIge1xcbiAgbWluLWhlaWdodDogMDtcXG59XFxuLm1haW4tcGFnZSBoMSB7XFxuICBmb250LXdlaWdodDogOTAwO1xcbn1cXG4ubWFpbi1wYWdlIHAge1xcbiAgZm9udC13ZWlnaHQ6IDMwMDtcXG4gIGxpbmUtaGVpZ2h0OiAycmVtO1xcbn1cXG4ubWFpbi1wYWdlIGJ1dHRvbiB7XFxuICBtYXJnaW4tdG9wOiAzcmVtO1xcbn1cXG5cXG5idXR0b24ge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYXBwZWFyYW5jZTogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMmMzNzg7XFxuICBjb2xvcjogIzIzMjMyMztcXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XFxuICBwYWRkaW5nOiAxNnB4IDgwcHg7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBib3JkZXI6IG5vbmU7XFxufVxcbmJ1dHRvbjpob3ZlciB7XFxuICBvcGFjaXR5OiAwLjk7XFxufVxcbmJ1dHRvbjphY3RpdmUge1xcbiAgb3BhY2l0eTogMC44O1xcbn1cXG5cXG5oMiB7XFxuICBjb2xvcjogI2YyYzM3ODtcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICBmb250LXNpemU6IDNyZW07XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5jYXJkLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgyMzBweCwgMWZyKSk7XFxuICBnYXA6IDMwcHg7XFxuICBwYWRkaW5nOiAwIDUwcHg7XFxufVxcbi5jYXJkLWNvbnRhaW5lciAucHJvZHVjdC1jYXJkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzOTM5Mzk7XFxuICBib3gtc2hhZG93OiAjMjMyMzIzIDAgMCAxMHB4IDZweDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcbi5jYXJkLWNvbnRhaW5lciAucHJvZHVjdC1jYXJkIC5wcm9kdWN0LWNhcmQtaW1nIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAyMDBweDtcXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweCAxMHB4IDAgMDtcXG59XFxuLmNhcmQtY29udGFpbmVyIC5wcm9kdWN0LWNhcmQgLmRlc2NyaXB0aW9uLWNvbnRhaW5lciB7XFxuICBtYXJnaW46IDAgMjBweDtcXG59XFxuLmNhcmQtY29udGFpbmVyIC5wcm9kdWN0LWNhcmQgLmRlc2NyaXB0aW9uLWNvbnRhaW5lciBwIHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xcbn1cXG4uY2FyZC1jb250YWluZXIgLnByb2R1Y3QtY2FyZCAuZGVzY3JpcHRpb24tY29udGFpbmVyIC5jb29raW5nLXRpbWUtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAxMHB4O1xcbn1cXG4uY2FyZC1jb250YWluZXIgLnByb2R1Y3QtY2FyZCAuZGVzY3JpcHRpb24tY29udGFpbmVyIC5jb29raW5nLXRpbWUtY29udGFpbmVyIHNwYW4ge1xcbiAgZm9udC1zaXplOiAwLjlyZW07XFxufVxcbi5jYXJkLWNvbnRhaW5lciAucHJvZHVjdC1jYXJkIC5kZXNjcmlwdGlvbi1jb250YWluZXIgLmNvb2tpbmctdGltZS1jb250YWluZXIgaW1nIHtcXG4gIGhlaWdodDogMS42cmVtO1xcbn1cXG4uY2FyZC1jb250YWluZXIgLnByb2R1Y3QtY2FyZCAuZGVzY3JpcHRpb24tY29udGFpbmVyIC5ib3R0b20tY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgbWFyZ2luOiAxLjRyZW0gMDtcXG59XFxuLmNhcmQtY29udGFpbmVyIC5wcm9kdWN0LWNhcmQgLmRlc2NyaXB0aW9uLWNvbnRhaW5lciAuYm90dG9tLWNvbnRhaW5lciAuZ3JhZGluZy1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogNHB4O1xcbn1cXG4uY2FyZC1jb250YWluZXIgLnByb2R1Y3QtY2FyZCAuZGVzY3JpcHRpb24tY29udGFpbmVyIC5ib3R0b20tY29udGFpbmVyIC5ncmFkaW5nLWNvbnRhaW5lciBpbWcge1xcbiAgaGVpZ2h0OiAwLjhyZW07XFxufVxcbi5jYXJkLWNvbnRhaW5lciAucHJvZHVjdC1jYXJkIC5kZXNjcmlwdGlvbi1jb250YWluZXIgLmJvdHRvbS1jb250YWluZXIgYSB7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGJvcmRlci1ib3R0b206ICNmMmMzNzggMXB4IHNvbGlkO1xcbiAgY29sb3I6ICNmMmMzNzg7XFxuICBwYWRkaW5nOiA1cHggMTBweDtcXG59XFxuLmNhcmQtY29udGFpbmVyIC5wcm9kdWN0LWNhcmQgLmRlc2NyaXB0aW9uLWNvbnRhaW5lciAuYm90dG9tLWNvbnRhaW5lciBhOmhvdmVyIHtcXG4gIG9wYWNpdHk6IDAuODtcXG59XFxuXFxuLm91ci1zdG9yeSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLm91ci1zdG9yeSBoMiB7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgbWFyZ2luOiAxLjRyZW0gMDtcXG59XFxuLm91ci1zdG9yeSBwIHtcXG4gIGxpbmUtaGVpZ2h0OiAxLjY1cmVtO1xcbn1cXG4ub3VyLXN0b3J5IC5pbWFnZS1jb250YWluZXIge1xcbiAgaGVpZ2h0OiA1MDBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcXG59XFxuLm91ci1zdG9yeSAuaW1hZ2UtY29udGFpbmVyIGRpdiB7XFxuICBmbGV4OiAwO1xcbn1cXG4ub3VyLXN0b3J5IC5pbWFnZS1jb250YWluZXIgZGl2Omxhc3QtY2hpbGQge1xcbiAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcXG59XFxuLm91ci1zdG9yeSAuaW1hZ2UtY29udGFpbmVyIGltZyB7XFxuICB3aWR0aDogMjAwcHg7XFxuICBoZWlnaHQ6IDIyMHB4O1xcbiAgb2JqZWN0LWZpdDogY292ZXI7XFxufVxcbi5vdXItc3RvcnkgLmltYWdlLWNvbnRhaW5lciBpbWc6bnRoLWNoaWxkKDJuKzEpIHtcXG4gIG1hcmdpbjogMCAxNXB4IDE1cHggMDtcXG59XFxuLm91ci1zdG9yeSBhIHtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XFxuICBsZXR0ZXItc3BhY2luZzogMS4zcHg7XFxufVxcblxcbi5vdXItc3RvcnkgPiBkaXYge1xcbiAgZmxleDogMTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBT0E7RUFDRSxzQkFBQTtBQUxGOztBQVFBO0VBQ0UsU0FBQTtFQUNBLFlBVlc7RUFXWCxpQ0FBQTtFQUNBLHlCQWJpQjtBQVFuQjs7QUFRQTtFQUNFLGNBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtBQUxGOztBQVFBO0VBQ0Usb0JBQUE7QUFMRjs7QUFRQTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsU0FBQTtBQUxGO0FBT0U7RUFDRSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQUxKO0FBT0k7RUFDRSxjQWhEUztFQWlEVCxpQkFBQTtFQUNBLHNCQUFBO0VBQ0Esc0NBQUE7RUFDQSwwQkFBQTtBQUxOOztBQVVBO0VBQ0UsYUFBQTtFQUNBLHlEQUFBO0VBQ0EsMkJBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUFQRjtBQVNFO0VBQ0UsYUFBQTtBQVBKO0FBVUU7RUFDRSxnQkFBQTtBQVJKO0FBV0U7RUFDRSxnQkFBQTtFQUNBLGlCQUFBO0FBVEo7QUFZRTtFQUNFLGdCQUFBO0FBVko7O0FBY0E7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkF0RmE7RUF1RmIsY0F0RmlCO0VBdUZqQixnQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FBWEY7QUFhRTtFQUNFLFlBQUE7QUFYSjtBQWNFO0VBQ0UsWUFBQTtBQVpKOztBQWdCQTtFQUNFLGNBdkdhO0VBd0diLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FBYkY7O0FBZ0JBO0VBQ0UsYUFBQTtFQUNBLDJEQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7QUFiRjtBQWVFO0VBQ0UseUJBaEhzQjtFQWlIdEIsZ0NBQUE7RUFDQSxtQkFBQTtBQWJKO0FBZUk7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsNEJBQUE7QUFiTjtBQWdCSTtFQUNFLGNBQUE7QUFkTjtBQWdCTTtFQUNFLGlCQUFBO0VBQ0EscUJBQUE7QUFkUjtBQWlCTTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7QUFmUjtBQWlCUTtFQUNFLGlCQUFBO0FBZlY7QUFrQlE7RUFDRSxjQUFBO0FBaEJWO0FBb0JNO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQWxCUjtBQW9CUTtFQUNFLGFBQUE7RUFDQSxRQUFBO0FBbEJWO0FBb0JVO0VBQ0UsY0FBQTtBQWxCWjtBQXNCUTtFQUNFLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSxnQ0FBQTtFQUNBLGNBeEtLO0VBeUtMLGlCQUFBO0FBcEJWO0FBc0JVO0VBQ0UsWUFBQTtBQXBCWjs7QUE0QkE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7QUF6QkY7QUEyQkU7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0FBekJKO0FBNEJFO0VBQ0Usb0JBQUE7QUExQko7QUE2QkU7RUFDRSxhQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EscUJBQUE7QUEzQko7QUE2Qkk7RUFDRSxPQUFBO0FBM0JOO0FBOEJJO0VBQ0Usc0JBQUE7QUE1Qk47QUErQkk7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0FBN0JOO0FBZ0NJO0VBQ0UscUJBQUE7QUE5Qk47QUFrQ0U7RUFDRSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0FBaENKOztBQW9DQTtFQUNFLE9BQUE7QUFqQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvOndnaHRAMzAwOzQwMDs5MDAmZGlzcGxheT1zd2FwJyk7XFxuJGFjY2VudC1jb2xvcjogI2YyYzM3ODtcXG4kYmFja2dyb3VuZC1jb2xvcjogIzIzMjMyMztcXG4kZm9udC1jb2xvcjogd2hpdGU7XFxuJGZvbnQtY29sb3ItYnV0dG9uOiAkYmFja2dyb3VuZC1jb2xvcjtcXG4kY29udGVudC1jYXJkLWJhY2tncm91bmQ6ICMzOTM5Mzk7XFxuXFxuKntcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmJvZHl7XFxuICBtYXJnaW46IDA7XFxuICBjb2xvcjogJGZvbnQtY29sb3I7XFxuICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmFja2dyb3VuZC1jb2xvcjtcXG59XFxuXFxuLndyYXBwZXJ7XFxuICBvdmVyZmxvdzogYXV0bztcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgbWF4LXdpZHRoOiAxMDAwcHg7XFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXG59XFxuXFxuYnV0dG9uLCBhe1xcbiAgdHJhbnNpdGlvbjogMC4ycyBhbGw7XFxufVxcblxcbm5hdntcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogNDBweDtcXG4gIGxlZnQ6IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGdhcDozMHB4O1xcblxcbiAgYnV0dG9ue1xcbiAgICBhcHBlYXJhbmNlOiBub25lO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJhY2tncm91bmQ6IG5vbmU7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBwYWRkaW5nOjA7XFxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICAgIG1pbi13aWR0aDogNzBweDtcXG5cXG4gICAgJjpob3ZlcntcXG4gICAgICBjb2xvcjogJGFjY2VudC1jb2xvcjtcXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgICBsZXR0ZXItc3BhY2luZzogLTAuNXB4O1xcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogMXB4IHVuZGVybGluZSAkYWNjZW50LWNvbG9yO1xcbiAgICAgIHRleHQtdW5kZXJsaW5lLW9mZnNldDogNXB4OyAgICAgIFxcbiAgICB9XFxuICB9XFxufVxcblxcbi5tYWluLXBhZ2V7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKGFzc2V0cy9iYWNrZ3JvdW5kLnBuZyk7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgcGFkZGluZy10b3A6IDIwMHB4O1xcblxcbiAgLndyYXBwZXJ7XFxuICAgIG1pbi1oZWlnaHQ6IDA7XFxuICB9XFxuXFxuICBoMXtcXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcXG4gIH1cXG5cXG4gIHB7XFxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XFxuICAgIGxpbmUtaGVpZ2h0OiAycmVtO1xcbiAgfVxcblxcbiAgYnV0dG9ue1xcbiAgICBtYXJnaW4tdG9wOiAzcmVtO1xcbiAgfVxcbn1cXG5cXG5idXR0b257XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBhcHBlYXJhbmNlOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogJGFjY2VudC1jb2xvcjtcXG4gIGNvbG9yOiAkZm9udC1jb2xvci1idXR0b247XFxuICBmb250LXdlaWdodDogOTAwO1xcbiAgcGFkZGluZzogMTZweCA4MHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgYm9yZGVyOiBub25lO1xcblxcbiAgJjpob3ZlcntcXG4gICAgb3BhY2l0eTogMC45O1xcbiAgfVxcblxcbiAgJjphY3RpdmV7XFxuICAgIG9wYWNpdHk6IDAuODtcXG4gIH1cXG59XFxuXFxuaDJ7XFxuICBjb2xvcjogJGFjY2VudC1jb2xvcjtcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICBmb250LXNpemU6IDNyZW07XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5jYXJkLWNvbnRhaW5lcntcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDIzMHB4LDFmcikpO1xcbiAgZ2FwOiAzMHB4O1xcbiAgcGFkZGluZzogMCA1MHB4O1xcblxcbiAgLnByb2R1Y3QtY2FyZHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbnRlbnQtY2FyZC1iYWNrZ3JvdW5kO1xcbiAgICBib3gtc2hhZG93OiAkYmFja2dyb3VuZC1jb2xvciAwIDAgMTBweCA2cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuXFxuICAgIC5wcm9kdWN0LWNhcmQtaW1ne1xcbiAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgIGhlaWdodDogMjAwcHg7XFxuICAgICAgb2JqZWN0LWZpdDogY292ZXI7XFxuICAgICAgYm9yZGVyLXJhZGl1czogMTBweCAxMHB4IDAgMDtcXG4gICAgfVxcblxcbiAgICAuZGVzY3JpcHRpb24tY29udGFpbmVye1xcbiAgICAgIG1hcmdpbjogMCAyMHB4O1xcblxcbiAgICAgIHB7XFxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjVweDtcXG4gICAgICB9XFxuXFxuICAgICAgLmNvb2tpbmctdGltZS1jb250YWluZXIge1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICBnYXA6IDEwcHg7XFxuXFxuICAgICAgICBzcGFue1xcbiAgICAgICAgICBmb250LXNpemU6IDAuOXJlbTtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIGltZ3tcXG4gICAgICAgICAgaGVpZ2h0OiAxLjZyZW07XFxuICAgICAgICB9XFxuICAgICAgfVxcblxcbiAgICAgIC5ib3R0b20tY29udGFpbmVye1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICBtYXJnaW46IDEuNHJlbSAwO1xcblxcbiAgICAgICAgLmdyYWRpbmctY29udGFpbmVye1xcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICBnYXA6IDRweDtcXG4gIFxcbiAgICAgICAgICBpbWd7XFxuICAgICAgICAgICAgaGVpZ2h0OiAwLjhyZW07XFxuICAgICAgICAgIH1cXG4gICAgICAgIH1cXG5cXG4gICAgICAgIGF7XFxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgICAgICAgIGJvcmRlci1ib3R0b206ICAkYWNjZW50LWNvbG9yIDFweCBzb2xpZDtcXG4gICAgICAgICAgY29sb3I6ICRhY2NlbnQtY29sb3I7XFxuICAgICAgICAgIHBhZGRpbmc6IDVweCAxMHB4O1xcblxcbiAgICAgICAgICAmOmhvdmVye1xcbiAgICAgICAgICAgIG9wYWNpdHk6IDAuODtcXG4gICAgICAgICAgfVxcbiAgICAgICAgfVxcbiAgICAgIH1cXG4gICAgfVxcbiAgfVxcbn1cXG5cXG4ub3VyLXN0b3J5e1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICBoMntcXG4gICAgdGV4dC1hbGlnbjpsZWZ0O1xcbiAgICBtYXJnaW46IDEuNHJlbSAwO1xcbiAgfVxcblxcbiAgcHtcXG4gICAgbGluZS1oZWlnaHQ6IDEuNjVyZW07XFxuICB9XFxuXFxuICAuaW1hZ2UtY29udGFpbmVye1xcbiAgICBoZWlnaHQ6IDUwMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xcbiAgXFxuICAgIGRpdiB7XFxuICAgICAgZmxleDogMDtcXG4gICAgfVxcbiAgXFxuICAgIGRpdjpsYXN0LWNoaWxke1xcbiAgICAgIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XFxuICAgIH1cXG4gIFxcbiAgICBpbWcge1xcbiAgICAgIHdpZHRoOiAyMDBweDtcXG4gICAgICBoZWlnaHQ6IDIyMHB4O1xcbiAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xcbiAgICB9XFxuICBcXG4gICAgaW1nOm50aC1jaGlsZCgybiArIDEpe1xcbiAgICAgIG1hcmdpbjogMCAxNXB4IDE1cHggMDtcXG4gICAgfVxcbiAgfVxcblxcbiAgYXtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XFxuICAgIGxldHRlci1zcGFjaW5nOiAxLjNweDtcXG4gIH1cXG59XFxuXFxuLm91ci1zdG9yeSA+IGRpdntcXG4gIGZsZXg6IDE7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IGltZ09uZVNyYyBmcm9tICcuLi9hc3NldHMvaW1nXzEuanBnJztcbmltcG9ydCBpbWdUd29TcmMgZnJvbSAnLi4vYXNzZXRzL2ltZ18yLmpwZyc7XG5pbXBvcnQgaW1nVGhyZWVTcmMgZnJvbSAnLi4vYXNzZXRzL2ltZ18zLmpwZyc7XG5pbXBvcnQgaW1nRm91clNyYyBmcm9tICcuLi9hc3NldHMvaW1nXzQuanBnJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlQWJvdXRVcygpIHtcbiAgY29uc3Qgcm9vdCA9IGRvY3VtZW50LmJvZHk7Ly9yZW1vdmUgaW4gdGhlIGZ1dHVyZVxuICBjb25zdCB3cmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IGgyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgY29uc3QgZGVzY3JpcHRpb25Db250YWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IGltZ0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCBpbWdJbm5lckNvbnRhaW5lck9uZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCBpbWdJbm5lckNvbnRhaW5lclR3byA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCB0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBjb25zdCBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICBjb25zdCBpbWdPbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgY29uc3QgaW1nVHdvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gIGNvbnN0IGltZ1RocmVlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gIGNvbnN0IGltZ0ZvdXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcblxuICB3cmFwcGVyLmNsYXNzTGlzdC5hZGQoJ3dyYXBwZXInKTtcbiAgd3JhcHBlci5jbGFzc0xpc3QuYWRkKCdvdXItc3RvcnknKTtcbiAgZGVzY3JpcHRpb25Db250YWluLmNsYXNzTGlzdC5hZGQoJ2Rlc2NyaXB0aW9uLWNvbnRhaW5lcicpO1xuICBpbWdDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnaW1hZ2UtY29udGFpbmVyJyk7XG5cbiAgaDIudGV4dENvbnRlbnQgPSBcIk91ciBTdG9yeVwiO1xuICB0ZXh0LnRleHRDb250ZW50ID0gXCJPdXIgcmVzdGF1cmFudCBzdG9yeSBzdGFydHMgd2l0aCBteSB1bmNsZS4gTXkgdW5jbGUgaGFkIGEgcmVzdGF1cmFudCBjYWxsZWQsIEF2ZWMuIFRoYXQgcmVzdGF1cmFudCBjbG9zZWQuIEEgY291cGxlIHllYXJzIGFnbyBteSBodXNiYW5kIGFuZCBJIGRlY2lkZWQgdG8gYnV5IHRoZSByaWdodHMgdG8gbXkgdW5jbGUncyByZXN0YXVyYW50IGFuZCBzdGFydCBhIHJlc3RhdXJhbnQuIEZvciB0aGUgZmlyc3QgY291cGxlIHllYXJzIHdlIHdvcmtlZCByZWFsbHkgaGFyZCBvbiBvdXIgcmVzdGF1cmFudC4gQWZ0ZXIgdHdvIHllYXJzIGl0IGJlZ2FuIHRvIG1ha2UgbW9uZXkgYW5kIHdlIGdvdCBleGNpdGVkLlwiO1xuICBsaW5rLnRleHRDb250ZW50ID0gXCJNb3JlIEFib3V0IHVzXCJcbiAgbGluay5ocmVmID0gXCIjXCJcbiAgaW1nT25lLnNyYyA9IGltZ09uZVNyYztcbiAgaW1nVHdvLnNyYyA9IGltZ1R3b1NyYztcbiAgaW1nVGhyZWUuc3JjID0gaW1nVGhyZWVTcmM7XG4gIGltZ0ZvdXIuc3JjID0gaW1nRm91clNyYztcblxuICBkZXNjcmlwdGlvbkNvbnRhaW4uYXBwZW5kQ2hpbGQoaDIpO1xuICBkZXNjcmlwdGlvbkNvbnRhaW4uYXBwZW5kQ2hpbGQodGV4dCk7XG4gIGRlc2NyaXB0aW9uQ29udGFpbi5hcHBlbmRDaGlsZChsaW5rKTtcbiAgaW1nSW5uZXJDb250YWluZXJPbmUuYXBwZW5kQ2hpbGQoaW1nT25lKTtcbiAgaW1nSW5uZXJDb250YWluZXJPbmUuYXBwZW5kQ2hpbGQoaW1nVHdvKTtcbiAgaW1nSW5uZXJDb250YWluZXJUd28uYXBwZW5kQ2hpbGQoaW1nVGhyZWUpO1xuICBpbWdJbm5lckNvbnRhaW5lclR3by5hcHBlbmRDaGlsZChpbWdGb3VyKTtcbiAgaW1nQ29udGFpbmVyLmFwcGVuZENoaWxkKGltZ0lubmVyQ29udGFpbmVyT25lKTtcbiAgaW1nQ29udGFpbmVyLmFwcGVuZENoaWxkKGltZ0lubmVyQ29udGFpbmVyVHdvKTtcbiAgd3JhcHBlci5hcHBlbmRDaGlsZChpbWdDb250YWluZXIpO1xuICB3cmFwcGVyLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uQ29udGFpbik7XG4gIHJvb3QuYXBwZW5kQ2hpbGQod3JhcHBlcik7Ly9yZW1vdmUgaW4gdGhlIGZ1dHVyZVxuXG4gIHJldHVybiB3cmFwcGVyO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZUhlYWRlcigpIHtcbiAgY29uc3QgbmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbmF2Jyk7XG4gIGNvbnN0IGhvbWVCdXR0b24gPSBjcmVhdGVCdG4oJ0hvbWUnLCAoKSA9PiBjb25zb2xlLmxvZygndGVzdCcpKVxuICBjb25zdCBtZW51QnV0dG9uID0gY3JlYXRlQnRuKCdNZW51JywgKCkgPT4gY29uc29sZS5sb2coJ3Rlc3QnKSlcbiAgY29uc3QgYWJvdXRVc0J1dHRvbiA9IGNyZWF0ZUJ0bignQWJvdXQgdXMnLCAoKSA9PiBjb25zb2xlLmxvZygndGVzdCcpKTtcbiAgXG4gIG5hdi5hcHBlbmRDaGlsZChob21lQnV0dG9uKTtcbiAgbmF2LmFwcGVuZENoaWxkKG1lbnVCdXR0b24pO1xuICBuYXYuYXBwZW5kQ2hpbGQoYWJvdXRVc0J1dHRvbik7XG5cbiAgcmV0dXJuIG5hdjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlQnRuKHRleHQsIG9uQ2xpY2spIHtcbiAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIGJ1dHRvbi50ZXh0Q29udGVudCA9IHRleHQ7XG4gIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG9uQ2xpY2spO1xuICByZXR1cm4gYnV0dG9uO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZU1haW5QYWdlKCkgeztcbiAgY29uc3QgbWFpblBhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3Qgd3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCBoMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gIGNvbnN0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuXG4gIG1haW5QYWdlLmNsYXNzTGlzdC5hZGQoJ21haW4tcGFnZScpO1xuICB3cmFwcGVyLmNsYXNzTGlzdC5hZGQoJ3dyYXBwZXInKTtcblxuICBoMS50ZXh0Q29udGVudCA9ICdHb29kIEZvb2QsIEdyZWF0IFZpYmUnO1xuICBwLnRleHRDb250ZW50ID0gJ1dlIHNlcnZlIG5pY2UgZm9vZCBhbmQgcHJvdmlkZSBhIGdyZWF0IHBsYWNlIGZvciBwZW9wbGUgdG8gcmVsYXggd2l0aCBmcmllbmRzLCBmYW1pbHkgYW5kIGNvbGxlYWd1ZXMsIG1hbnkgb2Ygd2hvbSBoYXZlIGJlZW4gY29taW5nIHRvIG91ciByZXN0YXVyYW50cyBmb3IgeWVhcnMuJ1xuICBidXR0b24udGV4dENvbnRlbnQgPSAnQm9vayBBIFRhYmxlJztcblxuICBtYWluUGFnZS5hcHBlbmRDaGlsZCh3cmFwcGVyKTtcbiAgd3JhcHBlci5hcHBlbmRDaGlsZChoMSk7XG4gIHdyYXBwZXIuYXBwZW5kQ2hpbGQocCk7XG4gIHdyYXBwZXIuYXBwZW5kQ2hpbGQoYnV0dG9uKTtcblxuICByZXR1cm4gbWFpblBhZ2Vcbn1cbiIsImltcG9ydCBjcmVhdGVNYWluUGFnZSBmcm9tIFwiLi9ob21lUGFnZVwiO1xuaW1wb3J0IGNyZWF0ZUhlYWRlciBmcm9tIFwiLi9oZWFkZXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaW5pdCgpIHtcbiAgY29uc3Qgcm9vdCA9IGRvY3VtZW50LmJvZHk7XG4gIGNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtYWluJyk7XG5cbiAgcm9vdC5hcHBlbmRDaGlsZChjcmVhdGVIZWFkZXIoKSk7XG4gIHJvb3QuYXBwZW5kQ2hpbGQobWFpbik7XG4gIG1haW4uYXBwZW5kQ2hpbGQoY3JlYXRlTWFpblBhZ2UoKSk7XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IFwiLi9zdHlsZS5zY3NzXCI7XG5pbXBvcnQgaW5pdCBmcm9tIFwiLi9tb2R1bGVzL2luaXRpYWxpemVcIjtcbmltcG9ydCBjcmVhdGVBYm91dFVzIGZyb20gXCIuL21vZHVsZXMvYWJvdXRVc1wiO1xuXG4vL2luaXQoKTtcblxuY3JlYXRlQWJvdXRVcygpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==