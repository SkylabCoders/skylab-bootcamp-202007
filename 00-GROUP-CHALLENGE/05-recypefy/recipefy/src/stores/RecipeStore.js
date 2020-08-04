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
		const actualRecipe = _recipes.find((recipe) => recipe.id === id);
		return actualRecipe;
	}
	getTopFiveRecipes() {
		let topFive = _recipes.sort(function (recipe1, recipe2) {
			let result = 0;
			if (recipe1.puntuation > recipe2.puntuation) {
				result = -1;
			} else if (recipe1.puntuation < recipe2.puntuation) {
				result = 1;
			}
			return result;
		});
		topFive = topFive.slice(0, 5);
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
			break;
	}
});

const recipeStore = new RecipeStore();
export default recipeStore;
