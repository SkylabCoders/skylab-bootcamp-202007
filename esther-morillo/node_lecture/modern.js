// const [first, ...restOfItems] = [10, 20, 30, 40];
const [first, , ...restOfItems] = [10, 20, 30, 40];

console.log(first);
console.log(restOfItems);

const newArray = [restOfItems]; // así sería un array dentro de un array
const newArray = [...restOfItems]; // así sería un array que contiene los elementos del otro array

const data = {
    temp1: '001',
    temp2: '002',
    firstName: 'John',
    lastName: 'Bombasto'
};

// A la izquierda las constantes donde almacenar los valores y a la derecha data

const {temp1, temp2, ...myHero} = data;

const newHero = { ...myHero }; // tendrá todas las propiedades de myHero

const newHero = { myHero }; // es como poner esto: { myHero: myHero}


console.log(newHero)

console.log(temp1);
console.log(temp2);
console.log(myHero);


