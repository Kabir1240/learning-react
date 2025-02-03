// import { createStore } from "redux"
// import { AnyAction } from "redux"
// import { action } from "./customerTypes"

import { createSlice, PayloadAction } from "@reduxjs/toolkit"

export interface state {
  fullName: string,
  nationalId: string,
  createdAt: string
}

const initialState: state = {
  fullName: '',
  nationalId: '',
  createdAt: '',
}

const createCustomer = {
  prepare(fullName: string, nationalId: string) {
    return {
      payload: {
        fullName,
        nationalId,
        createdAt: new Date().toISOString(),
      }
    }
  },

  reducer(state: state, action: PayloadAction<{ fullName: string, nationalId: string, createdAt: string }>) {
    state.fullName = action.payload.fullName;
    state.nationalId = action.payload.nationalId;
    state.createdAt = action.payload.createdAt;
  }
}

const updateCustomer = (state: state, action: PayloadAction<string>) => {
  state.fullName = action.payload;
}

const customerSlice = createSlice({
  name: 'customer',
  initialState,
  reducers: {
    createCustomer,
    updateCustomer
  }
})

export const {
  createCustomer: createCustomerAction,
  updateCustomer: updateCustomerAction
} = customerSlice.actions;

export default customerSlice.reducer;

// export default function customerReducer(state:state=initialState, action: AnyAction): state {
//   switch (action.type){
//     case "customer/createCustomer":
//       return {
//         ...state,
//         fullName: action.payload.fullName,
//         nationalId: action.payload.nationalId,
//         createdAt: action.payload.createdAt
//       }
//     case "customer/updateCustomer":
//       return {
//         ...state,
//         fullName: action.payload.fullName
//       }
//     default:
//       return state
//   }
// }
