import { DOM } from '../views/base';
import Account from '../models/Account';
import * as accountView from '../views/accountView';
import * as alertView from '../views/alertView';

export const findAccount = async () => {
  const accountModel = new Account();
  const accountId = DOM.accountDetailsForm.accountId.value;
  let accountData;

  if (!accountId) {
    alertView.errorAlert(DOM.accountDetailsAlertContainer, `<p>Please enter an account number</p>`);
    return;
  }

  accountData = await accountModel.findById(accountId);

  if (accountData) {
    if (!('error' in accountData)) {
      accountView.displayAccountCard(accountData);
      clearAlerts();
    } else {
      accountView.clearAccountCard();
      alertView.errorAlert(DOM.accountDetailsAlertContainer, `<p>${accountData.error}</p>`);
    }
  }
};

const clearAlerts = () => {
  DOM.accountDetailsAlertContainer.innerHTML = '';
};


