"use strict";
var start = false;
var transactionDone = false;

var playerName = "";
var gameTime = 150;
var timerControl = null;
var correctCount = 0;
var incorrectCount = 0;

var courtainDiv = document.querySelector(".courtains");
var leftCourtain = document.querySelector(".left-courtain");
var rightCourtain = document.querySelector(".right-courtain");

var leftMenu = document.querySelector(".menu");
var rankig = document.querySelector(".ranking")
var labelInput = document.querySelector(".name-label")
var inputMenu = document.querySelector(".menu-input")
var startButton = document.querySelector(".menu-button");

var errorColorsString = ["#bebe1c", "#d11515", "#ee9f0d"];
var selectedColor = 0;

var playerDisplay = document.querySelector(".player-name")
var timer = document.querySelector(".timer");

var letterA = document.querySelector(".a");
var letterB = document.querySelector(".b");
var letterC = document.querySelector(".c");
var letterD = document.querySelector(".d");
var letterE = document.querySelector(".e");
var letterF = document.querySelector(".f");
var letterG = document.querySelector(".g");
var letterH = document.querySelector(".h");
var letterI = document.querySelector(".i");
var letterJ = document.querySelector(".j");
var letterL = document.querySelector(".l");
var letterM = document.querySelector(".m");
var letterN = document.querySelector(".n");
var letterÑ = document.querySelector(".ñ");
var letterO = document.querySelector(".o");
var letterP = document.querySelector(".p");
var letterQ = document.querySelector(".q");
var letterR = document.querySelector(".r");
var letterS = document.querySelector(".s");
var letterT = document.querySelector(".t");
var letterU = document.querySelector(".u");
var letterV = document.querySelector(".v");
var letterX = document.querySelector(".x");
var letterY = document.querySelector(".y");
var letterZ = document.querySelector(".z");

var rosco = document.querySelectorAll(".letters");

var cancelButton = document.querySelector(".cancel-button");

var correctDisplay = document.querySelector(".correct");
var incorrectDisplay = document.querySelector(".incorrect");
var questionText = document.querySelector(".question-text");
var answerInput = document.querySelector(".answer-input");
var answerButton = document.querySelector(".input-button")
var pasapalabraButton = document.querySelector(".pasapalabra-button");

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
    { letter: "x", answer: "botox", status: 0, question: "CONTIENE LA X. Toxina bacteriana utilizada en cirujía estética" },
    { letter: "y", answer: "peyote", status: 0, question: "CONTIENE LA Y. Pequeño cáctus conocido por sus alcaloides psicoactivos utilizado de forma ritual y medicinal  por indígenas americanos" },
    { letter: "z", answer: "zen", status: 0, question: "CON LA Z. Escuela de budismo que busca la experiencia de la sabiduría más allá del discurso racional" },
];

var currentQuestion = 0;


// --- This code executes when the page loads ---
leftMenu.classList.add("menu-animation-show");
localStorage.clear();

// -----------------------------------------------

// ------------- EventListeners ------------------
startButton.addEventListener("click", function() {
    if (checkForm()) {
        if (!transactionDone) {
            transactionDone = true;
            leftCourtain.classList.add("left-courtain-anim");
            rightCourtain.classList.add("right-courtain-anim");
            setTimeout(function() {
                courtainDiv.parentNode.removeChild(courtainDiv);
            }, 600);
        }
        leftMenu.classList.add("menu-animation-hide");
        playerName = inputMenu.value;
        playerDisplay.innerHTML = playerName;
        timerControl = setInterval(timerTick, 1000);
        resetGame();
        nextTurn();
    } else {
        setLabelColor();
    }

    inputMenu.value = "";
});

answerButton.addEventListener("click", function() {
    checkAnswer();
    answerInput.value = "";
    answerInput.focus();
});


pasapalabraButton.addEventListener("click", function() {
    do {
        currentQuestion++;
        if (currentQuestion >= 25) {
            currentQuestion = 0;
        }
    } while (questions[currentQuestion].status !== 0 && !start)

    answerInput.value = "";
    answerInput.focus();
});


cancelButton.addEventListener("click", function() {
    endGame();
});
// -----------------------------------------------

// ---------------- Functions --------------------

// Checks if the form is correctly filled
function checkForm() {
    if (inputMenu.value.length > 0) {
        return true;
    }
    return false;
}

