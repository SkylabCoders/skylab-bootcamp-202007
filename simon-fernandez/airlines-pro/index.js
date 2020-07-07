/*
Programa una interfaz de usuario para una aerolínea (por terminal...). Esta aerolínea dispondrá de 10 vuelos para el dia de hoy, para empezar, estos vuelos deben estar declarados de manera global, cuando se llame a la función:
Se preguntará por el nombre de usuario y dará la bienvenida.
El usuario visualizará todos los vuelos disponibles de una forma amigable : El vuelo con origen: Barcelona, y destino: Madrid tiene un coste de XXXX€ y no realiza ninguna escala.
A continuación, el usuario verá el coste medio de los vuelos.
También podrá ver cuántos vuelos efectúan escalas.
Sabiendo que los últimos 5 vuelos (los últimos 5 ID's) son los últimos del día, muestra al usuario sus destinos.
 
 
PRO:
Después de ver toda la información el programa pedirá al usuario si es ADMIN/USER, dependiendo de la elección, el programa se comportará de la siguiente manera:
Si eres ADMIN, la función debería permitir:
Poder crear, más vuelos, pidiendo la información por prompt(), sin poder pasar de 15 vuelos, si se intenta introducir uno más, saltará un alert().
Poder eliminar vuelos mediante el ID.
Si eres USER la función debería permitir:
Buscar por precio (más alto, más bajo o igual), el programa debería mostrar los datos de los vuelos encontrados e, indicando al programa el ID, el programa responderá: "Gracias por su compra, vuelva pronto."

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
console.log(flights[0].to); //output: Bilbao
*/
//shows the flights array properly
function showFlights(desiredArray) {
    for (var i = 0; i < desiredArray.length; i++) {
        var scale = "";
        if (desiredArray[i].scale == false) {
            scale = " and has no scales.";
        }
        else {
            count++;
        }
        average += desiredArray[i].cost;
        console.log("The flight with ID " + i + " from " + desiredArray[i].from + " and destiny " + desiredArray[i].to + " has a cost of " + desiredArray[i].cost + "€" + scale + "\n");
    }
}
//user select role
function roles() {
    var role = prompt("Select your role:\n1= Admin\n2= User");
    switch (parseInt(role)) {
        case 1:
            adminRole();
            break;
        case 2:
            userRole();
            break;
        default:
            roles();
    }

}
//Admin role call user wanted function 
function adminRole() {
    var check = "YES";
    while (check == "YES") {
        function adminRoleModification() {
            var quest = prompt("What modification do you want to do?\nAdd = To add new flights\nRemove = To remove existing flights").toUpperCase();
            switch (quest) {
                case "ADD":
                    addFlight();
                    break;
                case "REMOVE":
                    removeFlight();
                    break;
                default:
                    adminRoleModification()
                    break;
            }
        }
        adminRoleModification();

        check = prompt("type 'Yes' to continue the edit, blank or other word will close the program").toUpperCase();
    }
}
//Add flights by Admin users
function addFlight() {
    var limit = flights.length;
    if ((limit - 1) < 15) {
        var idFlight = limit;
        var toFlight
        toFlight = prompt("Which destiny?");
        while (!toFlight) {
            alert("Please introduce a value")
            toFlight = prompt("Which destiny?");
        }
        var fromFlight
        fromFlight = prompt("Which origin?");
        while (!fromFlight) {
            alert("Please introduce a value")
            fromFlight = prompt("Which origin?");
        }
        var priceFlight
        priceFlight = parseFloat(prompt("Whats is the price?"));
        while (!priceFlight) {
            alert("Please introduce a value")
            priceFlight = parseFloat(prompt("Whats is the price?"));
        }
        var scaleFlight
        function scaleFlightCheck() {
            scaleFlight = prompt("Does have scales? yes/no").toUpperCase();
            while (!scaleFlight) {
                alert("Please introduce a proper value")
                scaleFlight = prompt("Does have scales?").toUpperCase();
            }
            switch (scaleFlight) {
                case "YES":
                    scaleFlight = true;
                    break;
                case "NO":
                    scaleFlight = false;
                    break;

                default:
                    scaleFlightCheck();
                    break;
            }
        }
        scaleFlightCheck();
        flights[limit] = { id: idFlight, to: toFlight, from: fromFlight, cost: priceFlight, scale: scaleFlight };
        showFlights(flights);
    }
    else {
        alert("Limit of flights reached");
    }
}
//remove flight by Admin users
function removeFlight() {
    console.log("quitar");
    var idRemoveFlight = prompt("Introduce the Id of the flight that you want to remove");
    while (!idRemoveFlight) {
        alert("Please introduce a value")
        idRemoveFlight = parseInt(prompt("Introduce the Id of the flight that you want to remove"));
    }
    if (isNaN(idRemoveFlight)) {
        alert("Please enter a number")
        removeFlight();
    }
    else {
        flights.splice(idRemoveFlight, 1);
    }
    showFlights(flights);
}
//User role search by price 
function userRole() {
    var userAction;
    while (!userAction) {
        userAction = prompt("Which action do you want to do\nBuy\nSearch").toUpperCase();
        switch (userAction) {
            case "BUY":
                buyFlight();
                break;
            case "SEARCH":
                conditionSearchFlight();
                break;
            default:
                alert("Value not valid");
                userAction = "";
                break;
        }
    }
}
//buy flight by id
function buyFlight() {
    var buyChecker = true;

    while (buyChecker) {
        var electionBuy = prompt("Insert the desired flight ID which you want to buy");

        if (flights.length >= parseInt(electionBuy)) {
            buyChecker = false;
            alert("Thanks for your buy, we hope see you soon. Good flight!");
        }
        else {
            alert("Please introduce a valid ID");
        }

    }
}
//ask the user which search want to do
function conditionSearchFlight() {
    var conditionSearch = true;
    while (conditionSearch) {
        var searchFlightValue = prompt("Search for:\nHiguer\nLower\nEqual").toUpperCase();
        //send the proper operator to the function searchFlight
        switch (searchFlightValue) {
            case "HIGUER":
                searchFlight("<");
                conditionSearch = false;
                break;
            case "LOWER":
                searchFlight(">");
                conditionSearch = false;
                break;
            case "EQUAL":
                searchFlight("=");
                conditionSearch = false;
                break;
            default:
                alert("Value not valid");
                break;
        }
    }
}
//uses the operator sent by the user
function searchFlight(searchFlightOperator) {
    //search the equal cost
    if (searchFlightOperator == "=") {
        var desiredPrice;
        while (!desiredPrice) {
            desiredPrice = parseInt(prompt("desired prince?"));
        }
        //search the desired price on the flights array
        var foundId = false;
        for (var i = 0; i < flights.length; i++) {
            if (flights[i].cost == desiredPrice) {
                foundId = true;
                var scale = "";
                if (flights[i].scale == false) {
                    scale = " and has no scales.";
                }
                else {
                    count++;
                }
                average += flights[i].cost;
                console.log("The flight with ID " + i + " from " + flights[i].from + " and destiny " + flights[i].to + " has a cost of " + flights[i].cost + "€" + scale + "\n");
            }
        }
        if (foundId == false) {
            console.log("no flight found with this price");
        }
    }
    //sort the flights by higuer price
    else if (searchFlightOperator == "<") {
        var flightsCopy = flights;
        var searchChecker;
        while (flightsCopy.length > 0) {
            if (flightsCopy.length == 1) {
                console.log("The flight with ID " + flightsCopy[0].id + " from " + flightsCopy[0].from + " and destiny " + flightsCopy[0].to + " has a cost of " + flightsCopy[0].cost + "€" + scale + "\n");
                flightsCopy.splice(0, 1);
            }
            else {
                for (let i = 0; i < flightsCopy.length; i++) {
                    searchChecker = true;
                    for (let j = 0; j < flightsCopy.length; j++) {
                        if (flightsCopy[j].cost > flightsCopy[i].cost) {
                            searchChecker = false;
                        }
                        debugger;
                    }
                    if (searchChecker) {
                        var scale = "";
                        if (flightsCopy[i].scale == false) {
                            scale = " and has no scales.";
                        }
                        console.log("The flight with ID " +  flightsCopy[i].id + " from " + flightsCopy[i].from + " and destiny " + flightsCopy[i].to + " has a cost of " + flightsCopy[i].cost + "€" + scale + "\n");
                        flightsCopy.splice(i, 1);
                    }
                }

            }
        }

    }
    //sort flight by lower price
    else {
        var flightsCopy = flights;
        var searchChecker;
        while (flightsCopy.length > 0) {
            if (flightsCopy.length == 1) {
                console.log("The flight with ID " + flightsCopy[0].id + " from " + flightsCopy[0].from + " and destiny " + flightsCopy[0].to + " has a cost of " + flightsCopy[0].cost + "€" + scale + "\n");
                flightsCopy.splice(0, 1);
            }
            else {
                for (let i = 0; i < flightsCopy.length; i++) {
                    searchChecker = true;
                    for (let j = 0; j < flightsCopy.length; j++) {
                        if (flightsCopy[j].cost < flightsCopy[i].cost) {
                            searchChecker = false;
                        }
                    }
                    if (searchChecker) {
                        var scale = "";
                        if (flightsCopy[i].scale == false) {
                            scale = " and has no scales.";
                        }
                        console.log("The flight with ID " +  flightsCopy[i].id + " from " + flightsCopy[i].from + " and destiny " + flightsCopy[i].to + " has a cost of " + flightsCopy[i].cost + "€" + scale + "\n");
                        flightsCopy.splice(i, 1);
                    }
                }

            }
        }
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
    { id: 10, to: 'Tel-Aviv', from: 'Madrid', cost: 150, scale: false }
];
var name, average = 0, count = 0, role;
//ask for the user name
name = prompt("Whats is your name?");
//check if a name has been introduced
while (!name) {
    alert("Please introduce a name")
    name = prompt("Whats is your name?");
}
//show the name
console.log("Welcome " + name);
showFlights(flights);
//shows the prize average has a limit of 2 decimals
console.log("The average of prize of the flights are " + (average / (flights.length + 1)).toFixed(2));
//shows the number of flight with scales
console.log(count + " flights has scales");
//Shows the last 5 flights
console.log("Destinys for the last 5 flights are: \n")
for (var k = flights.length - 1; k > flights.length - 6; k--) {
    console.log(flights[k].to + "\n");
}
roles();

