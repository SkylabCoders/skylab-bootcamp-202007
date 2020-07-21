let state = new CreateCalculator();

document
  .querySelector(".calculator__number-container")
  .addEventListener("click", displayText);

document.querySelector("#clear").addEventListener("click", clear);
document.querySelector("#test").addEventListener("click", state.sum);
document.querySelector("#result").addEventListener("click", state.result);

function CreateCalculator() {
  let nums = [];
  let firstNum = 0;
  let secondNu = 0;
  let sum = function (e) {
    let focus = e.target.value;
    let selector = document.querySelector(".calculator__display");
    selector.innerHTML += focus;
    state.nums = nums.join();
  };
  let sort = function (arr) {
    let string = arr.join(" ");
    console.log(string);
    return string;
  };
  let result = function () {
    let string = sort(nums);
    let regeXpattern = /(\d+)+/;
    let regeXpattern2 = string - regeXpattern;
    let firstNum = string.match(regeXpattern);
    let secondNum = string.match(regeXpattern);
    console.log(firstNum, secondNum);
  };

  return { nums, sum, sort, result };
}

function displayText(e) {
  let focus = e.target.value;
  let selector = document.querySelector(".calculator__display");
  selector.innerHTML += focus;
  state.nums.push(focus);
}

function clear() {
  state.firstValue = 0;
  let selector = document.querySelector(".calculator__display");
  selector.innerHTML = "";
}
