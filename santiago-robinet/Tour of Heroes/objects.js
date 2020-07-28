const myCar = {
    make: 'ford',
    model: 'mustang',
    year:1969
};

console.log(myCar.model);    //dot notation
console.log(myCar['model']); //bracket notation
console.log(myCar.color);


const myObj = new Object();
console.log('====>', myObj);

const myObj = {
    myString: 'String defined property',
    'date created': '02/20/2020',
    '':'Para Gerard'
} 

// const str = 'myString';
// console.log(myObj[str]);
;
console.log(myObj['date created']);
// ------------------------------------------------------------------
function showProps(obj, objName){
    let result = '';

    for(let prop in obj){
        if(obj.hasOwnProperty(prop)){
            reult += `${objName}.${prop} = ${obj[prop]} \n`
        }
    }
    return result
}

console.log(showProps(myObj,'myObj'));

// -----------------------------------------------------------------------

const mystery = 'padre fundador'

const obj = {
    p1: 10,
    p2: 20,
    f1() {},
    f2: () => {},
    f3: function(){},
    [mystery]: 'David', //-----> es una propiedad dinamica, en la que se puede acceder 
                       // mediante [], usando tanto [mystery] como el valor asignado en una
                       // variable como en este ejemplo: ['padre fundador']
    
    mystery,           //--->esta propiedad seria lo mismo que mystery: mystery, lo cual apunta
                       // a la variable mystery que esta creada...ATENTO( si borramos la variable mystery dará error)
    
    Mystery: 'Otro David' //Tener en cuenta que las propiedades con Case Sensitive. 

}

//------------------------------------------------------------------------



function Car(make, model,year, availableColors){
    this.make = make;
    this.model = model;
    this.year = year;
    this.availableColors = availableColors;

}

const colors = {
    primary: 'red',
    secondary: 'blue'
}


const myNewCar = new Car('Ford','Mustang', 1969, {...colors});
const myNewCar = new Car('Ford','Mustang', 1969, colors);
console.log(myCar);
console.log(myCar.availableColors.primary); //expected red
colors = 'pink';
console.log(myCar.availableColors.primary); // expected red
console.log(myOtherCar.availableColors.primary);//expected pink

/*
MUY IMPORTANTE
{..colors}
*/

//------------------------------------------------

/* un SKYLABER tiene : NOMBRE: string, MOTIVACION: un elemento de un array, DIRECCION:,
    PROFE PREFERIDO: string, ADDRES: {ciudad , pais}   */

function Skylaber(nombre, motivacion, direccion, profePreferido, addres){
    this.nombre = nombre;
    this.motivacion = motivacion;
    this.direccion = direccion;
    this.profePreferido = profePreferido;
    this.addres = addres;
}

const motivation = ['ser el mejor programador', 'buen empleo', 'fanatico del coding', 'realizacion personal'] 

const direccion = {
    ciudad: 'Barcelona',
    pais: 'España'

}

let gerard = new Skylaber('Gerard', motivation[Math.floor(Math.random()*4)], 'Arriba', 'Betho', {...direccion})
console.log(gerard)

// -----------------------------------------------------------------

const Manager = {
    name: 'John',
    age: 27,
    job: 'Software Engineer'
}

const Intern = {
    name: 'Ben',
    age: 21,
    job: 'Software Engineer Intern'
}

function sayHi(){
    console.log('Hello, my name is', this.name)
}

Manager.sayHi = sayHi;
Intern.sayHi = sayHi;


Manager.sayHi();
Intern.sayHi();