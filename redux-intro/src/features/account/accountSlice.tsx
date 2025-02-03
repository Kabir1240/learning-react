import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { DepositAction, DepositThunk } from "./accountTypes";


export interface state {
    balance: number,
    loan: number,
    loanPurpose: string,
    isLoading: boolean
}

const initialState: state = {
    balance: 0,
    loan: 0,
    loanPurpose: "",
    isLoading: false,
}

const deposit = (state: state, action: PayloadAction<number>) => {
    state.balance += action.payload;
    state.isLoading = false;
}

const withdraw = (state: state, action: PayloadAction<number>) => {
    state.balance -= action.payload;
}

const requestLoan = (state: state, action: PayloadAction<{ amount: number; purpose: string }>) => {
    if (state.loan > 0) return;

    state.loan = action.payload.amount;
    state.loanPurpose = action.payload.purpose;
    state.balance += action.payload.amount;
}

const payLoan = (state: state) => {
    if (state.loan === 0 || state.balance < state.loan) return state;

    state.balance -= state.loan
    state.loan = 0;
    state.loanPurpose = "";
}

const loading = (state: state) => {
    state.isLoading = true;
}

const AccountSlice = createSlice({
    name: 'account',
    initialState,
    reducers: {
        deposit,
        withdraw,
        requestLoan,
        payLoan,
        loading
    }
})

export const {
    withdraw: withdrawAction,
    requestLoan: requestLoanAction,
    payLoan: payLoanAction,
    loading: loadingAction } = AccountSlice.actions;

export function depositAction(amount: number, currency: string): DepositAction | DepositThunk {
  if (currency === "USD") {
    return {
        type: "account/deposit",
        payload: amount
    }
  };

  return async function (dispatch, getState): Promise<void>{
    dispatch(loadingAction())
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

export default AccountSlice.reducer;;

// export default function accountReducer(state:state=InitialState, action:AnyAction): state {
//     switch(action.type){
//         case "account/deposit":
//             return {
//                 ...state,
//                 balance: state.balance + action.payload,
//                 isLoading: false,
//             };
//         case "account/withdraw":
//             return { ...state, balance: state.balance - action.payload };
//         case "account/requestLoan":
//             if (state.loan > 0) return state;
//             return {
//                 ...state,
//                 loan: action.payload.amount,
//                 loanPurpose: action.payload.purpose,
//                 balance: state.balance + action.payload.amount
//             }
//         case "account/payLoan":
//             if (state.loan === 0 || state.balance < state.loan) return state;
//             return {
//                 ...state,
//                 loan: 0,
//                 loanPurpose: "",
//                 balance: state.balance - state.loan
//             }
//         case 'account/loading':
//             return {
//                 ...state,
//                 isLoading: true,
//             }
//         default:
//             return state
//     }
// }


// export const bankStore = createStore(reducer);