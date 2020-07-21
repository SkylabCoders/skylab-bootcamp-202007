const Pet = function () {
    let name = "";


    let createPet = function (newName) {
        name = newName;
        return {
            name: name,
        };
    };

    let getName = function () {
        return name;
    };
    let setName = function (newName) {
        name = newName;
    };
    let getGender = function () {
        return gender;
    };
    let setGender = function (newGender) {
        this.gender = newGender;
    };
    let getLegs = function () {
        return legs;
    };
    let setLegs = function (newLegs) {
        this.legs = newLegs;
    };

    return {
        createPet,
        getName,
        setName,
        getGender,
        setGender,
        getLegs,
        setLegs
    }
}
let myPet = new Pet();