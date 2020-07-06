var ranking = [];
function pasapalabra() {
    function endGame() { console.log("🖖Hasta luego!"); }
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
        { letter: "z", answer: "zen", status: 0, question: "CON LA Z. Escuela de budismo que busca la experiencia de la sabiduría más allá del discurso racional" },
    ]
    var username;
    // Si y solamente si el usuario introduce un nombre, le daremos la bienvenida y le pasaremos por pantalla las instrucciones del juego.
    function greetings() {
        username = window.prompt("¡Bienvenido al pasapalabra! Por favor, introduce tu nombre de usuario:", "Introduce tu nombre...");
        if (username === "" || username === null) {
            greetings();
        }
        else {
            console.log("👋¡Bienvenid@, " + username + "! Vamos a jugar al pasapalabra.");
            console.log("📜Vamos a hacerte una serie de preguntas cuya respuesta es una palabra que incluye o empieza por una letra, en orden alfabético.");
            console.log("📜Ganarás un punto por cada respuesta acertada. Cuantos más aciertos, mayor será tu posición en el ranking.");
            console.log("📜Si durante una pregunta escribes PASAPALABRA, la saltaremos y volveremos a ella más tarde. Si escribes END, daremos el juego por terminado.");
            console.log("📜¡Buena suerte!");
        }
    }
    //La función gameFlow recorre todas las preguntas y solamente para aquellas aun no respondidas, recoge por variable la respuesta del usuario y la compara.
    function gameFlow() {
        for (i in questions) {
            //for (var i=0; i < questions.length; i++) -> He hecho pruebas anteriormente con un for (x;y;z) y un break. Utilizo for...in y juego con los returns.
            if (questions[i].status === 0) {
                console.log("🔊" + questions[i].question);
                var yourAnswer = prompt(questions[i].question);
                if (yourAnswer.toLowerCase() === "end") { // Método de escape en caso de que el usuario escriba "end".
                    return true;
                }
                else if (yourAnswer.toLowerCase() === "pasapalabra") {
                    console.log("Pasamos palabra. Guardamos la pregunta de la letra " + questions[i].letter.toUpperCase() + " para más adelante. Siguiente pregunta...");
                }
                else if (yourAnswer.toLowerCase() === questions[i].answer) {
                    console.log("✔️¡CORRECTO! Has acertado la letra " + questions[i].letter.toUpperCase() + ": " + questions[i].answer);
                    questions[i].status = 1;
                    right++;
                }
                else {
                    questions[i].status = 1;
                    console.log("❌Has fallado. La respuesta correcta de la letra " + questions[i].letter.toUpperCase() + " es: " + questions[i].answer);
                    wrong++;
                }
            }
        }
        return false;
    }
    //Función que ordena el ranking
    function rankingDesc(a, b) {
        return b.score - a.score;
    }
    //Función de devuelve por pantalla el ranking
    function showRanking(ranking) { // Pruebo distintos métodos de separación de datos del ranking.
        console.log("🏆RANKING🏆");
        //console.log("#,JUGADOR,PUNTOS");
        console.log("#\tJUGADOR\tPUNTOS");
        var rank = 1;
        var medal;
        for (i in ranking) {
            if (rank === 1) { medal = "🥇"; }
            else if (rank === 2) { medal = "🥈"; }
            else if (rank === 3) { medal = "🥉"; }
            else { medal = ""; }
            //console.log(+rank+','+ranking[i].user+','+ranking[i].score);
            console.log(rank + medal + '\t' + ranking[i].user + '\t' + ranking[i].score);
            rank++;
        }
    };
    function gameOver(username, right) {
        var userScore = { user: username, score: right };
        ranking.push(userScore);
        ranking = ranking.sort(rankingDesc);
        console.log("🔊SE ACABÓ EL JUEGO! Tu puntuación final es: " + right + " respuestas correctas.");
        showRanking(ranking);
        console.log("Quieres jugar otra vez? Haz clic en Ok o pulsa Intro para continuar. Si no, pulsa Esc para cancelar.")
        var rematch = confirm("Quieres jugar otra vez? Haz clic en Ok o pulsa Intro para continuar. Si no, pulsa Esc para cancelar.")
        if (rematch) {
            pasapalabra();
        }
        else {
            endGame();
        }
    }
    greetings();
    var right = 0;
    var wrong = 0;
    var answeredQuestions;
    var ragequit = false;
    // La variable ragequit recogerá un return de la función gameFlow según si el usuario escribe "end" o no.
    // El número de preguntas respondidas dependerá de la suma de aciertos y fallos. Mientras dicha suma no supere el número total de preguntas, gameFlow mostrará las pendientes.
    while (!ragequit && answeredQuestions != questions.length) {
        ragequit = gameFlow();
        answeredQuestions = right + wrong;
        if (answeredQuestions === questions.length) {
            gameOver(username, right);
        }
        else if (ragequit) {
            endGame();
        }
    }
}
pasapalabra();