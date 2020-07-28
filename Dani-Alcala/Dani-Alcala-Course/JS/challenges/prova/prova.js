const user = {
    id: 1,
    name: 'Dani',
    surname: 'Alcala'
}

function Prova () {
    this.init = function() {
        printID();
        printName();
        printSurname();
    }

    function printID () {
        document.getElementById('id').innerHTML = user.id
    }

    function printName() {
        document.getElementById('name').innerHTML = user.name
    }

    function printSurname() {
        document.getElementById('surname').innerHTML = user.surname
    }

}

let test = new Prova();
test.init();