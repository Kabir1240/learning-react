export interface DepositAction {
    type: "account/deposit",
    payload: number
}

export interface WithdrawAction {
    type: "account/withdraw",
    payload: number
}

export interface RequestLoanAction {
    type: "account/requestLoan",
    payload: {
        amount: number,
        purpose: string
    }
}

export interface PayLoanAction {
    type: "account/payLoan"
}

export type action = DepositAction | WithdrawAction | RequestLoanAction | PayLoanAction