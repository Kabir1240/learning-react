"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var initialState = {
    fullName: '',
    nationalId: '',
    createdAt: ''
};
function customerReducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case "customer/createCustomer":
            return __assign(__assign({}, state), { fullName: action.payload.fullName, nationalId: action.payload.nationalId, createdAt: action.payload.createdAt });
        case "customer/updateCustomer":
            return __assign(__assign({}, state), { fullName: action.payload.fullName });
        default:
            return state;
    }
}
exports["default"] = customerReducer;
