/*** 
 * CALCULATOR PRO
 * 
*/


var INTPATTERN = /^[1-9]\d*(\.\d+)?$/
var NOTINTPATTERN = /^\D+$/
var nums = []
var results = []
var capture = true
var moreOps = true;

/*captureNumbers function captures numbers based in the variable capture, if the confirm's value is true keep asking you for more numbers, when the confirm's value is false then
    send the nums stored in nums value to the makeCalcs function, then using makeCalcs output to limitDecimalsAndDisplay function in order to limit detimals and display the final results
    in the console */

var captureNumbers = () => {
    if (capture === false) {
        console.log ("No more numbers")
        makeCalcs(nums)
        nums.length = 0
    }
    else {
        var introducedNumber = (prompt("Add a number to operate with"))
        if (INTPATTERN.test(introducedNumber)) {
            capture = confirm("Do you want to introduce more numbers?")
            nums.push(parseFloat(introducedNumber))
            captureNumbers()
        }
        else if(NOTINTPATTERN.test(introducedNumber)) {
            capture = confirm("Please introduce a valid number, not a letter or a symbol")
            captureNumbers()
        }
    }
}
// makeCalcs picks nums array and iterates it to make all the operations stored in operations using the eval function to evaluate the expression
var makeCalcs = (nums) => {
    if (nums.length == 1) {
        var squareRoot = Math.sqrt(nums[0])
        console.log(`The square root of the number is: ${Math.round(squareRoot * 1000) / 1000}`)
        nums.length = 0
    }
    else {
        var acum = 1
        var operations = ["+", "-", "*", "/"]  
            for (var operation of operations) {   
                if (operation === "/") {
                    nums = nums.reverse()
                    for (var num of nums) {
                        acum = num/acum
                    }
                results.push(acum)
                acum = 1
                }
                else{
                for (var num of nums) {
                    acum = eval(acum + operation + num)
                }
                results.push(acum)
                acum = 1
                }
            }
            limitDecimalsAndDisplay(results)
    }
}
var limitDecimalsAndDisplay = (inputResults) => {
    var roundResults = []; 
    for (var result of inputResults) {
         var roundResult = Math.round(result * 1000) / 1000
         roundResults.push(roundResult)
    }
    results.length = 0; inputResults.length = 0; 
    console.log(
        `
        Calcs: \n 
        The sum is : ${roundResults[0] - 1} \n 
        The subtraction is : ${roundResults[1] - 1} \n 
        The product is :  ${roundResults[2]} \n
        The quotient is: ${roundResults[3]} \n
        Results are beign stored in results array: [${roundResults[0] - 1}, ${roundResults[1] - 1}, ${roundResults[2]}, ${roundResults[3]}]
        `
    )
}

captureNumbers()

do {
    /*captureNumbers function captures numbers based in the variable capture, if the confirm's value is true keep asking you for more numbers, when the confirm's value is false then
    send the nums stored in nums value to the makeCalcs function, then using makeCalcs output to limitDeciamlsandDisplay function in order to limit detimals and display the final results
    in the console*/

    confirm("Do you want to do extra operations?")?
        (
            capture = true,
            nums.length = 0,
            captureNumbers()
        ):(
            moreOps = false
        )
}
while(moreOps)



