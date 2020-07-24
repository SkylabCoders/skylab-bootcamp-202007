/* Francesc Brugarolas - Skylab bootcamp 2020-07 - Precurs */
'use strict';

/* SESSION DATA && CONSTANTS */
const questions = [
    { letter: "a", answer: "abducir", status: 0, question: "CON LA A. Dicho de una supuesta criatura extraterrestre: Apoderarse de alguien"},
    { letter: "a", answer: "acimut", status: 0, question: "CON LA A. Ángulo que con el meridiano forma el círculo vertical que pasa por un punto de la esfera celeste o del globo terráqueo"},
    { letter: "a", answer: "alambicar", status: 0, question: "CON LA A. Sutilizar o complicar excesivamente el lenguaje, el estilo, los conceptos, etc"},
    { letter: "a", answer: "atalaya", status: 0, question: "CON LA A. Torre hecha comúnmente en lugar alto, para registrar desde ella el campo o el mar y dar aviso de lo que se descubre"},
    { letter: "b", answer: "bingo", status: 0, question: "CON LA B. Juego que ha sacado de quicio a todos los 'Skylabers' en las sesiones de precurso"},
    { letter: "b", answer: "burocracia", status: 0, question: "CON LA B. Administración ineficiente a causa del papeleo, la rigidez y las formalidades superfluas"},
    { letter: "b", answer: "bizcocho", status: 0, question: "CON LA B. Dulce blando y esponjoso, hecho generalmente con harina, huevos y azúcar, que se cuece en el horno"},
    { letter: "b", answer: "barrena", status: 0, question: "CON LA B. Instrumento de acero con una rosca en espiral en su punta y provisto generalmente de un mango en el otro extremo, que sirve para taladrar madera, metal, piedra u otro cuerpo duro"},
    { letter: "c", answer: "churumbel", status: 0, question: "CON LA C. Niño, crío, bebé"},
    { letter: "c", answer: "cantautor", status: 0, question: "CON LA C. Cantante, por lo común solista, que suele ser autor de sus propias composiciones, en las que prevalece sobre la música un mensaje de intención crítica o poética"},
    { letter: "c", answer: "colmatar", status: 0, question: "CON LA C. Rellenar una hondonada o depresión del terreno mediante sedimentación de materiales transportados por el agua"},
    { letter: "c", answer: "cencerro", status: 0, question: "CON LA C. Campana pequeña y cilíndrica, tosca por lo común, hecha con chapa de hierro o de cobre, que se usa para el ganado y suele atarse al pescuezo de las reses"},
    { letter: "d", answer: "diarrea", status: 0, question: "CON LA D. Anormalidad en la función del aparato digestivo caracterizada por frecuentes evacuaciones y su consistencia líquida"},
    { letter: "d", answer: "displicencia", status: 0, question: "CON LA D. Desagrado o indiferencia en el trato"},
    { letter: "d", answer: "desabrido", status: 0, question: "CON LA D. Áspero y desapacible en el trato"},
    { letter: "d", answer: "dinosaurio", status: 0, question: "CON LA D. Reptil fósil de gran tamaño, con cabeza pequeña, cuello largo, cola robusta y larga, y, en general, extremidades posteriores más largas que las anteriores"},
    { letter: "e", answer: "ectoplasma", status: 0, question: "CON LA E. Gelatinoso y se encuentra debajo de la membrana plasmática. Los cazafantasmas medían su radiación"},
    { letter: "e", answer: "estertor", status: 0, question: "CON LA E. Respiración anhelosa, generalmente ronca o silbante, propia de la agonía y del coma"},
    { letter: "e", answer: "enfasis", status: 0, question: "CON LA E. Fuerza de expresión o de entonación con que se quiere realzar la importancia de lo que se dice o se lee"},
    { letter: "e", answer: "embuste", status: 0, question: "CON LA E. Mentira disfrazada con artificio"},
    { letter: "f", answer: "facil", status: 0, question: "CON LA F. Que no requiere gran esfuerzo, capacidad o dificultad"},
    { letter: "f", answer: "forense", status: 0, question: "CON LA F. Perteneciente o relativo al foro"},
    { letter: "f", answer: "fideicomiso", status: 0, question: "CON LA F. Disposición por la cual el testador deja su hacienda o parte de ella encomendada a la buena fe de alguien para que, en caso y tiempo determinados, la transmita a otra persona o la invierta del modo que se le señala."},
    { letter: "f", answer: "fulminar", status: 0, question: "CON LA F. Dicho de un rayo eléctrico: Dar muerte"},
    { letter: "g", answer: "galaxia", status: 0, question: "CON LA G. Conjunto enorme de estrellas, polvo interestelar, gases y partículas"},
    { letter: "g", answer: "gesto", status: 0, question: "CON LA G. Movimiento del rostro, de las manos o de otras partes del cuerpo, con que se expresan afectos o se transmiten mensajes"},
    { letter: "g", answer: "gerontocracia", status: 0, question: "CON LA G. Gobierno o dominio ejercido por ancianos"},
    { letter: "g", answer: "gamba", status: 0, question: "CON LA G. Crustáceo semejante al langostino, pero algo menor, y sin los surcos que tiene aquel en el caparazón a uno y otro lado de la quilla mocha. Habita en el Mediterráneo y es comestible"},
    { letter: "h", answer: "harakiri", status: 0, question: "CON LA H. Suicidio ritual japonés por desentrañamiento"},
    { letter: "h", answer: "hotel", status: 0, question: "CON LA H. Establecimiento de hostelería capaz de alojar con comodidad a huéspedes o viajeros."},
    { letter: "h", answer: "honesto", status: 0, question: "CON LA H. Decente o decoroso, probo, recto, honrado"},
    { letter: "h", answer: "humildad", status: 0, question: "CON LA H. Virtud que consiste en el conocimiento de las propias limitaciones y debilidades y en obrar de acuerdo con este conocimiento"},
    { letter: "i", answer: "iglesia", status: 0, question: "CON LA I. Templo cristiano"},
    { letter: "i", answer: "idiosincrasia", status: 0, question: "CON LA I. Rasgos, temperamento, carácter, etc., distintivos y propios de un individuo o de una colectividad"},
    { letter: "i", answer: "ignominia", status: 0, question: "CON LA I. Afrenta pública"},
    { letter: "i", answer: "inane", status: 0, question: "CON LA I. Vano, fútil, inútil"},
    { letter: "j", answer: "jabali", status: 0, question: "CON LA J. Variedad salvaje del cerdo que sale en la película 'El Rey León', de nombre Pumba"},
    { letter: "j", answer: "jamba", status: 0, question: "CON LA J. Cada una de las dos piezas que, dispuestas verticalmente en los dos lados de una puerta o ventana, sostienen el dintel o el arco de ella"},
    { letter: "j", answer: "jabato", status: 0, question: "CON LA J. Valiente, osado, atrevido"},
    { letter: "j", answer: "jocoso", status: 0, question: "CON LA J. Gracioso, chistoso, festivo"},
    { letter: "k", answer: "kamikaze", status: 0, question: "CON LA K. Persona que se juega la vida realizando una acción temeraria"},
    { letter: "k", answer: "kafkiana", status: 0, question: "CON LA K. Dicho de una situación: Absurda, angustiosa"},
    { letter: "k", answer: "kiwi", status: 0, question: "CON LA K. Fruto comestible de un arbusto trepador originario de China, de piel ligeramente vellosa y pulpa de color verde"},
    { letter: "k", answer: "koine", status: 0, question: "CON LA K. Lengua común que resulta de la unificación de ciertas variedades idiomáticas"},
    { letter: "l", answer: "licantropo", status: 0, question: "CON LA L. Hombre lobo"},
    { letter: "l", answer: "lustro", status: 0, question: "CON LA L. Período de cinco años"},
    { letter: "l", answer: "lima", status: 0, question: "CON LA L. Instrumento de acero templado, con la superficie finamente estriada en uno o en dos sentidos, para desgastar y alisar los metales y otras materias duras"},
    { letter: "l", answer: "limite", status: 0, question: "CON LA L. En una secuencia infinita de magnitudes, magnitud fija a la que se aproximan cada vez más los términos de la secuencia"},
    { letter: "m", answer: "misantropo", status: 0, question: "CON LA M. Persona que huye del trato con otras personas o siente gran aversión hacia ellas"},
    { letter: "m", answer: "manteca", status: 0, question: "CON LA M. Producto obtenido por el batido, amasado y posterior maduración de la crema extraída de la leche de vaca o de otros animales"},
    { letter: "m", answer: "musicastro", status: 0, question: "CON LA M. Persona que conoce el arte de la música, despectivo"},
    { letter: "m", answer: "muselina", status: 0, question: "CON LA M. Tela de algodón, seda, lana, etc., fina y poco tupida"},
    { letter: "n", answer: "necedad", status: 0, question: "CON LA N. Demostración de poca inteligencia"},
    { letter: "n", answer: "novel", status: 0, question: "CON LA N. Que comienza a practicar un arte o una profesión, o tiene poca experiencia en ellos"},
    { letter: "n", answer: "nibelungo", status: 0, question: "CON LA N. En la mitología germánica, perteneciente a un pueblo de enanos que vivía bajo la tierra y custodiaba el tesoro de los burgundios"},
    { letter: "n", answer: "nomada", status: 0, question: "CON LA N. Dicho de un individuo, de una tribu, de un pueblo: Carente de un lugar estable para vivir y dedicado especialmente a la caza y al pastoreo"},
    { letter: "ñ", answer: "señal", status: 0, question: "CONTIENE LA Ñ. Indicio que permite deducir algo de lo que no se tiene un conocimiento directo."},
    { letter: "ñ", answer: "ñu", status: 0, question: "CON LA Ñ. Mamífero rumiante africano de la familia de los antílopes, de color pardo grisáceo, cuya cabeza recuerda la de un toro"},
    { letter: "ñ", answer: "ñoño", status: 0, question: "CON LA Ñ. Dicho de una cosa: Sosa, de poca sustancia"},
    { letter: "ñ", answer: "año", status: 0, question: "CONTIENE LA Ñ. Tiempo que tarda la Tierra en dar una vuelta alrededor del Sol"},
    { letter: "o", answer: "orco", status: 0, question: "CON LA O. Humanoide fantástico de apariencia terrible y bestial, piel de color verde creada por el escritor Tolkien"},
    { letter: "o", answer: "otomano", status: 0, question: "CON LA O. Natural de Turquía, país de Europa y Asia"},
    { letter: "o", answer: "oblea", status: 0, question: "CON LA O. Hoja delgada hecha con harina, sal y agua, que se utiliza como cubierta o base de algunos dulces"},
    { letter: "o", answer: "ostracismo", status: 0, question: "CON LA O. Entre los antiguos atenienses, destierro político"},
    { letter: "p", answer: "protoss", status: 0, question: "CON LA P. Raza ancestral tecnológicamente avanzada que se caracteriza por sus grandes poderes psíonicos del videojuego StarCraft"},
    { letter: "p", answer: "pio", status: 0, question: "CON LA P. Devoto, inclinado a la piedad, dado al culto de la religión"},
    { letter: "p", answer: "pelaje", status: 0, question: "CON LA P. Naturaleza y calidad del pelo o de la lana que tiene un animal"},
    { letter: "p", answer: "patitieso", status: 0, question: "CON LA P. Dicho de una persona: Que, por un accidente repentino, o por frío, se queda sin sentido ni movimiento en las piernas o pies"},
    { letter: "q", answer: "queso", status: 0, question: "CON LA Q. Producto obtenido por la maduración de la cuajada de la leche"},
    { letter: "q", answer: "quebrar", status: 0, question: "CON LA Q. Romper, separar con violencia"},
    { letter: "q", answer: "quijotesco", status: 0, question: "CON LA Q. Perteneciente o relativo a don Quijote de la Mancha"},
    { letter: "q", answer: "quina", status: 0, question: "CON LA Q. Corteza del quino, de aspecto variable según la especie de árbol de que procede, muy usada en medicina por sus propiedades febrífugas"},
    { letter: "r", answer: "raton", status: 0, question: "CON LA R. Roedor"},
    { letter: "r", answer: "rocin", status: 0, question: "CON LA R. Caballo de mala traza, basto y de poca alzada"},
    { letter: "r", answer: "robot", status: 0, question: "CON LA R. Máquina o ingenio electrónico programable que es capaz de manipular objetos y realizar diversas operaciones"},
    { letter: "r", answer: "respeto", status: 0, question: "CON LA R. Miramiento, consideración, deferencia"},
    { letter: "s", answer: "stackoverflow", status: 0, question: "CON LA S. Comunidad salvadora de todo desarrollador informático"},
    { letter: "s", answer: "semejante", status: 0, question: "CON LA S. Dicho de una figura: Que es distinta a otra solo por el tamaño y cuyas partes guardan todas respectivamente la misma proporción"},
    { letter: "s", answer: "sinodo", status: 0, question: "CON LA S. Concilio de los obispos"},
    { letter: "s", answer: "sendos", status: 0, question: "CON LA S. Uno cada uno o uno para cada uno de dos o más personas o cosas"},
    { letter: "t", answer: "terminator", status: 0, question: "CON LA T. Película del director James Cameron que consolidó a Arnold Schwarzenegger como actor en 1984"},
    { letter: "t", answer: "timbre", status: 0, question: "CON LA T. Sello emitido por el Estado para algunos documentos, como pago al fisco en concepto de derechos"},
    { letter: "t", answer: "tabacal", status: 0, question: "CON LA T. Sitio sembrado de tabaco"},
    { letter: "t", answer: "tuareg", status: 0, question: "CON LA T. Dicho de una persona: De un pueblo bereber nómada del Sahara"},
    { letter: "u", answer: "unamuno", status: 0, question: "CON LA U. Escritor y filósofo español de la generación del 98 autor del libro 'Niebla' en 1914"},
    { letter: "u", answer: "ulema", status: 0, question: "CON LA U. Doctor de la ley islámica"},
    { letter: "u", answer: "umbraculo", status: 0, question: "CON LA U. Sitio cubierto de ramaje o de otra cosa que da paso al aire, para resguardar las plantas de la fuerza del sol"},
    { letter: "u", answer: "unguento", status: 0, question: "CON LA U. Todo aquello que sirve para ungir o untar"},
    { letter: "v", answer: "vikingos", status: 0, question: "CON LA V. Nombre dado a los miembros de los pueblos nórdicos originarios de Escandinavia, famosos por sus incursiones y pillajes en Europa"},
    { letter: "v", answer: "vacancia", status: 0, question: "CON LA V. Cargo o empleo sin proveer"},
    { letter: "v", answer: "victoria", status: 0, question: "CON LA V. Superioridad o ventaja que se consigue del contrario, en disputa o lid"},
    { letter: "v", answer: "visceral", status: 0, question: "CON LA V. Dicho de una reacción emocional: Muy intensa"},
    { letter: "w", answer: "windsurf", status: 0, question: "CON LA W. Deporte que consiste en deslizarse por el agua sobre una tabla especial provista de una vela"},
    { letter: "w", answer: "waterpolo", status: 0, question: "CON LA W. Juego practicado en una piscina entre dos equipos de siete jugadores cada uno, que consiste en introducir el balón con la mano en la portería contraria mientras se nada"},
    { letter: "w", answer: "wifi", status: 0, question: "CON LA W. Sistema de conexión inalámbrica, dentro de un área determinada, entre dispositivos electrónicos, y frecuentemente para acceso a internet"},
    { letter: "w", answer: "web", status: 0, question: "CON LA W. Red informática"},
    { letter: "x", answer: "botox", status: 0, question: "CONTIENE LA X. Toxina bacteriana utilizada en cirujía estética"},
    { letter: "x", answer: "xilofago", status: 0, question: "CON LA X. Dicho de un insecto: Que roe la madera"},
    { letter: "x", answer: "xilofono", status: 0, question: "CON LA X. Instrumento musical de percusión formado por láminas generalmente de madera, ordenadas horizontalmente según su tamaño y sonido, que se hacen sonar golpeándolas con dos baquetas"},
    { letter: "x", answer: "xenofobia", status: 0, question: "CON LA X. Fobia a los extranjeros"},
    { letter: "y", answer: "yuca", status: 0, question: "CON LA Y. Especie de mandioca"},
    { letter: "y", answer: "yate", status: 0, question: "CONL A Y. Embarcación de gala o de recreo"},
    { letter: "y", answer: "yonqui", status: 0, question: "CON LA Y. En la jerga de la droga, adicto a la heroína"},
    { letter: "y", answer: "yoga", status: 0, question: "CON LA Y. Conjunto de disciplinas físico-mentales originales de la India, destinadas a conseguir la perfección espiritual y la unión con lo absoluto"},
    { letter: "z", answer: "zen", status: 0, question: "CON LA Z. Escuela de budismo que busca la experiencia de la sabiduría más allá del discurso racional"},
    { letter: "z", answer: "zapato", status: 0, question: "CON LA Z. Calzado que no pasa del tobillo, con la parte inferior de suela y lo demás de piel, fieltro, paño u otro tejido, más o menos escotado por el empeine"},
    { letter: "z", answer: "zopenco", status: 0, question: "CON LA Z. Tonto y abrutado"},
    { letter: "z", answer: "zoonosis", status: 0, question: "CON LA Z. Enfermedad o infección que se da en los animales y que es transmisible a las personas en condiciones naturales"}
];
// status 0 means not asked yet
// status 1 means already asked

