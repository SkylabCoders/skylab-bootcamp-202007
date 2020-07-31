import { EventEmitted } from 'event';
import dispatcher from '../appDispatcher';
import actionTypes from '../actions/actionTypes';

const CHANGE_EVENT = 'change';
let _heroes = [];

class HeroStore extends EventEmitted {
    addChangeListener(callback) {
        this.on(CHANGE_EVENT, callback);
    }

    removeChangeListener(callback) {
        this.removeChangeListener(CHANGE_EVENT, callback);
    }

    emitChange() {
        this.emit(CHANGE_EVENT);
    }

    getHeroes() {
        return _heroes;
    }

    getHeroById() {
        return _heroes.find(hero => hero.id === id);
    }
}

const heroStore = new HeroStore();

dispatcher.register(action => {
    switch (action.type) {
        case actionTypes.LOAD_HERO:
            _heroes = action.data;
            heroStore.emitChange(_heroes);
            break;
        case actionTypes.CREATE_HERO:
            _heroes = [..._heroes, action.data]
            heroStore.emitChange()
            break;
        default:
            break;
    }
})

export default heroStore;