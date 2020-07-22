//FIRST VERSION WITH VAR

/*
function f() {
    return this.a
}

const newContext = {a: "pepe"}

var g = f.bind(newContext);

g()

var h = g.bind({a: 'alex'})

h()

var o = {a:37, f:f, g:g, h:h}

console.log(o.a, o.f(), o.g(), o.h())
*/

//SECOND VERSION WITH LET

function f() {
    return this.a
}

const newContext = {a: "pepe"}

let g = f.bind(newContext);

g()

let h = g.bind({a: 'alex'})

h()

let o = {a:37, f:f, g:g, h:h}

console.log(o.a, o.f(), o.g(), o.h())