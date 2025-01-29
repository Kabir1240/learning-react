import { CreateCustomerAction, UpdateCustomerAction } from "./customerTypes"


export function createCustomer(fullName: string, nationalId: string): CreateCustomerAction {
  return {
    type: "customer/createCustomer",
    payload: {
      fullName: fullName,
      nationalId: nationalId,
      createdAt: new Date().toISOString()
    }
  }
}

export function updateCustomer(fullName: string): UpdateCustomerAction {
  return {
    type: "customer/updateCustomer",
    payload: {
      fullName: fullName
    }
  }
} 