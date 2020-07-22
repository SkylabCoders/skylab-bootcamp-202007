const myCar = {
    make: "ford",
    model: "mustang",
    year: 1969
};
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
const myObj = {
    myString: "String defined property",
    "date created": "02/20/2020",
    "": "Para Gerard"
};
//console.log(myObj.date created); //doesn't work
console.log(myObj["date created"]);
console.log(myObj[""]);

function showProps(obj, objName) {
    let result = "";
    for (let prop in obj) {
        if (obj.hasOwnProperty(prop)) {
            result += `${objName}.${prop} = ${obj[prop]}\n`;
        }
    }
    return result;
}
showProps()

console.log(showProps(myObj, "myObj"));
console.log(Object.keys(myObj));
console.log(Object.getOwnPropertyNames(myObj));
