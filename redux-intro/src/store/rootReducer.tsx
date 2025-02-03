import { combineReducers } from "redux";
import accountReducer from "../features/account/accountSlice";
import customerReducer from "../features/customer/customerSlice";

const rootReducer = combineReducers({
    account: accountReducer,
    customer: customerReducer,
});


export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;