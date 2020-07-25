/* const myCar = {
    make: 'Ford',
    model: 'Mustang',
    year: 1969
};

console.log(myCar.model);
console.log(myCar['year']); */

const myObj = {
    myString: 'string defined',
    'date created': '02/20/2020',
    '': 'Para Gerard'
};
console.log(myObj['date created']);

//para devolver las propiedades y valores de un objeto:
function showProps(obj, objName) {
    let result = '';
    for (let prop in obj) {
        if (obj.hasOwnProperty(prop)) {
            result += `${objName}.${prop} = ${obj[prop]}\n}`
        }
    }
    return result;
}
/* console.log(showProps(myObj,'myObj'));
console.log(Object.keys(myObj));
console.log(Object.getOwnPropertyNames(myObj)); */

const mystery = 'padre';
const childprop = {
    color: 'red',
    fun3: function () { },
    [mystery]: 'David',
    mystery
};
/* console.log(childprop[mystery]);
console.log(childprop['mystery']); */

/* const myCar = {
    make: 'Ford',
    model: 'Mustang',
    year: 1969
}; */

function Car(make, model, year, availableColors) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.availableColors = availableColors;
}
const colors = {
    primary: 'red',
    secundary: 'blue'
};



const myCar = new Car('Ford', 'Mustang', 1969, { ...colors });
const myOtherCar = new Car('Ford', 'Mustang', 1969, colors);

console.log(myCar);
console.log(myCar.availableColors.primary);
colors.primary = 'pink';
console.log(myCar.availableColors.primary);
console.log(myOtherCar.availableColors.primary);


/*skylaber: 
nombre
motivación (array 4 elementos)
dirección {ciudad, pais}
profe preferido (array 3 elementos)
*/
function Skylaber(name, motivation, adress, teacher) {
    this.name = name;
    this.motivation = motivation;
    this.adress = adress;
    this.teacher = teacher;
}
function Adress(city, country) {
    this.city = city;
    this.country = country;
}

let motivation = ['future', 'position', 'money', 'happy'];
let teacher = ['Gilbe', 'Beto', 'Jorge'];
const estherAdress = new Adress('Palma', 'Mallorca');
const estherName = 'Esther';
/* let estherAdress = {
    city: 'Palma',
    country: 'Mallorca'
};
let gemmaAdress = {
    city: 'Sabadell',
    country: 'Catalunya'
};
let santiagoAdress = {
    city: 'La Plata',
    country: 'Argentina'
}; */

const esther = new Skylaber(estherName, motivation[3], estherAdress, teacher[0]);
const gemma = new Skylaber('Gemma', motivation[0], estherAdress, teacher[1]);
const santiago = new Skylaber('Esther', motivation[2], estherAdress, teacher[2]);

console.log(esther);



const Manager = {
    name: "John",
    age: 27,
    job: "Software Engineer"
}
const Intern = {
    disName: "Ben",
    age: 21,
    job: "Software Engineer Intern",
    get name() {
        console.log(this.disName);
    },
    set name(newName) {
        this.disName = newName;
    },
    get props() {
        return this;
    }
};
Intern.name = 'manolo';
Intern.name;

function sayHi() {
    console.log('Hello, my name is', this.name)
}

sayHi.call(esther);
sayHi.call(Manager);
console.log(Intern.props);
delete Intern.disName;
console.log(Intern.props);
