var flights = [
    { id: 00, to: "Barcelona", from: "Madrid", cost: 1600, scale: false },

    { id: 01, to: "Londrina", from: "Barcelona", cost: 700, scale: false },

    { id: 02, to: "Dubai", from: "Madrid", cost: 1100, scale: true },

    { id: 03, to: "Paris", from: "Barcelona", cost: 210, scale: false },

    { id: 04, to: "Roma", from: "Barcelona", cost: 150, scale: false },

    { id: 05, to: "London", from: "Madrid", cost: 200, scale: false },

    { id: 06, to: "Milano", from: "Barcelona", cost: 90, scale: false },

    { id: 07, to: "Tokyo", from: "Madrid", cost: 1500, scale: true },

    { id: 08, to: "Shangai", from: "Barcelona", cost: 800, scale: true },

    { id: 09, to: "Brussels", from: "Barcelona", cost: 150, scale: true },

    { id: 10, to: "Amsterdam", from: "Madrid", cost: 150, scale: false },
];

var name = prompt("Introduzca su nombre:");
console.log(`Bienvenido/a ${name}`);

for (var i = 0; i < flights.length; i++) {
    if (flights[i].scale === true) {
        console.log(
            `El vuelo con origen ${flights[i].from} y destino ${flights[i].to} tiene un precio de ${flights[i].cost} € y realizará una escala`
        );
    }
    console.log(
        `El vuelo con origen ${flights[i].from} y destino ${flights[i].to} tiene un precio de ${flights[i].cost} € y no realizará ninguna escala`
    );
}

function precioMedio() {
    var precioMed = 0;
    for (var i = 0; i < flights.length; i++) {
        precioMed += flights[i].cost;
    }
    console.log(
        `El precio medio de todos los vuelos es de ${(
      precioMed / flights.length
    ).toFixed(2)}€`
    );
}

function escalas() {
    var vuelosEscala = [];
    for (var i = 0; i < flights.length; i++) {
        if (flights[i].scale == true) {
            vuelosEscala.push(flights[i].to);
        }
    }
    console.log(
        `Los vuelos con escala son los que tienen destino: ${vuelosEscala}`
    );
}

function ultimosVuelos() {
    var lastVuelos = [];
    for (var i = flights.length - 1; i > flights.length - 6; i--) {
        lastVuelos.push(flights[i].to);
    }
    console.log(`Los últimos vuelos son los que tienen destino: ${lastVuelos}`);
}

precioMedio();
escalas();
ultimosVuelos();