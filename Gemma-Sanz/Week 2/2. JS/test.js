let human = {teeth:32};
let gwen = {
    age: 19,
    // redefine the prototype gor gwen. We instruct JS that gwen not only has 19 years, gwen is also a human
    __proto__: human
};

console.log(gwen.age);
console.log(gwen.teeth);

console.log(gwen.__proto__); // {teeth: 32}
console.log(gwen.__proto__.__proto__); // {}
console.log(gwen.__proto__.__proto__.__proto__); // null
console.log(gwen.__proto__.__proto__.__proto__.__proto__); // TypeError (los valores primitivos, excepto las Strings, no tienen prototipos)

/*THE PROTOTYPE CHAIN*/
let mammal = {
    brainy : true
};
let human = {
    __proto__: mammal,
    teeth: 32
};
let gwen = {
    age: 19,
    __proto__: human
}

console.log(gwen.brainy); // true

/*SHADOWING*/
let human = {
    teeth: 32
};
let gwen = {
    __proto__: human,
    teeth: 31
};
console.log(gwen.teeth); // 31 (la propiedad de gwen hace sombra a la de human. Gwen ya la tiene, asi que no tiene que ir a buscarla al padre, al heritage, al proto)
console.log(gwen.__proto__.teeth); // 32 (aqui preguntass directamente a atrás)
//  Has own property pregunta al objeto si tiene esa propiedad, no en supadre
console.log(human.hasOwnProperty("teeth")) // true;
console.log(gwen.hasOwnProperty("teeth")) // true;
//  Shadowing es que has own property devuelva true en los 2 obj
