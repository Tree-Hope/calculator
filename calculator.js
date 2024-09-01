const $result = document.querySelector("#result");
const $operating = document.querySelector("#operating");
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
let printOperating = "";
let calculationCompleted = false; // 계산의 완료 여부에 따라 backspace키가 안 먹히게 하려고 만든 flag 변수

document.addEventListener("keydown", (event) => {
  const operators = ["+", "-", "*", "/"];

  if (event.key >= "0" && event.key <= "9") {
    if (calculationCompleted) {
      calculationCompleted = false;
      $operating.value = "";
    }

    $operating.value += event.key;
    printOperating += event.key;

    if (operator === "") {
      firstNumber += event.key;
    } else {
      secondNumber += event.key;
    }
  }

  if (event.key === "Backspace" && !calculationCompleted) {
    // 숫자나 연산자 입력 후 지운 다음 다시 계산하려고 할 때 제대로 동작하도록 하기 위한 코드
    if (secondNumber !== "") {
      secondNumber = secondNumber.slice(0, -1);
      printOperating = printOperating.slice(0, -1);
    }

    $operating.value = $operating.value.slice(0, -1);
  }

  if (operators.includes(event.key)) {
    if (calculationCompleted) {
      calculationCompleted = false;
      result = null;
      $result.value = `${firstNumber} ${event.key} `;
      printOperating = $result.value;
      operator = event.key;
      calculationCompleted = true;
    } else {
      $result.value += `${printOperating} ${event.key} `;
      printOperating = $result.value;
      $operating.value = "";
      operator = event.key;
    }
  }

  if (event.key === "Enter" && firstNumber !== result) {
    const num1 = parseFloat(firstNumber);
    const num2 = parseFloat(secondNumber);

    if (operator === "+") {
      result = num1 + num2;
    } else if (operator === "-") {
      result = num1 - num2;
    } else if (operator === "*") {
      result = num1 * num2;
    } else if (operator === "/") {
      result = num1 / num2;
    }

    firstNumber = String(result);
    $operating.value = result;
    $result.value = `${printOperating} =`;
    operator = "";
    secondNumber = "";
    calculationCompleted = true;
  }

  if (event.key === "Escape") {
    $result.value = "";
    $operating.value = "";
    firstNumber = "";
    operator = "";
    secondNumber = "";
    result = "";
    printOperating = "";
    calculationCompleted = false;
  }
});

$one.addEventListener("click", (event) => {

});