export interface CreateCustomerAction {
  type: "customer/createCustomer",
  payload: {
    fullName: string,
    nationalId: string,
    createdAt: string
  }
}

export interface UpdateCustomerAction {
  type: "customer/updateCustomer"
  payload: {
    fullName: string
  }
}

export type action = CreateCustomerAction | UpdateCustomerAction