// import { createStore } from "redux"
import { action } from "./customerTypes"

interface state {
  fullName: string,
  nationalId: string,
  createdAt: string
}

const initialState: state = {
  fullName: '',
  nationalId: '',
  createdAt: '',
}

export default function customerReducer(state:state=initialState, action: action): state {
  switch (action.type){
    case "customer/createCustomer":
      return {
        ...state,
        fullName: action.payload.fullName,
        nationalId: action.payload.nationalId,
        createdAt: action.payload.createdAt
      }
    case "customer/updateCustomer":
      return {
        ...state,
        fullName: action.payload.fullName
      }
    default:
      return state
  }
}
