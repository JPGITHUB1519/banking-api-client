import { API_URL } from '../config';

export default class Customer {
  findCustomer(customerId) {
    return fetch(`${API_URL}\\customers\\${customerId}`)
      .then(response => response.json());
  }

  findAccountsByCustomer(customerId) {
    return fetch(`${API_URL}\\customers\\${customerId}\\accounts`)
      .then(response => response.json());
  }
}
