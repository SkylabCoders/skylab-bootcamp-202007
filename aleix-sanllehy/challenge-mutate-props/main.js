//-- Challenge 8.3 - Mutating
// 1st theory

let charlotte = {
    mother: {
        age: 20
    }
};

charlotte.child = charlotte.mother;

console.log(charlotte.mother.age);
console.log(charlotte.child.age);

charlotte.mother.age = 21;

console.log(charlotte.mother.age);
console.log(charlotte.child.age);
//------------------------------------------------------------------------------
// 2nd theory seems faulty as assigning a new value to the 

let charlotte = {
    mother: {
        age: 20
    },

    child: {
        age: 20
    },
};

console.log(charlotte.mother.age);
console.log(charlotte.child.age);

charlotte.mother.age = 21;

console.log(charlotte.mother.age);
console.log(charlotte.child.age);
//------------------------------------------------------------------------------
// 3rd theory
//
let charlotte = {
    age: 20
};

charlotte.mother = charlotte;
charlotte.child = charlotte;

console.log(charlotte.child.mother.child.mother.age);
console.log(charlotte.mother.child.mother.child.age);

charlotte.mother.age = 21;

console.log(charlotte.child.mother.child.mother.age);
console.log(charlotte.mother.child.mother.child.age);
//--------------//--------------//--------------//--------------//--------------


