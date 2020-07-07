//'use strict';

function airlines() {
    welcome();
    allFligths();
    averageCost();
    scaleFlights();
    lastDestinations();
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

function allFligths() {
    var flightsEasyInfo = '';

    for (i = 0; i < flights.length; i++) {
        if (flights[i].scale) {
            flightsEasyInfo += "\n El vuelo con origen " + flights[i].from + " y destino " + flights[i].to + ", tiene un coste de " + flights[i].cost + " euros y realiza alguna escala.";
        } else {
            flightsEasyInfo += "\n El vuelo con origen " + flights[i].from + " y destino " + flights[i].to + ", tiene un coste de " + flights[i].cost + " euros y no realiza ninguna escala.";
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

airlines();