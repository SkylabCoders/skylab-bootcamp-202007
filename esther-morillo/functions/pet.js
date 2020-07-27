'use strict'

//Aplicación que me permita definir mi mascota
//Tendrá un nombre y sexo (y se los puedo ir cambiando)

const Pet = function () {
    let pet = {
        name: 'Kira',
        gender: 'female',
        legs: 4
    }

    let newGender = 'male';

    let createPet = function () {
        return {
            name: pet.name
        }
    }
    let setName = function (newName) {
        pet.name = newName;
    }
    let getName = function () {
        return pet.name;
    }
    let setGender = function (newGender) {
        pet.gender = newGender;
    }
    let getGender = function () {
        return pet.gender;
    }
    let setLegs = function (newLegs) {
        pet.legs = newLegs;
    }
    let getLegs = function () {
        return pet.legs;
    }
    createPet();
    setName();
    getName();
    setGender();
    getGender();
    setLegs();
    getLegs();
    return {
        createPet,
        setName,
        getName,
        setGender,
        getGender,
        setLegs,
        getLegs
    }
};

let myPet = new Pet();