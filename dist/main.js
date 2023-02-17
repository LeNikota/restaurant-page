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
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  box-sizing: border-box;\n}\n\nbody {\n  margin: 0;\n  color: white;\n  font-family: \"Roboto\", sans-serif;\n  background-color: #232323;\n}\n\n.wrapper {\n  overflow: auto;\n  margin: 100px auto 50px auto;\n  max-width: 1000px;\n}\n\nmain {\n  overflow: auto;\n  height: 100vh;\n}\nmain h1 {\n  font-weight: 900;\n}\nmain p {\n  font-weight: 300;\n  line-height: 2rem;\n}\nmain button {\n  margin-top: 3rem;\n}\n\n.homepage-background {\n  overflow: auto;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-position: center;\n  background-size: cover;\n  height: 100%;\n  display: grid;\n  align-items: center;\n  text-align: center;\n}\n.homepage-background .wrapper {\n  margin: 0 auto;\n}\n\nbutton, a {\n  transition: 0.2s all;\n}\n\nnav {\n  position: absolute;\n  top: 0;\n  left: 0;\n  padding: 20px 0;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  gap: 30px;\n  background-color: rgba(35, 35, 35, 0.6);\n}\nnav button {\n  appearance: none;\n  border: none;\n  background: none;\n  color: white;\n  font-size: 1rem;\n  padding: 0;\n  font-weight: normal;\n  min-width: 70px;\n}\nnav button:hover {\n  color: #f2c378;\n  font-weight: bold;\n  letter-spacing: -0.5px;\n  text-decoration: 1px underline #f2c378;\n  text-underline-offset: 5px;\n}\n\nbutton {\n  cursor: pointer;\n  appearance: none;\n  background-color: #f2c378;\n  color: #232323;\n  font-weight: 900;\n  padding: 16px 80px;\n  border-radius: 5px;\n  border: none;\n}\nbutton:hover {\n  opacity: 0.9;\n}\nbutton:active {\n  opacity: 0.8;\n}\n\nh2 {\n  color: #f2c378;\n  font-weight: normal;\n  font-size: 3rem;\n  text-align: center;\n}\n\n.card-container {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));\n  gap: 30px;\n  padding: 0 50px;\n}\n.card-container .product-card {\n  background-color: #393939;\n  box-shadow: #232323 0 0 10px 6px;\n  border-radius: 10px;\n}\n.card-container .product-card .product-card-img {\n  width: 100%;\n  height: 200px;\n  object-fit: cover;\n  border-radius: 10px 10px 0 0;\n}\n.card-container .product-card .description-container {\n  margin: 0 20px;\n}\n.card-container .product-card .description-container p {\n  font-weight: bold;\n  letter-spacing: 0.5px;\n}\n.card-container .product-card .description-container .cooking-time-container {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.card-container .product-card .description-container .cooking-time-container span {\n  font-size: 0.9rem;\n}\n.card-container .product-card .description-container .cooking-time-container img {\n  height: 1.6rem;\n}\n.card-container .product-card .description-container .bottom-container {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin: 1.4rem 0;\n}\n.card-container .product-card .description-container .bottom-container .grading-container {\n  display: flex;\n  gap: 4px;\n}\n.card-container .product-card .description-container .bottom-container .grading-container img {\n  height: 0.8rem;\n}\n.card-container .product-card .description-container .bottom-container a {\n  font-weight: bold;\n  text-decoration: none;\n  border-bottom: #f2c378 1px solid;\n  color: #f2c378;\n  padding: 5px 10px;\n}\n.card-container .product-card .description-container .bottom-container a:hover {\n  opacity: 0.8;\n}\n\n.our-story {\n  display: flex;\n  align-items: center;\n}\n.our-story h2 {\n  text-align: left;\n  margin: 1.4rem 0;\n}\n.our-story p {\n  line-height: 1.65rem;\n}\n.our-story .image-container {\n  height: 500px;\n  display: flex;\n  justify-content: center;\n  align-items: flex-end;\n}\n.our-story .image-container div {\n  flex: 0;\n}\n.our-story .image-container div:last-child {\n  align-self: flex-start;\n}\n.our-story .image-container img {\n  width: 200px;\n  height: 220px;\n  object-fit: cover;\n}\n.our-story .image-container img:nth-child(2n+1) {\n  margin: 0 15px 15px 0;\n}\n.our-story a {\n  color: white;\n  text-decoration: none;\n  font-weight: 900;\n  letter-spacing: 1.3px;\n}\n\n.our-story > div {\n  flex: 1;\n}", "",{"version":3,"sources":["webpack://./src/style.scss"],"names":[],"mappings":"AAOA;EACE,sBAAA;AALF;;AAQA;EACE,SAAA;EACA,YAVW;EAWX,iCAAA;EACA,yBAbiB;AAQnB;;AASA;EACE,cAAA;EACA,4BAAA;EACA,iBAAA;AANF;;AASA;EACE,cAAA;EACA,aAAA;AANF;AAQE;EACE,gBAAA;AANJ;AASE;EACE,gBAAA;EACA,iBAAA;AAPJ;AAUE;EACE,gBAAA;AARJ;;AAYA;EACE,cAAA;EACA,yDAAA;EACA,2BAAA;EACA,sBAAA;EACA,YAAA;EACA,aAAA;EACA,mBAAA;EACA,kBAAA;AATF;AAWE;EACE,cAAA;AATJ;;AAaA;EACE,oBAAA;AAVF;;AAaA;EACE,kBAAA;EACA,MAAA;EACA,OAAA;EACA,eAAA;EACA,WAAA;EACA,aAAA;EACA,uBAAA;EACA,SAAA;EACA,uCAAA;AAVF;AAYE;EACE,gBAAA;EACA,YAAA;EACA,gBAAA;EACA,YAAA;EACA,eAAA;EACA,UAAA;EACA,mBAAA;EACA,eAAA;AAVJ;AAYI;EACE,cAnFS;EAoFT,iBAAA;EACA,sBAAA;EACA,sCAAA;EACA,0BAAA;AAVN;;AAeA;EACE,eAAA;EACA,gBAAA;EACA,yBA/Fa;EAgGb,cA/FiB;EAgGjB,gBAAA;EACA,kBAAA;EACA,kBAAA;EACA,YAAA;AAZF;AAcE;EACE,YAAA;AAZJ;AAeE;EACE,YAAA;AAbJ;;AAiBA;EACE,cAhHa;EAiHb,mBAAA;EACA,eAAA;EACA,kBAAA;AAdF;;AAiBA;EACE,aAAA;EACA,2DAAA;EACA,SAAA;EACA,eAAA;AAdF;AAgBE;EACE,yBAzHsB;EA0HtB,gCAAA;EACA,mBAAA;AAdJ;AAgBI;EACE,WAAA;EACA,aAAA;EACA,iBAAA;EACA,4BAAA;AAdN;AAiBI;EACE,cAAA;AAfN;AAiBM;EACE,iBAAA;EACA,qBAAA;AAfR;AAkBM;EACE,aAAA;EACA,mBAAA;EACA,SAAA;AAhBR;AAkBQ;EACE,iBAAA;AAhBV;AAmBQ;EACE,cAAA;AAjBV;AAqBM;EACE,aAAA;EACA,8BAAA;EACA,mBAAA;EACA,gBAAA;AAnBR;AAqBQ;EACE,aAAA;EACA,QAAA;AAnBV;AAqBU;EACE,cAAA;AAnBZ;AAuBQ;EACE,iBAAA;EACA,qBAAA;EACA,gCAAA;EACA,cAjLK;EAkLL,iBAAA;AArBV;AAuBU;EACE,YAAA;AArBZ;;AA6BA;EACE,aAAA;EACA,mBAAA;AA1BF;AA4BE;EACE,gBAAA;EACA,gBAAA;AA1BJ;AA6BE;EACE,oBAAA;AA3BJ;AA8BE;EACE,aAAA;EACA,aAAA;EACA,uBAAA;EACA,qBAAA;AA5BJ;AA8BI;EACE,OAAA;AA5BN;AA+BI;EACE,sBAAA;AA7BN;AAgCI;EACE,YAAA;EACA,aAAA;EACA,iBAAA;AA9BN;AAiCI;EACE,qBAAA;AA/BN;AAmCE;EACE,YAAA;EACA,qBAAA;EACA,gBAAA;EACA,qBAAA;AAjCJ;;AAqCA;EACE,OAAA;AAlCF","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;900&display=swap');\n$accent-color: #f2c378;\n$background-color: #232323;\n$font-color: white;\n$font-color-button: $background-color;\n$content-card-background: #393939;\n\n*{\n  box-sizing: border-box;\n}\n\nbody{\n  margin: 0;\n  color: $font-color;\n  font-family: 'Roboto', sans-serif;\n  background-color: $background-color;\n}\n\n\n.wrapper{\n  overflow: auto;\n  margin: 100px auto 50px auto;\n  max-width: 1000px;\n}\n\nmain{\n  overflow: auto;\n  height: 100vh;\n\n  h1{\n    font-weight: 900;\n  }\n\n  p{\n    font-weight: 300;\n    line-height: 2rem;\n  }\n\n  button{\n    margin-top: 3rem;\n  }\n}\n\n.homepage-background{\n  overflow: auto;\n  background-image: url(assets/background.png);\n  background-position: center;\n  background-size: cover;\n  height: 100%;\n  display: grid;\n  align-items: center;\n  text-align: center;\n\n  .wrapper{\n    margin: 0 auto;\n  }\n}\n\nbutton, a{\n  transition: 0.2s all;\n}\n\nnav{\n  position: absolute;\n  top: 0;\n  left: 0;\n  padding: 20px 0;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  gap:30px;\n  background-color: #23232399;\n\n  button{\n    appearance: none;\n    border: none;\n    background: none;\n    color: white;\n    font-size: 1rem;\n    padding:0;\n    font-weight: normal;\n    min-width: 70px;\n\n    &:hover{\n      color: $accent-color;\n      font-weight: bold;\n      letter-spacing: -0.5px;\n      text-decoration: 1px underline $accent-color;\n      text-underline-offset: 5px;      \n    }\n  }\n}\n\nbutton{\n  cursor: pointer;\n  appearance: none;\n  background-color: $accent-color;\n  color: $font-color-button;\n  font-weight: 900;\n  padding: 16px 80px;\n  border-radius: 5px;\n  border: none;\n\n  &:hover{\n    opacity: 0.9;\n  }\n\n  &:active{\n    opacity: 0.8;\n  }\n}\n\nh2{\n  color: $accent-color;\n  font-weight: normal;\n  font-size: 3rem;\n  text-align: center;\n}\n\n.card-container{\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(230px,1fr));\n  gap: 30px;\n  padding: 0 50px;\n\n  .product-card{\n    background-color: $content-card-background;\n    box-shadow: $background-color 0 0 10px 6px;\n    border-radius: 10px;\n\n    .product-card-img{\n      width: 100%;\n      height: 200px;\n      object-fit: cover;\n      border-radius: 10px 10px 0 0;\n    }\n\n    .description-container{\n      margin: 0 20px;\n\n      p{\n        font-weight: bold;\n        letter-spacing: 0.5px;\n      }\n\n      .cooking-time-container {\n        display: flex;\n        align-items: center;\n        gap: 10px;\n\n        span{\n          font-size: 0.9rem;\n        }\n\n        img{\n          height: 1.6rem;\n        }\n      }\n\n      .bottom-container{\n        display: flex;\n        justify-content: space-between;\n        align-items: center;\n        margin: 1.4rem 0;\n\n        .grading-container{\n          display: flex;\n          gap: 4px;\n  \n          img{\n            height: 0.8rem;\n          }\n        }\n\n        a{\n          font-weight: bold;\n          text-decoration: none;\n          border-bottom:  $accent-color 1px solid;\n          color: $accent-color;\n          padding: 5px 10px;\n\n          &:hover{\n            opacity: 0.8;\n          }\n        }\n      }\n    }\n  }\n}\n\n.our-story{\n  display: flex;\n  align-items: center;\n\n  h2{\n    text-align:left;\n    margin: 1.4rem 0;\n  }\n\n  p{\n    line-height: 1.65rem;\n  }\n\n  .image-container{\n    height: 500px;\n    display: flex;\n    justify-content: center;\n    align-items: flex-end;\n  \n    div {\n      flex: 0;\n    }\n  \n    div:last-child{\n      align-self: flex-start;\n    }\n  \n    img {\n      width: 200px;\n      height: 220px;\n      object-fit: cover;\n    }\n  \n    img:nth-child(2n + 1){\n      margin: 0 15px 15px 0;\n    }\n  }\n\n  a{\n    color: white;\n    text-decoration: none;\n    font-weight: 900;\n    letter-spacing: 1.3px;\n  }\n}\n\n.our-story > div{\n  flex: 1;\n}"],"sourceRoot":""}]);
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
/* harmony import */ var _homePage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./homePage */ "./src/modules/homePage.js");
/* harmony import */ var _menuPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menuPage */ "./src/modules/menuPage.js");
/* harmony import */ var _aboutUs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./aboutUs */ "./src/modules/aboutUs.js");




