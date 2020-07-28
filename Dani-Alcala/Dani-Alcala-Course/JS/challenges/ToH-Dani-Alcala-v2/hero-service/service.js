class HeroService {
    getHeroList () {
        return HeroList
    }

    getHeroById(id) {
        return heroList.find((hero) => hero.id === id);
    }

    getHeroByName(name) {
        return heroList.find((hero) => hero.name === name);
    }

    
}