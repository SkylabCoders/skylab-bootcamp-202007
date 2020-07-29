class HeroService {
    getHeroList(){
      
        return fetch('../hero-list.json').then((response) => {return response.json()});
    };

    getHeroById(id){

        return fetch ('../hero-list.json').then((response) => response.json()).then((listedHeroes) => {
            const heroes = listedHeroes.find((hero) => hero.id === id);
            if(!heroes) 'We dont know that id...sorry'
            return heroes;
        })
        // return new Promise ((resolve, reject)=> {
        //     setTimeout(() => {
        //         const response = heroList.find((hero) => hero.id === id);
        //         response ? resolve(response) : reject(`There is no hero with id: ${id}`);
        //     }, 500);
        // });
        
    };

    getHeroByName(name){
        return fetch('../hero-list.json').then((response) => response.json()).then((listedHeroes) => {
            const hero = heroList.find((hero) => hero.name === name);
            if(!hero) throw 'Is no one here with that name';
            return hero;
        })
        // return heroList.find((hero) => hero.name === name)
    };
}

const heroService = new HeroService;