// The tick of each iteration of the setInterval
function timerTick() {
    gameTime--;
    timer.innerHTML = gameTime;
    if (gameTime <= 0) {
        //clearInterval(timerControl);
    }
}

// Sets the acording color to the menu input label
function setLabelColor() {
    labelInput.style.color = errorColorsString[selectedColor];
    selectedColor++
    if (selectedColor == 3) {
        selectedColor = 0;
    }
}

// resets the game
function resetGame() {
    for (var obj of questions) {
        obj.status = 0;
    }

    correctCount = 0;
    incorrectCount = 0;
    currentQuestion = 0;
    gameTime = 150;

    timer.innerHTML = 150;
    correctDisplay.innerHTML = 0;
    incorrectDisplay.innerHTML = 0;

    answerButton.disabled = false;
    pasapalabraButton.disabled = false;
    cancelButton.disabled = false;

    resetRoscoColor();
}

function resetRoscoColor() {
    for (var letter of rosco) {
        letter.classList.remove("letters-correct", "letters-incorrect");
    }
}

function nextTurn() {
    printQuestion();
}

// Prints a question in the questionText paragraf (inside the div)
function printQuestion() {
    questionText.innerHTML = questions[currentQuestion].question;
}

function printScore() {
    correctDisplay.innerHTML = correctCount;
    incorrectDisplay.innerHTML = incorrectCount;
}

function checkAnswer() {
    var userAnswer = answerInput.value;
    if (userAnswer.toLowerCase() === questions[currentQuestion].answer.toLowerCase()) {
        correctCount++;
        questions[currentQuestion].status = 1;
        document.querySelector(`.${questions[currentQuestion].letter}`).classList.add("letters-correct");
    } else {
        incorrectCount++;
        questions[currentQuestion].status = -1;
        document.querySelector(`.${questions[currentQuestion].letter}`).classList.add("letters-incorrect");
    }

    if (checkFinish()) {
        endGame();
        return;
    }

    do {
        currentQuestion++;
        if (currentQuestion >= 25) {
            currentQuestion = 0;
        }
    } while (questions[currentQuestion].status !== 0 && !start)

    start = false;

    printScore();
    printQuestion();
}

function checkFinish() {
    for (var i in questions) {
        if (questions[i].status == 0) {
            return false;
        }
    }
    return true;
}

function endGame() {
    clearInterval(timerControl);
    leftMenu.classList.remove("menu-animation-hide");
    pasapalabraButton.disabled = true;
    answerButton.disabled = true;
    cancelButton.disabled = true;

    questionText.innerHTML = `El jugador: ${playerName} acaba con ${correctCount} aciertos, ${incorrectCount} fallos y ${gameTime} segundos restantes.`

    var tempPlayer = new Player(playerName, correctCount, incorrectCount, gameTime);
    localStorage.setItem(playerName, JSON.stringify(tempPlayer));

    writeRanking();
}

function writeRanking() {
    var tempName = "";
    var tempCorr = "";
    var tempIncorr = "";
    var tempTime = "";

    var tempPlayerRanking = null;
    var players = []

    for (let i = 0; i < localStorage.length; i++) {
        tempPlayerRanking = JSON.parse(localStorage.getItem(localStorage.key(i)));
        players.push(tempPlayerRanking);
    }

    players.sort((a, b) => (a.correct < b.correct) ? 1 : -1)

    for (let i = 0; i < players.length; i++) {
        tempName = ".p" + (i + 1) + "Name";
        tempCorr = ".p" + (i + 1) + "Corr";
        tempIncorr = ".p" + (i + 1) + "Incorr";
        tempTime = ".p" + (i + 1) + "Time";

        document.querySelector(tempName).innerHTML = players[i].name;
        document.querySelector(tempCorr).innerHTML = players[i].correct;
        document.querySelector(tempIncorr).innerHTML = players[i].incorrect;
        document.querySelector(tempTime).innerHTML = players[i].time;
    }

}
// -----------------------------------------------

// ---------- Classes ----------------------------
var player = {
    name: String,
    correct: Number,
    incorrect: Number,
    time: Number
};

function Player(name, correct, incorrect, time) {
    this.name = name;
    this.correct = correct;
    this.incorrect = incorrect;
    this.time = time;
}

// -----------------------------------------------