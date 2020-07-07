var questions = [

    { 
      letter: "a",
      answer: "abducir", 
      status: 'paso', 
      question: "CON LA A. <br><br> Dicho de una supuesta criatura extraterrestre: Apoderarse de alguien"
    },

    {
      letter: "b", 
      answer: "bingo", 
      status: 'paso', 
      question: "CON LA B. <br><br> Juego que ha sacado de quicio a todos los 'Skylabers' en las sesiones de precurso"
    },

    {
      letter: "c", 
      answer: "churumbel", 
      status: 'paso', 
      question: "CON LA C. <br><br> Niño, crío, bebé"
    },

    {
      letter: "d", 
      answer: "diarrea", 
      status: 'paso' , 
      question: "CON LA D. <br><br> Anormalidad en la función del aparato digestivo caracterizada por frecuentes evacuaciones y su consistencia líquida"
    },

    {
      letter: "e", 
      answer: "ectoplasma", 
      status: 'paso' , 
      question: "CON LA E. <br><br> Gelatinoso y se encuentra debajo de la membrana plasmática. Los cazafantasmas medían su radiación"
    },

    {
      letter: "f", 
      answer: "facil", 
      status: 'paso' , 
      question: "CON LA F. <br><br> Que no requiere gran esfuerzo, capacidad o dificultad"
    },

    {
      letter: "g", 
      answer: "galaxia", 
      status: 'paso' , 
      question: "CON LA G. <br><br> Conjunto enorme de estrellas, polvo interestelar, gases y partículas"
    },

    {
      letter: "h", 
      answer: "harakiri", 
      status: 'paso', 
      question: "CON LA H. <br><br> Suicidio ritual japonés por desentrañamiento"
    },

    {
      letter: "i", 
      answer: "iglesia", 
      status: 'paso' , 
      question: "CON LA I. <br><br> Templo cristiano"
    },

    {
      letter: "j", 
      answer: "jabali", 
      status: 'paso', 
      question: "CON LA J. <br><br> Variedad salvaje del cerdo que sale en la película 'El Rey León', de nombre Pumba"
    },

    {
      letter: "k", 
      answer: "kamikaze", 
      status: 'paso', 
      question: "CON LA K. <br><br> Persona que se juega la vida realizando una acción temeraria"
    },

    {
      letter: "l", 
      answer: "licantropo", 
      status: 'paso', 
      question: "CON LA L. <br><br> Hombre lobo"
    },

    {
      letter: "m", 
      answer: "misantropo", 
      status: 'paso', 
      question: "CON LA M. <br><br> Persona que huye del trato con otras personas o siente gran aversión hacia ellas"
    },

    {
      letter: "n", 
      answer: "necedad", 
      status: 'paso', 
      question: "CON LA N. <br><br> Demostración de poca inteligencia"
    },

    {
      letter: "ñ", 
      answer: "señal", 
      status: 'paso', 
      question: "CONTIENE LA Ñ. <br><br> Indicio que permite deducir algo de lo que no se tiene un conocimiento directo."
    },

    {
      letter: "o", 
      answer: "orco", 
      status: 'paso', 
      question: "CON LA O. <br><br> Humanoide fantástico de apariencia terrible y bestial, piel de color verde creada por el escritor Tolkien"
    },

    {
      letter: "p", 
      answer: "protoss", 
      status: 'paso', 
      question: "CON LA P. <br><br> Raza ancestral tecnológicamente avanzada que se caracteriza por sus grandes poderes psíonicos del videojuego StarCraft"
    },

    {
      letter: "q", 
      answer: "queso", 
      status: 'paso', 
      question: "CON LA Q. <br><br> Producto obtenido por la maduración de la cuajada de la leche"
    },

    {
      letter: "r", 
      answer: "raton", 
      status: 'paso', 
      question: "CON LA R. <br><br> Roedor"
    },

    {
      letter: "s", 
      answer: "stackoverflow", 
      status: 'paso', 
      question: "CON LA S. <br><br> Comunidad salvadora de todo desarrollador informático"
    },

    {
      letter: "t", 
      answer: "terminator", 
      status: 'paso', 
      question: "CON LA T. <br><br> Película del director James Cameron que consolidó a Arnold Schwarzenegger como actor en 1984"
    },

    {
      letter: "u", 
      answer: "unamuno", 
      status: 'paso', 
      question: "CON LA U. <br><br> Escritor y filósofo español de la generación del 98 autor del libro 'Niebla' en 1914"
    },

    {
      letter: "v", 
      answer: "vikingos", 
      status: 'paso', 
      question: "CON LA V. <br><br> Nombre dado a los miembros de los pueblos nórdicos originarios de Escandinavia, famosos por sus incursiones y pillajes en Europa"
    },

    {
      letter: "w", 
      answer: "sandwich", 
      status: 'paso', 
      question: "CONTIENE LA W. <br><br> Emparedado hecho con dos rebanadas de pan entre las cuales se coloca jamón y queso"
    },

    {
      letter: "x", 
      answer: "botox", 
      status: 'paso', 
      question: "CONTIENE LA X. <br><br> Toxina bacteriana utilizada en cirujía estética"
    },

    {
      letter: "y", 
      answer: "peyote", 
      status: 'paso', 
      question: "CONTIENE LA Y. <br><br> Pequeño cáctus conocido por sus alcaloides psicoactivos utilizado de forma ritual y medicinal  por indígenas americanos"
    },

    {
      letter: "z", 
      answer: "zen", 
      status: 'paso', 
      question: "CON LA Z. <br><br> Escuela de budismo que busca la experiencia de la sabiduría más allá del discurso racional"
    } 
];

