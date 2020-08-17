import recipeStore from './RecipeStore';
import actionTypes from '../actions/actionTypes';
import dispatcher from '../Dispatcher';
let action = null;
function reduceAction(type, data = {}) {
	return {
		type,
		data
	};
}
const callback = jest.fn();
describe('RecipeStore', () => {
	beforeEach(() => {
		recipeStore.addChangeListener(callback);
		action = reduceAction(actionTypes.LOAD_RECIPE, [
			{
				title: 'Grilled Tofu Salad With Miso Dressing',
				source: 'Steamy Kitchen'
			},
			{ title: 'potato', source: 'Steamy Kitchen' },
			{ title: 'tomato', source: 'Steamy Kitchen' },
			{ title: 'Chicken', source: 'Steamy Kitchen' },
			{ title: 'Pie', source: 'Steamy Kitchen' }
		]);

		dispatcher.dispatch(action);
	});
	afterEach(() => {
		recipeStore.removeChangeListener(callback);
	});
	it('should create', () => {
		expect(callback).toBeCalled();
		expect(recipeStore).toBeDefined();
	});
	it('should register GET_RECIPES', () => {
		expect(recipeStore.getRecipes()).toEqual(action.data);
	});
	it('should register GET_RECIPE_BY_TITLE', () => {
		expect(
			recipeStore.getRecipeByTitle('Grilled Tofu Salad With Miso Dressing')
		).toEqual(action.data[0]);
	});
	it('should register GET_TOP_FIVE_RECIPES', () => {
		expect(recipeStore.getTopFiveRecipes()).toEqual(action.data);
	});
});
