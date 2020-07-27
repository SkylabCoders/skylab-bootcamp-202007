function HeroService() {
    this.getHeroList = function () {
        return heroList;
    };
    this.getHeroById = function (id) {
        return heroList.find / ((hero) => hero.id === id);
    };
    this.getHeroByName = function (name) {
        return heroList.find((hero) => hero.name === name)
    }
}