var questionToShow;

var index;

var playerTurn = 0;

var timeInterval;

var gameEnd = false;

var player = [
  {name: 'name', points: 0, miss: 0, trueletters:[], falseletters:[], timer: 180 },
  {name: 'name', points: 0, miss: 0, trueletters:[], falseletters:[], timer: 180 }
];

var playerOneTotal;
var playerTwoTotal;

var onePlayerGame = false;


document.addEventListener('keydown', pressEnterKey);

getNames();

//Mediante esta funcion mostramos en pantalla la pregunta que le corresponde al jugador.
function screen(){

    
    index = 0;

    while(questions[index].status !== 'paso'){
        index++;
    }

    questionToShow = questions[index].question;

    document.getElementById(questions[index].letter).style.backgroundColor = "lightblue";

    document.getElementById("screen").innerHTML = questionToShow;
 
    
}

//Accion del boton start en la pantalla. Comienza el tiempo y da focus al input para responder la pregunta.
function start(){

  timer(player[playerTurn].timer);

  screen();

  document.getElementById("start").style.display = 'none';

  document.getElementById("word").focus();

} 

//Funcion del boton enter. Evalua que color asignarle a la ficha de la letra segun acierte o no, y cambiar el status correspondiente de la pregunta
//en la variable "questions".
function enter(){
    
    var playerAnswer = (document.getElementById("word").value).toLowerCase();

    
    if(playerAnswer === questions[index].answer){

        document.getElementById(questions[index].letter).style.backgroundColor = "rgb(145, 190, 131)";
        document.getElementById(questions[index].letter).style.border = "rgb(224, 215, 215) 2px solid";
        document.getElementById(questions[index].letter).style.color = "rgb(224, 215, 215)";
        questions[index].status = true;
        player[playerTurn]['trueletters'].push(questions[index].letter);
        document.getElementById("word").value = '';
        screen();

    } else {

        document.getElementById(questions[index].letter).style.backgroundColor = "rgb(234, 73, 73)";
        document.getElementById(questions[index].letter).style.border = "rgb(224, 215, 215) 2px solid";
        document.getElementById(questions[index].letter).style.color = "rgb(224, 215, 215)";
        questions[index].status = false;
        player[playerTurn]['falseletters'].push(questions[index].letter);
        document.getElementById("word").value = '';
        screen();

        if(onePlayerGame === false){

          pasapalabra();
        
        }

    }
    document.getElementById("word").focus();
}

//Detiene la accion del intervalo en la func. "timer", cambia el turno, resetea el status de todas las preguntas, inicia el temporizador del otro turno,
//carga sus preguntas hasta ahora respondidas y muestra en pantalla la pregunta que toca responder.
function pasapalabra (){

  clearInterval(timeInterval);

  player[playerTurn].timer = Number(document.getElementById("timer").innerHTML);

 
  if(playerTurn === 0){
    playerTurn = 1;
  } else {
    playerTurn = 0;
  }
  
  
  resetStatus();

  timer(player[playerTurn].timer);

  loadQuestions();

  showName();

  screen();

  document.getElementById("word").focus();

}

