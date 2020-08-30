import heroStore from './heroStore';
import actionTypes from '../actions/actionTypes';
import heroActions from '../actions/heroActions';
import dispatcher from '../appDispatcher';

describe('Hero Store', () => {
	it('should create', () => {
		expect(heroStore).toBeDefined();
	});

	it('should register LOAD_HEROES', () => {
		const action = {
			type: actionTypes.LOAD_HEROES,
			data: [{ id: 14, name: 'Celeritas' }]
		};

		dispatcher.dispatch(action);

		expect(heroStore.getHeroes()).toEqual(action.data);
	});

	it('should register UPDATE_HERO', () => {
		const action = {
			type: actionTypes.UPDATE_HERO,
			data: { id: 14, newId: 14, newName: 'Celeritas' }
		};

		dispatcher.dispatch(action);

		const updatedHero = heroStore.getHeroById(action.data.id);

		expect(updatedHero).toEqual(action.data);
	});
});
