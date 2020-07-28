class HeroService {

    getHeroList() {
        return heroList;
    }

    getHeroById(id) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const response = heroList.find((hero) => hero.id === id);
                response
                    ? resolve(response)
                    : reject('There is no hero with id: ' + id);
            }, 2000);
        });
        //return heroList.find((hero) => hero.id === id);
    }

    getHeroByName(name) {
        return heroList.find((hero) => hero.name === name);
    }

}
const heroService = new HeroService();
