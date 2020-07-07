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