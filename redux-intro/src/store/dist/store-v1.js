"use strict";
exports.__esModule = true;
var redux_1 = require("redux");
var rootReducer_1 = require("./rootReducer");
var redux_thunk_1 = require("redux-thunk");
var redux_devtools_extension_1 = require("redux-devtools-extension");
// @ts-ignore
var store = redux_1.createStore(rootReducer_1["default"], redux_devtools_extension_1.composeWithDevTools(redux_1.applyMiddleware(redux_thunk_1.thunk)));
exports["default"] = store;
