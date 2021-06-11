/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Gra.ts":
/*!********************!*\
  !*** ./src/Gra.ts ***!
  \********************/
/*! namespace exports */
/*! export Gra [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Gra\": () => /* binding */ Gra\n/* harmony export */ });\nvar __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {\r\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\r\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\r\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\r\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\r\n};\r\nvar __metadata = (undefined && undefined.__metadata) || function (k, v) {\r\n    if (typeof Reflect === \"object\" && typeof Reflect.metadata === \"function\") return Reflect.metadata(k, v);\r\n};\r\nvar Gra = /** @class */ (function () {\r\n    function Gra() {\r\n        this.kolory = [\"green\", \"red\", \"blue\", \"yellow\", \"pink\"];\r\n        this.tabstr = [];\r\n        this.plansza();\r\n        this.tab = [];\r\n        this.punkty1 = 0;\r\n        this.kulki();\r\n        this.kolorek();\r\n        this.punkty();\r\n        this.border();\r\n    }\r\n    Gra.prototype.plansza = function () {\r\n        for (var i = 0; i < 9; i++) {\r\n            this.tabstr[i] = [];\r\n            for (var j = 0; j < 9; j++) {\r\n                var pola = document.createElement(\"div\");\r\n                pola.className = \"pola\";\r\n                pola.id = \"id\" + i + \"__\" + j;\r\n                this.tabstr[i][j] = \"id\" + i + \"__\" + j;\r\n                var plansza = document.getElementById(\"gra\");\r\n                plansza.appendChild(pola);\r\n            }\r\n        }\r\n        for (var i = 0; i < 9; i++) {\r\n            for (var j = 0; j < 9; j++) {\r\n                var divek = document.getElementById(\"id\" + i + \"__\" + j);\r\n                divek.style.left = (j * 52).toString() + \"px\";\r\n                divek.style.top = (i * 52).toString() + \"px\";\r\n            }\r\n        }\r\n    };\r\n    Gra.prototype.kulki = function () {\r\n        for (var i = 0; i < 9; i++) {\r\n            this.tab[i] = [];\r\n            for (var j = 0; j < 9; j++) {\r\n                this.tab[i][j] = \"0\";\r\n            }\r\n        }\r\n        for (var a = 0; a < 3; a++) {\r\n            var b = Math.floor(Math.random() * 9);\r\n            var c = Math.floor(Math.random() * 9);\r\n            if (this.tab[b][c] == \"X\") {\r\n                a--;\r\n            }\r\n            else {\r\n                this.tab[b][c] = \"X\";\r\n            }\r\n        }\r\n        for (var i = 0; i < 9; i++) {\r\n            for (var j = 0; j < 9; j++) {\r\n                if (this.tab[i][j] == \"X\") {\r\n                    var kolor = Math.floor(Math.random() * 5);\r\n                    var pole = document.getElementById(\"id\" + i + \"__\" + j);\r\n                    var kol = document.createElement(\"div\");\r\n                    kol.className = \"kule\";\r\n                    kol.style.backgroundColor = this.kolory[kolor];\r\n                    pole.appendChild(kol);\r\n                    pole.className = \"kulka\";\r\n                }\r\n            }\r\n        }\r\n    };\r\n    Gra.prototype.kolorek = function () {\r\n        var divek = document.createElement(\"div\");\r\n        divek.id = \"losowanie\";\r\n        document.body.appendChild(divek);\r\n        for (var a = 0; a < 3; a++) {\r\n            var kolor = Math.floor(Math.random() * 5);\r\n            var kol = document.createElement(\"div\");\r\n            kol.className = \"losowanie\";\r\n            kol.id = a.toString();\r\n            kol.style.backgroundColor = this.kolory[kolor];\r\n            divek.appendChild(kol);\r\n        }\r\n    };\r\n    Gra.prototype.punkty = function () {\r\n        var XD = document.createElement(\"div\");\r\n        XD.id = \"koment\";\r\n        document.body.appendChild(XD);\r\n        var kol1 = document.createElement(\"div\");\r\n        kol1.className = \"punkty\";\r\n        kol1.id = \"punkty\";\r\n        kol1.innerHTML = \"TWOJE PUNKTY: \" + this.punkty1;\r\n        document.body.appendChild(kol1);\r\n    };\r\n    Gra.prototype.border = function () {\r\n        return \"border\";\r\n    };\r\n    Gra.XD = 10;\r\n    __decorate([\r\n        border,\r\n        __metadata(\"design:type\", Function),\r\n        __metadata(\"design:paramtypes\", []),\r\n        __metadata(\"design:returntype\", void 0)\r\n    ], Gra.prototype, \"border\", null);\r\n    return Gra;\r\n}());\r\n\r\nfunction border(target, name, descriptor) {\r\n    descriptor.value = function () {\r\n        var els = document.getElementById(\"losowanie\");\r\n        els.style.border = \"1px\";\r\n        els.style.borderStyle = \"solid\";\r\n        els.style.borderColor = \"black\";\r\n    };\r\n}\r\n\n\n//# sourceURL=webpack://kulki/./src/Gra.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
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
/************************************************************************/
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
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
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
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/Gra.ts");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;