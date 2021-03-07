import { DOM } from '../views/base';
import Transaction from '../models/Transaction';
import  * as transactionView from '../views/transactionView';
import * as alertView from '../views/alertView';
import * as validationView from '../views/validationView';
import currency from 'currency.js';

export const makeTransaction = async () => {
  let amount = DOM.amountInput.value;
  const transferorAccountId = DOM.transferorAccountInput.value;
  const transfereeAccountId = DOM.transfereeAccountInput.value;
  
  const transactionFormValidation = validateTransactionForm(amount, transferorAccountId, transfereeAccountId);


  if (transactionFormValidation) {
    // using currency.js library to handle the amount
    amount = currency(DOM.amountInput.value).value;

    const transactionModel = new Transaction(amount, transferorAccountId, transfereeAccountId);
    const transactionResult = await transactionModel.transfer();

    if (transactionResult.transactionStatus === 'failed') {
      alertView.errorAlert(
        DOM.transactionAlertContainer, 
        alertView.generateUnorderedList(transactionResult.message, 'There Are Some Errors')
      );
    } 

    if (transactionResult.transactionStatus === 'successfull') {
      alertView.successAlert(
        DOM.transactionAlertContainer,
        transactionView.successfullTransactionDOMString(transactionResult)
      );
    }
    // transactionView.showTransactionAlert(transactionResult);
  }
};

const validateTransactionForm = (amount, transferorAccountId, transfereeAccountId) => {
  const errorMessage = 'There are some errors:';
  const errors = {};

  if (!amount) {
    errors.amount = "Amount cannot be empty";
    validationView.invalidInput(DOM.amountInput);
  } else if (isNaN(amount)) {
    errors.amount = "Amount should be a numeric value";
    validationView.invalidInput(DOM.amountInput);
  } else if (Number(amount) <= 0) {
    errors.amount = "Amount cannot be 0 or a negative value";
    validationView.invalidInput(DOM.amountInput);
  } else {
    validationView.validInput(DOM.amountInput);
  }

  if (!transferorAccountId) {
    errors.transferorAccountId =  "Transferor account cannot be empty";
    validationView.invalidInput(DOM.transferorAccountInput);
  } else {
    validationView.validInput(DOM.transferorAccountInput);

  }

  if (!transfereeAccountId) {
    errors.transfereeAccountId = "Transferee account cannot be empty";
    validationView.invalidInput(DOM.transfereeAccountInput);
  } else {
    validationView.validInput(DOM.transfereeAccountInput);
  }

  if (Object.keys(errors).length > 0) {
    alertView.errorAlert(DOM.transactionAlertContainer, alertView.generateUnorderedList(errors));
    return false;
  }

  if (transferorAccountId === transfereeAccountId) {
    errors.message = "Transferor and Transferee Accounts cannot be equal";
    validationView.invalidInput(DOM.transferorAccountInput);
    validationView.invalidInput(DOM.transfereeAccountInput);
  }

  return true;
}
