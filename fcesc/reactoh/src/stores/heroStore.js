import { EventEmitter } from 'events';
import dispatcher from './../AppDispatcher';
import actionTypes from './../actions/actionTypes';

const CHANGE_EVENT = 'change';
let _heroes_list = [];
let _paginated_heroes_list = [];
let _current_hero = undefined;

class heroStore extends EventEmitter{
    addChangeListener(callback){
        this.on(CHANGE_EVENT, callback);
    }
    
    removeChangeListener(callback){
        this.removeListener(CHANGE_EVENT, callback);
    }

    emitChange(){
        this.emit(CHANGE_EVENT);
    }
    
    getHeroes(){
        return _heroes_list;
    }

    getPaginatedHeroes(){
        //console.log('AQUI - ACCESSING METHOD GETPAGINATEDHEROES', _paginated_heroes_list);
        return _paginated_heroes_list;
    }

    getHeroById(_id){
        return ( _current_hero._id === _id ) ? _current_hero : undefined ;
    }

    getHeroByName(name){
        return _heroes_list.find(el=>el.name === name);
    }

    getHeroBiographyById(id){
        return _heroes_list.find(el=>el.id === id).biography;
    }
}

const HeroStore = new heroStore(); // hacemos un singleton, haciendo una instancia de la clase en una constante, no se podrán crear más instancias
//idealmente quitarlo de aquí cuando esté la api e inicializarlo en otro archivo pasándole los datos como argumento

export default HeroStore;

dispatcher.register(action => {
    switch(action.type){
        case actionTypes.DELETE_HERO:
            _heroes_list = _heroes_list.filter(el=>el._id !== action.data);
            HeroStore.emitChange(_heroes_list);
            break;
        case actionTypes.CREATE_HERO:
            _heroes_list = [..._heroes_list, action.data];
            HeroStore.emitChange(_heroes_list);
            break;
        case actionTypes.LOAD_HERO_BY_ID:
            _current_hero = action.data;
            HeroStore.emitChange(_current_hero);
            break;
        case actionTypes.LOAD_HERO_LIST:
            _heroes_list = action.data;
            HeroStore.emitChange(_heroes_list);
            break;
        case actionTypes.LOAD_PAGINATED_HERO_LIST:
            _paginated_heroes_list = action.data;
            HeroStore.emitChange(_paginated_heroes_list);
            break;
        default:
            throw 'Action not allowed';
    }
})