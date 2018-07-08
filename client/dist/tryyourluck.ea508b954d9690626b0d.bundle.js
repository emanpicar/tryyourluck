(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tryyourluck"],{

/***/ "./src/css/main.css":
/*!**************************!*\
  !*** ./src/css/main.css ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/css/main.css?");

/***/ }),

/***/ "./src/images/card_back.png":
/*!**********************************!*\
  !*** ./src/images/card_back.png ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/card_back.png\";\n\n//# sourceURL=webpack:///./src/images/card_back.png?");

/***/ }),

/***/ "./src/images/card_lose.png":
/*!**********************************!*\
  !*** ./src/images/card_lose.png ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/card_lose.png\";\n\n//# sourceURL=webpack:///./src/images/card_lose.png?");

/***/ }),

/***/ "./src/images/card_win.png":
/*!*********************************!*\
  !*** ./src/images/card_win.png ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/card_win.png\";\n\n//# sourceURL=webpack:///./src/images/card_win.png?");

/***/ }),

/***/ "./src/images/icon_lose.png":
/*!**********************************!*\
  !*** ./src/images/icon_lose.png ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/icon_lose.png\";\n\n//# sourceURL=webpack:///./src/images/icon_lose.png?");

/***/ }),

/***/ "./src/images/icon_win.png":
/*!*********************************!*\
  !*** ./src/images/icon_win.png ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/icon_win.png\";\n\n//# sourceURL=webpack:///./src/images/icon_win.png?");

/***/ }),

