function f() {
  return this.a;
}

const newContext = { a: "pepe" };

var g = f.bind(newContext);

console.log(g());

var h = g.bind({ a: "alex" });

console.log(h());
