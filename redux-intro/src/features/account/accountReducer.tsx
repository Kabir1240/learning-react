import { action } from "./accountTypes"
// import { createStore } from "redux";

interface state {
    balance: number,
    loan: number,
    loanPurpose: string
}

const InitialState: state = {
    balance: 0,
    loan: 0,
    loanPurpose: ""
}

export default function accountReducer(state:state=InitialState, action:action): state {
    switch(action.type){
        case "account/deposit":
            return { ...state, balance: state.balance + action.payload };
        case "account/withdraw":
            return { ...state, balance: state.balance - action.payload };
        case "account/requestLoan":
            if (state.loan > 0) return state;
            return {
                ...state,
                loan: action.payload.amount,
                loanPurpose: action.payload.purpose,
                balance: state.balance + action.payload.amount
            }
        case "account/payLoan":
            if (state.loan === 0 || state.balance < state.loan) return state;
            return {
                ...state,
                loan: 0,
                loanPurpose: "",
                balance: state.balance - state.loan
            }
        default:
            return state
    }
}


// export const bankStore = createStore(reducer);