//Inicia la cuenta regresiva de los segundos del turno, actualiza los puntos de los jugadores y muestra el ranking. Si timer llega a 0 hace pasapalabra automaticamente
// y chequea el final del juego.
function timer(playerTimer){

  var time = playerTimer; 

  timeInterval = setInterval( function (){

    document.getElementById("timer").innerHTML = time;


    if( onePlayerGame ){

      onePlayerRanking();

      onePlayerEndGame();
    }

    if(!onePlayerGame){
      
      if( time === 0 ){
        pasapalabra();
      }

      playerPoints();
      
      ranking();
      
      endGame();
    }


    time--;

    }, 1000);

}

//Finaliza el juego.
function surrender(){

  gameEnd = true;

}

//Muestra el nombre del jugador a quien le corresponde el turno.
function showName() {

   if(playerTurn === 0 ){

    document.getElementById("playername").innerHTML = player[0].name;

  }

  if( playerTurn === 1){

    document.getElementById("playername").innerHTML = player[1].name;

  }

}


//Se solita los nombres de los participantes. Si no se ingresan valores se vuelve a llamar a la funcion.
function getNames(){
  var playersNum = prompt('Si quieres jugar solo inserta el numero "1" y si quieres jugar de a dos inserta el numero "2".');

  if( playersNum !== '1' && playersNum !== '2'){

    alert("Debes ingresar la cantidad de jugadores antes de poder continuar");

    getNames();

  }


  if(playersNum === '1'){

    player[0].name = prompt('Bienvenido!! Quien dijo que jugar solo es aburrido? Escribe tu nombre, y comencemos');

    onePlayerGame = true;

    document.getElementById("pasapalabra").style.display = "none";

    player.splice( 1 , 1 );
    
    if(player[0].name === null || player[0].name === undefined){
      getNames();
    }

  }

  if(playersNum === '2'){

  player[0].name = prompt('Bienvenido Jugador 1. Escribe tu nombre');

  player[1].name = prompt(`Ohh! tu eres el rival de ${player[0].name}. Como te llamas?`);

  if(player[0].name === null || player[0].name === undefined){
    getNames();
  }

  if(player[1].name === null || player[1].name === undefined){
    getNames();
  }

  }


}

//Chequea las diferentes formas de las que puede darse por terminado el juego o el turno de un jugador.
function endGame(){

  if(playerOneTotal === 27 && playerTwoTotal === 27){
    gameEnd = true;
  }
  
  if(playerOneTotal < 27 || playerTwoTotal < 27){
    if(playerOneTotal === 27 && playerTurn === 0){
      pasapalabra();
    }

    if(playerTwoTotal === 27 && playerTurn === 1){
      pasapalabra();
    }
  }
  

  if (player[0].timer === 0 && player[1].timer === 0){
    gameEnd = true;
  }


  if ( gameEnd === true){

    clearInterval(timeInterval);

    var winner = document.getElementById("firstplacename").innerHTML;
    var winnerPoints = document.getElementById("firstplaceright").innerHTML;
    var winnerMiss = document.getElementById("firstplacemiss").innerHTML;

    document.getElementById("screen").innerHTML = `Felicitaciones ${winner}!! Has ganado con ${winnerPoints} puntos y ${winnerMiss} palbras erradas.`;
    
    setTimeout( function(){

      var playAgain = confirm('Deseas volver a jugar otra partida?');

      if( playAgain ){

        location.reload();

      } else {

        alert('Nos vemos la proxima >:-)');

      }
    }, 2000);

  }

}

//Funcion que recopila las respuestas dadas por un jugador, y las carga al comenzar su turno, cambiando de color las fichas de las letras segun corresponda.
function loadQuestions(){


 for(var i = 0; i < player[playerTurn]['trueletters'].length; i++){
   for(var h = 0; h < questions.length; h++) {
     
     if(player[playerTurn]['trueletters'][i] === questions[h].letter){
       questions[h].status = true;
       document.getElementById(player[playerTurn]['trueletters'][i]).style.backgroundColor = "rgb(145, 190, 131)";
       document.getElementById(player[playerTurn]['trueletters'][i]).style.border = "rgb(224, 215, 215) 2px solid";
       document.getElementById(player[playerTurn]['trueletters'][i]).style.color = "rgb(224, 215, 215)";
     } 
  }
 }

 for(var i = 0; i < player[playerTurn]['falseletters'].length; i++){
   for(var h = 0; h < questions.length; h++){
     
     if(player[playerTurn]['falseletters'][i] === questions[h].letter){
       questions[h].status = false;
       document.getElementById(player[playerTurn]['falseletters'][i]).style.backgroundColor = "rgb(234, 73, 73)";
       document.getElementById(player[playerTurn]['falseletters'][i]).style.border = "rgb(224, 215, 215) 2px solid";
       document.getElementById(player[playerTurn]['falseletters'][i]).style.color = "rgb(224, 215, 215)";
     }
   }
 }

  
}

