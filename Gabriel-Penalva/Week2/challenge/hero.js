function Hero(tName, tId) {

    let name = tName;
    let id = tId;
    function getName() {
        return name;
    }

    function getId() {
        return id;
    }

    function setName(newName) {
        name = newName;
    }
    if (arguments.length !== 2) {
        return null;
    } else
        return { getName, getId, setName };
}

let heros = [];
let nName;
let herosNames = ['Iron-man', 'Spider-man', 'Hulk', 'Thor', 'Cap. America', 'Black Widow', 'Scarlet Whitch'];

let htmlId = document.getElementById('heroId');
let htmlName = document.getElementById('heroName');
let newName = document.getElementById('inp');



function setHeros(herosNames) {
    let i = 0;
    for (hero in herosNames) {
        heros.push(new Hero(herosNames[i], i + 1));
    }
}


setHeros(herosNames);



function printHtmlName(name) {
    htmlName.innerText = name + ' Details!';
}
function printHtmlId(id) {
    htmlId.innerText = 'id: ' + id;
}
function setHeroName(id) {
    heros[id - 1].setName(newName.nodeValue);
}

function getHeroName(id) {
    let name = heros[id - 1].getName();
    newName.innerText = name;
}

// Execute a function when the user releases a key on the keyboard
newName.addEventListener("keyup", function (event) {
    // Number 13 is the "Enter" key on the keyboard
    if (event.keyCode === 13) {
        // Cancel the default action, if needed
        event.preventDefault();
        // Trigger the button element with a click
        nName = newName.value;
        heros[0].setName(nName);
        printHtmlName(heros[0].getName());
    }

});

printHtmlId(heros[0].getId());

printHtmlName(heros[0].getName());