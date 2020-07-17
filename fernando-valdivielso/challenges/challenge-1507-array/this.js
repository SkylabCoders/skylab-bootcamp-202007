function f() {
    return this.a 
}

const newContext = {a: 'pepe'}

let g = f.bind(newContext);

let h = g.bind({a: 'alex'});

let o = { a: 37, f: f, g: g, h: h };

console.log(o.a, o.f(), o.g(), o.h() );
