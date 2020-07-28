
class HeroService {
    getHeroList() {
        return heroList;
    }
    getHeroById(id) {
        const errorMesanje = 'There is no hero with id: ';
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const response = heroList.find((hero) => hero.id === id);
                response ? resolve(response) : reject(errorMesanje + id);
            }, 2000);
        });
    }
    getHeroByName(name) {
        return heroList.find((hero) => hero.name === name)
    }
}

const heroService = new HeroService;