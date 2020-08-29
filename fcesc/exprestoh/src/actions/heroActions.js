const actionTypes = require('actionTypes');
const dispatcher = require('./../dispatcher');
const MOCK_HERO_LIST = require('./../../mockdata/HERO_LIST');

/* Las funciones sonn action creators */
exports.loadHeroesList_full = function loadHeroesList_full(){
    return new Promise ((resolve, reject) => {
        if(MOCK_HERO_LIST){
            resolve(MOCK_HERO_LIST)
                .then(data => {
                    dispatcher.dispatch({
                        type: actionTypes.LOAD_HERO_LIST_FULL,
                        data: data
                    })
                })
                .catch((err)=>{console.log(err);})
        } else {
            reject(()=>{throw new Error('Unable to return promise in loadHeroes')})
        }
    })
}

exports.loadHeroesList_top = function loadHeroesList_top(){
    if(MOCK_HERO_LIST){
        let newHeroList = [ ...MOCK_HERO_LIST ];
        let max = 0;
        ( newHeroList.length >= 5 ) ? max = 5 : max = newHeroList.length;
        let heroes_list_top;
        ( newHeroList.length === 0 ) ? heroes_list_top = undefined : heroes_list_top = newHeroList.slice(0, max);
        dispatcher.dispatch({
            type: actionTypes.LOAD_HERO_LIST_TOP,
            data: heroes_list_top
        })
    } else {
        throw new Error('Unable to return promise in loadHeroes')
    }
}

exports.loadHeroesList_paginated = function loadHeroesList_paginated (page, itemsPerPage){
    let result = [];
    let start = page*itemsPerPage;
    let end = start + itemsPerPage;
    for ( let i=start; i<end; i++ ){
        if(MOCK_HERO_LIST[i] !== undefined){ result.push(MOCK_HERO_LIST[i]) }
    }
    // console.log('AQUI - LOADPAGINATEDHEROES ACTION ENTERED WITH', result);
    dispatcher.dispatch({
        type: actionTypes.LOAD_HERO_LIST_PAGINATED,
        data: result
    })
}

exports.updateHero = function updateHero (hero){
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

exports.createHero = function createHero (hero){
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

exports.loadHeroById = function loadHeroById (id){
    //console.log('ENTERING ACION loadHeroById WITH id:', id);
    let result = MOCK_HERO_LIST.find(e=>e.id===id);
    //console.log('Result to be dispatched:', result);
    dispatcher.dispatch({
        type: actionTypes.LOAD_HERO_BY_ID,
        data: result
    })
}


