
var abcdario = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "L", "M", "N", "Ñ", "O", "P", "Q", "R", "S", "U", "V", "X", "Y", "Z"];
var totalTime = 200;
var playerName;
questions = [[
    ///ROSCO 1
    { letter: "A", answer: "abducir", status: 0, question: "CON LA A. Dicho de una supuesta criatura extraterrestre: Apoderarse de alguien" },

    { letter: "B", answer: "bingo", status: 0, question: "CON LA B. Juego que ha sacado de quicio a todos los 'Skylabers' en las sesiones de precurso" },

    { letter: "C", answer: "churumbel", status: 0, question: "CON LA C. Niño, crío, bebé" },

    { letter: "D", answer: "diarrea", status: 0, question: "CON LA D. Anormalidad en la función del aparato digestivo caracterizada por frecuentes evacuaciones y su consistencia líquida" },

    { letter: "E", answer: "ectoplasma", status: 0, question: "CON LA E. Gelatinoso y se encuentra debajo de la membrana plasmática. Los cazafantasmas medían su radiación" },

    { letter: "F", answer: "facil", status: 0, question: "CON LA F. Que no requiere gran esfuerzo, capacidad o dificultad" },

    { letter: "G", answer: "galaxia", status: 0, question: "CON LA G. Conjunto enorme de estrellas, polvo interestelar, gases y partículas" },

    { letter: "H", answer: "harakiri", status: 0, question: "CON LA H. Suicidio ritual japonés por desentrañamiento" },

    { letter: "I", answer: "iglesia", status: 0, question: "CON LA I. Templo cristiano" },

    { letter: "J", answer: "jabali", status: 0, question: "CON LA J. Variedad salvaje del cerdo que sale en la película 'El Rey León', de nombre Pumba" },

    { letter: "L", answer: "licantropo", status: 0, question: "CON LA L. Hombre lobo" },

    { letter: "M", answer: "misantropo", status: 0, question: "CON LA M. Persona que huye del trato con otras personas o siente gran aversión hacia ellas" },

    { letter: "N", answer: "necedad", status: 0, question: "CON LA N. Demostración de poca inteligencia" },

    { letter: "Ñ", answer: "señal", status: 0, question: "CONTIENE LA Ñ. Indicio que permite deducir algo de lo que no se tiene un conocimiento directo." },

    { letter: "O", answer: "orco", status: 0, question: "CON LA O. Humanoide fantástico de apariencia terrible y bestial, piel de color verde creada por el escritor Tolkien" },

    { letter: "P", answer: "protoss", status: 0, question: "CON LA P. Raza ancestral tecnológicamente avanzada que se caracteriza por sus grandes poderes psíonicos del videojuego StarCraft" },

    { letter: "Q", answer: "queso", status: 0, question: "CON LA Q. Producto obtenido por la maduración de la cuajada de la leche" },

    { letter: "R", answer: "raton", status: 0, question: "CON LA R. Roedor" },

    { letter: "S", answer: "stackoverflow", status: 0, question: "CON LA S. Comunidad salvadora de todo desarrollador informático" },

    { letter: "T", answer: "terminator", status: 0, question: "CON LA T. Película del director James Cameron que consolidó a Arnold Schwarzenegger como actor en 1984" },

    { letter: "U", answer: "unamuno", status: 0, question: "CON LA U. Escritor y filósofo español de la generación del 98 autor del libro 'Niebla' en 1914" },

    { letter: "V", answer: "vikingos", status: 0, question: "CON LA V. Nombre dado a los miembros de los pueblos nórdicos originarios de Escandinavia, famosos por sus incursiones y pillajes en Europa" },

    { letter: "X", answer: "botox", status: 0, question: "CONTIENE LA X. Toxina bacteriana utilizada en cirujía estética" },

    { letter: "Y", answer: "peyote", status: 0, question: "CONTIENE LA Y. Pequeño cáctus conocido por sus alcaloides psicoactivos utilizado de forma ritual y medicinal  por indígenas americanos" },

    { letter: "Z", answer: "zen", status: 0, question: "CON LA Z. Escuela de budismo que busca la experiencia de la sabiduría más allá del discurso racional" }],

[
    //ROSCO 2
    { letter: "A", answer: "aceite", status: 0, question: "CON LA A. Liquido graso de color verde amarillento que se obtiene" },

    { letter: "B", answer: "buzon", status: 0, question: "CON LA B. Abertura por donde se echan las cartas para el correo." },

    { letter: "C", answer: "chandal", status: 0, question: "CON LA C. Ropa deportiva que consta de un pantalón y jersey amplio" },

    { letter: "D", answer: "devoto", status: 0, question: "CON LA D. Dedicación con fervor a obras de piedad y religión" },

    { letter: "E", answer: "entera", status: 0, question: "CON LA E. Se dice de la leche que conserva toda la grasa y sustancias nutritivas" },

    { letter: "F", answer: "forestal", status: 0, question: "CON LA F. Perteneciente o relativo a los bosques y a los aprovechamientos de leñas o pastos" },

    { letter: "G", answer: "grito", status: 0, question: "CON LA G. Voz muy esforzada y levantada." },

    { letter: "H", answer: "hombrera", status: 0, question: "CON LA H. Adorno especial de los vestidos en la parte correspondiente a los hombros" },

    { letter: "I", answer: "intuir", status: 0, question: "CON LA I. Percibir íntima o instantáneamente una idea o verdad tal como si la tuviera a la vista" },

    { letter: "J", answer: "jornada", status: 0, question: "CON LA J. Tiempo de duración del trabajo diario" },

    { letter: "L", answer: "lermontov", status: 0, question: "CON LA L. Apellido del poeta ruso autor de la obra 'La muerte del poeta' de 1837" },

    { letter: "M", answer: "menor", status: 0, question: "CON LA M. Se dice de una persona que aún no ha cumplido la mayoría de edad" },

    { letter: "N", answer: "ninfa", status: 0, question: "CON LA N. Cada una de las fabulosas deidades de las aguas, bosques o selvas" },

    { letter: "Ñ", answer: "patraña", status: 0, question: "CONTIENE LA Ñ. Mentira o noticia fabulosa de pura invención." },

    { letter: "O", answer: "ordenanza", status: 0, question: "CON LA O. Empleado que en ciertas oficinas desempeña labores subalternas" },

    { letter: "P", answer: "prioridad", status: 0, question: "CON LA P. Anterioridad de algo respecto de otra cosa en tiempo o en orden" },

    { letter: "Q", answer: "branquia", status: 0, question: "CONTIENE LA Q. Órgano respiratorio de los peces formado por laminas o filamentos" },

    { letter: "R", answer: "renard", status: 0, question: "CON LA R. Apellido del ingeniero francés que junto a Arthur C. Krebs, construyó el dirigible militar 'La France' en 1884" },

    { letter: "S", answer: "samba", status: 0, question: "CON LA S. Danza popular brasileña de influencia africana cantada de compás binario." },

    { letter: "T", answer: "tragaperras", status: 0, question: "CON LA T. Máquina de juegos de azar que funciona introduciendo monedas" },

    { letter: "U", answer: "usurpar", status: 0, question: "CON LA U. Atribuirse o usar un cargo o título ajenos como si fueran propios" },

    { letter: "V", answer: "vivienda", status: 0, question: "CON LA V. Lugar cerrado y cubierto construido para ser habitado por personas" },

    { letter: "X", answer: "oxford", status: 0, question: "CONTIENE LA X. Ciudad inglesa cuya Universidad compite cada año en una popular regata contra la Universidad de Cambridge" },

    { letter: "Y", answer: "leguleyo", status: 0, question: "CONTIENE LA Y. Persona que aplica el derecho sin rigor y desenfadadamente" },

    { letter: "Z", answer: "zarandeo", status: 0, question: "CON LA Z. Movimiento repetido y violento de un lado a otro" }]];

