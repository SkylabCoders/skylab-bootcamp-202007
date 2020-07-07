//SKYLAB CODING ACADEMY PRECOURSE'S SECOND PROJECT: AIRLINES
//We create an JSON Object to store flight info in it
const flightInfo = [
    { id: 01, departure: "Barcelona", arrival: "Madrid", price: 100, scale: false},
    { id: 02, departure:  "Brussels", arrival: "La Habana", price: 500, scale: true},
    { id: 03, departure: "Madrid", arrival: "Bangkok", price: 1000, scale: false},
    { id: 04, departure: "Los Angeles", arrival: "Sydney", price: 1500, scale: true},
    { id: 05, departure: "Berlin", arrival: "Melbourne", price: 1100, scale: true},
    { id: 06, departure: "Jakarta", arrival: "Manila", price: 400, scale: false},
    { id: 07, departure: "Chiang Mai", arrival: "Phuket", price: 80, scale: false},
    { id: 08, departure: "Minsk", arrival: "Washington D.C", price: 100, scale: true},
    { id: 09, departure: "Bilbao", arrival: "Buenos Aires", price: 700, scale: false},
    { id: 10, departure: "Quatar", arrival: "Madrid", price: 300, scale: false}
]

var flightQuantity = flightInfo.length;
//Function to greet the user and show flight info: Remember that username is mocked so this could run with Node.js. Change to prompt
function showFlightInfo(){
    var userName = "Alex";
    var scale = "";
    console.log(`Hi ${userName}, this is today's Flight Schedule: `)
    //We iterate through all the flightInfo object for data to be shown
    for (i=0; i < flightInfo.length; i++){
        //Depending to object's scale attribute value, we change scale variables value to show the user if shown flight has scale or not
        if (flightInfo[i].scale === true){
            scale = "a";
        }
        else {
            scale = "no"
        }
        console.log(`The flight from ` + flightInfo[i].departure + ` to ` + flightInfo[i].arrival + `, has a price of ` + flightInfo[i].price +
        ` Dollies, and has ${scale} scale`)
    }
    
}
//Function to get the Average price for all the flights stored in the flightInfo object
function getAveragePrice(){
    var averageFlightPrice = 0;
    var accumulatedFlightPrice = 0;
    var flightQuantity = flightInfo.length;
    for (i=0; i < flightInfo.length; i++){
        accumulatedFlightPrice += flightInfo[i].price;
    }
    averageFlightPrice = accumulatedFlightPrice / flightQuantity;
    return console.log(`The average flight cost is: ` + averageFlightPrice)
}

//Function to get the flights with scales
function getFlightsWithScales(){
    let flightsWithScales = 0;
    for (i=0; i < flightInfo.length; i++){
        if (flightInfo[i].scale === true){
            flightsWithScales += 1;
        }
    }
    return console.log("Quantity of Flights with scales is: " + flightsWithScales);
}

//TEST
//Funttion to get Last 5 flights's arrivals. Could pass the split number by argument but is not required
function getLast5FlightsArrivals(){
    let last5FlightsArrivals = flightInfo.slice(flightInfo.length - 5).map(e => e.arrival);
    return console.log("Last 5 flight's arrivals are: " + last5FlightsArrivals.join(", "))
}
//SKYLAB CODING ACADEMY PRECOURSE'S FIRST PROJECT: CALCULATOR


//Calculator function 
function calculator(values) {
    let resultSet = [];
    //values = Number(values);
    //We check if the provided argument(s) are numbers. if not, we break the flow
    if (isNaN(values)){
        console.log("Please enter just numbers");
        return
    }
    //If just one number value is passed through, we calculate its square and display the result
    else if ( arguments.length === 1){
        resultSet.push(`The square of ${values} is: ` + parseFloat(Math.sqrt(values).toFixed(3)))
    }
  
    //If 2 numbers are correctly provided, we do the required maths, fix the values and store them in our result array to be shown
  
    for (var i = 1; i > arguments.length; i++) {
    
            resultSet.push("The sum of provided values is: " + (values + Number(arguments[i].toFixed(3))))
            resultSet.push("The sub of provided values is: " + (values - Number(arguments[i].toFixed(3))))
            resultSet.push("The multiply of provided values is: " + (values * Number(arguments[i].toFixed(3))))
            resultSet.push("The division of provided values is: " + (values / Number(arguments[i].toFixed(3))))
    }
        
        return resultSet;
          
}

//We call the method to show the prompt, if data input is true, we call back to calculator method
//getUserInputandLaunchCalculator();

console.log(calculator(1,1))
console.log(showFlightInfo());
console.log(getAveragePrice());
console.log(getFlightsWithScales());
console.log(getLast5FlightsArrivals());

