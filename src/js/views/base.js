export const DOM = {
  // Transaction
  transferorAccountInput: document.querySelector('.transaction-form__transferor-account-input'),
  transfereeAccountInput: document.querySelector('.transaction-form__transferee-account-input'),
  amountInput: document.querySelector('.transaction-form__amount-input'),
  transferButton: document.querySelector('.transaction-form__transfer-button'),
  // Transaction Alerts
  transactionAlertContainer: document.querySelector('.transaction__alert'),
  transactionAlert: {
    container: document.querySelector('.transaction-alert-container'),
    title: document.querySelector('.transaction-alert-title'),
    list: document.querySelector('.transaction-alert-list')
  },
  // Accounts  
  accountDetailsSection: document.querySelector('.account-details-section'),
  accountDetailsAlertContainer: document.querySelector('.account-details__alert'),
  accountCard: {
    container: document.querySelector('.account-card'),
    name: document.querySelector('.account-card__name'),
    balance: document.querySelector('.account-card__balance'),
    customerId: document.querySelector('.account-card__customer-id'),
    dateOpened: document.querySelector('.account-card__date-opened')
  },
  accountDetailsForm: {
    accountId: document.querySelector('.accounts-details-form__account-id-input'),
    searchButton: document.querySelector('.accounts-details-form__search-button')
  },
  // customers
  customerDetailsSection: document.querySelector('.customer-details-section'),
  customerDetailsAlertContainer: document.querySelector('.customer-detail__alert'),
  customerDetailsName: document.querySelector('.customer-details-info__customer-name'),
  customerDetailsCardsContainer: document.querySelector('.customer-details__cards-container'),
  customerDetailsNoAccountsMessage: document.querySelector('.customer-detail__no-accounts-message'),
  customerDetailsForm: {
    customerId: document.querySelector('.customer-details-form__customer-id-input'),
    searchButton: document.querySelector('.customer-details-form__search-button')
  },
  // customer crud
  customerCrud: {
    section: document.querySelector('.customer-crud-section'),
    addButton: document.querySelector('.customer-crud-search-form__add-button'),
    searchInput: document.querySelector('.customer-crud-search-form__search-input'),
    searchButton: document.querySelector('.customer-crud-search-form__search-button'),
    tableContainer: document.querySelector('.customer-crud-table-container'),
    datatable: document.querySelector('.customer-crud-data-table')
  },
  addCustomerFormModal: {
    form: document.querySelector('.add-customer-form-modal'),
    name: document.querySelector('.add-customer-form-modal__name'),
    saveButton: document.querySelector('.add-customer-form-modal__save-button'),
    alertContainer: document.querySelector('.add-customer-form-modal__alert-container')
  },
  editCustomerFormModal: {
    form: document.querySelector('.edit-customer-form-modal'),
    id: document.querySelector('.edit-customer-form-modal__id'),
    name: document.querySelector('.edit-customer-form-modal__name'),
    saveButton: document.querySelector('.edit-customer-form-modal__save-button'),
    alertContainer: document.querySelector('.edit-customer-form-modal__alert-container')
  },
  viewCustomerModal: {
    customerName: document.querySelector('.view-customer-modal__customer-name'),
    accountsContainer: document.querySelector('.view-customer-modal__accounts-container'),

  },
  // Alerts
  alerts: {
    container: '.alert-container',
    body: 'alert-body'
  },
  modals: {
    modals: document.querySelectorAll('.modal'),
    closeButtons: document.querySelectorAll('.modal-close-button'),
    addCustomerModal: document.querySelector('.add-customer-modal'),
    viewCustomerModal: document.querySelector('.view-customer-modal'),
    editCustomerModal: document.querySelector('.edit-customer-modal')
  },
};

