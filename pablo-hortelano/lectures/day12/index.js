//Preservation variables

function outside(x) {
  function inside(y) {
    return x + y;
  }
  return inside;
}

let first = outside(3);
let result = first(5); // 8
let result1 = outside(3)(5); //8

//Second example of preservation
function A(x) {
  function B(y) {
    function C(z) {
      console.log(x + y + z);
    }
    C(1);
  }
  B(2);
}
A(3);
