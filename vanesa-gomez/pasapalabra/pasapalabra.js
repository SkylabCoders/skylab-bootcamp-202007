
var hits = 0;
var errors = 0;
var name;

let userResult = {
    name: '',
    errors: 0,
    hits: 0
};


var questions = [
    { letter: "a", answer: "abducir", status: 0, question: "CON LA A. Dicho de una supuesta criatura extraterrestre: Apoderarse de alguien"},
    { letter: "b", answer: "bingo", status: 0, question: "CON LA B. Juego que ha sacado de quicio a todos los 'Skylabers' en las sesiones de precurso"},
    { letter: "c", answer: "churumbel", status: 0, question: "CON LA C. Niño, crío, bebé"},
    { letter: "d", answer: "diarrea", status: 0, question: "CON LA D. Anormalidad en la función del aparato digestivo caracterizada por frecuentes evacuaciones y su consistencia líquida"},
    { letter: "e", answer: "ectoplasma", status: 0, question: "CON LA E. Gelatinoso y se encuentra debajo de la membrana plasmática. Los cazafantasmas medían su radiación"},
    { letter: "f", answer: "facil", status: 0, question: "CON LA F. Que no requiere gran esfuerzo, capacidad o dificultad"},
    { letter: "g", answer: "galaxia", status: 0, question: "CON LA G. Conjunto enorme de estrellas, polvo interestelar, gases y partículas"},
    { letter: "h", answer: "harakiri", status: 0, question: "CON LA H. Suicidio ritual japonés por desentrañamiento"},
    { letter: "i", answer: "iglesia", status: 0, question: "CON LA I. Templo cristiano"},
    { letter: "j", answer: "jabali", status: 0, question: "CON LA J. Variedad salvaje del cerdo que sale en la película 'El Rey León', de nombre Pumba"},
    { letter: "k", answer: "kamikaze", status: 0, question: "CON LA K. Persona que se juega la vida realizando una acción temeraria"},
    { letter: "l", answer: "licantropo", status: 0, question: "CON LA L. Hombre lobo"},
    { letter: "m", answer: "misantropo", status: 0, question: "CON LA M. Persona que huye del trato con otras personas o siente gran aversión hacia ellas"},
    { letter: "n", answer: "necedad", status: 0, question: "CON LA N. Demostración de poca inteligencia"},
    { letter: "ñ", answer: "señal", status: 0, question: "CONTIENE LA Ñ. Indicio que permite deducir algo de lo que no se tiene un conocimiento directo."},
    { letter: "o", answer: "orco", status: 0, question: "CON LA O. Humanoide fantástico de apariencia terrible y bestial, piel de color verde creada por el escritor Tolkien"},
    { letter: "p", answer: "protoss", status: 0, question: "CON LA P. Raza ancestral tecnológicamente avanzada que se caracteriza por sus grandes poderes psíonicos del videojuego StarCraft"},
    { letter: "q", answer: "queso", status: 0, question: "CON LA Q. Producto obtenido por la maduración de la cuajada de la leche"},
    { letter: "r", answer: "raton", status: 0, question: "CON LA R. Roedor"},
    { letter: "s", answer: "stackoverflow", status: 0, question: "CON LA S. Comunidad salvadora de todo desarrollador informático"},
    { letter: "t", answer: "terminator", status: 0, question: "CON LA T. Película del director James Cameron que consolidó a Arnold Schwarzenegger como actor en 1984"},
    { letter: "u", answer: "unamuno", status: 0, question: "CON LA U. Escritor y filósofo español de la generación del 98 autor del libro 'Niebla' en 1914"},
    { letter: "v", answer: "vikingos", status: 0, question: "CON LA V. Nombre dado a los miembros de los pueblos nórdicos originarios de Escandinavia, famosos por sus incursiones y pillajes en Europa"},
    { letter: "w", answer: "sandwich", status: 0, question: "CONTIENE LA W. Emparedado hecho con dos rebanadas de pan entre las cuales se coloca jamón y queso"},
    { letter: "x", answer: "botox", status: 0, question: "CONTIENE LA X. Toxina bacteriana utilizada en cirujía estética"},
    { letter: "y", answer: "peyote", status: 0, question: "CONTIENE LA Y. Pequeño cáctus conocido por sus alcaloides psicoactivos utilizado de forma ritual y medicinal  por indígenas americanos"},
    { letter: "z", answer: "zen", status: 0, question: "CON LA Z. Escuela de budismo que busca la experiencia de la sabiduría más allá del discurso racional"}, ]
    
    let ranking = [];
    function pasapalabra() {
        
        let finish = false;
        let finishPoints = false;

        let status = {
            default: 0,
            correct: 1,
            pasapalabra: 2,
            error: 3,
        }

        userName();
        gameRules();
        
        while(!finish) {
        
                for (let i = 0; i < questions.length; i++) {
                    // pintamos únicamente aquellas que aún no hayan sido respondidas o que hayan escrito pasapalabra:
                    if (questions[i].status === 0 || questions[i].status === 2) {

                        let userAnswer = prompt(questions[i].question).toLowerCase();
    
                        if (userAnswer === questions[i].answer) {
                            hits += 1;
                            questions[i].status = status.correct;
                        }
                        if (userAnswer === 'pasapalabra') {
                            questions[i].status = status.pasapalabra;
                        }
                        if ((userAnswer !== questions[i].answer || userAnswer === '') && userAnswer !== 'pasapalabra' ){
                            questions[i].status = status.error;
                            errors += 1;
                        }
                        if (userAnswer === 'finish') {
                            
                            userResult = {
                                name: name,
                                errors: errors,
                                hits: hits
                            };

                            console.log(`${name}, has conseguido ${hits} aciertos y has hecho ${errors} errores.`);
                            console.log ('¡Adios!');
                            
                            ranking.push({
                                name: name,
                                points: hits,
                                errors: errors
                            });
                            
                            errors = 0;
                            hits = 0;
                            finish = true;
                            break;
                        }
                    } 
                }
                // comprobamos si  'hits + errors' son menores a la longitud de las preguntas para seguir ejecutando el juego:
                finishPoints = (hits + errors) === questions.length;

                if (finishPoints && !finish) {
                    ranking.push({
                        name: name,
                        points: hits,
                        errors: errors
                    });
    
                    userResult = {
                        name: name,
                        errors: errors,
                        hits: hits
                    };
    
                    console.log(`${name}, has conseguido ${hits} aciertos y has hecho ${errors} errores.`);
                    showRanking(ranking);
                    
                    errors = 0;
                    hits = 0;
                    finish = true;
                    
                    let newGame = askNewGame();
                    if (newGame === true) {
                        questions.forEach(question => {
                            question.status = 0;
                        })
                        finish = false;
                        finishPoints = false;
                        pasapalabra();
                    }
                }
                
        }
    }

    function userName() {
        name = prompt('Por favor indique su nombre de jugador');
        
        if(name == '') {
            userName();
        } else if (!isNaN(name)) {
            alert('Introduce unicamente letras');
            userName();
        } else if (name == null) {
            console.log('See you! bye!!');
        } else {
            console.log (`Bienvenid@ ${name}!`);
        }
        return name;
    }
    
    function showRanking(ranking) {

        let orderRanking = ranking.sort(function (a, b) {
            if (a.points < b.points) {
                return 1;
            }
            if (a.points > b.points) {
                return -1;
            }
            return 0;
        });

        console.log('**** Ha finalizado el juego. El ranking es el siguiente ****');
        console.table(orderRanking);
    }
        
    
    function gameRules() {
        console.log(`A continuación puedes ver las reglas del PASAPALABRA: \n 
        *** Con cada letra que aciertes sumarás 1 punto.\n
        *** Si escribes 'pasapalabra', podrás responder en la siguiente ronda. \n
        *** Si dejas en blanco y pulsas 'OK' el programa la dará por erronea. \n
        *** Si quieres salir del juego escribe 'FINISH'. \n
        *** Al finalizar podrás ver el ranking de jugadores. ¡SUERTE!`);
    }
    
    function askNewGame() {
        return confirm('¿Desea jugar una nueva partida?');
    }

    pasapalabra();
