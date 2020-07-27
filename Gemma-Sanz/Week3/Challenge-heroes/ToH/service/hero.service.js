class HeroService {

    getHeroList() {
        return heroList;
    }

    getHeroById(id) {
        return heroList.find((hero) => hero.id === id);
    }

    getHeroByName(name) {
        return heroList.find((hero) => hero.name === name);
    }
    /* 
        static getHeroList() {
            fetch("hero.json").then((response) => {
                console.log(response)
            });
        };
        static getHeroById(id) {
            return heroList.find((hero) => hero.id === id);
        };
        static getHeroByName(name) {
            return heroList.find((hero) => hero.name === name);
        }; */
}

const heroService = new HeroService();