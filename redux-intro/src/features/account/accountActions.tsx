import { DepositAction, WithdrawAction, RequestLoanAction, PayLoanAction, DepositThunk } from "./accountTypes"

export function deposit(amount: number, currency: string): DepositAction | DepositThunk {
  if (currency === "USD") {
    return {
        type: "account/deposit",
        payload: amount
    }
  };

  return async function (dispatch, getState): Promise<void>{
    dispatch({ type: 'account/loading' })
    const response = await fetch(`https://api.frankfurter.dev/v1/latest?base=${currency}&symbols=USD`)
    const data = await response.json()
    const convertedAmount = (amount * data.rates['USD']).toFixed(2);

    dispatch(
      {
        type: 'account/deposit',
        payload: Number(convertedAmount)
      }
    )
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