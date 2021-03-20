import { DOM } from './base';
import * as tableview from './tableView';
import * as validationView from './validationView';
import currency from 'currency.js';

const getAccountsCardsDOMString = (accountsData) => {
  let accountsCardsDOMString = '';

  accountsData.forEach(accountData => {
    let accountCardDOMString = `
      <div class='account-card card'>
        <p class='card-detail'>
          <span class='bold'>Account Number: </span>
          <span class='account-card__name'>${accountData.id}</span>
        </p>
        <p class='card-detail'>
          <span class='bold'>Account Name: </span>
          <span class='account-card__name'>${accountData.name}</span>
        </p>
        <p class='card-detail'>
          <span class='bold'>Balance: </span>
          <span class='account-card__balance'>${currency(accountData.balance).format()}</span>
        </p>
        <p class='card-detail'>
          <span class='bold'>Customer Id: </span>
          <span class='account-card__customer-id'>${accountData.customer_id}</span>
        </p>
        <p class='card-detail'>
          <span class='bold'>Date Opened: </span>
          <span class='account-card__date-opened'>${accountData.date_opened}</span>
        </p>
      </div>`
    ;
    accountsCardsDOMString = accountsCardsDOMString.concat(accountCardDOMString);
  });
  
  return accountsCardsDOMString;
};

export const renderCustomerDetailsData = (customerData) => {
  DOM.customerDetailsName.textContent = customerData.name;
};

export const renderCustomerAccountsDetails = (accountsData) => {
  const accountsCardsDOMString = getAccountsCardsDOMString(accountsData);
  DOM.customerDetailsCardsContainer.insertAdjacentHTML('beforeend', accountsCardsDOMString);
};

export const renderCustomerDataTable = (customersData) => {
  showDatatableContainer();
  clearCustomerDataTable();
  
  let tableHeaders = [
    'id',
    'name'
  ];

  const datatableDOMString = tableview.getDatatableDomString(customersData, tableHeaders);

  DOM.customerCrud.datatable.insertAdjacentHTML('beforeend', datatableDOMString);
};

export const showViewCustomerModal = (customerData, customerAccountsData) => {
  let accountsCardsDOMString ;

  DOM.viewCustomerModal.customerName.textContent = customerData.name;

  DOM.viewCustomerModal.accountsContainer.innerHTML = '';

  if (customerAccountsData.length > 0) {
    accountsCardsDOMString = getAccountsCardsDOMString(customerAccountsData);
  } else {
    // if the customer does not have any accounts
    accountsCardsDOMString = `<p>This Customer does not have any accounts`;
  }

  DOM.viewCustomerModal.accountsContainer.insertAdjacentHTML('beforeend', accountsCardsDOMString);
  DOM.modals.viewCustomerModal.classList.remove('hidden'); 
};

export const showAddCustomerModal = () => {
  DOM.modals.addCustomerModal.classList.remove('hidden');
  clearAddCustomerModalForm();
  DOM.addCustomerFormModal.alertContainer.innerHTML = '';
  DOM.addCustomerFormModal.name.focus();
};

export const showEditCustomerModal = (customerData) => {
  // filling modal form
  DOM.editCustomerFormModal.id.value = customerData.id;
  DOM.editCustomerFormModal.name.value = customerData.name;

  // clearing modal from previous changes
  DOM.editCustomerFormModal.alertContainer.innerHTML = '';
  validationView.clearFormErrors(DOM.editCustomerFormModal.form);

  // showing it
  DOM.modals.editCustomerModal.classList.remove('hidden');
  DOM.editCustomerFormModal.name.focus();
};

export const clearAddCustomerModalForm = () => {
  DOM.addCustomerFormModal.name.value = '';
};

export const clearCustomerDataTable = () => {
  DOM.customerCrud.datatable.innerHTML = ``;
};

export const showDatatableContainer = () => {
  DOM.customerCrud.tableContainer.classList.remove('hidden');
};

export const clearCustomerDetails = () => {
  DOM.customerDetailsName.textContent = '';
  DOM.customerDetailsCardsContainer.innerHTML = '';
};

export const clearAlerts = () => {
  DOM.customerDetailsAlertContainer.innerHTML = '';
};

export const showNoAccountsMessage = () => {
  DOM.customerDetailsNoAccountsMessage.classList.remove('hidden');
}

export const hideNoAccountsMessage = () => {
  DOM.customerDetailsNoAccountsMessage.classList.add('hidden');
}
