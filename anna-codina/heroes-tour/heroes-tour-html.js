let newHero = Hero()
let heroesList = [];
const heroName = 'Magneta';
heroesList.push(newHero.createHero(heroName, (heroesList.length + 1)))

const printDetailsTitle = function (hero) {
    const after = ' Details!'
    let title = hero.getName() + after;
    document.getElementById('details__title').innerHTML = title;
}
const printId = function (hero) {
    document.getElementsByClassName('hero-id')[0].innerHTML = hero.getId();
}
let newName = document.getElementById('new-name');
newName.addEventListener("keydown", function (event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        nName = newName.value;
        heroesList[0].setName(nName);
        printDetailsTitle(heroesList[0]);
    }
})

const changeHeroName = function (hero) {
    hero.setName(newName);
    newName.value = newName;
    printDetailsTitle(hero)
}
printDetailsTitle(heroesList[0]);
printId(heroesList[0])
