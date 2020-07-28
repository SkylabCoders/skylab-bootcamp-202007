function outside(x) {
    function inside(y) {
        return x + y;
    }
    return inside;
}
fn_inside = outside(3) // Think of it like: give me a function that adds 3
result = fn_inside(5); // return 8
result1 = outside(3)(5); // return 8

console.log(result);
console.log(result1)

// <--------!!! ---------->

function A(x) {
    function B(y) {
        function C(z) {
            console.log(x + y + z);
        }
        C(3);
    }
    B(2)
}
A(1); // logs 6 (1 + 2 + 3); x = 1, y = 2, z = 3

// <--------!!! ---------->

var