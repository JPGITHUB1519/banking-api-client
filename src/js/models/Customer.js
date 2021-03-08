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

  async seachByName(name) {
    const response = await fetch(`${API_URL}\\customers?name=${name}`);
    const json = await response.json();

    return json;
  }
}
