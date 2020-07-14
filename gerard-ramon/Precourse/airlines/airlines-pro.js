function airlines() {
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

    //var userName = prompt("Introduce tu nombre:");
    //console.log(`Bienvenido ${userName}`);

    console.log(flights);

    printFlights();
    console.log("_________");

    console.log(`El coste medio de todos los vuelos es: ${avgCost().toFixed(2)}`);
    console.log("_________");

    console.log(`Hay un total de ${countScales()} vuelos con escala`);
    console.log("_________");

    printLast();

    var permission = prompt("Introduce si eres ADMIN o USER").toLowerCase();

    if (permission == "admin") {
        console.log("Accediendo como admin...")
        adminUI();
    } else {
        console.log("Accediendo como usuario...")
        userUI();
    }


    // #################################
    // ######### FUNCIONES #############
    // #################################
    function printFlights() {
        var strEscala = "";
        for (i in flights) {
            if (flights[i].scale == true) {
                strEscala = "Realiza escalas.";
            } else {
                strEscala = "No realiza ninguna escala.";
            }
            console.log(`ID: ${flights[i].id} - El vuelo con origen: ${flights[i].from}, y destino ${flights[i].to} tiene un coste de ${flights[i].cost}, ${strEscala}`);
        }
    }

    function printSpecificFlights(speficicFlights) {
        for (var i = 0; i < speficicFlights.length; i++) {
            console.log(`ID: ${speficicFlights[i].id} - Origen: ${speficicFlights[i].from} Destino ${speficicFlights[i].to} Coste de ${speficicFlights[i].cost}`);
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

    function adminUI() {
        var _id = flights.length - 1;
        var _to = "";
        var _from = "";
        var _cost = 0;
        var _scale = false;
        var keepAsking = true;
        var tempFlight;
        while (keepAsking && _id <= 15) {

            if ((prompt(`Deseas introducir un nuevo vuelo? Hay ${_id}/15 guardados (s/n)`, "s").toLowerCase() == "s")) {
                keepAsking = true;
                _id++;
                if (_id > 15) {
                    id--;
                    alert("No puedes introducir mas vuelos. Has llegado al máximo");
                } else {
                    _to = prompt(`Que destino tiene el vuelo n ${_id}?`, "Introduce destino");
                    _from = prompt(`Que origen tiene el vuelo n ${_id}?`, "Introduce origen");
                    _cost = prompt(`Que coste tiene el vuelo ${_id}?`, "Introduce coste");
                    if ((prompt(`El vuelo ${_id} hace escalas? (s/n)`, "s").toLowerCase()) == "s") {
                        _scale = true;
                    } else {
                        _scale = false;
                    }
                    tempFlight = { id: _id, to: _to, from: _from, cost: _cost, scale: _scale };
                    flights.push(tempFlight);
                    console.log("Vuelo añadido:");
                }
            } else {
                keepAsking = false;
            }
        }
        console.log("______________");
        console.log("El nuevo registro de vuelos es:")
        printFlights();

        keepAsking = true;
        var elim = 0;
        while (keepAsking) {
            if ((prompt(`Deseas eliminar algun vuelo? Hay ${_id}/15 guardados (s/n)`, "s").toLowerCase() == "s")) {
                elim = parseInt(prompt(`Que vuelo deseas eliminar? Hay ${_id}/15`, "Introduce id de vuelo"));
                var position = flights.map(function(item) { return item.id; }).indexOf(elim);
                if (position === -1) {
                    console.log("No se ha encontrado un vuelo con ese ID");
                } else {
                    flights.splice(position, 1);
                    console.log("Eliminado el vuelo con la id " + position);
                    console.log("_________________");
                    console.log("Nuevo registro de vuelos:");
                    printFlights();
                }
            } else {
                keepAsking = false;
            }
        }
    }

    function userUI() {
        var entryValue = "";
        var entryAction = "";
        var bucle = true;
        var flightID = 0;
        do {
            entryValue = parseInt(prompt("Introduce un valor"));
            entryAction = prompt("Deseas buscar vuelos con un precio mayor, menor, o igual al valor anterior?.\nIntroduce 'mayor', 'menor' o 'igual'").toLowerCase();
            switch (entryAction) {
                case "menor":
                    if (findCheaperFlights(entryValue)) {
                        bucle = false;
                    }
                    break;
                case "mayor":
                    if (findMoreExpensive(entryValue)) {
                        bucle = false;
                    }
                    break;
                case "igual":
                    if (findAsExpensive(entryValue)) {
                        bucle = false;
                    }
                    break;
                default:
                    console.log("Please enter a valid option.");
            }
        } while (bucle);
    }

    function findCheaperFlights(value) {
        var foundFlights = [];
        for (var i = 0; i < flights.length; i++) {
            if (flights[i].cost < value) {
                foundFlights.push(flights[i]);
            }
        }

        if (foundFlights.length === 0) {
            return false;
        }

        printSpecificFlights(foundFlights);

        do {
            var buyFlight = parseInt(prompt("Enter the ID from the flight do you want to buy. Or -1 to exit"));
            var buyIndex = foundFlights.map(function(item) { return item.id; }).indexOf(buyFlight);
        } while (buyIndex === -1 && buyFlight !== -1);

        if (buyFlight === -1) {
            console.log("No se han encontrado vuelos con ese criterio de busqueda");
            return false;
        }

        console.log(`Has elegido el vuelo con ID ${buyFlight}`);
        console.log(`Origen: ${foundFlights[buyIndex].from}, Destino: ${foundFlights[buyIndex].to}, Coste: ${foundFlights[buyIndex].cost}`);
        return true;
    }

    function findMoreExpensive(value) {
        var foundFlights = [];
        for (var i = 0; i < flights.length; i++) {
            if (flights[i].cost > value) {
                foundFlights.push(flights[i]);
            }
        }

        if (foundFlights.length === 0) {
            console.log("No se han encontrado vuelos con ese criterio de busqueda");
            return false;
        }

        printSpecificFlights(foundFlights);

        do {
            var buyFlight = parseInt(prompt("Enter the ID from the flight do you want to buy. Or -1 to exit"));
            var buyIndex = foundFlights.map(function(item) { return item.id; }).indexOf(buyFlight);
        } while (buyIndex === -1 && buyFlight !== -1);

        if (buyFlight === -1) {
            return false;
        }

        console.log(`Has elegido el vuelo con ID ${buyFlight}`);
        console.log(`Origen: ${foundFlights[buyIndex].from}, Destino: ${foundFlights[buyIndex].to}, Coste: ${foundFlights[buyIndex].cost}`);
        return true;
    }

    function findAsExpensive(value) {
        var foundFlights = [];

        for (var i = 0; i < flights.length; i++) {
            if (flights[i].cost === value) {
                foundFlights.push(flights[i]);
            }
        }

        if (foundFlights.length === 0) {
            return false;
        }

        printSpecificFlights(foundFlights);

        do {
            var buyFlight = parseInt(prompt("Enter the ID from the flight do you want to buy. Or -1 to exit"));
            var buyIndex = foundFlights.map(function(item) { return item.id; }).indexOf(buyFlight);
        } while (buyIndex === -1 && buyFlight !== -1);

        if (buyFlight === -1) {
            console.log("No se han encontrado vuelos con ese criterio de busqueda");
            return false;
        }

        console.log(`Has elegido el vuelo con ID ${buyFlight}`);
        console.log(`Origen: ${foundFlights[buyIndex].from}, Destino: ${foundFlights[buyIndex].to}, Coste: ${foundFlights[buyIndex].cost}`);
        return true;
    }


    function findCostIndex(value) {
        return flights.map(function(item) { return item.cost; }).indexOf(value);
    }
}