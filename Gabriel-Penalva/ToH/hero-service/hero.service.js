class HeroService {

    getHeroList = function () {
        // return new Promise((resolve, reject) => {
        //     setTimeout(() => {
        //         const response = heroList;
        //         response ? resolve(response) : reject("there is no list of heros");
        //     }, 1000);
        // });
        return fetch('../hero.json').then((resp) => resp.json());
    };
    getDash = function () {
        return heroList.slice(0, 4);
    };
    getHeroByName = function (name) {
        return heroList.find((hero) => hero.name === name);
    };
    getHeroById = function (id) {
        return fetch('../hero.json')
            .then((resolve) => resolve.json())
            .then((heros) => {
                //setTimeout(() => {
                const response = heros.find((hero) => hero.id === id);
                if (!response) {
                    throw "there is no hero with id: " + id;
                }
                return response;
                //}, 2000);
            });
    }

}

const service = new HeroService();
//service.getHeroList();
