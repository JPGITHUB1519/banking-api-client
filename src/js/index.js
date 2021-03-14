import { DOM } from './views/base';
import { API_URL } from './config';
import  * as transactionController  from './controllers/transactionController';
import * as accountController from './controllers/accountController';
import * as customerController from './controllers/customerController';
import "../main.css";
import currency from 'currency.js';

// validate transaction form, return true if correct
const addEventListeners = () => {
  // Transaction
  DOM.transferButton.addEventListener('click', e => {
    e.preventDefault();
    transactionController.makeTransaction();
  });

  // Account Details
  DOM.accountDetailsForm.searchButton.addEventListener('click', e => {
    e.preventDefault();
    accountController.findAccount();
  });

  DOM.customerDetailsForm.searchButton.addEventListener('click', e => {
    e.preventDefault();
    customerController.findCustomer();
  });

  // Customer CRUD
  DOM.customerCrud.searchButton.addEventListener('click', e => {
    e.preventDefault();
    customerController.findCustomers();
  });
  
  DOM.customerCrud.addButton.addEventListener('click', e => {
    e.preventDefault();
    customerController.addCustomerModal();
  });

  // Customer CRUD datatable event delegation
  DOM.customerCrud.datatable.addEventListener('click', async e => {
    const targetClassname = e.target.classList[0];
    const id = e.target.parentNode.parentNode.dataset.id;

    if (targetClassname === 'customer-crud-table__edit-button') {
      customerController.editCustomerModal(id);
    }

    // remove-button
    if (targetClassname === 'customer-crud-table__delete-button') {
      customerController.deleteCustomer(id);
    }

    // read-button
    if (targetClassname === 'customer-crud-table__read-button') {
      customerController.viewCustomerModal();
    }
  });

  DOM.editCustomerFormModal.saveButton.addEventListener('click', e => {
    e.preventDefault();
    customerController.updateCustomerFromModal();
  });

  DOM.addCustomerFormModal.saveButton.addEventListener('click', e => {
    e.preventDefault();
    customerController.addCustomer();
  });

  // modal close buttons events
  DOM.modals.closeButtons.forEach(modalCloseButton => {
    modalCloseButton.addEventListener('click', e => {
      // get the closest modal and close it!
      modalCloseButton.closest('.modal').classList.add('hidden');
    });
  });

  // modal close when clicking outside
  // using event delegation technique
  document.addEventListener('click', e => {
    if (e.target.classList.contains('modal')) {
      e.target.classList.add('hidden');
    }
  });
}

const init = () => {
  addEventListeners();
};

init();

