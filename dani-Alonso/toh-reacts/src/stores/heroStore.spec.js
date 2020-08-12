import heroStore from './heroStore';
import actinTypes from '../actions/actionTypes';
import dispatcher from '../appDispatcher';

describe('HeroStore', () => {
	it('should create', () => {
		expect(heroStore).toBeDefined;
	});
	it('should register LOAD_HEROES', () => {
		const actioon = {
			type: actionTypes.LOAD_HEROES,
			data: [{ id: 14, name: 'Celeritas' }]
		};
		dispatcher.dispatch(action);
		expect(heroStore.getHeroes()).toEqual(action.data);
	});
	it('should register UPDATE_HERO', () => {
		const actioon = {
			type: actionTypes.UPDATE_HERO,
			data: { id: 14, name: 'Celeritas' }
		};
		dispatcher.dispatch(action);
		const updateHero = hero.heroStore.getHeroById(action.data.id);
		expect(updateHero).toEqual(action.data);
	});
});
