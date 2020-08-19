const heroStore = require('./heroStore');
const dispatcher = require('./dispatcher');
const actionTypes = require('./actionTypes');

let heroList = require('./hero.mock');
let action = null;

function actionCreator(type, data = {}) {
	return { type, data };
}

describe('Hero store test', () => {
	let callback = null;
	beforeAll(() => {
		callback = jest.fn();
		heroStore.addChangeListener(callback);
		heroStore.emitChange();
	});
	afterAll(() => {
		heroStore.removeChangeListener(callback);
	});
	it('should create', () => {
		expect(callback).toHaveBeenCalled;
		expect(heroStore).toBeDefined;
	});

	it('should get heroList', () => {
		action = actionCreator(actionTypes.LOAD_HEROES, heroList);
		dispatcher.dispatch(action);
		expect(heroStore.getHeroes()).toEqual(heroList);
	});

	it('should save hero', () => {
		const hero = { name: 'BOMBASTO' };
		action = actionCreator(actionTypes.CREATE_HERO, hero);
		dispatcher.dispatch(action);
		const newHero = heroStore
			.getHeroes()
			.find((element) => element.name === hero.name);
		expect(newHero.name).toEqual(hero.name);
	});

	it('should register update hero', () => {
		const hero = { id: 14, name: 'Updated Celeritas' };
		action = actionCreator(actionTypes.UPDATE_HERO, hero);

		dispatcher.dispatch(action);

		const updateHero = heroStore.getHeroById(action.data.id);

		expect(updateHero).toEqual(action.data);
	});

	it('should detele a hero', () => {
		const id = 14;
		action = actionCreator(actionTypes.DELETE_HERO, { id });
		dispatcher.dispatch(action);

		expect(heroStore.getHeroById(id)).not.toBeDefined();
	});

	it('should handle default case for action types', () => {
		try {
			dispatcher.dispatch({ type: 'INVENT_ACTION' });
			expect(heroStore).toBeFalsy();
		} catch (error) {
			const message = `The action INVENT_ACTION is unknown`;
			expect(error).toEqual(message);
		}
	});

	it('should create a new hero when there is an ID lower than 0', () => {
		const name = 'BOMBASTO';

		action = actionCreator(actionTypes.LOAD_HEROES, [
			{ id: -1, name: 'Celeritas' }
		]);
		dispatcher.dispatch(action);

		action = actionCreator(actionTypes.CREATE_HERO, { name });
		dispatcher.dispatch(action);

		const isSavedHero = heroStore
			.getHeroes()
			.some((hero) => hero.name === name);

		expect(isSavedHero).toEqual(true);
	});
});
