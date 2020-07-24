function HeroService() {

    this.getHeroList = function () {
        return fetch("hero.json").then(response)
    };
    this.getHeroById = function (id) {
        return heroList.find(hero) => hero.id === id);
    };
    this.getHeroByName = function (name) {
        return heroList.find(hero) => hero.name === name);
    };
}