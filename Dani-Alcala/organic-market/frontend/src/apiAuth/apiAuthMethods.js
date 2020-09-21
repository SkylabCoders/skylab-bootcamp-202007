import axios from 'axios';

export const authMethods = {
	signin: (username, password) => {
		return axios.post('/api/auth/signin', { username, password });
	},
	createUser: (username, password) => {
		console.log({ username, password });
		const devolucion = axios.post('/auth/signup', {
			username,
			password
		});
		console.log(devolucion);
		return devolucion;
	}
};