function createHeader() {
  const nav = document.createElement('nav');
  const homeButton = createBtn('Home', handlePageChange)
  const menuButton = createBtn('Menu', handlePageChange)
  const aboutUsButton = createBtn('About us', handlePageChange);
  
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

function handlePageChange(e) {
  const main = document.querySelector('main');
  main.innerHTML = '';
  switch (e.target.textContent) {
    case 'Home':
      main.appendChild((0,_homePage__WEBPACK_IMPORTED_MODULE_0__["default"])());
      break;
    case 'Menu':
      main.appendChild((0,_menuPage__WEBPACK_IMPORTED_MODULE_1__["default"])());
      break;
    case 'About us':
      main.appendChild((0,_aboutUs__WEBPACK_IMPORTED_MODULE_2__["default"])());
      break;
  }
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
  const wrapper = document.createElement('div');
  const background = document.createElement('div');
  const h1 = document.createElement('h1');
  const p = document.createElement('p');
  const button = document.createElement('button');

  wrapper.classList.add('wrapper');
  background.classList.add('homepage-background');

  h1.textContent = 'Good Food, Great Vibe';
  p.textContent = 'We serve nice food and provide a great place for people to relax with friends, family and colleagues, many of whom have been coming to our restaurants for years.'
  button.textContent = 'Book A Table';

  background.appendChild(wrapper);
  wrapper.appendChild(h1);
  wrapper.appendChild(p);
  wrapper.appendChild(button);

  return background
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
  const mainContainer = document.createElement('main');
  
  root.appendChild((0,_header__WEBPACK_IMPORTED_MODULE_1__["default"])());
  mainContainer.appendChild((0,_homePage__WEBPACK_IMPORTED_MODULE_0__["default"])());
  root.appendChild(mainContainer);
}


/***/ }),

/***/ "./src/modules/menuPage.js":
/*!*********************************!*\
  !*** ./src/modules/menuPage.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createMenuPage)
/* harmony export */ });
/* harmony import */ var _assets_corned_beef_sandwich_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/corned_beef_sandwich.jpg */ "./src/assets/corned_beef_sandwich.jpg");
/* harmony import */ var _assets_corned_beef_jpeg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/corned_beef.jpeg */ "./src/assets/corned_beef.jpeg");
/* harmony import */ var _assets_whipped_ricotta_pasta_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/whipped_ricotta_pasta.jpg */ "./src/assets/whipped_ricotta_pasta.jpg");
/* harmony import */ var _assets_clock_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/clock.svg */ "./src/assets/clock.svg");
/* harmony import */ var _assets_full_star_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/full_star.svg */ "./src/assets/full_star.svg");
/* harmony import */ var _assets_half_star_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/half_star.svg */ "./src/assets/half_star.svg");







function createMenuPage() {;
  const wrapper = document.createElement('div');
  const h2 = document.createElement('h2');
  const cardContainer = document.createElement('div');

  wrapper.classList.add('wrapper');
  cardContainer.classList.add('card-container');

  h2.textContent = "Today's menu";

  cardContainer.appendChild(createItemCard('Corned Beef Sandwich', _assets_corned_beef_sandwich_jpg__WEBPACK_IMPORTED_MODULE_0__));
  cardContainer.appendChild(createItemCard('Corned Beef', _assets_corned_beef_jpeg__WEBPACK_IMPORTED_MODULE_1__));
  cardContainer.appendChild(createItemCard('Whipped Ricotta Pasta', _assets_whipped_ricotta_pasta_jpg__WEBPACK_IMPORTED_MODULE_2__));
  cardContainer.appendChild(createItemCard('Whipped Ricotta Pasta', _assets_whipped_ricotta_pasta_jpg__WEBPACK_IMPORTED_MODULE_2__));
  cardContainer.appendChild(createItemCard('Corned Beef', _assets_corned_beef_jpeg__WEBPACK_IMPORTED_MODULE_1__));
  cardContainer.appendChild(createItemCard('Corned Beef Sandwich', _assets_corned_beef_sandwich_jpg__WEBPACK_IMPORTED_MODULE_0__));
  wrapper.appendChild(h2);
  wrapper.appendChild(cardContainer);

  return wrapper;
}

