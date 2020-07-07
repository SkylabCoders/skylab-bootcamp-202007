'use strict'

var questions = [
	{
		letter: 'a',
		answerSet: ['abducir', 'Amsterdam', 'Andar'],
		status: 0,
		questionSet:
			['CON LA A. Dicho de una supuesta criatura extraterrestre: Apoderarse de alguien', 'CON LA A. Capital de los Países Bajos', 'CON LA A. Caminar'],
	},
	{
		letter: 'b',
		answerSet: ['bingo', 'borrar', 'buscar'],
		status: 0,
		questionSet:
			['CON LA B. Juego que ha sacado de quicio a todos los Skylabers en las sesiones de precurso', 'CON LA B. Eliminar', 'CON LA B. Lo que se hace anter de encontrar'],
	},
	{
		letter: 'c',
		answerSet: ['churumbel', 'cocinero', 'croissant'],
		status: 0,
		questionSet: ['CON LA C. Niño, crío, bebé', 'CON LA C. El que hace la comida', 'CON LA C. Desayuno típico francés, alternativa al donut'],
	},
	{
		letter: 'd',
		answerSet: ['diarrea', 'domingo', 'David'],
		status: 0,
		questionSet:
			['CON LA D. Anormalidad en la función del aparato digestivo caracterizada por frecuentes evacuaciones y su consistencia líquida', 'CON LA D. Último día de la semana', 'CON LA D. Famosa escultura de Miguel Ángel'], 
	},
	{
		letter: 'e',
		answerSet: ['ectoplasma', 'Einstein', 'Estaño'],
		status: 0,
		questionSet:
			['CON LA E. Gelatinoso y se encuentra debajo de la membrana plasmática. Los cazafantasmas medían su radiación', 'CON LA E. Albert, el autor de la teoría de la relatividad', 'CON LA E. Elemento de la tabla periódica cuya abreviatura es Sn'], 
	},
	{
		letter: 'f',
		answerSet: ['facil', 'futuro', 'Figo'],
		status: 0,
		questionSet: ['CON LA F. Que no requiere gran esfuerzo, capacidad o dificultad', 'CON LA F. Que no es presente ni pasado', 'CON LA F. Apellido del futbolista portugués al que le tiraron una cabeza de cerdo en el Camp Nou'],
	},
	{
		letter: 'g',
		answerSet: ['galaxia', 'gimnasio', 'gordo'],
		status: 0,
		questionSet:
			['CON LA G. Conjunto enorme de estrellas, polvo interestelar, gases y partículas', 'CON LA G. Lugar donde entrenar los músculos', 'CON LA G. Contrario de flaco'],
	},
    {   letter: 'h',
        answerSet: ['harakiri', 'huerto', 'Hades'],
        status: 0,
        questionSet:
            ['CON LA H. Suicidio ritual japonés por desentrañamiento', 'CON LA H. Lugar donde se cultivan hortalizas', 'CON LA H. Dios griego del inframundo'],
    },
    {   letter: 'i',
        answerSet: ['iglesia', 'iceberg', 'IBM'],
        status: 0,
        questionSet:
            ['CON LA I. Templo cristiano', 'CON LA I. Lo que hundió al Titanic', 'CON LA I. Conocida compañía informática que fundó Charles Ranlett Flint en 1911'],
    },
    {   letter: 'j',
        answerSet: ['jabali', 'Julio', 'Jaguar'],
        status: 0,
        questionSet:
            ['CON LA J. Variedad salvaje del cerdo que sale en la película El Rey León, de nombre Pumba', 'CON LA J. Séptimo mes del año', 'CON LA J. Marca de coches que se llama como un tipo de felino'],
    },
    {   letter: 'k',
        answerSet: ['kamikaze', 'Kobe', 'Kabul'],
        status: 0,
        questionSet:
            ['CON LA K. Persona que se juega la vida realizando una acción temeraria', 'CON LA K. Nombre de pila de Bryant, jugador de baloncesto ganador de 5 anillos de la NBA con los Lakers', 'CON LA K. Capital de Afganistán'],
    },
    {   letter: 'l',
        answerSet: ['licantropo', 'luna', 'lodo'],
        status: 0,
        questionSet:
            ['CON LA L. Hombre lobo', 'CON LA L. Único satélite natural de la Tierra', 'CON LA L. Sinónimo de barro'],
    },
    {   letter: 'm',
        answerSet: ['misantropo', 'musa', 'mano'],
        status: 0,
        questionSet:
            ['CON LA M. Persona que huye del trato con otras personas o siente gran aversión hacia ellas', 'CON LA M. Divinidad de la mitología griega, hija de Apolo, que protegía una determinada ciencia o arte', 'CON LA M. Tiene cinco dedos, igual que el pie'], 
    },
    {   letter: 'n',
        answerSet: ['necedad', 'Neil', 'noquear'],
        status: 0,
        questionSet:
            ['CON LA N. Demostración de poca inteligencia', 'CON LA N. Nombre de pila del primer hombre que pisó la Luna', 'CON LA N. En boxeo, derribar al contrario'],
    },
    {   letter: 'ñ',
        answerSet: ['señal', 'puñal', 'caña'],
        status: 0,
        questionSet:
            ['CONTIENE LA Ñ. Indicio que permite deducir algo de lo que no se tiene un conocimiento directo.', 'CONTIENE LA Ñ. Arma blanca que aparece en el juego del Cluedo', 'CONTIENE LA Ñ. Artilugio de pesca que también puede pedirse en un bar'], 
    },
    {   letter: 'o',
        answerSet: ['orco', 'Oliva', 'Oscar'],
        status: 0,
        questionSet:
            ['CON LA O. Humanoide fantástico de apariencia terrible y bestial, piel de color verde creada por el escritor Tolkien', 'CON LA O. Aceituna', 'CON LA O. Los premios más famosos de Hollywood'], 
    },
    {   letter: 'p',
        answerSet: ['protoss', 'porteria', 'papiroflexia'],
        status: 0,
        questionSet:
            ['CON LA P. Raza ancestral tecnológicamente avanzada que se caracteriza por sus grandes poderes psíonicos del videojuego StarCraft', 'CON LA P. Donde se marcan los goles', 'CON LA P. Arte que consiste en el plegado de papel sin usar tijeras ni pegamento para obtener figuras de formas variadas'], 
    },
    {   letter: 'q',
        answerSet: ['queso', 'quiniela', 'Quijote'],
        status: 0,
        questionSet:
            ['CON LA Q. Producto obtenido por la maduración de la cuajada de la leche', 'CON LA Q. Clásico juego de apuestas futbolísticas', 'CON LA Q. El protagonista del libro más conocido de Cervantes'],
    },
    {   letter: 'r',
        answerSet: ['raton', 'rosa', 'Rumania'],
        status: 0,
        questionSet:
            ['CON LA R. Roedor', 'CON LA R. Flor que se regala por Sant Jordi en Catalunya', 'CON LA R. País cuya capital es Bucarest'], 
    },
    {   letter: 's',
        answerSet: ['stackoverflow', 'semanas', 'sol'],
        status: 0,
        questionSet:
            ['CON LA S. Comunidad salvadora de todo desarrollador informático', 'CON LA S. El año tiene 52' , 'CON LA S. Astro rey'], 
    },
    {   letter: 't',
        answerSet: ['terminator', 'Teide', 'Tarantino'],
        status: 0,
        questionSet:
            ['CON LA T. Película del director James Cameron que consolidó a Arnold Schwarzenegger como actor en 1984', 'CON LA T. Volcán más famoso de las Islas Canarias', 'CON LA T. Apellido del director de Pulp Fiction'],
    },
    {   letter: 'u',
        answerSet: ['unamuno', 'uvas', 'unicornio'],
        status: 0,
        questionSet:
            ['CON LA U. Escritor y filósofo español de la generación del 98 autor del libro Niebla en 1914', 'CON LA U. Se toman 12 en Nochevieja', 'CON LA U. Criatura mitológica representada como un caballo blanco con patas de antílope, ojos y barba de chivo y un cuerno en la frente'],
    },
    {   letter: 'v',
        answerSet: ['vikingos', 'vasectomia', 'Vodafone'],
        status: 0,
        questionSet:
            ['CON LA V. Nombre dado a los miembros de los pueblos nórdicos originarios de Escandinavia, famosos por sus incursiones y pillajes en Europa', 'CON LA V. Capital del País Vasco', 'CON LA V. Método anticonceptivo permanente practicado al varón', 'CON LA V. Operador de telefonía móvil inicialmente conocido como Racal Telecom'], 
    },
    {   letter: 'w',
        answerSet: ['sandwich', 'whisky', 'Whatsapp'],
        status: 0,
        questionSet:
            ['CONTIENE LA W. Emparedado hecho con dos rebanadas de pan entre las cuales se coloca jamón y queso', 'CON LA W. Bebida alcohólica famosa en Escocia y en todo el mundo', 'CON LA W. Aplicación de mensajería instantánea propiedad de Facebook'], 
    },
    {   letter: 'x',
        answerSet: ['botox', 'x', 'xilofono'],
        status: 0,
        questionSet:
            ['CONTIENE LA X. Toxina bacteriana utilizada en cirujía estética', 'CON LA X. Tipo de rayos utilizados para obtener radiografías', 'CON LA X. Instrumento musical de percusión que aparece en la Danza Macabra, poema sinfónico compuesto por Camille Saint-Saëns'], 
    },
    {   letter: 'y',
        answerSet: ['peyote', 'yegua', 'yuca'],
        status: 0,
        questionSet:
            ['CONTIENE LA Y. Pequeño cáctus conocido por sus alcaloides psicoactivos utilizado de forma ritual y medicinal  por indígenas americanos', 'CON LA Y. Hembra del caballo', 'CON LA Y. Manihot esculenta, tubérculo cultivado en América'],
    },
    {   letter: 'z',
        answerSet: ['zen', 'zapatero', 'zoonosis'],
        status: 0,
        questionSet:
            ['CON LA Z. Escuela de budismo que busca la experiencia de la sabiduría más allá del discurso racional', 'CON LA Z. El que arregla los zapatos', 'CON LA Z. Enfermedad infecciosa que se transmite de forma natural de los animales al ser humano, y viceversa'],
    },
];

