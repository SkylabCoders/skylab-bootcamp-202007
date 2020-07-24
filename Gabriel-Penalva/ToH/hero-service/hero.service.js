function HeroService() {

    this.getHeroList = function () {
        return heroList;
    };
    this.getHeroByName = function (name) {
        return heroList.find((hero) => hero.name === name);
    };
    this.getHeroById = function (id) {
        return heroList.find((hero) => hero.id === id)
    };

}

const service = new HeroService();
service.getHeroList();
