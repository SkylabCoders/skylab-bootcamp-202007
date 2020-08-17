class HeroService {

    getHeroList() {
        return fetch('../hero.json').then((response) => {
            return response.json();

        })
            .catch((error) => console.log("Error", error))

        /* return new Promise((resolve) => {
            resolve(heroesList);
        }) */
    }

    getHeroById(id) {
        return fetch("../hero.json")
            .then((response) => response.json())
            .then((response) => {
                let result = response.find((hero) => hero.id === id);
                // setTimeout(() => {
                //     console.log('aqui', result);
                return result
                // }
                //     , 1000);
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