/***/ "./src/js/game/loading.js":
/*!********************************!*\
  !*** ./src/js/game/loading.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _createjs = __webpack_require__(/*! createjs */ \"./node_modules/createjs/builds/1.0.0/createjs.js\");\n\nvar _createjs2 = _interopRequireDefault(_createjs);\n\nvar _assets = __webpack_require__(/*! Js/utils/assets.js */ \"./src/js/utils/assets.js\");\n\nvar _assets2 = _interopRequireDefault(_assets);\n\nvar _game = __webpack_require__(/*! Js/utils/game.js */ \"./src/js/utils/game.js\");\n\nvar _game2 = _interopRequireDefault(_game);\n\nvar _menu = __webpack_require__(/*! Js/game/menu.js */ \"./src/js/game/menu.js\");\n\nvar _menu2 = _interopRequireDefault(_menu);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Loading = function () {\n\tfunction Loading() {\n\t\t_classCallCheck(this, Loading);\n\n\t\tthis.assets = new _assets2.default();\n\t\tthis.menu = new _menu2.default();\n\t}\n\n\t_createClass(Loading, [{\n\t\tkey: \"initialize\",\n\t\tvalue: function initialize() {\n\t\t\tthis.setupCreatejs();\n\t\t}\n\t}, {\n\t\tkey: \"setupCreatejs\",\n\t\tvalue: function setupCreatejs() {\n\t\t\tvar _this = this;\n\n\t\t\t_game2.default.stage = new _createjs2.default.Stage(\"layer-stage\");\n\t\t\t_game2.default.queue = new _createjs2.default.LoadQueue(false, null, true);\n\t\t\t_game2.default.queue.installPlugin(_createjs2.default.Sound);\n\t\t\t_createjs2.default.Ticker.timingMode = _createjs2.default.Ticker.RAF_SYNCHED;\n\t\t\t_createjs2.default.Ticker.framerate = 30;\n\n\t\t\t_game2.default.queue.loadManifest(this.assets.getImages());\n\t\t\t_game2.default.queue.on(\"complete\", function () {\n\t\t\t\t_this.drawAssets();\n\t\t\t});\n\t\t}\n\t}, {\n\t\tkey: \"drawAssets\",\n\t\tvalue: function drawAssets() {\n\t\t\tconsole.log(\"creating assets...\");\n\t\t\tvar cardDeck = this.drawDeck();\n\t\t\tvar cardLeft = this.drawPlayingCard(\"cardLeft\");\n\t\t\tvar cardRight = this.drawPlayingCard(\"cardRight\");\n\n\t\t\t_game2.default.stage.addChild(cardDeck, cardLeft, cardRight);\n\t\t\t_game2.default.stage.update();\n\t\t\tthis.complete();\n\t\t}\n\t}, {\n\t\tkey: \"drawDeck\",\n\t\tvalue: function drawDeck() {\n\t\t\tvar cardDeck = _game2.default.createContainer(\"cardDeck\", 384, 150);\n\t\t\tcardDeck.shadow = new _createjs2.default.Shadow(\"rgba(0, 0, 0, .1)\", 5, 5, 10);\n\n\t\t\tvar card_back1 = _game2.default.createImage(\"\", _game2.default.queue.getResult(\"card_back\"), 0, 0, .35, .35, 65, 101);\n\t\t\tvar card_back2 = _game2.default.createImage(\"\", _game2.default.queue.getResult(\"card_back\"), -1, -2, .35, .35, 65, 101);\n\t\t\tvar card_back3 = _game2.default.createImage(\"\", _game2.default.queue.getResult(\"card_back\"), -2, -4, .35, .35, 65, 101);\n\t\t\tvar card_back4 = _game2.default.createImage(\"\", _game2.default.queue.getResult(\"card_back\"), -3, -6, .35, .35, 65, 101);\n\t\t\tvar card_back5 = _game2.default.createImage(\"\", _game2.default.queue.getResult(\"card_back\"), -4, -8, .35, .35, 65, 101);\n\n\t\t\tcardDeck.addChild(card_back1, card_back2, card_back3, card_back4, card_back5);\n\n\t\t\treturn cardDeck;\n\t\t}\n\t}, {\n\t\tkey: \"drawPlayingCard\",\n\t\tvalue: function drawPlayingCard(name) {\n\t\t\tvar playingCard = _game2.default.createContainer(name, _game2.default.positionList.playingCardPos.x, _game2.default.positionList.playingCardPos.y);\n\t\t\tplayingCard.shadow = new _createjs2.default.Shadow(\"rgba(0, 0, 0, .4)\", 5, 5, 10);\n\t\t\t// playingCard.addEventListener(\"click\", () => {\n\t\t\t// \tconsole.log(\"test\")\n\t\t\t// \tthis.menu.clickCard(name);\n\t\t\t// });\n\n\t\t\tvar card_back = _game2.default.createImage(\"card_back\", _game2.default.queue.getResult(\"card_back\"), 0, 0, .35, .35, 65, 101);\n\n\t\t\tvar cardWin = _game2.default.createContainer(\"cardWin\", 0, 0);\n\t\t\tcardWin.visible = false;\n\t\t\tvar card_win = _game2.default.createImage(\"card_win\", _game2.default.queue.getResult(\"card_win\"), 0, 0, .35, .35, 65, 101);\n\t\t\tvar icon_win = _game2.default.createImage(\"icon_win\", _game2.default.queue.getResult(\"icon_win\"), 0, 0, .05, .05, 297, 269.5);\n\t\t\tcardWin.addChild(card_win, icon_win);\n\n\t\t\tvar cardLose = _game2.default.createContainer(\"cardLose\", 0, 0);\n\t\t\tcardLose.visible = false;\n\t\t\tvar card_lose = _game2.default.createImage(\"card_lose\", _game2.default.queue.getResult(\"card_lose\"), 0, 0, .35, .35, 65, 101);\n\t\t\tvar icon_lose = _game2.default.createImage(\"icon_lose\", _game2.default.queue.getResult(\"icon_lose\"), 0, 0, .2, .2, 100, 68.5);\n\t\t\tcardLose.addChild(card_lose, icon_lose);\n\n\t\t\tplayingCard.addChild(card_back, cardWin, cardLose);\n\n\t\t\treturn playingCard;\n\t\t}\n\t}, {\n\t\tkey: \"complete\",\n\t\tvalue: function complete() {\n\t\t\tconsole.log(\"loading complete...\");\n\t\t\tthis.menu.startGame();\n\t\t}\n\t}]);\n\n\treturn Loading;\n}();\n\nexports.default = Loading;\n\n//# sourceURL=webpack:///./src/js/game/loading.js?");

/***/ }),

