import { EventEmitter } from 'events';
import dispatcher from '../appDispatcher';
import actionTypes from '../actions/actionTypes';

const CHANGE_EVENT = 'change';
let _heroes = [];

class HeroStore extends EventEmitter {
	addChangeListener(callback) {
		this.on(CHANGE_EVENT, callback);
	}

	removeChangeListener(callback) {
		this.removeListener(CHANGE_EVENT, callback);
	}

	emitChange() {
		this.emit(CHANGE_EVENT);
	}

	getHeroes() {
		return _heroes;
	}

	getHeroById(id) {
		return _heroes.find((hero) => hero.id === id);
	}

	getNumberOfHeroes(heroNumber) {
		return _heroes.slice(0, heroNumber);
	}

	deleteHeroById(id) {
		return _heroes.filter((hero) => hero.id !== id);
	}

	updateHero(actionHero) {
		const newHero = {
			id: `${actionHero.newId}`,
			name: `${actionHero.newName}`
		};
		const index = _heroes.findIndex((hero) => hero.id === actionHero.id);
		_heroes[index] = newHero;
		return [..._heroes];
	}
}

const heroStore = new HeroStore();

//Dispatcher, me interesa saber d estas acciones. Per poder captar les actions
dispatcher.register((action) => {
	switch (action.type) {
		case actionTypes.LOAD_HEROES:
			_heroes = action.data;
			heroStore.emitChange();
			break;
		case actionTypes.CREATE_HERO:
			_heroes = [..._heroes, action.data];
			heroStore.emitChange(); // No fa falta emetre res xk nmes fa update de la llista.
			break;
		case actionTypes.DELETE_HERO:
			_heroes = heroStore.deleteHeroById(action.data);
			heroStore.emitChange();
			break;
		case actionTypes.UPDATE_HERO:
			_heroes = heroStore.updateHero(action.data);
			heroStore.emitChange();
			break;
		default:
			break;
	}
});

export default heroStore;
