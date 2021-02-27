import { DOM } from './base';

export const showTransactionAlert = transactionResult => {
  if (transactionResult.transactionStatus === 'failed') {
    showErrorAlert('There are some errors:', transactionResult.message);
  }

  if (transactionResult.transactionStatus === 'successfull') {
    console.log('hey');
    showSuccessAlert('Successfull Transaction!', transactionResult);
  }
}

export const showSuccessAlert = (title, transactionData) => {
  let alertsDOMString;

  DOM.alertContainer.classList.remove('hidden');
  DOM.alertContainer.classList.add('success-alert');
  DOM.alertContainer.classList.remove('error-alert');
  DOM.alertTitle.textContent = title;
  DOM.alertList.innerHTML = "";

  alertsDOMString = Object.entries(transactionData.data).map(element => {
    const [key, value] = element;
    return `<li class='not-bullet-point'>${key}: ${value}</li>`;
  })

  DOM.alertList.insertAdjacentHTML('beforeend', alertsDOMString);
}

export const showErrorAlert = (title, errors) => {
  let alertsDOMString;

  DOM.alertContainer.classList.remove('hidden');
  DOM.alertContainer.classList.add('error-alert');
  DOM.alertContainer.classList.remove('success-alert');

  DOM.alertTitle.textContent = title;

  if (typeof errors === 'object') {
    alertsDOMString = Object.values(errors).map(message => {
      return `<li>${message}</li>`;
    });
  } else {
    alertsDOMString = errors;
  }
  

  DOM.alertList.innerHTML = "";

  DOM.alertList.insertAdjacentHTML('beforeend', alertsDOMString);
}

export const invalidInput = (input) => {
  input.classList.add('invalid-input');
};

export const validInput = (input) => {
  input.classList.remove('invalid-input');
}
