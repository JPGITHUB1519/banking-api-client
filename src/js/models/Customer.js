import { API_URL } from '../config';

export default class Customer {
  findCustomer(id) {
    return fetch(`${API_URL}\\customers\\${id}`)
      .then(response => response.json());
  }

  findAccountsByCustomer(id) {
    return fetch(`${API_URL}\\customers\\${id}\\accounts`)
      .then(response => response.json());
  }

  async seachByName(name) {
    const response = await fetch(`${API_URL}\\customers?name=${name}`);
    const json = await response.json();

    return json;
  }

  async deleteCustomer(id) {
    const response = await fetch(`${API_URL}\\customers\\${id}`, {
      headers: { 'Content-Type': 'application/json', },
      method: 'DELETE'
    });

    return response.status;
  }
}
