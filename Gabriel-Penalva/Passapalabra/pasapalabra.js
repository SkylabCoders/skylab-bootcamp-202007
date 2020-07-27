
var MAX_ROUND = 2;
questions = [[
    ///ROSCO 1
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

    { letter: "z", answer: "zen", status: 0, question: "CON LA Z. Escuela de budismo que busca la experiencia de la sabiduría más allá del discurso racional" }],

[
    //ROSCO 2
    { letter: "a", answer: "aceite", status: 0, question: "CON LA A. Liquido graso de color verde amarillento que se obtiene" },

    { letter: "b", answer: "buzon", status: 0, question: "CON LA B. Abertura por donde se echan las cartas para el correo." },

    { letter: "c", answer: "chandal", status: 0, question: "CON LA C. Ropa deportiva que consta de un pantalón y jersey amplio" },

    { letter: "d", answer: "devoto", status: 0, question: "CON LA D. Dedicación con fervor a obras de piedad y religión" },

    { letter: "e", answer: "entera", status: 0, question: "CON LA E. Se dice de la leche que conserva toda la grasa y sustancias nutritivas" },

    { letter: "f", answer: "forestal", status: 0, question: "CON LA F. Perteneciente o relativo a los bosques y a los aprovechamientos de leñas o pastos" },

    { letter: "g", answer: "grito", status: 0, question: "CON LA G. Voz muy esforzada y levantada." },

    { letter: "h", answer: "hombrera", status: 0, question: "CON LA H. Adorno especial de los vestidos en la parte correspondiente a los hombros" },

    { letter: "i", answer: "intuir", status: 0, question: "CON LA I. Percibir íntima o instantáneamente una idea o verdad tal como si la tuviera a la vista" },

    { letter: "j", answer: "jornada", status: 0, question: "CON LA J. Tiempo de duración del trabajo diario" },

    { letter: "l", answer: "lermontov", status: 0, question: "CON LA L. Apellido del poeta ruso autor de la obra 'La muerte del poeta' de 1837" },

    { letter: "m", answer: "menor", status: 0, question: "CON LA M. Se dice de una persona que aún no ha cumplido la mayoría de edad" },

    { letter: "n", answer: "ninfa", status: 0, question: "CON LA N. Cada una de las fabulosas deidades de las aguas, bosques o selvas" },

    { letter: "ñ", answer: "patraña", status: 0, question: "CONTIENE LA Ñ. Mentira o noticia fabulosa de pura invención." },

    { letter: "o", answer: "ordenanza", status: 0, question: "CON LA O. Empleado que en ciertas oficinas desempeña labores subalternas" },

    { letter: "p", answer: "prioridad", status: 0, question: "CON LA P. Anterioridad de algo respecto de otra cosa en tiempo o en orden" },

    { letter: "q", answer: "branquia", status: 0, question: "CONTIENE LA Q. Órgano respiratorio de los peces formado por laminas o filamentos" },

    { letter: "r", answer: "renard", status: 0, question: "CON LA R. Apellido del ingeniero francés que junto a Arthur C. Krebs, construyó el dirigible militar 'La France' en 1884" },

    { letter: "s", answer: "samba", status: 0, question: "CON LA S. Danza popular brasileña de influencia africana cantada de compás binario." },

    { letter: "t", answer: "tragaperras", status: 0, question: "CON LA T. Máquina de juegos de azar que funciona introduciendo monedas" },

    { letter: "u", answer: "usurpar", status: 0, question: "CON LA U. Atribuirse o usar un cargo o título ajenos como si fueran propios" },

    { letter: "v", answer: "vivienda", status: 0, question: "CON LA V. Lugar cerrado y cubierto construido para ser habitado por personas" },

    { letter: "x", answer: "oxford", status: 0, question: "CONTIENE LA X. Ciudad inglesa cuya Universidad compite cada año en una popular regata contra la Universidad de Cambridge" },

    { letter: "y", answer: "leguleyo", status: 0, question: "CONTIENE LA Y. Persona que aplica el derecho sin rigor y desenfadadamente" },

    { letter: "z", answer: "zarandeo", status: 0, question: "CON LA Z. Movimiento repetido y violento de un lado a otro" }]];

var ranking = [];



function Points(name, letters) {
    this.name = name;
    this.letters = letters;
}

function keepPoints(name, points) {
    ranking[ranking.length] = new Points(name, points);
}

function printPoints(player, points) {
    console.log("El jugador", player, "ha conseguido:", points, "letras.");
}

function getName(str) {
    var rExp = /^[a-zA-ZñÑáéíóúÁÉÍÓÚ\s]+$/;
    var nameL;
    do {
        nameL = prompt(str);
        if (!nameL.match(rExp))
            console.log("Please, use JUST Letters.");
    } while (!nameL.match(rExp));
    return nameL;
}

function printQuestion(pos) {
    console.log(questions[round][pos].question);
}

/*/Get a random between 0 and max -1.
function getRandom(max){
    return (Math.floor(Math.random() * (max + 1)) - 1);
}-*/

function checkAns(pos, ans) {
    if (questions[round][pos].answer === ans) {
        console.log("Correcto! you win 1 point");
        return 1;
    } else {
        console.log("Error! La respuesta correcta era:", questions[round][pos].answer);
        return -1;
    }
}

function findQuestions(questions) {
    return questions.status === 0;
}

function showRanking() {
    console.log("RANKING:");
    if (ranking.length != 0) {
        for (var i = 0; i < ranking.length; i++) {
            console.log(ranking[i].name, "answer", ranking[i].letters, "letters");
        }
    }
}

function ordenateRanking() {
    ranking.sort(function (a, b) {
        if (a.letters > b.letters) {
            return -1;
        }
        if (a.letters < b.letters) {
            return +1;
        }
        // a must be equal to b
        return 0;
    });

}

function welcome() {

    console.log("Welcome to PASAPALABRA!");
    return getName("Please, enter your name!");
}

function reset() {
    for (y in questions) {
        for (x in questions[y]) {
            questions[y][x].status = 0;
        }
    }
}

function pasapalabra(round) {
    var out = false;
    var points = 0;
    var ans = "";
    var pName;
    pName = welcome();
    do {
        for (var i = 0; i < questions[round].length; i++) {
            if (questions[round][i].status === 0) {
                printQuestion(i);
                ans = getName("Respuesta:").toLowerCase();
                switch (ans) {
                    case 'pasapalabra':
                        console.log("Pasapalabra, sigueinte...");
                        break;
                    case 'end':
                        printPoints(pName, points);
                        console.log("fin");
                        out = true;
                        i = questions[round].length;
                        break;
                    default:
                        questions[round][i].status = checkAns(i, ans);
                        if (questions[round][i].status === 1) {
                            points++;
                        }
                        break;
                }
            }
        }
    } while (questions[round].some(findQuestions) && !out)
    if (!questions[round].some(findQuestions)) {
        printPoints(pName, points);
        ranking[ranking.length] = new Points(pName, points);
        ordenateRanking();
        showRanking();
    }
}

var again = false;
var round = 0;
do {
    if (round === MAX_ROUND) {
        console.log("Rondas acabadas, volvemos con la primera");
        round = 0;
        reset();
    }
    pasapalabra(round);
    again = confirm("Wanna play again?");
    if (again) {
        round++;
    }
} while (again);


