import { applyMiddleware, createStore } from "redux";
import rootReducer from "./rootReducer";
import { thunk } from 'redux-thunk';
import { composeWithDevTools } from "redux-devtools-extension";
import accountReducer, { state as accountState } from "../features/account/accountSlice";
import customerReducer, { state as customerState } from "../features/customer/customerSlice";
import { configureStore } from "@reduxjs/toolkit";

// Export the RootState type
export type RootState = {
  account: accountState,
  customer: customerState
}

// @ts-ignore
// const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
// const store = createStore(rootReducer);

const store = configureStore({
  reducer: {
    account: accountReducer,
    customer: customerReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export default store;