/***/ "./src/js/game/menu.js":
/*!*****************************!*\
  !*** ./src/js/game/menu.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _table = __webpack_require__(/*! Js/game/table.js */ \"./src/js/game/table.js\");\n\nvar _table2 = _interopRequireDefault(_table);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Menu = function () {\n\tfunction Menu() {\n\t\t_classCallCheck(this, Menu);\n\n\t\tthis.table = new _table2.default();\n\t}\n\n\t_createClass(Menu, [{\n\t\tkey: \"startGame\",\n\t\tvalue: function startGame() {\n\t\t\tthis.table.startGame();\n\t\t}\n\t}, {\n\t\tkey: \"resetGame\",\n\t\tvalue: function resetGame() {}\n\t}, {\n\t\tkey: \"newPlayer\",\n\t\tvalue: function newPlayer() {}\n\t}, {\n\t\tkey: \"clickCard\",\n\t\tvalue: function clickCard(cardName) {\n\t\t\tconsole.log(cardName);\n\t\t}\n\t}]);\n\n\treturn Menu;\n}();\n\nexports.default = Menu;\n\n//# sourceURL=webpack:///./src/js/game/menu.js?");

/***/ }),

/***/ "./src/js/game/table.js":
/*!******************************!*\
  !*** ./src/js/game/table.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _createjs = __webpack_require__(/*! createjs */ \"./node_modules/createjs/builds/1.0.0/createjs.js\");\n\nvar _createjs2 = _interopRequireDefault(_createjs);\n\nvar _game = __webpack_require__(/*! Js/utils/game.js */ \"./src/js/utils/game.js\");\n\nvar _game2 = _interopRequireDefault(_game);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Table = function () {\n\tfunction Table() {\n\t\t_classCallCheck(this, Table);\n\t}\n\n\t_createClass(Table, [{\n\t\tkey: \"startGame\",\n\t\tvalue: function startGame() {\n\t\t\tconsole.log(_game2.default.stage);\n\t\t\t_game2.default.gamePlay({ name: \"startGame\", status: true });\n\t\t\tvar cardLeft = _game2.default.stage.getChildByName(\"cardLeft\");\n\t\t\tvar cardRight = _game2.default.stage.getChildByName(\"cardRight\");\n\n\t\t\tthis.animateCardRight(cardLeft, cardRight);\n\t\t}\n\t}, {\n\t\tkey: \"animateCardRight\",\n\t\tvalue: function animateCardRight(cardLeft, cardRight) {\n\t\t\tvar _this = this;\n\n\t\t\t_createjs2.default.Tween.get(cardRight).to({\n\t\t\t\tx: _game2.default.positionList.rightCardRevealPos.x,\n\t\t\t\ty: _game2.default.positionList.rightCardRevealPos.y,\n\t\t\t\tscaleX: 2,\n\t\t\t\tscaleY: 2\n\t\t\t}, 500, _createjs2.default.Ease.sineIn).call(function () {\n\t\t\t\t_this.animateCardLeft(cardLeft);\n\t\t\t});\n\t\t}\n\t}, {\n\t\tkey: \"animateCardLeft\",\n\t\tvalue: function animateCardLeft(cardLeft) {\n\t\t\t_createjs2.default.Tween.get(cardLeft).to({\n\t\t\t\tx: _game2.default.positionList.leftCardRevealPos.x,\n\t\t\t\ty: _game2.default.positionList.leftCardRevealPos.y,\n\t\t\t\tscaleX: 2,\n\t\t\t\tscaleY: 2\n\t\t\t}, 500, _createjs2.default.Ease.sineIn).call(function () {\n\t\t\t\t_game2.default.gamePlay({ name: \"startGame\", status: false });\n\t\t\t});\n\t\t}\n\t}]);\n\n\treturn Table;\n}();\n\nexports.default = Table;\n\n//# sourceURL=webpack:///./src/js/game/table.js?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n__webpack_require__(/*! Css/main.css */ \"./src/css/main.css\");\n\nvar _createjs = __webpack_require__(/*! createjs */ \"./node_modules/createjs/builds/1.0.0/createjs.js\");\n\nvar _createjs2 = _interopRequireDefault(_createjs);\n\nvar _loading = __webpack_require__(/*! Js/game/loading.js */ \"./src/js/game/loading.js\");\n\nvar _loading2 = _interopRequireDefault(_loading);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Main = function Main() {\n\t_classCallCheck(this, Main);\n\n\tvar loading = new _loading2.default();\n\tloading.initialize();\n};\n\n(function () {\n\tnew Main();\n})();\n\n//# sourceURL=webpack:///./src/js/index.js?");

/***/ }),

