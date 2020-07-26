let questions1 = [
    { letter: "a", answer: "abducir", status: 0, question: "CON LA A. Dicho de una supuesta criatura extraterrestre: Apoderarse de alguien" },
    { letter: "b", answer: "bingo", status: 0, question: "CON LA B. Juego que ha sacado de quicio a todos los 'Skylabers' en las sesiones de precurso" },
    { letter: "c", answer: "churumbel", status: 0, question: "CON LA C. Niño, crío, bebé" },
    { letter: "d", answer: "diarrea", status: 0, question: "CON LA D. Anormalidad en la función del aparato digestivo caracterizada por frecuentes evacuaciones y su consistencia líquida" },
    { letter: "e", answer: "ectoplasma", status: 0, question: "CON LA E. Gelatinoso y se encuentra debajo de la membrana plasmática. Los cazafantasmas medían su radiación" },
    { letter: "f", answer: "fácil", status: 0, question: "CON LA F. Que no requiere gran esfuerzo, capacidad o dificultad" },
    { letter: "g", answer: "galaxia", status: 0, question: "CON LA G. Conjunto enorme de estrellas, polvo interestelar, gases y partículas" },
    { letter: "h", answer: "harakiri", status: 0, question: "CON LA H. Suicidio ritual japonés por desentrañamiento" },
    { letter: "i", answer: "iglesia", status: 0, question: "CON LA I. Templo cristiano" },
    { letter: "j", answer: "jabalí", status: 0, question: "CON LA J. variedad salvaje del cerdo que sale en la película 'El Rey León', de nombre Pumba" },
    { letter: "k", answer: "kamikaze", status: 0, question: "CON LA K. Persona que se juega la vida realizando una acción temeraria" },
    { letter: "l", answer: "licántropo", status: 0, question: "CON LA L. Hombre lobo" },
    { letter: "m", answer: "misántropo", status: 0, question: "CON LA M. Persona que huye del trato con otras personas o siente gran aversión hacia ellas" },
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
    { letter: "z", answer: "zen", status: 0, question: "CON LA Z. Escuela de budismo que busca la experiencia de la sabiduría más allá del discurso racional" }
]


let questions2 = [
    { letter: "a", answer: "activar", status: 0, question: "CON LA A. Hacer que se ponga en funcionamiento un mecanismo" },
    { letter: "b", answer: "bahía", status: 0, question: "CON LA B. Entrada natural de mar en la costa, de extensión considerable pero generalmente menor que la de un golfo." },
    { letter: "c", answer: "cangrejo", status: 0, question: "CON LA C. Cada uno de los artrópodos crustáceos del orden de los decápodos" },
    { letter: "d", answer: "decaedro", status: 0, question: "CON LA D. Sólido que tiene diez caras." },
    { letter: "e", answer: "estable", status: 0, question: "CON LA E. Que se mantiene sin peligro de cambiar, caer o desaparecer." },
    { letter: "f", answer: "fachada", status: 0, question: "CON LA F. Paramento exterior de un edificio, especialmente el principal." },
    { letter: "g", answer: "gamba", status: 0, question: "CON LA G. Crustáceo semejante al langostino, pero algo menor" },
    { letter: "h", answer: "haiku", status: 0, question: "CON LA H. Composición poética de origen japonés que consta de tres versos de cinco, siete y cinco sílabas respectivamente" },
    { letter: "i", answer: "impoluto", status: 0, question: "CON LA I. Limpio, sin mancha." },
    { letter: "j", answer: "jarra", status: 0, question: "CON LA J. Vasija de barro, porcelana, loza, cristal, etc., con cuello y boca anchos y una o dos asas." },
    { letter: "k", answer: "kiwi", status: 0, question: "CON LA K. Ave apterigiforme, del tamaño de una gallina, que habita en Nueva Zelanda." },
    { letter: "l", answer: "lactosa", status: 0, question: "CON LA L. Azúcar que contiene la leche, formado por glucosa y galactosa." },
    { letter: "m", answer: "musa", status: 0, question: "CON LA M. Inspiración del artista o escritor." },
    { letter: "n", answer: "nodo", status: 0, question: "CON LA N. En un esquema o representación gráfica en forma de árbol, cada uno de los puntos de origen de las distintas ramificaciones." },
    { letter: "ñ", answer: "mañana", status: 0, question: "CONTIENE LA Ñ. Parte del día que transcurre desde el amanecer hasta el mediodía.." },
    { letter: "o", answer: "oasis", status: 0, question: "CON LA O. Sitio con vegetación y a veces con manantiales, que se encuentra aislado en los desiertos arenosos de África y Asia." },
    { letter: "p", answer: "paleontología", status: 0, question: "CON LA P.  Ciencia que estudia los organismos que han existido en el pasado de la Tierra a partir de sus restos fósiles." },
    { letter: "q", answer: "quisquilloso", status: 0, question: "CON LA Q.  Demasiado delicado en el trato común." },
    { letter: "r", answer: "rosquilla", status: 0, question: "CON LA R.  Dulce en forma de rosca pequeña, hecho de masa de harina con huevos, azúcar y algún otro ingrediente." },
    { letter: "s", answer: "saquear", status: 0, question: "CON LA S.  Dicho de los soldados: Apoderarse violentamente de lo que hallan en un lugar." },
    { letter: "t", answer: "tararear", status: 0, question: "CON LA T. Cantar entre dientes y sin articular palabras." },
    { letter: "u", answer: "usb", status: 0, question: "CON LA U. Toma de conexión universal de uso frecuente en las computadoras y otros dispositivos electrónicos." },
    { letter: "v", answer: "ventral", status: 0, question: "CON LA V. Perteneciente o relativo al vientre." },
    { letter: "w", answer: "whisky", status: 0, question: "CON LA W. Licor alcohólico que se obtiene del grano de algunas plantas, destilando un compuesto amiláceo en estado de fermentación" },
    { letter: "x", answer: "xenon", status: 0, question: "CONLA X.  Elemento químico de núm. atóm. 54, perteneciente al grupo de los gases nobles, presente en el aire en muy pequeña cantidad, denso, incoloro y no del todo inerte, usado en lámparas y tubos electrónicos." },
    { letter: "y", answer: "yeso", status: 0, question: "CON LA Y. Sulfato de calcio hidratado, de color blanco, usado en construcción y en escultura" },
    { letter: "z", answer: "azabache", status: 0, question: "CONTIENE LA Z. Variedad de lignito, dura, compacta, de color negro y susceptible de pulimento, que se emplea como adorno en collares, pendientes, etc." }
]


