function user() {
    var name = prompt('Por favor, introduce tu nombre');
    if (name == null || name == undefined) {
        user();
    } else if (isNaN(parseInt(name)) == false || name == '' ) {
        user();
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
    var board = [];
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
    console.log(board);
    drawNumber(board);
}

function drawNumber(board) {
    let number;
    if (confirm('¿Sacamos número?')) {
        number = Math.ceil(Math.random() * 10);
        console.log('El número es el ' + number);
    } else {
        return;
    }

    /*  I don't know why 'Bingo!' prints 5 times. I've tried with a (for loop + while loop)
    *   and with just a while loop. Can't figure it out. 
    */

    if (board.includes(number)) {
        board[board.indexOf(number)] = 'X';
        console.log(board);

        while (board[0] != 'X' || board[1] != 'X' || board[2] != 'X' || board[3] != 'X' || board[4] != 'X') {
            drawNumber(board);
        } 
        debugger
        console.log('Bingo!');
        return;
            
    } else {
        console.log(board);
        drawNumber(board);
    }  
    return;   
    
}


user()
    
