var questions = [];

var ronda01 = [
    { letter: "a", answer: "abducir", status: 0, question: "CON LA A. Dicho de una supuesta criatura extraterrestre: Apoderarse de alguien"},
    { letter: "b", answer: "bingo", status: 0, question: "CON LA B. Juego que ha sacado de quicio a todos los 'Skylabers' en las sesiones de precurso"},
    { letter: "c", answer: "churumbel", status: 0, question: "CON LA C. Niño, crío, bebé"},
    { letter: "d", answer: "diarrea", status: 0, question: "CON LA D. Anormalidad en la función del aparato digestivo caracterizada por frecuentes evacuaciones y su consistencia líquida"},
    { letter: "e", answer: "ectoplasma", status: 0, question: "CON LA E. Gelatinoso y se encuentra debajo de la membrana plasmática. Los cazafantasmas medían su radiación"}
];

var ronda02 = [
    { letter: "a", answer: "anillo", status: 0, question: "CON LA A. Joya"},
    { letter: "b", answer: "barcelona", status: 0, question: "CON LA B. Ciudad"},
    { letter: "c", answer: "cocinar", status: 0, question: "CON LA C. Preparar comida"},
    { letter: "d", answer: "disfraz", status: 0, question: "CON LA D. Carnaval"},
    { letter: "e", answer: "esther", status: 0, question: "CON LA E. Nombre"}
];

var ronda03 = [
    { letter: "a", answer: "1", status: 0, question: "CON LA A. 01"},
    { letter: "b", answer: "2", status: 0, question: "CON LA B. 02"},
    { letter: "c", answer: "3", status: 0, question: "CON LA C. 03"},
    { letter: "d", answer: "4", status: 0, question: "CON LA D. 04"},
    { letter: "e", answer: "5", status: 0, question: "CON LA E. 05"}
];

var partidas = 0;
var exit = false; 
var puntos = 0; 
var fallos = 0; 
var players = [];


function pasapalabra() {

    if (partidas == 0) {
        questions = ronda01;
    } else if ( partidas == 1) {
        questions = ronda02;
    } else if (partidas == 2) {
        questions = ronda03;
    }


    function player() {
        var usuario = prompt('¿Cuál es tu nombre?');
        if(usuario == '') {
            player();
        } else if (usuario == null) {
            console.log('¡Hasta otra!');
        } else {
            console.log(`¡Hola ${usuario}! ¡Bienvenido/a a PASAPALABRA GAME!`);
            name = usuario;
            ronda();
        }
    }

     
    function ronda() {
        while(!exit) {
            for (var i = 0; i < questions.length; i++) {
                if (questions[i].status == 0) {
                    console.log(questions[i].question);
                    var respuesta = prompt(questions[i].question);
                    while (respuesta == '') respuesta = prompt(questions[i].question);
                    var a = respuesta ? respuesta.toLowerCase() : null;
                
                        if (a == questions[i].answer) {
                            questions[i].status = 1;
                            console.log('>> ¡Correcto! 1 punto');
                            puntos++;
                        } else if (a == 'pasapalabra') {
                            questions[i].status = 0;
                            console.log('>> Pasapalabra');
                        } else if (a == null) {
                            exit = true;
                            break;
                        } else if (a == 'end') {
                            exit = true;
                            break;
                        } else {
                            questions[i].status = 'x';
                            console.log(`>> Lo sentimos, la respuesta correcta es: ${questions[i].answer}.`);
                            fallos++;
                        }
                }
            }

            var allQuestions = questions.filter(quest => quest.status == 0);
            if (allQuestions.length == 0) {
           
                exit = true;
                console.log(`· Tienes ${puntos} palabra/s acertada/s y ${fallos} palabra/s fallada/s`);
                players.push({ name: name, puntos: puntos });
                ranking();
            }
        }
        if (a == null || a == 'end') {
            console.log(`· ¡Oh, lástima! Dejas la partida con ${puntos} palabra/s acertada/s y ${fallos} palabra/s fallada/s.`);
        }
    }

    player();    
}


function ranking() {
    var ordenar = function (a, b) {
        return a.puntos < b.puntos;
    }
    players.sort(ordenar);

    console.log('RANKING TOP 3 PASAPALABRA GAME:');
    for (player of players) {
        console.log(`>> Con ${player.puntos} palabras acertadas: ${player.name}`);
    }

    if(partidas == 2) console.log('¡Graicas por participar en PASAPALABRA GAME!');
    else volverAjugar();    
}


function volverAjugar() {
    var jugar = prompt('¿Otra partida?', 'Si/No');
    var volver = jugar ? jugar.toLowerCase() : null;
    if (volver == 'si') {
        partidas++;
        exit = false;
        puntos = 0; 
        fallos = 0; 
        pasapalabra();
    } else if (volver == 'no') {
        console.log('¡Gracias por jugar!');
    } else if (volver == null) {
        console.log('¡Gracias por jugar!');
    } else {
        volverAjugar();
    }
}

pasapalabra();




