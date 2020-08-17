const { EventEmitter } = require('events');
const { dispatcher } = require('./../dispatcher');
const { actionTypes } = require('./../actions/actionTypes');

let CHANGE_EVENT = 'change';
let _heroes_list_full = [];
let _heroes_list_paginated = [];
let _heroes_list_top = [];
let _current_hero = undefined;

class HeroStore extends EventEmitter{
    addChangeListener(callback){
        this.on(CHANGE_EVENT, callback);
    }
    
    removeChangeListener(callback){
        this.removeListener(CHANGE_EVENT, callback);
    }

    emitChange(){
        this.emit(CHANGE_EVENT);
    }
    
    getHeroesLlist_full(){
        return _heroes_list_full;
    }

    getHeroesList_paginated(){
        return _heroes_list_paginated;
    }

    getHeroesList_top(){
        return _heroes_list_top;
    }

    getHero_byId(id){
        return ( _current_hero.id === id ) ? _current_hero : undefined ;
    }

    getHero_byName(name){
        return _heroes_list_full.find(el=>el.name === name);
    }

    getHeroBiography_byId(id){
        return _heroes_list_full.find(el=>el.id === id).biography;
    }
}

const heroStore = new HeroStore();

exports.heroStore = heroStore;

dispatcher.register(action => {
    switch(action.type){
        case actionTypes.LOAD_HERO_LIST_FULL:
            _heroes_list_full = action.data;
            heroStore.emitChange(_heroes_list_full);
            break;
        case actionTypes.LOAD_HERO_LIST_PAGINATED:
            _heroes_list_paginated = action.data;
            heroStore.emitChange(_heroes_list_paginated);
            break;
        case actionTypes.LOAD_HERO_LIST_TOP:
            _heroes_list_top = action.data;
            heroStore.emitChange(_heroes_list_top);
            break;
        case actionTypes.LOAD_HERO_BY_ID:
            _current_hero = action.data;
            heroStore.emitChange(_current_hero);
            break;
        case actionTypes.LOAD_HERO_BY_NAME:
            _current_hero = action.data;
            heroStore.emitChange(_current_hero);
            break;
        case actionTypes.CREATE_HERO:
            _heroes_list_full = [..._heroes_list, action.data];
            heroStore.emitChange(_heroes_list_full);
            break;
        case actionTypes.UPDATE_HERO:
            _heroes_list_full = [..._heroes_list, action.data];
            heroStore.emitChange(_heroes_list_full);
            break;
        case actionTypes.DELETE_HERO:
            _heroes_list_full = [..._heroes_list, action.data];
            heroStore.emitChange(_heroes_list_full);
            break;
        default:
            throw 'Action not allowed';
    }
})