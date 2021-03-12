import { DOM } from './base';
import * as tableview from './tableView';
import * as validationView from './validationView';
import currency from 'currency.js';

export const renderCustomerDetailsData = (customerData) => {
  DOM.customerDetailsName.textContent = customerData.name;
};

export const renderCustomerAccountsDetails = (accountsData) => {
  accountsData.forEach(accountData => {
    let accountCardDOMString = `
      <div class='account-card card'>
        <p class='card-detail'>
          <span class='bold'>Account Name: </span>
          <span class='account-card__name'>${accountData.name}</span>
        </p>
        <p class='card-detail'>
          <span class='bold'>Amount: </span>
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
      </div>
    `;

    DOM.customerDetailsCardsContainer.insertAdjacentHTML('beforeend', accountCardDOMString);
  });
};

export const renderCustomerDataTable = (customersData) => {
  showDatatableContainer();
  clearCustomerDataTable();
  
  let tableHeaders = [
    'id',
    'name',
    'actions'
  ];

  const datatableDOMString = tableview.getDatatableDomString(customersData, tableHeaders);

  DOM.customerCrud.datatable.insertAdjacentHTML('beforeend', datatableDOMString);
};

export const showViewCustomerModal = () => {
  DOM.modals.viewCustomerModal.classList.remove('hidden'); 
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
