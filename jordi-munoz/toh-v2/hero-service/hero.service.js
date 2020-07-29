class HeroService {

    getHeroList() {
        // return new Promise((resolve) => {
        //     resolve(heroList);
        // })
        return fetch('../hero.json')
        .then((response) => {
            return response.json();
        });

    }

    getHeroById(id) {
        return fetch('../hero.json')
        .then((response) => { return response.json() })
        .then((heroes) => {
            let hero = heroes.find((hero) => hero.id === id);
            if (!hero) throw 'There is no hero with id: ' + id;
            return hero;
        });
    }

    // getHeroById(id) {
    //     return new Promise((resolve, reject) => {
    //         setTimeout(() => {
    //             const response = heroList.find((hero) => hero.id === id);
    //             response ? resolve(response) : reject('There is no hero with id: ' + id);
    //         }, 2000);
    //     });
    // }

    getHeroByName(name) {
        return heroList.find((hero) => hero.name === name);
    }

}
const heroService = new HeroService();
