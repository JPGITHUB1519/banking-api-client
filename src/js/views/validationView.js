export const invalidInput = input => {
  input.classList.add('invalid-input');
};

export const validInput = input => {
  input.classList.remove('invalid-input');
};

// clear all errors for a form
export const clearFormErrors = formElement => {
  // get all inputs for a specific form
  const inputs = formElement.querySelectorAll('input');

  inputs.forEach(input => {
    validInput(input);
  });
};
