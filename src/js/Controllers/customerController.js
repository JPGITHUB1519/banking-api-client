import { DOM } from '../views/base';
import Customer from '../models/Customer';
import * as customerView from '../views/customerView';
import * as alertView from '../views/alertView';
import * as validationView from '../views/validationView';

export const findCustomer = () => {
  const customerModel = new Customer();
  const customerId = DOM.customerDetailsForm.customerId.value;
  
  if (!customerId) {
    alertView.errorAlert(DOM.customerDetailsAlertContainer, "<p>Please enter a customerID</p>");
    validationView.invalidInput(DOM.customerDetailsForm.customerId);
    customerView.clearCustomerDetails();
    return;
  } else {
    validationView.validInput(DOM.customerDetailsForm.customerId);
  }
  
  customerView.clearCustomerDetails();
  customerView.clearAlerts();

  // find customer data
  customerModel.findCustomer(customerId).then(customerData => {
    if (!('error' in customerData)) {
      customerView.renderCustomerDetailsData(customerData);
    } else {
      alertView.errorAlert(DOM.customerDetailsAlertContainer, `<p>${customerData.error}</p>`)
    }
  });

  // find customer accounts
  customerModel.findAccountsByCustomer(customerId).then(accountsData => {
    customerView.hideNoAccountsMessage();

    if (accountsData.data) {
      // render customer accounts data
      if (accountsData.data.length > 0) {
        customerView.renderCustomerAccountsDetails(accountsData['data']);
      } else {
        customerView.showNoAccountsMessage();
      }
    } 
  });
};

export const findCustomers = async () => {
  const customerModel = new Customer();
  const searchValue = DOM.customerCrud.searchInput.value;
  
  const data = await customerModel.seachByName(searchValue);
  console.log(data);
  console.log(`Searching Customers: ${searchValue}`);
};
