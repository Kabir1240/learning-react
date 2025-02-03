"use strict";
// import { createStore } from "redux"
// import { AnyAction } from "redux"
// import { action } from "./customerTypes"
var _a;
exports.__esModule = true;
exports.updateCustomerAction = exports.createCustomerAction = void 0;
var toolkit_1 = require("@reduxjs/toolkit");
var initialState = {
    fullName: '',
    nationalId: '',
    createdAt: ''
};
var createCustomer = {
    prepare: function (fullName, nationalId) {
        return {
            payload: {
                fullName: fullName,
                nationalId: nationalId,
                createdAt: new Date().toISOString()
            }
        };
    },
    reducer: function (state, action) {
        state.fullName = action.payload.fullName;
        state.nationalId = action.payload.nationalId;
        state.createdAt = action.payload.createdAt;
    }
};
var updateCustomer = function (state, action) {
    state.fullName = action.payload;
};
var customerSlice = toolkit_1.createSlice({
    name: 'customer',
    initialState: initialState,
    reducers: {
        createCustomer: createCustomer,
        updateCustomer: updateCustomer
    }
});
exports.createCustomerAction = (_a = customerSlice.actions, _a.createCustomer), exports.updateCustomerAction = _a.updateCustomer;
exports["default"] = customerSlice.reducer;
// export default function customerReducer(state:state=initialState, action: AnyAction): state {
//   switch (action.type){
//     case "customer/createCustomer":
//       return {
//         ...state,
//         fullName: action.payload.fullName,
//         nationalId: action.payload.nationalId,
//         createdAt: action.payload.createdAt
//       }
//     case "customer/updateCustomer":
//       return {
//         ...state,
//         fullName: action.payload.fullName
//       }
//     default:
//       return state
//   }
// }