function createItemCard(text, imgURL) {
  const card = document.createElement('div');
  const img = document.createElement('img');
  const descriptionContainer = document.createElement('div');
  const description = document.createElement('p');
  const cookingTimeContainer = document.createElement('div');
  const cookingTime = document.createElement('span');
  const timeIcon = document.createElement('img');
  const grading = [document.createElement('img'),document.createElement('img'),document.createElement('img'),document.createElement('img'),document.createElement('img')];
  const gradingContainer = document.createElement('div');
  const bottomContainer = document.createElement('div');
  const orderNow = document.createElement('a');

  card.classList.add('product-card');
  img.classList.add('product-card-img');
  cookingTimeContainer.classList.add('cooking-time-container');
  descriptionContainer.classList.add('description-container');
  gradingContainer.classList.add('grading-container');
  bottomContainer.classList.add('bottom-container');

  img.src = imgURL;
  description.textContent = text;
  timeIcon.src = _assets_clock_svg__WEBPACK_IMPORTED_MODULE_3__;
  cookingTime.textContent = '10 mins';
  orderNow.textContent = 'Order Now';
  orderNow.href = '#';
  

  cookingTimeContainer.appendChild(timeIcon);
  cookingTimeContainer.appendChild(cookingTime);
  descriptionContainer.appendChild(description);
  descriptionContainer.appendChild(cookingTimeContainer);
  grading.forEach((e, i) => {
    e.src = (i === 4) ?  _assets_half_star_svg__WEBPACK_IMPORTED_MODULE_5__ : _assets_full_star_svg__WEBPACK_IMPORTED_MODULE_4__;
    gradingContainer.appendChild(e);
  })
  bottomContainer.appendChild(gradingContainer)
  bottomContainer.appendChild(orderNow);
  descriptionContainer.appendChild(bottomContainer);
  card.appendChild(img);
  card.appendChild(descriptionContainer);
  
  return card;
}

/***/ }),

/***/ "./src/assets/background.png":
/*!***********************************!*\
  !*** ./src/assets/background.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3c161030c65173936776.png";

/***/ }),

/***/ "./src/assets/clock.svg":
/*!******************************!*\
  !*** ./src/assets/clock.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "bb388b2cc493754f69e2.svg";

/***/ }),

/***/ "./src/assets/corned_beef.jpeg":
/*!*************************************!*\
  !*** ./src/assets/corned_beef.jpeg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3a2a419a7c9ad97aa1f3.jpeg";

/***/ }),

/***/ "./src/assets/corned_beef_sandwich.jpg":
/*!*********************************************!*\
  !*** ./src/assets/corned_beef_sandwich.jpg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "25921c9fd912bcc4d770.jpg";

/***/ }),

/***/ "./src/assets/full_star.svg":
/*!**********************************!*\
  !*** ./src/assets/full_star.svg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b7d8d8d3a46781d72520.svg";

/***/ }),

/***/ "./src/assets/half_star.svg":
/*!**********************************!*\
  !*** ./src/assets/half_star.svg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4d690dc4908a20d437b6.svg";

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

/***/ }),

