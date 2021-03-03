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
  } ,
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
  // Alerts
  alerts: {
    container: '.alert-container',
    body: 'alert-body'
  }
};