const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'ñ', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

const transformations = new Map();
transformations.set('á', 'a');
transformations.set('é', 'e');
transformations.set('í', 'i');
transformations.set('ó', 'o');
transformations.set('ú', 'u');
transformations.set('ü', 'u');

const sessionData = {
    pointsRightAnswer: 5,
    pointsFalseAnswer: -2,
    pointsUnanswered: -1,
    points: 0,
    turn: 0,
    games: 0,
    userName: '',
    errors: 0,
    turnTime: 3000, // in ms
    leaderboard: new Map()
}

const yeses = new Set([1, true, 'SI', 'SÍ', 'Si', 'Sí', 'si', 'sí', 'yes', 'Yes', 'YES']);
const noes = new Set([0, false, 'NO', 'No', 'no']);
/* --------------------------------------- */

/* GAME */
function init(){
    greetingsWelcome();
    printGameInfo();
    playTurn();
    leaderboardShow();
    replay();
}
function playTurn(){
    let question = findQuestion();
    let input = askAndCheckInput(question[1]); // remember to ad timer
    sessionData.turn++;
    if (input) { questions[question[0]].status = 1;}
    if (input === undefined){ return greetingsFarewell();}
    if (sessionData.turn < alphabet.length){
        return playTurn();
    } else {
        let date = new Date();
        let year = date.getFullYear();
        let month = date.getMonth();
        let day = date.getDate();
        let formatedDate = day + '-' + month + '-' + year;
        sessionData.leaderboard.set(sessionData.points, [sessionData.userName, sessionData.points, formatedDate, `${sessionData.turn} preguntas`, `${sessionData.errors} errores`]);
        return;
    }
}
function askAndCheckInput(el){
    let input = String(prompt(`${el.question}`));
    let res = input.toLowerCase().split('').map(n => (transformations.get(n) === undefined) ? n : transformations.get(n)).join('');
    if (input === 'end'){
        return undefined;
    } else if (input === 'pasapalabra'){
        sessionData.points += sessionData.pointsUnanswered;
        alert('PASAPALABRA !! 🤯');
    } else if (res === el.answer){
        sessionData.points += sessionData.pointsRightAnswer;
        alert('RESPUESTA CORRECTA !! 🥳');
    } else {
        sessionData.points += sessionData.pointsFalseAnswer;
        sessionData.errors++;
        let respuesta = el.answer.toUpperCase();
        alert(`RESPUESTA INCORRECTA !! 😭
            \nLa respuesta correcta era ${respuesta}\n`);
    }
    if (sessionData.points < 0){ sessionData.points = 0}; // don't allow negative points
    return true;
}
function findQuestion(){
    let letter = alphabet[sessionData.turn];
    let possibleQuestions = [];
    for (let i = 0; i < questions.length; i++){
        if (questions[i].letter === letter && questions[i].status === 0){
            possibleQuestions.push([i, questions[i]]);
        }
    }
    let random = Math.floor(Math.random() * possibleQuestions.length);
    return possibleQuestions[random];
}
function replay(){
    let input = prompt('Quieres volver a jugar?');
    if (yeses.has(input)){
        sessionData.games++;
        if (sessionData.games >= 4){
            for (let el of questions){
                el.status = 0;
            }
        }
        sessionData.turn = 0;
        sessionData.points = 0;
        sessionData.errors = 0;
        sessionData.turn = 0;
        sessionData.userName = '';
        return init();
    } else if (!noes.has(input)){
        alert('Disculpa, no he entendido tu respuesta.');
        return replay();
    } // or die silently
}
/* --------------------------------------- */

