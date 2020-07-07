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

    { id: 10, to: 'Tel-Aviv', from: 'Madrid', cost: 150, scale: false }];

var bienvenida = prompt('Hola, indique su nombre:');

function airlines() {
    if (!isNaN(bienvenida) && bienvenida != null && bienvenida != "") { //Bienvenida
        console.log('Debe introducir un nombre.');
        return false;
    } else {
        console.log('Bienvenido/a ' + bienvenida);
    }

    for (let i = 0; i < flights.length; i++) { //mostrar todos los vuelos
        var escala = '';
        if (flights[i].scale === true) {
            escala = ' y realiza escala.';
        } else {
            escala = ' y no realiza ninguna escala.';
        }
        console.log('El vuelo con origen: ' + flights[i].from + ', y destino: ' +
            flights[i].to + ', tiene un coste de ' + flights[i].cost + '€' + escala);
    }

    var sumaCost = 0;
    for (let i = 0; i < flights.length; i++) { //mostrar media de costes
        sumaCost += flights[i].cost;
    }
    var media = sumaCost / flights.length;
    console.log('El coste medio de los vuelos es de ' + media.toFixed(2) + '€');

    var arrScales = []; //mostrar número de vuelos con escala
    for (let i = 0; i < flights.length; i++) {
        if (flights[i].scale === true) {
            arrScales.push(flights[i].scale);
        }
    }
    console.log('Hay ' + arrScales.length + ' vuelos que efectúan escalas.');

    var arrLast = flights.slice(flights.length - 5); //mostrar destinos de los últimos 5 ID's
    console.log('Los últimos vuelos del día son:');
    for (let i = 0; i < arrLast.length; i++) {
        console.log(arrLast[i].to);
    }
}
airlines();

