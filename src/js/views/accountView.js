import { DOM } from './base';
import currency from 'currency.js';


export const displayAccountCard = (accountData) => {
  DOM.accountCard.container.classList.remove('hidden');
  DOM.accountCard.name.textContent = accountData.name;
  DOM.accountCard.balance.textContent = currency(accountData.balance).format();
  DOM.accountCard.customerId.textContent = accountData.customer_id;
  DOM.accountCard.dateOpened.textContent = accountData.date_opened;  
};

export const clearAccountCard = () =>  {
  DOM.accountCard.name.textContent = '';
  DOM.accountCard.balance.textContent = '';
  DOM.accountCard.customerId.textContent = '';
  DOM.accountCard.dateOpened.textContent = '';  
};

export const clearAlerts = () => {
  DOM.accountDetailsAlertContainer.innerHTML = '';
};
