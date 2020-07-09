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
];

var userName = prompt("Introduce tu nombre:");
console.log(`Bienvenido ${userName}`);

printFlights();
console.log("_________");

console.log(`El coste medio de todos los vuelos es: ${avgCost().toFixed(2)}`);
console.log("_________");

console.log(`Hay un total de ${countScales()} vuelos con escala`);
console.log("_________");

printLast();

function printFlights() {
    var strEscala = "";
    for (i in flights) {
        if (flights[i].scale == true) {
            strEscala = "Realiza escalas.";
        } else {
            strEscala = "No realiza ninguna escala.";
        }
        console.log(`El vuelo con origen: ${flights[i].from}, y destino ${flights[i].to} tiene un coste de ${flights[i].cost}, ${strEscala}`);
    }
}

function avgCost() {
    var sum = 0;
    var count = 0;
    for (i in flights) {
        sum += flights[i].cost;
        count++;
    }
    return sum / count;
}

function countScales() {
    var count = 0;
    for (i in flights) {
        if (flights[i].scale == true) {
            count++;
        }
    }
    return count;
}

function printLast() {
    var lastFlights = [];
    for (i in flights) {
        if (i >= flights.length - 5) {
            lastFlights.push(flights[i].to);
        }
    }
    console.log("Las destinaciones de los ultimos 5 vuelos son:")
    for (i in lastFlights) {
        console.log(`   - ${lastFlights[i]}`);
    }
}