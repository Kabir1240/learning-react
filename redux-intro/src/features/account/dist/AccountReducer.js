"use strict";
var _a;
exports.__esModule = true;
exports.payLoanAction = exports.requestLoanAction = exports.withdrawAction = exports.depositAction = void 0;
var toolkit_1 = require("@reduxjs/toolkit");
var initialState = {
    balance: 0,
    loan: 0,
    loanPurpose: "",
    isLoading: false
};
var deposit = function (state, action) {
    state.balance += action.payload;
};
var withdraw = function (state, action) {
    state.balance -= action.payload;
};
var requestLoan = function (state, action) {
    if (state.loan > 0)
        return;
    state.loan = action.payload.amount;
    state.loanPurpose = action.payload.purpose;
    state.balance += action.payload.amount;
};
var payLoan = function (state) {
    if (state.loan === 0 || state.balance < state.loan)
        return state;
    state.balance -= state.loan;
    state.loan = 0;
    state.loanPurpose = "";
};
var AccountSlice = toolkit_1.createSlice({
    name: 'account',
    initialState: initialState,
    reducers: {
        deposit: deposit,
        withdraw: withdraw,
        requestLoan: requestLoan,
        payLoan: payLoan
    }
});
exports.depositAction = (_a = AccountSlice.actions, _a.deposit), exports.withdrawAction = _a.withdraw, exports.requestLoanAction = _a.requestLoan, exports.payLoanAction = _a.payLoan;
exports["default"] = AccountSlice.reducer;
;
// export default function accountReducer(state:state=InitialState, action:AnyAction): state {
//     switch(action.type){
//         case "account/deposit":
//             return {
//                 ...state,
//                 balance: state.balance + action.payload,
//                 isLoading: false,
//             };
//         case "account/withdraw":
//             return { ...state, balance: state.balance - action.payload };
//         case "account/requestLoan":
//             if (state.loan > 0) return state;
//             return {
//                 ...state,
//                 loan: action.payload.amount,
//                 loanPurpose: action.payload.purpose,
//                 balance: state.balance + action.payload.amount
//             }
//         case "account/payLoan":
//             if (state.loan === 0 || state.balance < state.loan) return state;
//             return {
//                 ...state,
//                 loan: 0,
//                 loanPurpose: "",
//                 balance: state.balance - state.loan
//             }
//         case 'account/loading':
//             return {
//                 ...state,
//                 isLoading: true,
//             }
//         default:
//             return state
//     }
// }
// export const bankStore = createStore(reducer);
