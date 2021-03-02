import { DOM } from './base';

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
};

export const successAlert = (container, body) => {
  showAlert(container, body, 'success');
};

export const errorAlert = (container, body) => {
  showAlert(container, body, 'error');
};

// values can be object or array
export const generateUnorderedList = (values) => {
  let listArray = values;

  // if type of values is object convert it to array
  if (typeof values === 'object' && values !== null) {
    listArray = Object.values(listArray);
  }
  
  const DOMString = `
    <ul class='alert-list'>
      ${listArray.map(element => {
        return `<li class='not-bullet-point'>${element}</li>`;
      }).join('')}
    </ul>
  `;

  return DOMString;
};
