import { applyMiddleware, createStore } from "redux";
import rootReducer from "./rootReducer";
import { thunk } from 'redux-thunk';
import { composeWithDevTools } from "redux-devtools-extension";
import { state as accountState } from "../features/account/accountSlice";
import { state as customerState } from "../features/customer/customerSlice";

// Export the RootState type
export type RootState = {
  account: accountState,
  customer: customerState
}

// @ts-ignore
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
// const store = createStore(rootReducer);

export type AppDispatch = typeof store.dispatch;
export default store;
