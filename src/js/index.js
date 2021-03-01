import { DOM } from './views/base';
import { API_URL } from './config';
import  * as transactionController  from './Controllers/transactionController';
import * as accountController from './Controllers/accountController';
import "../main.css";


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
}

const init = () => {
  addEventListeners();
};

init();

