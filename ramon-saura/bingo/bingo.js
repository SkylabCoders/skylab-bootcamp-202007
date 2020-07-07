'use strict'
//funcion para pedir el nombre
function playerName(){
    var name = prompt(`Por favor introduzca su nombre`,`Introducir nombre`);
    if(isNaN(name) === false||name === 'Introducir nombre'){//comprueba que sea un nombre valido
        alert(`Por favor introduzca un nombre`);
        playerName();
    }else{
        alert(`Bienvenido ${name}! Empezemos a jugar al Bingo!`);
    }
    return name;
}
function printCard(){//funcion para imprimir carton i se vea en pantalla
    console.log(`Tu carton es: \n
            ${card[0].number} , ${card[1].number} , ${card[2].number} , ${card[3].number} , ${card[4].number}
            ${card[5].number} , ${card[6].number} , ${card[7].number} , ${card[8].number} , ${card[9].number}
            ${card[10].number} , ${card[11].number} , ${card[12].number} , ${card[13].number} , ${card[14].number}`)
        }
function cardRandomNumber(){//genera los numeros aleatorios del carton
    do{
        var numbers = Math.ceil(Math.random()*100);
    } while(testMachNumber(cardNumbers, numbers));
        cardNumbers.push(numbers);
        return numbers;        
};
function testMachNumber(arr, num){//comprueba que no se repitan los numeros aleatorios
    for(let a = 0; a < arr.length; a++){
        if(arr[a] === num){
            return true;
        };
    };
    return false;
};   
do{//si while se cumple se activa esta parte
    var cardNumbers = [];//almacena los numeros de donde los recoge la funcion de imprimir
    var card = [//donde se guardan numeros aleatorios del carton y permite verificar si el numero
        //ya ha sido sacado del bombo
        //linea1
    { number: cardRandomNumber() , matched: false },
    { number: cardRandomNumber() , matched: false },
    { number: cardRandomNumber() , matched: false },
    { number: cardRandomNumber() , matched: false },
    { number: cardRandomNumber() , matched: false },
        //linea2
    { number: cardRandomNumber() , matched: false },
    { number: cardRandomNumber() , matched: false },
    { number: cardRandomNumber() , matched: false },
    { number: cardRandomNumber() , matched: false },
    { number: cardRandomNumber() , matched: false },
        //linea3
    { number: cardRandomNumber() , matched: false },
    { number: cardRandomNumber() , matched: false },
    { number: cardRandomNumber() , matched: false },
    { number: cardRandomNumber() , matched: false },
    { number: cardRandomNumber() , matched: false },
    ];
    var matchNumbers = [];//variable de donde se comprueba si los numeros al sacarlos del bombo se repiten
    var line = false;//de aqui se comprueba cada vez que se saca un numero si linea es true.
    var succesBingo = false;//igual que la linea aqui se comprueba si es true
    var score = 100;//puntuación inicial
    var finalClass = [];//se almacena la clasificación final
    var name = playerName();//se activa la funcion del nombre y lo almacena
    //las normas
    alert(`Bienvenido ${name}, a continuación se muestran las reglas del Bingo!: \n
                    
    - Se empieza con 100 puntos, y se restarà 1 punto cada turno que pase. \n
    - Si consigues una Linea se sumaran 25 puntos y si cantas Bingo! te suma 75 puntos.`);
    cardRandomNumber();//inicia la funcion que genera los numeros aleatorios
    printCard();//inicia funcion que muestra el carton en pantalla
} while (!confirm('Desea nuevos números para su carton?')); //mientras esto no se cumpla no se activara el do
function start(){//funcion para iniciar el juego
    score--;//va restando de uno en uno los puntos por cada turno que pasa  
        var randomNumber = bingoRandomNumbers();//genera un numero aleatorio del bombo
        console.log(`Ha salido el numero: ${randomNumber}`);//lo muestra en pantalla
        console.log('Puntos actuales : ' + score);//te dice los puntos actuales
        turn(randomNumber);//activa la funcion que activa un nuevo turno y si el numero conicide lo tacha con una X
        if(line === false){//si no hay linea
            checkLine();//comprueba si hay linea
        };
        nextTurn();//activa funcion para comprobar si se para al siguiente turno o se acaba el juego
};
function checkLine(){//comprueba todos los numeros de una linea para saber si es linea o no
    if(card[0].matched && card[1].matched && card[2].matched 
    && card[3].matched && card[4].matched){                
        score +=25;
        line = true;
    };
    if(card[5].matched && card[6].matched && card[7].matched 
    && card[8].matched && card[9].matched){                
        score +=25;
        line = true;
    };
    if(card[10].matched && card[11].matched && card[12].matched 
    && card[13].matched && card[14].matched){                
        score +=25;
        line = true;
    };
    if(line == true){
        console.log('LINEA! Enhorabuena, sumas 25 puntos!');
        console.log('Puntos actuales : ' + score);     
    };  
    return line;       
};
function bingoRandomNumbers(){//genera los numeros aleatorios del bombo del bingo
    do{
        var number = Math.ceil(Math.random()*100);
     
      } while (testMachNumber(matchNumbers, number));
      matchNumbers.push(number);
      return number;
};
function turn(arr){//comprueba que el numero generado este turno coincide con alguno del carton, si es asi lo tacha con una X
    for(let i = 0; i < card.length ; i++){
        if (arr === card[i].number){
            card[i].number = 'X';
            card[i].matched = true;
            console.log(`Se ha eliminado el numero ${arr}.`);
            printCard();
        };
    };
    checkBingo();//activa funcion que comprueba si ya hay bingo
};
function checkBingo(){//comprueba que todos los numeros del carton ya se has sacado para pasar a bingo
    if(card[0].matched && card[1].matched && card[2].matched 
        && card[3].matched && card[4].matched && card[5].matched && 
        card[6].matched && card[7].matched && card[8].matched && 
        card[9].matched && card[10].matched && card[11].matched && 
        card[12].matched && card[13].matched && card[14].matched ){        
        score += 75;
        succesBingo = true;
    };     
    return succesBingo;
};
function nextTurn(){//comprueba cada turno si hay bingo para parar el juego o continuar con el siguiente turno
    if(succesBingo === false){
        let question = confirm('Sacamos otro numero?');
        if(question === true){
            start();//activa la funcion para volver a empezar el turno
            }
    } else {
        console.log( `Felicidades ${name}! Has ganado! Tu puntuación final es: ${score} puntos!.`);
        classification();//activa la funcion que almacena y enseña el resultado final de los jugadores
    };
};
function classification(){//almacena y muestra el resultado a los jugadores
    var switchQuestion = confirm(`Quiere volver a jugar?`);//pregunta para saber si el usuario quiere seguir jugando
    switch(switchQuestion){
        case true://caso afirmativo
            do{//se almacena el resultado, se muestra en pantalla y resetea el juego
                storeResults(name, score);
                showClass(finalClass);
                restart();
                printCard();//muestra en pantalla el nuevo carton
            } while (!confirm('Desea nuevos números para su carton?'));
                start();//vuelve a empezar el juego
        break;
        case false://en caso negativo
            alert(`Gracias por jugar ${name}!`);//se despide del jugador
            storeResults(name, score);//almacena el resultado
            showClass(finalClass);//enseña la clasificación
        break
    };    
};
function storeResults(user, totalscore){//funcion que almacena los resultados 
    var results = {player: user, totalscore: totalscore};
    finalClass.push(results);
    finalClass = finalClass.sort(hiest);
    var position = finalClass.indexOf(results);
    position++;
    console.log(`El jugador: ${name}; ha conseguido: ${score} puntos.`);
}
function showClass(arr){//muestra la clasificación almacenada previamente
    var positions = 1;
    for(var i in arr){
        console.log(`${positions} - Jugador: ${arr[i].player} Puntos: ${arr[i].totalscore}`);
        positions++
    }
}
function hiest(user1, user2){//permite ordenar la clasificación por puntuación
    if(user1.totalscore > user2.totalscore){
        return -1;
    }else if(user1.totalscore < user2.totalscore){
        return 1;
    }else{
        return 0;
    }
}
function restart(){//permite resetear el juego y volver a empezar de nuevo
    cardNumbers = [];
    card = [
        //linea1
    { number: cardRandomNumber() , matched: false },
    { number: cardRandomNumber() , matched: false },
    { number: cardRandomNumber() , matched: false },
    { number: cardRandomNumber() , matched: false },
    { number: cardRandomNumber() , matched: false },
        //linea2
    { number: cardRandomNumber() , matched: false },
    { number: cardRandomNumber() , matched: false },
    { number: cardRandomNumber() , matched: false },
    { number: cardRandomNumber() , matched: false },
    { number: cardRandomNumber() , matched: false },
        //linea3
    { number: cardRandomNumber() , matched: false },
    { number: cardRandomNumber() , matched: false },
    { number: cardRandomNumber() , matched: false },
    { number: cardRandomNumber() , matched: false },
    { number: cardRandomNumber() , matched: false },
    ];
    matchNumbers = [];
    line = false;
    succesBingo = false;
    score = 100;
    finalClass = [];
    name = playerName();
}
start();//inicia el juego
