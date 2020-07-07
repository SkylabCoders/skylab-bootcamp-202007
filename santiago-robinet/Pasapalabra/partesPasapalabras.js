var numeroDeJugadores=prompt('Cuantos Jugadores participaran?','Introduce solo el numero de jugadores.');

var players = [];

newPlayers();

playersName();

function newPlayers(){
    while(numeroDeJugadores > players.length){
        players.push({jugador: 'Nono', letrasAcertadas: 0, letrasErradas: 0, noSabeNoContesta: 0, letrasTotales: 0, puntos: 0 });
    }
}

function playersName(){
    for( var i = 0; i < players.length; i++){
        var name = prompt(`Nombre de Jugador `+(i+1));
        players[i].jugador = name;
    }
}


console.log(players);