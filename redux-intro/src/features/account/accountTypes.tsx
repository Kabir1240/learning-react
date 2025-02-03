import { Action, AnyAction } from "redux"
import { ThunkAction } from "redux-thunk";
import { RootState } from "../../store/store";

export interface DepositAction extends Action {
    type: "account/deposit",
    payload: number
}

export type DepositThunk = ThunkAction<Promise<void>, RootState, unknown, DepositAction | LoadingAction>;

export interface WithdrawAction extends AnyAction {
    type: "account/withdraw",
    payload: number
}

export interface RequestLoanAction extends AnyAction {
    type: "account/requestLoan",
    payload: {
        amount: number,
        purpose: string
    }
}

export interface PayLoanAction extends AnyAction {
    type: "account/payLoan"
}

export interface LoadingAction extends AnyAction {
    type: "account/loading"
}

export type action = DepositAction | WithdrawAction | RequestLoanAction | PayLoanAction | LoadingAction