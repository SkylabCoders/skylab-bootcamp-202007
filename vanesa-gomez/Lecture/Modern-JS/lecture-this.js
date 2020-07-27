// Arrow functions

var globalObject = this;

var foo = () => {return this;}

var fn = function () { return this;}

console.log(foo() === fn());


