function user() {
    let name = prompt('Por favor, introduce tu nombre');
    if (name == null || name == '' ) {
        return
    } else {
        start(name);
    }
}    

function start(name) {
    let greet = prompt(`Hola ${name}.\n\Bienvenido/a al Bingo.\n\n ¿Quieres empezar a jugar?`, 'Si/No').toLowerCase();
    if (greet == null || greet == '' || greet =='no') {
        alert('Adiós')
        return
    } else if (greet == 'si') {
        createBoard();
    } else {
        start(name);
    }    
}
        

function createBoard() {
    let board = [];
    for (let i = 0; i < 5; i++) {
        let randNum = Math.ceil(Math.random() * 10);
        if (board.includes(randNum)) {
            i--;
            continue;
        } else {
            board.push(randNum);
        }
    }
    console.log('Estos son tus números\n¡Qué tengas suerte!\n')
    let bingoBoard = board.join(' ');
    console.log(bingoBoard);
    drawNumbers(board);
}

function drawNumber(board) {
    if (confirm('¿Sacamos el siguiente número?')) {
        let number = Math.ceil(Math.random() * 10);
        console.log('El número es el ' + number);
       
            }
        })
    }
}
    

    




user();
