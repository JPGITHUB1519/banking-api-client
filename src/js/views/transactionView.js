import { DOM } from './base';
import currency from 'currency.js';

export const successfullTransactionDOMString = transactionData => {
  const listItemsDomString = Object.entries(transactionData.data).map(element => {
    let [key, value] = element;

    // format amount
    if (key === 'amount') {
      value = currency(value).format();
    }

    return `<li class='not-bullet-point'><span class='bold'>${key}</span>: ${value}</li>`;
  }).join('');

  const alertDOMString = `
    <ul class='alert-list'>
      ${listItemsDomString}
    </ul>
  `;
 

  return alertDOMString;
};
