
class HeroService {
    getHeroList() {
        const errorMesaje = 'There is no hero list'
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const response = heroList;
                response ? resolve(response) : reject(errorMesaje);
            }, 2000)
        })
    }
    getHeroById(id) {
        const errorMesaje = 'There is no hero with id: ';
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const response = heroList.find((hero) => hero.id === id);
                response ? resolve(response) : reject(errorMesaje + id);
            }, 2000);
        });
    }
    getHeroByName(name) {
        return heroList.find((hero) => hero.name === name)
    }
}

const heroService = new HeroService;