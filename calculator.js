const $result = document.querySelector("#result");
const $one = document.querySelector("#one");
const $two = document.querySelector("#two");
const $three = document.querySelector("#three");
const $four = document.querySelector("#four");
const $five = document.querySelector("#five");
const $six = document.querySelector("#six");
const $seven = document.querySelector("#seven");
const $eight = document.querySelector("#eight");
const $nine = document.querySelector("#nine");
const $zero = document.querySelector("#zero");
const $plus = document.querySelector("#plus");
const $minus = document.querySelector("#minus");
const $multiple = document.querySelector("#multiple");
const $divide = document.querySelector("#divide");
const $calculate = document.querySelector("#calculate");
const $clear = document.querySelector("#clear");
let firstNumber = "";
let operator = "";
let secondNumber = "";
let result;
let calculationCompleted = false;

document.addEventListener("keydown", (event) => {
  const operators = ["+", "-", "*", "/"];

  if(event.key >= "0" && event.key <= "9") {
    if(calculationCompleted) {
      calculationCompleted = false;
    }

    $result.value += event.key;
    
    if(operator === "") {
      firstNumber += event.key;
    } else {
      secondNumber += event.key;
    }
  }

  if(event.key === "Backspace" && !calculationCompleted) {
    $result.value = $result.value.slice(0, -1);
  }

  if(operators.includes(event.key)) {
    if(calculationCompleted) {
      calculationCompleted = false;
    }

    $result.value += `${event.key}`;
    operator = event.key;
  }

  if(event.key === "Enter" && firstNumber !== result) {
    const num1 = parseFloat(firstNumber);
    const num2 = parseFloat(secondNumber);

    if(operator === "+") {
      result = num1 + num2;
    } else if(operator === "-") {
      result = num1 - num2;
    } else if(operator === "*") {
      result = num1 * num2;
    } else if(operator === "/") {
      result = num1 / num2;
    }

    firstNumber = result;
    $result.value = result;
    operator = "";
    secondNumber = "";
    result = null;
    calculationCompleted = true;
  }

  if(event.key === "Escape") {
    $result.value = "";
    firstNumber = "";
    operator = "";
    secondNumber = "";
    result = "";
    calculationCompleted = false;
  }
});

$one.addEventListener("click", (event) => {

});