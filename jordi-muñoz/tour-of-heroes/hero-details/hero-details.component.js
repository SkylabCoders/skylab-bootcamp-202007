function Hero() {
    let message = document.querySelector('.message-name');
    let nameInput = document.getElementById('hero-name');
    let idInput = document.querySelector('.id-value')
    let name = 'Batman';
    let id = 11;
    function getName() {
        return name;
    }
    function setName(value) {
        name = value;
    }
    function getId() {
        return id;
    }
    function printName() {
        nameInput.value = name;
        message.innerHTML = name + ' details!';
    }
    function printId() {
        idInput.innerHTML = id;
    }
    printName();
    printId();
    return { getName, setName, getId, printName }
}
let hero = new Hero();




