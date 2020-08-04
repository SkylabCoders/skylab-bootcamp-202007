import dispatcher from '../appDispatcher';
import actionTypes from '../actions/actionTypes';
import { EventEmitter } from 'events';

const CHANGE_EVENT = 'change';

class NavbarStore extends EventEmitter {
	addChangeListener(callback) {
		this.on(CHANGE_EVENT, callback);
	}

	removeChangeListener(callback) {
		this.removeListener(CHANGE_EVENT, callback);
	}

	emitChange() {
		this.emit(CHANGE_EVENT);
	}

	switchToDarkTheme(colors) {
		//logica
		console.log();
	}
}

const navbarStore = new NavbarStore();

dispatcher.register((action) => {
	//accion que tiene tipo y data
	switch (action.type) {
		case actionTypes.LOAD_DARK_COLORS:
			navbarStore.switchToDarkTheme(actions.data);
			navbarStore.emit(); //notifica al compoente interesado de los cambios
			break;
	}
});

export default navbarStore;
