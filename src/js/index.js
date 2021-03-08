import { DOM } from './views/base';
import { API_URL } from './config';
import  * as transactionController  from './controllers/transactionController';
import * as accountController from './controllers/accountController';
import * as customerController from './controllers/customerController';
import "../main.css";
import currency from 'currency.js';

// validate transaction form, return true if correct
const addEventListeners = () => {
  DOM.transferButton.addEventListener('click', e => {
    e.preventDefault();
    transactionController.makeTransaction();
  });

  DOM.accountDetailsForm.searchButton.addEventListener('click', e => {
    e.preventDefault();
    accountController.findAccount();
  });

  DOM.customerDetailsForm.searchButton.addEventListener('click', e => {
    e.preventDefault();
    customerController.findCustomer();
  });
  
  DOM.customerCrud.searchButton.addEventListener('click', e => {
    e.preventDefault();
    customerController.findCustomers();
  });
}

const init = () => {
  addEventListeners();
};

init();
