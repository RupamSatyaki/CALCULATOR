// Get the input field and buttons
const inputField = document.querySelector('input[type="text"]');
const buttons = document.querySelectorAll('button');

// Add event listeners to buttons
buttons.forEach((button) => {
  button.addEventListener('click', () => {
    const buttonValue = button.textContent;
    handleButtonPress(buttonValue);
  });
});

// Add event listener for keyboard input
document.addEventListener('keydown', (e) => {
  const keyValue = e.key;
  handleButtonPress(keyValue);
});

// Function to handle button presses and keyboard input
function handleButtonPress(value) {
  if (value >= '0' && value <= '9' || value === '.') {
    // Append digit to input field
    inputField.value += value;
  } else if (value === '+' || value === '-' || value === '*' || value === '/' || value === '%') {
    // Append operator to input field
    inputField.value += value;
  } else if (value === '=' || value === 'Enter') {
    // Evaluate the expression and display the result
    try {
      const result = eval(inputField.value);
      inputField.value = result;
    } catch (error) {
      inputField.value = 'Error';
    }
  } else if (value === 'Backspace') {
    // Clear the last character
    inputField.value = inputField.value.slice(0, -1);
  } else if (value === 'Escape') {
    // Clear the input field
    inputField.value = '';
  }
}