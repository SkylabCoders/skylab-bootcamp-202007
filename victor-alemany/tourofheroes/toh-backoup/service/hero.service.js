class HeroService{
     
    getHeroList(){
        return  heroList;
    }
    getHeroById(id){
        return new Promise((resolve,reject) => {
            setTimeout(()=> {
                const response = resolve(heroList.find((hero) => hero.id === id));
                response 
                    ? resolve(response) 
                    : reject('There is no hero widh id:' + id);
            },2000);
        } );
    }
    getHeroByName(name){
        return heroList.find(hero => hero.name === name);
    }
}

const heroService = new HeroService();