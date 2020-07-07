//Se pide el nombre de Jugador para ser utilizado en el resto del juego y le muestran las reglas.
var nombreJugador;

playerName();

reglas();

//En este do...while se generan las variables a ser utilizadas por el bingo y el carton que se imprime en la pantalla.
do{
    var controlNumerosCarton = [];

    var carton = [
        //linea1
    { numero: numeroAleatorioCarton() , matched: false },
    { numero: numeroAleatorioCarton() , matched: false },
    { numero: numeroAleatorioCarton() , matched: false },
    { numero: numeroAleatorioCarton() , matched: false },
    { numero: numeroAleatorioCarton() , matched: false },
        //linea2
    { numero: numeroAleatorioCarton() , matched: false },
    { numero: numeroAleatorioCarton() , matched: false },
    { numero: numeroAleatorioCarton() , matched: false },
    { numero: numeroAleatorioCarton() , matched: false },
    { numero: numeroAleatorioCarton() , matched: false },
        //linea3
    { numero: numeroAleatorioCarton() , matched: false },
    { numero: numeroAleatorioCarton() , matched: false },
    { numero: numeroAleatorioCarton() , matched: false },
    { numero: numeroAleatorioCarton() , matched: false },
    { numero: numeroAleatorioCarton() , matched: false },
    ];

    var controlNumeros = [];

    var linea = false;

    var bingoWin = false;

    var puntos = 100;

    var contTurno = 0;


    imprimirCarton();
 
    function imprimirCarton(){
    console.log(`Tu carton actual es: \n
            ${carton[0].numero} , ${carton[1].numero} , ${carton[2].numero} , ${carton[3].numero} , ${carton[4].numero}
            ${carton[5].numero} , ${carton[6].numero} , ${carton[7].numero} , ${carton[8].numero} , ${carton[9].numero}
            ${carton[10].numero} , ${carton[11].numero} , ${carton[12].numero} , ${carton[13].numero} , ${carton[14].numero}`)
        }

    function numeroAleatorioCarton(){
        do{
            var numeroCarton = Math.ceil(Math.random()*100);

        } while(checkCarton(controlNumerosCarton, numeroCarton));
        controlNumerosCarton.push(numeroCarton);
        return numeroCarton;
        
    }
//esta funcion corrobora de que no se repita ninguno de los numeros generados para el carton. Esta funcion es usada de forma complementaria
//con la funcion numeroAleatorioCarton.
    function checkCarton(arr, numero){
        for(let a = 0; a < arr.length; a++){
            if(arr[a] === numero){
                return true;
            };
        };
        return false;
    }   
   
} while (!confirm('Desea conservar este carton?'));

//Esta funcion es para loguear en consola las reglas luego de pedir el nombre.
function reglas(){
    console.log(`Bienvenido ${nombreJugador}, vamos a jugar al bingo. Las reglas son las siguientes: \n
                    
                    - Comienzas con 100 puntos, y se ira restando de a 1 punto por cada turno jugado. \n
                    - Si haces Linea se sumaran 20 puntos y cantar Bingo te da 75 puntos.`)
};
//esta es la funcion general del juego donde comienza restando puntos y sumando turnos cuando se empieza a jugar con el carton.
//con el primer if nos aseguramos de que chequee si hay linea. Una vez cantada ya no sucede mas.
function bingo(){   
    puntos--;
    contTurno++;
        
        if(linea === false){
            lineaCheck();
        };

        var numero = numeroAleatorioBolillero();

        console.log(`Ha salido el numero: ${numero}`);
    

        turno();
        console.log('Puntos actuales : ' + puntos);
        proxTurno();

//en esta funcion se genera un numero nuevo que no se haya repetido en los turnos anteriores.
    function numeroAleatorioBolillero(){
      do{
           numero = Math.ceil(Math.random()*100);
       
        } while (chequeo(controlNumeros, numero));
        controlNumeros.push(numero);
        return numero;
    };
//La funcion anterios funciona gracias a esta funcion que es la que realiza el chequeo de los numeros que han salido.
    function chequeo(arr, numero){
        for(let a = 0; a < arr.length; a++){
            if(arr[a] === numero){
                return true;
            };
        };
        return false;
    };
//En cada turno esta funcion busca los numeros que coincidan entre los que salieron ramdom y los del carton y los remplaza por 
// una "X" y la propiedad de matched de ese mismo numero cambia a true.
    function turno(){
        for(let i = 0; i < carton.length ; i++){
            if (numero === carton[i].numero){
                carton[i].numero = 'X';
                carton[i].matched = true;
                console.log(`Se ha tachado el numero ${numero}. Falta cada vez menos! :D`);
                imprimirCarton();
            };
        };
        bingoCheck();
    };
//Mientras no se haya cantado bingo esta funcion pregunta pasar al proximo turno. Pero si hubo bingo loeguea los puntos en contola.
    function proxTurno(){
       if(bingoWin === false){
            let pregunta = confirm('Sacamos otro numero?');
            if(pregunta === true){
                bingo();
                } 

        } else { console.log( `Felicitaciones ${nombreJugador}, has ganado! Terminaste con ${puntos} puntos!.`)};
    };
//Esta funcion chequea si hay linea buscando las coincidencias de los numeros remplazados por "X". Esta separado en un if para cada linea.
    function lineaCheck(){

            if(carton[0].numero == 'X' && carton[1].numero == 'X' && carton[2].numero == 'X' 
            && carton[3].numero == 'X' && carton[4].numero == 'X'){
                
                puntos +=20;
                linea = true;
            };
            if(carton[5].numero == 'X' && carton[6].numero == 'X' && carton[7].numero == 'X' 
            && carton[8].numero == 'X' && carton[9].numero == 'X'){
                
                puntos +=20;
                linea = true;
            };
            if(carton[10].numero == 'X' && carton[11].numero == 'X' && carton[12].numero == 'X' 
            && carton[13].numero == 'X' && carton[14].numero == 'X'){
                
                puntos +=20;
                linea = true;
            };
            if(linea == true){console.log('LINEEEAAAAAA MIJOOOOO')};
        
            return linea;
       
    };
//Esta funcion es la que encarga de ver el estado del carton y cantar bingo cuando el carton este lleno. Tambien cambia el valor de bingoWin
// a true para que el juego deje de correr una vez que haya bingo.
    function bingoCheck(){
        
        if(carton[0].matched && carton[1].matched && carton[2].matched 
            && carton[3].matched && carton[4].matched && carton[5].matched && 
            carton[6].matched && carton[7].matched && carton[8].matched && 
            carton[9].matched && carton[10].matched && carton[11].matched && 
            carton[12].matched && carton[13].matched && carton[14].matched ){
            
            puntos += 75;

            bingoWin = true;

            console.log('GANASTEEEEEEEEEEEEEEEEEEEEEEEE')
        };
       
       
    
        return bingoWin;

    };

};

//Funcion que checkea que el nombre del jugador no este vacio ni sean solo numeros.
function playerName(){
    
    nombreJugador = prompt('Recuerda que no puedes dejar el nombre vacio ni que sea solo numeros. Por lo menos un nickname.');

    if(Boolean(nombreJugador) === false || isNaN(nombreJugador) === false ){
        playerName();
    }

    
}

bingo();