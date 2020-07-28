class HeroService {
    getHeroList() {
        /*return new Promise((resolve) => {
            setTimeout(() => {
                resolve(heroList);
            }, 2000)
        })*/
        return fetch('../hero-list.json').then((response) => {
            return response.json();
        });
    }
    getHeroById(id) {
        return fetch('../hero-list.json')
            .then((response) => {
                return response.json();
            })
            .then((response) => {
                let hero = response.find((hero) => hero.id === id);
                return hero;
            });
    }
    getHeroByName(name) {
        return heroList.find((hero) => hero.name === name);
    }
}
const heroService = new HeroService();