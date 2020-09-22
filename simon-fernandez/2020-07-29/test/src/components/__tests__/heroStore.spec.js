import heroStore from '../../stores/heroStore';
import actionTypes from '../../actions/actionTypes';
import dispatcher from '../../appDispatcher';
import { create } from 'react-test-renderer';
import { saveHero } from '../../actions/heroActions';

function reduceAction(action, data) {
	return {
		type: action,
		data
	};
}

describe('HeroStore', () => {
	let action;
	const func = jest.fn();

	beforeEach(() => {
		heroStore.addChangeListener(func);
		action = reduceAction(actionTypes.LOAD_HEROES, [
			{ id: 14, name: 'Celeritas' }
		]);
		dispatcher.dispatch(action);
	});
	afterEach(() => {
		heroStore.removeChangeListener(func);
	});

	it('should create', () => {
		expect(heroStore).toBeDefined();
	});

	it('should register LOAD_HEROES', () => {
		expect(heroStore.getHeroes()).toEqual(action.data);
	});

	it('should register UPDATE_HERO', () => {
		action = reduceAction(actionTypes.UPDATE_HERO, {
			id: 14,
			name: 'Celeritas'
		});
		dispatcher.dispatch(action);
		const updateDero = heroStore.getHeroById(action.data.id);
		expect(updateDero).toEqual(action.data);
		expect(func).toHaveBeenCalledTimes(4);
	});

	xit('should register UPDATE_HERO with invalid ID', () => {
		action = reduceAction(actionTypes.UPDATE_HERO, {
			id: 26,
			name: 'Celeritas'
		});
		dispatcher.dispatch(action);
		const updateDero = heroStore.getHeroById(action.data.id);
		expect(updateDero).toEqual(action.data);
	});

	it('should create a new hero', () => {
		const heroName = 'BombastoTeam';

		action = reduceAction(actionTypes.CREATE_HERO, { name: heroName });
		dispatcher.dispatch(action);

		const isSavedHero = heroStore
			.getHeroes()
			.some((hero) => hero.name === heroName);
		expect(isSavedHero).toEqual(true);
	});

	it('should delete a hero', () => {
		const heroId = 14;

		action = reduceAction(actionTypes.DELETE_HERO, { id: heroId });
		dispatcher.dispatch(action);

		const isSavedHero = heroStore
			.getHeroes()
			.some((hero) => hero.name === heroId);
		expect(isSavedHero).toEqual(false);
	});

	it('should enter in default', () => {
		try {
			dispatcher.dispatch({});
			expect(heroStore).toBeFalsy();
		} catch (error) {
			const message = 'No match action with undefined';
			expect(error).toEqual(message);
		}
	});

	it(' should add change listener', () => {
		expect(func).toHaveBeenCalled();
	});

	it(' should remove change listener', () => {
		expect(func).toHaveBeenCalled();
	});
});
