var questions = [//preguntas del pasapalabra
	{letter: "a", answer: "abducir", status: 0, question: ("CON LA A. Dicho de una supuesta criatura extraterrestre: Apoderarse de alguien")},
	{letter: "b", answer: "bingo", status: 0, question: ("CON LA B. Juego que ha sacado de quicio a todos los 'Skylabers' en las sesiones de precurso")},
	{letter: "c", answer: "churumbel", status: 0, question: ("CON LA C. Niño, crío, bebé")},
	{letter: "d", answer: "diarrea", status: 0, question: ("CON LA D. Anormalidad en la función del aparato digestivo caracterizada por frecuentes evacuaciones y su consistencia líquida")},
	{letter: "e", answer: "ectoplasma", status: 0, question: ("CON LA E. Gelatinoso y se encuentra debajo de la membrana plasmática. Los cazafantasmas medían su radiación")},
	{letter: "f", answer: "facil", status: 0, question: ("CON LA F. Que no requiere gran esfuerzo, capacidad o dificultad")},
	{letter: "g", answer: "galaxia", status: 0, question: ("CON LA G. Conjunto enorme de estrellas, polvo interestelar, gases y partículas")},
	{letter: "h", answer: "harakiri", status: 0, question: ("CON LA H. Suicidio ritual japonés por desentrañamiento")},
	{letter: "i", answer: "iglesia", status: 0, question: ("CON LA I. Templo cristiano")},
	{letter: "j", answer: "jabali", status: 0, question: ("CON LA J. Variedad salvaje del cerdo que sale en la película 'El Rey León', de nombre Pumba")},
	{letter: "k", answer: "kamikaze", status: 0, question: ("CON LA K. Persona que se juega la vida realizando una acción temeraria")},
	{letter: "l", answer: "licantropo", status: 0, question: ("CON LA L. Hombre lobo")},
	{letter: "m", answer: "misantropo", status: 0, question: ("CON LA M. Persona que huye del trato con otras personas o siente gran aversión hacia ellas")},
	{letter: "n", answer: "necedad", status: 0, question: ("CON LA N. Demostración de poca inteligencia")},
	{letter: "ñ", answer: "señal", status:0, question: ("CONTIENE LA Ñ. Indicio que permite deducir algo de lo que no se tiene un conocimiento directo.")},
	{letter: "o", answer: "orco", status: 0, question: ("CON LA O. Humanoide fantástico de apariencia terrible y bestial, piel de color verde creada por el escritor Tolkien")},
	{letter: "p", answer: "protoss", status: 0, question: ("CON LA P. Raza ancestral tecnológicamente avanzada que se caracteriza por sus grandes poderes psíonicos del videojuego StarCraft")},
	{letter: "q", answer: "queso", status: 0, question: ("CON LA Q. Producto obtenido por la maduración de la cuajada de la leche")},
	{letter: "r", answer: "raton", status: 0, question: ("CON LA R. Roedor")},
	{letter: "s", answer: "stackoverflow", status: 0, question: ("CON LA S. Comunidad salvadora de todo desarrollador informático")},
	{letter: "t", answer: "terminator", status: 0, question: ("CON LA T. Película del director James Cameron que consolidó a Arnold Schwarzenegger como actor en 1984")},
	{letter: "u", answer: "unamuno", status: 0, question: ("CON LA U. Escritor y filósofo español de la generación del 98 autor del libro 'Niebla' en 1914")},
	{letter: "v", answer: "vikingos", status: 0, question: ("CON LA V. Nombre dado a los miembros de los pueblos nórdicos originarios de Escandinavia, famosos por sus incursiones y pillajes en Europa")},
	{letter: "w", answer: "sandwich", status: 0, question: ("CONTIENE LA W. Emparedado hecho con dos rebanadas de pan entre las cuales se coloca jamón y queso")},
	{letter: "x", answer: "botox", status: 0, question: ("CONTIENE LA X. Toxina bacteriana utilizada en cirujía estética")},
	{letter: "y", answer: "peyote", status: 0, question: ("CONTIENE LA Y. Pequeño cáctus conocido por sus alcaloides psicoactivos utilizado de forma ritual y medicinal por indígenas americanos")},
	{letter: "z", answer: "zen", status: 0, question: ("CON LA Z. Escuela de budismo que busca la experiencia de la sabiduría más allá del discurso racional")},
]
var name = playerName();//nombre del jugador
var endGame = false;
var score = 0;//puntuacion
var fail = 0;//fallos
var totalTurns = questions.length;//numero total de palabras
var turn = 0;//turnos
var storePlayers = {//almacena nombre y puntuacion del jugador
	name: String,
	score: Number
};
function ronda(arr){//funcion principal:
	//va mostrando las preguntas y segun la respuesta del jugador va modificando el status para comprobar 
	//a posteriori si son correctas o incorrectas.
    for(var i = 0; i < arr.length ; i++){
        if (endGame == false){
            if (arr[i].status == 0){
			   var playerAnswer = prompt(arr[i].question, 'escriba aquí su respuesta');
			   if(playerAnswer === null){//en caso de darle a cancelar se termina el juego
					endGame = true;
					alert(`Gracias por jugar!`);
			   }else{
				   	playerAnswer.toLocaleLowerCase();
				   	switch(playerAnswer){//comprueba si la respuesta es correcta, incorrecta o pasapalabra
						case arr[i].answer://en caso de ser correcta suma un punto, un turno y comprueba si ha finalizado la ronda y el juego
							score++;
							turn++;
							arr[i].status = 1;
							alert(`Correcto! Llevas acertadas ${score} palabras de ${totalTurns} en total.`);
							checkEndGame();
							theEnd();
						break;
						case 'pasapalabra'://si el usuario escribe pasapalabra, suma un turno y comprueba si ha finalizado la ronda
						//el juego no lo comprueba porque mientras haya preguntas por contestar no se puede termnar el juego
							turn++;
							arr[i].status = 0;
							checkEndGame();
						break;                
						default://en caso de no ser ninguno de los primeros, suma un fallo, un turno y comprueba si ha finalizado la ronda y el juego.
							fail++;
							turn++;
							arr[i].status = -1;
							alert(`Noooooo!!`);
							checkEndGame();
							theEnd();
					 };
			    };                
            };
		};
    };
};
function playerName(){//comprueba que el nombre del juegador sea valido, de lo contrario vuelve a preguntar
	var player = prompt(`Introduzca su nombre`, 'ej. Pepito');
		if(isNaN(player) === false||player === 'ej. Pepito'){
			playerName();
    }else{//si el nombre es valido da la bienvenida al jugador
        alert(`Bienvenido ${player}! Empezemos con la primera pregunta.`);
    }
    return player;
	}
