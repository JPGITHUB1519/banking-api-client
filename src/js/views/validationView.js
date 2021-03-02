export const invalidInput = input => {
  input.classList.add('invalid-input');
};

export const validInput = input => {
  input.classList.remove('invalid-input');
};
