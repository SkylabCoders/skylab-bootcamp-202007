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


function  getName (str){
    var rExp = /^[A-Za-z]+$/;
    var nameL;
    do {
        nameL = prompt(str);
        if (nameL.match(rExp));
            console.log("Please, use JUST Letters.")
    }while(!nameL.match(rExp));
    return nameL;
}

function showAll (flights){
    console.log ("Flights Info:");
    for (x in flights){
        console.log ("Flingt nº",flights[x].id,"goes To:",flights[x].to,", comes From:",flights[x].from,"Cost:",flights[x].cost,"€ and",showScale(flights[x].scale));
    }
}

function showScale(boolean){
    if (boolean)
        return ("has a scale.");
    else 
        return ("has not a scale.");
}
function showMediumCost (flights){
    var sum = 0;
    for (x in flights){
        sum += flights[x].cost;
    }
    return ((Number.parseFloat(sum/(flights.length))).toFixed(2));

}
function showOnlyScales (flights){
    console.log ("Flights with scale:");
    for (x in flights){
        if (flights[x].scale)
            console.log ("Flingt nº",flights[x].id,"goes To:",flights[x].to,", comes From:",flights[x].from,"Cost:",flights[x].cost,"€ and",showScale(flights[x].scale));

    }
}

function showLastFligthDestiny (flights){
    console.log ("Destiny of last 5 fligths:");
    var trying = flights.splice(-5);
    for (x in trying){
        console.log ("Flingt nº",trying[x].id,"Destination:", trying[x].to);
    }
}
var name = getName ("Username:");

console.log("Hello",name,"! Welcome!");
console.info(showAll(flights));
console.info("The medium cost is:",showMediumCost(flights));
console.info(showOnlyScales (flights));
console.info(showLastFligthDestiny (flights));