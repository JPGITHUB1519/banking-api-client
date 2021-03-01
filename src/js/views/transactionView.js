import { DOM } from './base';

export const showTransactionAlert = transactionResult => {
  if (transactionResult.transactionStatus === 'failed') {
    showErrorAlert('There are some errors:', transactionResult.message);
  }

  if (transactionResult.transactionStatus === 'successfull') {
    showSuccessAlert('Successfull Transaction!', transactionResult);
  }
}

export const showSuccessAlert = (title, transactionData) => {
  let alertsDOMString;

  DOM.transactionAlert.container.classList.remove('hidden');
  DOM.transactionAlert.container.classList.add('success-alert');
  DOM.transactionAlert.container.classList.remove('error-alert');
  DOM.transactionAlert.title.textContent = title;
  DOM.transactionAlert.list.innerHTML = "";

  alertsDOMString = Object.entries(transactionData.data).map(element => {
    const [key, value] = element;
    return `<li class='not-bullet-point'><span class='bold'>${key}</span>: ${value}</li>`;
  })

  DOM.transactionAlert.list.insertAdjacentHTML('beforeend', alertsDOMString);
}

export const showErrorAlert = (title, errors) => {
  let alertsDOMString;

  DOM.transactionAlert.container.classList.remove('hidden');
  DOM.transactionAlert.container.classList.add('error-alert');
  DOM.transactionAlert.container.classList.remove('success-alert');

  DOM.transactionAlert.title.textContent = title;

  if (typeof errors === 'object') {
    alertsDOMString = Object.values(errors).map(message => {
      return `<li>${message}</li>`;
    });
  } else {
    alertsDOMString = errors;
  }
  

  DOM.transactionAlert.list.innerHTML = "";

  DOM.transactionAlert.list.insertAdjacentHTML('beforeend', alertsDOMString);
}

export const invalidInput = (input) => {
  input.classList.add('invalid-input');
};

export const validInput = (input) => {
  input.classList.remove('invalid-input');
}
