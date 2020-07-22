// const myCar = {
//     make: "ford",
//     model: "mustang",
//     year: 1969
// };
/*
//Accedemos a las propiedades con el punto delante de una propiedad, nua dot notation.
console.log("dot notation: ", myCar.model); //dot notation;
console.log("bracket notation: ", myCar["model"]); //dot notation;
console.log("undefine property: ", myCar.color); //dot notation;


const myObj = new Object();
console.log("====> newObject", myObj);

myObj.myString = "String defined property";
console.log("=====> my Obj", myObj);

const str = "myString";
console.log(myObj["str"]);

*/
//
// const myObj = {
//     myString: "String defined property",
//     "date created": "02/20/2020",
//     "": "Para Gerard"
// };
// //console.log(myObj.date created); //doesn't work
// console.log(myObj["date created"]);
// console.log(myObj[""]);

// function showProps(obj, objName) {
//     let result = "";
//     for (let prop in obj) {
//         if (obj.hasOwnProperty(prop)) {
//             result += `${objName}.${prop} = ${obj[prop]}\n`;
//         }
//     }
//     return result;
// }
// showProps()

// console.log(showProps(myObj, "myObj"));
// console.log(Object.keys(myObj));
// console.log(Object.getOwnPropertyNames(myObj));

// // OTHER EXAMPLE, aqui a diferencia de antes no retornamos a la fn consrtuctura con un return un obj, sino en la inicializacion de la fn

// function Car(makeArg, modelArg, yearArg, availabeColors) { //Car es una fn constructora perque l'hem definit abans)
//     this.make = makeArg;
//     this.model = modelArg;
//     this.year = yearArg;
//     this.availabeColors = availabeColors;
// };

// const colors = {
//     primary: "red",
//     secondary: "blue"
// }

// console.log(myCar);

// console.log("Contructor object ====>", Car);


// const myThirdCar = new Car("Ford", "Ka", "1234");
// console.log("Object built by constructor object ===>", myThirdCar);
// const myFourthCar = new Car("s",)

// const myOtherCar = {
//     make: "VW",
//     model: "Polo",
//     year: 2019
//};

//
function Car(makeArg, modelArg, yearArg, availabeColors) { //Car es una fn constructora perque l'hem definit abans)
    this.make = makeArg;
    this.model = modelArg;
    this.year = yearArg;
    this.availabeColors = availabeColors; //
};

const colors = {
    primary: "red",
    secondary: "blue"
}
const myCar = new Car("Ford", "Mustag", 1967, { ...colors });
const myOtherCar = new Car("Ford", "Mustag", 1967, colors);

console.log(myCar);
console.log("=====> myCar", myCar);
colors.primary = "pink";
console.log("=====> myOtherCar", myOtherCar.availabeColors.primary);



// EXECICIS
function Skylaber(nameArg, motivationArg, addressArg, teacherArg) {
    this.name = nameArg;
    this.motivation = motivationArg;
    this.address = addressArg;
    this.teacher = teacherArg;
};

let address = {
    city: ["Barcelona", "Sabadell", "Granollers"],
    country: ["Spain", "Italy", "Argentina"],
};

let teachers = ["Gilbert", "Jeorge", "Betho"];

let motivation = [1, 5, 8]

const skylaber1 = new Skylaber("Jordi", motivation[1], address.country[1], teachers[1]);
const skylaber2 = new Skylaber("Esther", motivation[2], address.city[0], teachers[0]);

console.log(skylaber1);
console.log(skylaber2);

///OTHER EXAMPLE
const Manager = {
    name: "John",
    age: 27,
    job: "Software Engineer"
}
const Intern = {
    name: "Ben",
    age: 21,
    job: "Software Engineer Intern"
}
function sayHi() {
    console.log("Hello, my name is", this.name)
}
//add sayHi function to both objects
// Manager.sayHi = sayHi;
// Intern.sayHi = sayHi;

// Manager.sayHi() //Hello, my name is John
// Intern.sayHi() // Hello, my name is Ben

sayHi.call(Manager)
sayHi.call(Intern)

console.log("**After deleting ===>", Intern)
delete Intern.age;
console.log("**Before deleting ===>", Intern)