function checkEndGame(){//cuando termina una ronda de palabras pregunta al usuario si quiere continuar
	if(turn === totalTurns){
		endGame = true;
		roundEnd();//activa funcion para preguntar al usuario si quiere continuar
	}else{
		endGame = false
	}
}
function theEnd(){//comprueba si el juego ha terminado
	if(totalTurns === score+fail){
		finalStep();//activa la funcion que almacena los resultados y pregunta si quieres volver a jugar
	}
}
function roundEnd(){//pregunta al usuario si quiere continuar respondiendo preguntas
	var question = confirm(`Ha terminado la primera ronda! Seguimos jugando?`);
		switch(question){
			case true:
				endGame = false;
				ronda(questions);
			break;
			default:
				finalStep();
			break;
		}
}
function finalStep(){//almacena los resultados de la partida y pregunta al jugador si quiere volver a jugar
var storeResults = new players(name, score);
    localStorage.setItem(name, JSON.stringify(storeResults));
    printClass();
    var finalQuestion = confirm("Deseas volver a jugar?")
		switch(finalQuestion){
			case true://si quiere continuar jugando el juego se resetea y vuelve a empezar
				newGame();//funcion que resetea el juego
				ronda(questions);//activa el juego de nuevo
				break;
			default:
				alert(`Gracias por jugar con nosotros ${name}!`)
				break;
		}
}
function printClass(){//muestra por pantalla los resultados de los jugadores
	for (let i = 0; i < localStorage.length; i++) {
		var playerQualy = JSON.parse(localStorage.getItem(localStorage.key(i)));
		console.log(`Jugador: ${playerQualy.name}, Puntuación: ${playerQualy.score}`);
	}
}
function players(name, score){
	this.name = name;
	this.score = score;
}
function newGame(){//resetea el estatus de todas las palabras y lo deja en 0 otra vez
	for(var obj of questions){
		obj.status = 0;
	}
}
ronda(questions);//activa el juego