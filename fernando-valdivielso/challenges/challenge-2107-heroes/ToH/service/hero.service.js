class HeroService {

    getHeroList () {
       return heroList;
    }

    getHeroById (id) {
        return new Promise((resolve, reject) => {
            const response = heroList.find((hero) => hero.id === id);
            setTimeout(() => {
                response ? resolve(response) : reject('Theres is no hero with id: ' + id);
             }, 2000);
        });
        
    }

    getHeroByName (name) {
        return heroList.find(hero => hero.name === name);
    }
}

const heroService = new HeroService();