//Funcion que reinicia el status de las preguntas de la variable "questions"(usado como paso previo a 'func. loadQuestions').
function resetStatus(){

  for(var i = 0; i < questions.length; i++){

    questions[i].status = 'paso';

    document.getElementById(questions[i].letter).style.backgroundColor = "rgb(5, 70, 92)";
    document.getElementById(questions[i].letter).style.color = "rgb(228, 152, 40)";
    document.getElementById(questions[i].letter).style.border = "rgb(228, 152, 40) 2px solid";
    

  }

}

//Ordena a los jugadores en orden segun quien tenga mas puntos.
function ranking(){    

  if(player[0].points < player[1].points){
    document.getElementById("firstplacename").innerHTML = player[1].name;
    document.getElementById("firstplaceright").innerHTML = player[1].points;
    document.getElementById("firstplacemiss").innerHTML = player[1].miss;
  
    document.getElementById("secondplacename").innerHTML = player[0].name;
    document.getElementById("secondplaceright").innerHTML = player[0].points;
    document.getElementById("secondplacemiss").innerHTML = player[0].miss;

  } else {
    
    document.getElementById("firstplacename").innerHTML = player[0].name;
    document.getElementById("firstplaceright").innerHTML = player[0].points;
    document.getElementById("firstplacemiss").innerHTML = player[0].miss;
    
    document.getElementById("secondplacename").innerHTML = player[1].name;
    document.getElementById("secondplaceright").innerHTML = player[1].points;
    document.getElementById("secondplacemiss").innerHTML = player[1].miss;

  }  
}

//Contabiliza las palabras correctas como "points" y las incorrectas como "miss".
function playerPoints(){

  player[0].points = player[0]['trueletters'].length;
  player[0].miss = player[0]['falseletters'].length;

  
  playerOneTotal = player[0].points + player[0].miss;


  player[1].points = player[1]['trueletters'].length;
  player[1].miss = player[1]['falseletters'].length;

  playerTwoTotal = player[1].points + player[1].miss;
  

}

//Esta funcion se encarga de refrescar y mostrar el ranking cuando es una partida de un solo jugador.
function onePlayerRanking(){

  player[0].points = player[0]['trueletters'].length;
  player[0].miss = player[0]['falseletters'].length;

  
  playerOneTotal = player[0].points + player[0].miss;

  document.getElementById("firstplacename").innerHTML = player[0].name;
  document.getElementById("firstplaceright").innerHTML = player[0].points;
  document.getElementById("firstplacemiss").innerHTML = player[0].miss;

}

//Actualiza el timer del jugador y corrobora cuando finaliza su juego.
function onePlayerEndGame(){

  player[playerTurn].timer = Number(document.getElementById("timer").innerHTML);

  if(playerOneTotal === 27){
    gameEnd = true;
  }

  if( player[0].timer === 0 ){
    gameEnd = true;
  }

  if ( gameEnd === true){

    clearInterval(timeInterval);

    var winner = document.getElementById("firstplacename").innerHTML;
    var winnerPoints = document.getElementById("firstplaceright").innerHTML;
    var winnerMiss = document.getElementById("firstplacemiss").innerHTML;

    document.getElementById("screen").innerHTML = `Eii ${winner}!! Has terminado la partida con ${winnerPoints} puntos y ${winnerMiss} palbras erradas.`;

    setTimeout( function(){

      var playAgain = confirm('Deseas volver a jugar otra partida?');

      if( playAgain ){

        location.reload();

      } else {

        alert('Nos vemos la proxima >:-)');

      }
    }, 2000);

  }



}

//Esta funcion reconoce la tecla "Enter" y envia la respuesta del input.
function pressEnterKey(event){

  if(event.keyCode === 13){
    event.preventDefault();
    enter();
  }

}