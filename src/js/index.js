import { DOM } from './views/base';
import Transaction from './models/Transaction';
import  * as transactionView from './views/transactionView'
import "../main.css"

const makeTransaction = async () => {
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


// validate transaction form, return true if correct
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

const addEventListeners = () => {
  DOM.transferButton.addEventListener('click', (e) => {
    e.preventDefault();
    makeTransaction();
  });
}

addEventListeners();

// makeTransaction().then(result => {
//   console.log(result);
// });

// const transactionModel = new Transaction('500.50', 1, 3);
// transactionModel.transfer();

// async function getCustomers() {
//   const response = await fetch('http://localhost:8090/php-banking-api-test-gpcuaw/project/api/customers');
//   const json = await response.json();
//   return json;
// }

// async function addCustomer() {
//   const data = {
//     name: 'jean'
//   };

//   const response = await fetch('http://localhost:8090/php-banking-api-test-gpcuaw/project/api/customers', {
//     method: 'POST',
//     body: JSON.stringify(data)
//   });

//   const json = await response.json();

//   if (response.status === response.ok) {
//     console.log(json);
//   } else {
//     console.log(json);
//   }
// }

// getCustomers().then(json => {
//   json.data.forEach(element => {
//     console.log(element);
//   });
// });

// addCustomer().then(() => {

// });


