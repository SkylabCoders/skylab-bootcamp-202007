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

eliminar();
console.log(flights);

function eliminar() {
    var elim = prompt('Introduzca el ID del vuelo que desea eliminar:');
    while (isNaN(elim) || elim == '') eliminar();
    if (elim == null) crearEliminar();
    
    elim = Number(elim);
    console.log(elim);


    var flightsEliminar = [];
    
    for (flight of flights) {
        flightsEliminar.push(flight.id)
    }

    if (flightsEliminar.indexOf(elim) !== -1) {
        flights = flights.filter(function(flight) {
            return flight.id !== elim; 
        });
        addEliminar();
    } else {
        alert('El ID introducido no existe')
    }


    
    

    
    


    
}


function addEliminar() {
    var elimMas = prompt('¿Desea eliminar otro vuelo?', 'S/N').toLowerCase();
    switch (elimMas) {
        case 's':
            eliminar();
            break;
        case 'n':
            console.log('Los vuelos han sido eliminados.');
            console.log(flights);
            break;
        default:
            addEliminar();
            break;
    }
}


/*var cars = [{
    'brand': 'Ford',
    'model' : 'Focus'
  }, 
  {
    'brand': 'Volkswagen',
    'model' : 'Golf'
  }, 
  {
    'brand': 'Honda',
    'model' : 'Civic'
  }, 
  {
    'brand': 'Seat',
    'model' : 'León'
}];
 
var cars = cars.filter(function(car) {
    return car.brand !== 'Honda'; 
});
 
console.log(cars);*/



