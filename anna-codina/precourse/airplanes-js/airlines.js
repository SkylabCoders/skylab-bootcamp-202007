const costString = ' tiene un coste de ';
const pointString = '.';
const originFlightString = 'El vuelo con origen: ';
const destinyString = ', y destino: ';
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
function airlines() {
    const userTypeQuestion = 'Introduzca su nombre de usuario:';
    const userTypeDefaultAnswer = 'Nombre de usuario';
    const welcome = 'Bienvenido/a ';
    let user = prompt(userTypeQuestion, userTypeDefaultAnswer);
    console.log(welcome + user);
    flightsUserFriendly();
    averagePrice();
    checkScales();
    lastFlights();

}

function flightsUserFriendly() {
    const todayFlightsString = 'Los vuelos de hoy son:';
    const scaleTrueString = ' y realiza escalas.';
    const scaleFalseString = ' y no realiza ninguna escala.';
    console.log(todayFlightsString);
    for (let friendlyIndexFlight of flights) {
        let scales = friendlyIndexFlight.scale ? scaleTrueString : scaleFalseString;

        let actualFlight = originFlightString + friendlyIndexFlight.from + destinyString + friendlyIndexFlight.to + costString + friendlyIndexFlight.cost + scales;
        console.log(actualFlight);
    }
}

function averagePrice() {
    const averagePriceString = 'El precio medio de los vuelos es ';
    let price = 0;
    for (let currentFlight of flights) {
        price += currentFlight.cost;
    }
    var priceAverage = price / flights.length;
    console.log(averagePriceString + priceAverage.toFixed(2) + pointString);
}

function checkScales() {
    const totalScalesStart = 'Hay un total de ';
    const totalScalesEnd = ' de vuelos con escala. Son los siguientes:';
    const noScaleString = 'No hay vuelos con escalas.';

    var total = 0
    for (let scaleIndexFlight of flights) {
        if (scaleIndexFlight.scale) {
            ++total;
        }
    }
    if (total !== 0) {
        console.log(totalScalesStart + total + totalScalesEnd);
        for (let flight of flights) {
            if (flight.scale) {
                console.log(originFlightString + flight.from + destinyString + flight.to + costString + flight.cost + pointString);
            }
        }
    } else {
        console.log(noScaleString)
    }

}
function lastFlights() {
    const fiveLastFlights = 'Los últimos 5 vuelos de hoy son:';
    const idString = 'Id: ';
    const destinateTo = ' destinado a ';
    console.log(fiveLastFlights);
    let index = flights.length - 5;
    let listalastFlights = flights.slice(index);
    for (let i in listalastFlights) {
        let id = listalastFlights[i].id;
        let to = listalastFlights[i].to;
        console.log(idString + id + destinateTo + to);
    }
}