/***/ "./src/assets/whipped_ricotta_pasta.jpg":
/*!**********************************************!*\
  !*** ./src/assets/whipped_ricotta_pasta.jpg ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5c449c6ec4435940f227.jpg";

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



(0,_modules_initialize__WEBPACK_IMPORTED_MODULE_1__["default"])();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ087QUFDaEcsNENBQTRDLHlIQUF3QztBQUNwRiw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLCtHQUErRyxJQUFJLGtCQUFrQjtBQUNySSx5Q0FBeUMsc0ZBQStCO0FBQ3hFO0FBQ0EsNkNBQTZDLDJCQUEyQixHQUFHLFVBQVUsY0FBYyxpQkFBaUIsd0NBQXdDLDhCQUE4QixHQUFHLGNBQWMsbUJBQW1CLGlDQUFpQyxzQkFBc0IsR0FBRyxVQUFVLG1CQUFtQixrQkFBa0IsR0FBRyxXQUFXLHFCQUFxQixHQUFHLFVBQVUscUJBQXFCLHNCQUFzQixHQUFHLGVBQWUscUJBQXFCLEdBQUcsMEJBQTBCLG1CQUFtQixzRUFBc0UsZ0NBQWdDLDJCQUEyQixpQkFBaUIsa0JBQWtCLHdCQUF3Qix1QkFBdUIsR0FBRyxpQ0FBaUMsbUJBQW1CLEdBQUcsZUFBZSx5QkFBeUIsR0FBRyxTQUFTLHVCQUF1QixXQUFXLFlBQVksb0JBQW9CLGdCQUFnQixrQkFBa0IsNEJBQTRCLGNBQWMsNENBQTRDLEdBQUcsY0FBYyxxQkFBcUIsaUJBQWlCLHFCQUFxQixpQkFBaUIsb0JBQW9CLGVBQWUsd0JBQXdCLG9CQUFvQixHQUFHLG9CQUFvQixtQkFBbUIsc0JBQXNCLDJCQUEyQiwyQ0FBMkMsK0JBQStCLEdBQUcsWUFBWSxvQkFBb0IscUJBQXFCLDhCQUE4QixtQkFBbUIscUJBQXFCLHVCQUF1Qix1QkFBdUIsaUJBQWlCLEdBQUcsZ0JBQWdCLGlCQUFpQixHQUFHLGlCQUFpQixpQkFBaUIsR0FBRyxRQUFRLG1CQUFtQix3QkFBd0Isb0JBQW9CLHVCQUF1QixHQUFHLHFCQUFxQixrQkFBa0IsZ0VBQWdFLGNBQWMsb0JBQW9CLEdBQUcsaUNBQWlDLDhCQUE4QixxQ0FBcUMsd0JBQXdCLEdBQUcsbURBQW1ELGdCQUFnQixrQkFBa0Isc0JBQXNCLGlDQUFpQyxHQUFHLHdEQUF3RCxtQkFBbUIsR0FBRywwREFBMEQsc0JBQXNCLDBCQUEwQixHQUFHLGdGQUFnRixrQkFBa0Isd0JBQXdCLGNBQWMsR0FBRyxxRkFBcUYsc0JBQXNCLEdBQUcsb0ZBQW9GLG1CQUFtQixHQUFHLDBFQUEwRSxrQkFBa0IsbUNBQW1DLHdCQUF3QixxQkFBcUIsR0FBRyw2RkFBNkYsa0JBQWtCLGFBQWEsR0FBRyxpR0FBaUcsbUJBQW1CLEdBQUcsNEVBQTRFLHNCQUFzQiwwQkFBMEIscUNBQXFDLG1CQUFtQixzQkFBc0IsR0FBRyxrRkFBa0YsaUJBQWlCLEdBQUcsZ0JBQWdCLGtCQUFrQix3QkFBd0IsR0FBRyxpQkFBaUIscUJBQXFCLHFCQUFxQixHQUFHLGdCQUFnQix5QkFBeUIsR0FBRywrQkFBK0Isa0JBQWtCLGtCQUFrQiw0QkFBNEIsMEJBQTBCLEdBQUcsbUNBQW1DLFlBQVksR0FBRyw4Q0FBOEMsMkJBQTJCLEdBQUcsbUNBQW1DLGlCQUFpQixrQkFBa0Isc0JBQXNCLEdBQUcsbURBQW1ELDBCQUEwQixHQUFHLGdCQUFnQixpQkFBaUIsMEJBQTBCLHFCQUFxQiwwQkFBMEIsR0FBRyxzQkFBc0IsWUFBWSxHQUFHLE9BQU8saUZBQWlGLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsV0FBVyxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLFdBQVcsV0FBVyxLQUFLLEtBQUssV0FBVyxNQUFNLEtBQUssVUFBVSxXQUFXLFdBQVcsV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLEtBQUssS0FBSyxVQUFVLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLFVBQVUsV0FBVyxLQUFLLEtBQUssV0FBVyxVQUFVLFdBQVcsVUFBVSxVQUFVLFVBQVUsV0FBVyxVQUFVLEtBQUssS0FBSyxXQUFXLFlBQVksV0FBVyxXQUFXLFdBQVcsTUFBTSxLQUFLLFVBQVUsV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLFdBQVcsVUFBVSxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxNQUFNLE1BQU0sV0FBVyxZQUFZLFVBQVUsV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLFVBQVUsVUFBVSxLQUFLLE1BQU0sYUFBYSxhQUFhLFdBQVcsS0FBSyxNQUFNLFVBQVUsVUFBVSxXQUFXLFdBQVcsS0FBSyxNQUFNLFVBQVUsS0FBSyxNQUFNLFdBQVcsV0FBVyxLQUFLLE1BQU0sVUFBVSxXQUFXLFVBQVUsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsVUFBVSxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsV0FBVyxZQUFZLE1BQU0sTUFBTSxVQUFVLE9BQU8sTUFBTSxVQUFVLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sVUFBVSxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sVUFBVSxVQUFVLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLFVBQVUsZ0dBQWdHLElBQUksbUJBQW1CLHlCQUF5Qiw2QkFBNkIscUJBQXFCLHdDQUF3QyxvQ0FBb0MsTUFBTSwyQkFBMkIsR0FBRyxTQUFTLGNBQWMsdUJBQXVCLHNDQUFzQyx3Q0FBd0MsR0FBRyxlQUFlLG1CQUFtQixpQ0FBaUMsc0JBQXNCLEdBQUcsU0FBUyxtQkFBbUIsa0JBQWtCLFNBQVMsdUJBQXVCLEtBQUssUUFBUSx1QkFBdUIsd0JBQXdCLEtBQUssYUFBYSx1QkFBdUIsS0FBSyxHQUFHLHlCQUF5QixtQkFBbUIsaURBQWlELGdDQUFnQywyQkFBMkIsaUJBQWlCLGtCQUFrQix3QkFBd0IsdUJBQXVCLGVBQWUscUJBQXFCLEtBQUssR0FBRyxjQUFjLHlCQUF5QixHQUFHLFFBQVEsdUJBQXVCLFdBQVcsWUFBWSxvQkFBb0IsZ0JBQWdCLGtCQUFrQiw0QkFBNEIsYUFBYSxnQ0FBZ0MsYUFBYSx1QkFBdUIsbUJBQW1CLHVCQUF1QixtQkFBbUIsc0JBQXNCLGdCQUFnQiwwQkFBMEIsc0JBQXNCLGdCQUFnQiw2QkFBNkIsMEJBQTBCLCtCQUErQixxREFBcUQseUNBQXlDLE9BQU8sS0FBSyxHQUFHLFdBQVcsb0JBQW9CLHFCQUFxQixvQ0FBb0MsOEJBQThCLHFCQUFxQix1QkFBdUIsdUJBQXVCLGlCQUFpQixjQUFjLG1CQUFtQixLQUFLLGVBQWUsbUJBQW1CLEtBQUssR0FBRyxPQUFPLHlCQUF5Qix3QkFBd0Isb0JBQW9CLHVCQUF1QixHQUFHLG9CQUFvQixrQkFBa0IsK0RBQStELGNBQWMsb0JBQW9CLG9CQUFvQixpREFBaUQsaURBQWlELDBCQUEwQiwwQkFBMEIsb0JBQW9CLHNCQUFzQiwwQkFBMEIscUNBQXFDLE9BQU8sK0JBQStCLHVCQUF1QixZQUFZLDRCQUE0QixnQ0FBZ0MsU0FBUyxtQ0FBbUMsd0JBQXdCLDhCQUE4QixvQkFBb0IsaUJBQWlCLDhCQUE4QixXQUFXLGdCQUFnQiwyQkFBMkIsV0FBVyxTQUFTLDRCQUE0Qix3QkFBd0IseUNBQXlDLDhCQUE4QiwyQkFBMkIsK0JBQStCLDBCQUEwQixxQkFBcUIsb0JBQW9CLDZCQUE2QixhQUFhLFdBQVcsY0FBYyw4QkFBOEIsa0NBQWtDLG9EQUFvRCxpQ0FBaUMsOEJBQThCLHNCQUFzQiwyQkFBMkIsYUFBYSxXQUFXLFNBQVMsT0FBTyxLQUFLLEdBQUcsZUFBZSxrQkFBa0Isd0JBQXdCLFNBQVMsc0JBQXNCLHVCQUF1QixLQUFLLFFBQVEsMkJBQTJCLEtBQUssdUJBQXVCLG9CQUFvQixvQkFBb0IsOEJBQThCLDRCQUE0QixlQUFlLGdCQUFnQixPQUFPLHlCQUF5QiwrQkFBK0IsT0FBTyxlQUFlLHFCQUFxQixzQkFBc0IsMEJBQTBCLE9BQU8sZ0NBQWdDLDhCQUE4QixPQUFPLEtBQUssUUFBUSxtQkFBbUIsNEJBQTRCLHVCQUF1Qiw0QkFBNEIsS0FBSyxHQUFHLHFCQUFxQixZQUFZLEdBQUcsbUJBQW1CO0FBQzlzVDtBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7OztBQ1gxQjs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscURBQXFEO0FBQ3JEO0FBQ0E7QUFDQSxnREFBZ0Q7QUFDaEQ7QUFDQTtBQUNBLHFGQUFxRjtBQUNyRjtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsaUJBQWlCO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixxQkFBcUI7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0ZBQXNGLHFCQUFxQjtBQUMzRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsaURBQWlELHFCQUFxQjtBQUN0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0RBQXNELHFCQUFxQjtBQUMzRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDcEZhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUN6QmE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVEQUF1RCxjQUFjO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNkQSxNQUErRjtBQUMvRixNQUFxRjtBQUNyRixNQUE0RjtBQUM1RixNQUErRztBQUMvRyxNQUF3RztBQUN4RyxNQUF3RztBQUN4RyxNQUE0STtBQUM1STtBQUNBOztBQUVBOztBQUVBLDRCQUE0QixxR0FBbUI7QUFDL0Msd0JBQXdCLGtIQUFhOztBQUVyQyx1QkFBdUIsdUdBQWE7QUFDcEM7QUFDQSxpQkFBaUIsK0ZBQU07QUFDdkIsNkJBQTZCLHNHQUFrQjs7QUFFL0MsYUFBYSwwR0FBRyxDQUFDLDRIQUFPOzs7O0FBSXNGO0FBQzlHLE9BQU8saUVBQWUsNEhBQU8sSUFBSSxtSUFBYyxHQUFHLG1JQUFjLFlBQVksRUFBQzs7Ozs7Ozs7Ozs7QUMxQmhFOztBQUViOztBQUVBO0FBQ0E7O0FBRUEsa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGtCQUFrQixpQkFBaUI7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG9CQUFvQiw0QkFBNEI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEscUJBQXFCLDZCQUE2QjtBQUNsRDs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUN2R2E7O0FBRWI7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esc0RBQXNEOztBQUV0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDdENhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDVmE7O0FBRWI7QUFDQTtBQUNBLGNBQWMsS0FBd0MsR0FBRyxzQkFBaUIsR0FBRyxDQUFJOztBQUVqRjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ1hhOztBQUViO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGtEQUFrRDtBQUNsRDs7QUFFQTtBQUNBLDBDQUEwQztBQUMxQzs7QUFFQTs7QUFFQTtBQUNBLGlGQUFpRjtBQUNqRjs7QUFFQTs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTs7QUFFQTtBQUNBLHlEQUF5RDtBQUN6RCxJQUFJOztBQUVKOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNyRWE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZjRDO0FBQ0E7QUFDRTtBQUNEOztBQUU5QjtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsOENBQVM7QUFDeEIsZUFBZSw4Q0FBUztBQUN4QixpQkFBaUIsOENBQVc7QUFDNUIsZ0JBQWdCLDhDQUFVOztBQUUxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDOUN3QztBQUNBO0FBQ0Y7O0FBRXZCO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLHFEQUFjO0FBQ3JDO0FBQ0E7QUFDQSx1QkFBdUIscURBQWM7QUFDckM7QUFDQTtBQUNBLHVCQUF1QixvREFBYTtBQUNwQztBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDdENlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3BCd0M7QUFDSjs7QUFFckI7QUFDZjtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsbURBQVk7QUFDL0IsNEJBQTRCLHFEQUFjO0FBQzFDO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1Z3RDtBQUNSO0FBQ1c7QUFDbkI7QUFDTztBQUNBOztBQUVoQztBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBLG1FQUFtRSw2REFBTTtBQUN6RSwwREFBMEQscURBQU07QUFDaEUsb0VBQW9FLDhEQUFRO0FBQzVFLG9FQUFvRSw4REFBUTtBQUM1RSwwREFBMEQscURBQU07QUFDaEUsbUVBQW1FLDZEQUFNO0FBQ3pFO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxpQkFBaUIsOENBQUs7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QixrREFBUSxHQUFHLGtEQUFRO0FBQzVDO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDeEVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7Ozs7V0N6QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDZkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7Ozs7Ozs7OztBQ0FzQjtBQUNrQjs7QUFFeEMsK0RBQUksRyIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZS5zY3NzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGUuc2Nzcz83NWJhIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21vZHVsZXMvYWJvdXRVcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbW9kdWxlcy9oZWFkZXIuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21vZHVsZXMvaG9tZVBhZ2UuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21vZHVsZXMvaW5pdGlhbGl6ZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbW9kdWxlcy9tZW51UGFnZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiYXNzZXRzL2JhY2tncm91bmQucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Sb2JvdG86d2dodEAzMDA7NDAwOzkwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5ib2R5IHtcXG4gIG1hcmdpbjogMDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUm9ib3RvXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyMzIzMjM7XFxufVxcblxcbi53cmFwcGVyIHtcXG4gIG92ZXJmbG93OiBhdXRvO1xcbiAgbWFyZ2luOiAxMDBweCBhdXRvIDUwcHggYXV0bztcXG4gIG1heC13aWR0aDogMTAwMHB4O1xcbn1cXG5cXG5tYWluIHtcXG4gIG92ZXJmbG93OiBhdXRvO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG59XFxubWFpbiBoMSB7XFxuICBmb250LXdlaWdodDogOTAwO1xcbn1cXG5tYWluIHAge1xcbiAgZm9udC13ZWlnaHQ6IDMwMDtcXG4gIGxpbmUtaGVpZ2h0OiAycmVtO1xcbn1cXG5tYWluIGJ1dHRvbiB7XFxuICBtYXJnaW4tdG9wOiAzcmVtO1xcbn1cXG5cXG4uaG9tZXBhZ2UtYmFja2dyb3VuZCB7XFxuICBvdmVyZmxvdzogYXV0bztcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbi5ob21lcGFnZS1iYWNrZ3JvdW5kIC53cmFwcGVyIHtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbn1cXG5cXG5idXR0b24sIGEge1xcbiAgdHJhbnNpdGlvbjogMC4ycyBhbGw7XFxufVxcblxcbm5hdiB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgcGFkZGluZzogMjBweCAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBnYXA6IDMwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDM1LCAzNSwgMzUsIDAuNik7XFxufVxcbm5hdiBidXR0b24ge1xcbiAgYXBwZWFyYW5jZTogbm9uZTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxuICBjb2xvcjogd2hpdGU7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBwYWRkaW5nOiAwO1xcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gIG1pbi13aWR0aDogNzBweDtcXG59XFxubmF2IGJ1dHRvbjpob3ZlciB7XFxuICBjb2xvcjogI2YyYzM3ODtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjVweDtcXG4gIHRleHQtZGVjb3JhdGlvbjogMXB4IHVuZGVybGluZSAjZjJjMzc4O1xcbiAgdGV4dC11bmRlcmxpbmUtb2Zmc2V0OiA1cHg7XFxufVxcblxcbmJ1dHRvbiB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBhcHBlYXJhbmNlOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YyYzM3ODtcXG4gIGNvbG9yOiAjMjMyMzIzO1xcbiAgZm9udC13ZWlnaHQ6IDkwMDtcXG4gIHBhZGRpbmc6IDE2cHggODBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGJvcmRlcjogbm9uZTtcXG59XFxuYnV0dG9uOmhvdmVyIHtcXG4gIG9wYWNpdHk6IDAuOTtcXG59XFxuYnV0dG9uOmFjdGl2ZSB7XFxuICBvcGFjaXR5OiAwLjg7XFxufVxcblxcbmgyIHtcXG4gIGNvbG9yOiAjZjJjMzc4O1xcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gIGZvbnQtc2l6ZTogM3JlbTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmNhcmQtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDIzMHB4LCAxZnIpKTtcXG4gIGdhcDogMzBweDtcXG4gIHBhZGRpbmc6IDAgNTBweDtcXG59XFxuLmNhcmQtY29udGFpbmVyIC5wcm9kdWN0LWNhcmQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM5MzkzOTtcXG4gIGJveC1zaGFkb3c6ICMyMzIzMjMgMCAwIDEwcHggNnB4O1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuLmNhcmQtY29udGFpbmVyIC5wcm9kdWN0LWNhcmQgLnByb2R1Y3QtY2FyZC1pbWcge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDIwMHB4O1xcbiAgb2JqZWN0LWZpdDogY292ZXI7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4IDEwcHggMCAwO1xcbn1cXG4uY2FyZC1jb250YWluZXIgLnByb2R1Y3QtY2FyZCAuZGVzY3JpcHRpb24tY29udGFpbmVyIHtcXG4gIG1hcmdpbjogMCAyMHB4O1xcbn1cXG4uY2FyZC1jb250YWluZXIgLnByb2R1Y3QtY2FyZCAuZGVzY3JpcHRpb24tY29udGFpbmVyIHAge1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBsZXR0ZXItc3BhY2luZzogMC41cHg7XFxufVxcbi5jYXJkLWNvbnRhaW5lciAucHJvZHVjdC1jYXJkIC5kZXNjcmlwdGlvbi1jb250YWluZXIgLmNvb2tpbmctdGltZS1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDEwcHg7XFxufVxcbi5jYXJkLWNvbnRhaW5lciAucHJvZHVjdC1jYXJkIC5kZXNjcmlwdGlvbi1jb250YWluZXIgLmNvb2tpbmctdGltZS1jb250YWluZXIgc3BhbiB7XFxuICBmb250LXNpemU6IDAuOXJlbTtcXG59XFxuLmNhcmQtY29udGFpbmVyIC5wcm9kdWN0LWNhcmQgLmRlc2NyaXB0aW9uLWNvbnRhaW5lciAuY29va2luZy10aW1lLWNvbnRhaW5lciBpbWcge1xcbiAgaGVpZ2h0OiAxLjZyZW07XFxufVxcbi5jYXJkLWNvbnRhaW5lciAucHJvZHVjdC1jYXJkIC5kZXNjcmlwdGlvbi1jb250YWluZXIgLmJvdHRvbS1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBtYXJnaW46IDEuNHJlbSAwO1xcbn1cXG4uY2FyZC1jb250YWluZXIgLnByb2R1Y3QtY2FyZCAuZGVzY3JpcHRpb24tY29udGFpbmVyIC5ib3R0b20tY29udGFpbmVyIC5ncmFkaW5nLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiA0cHg7XFxufVxcbi5jYXJkLWNvbnRhaW5lciAucHJvZHVjdC1jYXJkIC5kZXNjcmlwdGlvbi1jb250YWluZXIgLmJvdHRvbS1jb250YWluZXIgLmdyYWRpbmctY29udGFpbmVyIGltZyB7XFxuICBoZWlnaHQ6IDAuOHJlbTtcXG59XFxuLmNhcmQtY29udGFpbmVyIC5wcm9kdWN0LWNhcmQgLmRlc2NyaXB0aW9uLWNvbnRhaW5lciAuYm90dG9tLWNvbnRhaW5lciBhIHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgYm9yZGVyLWJvdHRvbTogI2YyYzM3OCAxcHggc29saWQ7XFxuICBjb2xvcjogI2YyYzM3ODtcXG4gIHBhZGRpbmc6IDVweCAxMHB4O1xcbn1cXG4uY2FyZC1jb250YWluZXIgLnByb2R1Y3QtY2FyZCAuZGVzY3JpcHRpb24tY29udGFpbmVyIC5ib3R0b20tY29udGFpbmVyIGE6aG92ZXIge1xcbiAgb3BhY2l0eTogMC44O1xcbn1cXG5cXG4ub3VyLXN0b3J5IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4ub3VyLXN0b3J5IGgyIHtcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxuICBtYXJnaW46IDEuNHJlbSAwO1xcbn1cXG4ub3VyLXN0b3J5IHAge1xcbiAgbGluZS1oZWlnaHQ6IDEuNjVyZW07XFxufVxcbi5vdXItc3RvcnkgLmltYWdlLWNvbnRhaW5lciB7XFxuICBoZWlnaHQ6IDUwMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xcbn1cXG4ub3VyLXN0b3J5IC5pbWFnZS1jb250YWluZXIgZGl2IHtcXG4gIGZsZXg6IDA7XFxufVxcbi5vdXItc3RvcnkgLmltYWdlLWNvbnRhaW5lciBkaXY6bGFzdC1jaGlsZCB7XFxuICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xcbn1cXG4ub3VyLXN0b3J5IC5pbWFnZS1jb250YWluZXIgaW1nIHtcXG4gIHdpZHRoOiAyMDBweDtcXG4gIGhlaWdodDogMjIwcHg7XFxuICBvYmplY3QtZml0OiBjb3ZlcjtcXG59XFxuLm91ci1zdG9yeSAuaW1hZ2UtY29udGFpbmVyIGltZzpudGgtY2hpbGQoMm4rMSkge1xcbiAgbWFyZ2luOiAwIDE1cHggMTVweCAwO1xcbn1cXG4ub3VyLXN0b3J5IGEge1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgZm9udC13ZWlnaHQ6IDkwMDtcXG4gIGxldHRlci1zcGFjaW5nOiAxLjNweDtcXG59XFxuXFxuLm91ci1zdG9yeSA+IGRpdiB7XFxuICBmbGV4OiAxO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFPQTtFQUNFLHNCQUFBO0FBTEY7O0FBUUE7RUFDRSxTQUFBO0VBQ0EsWUFWVztFQVdYLGlDQUFBO0VBQ0EseUJBYmlCO0FBUW5COztBQVNBO0VBQ0UsY0FBQTtFQUNBLDRCQUFBO0VBQ0EsaUJBQUE7QUFORjs7QUFTQTtFQUNFLGNBQUE7RUFDQSxhQUFBO0FBTkY7QUFRRTtFQUNFLGdCQUFBO0FBTko7QUFTRTtFQUNFLGdCQUFBO0VBQ0EsaUJBQUE7QUFQSjtBQVVFO0VBQ0UsZ0JBQUE7QUFSSjs7QUFZQTtFQUNFLGNBQUE7RUFDQSx5REFBQTtFQUNBLDJCQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFURjtBQVdFO0VBQ0UsY0FBQTtBQVRKOztBQWFBO0VBQ0Usb0JBQUE7QUFWRjs7QUFhQTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLFNBQUE7RUFDQSx1Q0FBQTtBQVZGO0FBWUU7RUFDRSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQVZKO0FBWUk7RUFDRSxjQW5GUztFQW9GVCxpQkFBQTtFQUNBLHNCQUFBO0VBQ0Esc0NBQUE7RUFDQSwwQkFBQTtBQVZOOztBQWVBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBL0ZhO0VBZ0diLGNBL0ZpQjtFQWdHakIsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQVpGO0FBY0U7RUFDRSxZQUFBO0FBWko7QUFlRTtFQUNFLFlBQUE7QUFiSjs7QUFpQkE7RUFDRSxjQWhIYTtFQWlIYixtQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQWRGOztBQWlCQTtFQUNFLGFBQUE7RUFDQSwyREFBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0FBZEY7QUFnQkU7RUFDRSx5QkF6SHNCO0VBMEh0QixnQ0FBQTtFQUNBLG1CQUFBO0FBZEo7QUFnQkk7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsNEJBQUE7QUFkTjtBQWlCSTtFQUNFLGNBQUE7QUFmTjtBQWlCTTtFQUNFLGlCQUFBO0VBQ0EscUJBQUE7QUFmUjtBQWtCTTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7QUFoQlI7QUFrQlE7RUFDRSxpQkFBQTtBQWhCVjtBQW1CUTtFQUNFLGNBQUE7QUFqQlY7QUFxQk07RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FBbkJSO0FBcUJRO0VBQ0UsYUFBQTtFQUNBLFFBQUE7QUFuQlY7QUFxQlU7RUFDRSxjQUFBO0FBbkJaO0FBdUJRO0VBQ0UsaUJBQUE7RUFDQSxxQkFBQTtFQUNBLGdDQUFBO0VBQ0EsY0FqTEs7RUFrTEwsaUJBQUE7QUFyQlY7QUF1QlU7RUFDRSxZQUFBO0FBckJaOztBQTZCQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtBQTFCRjtBQTRCRTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7QUExQko7QUE2QkU7RUFDRSxvQkFBQTtBQTNCSjtBQThCRTtFQUNFLGFBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxxQkFBQTtBQTVCSjtBQThCSTtFQUNFLE9BQUE7QUE1Qk47QUErQkk7RUFDRSxzQkFBQTtBQTdCTjtBQWdDSTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7QUE5Qk47QUFpQ0k7RUFDRSxxQkFBQTtBQS9CTjtBQW1DRTtFQUNFLFlBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7QUFqQ0o7O0FBcUNBO0VBQ0UsT0FBQTtBQWxDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Sb2JvdG86d2dodEAzMDA7NDAwOzkwMCZkaXNwbGF5PXN3YXAnKTtcXG4kYWNjZW50LWNvbG9yOiAjZjJjMzc4O1xcbiRiYWNrZ3JvdW5kLWNvbG9yOiAjMjMyMzIzO1xcbiRmb250LWNvbG9yOiB3aGl0ZTtcXG4kZm9udC1jb2xvci1idXR0b246ICRiYWNrZ3JvdW5kLWNvbG9yO1xcbiRjb250ZW50LWNhcmQtYmFja2dyb3VuZDogIzM5MzkzOTtcXG5cXG4qe1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuYm9keXtcXG4gIG1hcmdpbjogMDtcXG4gIGNvbG9yOiAkZm9udC1jb2xvcjtcXG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICRiYWNrZ3JvdW5kLWNvbG9yO1xcbn1cXG5cXG5cXG4ud3JhcHBlcntcXG4gIG92ZXJmbG93OiBhdXRvO1xcbiAgbWFyZ2luOiAxMDBweCBhdXRvIDUwcHggYXV0bztcXG4gIG1heC13aWR0aDogMTAwMHB4O1xcbn1cXG5cXG5tYWlue1xcbiAgb3ZlcmZsb3c6IGF1dG87XFxuICBoZWlnaHQ6IDEwMHZoO1xcblxcbiAgaDF7XFxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XFxuICB9XFxuXFxuICBwe1xcbiAgICBmb250LXdlaWdodDogMzAwO1xcbiAgICBsaW5lLWhlaWdodDogMnJlbTtcXG4gIH1cXG5cXG4gIGJ1dHRvbntcXG4gICAgbWFyZ2luLXRvcDogM3JlbTtcXG4gIH1cXG59XFxuXFxuLmhvbWVwYWdlLWJhY2tncm91bmR7XFxuICBvdmVyZmxvdzogYXV0bztcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChhc3NldHMvYmFja2dyb3VuZC5wbmcpO1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcblxcbiAgLndyYXBwZXJ7XFxuICAgIG1hcmdpbjogMCBhdXRvO1xcbiAgfVxcbn1cXG5cXG5idXR0b24sIGF7XFxuICB0cmFuc2l0aW9uOiAwLjJzIGFsbDtcXG59XFxuXFxubmF2e1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHBhZGRpbmc6IDIwcHggMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ2FwOjMwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjMyMzIzOTk7XFxuXFxuICBidXR0b257XFxuICAgIGFwcGVhcmFuY2U6IG5vbmU7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYmFja2dyb3VuZDogbm9uZTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIHBhZGRpbmc6MDtcXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gICAgbWluLXdpZHRoOiA3MHB4O1xcblxcbiAgICAmOmhvdmVye1xcbiAgICAgIGNvbG9yOiAkYWNjZW50LWNvbG9yO1xcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICAgIGxldHRlci1zcGFjaW5nOiAtMC41cHg7XFxuICAgICAgdGV4dC1kZWNvcmF0aW9uOiAxcHggdW5kZXJsaW5lICRhY2NlbnQtY29sb3I7XFxuICAgICAgdGV4dC11bmRlcmxpbmUtb2Zmc2V0OiA1cHg7ICAgICAgXFxuICAgIH1cXG4gIH1cXG59XFxuXFxuYnV0dG9ue1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYXBwZWFyYW5jZTogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICRhY2NlbnQtY29sb3I7XFxuICBjb2xvcjogJGZvbnQtY29sb3ItYnV0dG9uO1xcbiAgZm9udC13ZWlnaHQ6IDkwMDtcXG4gIHBhZGRpbmc6IDE2cHggODBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGJvcmRlcjogbm9uZTtcXG5cXG4gICY6aG92ZXJ7XFxuICAgIG9wYWNpdHk6IDAuOTtcXG4gIH1cXG5cXG4gICY6YWN0aXZle1xcbiAgICBvcGFjaXR5OiAwLjg7XFxuICB9XFxufVxcblxcbmgye1xcbiAgY29sb3I6ICRhY2NlbnQtY29sb3I7XFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgZm9udC1zaXplOiAzcmVtO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uY2FyZC1jb250YWluZXJ7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgyMzBweCwxZnIpKTtcXG4gIGdhcDogMzBweDtcXG4gIHBhZGRpbmc6IDAgNTBweDtcXG5cXG4gIC5wcm9kdWN0LWNhcmR7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICRjb250ZW50LWNhcmQtYmFja2dyb3VuZDtcXG4gICAgYm94LXNoYWRvdzogJGJhY2tncm91bmQtY29sb3IgMCAwIDEwcHggNnB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcblxcbiAgICAucHJvZHVjdC1jYXJkLWltZ3tcXG4gICAgICB3aWR0aDogMTAwJTtcXG4gICAgICBoZWlnaHQ6IDIwMHB4O1xcbiAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHggMTBweCAwIDA7XFxuICAgIH1cXG5cXG4gICAgLmRlc2NyaXB0aW9uLWNvbnRhaW5lcntcXG4gICAgICBtYXJnaW46IDAgMjBweDtcXG5cXG4gICAgICBwe1xcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgICAgICBsZXR0ZXItc3BhY2luZzogMC41cHg7XFxuICAgICAgfVxcblxcbiAgICAgIC5jb29raW5nLXRpbWUtY29udGFpbmVyIHtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgZ2FwOiAxMHB4O1xcblxcbiAgICAgICAgc3BhbntcXG4gICAgICAgICAgZm9udC1zaXplOiAwLjlyZW07XFxuICAgICAgICB9XFxuXFxuICAgICAgICBpbWd7XFxuICAgICAgICAgIGhlaWdodDogMS42cmVtO1xcbiAgICAgICAgfVxcbiAgICAgIH1cXG5cXG4gICAgICAuYm90dG9tLWNvbnRhaW5lcntcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgbWFyZ2luOiAxLjRyZW0gMDtcXG5cXG4gICAgICAgIC5ncmFkaW5nLWNvbnRhaW5lcntcXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgZ2FwOiA0cHg7XFxuICBcXG4gICAgICAgICAgaW1ne1xcbiAgICAgICAgICAgIGhlaWdodDogMC44cmVtO1xcbiAgICAgICAgICB9XFxuICAgICAgICB9XFxuXFxuICAgICAgICBhe1xcbiAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICAgICAgICBib3JkZXItYm90dG9tOiAgJGFjY2VudC1jb2xvciAxcHggc29saWQ7XFxuICAgICAgICAgIGNvbG9yOiAkYWNjZW50LWNvbG9yO1xcbiAgICAgICAgICBwYWRkaW5nOiA1cHggMTBweDtcXG5cXG4gICAgICAgICAgJjpob3ZlcntcXG4gICAgICAgICAgICBvcGFjaXR5OiAwLjg7XFxuICAgICAgICAgIH1cXG4gICAgICAgIH1cXG4gICAgICB9XFxuICAgIH1cXG4gIH1cXG59XFxuXFxuLm91ci1zdG9yeXtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbiAgaDJ7XFxuICAgIHRleHQtYWxpZ246bGVmdDtcXG4gICAgbWFyZ2luOiAxLjRyZW0gMDtcXG4gIH1cXG5cXG4gIHB7XFxuICAgIGxpbmUtaGVpZ2h0OiAxLjY1cmVtO1xcbiAgfVxcblxcbiAgLmltYWdlLWNvbnRhaW5lcntcXG4gICAgaGVpZ2h0OiA1MDBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcXG4gIFxcbiAgICBkaXYge1xcbiAgICAgIGZsZXg6IDA7XFxuICAgIH1cXG4gIFxcbiAgICBkaXY6bGFzdC1jaGlsZHtcXG4gICAgICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xcbiAgICB9XFxuICBcXG4gICAgaW1nIHtcXG4gICAgICB3aWR0aDogMjAwcHg7XFxuICAgICAgaGVpZ2h0OiAyMjBweDtcXG4gICAgICBvYmplY3QtZml0OiBjb3ZlcjtcXG4gICAgfVxcbiAgXFxuICAgIGltZzpudGgtY2hpbGQoMm4gKyAxKXtcXG4gICAgICBtYXJnaW46IDAgMTVweCAxNXB4IDA7XFxuICAgIH1cXG4gIH1cXG5cXG4gIGF7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICBmb250LXdlaWdodDogOTAwO1xcbiAgICBsZXR0ZXItc3BhY2luZzogMS4zcHg7XFxuICB9XFxufVxcblxcbi5vdXItc3RvcnkgPiBkaXZ7XFxuICBmbGV4OiAxO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBpbWdPbmVTcmMgZnJvbSAnLi4vYXNzZXRzL2ltZ18xLmpwZyc7XG5pbXBvcnQgaW1nVHdvU3JjIGZyb20gJy4uL2Fzc2V0cy9pbWdfMi5qcGcnO1xuaW1wb3J0IGltZ1RocmVlU3JjIGZyb20gJy4uL2Fzc2V0cy9pbWdfMy5qcGcnO1xuaW1wb3J0IGltZ0ZvdXJTcmMgZnJvbSAnLi4vYXNzZXRzL2ltZ180LmpwZyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZUFib3V0VXMoKSB7XG4gIGNvbnN0IHdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3QgaDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICBjb25zdCBkZXNjcmlwdGlvbkNvbnRhaW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3QgaW1nQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IGltZ0lubmVyQ29udGFpbmVyT25lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IGltZ0lubmVyQ29udGFpbmVyVHdvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IHRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIGNvbnN0IGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gIGNvbnN0IGltZ09uZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICBjb25zdCBpbWdUd28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgY29uc3QgaW1nVGhyZWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgY29uc3QgaW1nRm91ciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuXG4gIHdyYXBwZXIuY2xhc3NMaXN0LmFkZCgnd3JhcHBlcicpO1xuICB3cmFwcGVyLmNsYXNzTGlzdC5hZGQoJ291ci1zdG9yeScpO1xuICBkZXNjcmlwdGlvbkNvbnRhaW4uY2xhc3NMaXN0LmFkZCgnZGVzY3JpcHRpb24tY29udGFpbmVyJyk7XG4gIGltZ0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdpbWFnZS1jb250YWluZXInKTtcblxuICBoMi50ZXh0Q29udGVudCA9IFwiT3VyIFN0b3J5XCI7XG4gIHRleHQudGV4dENvbnRlbnQgPSBcIk91ciByZXN0YXVyYW50IHN0b3J5IHN0YXJ0cyB3aXRoIG15IHVuY2xlLiBNeSB1bmNsZSBoYWQgYSByZXN0YXVyYW50IGNhbGxlZCwgQXZlYy4gVGhhdCByZXN0YXVyYW50IGNsb3NlZC4gQSBjb3VwbGUgeWVhcnMgYWdvIG15IGh1c2JhbmQgYW5kIEkgZGVjaWRlZCB0byBidXkgdGhlIHJpZ2h0cyB0byBteSB1bmNsZSdzIHJlc3RhdXJhbnQgYW5kIHN0YXJ0IGEgcmVzdGF1cmFudC4gRm9yIHRoZSBmaXJzdCBjb3VwbGUgeWVhcnMgd2Ugd29ya2VkIHJlYWxseSBoYXJkIG9uIG91ciByZXN0YXVyYW50LiBBZnRlciB0d28geWVhcnMgaXQgYmVnYW4gdG8gbWFrZSBtb25leSBhbmQgd2UgZ290IGV4Y2l0ZWQuXCI7XG4gIGxpbmsudGV4dENvbnRlbnQgPSBcIk1vcmUgQWJvdXQgdXNcIlxuICBsaW5rLmhyZWYgPSBcIiNcIlxuICBpbWdPbmUuc3JjID0gaW1nT25lU3JjO1xuICBpbWdUd28uc3JjID0gaW1nVHdvU3JjO1xuICBpbWdUaHJlZS5zcmMgPSBpbWdUaHJlZVNyYztcbiAgaW1nRm91ci5zcmMgPSBpbWdGb3VyU3JjO1xuXG4gIGRlc2NyaXB0aW9uQ29udGFpbi5hcHBlbmRDaGlsZChoMik7XG4gIGRlc2NyaXB0aW9uQ29udGFpbi5hcHBlbmRDaGlsZCh0ZXh0KTtcbiAgZGVzY3JpcHRpb25Db250YWluLmFwcGVuZENoaWxkKGxpbmspO1xuICBpbWdJbm5lckNvbnRhaW5lck9uZS5hcHBlbmRDaGlsZChpbWdPbmUpO1xuICBpbWdJbm5lckNvbnRhaW5lck9uZS5hcHBlbmRDaGlsZChpbWdUd28pO1xuICBpbWdJbm5lckNvbnRhaW5lclR3by5hcHBlbmRDaGlsZChpbWdUaHJlZSk7XG4gIGltZ0lubmVyQ29udGFpbmVyVHdvLmFwcGVuZENoaWxkKGltZ0ZvdXIpO1xuICBpbWdDb250YWluZXIuYXBwZW5kQ2hpbGQoaW1nSW5uZXJDb250YWluZXJPbmUpO1xuICBpbWdDb250YWluZXIuYXBwZW5kQ2hpbGQoaW1nSW5uZXJDb250YWluZXJUd28pO1xuICB3cmFwcGVyLmFwcGVuZENoaWxkKGltZ0NvbnRhaW5lcik7XG4gIHdyYXBwZXIuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25Db250YWluKTtcblxuICByZXR1cm4gd3JhcHBlcjtcbn0iLCJpbXBvcnQgY3JlYXRlSG9tZVBhZ2UgZnJvbSAnLi9ob21lUGFnZSc7XG5pbXBvcnQgY3JlYXRlTWVudVBhZ2UgZnJvbSAnLi9tZW51UGFnZSc7XG5pbXBvcnQgY3JlYXRlQWJvdXRVcyBmcm9tICcuL2Fib3V0VXMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVIZWFkZXIoKSB7XG4gIGNvbnN0IG5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ25hdicpO1xuICBjb25zdCBob21lQnV0dG9uID0gY3JlYXRlQnRuKCdIb21lJywgaGFuZGxlUGFnZUNoYW5nZSlcbiAgY29uc3QgbWVudUJ1dHRvbiA9IGNyZWF0ZUJ0bignTWVudScsIGhhbmRsZVBhZ2VDaGFuZ2UpXG4gIGNvbnN0IGFib3V0VXNCdXR0b24gPSBjcmVhdGVCdG4oJ0Fib3V0IHVzJywgaGFuZGxlUGFnZUNoYW5nZSk7XG4gIFxuICBuYXYuYXBwZW5kQ2hpbGQoaG9tZUJ1dHRvbik7XG4gIG5hdi5hcHBlbmRDaGlsZChtZW51QnV0dG9uKTtcbiAgbmF2LmFwcGVuZENoaWxkKGFib3V0VXNCdXR0b24pO1xuXG4gIHJldHVybiBuYXY7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUJ0bih0ZXh0LCBvbkNsaWNrKSB7XG4gIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBidXR0b24udGV4dENvbnRlbnQgPSB0ZXh0O1xuICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBvbkNsaWNrKTtcbiAgcmV0dXJuIGJ1dHRvbjtcbn1cblxuZnVuY3Rpb24gaGFuZGxlUGFnZUNoYW5nZShlKSB7XG4gIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtYWluJyk7XG4gIG1haW4uaW5uZXJIVE1MID0gJyc7XG4gIHN3aXRjaCAoZS50YXJnZXQudGV4dENvbnRlbnQpIHtcbiAgICBjYXNlICdIb21lJzpcbiAgICAgIG1haW4uYXBwZW5kQ2hpbGQoY3JlYXRlSG9tZVBhZ2UoKSk7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdNZW51JzpcbiAgICAgIG1haW4uYXBwZW5kQ2hpbGQoY3JlYXRlTWVudVBhZ2UoKSk7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdBYm91dCB1cyc6XG4gICAgICBtYWluLmFwcGVuZENoaWxkKGNyZWF0ZUFib3V0VXMoKSk7XG4gICAgICBicmVhaztcbiAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZU1haW5QYWdlKCkgeztcbiAgY29uc3Qgd3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCBiYWNrZ3JvdW5kID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IGgxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgY29uc3QgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5cbiAgd3JhcHBlci5jbGFzc0xpc3QuYWRkKCd3cmFwcGVyJyk7XG4gIGJhY2tncm91bmQuY2xhc3NMaXN0LmFkZCgnaG9tZXBhZ2UtYmFja2dyb3VuZCcpO1xuXG4gIGgxLnRleHRDb250ZW50ID0gJ0dvb2QgRm9vZCwgR3JlYXQgVmliZSc7XG4gIHAudGV4dENvbnRlbnQgPSAnV2Ugc2VydmUgbmljZSBmb29kIGFuZCBwcm92aWRlIGEgZ3JlYXQgcGxhY2UgZm9yIHBlb3BsZSB0byByZWxheCB3aXRoIGZyaWVuZHMsIGZhbWlseSBhbmQgY29sbGVhZ3VlcywgbWFueSBvZiB3aG9tIGhhdmUgYmVlbiBjb21pbmcgdG8gb3VyIHJlc3RhdXJhbnRzIGZvciB5ZWFycy4nXG4gIGJ1dHRvbi50ZXh0Q29udGVudCA9ICdCb29rIEEgVGFibGUnO1xuXG4gIGJhY2tncm91bmQuYXBwZW5kQ2hpbGQod3JhcHBlcik7XG4gIHdyYXBwZXIuYXBwZW5kQ2hpbGQoaDEpO1xuICB3cmFwcGVyLmFwcGVuZENoaWxkKHApO1xuICB3cmFwcGVyLmFwcGVuZENoaWxkKGJ1dHRvbik7XG5cbiAgcmV0dXJuIGJhY2tncm91bmRcbn1cbiIsImltcG9ydCBjcmVhdGVNYWluUGFnZSBmcm9tIFwiLi9ob21lUGFnZVwiO1xuaW1wb3J0IGNyZWF0ZUhlYWRlciBmcm9tIFwiLi9oZWFkZXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaW5pdCgpIHtcbiAgY29uc3Qgcm9vdCA9IGRvY3VtZW50LmJvZHk7XG4gIGNvbnN0IG1haW5Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtYWluJyk7XG4gIFxuICByb290LmFwcGVuZENoaWxkKGNyZWF0ZUhlYWRlcigpKTtcbiAgbWFpbkNvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVNYWluUGFnZSgpKTtcbiAgcm9vdC5hcHBlbmRDaGlsZChtYWluQ29udGFpbmVyKTtcbn1cbiIsImltcG9ydCBpbWdPbmUgZnJvbSAnLi4vYXNzZXRzL2Nvcm5lZF9iZWVmX3NhbmR3aWNoLmpwZyc7XG5pbXBvcnQgaW1nVHdvIGZyb20gJy4uL2Fzc2V0cy9jb3JuZWRfYmVlZi5qcGVnJztcbmltcG9ydCBpbWdUaHJlZSBmcm9tICcuLi9hc3NldHMvd2hpcHBlZF9yaWNvdHRhX3Bhc3RhLmpwZyc7XG5pbXBvcnQgY2xvY2sgZnJvbSAnLi4vYXNzZXRzL2Nsb2NrLnN2Zyc7XG5pbXBvcnQgZnVsbFN0YXIgZnJvbSAnLi4vYXNzZXRzL2Z1bGxfc3Rhci5zdmcnO1xuaW1wb3J0IGhhbGZTdGFyIGZyb20gJy4uL2Fzc2V0cy9oYWxmX3N0YXIuc3ZnJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlTWVudVBhZ2UoKSB7O1xuICBjb25zdCB3cmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IGgyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgY29uc3QgY2FyZENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gIHdyYXBwZXIuY2xhc3NMaXN0LmFkZCgnd3JhcHBlcicpO1xuICBjYXJkQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2NhcmQtY29udGFpbmVyJyk7XG5cbiAgaDIudGV4dENvbnRlbnQgPSBcIlRvZGF5J3MgbWVudVwiO1xuXG4gIGNhcmRDb250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlSXRlbUNhcmQoJ0Nvcm5lZCBCZWVmIFNhbmR3aWNoJywgaW1nT25lKSk7XG4gIGNhcmRDb250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlSXRlbUNhcmQoJ0Nvcm5lZCBCZWVmJywgaW1nVHdvKSk7XG4gIGNhcmRDb250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlSXRlbUNhcmQoJ1doaXBwZWQgUmljb3R0YSBQYXN0YScsIGltZ1RocmVlKSk7XG4gIGNhcmRDb250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlSXRlbUNhcmQoJ1doaXBwZWQgUmljb3R0YSBQYXN0YScsIGltZ1RocmVlKSk7XG4gIGNhcmRDb250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlSXRlbUNhcmQoJ0Nvcm5lZCBCZWVmJywgaW1nVHdvKSk7XG4gIGNhcmRDb250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlSXRlbUNhcmQoJ0Nvcm5lZCBCZWVmIFNhbmR3aWNoJywgaW1nT25lKSk7XG4gIHdyYXBwZXIuYXBwZW5kQ2hpbGQoaDIpO1xuICB3cmFwcGVyLmFwcGVuZENoaWxkKGNhcmRDb250YWluZXIpO1xuXG4gIHJldHVybiB3cmFwcGVyO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVJdGVtQ2FyZCh0ZXh0LCBpbWdVUkwpIHtcbiAgY29uc3QgY2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgY29uc3QgZGVzY3JpcHRpb25Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIGNvbnN0IGNvb2tpbmdUaW1lQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IGNvb2tpbmdUaW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICBjb25zdCB0aW1lSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICBjb25zdCBncmFkaW5nID0gW2RvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpLGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpLGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpLGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpLGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpXTtcbiAgY29uc3QgZ3JhZGluZ0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCBib3R0b21Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3Qgb3JkZXJOb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG5cbiAgY2FyZC5jbGFzc0xpc3QuYWRkKCdwcm9kdWN0LWNhcmQnKTtcbiAgaW1nLmNsYXNzTGlzdC5hZGQoJ3Byb2R1Y3QtY2FyZC1pbWcnKTtcbiAgY29va2luZ1RpbWVDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnY29va2luZy10aW1lLWNvbnRhaW5lcicpO1xuICBkZXNjcmlwdGlvbkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdkZXNjcmlwdGlvbi1jb250YWluZXInKTtcbiAgZ3JhZGluZ0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdncmFkaW5nLWNvbnRhaW5lcicpO1xuICBib3R0b21Db250YWluZXIuY2xhc3NMaXN0LmFkZCgnYm90dG9tLWNvbnRhaW5lcicpO1xuXG4gIGltZy5zcmMgPSBpbWdVUkw7XG4gIGRlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gdGV4dDtcbiAgdGltZUljb24uc3JjID0gY2xvY2s7XG4gIGNvb2tpbmdUaW1lLnRleHRDb250ZW50ID0gJzEwIG1pbnMnO1xuICBvcmRlck5vdy50ZXh0Q29udGVudCA9ICdPcmRlciBOb3cnO1xuICBvcmRlck5vdy5ocmVmID0gJyMnO1xuICBcblxuICBjb29raW5nVGltZUNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aW1lSWNvbik7XG4gIGNvb2tpbmdUaW1lQ29udGFpbmVyLmFwcGVuZENoaWxkKGNvb2tpbmdUaW1lKTtcbiAgZGVzY3JpcHRpb25Db250YWluZXIuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pO1xuICBkZXNjcmlwdGlvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChjb29raW5nVGltZUNvbnRhaW5lcik7XG4gIGdyYWRpbmcuZm9yRWFjaCgoZSwgaSkgPT4ge1xuICAgIGUuc3JjID0gKGkgPT09IDQpID8gIGhhbGZTdGFyIDogZnVsbFN0YXI7XG4gICAgZ3JhZGluZ0NvbnRhaW5lci5hcHBlbmRDaGlsZChlKTtcbiAgfSlcbiAgYm90dG9tQ29udGFpbmVyLmFwcGVuZENoaWxkKGdyYWRpbmdDb250YWluZXIpXG4gIGJvdHRvbUNvbnRhaW5lci5hcHBlbmRDaGlsZChvcmRlck5vdyk7XG4gIGRlc2NyaXB0aW9uQ29udGFpbmVyLmFwcGVuZENoaWxkKGJvdHRvbUNvbnRhaW5lcik7XG4gIGNhcmQuYXBwZW5kQ2hpbGQoaW1nKTtcbiAgY2FyZC5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbkNvbnRhaW5lcik7XG4gIFxuICByZXR1cm4gY2FyZDtcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IFwiLi9zdHlsZS5zY3NzXCI7XG5pbXBvcnQgaW5pdCBmcm9tIFwiLi9tb2R1bGVzL2luaXRpYWxpemVcIjtcblxuaW5pdCgpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==