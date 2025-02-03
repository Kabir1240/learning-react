import { AnyAction } from "redux"

export interface CreateCustomerAction extends AnyAction {
  type: "customer/createCustomer",
  payload: {
    fullName: string,
    nationalId: string,
    createdAt: string
  }
}

export interface UpdateCustomerAction extends AnyAction {
  type: "customer/updateCustomer"
  payload: {
    fullName: string
  }
}

export type action = CreateCustomerAction | UpdateCustomerAction