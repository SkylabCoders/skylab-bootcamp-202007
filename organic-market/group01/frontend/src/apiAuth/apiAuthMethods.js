import axios from 'axios';

export const authMethods = {
	signin: (username, password) => {
		return axios.post('/api/auth/signin', { username, password });
	},
	createUser: async (username, password) => {
		console.log({ username, password });
		const devolucion = await axios.post('/api/signup', {
			username,
			password
		});
		console.log(devolucion);
		return devolucion;
	}
};
