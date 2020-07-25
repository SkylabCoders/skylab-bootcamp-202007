// function s(x) {

//     function u(y) {

//         function ma(z) {
//             return x + y + z;
//         }
//         return ma;
//     }
//     return u;;
// }
// let ss = s(1);
// let uu = ss(3);
// console.log(uu(6));
// let m = s(3);
// console.log(m(5)(3));
// console.log(s(9)(4)(8));

var Pet = function () {
    // var sex;
    // var name;
    // var legs;

    let createPet = function (newName) {
        this.name = newName;
        return { name: newName };
    };

    let setName = function (newName) {
        this.name = newName;
    };
    let getName = function () {
        return this.name;
    };
    let setGender = function (newSex) {
        this.sex = newSex;
    };
    let getGender = function () {
        return this.sex;
    };
    let setLegs = function (newLegs) {
        this.legs = newLegs;
    };
    let getLegs = function () {
        return this.legs;
    };
    return { setName, getName, setGender, getGender, setLegs, getLegs, createPet };
}

// var Kira = new createPet("Kira");
// console.log(Kira.getName());
// console.log(Kira.getSex());