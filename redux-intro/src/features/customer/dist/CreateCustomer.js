"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_redux_1 = require("react-redux");
var customerSlice_1 = require("./customerSlice");
function Customer() {
    var _a = react_1.useState(""), fullName = _a[0], setFullName = _a[1];
    var _b = react_1.useState(""), nationalId = _b[0], setNationalId = _b[1];
    var dispatch = react_redux_1.useDispatch();
    function handleClick() {
        if (!fullName || !nationalId)
            return;
        dispatch(customerSlice_1.createCustomerAction(fullName, nationalId));
    }
    return (React.createElement("div", null,
        React.createElement("h2", null, "Create new customer"),
        React.createElement("div", { className: "inputs" },
            React.createElement("div", null,
                React.createElement("label", null, "Customer full name"),
                React.createElement("input", { value: fullName, onChange: function (e) { return setFullName(e.target.value); } })),
            React.createElement("div", null,
                React.createElement("label", null, "National ID"),
                React.createElement("input", { value: nationalId, onChange: function (e) { return setNationalId(e.target.value); } })),
            React.createElement("button", { onClick: handleClick }, "Create new customer"))));
}
exports["default"] = Customer;
