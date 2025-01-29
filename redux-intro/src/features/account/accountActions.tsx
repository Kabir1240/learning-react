import { DepositAction, WithdrawAction, RequestLoanAction, PayLoanAction } from "./accountTypes"

export function deposit(amount: number): DepositAction {
  return {
      type: "account/deposit",
      payload: amount
  }
}

export function withdraw(amount: number): WithdrawAction {
  return {
      type: "account/withdraw",
      payload: amount
  }
}

export function requestLoan(amount: number, purpose: string): RequestLoanAction {
  return {
      type: "account/requestLoan",
      payload: {
          amount: amount,
          purpose: purpose
      }
  }
}

export function payLoan(): PayLoanAction {
  return {
      type: "account/payLoan"
  }
}