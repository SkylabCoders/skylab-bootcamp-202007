import { EventEmitter } from 'events';
import dispatcher from '../Dispatcher';
import actionTypes from '../actions/actionTypes';

const CHANGE_EVENT = 'change';
let _recipes = [];
class RecipeStore extends EventEmitter {
	addChangeListener(callback) {
		this.on(CHANGE_EVENT, callback);
	}
	removeChangeListener(callback) {
		this.removeListener(CHANGE_EVENT, callback);
	}
	emitChange() {
		this.emit(CHANGE_EVENT);
	}
	getRecipes() {
		return _recipes;
	}
	getRecipeById(id) {
		return _recipes.find((recipe) => recipe.id === id);
	}
}

dispatcher.register((action) => {
	switch (action.type) {
		case actionTypes.LOAD_RECIPE:
			_recipes = action.data;
			recipeStore.emitChange(_recipes);
			break;
		default:
			break;
	}
});

const recipeStore = new RecipeStore();
export default recipeStore;
