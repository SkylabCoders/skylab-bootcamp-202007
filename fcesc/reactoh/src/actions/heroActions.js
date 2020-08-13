import HERO_LIST from './../mockdata/superHeroData';
import actionTypes from './actionTypes';
import dispatcher from './../AppDispatcher';
const LOAD_HERO_LIST = HERO_LIST;

/* Las funciones sonn action creators */
export function loadHeroes(){
    return new Promise ((resolve, reject) => {
        if(LOAD_HERO_LIST){
            resolve(LOAD_HERO_LIST)
                .then(data => {
                    dispatcher.dispatch({
                        type: actionTypes.LOAD_HERO_LIST,
                        data: data
                    })
                })
                .catch((err)=>{console.log(err);})
        } else {
            reject(()=>{throw new Error('Unable to return promise in loadHeroes')})
        }
    })
}

export function updateHero(hero){
    return new Promise ((resolve, reject) => {
        if(hero){
            resolve(hero)
                .then(hero => {
                    dispatcher.dispatch({
                        type: actionTypes.UPDATE_HERO,
                        data: hero
                    })
                })
                .cath((err)=>{console.log(err)})
        } else {
            reject(()=>{throw new Error('Unable to return promise in updateHero')})
        }
    })
}

export function createHero(hero){
    return new Promise ((resolve, reject) => {
        if(hero){
            resolve(hero)
                .then(hero => {
                    dispatcher.dispatch({
                        type: actionTypes.CREATE_HERO,
                        data: hero
                    })
                })
                .cath((err)=>{console.log(err)})
        } else {
            reject(()=>{throw new Error('Unable to return promise in createHero')})
        }
    })
}

export function loadPaginatedHeroes(page, itemsPerPage){
    let result = [];
    let start = page*itemsPerPage;
    let end = start + itemsPerPage;
    for ( let i=start; i<end; i++ ){
        if(LOAD_HERO_LIST[i] !== undefined){ result.push(LOAD_HERO_LIST[i]) }
    }
    // console.log('AQUI - LOADPAGINATEDHEROES ACTION ENTERED WITH', result);
    dispatcher.dispatch({
        type: actionTypes.LOAD_PAGINATED_HERO_LIST,
        data: result
    })
}

export function loadHeroById(id){
    //console.log('ENTERING ACION loadHeroById WITH id:', id);
    let result = LOAD_HERO_LIST.find(e=>e.id===id);
    //console.log('Result to be dispatched:', result);
    dispatcher.dispatch({
        type: actionTypes.LOAD_HERO_BY_ID,
        data: result
    })
}


