import heroStore from '../stores/heroStore';
import actionTypes from '../actions/actionTypes';
import dispatcher from '../appDispatcher';

let action = null;
const callback = jest.fn();
function reduceAction(type, data = {}) {
	return {
		type,
		data
	};
}

describe('HeroStore', () => {
	beforeEach(() => {
		heroStore.addChangeListener(callback);
		action = reduceAction(actionTypes.LOAD_HEROES, [
			{ id: 14, name: 'Celeritas' }
		]);
		dispatcher.dispatch(action);
	});
	afterEach(() => {
		heroStore.removeChangeListener(callback);
	});
	it('should create', () => {
		expect(callback).toBeCalled();
		expect(heroStore).toBeDefined();
	});
	it('Should register LOAD_HEROES', () => {
		expect(heroStore.getHeroes()).toEqual(action.data);
	});

	it('Should register UPDATE_HEROES', () => {
		action = reduceAction(actionTypes.UPDATE_HERO, { id: 14, name: 'Update' });
		dispatcher.dispatch(action);
		const upadteHero = heroStore.getHeroById(action.data.id);
		expect(upadteHero).toEqual(action.data);
	});

	it('Should register UPDATE_HERO with invalid ID', () => {
		action = reduceAction(actionTypes.UPDATE_HERO, {
			id: 35,
			name: 'Celeritas'
		});
		dispatcher.dispatch(action);
		const upadteHero = heroStore.getHeroById(action.data.id);
		expect(upadteHero).not.toBeDefined();
	});
	it('Should create a new hero', () => {
		const name = 'Marti';
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
		expect(heroStore.getHeroById(id)).not.toBeDefined();
	});
	it('Should handle default case for action types', () => {
		try {
			action = reduceAction('FALSE_ACTION');
			dispatcher.dispatch(action);
			expect(heroStore).toBeFalsy();
		} catch (error) {
			const message = `The action ${action.type} is unknown `;
			expect(error).toEqual(message);
		}
	});
});
