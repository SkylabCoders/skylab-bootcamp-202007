import dispatcher from '../appDispatcher';
import actionTypes from '../actions/actionTypes';
import { EventEmitter } from 'events';
import { Switch } from '../components/Navbar/Switch/Switch';

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

	switchToDarkTheme() {
		const switchElem = document.getElementsByClassName('custom-control-input');

		const switchChecked = switchElem.customSwitches.checked;
		if (switchChecked === true) {
			document.documentElement.style.setProperty(
				'--font-color-footer',
				'#212529'
			);
			document.documentElement.style.setProperty(
				'--form-color-background',
				'#212529'
			);
		}
	}
}

const navbarStore = new NavbarStore();

dispatcher.register((action) => {
	//accion que tiene tipo y data
	switch (action.type) {
		case actionTypes.LOAD_DARK_COLORS:
			navbarStore.switchToDarkTheme(actions.data);
			navbarStore.emitChange(); //notifica al compoente interesado de los cambios
			break;
	}
});

export default navbarStore;
