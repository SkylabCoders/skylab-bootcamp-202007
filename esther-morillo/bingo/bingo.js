var ranking = [
    {nombre: name, puntos: 0},
    {nombre: name, puntos: 0},
    {nombre: name, puntos: 0},
    {nombre: name, puntos: 0},
    {nombre: name, puntos: 0}
];
var l = 0;

bingo();


function bingo() {

    var name;
    var randomNumbers = [];
    var mostrarOutNumbers = [];
    var generateNumber = 0;
    var outNumbers = [];
    var linea = false;
    var cont = 0;
    var puntosRanking = 0;
    
    usuario();


    function usuario() {
        name = prompt('Introduzca su nombre:');
        if(name == '') {
            usuario();
        } else if (name == null){
            console.log('¡Hasta otra!')
        } else {
            namePlayer = name;
            console.log(`¡Hola ${name}! Bienvenido/a a nuestro BINGO`);
            sistemaPuntos();
            generateCard();
        }
        
    }


    function sistemaPuntos() {
        console.log('Sistema de Puntación para Bingo: \n · 2500 puntos >> menos o igual a 75 turnos \n · 1500 puntos >> de 76 a 79 turnos \n · 1000 puntos >> de 80 a 82 turnos \n · 800 puntos >> de 83 a 85 turnos \n · 400 puntos >> de 86 a 88 turnos \n · 100 puntos >> de 89 a 90 turnos');
    }


    function generateCard() {
        randomNumbers = [];
        while(randomNumbers.length < 15){
            var randomN = Math.floor(Math.random()*15+1);
            var existe = false;
            for(var i = 0; i < randomNumbers.length; i++){
                if(randomNumbers[i] == randomN){
                    existe = true;
                }
            }
            if(!existe){
                randomNumbers[randomNumbers.length] = randomN;
            }   
        }

        randomNumbers.unshift('\n');
        randomNumbers.splice(6,0,'\n');
        randomNumbers.splice(12,0,'\n');

        console.log(`CARTÓN: ${randomNumbers.join(' ')}`);
        generateAnotherCard();

        function generateAnotherCard() {
            var anotherCard = prompt('¿Le gusta este cartón o quiere otro?', 'Yes/Otro').toLowerCase();
            switch(anotherCard) {
                case 'yes':
                    generateNumbers();
                    confirmTurn();
                    break;
                case 'otro':
                    generateCard();
                    break;
                default:
                    generateAnotherCard();
                    break;
            }
        }
    }


    function confirmTurn() {
        var answer = confirm('¿Quiere jugar?');
        if(answer) {
            mostrar();
        } else {
        console.log('¡Hasta otra!');
        }
    }


    function generateNumbers() {
        while(outNumbers.length < 90){
        var existeBola = false;
        generateNumber = Math.floor(Math.random()*90+1);
            for (var j = 0; j < outNumbers.length; j++) {
                if (outNumbers[j] == generateNumber) {
                    existeBola = true;
                }
            }
        if(!existeBola) {
            outNumbers.push(generateNumber);
            } 
        }
    }   


    function mostrar() {
        var numerosDelBombo = outNumbers[cont];
        mostrarOutNumbers.push(numerosDelBombo);
        var indice = randomNumbers.indexOf(numerosDelBombo);
        randomNumbers[indice] = 'X';   

            console.log(`El número... ${numerosDelBombo}`);
            console.log(`CARTÓN: ${randomNumbers.join(' ')}`);
            console.log(`Números que han salido: ${mostrarOutNumbers}`);
        
        cont++;

        if (!linea) paraLinea(); 
        else paraBingo(); 

        
            function paraLinea() {
                if(randomNumbers[1] == 'X' && randomNumbers[2] == 'X' && randomNumbers[3] == 'X' && randomNumbers[4] == 'X' && randomNumbers[5] == 'X' || randomNumbers[7] == 'X' && randomNumbers[8] == 'X' && randomNumbers[9] == 'X' && randomNumbers[10] == 'X' && randomNumbers[11] == 'X' || randomNumbers[13] == 'X' && randomNumbers[14] == 'X' && randomNumbers[15] == 'X' && randomNumbers[16] == 'X' && randomNumbers[17] == 'X') {
                    console.log('¡¡¡LÍNEA!!!');
                    alert('¡¡¡LÍNEA!!!');
                    linea = true;
                }
                confirmTurn();
            }
        

            function paraBingo() {
            
                if (randomNumbers[1] == 'X' && randomNumbers[2] == 'X' && randomNumbers[3] == 'X' && randomNumbers[4] == 'X' && randomNumbers[5] == 'X' && randomNumbers[7] == 'X' && randomNumbers[8] == 'X' && randomNumbers[9] == 'X' && randomNumbers[10] == 'X' && randomNumbers[11] == 'X' && randomNumbers[13] == 'X' && randomNumbers[14] == 'X' && randomNumbers[15] == 'X' && randomNumbers[16] == 'X' && randomNumbers[17] == 'X') {
                    
                    console.log('¡¡¡BINGO!!!');
                    alert('¡¡¡BINGO!!!');
                    puntuacion();
                } else { 
                    confirmTurn();
                }  
            }
    }

        
    function puntuacion() {  
        if(cont <= 75){
            console.log(`¡Enhorabuena ${name}! Has realizado un SUPERMEGABINGO de 2500 puntos con ${cont} turnos.`);
            puntosRanking = 2500;
        } else if (cont <= 79) {
            console.log(`¡Enhorabuena ${name}! Has realizado un SUPERBINGO de 1000 puntos con ${cont} turnos.`);
            puntosRanking = 1500;
        } else if (cont <= 82) {
            console.log(`¡Enhorabuena ${name}! Has realizado un SUPERBINGO de 1000 puntos con ${cont} turnos.`);
            puntosRanking = 1000;
        } else if (cont <= 85) {
            console.log(`¡Enhorabuena ${name}! Has realizado un BINGO de 800 puntos con ${cont} turnos.`);
            puntosRanking = 800;
        } else if (cont <= 88) {
            console.log(`¡Enhorabuena ${name}! Has realizado un BINGO de 400 puntos con ${cont} turnos.`);
            puntosRanking = 400;
        } else {
            console.log(`¡Enhorabuena ${name}! Has realizado un BINGO de 100 puntos con ${cont} turnos.`);
            puntosRanking = 100;
        }

        if (l < 3) {
            ranking[l].nombre = name;
            ranking[l].puntos = puntosRanking;  
            l++;
        } else {
            l = 3;
        }
              
        var orden = function(a,b){
            return a.puntos < b.puntos;
        };
        ranking.sort(orden);

        
        console.log('Ranking TOP 3:');
        console.log(`· 1. ${ranking[0].nombre} >> ${ranking[0].puntos}\n· 2. ${ranking[1].nombre} >> ${ranking[1].puntos}\n· 3. ${ranking[2].nombre} >> ${ranking[2].puntos}`);

        volverAjugar();
    }
}

function volverAjugar() {
    var volver = prompt('¿Quiere jugar otra partida?', 'Yes/No').toLowerCase();
        switch(volver){
            case 'yes':
                bingo();
                break;
            case 'no':
                console.log('¡Gracias por jugar a nuestro Bingo!');
                alert('¡Gracias por jugar a nuestro Bingo!');
                break;
            default:
                volverAjugar();
        }
}




