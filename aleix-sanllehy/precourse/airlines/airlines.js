function airlines() {
	var username = "";
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

	function filler() { console.log('\n'); }	// Función simple para añadir línea nueva en el log

	function greetings() {	// Función que únicamente pide el nombre al usuario y lo devuelve por pantalla
		var username = prompt("¡Bienvienido a Skylab Airlines!\nPor favor, introduce tu nombre:")
		console.log("¡Bienvenid@, " + username + "!");
		filler();
	}

	function showAllFlights() {	// Función que lista todos los vuelos del array flights. La descripción será distinta según la condición scale de cada elemento
		console.log("La lista de vuelos de Skylab Airlines programados para hoy es la siguiente:");
		for (i = 0; i < flights.length; i++) {
			if (flights[i].scale) {
				console.log("El vuelo con origen " + flights[i].from + " y destino " + flights[i].to + " tiene un precio de " + flights[i].cost.toFixed(2) + " €. Este vuelo realiza al menos 1 escala.")
			}
			else {
				console.log("El vuelo con origen " + flights[i].from + " y destino " + flights[i].to + " tiene un precio de " + flights[i].cost.toFixed(2) + " €. Este vuelo no realiza escalas.")
			}
		}
		filler();
	}

	function avgFlightCost() {	// Suma el valor cost de todos los elementos en flight, calcula el precio medio según la longitud del array y devuelve el resultado por pantalla
		var totalCost = 0, avgCost = 0;
		for (i = 0; i < flights.length; i++) {
			totalCost += flights[i].cost;
		}
		avgCost = totalCost / flights.length;
		console.log('El precio medio del importe de los vuelos disponibles es: ' + avgCost.toFixed(2) + ' €')
		filler();
	}

	function totalDirectFlights() {	// Función que cuantifica y devuelve por pantalla el número de elementos en el array con la condición de scale verdadera
		var directFlights = 0;
		for (i = 0; i < flights.length; i++) {
			if (flights[i].scale) {
				directFlights++;
			}
		}
		console.log("Hay " + directFlights + " vuelo/s programado/s para hoy con al menos una escala.");
		filler();
	}

	function lastFiveFlights() {	// Función que almacena en un array y transforma a string los últimos 5 elementos del array principal
		lastFlights = [];
		console.log("Los últimos cinco destinos de los vuelos programados para hoy son los siguientes:");
		for (i = (flights.length) - 5; i < (flights.length); i++) {
			lastFlights.push(flights[i].to);
		}
		lastFlights = lastFlights.join(', ');
		console.log(lastFlights);
		filler();
	}

	greetings();	// Llamada de todas las funciones declaradas dentro de la función principal
	showAllFlights();
	avgFlightCost();
	totalDirectFlights();
	lastFiveFlights();
}
airlines();	// Llamada a la función principal airlines