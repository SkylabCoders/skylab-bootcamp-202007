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

	it('should create', () => {
		expect(heroStore).toBeDefined();
		expect(myCallbackMockFunction).toHaveBeenCalled();
		expect(myCallbackMockFunction).toHaveBeenCalledTimes(1);
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
		expect(updateHero).toEqual(action.data);
	});

	it('should register UPDATE_HERO with invalid ID', () => {
		action = reduceAction(actionTypes.UPDATE_HERO, {
			id: 24,
			name: 'Updated Celeritas'
		});
		dispatcher.dispatch(action);

		const updateHero = heroStore.getHeroById(action.data.id);
		expect(updateHero).not.toBeDefined;
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

	it("shouldn't create a new hero with a negative ID", () => {
		const name = 'Gilberto';
		action = reduceAction(actionTypes.LOAD_HEROES, [{ id: -1, name }]);
		dispatcher.dispatch(action);

		const isSavedHero = heroStore
			.getHeroes()
			.some((hero) => hero.name === name);
		expect(isSavedHero).toEqual(true);
	});

	it('should delete a hero', () => {
		const id = 14;
		action = reduceAction(actionTypes.DELETE_HERO, { id });
		dispatcher.dispatch(action);
		expect(heroStore.getHeroById(id)).not.ToBeDefined;
	});

	// own approach to test default case (thx Betho)
	it('should throw an error', () => {
		try {
			actionTypes.INEXISTENT;
		} catch (err) {
			expect(err).toBeInstanceOf(Error);
		}
	});

	// GIlberto's approach to test default case
	it('should handle default case for action types', () => {
		try {
			dispatcher.dispatch({});
			expect(heroStore).toBeFalsy();
		} catch (error) {
			const message = `The action type is unknown. action.type: undefined`;
			expect(error).toEqual(message);
		}
	});

	it('should invoke change listener callback', () => {
		heroStore.emitChange;
		expect(myCallbackMockFunction).toHaveBeenCalled();
		expect(myCallbackMockFunction).toHaveBeenCalledTimes(1);
	});
});
