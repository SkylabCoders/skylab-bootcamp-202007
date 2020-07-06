//'use strict';

function airlinespro() {
    var typeOfPers;

    welcome();
    allFligths(flights);
    averageCost();
    scaleFlights();
    lastDestinations();
    
    typeOfPers = typeOfPerson();
    if (typeOfPers === 'admin') {
        adminActions();
    } else {
        userActions();
    }
}

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


function welcome() {
    var userName = prompt("Buenos días, ¿cuál es su nombre?");
    window.alert(`¡Bienvenid@ ${userName} a Skylab Airlines!`);
    console.log(`El nombre del usuario es: ${userName}`)
}

function allFligths(flightsArray) {
    var flightsEasyInfo = '';

    for (i = 0; i < flightsArray.length; i++) {
        if (flightsArray[i].scale) {
            flightsEasyInfo += "\n El vuelo con id " + flightsArray[i].id + ", origen " + flightsArray[i].from + " y destino " + flightsArray[i].to + ", tiene un coste de " + flightsArray[i].cost + " euros y realiza alguna escala.";
        } else {
            flightsEasyInfo += "\n El vuelo con id " + flightsArray[i].id + ", origen " + flightsArray[i].from + " y destino " + flightsArray[i].to + ", tiene un coste de " + flightsArray[i].cost + " euros y no realiza ninguna escala.";
        }
    }
    console.log(flightsEasyInfo);
}

function averageCost() {
    var averageCost = 0;

    for (i = 0; i < flights.length; i++) {
        averageCost += flights[i].cost;
    }
    averageCost = Math.round((averageCost / flights.length) * 100) / 100;
    console.log(`El coste promedio de los vuelos de hoy es de ${averageCost} euros`);
}

function scaleFlights() {
    var numScaleFlights = 0;

    for (i = 0; i < flights.length; i++) {
        if (flights[i].scale) {
            numScaleFlights++;
        }
    }
    console.log(`El número de vuelos con escala es de: ${numScaleFlights}`);
}

function lastDestinations() {
    var last5FlightsDest = '';

    for (i = flights.length - 5; i < flights.length - 2; i++) {
        last5FlightsDest += flights[i].to + ",";
    }

    last5FlightsDest += flights[flights.length - 2].to;
    last5FlightsDest += " y " + flights[flights.length - 1].to + ".";

    console.log(`Los 5 últimos vuelos tienen como destino: ${last5FlightsDest}`);
}

function typeOfPerson() {
    var perms = prompt('¿Qué tipo de permisos tienes?: user/admin?');
    return perms;
}

function adminActions() {
    addFlights();
    deleteFlights();
    window.alert('Que tenga un buen día');
}

function addFlights() {
    var addFlight = prompt('¿Desea añadir otro vuelo?: s/n');
    var i = 11;
    var newTo;
    var newFrom;
    var newCost;
    var newScale;
    var newFlight;

    while (flights.length < 15 && addFlight == 's') {
        newTo = prompt('¿Cuál es el nuevo destino?');
        newFrom = prompt('¿Cuál es el nuevo origen?');
        newCost = parseInt(prompt('¿Cuántos euros cuesta el nuevo vuelo?'));
        newScale = prompt('¿Tiene escalas el nuevo vuelo?: s/n');

        if (newScale === 's') {
            newScale = true;
        } else {
            newScale = false;
        }

        newFlight = { id: i, to: newTo, from: newFrom, cost: newCost, scale: newScale };

        flights.push(newFlight);

        i++;
        console.log('Vuelo añadido con éxito');
        allFligths(flights);
        addFlight = prompt('¿Desea añadir otro vuelo?: s/n');
    }

    if (addFlight === 's' && flights.length === 15) {
        window.alert(`No es posible introducir más vuelos`);
    }
}

function deleteFlights() {
    var deleteFlight = prompt('¿Desea eliminar un vuelo?: s/n');
    var idToDelete;

    while (deleteFlight == 's') {
        idToDelete = prompt('¿Cuál es el id del vuelo que desea eliminar?');
        flights.splice(flights.map(function (elem) { return elem.id; }).indexOf(parseInt(idToDelete)), 1);
        console.log('Vuelo eliminado con éxito');
        allFligths(flights);
        deleteFlight = prompt('¿Desea eliminar otro vuelo?: s/n');
    }
}

function userActions() {
    filterFlights();
    buyFlight();
}

function filterFlights() {
    var limit = prompt('¿Cuál es su precio límite? (en euros)');
    var condition = prompt('Indique el tipo de límite: min/max/exacto');
    var flightsFiltered = [];

    if (condition === 'min') {
        for (var i = 0; i < flights.length; i++) {
            if (flights[i].cost > limit) {
                flightsFiltered.push(flights[i]);
            }
        }
    } else if (condition === 'max') {
        for (var i = 0; i < flights.length; i++) {
            if (flights[i].cost < limit) {
                flightsFiltered.push(flights[i]);
            }
        }
    } else {
        for (var i = 0; i < flights.length; i++) {
            if (flights[i].cost === limit) {
                flightsFiltered.push(flights[i]);
            }
        }
    }
    if(flightsFiltered.length === 0){
        console.log('Lo sentimos, no hay ningún vuelo con ese precio exacto');
    } else{
        allFligths(flightsFiltered);
    }
}

function buyFlight() {
    idToBuy = prompt('¿Cuál es el id del vuelo que desea comprar?');
    var flightBought = [];

    flightBought.push(flights[idToBuy]);
    allFligths(flightBought);
    window.alert('Gracias por su compra, vuelva pronto.');
}

airlinespro();