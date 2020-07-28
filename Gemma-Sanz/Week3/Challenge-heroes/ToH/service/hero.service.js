class HeroService {

    getHeroList() {
        return fetch("../hero.json").then((response) => {
            return response.json();
        })

        /* return new Promise((resolve) => {
            resolve(heroesList);
        }) */
    }

    getHeroById(id) {
        return fetch("../hero.json")
            .then((response) => response.json())
            .then((hero) => {
                heroList.find((hero) => hero.id === id);

                setTimeout(() => {
                    response ? resolve(response) : reject("There is no hero with id: " + id);
                }, 2000);
            })
        //return heroList.find((hero) => hero.id === id);
    };

    getHeroByName(name) {
        /*         return new Promise((resolve) => {
                    resolve(heroList)
                }) */
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