"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_redux_1 = require("react-redux");
var accountSlice_1 = require("./accountSlice");
function AccountOperations() {
    var _a = react_1.useState(0), depositAmount = _a[0], setDepositAmount = _a[1];
    var _b = react_1.useState(0), withdrawalAmount = _b[0], setWithdrawalAmount = _b[1];
    var _c = react_1.useState(0), loanAmount = _c[0], setLoanAmount = _c[1];
    var _d = react_1.useState(""), loanPurpose = _d[0], setLoanPurpose = _d[1];
    var _e = react_1.useState("USD"), currency = _e[0], setCurrency = _e[1];
    var dispatch = react_redux_1.useDispatch();
    var account = react_redux_1.useSelector(function (store) { return store.account; });
    function handleDeposit() {
        if (!depositAmount)
            return;
        dispatch(accountSlice_1.depositAction(Number(depositAmount), currency));
        setDepositAmount(0);
        setCurrency('USD');
    }
    function handleWithdrawal() {
        if (!withdrawalAmount)
            return;
        dispatch(accountSlice_1.withdrawAction(Number(withdrawalAmount)));
        setWithdrawalAmount(0);
    }
    function handleRequestLoan() {
        if (!loanAmount || !loanPurpose)
            return;
        dispatch(accountSlice_1.requestLoanAction({ amount: loanAmount, purpose: loanPurpose }));
        setLoanAmount(0);
    }
    function handlePayLoan() {
        dispatch(accountSlice_1.payLoanAction());
    }
    return (React.createElement("div", null,
        React.createElement("h2", null, "Your account operations"),
        React.createElement("div", { className: "inputs" },
            React.createElement("div", null,
                React.createElement("label", null, "Deposit"),
                React.createElement("input", { type: "number", value: depositAmount, onChange: function (e) { return setDepositAmount(+e.target.value); } }),
                React.createElement("select", { value: currency, onChange: function (e) { return setCurrency(e.target.value); } },
                    React.createElement("option", { value: "USD" }, "US Dollar"),
                    React.createElement("option", { value: "EUR" }, "Euro"),
                    React.createElement("option", { value: "GBP" }, "British Pound")),
                React.createElement("button", { onClick: handleDeposit, disabled: account.isLoading },
                    "Deposit ",
                    depositAmount)),
            React.createElement("div", null,
                React.createElement("label", null, "Withdraw"),
                React.createElement("input", { type: "number", value: withdrawalAmount, onChange: function (e) { return setWithdrawalAmount(+e.target.value); } }),
                React.createElement("button", { onClick: handleWithdrawal },
                    "Withdraw ",
                    withdrawalAmount)),
            React.createElement("div", null,
                React.createElement("label", null, "Request loan"),
                React.createElement("input", { type: "number", value: loanAmount, onChange: function (e) { return setLoanAmount(+e.target.value); }, placeholder: "Loan amount" }),
                React.createElement("input", { value: loanPurpose, onChange: function (e) { return setLoanPurpose(e.target.value); }, placeholder: "Loan purpose" }),
                React.createElement("button", { onClick: handleRequestLoan }, "Request loan")),
            account.loan > 0 && (React.createElement("div", null,
                React.createElement("span", null,
                    "Pay back ",
                    account.loan,
                    " ",
                    account.loanPurpose,
                    " "),
                React.createElement("button", { onClick: handlePayLoan }, "Pay loan"))))));
}
exports["default"] = AccountOperations;
