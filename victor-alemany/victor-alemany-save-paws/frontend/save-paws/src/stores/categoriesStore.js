import { EventEmitter } from 'events';
import dispatcher from '../dispatcher/dispatcher';
import actionTypes from '../actions/action.types';

const CHANGE_EVENT = 'change';

let _categories = [];

class CategoriesStore extends EventEmitter {
	addChangeListener(callback) {
		this.on(CHANGE_EVENT, callback);
	}

	removeChangeListener(callback) {
		this.removeListener(CHANGE_EVENT, callback);
	}

	emitChange() {
		this.emit(CHANGE_EVENT);
	}

	getCategories() {
		return _categories;
	}
}

const categoriesStore = new CategoriesStore();
dispatcher.register((action) => {

	if(action.type === actionTypes.LOAD_CATEGORIES){
		_categories = action.data;
			categoriesStore.emitChange();
	}
});

export default categoriesStore;
