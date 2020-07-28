/* Francesc Brugarolas - skylab bootcamp 202007 - challenge tour of heroes */
'use strict';

class HeroService {
    getHeroList() {
        return HERO_LIST;
    }
    getHeroListPage(page, itemsPerPage){
        let result = Array.from(0);
        let start = page * itemsPerPage;
        let end = start + itemsPerPage;
        for (let i=start; i<end; i++){
            result.push(HERO_LIST[i]);
        }
        return result;
    }
    getHeroById(id){
        for (let el of HERO_LIST){
            if (el.id === id){ return el; }
        }
    }
    getHeroByName(name){
        for (let el of HERO_LIST){
            if (el.name === name){ return el; }
        }
    }
    getHeroByRealName(realName){
        for (let el of HERO_LIST){
            if (el.biography.fullName === realName){ return el; }
        }
    }
    getHeroBySlug(slug){
        for (let el of HERO_LIST){
            if (el.slug === slug){ return el; }
        }
    }
    getHeroImageURLsById(id){
        for (let el of HERO_LIST){
            if (el.id === id){ return el.images; }
        }
    }
    getHeroBiographyById(id){
        for (let el of HERO_LIST){
            if (el.id === id){ return el.biography; }
        }
    }
    getHeroAppearanceById(id){
        for (let el of HERO_LIST){
            if (el.id === id){ return el.appearance; }
        }
    }
    getHeroConnectionsById(id){
        for (let el of HERO_LIST){
            if (el.id === id){ return el.connections; }
        }
    }
}
