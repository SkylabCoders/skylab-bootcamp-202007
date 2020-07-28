let charlotte = {
    mother: {age: 20}
};

charlotte.child = charlotte.mother;

console.log(charlotte.mother.age);
console.log(charlotte.child.age);

charlotte.mother.age = 21;

console.log(charlotte.mother.age);
console.log(charlotte.child.age);