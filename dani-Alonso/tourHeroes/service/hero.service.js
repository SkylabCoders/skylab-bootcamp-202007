class HeroService {
    getHeroList() {
        return this.getHeroList;
    }

    getHeroById(id) {
        setTimeout();
        return this.getHeroList.find((hero) => hero.id === id);
    }
    getHeroByName(name) {
        return this.getHeroList.find((hero) => hero.name === name);
    }
}

const heroService = new HeroService();