let questions3 = [
    { letter: "a", answer: "anular", status: 0, question: "CON LA A. Suspender algo previamente anunciado o proyectado." },
    { letter: "b", answer: "babia", status: 0, question: "CON LA B. Lugar donde está una persona que no entera de lo que ocurre a su alrededor" },
    { letter: "c", answer: "cabalgar", status: 0, question: "CON LA C. Andar o pasear a caballo" },
    { letter: "d", answer: "diagonal", status: 0, question: "CON LA D. Dicho de una calle o de una avenida: Que corta oblicuamente a otras paralelas entre sí" },
    { letter: "e", answer: "eclipse", status: 0, question: "CON LA E. Ocultación transitoria total o parcial de un astro por interposición de otro cuerpo celeste." },
    { letter: "f", answer: "farsante", status: 0, question: "CON LA F. Que finge lo que no es o no siente." },
    { letter: "g", answer: "gaditano", status: 0, question: "CON LA G.  Natural de Cádiz, ciudad o provincia de España." },
    { letter: "h", answer: "hematoma", status: 0, question: "CON LA H. Acumulación de sangre en un tejido por rotura de un vaso sanguíneo." },
    { letter: "i", answer: "ilegal", status: 0, question: "CON LA I.  Contrario a la ley." },
    { letter: "j", answer: "jinete", status: 0, question: "CON LA J. Persona que cabalga." },
    { letter: "k", answer: "karaoke", status: 0, question: "CON LA K.  Diversión consistente en interpretar una canción sobre un fondo musical grabado, mientras se sigue la letra que aparece en una pantalla." },
    { letter: "l", answer: "laxo", status: 0, question: "CON LA L. Relajado o poco estricto moralmente" },
    { letter: "m", answer: "maceración", status: 0, question: "CON LA M. Acción y efecto de macerar." },
    { letter: "n", answer: "nadir", status: 0, question: "CON LA N. Punto de la esfera celeste diametralmente opuesto al cenit." },
    { letter: "ñ", answer: "muñeca", status: 0, question: "CONTIENE LA Ñ. Parte del brazo humano donde la mano se une con el antebrazo." },
    { letter: "o", answer: "oligarquía", status: 0, question: "CON LA O. Forma de gobierno en la cual el poder político es ejercido por un grupo minoritario." },
    { letter: "p", answer: "papada", status: 0, question: "CON LA P. Abultamiento carnoso que se forma debajo de la barba, o entre ella y el cuello" },
    { letter: "q", answer: "quitasol", status: 0, question: "CON LA Q.  Especie de paraguas o sombrilla usado para resguardarse del sol" },
    { letter: "r", answer: "rumor", status: 0, question: "CON LA R. Voz que corre entre el público." },
    { letter: "s", answer: "sacarina", status: 0, question: "CON LA S. Sustancia blanca que se comercializa en forma de pequeños comprimidos y que puede endulzar tanto como 234 veces su peso de azúcar" },
    { letter: "t", answer: "taco", status: 0, question: "CON LA T.  Tortilla de maíz enrollada con algún alimento dentro, típica de México." },
    { letter: "u", answer: "utopía", status: 0, question: "CON LA U. Representación imaginativa de una sociedad futura de características favorecedoras del bien humano." },
    { letter: "v", answer: "vago", status: 0, question: "CON LA V. Holgazán, perezoso, poco trabajador. " },
    { letter: "w", answer: "web", status: 0, question: "CON LA W. Red informática." },
    { letter: "x", answer: "asexual", status: 0, question: "CONTIENE LA X. Sin sexo, ambiguo, indeterminado." },
    { letter: "y", answer: "yegua", status: 0, question: "CON LA Y. Hembra del caballo." },
    { letter: "z", answer: "alcazaba", status: 0, question: "CONTIENE LA Z. Recinto fortificado, dentro de una población amurallada, para refugio de la guarnición." }
]

