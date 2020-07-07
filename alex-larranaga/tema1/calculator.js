//SKYLAB CODING ACADEMY PRECOURSE'S FIRST PROJECT: CALCULATOR

//Calculator function 
function calculator(values) {
    //We initialize an empty array to store math results afterwards
    let resultSet = [];
    values = Number(values);
    //We check if the provided argument(s) are numbers. if not, we break the flow
    if (isNaN(values)){
        console.log("Please enter just 2 numbers");
        return
    }
    //If just one number value is passed through, we calculate its square and display the result
    else if ( arguments.length === 1){
        console.log(`The square of ${values} is: ` + parseFloat(Math.sqrt(values).toFixed(3)))
    }
    //We check if more than 2 numbers has been provided. If so, we display a message and break the flow
    else if(arguments.length > 2){
        console.log("Please enter just 2 numbers")
        return
    }
    //If 2 numbers are correctly provided, we do the required maths, fix the values and store them in our result array to be shown
  
        for (var i = 1; i < arguments.length; i++) {
            resultSet.push("The sum of provided values is: " + (values + Number(arguments[i].toFixed(3))))
            resultSet.push("The sub of provided values is: " + (values - Number(arguments[i].toFixed(3))))
            resultSet.push("The multiply of provided values is: " + (values * Number(arguments[i].toFixed(3))))
            resultSet.push("The division of provided values is: " + (values / Number(arguments[i].toFixed(3))))
        }
        return console.log(resultSet);    
}
  // We call the calculator method providing 2 numbers  
  calculator(2,2);