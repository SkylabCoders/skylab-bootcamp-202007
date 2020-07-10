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
function roles() {
    role = parseInt(prompt("Select your role:\n1= Admin\n2= User"))
    debugger;
    switch (role) {
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
function adminRole(params) {
    console.log("admin prueba")
}
function userRole(params) {
    console.log("user prueba")
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
//shows the array properly
for (var i = 0; i < flights.length; i++) {
    var scale = "";
    if (flights[i].scale == false) {
        scale = " and has no scales.";
    }
    else {
        count++;
    }
    average += flights[i].cost;
    console.log("The flight from " + flights[i].from + " and destiny " + flights[i].to + " has a cost of " + flights[i].cost + "€" + scale + "\n");
}
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