var round = 0;
var quest = 0;

function showRosco() {
    var div = 360 / 25;
    var radius = 200;
    var parentdiv = document.getElementById('parentdiv');
    var offsetToParentCenter = parseInt(parentdiv.offsetWidth / 2);  //assumes parent is square
    var offsetToChildCenter = 20;
    var totalOffset = offsetToParentCenter - offsetToChildCenter;
    for (var i = 1; i <= 25; ++i) {

        var childdiv = document.createElement('div');
        childdiv.className = 'div2';
        childdiv.id = questions[0][i - 1].letter;
        console.log(questions[0][i - 1].letter);
        childdiv.style.position = 'absolute';
        var y = Math.sin((div * i) * (Math.PI / 180)) * radius;
        var x = Math.cos((div * i) * (Math.PI / 180)) * radius;
        childdiv.style.top = (y + totalOffset).toString() + "px";
        childdiv.style.left = (x + totalOffset).toString() + "px";
        childdiv.innerText = questions[0][i - 1].letter;

        parentdiv.appendChild(childdiv);

    }
}


function getNameP() {
    if (getName(document.getElementById("playerN").value))
        prepareGame();
}
function getName(nameL) {
    var rExp = /^[a-zA-ZñÑáéíóúÁÉÍÓÚ\s]+$/;

    nameL = document.getElementById("playerN").value;
    if (!nameL.match(rExp)) {
        document.getElementById("fail").classList.remove = "hidden";
        document.getElementById("nameTitle").classList.remove = "visible";
        document.getElementById("fail").className = "visible";
        document.getElementById("nameTitle").className = "hidden";
        return false;
    } else {
        playerName = nameL;
        return true;


    }
}
function prepareGame() {
    document.getElementById("gameWorkHolder").classList.remove = "hidden";
    document.getElementById("InitialHolder").className = "hidden";
    document.getElementById("gameWorkHolder").className = "visible";
    document.getElementById("start").innerHTML = ("Welcome " + playerName + " to pasapalabra!\n press I'm ready! to start");
    showRosco();
}

function final() {

}

function start() {
    document.getElementById("infoHolder").classList.remove = "hidden";
    document.getElementById("ready").className = "hidden";
    document.getElementById("infoHolder").className = "visible";
    //document.getElementById("countHolder").innerText = downloadTimer;
    showQuest();
    updateClock();


}
function keyPress(event) {
    var x = event.keyCode;
    if (x == 13) {  // 13 is the Enter key
        check();
    }
}
function check() {
    var ans;
    if (getName(document.getElementById("ansLeter").value)) {
        ans = document.getElementById("ansLeter").value;
    }
    if (questions[round][quest].answer === ans) {
        console.log("Correcto! you win 1 point");
        document.getElementById(questions[round][quest].letter).style.backgroundColor = "rgb(100, 199, 21)";
        questions[round][quest].status = 1;
        quest++;
        showQuest();
    } else {
        console.log("Error! La respuesta correcta era:", questions[round][quest].answer);
        document.getElementById(questions[round][quest].letter).style.backgroundColor = "red";
        questions[round][quest].status = -1;
        quest++;
        showQuest();

    }
}

function pasar() {
    quest++;
    showQuest();
}

function showQuest() {
    document.getElementById("question").innerText = questions[round][quest].question;
    document.getElementById("ansLeter").value = "";
}

function updateClock() {
    document.getElementById('countdown').innerHTML = totalTime;
    if (totalTime == 0) {
        final();
    } else {
        totalTime -= 1;
        setTimeout("updateClock()", 1000);
    }
}