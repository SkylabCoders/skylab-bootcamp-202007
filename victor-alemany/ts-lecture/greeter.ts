class Student {
    fullName: string;
    constructor(
        public firstName: string, 
        public lastName: string, 
        public middleInitial: string){
        this.fullName = `${firstName} ${lastName} ${middleInitial}`;
    }
}

interface Person {
    firstName: string;
    lastName: string;
}

function greeter (person: Person):string{
    return  `Hello ${person.firstName} ${person.lastName}`;
}

const user = new Student( "Victor", "Alemany", "1") ;
    
const student = { 
    firstName: "Victor",
    lastName: "Alemany",
    middleInitial: "1"
};

document.getElementById('title').innerText= greeter(user);