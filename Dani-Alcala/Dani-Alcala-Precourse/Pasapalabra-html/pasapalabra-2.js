'use strict'

//these will be the questions for the game. 3 possible questions for each letter//
var questions = [
	{
		letter: 'a',
		answerSet: ['archipielago', 'Amsterdam', 'Andar'],
		status: 0,
		questionSet:
			['CON LA A. Conjunto de islas agrupadas en una superficie más o menos extensa de mar.', 'CON LA A. Capital de los Países Bajos.', 'CON LA A. Caminar.'],
	},
	{
		letter: 'b',
		answerSet: ['bosque', 'borrar', 'buscar'],
		status: 0,
		questionSet:
			['CON LA B. Sitio poblado de árboles y matas.', 'CON LA B. Eliminar.', 'CON LA B. Lo que se hace anter de encontrar.'],
	},
	{
		letter: 'c',
		answerSet: ['cenizo', 'cocinero', 'croissant'],
		status: 0,
		questionSet: ['CON LA C. Dicho de una persona: Que tiene mala suerte o que la trae a los demás.', 'CON LA C. El que hace la comida.', 'CON LA C. Desayuno típico francés, alternativa al donut.'],
	},
	{
		letter: 'd',
		answerSet: ['diligencia', 'domingo', 'David'],
		status: 0,
		questionSet:
			['CON LA D. Cuidado, prontitud, agilidad, competencia en la acción.', 'CON LA D. Último día de la semana.', 'CON LA D. Famosa escultura de Miguel Ángel.'], 
	},
	{
		letter: 'e',
		answerSet: ['ensayo', 'Einstein', 'Estaño'],
		status: 0,
		questionSet:
			['CON LA E. Puesta en práctica de una acción o actividad para poder perfeccionar su ejecución.', 'CON LA E. Albert, el autor de la teoría de la relatividad.', 'CON LA E. Elemento de la tabla periódica cuya abreviatura es Sn.'], 
	},
	{
		letter: 'f',
		answerSet: ['Faemino', 'futuro', 'Figo'],
		status: 0,
		questionSet: ['CON LA F. Humorista que actuaba junto a Cansado.', 'CON LA F. Que no es presente ni pasado.', 'CON LA F. Apellido del futbolista portugués al que le tiraron una cabeza de cerdo en el Camp Nou.'],
	},
	{
		letter: 'g',
		answerSet: ['Giro', 'gimnasio', 'gordo'],
		status: 0,
		questionSet:
			['CON LA G. Prueba ciclista más importante de Italia.', 'CON LA G. Lugar donde entrenar los músculos.', 'CON LA G. Contrario de flaco.'],
	},
    {   letter: 'h',
        answerSet: ['humildad', 'huerto', 'Hades'],
        status: 0,
        questionSet:
            ['CON LA H. Virtud que consiste en el conocimiento de las propias limitaciones y debilidades y en obrar de acuerdo con este conocimiento.', 'CON LA H. Lugar donde se cultivan hortalizas.', 'CON LA H. Dios griego del inframundo.'],
    },
    {   letter: 'i',
        answerSet: ['iris', 'iceberg', 'IBM'],
        status: 0,
        questionSet:
            ['CON LA I. Disco membranoso y coloreado del ojo de los vertebrados y cefalópodos, en cuyo centro está la pupila.', 'CON LA I. Lo que hundió al Titanic.', 'CON LA I. Conocida compañía informática que fundó Charles Ranlett Flint en 1911.'],
    },
    {   letter: 'j',
        answerSet: ['juerguista', 'Julio', 'Jaguar'],
        status: 0,
        questionSet:
            ['CON LA J. Aficionado a la juerga.', 'CON LA J. Séptimo mes del año.', 'CON LA J. Marca de coches que se llama como un tipo de felino.'],
    },
    {   letter: 'k',
        answerSet: ['koala', 'Kobe', 'Kabul'],
        status: 0,
        questionSet:
            ['CON LA K. Mamífero marsupial arborícola parecido a un oso pequeño.', 'CON LA K. Nombre de pila de Bryant, jugador de baloncesto ganador de 5 anillos de la NBA con los Lakers.', 'CON LA K. Capital de Afganistán.'],
    },
    {   letter: 'l',
        answerSet: ['ladrido', 'luna', 'lodo'],
        status: 0,
        questionSet:
            ['CON LA L. Voz del perro.', 'CON LA L. Único satélite natural de la Tierra.', 'CON LA L. Sinónimo de barro.'],
    },
    {   letter: 'm',
        answerSet: ['maraña', 'musa', 'mano'],
        status: 0,
        questionSet:
            ['CON LA M. Lugar riscoso o cubierto de maleza que lo hace impracticable.', 'CON LA M. Divinidad de la mitología griega, hija de Apolo, que protegía una determinada ciencia o arte.', 'CON LA M. Tiene cinco dedos, igual que el pie.'], 
    },
    {   letter: 'n',
        answerSet: ['Nilo', 'Neil', 'noquear'],
        status: 0,
        questionSet:
            ['CON LA N. Principal río de Egipto.', 'CON LA N. Nombre de pila del primer hombre que pisó la Luna.', 'CON LA N. En boxeo, derribar al contrario.'],
    },
    {   letter: 'ñ',
        answerSet: ['pañal', 'puñal', 'caña'],
        status: 0,
        questionSet:
            ['CONTIENE LA Ñ. Tira de tela o celulosa absorbente que se pone a los niños pequeños o a las personas que sufren incontinencia de orina.', 'CONTIENE LA Ñ. Arma blanca que aparece en el juego del Cluedo.', 'CONTIENE LA Ñ. Artilugio de pesca que también puede pedirse en un bar.'], 
    },
    {   letter: 'o',
        answerSet: ['oscuro', 'Oliva', 'Oscar'],
        status: 0,
        questionSet:
            ['CON LA O. Carente de luz.', 'CON LA O. Aceituna.', 'CON LA O. Los premios más famosos de Hollywood.'], 
    },
    {   letter: 'p',
        answerSet: ['piscolabis', 'porteria', 'papiroflexia'],
        status: 0,
        questionSet:
            ['CON LA P. Pequeña cantidad de comida que se toma entre horas, generalmente por capricho u ocasión más que por hambre o necesidad.', 'CON LA P. Donde se marcan los goles.', 'CON LA P. Arte que consiste en el plegado de papel sin usar tijeras ni pegamento para obtener figuras de formas variadas.'], 
    },
    {   letter: 'q',
        answerSet: ['Quito', 'quiniela', 'Quijote'],
        status: 0,
        questionSet:
            ['CON LA Q. Capital de Ecuador.', 'CON LA Q. Clásico juego de apuestas futbolísticas.', 'CON LA Q. El protagonista del libro más conocido de Cervantes.'],
    },
    {   letter: 'r',
        answerSet: ['rubi', 'rosa', 'Rumania'],
        status: 0,
        questionSet:
            ['CON LA R. Variedad de corindón (mineral óxido de aluminio) de color rojo, brillo intenso y gran dureza.', 'CON LA R. Flor que se regala por Sant Jordi en Catalunya.', 'CON LA R. País cuya capital es Bucarest.'], 
    },
    {   letter: 's',
        answerSet: ['Safo', 'semanas', 'sol'],
        status: 0,
        questionSet:
            ['CON LA S. Poetisa griega de la antigüedad, a quien Platón apodó como "la décima Musa".', 'CON LA S. El año tiene 52.' , 'CON LA S. Astro rey.'], 
    },
    {   letter: 't',
        answerSet: ['timpano', 'Teide', 'Tarantino'],
        status: 0,
        questionSet:
            ['CON LA T. Membrana tensa de tejido delgado que está situada en el oído medio y que, al recibir los sonidos, vibra y los comunica al oído interno.', 'CON LA T. Volcán más famoso de las Islas Canarias.', 'CON LA T. Apellido del director de Pulp Fiction.'],
    },
    {   letter: 'u',
        answerSet: ['urdir', 'uvas', 'unicornio'],
        status: 0,
        questionSet:
            ['CON LA U. Maquinar y disponer cautelosamente algo contra alguien, o para la consecución de algún designio.', 'CON LA U. Se toman 12 en Nochevieja.', 'CON LA U. Criatura mitológica representada como un caballo blanco con patas de antílope, ojos y barba de chivo y un cuerno en la frente.'],
    },
    {   letter: 'v',
        answerSet: ['volcan', 'vasectomia', 'Vodafone'],
        status: 0,
        questionSet:
            ['CON LA V. Abertura en la tierra, y más comúnmente en una montaña, por donde salen de tiempo en tiempo humo, llamas y materias encendidas o derretidas.', 'CON LA V. Método anticonceptivo permanente practicado al varón.', 'CON LA V. Operador de telefonía móvil inicialmente conocido como Racal Telecom.'], 
    },
    {   letter: 'w',
        answerSet: ['when', 'whisky', 'Whatsapp'],
        status: 0,
        questionSet:
            ['CON LA W. "Cuando", en inglés.', 'CON LA W. Bebida alcohólica famosa en Escocia y en todo el mundo.', 'CON LA W. Aplicación de mensajería instantánea propiedad de Facebook.'], 
    },
    {   letter: 'x',
        answerSet: ['extraño', 'x', 'xilofono'],
        status: 0,
        questionSet:
            ['CONTIENE LA X. Raro.', 'CON LA X. Tipo de rayos utilizados para obtener radiografías.', 'CON LA X. Instrumento musical de percusión que aparece en la Danza Macabra, poema sinfónico compuesto por Camille Saint-Saëns.'], 
    },
    {   letter: 'y',
        answerSet: ['baya', 'yegua', 'yuca'],
        status: 0,
        questionSet:
            ['CONTIENE LA Y. Fruto carnoso o pulposo con varias semillas en su interior que están envueltas directamente por la pulpa; suele tener forma redondeada o elipsoidal.', 'CON LA Y. Hembra del caballo.', 'CON LA Y. Manihot esculenta, tubérculo cultivado en América.'],
    },
    {   letter: 'z',
        answerSet: ['zumba', 'zapatero', 'zoonosis'],
        status: 0,
        questionSet:
            ['CON LA Z. Práctica aeróbica que combina el baile con ejercicios físicos, creada por el coreógrafo y bailarín Beto Pérez.', 'CON LA Z. El que arregla los zapatos.', 'CON LA Z. Enfermedad infecciosa que se transmite de forma natural de los animales al ser humano, y viceversa.'],
    },
];

