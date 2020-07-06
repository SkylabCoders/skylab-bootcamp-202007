

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

function airline() {
    let sumCost = 0;
    let scaleNum = 0;
    let lastFiveFlights = [];

    let name = prompt('¿Cuál es tu nombre?');
    console.log('¡Bienvenid@ ' + name + '!');
    
    for(let i = 0; i < flights.length; i++) {
        let scaleDescription = '';
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


}

airline();


