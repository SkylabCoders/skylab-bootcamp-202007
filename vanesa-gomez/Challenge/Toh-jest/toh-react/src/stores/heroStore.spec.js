import heroStore from './heroStore';
import actionTypes from '../actions/actionTypes';
import dispatcher from '../appDispatcher';

function reduceAction(action, data) {
	return {
		type: action,
		data
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

	it('Should create', () => {
		expect(myCallbackMockFunction).toHaveBeenCalled();
		expect(myCallbackMockFunction).toHaveBeenCalledTimes(1);
		expect(heroStore).toBeDefined();
	});

	it('Should register LOAD_HEROES', () => {
		expect(heroStore.getHeroes()).toEqual(action.data);
	});
	it('Should register UPDATE_HERO', () => {
		action = reduceAction(actionTypes.UPDATE_HERO, {
			id: 14,
			name: 'Celeritas'
		});
		dispatcher.dispatch(action);

		const updateHero = heroStore.getHeroById(action.data.id);

		expect(updateHero).toEqual(action.data);
	});

	it('Should register UPDATE_HERO with invalid ID', () => {
		action = reduceAction(actionTypes.UPDATE_HERO, [
			{ id: 25, name: 'Celeritas' }
		]);
		dispatcher.dispatch(action);

		const updateHero = heroStore.getHeroById(action.data.id);
		expect(updateHero).not.toBeDefined();
	});

	it('Should register UPDATE_HERO with an id less than 0', () => {
		action = reduceAction(actionTypes.LOAD_HERO, [
			{ id: -3, name: 'Celeritas' }
		]);
		dispatcher.dispatch(action);

		// const updateHero=heroStore.getHeroById(action.data.id);
		// expect(updateHero).
	});

	it('Should create a new hero', () => {
		const name = 'Gilberto';

		action = reduceAction(actionTypes.CREATE_HERO, { name });
		dispatcher.dispatch(action);

		const isSavedHero = heroStore
			.getHeroes()
			.some((hero) => hero.name === name);

		expect(isSavedHero).toEqual(true);
	});

	it('Should delete a hero', () => {
		const id = 14;
		action = reduceAction(actionTypes.DELETE_HERO, { id });
		dispatcher.dispatch(action);
		const isDeletedHero = heroStore.getHeroById(id);
		expect(isDeletedHero).toBeUndefined();
	});

	it('Should handle default cade for action types', () => {
		try {
			dispatcher.dispatch({});
			expect(heroStore).toBeFalsy();
		} catch (errorMessage) {
			const message = 'The action type is unknown. action.type: undefined';
			expect(errorMessage).toEqual(message);
		}
	});
});
