'use strict';
var questions = [

    { letter: "a", answer: "abducir", status: 0, question: "CON LA A. Dicho de una supuesta criatura extraterrestre: Apoderarse de alguien" },

    { letter: "b", answer: "bingo", status: 0, question: "CON LA B. Juego que ha sacado de quicio a todos los 'Skylabers' en las sesiones de precurso" },

    { letter: "c", answer: "churumbel", status: 0, question: "CON LA C. Niño, crío, bebé" },

    { letter: "d", answer: "diarrea", status: 0, question: "CON LA D. Anormalidad en la función del aparato digestivo caracterizada por frecuentes evacuaciones y su consistencia líquida" },

    { letter: "e", answer: "ectoplasma", status: 0, question: "CON LA E. Gelatinoso y se encuentra debajo de la membrana plasmática. Los cazafantasmas medían su radiación" },

    { letter: "f", answer: "facil", status: 0, question: "CON LA F. Que no requiere gran esfuerzo, capacidad o dificultad" },

    { letter: "g", answer: "galaxia", status: 0, question: "CON LA G. Conjunto enorme de estrellas, polvo interestelar, gases y partículas" },

    { letter: "h", answer: "harakiri", status: 0, question: "CON LA H. Suicidio ritual japonés por desentrañamiento" },

    { letter: "i", answer: "iglesia", status: 0, question: "CON LA I. Templo cristiano" },

    { letter: "j", answer: "jabali", status: 0, question: "CON LA J. Variedad salvaje del cerdo que sale en la película 'El Rey León', de nombre Pumba" },

    { letter: "k", answer: "kamikaze", status: 0, question: "CON LA K. Persona que se juega la vida realizando una acción temeraria" },

    { letter: "l", answer: "licantropo", status: 0, question: "CON LA L. Hombre lobo" },

    { letter: "m", answer: "misantropo", status: 0, question: "CON LA M. Persona que huye del trato con otras personas o siente gran aversión hacia ellas" },

    { letter: "n", answer: "necedad", status: 0, question: "CON LA N. Demostración de poca inteligencia" },

    { letter: "ñ", answer: "señal", status: 0, question: "CONTIENE LA Ñ. Indicio que permite deducir algo de lo que no se tiene un conocimiento directo." },

    { letter: "o", answer: "orco", status: 0, question: "CON LA O. Humanoide fantástico de apariencia terrible y bestial, piel de color verde creada por el escritor Tolkien" },

    { letter: "p", answer: "protoss", status: 0, question: "CON LA P. Raza ancestral tecnológicamente avanzada que se caracteriza por sus grandes poderes psíonicos del videojuego StarCraft" },

    { letter: "q", answer: "queso", status: 0, question: "CON LA Q. Producto obtenido por la maduración de la cuajada de la leche" },

    { letter: "r", answer: "raton", status: 0, question: "CON LA R. Roedor" },

    { letter: "s", answer: "stackoverflow", status: 0, question: "CON LA S. Comunidad salvadora de todo desarrollador informático" },

    { letter: "t", answer: "terminator", status: 0, question: "CON LA T. Película del director James Cameron que consolidó a Arnold Schwarzenegger como actor en 1984" },

    { letter: "u", answer: "unamuno", status: 0, question: "CON LA U. Escritor y filósofo español de la generación del 98 autor del libro 'Niebla' en 1914" },

    { letter: "v", answer: "vikingos", status: 0, question: "CON LA V. Nombre dado a los miembros de los pueblos nórdicos originarios de Escandinavia, famosos por sus incursiones y pillajes en Europa" },

    { letter: "w", answer: "sandwich", status: 0, question: "CONTIENE LA W. Emparedado hecho con dos rebanadas de pan entre las cuales se coloca jamón y queso" },

    { letter: "x", answer: "botox", status: 0, question: "CONTIENE LA X. Toxina bacteriana utilizada en cirujía estética" },

    { letter: "y", answer: "peyote", status: 0, question: "CONTIENE LA Y. Pequeño cáctus conocido por sus alcaloides psicoactivos utilizado de forma ritual y medicinal  por indígenas americanos" },

    { letter: "z", answer: "zen", status: 0, question: "CON LA Z. Escuela de budismo que busca la experiencia de la sabiduría más allá del discurso racional" }];

