console.log(this);

const person = {
    firstName: 'Alex',
    lastName: 'Cao',
    fullName: function (){
        return firstName + '' + lastName;
    }
}

console.log(person.fullName());

// -------------

function Person (first, last) {
    this.firstName = first;
    this.lastName = last;
    this.fullName = function(){
        return this.firstName + '' + this.lastName
    };
}

const fer = new Person ('Fer', 'Nandez');
console.log(fer);


// -------------


function Bowl(){}

const myBowl = new Bowl();

console.log(myBowl);



// -----------


const w = [1,2,5,6,3,6,5,8]
newForEach(w, function(e){
    console.log(e)
})

function newForEach(ashay, func){
    for( let i = 0; i < ashay.length; i++){
        func(ashay[i]);
    }
}