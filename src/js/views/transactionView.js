import { DOM } from './base';

export const successfullTransactionDOMString = transactionData => {
  const listItemsDomString = Object.entries(transactionData.data).map(element => {
    const [key, value] = element;
    return `<li class='not-bullet-point'><span class='bold'>${key}</span>: ${value}</li>`;
  }).join('');

  const alertDOMString = `
    <ul class='alert-list'>
      ${listItemsDomString}
    </ul>
  `;
 

  return alertDOMString;
};
