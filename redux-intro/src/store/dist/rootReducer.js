"use strict";
exports.__esModule = true;
var redux_1 = require("redux");
var accountSlice_1 = require("../features/account/accountSlice");
var customerSlice_1 = require("../features/customer/customerSlice");
var rootReducer = redux_1.combineReducers({
    account: accountSlice_1["default"],
    customer: customerSlice_1["default"]
});
exports["default"] = rootReducer;
