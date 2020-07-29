
class HeroService {
    getHeroList() {
        return fetch('../hero-list.json')
            .then((response) => {
                return response.json()
            })
    }
    getHeroById(id) {
        const errorMesaje = 'There is no hero with id: ';
        return fetch('../hero-list.json')
            .then((response) => { return response.json() })
            .then((response) => {
                const hero = response.find((hero) => hero.id === id);
                if (!hero) throw errorMesaje + id;
                return hero;
            })
    }
    getHeroByName(name) {
        const errorMesaje = 'There is no hero with name: ';
        return fetch('../hero-list.json')
            .then((response) => { return response.json() })
            .then((response) => {
                const hero = response.find((hero) => hero.name === name);
                if (!hero) throw errorMesaje + name;
                return hero;
            })
    }
}

const heroService = new HeroService;