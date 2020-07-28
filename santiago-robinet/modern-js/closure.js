'use strict'

/*
AS A math enthusiast
I WANT TO increase and decrease a <number>
SO THAT I cna quickly know the number <before> or <after>

Acceotance Criteria

Scenario#1: Increment

Given a function
Wen I sned the number <number>
Then I can see in the console he <incremented> number

number-increment
0-'The result is 1'
1-'The result is 2'
3-'The result is 4'
10-'The result is 11'

Scenario #2: Decrement

Given a function
When I input a <number>
Then a <decremented> value is displayed in the  console

1-'The result is 0'
2-'The result is 1'
3-'The result is 2'
10-'The result is 9'

*/

function myClosureFunc(value){
    const increment = function(){
        return value + 1;
    }

    const decrement = function (){
        return value - 1;
    }

    return {increment, decrement};
}

console.log(myClosureFunc(3).increment())
