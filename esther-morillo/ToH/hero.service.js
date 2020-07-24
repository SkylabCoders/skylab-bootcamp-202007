function HeroService() {

    this.getHeroList = function () {
        //Tengo que retornar una lista, qué es una lista? un array
        return heroList;
    }

    this.getHeroById = function (id) {
        return heroList.find((hero) => hero.id === id);
    }

    this.getHeroByName = function (name) {
        return heroList.find((hero) => hero.name === name);
    }
}