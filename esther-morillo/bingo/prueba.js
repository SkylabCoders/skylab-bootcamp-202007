var ranking = [
    {nombre: 'Esther', puntos: 3},
    {nombre: 'Sagu', puntos: 6},
    {nombre: 'zElena', puntos: 5},
    {nombre: 'yo', puntos: 5}
];
var l = 0;

var name;
var puntosRanking = 8;

var x = [1,8,5,3,11];

bingo();

function bingo() {
    
 

    console.log('Ranking TOP 3:');
        
        ranking[l].nombre = name;
        ranking[l].puntos = puntosRanking;        
        
        var orden = function(a,b){
            return a.puntos < b.puntos;
        };
        ranking.sort(orden);

        ranking.pop(3);
        console.log(ranking);
        l++;

}