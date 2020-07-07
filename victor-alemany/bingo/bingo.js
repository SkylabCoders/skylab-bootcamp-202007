//llamada a la función bingo
bingo();

//función bingo dónde se encuentran todas las funciones del programa
function bingo(){
    
    //declaración e instancia de variables globales
    var bingoCard       = [],
        listNumbers     = [],
        numJugadores    = 0,
        numRandom       = 0,
        turnos          = 1,
        contadorLinea   = 0,
        contadorBingo   = 0,
        puntosJugador   = [];

    //llamada a la función que crea los jugadores de la partida
    insertJugadores();

    //función que inserta jugadores a la partida
    function insertJugadores(){
      
      //condicional para que crea la carta del primer jugador y sino añade N jugadores con sus cartones
      if(numJugadores < 1){
        var jugador = prompt("Hola! Introduce tu nombre a continuación:");

        if(jugador == null){
            return alert("Adiós!");
        }
        else{
      
            if(jugador){  
                numJugadores++;
                bingoCard.push([[],[],[]]);
                puntosJugador.push({nombre:jugador,puntos:0});
                console.log("Hola "+ jugador + " eres el jugador nº " + numJugadores);
                return askCarton(numJugadores);
            }
            else{
                return console.log("Adiós!"); 
            }
        }
    }
    else{
        jugador = prompt("Quieres introducir algún jugador más?");
        
        if(jugador === null || jugador === ""){
            return alert("Adiós!");
        }
        else if(jugador.toUpperCase() === "NO"){
            return reglas();
        }
        else if(jugador.toUpperCase() === "SI"){
            jugador = prompt("Introduce tu nombre a continuación:");

            if(jugador === null || jugador === ""){
                return alert("Adiós!");
            }
            else{


            numJugadores++;
            bingoCard.push([[],[],[]]);
            puntosJugador.push({nombre:jugador,puntos:0});
            console.log("Hola "+ jugador + " eres el jugador nº " + numJugadores);
            return askCarton(numJugadores);
            }
        }
        else{
            return askCarton(numJugadores);
        }
    }
 }
    
    //función que genera los cartones para los jugadores
    function askCarton(jugador){
        var numJugador = jugador;
            numRandom  = 0;

        for(var i = numJugador-1; i < bingoCard.length; i++){
            console.log("Propuesta de cartón: "); 
            for(var j = 0; j < bingoCard[i].length; j++){
                for(var k = 0; k < 5; k++){
                    numRandom = getRandomCartones();
                    bingoCard[i][j].push({ number: numRandom, matched: false });
                    
                }
                console.log("|"+bingoCard[i][j][0].number+"-"+bingoCard[i][j][1].number+"-"+bingoCard[i][j][2].number+"-"+bingoCard[i][j][3].number+"-"+bingoCard[i][j][4].number+"|");
            }
        }

        carton = prompt("Te gusta este cartón?\n- Introduce SI para continuar\n- Introduce NO para generar uno nuevo\n- Haz click en CANCELAR para salir.");

        if(carton == null){
            alert("Adiós!");
        }
        else{
            if(carton.toUpperCase() === "NO"){
                bingoCard[numJugador-1]=[[],[],[]];
                alert("Probamos con un cartón nuevo!");
                return askCarton(jugador); 
            }
            else if(carton.toUpperCase() == "SI"){
                console.log(puntosJugador[numJugador-1].nombre+" ha confirmado su cartón.\n");
                return insertJugadores();
            }
            else{
                alert("Adiós!");
            }
        }

    }

    //función que muestra 
    function reglas(){
        console.log("Las reglas del juego son las siguientes:\n - Los jugadores comienzan con 0 puntos\n - Cada turno irá sumando un punto a cada jugador\n - El jugador que canta linea resta 5 puntos\n - El jugador que canta bingo resta 15 puntos\n - Gana el jugador con menos puntos");
        return turno(numJugadores);      
    }



    //función que genera el turno de la partida y y muestra los estados de los cartones en el turno
    function turno(jugador){
        if(turnos < 90 && contadorBingo === 0){

            if(turnos == 1){
            getNum = getRandom();
            listNumbers.push(getNum);
            alert("Empezamos la partida:\n Turno nº: "+ turnos+"\nHa salido el número: " + getNum+"\n*** Los números que ya han salido: " + listNumbers +" ***");
            console.log("Estado de los cartones:"); 
            }
            else{
                getNum = getRandom();
                listNumbers.push(getNum);
                alert("Siguiente turno nº: "+ turnos+"\nHa salido el número: " + getNum+"\n*** Los números que ya han salido: " + listNumbers +" ***");
                console.log("Estado de los cartones:"); 
            }

            //llamada a la función que valida los números de los jugadores
            checkNumbers();

        console.log("---------------------------------------------");


        for(var i = 0; i < puntosJugador.length;i++){
            puntosJugador[i].puntos++;
            if(contadorBingo == 0){
            console.log("Puntos "+puntosJugador[i].nombre+": "+puntosJugador[i].puntos);
            }
            else if(contadorBingo == 1){
                console.log("Puntuación final:\n"+puntosJugador[i].nombre+": "+puntosJugador[i].puntos);
            }
        }

        turnos++;
        confirmarNum();
        }
    }


    function checkNumbers(){
        
        for(var i = 0; i < bingoCard.length; i++){
            console.log("Cartón: "+puntosJugador[i].nombre);
            for(var j = 0; j < bingoCard[i].length;j++){
                for(var k = 0; k < bingoCard[i][j].length;k++){  


                    if(bingoCard[i][j][k].number == getNum){
                        bingoCard[i][j][k].matched = true;
                        bingoCard[i][j][k].number = "X";
                        puntosJugador[i].puntos = puntosJugador[i].puntos -1;
                        
                        if(bingoCard[i][j][0].matched == true && bingoCard[i][j][1].matched == true && bingoCard[i][j][2].matched == true && bingoCard[i][j][3].matched == true && bingoCard[i][j][4].matched == true && contadorLinea == 0){
                            alert(puntosJugador[i].nombre+" ha cantado LINEA!!!!!!!!!!!!!!!!");
                            contadorLinea = 1;
                            puntosJugador[i].puntos = puntosJugador[i].puntos -5;
                            
                        }
                        else if(bingoCard[i][0][0].matched == true && bingoCard[i][0][1].matched == true && bingoCard[i][0][2].matched == true && bingoCard[i][0][3].matched == true && bingoCard[i][0][4].matched == true && bingoCard[i][1][0].matched == true && bingoCard[i][1][1].matched == true && bingoCard[i][1][2].matched == true && bingoCard[i][1][3].matched == true && bingoCard[i][1][4].matched == true && bingoCard[i][2][0].matched == true && bingoCard[i][2][1].matched == true && bingoCard[i][2][2].matched == true && bingoCard[i][2][3].matched == true && bingoCard[i][2][4].matched == true && contadorBingo == 0){
                            alert(puntosJugador[i].nombre+" ha cantado BINGO!!!!!!!!!!!!!!!!");
                            contadorBingo = 1;
                            puntosJugador[i].puntos = puntosJugador[i].puntos -15;
                            
                        }
                    }        
                }
                console.log("|"+bingoCard[i][j][0].number+"-"+bingoCard[i][j][1].number+"-"+bingoCard[i][j][2].number+"-"+bingoCard[i][j][3].number+"-"+bingoCard[i][j][4].number+"|");
            } 
        }
    }

    //función para confirmar los pasos siguientes con la condición de si ha salido bingo o no
    function confirmarNum(){
        var result = "";

        if(contadorBingo === 0){
        
            result = window.confirm("Pulsa OK para continuar con el siguiente número o CANCELAR para salir!");
        
            if(result === true){
                return turno();
            }
            else{
                return alert("Gracias por jugar y hasta pronto!");
            }
        }
        else if(contadorBingo === 1){

            result = window.confirm("Pulsa OK para volver a jugar o Cancelar para salir");

            if(result === true){
                return bingo();
            }
            else{
                return alert("Gracias por jugar y hasta pronto!");
            }
        }
    }


    //función que genera números aleatorios para los cartones
    function getRandomCartones(){
        var numGenerado = Math.floor(Math.random() * 90) + 1;
        
        for(var i = 0; i < bingoCard.length; i++){
            for(var j = 0; j < bingoCard[i].length;j++){
                for(var k = 0; k < bingoCard[i][j].length;k++){
                    if(bingoCard[i][j][k].number == numGenerado){
                        return getRandomCartones();
                    }
                }
                
            }
        }
        return numGenerado;
    }

    //función que genera números aleatorios para los turnos
    function getRandom(){
        var numTurno= Math.floor(Math.random() * 90) + 1;
        
        for(var i = 0; i < listNumbers.length; i++){
        
            if(listNumbers[i]== numTurno){
                return getRandom();
            }
        }
        return numTurno;
    }

    //función que compara y ordena en orden ascendente
    function comparar(a, b){
        return a - b;
    }

} 