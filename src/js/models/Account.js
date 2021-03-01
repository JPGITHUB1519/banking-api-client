import { API_URL } from '../config';

export default class Account {
  // constructor() {

  // }

  async findById(accountId) {
    const result = await fetch(`${API_URL}\\accounts\\${accountId}`);
    const json = result.json();
    
    return json;
  }
}
