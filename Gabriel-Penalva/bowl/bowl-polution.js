var obj = {a:"Custom"};
var a = 'Global';


function whatsThis(c,d) {
    return this.a + this.b + c + d;
}
console.log(whatsThis());
console.log(whatsThis.call(obj));