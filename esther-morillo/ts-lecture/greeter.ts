import { middleware } from "yargs";

class Student {
    fullName: string;

    constructor(
        public firstName: string, 
        public middleInitial: string, 
        public lastName: string
    ) {
        this.fullName = `${firstName} ${middleInitial} ${lastName}`;
    }
}

interface Person {
    firstName: string;
    lastName: string;
}

function greeter (person: Person): string {
    return `Hello ${person.firstName} ${person.lastName}`;
}

const user = { firstName: 'Gerard', lastName: 'Ramon' }
document.getElementById('title').innerText = greeter(user);