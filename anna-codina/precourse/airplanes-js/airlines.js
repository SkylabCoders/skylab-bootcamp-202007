var flights = [

    { id: 00, to: 'Bilbao', from: 'Barcelona', cost: 1600, scale: false },
    { id: 01, to: 'New York', from: 'Barcelona', cost: 700, scale: false },
    { id: 02, to: 'Los Angeles', from: 'Madrid', cost: 1100, scale: true },
    { id: 03, to: 'Paris', from: 'Barcelona', cost: 210, scale: false },
    { id: 04, to: 'Roma', from: 'Barcelona', cost: 150, scale: false },
    { id: 05, to: 'London', from: 'Madrid', cost: 200, scale: false },
    { id: 06, to: 'Madrid', from: 'Barcelona', cost: 90, scale: false },
    { id: 07, to: 'Tokyo', from: 'Madrid', cost: 1500, scale: true },
    { id: 08, to: 'Shangai', from: 'Barcelona', cost: 800, scale: true },
    { id: 09, to: 'Sydney', from: 'Barcelona', cost: 150, scale: true },
    { id: 10, to: 'Tel-Aviv', from: 'Madrid', cost: 150, scale: false } 
]
function airlines () {
  var usuario = prompt('Introduzca su nombre de usuario:', 'Nombre de usuario');
  console.log('Bienvenido/a ' + usuario);
  presentacionVuelos();
  precioMedio();
  verificarEscalas();
  ultimosVuelos();

}

function presentacionVuelos (){
    console.log('Los vuelos de hoy son:')
    for ( i of flights) {
        var escalas = i.scale ? ' y realiza escalas.' : ' y no realiza ninguna escala.' ;

        var vuelo = 'El vuelo con origen: ' + i.from + ', y destino: ' + i.to + ' tiene un coste de ' + i.cost + escalas;
        console.log(vuelo);
    } 
}

function precioMedio () {
    var precio = 0;
    for (i of flights) {
        precio += i.cost;
    }
    var precioMed = precio / flights.length;
    console.log('El precio medio de los vuelos es ' + precioMed.toFixed(2) + '.');
}

function verificarEscalas () {
   
    var total = 0
    for (i of flights) {
        if (i.scale){
            ++total;
        }
    }
    if (total !== 0) {
        console.log('Hay un total de ' + total + ' de vuelos con escala. Son los siguientes:' )
        for (i of flights) {
            if (i.scale) {
            var escalas = console.log('El vuelo con origen: ' + i.from + ', y destino: ' + i.to + ' tiene un coste de ' + i.cost + '.');
            }
        }
    } else {
        console.log('No hay vuelos con escalas.')
    }

}
function ultimosVuelos() {
    console.log('Los últimos 5 vuelos de hoy son:');
    var indice = flights.length - 5;
    var listaUltimosVuelos = flights.slice(indice);
    for (var i in listaUltimosVuelos) {
        var id = listaUltimosVuelos[i].id;
        var to = listaUltimosVuelos[i].to;
        console.log('Id: ' + id + ' destinado a ' + to);
    }
}