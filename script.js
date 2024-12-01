let display = document.getElementById('display');

function appendNumber(number) {
  display.textContent += number;
}

function appendOperator(operator) {
  if (display.textContent.length > 0) {
    display.textContent += operator;
  }
}

function clearDisplay() {
  display.textContent = '';
}

function deleteLast() {
  display.textContent = display.textContent.slice(0, -1);
}

function calculate() {
  try {
    display.textContent = eval(display.textContent);
  } catch (error) {
    display.textContent = 'Error';
  }
}
