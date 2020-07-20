function Calculate() {

    const [button7, button8, button9, button4, button5, button6, button1, button2, button3, button0] = document.querySelectorAll('.button')
    const allButtons = [button7, button8, button9, button4, button5, button6, button1, button2, button3, button0]


    for (var i = 0; i < allButtons.length; i++) {
        allButtons[i].addEventListener('click', () => {
            currentNumber += Number(buttons[i].innerHTML)
            return screen.innerHTML = currentNumber
        })
    }

    const [buttonac, buttondiv, buttonmult, buttonrest, buttonsum, buttonequal] = document.querySelectorAll(".operation")
    const allOperations = [buttonac, buttondiv, buttonmult, buttonrest, buttonsum, buttonequal];
    let otherNumber = 0;
    for (var j = 0; j < allOperations.length; j++) {
        allOperations[i].addEventListener("click", () => {
                screen.innerHTML = currentNumber + operation[i].innerHTML;
                otherNumber += Number(buttons[i].innerHTML)
                screen.innerHTML = otherNumber;


            }
        });
}




// TODO refactor 

let sum = function (num1, num2) {
    result = num1 + num2
    return result;

};
let rest = function (num1, num2) {
    result = num1 - num2

    return result;

};
let div = function (num1, num2) {
    result = num1 / num2

    return result;

};
let multi = function (num1, num2) {
    result = num1 * num2

    return result;
};

let ac = function () {
    return 0;

}
return {
    sum,
    rest,
    div,
    multi,
    ac,
    screen
}
}

// TODO
// definir componentes/ nodes
// definir funciones
// recoger nodos
//