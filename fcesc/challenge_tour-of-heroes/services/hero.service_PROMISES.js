/* Francesc Brugarolas - skylab bootcamp 202007 - challenge tour of heroes */
'use strict';

class HeroService {
    getHeroList() {
        return new Promise((resolve, reject) => {
            let response = HERO_LIST;
            setTimeout(()=> {
                response ? resolve(response) : reject(`Query of full hero list timed out or unsuccessful.`);
            },1000);
        })
    }
    getHeroListPage(page, itemsPerPage){
        return new Promise((resolve, reject) =>{
            let result = Array.from(0);
            let start = page * itemsPerPage;
            let end = start + itemsPerPage;
            for (let i=start; i<end; i++){
                result.push(HERO_LIST[i]);
            }
            setTimeout(() => {
                result ? resolve(result) : reject(`Query of page ${page} of Hero List with ${itemsPerPage} items per page timed our or unsuccessful.`);
            }, 1000);
        });
    }

    getHeroById(id){
        return this.getHeroByProperty('id', id);
    }
    getHeroByName(name){
        return this.getHeroByProperty('name', name);
    }
    getHeroByRealName(realName){
        return new Promise((resolve, reject) => {
            let response;
            for (let el of HERO_LIST){
                if (el.biography.fullName === realName){ response = el; }
            }
            setTimeout(()=> {
                response ? resolve(response) : reject(`Query get first hero with 'real name'='${realName}' timed out or unsuccessful.`)
            }, 1000);
        })
    }
    getHeroBySlug(slug){
        return this.getHeroByProperty('slug', slug).then((r)=>{return r}).catch(this.handleError);
    }
    getHeroImageURLsById(id){
        return this.getHeroPropertyByProperty('id', id,'images').then((r)=>{return r}).catch(this.handleError);
    }
    getHeroBiographyById(id){
        return this.getHeroPropertyByProperty('id', id,'biography').then((r)=>{return r}).catch(this.handleError);
    }
    getHeroAppearanceById(id){
        return this.getHeroPropertyByProperty('id', id,'appearance').then((r)=>{return r}).catch(this.handleError);
    }
    getHeroConnectionsById(id){
        return this.getHeroPropertyByProperty('id', id,'connections').then((r)=>{return r}).catch(this.handleError);
    }

    getHeroByProperty(propertyName, propertyValue){
        return new Promise((resolve, reject) => {
            let response;
            for (let el of HERO_LIST){
                if (el[propertyName] === propertyValue){ response = el; }
            }
            setTimeout(()=> {
                response ? resolve(response) : reject(`Query get first hero with '${propertyName}'='${propertyValue}' timed out or unsuccessful.`)
            }, 1000);
        })
    }
    getHeroPropertyByProperty(propertyName, propertyValue, targetPropertyName){
        return new Promise((resolve, reject)=>{
            let response;
            for (let el of HERO_LIST){
                if (el[propertyName] === propertyValue){ response = el[targetPropertyName]; }
            }
            setTimeout(() => {
                response ? resolve(response) : reject(`Query get property ${targetPropertyName} of first hero with '${propertyName}=${propertyValue}' timed out or unsuccessful.`);
            },1000);
        })

    }
    getAllHeroesByProperty(propertyName, propertyValue){
        return new Promise((resolve, reject)=>{
            let result = [];
            for (let el of HERO_LIST){
                if (el[propertyName] === propertyValue){ result.push(el) }
            }
            setTimeout(()=>{
                result ? resolve(result) : reject(`Query get all heroes with '${propertyName}=${propertyValue}' timed out or unsuccessful.`);
            },1000);
        })

    }

    handleError(err){
        return console.log('epic fail -> ', err);
    }
}
