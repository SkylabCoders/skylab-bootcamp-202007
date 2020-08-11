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
			data: { id: 14, name: 'Celeritas' }
		};
		dispatcher.dispatch(action);
		const updatedHero = heroStore.getHeroById(action.data.id);
		expect(updatedHero).toEqual(action.data);
	});
	it('should register UPDATE_HERO with invalid Id', () => {
		const action = {
			type: actionTypes.UPDATE_HERO,
			data: { id: 14, name: 'Celeritas' }
		};

		dispatcher.dispatch(action);
		const updatedHero = heroStore.getHeroById(action.data.id);
		expect(updatedHero).toBeDefined();
	});
	it('should create a new hero', () => {
		const action = {
			type: actionTypes.CREATE_HERO,
			data: [{ name: 'Celeritas' }]
		};
		dispatcher.dispatch(action);

		const savedHero = heroStore.getHeroById(1);
		expect(savedHero).toEqual(action.data.name);
	});
	it('should delete a hero', () => {
		const action = {
			type: actionTypes.DELETE_HERO,
			data: { id: 14 }
		};
		dispatcher.dispatch(action);
		const deleteHero = heroStore.getHeroById(action.data.id);
		expect(heroStore.getHeroById(14)).toBeUndefined();
	});
	it('should handle default case for action types', () => {
		try {
			dispatcher.dispatch({});
			expect(heroStore).toBeFalsy();
		} catch (errorMessage) {
			const message = `the action type is unknown. action.type: undefined`;
			expect(errorMessage).toEqual(message);
		}
	});
});
