import dispatcher from '../appDispatcher';
import actionTypes from './actionTypes';
import { darkColors } from '../shared/colorMock';

export function loadDarkColors() {
	return new Promise((resolve) => {
		//leer/pedir datos
		const colors = darkColors;

		//Hacer el resolve con los datos obtenidos
		resolve(colors);
	}).then((colors) => {
		//lo que va a devolver la accion, se hace el dispatch
		dispatcher.dispatch({
			type: actionTypes.LOAD_DARK_COLORS, //actionTypes
			data: colors //lo que recibe el then
		}); //Salta pasando los datos al store (en el register)
	});
}