/***/ "./src/js/utils/assets.js":
/*!********************************!*\
  !*** ./src/js/utils/assets.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _card_win = __webpack_require__(/*! Images/card_win.png */ \"./src/images/card_win.png\");\n\nvar _card_win2 = _interopRequireDefault(_card_win);\n\nvar _card_lose = __webpack_require__(/*! Images/card_lose.png */ \"./src/images/card_lose.png\");\n\nvar _card_lose2 = _interopRequireDefault(_card_lose);\n\nvar _card_back = __webpack_require__(/*! Images/card_back.png */ \"./src/images/card_back.png\");\n\nvar _card_back2 = _interopRequireDefault(_card_back);\n\nvar _icon_lose = __webpack_require__(/*! Images/icon_lose.png */ \"./src/images/icon_lose.png\");\n\nvar _icon_lose2 = _interopRequireDefault(_icon_lose);\n\nvar _icon_win = __webpack_require__(/*! Images/icon_win.png */ \"./src/images/icon_win.png\");\n\nvar _icon_win2 = _interopRequireDefault(_icon_win);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Assets = function () {\n\tfunction Assets() {\n\t\t_classCallCheck(this, Assets);\n\t}\n\n\t_createClass(Assets, [{\n\t\tkey: \"getImages\",\n\t\tvalue: function getImages() {\n\t\t\treturn [{ id: \"card_win\", src: _card_win2.default }, { id: \"card_lose\", src: _card_lose2.default }, { id: \"card_back\", src: _card_back2.default }, { id: \"icon_lose\", src: _icon_lose2.default }, { id: \"icon_win\", src: _icon_win2.default }];\n\t\t}\n\t}]);\n\n\treturn Assets;\n}();\n\nexports.default = Assets;\n\n//# sourceURL=webpack:///./src/js/utils/assets.js?");

/***/ }),

/***/ "./src/js/utils/game.js":
/*!******************************!*\
  !*** ./src/js/utils/game.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nvar _createjs = __webpack_require__(/*! createjs */ \"./node_modules/createjs/builds/1.0.0/createjs.js\");\n\nvar _createjs2 = _interopRequireDefault(_createjs);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar Game = {\n\tstage: \"\",\n\tqueue: \"\",\n\tpositionList: {\n\t\tplayingCardPos: { x: 380, y: 142 },\n\t\tleftCardRevealPos: { x: 230, y: 252 },\n\t\trightCardRevealPos: { x: 530, y: 252 }\n\t},\n\tcreateContainer: function createContainer(name, x, y) {\n\t\tvar container = new _createjs2.default.Container();\n\t\tcontainer.name = name;\n\t\tcontainer.x = x;\n\t\tcontainer.y = y;\n\n\t\treturn container;\n\t},\n\tcreateImage: function createImage(name, imagePath, x, y, scaleX, scaleY, regX, regY) {\n\t\tvar image = new _createjs2.default.Bitmap(imagePath);\n\t\timage.name = name;\n\t\timage.x = x;\n\t\timage.y = y;\n\t\timage.scaleX = scaleX;\n\t\timage.scaleY = scaleY;\n\t\timage.regX = regX;\n\t\timage.regY = regY;\n\n\t\treturn image;\n\t},\n\n\teventListTimeout: null,\n\teventList: {},\n\tgamePlay: function gamePlay(event) {\n\t\tvar _this = this;\n\n\t\tthis.eventList[event.name] = event.status;\n\t\tvar stringifyEventList = JSON.stringify(this.eventList);\n\n\t\tif (stringifyEventList.match(true)) {\n\n\t\t\tif (!_createjs2.default.Ticker.hasEventListener(\"tick\")) {\n\t\t\t\t_createjs2.default.Ticker.addEventListener(\"tick\", this.stage);\n\t\t\t}\n\t\t} else {\n\t\t\tclearTimeout(this.eventListTimeout);\n\t\t\tthis.eventListTimeout = setTimeout(function () {\n\t\t\t\t_createjs2.default.Ticker.removeEventListener(\"tick\", _this.stage);\n\t\t\t}, 1000);\n\t\t}\n\t}\n};\n\nexports.default = Game;\n\n//# sourceURL=webpack:///./src/js/utils/game.js?");

/***/ })

},[["./src/js/index.js","runtime~tryyourluck","vendor"]]]);