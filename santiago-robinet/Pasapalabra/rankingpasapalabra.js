//FUNCION DE RANKING
var jugadores = [
    {jugador:'Matilde', puntos: 12},
    {jugador:'Juan', puntos: 4},
    {jugador:'Santi', puntos: 65},
    {jugador:'Fran', puntos: 31},
    {jugador:'Nelly', puntos: 9}
];

var ranking = [];

var rankingFinal = [];

for(let i = 0; i<jugadores.length; i++){
ranking.push(jugadores[i].puntos);
};

ranking.sort((a,b) => a-b);

for(let a = ranking.length; 0 < a; a--){
    for(let h = 0; h < jugadores.length; h++){
        if(ranking[a] === jugadores[h].puntos){
            rankingFinal.push(jugadores[h]);
        };
    };
};
console.log(rankingFinal);



//ARMAR LISTA JUGADORES

var letrasAcertadas = 16;

var listaDeJugadores = [];

listaDeJugadores.push({participante , letrasAcertadas});

console.log(listaDeJugadores);