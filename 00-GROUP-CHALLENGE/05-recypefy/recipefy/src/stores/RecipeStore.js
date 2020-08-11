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
	getRecipeByTitle(title) {
		const actualRecipe = _recipes.find((recipe) => recipe.title === title);
		return actualRecipe;
	}
	getTopFiveRecipes() {
		let topFive = _recipes.slice(0, 5);
		return topFive;
	}
}

dispatcher.register((action) => {
	switch (action.type) {
		case actionTypes.LOAD_RECIPE:
			_recipes = action.data;
			recipeStore.emitChange(_recipes);
			break;
		default:
			throw `The action ${action.type} is unknown`;

	}
});

const recipeStore = new RecipeStore();
export default recipeStore;
