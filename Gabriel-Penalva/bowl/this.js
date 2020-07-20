var globalObject = this;
var foo = () => this;
var fn = function () {return this;}

console.log(foo() === fn());

var obj = {
    fn:function (){return this},
    arrow: () =>this
}

console.log('fn', obj.fn());
console.log('arrow', obj.arrow());

