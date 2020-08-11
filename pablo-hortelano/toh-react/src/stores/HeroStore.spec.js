import heroStore from './heroStore';
import actionTypes from '../actions/actionTypes';
import dispatcher from '../appDispatcher';

describe('HeroStore', () => {
	let action;
	beforeEach(() => {
		action = {
			type: actionTypes.LOAD_HEROES,
			data: [{ id: 14, name: 'Celeritas' }]
		};
		dispatcher.dispatch(action);
	});
	it('Should create', () => {
		expect(heroStore).toBeDefined();
	});
	it('Should register LOAD_HEROES', () => {
		expect(heroStore.getHeroes()).toEqual(action.data);
	});

	it('Should register UPDATE_HERO', () => {
		action = {
			type: actionTypes.UPDATE_HERO,
			data: [{ id: 14, name: 'Updated Celeritas' }]
		};
		dispatcher.dispatch(action);
		const updateHero = heroStore.getHeroById(action.data.id);
		expect(updateHero).toEqual(action.data);
	});

	it('Should register UPDATE_HERO with INVALID ID', () => {
		action = {
			type: actionTypes.UPDATE_HERO,
			data: [{ id: 25, name: 'Celeritas' }]
		};
		dispatcher.dispatch(action);

		const updateHero = heroStore.getHeroById(action.data.id);
		expect(updateHero).not.toBeDefined();
	});
	it('Should Create new hero', () => {
		const name = 'Gilberto';
		dispatcher.dispatch({
			type: actionTypes.CREATE_HERO,
			data: { name }
		});
		const savedhero = heroStore.getHeroes().some((hero) => hero.name === name);
		expect(savedhero).toEqual(true);
	});
	it('Should Delete a Hero', () => {
		const id = 14;
		dispatcher.dispatch({
			type: actionTypes.DELETE_HERO,
			data: { id }
		});
		/* const savedhero = heroStore.getHeroes().some((hero) => hero.name === name);  */
		expect(heroStore.getHeroById(id)).not.toBeDefined();
	});
	it('Should have default case for actions', () => {
		try {
			dispatcher.dispatch({});
			expect(heroStore).toBeFalsy();
		} catch (error) {
			const message = `Action type is unknow, action.type:  undefined`;
			expect(error).toEqual(message);
		}
	});
});
