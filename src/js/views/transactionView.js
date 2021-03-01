import { DOM } from './base';


export const successfullTransactionDOMString = transactionData => {
  const alertsDOMString = Object.entries(transactionData.data).map(element => {
    const [key, value] = element;
    return `<li class='not-bullet-point'><span class='bold'>${key}</span>: ${value}</li>`;
  });

  return alertsDOMString;
};

export const invalidInput = (input) => {
  input.classList.add('invalid-input');
};

export const validInput = (input) => {
  input.classList.remove('invalid-input');
}
