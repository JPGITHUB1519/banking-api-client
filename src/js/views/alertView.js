import { DOM } from './base';

// const sucessAlert() => {

// }

export const showAlert = (container, body, type='success') => {
  let alertTypeClass 

  switch (type) {
    case 'success':
      alertTypeClass = 'success-alert';
      break;
    case 'error':
      alertTypeClass = 'error-alert';
      break;
    case 'warning':
      alertTypeClass = 'warning-alert';
    case 'info': 
      alertTypeClass = 'info-alert';
      break;
    default:
      alertTypeClass = 'success-alert';
  }

  const alertDOMString = 
    `<div class='alert ${alertTypeClass}'>
      <div class='alert-body'>
        ${body}
      </div>
    </div>`;
  
  container.innerHTML = '';
  container.insertAdjacentHTML('beforeend', alertDOMString);
}

export const successAlert = (container, body) => {
  showAlert(container, body, 'success');
};

export const errorAlert = (container, body) => {
  showAlert(container, body, 'error');
}


