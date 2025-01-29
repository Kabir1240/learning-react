import { combineReducers } from "redux";
import accountReducer from "../features/account/accountReducer";
import customerReducer from "../features/customer/customerReducer";

const rootReducer = combineReducers({
    account: accountReducer,
    customer: customerReducer,
});

export default rootReducer;