let questionsSet = [questions1, questions2, questions3];
let setsPlayed = [];
let notAnsweredQuestions = [];
let users = [];
let user;
let roundCount = 1;
let questions;
let rightCount = 0;
let wrongCount = 0;



// object constructor function to create the users
function User(name) {
    this.name = name;
    this.rightAnswers = 0;
    this.wrongAnswers = 0;
}

//function that creates a user object with your name and greets you
function pasapalabra() {
    user = new User(prompt('Introduce tu nombre:'));
    users.push(user);
    
    if (user.name === null || user.name == '' || user.name == undefined) {
        return
    }
    if (confirm('Hola ' + user.name + '!' + '\nVamos a jugar a Pasapalabra!'
    + '\nIntroduce "end" para terminar el juego')) {
        whatQuestions(questionsSet, setsPlayed);
    } else {
        return;
    }
}

// Checks if a random questions set has been played already, assigns it if it hasn't, and starts the game
function whatQuestions() {
    questions = questionsSet[Math.floor(Math.random() * questionsSet.length)];
    if (setsPlayed.includes(questions)) {
        whatQuestions(questionsSet, setsPlayed);
    } else {
        setsPlayed.push(questions);
        game(questions, rightCount, wrongCount);
    }
}

// Controls the flow of the game
function game() {
    if (roundCount == 1) {
        for (let i = 0; i < questions.length; i++) {
            let userAnswer = prompt(questions[i].question).toLowerCase();
            switch (userAnswer) {
                case questions[i].answer:
                    rightCount++;
                    alert('Muy bien! Siguiente palabra');
                    break;
                case 'pasapalabra':
                    notAnsweredQuestions.push(questions[i]);
                    alert('Pasamos palabra!');
                    break;
                case 'end':
                    alert('Fin del juego');
                    endGame(users, rightCount, wrongCount);
                    return;
                default:
                    wrongCount++;
                    alert('Lo siento pero no es correcto!\nSiguiente palabra');
            }
        }
        nextRound(users, rightCount, wrongCount);

    } else if (notAnsweredQuestions.length > 0) {
        for (let j = 0; j < notAnsweredQuestions.length; j++) {
            if (notAnsweredQuestions[j] == 'ignore'){
                i++;
            } else { 
                let userAnswers = prompt(notAnsweredQuestions[i].question).toLowerCase();
                switch (userAnswers) {
                case notAnsweredQuestions[i].answer:
                    notAnsweredQuestions.splice([i], 1, 'ignore'); 
                    rightCount++;
                    alert('Muy bien! Siguiente palabra');
                    break;
                case 'pasapalabra':
                    alert('Pasamos palabra!');
                    break;
                case 'end':
                    alert('Fin del juego');
                    endGame(users, rightCount, wrongCount);
                    return;
                default:
                    notAnsweredQuestions.splice([i], 1, 'ignore');
                    wrongCount++;
                    alert('Lo siento pero no es correcto!\nSiguiente palabra');
                }
            }
        }
        nextRound(users, rightCount, wrongCount);
    }
}
        

// checks if there are unanswered questions to either start the next round or finish the game
function nextRound() {
    if (roundCount >= 1 && (rightCount + wrongCount) < 27) {
        alert('Ronda ' + (roundCount + 1));
        roundCount++
        game(questions, rightCount, wrongCount);
    } else {
        endGame(users, rightCount, wrongCount)
    }
}


// displays the total number of right and wrong answers, the ranking and asks whether or not to play again
function endGame() {
    user.rightAnswers = rightCount;
    user.wrongAnswers = wrongCount;
    users.sort(compare);

    console.log('Se acabó el juego.\nHas acertado ' + rightCount
        + ' palabras.' + '\nHas fallado ' + wrongCount
        + ' palabras.')

    console.log('\n\n*** El ranking de jugadores ***\n\n')
    for (var j = 0; j < users.length; j++) {
        console.log(j + 1 + '. ' + users[j].name + ': ' + users[j].rightAnswers
            + ' palabras acertadas.')
    }
    if (confirm('Quieres jugar otra vez?')) {
        notAnsweredQuestions = [];
        roundCount = 1;
        notAnsweredQuestions = [];
        pasapalabra();
    }
    return;
}


// sorts the number of right answers each user has
function compare(a, b) {
    var right1 = a.rightAnswers;
    var right2 = b.rightAnswers;

    let comparison = 0;
    if (right1 < right2) {
        comparison = 1;
    } else if (right1 > right2) {
        comparison = -1;
    }
    return comparison;
}

pasapalabra();




































