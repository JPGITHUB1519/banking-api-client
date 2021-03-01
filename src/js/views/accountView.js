import { DOM } from './base';

export const displayAccountCard = (accountData) => {
  DOM.accountCard.container.classList.remove('hidden');
  DOM.accountCard.name.textContent = accountData.name;
  DOM.accountCard.balance.textContent = accountData.balance;
  DOM.accountCard.customerId.textContent = accountData.customer_id;
  DOM.accountCard.dateOpened.textContent = accountData.date_opened;  
};

export const clearAccountCard = () =>  {
  DOM.accountCard.name.textContent = '';
  DOM.accountCard.balance.textContent = '';
  DOM.accountCard.customerId.textContent = '';
  DOM.accountCard.dateOpened.textContent = '';  
};
