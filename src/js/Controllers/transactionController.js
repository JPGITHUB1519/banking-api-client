import { DOM } from '../views/base';
import Transaction from '../models/Transaction';
import  * as transactionView from '../views/transactionView';

export const makeTransaction = async () => {
  const amount = DOM.amountInput.value;
  const transferorAccountId = DOM.transferorAccountInput.value;
  const transfereeAccountId = DOM.transfereeAccountInput.value;
  
  const transactionFormValidation = validateTransactionForm(amount, transferorAccountId, transfereeAccountId);


  if (transactionFormValidation) {
    const transactionModel = new Transaction(amount, transferorAccountId, transfereeAccountId);
    const transactionResult = await transactionModel.transfer();
  
    transactionView.showTransactionAlert(transactionResult);
  }
};

const validateTransactionForm = (amount, transferorAccountId, transfereeAccountId) => {
  const errorMessage = 'There are some errors:';
  const errors = {};

  if (!amount) {
    errors.amount = "Amount cannot be empty";
    transactionView.invalidInput(DOM.amountInput);
  } else if (isNaN(amount)) {
    errors.amount = "Amount should be a numberic value";
    transactionView.invalidInput(DOM.amountInput);
  } else {
    transactionView.validInput(DOM.amountInput);
  }

  if (!transferorAccountId) {
    errors.transferorAccountId =  "Transferor account cannot be empty";
    transactionView.invalidInput(DOM.transferorAccountInput);
  } else {
    transactionView.validInput(DOM.transferorAccountInput);

  }

  if (!transfereeAccountId) {
    errors.transfereeAccountId = "Transferee account cannot be empty";
    transactionView.invalidInput(DOM.transfereeAccountInput);
  } else {
    transactionView.validInput(DOM.transfereeAccountInput);
  }

  if (Object.keys(errors).length > 0) {
    transactionView.showErrorAlert(errorMessage, errors);
    return false;
  }

  if (transferorAccountId === transfereeAccountId) {
    errors.message = "Transferor and Transferee Accounts cannot be equal";
    transactionView.invalidInput(DOM.transferorAccountInput);
    transactionView.invalidInput(DOM.transfereeAccountInput);
  }

  return true;
}
