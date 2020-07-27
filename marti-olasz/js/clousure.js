function sum(a) {
  function sumChild(b) {
    return a + b;
  }
  return sumChild;
}

const result = sum(6);
console.log(result(14));
console.log(sum(10)(12));
/////////////////////////////////////
function a(x) {
  function b(y) {
    function c(z) {
      return x + y + z;
    }
    return c(y);
  }
  return b(x);
}

console.log(a(5));
/////////////////////////////////////
