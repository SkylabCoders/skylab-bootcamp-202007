'use strict';
let initialPanel = [[],[],[],[],[],[]];
let finalPanel = [[],[],[],[],[],[]];
let currentPosition = '';
let colorOn = 'rgb(44, 43, 43)';
let colorOff = ' burlywood';
const panel = document.querySelector('.panel');
const eachBox = document.querySelectorAll('.f0c0, .f0c1, .f0c2, .f0c3, .f0c4, .f0c5, .f1c0, .f1c1, .f1c2, .f1c3, .f1c4, .f1c5, .f2c0, .f2c1, .f2c2, .f2c3, .f2c4, .f2c5, .f3c0, .f3c1, .f3c2, .f3c3, .f3c4, .f3c5, .f4c0, .f4c1, .f4c2, .f4c3, .f4c4, .f4c5, .f5c0, .f5c1, .f5c2, .f5c3, .f5c4, .f5c5');
const startBut = document.querySelector('.start-button');

function BoxConstructor(status, position) {
    this.status = status;
    this.position = position;
}

function createBox() {
    for (let row = 0; row < initialPanel.length; row++) {
        for (let col = 0; col < 7; col++) {
            let position = 'f' + row + 'c' + col;
            let box = new BoxConstructor(0, position);
            initialPanel[row].push(box);
        }
    }
    for (let row = 0; row < finalPanel.length; row++) {
        for (let col = 0; col < 7; col++) {
            let position = 'f' + row + 'c' + col;
            let box = new BoxConstructor(0, position);
            finalPanel[row].push(box);
        }
    }
}
createBox();

function start() {
    for (let row = 0; row < initialPanel.length; row++) {
        for (let col = 0; col < initialPanel[row].length; col++) {
            if (initialPanel[row][col].position === currentPosition) {
                initialPanel[row][col].status = 1;
                finalPanel[row][col].status = 1;
            }
        }
    }
}

function playGame() {
    let countR1 = 0;
    let countR4 = 0;
    for (let row = 0; row < initialPanel.length; row++) {
        for (let col = 0; col < initialPanel[row].length; col++) {
            if (initialPanel[row][col].status === 1) {
                //rule 1 and 3
                try {
                    if (initialPanel[row][col - 1].status === 1) {
                        countR1++;
                    }
                } catch {}
                try {
                    if (initialPanel[row - 1][col - 1].status === 1) {
                        countR1++;
                    }
                } catch {}
                try {
                    if (initialPanel[row - 1][col].status === 1) {
                        countR1++;
                    }
                } catch {}             
                try {
                    if (initialPanel[row - 1][col + 1].status === 1) {
                        countR1++;
                    }
                } catch {}              
                try {
                    if (initialPanel[row][col + 1].status === 1) {
                        countR1++;
                    }
                } catch {}                
                try {
                    if (initialPanel[row + 1][col + 1].status === 1) {
                        countR1++;
                    }
                } catch {}               
                try {
                    if (initialPanel[row + 1][col].status === 1) {
                        countR1++;
                    }
                } catch {}             
                try {
                    if (initialPanel[row + 1][col - 1].status === 1) {
                        countR1++;
                    }
                } catch {}
                if (countR1 < 2 || countR1 > 3) {
                    finalPanel[row][col].status = 0;
                    currentPosition = finalPanel[row][col].position;
                    document.querySelector('.' + currentPosition).style.backgroundColor = colorOff;
                } else {
                    finalPanel[row][col].status = 1;
                    currentPosition = finalPanel[row][col].position;
                    document.querySelector('.' + currentPosition).style.backgroundColor = colorOn;
                }
                countR1 = 0;
            } else if (initialPanel[row][col].status === 0) {
                //rule 4
                try {
                    if (initialPanel[row][col - 1].status === 1) {
                        countR4++;
                    }
                } catch{}
                try {
                    if (initialPanel[row - 1][col - 1].status === 1) {
                        countR4++;
                    }
                } catch{}
                try{
                    if (initialPanel[row - 1][col].status === 1) {
                        countR4++;
                    }
                }catch{}
                try{
                    if (initialPanel[row - 1][col + 1].status === 1) {
                        countR4++;
                    }
                }catch{}
                try{
                    if (initialPanel[row][col + 1].status === 1) {
                        countR4++;
                    }
                }catch{}
                try{
                    if (initialPanel[row + 1][col + 1].status === 1) {
                        countR4++;
                    }
                }catch{}
                try{
                    if (initialPanel[row + 1][col].status === 1) {
                        countR4++;
                    }
                }catch{}
                try{
                    if (initialPanel[row + 1][col - 1].status === 1) {
                        countR4++;
                    }
                }catch{}
                if (countR4 === 3) {
                    finalPanel[row][col].status = 1;
                    currentPosition = finalPanel[row][col].position;
                    document.querySelector('.' + currentPosition).style.backgroundColor = colorOn;
                }
                countR4 = 0;
            }
        }
    }
    console.log(finalPanel);
    reset();
    console.log(finalPanel);
    console.log(initialPanel);
}
function reset() {
    initialPanel = finalPanel;
    finalPanel = [[],[],[],[],[],[]];
    for (let row = 0; row < finalPanel.length; row++) {
        for (let col = 0; col < 7; col++) {
            let position = 'f' + row + 'c' + col;
            let box = new BoxConstructor(0, position);
            finalPanel[row].push(box);
        }
    }
}

function ruleOne() {

}
function ruleTwo() {

}
function ruleThree() {

}
function ruleFour() {

}

for (let click of eachBox) {
    click.addEventListener('click', function () {
        click.style.backgroundColor = colorOn;
        currentPosition = click.className;
        start();
    });
}
startBut.addEventListener('click', playGame);



