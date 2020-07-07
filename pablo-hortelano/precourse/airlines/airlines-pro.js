/*** 
 * Airlines Pro
 * 
*/


var INTPATTERN = /^[1-9]\d*(\.\d+)?$/
var NOTINTPATTERN = /^\D+$/
var addFlights = true
var moreOps = true;

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

function initialGreeting() {
    let nombre = prompt("Welcome to the airline. What is your username? ")
   displayListFlights("Flights List", flights)
    var averagePrice = Math.round(calculateAveragePrice(flights) * 100) / 100
    console.log(`\nThe average price of all the flights is: \n${averagePrice}`)
    
    var scaleFlights = flights.filter((flight) => {
        if(flight['scale'] == true) return true
    })
    displayListFlights("Flights with scales list", scaleFlights)
    var lastFlights = flights.filter((flight) => {
        if(flight['id'] > 5) return true
    })  
    displayListFlights("Last five flights", lastFlights)
}

function displayListFlights(title, flights) {
    console.log(`\n${title} :\n`)
    flights.map((flight) => {
        console.log(`Flight number ${flight.id} from ${flight.from} to ${flight.to} has a cost of ${flight.cost} euros ${flight.scale ? `con escalas`: `sin escalas`}`)
    })
}

function calculateAveragePrice(flights) {
    var costSum = flights.reduce((a, b) => ({cost: a.cost + b.cost}))
    return costSum.cost / flights.length
}
    

initialGreeting()

addFlights = () => {
    if(flights.length >= 30) {
        alert("You have exceed the number of flights")
    }   
    var destiny = prompt("Where do you want to go?")
    var origin = prompt("Where do you come from")
    var cost = prompt("How many it costs?")
    var scale = confirm("Does it have scales")

    flights.push({
        id: flights.length,
        to: destiny,
        from: origin,
        cost: cost,
        scale: scale
    })
    confirm("Do you want to add more flights")?
            (
                addFlights()
            ):(
                displayListFlights("Flight/s added", flights)
            )
}

removeFlights = () => {
    var destiny = prompt("Introduce the Id of the Flight you want to remove")
    var filterNotRemoveFlights = flights.filter((flight) => {
        if (flight["id"] !== parseInt(destiny)) return true 
    })

    confirm("Do you want to remove more flights")?
            (
                removeFlights()
            ):(
                displayListFlights("Flight/s deleted. The list is now", filterNotRemoveFlights)
            )
}

searchFlights = () => {
    var price = prompt("Introduce a price in order to filter flight list")
    var method = (prompt("Introduce UP, EQUAL or LESS to filter flights based on the previous price you have entered")).toLowerCase()

    var filteredFlights = flights.filter((flight) => {
        switch(method) {
            case "up": {
                if(flight["cost"] > price ) return true
            }
            break;
            case "equal": {
                if(flight["cost"] = price ) return true
            }
            break;
            case "less": {
                if(flight["cost"] < price ) return true
            }
            break;
            default: console.log("You have entered an unvalid method to filter flights")
            break;
        }
    })

    displayListFlights("Custom Filtered List", filteredFlights)

    confirm("Do you want to filter more flights")?
            (
                searchFlights()
            ):(
                console.log("Thank you for using Airline")
            )
}

var admin = confirm("Are you an admin?", )

if(admin === true) {

    confirm("Do you want to addFlights")?
        (
            addFlights()
        ):(
            console.log("\nNot adding flights")
        )
    confirm("Do you want to remove flights?")?
        (
            removeFlights()
        ):(
            moreOps = false
        )
    }
else {

     confirm("Do you want to search flights")?
        (
             searchFlights(),
             moreOps = false
                
         ):(
              console.log("\nNot adding flights"),
            moreOps = false
        )
 }
    



