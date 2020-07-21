//Testing currying and closures

function outside(x) {
  function inside(y) {
    return x + y;
  }
  return inside;
}

let first = outside(3);
let result = first(5); // 8
let result1 = outside(3)(5); //8

//
