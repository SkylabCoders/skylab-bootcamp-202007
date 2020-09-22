import heroStore from './heroStore';
import actionTypes from '../actions/action-types';
import dispatcher from '../dispatcher';

function reduceAction(action, state) {
	return {
		type: action,
		data: state
	};
}

describe('HeroStore', () => {
	let action;
	let myCallbackMockFunction;

	beforeEach(() => {
		myCallbackMockFunction = jest.fn();
		heroStore.addChangeListener(myCallbackMockFunction);

		action = reduceAction(actionTypes.LOAD_HEROES, [
			{ id: 14, name: 'Celeritas' }
		]);
		dispatcher.dispatch(action);
	});

	afterEach(() => {
		heroStore.removeChangeListener(myCallbackMockFunction);
	});

	it('should create', () => {
		expect(myCallbackMockFunction).toHaveBeenCalled();
		expect(myCallbackMockFunction).toHaveBeenCalledTimes(1);
		expect(heroStore).toBeDefined();
	});

	it('should register LOAD_HEROES', () => {
		expect(heroStore.getHeroes()).toEqual(action.data);
	});

	it('should register UPDATE_HERO', () => {
		action = reduceAction(actionTypes.UPDATE_HERO, {
			id: 14,
			name: 'Updated Celeritas'
		});

		dispatcher.dispatch(action);

		const updateHero = heroStore.getHeroById(action.data.id);

		expect(myCallbackMockFunction).toHaveBeenCalled();
		expect(myCallbackMockFunction).toHaveBeenCalledTimes(2);
		expect(updateHero).toEqual(action.data);
	});

	it('should register UPDATE_HERO with invalid ID', () => {
		action = reduceAction(actionTypes.UPDATE_HERO, {
			id: 25,
			name: 'Updated Celeritas'
		});
		dispatcher.dispatch(action);

		const updateHero = heroStore.getHeroById(action.data.id);
		expect(updateHero).not.toBeDefined();
	});

	it('should create a new hero', () => {
		const name = 'Gilberto';

		action = reduceAction(actionTypes.CREATE_HERO, { name });
		dispatcher.dispatch(action);

		const isSavedHero = heroStore
			.getHeroes()
			.some((hero) => hero.name === name);

		expect(isSavedHero).toEqual(true);
	});

	it('should create a new hero when there is an ID lower than 0', () => {
		const name = 'Gilberto';

		action = reduceAction(actionTypes.LOAD_HEROES, [
			{ id: -1, name: 'Celeritas' }
		]);
		dispatcher.dispatch(action);

		action = reduceAction(actionTypes.CREATE_HERO, { name });
		dispatcher.dispatch(action);

		const isSavedHero = heroStore
			.getHeroes()
			.some((hero) => hero.name === name);

		expect(isSavedHero).toEqual(true);
	});

	it('should detele a hero given and id', () => {
		const id = 14;
		action = reduceAction(actionTypes.DELETE_HERO, { id });
		dispatcher.dispatch(action);

		expect(heroStore.getHeroById(id)).not.toBeDefined();
	});

	it('should handle default case for action types', () => {
		try {
			dispatcher.dispatch({});
			expect(heroStore).toBeFalsy();
		} catch (errorMessage) {
			const message = `The action type is unknown. action.type: undefined`;
			expect(errorMessage).toEqual(message);
		}
	});
});