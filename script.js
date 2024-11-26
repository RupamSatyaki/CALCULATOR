// Get the input field and buttons
const inputField = document.querySelector('input[type="text"]');
const buttons = document.querySelectorAll('button');

// Add event listeners to buttons
buttons.forEach((button) => {
  button.addEventListener('click', () => {
    const buttonValue = button.textContent;

    // Handle different button types
    if (buttonValue >= '0' && buttonValue <= '9' || buttonValue === '.') {
      // Append digit to input field
      inputField.value += buttonValue;
    } else if (buttonValue === '+' || buttonValue === '-' || buttonValue === '*' || buttonValue === '/' || buttonValue === '%') {
      // Append operator to input field
      inputField.value += buttonValue;
    } else if (buttonValue === '=') {
      // Evaluate the expression and display the result
      try {
        const result = eval(inputField.value);
        inputField.value = result;
      } catch (error) {
        inputField.value = 'Error';
      }
    } else if (buttonValue === 'C') {
      // Clear the input field
      inputField.value = '';
    } else if (buttonValue === 'CE') {
      // Clear the last character
      inputField.value = inputField.value.slice(0, -1);
    } else if (buttonValue === '+/-') {
      // Change the sign
      inputField.value = inputField.value * -1;
    }
  });
});