var screenNumber = "";
var actualNumber = 0;
var previousOperator = "";
var count = 0;
var resultShown = false;
var start = false;

var screen = document.querySelector(".screen__number");

var acButton = document.querySelector(".ac");
var backButton = document.querySelector(".back");

var n1Button = document.querySelector(".n1");
var n2Button = document.querySelector(".n2");
var n3Button = document.querySelector(".n3");
var n4Button = document.querySelector(".n4");
var n5Button = document.querySelector(".n5");
var n6Button = document.querySelector(".n6");
var n7Button = document.querySelector(".n7");
var n8Button = document.querySelector(".n8");
var n9Button = document.querySelector(".n9");
var n0Button = document.querySelector(".n0");

var divideButton = document.querySelector(".divide");
var timesButton = document.querySelector(".times");
var minusButton = document.querySelector(".minus");
var plusButton = document.querySelector(".plus");
var equalsButton = document.querySelector(".equals");

var comaButton = document.querySelector(".coma");

resetScreen();

function printOnScreen(character) {
    if (resultShown) {
        resultShown = false;
        backScreen();
    }

    if (screenNumber.length > 10) {
        return false;
    } else {
        screenNumber += character;
        screen.innerHTML = screenNumber;
    }
}

function resetScreen() {
    count = 0;
    screen.innerHTML = "0";
    screenNumber = "";
    start = false;
}

function backScreen() {
    screen.innerHTML = "0";
    screenNumber = "";
}

function doOperation(operator) {
    actualNumber = Number(screenNumber);
    switch (operator) {
        case "+":
            count += actualNumber;
            break;
        case "-":
            count -= actualNumber;
            break;
        case "*":
            count *= actualNumber;
            break;
        case "/":
            count /= actualNumber;
            break;
    }

    if (!start) {
        count = Number(screen.innerHTML);
        start = true;
    }
    screenNumber = "";

    // the + before count variable only displays decimals when count isn't an integer value.
    screen.innerHTML = +count.toFixed(3);
    resultShown = true;
}

acButton.onclick = function() {
    resetScreen();
};
backButton.addEventListener("click", function() {
    backScreen();
});

n0Button.onclick = function() {
    if (screenNumber[0] !== "0" && screenNumber.length > 0) {
        printOnScreen(0);
    }
}
n1Button.onclick = function() {
    printOnScreen(1);
}
n2Button.onclick = function() {
    printOnScreen(2);
}
n3Button.onclick = function() {
    printOnScreen(3);
}
n4Button.onclick = function() {
    printOnScreen(4);
}
n5Button.onclick = function() {
    printOnScreen(5);
}
n6Button.onclick = function() {
    printOnScreen(6);
}
n7Button.onclick = function() {
    printOnScreen(7);
}
n8Button.onclick = function() {
    printOnScreen(8);
}
n9Button.onclick = function() {
    printOnScreen(9);
}

comaButton.onclick = function() {
    if (screenNumber.length === 0) {
        printOnScreen("0.")
    } else {
        if (!screenNumber.includes(".")) {
            printOnScreen(".")
        }
    }
}

plusButton.onclick = function() {
    doOperation(previousOperator);
    previousOperator = "+";
}

minusButton.onclick = function() {
    doOperation(previousOperator);
    previousOperator = "-";
}

timesButton.onclick = function() {
    doOperation(previousOperator);
    previousOperator = "*";
}

divideButton.onclick = function() {
    doOperation(previousOperator);
    previousOperator = "/";
}

equalsButton.onclick = function() {
    doOperation(previousOperator);
    previousOperator = "";
}