var username;
var response;
var rank = [];
var hits;

var game = {
    newUser: function() {
        username = this.get('Bienvenid@, ¿cuál es su nombre?');
        this.console(username);
    },

    newGame: function() {
        var input = this.get('¿Desea empezar una nueva partida?: s/n');
        if(input === 's'){
            //reset status from questions
            for(var i = 0; i < questions.length; i++){
                questions[i].status = 0;
            }
            return true;
        } else {
            this.say('¡Hasta pronto!');
            return false;
        }
    },
    
    askQuestion: function(){
        var random = [0, 1, 2];
        var choose;
        do{
            for(var i = 0; i < questions.length; i++){
                if(questions[i].status === 0){
                    choose = random[Math.floor(Math.random() * random.length)];
                    response = this.get(`${questions[i].questionSet[choose]}\n\n(Puede abortar el juego en cualquier momento pulsando el botón "Cancelar").`);
                    if(response === null){
                        break;
                    } else if(response.toUpperCase() === 'PASAPALABRA'){
                        this.say('Has escogido "Pasapalabra". Esta palabra queda pendiente de contestar más adelante.');
                    } else if(response.toUpperCase() === questions[i].answerSet[choose].toUpperCase()){
                        questions[i].status = 1;
                        this.say('¡Es correcto!, Sumas 1 punto a tu marcador.');
                    } else {
                        questions[i].status = 2;
                        this.say(`Lo siento, has fallado. La respuesta correcta era ${questions[i].answerSet[choose].toUpperCase()}`);
                    }
                }        
            }
        } while(!this.completed() && response !== null)
    },
    
    completed: function() {        
        for(var i = 0; i < questions.length; i++){
            if(questions[i].status === 0){
                return false;
            }
        } 
        return true;
    },
    
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
       
        this.say(`Tu resultado es de ${hits} respuestas acertadas y ${mistakes} respuestas falladas.`);
    },

    ranking: function () {
        var pair = {user: username, score: hits};
        
        if(response !== null){
            rank.push(pair);
            
            rank.sort(function(a, b){
            var keyA = a.score;
            var keyB = b.score;
            if (keyA < keyB) return 1;
            if (keyA > keyB) return -1;
            return 0;
            })
            
            console.table(rank);
        }
    },

    get: function(arg){
        return prompt(arg);
    },

    say: function(arg){
        return window.alert(arg);
    },

    console: function (arg) {
        console.log(arg);    
    }
}

function pasapalabra() {
    game.newUser();
    var anotherGame = game.newGame();

    while(anotherGame){
        game.askQuestion();
        game.performance();
        game.ranking();
        anotherGame = game.newGame();
    } 
}

pasapalabra();