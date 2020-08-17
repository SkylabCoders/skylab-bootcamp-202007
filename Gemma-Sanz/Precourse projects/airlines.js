// Bienvenida
var name = prompt('Introduzca su nombre.');
console.log(`Bienvenido ${name}.`);

var start = prompt('Desea ver los últimos vuelos de hoy?');

//Datos de vuelos
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

var scaleSI = 0;
var costePromTotal = 0;

//Imprimir vuelos con destino y coste promedio correspondiente y escala de los vuelos ya hechos
for (i = 0; i < 5; i++) {
	var numVuelos = 1;
	var costeProm = flights[i].cost / numVuelos;
	let scale = flights[i].scale;
	if (flights[i].scale === true) {
		scale = 'tiene almenos UNA escala';
		scaleSI = scaleSI + 1;
	} else {
		scale = 'NO tiene ninguna escala';
	}
	costePromTotal = costePromTotal + flights[i].cost;
	console.log(
		`El vuelo con origen: ${flights[i].to} y destino: ${flights[i].from} tiene un coste promedio de ${costeProm}€ y ${scale}.`
	);
}

console.log(`Los últimos vuelos de hoy son los siguientes: `);
//Imprimir vuelos con destino y coste promedio correspondiente y escala de los vuelos que aún quedan
for (i = 5; i < 10; i++) {
	var numVuelos = 1;
	var costeProm = flights[i].cost / numVuelos;

	let scale = flights[i].scale;
	if (flights[i].scale === true) {
		scale = 'tiene almenos UNA escala';
		scaleSI = scaleSI + 1;
	} else {
		scale = 'NO tiene ninguna escala';
	}
	costePromTotal = costePromTotal + flights[i].cost;
	console.log(
		`   El vuelo con origen: ${flights[i].to} y destino: ${flights[i].from} tiene un coste promedio de ${costeProm}€ y ${scale}.`
	);
}
console.log(`El coste promedio de los vuelos es de ${costePromTotal}€`);
console.log(`En total ${scaleSI} vuelos realizan escala.`);
