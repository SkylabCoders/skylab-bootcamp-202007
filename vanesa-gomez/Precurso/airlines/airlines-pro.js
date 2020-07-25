

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

    let scaleDescription = '';
    let name = prompt('¿Cuál es tu nombre?');

function airlinePro() {
    let sumCost = 0;
    let scaleNum = 0;
    let lastFiveFlights = [];
    console.log('¡Bienvenid@ ' + name + '!');
    
    for(let i = 0; i < flights.length; i++) {
        if(flights[i].scale === true){
            scaleNum += 1;
            scaleDescription = 'y realiza una escala';
        } else {
            scaleDescription = 'y no realiza escalas';
        }
        console.log(`El vuelvo con origen ${flights[i].to} y destino ${flights[i].from}, tiene un coste de ${flights[i].cost}€ ${scaleDescription}.`);
        
        sumCost += flights[i].cost;
        
        if(i >= 6){
        lastFiveFlights.push(flights[i].from);
        }
    }   
    let averageCost = sumCost / flights.length

    console.log(`El precio medio de los vuelos es de ${averageCost.toFixed(2)}€`);
    console.log(`El número de vuelos que realizan escala son ${scaleNum}`);
    console.log(`Los últimos vuelos del día tienen como destino: ${lastFiveFlights.join(', ')}`);

let checkUser = accessPermission();

// si es ADMIN

function accessPermission() {
    var usuario = prompt('Para continuar indica si eres ADMIN (A) o USER (U)').toUpperCase();
    if (usuario === 'A') {
        adminActions();
    } else if (usuario === 'U') {
        userActions();
        console.log()
        buyFlight();
    } else {
        accessPermission();
    }
}

function adminActions(){
    let adminAction = prompt('Por favor indique la acción que desee: Ver vuelos (V), Crear vuelo (C), Eliminar vuelo (E), Salir (S).').toUpperCase();
    
        switch(adminAction) {
            case 'V':
                console.log(flights);
                adminActions();
                break;
            case 'E':
                deleteFlight();
                adminActions();
                break;
            case 'C':
                if(flights.length < 16) {
                    createFlight();
                } else {
                    alert('Se ha llegado al máximo de vuelos');
                }
                adminActions();
                break;
            case 'S':
                break;
            default: 
                adminActions();
                break;
        }
    } 
}



function createFlight(){
    var to = '';
    var from = '';
    var cost = 0;
    var scale = false;
    
    if(flights.length > 16){
        alert('Se ha llegado al máximo de vuelos');
    } else {
        to = prompt('Introduzca destino');
        from = prompt('Introduzca origen');
        cost = Number(prompt('Introduzca el precio del vuelo'));
        scaleAction = prompt('Indique si tiene escala Y/N').toUpperCase();
        
        if(scaleAction === 'Y'){
            scale = true;
        } else if (scaleAction === 'N'){
            scale = false;
        } else {
            alert('Por favor indique Si el vuelo tiene escala (Y) o si el vuelo no tiene escala (N)');
        }
        
        newFlight = {
            id : createId(),
            to: to,
            from: from,
            cost: cost,
            scale: scale,
        }
        
        flights.push(newFlight);
        console.log(flights);
    }
}



function createId(){
    let id;
    let flightsLength = flights.length;
    if(flights.length < 10){
        id = Number('0' + flightsLength.toString());
    } else {
        id = flights.length;
    }
    return id;
}

function deleteFlight(){
    let idToRemove = prompt('Indique un ID a eliminar');
    let id = Number(idToRemove)
    // buscamos el objeto del vuelo gracias al ID que nos han pasado
    for(let i = 0; i < flights.length; i++) {
        if (flights[i].id === id) {
            flights.splice(i, 1);
        }
    }
    console.log(flights)
}
    
function userActions(){
    let filterFlights = prompt('Indique un importe y se le enseñaran los vuelos filtrados por precio');
    let price = Number(filterFlights);
    let equalPrice = [];
    let minorPrice = [];
    let majorPrice = [];
    // buscamos los vuelos filtrados por 'Mas alto' , 'Mas bajo', 'Igual'.
    for(let i = 0; i < flights.length; i++) {
        if (flights[i].cost === price) {
            equalPrice.push(flights[i]);
        }

        if (flights[i].cost < price) {
            minorPrice.push(flights[i]);
        }

        if (flights[i].cost > price) {
            majorPrice.push(flights[i]);
        }
    }
    console.log(`LOS VUELOS CON UN IMPORTE IGUAL QUE ${price}€ SÓN:`);
    console.log('-------------------');
    equalPrice.forEach(flights => {
        const { id, to, from, cost } = flights;
        console.log(`ID: ${id}. El vuelvo con origen ${to} y destino ${from}, tiene un coste de ${cost}€ ${scaleDescription}.`);
    })

    console.log(`LOS VUELOS CON UN IMPORTE MAYOR QUE ${price}€ SÓN:`);
    console.log('-------------------');
    majorPrice.forEach(flights => {
        const { id, to, from, cost } = flights;
        console.log(`ID: ${id}. El vuelvo con origen ${to} y destino ${from}, tiene un coste de ${cost}€ ${scaleDescription}.`);
    })
    
    console.log(`LOS VUELOS CON UN IMPORTE MENOR QUE ${price}€ SÓN:`);
    console.log('-------------------');
    minorPrice.forEach(flights => {
        const { id, to, from, cost } = flights;
        console.log(`ID: ${id}. El vuelvo con origen ${to} y destino ${from}, tiene un coste de ${cost}€ ${scaleDescription}.`);
    })

}       

function buyFlight(){
    let idFlight = prompt ('Por favor indique la ID del vuelo que desee comprar');
    let id = Number(idFlight);

    for(let i = 0; i < flights.length; i++){
        if (flights[i].id === id){
            console.log(`${name}, tu próximo destino es: ${flights[i].to}. Gracias por tu compra, vuelve pronto!`);

        }
    }
}

airlinePro();