/* UTILS */
function greetingsWelcome(){
    sessionData.userName = prompt('Introduce tu nombre: ');
    if (sessionData.userName === ''){
        return greetingsWelcome();
    }
    console.log(`Bienvenido al juego de PASAPALABRA, ${sessionData.userName} !! 🎉`);
}
function greetingsFarewell(){
    console.log(`Gracias por jugar con nosotros, ${sessionData.userName}. Hasta la próxima!`);
}
function printGameInfo(){
    let time = sessionData.turnTime / 1000;
    console.log(`%cEn cada turno se preguntará por una palabra, tienes ${time} segundos para dar una respuesta sino cuenta como error y pasa al siguiente.
                \nPor cada acierto cuentan ${sessionData.pointsRightAnswer} puntos. Los errores restan ${sessionData.pointsFalseAnswer} puntos. No contestar resta ${sessionData.pointsUnanswered} punto.
                \nCuando estés preparado/a, confirma para continuar. Una vez empezado el juego podrás abandonar tecleando END en cualqueir pregunta.
                \nSi abandonas el juego antes de terminar, la puntuación obtenida no se guardará.`, 'color:teal');
}
/* --------------------------------------- */

/* LEADERBOARD */
function leaderboardShow(){
    let sorted = new Map([...sessionData.leaderboard.entries()].sort().reverse());
    for (let el of sorted){
        console.log(el[1]);
    }
}
/* --------------------------------------- */

init();