function Calculate() {

    const [button7, button8, button9, button4, button5, button6, button1, button2, button3, button0] = document.querySelectorAll('.button')
    const buttons = [button7, button8, button9, button4, button5, button6, button1, button2, button3, button0]

    for (var i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', () => {
            return currentNumber = Number(buttons[i].innerHTML)
        })
    }

    let screen = function () {



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