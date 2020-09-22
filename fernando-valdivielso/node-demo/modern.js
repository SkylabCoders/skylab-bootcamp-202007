//DESTRUCTURING ASSIGNMENT

// const [first, ...restOfItems] = [1, 2, 3, 4];

// const { navajowhite } = require("color-name");

// const newArray = [...restOfItems];
// console.log(newArray)

// const data = {
//     temp1: '001',
//     temp2: '002',
//     firstName: 'John',
//     lastName: 'Bombasto'
// }

// const { temp1, temp2, ...myHero } = data;

// const newHero = { ...myHero }; // { myHero } === {myHero: myHero}



// console.log(myHero);
// console.log(newHero);
// console.log(myHero === newHero)


//======================= CLASSES   


// class Person {
//     constructor(name) {
//         this.name = name;
//     }

//     greet() {
//         console.log(`Hello ${this.name}`);
//     }
// }

// class Hero extends Person {
//     constructor(name, skill) {
//         super(name);
//         this.skill = skill;

//     }
//     greet() {
//         console.log(`Que pasó ${this.name}?`)
//     }
// }

// const bombasto = new Person('Bobasto');
// const elBomba = new Hero('Bombasto - El Heroe', 'akylaber');
// const celeritass = new Hero('Celeritas', 'coder');

// celeritass.greet = () => console.log('Whats up?');

// bombasto.greet();
// elBomba.greet();
// celeritass.greet();


//================== ASYNC AWAIT

const https = require('https');

function fetch(url) {
    return new Promise((resolve, reject) => {
        https.get(url, (response) => {
            let data = '';                                          //data va a guardar los datos que lleguen del servidor, concatenandose con chunk
            response.on('data', (chunk) => (data = data + chunk))  //chunk es lo que sea que devuelva el servidor (string, json, {}...) pero suele ser string
            response.on('end', () => resolve(data));                //el evento 'end' nos dice que ya han terminado de llegar datos del servidor
            response.on('error', (error) => reject(error));
        });
    });

}
fetch('https://www.javascript.com').then((data) => {
    console.log(data.length);                                      // nos imprime por consola toda la pagina de inicio de javascript.com
});


(async function read() {
    const data = await fetch('https://www.javascript.com');     //data es el resultado de la funcion fetch cuando se resuelva
    console.log(data.length);
})()                                                            //funcion self invoked      