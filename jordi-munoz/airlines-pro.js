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

    { id: 10, to: 'Tel-Aviv', from: 'Madrid', cost: 150, scale: false } ];

var bienvenida = prompt('Hola, indique su nombre:');

function airlines() { 
    if (!isNaN(bienvenida) && bienvenida != null && bienvenida != "") { 
        console.log('Debe introducir un nombre.');
        return false;
    } else {
        console.log('Bienvenido/a ' + bienvenida);
    }

    for (let i = 0; i < flights.length; i++) { 
        var escala = '';
        if (flights[i].scale === true) {
            escala = ' y realiza escala.';
        } else {
            escala = ' y no realiza ninguna escala.';
        }
        console.log('El vuelo con origen: ' + flights[i].from + ', y destino: ' + 
        flights[i].to + ', tiene un coste de ' + flights[i].cost + '€' + escala);
    }

    var sumaCost = 0;
    for (let i = 0; i < flights.length; i++) { 
        sumaCost += flights[i].cost;
    }
    var media = sumaCost / flights.length;
    console.log('El coste medio de los vuelos es de ' + media.toFixed(2) + '€');

    var arrScales = []; 
    for (let i = 0; i < flights.length; i++) {
        if (flights[i].scale === true) {
            arrScales.push(flights[i].scale);
        }
    }
    console.log('Hay ' + arrScales.length + ' vuelos que efectúan escalas.');

    var arrLast = flights.slice(flights.length - 5); 
    console.log('Los últimos vuelos del día son:');
    for (let i = 0; i < arrLast.length; i++) {
        console.log(arrLast[i].to);
    }
}
airlines();  

var adminUserExit = prompt('Para entrar como Administrador escriba "admin", y como Usuario "user". Para salir escriba "exit".');
if (adminUserExit === 'admin') {
    admin();
} else if (adminUserExit === 'user') {
    user();
} else if (adminUserExit === 'exit') {
    console.log('Gracias y vuelva pronto!');
}

// modo admin
function admin() { 
    var selectAdd = confirm('¿Quiere añadir más vuelos?');
    if (selectAdd === true) { 
        return add();
    } else {
        var selectDel = confirm('¿Quiere cancelar algún vuelo?');  
    }

    //activar función del para borrar vuelos
    if (selectDel === true && flights.length > 0) { 
        return del();
    } else if (selectDel === true && flights.length === 0) {
        alert('No existen vuelos para eliminar');
    } else {
        return false;
    } 
}        

//modo usuario
function user() { 
    var flightsSelect = [];
    var precioIgual = prompt('Para buscar vuelos de un importe, indíquelo a continuación:');
    for (let i = 0; i < flights.length; i++) { 
        if (flights[i].cost == precioIgual) {
            flightsSelect.push(flights[i]);
        }
    }
    var precioMas = prompt('Para buscar vuelos de mayor importe, indíquelo a continuación:');
    for (let i = 0; i < flights.length; i++) { 
        if (flights[i].cost > precioMas && precioMas != null) {
            flightsSelect.push(flights[i]);
        }
    }
    var precioMenos = prompt('Para buscar vuelos de menor importe, indíquelo a continuación:');
    for (let i = 0; i < flights.length; i++) { 
        if (flights[i].cost < precioMenos) {
            flightsSelect.push(flights[i]);
        }
    }
    console.log('Estos son los vuelos seleccionados: ');
    for (let i = 0; i < flightsSelect.length; i++) {
        var escala = '';
        if (flightsSelect[i].scale === true) {
            escala = ' y realiza escala.';
        } else {
            escala = ' y no realiza ninguna escala.';
        }
        console.log('Vuelo con ID ' + flightsSelect[i].id + ' , con origen: ' + flightsSelect[i].from + ', y destino: ' + 
        flightsSelect[i].to + ', tiene un coste de ' + flightsSelect[i].cost + '€' + escala);
    }
    var compraId = prompt('Indique el nº de ID del vuelo para efectuar la compra.');
    for (let i = 0; i < flights.length; i++) { 
        if (flights[i].id == compraId) {
            alert('Gracias por su compra, vuelva pronto!');
        } 
    }
}

    
function add() {
    var newFligth = {};
    var id = prompt('Indique el nº de ID:');
    var to = prompt('Indique un destino:');
    var from = prompt('Indique el origen:');
    var cost = prompt('Indique el coste del vuelo:');
    var scale = confirm('¿El vuelo tiene alguna escala?');
    newFligth = {id: id, to: to, from: from, cost: cost, scale: scale};
    flights.push(newFligth);
    if (flights.length < 16) {
        admin();
    } else {
        alert('No puede pasar de 15 vuelos.')
        del();
    }
}

function del() {
    var delId = prompt('Indique el ID para eliminar un vuelo');
    var posId = 0;
    for (let i = 0; i < flights.length; i++) {
        if (flights[i].id === delId) {
            posId = indexOf(flights[i]);
        }
    }
    flights.splice(posId, 1);
    admin();
}