class HeroService {

    getHeroList = function () {
        return heroList;
    };
    getHeroByName = function (name) {
        return heroList.find((hero) => hero.name === name);
    };
    getHeroById = function (id) {
        return heroList.find((hero) => hero.id === id)
    };

}

const service = new HeroService();
service.getHeroList();
