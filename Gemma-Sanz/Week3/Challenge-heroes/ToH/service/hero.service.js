class HeroService {

    getHeroList() {
        return new Promise((resolve) => {
            resolve(heroesList);
        })
    }

    getHeroById(id) {
        return new Promise((resolve, reject) => {
            const response = heroList.find((hero) => hero.id === id);
            setTimeout(() => {
                response ? resolve(response) : reject("There is no hero with id: " + id);
            }, 2000);
        });
        //return heroList.find((hero) => hero.id === id);
    };

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