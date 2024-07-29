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

document.addEventListener("keydown", (event) => {
  const operators = ["+", "-", "*", "/"];

  if(event.key >= "0" && event.key <= "9") {
    $result.value += event.key;
  } 
  if(event.key === "Backspace") {
    $result.value = $result.value.slice(0, -1);
  }
  if(operators.includes(event.key)) {
    $result.value += `${event.key}`;
  }
});