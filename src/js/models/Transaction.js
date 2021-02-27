import { API_URL } from '../config';

export default class Transaction {
  constructor(amount, transferorAccountId, transfereeAccountId) {
    if (!amount) {
      throw "Amount cannot be empty";
    } else if (isNaN(amount)) {
      throw "Amount should be a numberic value";
    }

    if (!transferorAccountId) {
      throw "Invalid transferor account";
    }

    if (!transfereeAccountId) {
      throw "Invalid transferee account";
    }

    this.amount = amount;
    this.transferorAccountId = transferorAccountId,
    this.transfereeAccountId = transfereeAccountId;
  }

  async transfer() {
    const data = {
      amount: this.amount,
      transferorAccountId: this.transferorAccountId,
      transfereeAccountId: this.transfereeAccountId
    };

    const response = await fetch(`${API_URL}\\transactions`, {
      method: 'POST',
      body: JSON.stringify(data)
    });

    const json = await response.json();
    
    return json;
  }
}