var username;
var rankAll = [];
var hits; 
var profiling = document.querySelector('.profile');
var sendGame = document.querySelector('.newGameButton');
var questionUser = document.querySelector('.newUser');
var sendUser = document.querySelector('.userButton');
var eachLetter = document.querySelectorAll('.letter'); //also valid: document.getElementsByClassName
var questionBox = document.querySelector('.question');
/** @type {HTMLElement} */
var core = document.querySelector('.core');
var answerBox = document.querySelector('.answer');
var sendAnswer = document.querySelector('.answerButton');
var outputMessage = document.querySelector('.message');
var scoreUser = document.querySelector('.score');
var rank = document.querySelector('.rank');
var table = document.querySelector("table");
var tableHeaders;
var replayGame = document.querySelector('.replay');
var timeoutClock = document.querySelector('.timeout');
var clock = document.querySelector(".clock");
var stop = document.querySelector(".stop");
var timeLeft;
var clearClock;
var increment = 0;
var random = [0, 1, 2];
var choose;
var key;
var child;

//the functions will be part of this object
var game = {
    /** If there is a new game, first we need a username, so we ask for it*/
    newGame: function() {
        sendGame.addEventListener('click', function(event) {
            questionUser.classList.remove('hidden');
            sendGame.classList.add('hidden');
        })
    },
    
    /** When username is provided the game shows up*/
    newUser: function() {        
        sendUser.addEventListener('click', function(event) {
            event.preventDefault();
            questionUser.classList.add('hidden');
            profiling.classList.remove('vhidden');
            questionBox.classList.remove('hidden');
            core.classList.remove('hidden');
            core.style.display = "grid";
            username = questionUser.user.value;
            profiling.innerHTML = username;
            questionUser.reset();
            //150 seconds to solve the game
            clock.innerHTML = 150;
            timeLeft = 149;
            game.timer();
            //timer can be stopped
            game.stopTimer();
        })
    },    
    
    /** One question is asked for each letter */
    askQuestion: function(){
        //there are 3 possible questions for each letter, we choose one randomly
        choose = random[Math.floor(Math.random() * random.length)];
        questionBox.innerHTML = questions[0].questionSet[choose];
        
        sendAnswer.addEventListener('click', function(event) {
            event.preventDefault();
            //uppercases and lowercases will be treated as the same//
            var upperCased = String(answerBox.answer.value).toUpperCase();  
            
            //we tell the user if the answer is correct or not, of if he/she selected PASAPALABRA
            outputMessage.classList.remove('hidden');
            
            //3 possibilities: right answer, wrong answer or PASAPALABRA
            if(upperCased === 'PASAPALABRA'){
                outputMessage.innerHTML = 'Has escogido "Pasapalabra". Esta palabra queda pendiente de contestar más adelante.';
            } else if(upperCased === questions[increment].answerSet[choose].toUpperCase()){
                questions[increment].status = 1;
                outputMessage.innerHTML = '¡Es correcto!, Sumas 1 punto a tu marcador.';
                eachLetter[increment].classList.remove('letter');
                eachLetter[increment].classList.add('right');
            } else {
                questions[increment].status = 2;
                outputMessage.innerHTML = `Lo siento, has fallado. La respuesta correcta era ${questions[increment].answerSet[choose].toUpperCase()}`;
                eachLetter[increment].classList.remove('letter');
                eachLetter[increment].classList.add('wrong');
            }  
            increment++;
            //in case of PASAPALABRA we need to ask again but just the unanswered questions
            if(increment === questions.length) {
                increment = 0;
            }
            //we need to go and ask not the next letter, but the next letter unanswered
            while(questions[increment].status !== 0 && !game.completed()){
                increment++;
                if(increment === questions.length) {
                    increment = 0;
                }
            }
            choose = random[Math.floor(Math.random() * random.length)];
            questionBox.innerHTML = questions[increment].questionSet[choose];
            answerBox.reset();
            //until the game is completed//
            if(game.completed()) {
                questionBox.classList.add('hidden');
                core.style.display = 'none';
                scoreUser.classList.remove('hidden');
                rank.classList.remove('hidden');
                //we show performance and ranking at the end of the game
                game.performance();
                game.ranking();
                //we show the ranking with a nice table format
                tableHeaders = Object.keys(rankAll[0]);
                game.rankingTable(table, rankAll);
                game.rankingTableHead(table, tableHeaders);
                //gives the option to replay the game
                replayGame.classList.remove('hidden');
                game.replayTheGame();
            }
        })
    },
    
    /** Controls if the game has been completed*/
    completed: function() {    
        //the game is completed if the clock arrives to zero
        if(timeLeft < 0) {
            clearInterval(clearClock);
            return true;
        } else {   
            //the game is not completed if there is at least one question unanswered
            for(var i = 0; i < questions.length; i++){
                if(questions[i].status === 0){
                    return false;
                }
            } 
            clearInterval(clearClock);
            return true;
        }
    },
    
    /** Shows total hits and mistakes by the user*/
    performance: function () {
        var mistakes = 0;
        hits = 0;
        
        for(var i = 0; i < questions.length; i++){
            if(questions[i].status === 1){
                hits++; 
            }
            else if(questions[i].status === 2) {
                mistakes++;
            }
        }
       
        scoreUser.innerHTML = `Tu resultado es de ${hits} respuestas acertadas y ${mistakes} respuestas falladas.`;
    },

    /** Shows the ranking of the users ordered from best to worse */
    ranking: function () {
        var pair = {Usuario: username, Puntuación: hits};
        
        rankAll.push(pair);
        
        rankAll.sort(function(a, b){
        var keyA = a.Puntuación;
        var keyB = b.Puntuación;
        if (keyA < keyB) return 1;
        if (keyA > keyB) return -1;
        return 0;
        })
    },

    /** Creates a nice table head for the ranking*/
    rankingTableHead: function (table, data) {
        let thead = table.createTHead();
        let row = thead.insertRow();
        for (let key of data) {
          let th = document.createElement("th");
          let text = document.createTextNode(key);
          th.appendChild(text);
          row.appendChild(th);
        }
    },
      
    /** Creates a nice table for the ranking*/
    rankingTable: function (table, data) {
        for (let element of data) {
          let row = table.insertRow();
          for (key in element) {
            let cell = row.insertCell();
            let text = document.createTextNode(element[key]);
            cell.appendChild(text);
          }
        }
    },

    /** Do you want to replay the game?*/
    replayTheGame: function() {
        replayGame.addEventListener('click', function(event) {
            //reset status from questions
            for(var i = 0; i < questions.length; i++){
                questions[i].status = 0;
            }    

            increment = 0;
            
            //reformats elements
            profiling.classList.add('vhidden');
            questionUser.classList.remove('hidden');
            replayGame.classList.add('hidden');
            outputMessage.classList.add('hidden');
            scoreUser.classList.add('hidden');
            rank.classList.add('hidden');
            
            //removes the ranking's table content
            child = table.lastElementChild;  
            while (child) { 
                table.removeChild(child); 
                child = table.lastElementChild;
            }
            //resets formats of the question panel
            for(var i = 0; i < eachLetter.length; i++) {
                eachLetter[i].classList.remove('wrong');
                eachLetter[i].classList.remove('right');
                eachLetter[i].classList.add('letter');
            }
            choose = random[Math.floor(Math.random() * random.length)];
            questionBox.innerHTML = questions[0].questionSet[choose];
        })
    },

    /** Creates the timer*/
    timer: function() { 
        clearClock = window.setInterval(function(){
        clock.innerHTML = timeLeft;
        timeLeft--;
        if(timeLeft < 0) {
            clock.innerHTML = 0;
            clearInterval(clearClock);
        }
      },1000);
    },

    /** Stops the timer if user wants to*/
    stopTimer: function() {
        stop.addEventListener("click", function() {
            clearInterval(clearClock);
        })
    },
}

/** Runs the whole program, as it will be managed via clicks from the user, inside game.askQuestion() */
function pasapalabra() {
    game.newUser();
    game.newGame();
    game.askQuestion(); 
}

pasapalabra();