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
  
  async add(name) {
    const response = await fetch(`${API_URL}\\customers`, {
      method: 'post',
      body: JSON.stringify({
        name: name
      }) 
    });
    return response.json();
  }

  async update(id, name) {
    const response = await fetch(`${API_URL}\\customers\\${id}`, {
      method: 'PUT',
      body: JSON.stringify({
        name: name
      })
    });

    return response.json();
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

  // delete in bulk
  async deleteCustomers(ids) {
    // const responses = await Promise.all(ids.map(async (id) => {
    //   const response = await this.deleteCustomer(id);
    //   return response;
    // }));

    // returns an array of promises
    let responses = ids.map(async (id) => {
      const response = await this.deleteCustomer(id);
      return response;
    });

    // returns a single Promise that resolves to an array of the results of the promises
    responses = await Promise.all(responses);
    return responses;
  }
}