var start = document.getElementById('alien');
var countRight = document.getElementById('right');
var countFail = document.getElementById('fail');
var screen = document.getElementById('questions');
var resp = document.getElementById('resp');
var buttonOk = document.getElementById('ok');
var buttonPasa = document.getElementById('pasa');
var buttonExit = document.getElementById('exit');
var message = document.getElementById('message');
var player1 = document.getElementById('player1');
var player2 = document.getElementById('player2');
var rightP1 = document.getElementById('rightP1');
var rightP2 = document.getElementById('rightP2');

var right = 0;
var fail = 0;
var playerName = '';
var players = [];
var correctAnswer = '';
var currentLetter = {};
var nextPosition = 0;
var seconds = 180;
var countdownTimer = 0;

//start function
function pasapalabra() {
    playerName = prompt('Introduzca su nombre:');
    if (playerName == null) {
        return false;
    }
    players.push(playerName);
    countdownTimer = setInterval('timer()', 1000);
    checkQuestion();
}

function timer() {
    var minutes = Math.round((seconds - 30) / 60);
    var remainingSeconds = seconds % 60;
    if (remainingSeconds < 10) {
        remainingSeconds = '0' + remainingSeconds;
    }
    document.getElementById('timer').innerHTML = minutes + ':' + remainingSeconds;
    if (seconds === 0) {
        clearInterval(countdownTimer);
        document.getElementById('timer').innerHTML = 'Tiempo!';
        screen.innerHTML = `El jugador ${playerName} ha acertado ${right} letra/s y ha fallado ${fail}.`;
        ranking();
    } else {
        seconds--;
    }
}

//function for each letter
function checkQuestion() {
    for (let i = nextPosition; i < questions.length; i++) {
        if (questions[i].status === 0) {
            screen.innerHTML = questions[i].question;
            currentLetter = questions[i];
            nextPosition = i + 1;
            break;
        }
    }

    //last letter
    if (nextPosition === questions.length) {
        nextPosition = 0;
    }
    resp.value = '';
}

function colorGreen(letter) {
    document.getElementById(letter).style.backgroundColor = "rgb(0, 248, 0)";
}
function colorRed(letter) {
    document.getElementById(letter).style.backgroundColor = "red";
}
function colorReset(letter) {
    document.getElementById(letter).style.backgroundColor = "rgb(213, 244, 255)";
}

function isFinished() {
    for (let i = 0; i < questions.length; i++) {
        if (questions[i].status === 0 && seconds !== 0) {
            return false;
        }
    }
    return true;
}

function ranking() {
    if (players.length === 1) {
        player1.innerHTML = players[0];
        rightP1.innerHTML = right;
    } else {
        player2.innerHTML = players[1];
        rightP2.innerHTML = right;
    }
}

start.onclick = function () {
    for (let i = 0; i < questions.length; i++) {
        questions[i].status = 0;
        colorReset(questions[i].letter);
    }
    right = 0;
    fail = 0;
    nextPosition = 0;
    countRight.innerHTML = 0;
    countFail.innerHTML = 0;
    screen.innerHTML = '';
    resp.value = '';
    message.innerHTML = '';
    seconds = 180;
    countdownTimer = 0;
    pasapalabra();
}

buttonOk.addEventListener('click', runButtonOk);

resp.addEventListener('keyup', function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        runButtonOk();
    }
});

function runButtonOk() {
    
    if (!isFinished()) {
        message.innerHTML = '';
        if ((resp.value).toLowerCase() === currentLetter.answer) {
            right++;
            colorGreen(currentLetter.letter);
            currentLetter.status = 1;
            countRight.innerHTML = right;
            if (!isFinished()) {
                checkQuestion();
            } else {
                screen.innerHTML = `El jugador ${playerName} ha acertado ${right} letra/s y ha fallado ${fail}.`;
                clearInterval(countdownTimer);
                ranking();
                return false;
            }

        } else {
            fail++;
            colorRed(currentLetter.letter);
            currentLetter.status = 1;
            message.innerHTML = 'Error! Respuesta correcta: ' + currentLetter.answer;
            countFail.innerHTML = fail;
            if (!isFinished()) {
                checkQuestion();
            } else {
                screen.innerHTML = `El jugador ${playerName} ha acertado ${right} letra/s y ha fallado ${fail}.`;
                clearInterval(countdownTimer);
                ranking();
                return false;
            }
        }
    }
}

buttonPasa.onclick = function () {
    checkQuestion();
}

buttonExit.onclick = function () {
    clearInterval(countdownTimer);
    screen.innerHTML = `El jugador ${playerName} ha acertado ${right} letra/s y ha fallado ${fail}.`;
    return false;
}