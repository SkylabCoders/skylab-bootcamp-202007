class HeroService {

    getHeroList = function () {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const response = heroList;
                response ? resolve(response) : reject("there is no list of heros");
            }, 1000);
        });
    };
    getHeroByName = function (name) {
        return heroList.find((hero) => hero.name === name);
    };
    getHeroById = function (id) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const response = heroList.find((hero) => hero.id === id);
                response ? resolve(response) : reject("there is no hero with id: " + id);
            }, 2000);
        });
    }

}

const service = new HeroService();
//service.getHeroList();
