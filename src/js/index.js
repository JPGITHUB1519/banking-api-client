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

  // Customer CRUD datatable event delegation
  DOM.customerCrud.datatable.addEventListener('click', async e => {
    const targetClassname = e.target.classList[0];
    const id = e.target.parentNode.parentNode.dataset.id;

    if (targetClassname === 'customer-crud-table__edit-button') {
      console.log('Edit Button');
      console.log(id);
    }

    // remove-button
    if (targetClassname === 'customer-crud-table__delete-button') {
      customerController.deleteCustomer(id);
    }

    // read-button
    if (targetClassname === 'customer-crud-table__read-button') {
      console.log('Read Button');
      console.log(id);
    }
  });
}

const init = () => {
  addEventListeners();
};

init();

