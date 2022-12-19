function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function operate(operator, a, b) {
  let answer;
  switch (operator) {
    case '+':
      answer = add(a, b);
      break;
    case '-':
      answer = subtract(a, b);
      break;
    case '*':
      answer = multiply(a, b);
      break;
    case '÷':
      answer = divide(a, b);
      break;
    default:
      break;
  }
  return answer;
}

const numButtons = document.querySelectorAll('.num-btn');
const operatorButtons = document.querySelectorAll('.operator-btn');
const equalButton = document.querySelector('.equal-btn');
const currentOperandOutput = document.querySelector('.current-operand');
let lastOperand = '';
let currentOperand = 0;
let operator = '';
let isLastActionOperand = false;

function updateCurrentOperand(e) {
  isLastActionOperand = true;
  let currentNumber = Number(e.target.textContent);
  currentOperand = currentOperand * 10 + currentNumber;
  currentOperandOutput.textContent = currentOperand;
}

function getOperator(e) {
  if (!isLastActionOperand) return (operator = e.target.textContent);
  if (lastOperand) solve();
  isLastActionOperand = false;
  operator = e.target.textContent;
  lastOperand = currentOperand;
  currentOperand = 0;
}

function solve() {
  if (lastOperand === '') return;
  currentOperand = operate(operator, lastOperand, currentOperand);
  lastOperand = '';
  currentOperandOutput.textContent = currentOperand;
}

numButtons.forEach((button) => {
  button.addEventListener('click', updateCurrentOperand);
});

operatorButtons.forEach((button) => {
  button.addEventListener('click', getOperator);
});

equalButton.addEventListener('click', solve);
