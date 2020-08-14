// const [first, ...restA] = [1, 2, 3, 4, 5, 6]

// const newArray = [...restA];
// console.log(newArray)
// const data = {
//     temp1: 'data',
//     temp2: 'data',
//     fname: 'gabriel',
//     lname: 'Bombasto'
// };

// const { fname, lname, ...restO } = data;

// class Persona {
//     constructor(name) {
//         this.name = name;

//     }
//     greet() {
//         console.log('Hello ' + this.name + '!');
//     }
// }
// class Hero extends Persona {
//     constructor(name, skill) {
//         super(name);
//         this.skill = skill;
//     }
//     greet() {
//         console.log('ya sabes quien soy:' + this.name);
//     }
// }

// const elBomba = new Persona('Bombasto');
// const Bombasto = new Hero('Bombasto - el heroe', 'skylaber');
// const celeritas = new Hero('Celeritas', 'code');
// elBomba.greet();
// Bombasto.greet();
// celeritas.greet();
// celeritas.greet = () => console.log('Hola Mundo!');
// celeritas.greet();
const https = require('https');
function fetch(url) {
    return new Promise((resolve, reject) => {
        https.get(url, (response) => {
            let data = '';
            response.on('data', (chunk) => (data = data + chunk));
            response.on('end', () => resolve(data));
            response.on('error', () => reject(error));
        });
    });
}
fetch('https://www.javascript.com').then((data) => {
    console.log(data.length);
});
(async function read() {
    const data = await fetch('https://www.javascript.com');
    console.log(data.length);
})()