import { EventEmitter } from "events";
import dispatcher from "../appDispatcher";
import actionTypes from "../actions/actionTypes";

const CHANGE_EVENT = 'change'
//lista privada por _ 
let _heroes = [];
class HeroStore extends EventEmitter{
    addChangeListener(callback){
        this.on(CHANGE_EVENT,callback);
    }
    removeChangeListener(callback){
        this.removeListener(CHANGE_EVENT, callback);
    }
    emitChange(){
        this.emit(CHANGE_EVENT);
    }

    getHeroes(){
        return _heroes;
    }

    getHeroById(id){
       return _heroes.find((hero) => hero.id === +id);
    }

    updateHero(id){
        return _heroes.find((hero) => hero.id === id);
    }

    createHero(name){
        let newId = 21;
        let hero = {newId,name}
        _heroes = [..._heroes,hero];
        newId++;
    }
}

//patrón singleton
const heroStore = new HeroStore();
dispatcher.register(action => {
    switch(action.type){
        case actionTypes.LOAD_HEROES:
            _heroes = action.data;
            heroStore.emitChange(_heroes)
            break;
        case actionTypes.CREATE_HEROES:
            _heroes = [..._heroes,action.data];
            heroStore.emitChange();
            break;
        case actionTypes.GET_HERO:
             _heroes = action.data;
            heroStore.emitChange(_heroes);
                break;
        default:
            break;
    }
});

export default heroStore;