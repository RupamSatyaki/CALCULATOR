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
  switch (value) {
    case 'C':
    case 'Escape':
      inputField.value = '';
      break;
    case 'CE':
    case 'Backspace':
      inputField.value = inputField.value.slice(0, -1);
      break;
    case '=':
    case 'Enter':
      try {
        inputField.value = eval(inputField.value);
      } catch (error) {
        inputField.value = 'Error';
      }
      break;
    case 'sin':
      inputField.value = Math.sin(inputField.value);
      break;
    case 'cos':
      inputField.value = Math.cos(inputField.value);
      break;
    case 'tan':
      inputField.value = Math.tan(inputField.value);
      break;
    case 'sqrt':
      inputField.value = Math.sqrt(inputField.value);
      break;
    case '^':
      inputField.value = Math.pow(inputField.value, 2);
      break;
    case 'log':
      inputField.value = Math.log(inputField.value);
      break;
    default:
      if (value >= '0' && value <= '9' || value === '.') {
        inputField.value += value;
      } else if (value === '+' || value === '-' || value === '*' || value === '/' || value === '%') {
        inputField.value += value;
      }
  }
}


const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.', '00', '000'];

// ...

  if (numbers.includes(value)) {
    inputField.value += value;
  } else if (value === '+' || value === '-' || value === '*' || value === '/' || value === '%') {
    inputField.value += value;
  }
