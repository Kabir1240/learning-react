"use strict";
exports.__esModule = true;
var accountSlice_1 = require("../features/account/accountSlice");
var customerSlice_1 = require("../features/customer/customerSlice");
var toolkit_1 = require("@reduxjs/toolkit");
// @ts-ignore
// const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
// const store = createStore(rootReducer);
var store = toolkit_1.configureStore({
    reducer: {
        account: accountSlice_1["default"],
        customer: customerSlice_1["default"]
    }
});
exports["default"] = store;
