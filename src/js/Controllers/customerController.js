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
  
  const customersData = await customerModel.seachByName(searchValue);

  if (customersData.data) {
    customerView.renderCustomerDataTable(customersData.data);
    console.log(`Searching Customers: ${searchValue}`);
  }
  
};

export const addCustomer = async () => {
  const customerModel = new Customer();
  const name = DOM.addCustomerFormModal.name.value;
  const validationErrors = validateCustomer(name);

  if (Object.keys(validationErrors).length > 0) {
    alertView.errorAlert(DOM.addCustomerFormModal.alertContainer, alertView.generateUnorderedList(validationErrors));
    return;
  }

  const response = await customerModel.add(name);

  if (!response.error) {
    alertView.successAlert(DOM.addCustomerFormModal.alertContainer, "Customer Added Successfully");
    customerView.clearAddCustomerModalForm();
    DOM.addCustomerFormModal.name.focus();
    findCustomers();
  } else {
    alertView.errorAlert(DOM.addCustomerFormModal.alertContainer, response.error);
    DOM.addCustomerFormModal.name.focus();
  }
};

export const deleteCustomer = async (id) => {
  const confirmResult = confirm('Are you sure you want to permanently delete this record?');
  if (confirmResult) {
    const customerModel = new Customer();
    const deleteStatusCode = await customerModel.deleteCustomer(id);
  
    if (deleteStatusCode === 204) {
      
    }
  
    if (deleteStatusCode === 404) {
      console.error('Not Found');
    } 
    findCustomers();
  }
};

export const updateCustomer = async () => {
  const customerModel = new Customer();
  const id = DOM.editCustomerFormModal.id.value;
  const name = DOM.editCustomerFormModal.name.value;

  const validationErrors = validateCustomer(name);

  if (Object.keys(validationErrors).length > 0) {
    alertView.errorAlert(DOM.editCustomerFormModal.alertContainer, alertView.generateUnorderedList(validationErrors));
    return;
  };

  const response = await customerModel.update(id, name);

  if (!response.error) {
    alertView.successAlert(DOM.editCustomerFormModal.alertContainer, 'Customer Updated');
    findCustomers();
  } else {
    alertView.errorAlert(DOM.editCustomerFormModal.alertContainer, response.error)
  }
};

export const viewCustomer = async (id) => {
  const customerModel = new Customer();
  const customerData = await customerModel.findCustomer(id);
  const customerAccountsData = await customerModel.findAccountsByCustomer(customerData.id);
  customerView.showViewCustomerModal(customerData, customerAccountsData.data);
};

export const addCustomerModal = () => {
  customerView.showAddCustomerModal();
};

export const editCustomerModal = async (id) => {
  const customerModel = new Customer();
  const customerData = await customerModel.findCustomer(id);
  customerView.showEditCustomerModal(customerData);
};

// returns an object containing the validation errors for each field
export const validateCustomer = (name) => {
  const errors = {};
  
  if (!name) {
    errors.name = 'Name cannot be empty';
    //validationView.invalidInput(DOM.editCustomerFormModal.name);
  } else {
    //validationView.validInput(DOM.editCustomerFormModal.name);
  }
  
  return errors;
}
