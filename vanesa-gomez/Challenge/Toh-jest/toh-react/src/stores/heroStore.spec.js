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
	beforeEach(() => {
		action = reduceAction(actionTypes.LOAD_HEROES, [
			{ id: 14, name: 'Celeritas' }
		]);
		dispatcher.dispatch(action);
	});

	it('Should create', () => {
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
			{ id: 14, name: 'Celeritas' }
		]);
		dispatcher.dispatch(action);

		const updateHero = heroStore.getHeroById(action.data.id);
		expect(updateHero).not.toBeDefined();
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
});
