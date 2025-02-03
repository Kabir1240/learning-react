"use strict";
exports.__esModule = true;
var CreateCustomer_1 = require("./features/customer/CreateCustomer");
var Customer_1 = require("./features/customer/Customer");
var AccountOperations_1 = require("./features/account/AccountOperations");
var BalanceDisplay_1 = require("./features/account/BalanceDisplay");
var react_redux_1 = require("react-redux");
function App() {
    var customerFullName = react_redux_1.useSelector(function (store) { return store.customer.fullName; });
    return (React.createElement("div", null,
        React.createElement("h1", null, "\uD83C\uDFE6 The React-Redux Bank \u269B\uFE0F"),
        customerFullName ? (React.createElement(React.Fragment, null,
            React.createElement(Customer_1["default"], null),
            React.createElement(AccountOperations_1["default"], null),
            React.createElement(BalanceDisplay_1["default"], null))) : (React.createElement(CreateCustomer_1["default"], null))));
}
exports["default"] = App;
