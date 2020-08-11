import heroStore from './heroStore'; //importo el elemento a testear
import actionTypes from '../actions/actionTypes'; //importa actionTypes porque lo necesita para testear heroStore
import dispatcher from '../appDispatcher';
import { act } from 'react-test-renderer';

describe('HeroStore', () => {
	it('should create', () => {
		expect(heroStore).toBeDefined();
	});

	it('should register LOAD_HEROES', () => {
		const action = {
			//Defino el objeto que necesito
			type: actionTypes.LOAD_HEROES,
			data: [{ id: 14, name: 'Celeritas' }]
		};
		dispatcher.dispatch(action); //Uso el dispatcher con el actType y objeto mock

		expect(heroStore.getHeroes()).toEqual(action.data); //la funcion testeada me devuelve
		//el objeto que he definido
	});

	it('should register UPDATE_HEROES', () => {
		let action = {
			//Defino el objeto que necesito
			type: actionTypes.LOAD_HEROES,
			data: [{ id: 14, name: 'Celeritas' }]
		};

		dispatcher.dispatch(action); //Uso el dispatcher con el actType y objeto mock

		action = {
			type: actionTypes.UPDATE_HERO,
			data: { id: 14, name: 'Updated Celeritas' } //Actgualizo el objeto con nombre actualizado
		};

		dispatcher.dispatch(action);

		const updateHero = heroStore.getHeroById(action.data.id);
		expect(updateHero).toEqual(action.data); //la funcion testeada me devuelve
		//el objeto que he definido, buscandolo mediante la propiedad ID
	});

	it('should register UPDATE_HEROES with invalid ID', () => {
		let action = {
			//Defino el objeto que necesito
			type: actionTypes.LOAD_HEROES,
			data: [{ id: 14, name: 'Celeritas' }]
		};
		dispatcher.dispatch(action); //Uso el dispatcher con el actType y objeto mock

		action = {
			type: actionTypes.UPDATE_HERO,
			data: { id: 25, name: 'Celeritas' } //creo nuevo action con un objeto inexistente
		};
		const updateHero = heroStore.getHeroById(action.data.id);
		expect(updateHero).not.toBeDefined(); // como el segundo ID no existe, espero que el resultado
		//sea undefined, ya que la fucion getHeroById no deberia poder encontrar nada
	});
});
