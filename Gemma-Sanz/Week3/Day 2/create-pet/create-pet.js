const Pet = function () {
    let data = {
        name: 'Kira',
        gender: 'female',
        legs: 4
    }


    let createPet = function () {
        return {
            name: data.name,
        };
    };

    let getName = function () {
        return data.name;
    };
    let setName = function (newName) {
        data.name = newName;
    };
    let getGender = function () {
        return data.gender;
    };
    let setGender = function (newGender) {
        data.gender = newGender;
    };
    let getLegs = function () {
        return data.legs;
    };
    let setLegs = function (newLegs) {
        data.legs = newLegs;
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